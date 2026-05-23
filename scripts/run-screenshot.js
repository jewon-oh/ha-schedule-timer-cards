const { spawn } = require('child_process');
const http = require('http');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function waitForServer(port, retries = 20) {
  return new Promise((resolve, reject) => {
    const attempt = () => {
      http.get(`http://localhost:${port}/`, res => resolve()).on('error', () => {
        if (retries-- <= 0) return reject(new Error('Server did not start'));
        setTimeout(attempt, 300);
      });
    };
    attempt();
  });
}

(async () => {
  const httpServerBin = path.join(rootDir, 'node_modules/http-server/bin/http-server');
  const server = spawn('node', [httpServerBin, rootDir, '-p', '8080', '--silent'], {
    stdio: 'ignore',
    detached: false,
  });

  try {
    await waitForServer(8080);
    await new Promise((resolve, reject) => {
      const child = spawn('node', [path.join(__dirname, 'timer-screenshot.js')], { stdio: 'inherit' });
      child.on('close', code => code === 0 ? resolve() : reject(new Error(`exit code ${code}`)));
    });
  } finally {
    server.kill();
  }
})();
