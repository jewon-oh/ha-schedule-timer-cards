const t={ko:{addBlock:"새 블록 추가",startTime:"시작 시간",endTime:"종료 시간",add:"시간 블록 추가하기",delete:"삭제",cancel:"취소",save:"저장",repeat:"반복",days:["월","화","수","목","금","토","일"],daysShort:["월","화","수","목","금","토","일"],everyday:"매일",empty:"설정된 스케쥴이 없습니다.",errorEntity:"스케쥴 엔티티를 설정해야 합니다.",scheduleManager:"스케쥴 관리",placeholder:"스마트 스케쥴 카드",previewSuffix:" (미리보기)",conflictWarning:"이 요일은 기존 블록과 겹칩니다",createRoutine:"새 스케쥴 만들기",routineName:"스케쥴 이름",routineNamePlaceholder:"예: 거실 전등 스케쥴",targetDevice:"대상 기기",create:"스케쥴 생성",creating:"생성 중...",createSuccess:"스케쥴이 생성되었습니다!",createFailed:"스케쥴 생성에 실패했습니다.",createDescription:"기기를 선택하면 스케쥴과 자동화가 자동으로 생성됩니다.",orSelectExisting:"또는 기존 스케쥴을 편집기에서 선택하세요.",goToCard:"카드 편집에서 새 스케쥴을 선택해주세요.",editorWizardTitle:"새 스케쥴 만들기 (권장)",editorWizardDesc:"자동화할 기기를 선택하면 스케쥴 제어 장치와 동작 브릿지가 즉시 생성되고 이 카드에 자동으로 연동됩니다.",editorTargetDevice:"제어할 대상 기기 선택",editorCreateSuccess:"생성 및 연결 성공!",editorErrorPrefix:"오류 발생: ",editorAdvanced:"기존 스케쥴 다시 불러오기 및 추가 설정",editorScheduleEntity:"스케쥴 기기 (직접 선택)",editorCardTitle:"카드 표출 제목 (선택사항)",cardName:"스케쥴 카드",cardDescription:"스케쥴 헬퍼의 시간 블록을 편집하고, 기기를 선택하면 스케쥴을 자동 생성합니다.",deleteEverydayConfirm:"이 타임블록은 매일(월~일) 등록되어 있습니다.\n삭제하시면 모든 요일에서 일괄 삭제됩니다. 계속하시겠습니까?",deleteOneConfirm:"선택하신 요일의 스케줄을 삭제하시겠습니까?",conflictAlert:"다음 요일에 이미 겹치는 블록이 있어 저장할 수 없습니다: ",unknownDevice:"알 수 없는 기기",routineSuffix:" 스케쥴",bridgeAliasPrefix:"스케쥴 브릿지: ",bridgeDescPattern:" 스케쥴에 따라 기기를 자동 제어합니다.",activeDays:"활성 요일",activeDaysHelp:"선택한 요일들이 동일한 시간 블록 세트를 공유합니다.",atLeastOneDay:"최소 한 요일은 활성화되어 있어야 합니다.",confirmDeleteBlock:"이 시간 블록을 삭제하시겠습니까?",confirmDeleteTitle:"시간 블록 삭제",saveFailed:"저장에 실패했습니다.",blockOverlap:"다른 시간 블록과 겹쳐 추가할 수 없습니다.",notConfigured:"카드가 구성되지 않았습니다.",adminOnlyWizard:"스케쥴 자동 생성은 관리자만 가능합니다. 이미 만들어진 스케쥴을 아래에서 선택하세요.",unauthorized:"권한이 없습니다. 관리자에게 문의하세요."},en:{addBlock:"Add New Block",startTime:"Start Time",endTime:"End Time",add:"Add Time Block",delete:"Delete",cancel:"Cancel",save:"Save",repeat:"Repeat",days:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysShort:["M","T","W","T","F","S","S"],everyday:"Daily",empty:"No schedules configured.",errorEntity:"You need to define a schedule entity.",scheduleManager:"Schedule Manager",placeholder:"Smart Schedule Card",previewSuffix:" (Preview)",conflictWarning:"This day conflicts with an existing block",createRoutine:"Create New Routine",routineName:"Routine Name",routineNamePlaceholder:"e.g. Living Room Light",targetDevice:"Target Device",create:"Create Routine",creating:"Creating...",createSuccess:"Routine created successfully!",createFailed:"Failed to create routine.",createDescription:"Select a device to auto-create a schedule and automation.",orSelectExisting:"Or select an existing schedule in the editor.",goToCard:"Please select the new schedule in card settings.",editorWizardTitle:"Create New Routine (Recommended)",editorWizardDesc:"Pick a device to auto-create a schedule helper and automation bridge linked to this card.",editorTargetDevice:"Target Device",editorCreateSuccess:"Created and linked successfully!",editorErrorPrefix:"Error: ",editorAdvanced:"Advanced Configuration",editorScheduleEntity:"Schedule Entity",editorCardTitle:"Card Title (Optional)",cardName:"Schedule Card",cardDescription:"Edit schedule helper time blocks, or pick a device to auto-create one.",deleteEverydayConfirm:"This block is registered for every day (Mon–Sun).\nDeleting will remove it from all days. Continue?",deleteOneConfirm:"Delete this block from the selected day?",conflictAlert:"Cannot save — the following day(s) already have overlapping blocks: ",unknownDevice:"Unknown device",routineSuffix:" Schedule",bridgeAliasPrefix:"Schedule bridge: ",bridgeDescPattern:" — automatically controls the target device per its schedule.",activeDays:"Active days",activeDaysHelp:"Selected days share the same set of time blocks.",atLeastOneDay:"At least one day must stay active.",confirmDeleteBlock:"Delete this time block?",confirmDeleteTitle:"Delete time block",saveFailed:"Failed to save schedule.",blockOverlap:"This range overlaps an existing block.",notConfigured:"Card is not configured.",adminOnlyWizard:"Auto-creating a schedule requires admin rights. Pick an existing schedule below.",unauthorized:"Not authorized. Ask an administrator."}},e={ko:{addTitle:"+ 시간 추가",start:"시작",pause:"일시정지",resume:"계속",stop:"취소",preset5m:"+5분",preset10m:"+10분",preset30m:"+30분",presetMinus5m:"-5분",presetMinus10m:"-10분",presetMinus30m:"-30분",setDuration:"시간 설정",idleMessage:"대기 중",pausedMessage:"일시정지됨",editorTitle:"타이머 UI 설정",editorEntity:"연동된 타이머 엔티티",editorWizardTitle:"새 타이머 & 자동화 마법사",editorWizardDesc:"기기를 선택하면 타이머 헬퍼와 자동화 브릿지가 즉시 생성됩니다.",editorTargetDevice:"대상 기기 선택 (켜고 끌 기기)",editorActionType:"종료 시 동작",editorActionOff:"장치 끄기",editorActionOn:"장치 켜기",editorActionToggle:"상태 반전",editorCreateStr:"타이머 자동 생성",hoursLabel:"시간",minutesLabel:"분",secondsLabel:"초",hoursStr:"시간",minutesStr:"분",secondsStr:"초",countdownMessage:"후에 기기가 종료됩니다.",bridgeDescription:"Timer UI 카드에서 자동으로 생성한 브릿지입니다.",errorPrefix:"생성 중 오류가 발생했습니다: ",timerSuffix:" 타이머",cardName:"타이머 카드",cardDescription:"타이머 헬퍼를 제어하고, 기기를 선택하면 자동화 브릿지를 자동 생성합니다.",defaultTitle:"타이머 설정",helperFailMsg:"(안내) 타이머 헬퍼 생성 실패. 해당 HA 버전에서는 플러그인이 헬퍼를 완전 자동 생성할 수 없습니다. 수동 구성 권장.",timerBridgeAliasPrefix:"타이머 브릿지: ",syncingMessage:"동기화 중입니다...",generatedTimerLabel:" (생성된 타이머)",notConfigured:"카드가 구성되지 않았습니다.",adminOnlyWizard:"타이머 자동 생성은 관리자만 가능합니다. 이미 만들어진 타이머를 아래에서 선택하세요.",unauthorized:"권한이 없습니다. 관리자에게 문의하세요."},en:{addTitle:"+ Add Time",start:"Start",pause:"Pause",resume:"Resume",stop:"Cancel",preset5m:"+5m",preset10m:"+10m",preset30m:"+30m",presetMinus5m:"-5m",presetMinus10m:"-10m",presetMinus30m:"-30m",setDuration:"Set Duration",idleMessage:"Idle",pausedMessage:"Paused",editorTitle:"Timer UI Config",editorEntity:"Linked Timer Entity",editorWizardTitle:"New Timer Wizard",editorWizardDesc:"Select a target device to auto-create timer and automation.",editorTargetDevice:"Select Target Device",editorActionType:"Action on finish",editorActionOff:"Turn Off",editorActionOn:"Turn On",editorActionToggle:"Toggle",editorCreateStr:"Auto Create Timer",hoursLabel:"Hours",minutesLabel:"Minutes",secondsLabel:"Seconds",hoursStr:"h",minutesStr:"m",secondsStr:"s",countdownMessage:"until the device turns off.",bridgeDescription:"Bridge automatically created by Timer UI card.",errorPrefix:"Error while creating: ",timerSuffix:" Timer",cardName:"Timer Card",cardDescription:"Control timer helpers, or pick a device to auto-create an automation bridge.",defaultTitle:"Timer Settings",helperFailMsg:"(Notice) Timer helper auto-create failed. This HA version does not allow plugins to create helpers automatically — please configure manually.",timerBridgeAliasPrefix:"Timer bridge: ",syncingMessage:"Syncing...",generatedTimerLabel:" (generated)",notConfigured:"Card is not configured.",adminOnlyWizard:"Auto-creating a timer requires admin rights. Pick an existing timer below.",unauthorized:"Not authorized. Ask an administrator."}};function i(){return("undefined"!=typeof navigator&&navigator.language||"en").startsWith("ko")?"ko":"en"}const s=globalThis,o=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new a(i,t,r)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:d,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:p,getOwnPropertySymbols:m,getPrototypeOf:g}=Object,f=globalThis,_=f.trustedTypes,b=_?_.emptyScript:"",v=f.reactiveElementPolyfillSupport,y=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!d(t,e),w={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...p(t),...m(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(o)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),o=s.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:x).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=s;const r=o.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const r=this.constructor;if(!1===s&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??$)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[y("elementProperties")]=new Map,k[y("finalized")]=new Map,v?.({ReactiveElement:k}),(f.reactiveElementVersions??=[]).push("2.1.2");const S=globalThis,T=t=>t,A=S.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+D,z=`<${M}>`,P=document,O=()=>P.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,U="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,L=/>/g,B=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,j=/"/g,F=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),Y=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),J=new WeakMap,X=P.createTreeWalker(P,129);function K(t,e){if(!I(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=R;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===R?"!--"===c[1]?n=N:void 0!==c[1]?n=L:void 0!==c[2]?(F.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=B):void 0!==c[3]&&(n=B):n===B?">"===c[0]?(n=o??R,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?B:'"'===c[3]?j:W):n===j||n===W?n=B:n===N||n===L?n=R:(n=B,o=void 0);const h=n===B&&t[e+1].startsWith("/>")?" ":"";r+=n===R?i+z:l>=0?(s.push(a),i.slice(0,l)+E+i.slice(l)+D+h):i+D+(-2===l?e:h)}return[K(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[c,l]=Z(t,e);if(this.el=G.createElement(c,i),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=X.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=l[r++],i=s.getAttribute(t).split(D),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?st:"?"===n[1]?ot:"@"===n[1]?rt:it}),s.removeAttribute(t)}else t.startsWith(D)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(F.test(s.tagName)){const t=s.textContent.split(D),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),X.nextNode(),a.push({type:2,index:++o});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===M)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(D,t+1));)a.push({type:7,index:o}),t+=D.length-1}o++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===Y)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=H(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??P).importNode(e,!0);X.currentNode=s;let o=X.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new et(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new nt(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=X.nextNode(),r++)}return X.currentNode=P,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),H(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==Y&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>I(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new G(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new et(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=T(t).nextSibling;T(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=Q(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==Y,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Q(this,s[i+n],e,n),a===Y&&(a=this._$AH[n]),r||=!H(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class ot extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class rt extends it{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??V)===Y)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const at=S.litHtmlPolyfillSupport;at?.(G,et),(S.litHtmlVersions??=[]).push("3.3.3");const ct=globalThis;class lt extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new et(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}lt._$litElement$=!0,lt.finalized=!0,ct.litElementHydrateSupport?.({LitElement:lt});const dt=ct.litElementPolyfillSupport;dt?.({LitElement:lt}),(ct.litElementVersions??=[]).push("4.2.2");class ht extends lt{static{this.properties={hass:{},_config:{},_isCreating:{type:Boolean},_createResult:{type:Object}}}setConfig(t){this._config=t}configChanged(t){const e=new Event("config-changed",{bubbles:!0,composed:!0});e.detail={config:t},this.dispatchEvent(e)}async _onAutoCreateDevicePicker(t){const e=t.detail.value;if(this._isCreating||!this.hass||!e)return;const i=this.hass.states[e],s=`${i?.attributes?.friendly_name||e.split(".")[1]||this._t("unknownDevice")}${this._t("routineSuffix")}`;this._isCreating=!0,this._createResult=null,this.requestUpdate();try{console.log("[schedule-ui] Editor Auto createRoutine - name:",s,"target:",e);const t={type:"schedule/create",name:s,icon:"mdi:calendar-clock"},i=await this.hass.callWS(t);console.log("[schedule-ui] schedule/create SUCCESS:",i);const o=i.id,r=`schedule.${o}`,n=`bridge_${o}`,a={alias:`${this._t("bridgeAliasPrefix")}${s}`,description:`[schedule-ui] ${s}${this._t("bridgeDescPattern")}`,use_blueprint:{path:"jewon-oh/schedule-bridge-blueprint.yaml",input:{schedule_helper:r,target_device:e}}};await this.hass.callApi("POST",`config/automation/config/${n}`,a),console.log("[schedule-ui] automation create SUCCESS:",n),this._createResult={success:!0,entityId:r},this.configChanged({...this._config,entity:r})}catch(t){console.error("[schedule-ui] createRoutine FAILED:",t),this._createResult={success:!1,message:t.message||JSON.stringify(t)}}finally{this._isCreating=!1,this.requestUpdate()}}_t(e){const i=this.hass?.language?.startsWith("ko")?"ko":"en";return t[i][e]||t.en[e]}render(){if(!this.hass||!this._config)return q``;const t=!!this.hass.user?.is_admin;return q`
      <div class="card-config">

        ${t?q`
          <div class="wizard-section">
            <div style="font-weight: 600; color: var(--primary-color); display: flex; align-items: center; gap: 8px;">
              <ha-icon icon="mdi:magic-staff"></ha-icon>
              <span>${this._t("editorWizardTitle")}</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--secondary-text-color); margin: 8px 0 16px 0; line-height: 1.4;">
              ${this._t("editorWizardDesc")}
            </p>

            ${this._isCreating?q`
              <div style="text-align: center; padding: 20px; color: var(--primary-color);">
                <ha-icon icon="mdi:loading" class="spin"></ha-icon>
                <span style="margin-left: 8px;">${this._t("creating")}</span>
              </div>
            `:q`
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:["switch","light","fan","climate","cover"]}}}
                .value=${""}
                .required=${!1}
                .label=${this._t("editorTargetDevice")}
                @value-changed=${this._onAutoCreateDevicePicker}
              ></ha-selector>
            `}

            ${this._createResult?.success?q`
              <div style="margin-top: 12px; color: var(--success-color, #4caf50); font-size: 0.9rem; display: flex; align-items: center; gap: 6px;">
                <ha-icon icon="mdi:check-circle" style="--mdc-icon-size: 18px;"></ha-icon>
                <span>${this._createResult.entityId} ${this._t("editorCreateSuccess")}</span>
              </div>
            `:""}
            ${this._createResult&&!this._createResult.success?q`
              <div style="margin-top: 12px; color: var(--error-color, #f44336); font-size: 0.9rem;">
                ${this._t("editorErrorPrefix")}${this._createResult.message}
              </div>
            `:""}
          </div>

          <div style="height: 1px; background: var(--divider-color, rgba(100,100,100,0.2)); margin: 24px 0;"></div>
        `:q`
          <div style="padding: 12px 14px; background: rgba(255, 152, 0, 0.08); border: 1px solid rgba(255, 152, 0, 0.25); border-radius: 8px; font-size: 0.85rem; color: var(--secondary-text-color); margin-bottom: 16px; display: flex; gap: 10px; align-items: flex-start;">
            <ha-icon icon="mdi:shield-account" style="--mdc-icon-size: 18px; color: #ff9800; flex-shrink: 0;"></ha-icon>
            <span>${this._t("adminOnlyWizard")}</span>
          </div>
        `}

        <div style="font-weight: 600; margin-bottom: 16px; color: var(--primary-text-color);">
          ${this._t("editorAdvanced")}
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{entity:{domain:"schedule"}}}
          .value=${this._config.entity||""}
          .required=${!1}
          .label=${this._t("editorScheduleEntity")}
          @value-changed=${this._entityChanged}
        ></ha-selector>

        <br/>

        <ha-textfield
          label="${this._t("editorCardTitle")}"
          .value=${this._config.title||""}
          @input=${this._titleChanged}
          style="width: 100%;"
        ></ha-textfield>
      </div>
    `}_entityChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;this._config.entity!==e&&this.configChanged({...this._config,entity:e})}_titleChanged(t){if(!this._config||!this.hass)return;const e=t.target.value;if(this._config.title!==e)if(""===e){const t={...this._config};delete t.title,this.configChanged(t)}else this.configChanged({...this._config,title:e})}static{this.styles=c`
    .card-config {
      display: flex;
      flex-direction: column;
    }
    .wizard-section {
      background: var(--secondary-background-color, rgba(0,0,0,0.05));
      padding: 16px;
      border-radius: 8px;
    }
    .spin {
      animation: spin 1.5s linear infinite;
    }
    @keyframes spin {
      100% { transform: rotate(360deg); }
    }
  `}}customElements.define("ha-custom-schedule-card-editor",ht);class ut extends lt{static{this.properties={hass:{},_config:{state:!0},_selectedEntity:{state:!0},_selectedAction:{state:!0},_isLoading:{state:!0},_creationError:{state:!0}}}setConfig(t){this._config=t,this._selectedAction=t.action_type||"turn_off"}get _lang(){return this.hass?.language&&this.hass.language.includes("ko")?"ko":"en"}_t(t){return e[this._lang]?.[t]??e.en[t]}async _onTargetEntityPicked(t){const e=t.detail.value;if(e&&e!==this._selectedEntity){this._selectedEntity=e,this._isLoading=!0,this._creationError=null;try{const t=this.hass.states[e],i=t?.attributes?.friendly_name||e;let s=null,o=null;try{const t={type:"timer/create",name:`${i}${this._t("timerSuffix")}`,icon:"mdi:timer-sand"};s=(await this.hass.callWS(t)).id,o=`timer.${s}`,console.log("[schedule-ui] timer helper create SUCCESS:",o)}catch(t){return console.warn("Timer helper auto-creation failed via config/timer/create. Error:",t),this._creationError=this._t("helperFailMsg"),void(this._isLoading=!1)}const r=this._selectedAction||"turn_off",n=`timer_bridge_${s}`,a=`${this._t("timerBridgeAliasPrefix")}${i}`;console.log("[schedule-ui] Creating timer bridge (blueprint):",n,"for target:",e);try{const t=(await this.hass.callWS({type:"config/entity_registry/list"})).find(t=>t.entity_id===`automation.${n}`);t&&await this.hass.callWS({type:"config/entity_registry/remove",entity_id:t.entity_id})}catch(t){}const c={alias:a,description:this._t("bridgeDescription"),use_blueprint:{path:"jewon-oh/timer-bridge-blueprint.yaml",input:{timer_helper:o,target_device:e,action_type:r}}};await this.hass.callApi("POST",`config/automation/config/${n}`,c),console.log("[schedule-ui] timer automation bridge (blueprint) create SUCCESS:",n),this._config={...this._config,entity:o,title:`${i}${this._t("timerSuffix")}`},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}catch(t){console.error(t),this._creationError=`${this._t("errorPrefix")}${t.message}`}finally{this._isLoading=!1}}}_onActionChange(t){this._selectedAction=t.target.value}render(){if(!this.hass||!this._config)return q``;const t=!!this.hass.user?.is_admin;return q`
      <div class="card-config">
        ${t?q`
          <div class="wizard-header">
            <ha-icon icon="mdi:magic-staff"></ha-icon>
            <div>
              <h3>${this._t("editorWizardTitle")}</h3>
              <p>${this._t("editorWizardDesc")}</p>
            </div>
          </div>

          <div class="wizard-fields">
            <div class="wizard-field">
              <label>${this._t("editorTargetDevice")}</label>
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{domain:["light","switch","fan","climate","media_player"]}}}
                .value=${this._selectedEntity}
                @value-changed=${this._onTargetEntityPicked}
              ></ha-selector>
            </div>

            <div class="wizard-field">
              <label>${this._t("editorActionType")}</label>
              <select class="custom-select" .value="${this._selectedAction}" @change="${this._onActionChange}">
                <option value="turn_off">${this._t("editorActionOff")}</option>
                <option value="turn_on">${this._t("editorActionOn")}</option>
                <option value="toggle">${this._t("editorActionToggle")}</option>
              </select>
            </div>
          </div>

          ${this._isLoading?q`
            <div class="status-msg info">
              <ha-icon icon="mdi:loading" class="spin"></ha-icon>
              ${this._t("syncingMessage")}
            </div>
          `:""}

          ${this._creationError?q`
            <div class="status-msg error">
              <ha-icon icon="mdi:alert-circle"></ha-icon>
              ${this._creationError}
            </div>
          `:""}
        `:q`
          <div class="admin-notice">
            <ha-icon icon="mdi:shield-account"></ha-icon>
            <span>${this._t("adminOnlyWizard")}</span>
          </div>
        `}

        <hr class="divider" />
        
        <div class="wizard-field">
          <label>${this._t("editorEntity")}${this._t("generatedTimerLabel")}</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entity}
            domain="timer"
            .configValue=${"entity"}
            @value-changed=${t=>{this._config={...this._config,entity:t.detail.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
          ></ha-entity-picker>
        </div>
      </div>
    `}static{this.styles=c`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .wizard-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      background: rgba(3, 169, 244, 0.1);
      border: 1px solid rgba(3, 169, 244, 0.2);
      border-radius: 8px;
    }
    .wizard-header ha-icon {
      color: #03a9f4;
      --mdc-icon-size: 32px;
    }
    .wizard-header h3 {
      margin: 0 0 4px 0;
      color: var(--primary-text-color);
      font-size: 1rem;
    }
    .wizard-header p {
      margin: 0;
      color: var(--secondary-text-color);
      font-size: 0.85rem;
      line-height: 1.4;
    }
    .wizard-fields {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 20px;
    }
    .wizard-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .wizard-field label {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      font-weight: 500;
    }
    .custom-select {
      width: 100%;
      height: 48px;
      background: var(--card-background-color, transparent);
      border: 1px solid var(--divider-color, rgba(128, 128, 128, 0.3));
      border-radius: 4px;
      color: var(--primary-text-color);
      padding: 0 12px;
      font-size: 1rem;
      outline: none;
    }
    .divider {
      border: 0;
      height: 1px;
      background: var(--divider-color, rgba(128, 128, 128, 0.3));
      margin: 8px 0;
    }
    .status-msg {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px;
      border-radius: 8px;
      font-size: 0.9rem;
    }
    .status-msg.info {
      background: rgba(3, 169, 244, 0.1);
      color: #03a9f4;
    }
    .status-msg.error {
      background: rgba(244, 67, 54, 0.1);
      color: #f44336;
    }
    .admin-notice {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      padding: 12px 14px;
      background: rgba(255, 152, 0, 0.08);
      border: 1px solid rgba(255, 152, 0, 0.25);
      border-radius: 8px;
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      margin-bottom: 16px;
    }
    .admin-notice ha-icon {
      --mdc-icon-size: 18px;
      color: #ff9800;
      flex-shrink: 0;
    }
    .spin {
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      100% { transform: rotate(360deg); }
    }
  `}}customElements.define("ha-custom-timer-card-editor",ut);const pt=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];class mt extends lt{static{this.properties={_config:{state:!0},_hass:{state:!1},_scheduleData:{state:!0},_activeDays:{state:!0},_blocks:{state:!0},_showCreateWizard:{state:!0},_isCreating:{state:!0},_createResult:{state:!0},_selectedBlockIdx:{state:!0},_resizingBlockIdx:{state:!0},_resizingEdge:{state:!0},_toast:{state:!0},_confirm:{state:!0},_isEditing:{state:!0}}}constructor(){super(),this._scheduleData=null;const t=0===(new Date).getDay()?6:(new Date).getDay()-1;this._activeDays=[t],this._blocks=[],this._showCreateWizard=!1,this._isCreating=!1,this._createResult=null,this._lang="en",this._isEditing=!1,this._selectedBlockIdx=null,this._resizingBlockIdx=null,this._resizingEdge=null,this._toast=null,this._confirm=null,this._toastTimer=null,this._saveTimer=null,this._tapStart=null}_scheduleSaveDebounced(t=400){this._saveTimer&&clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>{this._saveTimer=null,this._updateSchedule()},t)}connectedCallback(){super.connectedCallback(),this._onDocPointerDown=t=>{if(null===this._selectedBlockIdx)return;if(null!==this._resizingBlockIdx)return;if(this._confirm||this._isEditing)return;(t.composedPath?t.composedPath():[]).some(t=>{const e=t?.classList;return!!e&&(e.contains("editor-block")||e.contains("block-handle")||e.contains("block-delete")||e.contains("block-time-pill")||e.contains("confirm-overlay")||e.contains("confirm-card")||e.contains("confirm-actions")||e.contains("danger-btn")||e.contains("ghost-btn"))})||(this._selectedBlockIdx=null)},document.addEventListener("pointerdown",this._onDocPointerDown,!0)}disconnectedCallback(){super.disconnectedCallback(),this._onDocPointerDown&&document.removeEventListener("pointerdown",this._onDocPointerDown,!0),this._saveTimer&&clearTimeout(this._saveTimer),this._toastTimer&&clearTimeout(this._toastTimer)}_showToast(t,e=3e3){this._toastTimer&&clearTimeout(this._toastTimer),this._toast={message:t},this._toastTimer=setTimeout(()=>{this._toast=null,this._toastTimer=null},e)}_openConfirm(t,e){this._confirm={message:t,onConfirm:e}}_closeConfirm(){this._confirm=null}setConfig(t){this._config=t,this._hass&&this._loadSchedule()}set hass(t){const e=this._hass;this._hass=t;let i=!e;if(t&&t.language){const e=t.language.startsWith("ko")?"ko":"en";this._lang!==e&&(this._lang=e,i=!0)}i&&this.requestUpdate(),!e&&t&&this._config&&this._loadSchedule()}_t(e){return t[this._lang][e]||t.en[e]}async _loadSchedule(){if(this._hass&&this._config.entity)try{const t=await this._hass.callWS({type:"schedule/list"}),e=this._config.entity,i=e.split(".")[1];let s=i;try{const t=await this._hass.callWS({type:"config/entity_registry/get",entity_id:e});t&&t.unique_id&&(s=t.unique_id,console.log("[schedule-ui] entity registry → unique_id:",s))}catch(t){console.warn("[schedule-ui] entity registry 조회 실패, slug 사용:",i,t)}let o=t.find(t=>t.id===s);if(o||(o=t.find(t=>t.id===i)),!o){const i=this._hass.states?.[e],s=i?.attributes?.friendly_name;s&&(o=t.find(t=>t.name===s))}console.log("[schedule-ui] loadSchedule - entity:",e,"storageId:",s,"matched:",o?o.id:"NONE"),!o&&t.length>0&&console.warn("[schedule-ui] 매칭 실패! available ids:",t.map(t=>`${t.id}(${t.name})`)),o&&(this._scheduleData=o,this._hydrateFromSchedule(o))}catch(t){console.error("[schedule-ui] Failed to load schedules",t)}}_blocksOverlap(t,e){return t.from<e.to&&e.from<t.to}_mergeIntervals(t){const e=[...t].sort((t,e)=>t.from.localeCompare(e.from)),i=[];for(const t of e){if(0===i.length){i.push({...t});continue}const e=i[i.length-1];t.from<=e.to?t.to>e.to&&(e.to=t.to):i.push({...t})}return i}_hydrateFromSchedule(t){const e=[],i=new Set;for(let s=0;s<pt.length;s++){const o=t[pt[s]]||[];o.length>0&&i.add(s);for(const t of o)e.push({from:t.from,to:t.to})}const s=this._mergeIntervals(e);if(this._blocks=s,0===i.size){const t=0===(new Date).getDay()?6:(new Date).getDay()-1;this._activeDays=[t]}else this._activeDays=[...i].sort((t,e)=>t-e);const o=new Set(e.map(t=>`${t.from}~${t.to}`)).size;o>s.length&&console.warn("[schedule-ui] hydrate: merged overlapping blocks",{rawUnique:o,merged:s.length})}async _updateSchedule(){if(this._hass&&this._scheduleData){this._isEditing=!0;try{const t=this._scheduleData.id,e={name:this._scheduleData.name};this._scheduleData.icon&&(e.icon=this._scheduleData.icon);const i=[...this._blocks].sort((t,e)=>t.from.localeCompare(e.from)),s=new Set(this._activeDays);for(let t=0;t<pt.length;t++)e[pt[t]]=s.has(t)?i:[];console.log("[schedule-ui] updateSchedule - schedule_id:",t,"activeDays:",this._activeDays,"blocks:",i),await this._hass.callWS({type:"schedule/update",schedule_id:t,...e}),await this._loadSchedule()}catch(t){console.error("[schedule-ui] updateSchedule FAILED:",t);const e=t?.code||t?.error?.code,i=String(t?.message||t||"").toLowerCase(),s="unauthorized"===e||i.includes("unauthorized")||i.includes("not allowed");this._showToast(s?this._t("unauthorized"):`${this._t("saveFailed")} ${t?.message||t}`),await this._loadSchedule()}finally{this._isEditing=!1}}}_deleteBlock(t){!this._isEditing&&this._scheduleData&&this._config?.entity&&(t<0||t>=this._blocks.length||this._openConfirm(this._t("confirmDeleteBlock"),async()=>{this._closeConfirm(),this._blocks=this._blocks.filter((e,i)=>i!==t),this._selectedBlockIdx=null,await this._updateSchedule()}))}_yToMinutes(t,e){const i=t.getBoundingClientRect(),s=Math.max(0,Math.min(1,(e-i.top)/i.height)),o=15*Math.round(1440*s/15);return Math.max(0,Math.min(1440,o))}_minutesToTimeStr(t){const e=Math.max(0,Math.min(1439,t)),i=Math.floor(e/60),s=e%60;return`${String(i).padStart(2,"0")}:${String(s).padStart(2,"0")}:00`}_onColumnPointerDown(t){(t.composedPath?t.composedPath():[t.target]).some(t=>{const e=t?.classList;return!!e&&(e.contains("editor-block")||e.contains("block-handle")||e.contains("block-delete")||e.contains("block-time-pill"))})?this._tapStart=null:this._tapStart={x:t.clientX,y:t.clientY}}static{this._TAP_SLOP=8}async _onColumnClick(t){if(this._isEditing)return;if((t.composedPath?t.composedPath():[t.target]).some(t=>{const e=t?.classList;return!!e&&(e.contains("editor-block")||e.contains("block-handle")||e.contains("block-delete")||e.contains("block-time-pill"))}))return;const e=this._tapStart;if(this._tapStart=null,!e)return;const i=mt._TAP_SLOP;if(Math.abs(t.clientX-e.x)>i||Math.abs(t.clientY-e.y)>i)return;const s=t.currentTarget,o=this._yToMinutes(s,t.clientY),r=[...this._blocks].sort((t,e)=>t.from.localeCompare(e.from)),n=r.map(t=>this._timeToMinutes(t.to)).filter(t=>t<=o).reduce((t,e)=>Math.max(t,e),0),a=r.map(t=>this._timeToMinutes(t.from)).filter(t=>t>o).reduce((t,e)=>Math.min(t,e),1440);if(o<n)return;const c=Math.max(n,o),l=Math.min(a,c+60);if(l-c<15)return void this._showToast(this._t("blockOverlap"));const d={from:this._minutesToTimeStr(c),to:this._minutesToTimeStr(l)},h=[...this._blocks,d].sort((t,e)=>t.from.localeCompare(e.from));this._blocks=h,this._selectedBlockIdx=h.findIndex(t=>t.from===d.from),await this._updateSchedule()}_selectBlock(t,e){t.stopPropagation(),this._selectedBlockIdx=this._selectedBlockIdx===e?null:e}_onSelectedDeleteClick(t,e){t.stopPropagation(),this._deleteBlock(e)}_onHandlePointerDown(t,e,i){if(t.stopPropagation(),!this._isEditing){try{t.currentTarget.setPointerCapture(t.pointerId)}catch(t){}this._resizingBlockIdx=e,this._resizingEdge=i}}_onHandlePointerMove(t,e,i){if(this._resizingBlockIdx!==e||this._resizingEdge!==i)return;const s=t.currentTarget.closest(".editor-column");if(!s)return;const o=this._blocks[e];if(!o)return;const r=this._yToMinutes(s,t.clientY),n=this._timeToMinutes(o.from),a=this._timeToMinutes(o.to),c=this._blocks.filter((t,i)=>i!==e);let l=n,d=a;if("top"===i){const t=c.map(t=>this._timeToMinutes(t.to)).filter(t=>t<=a).reduce((t,e)=>Math.max(t,e),0);l=Math.max(t,Math.min(r,a-15))}else{const t=c.map(t=>this._timeToMinutes(t.from)).filter(t=>t>=n).reduce((t,e)=>Math.min(t,e),1440);d=Math.min(t,Math.max(r,n+15))}l===n&&d===a||(this._blocks=this._blocks.map((t,i)=>i===e?{from:this._minutesToTimeStr(l),to:this._minutesToTimeStr(d)}:t))}async _onHandlePointerUp(t,e,i){if(this._resizingBlockIdx===e&&this._resizingEdge===i){try{t.currentTarget.releasePointerCapture(t.pointerId)}catch(t){}this._resizingBlockIdx=null,this._resizingEdge=null,await this._updateSchedule()}}_overlapsExisting(t,e,i=-1){return this._blocks.some((s,o)=>{if(o===i)return!1;const r=this._timeToMinutes(s.from),n=this._timeToMinutes(s.to);return t<n&&e>r})}_toggleActiveDay(t){const e=this._activeDays.includes(t)?this._activeDays.filter(e=>e!==t):[...this._activeDays,t].sort((t,e)=>t-e);0!==e.length?(this._activeDays=e,this._scheduleSaveDebounced()):this._showToast(this._t("atLeastOneDay"))}_formatTime(t){if(!t)return"";let[e,i]=t.split(":"),s=new Date;return s.setHours(parseInt(e)),s.setMinutes(parseInt(i)),new Intl.DateTimeFormat(this._lang,{hour:"numeric",minute:"numeric",hour12:!0}).format(s)}_timeToMinutes(t){if(!t)return 0;const e=t.split(":");return 60*parseInt(e[0])+parseInt(e[1])}render(){if(!this._config)return q`<ha-card><div class="error">${this._t("notConfigured")}</div></ha-card>`;if(!this._hass)return q`
        <ha-card>
          <div class="card-header">
            <div class="name">${this._config.title||this._t("scheduleManager")}</div>
            <div class="header-right">
              <ha-icon icon="mdi:calendar-clock"></ha-icon>
            </div>
          </div>
          <div class="card-content">
            <div class="empty-state">
              <ha-icon icon="mdi:calendar-plus" style="--mdc-icon-size: 48px; opacity: 0.4; margin-bottom: 12px;"></ha-icon>
              <p style="margin: 0; color: var(--secondary-text-color, #a0a0a0);">${this._t("placeholder")}</p>
            </div>
          </div>
        </ha-card>
      `;let t=!1,e=this._scheduleData?.name,i=this._scheduleData?.icon,s=this._blocks,o=this._activeDays;this._config.entity||(t=!0,e=this._t("scheduleManager")+this._t("previewSuffix"),i="mdi:calendar-star",s=[{from:"09:00:00",to:"18:00:00"}],o=[0,1,2,3,4]);const r=this._config.title||e||this._t("scheduleManager"),n=1440,a=new Date,c=(a.getDay()+6)%7,l=o.includes(c),d=(60*a.getHours()+a.getMinutes())/n*100,h=[...s].sort((t,e)=>t.from.localeCompare(e.from));return q`
      <ha-card class="${t?"is-dummy":""}">
        ${t?q`<div class="dummy-badge">${this._t("previewSuffix").trim()}</div>`:""}

        <div class="card-header">
          <div class="name">${r}</div>
          <div class="header-right">
            <ha-icon icon="${i||"mdi:calendar-clock"}"></ha-icon>
          </div>
        </div>

        <div class="card-content">
          <div class="day-editor">
            <div class="day-editor-grid">
              <div class="hour-labels-col" aria-hidden="true">
                ${Array.from({length:25},(t,e)=>q`<span>${e}</span>`)}
              </div>
              <div class="editor-column"
                   role="application"
                   aria-label="${this._t("scheduleManager")}"
                   @pointerdown=${this._onColumnPointerDown}
                   @pointercancel=${()=>{this._tapStart=null}}
                   @click=${this._onColumnClick}>
                ${Array.from({length:24},(t,e)=>q`
                  <div class="hour-gridline" style="top: ${e/24*100}%;"></div>
                `)}
                ${h.map((t,e)=>{const i=this._timeToMinutes(t.from),s=this._timeToMinutes(t.to),o=i/n*100,r=(s-i)/n*100,a=this._selectedBlockIdx===e;return q`
                    <button type="button"
                            class="editor-block ${a?"selected":""}"
                            style="top: ${o}%; height: ${Math.max(r,.5)}%;"
                            title="${this._formatTime(t.from)} ~ ${this._formatTime(t.to)}"
                            aria-label="${this._formatTime(t.from)} – ${this._formatTime(t.to)}"
                            @click=${t=>this._selectBlock(t,e)}
                            @pointerdown=${t=>t.stopPropagation()}>
                      ${a?q`
                        <span class="block-time-pill">
                          ${t.from.slice(0,5)}~${t.to.slice(0,5)}
                        </span>
                        <span class="block-handle handle-top"
                              aria-label="${this._t("startTime")}"
                              @pointerdown=${t=>this._onHandlePointerDown(t,e,"top")}
                              @pointermove=${t=>this._onHandlePointerMove(t,e,"top")}
                              @pointerup=${t=>this._onHandlePointerUp(t,e,"top")}
                              @pointercancel=${t=>this._onHandlePointerUp(t,e,"top")}></span>
                        <span class="block-handle handle-bottom"
                              aria-label="${this._t("endTime")}"
                              @pointerdown=${t=>this._onHandlePointerDown(t,e,"bottom")}
                              @pointermove=${t=>this._onHandlePointerMove(t,e,"bottom")}
                              @pointerup=${t=>this._onHandlePointerUp(t,e,"bottom")}
                              @pointercancel=${t=>this._onHandlePointerUp(t,e,"bottom")}></span>
                        <button type="button"
                                class="block-delete"
                                aria-label="${this._t("delete")}"
                                title="${this._t("delete")}"
                                @click=${t=>this._onSelectedDeleteClick(t,e)}>
                          <span aria-hidden="true">−</span>
                        </button>
                      `:""}
                    </button>
                  `})}
                ${l?q`<div class="now-line" style="top: ${d}%;"><span class="now-line-label">${this._minutesToTimeStr(60*a.getHours()+a.getMinutes()).slice(0,5)}</span></div>`:""}
                ${0===h.length?q`
                  <div class="timeline-empty-hint">${this._t("empty")}</div>
                `:""}
              </div>
            </div>
          </div>

          <div class="day-switcher" role="group" aria-label="${this._t("activeDays")}">
            ${pt.map((e,i)=>{const s=o.includes(i);return q`
                <button type="button"
                        class="day-pill ${s?"selected":""}"
                        aria-pressed="${s}"
                        ?disabled=${t}
                        @click=${()=>this._toggleActiveDay(i)}>
                  ${this._t("daysShort")[i]}
                </button>
              `})}
          </div>
          <div class="active-days-help">${this._t("activeDaysHelp")}</div>
        </div>

        ${this._toast?q`
          <div class="toast" role="status" aria-live="polite">${this._toast.message}</div>
        `:""}

        ${this._confirm?q`
          <div class="confirm-overlay" @click=${this._closeConfirm}>
            <div class="confirm-card" role="alertdialog" aria-modal="true" @click=${t=>t.stopPropagation()}>
              <div class="confirm-title">${this._t("confirmDeleteTitle")}</div>
              <div class="confirm-body">${this._confirm.message}</div>
              <div class="confirm-actions">
                <button type="button" class="ghost-btn" @click=${this._closeConfirm}>${this._t("cancel")}</button>
                <button type="button" class="danger-btn" @click=${this._confirm.onConfirm}>${this._t("delete")}</button>
              </div>
            </div>
          </div>
        `:""}
      </ha-card>
    `}static{this.styles=c`
    :host {
      display: block;
      --custom-primary: var(--primary-color, #03a9f4);
      --custom-bg: var(--card-background-color, rgba(255, 255, 255, 0.05));
      --custom-border: var(--divider-color, rgba(255, 255, 255, 0.1));
      --custom-text: var(--primary-text-color, #ffffff);
      --custom-secondary: var(--secondary-text-color, #a0a0a0);
      --custom-danger: var(--error-color, #f44336);
      --custom-active-bg: rgba(3, 169, 244, 0.15);
      --custom-success: #4caf50;
    }

    ha-card {
      background: var(--custom-bg);
      border-radius: var(--ha-card-border-radius, 12px);
      border: 1px solid var(--custom-border);
      overflow: hidden;
      font-family: var(--paper-font-body1_-_font-family, system-ui, -apple-system, sans-serif);
      color: var(--custom-text);
      position: relative;
    }

    .card-header {
      padding: 12px 16px 4px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-header .name {
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--primary-text-color, #ffffff);
      letter-spacing: 0.1px;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header-right ha-icon {
      color: var(--custom-primary);
      --mdc-icon-size: 20px;
    }

    h2 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .card-content {
      padding: 8px 16px 14px 16px;
      position: relative;
    }

    /* ── 데이 에디터 (단일 컬럼) ── */
    .day-editor {
      margin-bottom: 8px;
      /* secondary-background-color is HA's theme-aware "subtly different
         from the card" tone. On dark themes it darkens slightly, on light
         themes it lightens slightly — works both directions. The previous
         rgba(255,255,255,0.02) only registered on dark backgrounds. */
      background: var(--secondary-background-color, rgba(127,127,127,0.06));
      border-radius: 12px;
      padding: 8px 8px;
    }

    .day-editor-grid {
      display: flex;
      gap: 8px;
      /* HA sections 레이아웃에서 그리드 칸 수가 바뀔 때 자연스럽게 따라간다.
         min-height는 12개 행을 최소한 읽을 수 있는 크기, max-height는 큰 화면에서
         과도하게 길어지지 않도록. CSS 변수로 노출해 카드 옵션·user style로 조절 가능. */
      height: var(--schedule-card-timeline-height, clamp(420px, 60vh, 720px));
    }

    .hour-labels-col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-shrink: 0;
      width: 24px;
      text-align: right;
      padding-right: 4px;
    }

    .hour-labels-col span {
      font-size: 0.7rem;
      color: var(--custom-secondary);
      /* Was opacity 0.55 — fine on a dark card where secondary-text-color
         is already near-white, but on a light theme the secondary text is
         already a 60% black and 0.55 made the hour numbers unreadable. */
      opacity: 0.85;
      line-height: 1;
      transform: translateY(-50%);
    }

    .hour-labels-col span:first-child { transform: translateY(0); }
    .hour-labels-col span:last-child { transform: translateY(-100%); }

    .editor-column {
      position: relative;
      flex: 1;
      /* Same reasoning as .day-editor — theme-aware neutral instead of
         dark-only rgba(255,255,255,0.02) / 0.06. */
      background: var(--card-background-color, rgba(127,127,127,0.04));
      border-radius: 6px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.18));
      /* overflow: visible — 핸들·삭제 버튼·time pill은 의도적으로 블록 모서리
         바깥에 그려진다. hidden을 쓰면 모서리에서 잘려 사용자 메시지처럼
         "뱃지가 프레임보다 아래에 렌더링"되는 것처럼 보인다. 블록 자체는
         _yToMinutes()가 0–1440으로 클램프하므로 컬럼 밖으로 나갈 일 없음. */
      overflow: visible;
      cursor: pointer;
      /* v1.4.5: 모바일에서 페이지 스크롤이 카드 위에서 막히던 문제 해결.
         touch-action:none 은 드래그-생성을 위해 필요했지만 이제 탭으로 생성하므로
         스크롤 제스처를 브라우저에 양보. 핸들은 자체적으로 touch-action:none. */
      touch-action: manipulation;
      user-select: none;
    }

    .hour-gridline {
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      /* Divider color follows HA's theme. The old white-with-alpha line
         was invisible on light themes. */
      background: var(--divider-color, rgba(127,127,127,0.22));
      pointer-events: none;
    }

    /* .editor-block (rendered as <button>) — button reset folded into the
       main rule so a higher-specificity selector cannot strip the background. */
    .editor-block {
      appearance: none;
      -webkit-appearance: none;
      font: inherit;
      color: inherit;
      padding: 0;
      margin: 0;
      position: absolute;
      left: 4px;
      right: 4px;
      background: var(--custom-primary);
      border: none;
      border-radius: 4px;
      min-height: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      transition: opacity 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
      z-index: 1;
    }

    /* outline은 키보드 포커스(:focus-visible)에서만 그린다.
       마우스/터치로 활성화한 경우에는 outline none을 유지해 sticky focus가
       시각적으로 남지 않도록 한다. */
    .editor-block:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 2px;
    }

    @media (hover: hover) {
      .editor-block:hover:not(.pending):not(.selected) {
        opacity: 0.85;
      }
    }

    .editor-block.selected {
      background: rgba(13, 71, 161, 0.65);
      border: 1.5px solid var(--custom-primary);
      overflow: visible;
      z-index: 4;
    }

    /* time pill은 블록 *안쪽* 좌하단. 좌상단은 handle-top, 우상단은 delete가
       차지하므로 비어 있는 좌하단으로 피신. 카드 overflow:hidden에 잘리지
       않도록 inside-floating은 유지. */
    .block-time-pill {
      position: absolute;
      bottom: 4px;
      left: 4px;
      background: rgba(0, 0, 0, 0.55);
      color: #fff;
      font-size: 0.72rem;
      font-weight: 500;
      padding: 3px 8px;
      border-radius: 999px;
      white-space: nowrap;
      pointer-events: none;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
      z-index: 100;
    }

    .block-handle {
      position: absolute;
      width: 14px;
      height: 14px;
      background: var(--custom-primary);
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.4);
      touch-action: none;
      /* 시각상 대각 모서리 핸들 — 실제 변경은 세로(시간)만이지만
         커서 힌트는 핸들 위치를 따라가는 게 일관적. */
      cursor: nwse-resize;
      z-index: 1000;
    }

    /* 14x14 시각 크기는 유지하고 ::after로 44x44 터치 타깃을 만든다.
       모서리 핸들은 손가락 끝이 시각보다 살짝 어긋나도 잡히도록 더 넉넉히. */
    .block-handle::after {
      content: "";
      position: absolute;
      inset: -15px;
    }

    .block-handle.handle-top    { top: -7px; left: -7px; }
    .block-handle.handle-bottom { bottom: -7px; right: -7px; }

    /* 삭제 버튼: 블록 안쪽 우측 상단. 모바일 thumb-friendly 하게 30x30.
       (좌상단 = handle-top, 우하단 = handle-bottom 이라 우상단이 비어 있음.) */
    .block-delete {
      position: absolute;
      top: 4px;
      right: 4px;
      width: 30px;
      height: 30px;
      background: var(--custom-danger);
      color: #fff;
      border: 2px solid #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 0;
      font-size: 1.35rem;
      line-height: 1;
      font-weight: 700;
      box-shadow: 0 1px 3px rgba(0,0,0,0.4);
      z-index: 1000;
    }

    .block-delete:hover {
      background: #b71c1c;
    }

    .block-delete span {
      transform: translateY(-1px);
    }

    .editor-block.pending {
      background: linear-gradient(180deg, rgba(3, 169, 244, 0.7), rgba(3, 169, 244, 0.45));
      border: 1.5px dashed #ffffff66;
      z-index: 2;
    }

    .editor-block.dragging {
      border-style: solid;
    }

    /* 충돌 상태: 색깔만이 아니라 사선 패턴까지 추가해 색맹 사용자도 구분 가능.
       gradient는 무지(red) tint + 사선 stripe 겹쳐서 표현. */
    .editor-block.conflict {
      background:
        repeating-linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.18) 0 6px,
          transparent 6px 12px
        ),
        rgba(255, 82, 82, 0.75);
      border-color: #ff5252;
    }

    .repeat-pill.conflict {
      opacity: 0.35;
      cursor: not-allowed;
      text-decoration: line-through;
    }

    .repeat-pill.conflict:hover {
      background: transparent;
    }

    .block-time-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: #fff;
      text-shadow: 0 1px 2px rgba(0,0,0,0.4);
      pointer-events: none;
      padding: 0 6px;
      white-space: nowrap;
    }

    /* 현재 시각: 점이 아니라 컬럼 전체를 가로지르는 선 + 좌측 라벨 */
    .now-line {
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      border-top: 2px solid var(--custom-danger);
      pointer-events: none;
      z-index: 6;
    }
    .now-line::before {
      content: "";
      position: absolute;
      left: -4px;
      top: -5px;
      width: 8px;
      height: 8px;
      background: var(--custom-danger);
      border-radius: 50%;
    }
    .now-line-label {
      position: absolute;
      right: 4px;
      top: -10px;
      font-size: 0.65rem;
      color: var(--custom-danger);
      background: var(--custom-bg);
      padding: 0 4px;
      border-radius: 3px;
      font-weight: 600;
      line-height: 1;
    }

    .timeline-empty-hint {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--custom-secondary);
      font-size: 0.9rem;
      pointer-events: none;
      opacity: 0.7;
      padding: 0 12px;
      text-align: center;
    }

    /* ── 요일 스위처 (뷰 전환) ── */
    .day-switcher {
      display: flex;
      justify-content: space-around;
      gap: 4px;
      margin-bottom: 4px;
      padding: 0 4px;
    }

    /* .day-pill (rendered as <button>) — button reset inlined. */
    .day-pill {
      appearance: none;
      -webkit-appearance: none;
      font: inherit;
      flex: 1;
      text-align: center;
      padding: 6px 0;
      font-size: 0.85rem;
      color: var(--custom-secondary);
      background: transparent;
      cursor: pointer;
      border-radius: 999px;
      border: 1px solid transparent;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      transition: background 0.15s ease, color 0.15s ease;
    }

    /* hover effect만 진짜 마우스 환경에서 적용. 모바일은 sticky hover로
       selected 상태가 흐린 hover background 에 가려지던 문제(특히 iOS)를 방지. */
    @media (hover: hover) {
      .day-pill:hover:not(:disabled):not(.selected) {
        background: rgba(255,255,255,0.04);
      }
    }

    .day-pill.selected {
      color: var(--text-primary-color, #fff);
      background: var(--custom-primary);
      font-weight: 600;
    }

    .day-pill:focus-visible {
      outline: 2px solid var(--custom-primary);
      outline-offset: 2px;
    }

    .day-pill:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .active-days-help {
      font-size: 0.75rem;
      color: var(--custom-secondary);
      opacity: 0.75;
      text-align: center;
      padding: 0 8px;
    }

    /* 인라인 토스트 (alert 대체) */
    .toast {
      position: absolute;
      left: 50%;
      bottom: 16px;
      transform: translateX(-50%);
      background: rgba(20, 20, 20, 0.92);
      color: #fff;
      font-size: 0.85rem;
      padding: 10px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 2000;
      animation: toastIn 0.2s ease;
      max-width: calc(100% - 32px);
    }

    @keyframes toastIn {
      from { opacity: 0; transform: translate(-50%, 8px); }
      to   { opacity: 1; transform: translate(-50%, 0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* 인라인 confirm 다이얼로그 (browser confirm 대체) */
    .confirm-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1500;
      animation: fadeIn 0.15s ease;
    }

    .confirm-card {
      background: var(--card-background-color, #2b2b2b);
      color: var(--custom-text);
      border-radius: 12px;
      border: 1px solid var(--custom-border);
      padding: 18px 20px;
      width: min(90%, 320px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    }

    .confirm-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .confirm-body {
      font-size: 0.9rem;
      color: var(--custom-secondary);
      line-height: 1.5;
      margin-bottom: 16px;
    }

    .confirm-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }

    .danger-btn {
      padding: 8px 16px;
      background: var(--custom-danger);
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
    }
    .danger-btn:hover { filter: brightness(1.1); }

    /* ── 반복 섹션 (저장 전) ── */
    .empty-state {
      text-align: center;
      padding: 24px 0;
      color: var(--custom-secondary);
      font-size: 0.9rem;
    }

    .ghost-btn {
      background: transparent;
      color: var(--custom-secondary);
      border: 1px solid var(--custom-border);
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .ghost-btn:hover { background: rgba(255,255,255,0.04); }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .primary-btn {
      padding: 8px 16px;
      background: var(--custom-primary);
      color: var(--text-primary-color, #fff);
      border: none;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
    }
  `}static getConfigElement(){return document.createElement("ha-custom-schedule-card-editor")}static getStubConfig(){return{}}getCardSize(){return this._config?.entity?5:7}getGridOptions(){return{columns:12,min_rows:3}}}customElements.define("ha-custom-schedule-card",mt),window.customCards=window.customCards||[],window.customCards.push({type:"ha-custom-schedule-card",name:t[i()].cardName,preview:!0,description:t[i()].cardDescription,documentationURL:"https://github.com/jewon-oh/schedule-ui"});class gt extends lt{static{this.properties={hass:{type:Object},_config:{state:!0},_now:{state:!0},_inputHours:{state:!0},_inputMinutes:{state:!0},_inputSeconds:{state:!0}}}constructor(){super(),this._now=Date.now(),this._inputHours=0,this._inputMinutes=30,this._inputSeconds=0}connectedCallback(){super.connectedCallback(),this._timerInterval=setInterval(()=>{this._now=Date.now()},1e3)}disconnectedCallback(){super.disconnectedCallback(),this._timerInterval&&clearInterval(this._timerInterval)}static getConfigElement(){return document.createElement("ha-custom-timer-card-editor")}static getStubConfig(){return{type:"custom:ha-custom-timer-card"}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}get _lang(){return this.hass?.language&&this.hass.language.includes("ko")?"ko":"en"}_t(t){return e[this._lang]?.[t]??e.en[t]}_parseDurationToSeconds(t){if(!t)return 0;const e=t.split(":").map(Number);return 3===e.length?3600*e[0]+60*e[1]+e[2]:0}_formatSeconds(t){if(t<=0)return"00:00:00";const e=Math.floor(t/3600),i=Math.floor(t%3600/60),s=Math.floor(t%60);return`${e.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`}_callService(t,e={}){this._config.entity&&this.hass.callService("timer",t,{entity_id:this._config.entity,...e})}_startTimerCustom(){const t=3600*this._inputHours+60*this._inputMinutes+this._inputSeconds;if(t<=0)return;const e=this._formatSeconds(t);this._callService("start",{duration:e})}_startTimerPreset(t){this._callService("start",{duration:this._formatSeconds(60*t)})}_addTime(t){let e=60*this._inputHours+this._inputMinutes+t;e<0&&(e=0),this._inputHours=Math.floor(e/60),this._inputMinutes=e%60,this._inputHours>99&&(this._inputHours=99,this._inputMinutes=59),this.requestUpdate()}_adjustTime(t,e){const i={hours:"_inputHours",minutes:"_inputMinutes",seconds:"_inputSeconds"}[t],s={hours:{min:0,max:23},minutes:{min:0,max:59},seconds:{min:0,max:59}}[t];let o=(this[i]||0)+e;o<s.min&&(o=s.max),o>s.max&&(o=s.min),this[i]=o}_onSpinInput(t,e){const i={hours:{min:0,max:23},minutes:{min:0,max:59},seconds:{min:0,max:59}}[t];let s=parseInt(e.target.value)||0;s<i.min&&(s=i.min),s>i.max&&(s=i.max),this[{hours:"_inputHours",minutes:"_inputMinutes",seconds:"_inputSeconds"}[t]]=s}render(){if(!this._config)return q`<ha-card><div class="error">${this._t("notConfigured")}</div></ha-card>`;const t=!this._config.entity;let e="idle",i=0,s=3600,o=this._config.title||this._t("defaultTitle");if(!t&&this.hass&&this.hass.states[this._config.entity]){const t=this.hass.states[this._config.entity];if(e=t.state,o=this._config.title||t.attributes.friendly_name||this._config.entity,s=this._parseDurationToSeconds(t.attributes.duration)||3600,"active"===e&&t.attributes.finishes_at){let e=Math.floor((new Date(t.attributes.finishes_at).getTime()-this._now)/1e3);void 0!==this._timeOffset&&"active"===this._lastTimerState||(this._timeOffset=Math.max(0,e-s)),i=Math.max(0,e-(this._timeOffset||0)),i=Math.min(s,i)}else"paused"===e&&t.attributes.remaining?(i=this._parseDurationToSeconds(t.attributes.remaining),this._timeOffset=void 0):"idle"===e&&(i=0,this._timeOffset=void 0);this._lastTimerState=e}else t&&(e="idle",this._inputHours=0,this._inputMinutes=30);const r=s>0?Math.max(0,Math.min(100,i/s*100)):0,n=Math.floor(i/3600),a=Math.floor(i%3600/60),c=Math.floor(i%60);return q`
      <ha-card>
        <div class="card-header">
          <div class="name">${o}</div>
          <div class="header-right">
            ${"idle"!==e?q`
              <span class="state-badge ${e}">${"active"===e?this._t("start"):this._t("pausedMessage")}</span>
            `:""}
            <ha-icon icon="${"active"===e?"mdi:timer-sand":"mdi:timer"}"></ha-icon>
          </div>
        </div>

        <div class="card-content">
          ${"idle"===e?q`
            <!-- 대기 상태: 숫자 증감 입력 -->
            <div class="time-spinner-row">
              <div class="time-spinner">
                <button class="spin-btn" @click="${()=>this._adjustTime("hours",1)}"><ha-icon icon="mdi:chevron-up"></ha-icon></button>
                <input class="spin-value" type="number" min="0" max="23" .value="${String(this._inputHours).padStart(2,"0")}" @change="${t=>this._onSpinInput("hours",t)}" @focus="${t=>t.target.select()}">
                <button class="spin-btn" @click="${()=>this._adjustTime("hours",-1)}"><ha-icon icon="mdi:chevron-down"></ha-icon></button>
                <div class="spin-label">${this._t("hoursLabel")}</div>
              </div>
              <div class="spin-separator">:</div>
              <div class="time-spinner">
                <button class="spin-btn" @click="${()=>this._adjustTime("minutes",1)}"><ha-icon icon="mdi:chevron-up"></ha-icon></button>
                <input class="spin-value" type="number" min="0" max="59" .value="${String(this._inputMinutes).padStart(2,"0")}" @change="${t=>this._onSpinInput("minutes",t)}" @focus="${t=>t.target.select()}">
                <button class="spin-btn" @click="${()=>this._adjustTime("minutes",-1)}"><ha-icon icon="mdi:chevron-down"></ha-icon></button>
                <div class="spin-label">${this._t("minutesLabel")}</div>
              </div>
              <div class="spin-separator">:</div>
              <div class="time-spinner">
                <button class="spin-btn" @click="${()=>this._adjustTime("seconds",1)}"><ha-icon icon="mdi:chevron-up"></ha-icon></button>
                <input class="spin-value" type="number" min="0" max="59" .value="${String(this._inputSeconds).padStart(2,"0")}" @change="${t=>this._onSpinInput("seconds",t)}" @focus="${t=>t.target.select()}">
                <button class="spin-btn" @click="${()=>this._adjustTime("seconds",-1)}"><ha-icon icon="mdi:chevron-down"></ha-icon></button>
                <div class="spin-label">${this._t("secondsLabel")}</div>
              </div>
            </div>
          `:q`
            <!-- 동작/일시정지 상태: 남은 시간 표시 + 바 -->
            <div class="timer-display">
              <div class="timer-remaining">
                <span class="time-digit">${String(n).padStart(2,"0")}</span>
                <span class="time-colon">:</span>
                <span class="time-digit">${String(a).padStart(2,"0")}</span>
                <span class="time-colon">:</span>
                <span class="time-digit">${String(c).padStart(2,"0")}</span>
              </div>
              <div class="timer-message" style="margin-top: 8px; font-size: 0.95rem; color: var(--custom-secondary); display: flex; justify-content: center;">
                ${(()=>{let t=[];n>0&&t.push(n+this._t("hoursStr")),(a>0||n>0)&&t.push(a+this._t("minutesStr")),t.push(c+this._t("secondsStr"));const e=t.join(" ");return q`<span style="background: rgba(0,0,0,0.2); padding: 4px 12px; border-radius: 12px;">${e} ${this._t("countdownMessage")}</span>`})()}
              </div>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar ${e}" style="width: ${r}%;"></div>
            </div>
          `}

          <div class="presets-container" style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
            <div class="presets">
              <button class="preset-btn" @click="${()=>this._addTime(5)}" ?disabled="${"idle"!==e&&!t}">${this._t("preset5m")}</button>
              <button class="preset-btn" @click="${()=>this._addTime(10)}" ?disabled="${"idle"!==e&&!t}">${this._t("preset10m")}</button>
              <button class="preset-btn" @click="${()=>this._addTime(30)}" ?disabled="${"idle"!==e&&!t}">${this._t("preset30m")}</button>
            </div>
            <div class="presets">
              <button class="preset-btn minus" @click="${()=>this._addTime(-5)}" ?disabled="${"idle"!==e&&!t}">${this._t("presetMinus5m")}</button>
              <button class="preset-btn minus" @click="${()=>this._addTime(-10)}" ?disabled="${"idle"!==e&&!t}">${this._t("presetMinus10m")}</button>
              <button class="preset-btn minus" @click="${()=>this._addTime(-30)}" ?disabled="${"idle"!==e&&!t}">${this._t("presetMinus30m")}</button>
            </div>
          </div>

          <div class="controls">
            ${"idle"===e?q`
              <button class="btn btn-primary start-btn" @click="${()=>this._startTimerCustom()}" ?disabled="${t}">
                <ha-icon icon="mdi:play"></ha-icon> ${this._t("start")}
              </button>
            `:q`
              ${"active"===e?q`
                <button class="btn btn-secondary" @click="${()=>this._callService("pause")}" ?disabled="${t}">
                  <ha-icon icon="mdi:pause"></ha-icon> ${this._t("pause")}
                </button>
              `:q`
                <button class="btn btn-primary" @click="${()=>this._callService("start")}" ?disabled="${t}">
                  <ha-icon icon="mdi:play"></ha-icon> ${this._t("resume")}
                </button>
              `}
              <button class="btn btn-danger" @click="${()=>this._callService("cancel")}" ?disabled="${t}">
                <ha-icon icon="mdi:stop"></ha-icon> ${this._t("stop")}
              </button>
            `}
          </div>
        </div>
      </ha-card>
    `}static{this.styles=c`
    :host {
      display: block;
      --custom-primary: var(--primary-color, #03a9f4);
      --custom-bg: var(--card-background-color, rgba(255, 255, 255, 0.05));
      --custom-border: var(--divider-color, rgba(255, 255, 255, 0.1));
      --custom-text: var(--primary-text-color, #ffffff);
      --custom-secondary: var(--secondary-text-color, #a0a0a0);
      --custom-danger: var(--error-color, #f44336);
      --custom-active-bg: rgba(3, 169, 244, 0.15);
      --custom-success: #4caf50;
    }

    ha-card {
      background: var(--custom-bg);
      border-radius: var(--ha-card-border-radius, 12px);
      border: 1px solid var(--custom-border);
      overflow: hidden;
      font-family: var(--paper-font-body1_-_font-family, system-ui, -apple-system, sans-serif);
      color: var(--custom-text);
      position: relative;
    }

    .card-header {
      padding: 12px 16px 4px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-header .name {
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--primary-text-color, #ffffff);
      letter-spacing: 0.1px;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header-right ha-icon {
      color: var(--custom-primary);
      --mdc-icon-size: 20px;
    }

    .state-badge {
      font-size: 0.75rem;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 20px;
      letter-spacing: 0.3px;
    }

    .state-badge.active {
      background: var(--custom-active-bg);
      color: var(--custom-primary);
    }

    .state-badge.paused {
      background: rgba(255, 152, 0, 0.15);
      color: #ff9800;
    }

    .card-content {
      padding: 8px 16px 16px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    /* === 숫자 스피너 (대기 상태) === */
    .time-spinner-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 0;
    }

    .time-spinner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }

    .spin-btn {
      width: 48px;
      height: 32px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--custom-border);
      border-radius: 8px;
      color: var(--custom-secondary);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
      --mdc-icon-size: 20px;
    }

    .spin-btn:hover {
      background: rgba(255, 255, 255, 0.12);
      color: var(--custom-text);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .spin-btn:active {
      transform: scale(0.92);
      background: rgba(3, 169, 244, 0.15);
    }

    .spin-value {
      width: 64px;
      font-size: 2.4rem;
      font-weight: 700;
      color: var(--custom-text);
      background: transparent;
      border: 1px solid transparent;
      border-radius: 8px;
      text-align: center;
      line-height: 1;
      font-variant-numeric: tabular-nums;
      font-family: inherit;
      padding: 4px 0;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
      -moz-appearance: textfield;
    }

    .spin-value::-webkit-outer-spin-button,
    .spin-value::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .spin-value:focus-visible {
      border-color: var(--custom-primary);
      background: rgba(3, 169, 244, 0.08);
      outline: none;
    }

    .spin-label {
      font-size: 0.7rem;
      color: var(--custom-secondary);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 2px;
    }

    .spin-separator {
      font-size: 2rem;
      font-weight: 700;
      color: var(--custom-secondary);
      padding: 0 2px;
      align-self: center;
      margin-bottom: 16px;
    }

    /* === 타이머 표시 (동작/일시정지 상태) === */
    .timer-display {
      padding: 8px 0;
    }

    .timer-remaining {
      display: flex;
      align-items: baseline;
      gap: 4px;
    }

    .time-digit {
      font-size: 3rem;
      font-weight: 700;
      color: var(--custom-text);
      font-variant-numeric: tabular-nums;
      letter-spacing: 1px;
    }

    .time-colon {
      font-size: 2.4rem;
      font-weight: 300;
      color: var(--custom-secondary);
      margin: 0 2px;
    }

    /* === 프로그레스 바 === */
    .progress-bar-container {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 3px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      border-radius: 3px;
      transition: width 1s linear;
    }

    .progress-bar.active {
      background: var(--custom-primary);
    }

    .progress-bar.paused {
      background: #ff9800;
    }

    /* === 프리셋 버튼 === */
    .presets {
      display: flex;
      gap: 12px;
      justify-content: center;
      width: 100%;
    }

    .preset-btn {
      flex: 1;
      height: 44px;
      background: rgba(255,255,255,0.05);
      border: 1px solid var(--custom-border);
      color: var(--custom-text);
      border-radius: 12px;
      font-size: 0.95rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .preset-btn:hover:not(:disabled) {
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.2);
    }

    .preset-btn:active:not(:disabled) {
      transform: scale(0.95);
    }

    .preset-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    /* === 컨트롤 버튼 === */
    .controls {
      display: flex;
      gap: 12px;
      width: 100%;
      justify-content: center;
    }

    .btn {
      flex: 1;
      height: 48px;
      border: none;
      border-radius: 12px;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.2s ease;
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-primary {
      background: var(--custom-primary);
      color: var(--text-primary-color, #fff);
    }

    .btn-primary:active:not(:disabled) {
      transform: scale(0.96);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: var(--custom-text);
    }

    .btn-secondary:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.15);
    }

    .btn-danger {
      background: var(--custom-danger);
      color: #fff;
    }

    .btn-danger:hover:not(:disabled) {
      background: #e53935;
    }
  `}}customElements.define("ha-custom-timer-card",gt),window.customCards=window.customCards||[],(()=>{const t=e[i()]??e.en;window.customCards.push({type:"ha-custom-timer-card",name:t.cardName,preview:!0,description:t.cardDescription,documentationURL:"https://github.com/jewon-oh/schedule-ui"})})(),console.log("%c[schedule-ui] v1.4.6 loaded","color: #03a9f4; font-weight: bold; font-size: 14px;");
