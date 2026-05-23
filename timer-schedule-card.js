// Schedule card translations.
// Keys are camelCase identifiers consumed by HaCustomScheduleCard and its editor.
const LOCALES = {
    ko: {
        addBlock: "새 블록 추가",
        startTime: "시작 시간",
        endTime: "종료 시간",
        add: "시간 블록 추가하기",
        delete: "삭제",
        cancel: "취소",
        save: "저장",
        repeat: "반복",
        days: ["월", "화", "수", "목", "금", "토", "일"],
        daysShort: ["월", "화", "수", "목", "금", "토", "일"],
        everyday: "매일",
        empty: "설정된 스케쥴이 없습니다.",
        errorEntity: "스케쥴 엔티티를 설정해야 합니다.",
        scheduleManager: "스케쥴 관리",
        placeholder: "스마트 스케쥴 카드",
        previewSuffix: " (미리보기)",
        conflictWarning: "이 요일은 기존 블록과 겹칩니다",
        // 스케쥴 생성 마법사
        createRoutine: "새 스케쥴 만들기",
        routineName: "스케쥴 이름",
        routineNamePlaceholder: "예: 거실 전등 스케쥴",
        targetDevice: "대상 기기",
        create: "스케쥴 생성",
        creating: "생성 중...",
        createSuccess: "스케쥴이 생성되었습니다!",
        createFailed: "스케쥴 생성에 실패했습니다.",
        createDescription: "기기를 선택하면 스케쥴과 자동화가 자동으로 생성됩니다.",
        orSelectExisting: "또는 기존 스케쥴을 편집기에서 선택하세요.",
        goToCard: "카드 편집에서 새 스케쥴을 선택해주세요.",
        // 에디터
        editorWizardTitle: "새 스케쥴 만들기 (권장)",
        editorWizardDesc: "자동화할 기기를 선택하면 스케쥴 제어 장치와 동작 브릿지가 즉시 생성되고 이 카드에 자동으로 연동됩니다.",
        editorTargetDevice: "제어할 대상 기기 선택",
        editorCreateSuccess: "생성 및 연결 성공!",
        editorErrorPrefix: "오류 발생: ",
        editorAdvanced: "기존 스케쥴 다시 불러오기 및 추가 설정",
        editorScheduleEntity: "스케쥴 기기 (직접 선택)",
        editorCardTitle: "카드 표출 제목 (선택사항)",
        // 카드 픽커
        cardName: "스케쥴 카드",
        cardDescription: "스케쥴 헬퍼의 시간 블록을 편집하고, 기기를 선택하면 스케쥴을 자동 생성합니다.",
        // 다이얼로그 / 자동 생성
        deleteEverydayConfirm: "이 타임블록은 매일(월~일) 등록되어 있습니다.\n삭제하시면 모든 요일에서 일괄 삭제됩니다. 계속하시겠습니까?",
        deleteOneConfirm: "선택하신 요일의 스케줄을 삭제하시겠습니까?",
        conflictAlert: "다음 요일에 이미 겹치는 블록이 있어 저장할 수 없습니다: ",
        unknownDevice: "알 수 없는 기기",
        routineSuffix: " 스케쥴",
        bridgeAliasPrefix: "스케쥴 브릿지: ",
        bridgeDescPattern: " 스케쥴에 따라 기기를 자동 제어합니다.",
        // 활성 요일 그룹 (v1.4: 모든 블록이 활성 요일에 일괄 적용)
        activeDays: "활성 요일",
        activeDaysHelp: "선택한 요일들이 동일한 시간 블록 세트를 공유합니다.",
        atLeastOneDay: "최소 한 요일은 활성화되어 있어야 합니다.",
        confirmDeleteBlock: "이 시간 블록을 삭제하시겠습니까?",
        confirmDeleteTitle: "시간 블록 삭제",
        saveFailed: "저장에 실패했습니다.",
        blockOverlap: "다른 시간 블록과 겹쳐 추가할 수 없습니다.",
        notConfigured: "카드가 구성되지 않았습니다.",
        adminOnlyWizard: "스케쥴 자동 생성은 관리자만 가능합니다. 이미 만들어진 스케쥴을 아래에서 선택하세요.",
        unauthorized: "권한이 없습니다. 관리자에게 문의하세요.",
    },
    en: {
        addBlock: "Add New Block",
        startTime: "Start Time",
        endTime: "End Time",
        add: "Add Time Block",
        delete: "Delete",
        cancel: "Cancel",
        save: "Save",
        repeat: "Repeat",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        daysShort: ["M", "T", "W", "T", "F", "S", "S"],
        everyday: "Daily",
        empty: "No schedules configured.",
        errorEntity: "You need to define a schedule entity.",
        scheduleManager: "Schedule Manager",
        placeholder: "Smart Schedule Card",
        previewSuffix: " (Preview)",
        conflictWarning: "This day conflicts with an existing block",
        // Routine wizard
        createRoutine: "Create New Routine",
        routineName: "Routine Name",
        routineNamePlaceholder: "e.g. Living Room Light",
        targetDevice: "Target Device",
        create: "Create Routine",
        creating: "Creating...",
        createSuccess: "Routine created successfully!",
        createFailed: "Failed to create routine.",
        createDescription: "Select a device to auto-create a schedule and automation.",
        orSelectExisting: "Or select an existing schedule in the editor.",
        goToCard: "Please select the new schedule in card settings.",
        // Editor
        editorWizardTitle: "Create New Routine (Recommended)",
        editorWizardDesc: "Pick a device to auto-create a schedule helper and automation bridge linked to this card.",
        editorTargetDevice: "Target Device",
        editorCreateSuccess: "Created and linked successfully!",
        editorErrorPrefix: "Error: ",
        editorAdvanced: "Advanced Configuration",
        editorScheduleEntity: "Schedule Entity",
        editorCardTitle: "Card Title (Optional)",
        // Card picker
        cardName: "Schedule Card",
        cardDescription: "Edit schedule helper time blocks, or pick a device to auto-create one.",
        // Dialogs / auto-create
        deleteEverydayConfirm: "This block is registered for every day (Mon–Sun).\nDeleting will remove it from all days. Continue?",
        deleteOneConfirm: "Delete this block from the selected day?",
        conflictAlert: "Cannot save — the following day(s) already have overlapping blocks: ",
        unknownDevice: "Unknown device",
        routineSuffix: " Schedule",
        bridgeAliasPrefix: "Schedule bridge: ",
        bridgeDescPattern: " — automatically controls the target device per its schedule.",
        // Active days group (v1.4: all blocks apply uniformly to the active days)
        activeDays: "Active days",
        activeDaysHelp: "Selected days share the same set of time blocks.",
        atLeastOneDay: "At least one day must stay active.",
        confirmDeleteBlock: "Delete this time block?",
        confirmDeleteTitle: "Delete time block",
        saveFailed: "Failed to save schedule.",
        blockOverlap: "This range overlaps an existing block.",
        notConfigured: "Card is not configured.",
        adminOnlyWizard: "Auto-creating a schedule requires admin rights. Pick an existing schedule below.",
        unauthorized: "Not authorized. Ask an administrator.",
    },
};

// Timer card translations.
// Kept separate from LOCALES because several keys (cardName, editorWizardTitle, etc.)
// would collide with the schedule card otherwise.
const TIMER_LOCALES = {
    ko: {
        addTitle: "+ 시간 추가",
        start: "시작",
        pause: "일시정지",
        resume: "계속",
        stop: "취소",
        preset5m: "+5분",
        preset10m: "+10분",
        preset30m: "+30분",
        presetMinus5m: "-5분",
        presetMinus10m: "-10분",
        presetMinus30m: "-30분",
        setDuration: "시간 설정",
        idleMessage: "대기 중",
        pausedMessage: "일시정지됨",
        editorTitle: "타이머 UI 설정",
        editorEntity: "연동된 타이머 엔티티",
        editorWizardTitle: "새 타이머 & 자동화 마법사",
        editorWizardDesc: "기기를 선택하면 타이머 헬퍼와 자동화 브릿지가 즉시 생성됩니다.",
        editorTargetDevice: "대상 기기 선택 (켜고 끌 기기)",
        editorActionType: "종료 시 동작",
        editorActionOff: "장치 끄기",
        editorActionOn: "장치 켜기",
        editorActionToggle: "상태 반전",
        editorCreateStr: "타이머 자동 생성",
        hoursLabel: "시간",
        minutesLabel: "분",
        secondsLabel: "초",
        hoursStr: "시간",
        minutesStr: "분",
        secondsStr: "초",
        countdownMessage: "후에 기기가 종료됩니다.",
        bridgeDescription: "Timer UI 카드에서 자동으로 생성한 브릿지입니다.",
        errorPrefix: "생성 중 오류가 발생했습니다: ",
        timerSuffix: " 타이머",
        cardName: "타이머 카드",
        cardDescription: "타이머 헬퍼를 제어하고, 기기를 선택하면 자동화 브릿지를 자동 생성합니다.",
        defaultTitle: "타이머 설정",
        helperFailMsg: "(안내) 타이머 헬퍼 생성 실패. 해당 HA 버전에서는 플러그인이 헬퍼를 완전 자동 생성할 수 없습니다. 수동 구성 권장.",
        timerBridgeAliasPrefix: "타이머 브릿지: ",
        syncingMessage: "동기화 중입니다...",
        generatedTimerLabel: " (생성된 타이머)",
        notConfigured: "카드가 구성되지 않았습니다.",
        adminOnlyWizard: "타이머 자동 생성은 관리자만 가능합니다. 이미 만들어진 타이머를 아래에서 선택하세요.",
        unauthorized: "권한이 없습니다. 관리자에게 문의하세요.",
    },
    en: {
        addTitle: "+ Add Time",
        start: "Start",
        pause: "Pause",
        resume: "Resume",
        stop: "Cancel",
        preset5m: "+5m",
        preset10m: "+10m",
        preset30m: "+30m",
        presetMinus5m: "-5m",
        presetMinus10m: "-10m",
        presetMinus30m: "-30m",
        setDuration: "Set Duration",
        idleMessage: "Idle",
        pausedMessage: "Paused",
        editorTitle: "Timer UI Config",
        editorEntity: "Linked Timer Entity",
        editorWizardTitle: "New Timer Wizard",
        editorWizardDesc: "Select a target device to auto-create timer and automation.",
        editorTargetDevice: "Select Target Device",
        editorActionType: "Action on finish",
        editorActionOff: "Turn Off",
        editorActionOn: "Turn On",
        editorActionToggle: "Toggle",
        editorCreateStr: "Auto Create Timer",
        hoursLabel: "Hours",
        minutesLabel: "Minutes",
        secondsLabel: "Seconds",
        hoursStr: "h",
        minutesStr: "m",
        secondsStr: "s",
        countdownMessage: "until the device turns off.",
        bridgeDescription: "Bridge automatically created by Timer UI card.",
        errorPrefix: "Error while creating: ",
        timerSuffix: " Timer",
        cardName: "Timer Card",
        cardDescription: "Control timer helpers, or pick a device to auto-create an automation bridge.",
        defaultTitle: "Timer Settings",
        helperFailMsg: "(Notice) Timer helper auto-create failed. This HA version does not allow plugins to create helpers automatically — please configure manually.",
        timerBridgeAliasPrefix: "Timer bridge: ",
        syncingMessage: "Syncing...",
        generatedTimerLabel: " (generated)",
        notConfigured: "Card is not configured.",
        adminOnlyWizard: "Auto-creating a timer requires admin rights. Pick an existing timer below.",
        unauthorized: "Not authorized. Ask an administrator.",
    },
};

function detectLang() {
    const lang = (typeof navigator !== "undefined" && navigator.language) || "en";
    return lang.startsWith("ko") ? "ko" : "en";
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i$1=t=>t,s$1=t.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$1=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+o$1,r=`<${n}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$1+x):s+o$1+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$1),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$1)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$1),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$1,t+1));)d.push({type:7,index:l}),t+=o$1.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o=s.litElementPolyfillSupport;o?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

// @ts-nocheck
class HaCustomScheduleCardEditor extends i {
    static { this.properties = {
        hass: {},
        _config: {},
        _isCreating: { type: Boolean },
        _createResult: { type: Object },
    }; }
    setConfig(config) {
        this._config = config;
    }
    configChanged(newConfig) {
        const event = new Event("config-changed", { bubbles: true, composed: true });
        event.detail = { config: newConfig };
        this.dispatchEvent(event);
    }
    async _onAutoCreateDevicePicker(ev) {
        const targetEntityId = ev.detail.value;
        if (this._isCreating || !this.hass || !targetEntityId)
            return;
        // 기기 이름 기반으로 스케쥴 이름 자동 생성
        const entityObj = this.hass.states[targetEntityId];
        const friendlyName = entityObj?.attributes?.friendly_name || targetEntityId.split('.')[1] || this._t("unknownDevice");
        const routineName = `${friendlyName}${this._t("routineSuffix")}`;
        this._isCreating = true;
        this._createResult = null;
        this.requestUpdate();
        try {
            console.log("[schedule-ui] Editor Auto createRoutine - name:", routineName, "target:", targetEntityId);
            const schedulePayload = {
                type: "schedule/create",
                name: routineName,
                icon: "mdi:calendar-clock",
            };
            const scheduleResult = await this.hass.callWS(schedulePayload);
            console.log("[schedule-ui] schedule/create SUCCESS:", scheduleResult);
            const scheduleId = scheduleResult.id;
            const scheduleEntityId = `schedule.${scheduleId}`;
            const automationId = `bridge_${scheduleId}`;
            const automationPayload = {
                alias: `${this._t("bridgeAliasPrefix")}${routineName}`,
                description: `[schedule-ui] ${routineName}${this._t("bridgeDescPattern")}`,
                use_blueprint: {
                    path: "jewon-oh/schedule-bridge-blueprint.yaml",
                    input: {
                        schedule_helper: scheduleEntityId,
                        target_device: targetEntityId
                    }
                }
            };
            await this.hass.callApi("POST", `config/automation/config/${automationId}`, automationPayload);
            console.log("[schedule-ui] automation create SUCCESS:", automationId);
            this._createResult = { success: true, entityId: scheduleEntityId };
            // 자동 생성 완료 시 곧바로 config의 entity 속성을 교체
            this.configChanged({ ...this._config, entity: scheduleEntityId });
        }
        catch (e) {
            console.error("[schedule-ui] createRoutine FAILED:", e);
            this._createResult = { success: false, message: e.message || JSON.stringify(e) };
        }
        finally {
            this._isCreating = false;
            this.requestUpdate();
        }
    }
    _t(key) {
        const lang = this.hass?.language?.startsWith('ko') ? 'ko' : 'en';
        return LOCALES[lang][key] || LOCALES["en"][key];
    }
    render() {
        if (!this.hass || !this._config) {
            return b ``;
        }
        // The auto-create wizard calls schedule/create + config/automation/config/...
        // both of which are admin-only HA APIs. Non-admin users get 401, so the
        // wizard is hidden for them and only the "pick existing helper" path is
        // exposed.
        const isAdmin = !!this.hass.user?.is_admin;
        return b `
      <div class="card-config">

        ${isAdmin ? b `
          <div class="wizard-section">
            <div style="font-weight: 600; color: var(--primary-color); display: flex; align-items: center; gap: 8px;">
              <ha-icon icon="mdi:magic-staff"></ha-icon>
              <span>${this._t("editorWizardTitle")}</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--secondary-text-color); margin: 8px 0 16px 0; line-height: 1.4;">
              ${this._t("editorWizardDesc")}
            </p>

            ${this._isCreating ? b `
              <div style="text-align: center; padding: 20px; color: var(--primary-color);">
                <ha-icon icon="mdi:loading" class="spin"></ha-icon>
                <span style="margin-left: 8px;">${this._t("creating")}</span>
              </div>
            ` : b `
              <ha-selector
                .hass=${this.hass}
                .selector=${{ entity: { domain: ["switch", "light", "fan", "climate", "cover"] } }}
                .value=${""}
                .required=${false}
                .label=${this._t("editorTargetDevice")}
                @value-changed=${this._onAutoCreateDevicePicker}
              ></ha-selector>
            `}

            ${this._createResult?.success ? b `
              <div style="margin-top: 12px; color: var(--success-color, #4caf50); font-size: 0.9rem; display: flex; align-items: center; gap: 6px;">
                <ha-icon icon="mdi:check-circle" style="--mdc-icon-size: 18px;"></ha-icon>
                <span>${this._createResult.entityId} ${this._t("editorCreateSuccess")}</span>
              </div>
            ` : ''}
            ${this._createResult && !this._createResult.success ? b `
              <div style="margin-top: 12px; color: var(--error-color, #f44336); font-size: 0.9rem;">
                ${this._t("editorErrorPrefix")}${this._createResult.message}
              </div>
            ` : ''}
          </div>

          <div style="height: 1px; background: var(--divider-color, rgba(100,100,100,0.2)); margin: 24px 0;"></div>
        ` : b `
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
          .selector=${{ entity: { domain: "schedule" } }}
          .value=${this._config.entity || ""}
          .required=${false}
          .label=${this._t("editorScheduleEntity")}
          @value-changed=${this._entityChanged}
        ></ha-selector>

        <br/>

        <ha-textfield
          label="${this._t("editorCardTitle")}"
          .value=${this._config.title || ""}
          @input=${this._titleChanged}
          style="width: 100%;"
        ></ha-textfield>
      </div>
    `;
    }
    _entityChanged(ev) {
        if (!this._config || !this.hass)
            return;
        const value = ev.detail.value;
        if (this._config.entity === value)
            return;
        this.configChanged({
            ...this._config,
            entity: value,
        });
    }
    _titleChanged(ev) {
        if (!this._config || !this.hass)
            return;
        const value = ev.target.value;
        if (this._config.title === value)
            return;
        if (value === "") {
            const tmpConfig = { ...this._config };
            delete tmpConfig.title;
            this.configChanged(tmpConfig);
        }
        else {
            this.configChanged({
                ...this._config,
                title: value,
            });
        }
    }
    static { this.styles = i$3 `
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
  `; }
}
customElements.define("ha-custom-schedule-card-editor", HaCustomScheduleCardEditor);

// @ts-nocheck
class HaCustomTimerCardEditor extends i {
    static { this.properties = {
        hass: {},
        _config: { state: true },
        _selectedEntity: { state: true },
        _selectedAction: { state: true },
        _isLoading: { state: true },
        _creationError: { state: true }
    }; }
    setConfig(config) {
        this._config = config;
        this._selectedAction = config.action_type || "turn_off";
    }
    get _lang() {
        return this.hass?.language && this.hass.language.includes('ko') ? 'ko' : 'en';
    }
    _t(key) {
        return TIMER_LOCALES[this._lang]?.[key] ?? TIMER_LOCALES.en[key];
    }
    // 1. Target Entity 선택 시 Timer 헬퍼 및 브릿지 자동 생성
    async _onTargetEntityPicked(ev) {
        const targetEntityId = ev.detail.value;
        if (!targetEntityId || targetEntityId === this._selectedEntity)
            return;
        this._selectedEntity = targetEntityId;
        this._isLoading = true;
        this._creationError = null;
        try {
            const entityState = this.hass.states[targetEntityId];
            const entityName = entityState?.attributes?.friendly_name || targetEntityId;
            let timerId = null;
            let timerEntityId = null;
            // Step A: Timer 헬퍼 생성 (Schedule처럼 내부 WS API 활용)
            try {
                const payload = {
                    type: "timer/create",
                    name: `${entityName}${this._t("timerSuffix")}`,
                    icon: "mdi:timer-sand"
                };
                const timerResult = await this.hass.callWS(payload);
                timerId = timerResult.id;
                timerEntityId = `timer.${timerId}`;
                console.log("[schedule-ui] timer helper create SUCCESS:", timerEntityId);
            }
            catch (e) {
                console.warn("Timer helper auto-creation failed via config/timer/create. Error:", e);
                this._creationError = this._t("helperFailMsg");
                this._isLoading = false;
                return;
            }
            // Step B: 블루프린트 참조 방식으로 자동화 브릿지 생성
            const actionType = this._selectedAction || "turn_off";
            const bridgeId = `timer_bridge_${timerId}`;
            const alias = `${this._t("timerBridgeAliasPrefix")}${entityName}`;
            console.log("[schedule-ui] Creating timer bridge (blueprint):", bridgeId, "for target:", targetEntityId);
            // 기존 동일 ID 브릿지 중복 제거
            try {
                const automations = await this.hass.callWS({ type: "config/entity_registry/list" });
                const existing = automations.find(a => a.entity_id === `automation.${bridgeId}`);
                if (existing) {
                    await this.hass.callWS({ type: "config/entity_registry/remove", entity_id: existing.entity_id });
                }
            }
            catch (e) { }
            // 블루프린트 참조 형식 — HA '사용중' 카운트에 반영됨
            const bridgePayload = {
                alias: alias,
                description: this._t("bridgeDescription"),
                use_blueprint: {
                    path: "jewon-oh/timer-bridge-blueprint.yaml",
                    input: {
                        timer_helper: timerEntityId,
                        target_device: targetEntityId,
                        action_type: actionType
                    }
                }
            };
            await this.hass.callApi("POST", `config/automation/config/${bridgeId}`, bridgePayload);
            console.log("[schedule-ui] timer automation bridge (blueprint) create SUCCESS:", bridgeId);
            // 설정 임시 업데이트
            this._config = {
                ...this._config,
                entity: timerEntityId,
                title: `${entityName}${this._t("timerSuffix")}`
            };
            // 설정 이벤트 발송 (HA UI에 저장 트리거)
            this.dispatchEvent(new CustomEvent("config-changed", {
                detail: { config: this._config },
                bubbles: true,
                composed: true
            }));
        }
        catch (e) {
            console.error(e);
            this._creationError = `${this._t("errorPrefix")}${e.message}`;
        }
        finally {
            this._isLoading = false;
        }
    }
    // _createAutomationBridge: 블루프린트 참조 방식으로 _onTargetEntityPicked에 통합 (삭제됨)
    _onActionChange(ev) {
        this._selectedAction = ev.target.value;
    }
    render() {
        if (!this.hass || !this._config)
            return b ``;
        // timer/create + config/automation/config/... are admin-only.
        // Non-admin users see only the "pick existing timer" path.
        const isAdmin = !!this.hass.user?.is_admin;
        return b `
      <div class="card-config">
        ${isAdmin ? b `
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
                .selector=${{ entity: { domain: ["light", "switch", "fan", "climate", "media_player"] } }}
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

          ${this._isLoading ? b `
            <div class="status-msg info">
              <ha-icon icon="mdi:loading" class="spin"></ha-icon>
              ${this._t("syncingMessage")}
            </div>
          ` : ""}

          ${this._creationError ? b `
            <div class="status-msg error">
              <ha-icon icon="mdi:alert-circle"></ha-icon>
              ${this._creationError}
            </div>
          ` : ""}
        ` : b `
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
            @value-changed=${(e) => {
            this._config = { ...this._config, entity: e.detail.value };
            this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config }, bubbles: true, composed: true }));
        }}
          ></ha-entity-picker>
        </div>
      </div>
    `;
    }
    static { this.styles = i$3 `
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
  `; }
}
customElements.define("ha-custom-timer-card-editor", HaCustomTimerCardEditor);

// @ts-nocheck
const WEEKDAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// v1.4 모델: 카드는 한 schedule을 단일 view로 다룬다.
// - _activeDays: number[]  (0=Mon … 6=Sun) — 같은 시간 블록 세트가 적용되는 요일들
// - _blocks    : {from,to}[] — 활성 요일들이 공유하는 단일 블록 세트
// 저장 시 활성 요일에는 _blocks, 비활성 요일에는 빈 배열을 내려 보낸다.
class HaCustomScheduleCard extends i {
    static { this.properties = {
        _config: { state: true },
        _hass: { state: false },
        _scheduleData: { state: true },
        _activeDays: { state: true },
        _blocks: { state: true },
        _showCreateWizard: { state: true },
        _isCreating: { state: true },
        _createResult: { state: true },
        _selectedBlockIdx: { state: true },
        _resizingBlockIdx: { state: true },
        _resizingEdge: { state: true },
        _toast: { state: true },
        _confirm: { state: true },
        _isEditing: { state: true },
    }; }
    constructor() {
        super();
        this._scheduleData = null;
        const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1; // 0=Mon, 6=Sun
        this._activeDays = [todayIdx];
        this._blocks = [];
        this._showCreateWizard = false;
        this._isCreating = false;
        this._createResult = null;
        this._lang = "en";
        this._isEditing = false;
        this._selectedBlockIdx = null;
        this._resizingBlockIdx = null;
        this._resizingEdge = null;
        this._toast = null; // { message: string }
        this._confirm = null; // { message, onConfirm }
        this._toastTimer = null;
        this._saveTimer = null; // debounced _updateSchedule
    }
    // 빠른 연속 토글(예: 월·화·수 켜기)에서 매번 서버 왕복하지 않도록
    // 마지막 변경 후 일정 시간 멈춰야 저장한다.
    _scheduleSaveDebounced(ms = 400) {
        if (this._saveTimer)
            clearTimeout(this._saveTimer);
        this._saveTimer = setTimeout(() => {
            this._saveTimer = null;
            this._updateSchedule();
        }, ms);
    }
    // 카드 안의 block / handle / delete 가 아닌 클릭이면 선택 해제.
    // (timeline 빈 영역, day-switcher, card-header, 카드 외부 모두 포함.)
    // pointerdown 핸들러가 editor-column 빈 영역만 처리하던 한계를 메운다.
    connectedCallback() {
        super.connectedCallback();
        this._onDocPointerDown = (e) => {
            if (this._selectedBlockIdx === null)
                return;
            if (this._resizingBlockIdx !== null)
                return;
            // While a confirm modal is open or a save is in flight, leave the
            // selection (and the modal) alone. On mobile (HA Companion), the
            // capture-phase listener used to clear _selectedBlockIdx mid-tap
            // and the resulting lit re-render swapped out the confirm button
            // before its click event landed — so the Delete button looked
            // unresponsive even though the modal was visible.
            if (this._confirm || this._isEditing)
                return;
            const path = e.composedPath ? e.composedPath() : [];
            const keepSelection = path.some(el => {
                const cls = el?.classList;
                if (!cls)
                    return false;
                return cls.contains("editor-block")
                    || cls.contains("block-handle")
                    || cls.contains("block-delete")
                    || cls.contains("block-time-pill")
                    // Confirm modal surfaces — guarded above as well, but kept here
                    // in case _confirm flips after the path was captured.
                    || cls.contains("confirm-overlay")
                    || cls.contains("confirm-card")
                    || cls.contains("confirm-actions")
                    || cls.contains("danger-btn")
                    || cls.contains("ghost-btn");
            });
            if (!keepSelection)
                this._selectedBlockIdx = null;
        };
        document.addEventListener("pointerdown", this._onDocPointerDown, true);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._onDocPointerDown) {
            document.removeEventListener("pointerdown", this._onDocPointerDown, true);
        }
        if (this._saveTimer)
            clearTimeout(this._saveTimer);
        if (this._toastTimer)
            clearTimeout(this._toastTimer);
    }
    _showToast(message, ms = 3000) {
        if (this._toastTimer)
            clearTimeout(this._toastTimer);
        this._toast = { message };
        this._toastTimer = setTimeout(() => { this._toast = null; this._toastTimer = null; }, ms);
    }
    _openConfirm(message, onConfirm) {
        this._confirm = { message, onConfirm };
    }
    _closeConfirm() {
        this._confirm = null;
    }
    setConfig(config) {
        this._config = config;
        if (this._hass)
            this._loadSchedule();
    }
    set hass(hass) {
        const oldHass = this._hass;
        this._hass = hass;
        let shouldUpdate = !oldHass; // 최초로 hass가 주입될 때 렌더링 강제 트리거
        // 언어 감지
        if (hass && hass.language) {
            const newLang = hass.language.startsWith("ko") ? "ko" : "en";
            if (this._lang !== newLang) {
                this._lang = newLang;
                shouldUpdate = true;
            }
        }
        if (shouldUpdate) {
            this.requestUpdate(); // hass 최초 주입 또는 언어 변경 시 화면 갱신
        }
        // 최초 연결 시 데이터 초기화
        if (!oldHass && hass && this._config) {
            this._loadSchedule();
        }
    }
    _t(key) {
        return LOCALES[this._lang][key] || LOCALES["en"][key];
    }
    async _loadSchedule() {
        if (!this._hass || !this._config.entity)
            return;
        try {
            const result = await this._hass.callWS({
                type: "schedule/list",
            });
            const entityId = this._config.entity;
            const entitySlug = entityId.split(".")[1];
            // entity registry에서 unique_id(=storage id)를 WebSocket으로 직접 조회
            // HA에서 entity_id를 rename하면 slug와 storage id가 달라지므로 필수
            let storageId = entitySlug;
            try {
                const regEntry = await this._hass.callWS({
                    type: "config/entity_registry/get",
                    entity_id: entityId,
                });
                if (regEntry && regEntry.unique_id) {
                    storageId = regEntry.unique_id;
                    console.log("[schedule-ui] entity registry → unique_id:", storageId);
                }
            }
            catch (regErr) {
                console.warn("[schedule-ui] entity registry 조회 실패, slug 사용:", entitySlug, regErr);
            }
            // 1차: storage id(unique_id)로 매칭
            let match = result.find(s => s.id === storageId);
            // 2차: entity_id slug로 매칭
            if (!match) {
                match = result.find(s => s.id === entitySlug);
            }
            // 3차: friendly_name으로 매칭
            if (!match) {
                const entityState = this._hass.states?.[entityId];
                const friendlyName = entityState?.attributes?.friendly_name;
                if (friendlyName) {
                    match = result.find(s => s.name === friendlyName);
                }
            }
            console.log("[schedule-ui] loadSchedule - entity:", entityId, "storageId:", storageId, "matched:", match ? match.id : "NONE");
            if (!match && result.length > 0) {
                console.warn("[schedule-ui] 매칭 실패! available ids:", result.map(s => `${s.id}(${s.name})`));
            }
            if (match) {
                this._scheduleData = match;
                this._hydrateFromSchedule(match);
            }
        }
        catch (e) {
            console.error("[schedule-ui] Failed to load schedules", e);
        }
    }
    // 두 블록이 겹치는지 (touching은 겹침으로 간주하지 않음 — 17:00 끝 / 17:00 시작은 OK)
    _blocksOverlap(a, b) {
        return a.from < b.to && b.from < a.to;
    }
    // 정렬된 블록들에서 겹치는/맞닿은 구간들을 하나로 병합. HA schedule API는
    // 같은 요일에 겹치는 블록을 거부하므로 hydrate 단계에서 normalize한다.
    _mergeIntervals(blocks) {
        const sorted = [...blocks].sort((a, b) => a.from.localeCompare(b.from));
        const merged = [];
        for (const b of sorted) {
            if (merged.length === 0) {
                merged.push({ ...b });
                continue;
            }
            const last = merged[merged.length - 1];
            if (b.from <= last.to) {
                // 겹침 또는 인접 → 통합
                if (b.to > last.to)
                    last.to = b.to;
            }
            else {
                merged.push({ ...b });
            }
        }
        return merged;
    }
    // schedule API 응답을 카드 내부 모델(_blocks + _activeDays)로 풀어낸다.
    // 기존 사용자 데이터가 요일별로 달랐다면 합집합 후 시간 겹침은 자동 병합한다.
    _hydrateFromSchedule(match) {
        const rawUnion = [];
        const activeSet = new Set();
        for (let i = 0; i < WEEKDAYS.length; i++) {
            const dayBlocks = match[WEEKDAYS[i]] || [];
            if (dayBlocks.length > 0)
                activeSet.add(i);
            for (const b of dayBlocks) {
                rawUnion.push({ from: b.from, to: b.to });
            }
        }
        const merged = this._mergeIntervals(rawUnion);
        this._blocks = merged;
        if (activeSet.size === 0) {
            const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
            this._activeDays = [todayIdx];
        }
        else {
            this._activeDays = [...activeSet].sort((a, b) => a - b);
        }
        // hydrate 단계에서 normalize가 발생했다는 신호: 서버의 raw 블록 합산 수와 merged 수가 다르면 사용자에게 알린다.
        // (rawUnion의 unique 개수가 merged보다 많으면 겹침이 있었다는 뜻.)
        const uniqueRaw = new Set(rawUnion.map(b => `${b.from}~${b.to}`)).size;
        if (uniqueRaw > merged.length) {
            console.warn("[schedule-ui] hydrate: merged overlapping blocks", { rawUnique: uniqueRaw, merged: merged.length });
            // 다음 update 시점에 자동으로 정리된 데이터가 서버에 반영된다.
        }
    }
    async _updateSchedule() {
        if (!this._hass || !this._scheduleData)
            return;
        this._isEditing = true;
        try {
            const scheduleId = this._scheduleData.id;
            const updatePayload = { name: this._scheduleData.name };
            if (this._scheduleData.icon)
                updatePayload.icon = this._scheduleData.icon;
            // v1.4: 활성 요일에는 unified blocks를, 비활성에는 빈 배열을 채운다.
            const sortedBlocks = [...this._blocks].sort((a, b) => a.from.localeCompare(b.from));
            const activeSet = new Set(this._activeDays);
            for (let i = 0; i < WEEKDAYS.length; i++) {
                updatePayload[WEEKDAYS[i]] = activeSet.has(i) ? sortedBlocks : [];
            }
            console.log("[schedule-ui] updateSchedule - schedule_id:", scheduleId, "activeDays:", this._activeDays, "blocks:", sortedBlocks);
            await this._hass.callWS({
                type: "schedule/update",
                schedule_id: scheduleId,
                ...updatePayload,
            });
            await this._loadSchedule();
        }
        catch (e) {
            console.error("[schedule-ui] updateSchedule FAILED:", e);
            // schedule/update requires write access to the schedule helper, which
            // ships as admin-only by default in HA. Surface a translated, friendly
            // message instead of dumping the raw 401 / "unauthorized" string.
            const code = e?.code || e?.error?.code;
            const msg = String(e?.message || e || "").toLowerCase();
            const isAuth = code === "unauthorized" || msg.includes("unauthorized") || msg.includes("not allowed");
            this._showToast(isAuth ? this._t("unauthorized") : `${this._t("saveFailed")} ${e?.message || e}`);
            await this._loadSchedule();
        }
        finally {
            this._isEditing = false;
        }
    }
    _deleteBlock(blockIdx) {
        if (this._isEditing || !this._scheduleData || !this._config?.entity)
            return;
        if (blockIdx < 0 || blockIdx >= this._blocks.length)
            return;
        this._openConfirm(this._t("confirmDeleteBlock"), async () => {
            this._closeConfirm();
            this._blocks = this._blocks.filter((_, i) => i !== blockIdx);
            this._selectedBlockIdx = null;
            await this._updateSchedule();
        });
    }
    // 픽셀 Y → 분(15분 스냅)
    _yToMinutes(barEl, clientY) {
        const rect = barEl.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
        const SNAP = 15;
        const minutes = Math.round((ratio * 1440) / SNAP) * SNAP;
        return Math.max(0, Math.min(1440, minutes));
    }
    // 분 → "HH:MM:00"
    _minutesToTimeStr(min) {
        const safe = Math.max(0, Math.min(1439, min));
        const h = Math.floor(safe / 60);
        const m = safe % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:00`;
    }
    // 빈 영역 클릭 한 번으로 기본 60분 블록 생성. 모바일에서 드래그-생성이
    // 페이지 스크롤과 충돌해 답답하다는 피드백으로 단순 탭 방식으로 전환.
    // 만든 블록은 자동 선택되어 즉시 핸들로 길이 조정 가능.
    async _onColumnClick(e) {
        if (this._isEditing)
            return;
        // 블록/핸들/삭제 버튼/시간 pill 위에서 발생한 click 은 무시.
        // (블록·삭제는 자체 stopPropagation, 핸들은 click 발생 가능성 차단용)
        const path = e.composedPath ? e.composedPath() : [e.target];
        const onBlockPart = path.some(el => {
            const cls = el?.classList;
            if (!cls)
                return false;
            return cls.contains('editor-block')
                || cls.contains('block-handle')
                || cls.contains('block-delete')
                || cls.contains('block-time-pill');
        });
        if (onBlockPart)
            return;
        const column = e.currentTarget;
        const tapMin = this._yToMinutes(column, e.clientY);
        // 탭 지점을 시작으로 60분(없으면 다음 블록 직전까지) 블록. 24:00 초과 방지.
        const DEFAULT_LEN = 60;
        const sorted = [...this._blocks].sort((a, b) => a.from.localeCompare(b.from));
        const prevEnd = sorted
            .map(b => this._timeToMinutes(b.to))
            .filter(t => t <= tapMin)
            .reduce((m, t) => Math.max(m, t), 0);
        const nextStart = sorted
            .map(b => this._timeToMinutes(b.from))
            .filter(t => t > tapMin)
            .reduce((m, t) => Math.min(m, t), 1440);
        // 탭이 기존 블록 위라면 무시(위에서 걸러지지만 방어적으로)
        if (tapMin < prevEnd)
            return;
        const start = Math.max(prevEnd, tapMin);
        const end = Math.min(nextStart, start + DEFAULT_LEN);
        if (end - start < 15) {
            this._showToast(this._t("blockOverlap"));
            return;
        }
        const newBlock = {
            from: this._minutesToTimeStr(start),
            to: this._minutesToTimeStr(end),
        };
        const nextBlocks = [...this._blocks, newBlock]
            .sort((a, b) => a.from.localeCompare(b.from));
        this._blocks = nextBlocks;
        // 핸들이 바로 보이도록 새 블록을 선택 상태로
        this._selectedBlockIdx = nextBlocks.findIndex(b => b.from === newBlock.from);
        await this._updateSchedule();
    }
    // 블록 선택/해제 (선택 시 핸들 + 삭제 버튼 노출)
    _selectBlock(e, blockIdx) {
        e.stopPropagation();
        this._selectedBlockIdx = this._selectedBlockIdx === blockIdx ? null : blockIdx;
    }
    _onSelectedDeleteClick(e, blockIdx) {
        e.stopPropagation();
        this._deleteBlock(blockIdx);
    }
    // 블록 리사이즈 (상단/하단 핸들)
    _onHandlePointerDown(e, blockIdx, edge) {
        e.stopPropagation();
        if (this._isEditing)
            return;
        try {
            e.currentTarget.setPointerCapture(e.pointerId);
        }
        catch (_) { /* noop */ }
        this._resizingBlockIdx = blockIdx;
        this._resizingEdge = edge;
    }
    _onHandlePointerMove(e, blockIdx, edge) {
        if (this._resizingBlockIdx !== blockIdx || this._resizingEdge !== edge)
            return;
        const column = e.currentTarget.closest('.editor-column');
        if (!column)
            return;
        const block = this._blocks[blockIdx];
        if (!block)
            return;
        const min = this._yToMinutes(column, e.clientY);
        const fromMin = this._timeToMinutes(block.from);
        const toMin = this._timeToMinutes(block.to);
        const otherBlocks = this._blocks.filter((_, i) => i !== blockIdx);
        let newFrom = fromMin;
        let newTo = toMin;
        if (edge === 'top') {
            const prevEnd = otherBlocks
                .map(b => this._timeToMinutes(b.to))
                .filter(t => t <= toMin)
                .reduce((max, t) => Math.max(max, t), 0);
            newFrom = Math.max(prevEnd, Math.min(min, toMin - 15));
        }
        else {
            const nextStart = otherBlocks
                .map(b => this._timeToMinutes(b.from))
                .filter(t => t >= fromMin)
                .reduce((m2, t) => Math.min(m2, t), 1440);
            newTo = Math.min(nextStart, Math.max(min, fromMin + 15));
        }
        if (newFrom === fromMin && newTo === toMin)
            return;
        this._blocks = this._blocks.map((b, i) => i === blockIdx
            ? { from: this._minutesToTimeStr(newFrom), to: this._minutesToTimeStr(newTo) }
            : b);
    }
    async _onHandlePointerUp(e, blockIdx, edge) {
        if (this._resizingBlockIdx !== blockIdx || this._resizingEdge !== edge)
            return;
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        }
        catch (_) { /* noop */ }
        this._resizingBlockIdx = null;
        this._resizingEdge = null;
        await this._updateSchedule();
    }
    // unified blocks 안에서 겹침 검사 (블록 인덱스 제외 가능)
    _overlapsExisting(startMin, endMin, excludeIdx = -1) {
        return this._blocks.some((b, i) => {
            if (i === excludeIdx)
                return false;
            const bStart = this._timeToMinutes(b.from);
            const bEnd = this._timeToMinutes(b.to);
            return startMin < bEnd && endMin > bStart;
        });
    }
    // day-switcher 토글 (multi-select). 최소 1개 보장.
    // 즉시 반영 후 debounced save — 사용자가 여러 요일을 연속해서 토글해도
    // 잠금/왕복 없이 한 번에 묶어서 저장된다.
    _toggleActiveDay(idx) {
        const has = this._activeDays.includes(idx);
        const next = has
            ? this._activeDays.filter(d => d !== idx)
            : [...this._activeDays, idx].sort((a, b) => a - b);
        if (next.length === 0) {
            this._showToast(this._t("atLeastOneDay"));
            return;
        }
        this._activeDays = next;
        this._scheduleSaveDebounced();
    }
    _formatTime(timeStr) {
        if (!timeStr)
            return "";
        let [hours, minutes] = timeStr.split(":");
        let date = new Date();
        date.setHours(parseInt(hours));
        date.setMinutes(parseInt(minutes));
        return new Intl.DateTimeFormat(this._lang, {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }).format(date);
    }
    // "HH:MM:SS" 형식의 시간 문자열을 하루 기준 분(minutes)으로 변환
    _timeToMinutes(timeStr) {
        if (!timeStr)
            return 0;
        const parts = timeStr.split(":");
        return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }
    render() {
        if (!this._config)
            return b `<ha-card><div class="error">${this._t("notConfigured")}</div></ha-card>`;
        // 카드 피커 프리뷰 또는 hass 미로드 시: 간단한 플레이스홀더 표시
        if (!this._hass) {
            return b `
        <ha-card>
          <div class="card-header">
            <div class="name">${this._config.title || this._t("scheduleManager")}</div>
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
      `;
        }
        // 엔티티 미설정 시 카드 피커 미리보기용 더미 데이터
        let isDummy = false;
        let titleName = this._scheduleData?.name;
        let icon = this._scheduleData?.icon;
        let effectiveBlocks = this._blocks;
        let effectiveActiveDays = this._activeDays;
        if (!this._config.entity) {
            isDummy = true;
            titleName = this._t("scheduleManager") + this._t("previewSuffix");
            icon = "mdi:calendar-star";
            effectiveBlocks = [{ from: "09:00:00", to: "18:00:00" }];
            effectiveActiveDays = [0, 1, 2, 3, 4];
        }
        const customTitle = this._config.title || titleName || this._t("scheduleManager");
        const MINUTES_IN_DAY = 1440;
        const now = new Date();
        const todayIdx = (now.getDay() + 6) % 7;
        const showNow = effectiveActiveDays.includes(todayIdx);
        const nowPos = ((now.getHours() * 60 + now.getMinutes()) / MINUTES_IN_DAY) * 100;
        const sortedBlocks = [...effectiveBlocks].sort((a, b) => a.from.localeCompare(b.from));
        return b `
      <ha-card class="${isDummy ? 'is-dummy' : ''}">
        ${isDummy ? b `<div class="dummy-badge">${this._t("previewSuffix").trim()}</div>` : ''}

        <div class="card-header">
          <div class="name">${customTitle}</div>
          <div class="header-right">
            <ha-icon icon="${icon || 'mdi:calendar-clock'}"></ha-icon>
          </div>
        </div>

        <div class="card-content">
          <div class="day-editor">
            <div class="day-editor-grid">
              <div class="hour-labels-col" aria-hidden="true">
                ${Array.from({ length: 25 }, (_, h) => b `<span>${h}</span>`)}
              </div>
              <div class="editor-column"
                   role="application"
                   aria-label="${this._t("scheduleManager")}"
                   @click=${this._onColumnClick}>
                ${Array.from({ length: 24 }, (_, h) => b `
                  <div class="hour-gridline" style="top: ${(h / 24) * 100}%;"></div>
                `)}
                ${sortedBlocks.map((block, blockIdx) => {
            const startMin = this._timeToMinutes(block.from);
            const endMin = this._timeToMinutes(block.to);
            const top = (startMin / MINUTES_IN_DAY) * 100;
            const height = ((endMin - startMin) / MINUTES_IN_DAY) * 100;
            const isSelected = this._selectedBlockIdx === blockIdx;
            return b `
                    <button type="button"
                            class="editor-block ${isSelected ? 'selected' : ''}"
                            style="top: ${top}%; height: ${Math.max(height, 0.5)}%;"
                            title="${this._formatTime(block.from)} ~ ${this._formatTime(block.to)}"
                            aria-label="${this._formatTime(block.from)} – ${this._formatTime(block.to)}"
                            @click=${(e) => this._selectBlock(e, blockIdx)}
                            @pointerdown=${(e) => e.stopPropagation()}>
                      ${isSelected ? b `
                        <span class="block-time-pill">
                          ${block.from.slice(0, 5)}~${block.to.slice(0, 5)}
                        </span>
                        <span class="block-handle handle-top"
                              aria-label="${this._t("startTime")}"
                              @pointerdown=${(e) => this._onHandlePointerDown(e, blockIdx, 'top')}
                              @pointermove=${(e) => this._onHandlePointerMove(e, blockIdx, 'top')}
                              @pointerup=${(e) => this._onHandlePointerUp(e, blockIdx, 'top')}
                              @pointercancel=${(e) => this._onHandlePointerUp(e, blockIdx, 'top')}></span>
                        <span class="block-handle handle-bottom"
                              aria-label="${this._t("endTime")}"
                              @pointerdown=${(e) => this._onHandlePointerDown(e, blockIdx, 'bottom')}
                              @pointermove=${(e) => this._onHandlePointerMove(e, blockIdx, 'bottom')}
                              @pointerup=${(e) => this._onHandlePointerUp(e, blockIdx, 'bottom')}
                              @pointercancel=${(e) => this._onHandlePointerUp(e, blockIdx, 'bottom')}></span>
                        <button type="button"
                                class="block-delete"
                                aria-label="${this._t("delete")}"
                                title="${this._t("delete")}"
                                @click=${(e) => this._onSelectedDeleteClick(e, blockIdx)}>
                          <span aria-hidden="true">−</span>
                        </button>
                      ` : ''}
                    </button>
                  `;
        })}
                ${showNow ? b `<div class="now-line" style="top: ${nowPos}%;"><span class="now-line-label">${this._minutesToTimeStr(now.getHours() * 60 + now.getMinutes()).slice(0, 5)}</span></div>` : ''}
                ${sortedBlocks.length === 0 ? b `
                  <div class="timeline-empty-hint">${this._t("empty")}</div>
                ` : ''}
              </div>
            </div>
          </div>

          <div class="day-switcher" role="group" aria-label="${this._t("activeDays")}">
            ${WEEKDAYS.map((_, i) => {
            const isActive = effectiveActiveDays.includes(i);
            return b `
                <button type="button"
                        class="day-pill ${isActive ? 'selected' : ''}"
                        aria-pressed="${isActive}"
                        ?disabled=${isDummy}
                        @click=${() => this._toggleActiveDay(i)}>
                  ${this._t("daysShort")[i]}
                </button>
              `;
        })}
          </div>
          <div class="active-days-help">${this._t("activeDaysHelp")}</div>
        </div>

        ${this._toast ? b `
          <div class="toast" role="status" aria-live="polite">${this._toast.message}</div>
        ` : ''}

        ${this._confirm ? b `
          <div class="confirm-overlay" @click=${this._closeConfirm}>
            <div class="confirm-card" role="alertdialog" aria-modal="true" @click=${(e) => e.stopPropagation()}>
              <div class="confirm-title">${this._t("confirmDeleteTitle")}</div>
              <div class="confirm-body">${this._confirm.message}</div>
              <div class="confirm-actions">
                <button type="button" class="ghost-btn" @click=${this._closeConfirm}>${this._t("cancel")}</button>
                <button type="button" class="danger-btn" @click=${this._confirm.onConfirm}>${this._t("delete")}</button>
              </div>
            </div>
          </div>
        ` : ''}
      </ha-card>
    `;
    }
    static { this.styles = i$3 `
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

    /* time pill은 항상 블록 *안쪽* 좌측 상단에 떠 있다. 카드의 overflow:hidden
       에 잘리지 않도록 외부(top:-28px)에 띄우는 대신 inside-floating으로
       위치를 잡는다. 블록 높이가 pill보다 작아 살짝 넘쳐도 카드 안이므로 잘림 0. */
    .block-time-pill {
      position: absolute;
      top: 4px;
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
      cursor: ns-resize;
      /* 핸들은 다른 요소보다 항상 위에 — 작은 블록에서 아래 블록과 겹쳐도 잡기 좋도록 */
      z-index: 1000;
      /* 양쪽 핸들 모두 가로 중앙 정렬 */
      left: calc(50% - 7px);
    }

    .block-handle::after {
      content: "";
      position: absolute;
      inset: -10px; /* 24x24 hit target */
    }

    .block-handle.handle-top    { top: -7px; }
    .block-handle.handle-bottom { bottom: -7px; }

    /* 삭제 버튼도 블록 *안쪽* 우측 상단. 이전엔 top:-10px right:-10px로
       블록 모서리에 걸려 있어서 ha-card overflow:hidden에 잘렸다. */
    .block-delete {
      position: absolute;
      top: 4px;
      right: 4px;
      width: 22px;
      height: 22px;
      background: var(--custom-danger);
      color: #fff;
      border: 2px solid #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 0;
      font-size: 1rem;
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
  `; }
    // HA 커스텀 카드 편집기 인스턴스 연동
    static getConfigElement() {
        return document.createElement("ha-custom-schedule-card-editor");
    }
    // 카드 피커에서 처음 배치될 때의 기본값 (type은 HA가 자동 추가하므로 포함 금지)
    static getStubConfig() {
        return {};
    }
    // masonry 뷰를 위한 기본 예상 카드 높이 (1단위 = 50px)
    getCardSize() {
        return this._config?.entity ? 5 : 7;
    }
    // sections 뷰를 위한 그리드 옵션 (세로 길이를 내용에 맞추기 위해 rows는 지정하지 않음)
    getGridOptions() {
        return {
            columns: 12,
            min_rows: 3,
        };
    }
}
// ---------------------------------------------------------
// Visual Editor 구현 영역
// ---------------------------------------------------------
customElements.define("ha-custom-schedule-card", HaCustomScheduleCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "ha-custom-schedule-card",
    name: LOCALES[detectLang()].cardName,
    preview: true,
    description: LOCALES[detectLang()].cardDescription,
    documentationURL: "https://github.com/jewon-oh/schedule-ui",
});

// @ts-nocheck
class HaCustomTimerCard extends i {
    static { this.properties = {
        hass: { type: Object },
        _config: { state: true },
        _now: { state: true },
        _inputHours: { state: true },
        _inputMinutes: { state: true },
        _inputSeconds: { state: true }
    }; }
    constructor() {
        super();
        this._now = Date.now();
        this._inputHours = 0;
        this._inputMinutes = 30;
        this._inputSeconds = 0;
    }
    connectedCallback() {
        super.connectedCallback();
        this._timerInterval = setInterval(() => {
            this._now = Date.now();
        }, 1000);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._timerInterval) {
            clearInterval(this._timerInterval);
        }
    }
    static getConfigElement() {
        return document.createElement("ha-custom-timer-card-editor");
    }
    static getStubConfig() {
        return {
            type: "custom:ha-custom-timer-card"
        };
    }
    setConfig(config) {
        if (!config)
            throw new Error("Invalid configuration");
        this._config = config;
    }
    get _lang() {
        return this.hass?.language && this.hass.language.includes('ko') ? 'ko' : 'en';
    }
    _t(key) {
        return TIMER_LOCALES[this._lang]?.[key] ?? TIMER_LOCALES.en[key];
    }
    // Parses "HH:MM:SS" into total seconds
    _parseDurationToSeconds(durationStr) {
        if (!durationStr)
            return 0;
        // Format could be "0:30:00" or "00:30:00"
        const parts = durationStr.split(':').map(Number);
        if (parts.length === 3) {
            return (parts[0] * 3600) + (parts[1] * 60) + parts[2];
        }
        return 0;
    }
    _formatSeconds(sec) {
        if (sec <= 0)
            return "00:00:00";
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = Math.floor(sec % 60);
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    _callService(service, data = {}) {
        if (!this._config.entity)
            return;
        this.hass.callService("timer", service, { entity_id: this._config.entity, ...data });
    }
    _startTimerCustom() {
        const totalSec = (this._inputHours * 3600) + (this._inputMinutes * 60) + this._inputSeconds;
        if (totalSec <= 0)
            return;
        const durationStr = this._formatSeconds(totalSec);
        this._callService("start", { duration: durationStr });
    }
    _startTimerPreset(minutes) {
        this._callService("start", { duration: this._formatSeconds(minutes * 60) });
    }
    _addTime(minutes) {
        let totalMinutes = (this._inputHours * 60) + this._inputMinutes + minutes;
        if (totalMinutes < 0)
            totalMinutes = 0;
        this._inputHours = Math.floor(totalMinutes / 60);
        this._inputMinutes = totalMinutes % 60;
        // 최대 시간 초과 방지
        if (this._inputHours > 99) {
            this._inputHours = 99;
            this._inputMinutes = 59;
        }
        this.requestUpdate();
    }
    // 시간 값 증감 핸들러
    _adjustTime(field, delta) {
        const limits = { hours: { min: 0, max: 23 }, minutes: { min: 0, max: 59 }, seconds: { min: 0, max: 59 } };
        const fieldMap = { hours: '_inputHours', minutes: '_inputMinutes', seconds: '_inputSeconds' };
        const propName = fieldMap[field];
        const limit = limits[field];
        let val = (this[propName] || 0) + delta;
        if (val < limit.min)
            val = limit.max;
        if (val > limit.max)
            val = limit.min;
        this[propName] = val;
    }
    // 숫자 직접 입력 핸들러
    _onSpinInput(field, ev) {
        const limits = { hours: { min: 0, max: 23 }, minutes: { min: 0, max: 59 }, seconds: { min: 0, max: 59 } };
        const fieldMap = { hours: '_inputHours', minutes: '_inputMinutes', seconds: '_inputSeconds' };
        const limit = limits[field];
        let val = parseInt(ev.target.value) || 0;
        if (val < limit.min)
            val = limit.min;
        if (val > limit.max)
            val = limit.max;
        this[fieldMap[field]] = val;
    }
    render() {
        if (!this._config)
            return b `<ha-card><div class="error">${this._t("notConfigured")}</div></ha-card>`;
        const isDummy = !this._config.entity;
        let state = "idle";
        let remainingSec = 0;
        let totalDurationSec = 3600;
        let customTitle = this._config.title || this._t("defaultTitle");
        if (!isDummy && this.hass && this.hass.states[this._config.entity]) {
            const stateObj = this.hass.states[this._config.entity];
            state = stateObj.state;
            customTitle = this._config.title || stateObj.attributes.friendly_name || this._config.entity;
            totalDurationSec = this._parseDurationToSeconds(stateObj.attributes.duration) || 3600;
            if (state === "active" && stateObj.attributes.finishes_at) {
                let calcSec = Math.floor((new Date(stateObj.attributes.finishes_at).getTime() - this._now) / 1000);
                // 동적 오차 보정: 클라이언트 시간이 느려 calcSec가 기준시간을 초과하면 오차(offset)를 고정 저장
                if (this._timeOffset === undefined || this._lastTimerState !== "active") {
                    this._timeOffset = Math.max(0, calcSec - totalDurationSec);
                }
                // 오차를 빼서 0까지 정확히 떨어지도록 맞춤
                remainingSec = Math.max(0, calcSec - (this._timeOffset || 0));
                remainingSec = Math.min(totalDurationSec, remainingSec);
            }
            else if (state === "paused" && stateObj.attributes.remaining) {
                remainingSec = this._parseDurationToSeconds(stateObj.attributes.remaining);
                this._timeOffset = undefined;
            }
            else if (state === "idle") {
                remainingSec = 0;
                this._timeOffset = undefined;
            }
            this._lastTimerState = state;
        }
        else if (isDummy) {
            state = "idle";
            this._inputHours = 0;
            this._inputMinutes = 30;
        }
        const progressPercent = totalDurationSec > 0
            ? Math.max(0, Math.min(100, (remainingSec / totalDurationSec) * 100))
            : 0;
        const h = Math.floor(remainingSec / 3600);
        const m = Math.floor((remainingSec % 3600) / 60);
        const s = Math.floor(remainingSec % 60);
        return b `
      <ha-card>
        <div class="card-header">
          <div class="name">${customTitle}</div>
          <div class="header-right">
            ${state !== 'idle' ? b `
              <span class="state-badge ${state}">${state === 'active' ? this._t('start') : this._t('pausedMessage')}</span>
            ` : ''}
            <ha-icon icon="${state === 'active' ? 'mdi:timer-sand' : 'mdi:timer'}"></ha-icon>
          </div>
        </div>

        <div class="card-content">
          ${state === "idle" ? b `
            <!-- 대기 상태: 숫자 증감 입력 -->
            <div class="time-spinner-row">
              <div class="time-spinner">
                <button class="spin-btn" @click="${() => this._adjustTime('hours', 1)}"><ha-icon icon="mdi:chevron-up"></ha-icon></button>
                <input class="spin-value" type="number" min="0" max="23" .value="${String(this._inputHours).padStart(2, '0')}" @change="${e => this._onSpinInput('hours', e)}" @focus="${e => e.target.select()}">
                <button class="spin-btn" @click="${() => this._adjustTime('hours', -1)}"><ha-icon icon="mdi:chevron-down"></ha-icon></button>
                <div class="spin-label">${this._t("hoursLabel")}</div>
              </div>
              <div class="spin-separator">:</div>
              <div class="time-spinner">
                <button class="spin-btn" @click="${() => this._adjustTime('minutes', 1)}"><ha-icon icon="mdi:chevron-up"></ha-icon></button>
                <input class="spin-value" type="number" min="0" max="59" .value="${String(this._inputMinutes).padStart(2, '0')}" @change="${e => this._onSpinInput('minutes', e)}" @focus="${e => e.target.select()}">
                <button class="spin-btn" @click="${() => this._adjustTime('minutes', -1)}"><ha-icon icon="mdi:chevron-down"></ha-icon></button>
                <div class="spin-label">${this._t("minutesLabel")}</div>
              </div>
              <div class="spin-separator">:</div>
              <div class="time-spinner">
                <button class="spin-btn" @click="${() => this._adjustTime('seconds', 1)}"><ha-icon icon="mdi:chevron-up"></ha-icon></button>
                <input class="spin-value" type="number" min="0" max="59" .value="${String(this._inputSeconds).padStart(2, '0')}" @change="${e => this._onSpinInput('seconds', e)}" @focus="${e => e.target.select()}">
                <button class="spin-btn" @click="${() => this._adjustTime('seconds', -1)}"><ha-icon icon="mdi:chevron-down"></ha-icon></button>
                <div class="spin-label">${this._t("secondsLabel")}</div>
              </div>
            </div>
          ` : b `
            <!-- 동작/일시정지 상태: 남은 시간 표시 + 바 -->
            <div class="timer-display">
              <div class="timer-remaining">
                <span class="time-digit">${String(h).padStart(2, '0')}</span>
                <span class="time-colon">:</span>
                <span class="time-digit">${String(m).padStart(2, '0')}</span>
                <span class="time-colon">:</span>
                <span class="time-digit">${String(s).padStart(2, '0')}</span>
              </div>
              <div class="timer-message" style="margin-top: 8px; font-size: 0.95rem; color: var(--custom-secondary); display: flex; justify-content: center;">
                ${(() => {
            let timeArr = [];
            if (h > 0)
                timeArr.push(h + this._t("hoursStr"));
            if (m > 0 || h > 0)
                timeArr.push(m + this._t("minutesStr"));
            timeArr.push(s + this._t("secondsStr"));
            const remainStr = timeArr.join(' ');
            return b `<span style="background: rgba(0,0,0,0.2); padding: 4px 12px; border-radius: 12px;">${remainStr} ${this._t("countdownMessage")}</span>`;
        })()}
              </div>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar ${state}" style="width: ${progressPercent}%;"></div>
            </div>
          `}

          <div class="presets-container" style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
            <div class="presets">
              <button class="preset-btn" @click="${() => this._addTime(5)}" ?disabled="${state !== 'idle' && !isDummy}">${this._t('preset5m')}</button>
              <button class="preset-btn" @click="${() => this._addTime(10)}" ?disabled="${state !== 'idle' && !isDummy}">${this._t('preset10m')}</button>
              <button class="preset-btn" @click="${() => this._addTime(30)}" ?disabled="${state !== 'idle' && !isDummy}">${this._t('preset30m')}</button>
            </div>
            <div class="presets">
              <button class="preset-btn minus" @click="${() => this._addTime(-5)}" ?disabled="${state !== 'idle' && !isDummy}">${this._t('presetMinus5m')}</button>
              <button class="preset-btn minus" @click="${() => this._addTime(-10)}" ?disabled="${state !== 'idle' && !isDummy}">${this._t('presetMinus10m')}</button>
              <button class="preset-btn minus" @click="${() => this._addTime(-30)}" ?disabled="${state !== 'idle' && !isDummy}">${this._t('presetMinus30m')}</button>
            </div>
          </div>

          <div class="controls">
            ${state === "idle" ? b `
              <button class="btn btn-primary start-btn" @click="${() => this._startTimerCustom()}" ?disabled="${isDummy}">
                <ha-icon icon="mdi:play"></ha-icon> ${this._t('start')}
              </button>
            ` : b `
              ${state === "active" ? b `
                <button class="btn btn-secondary" @click="${() => this._callService('pause')}" ?disabled="${isDummy}">
                  <ha-icon icon="mdi:pause"></ha-icon> ${this._t('pause')}
                </button>
              ` : b `
                <button class="btn btn-primary" @click="${() => this._callService('start')}" ?disabled="${isDummy}">
                  <ha-icon icon="mdi:play"></ha-icon> ${this._t('resume')}
                </button>
              `}
              <button class="btn btn-danger" @click="${() => this._callService('cancel')}" ?disabled="${isDummy}">
                <ha-icon icon="mdi:stop"></ha-icon> ${this._t('stop')}
              </button>
            `}
          </div>
        </div>
      </ha-card>
    `;
    }
    static { this.styles = i$3 `
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
  `; }
}
customElements.define("ha-custom-timer-card", HaCustomTimerCard);
// ==========================================
// Editor Card (Wizard)
// ==========================================
window.customCards = window.customCards || [];
(() => {
    const t = TIMER_LOCALES[detectLang()] ?? TIMER_LOCALES.en;
    window.customCards.push({
        type: "ha-custom-timer-card",
        name: t.cardName,
        preview: true,
        description: t.cardDescription,
        documentationURL: "https://github.com/jewon-oh/schedule-ui",
    });
})();

// @ts-nocheck
// Entry point for the schedule-ui Lovelace bundle.
//
// Each card and its editor lives in its own module under src/cards and
// src/editors. They self-register via customElements.define and append
// themselves to window.customCards as a side effect of being imported.
//
// Adding a new card here is therefore a two-step process:
//   1. drop the module under src/cards/<name>.ts (or src/editors/<name>.ts)
//   2. add an import "./..." line below.
//
// Anything else (shared constants, helpers, types) should live in src/
// alongside whichever module actually owns it — there is no longer a
// "main card" file here. Keep this entry point as small as possible.
console.log("%c[schedule-ui] v1.4.4 loaded", "color: #03a9f4; font-weight: bold; font-size: 14px;");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXItc2NoZWR1bGUtY2FyZC5qcyIsInNvdXJjZXMiOlsic3JjL3NyYy9sb2NhbGVzL3NjaGVkdWxlLnRzIiwic3JjL3NyYy9sb2NhbGVzL3RpbWVyLnRzIiwic3JjL3NyYy9sb2NhbGVzL2luZGV4LnRzIiwibm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9jc3MtdGFnLmpzIiwibm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9yZWFjdGl2ZS1lbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpdC1odG1sLmpzIiwibm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzIiwic3JjL3NyYy9lZGl0b3JzL3NjaGVkdWxlLWVkaXRvci50cyIsInNyYy9zcmMvZWRpdG9ycy90aW1lci1lZGl0b3IudHMiLCJzcmMvc3JjL2NhcmRzL3NjaGVkdWxlLWNhcmQudHMiLCJzcmMvc3JjL2NhcmRzL3RpbWVyLWNhcmQudHMiLCJzcmMvc3JjL3RpbWVyLXNjaGVkdWxlLWNhcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU2NoZWR1bGUgY2FyZCB0cmFuc2xhdGlvbnMuXG4vLyBLZXlzIGFyZSBjYW1lbENhc2UgaWRlbnRpZmllcnMgY29uc3VtZWQgYnkgSGFDdXN0b21TY2hlZHVsZUNhcmQgYW5kIGl0cyBlZGl0b3IuXG5leHBvcnQgY29uc3QgTE9DQUxFUyA9IHtcbiAga286IHtcbiAgICBhZGRCbG9jazogXCLsg4gg67iU66GdIOy2lOqwgFwiLFxuICAgIHN0YXJ0VGltZTogXCLsi5zsnpEg7Iuc6rCEXCIsXG4gICAgZW5kVGltZTogXCLsooXro4wg7Iuc6rCEXCIsXG4gICAgYWRkOiBcIuyLnOqwhCDruJTroZ0g7LaU6rCA7ZWY6riwXCIsXG4gICAgZGVsZXRlOiBcIuyCreygnFwiLFxuICAgIGNhbmNlbDogXCLst6jshoxcIixcbiAgICBzYXZlOiBcIuyggOyepVwiLFxuICAgIHJlcGVhdDogXCLrsJjrs7VcIixcbiAgICBkYXlzOiBbXCLsm5RcIiwgXCLtmZRcIiwgXCLsiJhcIiwgXCLrqqlcIiwgXCLquIhcIiwgXCLthqBcIiwgXCLsnbxcIl0sXG4gICAgZGF5c1Nob3J0OiBbXCLsm5RcIiwgXCLtmZRcIiwgXCLsiJhcIiwgXCLrqqlcIiwgXCLquIhcIiwgXCLthqBcIiwgXCLsnbxcIl0sXG4gICAgZXZlcnlkYXk6IFwi66ek7J28XCIsXG4gICAgZW1wdHk6IFwi7ISk7KCV65CcIOyKpOy8gOyltOydtCDsl4bsirXri4jri6QuXCIsXG4gICAgZXJyb3JFbnRpdHk6IFwi7Iqk7LyA7KW0IOyXlO2LsO2LsOulvCDshKTsoJXtlbTslbwg7ZWp64uI64ukLlwiLFxuICAgIHNjaGVkdWxlTWFuYWdlcjogXCLsiqTsvIDspbQg6rSA66asXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwi7Iqk66eI7Yq4IOyKpOy8gOyltCDsubTrk5xcIixcbiAgICBwcmV2aWV3U3VmZml4OiBcIiAo66+466as67O06riwKVwiLFxuICAgIGNvbmZsaWN0V2FybmluZzogXCLsnbQg7JqU7J287J2AIOq4sOyhtCDruJTroZ3qs7wg6rK57Lmp64uI64ukXCIsXG4gICAgLy8g7Iqk7LyA7KW0IOyDneyEsSDrp4jrspXsgqxcbiAgICBjcmVhdGVSb3V0aW5lOiBcIuyDiCDsiqTsvIDspbQg66eM65Ok6riwXCIsXG4gICAgcm91dGluZU5hbWU6IFwi7Iqk7LyA7KW0IOydtOumhFwiLFxuICAgIHJvdXRpbmVOYW1lUGxhY2Vob2xkZXI6IFwi7JiIOiDqsbDsi6Qg7KCE65OxIOyKpOy8gOyltFwiLFxuICAgIHRhcmdldERldmljZTogXCLrjIDsg4Eg6riw6riwXCIsXG4gICAgY3JlYXRlOiBcIuyKpOy8gOyltCDsg53shLFcIixcbiAgICBjcmVhdGluZzogXCLsg53shLEg7KSRLi4uXCIsXG4gICAgY3JlYXRlU3VjY2VzczogXCLsiqTsvIDspbTsnbQg7IOd7ISx65CY7JeI7Iq164uI64ukIVwiLFxuICAgIGNyZWF0ZUZhaWxlZDogXCLsiqTsvIDspbQg7IOd7ISx7JeQIOyLpO2MqO2WiOyKteuLiOuLpC5cIixcbiAgICBjcmVhdGVEZXNjcmlwdGlvbjogXCLquLDquLDrpbwg7ISg7YOd7ZWY66m0IOyKpOy8gOyltOqzvCDsnpDrj5ntmZTqsIAg7J6Q64+Z7Jy866GcIOyDneyEseuQqeuLiOuLpC5cIixcbiAgICBvclNlbGVjdEV4aXN0aW5nOiBcIuuYkOuKlCDquLDsobQg7Iqk7LyA7KW07J2EIO2OuOynkeq4sOyXkOyEnCDshKDtg53tlZjshLjsmpQuXCIsXG4gICAgZ29Ub0NhcmQ6IFwi7Lm065OcIO2OuOynkeyXkOyEnCDsg4gg7Iqk7LyA7KW07J2EIOyEoO2Dne2VtOyjvOyEuOyalC5cIixcbiAgICAvLyDsl5DrlJTthLBcbiAgICBlZGl0b3JXaXphcmRUaXRsZTogXCLsg4gg7Iqk7LyA7KW0IOunjOuTpOq4sCAo6raM7J6lKVwiLFxuICAgIGVkaXRvcldpemFyZERlc2M6IFwi7J6Q64+Z7ZmU7ZWgIOq4sOq4sOulvCDshKDtg53tlZjrqbQg7Iqk7LyA7KW0IOygnOyWtCDsnqXsuZjsmYAg64+Z7J6RIOu4jOumv+yngOqwgCDsponsi5wg7IOd7ISx65CY6rOgIOydtCDsubTrk5zsl5Ag7J6Q64+Z7Jy866GcIOyXsOuPmeuQqeuLiOuLpC5cIixcbiAgICBlZGl0b3JUYXJnZXREZXZpY2U6IFwi7KCc7Ja07ZWgIOuMgOyDgSDquLDquLAg7ISg7YOdXCIsXG4gICAgZWRpdG9yQ3JlYXRlU3VjY2VzczogXCLsg53shLEg67CPIOyXsOqysCDshLHqs7UhXCIsXG4gICAgZWRpdG9yRXJyb3JQcmVmaXg6IFwi7Jik66WYIOuwnOyDnTogXCIsXG4gICAgZWRpdG9yQWR2YW5jZWQ6IFwi6riw7KG0IOyKpOy8gOyltCDri6Tsi5wg67aI65+s7Jik6riwIOuwjyDstpTqsIAg7ISk7KCVXCIsXG4gICAgZWRpdG9yU2NoZWR1bGVFbnRpdHk6IFwi7Iqk7LyA7KW0IOq4sOq4sCAo7KeB7KCRIOyEoO2DnSlcIixcbiAgICBlZGl0b3JDYXJkVGl0bGU6IFwi7Lm065OcIO2RnOy2nCDsoJzrqqkgKOyEoO2DneyCrO2VrSlcIixcbiAgICAvLyDsubTrk5wg7ZS97LukXG4gICAgY2FyZE5hbWU6IFwi7Iqk7LyA7KW0IOy5tOuTnFwiLFxuICAgIGNhcmREZXNjcmlwdGlvbjogXCLsiqTsvIDspbQg7Zes7Y287J2YIOyLnOqwhCDruJTroZ3snYQg7Y647KeR7ZWY6rOgLCDquLDquLDrpbwg7ISg7YOd7ZWY66m0IOyKpOy8gOyltOydhCDsnpDrj5kg7IOd7ISx7ZWp64uI64ukLlwiLFxuICAgIC8vIOuLpOydtOyWvOuhnOq3uCAvIOyekOuPmSDsg53shLFcbiAgICBkZWxldGVFdmVyeWRheUNvbmZpcm06IFwi7J20IO2DgOyehOu4lOuhneydgCDrp6Tsnbwo7JuUfuydvCkg65Ox66Gd65CY7Ja0IOyeiOyKteuLiOuLpC5cXG7sgq3soJztlZjsi5zrqbQg66qo65OgIOyalOydvOyXkOyEnCDsnbzqtIQg7IKt7KCc65Cp64uI64ukLiDqs4Tsho3tlZjsi5zqsqDsirXri4jquYw/XCIsXG4gICAgZGVsZXRlT25lQ29uZmlybTogXCLshKDtg53tlZjsi6Ag7JqU7J287J2YIOyKpOy8gOykhOydhCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/XCIsXG4gICAgY29uZmxpY3RBbGVydDogXCLri6TsnYwg7JqU7J287JeQIOydtOuvuCDqsrnsuZjripQg67iU66Gd7J20IOyeiOyWtCDsoIDsnqXtlaAg7IiYIOyXhuyKteuLiOuLpDogXCIsXG4gICAgdW5rbm93bkRldmljZTogXCLslYwg7IiYIOyXhuuKlCDquLDquLBcIixcbiAgICByb3V0aW5lU3VmZml4OiBcIiDsiqTsvIDspbRcIixcbiAgICBicmlkZ2VBbGlhc1ByZWZpeDogXCLsiqTsvIDspbQg67iM66a/7KeAOiBcIixcbiAgICBicmlkZ2VEZXNjUGF0dGVybjogXCIg7Iqk7LyA7KW07JeQIOuUsOudvCDquLDquLDrpbwg7J6Q64+ZIOygnOyWtO2VqeuLiOuLpC5cIixcbiAgICAvLyDtmZzshLEg7JqU7J28IOq3uOujuSAodjEuNDog66qo65OgIOu4lOuhneydtCDtmZzshLEg7JqU7J287JeQIOydvOq0hCDsoIHsmqkpXG4gICAgYWN0aXZlRGF5czogXCLtmZzshLEg7JqU7J28XCIsXG4gICAgYWN0aXZlRGF5c0hlbHA6IFwi7ISg7YOd7ZWcIOyalOydvOuTpOydtCDrj5nsnbztlZwg7Iuc6rCEIOu4lOuhnSDshLjtirjrpbwg6rO17Jyg7ZWp64uI64ukLlwiLFxuICAgIGF0TGVhc3RPbmVEYXk6IFwi7LWc7IaMIO2VnCDsmpTsnbzsnYAg7Zmc7ISx7ZmU65CY7Ja0IOyeiOyWtOyVvCDtlanri4jri6QuXCIsXG4gICAgY29uZmlybURlbGV0ZUJsb2NrOiBcIuydtCDsi5zqsIQg67iU66Gd7J2EIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cIixcbiAgICBjb25maXJtRGVsZXRlVGl0bGU6IFwi7Iuc6rCEIOu4lOuhnSDsgq3soJxcIixcbiAgICBzYXZlRmFpbGVkOiBcIuyggOyepeyXkCDsi6TtjKjtlojsirXri4jri6QuXCIsXG4gICAgYmxvY2tPdmVybGFwOiBcIuuLpOuluCDsi5zqsIQg67iU66Gd6rO8IOqyueyzkCDstpTqsIDtlaAg7IiYIOyXhuyKteuLiOuLpC5cIixcbiAgICBub3RDb25maWd1cmVkOiBcIuy5tOuTnOqwgCDqtazshLHrkJjsp4Ag7JWK7JWY7Iq164uI64ukLlwiLFxuICAgIGFkbWluT25seVdpemFyZDogXCLsiqTsvIDspbQg7J6Q64+ZIOyDneyEseydgCDqtIDrpqzsnpDrp4wg6rCA64ql7ZWp64uI64ukLiDsnbTrr7gg66eM65Ok7Ja07KeEIOyKpOy8gOyltOydhCDslYTrnpjsl5DshJwg7ISg7YOd7ZWY7IS47JqULlwiLFxuICAgIHVuYXV0aG9yaXplZDogXCLqtoztlZzsnbQg7JeG7Iq164uI64ukLiDqtIDrpqzsnpDsl5Dqsowg66y47J2Y7ZWY7IS47JqULlwiLFxuICB9LFxuICBlbjoge1xuICAgIGFkZEJsb2NrOiBcIkFkZCBOZXcgQmxvY2tcIixcbiAgICBzdGFydFRpbWU6IFwiU3RhcnQgVGltZVwiLFxuICAgIGVuZFRpbWU6IFwiRW5kIFRpbWVcIixcbiAgICBhZGQ6IFwiQWRkIFRpbWUgQmxvY2tcIixcbiAgICBkZWxldGU6IFwiRGVsZXRlXCIsXG4gICAgY2FuY2VsOiBcIkNhbmNlbFwiLFxuICAgIHNhdmU6IFwiU2F2ZVwiLFxuICAgIHJlcGVhdDogXCJSZXBlYXRcIixcbiAgICBkYXlzOiBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl0sXG4gICAgZGF5c1Nob3J0OiBbXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIiwgXCJTXCJdLFxuICAgIGV2ZXJ5ZGF5OiBcIkRhaWx5XCIsXG4gICAgZW1wdHk6IFwiTm8gc2NoZWR1bGVzIGNvbmZpZ3VyZWQuXCIsXG4gICAgZXJyb3JFbnRpdHk6IFwiWW91IG5lZWQgdG8gZGVmaW5lIGEgc2NoZWR1bGUgZW50aXR5LlwiLFxuICAgIHNjaGVkdWxlTWFuYWdlcjogXCJTY2hlZHVsZSBNYW5hZ2VyXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiU21hcnQgU2NoZWR1bGUgQ2FyZFwiLFxuICAgIHByZXZpZXdTdWZmaXg6IFwiIChQcmV2aWV3KVwiLFxuICAgIGNvbmZsaWN0V2FybmluZzogXCJUaGlzIGRheSBjb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBibG9ja1wiLFxuICAgIC8vIFJvdXRpbmUgd2l6YXJkXG4gICAgY3JlYXRlUm91dGluZTogXCJDcmVhdGUgTmV3IFJvdXRpbmVcIixcbiAgICByb3V0aW5lTmFtZTogXCJSb3V0aW5lIE5hbWVcIixcbiAgICByb3V0aW5lTmFtZVBsYWNlaG9sZGVyOiBcImUuZy4gTGl2aW5nIFJvb20gTGlnaHRcIixcbiAgICB0YXJnZXREZXZpY2U6IFwiVGFyZ2V0IERldmljZVwiLFxuICAgIGNyZWF0ZTogXCJDcmVhdGUgUm91dGluZVwiLFxuICAgIGNyZWF0aW5nOiBcIkNyZWF0aW5nLi4uXCIsXG4gICAgY3JlYXRlU3VjY2VzczogXCJSb3V0aW5lIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgIGNyZWF0ZUZhaWxlZDogXCJGYWlsZWQgdG8gY3JlYXRlIHJvdXRpbmUuXCIsXG4gICAgY3JlYXRlRGVzY3JpcHRpb246IFwiU2VsZWN0IGEgZGV2aWNlIHRvIGF1dG8tY3JlYXRlIGEgc2NoZWR1bGUgYW5kIGF1dG9tYXRpb24uXCIsXG4gICAgb3JTZWxlY3RFeGlzdGluZzogXCJPciBzZWxlY3QgYW4gZXhpc3Rpbmcgc2NoZWR1bGUgaW4gdGhlIGVkaXRvci5cIixcbiAgICBnb1RvQ2FyZDogXCJQbGVhc2Ugc2VsZWN0IHRoZSBuZXcgc2NoZWR1bGUgaW4gY2FyZCBzZXR0aW5ncy5cIixcbiAgICAvLyBFZGl0b3JcbiAgICBlZGl0b3JXaXphcmRUaXRsZTogXCJDcmVhdGUgTmV3IFJvdXRpbmUgKFJlY29tbWVuZGVkKVwiLFxuICAgIGVkaXRvcldpemFyZERlc2M6IFwiUGljayBhIGRldmljZSB0byBhdXRvLWNyZWF0ZSBhIHNjaGVkdWxlIGhlbHBlciBhbmQgYXV0b21hdGlvbiBicmlkZ2UgbGlua2VkIHRvIHRoaXMgY2FyZC5cIixcbiAgICBlZGl0b3JUYXJnZXREZXZpY2U6IFwiVGFyZ2V0IERldmljZVwiLFxuICAgIGVkaXRvckNyZWF0ZVN1Y2Nlc3M6IFwiQ3JlYXRlZCBhbmQgbGlua2VkIHN1Y2Nlc3NmdWxseSFcIixcbiAgICBlZGl0b3JFcnJvclByZWZpeDogXCJFcnJvcjogXCIsXG4gICAgZWRpdG9yQWR2YW5jZWQ6IFwiQWR2YW5jZWQgQ29uZmlndXJhdGlvblwiLFxuICAgIGVkaXRvclNjaGVkdWxlRW50aXR5OiBcIlNjaGVkdWxlIEVudGl0eVwiLFxuICAgIGVkaXRvckNhcmRUaXRsZTogXCJDYXJkIFRpdGxlIChPcHRpb25hbClcIixcbiAgICAvLyBDYXJkIHBpY2tlclxuICAgIGNhcmROYW1lOiBcIlNjaGVkdWxlIENhcmRcIixcbiAgICBjYXJkRGVzY3JpcHRpb246IFwiRWRpdCBzY2hlZHVsZSBoZWxwZXIgdGltZSBibG9ja3MsIG9yIHBpY2sgYSBkZXZpY2UgdG8gYXV0by1jcmVhdGUgb25lLlwiLFxuICAgIC8vIERpYWxvZ3MgLyBhdXRvLWNyZWF0ZVxuICAgIGRlbGV0ZUV2ZXJ5ZGF5Q29uZmlybTogXCJUaGlzIGJsb2NrIGlzIHJlZ2lzdGVyZWQgZm9yIGV2ZXJ5IGRheSAoTW9u4oCTU3VuKS5cXG5EZWxldGluZyB3aWxsIHJlbW92ZSBpdCBmcm9tIGFsbCBkYXlzLiBDb250aW51ZT9cIixcbiAgICBkZWxldGVPbmVDb25maXJtOiBcIkRlbGV0ZSB0aGlzIGJsb2NrIGZyb20gdGhlIHNlbGVjdGVkIGRheT9cIixcbiAgICBjb25mbGljdEFsZXJ0OiBcIkNhbm5vdCBzYXZlIOKAlCB0aGUgZm9sbG93aW5nIGRheShzKSBhbHJlYWR5IGhhdmUgb3ZlcmxhcHBpbmcgYmxvY2tzOiBcIixcbiAgICB1bmtub3duRGV2aWNlOiBcIlVua25vd24gZGV2aWNlXCIsXG4gICAgcm91dGluZVN1ZmZpeDogXCIgU2NoZWR1bGVcIixcbiAgICBicmlkZ2VBbGlhc1ByZWZpeDogXCJTY2hlZHVsZSBicmlkZ2U6IFwiLFxuICAgIGJyaWRnZURlc2NQYXR0ZXJuOiBcIiDigJQgYXV0b21hdGljYWxseSBjb250cm9scyB0aGUgdGFyZ2V0IGRldmljZSBwZXIgaXRzIHNjaGVkdWxlLlwiLFxuICAgIC8vIEFjdGl2ZSBkYXlzIGdyb3VwICh2MS40OiBhbGwgYmxvY2tzIGFwcGx5IHVuaWZvcm1seSB0byB0aGUgYWN0aXZlIGRheXMpXG4gICAgYWN0aXZlRGF5czogXCJBY3RpdmUgZGF5c1wiLFxuICAgIGFjdGl2ZURheXNIZWxwOiBcIlNlbGVjdGVkIGRheXMgc2hhcmUgdGhlIHNhbWUgc2V0IG9mIHRpbWUgYmxvY2tzLlwiLFxuICAgIGF0TGVhc3RPbmVEYXk6IFwiQXQgbGVhc3Qgb25lIGRheSBtdXN0IHN0YXkgYWN0aXZlLlwiLFxuICAgIGNvbmZpcm1EZWxldGVCbG9jazogXCJEZWxldGUgdGhpcyB0aW1lIGJsb2NrP1wiLFxuICAgIGNvbmZpcm1EZWxldGVUaXRsZTogXCJEZWxldGUgdGltZSBibG9ja1wiLFxuICAgIHNhdmVGYWlsZWQ6IFwiRmFpbGVkIHRvIHNhdmUgc2NoZWR1bGUuXCIsXG4gICAgYmxvY2tPdmVybGFwOiBcIlRoaXMgcmFuZ2Ugb3ZlcmxhcHMgYW4gZXhpc3RpbmcgYmxvY2suXCIsXG4gICAgbm90Q29uZmlndXJlZDogXCJDYXJkIGlzIG5vdCBjb25maWd1cmVkLlwiLFxuICAgIGFkbWluT25seVdpemFyZDogXCJBdXRvLWNyZWF0aW5nIGEgc2NoZWR1bGUgcmVxdWlyZXMgYWRtaW4gcmlnaHRzLiBQaWNrIGFuIGV4aXN0aW5nIHNjaGVkdWxlIGJlbG93LlwiLFxuICAgIHVuYXV0aG9yaXplZDogXCJOb3QgYXV0aG9yaXplZC4gQXNrIGFuIGFkbWluaXN0cmF0b3IuXCIsXG4gIH0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBTY2hlZHVsZUxhbmcgPSBrZXlvZiB0eXBlb2YgTE9DQUxFUztcbmV4cG9ydCB0eXBlIFNjaGVkdWxlTG9jYWxlID0gKHR5cGVvZiBMT0NBTEVTKVtTY2hlZHVsZUxhbmddO1xuIiwiLy8gVGltZXIgY2FyZCB0cmFuc2xhdGlvbnMuXG4vLyBLZXB0IHNlcGFyYXRlIGZyb20gTE9DQUxFUyBiZWNhdXNlIHNldmVyYWwga2V5cyAoY2FyZE5hbWUsIGVkaXRvcldpemFyZFRpdGxlLCBldGMuKVxuLy8gd291bGQgY29sbGlkZSB3aXRoIHRoZSBzY2hlZHVsZSBjYXJkIG90aGVyd2lzZS5cbmV4cG9ydCBjb25zdCBUSU1FUl9MT0NBTEVTID0ge1xuICBrbzoge1xuICAgIGFkZFRpdGxlOiBcIisg7Iuc6rCEIOy2lOqwgFwiLFxuICAgIHN0YXJ0OiBcIuyLnOyekVwiLFxuICAgIHBhdXNlOiBcIuydvOyLnOygleyngFwiLFxuICAgIHJlc3VtZTogXCLqs4Tsho1cIixcbiAgICBzdG9wOiBcIuy3qOyGjFwiLFxuICAgIHByZXNldDVtOiBcIis167aEXCIsXG4gICAgcHJlc2V0MTBtOiBcIisxMOu2hFwiLFxuICAgIHByZXNldDMwbTogXCIrMzDrtoRcIixcbiAgICBwcmVzZXRNaW51czVtOiBcIi0167aEXCIsXG4gICAgcHJlc2V0TWludXMxMG06IFwiLTEw67aEXCIsXG4gICAgcHJlc2V0TWludXMzMG06IFwiLTMw67aEXCIsXG4gICAgc2V0RHVyYXRpb246IFwi7Iuc6rCEIOyEpOyglVwiLFxuICAgIGlkbGVNZXNzYWdlOiBcIuuMgOq4sCDspJFcIixcbiAgICBwYXVzZWRNZXNzYWdlOiBcIuydvOyLnOygleyngOuQqFwiLFxuICAgIGVkaXRvclRpdGxlOiBcIu2DgOydtOuouCBVSSDshKTsoJVcIixcbiAgICBlZGl0b3JFbnRpdHk6IFwi7Jew64+Z65CcIO2DgOydtOuouCDsl5Tti7Dti7BcIixcbiAgICBlZGl0b3JXaXphcmRUaXRsZTogXCLsg4gg7YOA7J2066i4ICYg7J6Q64+Z7ZmUIOuniOuyleyCrFwiLFxuICAgIGVkaXRvcldpemFyZERlc2M6IFwi6riw6riw66W8IOyEoO2Dne2VmOuptCDtg4DsnbTrqLgg7Zes7Y287JmAIOyekOuPme2ZlCDruIzrpr/sp4DqsIAg7KaJ7IucIOyDneyEseuQqeuLiOuLpC5cIixcbiAgICBlZGl0b3JUYXJnZXREZXZpY2U6IFwi64yA7IOBIOq4sOq4sCDshKDtg50gKOy8nOqzoCDrgYwg6riw6riwKVwiLFxuICAgIGVkaXRvckFjdGlvblR5cGU6IFwi7KKF66OMIOyLnCDrj5nsnpFcIixcbiAgICBlZGl0b3JBY3Rpb25PZmY6IFwi7J6l7LmYIOuBhOq4sFwiLFxuICAgIGVkaXRvckFjdGlvbk9uOiBcIuyepey5mCDsvJzquLBcIixcbiAgICBlZGl0b3JBY3Rpb25Ub2dnbGU6IFwi7IOB7YOcIOuwmOyghFwiLFxuICAgIGVkaXRvckNyZWF0ZVN0cjogXCLtg4DsnbTrqLgg7J6Q64+ZIOyDneyEsVwiLFxuICAgIGhvdXJzTGFiZWw6IFwi7Iuc6rCEXCIsXG4gICAgbWludXRlc0xhYmVsOiBcIuu2hFwiLFxuICAgIHNlY29uZHNMYWJlbDogXCLstIhcIixcbiAgICBob3Vyc1N0cjogXCLsi5zqsIRcIixcbiAgICBtaW51dGVzU3RyOiBcIuu2hFwiLFxuICAgIHNlY29uZHNTdHI6IFwi7LSIXCIsXG4gICAgY291bnRkb3duTWVzc2FnZTogXCLtm4Tsl5Ag6riw6riw6rCAIOyiheujjOuQqeuLiOuLpC5cIixcbiAgICBicmlkZ2VEZXNjcmlwdGlvbjogXCJUaW1lciBVSSDsubTrk5zsl5DshJwg7J6Q64+Z7Jy866GcIOyDneyEse2VnCDruIzrpr/sp4DsnoXri4jri6QuXCIsXG4gICAgZXJyb3JQcmVmaXg6IFwi7IOd7ISxIOykkSDsmKTrpZjqsIAg67Cc7IOd7ZaI7Iq164uI64ukOiBcIixcbiAgICB0aW1lclN1ZmZpeDogXCIg7YOA7J2066i4XCIsXG4gICAgY2FyZE5hbWU6IFwi7YOA7J2066i4IOy5tOuTnFwiLFxuICAgIGNhcmREZXNjcmlwdGlvbjogXCLtg4DsnbTrqLgg7Zes7Y2866W8IOygnOyWtO2VmOqzoCwg6riw6riw66W8IOyEoO2Dne2VmOuptCDsnpDrj5ntmZQg67iM66a/7KeA66W8IOyekOuPmSDsg53shLHtlanri4jri6QuXCIsXG4gICAgZGVmYXVsdFRpdGxlOiBcIu2DgOydtOuouCDshKTsoJVcIixcbiAgICBoZWxwZXJGYWlsTXNnOiBcIijslYjrgrQpIO2DgOydtOuouCDtl6ztjbwg7IOd7ISxIOyLpO2MqC4g7ZW064u5IEhBIOuyhOyghOyXkOyEnOuKlCDtlIzrn6zqt7jsnbjsnbQg7Zes7Y2866W8IOyZhOyghCDsnpDrj5kg7IOd7ISx7ZWgIOyImCDsl4bsirXri4jri6QuIOyImOuPmSDqtazshLEg6raM7J6lLlwiLFxuICAgIHRpbWVyQnJpZGdlQWxpYXNQcmVmaXg6IFwi7YOA7J2066i4IOu4jOumv+yngDogXCIsXG4gICAgc3luY2luZ01lc3NhZ2U6IFwi64+Z6riw7ZmUIOykkeyeheuLiOuLpC4uLlwiLFxuICAgIGdlbmVyYXRlZFRpbWVyTGFiZWw6IFwiICjsg53shLHrkJwg7YOA7J2066i4KVwiLFxuICAgIG5vdENvbmZpZ3VyZWQ6IFwi7Lm065Oc6rCAIOq1rOyEseuQmOyngCDslYrslZjsirXri4jri6QuXCIsXG4gICAgYWRtaW5Pbmx5V2l6YXJkOiBcIu2DgOydtOuouCDsnpDrj5kg7IOd7ISx7J2AIOq0gOumrOyekOunjCDqsIDriqXtlanri4jri6QuIOydtOuvuCDrp4zrk6TslrTsp4Qg7YOA7J2066i466W8IOyVhOuemOyXkOyEnCDshKDtg53tlZjshLjsmpQuXCIsXG4gICAgdW5hdXRob3JpemVkOiBcIuq2jO2VnOydtCDsl4bsirXri4jri6QuIOq0gOumrOyekOyXkOqyjCDrrLjsnZjtlZjshLjsmpQuXCIsXG4gIH0sXG4gIGVuOiB7XG4gICAgYWRkVGl0bGU6IFwiKyBBZGQgVGltZVwiLFxuICAgIHN0YXJ0OiBcIlN0YXJ0XCIsXG4gICAgcGF1c2U6IFwiUGF1c2VcIixcbiAgICByZXN1bWU6IFwiUmVzdW1lXCIsXG4gICAgc3RvcDogXCJDYW5jZWxcIixcbiAgICBwcmVzZXQ1bTogXCIrNW1cIixcbiAgICBwcmVzZXQxMG06IFwiKzEwbVwiLFxuICAgIHByZXNldDMwbTogXCIrMzBtXCIsXG4gICAgcHJlc2V0TWludXM1bTogXCItNW1cIixcbiAgICBwcmVzZXRNaW51czEwbTogXCItMTBtXCIsXG4gICAgcHJlc2V0TWludXMzMG06IFwiLTMwbVwiLFxuICAgIHNldER1cmF0aW9uOiBcIlNldCBEdXJhdGlvblwiLFxuICAgIGlkbGVNZXNzYWdlOiBcIklkbGVcIixcbiAgICBwYXVzZWRNZXNzYWdlOiBcIlBhdXNlZFwiLFxuICAgIGVkaXRvclRpdGxlOiBcIlRpbWVyIFVJIENvbmZpZ1wiLFxuICAgIGVkaXRvckVudGl0eTogXCJMaW5rZWQgVGltZXIgRW50aXR5XCIsXG4gICAgZWRpdG9yV2l6YXJkVGl0bGU6IFwiTmV3IFRpbWVyIFdpemFyZFwiLFxuICAgIGVkaXRvcldpemFyZERlc2M6IFwiU2VsZWN0IGEgdGFyZ2V0IGRldmljZSB0byBhdXRvLWNyZWF0ZSB0aW1lciBhbmQgYXV0b21hdGlvbi5cIixcbiAgICBlZGl0b3JUYXJnZXREZXZpY2U6IFwiU2VsZWN0IFRhcmdldCBEZXZpY2VcIixcbiAgICBlZGl0b3JBY3Rpb25UeXBlOiBcIkFjdGlvbiBvbiBmaW5pc2hcIixcbiAgICBlZGl0b3JBY3Rpb25PZmY6IFwiVHVybiBPZmZcIixcbiAgICBlZGl0b3JBY3Rpb25PbjogXCJUdXJuIE9uXCIsXG4gICAgZWRpdG9yQWN0aW9uVG9nZ2xlOiBcIlRvZ2dsZVwiLFxuICAgIGVkaXRvckNyZWF0ZVN0cjogXCJBdXRvIENyZWF0ZSBUaW1lclwiLFxuICAgIGhvdXJzTGFiZWw6IFwiSG91cnNcIixcbiAgICBtaW51dGVzTGFiZWw6IFwiTWludXRlc1wiLFxuICAgIHNlY29uZHNMYWJlbDogXCJTZWNvbmRzXCIsXG4gICAgaG91cnNTdHI6IFwiaFwiLFxuICAgIG1pbnV0ZXNTdHI6IFwibVwiLFxuICAgIHNlY29uZHNTdHI6IFwic1wiLFxuICAgIGNvdW50ZG93bk1lc3NhZ2U6IFwidW50aWwgdGhlIGRldmljZSB0dXJucyBvZmYuXCIsXG4gICAgYnJpZGdlRGVzY3JpcHRpb246IFwiQnJpZGdlIGF1dG9tYXRpY2FsbHkgY3JlYXRlZCBieSBUaW1lciBVSSBjYXJkLlwiLFxuICAgIGVycm9yUHJlZml4OiBcIkVycm9yIHdoaWxlIGNyZWF0aW5nOiBcIixcbiAgICB0aW1lclN1ZmZpeDogXCIgVGltZXJcIixcbiAgICBjYXJkTmFtZTogXCJUaW1lciBDYXJkXCIsXG4gICAgY2FyZERlc2NyaXB0aW9uOiBcIkNvbnRyb2wgdGltZXIgaGVscGVycywgb3IgcGljayBhIGRldmljZSB0byBhdXRvLWNyZWF0ZSBhbiBhdXRvbWF0aW9uIGJyaWRnZS5cIixcbiAgICBkZWZhdWx0VGl0bGU6IFwiVGltZXIgU2V0dGluZ3NcIixcbiAgICBoZWxwZXJGYWlsTXNnOiBcIihOb3RpY2UpIFRpbWVyIGhlbHBlciBhdXRvLWNyZWF0ZSBmYWlsZWQuIFRoaXMgSEEgdmVyc2lvbiBkb2VzIG5vdCBhbGxvdyBwbHVnaW5zIHRvIGNyZWF0ZSBoZWxwZXJzIGF1dG9tYXRpY2FsbHkg4oCUIHBsZWFzZSBjb25maWd1cmUgbWFudWFsbHkuXCIsXG4gICAgdGltZXJCcmlkZ2VBbGlhc1ByZWZpeDogXCJUaW1lciBicmlkZ2U6IFwiLFxuICAgIHN5bmNpbmdNZXNzYWdlOiBcIlN5bmNpbmcuLi5cIixcbiAgICBnZW5lcmF0ZWRUaW1lckxhYmVsOiBcIiAoZ2VuZXJhdGVkKVwiLFxuICAgIG5vdENvbmZpZ3VyZWQ6IFwiQ2FyZCBpcyBub3QgY29uZmlndXJlZC5cIixcbiAgICBhZG1pbk9ubHlXaXphcmQ6IFwiQXV0by1jcmVhdGluZyBhIHRpbWVyIHJlcXVpcmVzIGFkbWluIHJpZ2h0cy4gUGljayBhbiBleGlzdGluZyB0aW1lciBiZWxvdy5cIixcbiAgICB1bmF1dGhvcml6ZWQ6IFwiTm90IGF1dGhvcml6ZWQuIEFzayBhbiBhZG1pbmlzdHJhdG9yLlwiLFxuICB9LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgVGltZXJMYW5nID0ga2V5b2YgdHlwZW9mIFRJTUVSX0xPQ0FMRVM7XG5leHBvcnQgdHlwZSBUaW1lckxvY2FsZSA9ICh0eXBlb2YgVElNRVJfTE9DQUxFUylbVGltZXJMYW5nXTtcbiIsImV4cG9ydCB7IExPQ0FMRVMsIHR5cGUgU2NoZWR1bGVMYW5nLCB0eXBlIFNjaGVkdWxlTG9jYWxlIH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcbmV4cG9ydCB7IFRJTUVSX0xPQ0FMRVMsIHR5cGUgVGltZXJMYW5nLCB0eXBlIFRpbWVyTG9jYWxlIH0gZnJvbSBcIi4vdGltZXIuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdExhbmcoKTogXCJrb1wiIHwgXCJlblwiIHtcbiAgY29uc3QgbGFuZyA9ICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5sYW5ndWFnZSkgfHwgXCJlblwiO1xuICByZXR1cm4gbGFuZy5zdGFydHNXaXRoKFwia29cIikgPyBcImtvXCIgOiBcImVuXCI7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IHQ9Z2xvYmFsVGhpcyxlPXQuU2hhZG93Um9vdCYmKHZvaWQgMD09PXQuU2hhZHlDU1N8fHQuU2hhZHlDU1MubmF0aXZlU2hhZG93KSYmXCJhZG9wdGVkU3R5bGVTaGVldHNcImluIERvY3VtZW50LnByb3RvdHlwZSYmXCJyZXBsYWNlXCJpbiBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxzPVN5bWJvbCgpLG89bmV3IFdlYWtNYXA7Y2xhc3Mgbntjb25zdHJ1Y3Rvcih0LGUsbyl7aWYodGhpcy5fJGNzc1Jlc3VsdCQ9ITAsbyE9PXMpdGhyb3cgRXJyb3IoXCJDU1NSZXN1bHQgaXMgbm90IGNvbnN0cnVjdGFibGUuIFVzZSBgdW5zYWZlQ1NTYCBvciBgY3NzYCBpbnN0ZWFkLlwiKTt0aGlzLmNzc1RleHQ9dCx0aGlzLnQ9ZX1nZXQgc3R5bGVTaGVldCgpe2xldCB0PXRoaXMubztjb25zdCBzPXRoaXMudDtpZihlJiZ2b2lkIDA9PT10KXtjb25zdCBlPXZvaWQgMCE9PXMmJjE9PT1zLmxlbmd0aDtlJiYodD1vLmdldChzKSksdm9pZCAwPT09dCYmKCh0aGlzLm89dD1uZXcgQ1NTU3R5bGVTaGVldCkucmVwbGFjZVN5bmModGhpcy5jc3NUZXh0KSxlJiZvLnNldChzLHQpKX1yZXR1cm4gdH10b1N0cmluZygpe3JldHVybiB0aGlzLmNzc1RleHR9fWNvbnN0IHI9dD0+bmV3IG4oXCJzdHJpbmdcIj09dHlwZW9mIHQ/dDp0K1wiXCIsdm9pZCAwLHMpLGk9KHQsLi4uZSk9Pntjb25zdCBvPTE9PT10Lmxlbmd0aD90WzBdOmUucmVkdWNlKChlLHMsbyk9PmUrKHQ9PntpZighMD09PXQuXyRjc3NSZXN1bHQkKXJldHVybiB0LmNzc1RleHQ7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQpcmV0dXJuIHQ7dGhyb3cgRXJyb3IoXCJWYWx1ZSBwYXNzZWQgdG8gJ2NzcycgZnVuY3Rpb24gbXVzdCBiZSBhICdjc3MnIGZ1bmN0aW9uIHJlc3VsdDogXCIrdCtcIi4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXQgdGFrZSBjYXJlIHRvIGVuc3VyZSBwYWdlIHNlY3VyaXR5LlwiKX0pKHMpK3RbbysxXSx0WzBdKTtyZXR1cm4gbmV3IG4obyx0LHMpfSxTPShzLG8pPT57aWYoZSlzLmFkb3B0ZWRTdHlsZVNoZWV0cz1vLm1hcCh0PT50IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldD90OnQuc3R5bGVTaGVldCk7ZWxzZSBmb3IoY29uc3QgZSBvZiBvKXtjb25zdCBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxuPXQubGl0Tm9uY2U7dm9pZCAwIT09biYmby5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLG4pLG8udGV4dENvbnRlbnQ9ZS5jc3NUZXh0LHMuYXBwZW5kQ2hpbGQobyl9fSxjPWU/dD0+dDp0PT50IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldD8odD0+e2xldCBlPVwiXCI7Zm9yKGNvbnN0IHMgb2YgdC5jc3NSdWxlcyllKz1zLmNzc1RleHQ7cmV0dXJuIHIoZSl9KSh0KTp0O2V4cG9ydHtuIGFzIENTU1Jlc3VsdCxTIGFzIGFkb3B0U3R5bGVzLGkgYXMgY3NzLGMgYXMgZ2V0Q29tcGF0aWJsZVN0eWxlLGUgYXMgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzLHIgYXMgdW5zYWZlQ1NTfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy10YWcuanMubWFwXG4iLCJpbXBvcnR7Z2V0Q29tcGF0aWJsZVN0eWxlIGFzIHQsYWRvcHRTdHlsZXMgYXMgc31mcm9tXCIuL2Nzcy10YWcuanNcIjtleHBvcnR7Q1NTUmVzdWx0LGNzcyxzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMsdW5zYWZlQ1NTfWZyb21cIi4vY3NzLXRhZy5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovY29uc3R7aXM6aSxkZWZpbmVQcm9wZXJ0eTplLGdldE93blByb3BlcnR5RGVzY3JpcHRvcjpoLGdldE93blByb3BlcnR5TmFtZXM6cixnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6byxnZXRQcm90b3R5cGVPZjpufT1PYmplY3QsYT1nbG9iYWxUaGlzLGM9YS50cnVzdGVkVHlwZXMsbD1jP2MuZW1wdHlTY3JpcHQ6XCJcIixwPWEucmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0LGQ9KHQscyk9PnQsdT17dG9BdHRyaWJ1dGUodCxzKXtzd2l0Y2gocyl7Y2FzZSBCb29sZWFuOnQ9dD9sOm51bGw7YnJlYWs7Y2FzZSBPYmplY3Q6Y2FzZSBBcnJheTp0PW51bGw9PXQ/dDpKU09OLnN0cmluZ2lmeSh0KX1yZXR1cm4gdH0sZnJvbUF0dHJpYnV0ZSh0LHMpe2xldCBpPXQ7c3dpdGNoKHMpe2Nhc2UgQm9vbGVhbjppPW51bGwhPT10O2JyZWFrO2Nhc2UgTnVtYmVyOmk9bnVsbD09PXQ/bnVsbDpOdW1iZXIodCk7YnJlYWs7Y2FzZSBPYmplY3Q6Y2FzZSBBcnJheTp0cnl7aT1KU09OLnBhcnNlKHQpfWNhdGNoKHQpe2k9bnVsbH19cmV0dXJuIGl9fSxmPSh0LHMpPT4haSh0LHMpLGI9e2F0dHJpYnV0ZTohMCx0eXBlOlN0cmluZyxjb252ZXJ0ZXI6dSxyZWZsZWN0OiExLHVzZURlZmF1bHQ6ITEsaGFzQ2hhbmdlZDpmfTtTeW1ib2wubWV0YWRhdGE/Pz1TeW1ib2woXCJtZXRhZGF0YVwiKSxhLmxpdFByb3BlcnR5TWV0YWRhdGE/Pz1uZXcgV2Vha01hcDtjbGFzcyB5IGV4dGVuZHMgSFRNTEVsZW1lbnR7c3RhdGljIGFkZEluaXRpYWxpemVyKHQpe3RoaXMuXyRFaSgpLCh0aGlzLmw/Pz1bXSkucHVzaCh0KX1zdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpe3JldHVybiB0aGlzLmZpbmFsaXplKCksdGhpcy5fJEVoJiZbLi4udGhpcy5fJEVoLmtleXMoKV19c3RhdGljIGNyZWF0ZVByb3BlcnR5KHQscz1iKXtpZihzLnN0YXRlJiYocy5hdHRyaWJ1dGU9ITEpLHRoaXMuXyRFaSgpLHRoaXMucHJvdG90eXBlLmhhc093blByb3BlcnR5KHQpJiYoKHM9T2JqZWN0LmNyZWF0ZShzKSkud3JhcHBlZD0hMCksdGhpcy5lbGVtZW50UHJvcGVydGllcy5zZXQodCxzKSwhcy5ub0FjY2Vzc29yKXtjb25zdCBpPVN5bWJvbCgpLGg9dGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IodCxpLHMpO3ZvaWQgMCE9PWgmJmUodGhpcy5wcm90b3R5cGUsdCxoKX19c3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcih0LHMsaSl7Y29uc3R7Z2V0OmUsc2V0OnJ9PWgodGhpcy5wcm90b3R5cGUsdCk/P3tnZXQoKXtyZXR1cm4gdGhpc1tzXX0sc2V0KHQpe3RoaXNbc109dH19O3JldHVybntnZXQ6ZSxzZXQocyl7Y29uc3QgaD1lPy5jYWxsKHRoaXMpO3I/LmNhbGwodGhpcyxzKSx0aGlzLnJlcXVlc3RVcGRhdGUodCxoLGkpfSxjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMH19c3RhdGljIGdldFByb3BlcnR5T3B0aW9ucyh0KXtyZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5nZXQodCk/P2J9c3RhdGljIF8kRWkoKXtpZih0aGlzLmhhc093blByb3BlcnR5KGQoXCJlbGVtZW50UHJvcGVydGllc1wiKSkpcmV0dXJuO2NvbnN0IHQ9bih0aGlzKTt0LmZpbmFsaXplKCksdm9pZCAwIT09dC5sJiYodGhpcy5sPVsuLi50LmxdKSx0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzPW5ldyBNYXAodC5lbGVtZW50UHJvcGVydGllcyl9c3RhdGljIGZpbmFsaXplKCl7aWYodGhpcy5oYXNPd25Qcm9wZXJ0eShkKFwiZmluYWxpemVkXCIpKSlyZXR1cm47aWYodGhpcy5maW5hbGl6ZWQ9ITAsdGhpcy5fJEVpKCksdGhpcy5oYXNPd25Qcm9wZXJ0eShkKFwicHJvcGVydGllc1wiKSkpe2NvbnN0IHQ9dGhpcy5wcm9wZXJ0aWVzLHM9Wy4uLnIodCksLi4ubyh0KV07Zm9yKGNvbnN0IGkgb2Ygcyl0aGlzLmNyZWF0ZVByb3BlcnR5KGksdFtpXSl9Y29uc3QgdD10aGlzW1N5bWJvbC5tZXRhZGF0YV07aWYobnVsbCE9PXQpe2NvbnN0IHM9bGl0UHJvcGVydHlNZXRhZGF0YS5nZXQodCk7aWYodm9pZCAwIT09cylmb3IoY29uc3RbdCxpXW9mIHMpdGhpcy5lbGVtZW50UHJvcGVydGllcy5zZXQodCxpKX10aGlzLl8kRWg9bmV3IE1hcDtmb3IoY29uc3RbdCxzXW9mIHRoaXMuZWxlbWVudFByb3BlcnRpZXMpe2NvbnN0IGk9dGhpcy5fJEV1KHQscyk7dm9pZCAwIT09aSYmdGhpcy5fJEVoLnNldChpLHQpfXRoaXMuZWxlbWVudFN0eWxlcz10aGlzLmZpbmFsaXplU3R5bGVzKHRoaXMuc3R5bGVzKX1zdGF0aWMgZmluYWxpemVTdHlsZXMocyl7Y29uc3QgaT1bXTtpZihBcnJheS5pc0FycmF5KHMpKXtjb25zdCBlPW5ldyBTZXQocy5mbGF0KDEvMCkucmV2ZXJzZSgpKTtmb3IoY29uc3QgcyBvZiBlKWkudW5zaGlmdCh0KHMpKX1lbHNlIHZvaWQgMCE9PXMmJmkucHVzaCh0KHMpKTtyZXR1cm4gaX1zdGF0aWMgXyRFdSh0LHMpe2NvbnN0IGk9cy5hdHRyaWJ1dGU7cmV0dXJuITE9PT1pP3ZvaWQgMDpcInN0cmluZ1wiPT10eXBlb2YgaT9pOlwic3RyaW5nXCI9PXR5cGVvZiB0P3QudG9Mb3dlckNhc2UoKTp2b2lkIDB9Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuXyRFcD12b2lkIDAsdGhpcy5pc1VwZGF0ZVBlbmRpbmc9ITEsdGhpcy5oYXNVcGRhdGVkPSExLHRoaXMuXyRFbT1udWxsLHRoaXMuXyRFdigpfV8kRXYoKXt0aGlzLl8kRVM9bmV3IFByb21pc2UodD0+dGhpcy5lbmFibGVVcGRhdGluZz10KSx0aGlzLl8kQUw9bmV3IE1hcCx0aGlzLl8kRV8oKSx0aGlzLnJlcXVlc3RVcGRhdGUoKSx0aGlzLmNvbnN0cnVjdG9yLmw/LmZvckVhY2godD0+dCh0aGlzKSl9YWRkQ29udHJvbGxlcih0KXsodGhpcy5fJEVPPz89bmV3IFNldCkuYWRkKHQpLHZvaWQgMCE9PXRoaXMucmVuZGVyUm9vdCYmdGhpcy5pc0Nvbm5lY3RlZCYmdC5ob3N0Q29ubmVjdGVkPy4oKX1yZW1vdmVDb250cm9sbGVyKHQpe3RoaXMuXyRFTz8uZGVsZXRlKHQpfV8kRV8oKXtjb25zdCB0PW5ldyBNYXAscz10aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRQcm9wZXJ0aWVzO2Zvcihjb25zdCBpIG9mIHMua2V5cygpKXRoaXMuaGFzT3duUHJvcGVydHkoaSkmJih0LnNldChpLHRoaXNbaV0pLGRlbGV0ZSB0aGlzW2ldKTt0LnNpemU+MCYmKHRoaXMuXyRFcD10KX1jcmVhdGVSZW5kZXJSb290KCl7Y29uc3QgdD10aGlzLnNoYWRvd1Jvb3Q/P3RoaXMuYXR0YWNoU2hhZG93KHRoaXMuY29uc3RydWN0b3Iuc2hhZG93Um9vdE9wdGlvbnMpO3JldHVybiBzKHQsdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50U3R5bGVzKSx0fWNvbm5lY3RlZENhbGxiYWNrKCl7dGhpcy5yZW5kZXJSb290Pz89dGhpcy5jcmVhdGVSZW5kZXJSb290KCksdGhpcy5lbmFibGVVcGRhdGluZyghMCksdGhpcy5fJEVPPy5mb3JFYWNoKHQ9PnQuaG9zdENvbm5lY3RlZD8uKCkpfWVuYWJsZVVwZGF0aW5nKHQpe31kaXNjb25uZWN0ZWRDYWxsYmFjaygpe3RoaXMuXyRFTz8uZm9yRWFjaCh0PT50Lmhvc3REaXNjb25uZWN0ZWQ/LigpKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodCxzLGkpe3RoaXMuXyRBSyh0LGkpfV8kRVQodCxzKXtjb25zdCBpPXRoaXMuY29uc3RydWN0b3IuZWxlbWVudFByb3BlcnRpZXMuZ2V0KHQpLGU9dGhpcy5jb25zdHJ1Y3Rvci5fJEV1KHQsaSk7aWYodm9pZCAwIT09ZSYmITA9PT1pLnJlZmxlY3Qpe2NvbnN0IGg9KHZvaWQgMCE9PWkuY29udmVydGVyPy50b0F0dHJpYnV0ZT9pLmNvbnZlcnRlcjp1KS50b0F0dHJpYnV0ZShzLGkudHlwZSk7dGhpcy5fJEVtPXQsbnVsbD09aD90aGlzLnJlbW92ZUF0dHJpYnV0ZShlKTp0aGlzLnNldEF0dHJpYnV0ZShlLGgpLHRoaXMuXyRFbT1udWxsfX1fJEFLKHQscyl7Y29uc3QgaT10aGlzLmNvbnN0cnVjdG9yLGU9aS5fJEVoLmdldCh0KTtpZih2b2lkIDAhPT1lJiZ0aGlzLl8kRW0hPT1lKXtjb25zdCB0PWkuZ2V0UHJvcGVydHlPcHRpb25zKGUpLGg9XCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb252ZXJ0ZXI/e2Zyb21BdHRyaWJ1dGU6dC5jb252ZXJ0ZXJ9OnZvaWQgMCE9PXQuY29udmVydGVyPy5mcm9tQXR0cmlidXRlP3QuY29udmVydGVyOnU7dGhpcy5fJEVtPWU7Y29uc3Qgcj1oLmZyb21BdHRyaWJ1dGUocyx0LnR5cGUpO3RoaXNbZV09cj8/dGhpcy5fJEVqPy5nZXQoZSk/P3IsdGhpcy5fJEVtPW51bGx9fXJlcXVlc3RVcGRhdGUodCxzLGksZT0hMSxoKXtpZih2b2lkIDAhPT10KXtjb25zdCByPXRoaXMuY29uc3RydWN0b3I7aWYoITE9PT1lJiYoaD10aGlzW3RdKSxpPz89ci5nZXRQcm9wZXJ0eU9wdGlvbnModCksISgoaS5oYXNDaGFuZ2VkPz9mKShoLHMpfHxpLnVzZURlZmF1bHQmJmkucmVmbGVjdCYmaD09PXRoaXMuXyRFaj8uZ2V0KHQpJiYhdGhpcy5oYXNBdHRyaWJ1dGUoci5fJEV1KHQsaSkpKSlyZXR1cm47dGhpcy5DKHQscyxpKX0hMT09PXRoaXMuaXNVcGRhdGVQZW5kaW5nJiYodGhpcy5fJEVTPXRoaXMuXyRFUCgpKX1DKHQscyx7dXNlRGVmYXVsdDppLHJlZmxlY3Q6ZSx3cmFwcGVkOmh9LHIpe2kmJiEodGhpcy5fJEVqPz89bmV3IE1hcCkuaGFzKHQpJiYodGhpcy5fJEVqLnNldCh0LHI/P3M/P3RoaXNbdF0pLCEwIT09aHx8dm9pZCAwIT09cil8fCh0aGlzLl8kQUwuaGFzKHQpfHwodGhpcy5oYXNVcGRhdGVkfHxpfHwocz12b2lkIDApLHRoaXMuXyRBTC5zZXQodCxzKSksITA9PT1lJiZ0aGlzLl8kRW0hPT10JiYodGhpcy5fJEVxPz89bmV3IFNldCkuYWRkKHQpKX1hc3luYyBfJEVQKCl7dGhpcy5pc1VwZGF0ZVBlbmRpbmc9ITA7dHJ5e2F3YWl0IHRoaXMuXyRFU31jYXRjaCh0KXtQcm9taXNlLnJlamVjdCh0KX1jb25zdCB0PXRoaXMuc2NoZWR1bGVVcGRhdGUoKTtyZXR1cm4gbnVsbCE9dCYmYXdhaXQgdCwhdGhpcy5pc1VwZGF0ZVBlbmRpbmd9c2NoZWR1bGVVcGRhdGUoKXtyZXR1cm4gdGhpcy5wZXJmb3JtVXBkYXRlKCl9cGVyZm9ybVVwZGF0ZSgpe2lmKCF0aGlzLmlzVXBkYXRlUGVuZGluZylyZXR1cm47aWYoIXRoaXMuaGFzVXBkYXRlZCl7aWYodGhpcy5yZW5kZXJSb290Pz89dGhpcy5jcmVhdGVSZW5kZXJSb290KCksdGhpcy5fJEVwKXtmb3IoY29uc3RbdCxzXW9mIHRoaXMuXyRFcCl0aGlzW3RdPXM7dGhpcy5fJEVwPXZvaWQgMH1jb25zdCB0PXRoaXMuY29uc3RydWN0b3IuZWxlbWVudFByb3BlcnRpZXM7aWYodC5zaXplPjApZm9yKGNvbnN0W3MsaV1vZiB0KXtjb25zdHt3cmFwcGVkOnR9PWksZT10aGlzW3NdOyEwIT09dHx8dGhpcy5fJEFMLmhhcyhzKXx8dm9pZCAwPT09ZXx8dGhpcy5DKHMsdm9pZCAwLGksZSl9fWxldCB0PSExO2NvbnN0IHM9dGhpcy5fJEFMO3RyeXt0PXRoaXMuc2hvdWxkVXBkYXRlKHMpLHQ/KHRoaXMud2lsbFVwZGF0ZShzKSx0aGlzLl8kRU8/LmZvckVhY2godD0+dC5ob3N0VXBkYXRlPy4oKSksdGhpcy51cGRhdGUocykpOnRoaXMuXyRFTSgpfWNhdGNoKHMpe3Rocm93IHQ9ITEsdGhpcy5fJEVNKCksc310JiZ0aGlzLl8kQUUocyl9d2lsbFVwZGF0ZSh0KXt9XyRBRSh0KXt0aGlzLl8kRU8/LmZvckVhY2godD0+dC5ob3N0VXBkYXRlZD8uKCkpLHRoaXMuaGFzVXBkYXRlZHx8KHRoaXMuaGFzVXBkYXRlZD0hMCx0aGlzLmZpcnN0VXBkYXRlZCh0KSksdGhpcy51cGRhdGVkKHQpfV8kRU0oKXt0aGlzLl8kQUw9bmV3IE1hcCx0aGlzLmlzVXBkYXRlUGVuZGluZz0hMX1nZXQgdXBkYXRlQ29tcGxldGUoKXtyZXR1cm4gdGhpcy5nZXRVcGRhdGVDb21wbGV0ZSgpfWdldFVwZGF0ZUNvbXBsZXRlKCl7cmV0dXJuIHRoaXMuXyRFU31zaG91bGRVcGRhdGUodCl7cmV0dXJuITB9dXBkYXRlKHQpe3RoaXMuXyRFcSYmPXRoaXMuXyRFcS5mb3JFYWNoKHQ9PnRoaXMuXyRFVCh0LHRoaXNbdF0pKSx0aGlzLl8kRU0oKX11cGRhdGVkKHQpe31maXJzdFVwZGF0ZWQodCl7fX15LmVsZW1lbnRTdHlsZXM9W10seS5zaGFkb3dSb290T3B0aW9ucz17bW9kZTpcIm9wZW5cIn0seVtkKFwiZWxlbWVudFByb3BlcnRpZXNcIildPW5ldyBNYXAseVtkKFwiZmluYWxpemVkXCIpXT1uZXcgTWFwLHA/Lih7UmVhY3RpdmVFbGVtZW50Onl9KSwoYS5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucz8/PVtdKS5wdXNoKFwiMi4xLjJcIik7ZXhwb3J0e3kgYXMgUmVhY3RpdmVFbGVtZW50LHMgYXMgYWRvcHRTdHlsZXMsdSBhcyBkZWZhdWx0Q29udmVydGVyLHQgYXMgZ2V0Q29tcGF0aWJsZVN0eWxlLGYgYXMgbm90RXF1YWx9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RpdmUtZWxlbWVudC5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgdD1nbG9iYWxUaGlzLGk9dD0+dCxzPXQudHJ1c3RlZFR5cGVzLGU9cz9zLmNyZWF0ZVBvbGljeShcImxpdC1odG1sXCIse2NyZWF0ZUhUTUw6dD0+dH0pOnZvaWQgMCxoPVwiJGxpdCRcIixvPWBsaXQkJHtNYXRoLnJhbmRvbSgpLnRvRml4ZWQoOSkuc2xpY2UoMil9JGAsbj1cIj9cIitvLHI9YDwke259PmAsbD1kb2N1bWVudCxjPSgpPT5sLmNyZWF0ZUNvbW1lbnQoXCJcIiksYT10PT5udWxsPT09dHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQsdT1BcnJheS5pc0FycmF5LGQ9dD0+dSh0KXx8XCJmdW5jdGlvblwiPT10eXBlb2YgdD8uW1N5bWJvbC5pdGVyYXRvcl0sZj1cIlsgXFx0XFxuXFxmXFxyXVwiLHY9LzwoPzooIS0tfFxcL1teYS16QS1aXSl8KFxcLz9bYS16QS1aXVtePlxcc10qKXwoXFwvPyQpKS9nLF89Ly0tPi9nLG09Lz4vZyxwPVJlZ0V4cChgPnwke2Z9KD86KFteXFxcXHNcIic+PS9dKykoJHtmfSo9JHtmfSooPzpbXiBcXHRcXG5cXGZcXHJcIidcXGA8Pj1dfChcInwnKXwpKXwkKWAsXCJnXCIpLGc9LycvZywkPS9cIi9nLHk9L14oPzpzY3JpcHR8c3R5bGV8dGV4dGFyZWF8dGl0bGUpJC9pLHg9dD0+KGksLi4ucyk9Pih7XyRsaXRUeXBlJDp0LHN0cmluZ3M6aSx2YWx1ZXM6c30pLGI9eCgxKSx3PXgoMiksVD14KDMpLEU9U3ltYm9sLmZvcihcImxpdC1ub0NoYW5nZVwiKSxBPVN5bWJvbC5mb3IoXCJsaXQtbm90aGluZ1wiKSxDPW5ldyBXZWFrTWFwLFA9bC5jcmVhdGVUcmVlV2Fsa2VyKGwsMTI5KTtmdW5jdGlvbiBWKHQsaSl7aWYoIXUodCl8fCF0Lmhhc093blByb3BlcnR5KFwicmF3XCIpKXRocm93IEVycm9yKFwiaW52YWxpZCB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5XCIpO3JldHVybiB2b2lkIDAhPT1lP2UuY3JlYXRlSFRNTChpKTppfWNvbnN0IE49KHQsaSk9Pntjb25zdCBzPXQubGVuZ3RoLTEsZT1bXTtsZXQgbixsPTI9PT1pP1wiPHN2Zz5cIjozPT09aT9cIjxtYXRoPlwiOlwiXCIsYz12O2ZvcihsZXQgaT0wO2k8cztpKyspe2NvbnN0IHM9dFtpXTtsZXQgYSx1LGQ9LTEsZj0wO2Zvcig7ZjxzLmxlbmd0aCYmKGMubGFzdEluZGV4PWYsdT1jLmV4ZWMocyksbnVsbCE9PXUpOylmPWMubGFzdEluZGV4LGM9PT12P1wiIS0tXCI9PT11WzFdP2M9Xzp2b2lkIDAhPT11WzFdP2M9bTp2b2lkIDAhPT11WzJdPyh5LnRlc3QodVsyXSkmJihuPVJlZ0V4cChcIjwvXCIrdVsyXSxcImdcIikpLGM9cCk6dm9pZCAwIT09dVszXSYmKGM9cCk6Yz09PXA/XCI+XCI9PT11WzBdPyhjPW4/P3YsZD0tMSk6dm9pZCAwPT09dVsxXT9kPS0yOihkPWMubGFzdEluZGV4LXVbMl0ubGVuZ3RoLGE9dVsxXSxjPXZvaWQgMD09PXVbM10/cDonXCInPT09dVszXT8kOmcpOmM9PT0kfHxjPT09Zz9jPXA6Yz09PV98fGM9PT1tP2M9djooYz1wLG49dm9pZCAwKTtjb25zdCB4PWM9PT1wJiZ0W2krMV0uc3RhcnRzV2l0aChcIi8+XCIpP1wiIFwiOlwiXCI7bCs9Yz09PXY/cytyOmQ+PTA/KGUucHVzaChhKSxzLnNsaWNlKDAsZCkraCtzLnNsaWNlKGQpK28reCk6cytvKygtMj09PWQ/aTp4KX1yZXR1cm5bVih0LGwrKHRbc118fFwiPD8+XCIpKygyPT09aT9cIjwvc3ZnPlwiOjM9PT1pP1wiPC9tYXRoPlwiOlwiXCIpKSxlXX07Y2xhc3MgU3tjb25zdHJ1Y3Rvcih7c3RyaW5nczp0LF8kbGl0VHlwZSQ6aX0sZSl7bGV0IHI7dGhpcy5wYXJ0cz1bXTtsZXQgbD0wLGE9MDtjb25zdCB1PXQubGVuZ3RoLTEsZD10aGlzLnBhcnRzLFtmLHZdPU4odCxpKTtpZih0aGlzLmVsPVMuY3JlYXRlRWxlbWVudChmLGUpLFAuY3VycmVudE5vZGU9dGhpcy5lbC5jb250ZW50LDI9PT1pfHwzPT09aSl7Y29uc3QgdD10aGlzLmVsLmNvbnRlbnQuZmlyc3RDaGlsZDt0LnJlcGxhY2VXaXRoKC4uLnQuY2hpbGROb2Rlcyl9Zm9yKDtudWxsIT09KHI9UC5uZXh0Tm9kZSgpKSYmZC5sZW5ndGg8dTspe2lmKDE9PT1yLm5vZGVUeXBlKXtpZihyLmhhc0F0dHJpYnV0ZXMoKSlmb3IoY29uc3QgdCBvZiByLmdldEF0dHJpYnV0ZU5hbWVzKCkpaWYodC5lbmRzV2l0aChoKSl7Y29uc3QgaT12W2ErK10scz1yLmdldEF0dHJpYnV0ZSh0KS5zcGxpdChvKSxlPS8oWy4/QF0pPyguKikvLmV4ZWMoaSk7ZC5wdXNoKHt0eXBlOjEsaW5kZXg6bCxuYW1lOmVbMl0sc3RyaW5nczpzLGN0b3I6XCIuXCI9PT1lWzFdP0k6XCI/XCI9PT1lWzFdP0w6XCJAXCI9PT1lWzFdP3o6SH0pLHIucmVtb3ZlQXR0cmlidXRlKHQpfWVsc2UgdC5zdGFydHNXaXRoKG8pJiYoZC5wdXNoKHt0eXBlOjYsaW5kZXg6bH0pLHIucmVtb3ZlQXR0cmlidXRlKHQpKTtpZih5LnRlc3Qoci50YWdOYW1lKSl7Y29uc3QgdD1yLnRleHRDb250ZW50LnNwbGl0KG8pLGk9dC5sZW5ndGgtMTtpZihpPjApe3IudGV4dENvbnRlbnQ9cz9zLmVtcHR5U2NyaXB0OlwiXCI7Zm9yKGxldCBzPTA7czxpO3MrKylyLmFwcGVuZCh0W3NdLGMoKSksUC5uZXh0Tm9kZSgpLGQucHVzaCh7dHlwZToyLGluZGV4OisrbH0pO3IuYXBwZW5kKHRbaV0sYygpKX19fWVsc2UgaWYoOD09PXIubm9kZVR5cGUpaWYoci5kYXRhPT09bilkLnB1c2goe3R5cGU6MixpbmRleDpsfSk7ZWxzZXtsZXQgdD0tMTtmb3IoOy0xIT09KHQ9ci5kYXRhLmluZGV4T2Yobyx0KzEpKTspZC5wdXNoKHt0eXBlOjcsaW5kZXg6bH0pLHQrPW8ubGVuZ3RoLTF9bCsrfX1zdGF0aWMgY3JlYXRlRWxlbWVudCh0LGkpe2NvbnN0IHM9bC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7cmV0dXJuIHMuaW5uZXJIVE1MPXQsc319ZnVuY3Rpb24gTSh0LGkscz10LGUpe2lmKGk9PT1FKXJldHVybiBpO2xldCBoPXZvaWQgMCE9PWU/cy5fJENvPy5bZV06cy5fJENsO2NvbnN0IG89YShpKT92b2lkIDA6aS5fJGxpdERpcmVjdGl2ZSQ7cmV0dXJuIGg/LmNvbnN0cnVjdG9yIT09byYmKGg/Ll8kQU8/LighMSksdm9pZCAwPT09bz9oPXZvaWQgMDooaD1uZXcgbyh0KSxoLl8kQVQodCxzLGUpKSx2b2lkIDAhPT1lPyhzLl8kQ28/Pz1bXSlbZV09aDpzLl8kQ2w9aCksdm9pZCAwIT09aCYmKGk9TSh0LGguXyRBUyh0LGkudmFsdWVzKSxoLGUpKSxpfWNsYXNzIFJ7Y29uc3RydWN0b3IodCxpKXt0aGlzLl8kQVY9W10sdGhpcy5fJEFOPXZvaWQgMCx0aGlzLl8kQUQ9dCx0aGlzLl8kQU09aX1nZXQgcGFyZW50Tm9kZSgpe3JldHVybiB0aGlzLl8kQU0ucGFyZW50Tm9kZX1nZXQgXyRBVSgpe3JldHVybiB0aGlzLl8kQU0uXyRBVX11KHQpe2NvbnN0e2VsOntjb250ZW50Oml9LHBhcnRzOnN9PXRoaXMuXyRBRCxlPSh0Py5jcmVhdGlvblNjb3BlPz9sKS5pbXBvcnROb2RlKGksITApO1AuY3VycmVudE5vZGU9ZTtsZXQgaD1QLm5leHROb2RlKCksbz0wLG49MCxyPXNbMF07Zm9yKDt2b2lkIDAhPT1yOyl7aWYobz09PXIuaW5kZXgpe2xldCBpOzI9PT1yLnR5cGU/aT1uZXcgayhoLGgubmV4dFNpYmxpbmcsdGhpcyx0KToxPT09ci50eXBlP2k9bmV3IHIuY3RvcihoLHIubmFtZSxyLnN0cmluZ3MsdGhpcyx0KTo2PT09ci50eXBlJiYoaT1uZXcgWihoLHRoaXMsdCkpLHRoaXMuXyRBVi5wdXNoKGkpLHI9c1srK25dfW8hPT1yPy5pbmRleCYmKGg9UC5uZXh0Tm9kZSgpLG8rKyl9cmV0dXJuIFAuY3VycmVudE5vZGU9bCxlfXAodCl7bGV0IGk9MDtmb3IoY29uc3QgcyBvZiB0aGlzLl8kQVYpdm9pZCAwIT09cyYmKHZvaWQgMCE9PXMuc3RyaW5ncz8ocy5fJEFJKHQscyxpKSxpKz1zLnN0cmluZ3MubGVuZ3RoLTIpOnMuXyRBSSh0W2ldKSksaSsrfX1jbGFzcyBre2dldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTT8uXyRBVT8/dGhpcy5fJEN2fWNvbnN0cnVjdG9yKHQsaSxzLGUpe3RoaXMudHlwZT0yLHRoaXMuXyRBSD1BLHRoaXMuXyRBTj12b2lkIDAsdGhpcy5fJEFBPXQsdGhpcy5fJEFCPWksdGhpcy5fJEFNPXMsdGhpcy5vcHRpb25zPWUsdGhpcy5fJEN2PWU/LmlzQ29ubmVjdGVkPz8hMH1nZXQgcGFyZW50Tm9kZSgpe2xldCB0PXRoaXMuXyRBQS5wYXJlbnROb2RlO2NvbnN0IGk9dGhpcy5fJEFNO3JldHVybiB2b2lkIDAhPT1pJiYxMT09PXQ/Lm5vZGVUeXBlJiYodD1pLnBhcmVudE5vZGUpLHR9Z2V0IHN0YXJ0Tm9kZSgpe3JldHVybiB0aGlzLl8kQUF9Z2V0IGVuZE5vZGUoKXtyZXR1cm4gdGhpcy5fJEFCfV8kQUkodCxpPXRoaXMpe3Q9TSh0aGlzLHQsaSksYSh0KT90PT09QXx8bnVsbD09dHx8XCJcIj09PXQ/KHRoaXMuXyRBSCE9PUEmJnRoaXMuXyRBUigpLHRoaXMuXyRBSD1BKTp0IT09dGhpcy5fJEFIJiZ0IT09RSYmdGhpcy5fKHQpOnZvaWQgMCE9PXQuXyRsaXRUeXBlJD90aGlzLiQodCk6dm9pZCAwIT09dC5ub2RlVHlwZT90aGlzLlQodCk6ZCh0KT90aGlzLmsodCk6dGhpcy5fKHQpfU8odCl7cmV0dXJuIHRoaXMuXyRBQS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LHRoaXMuXyRBQil9VCh0KXt0aGlzLl8kQUghPT10JiYodGhpcy5fJEFSKCksdGhpcy5fJEFIPXRoaXMuTyh0KSl9Xyh0KXt0aGlzLl8kQUghPT1BJiZhKHRoaXMuXyRBSCk/dGhpcy5fJEFBLm5leHRTaWJsaW5nLmRhdGE9dDp0aGlzLlQobC5jcmVhdGVUZXh0Tm9kZSh0KSksdGhpcy5fJEFIPXR9JCh0KXtjb25zdHt2YWx1ZXM6aSxfJGxpdFR5cGUkOnN9PXQsZT1cIm51bWJlclwiPT10eXBlb2Ygcz90aGlzLl8kQUModCk6KHZvaWQgMD09PXMuZWwmJihzLmVsPVMuY3JlYXRlRWxlbWVudChWKHMuaCxzLmhbMF0pLHRoaXMub3B0aW9ucykpLHMpO2lmKHRoaXMuXyRBSD8uXyRBRD09PWUpdGhpcy5fJEFILnAoaSk7ZWxzZXtjb25zdCB0PW5ldyBSKGUsdGhpcykscz10LnUodGhpcy5vcHRpb25zKTt0LnAoaSksdGhpcy5UKHMpLHRoaXMuXyRBSD10fX1fJEFDKHQpe2xldCBpPUMuZ2V0KHQuc3RyaW5ncyk7cmV0dXJuIHZvaWQgMD09PWkmJkMuc2V0KHQuc3RyaW5ncyxpPW5ldyBTKHQpKSxpfWsodCl7dSh0aGlzLl8kQUgpfHwodGhpcy5fJEFIPVtdLHRoaXMuXyRBUigpKTtjb25zdCBpPXRoaXMuXyRBSDtsZXQgcyxlPTA7Zm9yKGNvbnN0IGggb2YgdCllPT09aS5sZW5ndGg/aS5wdXNoKHM9bmV3IGsodGhpcy5PKGMoKSksdGhpcy5PKGMoKSksdGhpcyx0aGlzLm9wdGlvbnMpKTpzPWlbZV0scy5fJEFJKGgpLGUrKztlPGkubGVuZ3RoJiYodGhpcy5fJEFSKHMmJnMuXyRBQi5uZXh0U2libGluZyxlKSxpLmxlbmd0aD1lKX1fJEFSKHQ9dGhpcy5fJEFBLm5leHRTaWJsaW5nLHMpe2Zvcih0aGlzLl8kQVA/LighMSwhMCxzKTt0IT09dGhpcy5fJEFCOyl7Y29uc3Qgcz1pKHQpLm5leHRTaWJsaW5nO2kodCkucmVtb3ZlKCksdD1zfX1zZXRDb25uZWN0ZWQodCl7dm9pZCAwPT09dGhpcy5fJEFNJiYodGhpcy5fJEN2PXQsdGhpcy5fJEFQPy4odCkpfX1jbGFzcyBIe2dldCB0YWdOYW1lKCl7cmV0dXJuIHRoaXMuZWxlbWVudC50YWdOYW1lfWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfWNvbnN0cnVjdG9yKHQsaSxzLGUsaCl7dGhpcy50eXBlPTEsdGhpcy5fJEFIPUEsdGhpcy5fJEFOPXZvaWQgMCx0aGlzLmVsZW1lbnQ9dCx0aGlzLm5hbWU9aSx0aGlzLl8kQU09ZSx0aGlzLm9wdGlvbnM9aCxzLmxlbmd0aD4yfHxcIlwiIT09c1swXXx8XCJcIiE9PXNbMV0/KHRoaXMuXyRBSD1BcnJheShzLmxlbmd0aC0xKS5maWxsKG5ldyBTdHJpbmcpLHRoaXMuc3RyaW5ncz1zKTp0aGlzLl8kQUg9QX1fJEFJKHQsaT10aGlzLHMsZSl7Y29uc3QgaD10aGlzLnN0cmluZ3M7bGV0IG89ITE7aWYodm9pZCAwPT09aCl0PU0odGhpcyx0LGksMCksbz0hYSh0KXx8dCE9PXRoaXMuXyRBSCYmdCE9PUUsbyYmKHRoaXMuXyRBSD10KTtlbHNle2NvbnN0IGU9dDtsZXQgbixyO2Zvcih0PWhbMF0sbj0wO248aC5sZW5ndGgtMTtuKyspcj1NKHRoaXMsZVtzK25dLGksbikscj09PUUmJihyPXRoaXMuXyRBSFtuXSksb3x8PSFhKHIpfHxyIT09dGhpcy5fJEFIW25dLHI9PT1BP3Q9QTp0IT09QSYmKHQrPShyPz9cIlwiKStoW24rMV0pLHRoaXMuXyRBSFtuXT1yfW8mJiFlJiZ0aGlzLmoodCl9aih0KXt0PT09QT90aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk6dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsdD8/XCJcIil9fWNsYXNzIEkgZXh0ZW5kcyBIe2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLnR5cGU9M31qKHQpe3RoaXMuZWxlbWVudFt0aGlzLm5hbWVdPXQ9PT1BP3ZvaWQgMDp0fX1jbGFzcyBMIGV4dGVuZHMgSHtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy50eXBlPTR9aih0KXt0aGlzLmVsZW1lbnQudG9nZ2xlQXR0cmlidXRlKHRoaXMubmFtZSwhIXQmJnQhPT1BKX19Y2xhc3MgeiBleHRlbmRzIEh7Y29uc3RydWN0b3IodCxpLHMsZSxoKXtzdXBlcih0LGkscyxlLGgpLHRoaXMudHlwZT01fV8kQUkodCxpPXRoaXMpe2lmKCh0PU0odGhpcyx0LGksMCk/P0EpPT09RSlyZXR1cm47Y29uc3Qgcz10aGlzLl8kQUgsZT10PT09QSYmcyE9PUF8fHQuY2FwdHVyZSE9PXMuY2FwdHVyZXx8dC5vbmNlIT09cy5vbmNlfHx0LnBhc3NpdmUhPT1zLnBhc3NpdmUsaD10IT09QSYmKHM9PT1BfHxlKTtlJiZ0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsdGhpcyxzKSxoJiZ0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsdGhpcyx0KSx0aGlzLl8kQUg9dH1oYW5kbGVFdmVudCh0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLl8kQUg/dGhpcy5fJEFILmNhbGwodGhpcy5vcHRpb25zPy5ob3N0Pz90aGlzLmVsZW1lbnQsdCk6dGhpcy5fJEFILmhhbmRsZUV2ZW50KHQpfX1jbGFzcyBae2NvbnN0cnVjdG9yKHQsaSxzKXt0aGlzLmVsZW1lbnQ9dCx0aGlzLnR5cGU9Nix0aGlzLl8kQU49dm9pZCAwLHRoaXMuXyRBTT1pLHRoaXMub3B0aW9ucz1zfWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfV8kQUkodCl7TSh0aGlzLHQpfX1jb25zdCBqPXtNOmgsUDpvLEE6bixDOjEsTDpOLFIsRDpkLFY6TSxJOmssSCxOOkwsVTp6LEI6SSxGOlp9LEI9dC5saXRIdG1sUG9seWZpbGxTdXBwb3J0O0I/LihTLGspLCh0LmxpdEh0bWxWZXJzaW9ucz8/PVtdKS5wdXNoKFwiMy4zLjNcIik7Y29uc3QgRD0odCxpLHMpPT57Y29uc3QgZT1zPy5yZW5kZXJCZWZvcmU/P2k7bGV0IGg9ZS5fJGxpdFBhcnQkO2lmKHZvaWQgMD09PWgpe2NvbnN0IHQ9cz8ucmVuZGVyQmVmb3JlPz9udWxsO2UuXyRsaXRQYXJ0JD1oPW5ldyBrKGkuaW5zZXJ0QmVmb3JlKGMoKSx0KSx0LHZvaWQgMCxzPz97fSl9cmV0dXJuIGguXyRBSSh0KSxofTtleHBvcnR7aiBhcyBfJExILGIgYXMgaHRtbCxUIGFzIG1hdGhtbCxFIGFzIG5vQ2hhbmdlLEEgYXMgbm90aGluZyxEIGFzIHJlbmRlcix3IGFzIHN2Z307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtaHRtbC5qcy5tYXBcbiIsImltcG9ydHtSZWFjdGl2ZUVsZW1lbnQgYXMgdH1mcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7aW1wb3J0e3JlbmRlciBhcyBlLG5vQ2hhbmdlIGFzIHJ9ZnJvbVwibGl0LWh0bWxcIjtleHBvcnQqZnJvbVwibGl0LWh0bWxcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL2NvbnN0IHM9Z2xvYmFsVGhpcztjbGFzcyBpIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy5yZW5kZXJPcHRpb25zPXtob3N0OnRoaXN9LHRoaXMuXyREbz12b2lkIDB9Y3JlYXRlUmVuZGVyUm9vdCgpe2NvbnN0IHQ9c3VwZXIuY3JlYXRlUmVuZGVyUm9vdCgpO3JldHVybiB0aGlzLnJlbmRlck9wdGlvbnMucmVuZGVyQmVmb3JlPz89dC5maXJzdENoaWxkLHR9dXBkYXRlKHQpe2NvbnN0IHI9dGhpcy5yZW5kZXIoKTt0aGlzLmhhc1VwZGF0ZWR8fCh0aGlzLnJlbmRlck9wdGlvbnMuaXNDb25uZWN0ZWQ9dGhpcy5pc0Nvbm5lY3RlZCksc3VwZXIudXBkYXRlKHQpLHRoaXMuXyREbz1lKHIsdGhpcy5yZW5kZXJSb290LHRoaXMucmVuZGVyT3B0aW9ucyl9Y29ubmVjdGVkQ2FsbGJhY2soKXtzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpLHRoaXMuXyREbz8uc2V0Q29ubmVjdGVkKCEwKX1kaXNjb25uZWN0ZWRDYWxsYmFjaygpe3N1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCksdGhpcy5fJERvPy5zZXRDb25uZWN0ZWQoITEpfXJlbmRlcigpe3JldHVybiByfX1pLl8kbGl0RWxlbWVudCQ9ITAsaVtcImZpbmFsaXplZFwiXT0hMCxzLmxpdEVsZW1lbnRIeWRyYXRlU3VwcG9ydD8uKHtMaXRFbGVtZW50Oml9KTtjb25zdCBvPXMubGl0RWxlbWVudFBvbHlmaWxsU3VwcG9ydDtvPy4oe0xpdEVsZW1lbnQ6aX0pO2NvbnN0IG49e18kQUs6KHQsZSxyKT0+e3QuXyRBSyhlLHIpfSxfJEFMOnQ9PnQuXyRBTH07KHMubGl0RWxlbWVudFZlcnNpb25zPz89W10pLnB1c2goXCI0LjIuMlwiKTtleHBvcnR7aSBhcyBMaXRFbGVtZW50LG4gYXMgXyRMRX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtZWxlbWVudC5qcy5tYXBcbiIsIi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjc3MgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBMT0NBTEVTIH0gZnJvbSBcIi4uL2xvY2FsZXMvaW5kZXguanNcIjtcblxuY2xhc3MgSGFDdXN0b21TY2hlZHVsZUNhcmRFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgaGFzczoge30sXG4gICAgX2NvbmZpZzoge30sXG4gICAgX2lzQ3JlYXRpbmc6IHsgdHlwZTogQm9vbGVhbiB9LFxuICAgIF9jcmVhdGVSZXN1bHQ6IHsgdHlwZTogT2JqZWN0IH0sXG4gIH07XG5cbiAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGNvbmZpZ0NoYW5nZWQobmV3Q29uZmlnKSB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoXCJjb25maWctY2hhbmdlZFwiLCB7IGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pO1xuICAgIGV2ZW50LmRldGFpbCA9IHsgY29uZmlnOiBuZXdDb25maWcgfTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgYXN5bmMgX29uQXV0b0NyZWF0ZURldmljZVBpY2tlcihldikge1xuICAgIGNvbnN0IHRhcmdldEVudGl0eUlkID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmICh0aGlzLl9pc0NyZWF0aW5nIHx8ICF0aGlzLmhhc3MgfHwgIXRhcmdldEVudGl0eUlkKSByZXR1cm47XG5cbiAgICAvLyDquLDquLAg7J2066aEIOq4sOuwmOycvOuhnCDsiqTsvIDspbQg7J2066aEIOyekOuPmSDsg53shLFcbiAgICBjb25zdCBlbnRpdHlPYmogPSB0aGlzLmhhc3Muc3RhdGVzW3RhcmdldEVudGl0eUlkXTtcbiAgICBjb25zdCBmcmllbmRseU5hbWUgPSBlbnRpdHlPYmo/LmF0dHJpYnV0ZXM/LmZyaWVuZGx5X25hbWUgfHwgdGFyZ2V0RW50aXR5SWQuc3BsaXQoJy4nKVsxXSB8fCB0aGlzLl90KFwidW5rbm93bkRldmljZVwiKTtcbiAgICBjb25zdCByb3V0aW5lTmFtZSA9IGAke2ZyaWVuZGx5TmFtZX0ke3RoaXMuX3QoXCJyb3V0aW5lU3VmZml4XCIpfWA7XG5cbiAgICB0aGlzLl9pc0NyZWF0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9jcmVhdGVSZXN1bHQgPSBudWxsO1xuICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW3NjaGVkdWxlLXVpXSBFZGl0b3IgQXV0byBjcmVhdGVSb3V0aW5lIC0gbmFtZTpcIiwgcm91dGluZU5hbWUsIFwidGFyZ2V0OlwiLCB0YXJnZXRFbnRpdHlJZCk7XG4gICAgICBcbiAgICAgIGNvbnN0IHNjaGVkdWxlUGF5bG9hZCA9IHtcbiAgICAgICAgdHlwZTogXCJzY2hlZHVsZS9jcmVhdGVcIixcbiAgICAgICAgbmFtZTogcm91dGluZU5hbWUsXG4gICAgICAgIGljb246IFwibWRpOmNhbGVuZGFyLWNsb2NrXCIsXG4gICAgICB9O1xuXG5cbiAgICAgIGNvbnN0IHNjaGVkdWxlUmVzdWx0ID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyhzY2hlZHVsZVBheWxvYWQpO1xuICAgICAgY29uc29sZS5sb2coXCJbc2NoZWR1bGUtdWldIHNjaGVkdWxlL2NyZWF0ZSBTVUNDRVNTOlwiLCBzY2hlZHVsZVJlc3VsdCk7XG5cbiAgICAgIGNvbnN0IHNjaGVkdWxlSWQgPSBzY2hlZHVsZVJlc3VsdC5pZDtcbiAgICAgIGNvbnN0IHNjaGVkdWxlRW50aXR5SWQgPSBgc2NoZWR1bGUuJHtzY2hlZHVsZUlkfWA7XG5cbiAgICAgIGNvbnN0IGF1dG9tYXRpb25JZCA9IGBicmlkZ2VfJHtzY2hlZHVsZUlkfWA7XG4gICAgICBjb25zdCBhdXRvbWF0aW9uUGF5bG9hZCA9IHtcbiAgICAgICAgYWxpYXM6IGAke3RoaXMuX3QoXCJicmlkZ2VBbGlhc1ByZWZpeFwiKX0ke3JvdXRpbmVOYW1lfWAsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgW3NjaGVkdWxlLXVpXSAke3JvdXRpbmVOYW1lfSR7dGhpcy5fdChcImJyaWRnZURlc2NQYXR0ZXJuXCIpfWAsXG4gICAgICAgIHVzZV9ibHVlcHJpbnQ6IHtcbiAgICAgICAgICBwYXRoOiBcImpld29uLW9oL3NjaGVkdWxlLWJyaWRnZS1ibHVlcHJpbnQueWFtbFwiLFxuICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICBzY2hlZHVsZV9oZWxwZXI6IHNjaGVkdWxlRW50aXR5SWQsXG4gICAgICAgICAgICB0YXJnZXRfZGV2aWNlOiB0YXJnZXRFbnRpdHlJZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXCJQT1NUXCIsIGBjb25maWcvYXV0b21hdGlvbi9jb25maWcvJHthdXRvbWF0aW9uSWR9YCwgYXV0b21hdGlvblBheWxvYWQpO1xuICAgICAgY29uc29sZS5sb2coXCJbc2NoZWR1bGUtdWldIGF1dG9tYXRpb24gY3JlYXRlIFNVQ0NFU1M6XCIsIGF1dG9tYXRpb25JZCk7XG5cbiAgICAgIHRoaXMuX2NyZWF0ZVJlc3VsdCA9IHsgc3VjY2VzczogdHJ1ZSwgZW50aXR5SWQ6IHNjaGVkdWxlRW50aXR5SWQgfTtcblxuICAgICAgLy8g7J6Q64+ZIOyDneyEsSDsmYTro4wg7IucIOqzp+uwlOuhnCBjb25maWfsnZggZW50aXR5IOyGjeyEseydhCDqtZDssrRcbiAgICAgIHRoaXMuY29uZmlnQ2hhbmdlZCh7IC4uLnRoaXMuX2NvbmZpZywgZW50aXR5OiBzY2hlZHVsZUVudGl0eUlkIH0pO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltzY2hlZHVsZS11aV0gY3JlYXRlUm91dGluZSBGQUlMRUQ6XCIsIGUpO1xuICAgICAgdGhpcy5fY3JlYXRlUmVzdWx0ID0geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZS5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KGUpIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2lzQ3JlYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF90KGtleSkge1xuICAgIGNvbnN0IGxhbmcgPSB0aGlzLmhhc3M/Lmxhbmd1YWdlPy5zdGFydHNXaXRoKCdrbycpID8gJ2tvJyA6ICdlbic7XG4gICAgcmV0dXJuIExPQ0FMRVNbbGFuZ11ba2V5XSB8fCBMT0NBTEVTW1wiZW5cIl1ba2V5XTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIC8vIFRoZSBhdXRvLWNyZWF0ZSB3aXphcmQgY2FsbHMgc2NoZWR1bGUvY3JlYXRlICsgY29uZmlnL2F1dG9tYXRpb24vY29uZmlnLy4uLlxuICAgIC8vIGJvdGggb2Ygd2hpY2ggYXJlIGFkbWluLW9ubHkgSEEgQVBJcy4gTm9uLWFkbWluIHVzZXJzIGdldCA0MDEsIHNvIHRoZVxuICAgIC8vIHdpemFyZCBpcyBoaWRkZW4gZm9yIHRoZW0gYW5kIG9ubHkgdGhlIFwicGljayBleGlzdGluZyBoZWxwZXJcIiBwYXRoIGlzXG4gICAgLy8gZXhwb3NlZC5cbiAgICBjb25zdCBpc0FkbWluID0gISF0aGlzLmhhc3MudXNlcj8uaXNfYWRtaW47XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuXG4gICAgICAgICR7aXNBZG1pbiA/IGh0bWxgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpemFyZC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcIj5cbiAgICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cIm1kaTptYWdpYy1zdGFmZlwiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgPHNwYW4+JHt0aGlzLl90KFwiZWRpdG9yV2l6YXJkVGl0bGVcIil9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMC44NXJlbTsgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTsgbWFyZ2luOiA4cHggMCAxNnB4IDA7IGxpbmUtaGVpZ2h0OiAxLjQ7XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5fdChcImVkaXRvcldpemFyZERlc2NcIil9XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICR7dGhpcy5faXNDcmVhdGluZyA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDIwcHg7IGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcIj5cbiAgICAgICAgICAgICAgICA8aGEtaWNvbiBpY29uPVwibWRpOmxvYWRpbmdcIiBjbGFzcz1cInNwaW5cIj48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJtYXJnaW4tbGVmdDogOHB4O1wiPiR7dGhpcy5fdChcImNyZWF0aW5nXCIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgIDogaHRtbGBcbiAgICAgICAgICAgICAgPGhhLXNlbGVjdG9yXG4gICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgLnNlbGVjdG9yPSR7eyBlbnRpdHk6IHsgZG9tYWluOiBbXCJzd2l0Y2hcIiwgXCJsaWdodFwiLCBcImZhblwiLCBcImNsaW1hdGVcIiwgXCJjb3ZlclwiXSB9IH19XG4gICAgICAgICAgICAgICAgLnZhbHVlPSR7XCJcIn1cbiAgICAgICAgICAgICAgICAucmVxdWlyZWQ9JHtmYWxzZX1cbiAgICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLl90KFwiZWRpdG9yVGFyZ2V0RGV2aWNlXCIpfVxuICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fb25BdXRvQ3JlYXRlRGV2aWNlUGlja2VyfVxuICAgICAgICAgICAgICA+PC9oYS1zZWxlY3Rvcj5cbiAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICR7dGhpcy5fY3JlYXRlUmVzdWx0Py5zdWNjZXNzID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDEycHg7IGNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yLCAjNGNhZjUwKTsgZm9udC1zaXplOiAwLjlyZW07IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4O1wiPlxuICAgICAgICAgICAgICAgIDxoYS1pY29uIGljb249XCJtZGk6Y2hlY2stY2lyY2xlXCIgc3R5bGU9XCItLW1kYy1pY29uLXNpemU6IDE4cHg7XCI+PC9oYS1pY29uPlxuICAgICAgICAgICAgICAgIDxzcGFuPiR7dGhpcy5fY3JlYXRlUmVzdWx0LmVudGl0eUlkfSAke3RoaXMuX3QoXCJlZGl0b3JDcmVhdGVTdWNjZXNzXCIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgICAke3RoaXMuX2NyZWF0ZVJlc3VsdCAmJiAhdGhpcy5fY3JlYXRlUmVzdWx0LnN1Y2Nlc3MgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMTJweDsgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yLCAjZjQ0MzM2KTsgZm9udC1zaXplOiAwLjlyZW07XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLl90KFwiZWRpdG9yRXJyb3JQcmVmaXhcIil9JHt0aGlzLl9jcmVhdGVSZXN1bHQubWVzc2FnZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiAxcHg7IGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IsIHJnYmEoMTAwLDEwMCwxMDAsMC4yKSk7IG1hcmdpbjogMjRweCAwO1wiPjwvZGl2PlxuICAgICAgICBgIDogaHRtbGBcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMTJweCAxNHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjA4KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDE1MiwgMCwgMC4yNSk7IGJvcmRlci1yYWRpdXM6IDhweDsgZm9udC1zaXplOiAwLjg1cmVtOyBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpOyBtYXJnaW4tYm90dG9tOiAxNnB4OyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEwcHg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1wiPlxuICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cIm1kaTpzaGllbGQtYWNjb3VudFwiIHN0eWxlPVwiLS1tZGMtaWNvbi1zaXplOiAxOHB4OyBjb2xvcjogI2ZmOTgwMDsgZmxleC1zaHJpbms6IDA7XCI+PC9oYS1pY29uPlxuICAgICAgICAgICAgPHNwYW4+JHt0aGlzLl90KFwiYWRtaW5Pbmx5V2l6YXJkXCIpfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYH1cblxuICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC13ZWlnaHQ6IDYwMDsgbWFyZ2luLWJvdHRvbTogMTZweDsgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XCI+XG4gICAgICAgICAgJHt0aGlzLl90KFwiZWRpdG9yQWR2YW5jZWRcIil9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxoYS1zZWxlY3RvclxuICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgIC5zZWxlY3Rvcj0ke3sgZW50aXR5OiB7IGRvbWFpbjogXCJzY2hlZHVsZVwiIH0gfX1cbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl9jb25maWcuZW50aXR5IHx8IFwiXCJ9XG4gICAgICAgICAgLnJlcXVpcmVkPSR7ZmFsc2V9XG4gICAgICAgICAgLmxhYmVsPSR7dGhpcy5fdChcImVkaXRvclNjaGVkdWxlRW50aXR5XCIpfVxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZW50aXR5Q2hhbmdlZH1cbiAgICAgICAgPjwvaGEtc2VsZWN0b3I+XG5cbiAgICAgICAgPGJyLz5cblxuICAgICAgICA8aGEtdGV4dGZpZWxkXG4gICAgICAgICAgbGFiZWw9XCIke3RoaXMuX3QoXCJlZGl0b3JDYXJkVGl0bGVcIil9XCJcbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl9jb25maWcudGl0bGUgfHwgXCJcIn1cbiAgICAgICAgICBAaW5wdXQ9JHt0aGlzLl90aXRsZUNoYW5nZWR9XG4gICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIlxuICAgICAgICA+PC9oYS10ZXh0ZmllbGQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgX2VudGl0eUNoYW5nZWQoZXYpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSByZXR1cm47XG4gICAgY29uc3QgdmFsdWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5lbnRpdHkgPT09IHZhbHVlKSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5jb25maWdDaGFuZ2VkKHtcbiAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgIGVudGl0eTogdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBfdGl0bGVDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykgcmV0dXJuO1xuICAgIGNvbnN0IHZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0aGlzLl9jb25maWcudGl0bGUgPT09IHZhbHVlKSByZXR1cm47XG4gICAgXG4gICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICBjb25zdCB0bXBDb25maWcgPSB7IC4uLnRoaXMuX2NvbmZpZyB9O1xuICAgICAgZGVsZXRlIHRtcENvbmZpZy50aXRsZTtcbiAgICAgIHRoaXMuY29uZmlnQ2hhbmdlZCh0bXBDb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZ0NoYW5nZWQoe1xuICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgIHRpdGxlOiB2YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgLmNhcmQtY29uZmlnIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAud2l6YXJkLXNlY3Rpb24ge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIHJnYmEoMCwwLDAsMC4wNSkpO1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG4gICAgLnNwaW4ge1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICB9XG4gIGA7XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbS1zY2hlZHVsZS1jYXJkLWVkaXRvclwiLCBIYUN1c3RvbVNjaGVkdWxlQ2FyZEVkaXRvcik7XG4iLCIvLyBAdHMtbm9jaGVja1xuaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3NzIH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgVElNRVJfTE9DQUxFUyB9IGZyb20gXCIuLi9sb2NhbGVzL2luZGV4LmpzXCI7XG5cbmNsYXNzIEhhQ3VzdG9tVGltZXJDYXJkRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgIGhhc3M6IHt9LFxuICAgIF9jb25maWc6IHsgc3RhdGU6IHRydWUgfSxcbiAgICBfc2VsZWN0ZWRFbnRpdHk6IHsgc3RhdGU6IHRydWUgfSxcbiAgICBfc2VsZWN0ZWRBY3Rpb246IHsgc3RhdGU6IHRydWUgfSxcbiAgICBfaXNMb2FkaW5nOiB7IHN0YXRlOiB0cnVlIH0sXG4gICAgX2NyZWF0aW9uRXJyb3I6IHsgc3RhdGU6IHRydWUgfVxuICB9O1xuXG4gIHNldENvbmZpZyhjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fc2VsZWN0ZWRBY3Rpb24gPSBjb25maWcuYWN0aW9uX3R5cGUgfHwgXCJ0dXJuX29mZlwiO1xuICB9XG5cbiAgZ2V0IF9sYW5nKCkge1xuICAgIHJldHVybiB0aGlzLmhhc3M/Lmxhbmd1YWdlICYmIHRoaXMuaGFzcy5sYW5ndWFnZS5pbmNsdWRlcygna28nKSA/ICdrbycgOiAnZW4nO1xuICB9XG5cbiAgX3Qoa2V5KSB7XG4gICAgcmV0dXJuIFRJTUVSX0xPQ0FMRVNbdGhpcy5fbGFuZ10/LltrZXldID8/IFRJTUVSX0xPQ0FMRVMuZW5ba2V5XTtcbiAgfVxuXG4gIC8vIDEuIFRhcmdldCBFbnRpdHkg7ISg7YOdIOyLnCBUaW1lciDtl6ztjbwg67CPIOu4jOumv+yngCDsnpDrj5kg7IOd7ISxXG4gIGFzeW5jIF9vblRhcmdldEVudGl0eVBpY2tlZChldikge1xuICAgIGNvbnN0IHRhcmdldEVudGl0eUlkID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmICghdGFyZ2V0RW50aXR5SWQgfHwgdGFyZ2V0RW50aXR5SWQgPT09IHRoaXMuX3NlbGVjdGVkRW50aXR5KSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5fc2VsZWN0ZWRFbnRpdHkgPSB0YXJnZXRFbnRpdHlJZDtcbiAgICB0aGlzLl9pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2NyZWF0aW9uRXJyb3IgPSBudWxsO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCBlbnRpdHlTdGF0ZSA9IHRoaXMuaGFzcy5zdGF0ZXNbdGFyZ2V0RW50aXR5SWRdO1xuICAgICAgY29uc3QgZW50aXR5TmFtZSA9IGVudGl0eVN0YXRlPy5hdHRyaWJ1dGVzPy5mcmllbmRseV9uYW1lIHx8IHRhcmdldEVudGl0eUlkO1xuICAgICAgXG4gICAgICBsZXQgdGltZXJJZCA9IG51bGw7XG4gICAgICBsZXQgdGltZXJFbnRpdHlJZCA9IG51bGw7XG5cbiAgICAgIC8vIFN0ZXAgQTogVGltZXIg7Zes7Y28IOyDneyEsSAoU2NoZWR1bGXsspjrn7wg64K067aAIFdTIEFQSSDtmZzsmqkpXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgIHR5cGU6IFwidGltZXIvY3JlYXRlXCIsXG4gICAgICAgICAgbmFtZTogYCR7ZW50aXR5TmFtZX0ke3RoaXMuX3QoXCJ0aW1lclN1ZmZpeFwiKX1gLFxuICAgICAgICAgIGljb246IFwibWRpOnRpbWVyLXNhbmRcIlxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0aW1lclJlc3VsdCA9IGF3YWl0IHRoaXMuaGFzcy5jYWxsV1MocGF5bG9hZCk7XG4gICAgICAgIHRpbWVySWQgPSB0aW1lclJlc3VsdC5pZDtcbiAgICAgICAgdGltZXJFbnRpdHlJZCA9IGB0aW1lci4ke3RpbWVySWR9YDtcbiAgICAgICAgY29uc29sZS5sb2coXCJbc2NoZWR1bGUtdWldIHRpbWVyIGhlbHBlciBjcmVhdGUgU1VDQ0VTUzpcIiwgdGltZXJFbnRpdHlJZCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlRpbWVyIGhlbHBlciBhdXRvLWNyZWF0aW9uIGZhaWxlZCB2aWEgY29uZmlnL3RpbWVyL2NyZWF0ZS4gRXJyb3I6XCIsIGUpO1xuICAgICAgICB0aGlzLl9jcmVhdGlvbkVycm9yID0gdGhpcy5fdChcImhlbHBlckZhaWxNc2dcIik7XG4gICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFN0ZXAgQjog67iU66Oo7ZSE66aw7Yq4IOywuOyhsCDrsKnsi53snLzroZwg7J6Q64+Z7ZmUIOu4jOumv+yngCDsg53shLFcbiAgICAgIGNvbnN0IGFjdGlvblR5cGUgPSB0aGlzLl9zZWxlY3RlZEFjdGlvbiB8fCBcInR1cm5fb2ZmXCI7XG4gICAgICBjb25zdCBicmlkZ2VJZCA9IGB0aW1lcl9icmlkZ2VfJHt0aW1lcklkfWA7XG4gICAgICBjb25zdCBhbGlhcyA9IGAke3RoaXMuX3QoXCJ0aW1lckJyaWRnZUFsaWFzUHJlZml4XCIpfSR7ZW50aXR5TmFtZX1gO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhcIltzY2hlZHVsZS11aV0gQ3JlYXRpbmcgdGltZXIgYnJpZGdlIChibHVlcHJpbnQpOlwiLCBicmlkZ2VJZCwgXCJmb3IgdGFyZ2V0OlwiLCB0YXJnZXRFbnRpdHlJZCk7XG5cbiAgICAgIC8vIOq4sOyhtCDrj5nsnbwgSUQg67iM66a/7KeAIOykkeuztSDsoJzqsbBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGF1dG9tYXRpb25zID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7IHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9saXN0XCIgfSk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXV0b21hdGlvbnMuZmluZChhID0+IGEuZW50aXR5X2lkID09PSBgYXV0b21hdGlvbi4ke2JyaWRnZUlkfWApO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmhhc3MuY2FsbFdTKHsgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3JlbW92ZVwiLCBlbnRpdHlfaWQ6IGV4aXN0aW5nLmVudGl0eV9pZCB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaChlKSB7fVxuXG4gICAgICAvLyDruJTro6jtlITrprDtirgg7LC47KGwIO2YleyLnSDigJQgSEEgJ+yCrOyaqeykkScg7Lm07Jq07Yq47JeQIOuwmOyYgeuQqFxuICAgICAgY29uc3QgYnJpZGdlUGF5bG9hZCA9IHtcbiAgICAgICAgYWxpYXM6IGFsaWFzLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5fdChcImJyaWRnZURlc2NyaXB0aW9uXCIpLFxuICAgICAgICB1c2VfYmx1ZXByaW50OiB7XG4gICAgICAgICAgcGF0aDogXCJqZXdvbi1vaC90aW1lci1icmlkZ2UtYmx1ZXByaW50LnlhbWxcIixcbiAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgdGltZXJfaGVscGVyOiB0aW1lckVudGl0eUlkLFxuICAgICAgICAgICAgdGFyZ2V0X2RldmljZTogdGFyZ2V0RW50aXR5SWQsXG4gICAgICAgICAgICBhY3Rpb25fdHlwZTogYWN0aW9uVHlwZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXCJQT1NUXCIsIGBjb25maWcvYXV0b21hdGlvbi9jb25maWcvJHticmlkZ2VJZH1gLCBicmlkZ2VQYXlsb2FkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiW3NjaGVkdWxlLXVpXSB0aW1lciBhdXRvbWF0aW9uIGJyaWRnZSAoYmx1ZXByaW50KSBjcmVhdGUgU1VDQ0VTUzpcIiwgYnJpZGdlSWQpO1xuXG4gICAgICAvLyDshKTsoJUg7J6E7IucIOyXheuNsOydtO2KuFxuICAgICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgIGVudGl0eTogdGltZXJFbnRpdHlJZCxcbiAgICAgICAgdGl0bGU6IGAke2VudGl0eU5hbWV9JHt0aGlzLl90KFwidGltZXJTdWZmaXhcIil9YFxuICAgICAgfTtcblxuICAgICAgLy8g7ISk7KCVIOydtOuypO2KuCDrsJzshqEgKEhBIFVJ7JeQIOyggOyepSDtirjrpqzqsbApXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY29uZmlnLWNoYW5nZWRcIiwge1xuICAgICAgICBkZXRhaWw6IHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSxcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgIH0pKTtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB0aGlzLl9jcmVhdGlvbkVycm9yID0gYCR7dGhpcy5fdChcImVycm9yUHJlZml4XCIpfSR7ZS5tZXNzYWdlfWA7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIF9jcmVhdGVBdXRvbWF0aW9uQnJpZGdlOiDruJTro6jtlITrprDtirgg7LC47KGwIOuwqeyLneycvOuhnCBfb25UYXJnZXRFbnRpdHlQaWNrZWTsl5Ag7Ya17ZWpICjsgq3soJzrkKgpXG5cbiAgX29uQWN0aW9uQ2hhbmdlKGV2KSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRBY3Rpb24gPSBldi50YXJnZXQudmFsdWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuX2NvbmZpZykgcmV0dXJuIGh0bWxgYDtcblxuICAgIC8vIHRpbWVyL2NyZWF0ZSArIGNvbmZpZy9hdXRvbWF0aW9uL2NvbmZpZy8uLi4gYXJlIGFkbWluLW9ubHkuXG4gICAgLy8gTm9uLWFkbWluIHVzZXJzIHNlZSBvbmx5IHRoZSBcInBpY2sgZXhpc3RpbmcgdGltZXJcIiBwYXRoLlxuICAgIGNvbnN0IGlzQWRtaW4gPSAhIXRoaXMuaGFzcy51c2VyPy5pc19hZG1pbjtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29uZmlnXCI+XG4gICAgICAgICR7aXNBZG1pbiA/IGh0bWxgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpemFyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoYS1pY29uIGljb249XCJtZGk6bWFnaWMtc3RhZmZcIj48L2hhLWljb24+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+JHt0aGlzLl90KFwiZWRpdG9yV2l6YXJkVGl0bGVcIil9PC9oMz5cbiAgICAgICAgICAgICAgPHA+JHt0aGlzLl90KFwiZWRpdG9yV2l6YXJkRGVzY1wiKX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aXphcmQtZmllbGRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2l6YXJkLWZpZWxkXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD4ke3RoaXMuX3QoXCJlZGl0b3JUYXJnZXREZXZpY2VcIil9PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGhhLXNlbGVjdG9yXG4gICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgLnNlbGVjdG9yPSR7eyBlbnRpdHk6IHsgZG9tYWluOiBbXCJsaWdodFwiLCBcInN3aXRjaFwiLCBcImZhblwiLCBcImNsaW1hdGVcIiwgXCJtZWRpYV9wbGF5ZXJcIl0gfSB9fVxuICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3NlbGVjdGVkRW50aXR5fVxuICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fb25UYXJnZXRFbnRpdHlQaWNrZWR9XG4gICAgICAgICAgICAgID48L2hhLXNlbGVjdG9yPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aXphcmQtZmllbGRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPiR7dGhpcy5fdChcImVkaXRvckFjdGlvblR5cGVcIil9PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImN1c3RvbS1zZWxlY3RcIiAudmFsdWU9XCIke3RoaXMuX3NlbGVjdGVkQWN0aW9ufVwiIEBjaGFuZ2U9XCIke3RoaXMuX29uQWN0aW9uQ2hhbmdlfVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0dXJuX29mZlwiPiR7dGhpcy5fdChcImVkaXRvckFjdGlvbk9mZlwiKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHVybl9vblwiPiR7dGhpcy5fdChcImVkaXRvckFjdGlvbk9uXCIpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0b2dnbGVcIj4ke3RoaXMuX3QoXCJlZGl0b3JBY3Rpb25Ub2dnbGVcIil9PC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAke3RoaXMuX2lzTG9hZGluZyA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzLW1zZyBpbmZvXCI+XG4gICAgICAgICAgICAgIDxoYS1pY29uIGljb249XCJtZGk6bG9hZGluZ1wiIGNsYXNzPVwic3BpblwiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgJHt0aGlzLl90KFwic3luY2luZ01lc3NhZ2VcIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgIDogXCJcIn1cblxuICAgICAgICAgICR7dGhpcy5fY3JlYXRpb25FcnJvciA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzLW1zZyBlcnJvclwiPlxuICAgICAgICAgICAgICA8aGEtaWNvbiBpY29uPVwibWRpOmFsZXJ0LWNpcmNsZVwiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgJHt0aGlzLl9jcmVhdGlvbkVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYCA6IFwiXCJ9XG4gICAgICAgIGAgOiBodG1sYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZG1pbi1ub3RpY2VcIj5cbiAgICAgICAgICAgIDxoYS1pY29uIGljb249XCJtZGk6c2hpZWxkLWFjY291bnRcIj48L2hhLWljb24+XG4gICAgICAgICAgICA8c3Bhbj4ke3RoaXMuX3QoXCJhZG1pbk9ubHlXaXphcmRcIil9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgfVxuXG4gICAgICAgIDxociBjbGFzcz1cImRpdmlkZXJcIiAvPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cIndpemFyZC1maWVsZFwiPlxuICAgICAgICAgIDxsYWJlbD4ke3RoaXMuX3QoXCJlZGl0b3JFbnRpdHlcIil9JHt0aGlzLl90KFwiZ2VuZXJhdGVkVGltZXJMYWJlbFwiKX08L2xhYmVsPlxuICAgICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX2NvbmZpZy5lbnRpdHl9XG4gICAgICAgICAgICBkb21haW49XCJ0aW1lclwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImVudGl0eVwifVxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHsoZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9jb25maWcgPSB7IC4uLnRoaXMuX2NvbmZpZywgZW50aXR5OiBlLmRldGFpbC52YWx1ZSB9O1xuICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY29uZmlnLWNoYW5nZWRcIiwgeyBkZXRhaWw6IHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSwgYnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWUgfSkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgIC5jYXJkLWNvbmZpZyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTZweDtcbiAgICB9XG4gICAgLndpemFyZC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgzLCAxNjksIDI0NCwgMC4xKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMywgMTY5LCAyNDQsIDAuMik7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuICAgIC53aXphcmQtaGVhZGVyIGhhLWljb24ge1xuICAgICAgY29sb3I6ICMwM2E5ZjQ7XG4gICAgICAtLW1kYy1pY29uLXNpemU6IDMycHg7XG4gICAgfVxuICAgIC53aXphcmQtaGVhZGVyIGgzIHtcbiAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC53aXphcmQtaGVhZGVyIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgfVxuICAgIC53aXphcmQtZmllbGRzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLndpemFyZC1maWVsZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogNnB4O1xuICAgIH1cbiAgICAud2l6YXJkLWZpZWxkIGxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAuY3VzdG9tLXNlbGVjdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDhweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvciwgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgLmRpdmlkZXIge1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yLCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMykpO1xuICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICB9XG4gICAgLnN0YXR1cy1tc2cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG4gICAgLnN0YXR1cy1tc2cuaW5mbyB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE2OSwgMjQ0LCAwLjEpO1xuICAgICAgY29sb3I6ICMwM2E5ZjQ7XG4gICAgfVxuICAgIC5zdGF0dXMtbXNnLmVycm9yIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCA2NywgNTQsIDAuMSk7XG4gICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICB9XG4gICAgLmFkbWluLW5vdGljZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjA4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxNTIsIDAsIDAuMjUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgIC5hZG1pbi1ub3RpY2UgaGEtaWNvbiB7XG4gICAgICAtLW1kYy1pY29uLXNpemU6IDE4cHg7XG4gICAgICBjb2xvcjogI2ZmOTgwMDtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIH1cbiAgICAuc3BpbiB7XG4gICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICB9XG4gIGA7XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbS10aW1lci1jYXJkLWVkaXRvclwiLCBIYUN1c3RvbVRpbWVyQ2FyZEVkaXRvcik7XG4iLCIvLyBAdHMtbm9jaGVja1xuaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3NzIH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgTE9DQUxFUywgZGV0ZWN0TGFuZyB9IGZyb20gXCIuLi9sb2NhbGVzL2luZGV4LmpzXCI7XG5cbmNvbnN0IFdFRUtEQVlTID0gW1wibW9uZGF5XCIsIFwidHVlc2RheVwiLCBcIndlZG5lc2RheVwiLCBcInRodXJzZGF5XCIsIFwiZnJpZGF5XCIsIFwic2F0dXJkYXlcIiwgXCJzdW5kYXlcIl07XG5cbi8vIOu4jOumv+yngCDsnpDrj5ntmZQgSUQg7KCR65GQ7IKsXG5jb25zdCBBVVRPTUFUSU9OX1BSRUZJWCA9IFwic2NoZWR1bGVfYnJpZGdlX1wiO1xuXG4vLyB2MS40IOuqqOuNuDog7Lm065Oc64qUIO2VnCBzY2hlZHVsZeydhCDri6jsnbwgdmlld+uhnCDri6Tro6zri6QuXG4vLyAtIF9hY3RpdmVEYXlzOiBudW1iZXJbXSAgKDA9TW9uIOKApiA2PVN1bikg4oCUIOqwmeydgCDsi5zqsIQg67iU66GdIOyEuO2KuOqwgCDsoIHsmqnrkJjripQg7JqU7J2865OkXG4vLyAtIF9ibG9ja3MgICAgOiB7ZnJvbSx0b31bXSDigJQg7Zmc7ISxIOyalOydvOuTpOydtCDqs7XsnKDtlZjripQg64uo7J28IOu4lOuhnSDshLjtirhcbi8vIOyggOyepSDsi5wg7Zmc7ISxIOyalOydvOyXkOuKlCBfYmxvY2tzLCDruYTtmZzshLEg7JqU7J287JeQ64qUIOu5iCDrsLDsl7TsnYQg64K066CkIOuztOuCuOuLpC5cblxuY2xhc3MgSGFDdXN0b21TY2hlZHVsZUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgX2NvbmZpZzogeyBzdGF0ZTogdHJ1ZSB9LFxuICAgIF9oYXNzOiB7IHN0YXRlOiBmYWxzZSB9LFxuICAgIF9zY2hlZHVsZURhdGE6IHsgc3RhdGU6IHRydWUgfSxcbiAgICBfYWN0aXZlRGF5czogeyBzdGF0ZTogdHJ1ZSB9LFxuICAgIF9ibG9ja3M6IHsgc3RhdGU6IHRydWUgfSxcbiAgICBfc2hvd0NyZWF0ZVdpemFyZDogeyBzdGF0ZTogdHJ1ZSB9LFxuICAgIF9pc0NyZWF0aW5nOiB7IHN0YXRlOiB0cnVlIH0sXG4gICAgX2NyZWF0ZVJlc3VsdDogeyBzdGF0ZTogdHJ1ZSB9LFxuICAgIF9zZWxlY3RlZEJsb2NrSWR4OiB7IHN0YXRlOiB0cnVlIH0sXG4gICAgX3Jlc2l6aW5nQmxvY2tJZHg6IHsgc3RhdGU6IHRydWUgfSxcbiAgICBfcmVzaXppbmdFZGdlOiB7IHN0YXRlOiB0cnVlIH0sXG4gICAgX3RvYXN0OiB7IHN0YXRlOiB0cnVlIH0sXG4gICAgX2NvbmZpcm06IHsgc3RhdGU6IHRydWUgfSxcbiAgICBfaXNFZGl0aW5nOiB7IHN0YXRlOiB0cnVlIH0sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zY2hlZHVsZURhdGEgPSBudWxsO1xuICAgIGNvbnN0IHRvZGF5SWR4ID0gbmV3IERhdGUoKS5nZXREYXkoKSA9PT0gMCA/IDYgOiBuZXcgRGF0ZSgpLmdldERheSgpIC0gMTsgLy8gMD1Nb24sIDY9U3VuXG4gICAgdGhpcy5fYWN0aXZlRGF5cyA9IFt0b2RheUlkeF07XG4gICAgdGhpcy5fYmxvY2tzID0gW107XG4gICAgdGhpcy5fc2hvd0NyZWF0ZVdpemFyZCA9IGZhbHNlO1xuICAgIHRoaXMuX2lzQ3JlYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9jcmVhdGVSZXN1bHQgPSBudWxsO1xuICAgIHRoaXMuX2xhbmcgPSBcImVuXCI7XG4gICAgdGhpcy5faXNFZGl0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fc2VsZWN0ZWRCbG9ja0lkeCA9IG51bGw7XG4gICAgdGhpcy5fcmVzaXppbmdCbG9ja0lkeCA9IG51bGw7XG4gICAgdGhpcy5fcmVzaXppbmdFZGdlID0gbnVsbDtcbiAgICB0aGlzLl90b2FzdCA9IG51bGw7ICAgICAgICAvLyB7IG1lc3NhZ2U6IHN0cmluZyB9XG4gICAgdGhpcy5fY29uZmlybSA9IG51bGw7ICAgICAgLy8geyBtZXNzYWdlLCBvbkNvbmZpcm0gfVxuICAgIHRoaXMuX3RvYXN0VGltZXIgPSBudWxsO1xuICAgIHRoaXMuX3NhdmVUaW1lciA9IG51bGw7ICAgIC8vIGRlYm91bmNlZCBfdXBkYXRlU2NoZWR1bGVcbiAgfVxuXG4gIC8vIOu5oOuluCDsl7Dsho0g7Yag6riAKOyYiDog7JuUwrftmZTCt+yImCDsvJzquLAp7JeQ7IScIOunpOuyiCDshJzrsoQg7JmV67O17ZWY7KeAIOyViuuPhOuhnVxuICAvLyDrp4jsp4Drp4kg67OA6rK9IO2bhCDsnbzsoJUg7Iuc6rCEIOupiOy2sOyVvCDsoIDsnqXtlZzri6QuXG4gIF9zY2hlZHVsZVNhdmVEZWJvdW5jZWQobXMgPSA0MDApIHtcbiAgICBpZiAodGhpcy5fc2F2ZVRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5fc2F2ZVRpbWVyKTtcbiAgICB0aGlzLl9zYXZlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3NhdmVUaW1lciA9IG51bGw7XG4gICAgICB0aGlzLl91cGRhdGVTY2hlZHVsZSgpO1xuICAgIH0sIG1zKTtcbiAgfVxuXG4gIC8vIOy5tOuTnCDslYjsnZggYmxvY2sgLyBoYW5kbGUgLyBkZWxldGUg6rCAIOyVhOuLjCDtgbTrpq3snbTrqbQg7ISg7YOdIO2VtOygnC5cbiAgLy8gKHRpbWVsaW5lIOu5iCDsmIHsl60sIGRheS1zd2l0Y2hlciwgY2FyZC1oZWFkZXIsIOy5tOuTnCDsmbjrtoAg66qo65GQIO2PrO2VqC4pXG4gIC8vIHBvaW50ZXJkb3duIO2VuOuTpOufrOqwgCBlZGl0b3ItY29sdW1uIOu5iCDsmIHsl63rp4wg7LKY66as7ZWY642YIO2VnOqzhOulvCDrqZTsmrTri6QuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fb25Eb2NQb2ludGVyRG93biA9IChlKSA9PiB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRCbG9ja0lkeCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMuX3Jlc2l6aW5nQmxvY2tJZHggIT09IG51bGwpIHJldHVybjtcbiAgICAgIC8vIFdoaWxlIGEgY29uZmlybSBtb2RhbCBpcyBvcGVuIG9yIGEgc2F2ZSBpcyBpbiBmbGlnaHQsIGxlYXZlIHRoZVxuICAgICAgLy8gc2VsZWN0aW9uIChhbmQgdGhlIG1vZGFsKSBhbG9uZS4gT24gbW9iaWxlIChIQSBDb21wYW5pb24pLCB0aGVcbiAgICAgIC8vIGNhcHR1cmUtcGhhc2UgbGlzdGVuZXIgdXNlZCB0byBjbGVhciBfc2VsZWN0ZWRCbG9ja0lkeCBtaWQtdGFwXG4gICAgICAvLyBhbmQgdGhlIHJlc3VsdGluZyBsaXQgcmUtcmVuZGVyIHN3YXBwZWQgb3V0IHRoZSBjb25maXJtIGJ1dHRvblxuICAgICAgLy8gYmVmb3JlIGl0cyBjbGljayBldmVudCBsYW5kZWQg4oCUIHNvIHRoZSBEZWxldGUgYnV0dG9uIGxvb2tlZFxuICAgICAgLy8gdW5yZXNwb25zaXZlIGV2ZW4gdGhvdWdoIHRoZSBtb2RhbCB3YXMgdmlzaWJsZS5cbiAgICAgIGlmICh0aGlzLl9jb25maXJtIHx8IHRoaXMuX2lzRWRpdGluZykgcmV0dXJuO1xuICAgICAgY29uc3QgcGF0aCA9IGUuY29tcG9zZWRQYXRoID8gZS5jb21wb3NlZFBhdGgoKSA6IFtdO1xuICAgICAgY29uc3Qga2VlcFNlbGVjdGlvbiA9IHBhdGguc29tZShlbCA9PiB7XG4gICAgICAgIGNvbnN0IGNscyA9IGVsPy5jbGFzc0xpc3Q7XG4gICAgICAgIGlmICghY2xzKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBjbHMuY29udGFpbnMoXCJlZGl0b3ItYmxvY2tcIilcbiAgICAgICAgICB8fCBjbHMuY29udGFpbnMoXCJibG9jay1oYW5kbGVcIilcbiAgICAgICAgICB8fCBjbHMuY29udGFpbnMoXCJibG9jay1kZWxldGVcIilcbiAgICAgICAgICB8fCBjbHMuY29udGFpbnMoXCJibG9jay10aW1lLXBpbGxcIilcbiAgICAgICAgICAvLyBDb25maXJtIG1vZGFsIHN1cmZhY2VzIOKAlCBndWFyZGVkIGFib3ZlIGFzIHdlbGwsIGJ1dCBrZXB0IGhlcmVcbiAgICAgICAgICAvLyBpbiBjYXNlIF9jb25maXJtIGZsaXBzIGFmdGVyIHRoZSBwYXRoIHdhcyBjYXB0dXJlZC5cbiAgICAgICAgICB8fCBjbHMuY29udGFpbnMoXCJjb25maXJtLW92ZXJsYXlcIilcbiAgICAgICAgICB8fCBjbHMuY29udGFpbnMoXCJjb25maXJtLWNhcmRcIilcbiAgICAgICAgICB8fCBjbHMuY29udGFpbnMoXCJjb25maXJtLWFjdGlvbnNcIilcbiAgICAgICAgICB8fCBjbHMuY29udGFpbnMoXCJkYW5nZXItYnRuXCIpXG4gICAgICAgICAgfHwgY2xzLmNvbnRhaW5zKFwiZ2hvc3QtYnRuXCIpO1xuICAgICAgfSk7XG4gICAgICBpZiAoIWtlZXBTZWxlY3Rpb24pIHRoaXMuX3NlbGVjdGVkQmxvY2tJZHggPSBudWxsO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuX29uRG9jUG9pbnRlckRvd24sIHRydWUpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fb25Eb2NQb2ludGVyRG93bikge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuX29uRG9jUG9pbnRlckRvd24sIHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2F2ZVRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5fc2F2ZVRpbWVyKTtcbiAgICBpZiAodGhpcy5fdG9hc3RUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuX3RvYXN0VGltZXIpO1xuICB9XG5cbiAgX3Nob3dUb2FzdChtZXNzYWdlLCBtcyA9IDMwMDApIHtcbiAgICBpZiAodGhpcy5fdG9hc3RUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuX3RvYXN0VGltZXIpO1xuICAgIHRoaXMuX3RvYXN0ID0geyBtZXNzYWdlIH07XG4gICAgdGhpcy5fdG9hc3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl90b2FzdCA9IG51bGw7IHRoaXMuX3RvYXN0VGltZXIgPSBudWxsOyB9LCBtcyk7XG4gIH1cblxuICBfb3BlbkNvbmZpcm0obWVzc2FnZSwgb25Db25maXJtKSB7XG4gICAgdGhpcy5fY29uZmlybSA9IHsgbWVzc2FnZSwgb25Db25maXJtIH07XG4gIH1cblxuICBfY2xvc2VDb25maXJtKCkge1xuICAgIHRoaXMuX2NvbmZpcm0gPSBudWxsO1xuICB9XG5cbiAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICBpZiAodGhpcy5faGFzcykgdGhpcy5fbG9hZFNjaGVkdWxlKCk7XG4gIH1cblxuICBzZXQgaGFzcyhoYXNzKSB7XG4gICAgY29uc3Qgb2xkSGFzcyA9IHRoaXMuX2hhc3M7XG4gICAgdGhpcy5faGFzcyA9IGhhc3M7XG5cbiAgICBsZXQgc2hvdWxkVXBkYXRlID0gIW9sZEhhc3M7IC8vIOy1nOy0iOuhnCBoYXNz6rCAIOyjvOyeheuQoCDrlYwg66CM642U66eBIOqwleygnCDtirjrpqzqsbBcblxuICAgIC8vIOyWuOyWtCDqsJDsp4BcbiAgICBpZiAoaGFzcyAmJiBoYXNzLmxhbmd1YWdlKSB7XG4gICAgICBjb25zdCBuZXdMYW5nID0gaGFzcy5sYW5ndWFnZS5zdGFydHNXaXRoKFwia29cIikgPyBcImtvXCIgOiBcImVuXCI7XG4gICAgICBpZiAodGhpcy5fbGFuZyAhPT0gbmV3TGFuZykge1xuICAgICAgICB0aGlzLl9sYW5nID0gbmV3TGFuZztcbiAgICAgICAgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTsgLy8gaGFzcyDstZzstIgg7KO87J6FIOuYkOuKlCDslrjslrQg67OA6rK9IOyLnCDtmZTrqbQg6rCx7IugXG4gICAgfVxuXG4gICAgLy8g7LWc7LSIIOyXsOqysCDsi5wg642w7J207YSwIOy0iOq4sO2ZlFxuICAgIGlmICghb2xkSGFzcyAmJiBoYXNzICYmIHRoaXMuX2NvbmZpZykge1xuICAgICAgdGhpcy5fbG9hZFNjaGVkdWxlKCk7XG4gICAgfVxuICB9XG5cbiAgX3Qoa2V5KSB7XG4gICAgcmV0dXJuIExPQ0FMRVNbdGhpcy5fbGFuZ11ba2V5XSB8fCBMT0NBTEVTW1wiZW5cIl1ba2V5XTtcbiAgfVxuXG4gIGFzeW5jIF9sb2FkU2NoZWR1bGUoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNzIHx8ICF0aGlzLl9jb25maWcuZW50aXR5KSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5faGFzcy5jYWxsV1Moe1xuICAgICAgICB0eXBlOiBcInNjaGVkdWxlL2xpc3RcIixcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCBlbnRpdHlJZCA9IHRoaXMuX2NvbmZpZy5lbnRpdHk7XG4gICAgICBjb25zdCBlbnRpdHlTbHVnID0gZW50aXR5SWQuc3BsaXQoXCIuXCIpWzFdO1xuICAgICAgXG4gICAgICAvLyBlbnRpdHkgcmVnaXN0cnnsl5DshJwgdW5pcXVlX2lkKD1zdG9yYWdlIGlkKeulvCBXZWJTb2NrZXTsnLzroZwg7KeB7KCRIOyhsO2ajFxuICAgICAgLy8gSEHsl5DshJwgZW50aXR5X2lk66W8IHJlbmFtZe2VmOuptCBzbHVn7JmAIHN0b3JhZ2UgaWTqsIAg64us65287KeA66+A66GcIO2VhOyImFxuICAgICAgbGV0IHN0b3JhZ2VJZCA9IGVudGl0eVNsdWc7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZWdFbnRyeSA9IGF3YWl0IHRoaXMuX2hhc3MuY2FsbFdTKHtcbiAgICAgICAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvZ2V0XCIsXG4gICAgICAgICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZWdFbnRyeSAmJiByZWdFbnRyeS51bmlxdWVfaWQpIHtcbiAgICAgICAgICBzdG9yYWdlSWQgPSByZWdFbnRyeS51bmlxdWVfaWQ7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJbc2NoZWR1bGUtdWldIGVudGl0eSByZWdpc3RyeSDihpIgdW5pcXVlX2lkOlwiLCBzdG9yYWdlSWQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChyZWdFcnIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW3NjaGVkdWxlLXVpXSBlbnRpdHkgcmVnaXN0cnkg7KGw7ZqMIOyLpO2MqCwgc2x1ZyDsgqzsmqk6XCIsIGVudGl0eVNsdWcsIHJlZ0Vycik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIDHssKg6IHN0b3JhZ2UgaWQodW5pcXVlX2lkKeuhnCDrp6Tsua1cbiAgICAgIGxldCBtYXRjaCA9IHJlc3VsdC5maW5kKHMgPT4gcy5pZCA9PT0gc3RvcmFnZUlkKTtcbiAgICAgIFxuICAgICAgLy8gMuywqDogZW50aXR5X2lkIHNsdWfroZwg66ek7LmtXG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIG1hdGNoID0gcmVzdWx0LmZpbmQocyA9PiBzLmlkID09PSBlbnRpdHlTbHVnKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gM+ywqDogZnJpZW5kbHlfbmFtZeycvOuhnCDrp6Tsua1cbiAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgZW50aXR5U3RhdGUgPSB0aGlzLl9oYXNzLnN0YXRlcz8uW2VudGl0eUlkXTtcbiAgICAgICAgY29uc3QgZnJpZW5kbHlOYW1lID0gZW50aXR5U3RhdGU/LmF0dHJpYnV0ZXM/LmZyaWVuZGx5X25hbWU7XG4gICAgICAgIGlmIChmcmllbmRseU5hbWUpIHtcbiAgICAgICAgICBtYXRjaCA9IHJlc3VsdC5maW5kKHMgPT4gcy5uYW1lID09PSBmcmllbmRseU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiW3NjaGVkdWxlLXVpXSBsb2FkU2NoZWR1bGUgLSBlbnRpdHk6XCIsIGVudGl0eUlkLCBcInN0b3JhZ2VJZDpcIiwgc3RvcmFnZUlkLCBcIm1hdGNoZWQ6XCIsIG1hdGNoID8gbWF0Y2guaWQgOiBcIk5PTkVcIik7XG4gICAgICBpZiAoIW1hdGNoICYmIHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltzY2hlZHVsZS11aV0g66ek7LmtIOyLpO2MqCEgYXZhaWxhYmxlIGlkczpcIiwgcmVzdWx0Lm1hcChzID0+IGAke3MuaWR9KCR7cy5uYW1lfSlgKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB0aGlzLl9zY2hlZHVsZURhdGEgPSBtYXRjaDtcbiAgICAgICAgdGhpcy5faHlkcmF0ZUZyb21TY2hlZHVsZShtYXRjaCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltzY2hlZHVsZS11aV0gRmFpbGVkIHRvIGxvYWQgc2NoZWR1bGVzXCIsIGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIOuRkCDruJTroZ3snbQg6rK57LmY64qU7KeAICh0b3VjaGluZ+ydgCDqsrnsuajsnLzroZwg6rCE7KO87ZWY7KeAIOyViuydjCDigJQgMTc6MDAg64GdIC8gMTc6MDAg7Iuc7J6R7J2AIE9LKVxuICBfYmxvY2tzT3ZlcmxhcChhLCBiKSB7XG4gICAgcmV0dXJuIGEuZnJvbSA8IGIudG8gJiYgYi5mcm9tIDwgYS50bztcbiAgfVxuXG4gIC8vIOygleugrOuQnCDruJTroZ3rk6Tsl5DshJwg6rK57LmY64qUL+unnuuLv+ydgCDqtazqsITrk6TsnYQg7ZWY64KY66GcIOuzke2VqS4gSEEgc2NoZWR1bGUgQVBJ64qUXG4gIC8vIOqwmeydgCDsmpTsnbzsl5Ag6rK57LmY64qUIOu4lOuhneydhCDqsbDrtoDtlZjrr4DroZwgaHlkcmF0ZSDri6jqs4Tsl5DshJwgbm9ybWFsaXpl7ZWc64ukLlxuICBfbWVyZ2VJbnRlcnZhbHMoYmxvY2tzKSB7XG4gICAgY29uc3Qgc29ydGVkID0gWy4uLmJsb2Nrc10uc29ydCgoYSwgYikgPT4gYS5mcm9tLmxvY2FsZUNvbXBhcmUoYi5mcm9tKSk7XG4gICAgY29uc3QgbWVyZ2VkID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIHNvcnRlZCkge1xuICAgICAgaWYgKG1lcmdlZC5sZW5ndGggPT09IDApIHsgbWVyZ2VkLnB1c2goeyAuLi5iIH0pOyBjb250aW51ZTsgfVxuICAgICAgY29uc3QgbGFzdCA9IG1lcmdlZFttZXJnZWQubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoYi5mcm9tIDw9IGxhc3QudG8pIHtcbiAgICAgICAgLy8g6rK57LmoIOuYkOuKlCDsnbjsoJEg4oaSIO2Gte2VqVxuICAgICAgICBpZiAoYi50byA+IGxhc3QudG8pIGxhc3QudG8gPSBiLnRvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkLnB1c2goeyAuLi5iIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9XG5cbiAgLy8gc2NoZWR1bGUgQVBJIOydkeuLteydhCDsubTrk5wg64K067aAIOuqqOuNuChfYmxvY2tzICsgX2FjdGl2ZURheXMp66GcIO2SgOyWtOuCuOuLpC5cbiAgLy8g6riw7KG0IOyCrOyaqeyekCDrjbDsnbTthLDqsIAg7JqU7J2867OE66GcIOuLrOuekOuLpOuptCDtlansp5Htlakg7ZuEIOyLnOqwhCDqsrnsuajsnYAg7J6Q64+ZIOuzke2Vqe2VnOuLpC5cbiAgX2h5ZHJhdGVGcm9tU2NoZWR1bGUobWF0Y2gpIHtcbiAgICBjb25zdCByYXdVbmlvbiA9IFtdO1xuICAgIGNvbnN0IGFjdGl2ZVNldCA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFdFRUtEQVlTLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXlCbG9ja3MgPSBtYXRjaFtXRUVLREFZU1tpXV0gfHwgW107XG4gICAgICBpZiAoZGF5QmxvY2tzLmxlbmd0aCA+IDApIGFjdGl2ZVNldC5hZGQoaSk7XG4gICAgICBmb3IgKGNvbnN0IGIgb2YgZGF5QmxvY2tzKSB7XG4gICAgICAgIHJhd1VuaW9uLnB1c2goeyBmcm9tOiBiLmZyb20sIHRvOiBiLnRvIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBtZXJnZWQgPSB0aGlzLl9tZXJnZUludGVydmFscyhyYXdVbmlvbik7XG4gICAgdGhpcy5fYmxvY2tzID0gbWVyZ2VkO1xuXG4gICAgaWYgKGFjdGl2ZVNldC5zaXplID09PSAwKSB7XG4gICAgICBjb25zdCB0b2RheUlkeCA9IG5ldyBEYXRlKCkuZ2V0RGF5KCkgPT09IDAgPyA2IDogbmV3IERhdGUoKS5nZXREYXkoKSAtIDE7XG4gICAgICB0aGlzLl9hY3RpdmVEYXlzID0gW3RvZGF5SWR4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWN0aXZlRGF5cyA9IFsuLi5hY3RpdmVTZXRdLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9XG5cbiAgICAvLyBoeWRyYXRlIOuLqOqzhOyXkOyEnCBub3JtYWxpemXqsIAg67Cc7IOd7ZaI64uk64qUIOyLoO2YuDog7ISc67KE7J2YIHJhdyDruJTroZ0g7ZWp7IKwIOyImOyZgCBtZXJnZWQg7IiY6rCAIOuLpOultOuptCDsgqzsmqnsnpDsl5Dqsowg7JWM66aw64ukLlxuICAgIC8vIChyYXdVbmlvbuydmCB1bmlxdWUg6rCc7IiY6rCAIG1lcmdlZOuztOuLpCDrp47snLzrqbQg6rK57Lmo7J20IOyeiOyXiOuLpOuKlCDrnLsuKVxuICAgIGNvbnN0IHVuaXF1ZVJhdyA9IG5ldyBTZXQocmF3VW5pb24ubWFwKGIgPT4gYCR7Yi5mcm9tfX4ke2IudG99YCkpLnNpemU7XG4gICAgaWYgKHVuaXF1ZVJhdyA+IG1lcmdlZC5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIltzY2hlZHVsZS11aV0gaHlkcmF0ZTogbWVyZ2VkIG92ZXJsYXBwaW5nIGJsb2Nrc1wiLCB7IHJhd1VuaXF1ZTogdW5pcXVlUmF3LCBtZXJnZWQ6IG1lcmdlZC5sZW5ndGggfSk7XG4gICAgICAvLyDri6TsnYwgdXBkYXRlIOyLnOygkOyXkCDsnpDrj5nsnLzroZwg7KCV66as65CcIOuNsOydtO2EsOqwgCDshJzrsoTsl5Ag67CY7JiB65Cc64ukLlxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF91cGRhdGVTY2hlZHVsZSgpIHtcbiAgICBpZiAoIXRoaXMuX2hhc3MgfHwgIXRoaXMuX3NjaGVkdWxlRGF0YSkgcmV0dXJuO1xuICAgIHRoaXMuX2lzRWRpdGluZyA9IHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2NoZWR1bGVJZCA9IHRoaXMuX3NjaGVkdWxlRGF0YS5pZDtcbiAgICAgIGNvbnN0IHVwZGF0ZVBheWxvYWQgPSB7IG5hbWU6IHRoaXMuX3NjaGVkdWxlRGF0YS5uYW1lIH07XG4gICAgICBpZiAodGhpcy5fc2NoZWR1bGVEYXRhLmljb24pIHVwZGF0ZVBheWxvYWQuaWNvbiA9IHRoaXMuX3NjaGVkdWxlRGF0YS5pY29uO1xuXG4gICAgICAvLyB2MS40OiDtmZzshLEg7JqU7J287JeQ64qUIHVuaWZpZWQgYmxvY2tz66W8LCDruYTtmZzshLHsl5DripQg67mIIOuwsOyXtOydhCDssYTsmrTri6QuXG4gICAgICBjb25zdCBzb3J0ZWRCbG9ja3MgPSBbLi4udGhpcy5fYmxvY2tzXS5zb3J0KChhLCBiKSA9PiBhLmZyb20ubG9jYWxlQ29tcGFyZShiLmZyb20pKTtcbiAgICAgIGNvbnN0IGFjdGl2ZVNldCA9IG5ldyBTZXQodGhpcy5fYWN0aXZlRGF5cyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFdFRUtEQVlTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHVwZGF0ZVBheWxvYWRbV0VFS0RBWVNbaV1dID0gYWN0aXZlU2V0LmhhcyhpKSA/IHNvcnRlZEJsb2NrcyA6IFtdO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcIltzY2hlZHVsZS11aV0gdXBkYXRlU2NoZWR1bGUgLSBzY2hlZHVsZV9pZDpcIiwgc2NoZWR1bGVJZCxcbiAgICAgICAgXCJhY3RpdmVEYXlzOlwiLCB0aGlzLl9hY3RpdmVEYXlzLCBcImJsb2NrczpcIiwgc29ydGVkQmxvY2tzKTtcblxuICAgICAgYXdhaXQgdGhpcy5faGFzcy5jYWxsV1Moe1xuICAgICAgICB0eXBlOiBcInNjaGVkdWxlL3VwZGF0ZVwiLFxuICAgICAgICBzY2hlZHVsZV9pZDogc2NoZWR1bGVJZCxcbiAgICAgICAgLi4udXBkYXRlUGF5bG9hZCxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy5fbG9hZFNjaGVkdWxlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltzY2hlZHVsZS11aV0gdXBkYXRlU2NoZWR1bGUgRkFJTEVEOlwiLCBlKTtcbiAgICAgIC8vIHNjaGVkdWxlL3VwZGF0ZSByZXF1aXJlcyB3cml0ZSBhY2Nlc3MgdG8gdGhlIHNjaGVkdWxlIGhlbHBlciwgd2hpY2hcbiAgICAgIC8vIHNoaXBzIGFzIGFkbWluLW9ubHkgYnkgZGVmYXVsdCBpbiBIQS4gU3VyZmFjZSBhIHRyYW5zbGF0ZWQsIGZyaWVuZGx5XG4gICAgICAvLyBtZXNzYWdlIGluc3RlYWQgb2YgZHVtcGluZyB0aGUgcmF3IDQwMSAvIFwidW5hdXRob3JpemVkXCIgc3RyaW5nLlxuICAgICAgY29uc3QgY29kZSA9IGU/LmNvZGUgfHwgZT8uZXJyb3I/LmNvZGU7XG4gICAgICBjb25zdCBtc2cgPSBTdHJpbmcoZT8ubWVzc2FnZSB8fCBlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBpc0F1dGggPSBjb2RlID09PSBcInVuYXV0aG9yaXplZFwiIHx8IG1zZy5pbmNsdWRlcyhcInVuYXV0aG9yaXplZFwiKSB8fCBtc2cuaW5jbHVkZXMoXCJub3QgYWxsb3dlZFwiKTtcbiAgICAgIHRoaXMuX3Nob3dUb2FzdChpc0F1dGggPyB0aGlzLl90KFwidW5hdXRob3JpemVkXCIpIDogYCR7dGhpcy5fdChcInNhdmVGYWlsZWRcIil9ICR7ZT8ubWVzc2FnZSB8fCBlfWApO1xuICAgICAgYXdhaXQgdGhpcy5fbG9hZFNjaGVkdWxlKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2lzRWRpdGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG5cblxuICBfZGVsZXRlQmxvY2soYmxvY2tJZHgpIHtcbiAgICBpZiAodGhpcy5faXNFZGl0aW5nIHx8ICF0aGlzLl9zY2hlZHVsZURhdGEgfHwgIXRoaXMuX2NvbmZpZz8uZW50aXR5KSByZXR1cm47XG4gICAgaWYgKGJsb2NrSWR4IDwgMCB8fCBibG9ja0lkeCA+PSB0aGlzLl9ibG9ja3MubGVuZ3RoKSByZXR1cm47XG4gICAgdGhpcy5fb3BlbkNvbmZpcm0odGhpcy5fdChcImNvbmZpcm1EZWxldGVCbG9ja1wiKSwgYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5fY2xvc2VDb25maXJtKCk7XG4gICAgICB0aGlzLl9ibG9ja3MgPSB0aGlzLl9ibG9ja3MuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBibG9ja0lkeCk7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJsb2NrSWR4ID0gbnVsbDtcbiAgICAgIGF3YWl0IHRoaXMuX3VwZGF0ZVNjaGVkdWxlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyDtlL3shYAgWSDihpIg67aEKDE167aEIOyKpOuDhSlcbiAgX3lUb01pbnV0ZXMoYmFyRWwsIGNsaWVudFkpIHtcbiAgICBjb25zdCByZWN0ID0gYmFyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoY2xpZW50WSAtIHJlY3QudG9wKSAvIHJlY3QuaGVpZ2h0KSk7XG4gICAgY29uc3QgU05BUCA9IDE1O1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChyYXRpbyAqIDE0NDApIC8gU05BUCkgKiBTTkFQO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxNDQwLCBtaW51dGVzKSk7XG4gIH1cblxuICAvLyDrtoQg4oaSIFwiSEg6TU06MDBcIlxuICBfbWludXRlc1RvVGltZVN0cihtaW4pIHtcbiAgICBjb25zdCBzYWZlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTQzOSwgbWluKSk7XG4gICAgY29uc3QgaCA9IE1hdGguZmxvb3Ioc2FmZSAvIDYwKTtcbiAgICBjb25zdCBtID0gc2FmZSAlIDYwO1xuICAgIHJldHVybiBgJHtTdHJpbmcoaCkucGFkU3RhcnQoMiwgJzAnKX06JHtTdHJpbmcobSkucGFkU3RhcnQoMiwgJzAnKX06MDBgO1xuICB9XG5cbiAgLy8g67mIIOyYgeyXrSDtgbTrpq0g7ZWcIOuyiOycvOuhnCDquLDrs7ggNjDrtoQg67iU66GdIOyDneyEsS4g66qo67CU7J287JeQ7IScIOuTnOuemOq3uC3sg53shLHsnbRcbiAgLy8g7Y6Y7J207KeAIOyKpO2BrOuhpOqzvCDstqnrj4ztlbQg64u164u17ZWY64uk64qUIO2UvOuTnOuwseycvOuhnCDri6jsiJwg7YOtIOuwqeyLneycvOuhnCDsoITtmZguXG4gIC8vIOunjOuToCDruJTroZ3snYAg7J6Q64+ZIOyEoO2DneuQmOyWtCDsponsi5wg7ZW465Ok66GcIOq4uOydtCDsobDsoJUg6rCA64qlLlxuICBhc3luYyBfb25Db2x1bW5DbGljayhlKSB7XG4gICAgaWYgKHRoaXMuX2lzRWRpdGluZykgcmV0dXJuO1xuICAgIC8vIOu4lOuhnS/tlbjrk6Qv7IKt7KCcIOuyhO2KvC/si5zqsIQgcGlsbCDsnITsl5DshJwg67Cc7IOd7ZWcIGNsaWNrIOydgCDrrLTsi5wuXG4gICAgLy8gKOu4lOuhncK37IKt7KCc64qUIOyekOyytCBzdG9wUHJvcGFnYXRpb24sIO2VuOuTpOydgCBjbGljayDrsJzsg50g6rCA64ql7ISxIOywqOuLqOyaqSlcbiAgICBjb25zdCBwYXRoID0gZS5jb21wb3NlZFBhdGggPyBlLmNvbXBvc2VkUGF0aCgpIDogW2UudGFyZ2V0XTtcbiAgICBjb25zdCBvbkJsb2NrUGFydCA9IHBhdGguc29tZShlbCA9PiB7XG4gICAgICBjb25zdCBjbHMgPSBlbD8uY2xhc3NMaXN0O1xuICAgICAgaWYgKCFjbHMpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBjbHMuY29udGFpbnMoJ2VkaXRvci1ibG9jaycpXG4gICAgICAgIHx8IGNscy5jb250YWlucygnYmxvY2staGFuZGxlJylcbiAgICAgICAgfHwgY2xzLmNvbnRhaW5zKCdibG9jay1kZWxldGUnKVxuICAgICAgICB8fCBjbHMuY29udGFpbnMoJ2Jsb2NrLXRpbWUtcGlsbCcpO1xuICAgIH0pO1xuICAgIGlmIChvbkJsb2NrUGFydCkgcmV0dXJuO1xuXG4gICAgY29uc3QgY29sdW1uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IHRhcE1pbiA9IHRoaXMuX3lUb01pbnV0ZXMoY29sdW1uLCBlLmNsaWVudFkpO1xuXG4gICAgLy8g7YOtIOyngOygkOydhCDsi5zsnpHsnLzroZwgNjDrtoQo7JeG7Jy866m0IOuLpOydjCDruJTroZ0g7KeB7KCE6rmM7KeAKSDruJTroZ0uIDI0OjAwIOy0iOqzvCDrsKnsp4AuXG4gICAgY29uc3QgREVGQVVMVF9MRU4gPSA2MDtcbiAgICBjb25zdCBzb3J0ZWQgPSBbLi4udGhpcy5fYmxvY2tzXS5zb3J0KChhLCBiKSA9PiBhLmZyb20ubG9jYWxlQ29tcGFyZShiLmZyb20pKTtcbiAgICBjb25zdCBwcmV2RW5kID0gc29ydGVkXG4gICAgICAubWFwKGIgPT4gdGhpcy5fdGltZVRvTWludXRlcyhiLnRvKSlcbiAgICAgIC5maWx0ZXIodCA9PiB0IDw9IHRhcE1pbilcbiAgICAgIC5yZWR1Y2UoKG0sIHQpID0+IE1hdGgubWF4KG0sIHQpLCAwKTtcbiAgICBjb25zdCBuZXh0U3RhcnQgPSBzb3J0ZWRcbiAgICAgIC5tYXAoYiA9PiB0aGlzLl90aW1lVG9NaW51dGVzKGIuZnJvbSkpXG4gICAgICAuZmlsdGVyKHQgPT4gdCA+IHRhcE1pbilcbiAgICAgIC5yZWR1Y2UoKG0sIHQpID0+IE1hdGgubWluKG0sIHQpLCAxNDQwKTtcblxuICAgIC8vIO2DreydtCDquLDsobQg67iU66GdIOychOudvOuptCDrrLTsi5wo7JyE7JeQ7IScIOqxuOufrOyngOyngOunjCDrsKnslrTsoIHsnLzroZwpXG4gICAgaWYgKHRhcE1pbiA8IHByZXZFbmQpIHJldHVybjtcbiAgICBjb25zdCBzdGFydCA9IE1hdGgubWF4KHByZXZFbmQsIHRhcE1pbik7XG4gICAgY29uc3QgZW5kID0gTWF0aC5taW4obmV4dFN0YXJ0LCBzdGFydCArIERFRkFVTFRfTEVOKTtcbiAgICBpZiAoZW5kIC0gc3RhcnQgPCAxNSkge1xuICAgICAgdGhpcy5fc2hvd1RvYXN0KHRoaXMuX3QoXCJibG9ja092ZXJsYXBcIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0Jsb2NrID0ge1xuICAgICAgZnJvbTogdGhpcy5fbWludXRlc1RvVGltZVN0cihzdGFydCksXG4gICAgICB0bzogdGhpcy5fbWludXRlc1RvVGltZVN0cihlbmQpLFxuICAgIH07XG4gICAgY29uc3QgbmV4dEJsb2NrcyA9IFsuLi50aGlzLl9ibG9ja3MsIG5ld0Jsb2NrXVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZnJvbS5sb2NhbGVDb21wYXJlKGIuZnJvbSkpO1xuICAgIHRoaXMuX2Jsb2NrcyA9IG5leHRCbG9ja3M7XG4gICAgLy8g7ZW465Ok7J20IOuwlOuhnCDrs7TsnbTrj4TroZ0g7IOIIOu4lOuhneydhCDshKDtg50g7IOB7YOc66GcXG4gICAgdGhpcy5fc2VsZWN0ZWRCbG9ja0lkeCA9IG5leHRCbG9ja3MuZmluZEluZGV4KGIgPT4gYi5mcm9tID09PSBuZXdCbG9jay5mcm9tKTtcbiAgICBhd2FpdCB0aGlzLl91cGRhdGVTY2hlZHVsZSgpO1xuICB9XG5cbiAgLy8g67iU66GdIOyEoO2DnS/tlbTsoJwgKOyEoO2DnSDsi5wg7ZW465OkICsg7IKt7KCcIOuyhO2KvCDrhbjstpwpXG4gIF9zZWxlY3RCbG9jayhlLCBibG9ja0lkeCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5fc2VsZWN0ZWRCbG9ja0lkeCA9IHRoaXMuX3NlbGVjdGVkQmxvY2tJZHggPT09IGJsb2NrSWR4ID8gbnVsbCA6IGJsb2NrSWR4O1xuICB9XG5cbiAgX29uU2VsZWN0ZWREZWxldGVDbGljayhlLCBibG9ja0lkeCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5fZGVsZXRlQmxvY2soYmxvY2tJZHgpO1xuICB9XG5cbiAgLy8g67iU66GdIOumrOyCrOydtOymiCAo7IOB64uoL+2VmOuLqCDtlbjrk6QpXG4gIF9vbkhhbmRsZVBvaW50ZXJEb3duKGUsIGJsb2NrSWR4LCBlZGdlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5faXNFZGl0aW5nKSByZXR1cm47XG4gICAgdHJ5IHsgZS5jdXJyZW50VGFyZ2V0LnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTsgfSBjYXRjaCAoXykgeyAvKiBub29wICovIH1cbiAgICB0aGlzLl9yZXNpemluZ0Jsb2NrSWR4ID0gYmxvY2tJZHg7XG4gICAgdGhpcy5fcmVzaXppbmdFZGdlID0gZWRnZTtcbiAgfVxuXG4gIF9vbkhhbmRsZVBvaW50ZXJNb3ZlKGUsIGJsb2NrSWR4LCBlZGdlKSB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6aW5nQmxvY2tJZHggIT09IGJsb2NrSWR4IHx8IHRoaXMuX3Jlc2l6aW5nRWRnZSAhPT0gZWRnZSkgcmV0dXJuO1xuICAgIGNvbnN0IGNvbHVtbiA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCcuZWRpdG9yLWNvbHVtbicpO1xuICAgIGlmICghY29sdW1uKSByZXR1cm47XG4gICAgY29uc3QgYmxvY2sgPSB0aGlzLl9ibG9ja3NbYmxvY2tJZHhdO1xuICAgIGlmICghYmxvY2spIHJldHVybjtcblxuICAgIGNvbnN0IG1pbiA9IHRoaXMuX3lUb01pbnV0ZXMoY29sdW1uLCBlLmNsaWVudFkpO1xuICAgIGNvbnN0IGZyb21NaW4gPSB0aGlzLl90aW1lVG9NaW51dGVzKGJsb2NrLmZyb20pO1xuICAgIGNvbnN0IHRvTWluID0gdGhpcy5fdGltZVRvTWludXRlcyhibG9jay50byk7XG4gICAgY29uc3Qgb3RoZXJCbG9ja3MgPSB0aGlzLl9ibG9ja3MuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBibG9ja0lkeCk7XG4gICAgbGV0IG5ld0Zyb20gPSBmcm9tTWluO1xuICAgIGxldCBuZXdUbyA9IHRvTWluO1xuXG4gICAgaWYgKGVkZ2UgPT09ICd0b3AnKSB7XG4gICAgICBjb25zdCBwcmV2RW5kID0gb3RoZXJCbG9ja3NcbiAgICAgICAgLm1hcChiID0+IHRoaXMuX3RpbWVUb01pbnV0ZXMoYi50bykpXG4gICAgICAgIC5maWx0ZXIodCA9PiB0IDw9IHRvTWluKVxuICAgICAgICAucmVkdWNlKChtYXgsIHQpID0+IE1hdGgubWF4KG1heCwgdCksIDApO1xuICAgICAgbmV3RnJvbSA9IE1hdGgubWF4KHByZXZFbmQsIE1hdGgubWluKG1pbiwgdG9NaW4gLSAxNSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXh0U3RhcnQgPSBvdGhlckJsb2Nrc1xuICAgICAgICAubWFwKGIgPT4gdGhpcy5fdGltZVRvTWludXRlcyhiLmZyb20pKVxuICAgICAgICAuZmlsdGVyKHQgPT4gdCA+PSBmcm9tTWluKVxuICAgICAgICAucmVkdWNlKChtMiwgdCkgPT4gTWF0aC5taW4obTIsIHQpLCAxNDQwKTtcbiAgICAgIG5ld1RvID0gTWF0aC5taW4obmV4dFN0YXJ0LCBNYXRoLm1heChtaW4sIGZyb21NaW4gKyAxNSkpO1xuICAgIH1cblxuICAgIGlmIChuZXdGcm9tID09PSBmcm9tTWluICYmIG5ld1RvID09PSB0b01pbikgcmV0dXJuO1xuICAgIHRoaXMuX2Jsb2NrcyA9IHRoaXMuX2Jsb2Nrcy5tYXAoKGIsIGkpID0+IGkgPT09IGJsb2NrSWR4XG4gICAgICA/IHsgZnJvbTogdGhpcy5fbWludXRlc1RvVGltZVN0cihuZXdGcm9tKSwgdG86IHRoaXMuX21pbnV0ZXNUb1RpbWVTdHIobmV3VG8pIH1cbiAgICAgIDogYik7XG4gIH1cblxuICBhc3luYyBfb25IYW5kbGVQb2ludGVyVXAoZSwgYmxvY2tJZHgsIGVkZ2UpIHtcbiAgICBpZiAodGhpcy5fcmVzaXppbmdCbG9ja0lkeCAhPT0gYmxvY2tJZHggfHwgdGhpcy5fcmVzaXppbmdFZGdlICE9PSBlZGdlKSByZXR1cm47XG4gICAgdHJ5IHsgZS5jdXJyZW50VGFyZ2V0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7IH0gY2F0Y2ggKF8pIHsgLyogbm9vcCAqLyB9XG4gICAgdGhpcy5fcmVzaXppbmdCbG9ja0lkeCA9IG51bGw7XG4gICAgdGhpcy5fcmVzaXppbmdFZGdlID0gbnVsbDtcbiAgICBhd2FpdCB0aGlzLl91cGRhdGVTY2hlZHVsZSgpO1xuICB9XG5cbiAgLy8gdW5pZmllZCBibG9ja3Mg7JWI7JeQ7IScIOqyuey5qCDqsoDsgqwgKOu4lOuhnSDsnbjrjbHsiqQg7KCc7Jm4IOqwgOuKpSlcbiAgX292ZXJsYXBzRXhpc3Rpbmcoc3RhcnRNaW4sIGVuZE1pbiwgZXhjbHVkZUlkeCA9IC0xKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5zb21lKChiLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gZXhjbHVkZUlkeCkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgYlN0YXJ0ID0gdGhpcy5fdGltZVRvTWludXRlcyhiLmZyb20pO1xuICAgICAgY29uc3QgYkVuZCA9IHRoaXMuX3RpbWVUb01pbnV0ZXMoYi50byk7XG4gICAgICByZXR1cm4gc3RhcnRNaW4gPCBiRW5kICYmIGVuZE1pbiA+IGJTdGFydDtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGRheS1zd2l0Y2hlciDthqDquIAgKG11bHRpLXNlbGVjdCkuIOy1nOyGjCAx6rCcIOuztOyepS5cbiAgLy8g7KaJ7IucIOuwmOyYgSDtm4QgZGVib3VuY2VkIHNhdmUg4oCUIOyCrOyaqeyekOqwgCDsl6zrn6wg7JqU7J287J2EIOyXsOyGje2VtOyEnCDthqDquIDtlbTrj4RcbiAgLy8g7J6g6riIL+yZleuztSDsl4bsnbQg7ZWcIOuyiOyXkCDrrLbslrTshJwg7KCA7J6l65Cc64ukLlxuICBfdG9nZ2xlQWN0aXZlRGF5KGlkeCkge1xuICAgIGNvbnN0IGhhcyA9IHRoaXMuX2FjdGl2ZURheXMuaW5jbHVkZXMoaWR4KTtcbiAgICBjb25zdCBuZXh0ID0gaGFzXG4gICAgICA/IHRoaXMuX2FjdGl2ZURheXMuZmlsdGVyKGQgPT4gZCAhPT0gaWR4KVxuICAgICAgOiBbLi4udGhpcy5fYWN0aXZlRGF5cywgaWR4XS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgaWYgKG5leHQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9zaG93VG9hc3QodGhpcy5fdChcImF0TGVhc3RPbmVEYXlcIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9hY3RpdmVEYXlzID0gbmV4dDtcbiAgICB0aGlzLl9zY2hlZHVsZVNhdmVEZWJvdW5jZWQoKTtcbiAgfVxuXG4gIF9mb3JtYXRUaW1lKHRpbWVTdHIpIHtcbiAgICBpZiAoIXRpbWVTdHIpIHJldHVybiBcIlwiO1xuICAgIGxldCBbaG91cnMsIG1pbnV0ZXNdID0gdGltZVN0ci5zcGxpdChcIjpcIik7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0SG91cnMocGFyc2VJbnQoaG91cnMpKTtcbiAgICBkYXRlLnNldE1pbnV0ZXMocGFyc2VJbnQobWludXRlcykpO1xuICAgIFxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLl9sYW5nLCB7XG4gICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgIGhvdXIxMjogdHJ1ZVxuICAgIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIC8vIFwiSEg6TU06U1NcIiDtmJXsi53snZgg7Iuc6rCEIOusuOyekOyXtOydhCDtlZjro6gg6riw7KSAIOu2hChtaW51dGVzKeycvOuhnCDrs4DtmZhcbiAgX3RpbWVUb01pbnV0ZXModGltZVN0cikge1xuICAgIGlmICghdGltZVN0cikgcmV0dXJuIDA7XG4gICAgY29uc3QgcGFydHMgPSB0aW1lU3RyLnNwbGl0KFwiOlwiKTtcbiAgICByZXR1cm4gcGFyc2VJbnQocGFydHNbMF0pICogNjAgKyBwYXJzZUludChwYXJ0c1sxXSk7XG4gIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSByZXR1cm4gaHRtbGA8aGEtY2FyZD48ZGl2IGNsYXNzPVwiZXJyb3JcIj4ke3RoaXMuX3QoXCJub3RDb25maWd1cmVkXCIpfTwvZGl2PjwvaGEtY2FyZD5gO1xuXG4gICAgLy8g7Lm065OcIO2UvOy7pCDtlITrpqzrt7Ag65iQ64qUIGhhc3Mg66+466Gc65OcIOyLnDog6rCE64uo7ZWcIO2UjOugiOydtOyKpO2ZgOuNlCDtkZzsi5xcbiAgICBpZiAoIXRoaXMuX2hhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHt0aGlzLl9jb25maWcudGl0bGUgfHwgdGhpcy5fdChcInNjaGVkdWxlTWFuYWdlclwiKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cIm1kaTpjYWxlbmRhci1jbG9ja1wiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eS1zdGF0ZVwiPlxuICAgICAgICAgICAgICA8aGEtaWNvbiBpY29uPVwibWRpOmNhbGVuZGFyLXBsdXNcIiBzdHlsZT1cIi0tbWRjLWljb24tc2l6ZTogNDhweDsgb3BhY2l0eTogMC40OyBtYXJnaW4tYm90dG9tOiAxMnB4O1wiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46IDA7IGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvciwgI2EwYTBhMCk7XCI+JHt0aGlzLl90KFwicGxhY2Vob2xkZXJcIil9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgLy8g7JeU7Yuw7YuwIOuvuOyEpOyglSDsi5wg7Lm065OcIO2UvOy7pCDrr7jrpqzrs7TquLDsmqkg642U66+4IOuNsOydtO2EsFxuICAgIGxldCBpc0R1bW15ID0gZmFsc2U7XG4gICAgbGV0IHRpdGxlTmFtZSA9IHRoaXMuX3NjaGVkdWxlRGF0YT8ubmFtZTtcbiAgICBsZXQgaWNvbiA9IHRoaXMuX3NjaGVkdWxlRGF0YT8uaWNvbjtcbiAgICBsZXQgZWZmZWN0aXZlQmxvY2tzID0gdGhpcy5fYmxvY2tzO1xuICAgIGxldCBlZmZlY3RpdmVBY3RpdmVEYXlzID0gdGhpcy5fYWN0aXZlRGF5cztcblxuICAgIGlmICghdGhpcy5fY29uZmlnLmVudGl0eSkge1xuICAgICAgaXNEdW1teSA9IHRydWU7XG4gICAgICB0aXRsZU5hbWUgPSB0aGlzLl90KFwic2NoZWR1bGVNYW5hZ2VyXCIpICsgdGhpcy5fdChcInByZXZpZXdTdWZmaXhcIik7XG4gICAgICBpY29uID0gXCJtZGk6Y2FsZW5kYXItc3RhclwiO1xuICAgICAgZWZmZWN0aXZlQmxvY2tzID0gW3sgZnJvbTogXCIwOTowMDowMFwiLCB0bzogXCIxODowMDowMFwiIH1dO1xuICAgICAgZWZmZWN0aXZlQWN0aXZlRGF5cyA9IFswLCAxLCAyLCAzLCA0XTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b21UaXRsZSA9IHRoaXMuX2NvbmZpZy50aXRsZSB8fCB0aXRsZU5hbWUgfHwgdGhpcy5fdChcInNjaGVkdWxlTWFuYWdlclwiKTtcblxuICAgIGNvbnN0IE1JTlVURVNfSU5fREFZID0gMTQ0MDtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5SWR4ID0gKG5vdy5nZXREYXkoKSArIDYpICUgNztcbiAgICBjb25zdCBzaG93Tm93ID0gZWZmZWN0aXZlQWN0aXZlRGF5cy5pbmNsdWRlcyh0b2RheUlkeCk7XG4gICAgY29uc3Qgbm93UG9zID0gKChub3cuZ2V0SG91cnMoKSAqIDYwICsgbm93LmdldE1pbnV0ZXMoKSkgLyBNSU5VVEVTX0lOX0RBWSkgKiAxMDA7XG4gICAgY29uc3Qgc29ydGVkQmxvY2tzID0gWy4uLmVmZmVjdGl2ZUJsb2Nrc10uc29ydCgoYSwgYikgPT4gYS5mcm9tLmxvY2FsZUNvbXBhcmUoYi5mcm9tKSk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYXJkIGNsYXNzPVwiJHtpc0R1bW15ID8gJ2lzLWR1bW15JyA6ICcnfVwiPlxuICAgICAgICAke2lzRHVtbXkgPyBodG1sYDxkaXYgY2xhc3M9XCJkdW1teS1iYWRnZVwiPiR7dGhpcy5fdChcInByZXZpZXdTdWZmaXhcIikudHJpbSgpfTwvZGl2PmAgOiAnJ31cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7Y3VzdG9tVGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cIiR7aWNvbiB8fCAnbWRpOmNhbGVuZGFyLWNsb2NrJ31cIj48L2hhLWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LWVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheS1lZGl0b3ItZ3JpZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91ci1sYWJlbHMtY29sXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgJHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAyNSB9LCAoXywgaCkgPT4gaHRtbGA8c3Bhbj4ke2h9PC9zcGFuPmApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvci1jb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgIHJvbGU9XCJhcHBsaWNhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiR7dGhpcy5fdChcInNjaGVkdWxlTWFuYWdlclwiKX1cIlxuICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX29uQ29sdW1uQ2xpY2t9PlxuICAgICAgICAgICAgICAgICR7QXJyYXkuZnJvbSh7IGxlbmd0aDogMjQgfSwgKF8sIGgpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91ci1ncmlkbGluZVwiIHN0eWxlPVwidG9wOiAkeyhoIC8gMjQpICogMTAwfSU7XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgYCl9XG4gICAgICAgICAgICAgICAgJHtzb3J0ZWRCbG9ja3MubWFwKChibG9jaywgYmxvY2tJZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0TWluID0gdGhpcy5fdGltZVRvTWludXRlcyhibG9jay5mcm9tKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZE1pbiA9IHRoaXMuX3RpbWVUb01pbnV0ZXMoYmxvY2sudG8pO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdG9wID0gKHN0YXJ0TWluIC8gTUlOVVRFU19JTl9EQVkpICogMTAwO1xuICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gKChlbmRNaW4gLSBzdGFydE1pbikgLyBNSU5VVEVTX0lOX0RBWSkgKiAxMDA7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWRCbG9ja0lkeCA9PT0gYmxvY2tJZHg7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXRvci1ibG9jayAke2lzU2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInRvcDogJHt0b3B9JTsgaGVpZ2h0OiAke01hdGgubWF4KGhlaWdodCwgMC41KX0lO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCIke3RoaXMuX2Zvcm1hdFRpbWUoYmxvY2suZnJvbSl9IH4gJHt0aGlzLl9mb3JtYXRUaW1lKGJsb2NrLnRvKX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIke3RoaXMuX2Zvcm1hdFRpbWUoYmxvY2suZnJvbSl9IOKAkyAke3RoaXMuX2Zvcm1hdFRpbWUoYmxvY2sudG8pfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7KGUpID0+IHRoaXMuX3NlbGVjdEJsb2NrKGUsIGJsb2NrSWR4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcG9pbnRlcmRvd249JHsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgICAgICAgICAgICAgJHtpc1NlbGVjdGVkID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2stdGltZS1waWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7YmxvY2suZnJvbS5zbGljZSgwLCA1KX1+JHtibG9jay50by5zbGljZSgwLCA1KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2staGFuZGxlIGhhbmRsZS10b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiR7dGhpcy5fdChcInN0YXJ0VGltZVwiKX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHBvaW50ZXJkb3duPSR7KGUpID0+IHRoaXMuX29uSGFuZGxlUG9pbnRlckRvd24oZSwgYmxvY2tJZHgsICd0b3AnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwb2ludGVybW92ZT0keyhlKSA9PiB0aGlzLl9vbkhhbmRsZVBvaW50ZXJNb3ZlKGUsIGJsb2NrSWR4LCAndG9wJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcG9pbnRlcnVwPSR7KGUpID0+IHRoaXMuX29uSGFuZGxlUG9pbnRlclVwKGUsIGJsb2NrSWR4LCAndG9wJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcG9pbnRlcmNhbmNlbD0keyhlKSA9PiB0aGlzLl9vbkhhbmRsZVBvaW50ZXJVcChlLCBibG9ja0lkeCwgJ3RvcCcpfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrLWhhbmRsZSBoYW5kbGUtYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIke3RoaXMuX3QoXCJlbmRUaW1lXCIpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcG9pbnRlcmRvd249JHsoZSkgPT4gdGhpcy5fb25IYW5kbGVQb2ludGVyRG93bihlLCBibG9ja0lkeCwgJ2JvdHRvbScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHBvaW50ZXJtb3ZlPSR7KGUpID0+IHRoaXMuX29uSGFuZGxlUG9pbnRlck1vdmUoZSwgYmxvY2tJZHgsICdib3R0b20nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwb2ludGVydXA9JHsoZSkgPT4gdGhpcy5fb25IYW5kbGVQb2ludGVyVXAoZSwgYmxvY2tJZHgsICdib3R0b20nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwb2ludGVyY2FuY2VsPSR7KGUpID0+IHRoaXMuX29uSGFuZGxlUG9pbnRlclVwKGUsIGJsb2NrSWR4LCAnYm90dG9tJyl9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2stZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiR7dGhpcy5fdChcImRlbGV0ZVwiKX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIiR7dGhpcy5fdChcImRlbGV0ZVwiKX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHsoZSkgPT4gdGhpcy5fb25TZWxlY3RlZERlbGV0ZUNsaWNrKGUsIGJsb2NrSWR4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPuKIkjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIGAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICR7c2hvd05vdyA/IGh0bWxgPGRpdiBjbGFzcz1cIm5vdy1saW5lXCIgc3R5bGU9XCJ0b3A6ICR7bm93UG9zfSU7XCI+PHNwYW4gY2xhc3M9XCJub3ctbGluZS1sYWJlbFwiPiR7dGhpcy5fbWludXRlc1RvVGltZVN0cihub3cuZ2V0SG91cnMoKSAqIDYwICsgbm93LmdldE1pbnV0ZXMoKSkuc2xpY2UoMCwgNSl9PC9zcGFuPjwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICAke3NvcnRlZEJsb2Nrcy5sZW5ndGggPT09IDAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWVtcHR5LWhpbnRcIj4ke3RoaXMuX3QoXCJlbXB0eVwiKX08L2Rpdj5cbiAgICAgICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5LXN3aXRjaGVyXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIiR7dGhpcy5fdChcImFjdGl2ZURheXNcIil9XCI+XG4gICAgICAgICAgICAke1dFRUtEQVlTLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGVmZmVjdGl2ZUFjdGl2ZURheXMuaW5jbHVkZXMoaSk7XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRheS1waWxsICR7aXNBY3RpdmUgPyAnc2VsZWN0ZWQnIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD1cIiR7aXNBY3RpdmV9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID9kaXNhYmxlZD0ke2lzRHVtbXl9XG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHsoKSA9PiB0aGlzLl90b2dnbGVBY3RpdmVEYXkoaSl9PlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLl90KFwiZGF5c1Nob3J0XCIpW2ldfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGl2ZS1kYXlzLWhlbHBcIj4ke3RoaXMuX3QoXCJhY3RpdmVEYXlzSGVscFwiKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgJHt0aGlzLl90b2FzdCA/IGh0bWxgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvYXN0XCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPiR7dGhpcy5fdG9hc3QubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgYCA6ICcnfVxuXG4gICAgICAgICR7dGhpcy5fY29uZmlybSA/IGh0bWxgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tb3ZlcmxheVwiIEBjbGljaz0ke3RoaXMuX2Nsb3NlQ29uZmlybX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlybS1jYXJkXCIgcm9sZT1cImFsZXJ0ZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBAY2xpY2s9JHsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maXJtLXRpdGxlXCI+JHt0aGlzLl90KFwiY29uZmlybURlbGV0ZVRpdGxlXCIpfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlybS1ib2R5XCI+JHt0aGlzLl9jb25maXJtLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maXJtLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImdob3N0LWJ0blwiIEBjbGljaz0ke3RoaXMuX2Nsb3NlQ29uZmlybX0+JHt0aGlzLl90KFwiY2FuY2VsXCIpfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGFuZ2VyLWJ0blwiIEBjbGljaz0ke3RoaXMuX2NvbmZpcm0ub25Db25maXJtfT4ke3RoaXMuX3QoXCJkZWxldGVcIil9PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAgOiAnJ31cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIC0tY3VzdG9tLXByaW1hcnk6IHZhcigtLXByaW1hcnktY29sb3IsICMwM2E5ZjQpO1xuICAgICAgLS1jdXN0b20tYmc6IHZhcigtLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSk7XG4gICAgICAtLWN1c3RvbS1ib3JkZXI6IHZhcigtLWRpdmlkZXItY29sb3IsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSk7XG4gICAgICAtLWN1c3RvbS10ZXh0OiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IsICNmZmZmZmYpO1xuICAgICAgLS1jdXN0b20tc2Vjb25kYXJ5OiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvciwgI2EwYTBhMCk7XG4gICAgICAtLWN1c3RvbS1kYW5nZXI6IHZhcigtLWVycm9yLWNvbG9yLCAjZjQ0MzM2KTtcbiAgICAgIC0tY3VzdG9tLWFjdGl2ZS1iZzogcmdiYSgzLCAxNjksIDI0NCwgMC4xNSk7XG4gICAgICAtLWN1c3RvbS1zdWNjZXNzOiAjNGNhZjUwO1xuICAgIH1cblxuICAgIGhhLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWJnKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhLWNhcmQtYm9yZGVyLXJhZGl1cywgMTJweCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jdXN0b20tYm9yZGVyKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1ib2R5MV8tX2ZvbnQtZmFtaWx5LCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWYpO1xuICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS10ZXh0KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4IDRweCAxNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhcmQtaGVhZGVyIC5uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICB9XG5cbiAgICAuaGVhZGVyLXJpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cblxuICAgIC5oZWFkZXItcmlnaHQgaGEtaWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLXByaW1hcnkpO1xuICAgICAgLS1tZGMtaWNvbi1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG5cbiAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4IDE0cHggMTZweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAvKiDilIDilIAg642w7J20IOyXkOuUlO2EsCAo64uo7J28IOy7rOufvCkg4pSA4pSAICovXG4gICAgLmRheS1lZGl0b3Ige1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgLyogc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IgaXMgSEEncyB0aGVtZS1hd2FyZSBcInN1YnRseSBkaWZmZXJlbnRcbiAgICAgICAgIGZyb20gdGhlIGNhcmRcIiB0b25lLiBPbiBkYXJrIHRoZW1lcyBpdCBkYXJrZW5zIHNsaWdodGx5LCBvbiBsaWdodFxuICAgICAgICAgdGhlbWVzIGl0IGxpZ2h0ZW5zIHNsaWdodGx5IOKAlCB3b3JrcyBib3RoIGRpcmVjdGlvbnMuIFRoZSBwcmV2aW91c1xuICAgICAgICAgcmdiYSgyNTUsMjU1LDI1NSwwLjAyKSBvbmx5IHJlZ2lzdGVyZWQgb24gZGFyayBiYWNrZ3JvdW5kcy4gKi9cbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCByZ2JhKDEyNywxMjcsMTI3LDAuMDYpKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBwYWRkaW5nOiA4cHggOHB4O1xuICAgIH1cblxuICAgIC5kYXktZWRpdG9yLWdyaWQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgLyogSEEgc2VjdGlvbnMg66CI7J207JWE7JuD7JeQ7IScIOq3uOumrOuTnCDsubgg7IiY6rCAIOuwlOuAlCDrlYwg7J6Q7Jew7Iqk65+96rKMIOuUsOudvOqwhOuLpC5cbiAgICAgICAgIG1pbi1oZWlnaHTripQgMTLqsJwg7ZaJ7J2EIOy1nOyGjO2VnCDsnb3snYQg7IiYIOyeiOuKlCDtgazquLAsIG1heC1oZWlnaHTripQg7YGwIO2ZlOuptOyXkOyEnFxuICAgICAgICAg6rO864+E7ZWY6rKMIOq4uOyWtOyngOyngCDslYrrj4TroZ0uIENTUyDrs4DsiJjroZwg64W47Lac7ZW0IOy5tOuTnCDsmLXshZjCt3VzZXIgc3R5bGXroZwg7KGw7KCIIOqwgOuKpS4gKi9cbiAgICAgIGhlaWdodDogdmFyKC0tc2NoZWR1bGUtY2FyZC10aW1lbGluZS1oZWlnaHQsIGNsYW1wKDQyMHB4LCA2MHZoLCA3MjBweCkpO1xuICAgIH1cblxuICAgIC5ob3VyLWxhYmVscy1jb2wge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgLmhvdXItbGFiZWxzLWNvbCBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1zZWNvbmRhcnkpO1xuICAgICAgLyogV2FzIG9wYWNpdHkgMC41NSDigJQgZmluZSBvbiBhIGRhcmsgY2FyZCB3aGVyZSBzZWNvbmRhcnktdGV4dC1jb2xvclxuICAgICAgICAgaXMgYWxyZWFkeSBuZWFyLXdoaXRlLCBidXQgb24gYSBsaWdodCB0aGVtZSB0aGUgc2Vjb25kYXJ5IHRleHQgaXNcbiAgICAgICAgIGFscmVhZHkgYSA2MCUgYmxhY2sgYW5kIDAuNTUgbWFkZSB0aGUgaG91ciBudW1iZXJzIHVucmVhZGFibGUuICovXG4gICAgICBvcGFjaXR5OiAwLjg1O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuXG4gICAgLmhvdXItbGFiZWxzLWNvbCBzcGFuOmZpcnN0LWNoaWxkIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgLmhvdXItbGFiZWxzLWNvbCBzcGFuOmxhc3QtY2hpbGQgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpOyB9XG5cbiAgICAuZWRpdG9yLWNvbHVtbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmbGV4OiAxO1xuICAgICAgLyogU2FtZSByZWFzb25pbmcgYXMgLmRheS1lZGl0b3Ig4oCUIHRoZW1lLWF3YXJlIG5ldXRyYWwgaW5zdGVhZCBvZlxuICAgICAgICAgZGFyay1vbmx5IHJnYmEoMjU1LDI1NSwyNTUsMC4wMikgLyAwLjA2LiAqL1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCByZ2JhKDEyNywxMjcsMTI3LDAuMDQpKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IsIHJnYmEoMTI3LDEyNywxMjcsMC4xOCkpO1xuICAgICAgLyogb3ZlcmZsb3c6IHZpc2libGUg4oCUIO2VuOuTpMK37IKt7KCcIOuyhO2KvMK3dGltZSBwaWxs7J2AIOydmOuPhOyggeycvOuhnCDruJTroZ0g66qo7ISc66asXG4gICAgICAgICDrsJTquaXsl5Ag6re466Ck7KeE64ukLiBoaWRkZW7snYQg7JOw66m0IOuqqOyEnOumrOyXkOyEnCDsnpjroKQg7IKs7Jqp7J6QIOuplOyLnOyngOyymOufvFxuICAgICAgICAgXCLrsYPsp4DqsIAg7ZSE66CI7J6E67O064ukIOyVhOuemOyXkCDroIzrjZTrp4FcIuuQmOuKlCDqsoPsspjrn7wg67O07J2464ukLiDruJTroZ0g7J6Q7LK064qUXG4gICAgICAgICBfeVRvTWludXRlcygp6rCAIDDigJMxNDQw7Jy866GcIO2BtOueqO2UhO2VmOuvgOuhnCDsu6zrn7wg67CW7Jy866GcIOuCmOqwiCDsnbwg7JeG7J2MLiAqL1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAvKiB2MS40LjU6IOuqqOuwlOydvOyXkOyEnCDtjpjsnbTsp4Ag7Iqk7YGs66Gk7J20IOy5tOuTnCDsnITsl5DshJwg66eJ7Z6I642YIOusuOygnCDtlbTqsrAuXG4gICAgICAgICB0b3VjaC1hY3Rpb246bm9uZSDsnYAg65Oc656Y6re4LeyDneyEseydhCDsnITtlbQg7ZWE7JqU7ZaI7KeA66eMIOydtOygnCDtg63snLzroZwg7IOd7ISx7ZWY66+A66GcXG4gICAgICAgICDsiqTtgazroaQg7KCc7Iqk7LKY66W8IOu4jOudvOyasOyggOyXkCDslpHrs7QuIO2VuOuTpOydgCDsnpDssrTsoIHsnLzroZwgdG91Y2gtYWN0aW9uOm5vbmUuICovXG4gICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cblxuICAgIC5ob3VyLWdyaWRsaW5lIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgLyogRGl2aWRlciBjb2xvciBmb2xsb3dzIEhBJ3MgdGhlbWUuIFRoZSBvbGQgd2hpdGUtd2l0aC1hbHBoYSBsaW5lXG4gICAgICAgICB3YXMgaW52aXNpYmxlIG9uIGxpZ2h0IHRoZW1lcy4gKi9cbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IsIHJnYmEoMTI3LDEyNywxMjcsMC4yMikpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgLyogLmVkaXRvci1ibG9jayAocmVuZGVyZWQgYXMgPGJ1dHRvbj4pIOKAlCBidXR0b24gcmVzZXQgZm9sZGVkIGludG8gdGhlXG4gICAgICAgbWFpbiBydWxlIHNvIGEgaGlnaGVyLXNwZWNpZmljaXR5IHNlbGVjdG9yIGNhbm5vdCBzdHJpcCB0aGUgYmFja2dyb3VuZC4gKi9cbiAgICAuZWRpdG9yLWJsb2NrIHtcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBmb250OiBpbmhlcml0O1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNHB4O1xuICAgICAgcmlnaHQ6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWN1c3RvbS1wcmltYXJ5KTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZSwgYmFja2dyb3VuZCAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2U7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC8qIG91dGxpbmXsnYAg7YKk67O065OcIO2PrOy7pOyKpCg6Zm9jdXMtdmlzaWJsZSnsl5DshJzrp4wg6re466aw64ukLlxuICAgICAgIOuniOyasOyKpC/thLDsuZjroZwg7Zmc7ISx7ZmU7ZWcIOqyveyasOyXkOuKlCBvdXRsaW5lIG5vbmXsnYQg7Jyg7KeA7ZW0IHN0aWNreSBmb2N1c+qwgFxuICAgICAgIOyLnOqwgeyggeycvOuhnCDrgqjsp4Ag7JWK64+E66GdIO2VnOuLpC4gKi9cbiAgICAuZWRpdG9yLWJsb2NrOmZvY3VzLXZpc2libGUge1xuICAgICAgb3V0bGluZTogMnB4IHNvbGlkICNmZmY7XG4gICAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgICAuZWRpdG9yLWJsb2NrOmhvdmVyOm5vdCgucGVuZGluZyk6bm90KC5zZWxlY3RlZCkge1xuICAgICAgICBvcGFjaXR5OiAwLjg1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5lZGl0b3ItYmxvY2suc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMywgNzEsIDE2MSwgMC42NSk7XG4gICAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWN1c3RvbS1wcmltYXJ5KTtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgei1pbmRleDogNDtcbiAgICB9XG5cbiAgICAvKiB0aW1lIHBpbGzsnYAg7ZWt7IOBIOu4lOuhnSAq7JWI7Kq9KiDsoozsuKEg7IOB64uo7JeQIOuWoCDsnojri6QuIOy5tOuTnOydmCBvdmVyZmxvdzpoaWRkZW5cbiAgICAgICDsl5Ag7J6Y66as7KeAIOyViuuPhOuhnSDsmbjrtoAodG9wOi0yOHB4KeyXkCDrnYTsmrDripQg64yA7IugIGluc2lkZS1mbG9hdGluZ+ycvOuhnFxuICAgICAgIOychOy5mOulvCDsnqHripTri6QuIOu4lOuhnSDrhpLsnbTqsIAgcGlsbOuztOuLpCDsnpHslYQg7IK07KedIOuEmOyzkOuPhCDsubTrk5wg7JWI7J2066+A66GcIOyemOumvCAwLiAqL1xuICAgIC5ibG9jay10aW1lLXBpbGwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA0cHg7XG4gICAgICBsZWZ0OiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgIHotaW5kZXg6IDEwMDtcbiAgICB9XG5cbiAgICAuYmxvY2staGFuZGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLXByaW1hcnkpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XG4gICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICBjdXJzb3I6IG5zLXJlc2l6ZTtcbiAgICAgIC8qIO2VuOuTpOydgCDri6Trpbgg7JqU7IaM67O064ukIO2VreyDgSDsnITsl5Ag4oCUIOyekeydgCDruJTroZ3sl5DshJwg7JWE656YIOu4lOuhneqzvCDqsrnss5Drj4Qg7J6h6riwIOyii+uPhOuhnSAqL1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIC8qIOyWkeyqvSDtlbjrk6Qg66qo65GQIOqwgOuhnCDspJHslZkg7KCV66CsICovXG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDdweCk7XG4gICAgfVxuXG4gICAgLmJsb2NrLWhhbmRsZTo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGluc2V0OiAtMTBweDsgLyogMjR4MjQgaGl0IHRhcmdldCAqL1xuICAgIH1cblxuICAgIC5ibG9jay1oYW5kbGUuaGFuZGxlLXRvcCAgICB7IHRvcDogLTdweDsgfVxuICAgIC5ibG9jay1oYW5kbGUuaGFuZGxlLWJvdHRvbSB7IGJvdHRvbTogLTdweDsgfVxuXG4gICAgLyog7IKt7KCcIOuyhO2KvOuPhCDruJTroZ0gKuyViOyqvSog7Jqw7LihIOyDgeuLqC4g7J207KCE7JeUIHRvcDotMTBweCByaWdodDotMTBweOuhnFxuICAgICAgIOu4lOuhnSDrqqjshJzrpqzsl5Ag6rG466CkIOyeiOyWtOyEnCBoYS1jYXJkIG92ZXJmbG93OmhpZGRlbuyXkCDsnpjroLjri6QuICovXG4gICAgLmJsb2NrLWRlbGV0ZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDRweDtcbiAgICAgIHJpZ2h0OiA0cHg7XG4gICAgICB3aWR0aDogMjJweDtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWN1c3RvbS1kYW5nZXIpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICAuYmxvY2stZGVsZXRlOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNiNzFjMWM7XG4gICAgfVxuXG4gICAgLmJsb2NrLWRlbGV0ZSBzcGFuIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICB9XG5cbiAgICAuZWRpdG9yLWJsb2NrLnBlbmRpbmcge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgzLCAxNjksIDI0NCwgMC43KSwgcmdiYSgzLCAxNjksIDI0NCwgMC40NSkpO1xuICAgICAgYm9yZGVyOiAxLjVweCBkYXNoZWQgI2ZmZmZmZjY2O1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG5cbiAgICAuZWRpdG9yLWJsb2NrLmRyYWdnaW5nIHtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgfVxuXG4gICAgLyog7Lap64+MIOyDge2DnDog7IOJ6rmU66eM7J20IOyVhOuLiOudvCDsgqzshKAg7Yyo7YS06rmM7KeAIOy2lOqwgO2VtCDsg4nrp7kg7IKs7Jqp7J6Q64+EIOq1rOu2hCDqsIDriqUuXG4gICAgICAgZ3JhZGllbnTripQg66y07KeAKHJlZCkgdGludCArIOyCrOyEoCBzdHJpcGUg6rK57LOQ7IScIO2RnO2YhC4gKi9cbiAgICAuZWRpdG9yLWJsb2NrLmNvbmZsaWN0IHtcbiAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgMTM1ZGVnLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCkgMCA2cHgsXG4gICAgICAgICAgdHJhbnNwYXJlbnQgNnB4IDEycHhcbiAgICAgICAgKSxcbiAgICAgICAgcmdiYSgyNTUsIDgyLCA4MiwgMC43NSk7XG4gICAgICBib3JkZXItY29sb3I6ICNmZjUyNTI7XG4gICAgfVxuXG4gICAgLnJlcGVhdC1waWxsLmNvbmZsaWN0IHtcbiAgICAgIG9wYWNpdHk6IDAuMzU7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgfVxuXG4gICAgLnJlcGVhdC1waWxsLmNvbmZsaWN0OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIC5ibG9jay10aW1lLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgLyog7ZiE7J6sIOyLnOqwgTog7KCQ7J20IOyVhOuLiOudvCDsu6zrn7wg7KCE7LK066W8IOqwgOuhnOyngOultOuKlCDshKAgKyDsoozsuKEg652867KoICovXG4gICAgLm5vdy1saW5lIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1jdXN0b20tZGFuZ2VyKTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgei1pbmRleDogNjtcbiAgICB9XG4gICAgLm5vdy1saW5lOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IC00cHg7XG4gICAgICB0b3A6IC01cHg7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jdXN0b20tZGFuZ2VyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLm5vdy1saW5lLWxhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiA0cHg7XG4gICAgICB0b3A6IC0xMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1kYW5nZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWJnKTtcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cblxuICAgIC50aW1lbGluZS1lbXB0eS1oaW50IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGluc2V0OiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20tc2Vjb25kYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLyog4pSA4pSAIOyalOydvCDsiqTsnITsspggKOu3sCDsoITtmZgpIOKUgOKUgCAqL1xuICAgIC5kYXktc3dpdGNoZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICB9XG5cbiAgICAvKiAuZGF5LXBpbGwgKHJlbmRlcmVkIGFzIDxidXR0b24+KSDigJQgYnV0dG9uIHJlc2V0IGlubGluZWQuICovXG4gICAgLmRheS1waWxsIHtcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBmb250OiBpbmhlcml0O1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDZweCAwO1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1zZWNvbmRhcnkpO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UsIGNvbG9yIDAuMTVzIGVhc2U7XG4gICAgfVxuXG4gICAgLyogaG92ZXIgZWZmZWN066eMIOynhOynnCDrp4jsmrDsiqQg7ZmY6rK97JeQ7IScIOyggeyaqS4g66qo67CU7J287J2AIHN0aWNreSBob3ZlcuuhnFxuICAgICAgIHNlbGVjdGVkIOyDge2DnOqwgCDtnZDrprAgaG92ZXIgYmFja2dyb3VuZCDsl5Ag6rCA66Ck7KeA642YIOusuOygnCjtirntnoggaU9TKeulvCDrsKnsp4AuICovXG4gICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAgIC5kYXktcGlsbDpob3Zlcjpub3QoOmRpc2FibGVkKTpub3QoLnNlbGVjdGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRheS1waWxsLnNlbGVjdGVkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IsICNmZmYpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLXByaW1hcnkpO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuZGF5LXBpbGw6Zm9jdXMtdmlzaWJsZSB7XG4gICAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY3VzdG9tLXByaW1hcnkpO1xuICAgICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgICB9XG5cbiAgICAuZGF5LXBpbGw6ZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG5cbiAgICAuYWN0aXZlLWRheXMtaGVscCB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLXNlY29uZGFyeSk7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgfVxuXG4gICAgLyog7J2465287J24IO2GoOyKpO2KuCAoYWxlcnQg64yA7LK0KSAqL1xuICAgIC50b2FzdCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBib3R0b206IDE2cHg7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMCwgMjAsIDAuOTIpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgIHotaW5kZXg6IDIwMDA7XG4gICAgICBhbmltYXRpb246IHRvYXN0SW4gMC4ycyBlYXNlO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHRvYXN0SW4ge1xuICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDhweCk7IH1cbiAgICAgIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTsgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTsgfVxuICAgICAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIH1cblxuICAgIC8qIOyduOudvOyduCBjb25maXJtIOuLpOydtOyWvOuhnOq3uCAoYnJvd3NlciBjb25maXJtIOuMgOyytCkgKi9cbiAgICAuY29uZmlybS1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGluc2V0OiAwO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHotaW5kZXg6IDE1MDA7XG4gICAgICBhbmltYXRpb246IGZhZGVJbiAwLjE1cyBlYXNlO1xuICAgIH1cblxuICAgIC5jb25maXJtLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCAjMmIyYjJiKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20tdGV4dCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY3VzdG9tLWJvcmRlcik7XG4gICAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XG4gICAgICB3aWR0aDogbWluKDkwJSwgMzIwcHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsMCwwLDAuNCk7XG4gICAgfVxuXG4gICAgLmNvbmZpcm0tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuY29uZmlybS1ib2R5IHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1zZWNvbmRhcnkpO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgLmNvbmZpcm0tYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgIC5kYW5nZXItYnRuIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWRhbmdlcik7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmRhbmdlci1idG46aG92ZXIgeyBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTsgfVxuXG4gICAgLyog4pSA4pSAIOuwmOuztSDshLnshZggKOyggOyepSDsoIQpIOKUgOKUgCAqL1xuICAgIC5lbXB0eS1zdGF0ZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLXNlY29uZGFyeSk7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG5cbiAgICAuZ2hvc3QtYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1zZWNvbmRhcnkpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY3VzdG9tLWJvcmRlcik7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAuZ2hvc3QtYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTsgfVxuXG4gICAgYnV0dG9uOmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuXG4gICAgLnByaW1hcnktYnRuIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvciwgI2ZmZik7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICBgO1xuXG4gIC8vIEhBIOy7pOyKpO2FgCDsubTrk5wg7Y647KeR6riwIOyduOyKpO2EtOyKpCDsl7Drj5lcbiAgc3RhdGljIGdldENvbmZpZ0VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoYS1jdXN0b20tc2NoZWR1bGUtY2FyZC1lZGl0b3JcIik7XG4gIH1cblxuICAvLyDsubTrk5wg7ZS87Luk7JeQ7IScIOyymOydjCDrsLDsuZjrkKAg65WM7J2YIOq4sOuzuOqwkiAodHlwZeydgCBIQeqwgCDsnpDrj5kg7LaU6rCA7ZWY66+A66GcIO2PrO2VqCDquIjsp4ApXG4gIHN0YXRpYyBnZXRTdHViQ29uZmlnKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8vIG1hc29ucnkg67ew66W8IOychO2VnCDquLDrs7gg7JiI7IOBIOy5tOuTnCDrhpLsnbQgKDHri6jsnIQgPSA1MHB4KVxuICBnZXRDYXJkU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnPy5lbnRpdHkgPyA1IDogNztcbiAgfVxuXG4gIC8vIHNlY3Rpb25zIOu3sOulvCDsnITtlZwg6re466as65OcIOyYteyFmCAo7IS466GcIOq4uOydtOulvCDrgrTsmqnsl5Ag66ee7LaU6riwIOychO2VtCByb3dz64qUIOyngOygle2VmOyngCDslYrsnYwpXG4gIGdldEdyaWRPcHRpb25zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiAxMixcbiAgICAgIG1pbl9yb3dzOiAzLFxuICAgIH07XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBWaXN1YWwgRWRpdG9yIOq1rO2YhCDsmIHsl61cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY3VzdG9tLXNjaGVkdWxlLWNhcmRcIiwgSGFDdXN0b21TY2hlZHVsZUNhcmQpO1xuXG53aW5kb3cuY3VzdG9tQ2FyZHMgPSB3aW5kb3cuY3VzdG9tQ2FyZHMgfHwgW107XG53aW5kb3cuY3VzdG9tQ2FyZHMucHVzaCh7XG4gIHR5cGU6IFwiaGEtY3VzdG9tLXNjaGVkdWxlLWNhcmRcIixcbiAgbmFtZTogTE9DQUxFU1tkZXRlY3RMYW5nKCldLmNhcmROYW1lLFxuICBwcmV2aWV3OiB0cnVlLFxuICBkZXNjcmlwdGlvbjogTE9DQUxFU1tkZXRlY3RMYW5nKCldLmNhcmREZXNjcmlwdGlvbixcbiAgZG9jdW1lbnRhdGlvblVSTDogXCJodHRwczovL2dpdGh1Yi5jb20vamV3b24tb2gvc2NoZWR1bGUtdWlcIixcbn0pO1xuIiwiLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcyB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IFRJTUVSX0xPQ0FMRVMsIGRldGVjdExhbmcgfSBmcm9tIFwiLi4vbG9jYWxlcy9pbmRleC5qc1wiO1xuXG5jbGFzcyBIYUN1c3RvbVRpbWVyQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICBoYXNzOiB7IHR5cGU6IE9iamVjdCB9LFxuICAgIF9jb25maWc6IHsgc3RhdGU6IHRydWUgfSxcbiAgICBfbm93OiB7IHN0YXRlOiB0cnVlIH0sXG4gICAgX2lucHV0SG91cnM6IHsgc3RhdGU6IHRydWUgfSxcbiAgICBfaW5wdXRNaW51dGVzOiB7IHN0YXRlOiB0cnVlIH0sXG4gICAgX2lucHV0U2Vjb25kczogeyBzdGF0ZTogdHJ1ZSB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9ub3cgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuX2lucHV0SG91cnMgPSAwO1xuICAgIHRoaXMuX2lucHV0TWludXRlcyA9IDMwO1xuICAgIHRoaXMuX2lucHV0U2Vjb25kcyA9IDA7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX3RpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLl9ub3cgPSBEYXRlLm5vdygpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fdGltZXJJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lckludGVydmFsKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0Q29uZmlnRWxlbWVudCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhhLWN1c3RvbS10aW1lci1jYXJkLWVkaXRvclwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTdHViQ29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcImN1c3RvbTpoYS1jdXN0b20tdGltZXItY2FyZFwiXG4gICAgfTtcbiAgfVxuXG4gIHNldENvbmZpZyhjb25maWcpIHtcbiAgICBpZiAoIWNvbmZpZykgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb25maWd1cmF0aW9uXCIpO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGdldCBfbGFuZygpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNzPy5sYW5ndWFnZSAmJiB0aGlzLmhhc3MubGFuZ3VhZ2UuaW5jbHVkZXMoJ2tvJykgPyAna28nIDogJ2VuJztcbiAgfVxuXG4gIF90KGtleSkge1xuICAgIHJldHVybiBUSU1FUl9MT0NBTEVTW3RoaXMuX2xhbmddPy5ba2V5XSA/PyBUSU1FUl9MT0NBTEVTLmVuW2tleV07XG4gIH1cblxuICAvLyBQYXJzZXMgXCJISDpNTTpTU1wiIGludG8gdG90YWwgc2Vjb25kc1xuICBfcGFyc2VEdXJhdGlvblRvU2Vjb25kcyhkdXJhdGlvblN0cikge1xuICAgIGlmICghZHVyYXRpb25TdHIpIHJldHVybiAwO1xuICAgIC8vIEZvcm1hdCBjb3VsZCBiZSBcIjA6MzA6MDBcIiBvciBcIjAwOjMwOjAwXCJcbiAgICBjb25zdCBwYXJ0cyA9IGR1cmF0aW9uU3RyLnNwbGl0KCc6JykubWFwKE51bWJlcik7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgcmV0dXJuIChwYXJ0c1swXSAqIDM2MDApICsgKHBhcnRzWzFdICogNjApICsgcGFydHNbMl07XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgX2Zvcm1hdFNlY29uZHMoc2VjKSB7XG4gICAgaWYgKHNlYyA8PSAwKSByZXR1cm4gXCIwMDowMDowMFwiO1xuICAgIGNvbnN0IGggPSBNYXRoLmZsb29yKHNlYyAvIDM2MDApO1xuICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChzZWMgJSAzNjAwKSAvIDYwKTtcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcihzZWMgJSA2MCk7XG4gICAgcmV0dXJuIGAke2gudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke20udG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke3MudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWA7XG4gIH1cblxuICBfY2FsbFNlcnZpY2Uoc2VydmljZSwgZGF0YSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuZW50aXR5KSByZXR1cm47XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwidGltZXJcIiwgc2VydmljZSwgeyBlbnRpdHlfaWQ6IHRoaXMuX2NvbmZpZy5lbnRpdHksIC4uLmRhdGEgfSk7XG4gIH1cblxuICBfc3RhcnRUaW1lckN1c3RvbSgpIHtcbiAgICBjb25zdCB0b3RhbFNlYyA9ICh0aGlzLl9pbnB1dEhvdXJzICogMzYwMCkgKyAodGhpcy5faW5wdXRNaW51dGVzICogNjApICsgdGhpcy5faW5wdXRTZWNvbmRzO1xuICAgIGlmICh0b3RhbFNlYyA8PSAwKSByZXR1cm47XG4gICAgY29uc3QgZHVyYXRpb25TdHIgPSB0aGlzLl9mb3JtYXRTZWNvbmRzKHRvdGFsU2VjKTtcbiAgICB0aGlzLl9jYWxsU2VydmljZShcInN0YXJ0XCIsIHsgZHVyYXRpb246IGR1cmF0aW9uU3RyIH0pO1xuICB9XG5cbiAgX3N0YXJ0VGltZXJQcmVzZXQobWludXRlcykge1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlKFwic3RhcnRcIiwgeyBkdXJhdGlvbjogdGhpcy5fZm9ybWF0U2Vjb25kcyhtaW51dGVzICogNjApIH0pO1xuICB9XG5cbiAgX2FkZFRpbWUobWludXRlcykge1xuICAgIGxldCB0b3RhbE1pbnV0ZXMgPSAodGhpcy5faW5wdXRIb3VycyAqIDYwKSArIHRoaXMuX2lucHV0TWludXRlcyArIG1pbnV0ZXM7XG4gICAgaWYgKHRvdGFsTWludXRlcyA8IDApIHRvdGFsTWludXRlcyA9IDA7XG5cbiAgICB0aGlzLl9pbnB1dEhvdXJzID0gTWF0aC5mbG9vcih0b3RhbE1pbnV0ZXMgLyA2MCk7XG4gICAgdGhpcy5faW5wdXRNaW51dGVzID0gdG90YWxNaW51dGVzICUgNjA7XG4gICAgXG4gICAgLy8g7LWc64yAIOyLnOqwhCDstIjqs7wg67Cp7KeAXG4gICAgaWYgKHRoaXMuX2lucHV0SG91cnMgPiA5OSkge1xuICAgICAgIHRoaXMuX2lucHV0SG91cnMgPSA5OTtcbiAgICAgICB0aGlzLl9pbnB1dE1pbnV0ZXMgPSA1OTtcbiAgICB9XG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gIH1cblxuICAvLyDsi5zqsIQg6rCSIOymneqwkCDtlbjrk6Trn6xcbiAgX2FkanVzdFRpbWUoZmllbGQsIGRlbHRhKSB7XG4gICAgY29uc3QgbGltaXRzID0geyBob3VyczogeyBtaW46IDAsIG1heDogMjMgfSwgbWludXRlczogeyBtaW46IDAsIG1heDogNTkgfSwgc2Vjb25kczogeyBtaW46IDAsIG1heDogNTkgfSB9O1xuICAgIGNvbnN0IGZpZWxkTWFwID0geyBob3VyczogJ19pbnB1dEhvdXJzJywgbWludXRlczogJ19pbnB1dE1pbnV0ZXMnLCBzZWNvbmRzOiAnX2lucHV0U2Vjb25kcycgfTtcbiAgICBjb25zdCBwcm9wTmFtZSA9IGZpZWxkTWFwW2ZpZWxkXTtcbiAgICBjb25zdCBsaW1pdCA9IGxpbWl0c1tmaWVsZF07XG4gICAgbGV0IHZhbCA9ICh0aGlzW3Byb3BOYW1lXSB8fCAwKSArIGRlbHRhO1xuICAgIGlmICh2YWwgPCBsaW1pdC5taW4pIHZhbCA9IGxpbWl0Lm1heDtcbiAgICBpZiAodmFsID4gbGltaXQubWF4KSB2YWwgPSBsaW1pdC5taW47XG4gICAgdGhpc1twcm9wTmFtZV0gPSB2YWw7XG4gIH1cblxuICAvLyDsiKvsnpAg7KeB7KCRIOyeheugpSDtlbjrk6Trn6xcbiAgX29uU3BpbklucHV0KGZpZWxkLCBldikge1xuICAgIGNvbnN0IGxpbWl0cyA9IHsgaG91cnM6IHsgbWluOiAwLCBtYXg6IDIzIH0sIG1pbnV0ZXM6IHsgbWluOiAwLCBtYXg6IDU5IH0sIHNlY29uZHM6IHsgbWluOiAwLCBtYXg6IDU5IH0gfTtcbiAgICBjb25zdCBmaWVsZE1hcCA9IHsgaG91cnM6ICdfaW5wdXRIb3VycycsIG1pbnV0ZXM6ICdfaW5wdXRNaW51dGVzJywgc2Vjb25kczogJ19pbnB1dFNlY29uZHMnIH07XG4gICAgY29uc3QgbGltaXQgPSBsaW1pdHNbZmllbGRdO1xuICAgIGxldCB2YWwgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUpIHx8IDA7XG4gICAgaWYgKHZhbCA8IGxpbWl0Lm1pbikgdmFsID0gbGltaXQubWluO1xuICAgIGlmICh2YWwgPiBsaW1pdC5tYXgpIHZhbCA9IGxpbWl0Lm1heDtcbiAgICB0aGlzW2ZpZWxkTWFwW2ZpZWxkXV0gPSB2YWw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcpIHJldHVybiBodG1sYDxoYS1jYXJkPjxkaXYgY2xhc3M9XCJlcnJvclwiPiR7dGhpcy5fdChcIm5vdENvbmZpZ3VyZWRcIil9PC9kaXY+PC9oYS1jYXJkPmA7XG5cbiAgICBjb25zdCBpc0R1bW15ID0gIXRoaXMuX2NvbmZpZy5lbnRpdHk7XG4gICAgbGV0IHN0YXRlID0gXCJpZGxlXCI7XG4gICAgbGV0IHJlbWFpbmluZ1NlYyA9IDA7XG4gICAgbGV0IHRvdGFsRHVyYXRpb25TZWMgPSAzNjAwO1xuICAgIGxldCBjdXN0b21UaXRsZSA9IHRoaXMuX2NvbmZpZy50aXRsZSB8fCB0aGlzLl90KFwiZGVmYXVsdFRpdGxlXCIpO1xuXG4gICAgaWYgKCFpc0R1bW15ICYmIHRoaXMuaGFzcyAmJiB0aGlzLmhhc3Muc3RhdGVzW3RoaXMuX2NvbmZpZy5lbnRpdHldKSB7XG4gICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcy5zdGF0ZXNbdGhpcy5fY29uZmlnLmVudGl0eV07XG4gICAgICBzdGF0ZSA9IHN0YXRlT2JqLnN0YXRlO1xuICAgICAgY3VzdG9tVGl0bGUgPSB0aGlzLl9jb25maWcudGl0bGUgfHwgc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IHRoaXMuX2NvbmZpZy5lbnRpdHk7XG4gICAgICB0b3RhbER1cmF0aW9uU2VjID0gdGhpcy5fcGFyc2VEdXJhdGlvblRvU2Vjb25kcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmR1cmF0aW9uKSB8fCAzNjAwO1xuXG4gICAgICBpZiAoc3RhdGUgPT09IFwiYWN0aXZlXCIgJiYgc3RhdGVPYmouYXR0cmlidXRlcy5maW5pc2hlc19hdCkge1xuICAgICAgICBsZXQgY2FsY1NlYyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZmluaXNoZXNfYXQpLmdldFRpbWUoKSAtIHRoaXMuX25vdykgLyAxMDAwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOuPmeyggSDsmKTssKgg67O07KCVOiDtgbTrnbzsnbTslrjtirgg7Iuc6rCE7J20IOuKkOugpCBjYWxjU2Vj6rCAIOq4sOykgOyLnOqwhOydhCDstIjqs7ztlZjrqbQg7Jik7LCoKG9mZnNldCnrpbwg6rOg7KCVIOyggOyepVxuICAgICAgICBpZiAodGhpcy5fdGltZU9mZnNldCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX2xhc3RUaW1lclN0YXRlICE9PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgdGhpcy5fdGltZU9mZnNldCA9IE1hdGgubWF4KDAsIGNhbGNTZWMgLSB0b3RhbER1cmF0aW9uU2VjKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g7Jik7LCo66W8IOu5vOyEnCAw6rmM7KeAIOygle2Zle2eiCDrlqjslrTsp4Drj4TroZ0g66ee7LakXG4gICAgICAgIHJlbWFpbmluZ1NlYyA9IE1hdGgubWF4KDAsIGNhbGNTZWMgLSAodGhpcy5fdGltZU9mZnNldCB8fCAwKSk7XG4gICAgICAgIHJlbWFpbmluZ1NlYyA9IE1hdGgubWluKHRvdGFsRHVyYXRpb25TZWMsIHJlbWFpbmluZ1NlYyk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBcInBhdXNlZFwiICYmIHN0YXRlT2JqLmF0dHJpYnV0ZXMucmVtYWluaW5nKSB7XG4gICAgICAgIHJlbWFpbmluZ1NlYyA9IHRoaXMuX3BhcnNlRHVyYXRpb25Ub1NlY29uZHMoc3RhdGVPYmouYXR0cmlidXRlcy5yZW1haW5pbmcpO1xuICAgICAgICB0aGlzLl90aW1lT2Zmc2V0ID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJpZGxlXCIpIHtcbiAgICAgICAgcmVtYWluaW5nU2VjID0gMDtcbiAgICAgICAgdGhpcy5fdGltZU9mZnNldCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RUaW1lclN0YXRlID0gc3RhdGU7XG4gICAgfSBlbHNlIGlmIChpc0R1bW15KSB7XG4gICAgICBzdGF0ZSA9IFwiaWRsZVwiO1xuICAgICAgdGhpcy5faW5wdXRIb3VycyA9IDA7XG4gICAgICB0aGlzLl9pbnB1dE1pbnV0ZXMgPSAzMDtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc1BlcmNlbnQgPSB0b3RhbER1cmF0aW9uU2VjID4gMFxuICAgICAgPyBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIChyZW1haW5pbmdTZWMgLyB0b3RhbER1cmF0aW9uU2VjKSAqIDEwMCkpXG4gICAgICA6IDA7XG5cbiAgICBjb25zdCBoID0gTWF0aC5mbG9vcihyZW1haW5pbmdTZWMgLyAzNjAwKTtcbiAgICBjb25zdCBtID0gTWF0aC5mbG9vcigocmVtYWluaW5nU2VjICUgMzYwMCkgLyA2MCk7XG4gICAgY29uc3QgcyA9IE1hdGguZmxvb3IocmVtYWluaW5nU2VjICUgNjApO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke2N1c3RvbVRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItcmlnaHRcIj5cbiAgICAgICAgICAgICR7c3RhdGUgIT09ICdpZGxlJyA/IGh0bWxgXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdGUtYmFkZ2UgJHtzdGF0ZX1cIj4ke3N0YXRlID09PSAnYWN0aXZlJyA/IHRoaXMuX3QoJ3N0YXJ0JykgOiB0aGlzLl90KCdwYXVzZWRNZXNzYWdlJyl9PC9zcGFuPlxuICAgICAgICAgICAgYCA6ICcnfVxuICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cIiR7c3RhdGUgPT09ICdhY3RpdmUnID8gJ21kaTp0aW1lci1zYW5kJyA6ICdtZGk6dGltZXInfVwiPjwvaGEtaWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICR7c3RhdGUgPT09IFwiaWRsZVwiID8gaHRtbGBcbiAgICAgICAgICAgIDwhLS0g64yA6riwIOyDge2DnDog7Iir7J6QIOymneqwkCDsnoXroKUgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1zcGlubmVyLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1zcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNwaW4tYnRuXCIgQGNsaWNrPVwiJHsoKSA9PiB0aGlzLl9hZGp1c3RUaW1lKCdob3VycycsIDEpfVwiPjxoYS1pY29uIGljb249XCJtZGk6Y2hldnJvbi11cFwiPjwvaGEtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJzcGluLXZhbHVlXCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBtYXg9XCIyM1wiIC52YWx1ZT1cIiR7U3RyaW5nKHRoaXMuX2lucHV0SG91cnMpLnBhZFN0YXJ0KDIsICcwJyl9XCIgQGNoYW5nZT1cIiR7ZSA9PiB0aGlzLl9vblNwaW5JbnB1dCgnaG91cnMnLCBlKX1cIiBAZm9jdXM9XCIke2UgPT4gZS50YXJnZXQuc2VsZWN0KCl9XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNwaW4tYnRuXCIgQGNsaWNrPVwiJHsoKSA9PiB0aGlzLl9hZGp1c3RUaW1lKCdob3VycycsIC0xKX1cIj48aGEtaWNvbiBpY29uPVwibWRpOmNoZXZyb24tZG93blwiPjwvaGEtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbi1sYWJlbFwiPiR7dGhpcy5fdChcImhvdXJzTGFiZWxcIil9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbi1zZXBhcmF0b3JcIj46PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3Bpbi1idG5cIiBAY2xpY2s9XCIkeygpID0+IHRoaXMuX2FkanVzdFRpbWUoJ21pbnV0ZXMnLCAxKX1cIj48aGEtaWNvbiBpY29uPVwibWRpOmNoZXZyb24tdXBcIj48L2hhLWljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwic3Bpbi12YWx1ZVwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgbWF4PVwiNTlcIiAudmFsdWU9XCIke1N0cmluZyh0aGlzLl9pbnB1dE1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJyl9XCIgQGNoYW5nZT1cIiR7ZSA9PiB0aGlzLl9vblNwaW5JbnB1dCgnbWludXRlcycsIGUpfVwiIEBmb2N1cz1cIiR7ZSA9PiBlLnRhcmdldC5zZWxlY3QoKX1cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3Bpbi1idG5cIiBAY2xpY2s9XCIkeygpID0+IHRoaXMuX2FkanVzdFRpbWUoJ21pbnV0ZXMnLCAtMSl9XCI+PGhhLWljb24gaWNvbj1cIm1kaTpjaGV2cm9uLWRvd25cIj48L2hhLWljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW4tbGFiZWxcIj4ke3RoaXMuX3QoXCJtaW51dGVzTGFiZWxcIil9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbi1zZXBhcmF0b3JcIj46PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3Bpbi1idG5cIiBAY2xpY2s9XCIkeygpID0+IHRoaXMuX2FkanVzdFRpbWUoJ3NlY29uZHMnLCAxKX1cIj48aGEtaWNvbiBpY29uPVwibWRpOmNoZXZyb24tdXBcIj48L2hhLWljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwic3Bpbi12YWx1ZVwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgbWF4PVwiNTlcIiAudmFsdWU9XCIke1N0cmluZyh0aGlzLl9pbnB1dFNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJyl9XCIgQGNoYW5nZT1cIiR7ZSA9PiB0aGlzLl9vblNwaW5JbnB1dCgnc2Vjb25kcycsIGUpfVwiIEBmb2N1cz1cIiR7ZSA9PiBlLnRhcmdldC5zZWxlY3QoKX1cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3Bpbi1idG5cIiBAY2xpY2s9XCIkeygpID0+IHRoaXMuX2FkanVzdFRpbWUoJ3NlY29uZHMnLCAtMSl9XCI+PGhhLWljb24gaWNvbj1cIm1kaTpjaGV2cm9uLWRvd25cIj48L2hhLWljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW4tbGFiZWxcIj4ke3RoaXMuX3QoXCJzZWNvbmRzTGFiZWxcIil9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYCA6IGh0bWxgXG4gICAgICAgICAgICA8IS0tIOuPmeyekS/snbzsi5zsoJXsp4Ag7IOB7YOcOiDrgqjsnYAg7Iuc6rCEIO2RnOyLnCArIOuwlCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lci1kaXNwbGF5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lci1yZW1haW5pbmdcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWUtZGlnaXRcIj4ke1N0cmluZyhoKS5wYWRTdGFydCgyLCAnMCcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWUtY29sb25cIj46PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGltZS1kaWdpdFwiPiR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsICcwJyl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGltZS1jb2xvblwiPjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lLWRpZ2l0XCI+JHtTdHJpbmcocykucGFkU3RhcnQoMiwgJzAnKX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZXItbWVzc2FnZVwiIHN0eWxlPVwibWFyZ2luLXRvcDogOHB4OyBmb250LXNpemU6IDAuOTVyZW07IGNvbG9yOiB2YXIoLS1jdXN0b20tc2Vjb25kYXJ5KTsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgJHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IHRpbWVBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgIGlmKGggPiAwKSB0aW1lQXJyLnB1c2goaCArIHRoaXMuX3QoXCJob3Vyc1N0clwiKSk7XG4gICAgICAgICAgICAgICAgICBpZihtID4gMCB8fCBoID4gMCkgdGltZUFyci5wdXNoKG0gKyB0aGlzLl90KFwibWludXRlc1N0clwiKSk7XG4gICAgICAgICAgICAgICAgICB0aW1lQXJyLnB1c2gocyArIHRoaXMuX3QoXCJzZWNvbmRzU3RyXCIpKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpblN0ciA9IHRpbWVBcnIuam9pbignICcpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7IHBhZGRpbmc6IDRweCAxMnB4OyBib3JkZXItcmFkaXVzOiAxMnB4O1wiPiR7cmVtYWluU3RyfSAke3RoaXMuX3QoXCJjb3VudGRvd25NZXNzYWdlXCIpfTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyICR7c3RhdGV9XCIgc3R5bGU9XCJ3aWR0aDogJHtwcm9ncmVzc1BlcmNlbnR9JTtcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc2V0cy1jb250YWluZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogOHB4OyB3aWR0aDogMTAwJTtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzZXRzXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmVzZXQtYnRuXCIgQGNsaWNrPVwiJHsoKSA9PiB0aGlzLl9hZGRUaW1lKDUpfVwiID9kaXNhYmxlZD1cIiR7c3RhdGUgIT09ICdpZGxlJyAmJiAhaXNEdW1teX1cIj4ke3RoaXMuX3QoJ3ByZXNldDVtJyl9PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmVzZXQtYnRuXCIgQGNsaWNrPVwiJHsoKSA9PiB0aGlzLl9hZGRUaW1lKDEwKX1cIiA/ZGlzYWJsZWQ9XCIke3N0YXRlICE9PSAnaWRsZScgJiYgIWlzRHVtbXl9XCI+JHt0aGlzLl90KCdwcmVzZXQxMG0nKX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByZXNldC1idG5cIiBAY2xpY2s9XCIkeygpID0+IHRoaXMuX2FkZFRpbWUoMzApfVwiID9kaXNhYmxlZD1cIiR7c3RhdGUgIT09ICdpZGxlJyAmJiAhaXNEdW1teX1cIj4ke3RoaXMuX3QoJ3ByZXNldDMwbScpfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc2V0c1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJlc2V0LWJ0biBtaW51c1wiIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5fYWRkVGltZSgtNSl9XCIgP2Rpc2FibGVkPVwiJHtzdGF0ZSAhPT0gJ2lkbGUnICYmICFpc0R1bW15fVwiPiR7dGhpcy5fdCgncHJlc2V0TWludXM1bScpfTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJlc2V0LWJ0biBtaW51c1wiIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5fYWRkVGltZSgtMTApfVwiID9kaXNhYmxlZD1cIiR7c3RhdGUgIT09ICdpZGxlJyAmJiAhaXNEdW1teX1cIj4ke3RoaXMuX3QoJ3ByZXNldE1pbnVzMTBtJyl9PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmVzZXQtYnRuIG1pbnVzXCIgQGNsaWNrPVwiJHsoKSA9PiB0aGlzLl9hZGRUaW1lKC0zMCl9XCIgP2Rpc2FibGVkPVwiJHtzdGF0ZSAhPT0gJ2lkbGUnICYmICFpc0R1bW15fVwiPiR7dGhpcy5fdCgncHJlc2V0TWludXMzMG0nKX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAke3N0YXRlID09PSBcImlkbGVcIiA/IGh0bWxgXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgc3RhcnQtYnRuXCIgQGNsaWNrPVwiJHsoKSA9PiB0aGlzLl9zdGFydFRpbWVyQ3VzdG9tKCl9XCIgP2Rpc2FibGVkPVwiJHtpc0R1bW15fVwiPlxuICAgICAgICAgICAgICAgIDxoYS1pY29uIGljb249XCJtZGk6cGxheVwiPjwvaGEtaWNvbj4gJHt0aGlzLl90KCdzdGFydCcpfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIGAgOiBodG1sYFxuICAgICAgICAgICAgICAke3N0YXRlID09PSBcImFjdGl2ZVwiID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBAY2xpY2s9XCIkeygpID0+IHRoaXMuX2NhbGxTZXJ2aWNlKCdwYXVzZScpfVwiID9kaXNhYmxlZD1cIiR7aXNEdW1teX1cIj5cbiAgICAgICAgICAgICAgICAgIDxoYS1pY29uIGljb249XCJtZGk6cGF1c2VcIj48L2hhLWljb24+ICR7dGhpcy5fdCgncGF1c2UnKX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgYCA6IGh0bWxgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljaz1cIiR7KCkgPT4gdGhpcy5fY2FsbFNlcnZpY2UoJ3N0YXJ0Jyl9XCIgP2Rpc2FibGVkPVwiJHtpc0R1bW15fVwiPlxuICAgICAgICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cIm1kaTpwbGF5XCI+PC9oYS1pY29uPiAke3RoaXMuX3QoJ3Jlc3VtZScpfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBAY2xpY2s9XCIkeygpID0+IHRoaXMuX2NhbGxTZXJ2aWNlKCdjYW5jZWwnKX1cIiA/ZGlzYWJsZWQ9XCIke2lzRHVtbXl9XCI+XG4gICAgICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cIm1kaTpzdG9wXCI+PC9oYS1pY29uPiAke3RoaXMuX3QoJ3N0b3AnKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIC0tY3VzdG9tLXByaW1hcnk6IHZhcigtLXByaW1hcnktY29sb3IsICMwM2E5ZjQpO1xuICAgICAgLS1jdXN0b20tYmc6IHZhcigtLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSk7XG4gICAgICAtLWN1c3RvbS1ib3JkZXI6IHZhcigtLWRpdmlkZXItY29sb3IsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSk7XG4gICAgICAtLWN1c3RvbS10ZXh0OiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IsICNmZmZmZmYpO1xuICAgICAgLS1jdXN0b20tc2Vjb25kYXJ5OiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvciwgI2EwYTBhMCk7XG4gICAgICAtLWN1c3RvbS1kYW5nZXI6IHZhcigtLWVycm9yLWNvbG9yLCAjZjQ0MzM2KTtcbiAgICAgIC0tY3VzdG9tLWFjdGl2ZS1iZzogcmdiYSgzLCAxNjksIDI0NCwgMC4xNSk7XG4gICAgICAtLWN1c3RvbS1zdWNjZXNzOiAjNGNhZjUwO1xuICAgIH1cblxuICAgIGhhLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWJnKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhLWNhcmQtYm9yZGVyLXJhZGl1cywgMTJweCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jdXN0b20tYm9yZGVyKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1ib2R5MV8tX2ZvbnQtZmFtaWx5LCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWYpO1xuICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS10ZXh0KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4IDRweCAxNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhcmQtaGVhZGVyIC5uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICB9XG5cbiAgICAuaGVhZGVyLXJpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cblxuICAgIC5oZWFkZXItcmlnaHQgaGEtaWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLXByaW1hcnkpO1xuICAgICAgLS1tZGMtaWNvbi1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5zdGF0ZS1iYWRnZSB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAgIH1cblxuICAgIC5zdGF0ZS1iYWRnZS5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWFjdGl2ZS1iZyk7XG4gICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5zdGF0ZS1iYWRnZS5wYXVzZWQge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1MiwgMCwgMC4xNSk7XG4gICAgICBjb2xvcjogI2ZmOTgwMDtcbiAgICB9XG5cbiAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4IDE2cHggMTZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG5cbiAgICAvKiA9PT0g7Iir7J6QIOyKpO2UvOuEiCAo64yA6riwIOyDge2DnCkgPT09ICovXG4gICAgLnRpbWUtc3Bpbm5lci1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIH1cblxuICAgIC50aW1lLXNwaW5uZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgfVxuXG4gICAgLnNwaW4tYnRuIHtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWN1c3RvbS1ib3JkZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1zZWNvbmRhcnkpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgICAgLS1tZGMtaWNvbi1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5zcGluLWJ0bjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS10ZXh0KTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIH1cblxuICAgIC5zcGluLWJ0bjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkyKTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMTY5LCAyNDQsIDAuMTUpO1xuICAgIH1cblxuICAgIC5zcGluLXZhbHVlIHtcbiAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzLCBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICB9XG5cbiAgICAuc3Bpbi12YWx1ZTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgICAuc3Bpbi12YWx1ZTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLnNwaW4tdmFsdWU6Zm9jdXMtdmlzaWJsZSB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWN1c3RvbS1wcmltYXJ5KTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMTY5LCAyNDQsIDAuMDgpO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAuc3Bpbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20tc2Vjb25kYXJ5KTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIH1cblxuICAgIC5zcGluLXNlcGFyYXRvciB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1zZWNvbmRhcnkpO1xuICAgICAgcGFkZGluZzogMCAycHg7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIC8qID09PSDtg4DsnbTrqLgg7ZGc7IucICjrj5nsnpEv7J287Iuc7KCV7KeAIOyDge2DnCkgPT09ICovXG4gICAgLnRpbWVyLWRpc3BsYXkge1xuICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgfVxuXG4gICAgLnRpbWVyLXJlbWFpbmluZyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgfVxuXG4gICAgLnRpbWUtZGlnaXQge1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20tdGV4dCk7XG4gICAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB9XG5cbiAgICAudGltZS1jb2xvbiB7XG4gICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLXNlY29uZGFyeSk7XG4gICAgICBtYXJnaW46IDAgMnB4O1xuICAgIH1cblxuICAgIC8qID09PSDtlITroZzqt7jroIjsiqQg67CUID09PSAqL1xuICAgIC5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDFzIGxpbmVhcjtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtYmFyLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jdXN0b20tcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLWJhci5wYXVzZWQge1xuICAgICAgYmFja2dyb3VuZDogI2ZmOTgwMDtcbiAgICB9XG5cbiAgICAvKiA9PT0g7ZSE66as7IWLIOuyhO2KvCA9PT0gKi9cbiAgICAucHJlc2V0cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAucHJlc2V0LWJ0biB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWN1c3RvbS1ib3JkZXIpO1xuICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS10ZXh0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICB9XG5cbiAgICAucHJlc2V0LWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICB9XG5cbiAgICAucHJlc2V0LWJ0bjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB9XG5cbiAgICAucHJlc2V0LWJ0bjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cblxuICAgIC8qID09PSDsu6jtirjroaQg67KE7Yq8ID09PSAqL1xuICAgIC5jb250cm9scyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYnRuIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICB9XG5cbiAgICAuYnRuOmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuXG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWN1c3RvbS1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IsICNmZmYpO1xuICAgIH1cblxuICAgIC5idG4tcHJpbWFyeTphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcbiAgICB9XG5cbiAgICAuYnRuLXNlY29uZGFyeSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLXRleHQpO1xuICAgIH1cblxuICAgIC5idG4tc2Vjb25kYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgfVxuXG4gICAgLmJ0bi1kYW5nZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWRhbmdlcik7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAuYnRuLWRhbmdlcjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTUzOTM1O1xuICAgIH1cbiAgYDtcbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbS10aW1lci1jYXJkXCIsIEhhQ3VzdG9tVGltZXJDYXJkKTtcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVkaXRvciBDYXJkIChXaXphcmQpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbndpbmRvdy5jdXN0b21DYXJkcyA9IHdpbmRvdy5jdXN0b21DYXJkcyB8fCBbXTtcbigoKSA9PiB7XG4gIGNvbnN0IHQgPSBUSU1FUl9MT0NBTEVTW2RldGVjdExhbmcoKV0gPz8gVElNRVJfTE9DQUxFUy5lbjtcbiAgd2luZG93LmN1c3RvbUNhcmRzLnB1c2goe1xuICAgIHR5cGU6IFwiaGEtY3VzdG9tLXRpbWVyLWNhcmRcIixcbiAgICBuYW1lOiB0LmNhcmROYW1lLFxuICAgIHByZXZpZXc6IHRydWUsXG4gICAgZGVzY3JpcHRpb246IHQuY2FyZERlc2NyaXB0aW9uLFxuICAgIGRvY3VtZW50YXRpb25VUkw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pld29uLW9oL3NjaGVkdWxlLXVpXCIsXG4gIH0pO1xufSkoKTtcbiIsIi8vIEB0cy1ub2NoZWNrXG4vLyBFbnRyeSBwb2ludCBmb3IgdGhlIHNjaGVkdWxlLXVpIExvdmVsYWNlIGJ1bmRsZS5cbi8vXG4vLyBFYWNoIGNhcmQgYW5kIGl0cyBlZGl0b3IgbGl2ZXMgaW4gaXRzIG93biBtb2R1bGUgdW5kZXIgc3JjL2NhcmRzIGFuZFxuLy8gc3JjL2VkaXRvcnMuIFRoZXkgc2VsZi1yZWdpc3RlciB2aWEgY3VzdG9tRWxlbWVudHMuZGVmaW5lIGFuZCBhcHBlbmRcbi8vIHRoZW1zZWx2ZXMgdG8gd2luZG93LmN1c3RvbUNhcmRzIGFzIGEgc2lkZSBlZmZlY3Qgb2YgYmVpbmcgaW1wb3J0ZWQuXG4vL1xuLy8gQWRkaW5nIGEgbmV3IGNhcmQgaGVyZSBpcyB0aGVyZWZvcmUgYSB0d28tc3RlcCBwcm9jZXNzOlxuLy8gICAxLiBkcm9wIHRoZSBtb2R1bGUgdW5kZXIgc3JjL2NhcmRzLzxuYW1lPi50cyAob3Igc3JjL2VkaXRvcnMvPG5hbWU+LnRzKVxuLy8gICAyLiBhZGQgYW4gaW1wb3J0IFwiLi8uLi5cIiBsaW5lIGJlbG93LlxuLy9cbi8vIEFueXRoaW5nIGVsc2UgKHNoYXJlZCBjb25zdGFudHMsIGhlbHBlcnMsIHR5cGVzKSBzaG91bGQgbGl2ZSBpbiBzcmMvXG4vLyBhbG9uZ3NpZGUgd2hpY2hldmVyIG1vZHVsZSBhY3R1YWxseSBvd25zIGl0IOKAlCB0aGVyZSBpcyBubyBsb25nZXIgYVxuLy8gXCJtYWluIGNhcmRcIiBmaWxlIGhlcmUuIEtlZXAgdGhpcyBlbnRyeSBwb2ludCBhcyBzbWFsbCBhcyBwb3NzaWJsZS5cblxuaW1wb3J0IFwiLi9sb2NhbGVzL2luZGV4LmpzXCI7XG5pbXBvcnQgXCIuL2VkaXRvcnMvc2NoZWR1bGUtZWRpdG9yLmpzXCI7XG5pbXBvcnQgXCIuL2VkaXRvcnMvdGltZXItZWRpdG9yLmpzXCI7XG5pbXBvcnQgXCIuL2NhcmRzL3NjaGVkdWxlLWNhcmQuanNcIjtcbmltcG9ydCBcIi4vY2FyZHMvdGltZXItY2FyZC5qc1wiO1xuXG5jb25zb2xlLmxvZyhcbiAgXCIlY1tzY2hlZHVsZS11aV0gdjEuNC40IGxvYWRlZFwiLFxuICBcImNvbG9yOiAjMDNhOWY0OyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4O1wiLFxuKTtcbiJdLCJuYW1lcyI6WyJ0IiwiZSIsInMiLCJvIiwiciIsIm4iLCJpIiwiUyIsImMiLCJoIiwiYSIsImwiLCJwIiwiZCIsInUiLCJmIiwiYiIsInkiLCJMaXRFbGVtZW50IiwiaHRtbCIsImNzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNPLE1BQU0sT0FBTyxHQUFHO0FBQ3JCLElBQUEsRUFBRSxFQUFFO0FBQ0YsUUFBQSxRQUFRLEVBQUUsU0FBUztBQUNuQixRQUFBLFNBQVMsRUFBRSxPQUFPO0FBQ2xCLFFBQUEsT0FBTyxFQUFFLE9BQU87QUFDaEIsUUFBQSxHQUFHLEVBQUUsWUFBWTtBQUNqQixRQUFBLE1BQU0sRUFBRSxJQUFJO0FBQ1osUUFBQSxNQUFNLEVBQUUsSUFBSTtBQUNaLFFBQUEsSUFBSSxFQUFFLElBQUk7QUFDVixRQUFBLE1BQU0sRUFBRSxJQUFJO0FBQ1osUUFBQSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDekMsUUFBQSxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDOUMsUUFBQSxRQUFRLEVBQUUsSUFBSTtBQUNkLFFBQUEsS0FBSyxFQUFFLGdCQUFnQjtBQUN2QixRQUFBLFdBQVcsRUFBRSxvQkFBb0I7QUFDakMsUUFBQSxlQUFlLEVBQUUsUUFBUTtBQUN6QixRQUFBLFdBQVcsRUFBRSxZQUFZO0FBQ3pCLFFBQUEsYUFBYSxFQUFFLFNBQVM7QUFDeEIsUUFBQSxlQUFlLEVB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SSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUM7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLEdBQUMsQ0FBQyxVQUFVLENBQUNDLEdBQUMsQ0FBQ0QsR0FBQyxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUdBLEdBQUMsQ0FBQyxRQUFRLEVBQUVBLEdBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsb0JBQW9CLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQ0UsR0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDQyxHQUFDLENBQUMsSUFBSSxPQUFPLFdBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUUsQ0FBQyxDQUFDLEdBQUdELEdBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdELEdBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDRSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBYSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLE1BQU1DLEdBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSUMsR0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUNILEdBQUMsQ0FBQyxDQUFDSSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBRSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUMsQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUlELEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDSCxHQUFDLENBQUMsQ0FBQyxDQUFDSyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBR04sR0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDRCxHQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDUSxHQUFDLENBQUNQLEdBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQ0p4ekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUNFLEdBQUMsQ0FBQyxjQUFjLENBQUNMLEdBQUMsQ0FBQyx3QkFBd0IsQ0FBQ1EsR0FBQyxDQUFDLG1CQUFtQixDQUFDTCxHQUFDLENBQUMscUJBQXFCLENBQUNELEdBQUMsQ0FBQyxjQUFjLENBQUNFLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQ0ssR0FBQyxDQUFDLFVBQVUsQ0FBQ0YsR0FBQyxDQUFDRSxHQUFDLENBQUMsWUFBWSxDQUFDQyxHQUFDLENBQUNILEdBQUMsQ0FBQ0EsR0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUNJLEdBQUMsQ0FBQ0YsR0FBQyxDQUFDLDhCQUE4QixDQUFDRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDSCxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDSSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNULEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNVLEdBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUNGLEdBQUMsQ0FBQyxPQUFPLENBQUMsS0FBRSxDQUFDLFVBQVUsQ0FBQyxLQUFFLENBQUMsVUFBVSxDQUFDQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQ0wsR0FBQyxDQUFDLG1CQUFtQixHQUFHLElBQUksT0FBTyxXQUFDLE1BQU0sQ0FBQyxTQUFTLFdBQVcsQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsV0FBVyxrQkFBa0IsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDTSxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsSUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUVmLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8scUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNRLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUUsQ0FBQyxVQUFVLENBQUMsSUFBRSxDQUFDLENBQUMsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUVPLEdBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQ0gsR0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDUixHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxPQUFPLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQ1EsR0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDQSxHQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR1QsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdELEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsT0FBTyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQ0gsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU0sTUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxhQUFhLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBT0UsR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsSUFBSSxFQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLEVBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDWSxHQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDQSxHQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUVDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFFLENBQUMsSUFBSSxjQUFjLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLEtBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ0UsR0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUNBLEdBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQ0EsR0FBQyxDQUFDSixHQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDSSxHQUFDLENBQUNKLEdBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDRCxHQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUNLLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1AsR0FBQyxDQUFDLHVCQUF1QixHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDOztBQ0xqeUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNLLE1BQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQ0osR0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUNKLEdBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDQSxHQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQ0MsR0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ0EsR0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQ0EsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUNELEdBQUMsQ0FBQ0EsR0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxHQUFDLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUUsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEtBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUUsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxLQUFFLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUNHLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFNLE1BQXlELENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQ0pwN047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBU04sR0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUks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
