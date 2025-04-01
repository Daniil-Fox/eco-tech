/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fancyapps/ui/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@fancyapps/ui/dist/index.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Q),
/* harmony export */   Fancybox: () => (/* binding */ Oe),
/* harmony export */   Panzoom: () => (/* binding */ I)
/* harmony export */ });
const t=(t,e=1e4)=>(t=parseFloat(t+"")||0,Math.round((t+Number.EPSILON)*e)/e),e=function(t){if(!(t&&t instanceof Element&&t.offsetParent))return!1;const e=t.scrollHeight>t.clientHeight,i=window.getComputedStyle(t).overflowY,n=-1!==i.indexOf("hidden"),s=-1!==i.indexOf("visible");return e&&!n&&!s},i=function(t,n=void 0){return!(!t||t===document.body||n&&t===n)&&(e(t)?t:i(t.parentElement,n))},n=function(t){var e=(new DOMParser).parseFromString(t,"text/html").body;if(e.childElementCount>1){for(var i=document.createElement("div");e.firstChild;)i.appendChild(e.firstChild);return i}return e.firstChild},s=t=>`${t||""}`.split(" ").filter((t=>!!t)),o=(t,e,i)=>{t&&s(e).forEach((e=>{t.classList.toggle(e,i||!1)}))};class a{constructor(t){Object.defineProperty(this,"pageX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"pageY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientX",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientY",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"nativePointer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,this.id=self.Touch&&t instanceof Touch?t.identifier:-1,this.time=Date.now()}}const r={passive:!1};class l{constructor(t,{start:e=(()=>!0),move:i=(()=>{}),end:n=(()=>{})}){Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"startCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"moveCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"endCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"currentPointers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"startPointers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this.element=t,this.startCallback=e,this.moveCallback=i,this.endCallback=n;for(const t of["onPointerStart","onTouchStart","onMove","onTouchEnd","onPointerEnd","onWindowBlur"])this[t]=this[t].bind(this);this.element.addEventListener("mousedown",this.onPointerStart,r),this.element.addEventListener("touchstart",this.onTouchStart,r),this.element.addEventListener("touchmove",this.onMove,r),this.element.addEventListener("touchend",this.onTouchEnd),this.element.addEventListener("touchcancel",this.onTouchEnd)}onPointerStart(t){if(!t.buttons||0!==t.button)return;const e=new a(t);this.currentPointers.some((t=>t.id===e.id))||this.triggerPointerStart(e,t)&&(window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseup",this.onPointerEnd),window.addEventListener("blur",this.onWindowBlur))}onTouchStart(t){for(const e of Array.from(t.changedTouches||[]))this.triggerPointerStart(new a(e),t);window.addEventListener("blur",this.onWindowBlur)}onMove(t){const e=this.currentPointers.slice(),i="changedTouches"in t?Array.from(t.changedTouches||[]).map((t=>new a(t))):[new a(t)],n=[];for(const t of i){const e=this.currentPointers.findIndex((e=>e.id===t.id));e<0||(n.push(t),this.currentPointers[e]=t)}n.length&&this.moveCallback(t,this.currentPointers.slice(),e)}onPointerEnd(t){t.buttons>0&&0!==t.button||(this.triggerPointerEnd(t,new a(t)),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseup",this.onPointerEnd),window.removeEventListener("blur",this.onWindowBlur))}onTouchEnd(t){for(const e of Array.from(t.changedTouches||[]))this.triggerPointerEnd(t,new a(e))}triggerPointerStart(t,e){return!!this.startCallback(e,t,this.currentPointers.slice())&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}triggerPointerEnd(t,e){const i=this.currentPointers.findIndex((t=>t.id===e.id));i<0||(this.currentPointers.splice(i,1),this.startPointers.splice(i,1),this.endCallback(t,e,this.currentPointers.slice()))}onWindowBlur(){this.clear()}clear(){for(;this.currentPointers.length;){const t=this.currentPointers[this.currentPointers.length-1];this.currentPointers.splice(this.currentPointers.length-1,1),this.startPointers.splice(this.currentPointers.length-1,1),this.endCallback(new Event("touchend",{bubbles:!0,cancelable:!0,clientX:t.clientX,clientY:t.clientY}),t,this.currentPointers.slice())}}stop(){this.element.removeEventListener("mousedown",this.onPointerStart,r),this.element.removeEventListener("touchstart",this.onTouchStart,r),this.element.removeEventListener("touchmove",this.onMove,r),this.element.removeEventListener("touchend",this.onTouchEnd),this.element.removeEventListener("touchcancel",this.onTouchEnd),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseup",this.onPointerEnd),window.removeEventListener("blur",this.onWindowBlur)}}function c(t,e){return e?Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2)):0}function h(t,e){return e?{clientX:(t.clientX+e.clientX)/2,clientY:(t.clientY+e.clientY)/2}:t}const d=t=>"object"==typeof t&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t),u=(t,...e)=>{const i=e.length;for(let n=0;n<i;n++){const i=e[n]||{};Object.entries(i).forEach((([e,i])=>{const n=Array.isArray(i)?[]:{};t[e]||Object.assign(t,{[e]:n}),d(i)?Object.assign(t[e],u(n,i)):Array.isArray(i)?Object.assign(t,{[e]:[...i]}):Object.assign(t,{[e]:i})}))}return t},p=function(t,e){return t.split(".").reduce(((t,e)=>"object"==typeof t?t[e]:void 0),e)};class f{constructor(t={}){Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.setOptions(t);for(const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))t.startsWith("on")&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}setOptions(t){this.options=t?u({},this.constructor.defaults,t):{};for(const[t,e]of Object.entries(this.option("on")||{}))this.on(t,e)}option(t,...e){let i=p(t,this.options);return i&&"function"==typeof i&&(i=i.call(this,this,...e)),i}optionFor(t,e,i,...n){let s=p(e,t);var o;"string"!=typeof(o=s)||isNaN(o)||isNaN(parseFloat(o))||(s=parseFloat(s)),"true"===s&&(s=!0),"false"===s&&(s=!1),s&&"function"==typeof s&&(s=s.call(this,this,t,...n));let a=p(e,this.options);return a&&"function"==typeof a?s=a.call(this,this,t,...n,s):void 0===s&&(s=a),void 0===s?i:s}cn(t){const e=this.options.classes;return e&&e[t]||""}localize(t,e=[]){t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,((t,e,i)=>{let n="";return i?n=this.option(`${e[0]+e.toLowerCase().substring(1)}.l10n.${i}`):e&&(n=this.option(`l10n.${e}`)),n||(n=t),n}));for(let i=0;i<e.length;i++)t=t.split(e[i][0]).join(e[i][1]);return t=t.replace(/\{\{(.*?)\}\}/g,((t,e)=>e))}on(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),this.events||(this.events=new Map),i.forEach((t=>{let i=this.events.get(t);i||(this.events.set(t,[]),i=[]),i.includes(e)||i.push(e),this.events.set(t,i)}))}off(t,e){let i=[];"string"==typeof t?i=t.split(" "):Array.isArray(t)&&(i=t),i.forEach((t=>{const i=this.events.get(t);if(Array.isArray(i)){const t=i.indexOf(e);t>-1&&i.splice(t,1)}}))}emit(t,...e){[...this.events.get(t)||[]].forEach((t=>t(this,...e))),"*"!==t&&this.emit("*",t,...e)}}Object.defineProperty(f,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.36"}),Object.defineProperty(f,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class g extends f{constructor(t={}){super(t),Object.defineProperty(this,"plugins",{enumerable:!0,configurable:!0,writable:!0,value:{}})}attachPlugins(t={}){const e=new Map;for(const[i,n]of Object.entries(t)){const t=this.option(i),s=this.plugins[i];s||!1===t?s&&!1===t&&(s.detach(),delete this.plugins[i]):e.set(i,new n(this,t||{}))}for(const[t,i]of e)this.plugins[t]=i,i.attach()}detachPlugins(t){t=t||Object.keys(this.plugins);for(const e of t){const t=this.plugins[e];t&&t.detach(),delete this.plugins[e]}return this.emit("detachPlugins"),this}}var m;!function(t){t[t.Init=0]="Init",t[t.Error=1]="Error",t[t.Ready=2]="Ready",t[t.Panning=3]="Panning",t[t.Mousemove=4]="Mousemove",t[t.Destroy=5]="Destroy"}(m||(m={}));const v=["a","b","c","d","e","f"],b={PANUP:"Move up",PANDOWN:"Move down",PANLEFT:"Move left",PANRIGHT:"Move right",ZOOMIN:"Zoom in",ZOOMOUT:"Zoom out",TOGGLEZOOM:"Toggle zoom level",TOGGLE1TO1:"Toggle zoom level",ITERATEZOOM:"Toggle zoom level",ROTATECCW:"Rotate counterclockwise",ROTATECW:"Rotate clockwise",FLIPX:"Flip horizontally",FLIPY:"Flip vertically",FITX:"Fit horizontally",FITY:"Fit vertically",RESET:"Reset",TOGGLEFS:"Toggle fullscreen"},y={content:null,width:"auto",height:"auto",panMode:"drag",touch:!0,dragMinThreshold:3,lockAxis:!1,mouseMoveFactor:1,mouseMoveFriction:.12,zoom:!0,pinchToZoom:!0,panOnlyZoomed:"auto",minScale:1,maxScale:2,friction:.25,dragFriction:.35,decelFriction:.05,click:"toggleZoom",dblClick:!1,wheel:"zoom",wheelLimit:7,spinner:!0,bounds:"auto",infinite:!1,rubberband:!0,bounce:!0,maxVelocity:75,transformParent:!1,classes:{content:"f-panzoom__content",isLoading:"is-loading",canZoomIn:"can-zoom_in",canZoomOut:"can-zoom_out",isDraggable:"is-draggable",isDragging:"is-dragging",inFullscreen:"in-fullscreen",htmlHasFullscreen:"with-panzoom-in-fullscreen"},l10n:b},w='<circle cx="25" cy="25" r="20"></circle>',x='<div class="f-spinner"><svg viewBox="0 0 50 50">'+w+w+"</svg></div>",E=t=>t&&null!==t&&t instanceof Element&&"nodeType"in t,S=(t,e)=>{t&&s(e).forEach((e=>{t.classList.remove(e)}))},P=(t,e)=>{t&&s(e).forEach((e=>{t.classList.add(e)}))},C={a:1,b:0,c:0,d:1,e:0,f:0},T=1e5,M=1e4,O="mousemove",A="drag",L="content",z="auto";let R=null,k=null;class I extends g{get fits(){return this.contentRect.width-this.contentRect.fitWidth<1&&this.contentRect.height-this.contentRect.fitHeight<1}get isTouchDevice(){return null===k&&(k=window.matchMedia("(hover: none)").matches),k}get isMobile(){return null===R&&(R=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),R}get panMode(){return this.options.panMode!==O||this.isTouchDevice?A:O}get panOnlyZoomed(){const t=this.options.panOnlyZoomed;return t===z?this.isTouchDevice:t}get isInfinite(){return this.option("infinite")}get angle(){return 180*Math.atan2(this.current.b,this.current.a)/Math.PI||0}get targetAngle(){return 180*Math.atan2(this.target.b,this.target.a)/Math.PI||0}get scale(){const{a:t,b:e}=this.current;return Math.sqrt(t*t+e*e)||1}get targetScale(){const{a:t,b:e}=this.target;return Math.sqrt(t*t+e*e)||1}get minScale(){return this.option("minScale")||1}get fullScale(){const{contentRect:t}=this;return t.fullWidth/t.fitWidth||1}get maxScale(){return this.fullScale*(this.option("maxScale")||1)||1}get coverScale(){const{containerRect:t,contentRect:e}=this,i=Math.max(t.height/e.fitHeight,t.width/e.fitWidth)||1;return Math.min(this.fullScale,i)}get isScaling(){return Math.abs(this.targetScale-this.scale)>1e-5&&!this.isResting}get isContentLoading(){const t=this.content;return!!(t&&t instanceof HTMLImageElement)&&!t.complete}get isResting(){if(this.isBouncingX||this.isBouncingY)return!1;for(const t of v){const e="e"==t||"f"===t?1e-4:1e-5;if(Math.abs(this.target[t]-this.current[t])>e)return!1}return!(!this.ignoreBounds&&!this.checkBounds().inBounds)}constructor(t,e={},i={}){var s;if(super(e),Object.defineProperty(this,"pointerTracker",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"updateTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"clickTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"rAF",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"isTicking",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"ignoreBounds",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isBouncingX",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"isBouncingY",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"clicks",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"trackingPoints",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"pwt",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"cwd",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"pmme",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"friction",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:m.Init}),Object.defineProperty(this,"isDragging",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"content",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"spinner",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"containerRect",{enumerable:!0,configurable:!0,writable:!0,value:{width:0,height:0,innerWidth:0,innerHeight:0}}),Object.defineProperty(this,"contentRect",{enumerable:!0,configurable:!0,writable:!0,value:{top:0,right:0,bottom:0,left:0,fullWidth:0,fullHeight:0,fitWidth:0,fitHeight:0,width:0,height:0}}),Object.defineProperty(this,"dragStart",{enumerable:!0,configurable:!0,writable:!0,value:{x:0,y:0,top:0,left:0,time:0}}),Object.defineProperty(this,"dragOffset",{enumerable:!0,configurable:!0,writable:!0,value:{x:0,y:0,time:0}}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:Object.assign({},C)}),Object.defineProperty(this,"target",{enumerable:!0,configurable:!0,writable:!0,value:Object.assign({},C)}),Object.defineProperty(this,"velocity",{enumerable:!0,configurable:!0,writable:!0,value:{a:0,b:0,c:0,d:0,e:0,f:0}}),Object.defineProperty(this,"lockedAxis",{enumerable:!0,configurable:!0,writable:!0,value:!1}),!t)throw new Error("Container Element Not Found");this.container=t,this.initContent(),this.attachPlugins(Object.assign(Object.assign({},I.Plugins),i)),this.emit("attachPlugins"),this.emit("init");const o=this.content;if(o.addEventListener("load",this.onLoad),o.addEventListener("error",this.onError),this.isContentLoading){if(this.option("spinner")){t.classList.add(this.cn("isLoading"));const e=n(x);!t.contains(o)||o.parentElement instanceof HTMLPictureElement?this.spinner=t.appendChild(e):this.spinner=(null===(s=o.parentElement)||void 0===s?void 0:s.insertBefore(e,o))||null}this.emit("beforeLoad")}else queueMicrotask((()=>{this.enable()}))}initContent(){const{container:t}=this,e=this.cn(L);let i=this.option(L)||t.querySelector(`.${e}`);if(i||(i=t.querySelector("img,picture")||t.firstElementChild,i&&P(i,e)),i instanceof HTMLPictureElement&&(i=i.querySelector("img")),!i)throw new Error("No content found");this.content=i}onLoad(){const{spinner:t,container:e,state:i}=this;t&&(t.remove(),this.spinner=null),this.option("spinner")&&e.classList.remove(this.cn("isLoading")),this.emit("afterLoad"),i===m.Init?this.enable():this.updateMetrics()}onError(){this.state!==m.Destroy&&(this.spinner&&(this.spinner.remove(),this.spinner=null),this.stop(),this.detachEvents(),this.state=m.Error,this.emit("error"))}getNextScale(t){const{fullScale:e,targetScale:i,coverScale:n,maxScale:s,minScale:o}=this;let a=o;switch(t){case"toggleMax":a=i-o<.5*(s-o)?s:o;break;case"toggleCover":a=i-o<.5*(n-o)?n:o;break;case"toggleZoom":a=i-o<.5*(e-o)?e:o;break;case"iterateZoom":let t=[1,e,s].sort(((t,e)=>t-e)),r=t.findIndex((t=>t>i+1e-5));a=t[r]||1}return a}attachObserver(){var t;const e=()=>{const{container:t,containerRect:e}=this;return Math.abs(e.width-t.getBoundingClientRect().width)>.1||Math.abs(e.height-t.getBoundingClientRect().height)>.1};this.resizeObserver||void 0===window.ResizeObserver||(this.resizeObserver=new ResizeObserver((()=>{this.updateTimer||(e()?(this.onResize(),this.isMobile&&(this.updateTimer=setTimeout((()=>{e()&&this.onResize(),this.updateTimer=null}),500))):this.updateTimer&&(clearTimeout(this.updateTimer),this.updateTimer=null))}))),null===(t=this.resizeObserver)||void 0===t||t.observe(this.container)}detachObserver(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}attachEvents(){const{container:t}=this;t.addEventListener("click",this.onClick,{passive:!1,capture:!1}),t.addEventListener("wheel",this.onWheel,{passive:!1}),this.pointerTracker=new l(t,{start:this.onPointerDown,move:this.onPointerMove,end:this.onPointerUp}),document.addEventListener(O,this.onMouseMove)}detachEvents(){var t;const{container:e}=this;e.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),e.removeEventListener("wheel",this.onWheel,{passive:!1}),null===(t=this.pointerTracker)||void 0===t||t.stop(),this.pointerTracker=null,document.removeEventListener(O,this.onMouseMove),document.removeEventListener("keydown",this.onKeydown,!0),this.clickTimer&&(clearTimeout(this.clickTimer),this.clickTimer=null),this.updateTimer&&(clearTimeout(this.updateTimer),this.updateTimer=null)}animate(){this.setTargetForce();const t=this.friction,e=this.option("maxVelocity");for(const i of v)t?(this.velocity[i]*=1-t,e&&!this.isScaling&&(this.velocity[i]=Math.max(Math.min(this.velocity[i],e),-1*e)),this.current[i]+=this.velocity[i]):this.current[i]=this.target[i];this.setTransform(),this.setEdgeForce(),!this.isResting||this.isDragging?this.rAF=requestAnimationFrame((()=>this.animate())):this.stop("current")}setTargetForce(){for(const t of v)"e"===t&&this.isBouncingX||"f"===t&&this.isBouncingY||(this.velocity[t]=(1/(1-this.friction)-1)*(this.target[t]-this.current[t]))}checkBounds(t=0,e=0){const{current:i}=this,n=i.e+t,s=i.f+e,o=this.getBounds(),{x:a,y:r}=o,l=a.min,c=a.max,h=r.min,d=r.max;let u=0,p=0;return l!==1/0&&n<l?u=l-n:c!==1/0&&n>c&&(u=c-n),h!==1/0&&s<h?p=h-s:d!==1/0&&s>d&&(p=d-s),Math.abs(u)<1e-4&&(u=0),Math.abs(p)<1e-4&&(p=0),Object.assign(Object.assign({},o),{xDiff:u,yDiff:p,inBounds:!u&&!p})}clampTargetBounds(){const{target:t}=this,{x:e,y:i}=this.getBounds();e.min!==1/0&&(t.e=Math.max(t.e,e.min)),e.max!==1/0&&(t.e=Math.min(t.e,e.max)),i.min!==1/0&&(t.f=Math.max(t.f,i.min)),i.max!==1/0&&(t.f=Math.min(t.f,i.max))}calculateContentDim(t=this.current){const{content:e,contentRect:i}=this,{fitWidth:n,fitHeight:s,fullWidth:o,fullHeight:a}=i;let r=o,l=a;if(this.option("zoom")||0!==this.angle){const i=!(e instanceof HTMLImageElement)&&("none"===window.getComputedStyle(e).maxWidth||"none"===window.getComputedStyle(e).maxHeight),c=i?o:n,h=i?a:s,d=this.getMatrix(t),u=new DOMPoint(0,0).matrixTransform(d),p=new DOMPoint(0+c,0).matrixTransform(d),f=new DOMPoint(0+c,0+h).matrixTransform(d),g=new DOMPoint(0,0+h).matrixTransform(d),m=Math.abs(f.x-u.x),v=Math.abs(f.y-u.y),b=Math.abs(g.x-p.x),y=Math.abs(g.y-p.y);r=Math.max(m,b),l=Math.max(v,y)}return{contentWidth:r,contentHeight:l}}setEdgeForce(){if(this.ignoreBounds||this.isDragging||this.panMode===O||this.targetScale<this.scale)return this.isBouncingX=!1,void(this.isBouncingY=!1);const{target:t}=this,{x:e,y:i,xDiff:n,yDiff:s}=this.checkBounds();const o=this.option("maxVelocity");let a=this.velocity.e,r=this.velocity.f;0!==n?(this.isBouncingX=!0,n*a<=0?a+=.14*n:(a=.14*n,e.min!==1/0&&(this.target.e=Math.max(t.e,e.min)),e.max!==1/0&&(this.target.e=Math.min(t.e,e.max))),o&&(a=Math.max(Math.min(a,o),-1*o))):this.isBouncingX=!1,0!==s?(this.isBouncingY=!0,s*r<=0?r+=.14*s:(r=.14*s,i.min!==1/0&&(this.target.f=Math.max(t.f,i.min)),i.max!==1/0&&(this.target.f=Math.min(t.f,i.max))),o&&(r=Math.max(Math.min(r,o),-1*o))):this.isBouncingY=!1,this.isBouncingX&&(this.velocity.e=a),this.isBouncingY&&(this.velocity.f=r)}enable(){const{content:t}=this,e=new DOMMatrixReadOnly(window.getComputedStyle(t).transform);for(const t of v)this.current[t]=this.target[t]=e[t];this.updateMetrics(),this.attachObserver(),this.attachEvents(),this.state=m.Ready,this.emit("ready")}onClick(t){var e;"click"===t.type&&0===t.detail&&(this.dragOffset.x=0,this.dragOffset.y=0),this.isDragging&&(null===(e=this.pointerTracker)||void 0===e||e.clear(),this.trackingPoints=[],this.startDecelAnim());const i=t.target;if(!i||t.defaultPrevented)return;if(i.hasAttribute("disabled"))return t.preventDefault(),void t.stopPropagation();if((()=>{const t=window.getSelection();return t&&"Range"===t.type})()&&!i.closest("button"))return;const n=i.closest("[data-panzoom-action]"),s=i.closest("[data-panzoom-change]"),o=n||s,a=o&&E(o)?o.dataset:null;if(a){const e=a.panzoomChange,i=a.panzoomAction;if((e||i)&&t.preventDefault(),e){let t={};try{t=JSON.parse(e)}catch(t){console&&console.warn("The given data was not valid JSON")}return void this.applyChange(t)}if(i)return void(this[i]&&this[i]())}if(Math.abs(this.dragOffset.x)>3||Math.abs(this.dragOffset.y)>3)return t.preventDefault(),void t.stopPropagation();if(i.closest("[data-fancybox]"))return;const r=this.content.getBoundingClientRect(),l=this.dragStart;if(l.time&&!this.canZoomOut()&&(Math.abs(r.x-l.x)>2||Math.abs(r.y-l.y)>2))return;this.dragStart.time=0;const c=e=>{this.option("zoom",t)&&e&&"string"==typeof e&&/(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e)&&"function"==typeof this[e]&&(t.preventDefault(),this[e]({event:t}))},h=this.option("click",t),d=this.option("dblClick",t);d?(this.clicks++,1==this.clicks&&(this.clickTimer=setTimeout((()=>{1===this.clicks?(this.emit("click",t),!t.defaultPrevented&&h&&c(h)):(this.emit("dblClick",t),t.defaultPrevented||c(d)),this.clicks=0,this.clickTimer=null}),350))):(this.emit("click",t),!t.defaultPrevented&&h&&c(h))}addTrackingPoint(t){const e=this.trackingPoints.filter((t=>t.time>Date.now()-100));e.push(t),this.trackingPoints=e}onPointerDown(t,e,i){var n;if(!1===this.option("touch",t))return!1;this.pwt=0,this.dragOffset={x:0,y:0,time:0},this.trackingPoints=[];const s=this.content.getBoundingClientRect();if(this.dragStart={x:s.x,y:s.y,top:s.top,left:s.left,time:Date.now()},this.clickTimer)return!1;if(this.panMode===O&&this.targetScale>1)return t.preventDefault(),t.stopPropagation(),!1;const o=t.composedPath()[0];if(!i.length){if(["TEXTAREA","OPTION","INPUT","SELECT","VIDEO","IFRAME"].includes(o.nodeName)||o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"))return!1;null===(n=window.getSelection())||void 0===n||n.removeAllRanges()}if("mousedown"===t.type)["A","BUTTON"].includes(o.nodeName)||t.preventDefault();else if(Math.abs(this.velocity.a)>.3)return!1;return this.target.e=this.current.e,this.target.f=this.current.f,this.stop(),this.isDragging||(this.isDragging=!0,this.addTrackingPoint(e),this.emit("touchStart",t)),!0}onPointerMove(e,n,s){if(!1===this.option("touch",e))return;if(!this.isDragging)return;if(n.length<2&&this.panOnlyZoomed&&t(this.targetScale)<=t(this.minScale))return;if(this.emit("touchMove",e),e.defaultPrevented)return;this.addTrackingPoint(n[0]);const{content:o}=this,a=h(s[0],s[1]),r=h(n[0],n[1]);let l=0,d=0;if(n.length>1){const t=o.getBoundingClientRect();l=a.clientX-t.left-.5*t.width,d=a.clientY-t.top-.5*t.height}const u=c(s[0],s[1]),p=c(n[0],n[1]);let f=u?p/u:1,g=r.clientX-a.clientX,m=r.clientY-a.clientY;this.dragOffset.x+=g,this.dragOffset.y+=m,this.dragOffset.time=Date.now()-this.dragStart.time;let v=t(this.targetScale)===t(this.minScale)&&this.option("lockAxis");if(v&&!this.lockedAxis)if("xy"===v||"y"===v||"touchmove"===e.type){if(Math.abs(this.dragOffset.x)<6&&Math.abs(this.dragOffset.y)<6)return void e.preventDefault();const t=Math.abs(180*Math.atan2(this.dragOffset.y,this.dragOffset.x)/Math.PI);this.lockedAxis=t>45&&t<135?"y":"x",this.dragOffset.x=0,this.dragOffset.y=0,g=0,m=0}else this.lockedAxis=v;if(i(e.target,this.content)&&(v="x",this.dragOffset.y=0),v&&"xy"!==v&&this.lockedAxis!==v&&t(this.targetScale)===t(this.minScale))return;e.cancelable&&e.preventDefault(),this.container.classList.add(this.cn("isDragging"));const b=this.checkBounds(g,m);this.option("rubberband")?("x"!==this.isInfinite&&(b.xDiff>0&&g<0||b.xDiff<0&&g>0)&&(g*=Math.max(0,.5-Math.abs(.75/this.contentRect.fitWidth*b.xDiff))),"y"!==this.isInfinite&&(b.yDiff>0&&m<0||b.yDiff<0&&m>0)&&(m*=Math.max(0,.5-Math.abs(.75/this.contentRect.fitHeight*b.yDiff)))):(b.xDiff&&(g=0),b.yDiff&&(m=0));const y=this.targetScale,w=this.minScale,x=this.maxScale;y<.5*w&&(f=Math.max(f,w)),y>1.5*x&&(f=Math.min(f,x)),"y"===this.lockedAxis&&t(y)===t(w)&&(g=0),"x"===this.lockedAxis&&t(y)===t(w)&&(m=0),this.applyChange({originX:l,originY:d,panX:g,panY:m,scale:f,friction:this.option("dragFriction"),ignoreBounds:!0})}onPointerUp(t,e,n){if(n.length)return this.dragOffset.x=0,this.dragOffset.y=0,void(this.trackingPoints=[]);this.container.classList.remove(this.cn("isDragging")),this.isDragging&&(this.addTrackingPoint(e),this.panOnlyZoomed&&this.contentRect.width-this.contentRect.fitWidth<1&&this.contentRect.height-this.contentRect.fitHeight<1&&(this.trackingPoints=[]),i(t.target,this.content)&&"y"===this.lockedAxis&&(this.trackingPoints=[]),this.emit("touchEnd",t),this.isDragging=!1,this.lockedAxis=!1,this.state!==m.Destroy&&(t.defaultPrevented||this.startDecelAnim()))}startDecelAnim(){var e;const i=this.isScaling;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.isBouncingX=!1,this.isBouncingY=!1;for(const t of v)this.velocity[t]=0;this.target.e=this.current.e,this.target.f=this.current.f,S(this.container,"is-scaling"),S(this.container,"is-animating"),this.isTicking=!1;const{trackingPoints:n}=this,s=n[0],o=n[n.length-1];let a=0,r=0,l=0;o&&s&&(a=o.clientX-s.clientX,r=o.clientY-s.clientY,l=o.time-s.time);const c=(null===(e=window.visualViewport)||void 0===e?void 0:e.scale)||1;1!==c&&(a*=c,r*=c);let h=0,d=0,u=0,p=0,f=this.option("decelFriction");const g=this.targetScale;if(l>0){u=Math.abs(a)>3?a/(l/30):0,p=Math.abs(r)>3?r/(l/30):0;const t=this.option("maxVelocity");t&&(u=Math.max(Math.min(u,t),-1*t),p=Math.max(Math.min(p,t),-1*t))}u&&(h=u/(1/(1-f)-1)),p&&(d=p/(1/(1-f)-1)),("y"===this.option("lockAxis")||"xy"===this.option("lockAxis")&&"y"===this.lockedAxis&&t(g)===this.minScale)&&(h=u=0),("x"===this.option("lockAxis")||"xy"===this.option("lockAxis")&&"x"===this.lockedAxis&&t(g)===this.minScale)&&(d=p=0);const m=this.dragOffset.x,b=this.dragOffset.y,y=this.option("dragMinThreshold")||0;Math.abs(m)<y&&Math.abs(b)<y&&(h=d=0,u=p=0),(this.option("zoom")&&(g<this.minScale-1e-5||g>this.maxScale+1e-5)||i&&!h&&!d)&&(f=.35),this.applyChange({panX:h,panY:d,friction:f}),this.emit("decel",u,p,m,b)}onWheel(t){var e=[-t.deltaX||0,-t.deltaY||0,-t.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t}));const i=Math.max(-1,Math.min(1,e));if(this.emit("wheel",t,i),this.panMode===O)return;if(t.defaultPrevented)return;const n=this.option("wheel");"pan"===n?(t.preventDefault(),this.panOnlyZoomed&&!this.canZoomOut()||this.applyChange({panX:2*-t.deltaX,panY:2*-t.deltaY,bounce:!1})):"zoom"===n&&!1!==this.option("zoom")&&this.zoomWithWheel(t)}onMouseMove(t){this.panWithMouse(t)}onKeydown(t){"Escape"===t.key&&this.toggleFS()}onResize(){this.updateMetrics(),this.checkBounds().inBounds||this.requestTick()}setTransform(){this.emit("beforeTransform");const{current:e,target:i,content:n,contentRect:s}=this,o=Object.assign({},C);for(const n of v){const s="e"==n||"f"===n?M:T;o[n]=t(e[n],s),Math.abs(i[n]-e[n])<("e"==n||"f"===n?.51:.001)&&(e[n]=i[n])}let{a:a,b:r,c:l,d:c,e:h,f:d}=o,u=`matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`,p=n.parentElement instanceof HTMLPictureElement?n.parentElement:n;if(this.option("transformParent")&&(p=p.parentElement||p),p.style.transform===u)return;p.style.transform=u;const{contentWidth:f,contentHeight:g}=this.calculateContentDim();s.width=f,s.height=g,this.emit("afterTransform")}updateMetrics(e=!1){var i;if(!this||this.state===m.Destroy)return;if(this.isContentLoading)return;const n=Math.max(1,(null===(i=window.visualViewport)||void 0===i?void 0:i.scale)||1),{container:s,content:o}=this,a=o instanceof HTMLImageElement,r=s.getBoundingClientRect(),l=getComputedStyle(this.container);let c=r.width*n,h=r.height*n;const d=parseFloat(l.paddingTop)+parseFloat(l.paddingBottom),u=c-(parseFloat(l.paddingLeft)+parseFloat(l.paddingRight)),p=h-d;this.containerRect={width:c,height:h,innerWidth:u,innerHeight:p};const f=parseFloat(o.dataset.width||"")||(t=>{let e=0;return e=t instanceof HTMLImageElement?t.naturalWidth:t instanceof SVGElement?t.width.baseVal.value:Math.max(t.offsetWidth,t.scrollWidth),e||0})(o),g=parseFloat(o.dataset.height||"")||(t=>{let e=0;return e=t instanceof HTMLImageElement?t.naturalHeight:t instanceof SVGElement?t.height.baseVal.value:Math.max(t.offsetHeight,t.scrollHeight),e||0})(o);let v=this.option("width",f)||z,b=this.option("height",g)||z;const y=v===z,w=b===z;"number"!=typeof v&&(v=f),"number"!=typeof b&&(b=g),y&&(v=f*(b/g)),w&&(b=g/(f/v));let x=o.parentElement instanceof HTMLPictureElement?o.parentElement:o;this.option("transformParent")&&(x=x.parentElement||x);const E=x.getAttribute("style")||"";x.style.setProperty("transform","none","important"),a&&(x.style.width="",x.style.height=""),x.offsetHeight;const S=o.getBoundingClientRect();let P=S.width*n,C=S.height*n,T=P,M=C;P=Math.min(P,v),C=Math.min(C,b),a?({width:P,height:C}=((t,e,i,n)=>{const s=i/t,o=n/e,a=Math.min(s,o);return{width:t*=a,height:e*=a}})(v,b,P,C)):(P=Math.min(P,v),C=Math.min(C,b));let O=.5*(M-C),A=.5*(T-P);this.contentRect=Object.assign(Object.assign({},this.contentRect),{top:S.top-r.top+O,bottom:r.bottom-S.bottom+O,left:S.left-r.left+A,right:r.right-S.right+A,fitWidth:P,fitHeight:C,width:P,height:C,fullWidth:v,fullHeight:b}),x.style.cssText=E,a&&(x.style.width=`${P}px`,x.style.height=`${C}px`),this.setTransform(),!0!==e&&this.emit("refresh"),this.ignoreBounds||(t(this.targetScale)<t(this.minScale)?this.zoomTo(this.minScale,{friction:0}):this.targetScale>this.maxScale?this.zoomTo(this.maxScale,{friction:0}):this.state===m.Init||this.checkBounds().inBounds||this.requestTick()),this.updateControls()}calculateBounds(){const{contentWidth:e,contentHeight:i}=this.calculateContentDim(this.target),{targetScale:n,lockedAxis:s}=this,{fitWidth:o,fitHeight:a}=this.contentRect;let r=0,l=0,c=0,h=0;const d=this.option("infinite");if(!0===d||s&&d===s)r=-1/0,c=1/0,l=-1/0,h=1/0;else{let{containerRect:s,contentRect:d}=this,u=t(o*n,M),p=t(a*n,M),{innerWidth:f,innerHeight:g}=s;if(s.width===u&&(f=s.width),s.width===p&&(g=s.height),e>f){c=.5*(e-f),r=-1*c;let t=.5*(d.right-d.left);r+=t,c+=t}if(o>f&&e<f&&(r-=.5*(o-f),c-=.5*(o-f)),i>g){h=.5*(i-g),l=-1*h;let t=.5*(d.bottom-d.top);l+=t,h+=t}a>g&&i<g&&(r-=.5*(a-g),c-=.5*(a-g))}return{x:{min:r,max:c},y:{min:l,max:h}}}getBounds(){const t=this.option("bounds");return t!==z?t:this.calculateBounds()}updateControls(){const e=this,i=e.container,{panMode:n,contentRect:s,targetScale:a,minScale:r}=e;let l=r,c=e.option("click")||!1;c&&(l=e.getNextScale(c));let h=e.canZoomIn(),d=e.canZoomOut(),u=n===A&&!!this.option("touch"),p=d&&u;if(u&&(t(a)<t(r)&&!this.panOnlyZoomed&&(p=!0),(t(s.width,1)>t(s.fitWidth,1)||t(s.height,1)>t(s.fitHeight,1))&&(p=!0)),t(s.width*a,1)<t(s.fitWidth,1)&&(p=!1),n===O&&(p=!1),o(i,this.cn("isDraggable"),p),!this.option("zoom"))return;let f=h&&t(l)>t(a),g=!f&&!p&&d&&t(l)<t(a);o(i,this.cn("canZoomIn"),f),o(i,this.cn("canZoomOut"),g);for(const t of i.querySelectorAll("[data-panzoom-action]")){let e=!1,i=!1;switch(t.dataset.panzoomAction){case"zoomIn":h?e=!0:i=!0;break;case"zoomOut":d?e=!0:i=!0;break;case"toggleZoom":case"iterateZoom":h||d?e=!0:i=!0;const n=t.querySelector("g");n&&(n.style.display=h?"":"none")}e?(t.removeAttribute("disabled"),t.removeAttribute("tabindex")):i&&(t.setAttribute("disabled",""),t.setAttribute("tabindex","-1"))}}panTo({x:t=this.target.e,y:e=this.target.f,scale:i=this.targetScale,friction:n=this.option("friction"),angle:s=0,originX:o=0,originY:a=0,flipX:r=!1,flipY:l=!1,ignoreBounds:c=!1}){this.state!==m.Destroy&&this.applyChange({panX:t-this.target.e,panY:e-this.target.f,scale:i/this.targetScale,angle:s,originX:o,originY:a,friction:n,flipX:r,flipY:l,ignoreBounds:c})}applyChange({panX:e=0,panY:i=0,scale:n=1,angle:s=0,originX:o=-this.current.e,originY:a=-this.current.f,friction:r=this.option("friction"),flipX:l=!1,flipY:c=!1,ignoreBounds:h=!1,bounce:d=this.option("bounce")}){const u=this.state;if(u===m.Destroy)return;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.friction=r||0,this.ignoreBounds=h;const{current:p}=this,f=p.e,g=p.f,b=this.getMatrix(this.target);let y=(new DOMMatrix).translate(f,g).translate(o,a).translate(e,i);if(this.option("zoom")){if(!h){const t=this.targetScale,e=this.minScale,i=this.maxScale;t*n<e&&(n=e/t),t*n>i&&(n=i/t)}y=y.scale(n)}y=y.translate(-o,-a).translate(-f,-g).multiply(b),s&&(y=y.rotate(s)),l&&(y=y.scale(-1,1)),c&&(y=y.scale(1,-1));for(const e of v)"e"!==e&&"f"!==e&&(y[e]>this.minScale+1e-5||y[e]<this.minScale-1e-5)?this.target[e]=y[e]:this.target[e]=t(y[e],M);(this.targetScale<this.scale||Math.abs(n-1)>.1||this.panMode===O||!1===d)&&!h&&this.clampTargetBounds(),u===m.Init?this.animate():this.isResting||(this.state=m.Panning,this.requestTick())}stop(t=!1){if(this.state===m.Init||this.state===m.Destroy)return;const e=this.isTicking;this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null),this.isBouncingX=!1,this.isBouncingY=!1;for(const e of v)this.velocity[e]=0,"current"===t?this.current[e]=this.target[e]:"target"===t&&(this.target[e]=this.current[e]);this.setTransform(),S(this.container,"is-scaling"),S(this.container,"is-animating"),this.isTicking=!1,this.state=m.Ready,e&&(this.emit("endAnimation"),this.updateControls())}requestTick(){this.isTicking||(this.emit("startAnimation"),this.updateControls(),P(this.container,"is-animating"),this.isScaling&&P(this.container,"is-scaling")),this.isTicking=!0,this.rAF||(this.rAF=requestAnimationFrame((()=>this.animate())))}panWithMouse(e,i=this.option("mouseMoveFriction")){if(this.pmme=e,this.panMode!==O||!e)return;if(t(this.targetScale)<=t(this.minScale))return;this.emit("mouseMove",e);const{container:n,containerRect:s,contentRect:o}=this,a=s.width,r=s.height,l=n.getBoundingClientRect(),c=(e.clientX||0)-l.left,h=(e.clientY||0)-l.top;let{contentWidth:d,contentHeight:u}=this.calculateContentDim(this.target);const p=this.option("mouseMoveFactor");p>1&&(d!==a&&(d*=p),u!==r&&(u*=p));let f=.5*(d-a)-c/a*100/100*(d-a);f+=.5*(o.right-o.left);let g=.5*(u-r)-h/r*100/100*(u-r);g+=.5*(o.bottom-o.top),this.applyChange({panX:f-this.target.e,panY:g-this.target.f,friction:i})}zoomWithWheel(e){if(this.state===m.Destroy||this.state===m.Init)return;const i=Date.now();if(i-this.pwt<45)return void e.preventDefault();this.pwt=i;var n=[-e.deltaX||0,-e.deltaY||0,-e.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t}));const s=Math.max(-1,Math.min(1,n)),{targetScale:o,maxScale:a,minScale:r}=this;let l=o*(100+45*s)/100;t(l)<t(r)&&t(o)<=t(r)?(this.cwd+=Math.abs(s),l=r):t(l)>t(a)&&t(o)>=t(a)?(this.cwd+=Math.abs(s),l=a):(this.cwd=0,l=Math.max(Math.min(l,a),r)),this.cwd>this.option("wheelLimit")||(e.preventDefault(),t(l)!==t(o)&&this.zoomTo(l,{event:e}))}canZoomIn(){return this.option("zoom")&&(t(this.contentRect.width,1)<t(this.contentRect.fitWidth,1)||t(this.targetScale)<t(this.maxScale))}canZoomOut(){return this.option("zoom")&&t(this.targetScale)>t(this.minScale)}zoomIn(t=1.25,e){this.zoomTo(this.targetScale*t,e)}zoomOut(t=.8,e){this.zoomTo(this.targetScale*t,e)}zoomToFit(t){this.zoomTo("fit",t)}zoomToCover(t){this.zoomTo("cover",t)}zoomToFull(t){this.zoomTo("full",t)}zoomToMax(t){this.zoomTo("max",t)}toggleZoom(t){this.zoomTo(this.getNextScale("toggleZoom"),t)}toggleMax(t){this.zoomTo(this.getNextScale("toggleMax"),t)}toggleCover(t){this.zoomTo(this.getNextScale("toggleCover"),t)}iterateZoom(t){this.zoomTo("next",t)}zoomTo(t=1,{friction:e=z,originX:i=z,originY:n=z,event:s}={}){if(this.isContentLoading||this.state===m.Destroy)return;const{targetScale:o,fullScale:a,maxScale:r,coverScale:l}=this;if(this.stop(),this.panMode===O&&(s=this.pmme||s),s||i===z||n===z){const t=this.content.getBoundingClientRect(),e=this.container.getBoundingClientRect(),o=s?s.clientX:e.left+.5*e.width,a=s?s.clientY:e.top+.5*e.height;i=o-t.left-.5*t.width,n=a-t.top-.5*t.height}let c=1;"number"==typeof t?c=t:"full"===t?c=a:"cover"===t?c=l:"max"===t?c=r:"fit"===t?c=1:"next"===t&&(c=this.getNextScale("iterateZoom")),c=c/o||1,e=e===z?c>1?.15:.25:e,this.applyChange({scale:c,originX:i,originY:n,friction:e}),s&&this.panMode===O&&this.panWithMouse(s,e)}rotateCCW(){this.applyChange({angle:-90})}rotateCW(){this.applyChange({angle:90})}flipX(){this.applyChange({flipX:!0})}flipY(){this.applyChange({flipY:!0})}fitX(){this.stop("target");const{containerRect:t,contentRect:e,target:i}=this;this.applyChange({panX:.5*t.width-(e.left+.5*e.fitWidth)-i.e,panY:.5*t.height-(e.top+.5*e.fitHeight)-i.f,scale:t.width/e.fitWidth/this.targetScale,originX:0,originY:0,ignoreBounds:!0})}fitY(){this.stop("target");const{containerRect:t,contentRect:e,target:i}=this;this.applyChange({panX:.5*t.width-(e.left+.5*e.fitWidth)-i.e,panY:.5*t.innerHeight-(e.top+.5*e.fitHeight)-i.f,scale:t.height/e.fitHeight/this.targetScale,originX:0,originY:0,ignoreBounds:!0})}toggleFS(){const{container:t}=this,e=this.cn("inFullscreen"),i=this.cn("htmlHasFullscreen");t.classList.toggle(e);const n=t.classList.contains(e);n?(document.documentElement.classList.add(i),document.addEventListener("keydown",this.onKeydown,!0)):(document.documentElement.classList.remove(i),document.removeEventListener("keydown",this.onKeydown,!0)),this.updateMetrics(),this.emit(n?"enterFS":"exitFS")}getMatrix(t=this.current){const{a:e,b:i,c:n,d:s,e:o,f:a}=t;return new DOMMatrix([e,i,n,s,o,a])}reset(t){if(this.state!==m.Init&&this.state!==m.Destroy){this.stop("current");for(const t of v)this.target[t]=C[t];this.target.a=this.minScale,this.target.d=this.minScale,this.clampTargetBounds(),this.isResting||(this.friction=void 0===t?this.option("friction"):t,this.state=m.Panning,this.requestTick())}}destroy(){this.stop(),this.state=m.Destroy,this.detachEvents(),this.detachObserver();const{container:t,content:e}=this,i=this.option("classes")||{};for(const e of Object.values(i))t.classList.remove(e+"");e&&(e.removeEventListener("load",this.onLoad),e.removeEventListener("error",this.onError)),this.detachPlugins()}}Object.defineProperty(I,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:y}),Object.defineProperty(I,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:{}});const D=function(t,e){let i=!0;return(...n)=>{i&&(i=!1,t(...n),setTimeout((()=>{i=!0}),e))}},F=(t,e)=>{let i=[];return t.childNodes.forEach((t=>{t.nodeType!==Node.ELEMENT_NODE||e&&!t.matches(e)||i.push(t)})),i},j={viewport:null,track:null,enabled:!0,slides:[],axis:"x",transition:"fade",preload:1,slidesPerPage:"auto",initialPage:0,friction:.12,Panzoom:{decelFriction:.12},center:!0,infinite:!0,fill:!0,dragFree:!1,adaptiveHeight:!1,direction:"ltr",classes:{container:"f-carousel",viewport:"f-carousel__viewport",track:"f-carousel__track",slide:"f-carousel__slide",isLTR:"is-ltr",isRTL:"is-rtl",isHorizontal:"is-horizontal",isVertical:"is-vertical",inTransition:"in-transition",isSelected:"is-selected"},l10n:{NEXT:"Next slide",PREV:"Previous slide",GOTO:"Go to slide #%d"}};var B;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Destroy=2]="Destroy"}(B||(B={}));const H=t=>{if("string"==typeof t||t instanceof HTMLElement)t={html:t};else{const e=t.thumb;void 0!==e&&("string"==typeof e&&(t.thumbSrc=e),e instanceof HTMLImageElement&&(t.thumbEl=e,t.thumbElSrc=e.src,t.thumbSrc=e.src),delete t.thumb)}return Object.assign({html:"",el:null,isDom:!1,class:"",customClass:"",index:-1,dim:0,gap:0,pos:0,transition:!1},t)},N=(t={})=>Object.assign({index:-1,slides:[],dim:0,pos:-1},t);class _ extends f{constructor(t,e){super(e),Object.defineProperty(this,"instance",{enumerable:!0,configurable:!0,writable:!0,value:t})}attach(){}detach(){}}const $={classes:{list:"f-carousel__dots",isDynamic:"is-dynamic",hasDots:"has-dots",dot:"f-carousel__dot",isBeforePrev:"is-before-prev",isPrev:"is-prev",isCurrent:"is-current",isNext:"is-next",isAfterNext:"is-after-next"},dotTpl:'<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',dynamicFrom:11,maxCount:1/0,minCount:2};class W extends _{constructor(){super(...arguments),Object.defineProperty(this,"isDynamic",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"list",{enumerable:!0,configurable:!0,writable:!0,value:null})}onRefresh(){this.refresh()}build(){let t=this.list;if(!t){t=document.createElement("ul"),P(t,this.cn("list")),t.setAttribute("role","tablist");const e=this.instance.container;e.appendChild(t),P(e,this.cn("hasDots")),this.list=t}return t}refresh(){var t;const e=this.instance.pages.length,i=Math.min(2,this.option("minCount")),n=Math.max(2e3,this.option("maxCount")),s=this.option("dynamicFrom");if(e<i||e>n)return void this.cleanup();const a="number"==typeof s&&e>5&&e>=s,r=!this.list||this.isDynamic!==a||this.list.children.length!==e;r&&this.cleanup();const l=this.build();if(o(l,this.cn("isDynamic"),!!a),r)for(let t=0;t<e;t++)l.append(this.createItem(t));let c,h=0;for(const e of[...l.children]){const i=h===this.instance.page;i&&(c=e),o(e,this.cn("isCurrent"),i),null===(t=e.children[0])||void 0===t||t.setAttribute("aria-selected",i?"true":"false");for(const t of["isBeforePrev","isPrev","isNext","isAfterNext"])S(e,this.cn(t));h++}if(c=c||l.firstChild,a&&c){const t=c.previousElementSibling,e=t&&t.previousElementSibling;P(t,this.cn("isPrev")),P(e,this.cn("isBeforePrev"));const i=c.nextElementSibling,n=i&&i.nextElementSibling;P(i,this.cn("isNext")),P(n,this.cn("isAfterNext"))}this.isDynamic=a}createItem(t=0){var e;const i=document.createElement("li");i.setAttribute("role","presentation");const s=n(this.instance.localize(this.option("dotTpl"),[["%d",t+1]]).replace(/\%i/g,t+""));return i.appendChild(s),null===(e=i.children[0])||void 0===e||e.setAttribute("role","tab"),i}cleanup(){this.list&&(this.list.remove(),this.list=null),this.isDynamic=!1,S(this.instance.container,this.cn("hasDots"))}attach(){this.instance.on(["refresh","change"],this.onRefresh)}detach(){this.instance.off(["refresh","change"],this.onRefresh),this.cleanup()}}Object.defineProperty(W,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:$});const X="disabled",q="next",Y="prev";class V extends _{constructor(){super(...arguments),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"prev",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"next",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"isDom",{enumerable:!0,configurable:!0,writable:!0,value:!1})}onRefresh(){const t=this.instance,e=t.pages.length,i=t.page;if(e<2)return void this.cleanup();this.build();let n=this.prev,s=this.next;n&&s&&(n.removeAttribute(X),s.removeAttribute(X),t.isInfinite||(i<=0&&n.setAttribute(X,""),i>=e-1&&s.setAttribute(X,"")))}addBtn(t){var e;const i=this.instance,n=document.createElement("button");n.setAttribute("tabindex","0"),n.setAttribute("title",i.localize(`{{${t.toUpperCase()}}}`)),P(n,this.cn("button")+" "+this.cn(t===q?"isNext":"isPrev"));const s=i.isRTL?t===q?Y:q:t;var o;return n.innerHTML=i.localize(this.option(`${s}Tpl`)),n.dataset[`carousel${o=t,o?o.match("^[a-z]")?o.charAt(0).toUpperCase()+o.substring(1):o:""}`]="true",null===(e=this.container)||void 0===e||e.appendChild(n),n}build(){const t=this.instance.container,e=this.cn("container");let{container:i,prev:n,next:s}=this;i||(i=t.querySelector("."+e),this.isDom=!!i),i||(i=document.createElement("div"),P(i,e),t.appendChild(i)),this.container=i,s||(s=i.querySelector("[data-carousel-next]")),s||(s=this.addBtn(q)),this.next=s,n||(n=i.querySelector("[data-carousel-prev]")),n||(n=this.addBtn(Y)),this.prev=n}cleanup(){this.isDom||(this.prev&&this.prev.remove(),this.next&&this.next.remove(),this.container&&this.container.remove()),this.prev=null,this.next=null,this.container=null,this.isDom=!1}attach(){this.instance.on(["refresh","change"],this.onRefresh)}detach(){this.instance.off(["refresh","change"],this.onRefresh),this.cleanup()}}Object.defineProperty(V,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{classes:{container:"f-carousel__nav",button:"f-button",isNext:"is-next",isPrev:"is-prev"},nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'}});class Z extends _{constructor(){super(...arguments),Object.defineProperty(this,"selectedIndex",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"target",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nav",{enumerable:!0,configurable:!0,writable:!0,value:null})}addAsTargetFor(t){this.target=this.instance,this.nav=t,this.attachEvents()}addAsNavFor(t){this.nav=this.instance,this.target=t,this.attachEvents()}attachEvents(){const{nav:t,target:e}=this;t&&e&&(t.options.initialSlide=e.options.initialPage,t.state===B.Ready?this.onNavReady(t):t.on("ready",this.onNavReady),e.state===B.Ready?this.onTargetReady(e):e.on("ready",this.onTargetReady))}onNavReady(t){t.on("createSlide",this.onNavCreateSlide),t.on("Panzoom.click",this.onNavClick),t.on("Panzoom.touchEnd",this.onNavTouch),this.onTargetChange()}onTargetReady(t){t.on("change",this.onTargetChange),t.on("Panzoom.refresh",this.onTargetChange),this.onTargetChange()}onNavClick(t,e,i){this.onNavTouch(t,t.panzoom,i)}onNavTouch(t,e,i){var n,s;if(Math.abs(e.dragOffset.x)>3||Math.abs(e.dragOffset.y)>3)return;const o=i.target,{nav:a,target:r}=this;if(!a||!r||!o)return;const l=o.closest("[data-index]");if(i.stopPropagation(),i.preventDefault(),!l)return;const c=parseInt(l.dataset.index||"",10)||0,h=r.getPageForSlide(c),d=a.getPageForSlide(c);a.slideTo(d),r.slideTo(h,{friction:(null===(s=null===(n=this.nav)||void 0===n?void 0:n.plugins)||void 0===s?void 0:s.Sync.option("friction"))||0}),this.markSelectedSlide(c)}onNavCreateSlide(t,e){e.index===this.selectedIndex&&this.markSelectedSlide(e.index)}onTargetChange(){var t,e;const{target:i,nav:n}=this;if(!i||!n)return;if(n.state!==B.Ready||i.state!==B.Ready)return;const s=null===(e=null===(t=i.pages[i.page])||void 0===t?void 0:t.slides[0])||void 0===e?void 0:e.index,o=n.getPageForSlide(s);this.markSelectedSlide(s),n.slideTo(o,null===n.prevPage&&null===i.prevPage?{friction:0}:void 0)}markSelectedSlide(t){const e=this.nav;e&&e.state===B.Ready&&(this.selectedIndex=t,[...e.slides].map((e=>{e.el&&e.el.classList[e.index===t?"add":"remove"]("is-nav-selected")})))}attach(){const t=this;let e=t.options.target,i=t.options.nav;e?t.addAsNavFor(e):i&&t.addAsTargetFor(i)}detach(){const t=this,e=t.nav,i=t.target;e&&(e.off("ready",t.onNavReady),e.off("createSlide",t.onNavCreateSlide),e.off("Panzoom.click",t.onNavClick),e.off("Panzoom.touchEnd",t.onNavTouch)),t.nav=null,i&&(i.off("ready",t.onTargetReady),i.off("refresh",t.onTargetChange),i.off("change",t.onTargetChange)),t.target=null}}Object.defineProperty(Z,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{friction:.35}});const U={Navigation:V,Dots:W,Sync:Z},G="animationend",K="isSelected",J="slide";class Q extends g{get axis(){return this.isHorizontal?"e":"f"}get isEnabled(){return this.state===B.Ready}get isInfinite(){let t=!1;const{contentDim:e,viewportDim:i,pages:n,slides:s}=this,o=s[0];return n.length>=2&&o&&e+o.dim>=i&&(t=this.option("infinite")),t}get isRTL(){return"rtl"===this.option("direction")}get isHorizontal(){return"x"===this.option("axis")}constructor(t,e={},i={}){if(super(),Object.defineProperty(this,"bp",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"lp",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"userOptions",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"userPlugins",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:B.Init}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"prevPage",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"viewport",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"slides",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"pages",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"panzoom",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"inTransition",{enumerable:!0,configurable:!0,writable:!0,value:new Set}),Object.defineProperty(this,"contentDim",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"viewportDim",{enumerable:!0,configurable:!0,writable:!0,value:0}),"string"==typeof t&&(t=document.querySelector(t)),!t||!E(t))throw new Error("No Element found");this.container=t,this.slideNext=D(this.slideNext.bind(this),150),this.slidePrev=D(this.slidePrev.bind(this),150),this.userOptions=e,this.userPlugins=i,queueMicrotask((()=>{this.processOptions()}))}processOptions(){var t,e;const i=u({},Q.defaults,this.userOptions);let n="";const s=i.breakpoints;if(s&&d(s))for(const[t,e]of Object.entries(s))window.matchMedia(t).matches&&d(e)&&(n+=t,u(i,e));n===this.bp&&this.state!==B.Init||(this.bp=n,this.state===B.Ready&&(i.initialSlide=(null===(e=null===(t=this.pages[this.page])||void 0===t?void 0:t.slides[0])||void 0===e?void 0:e.index)||0),this.state!==B.Init&&this.destroy(),super.setOptions(i),!1===this.option("enabled")?this.attachEvents():setTimeout((()=>{this.init()}),0))}init(){this.state=B.Init,this.emit("init"),this.attachPlugins(Object.assign(Object.assign({},Q.Plugins),this.userPlugins)),this.emit("attachPlugins"),this.initLayout(),this.initSlides(),this.updateMetrics(),this.setInitialPosition(),this.initPanzoom(),this.attachEvents(),this.state=B.Ready,this.emit("ready")}initLayout(){const{container:t}=this,e=this.option("classes");P(t,this.cn("container")),o(t,e.isLTR,!this.isRTL),o(t,e.isRTL,this.isRTL),o(t,e.isVertical,!this.isHorizontal),o(t,e.isHorizontal,this.isHorizontal);let i=this.option("viewport")||t.querySelector(`.${e.viewport}`);i||(i=document.createElement("div"),P(i,e.viewport),i.append(...F(t,`.${e.slide}`)),t.prepend(i)),i.addEventListener("scroll",this.onScroll);let n=this.option("track")||t.querySelector(`.${e.track}`);n||(n=document.createElement("div"),P(n,e.track),n.append(...Array.from(i.childNodes))),n.setAttribute("aria-live","polite"),i.contains(n)||i.prepend(n),this.viewport=i,this.track=n,this.emit("initLayout")}initSlides(){const{track:t}=this;if(!t)return;const e=[...this.slides],i=[];[...F(t,`.${this.cn(J)}`)].forEach((t=>{if(E(t)){const e=H({el:t,isDom:!0,index:this.slides.length});i.push(e)}}));for(let t of[...this.option("slides",[])||[],...e])i.push(H(t));this.slides=i;for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;for(const t of i)this.emit("beforeInitSlide",t,t.index),this.emit("initSlide",t,t.index);this.emit("initSlides")}setInitialPage(){const t=this.option("initialSlide");this.page="number"==typeof t?this.getPageForSlide(t):parseInt(this.option("initialPage",0)+"",10)||0}setInitialPosition(){const{track:t,pages:e,isHorizontal:i}=this;if(!t||!e.length)return;let n=this.page;e[n]||(this.page=n=0);const s=(e[n].pos||0)*(this.isRTL&&i?1:-1),o=i?`${s}px`:"0",a=i?"0":`${s}px`;t.style.transform=`translate3d(${o}, ${a}, 0) scale(1)`,this.option("adaptiveHeight")&&this.setViewportHeight()}initPanzoom(){this.panzoom&&(this.panzoom.destroy(),this.panzoom=null);const t=this.option("Panzoom")||{};this.panzoom=new I(this.viewport,u({},{content:this.track,zoom:!1,panOnlyZoomed:!1,lockAxis:this.isHorizontal?"x":"y",infinite:this.isInfinite,click:!1,dblClick:!1,touch:t=>!(this.pages.length<2&&!t.options.infinite),bounds:()=>this.getBounds(),maxVelocity:t=>Math.abs(t.target[this.axis]-t.current[this.axis])<2*this.viewportDim?100:0},t)),this.panzoom.on("*",((t,e,...i)=>{this.emit(`Panzoom.${e}`,t,...i)})),this.panzoom.on("decel",this.onDecel),this.panzoom.on("refresh",this.onRefresh),this.panzoom.on("beforeTransform",this.onBeforeTransform),this.panzoom.on("endAnimation",this.onEndAnimation)}attachEvents(){const t=this.container;t&&(t.addEventListener("click",this.onClick,{passive:!1,capture:!1}),t.addEventListener("slideTo",this.onSlideTo)),window.addEventListener("resize",this.onResize)}createPages(){let t=[];const{contentDim:e,viewportDim:i}=this;let n=this.option("slidesPerPage");n=("auto"===n||e<=i)&&!1!==this.option("fill")?1/0:parseFloat(n+"");let s=0,o=0,a=0;for(const e of this.slides)(!t.length||o+e.dim-i>.05||a>=n)&&(t.push(N()),s=t.length-1,o=0,a=0),t[s].slides.push(e),o+=e.dim+e.gap,a++;return t}processPages(){const e=this.pages,{contentDim:i,viewportDim:n,isInfinite:s}=this,o=this.option("center"),a=this.option("fill"),r=a&&o&&i>n&&!s;if(e.forEach(((t,e)=>{var s;t.index=e,t.pos=(null===(s=t.slides[0])||void 0===s?void 0:s.pos)||0,t.dim=0;for(const[e,i]of t.slides.entries())t.dim+=i.dim,e<t.slides.length-1&&(t.dim+=i.gap);r&&t.pos+.5*t.dim<.5*n?t.pos=0:r&&t.pos+.5*t.dim>=i-.5*n?t.pos=i-n:o&&(t.pos+=-.5*(n-t.dim))})),e.forEach((e=>{a&&!s&&i>n&&(e.pos=Math.max(e.pos,0),e.pos=Math.min(e.pos,i-n)),e.pos=t(e.pos,1e3),e.dim=t(e.dim,1e3),Math.abs(e.pos)<=.1&&(e.pos=0)})),s)return e;const l=[];let c;return e.forEach((t=>{const e=Object.assign({},t);c&&e.pos===c.pos?(c.dim+=e.dim,c.slides=[...c.slides,...e.slides]):(e.index=l.length,c=e,l.push(e))})),l}getPageFromIndex(t=0){const e=this.pages.length;let i;return t=parseInt((t||0).toString())||0,i=this.isInfinite?(t%e+e)%e:Math.max(Math.min(t,e-1),0),i}getSlideMetrics(e){var i,n;const s=this.isHorizontal?"width":"height";let o=0,a=0,r=e.el;const l=!(!r||r.parentNode);if(r?o=parseFloat(r.dataset[s]||"")||0:(r=document.createElement("div"),r.style.visibility="hidden",(this.track||document.body).prepend(r)),P(r,this.cn(J)+" "+e.class+" "+e.customClass),o)r.style[s]=`${o}px`,r.style["width"===s?"height":"width"]="";else{l&&(this.track||document.body).prepend(r),o=r.getBoundingClientRect()[s]*Math.max(1,(null===(i=window.visualViewport)||void 0===i?void 0:i.scale)||1);let t=r[this.isHorizontal?"offsetWidth":"offsetHeight"];t-1>o&&(o=t)}const c=getComputedStyle(r);return"content-box"===c.boxSizing&&(this.isHorizontal?(o+=parseFloat(c.paddingLeft)||0,o+=parseFloat(c.paddingRight)||0):(o+=parseFloat(c.paddingTop)||0,o+=parseFloat(c.paddingBottom)||0)),a=parseFloat(c[this.isHorizontal?"marginRight":"marginBottom"])||0,l?null===(n=r.parentElement)||void 0===n||n.removeChild(r):e.el||r.remove(),{dim:t(o,1e3),gap:t(a,1e3)}}getBounds(){const{isInfinite:t,isRTL:e,isHorizontal:i,pages:n}=this;let s={min:0,max:0};if(t)s={min:-1/0,max:1/0};else if(n.length){const t=n[0].pos,o=n[n.length-1].pos;s=e&&i?{min:t,max:o}:{min:-1*o,max:-1*t}}return{x:i?s:{min:0,max:0},y:i?{min:0,max:0}:s}}repositionSlides(){let e,{isHorizontal:i,isRTL:n,isInfinite:s,viewport:o,viewportDim:a,contentDim:r,page:l,pages:c,slides:h,panzoom:d}=this,u=0,p=0,f=0,g=0;d?g=-1*d.current[this.axis]:c[l]&&(g=c[l].pos||0),e=i?n?"right":"left":"top",n&&i&&(g*=-1);for(const i of h){const n=i.el;n?("top"===e?(n.style.right="",n.style.left=""):n.style.top="",i.index!==u?n.style[e]=0===p?"":`${t(p,1e3)}px`:n.style[e]="",f+=i.dim+i.gap,u++):p+=i.dim+i.gap}if(s&&f&&o){let n=getComputedStyle(o),s="padding",l=i?"Right":"Bottom",c=parseFloat(n[s+(i?"Left":"Top")]);g-=c,a+=c,a+=parseFloat(n[s+l]);for(const i of h)i.el&&(t(i.pos)<t(a)&&t(i.pos+i.dim+i.gap)<t(g)&&t(g)>t(r-a)&&(i.el.style[e]=`${t(p+f,1e3)}px`),t(i.pos+i.gap)>=t(r-a)&&t(i.pos)>t(g+a)&&t(g)<t(a)&&(i.el.style[e]=`-${t(f,1e3)}px`))}let m,v,b=[...this.inTransition];if(b.length>1&&(m=c[b[0]],v=c[b[1]]),m&&v){let i=0;for(const n of h)n.el?this.inTransition.has(n.index)&&m.slides.indexOf(n)<0&&(n.el.style[e]=`${t(i+(m.pos-v.pos),1e3)}px`):i+=n.dim+n.gap}}createSlideEl(t){const{track:e,slides:i}=this;if(!e||!t)return;if(t.el&&t.el.parentNode)return;const n=t.el||document.createElement("div");P(n,this.cn(J)),P(n,t.class),P(n,t.customClass);const s=t.html;s&&(s instanceof HTMLElement?n.appendChild(s):n.innerHTML=t.html+"");const o=[];i.forEach(((t,e)=>{t.el&&o.push(e)}));const a=t.index;let r=null;if(o.length){r=i[o.reduce(((t,e)=>Math.abs(e-a)<Math.abs(t-a)?e:t))]}const l=r&&r.el&&r.el.parentNode?r.index<t.index?r.el.nextSibling:r.el:null;e.insertBefore(n,e.contains(l)?l:null),t.el=n,this.emit("createSlide",t)}removeSlideEl(t,e=!1){const i=null==t?void 0:t.el;if(!i||!i.parentNode)return;const n=this.cn(K);if(i.classList.contains(n)&&(S(i,n),this.emit("unselectSlide",t)),t.isDom&&!e)return i.removeAttribute("aria-hidden"),i.removeAttribute("data-index"),void(i.style.left="");this.emit("removeSlide",t);const s=new CustomEvent(G);i.dispatchEvent(s),t.el&&(t.el.remove(),t.el=null)}transitionTo(t=0,e=this.option("transition")){var i,n,s,o;if(!e)return!1;const a=this.page,{pages:r,panzoom:l}=this;t=parseInt((t||0).toString())||0;const c=this.getPageFromIndex(t);if(!l||!r[c]||r.length<2||Math.abs(((null===(n=null===(i=r[a])||void 0===i?void 0:i.slides[0])||void 0===n?void 0:n.dim)||0)-this.viewportDim)>1)return!1;let h=t>a?1:-1;this.isInfinite&&(0===a&&t===r.length-1&&(h=-1),a===r.length-1&&0===t&&(h=1));const d=r[c].pos*(this.isRTL?1:-1);if(a===c&&Math.abs(d-l.target[this.axis])<1)return!1;this.clearTransitions();const u=l.isResting;P(this.container,this.cn("inTransition"));const p=(null===(s=r[a])||void 0===s?void 0:s.slides[0])||null,f=(null===(o=r[c])||void 0===o?void 0:o.slides[0])||null;this.inTransition.add(f.index),this.createSlideEl(f);let g=p.el,m=f.el;u||e===J||(e="fadeFast",g=null);const v=this.isRTL?"next":"prev",b=this.isRTL?"prev":"next";return g&&(this.inTransition.add(p.index),p.transition=e,g.addEventListener(G,this.onAnimationEnd),g.classList.add(`f-${e}Out`,`to-${h>0?b:v}`)),m&&(f.transition=e,m.addEventListener(G,this.onAnimationEnd),m.classList.add(`f-${e}In`,`from-${h>0?v:b}`)),l.current[this.axis]=d,l.target[this.axis]=d,l.requestTick(),this.onChange(c),!0}manageSlideVisiblity(){const t=new Set,e=new Set,i=this.getVisibleSlides(parseFloat(this.option("preload",0)+"")||0);for(const n of this.slides)i.has(n)?t.add(n):e.add(n);for(const e of this.inTransition)t.add(this.slides[e]);for(const e of t)this.createSlideEl(e),this.lazyLoadSlide(e);for(const i of e)t.has(i)||this.removeSlideEl(i);this.markSelectedSlides(),this.repositionSlides()}markSelectedSlides(){if(!this.pages[this.page]||!this.pages[this.page].slides)return;const t="aria-hidden";let e=this.cn(K);if(e)for(const i of this.slides){const n=i.el;n&&(n.dataset.index=`${i.index}`,n.classList.contains("f-thumbs__slide")?this.getVisibleSlides(0).has(i)?n.removeAttribute(t):n.setAttribute(t,"true"):this.pages[this.page].slides.includes(i)?(n.classList.contains(e)||(P(n,e),this.emit("selectSlide",i)),n.removeAttribute(t)):(n.classList.contains(e)&&(S(n,e),this.emit("unselectSlide",i)),n.setAttribute(t,"true")))}}flipInfiniteTrack(){const{axis:t,isHorizontal:e,isInfinite:i,isRTL:n,viewportDim:s,contentDim:o}=this,a=this.panzoom;if(!a||!i)return;let r=a.current[t],l=a.target[t]-r,c=0,h=.5*s;n&&e?(r<-h&&(c=-1,r+=o),r>o-h&&(c=1,r-=o)):(r>h&&(c=1,r-=o),r<-o+h&&(c=-1,r+=o)),c&&(a.current[t]=r,a.target[t]=r+l)}lazyLoadImg(t,e){const i=this,s="f-fadeIn",o="is-preloading";let a=!1,r=null;const l=()=>{a||(a=!0,r&&(r.remove(),r=null),S(e,o),e.complete&&(P(e,s),setTimeout((()=>{S(e,s)}),350)),this.option("adaptiveHeight")&&t.el&&this.pages[this.page].slides.indexOf(t)>-1&&(i.updateMetrics(),i.setViewportHeight()),this.emit("load",t))};P(e,o),e.src=e.dataset.lazySrcset||e.dataset.lazySrc||"",delete e.dataset.lazySrc,delete e.dataset.lazySrcset,e.addEventListener("error",(()=>{l()})),e.addEventListener("load",(()=>{l()})),setTimeout((()=>{const i=e.parentNode;i&&t.el&&(e.complete?l():a||(r=n(x),i.insertBefore(r,e)))}),300)}lazyLoadSlide(t){const e=t&&t.el;if(!e)return;const i=new Set;let n=Array.from(e.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));e.dataset.lazySrc&&n.push(e),n.map((t=>{t instanceof HTMLImageElement?i.add(t):t instanceof HTMLElement&&t.dataset.lazySrc&&(t.style.backgroundImage=`url('${t.dataset.lazySrc}')`,delete t.dataset.lazySrc)}));for(const e of i)this.lazyLoadImg(t,e)}onAnimationEnd(t){var e;const i=t.target,n=i?parseInt(i.dataset.index||"",10)||0:-1,s=this.slides[n],o=t.animationName;if(!i||!s||!o)return;const a=!!this.inTransition.has(n)&&s.transition;a&&o.substring(0,a.length+2)===`f-${a}`&&this.inTransition.delete(n),this.inTransition.size||this.clearTransitions(),n===this.page&&(null===(e=this.panzoom)||void 0===e?void 0:e.isResting)&&this.emit("settle")}onDecel(t,e=0,i=0,n=0,s=0){if(this.option("dragFree"))return void this.setPageFromPosition();const{isRTL:o,isHorizontal:a,axis:r,pages:l}=this,c=l.length,h=Math.abs(Math.atan2(i,e)/(Math.PI/180));let d=0;if(d=h>45&&h<135?a?0:i:a?e:0,!c)return;let u=this.page,p=o&&a?1:-1;const f=t.current[r]*p;let{pageIndex:g}=this.getPageFromPosition(f);Math.abs(d)>5?(l[u].dim<document.documentElement["client"+(this.isHorizontal?"Width":"Height")]-1&&(u=g),u=o&&a?d<0?u-1:u+1:d<0?u+1:u-1):u=0===n&&0===s?u:g,this.slideTo(u,{transition:!1,friction:t.option("decelFriction")})}onClick(t){const e=t.target,i=e&&E(e)?e.dataset:null;let n,s;i&&(void 0!==i.carouselPage?(s="slideTo",n=i.carouselPage):void 0!==i.carouselNext?s="slideNext":void 0!==i.carouselPrev&&(s="slidePrev")),s?(t.preventDefault(),t.stopPropagation(),e&&!e.hasAttribute("disabled")&&this[s](n)):this.emit("click",t)}onSlideTo(t){const e=t.detail||0;this.slideTo(this.getPageForSlide(e),{friction:0})}onChange(t,e=0){const i=this.page;this.prevPage=i,this.page=t,this.option("adaptiveHeight")&&this.setViewportHeight(),t!==i&&(this.markSelectedSlides(),this.emit("change",t,i,e))}onRefresh(){let t=this.contentDim,e=this.viewportDim;this.updateMetrics(),this.contentDim===t&&this.viewportDim===e||this.slideTo(this.page,{friction:0,transition:!1})}onScroll(){var t;null===(t=this.viewport)||void 0===t||t.scroll(0,0)}onResize(){this.option("breakpoints")&&this.processOptions()}onBeforeTransform(t){this.lp!==t.current[this.axis]&&(this.flipInfiniteTrack(),this.manageSlideVisiblity()),this.lp=t.current.e}onEndAnimation(){this.inTransition.size||this.emit("settle")}reInit(t=null,e=null){this.destroy(),this.state=B.Init,this.prevPage=null,this.userOptions=t||this.userOptions,this.userPlugins=e||this.userPlugins,this.processOptions()}slideTo(t=0,{friction:e=this.option("friction"),transition:i=this.option("transition")}={}){if(this.state===B.Destroy)return;t=parseInt((t||0).toString())||0;const n=this.getPageFromIndex(t),{axis:s,isHorizontal:o,isRTL:a,pages:r,panzoom:l}=this,c=r.length,h=a&&o?1:-1;if(!l||!c)return;if(this.page!==n){const e=new Event("beforeChange",{bubbles:!0,cancelable:!0});if(this.emit("beforeChange",e,t),e.defaultPrevented)return}if(this.transitionTo(t,i))return;let d=r[n].pos;if(this.isInfinite){const e=this.contentDim,i=l.target[s]*h;if(2===c)d+=e*Math.floor(parseFloat(t+"")/2);else{d=[d,d-e,d+e].reduce((function(t,e){return Math.abs(e-i)<Math.abs(t-i)?e:t}))}}d*=h,Math.abs(l.target[s]-d)<1||(l.panTo({x:o?d:0,y:o?0:d,friction:e}),this.onChange(n))}slideToClosest(t){if(this.panzoom){const{pageIndex:e}=this.getPageFromPosition();this.slideTo(e,t)}}slideNext(){this.slideTo(this.page+1)}slidePrev(){this.slideTo(this.page-1)}clearTransitions(){this.inTransition.clear(),S(this.container,this.cn("inTransition"));const t=["to-prev","to-next","from-prev","from-next"];for(const e of this.slides){const i=e.el;if(i){i.removeEventListener(G,this.onAnimationEnd),i.classList.remove(...t);const n=e.transition;n&&i.classList.remove(`f-${n}Out`,`f-${n}In`)}}this.manageSlideVisiblity()}addSlide(t,e){var i,n,s,o;const a=this.panzoom,r=(null===(i=this.pages[this.page])||void 0===i?void 0:i.pos)||0,l=(null===(n=this.pages[this.page])||void 0===n?void 0:n.dim)||0,c=this.contentDim<this.viewportDim;let h=Array.isArray(e)?e:[e];const d=[];for(const t of h)d.push(H(t));this.slides.splice(t,0,...d);for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;for(const t of d)this.emit("beforeInitSlide",t,t.index);if(this.page>=t&&(this.page+=d.length),this.updateMetrics(),a){const e=(null===(s=this.pages[this.page])||void 0===s?void 0:s.pos)||0,i=(null===(o=this.pages[this.page])||void 0===o?void 0:o.dim)||0,n=this.pages.length||1,h=this.isRTL?l-i:i-l,d=this.isRTL?r-e:e-r;c&&1===n?(t<=this.page&&(a.current[this.axis]-=h,a.target[this.axis]-=h),a.panTo({[this.isHorizontal?"x":"y"]:-1*e})):d&&t<=this.page&&(a.target[this.axis]-=d,a.current[this.axis]-=d,a.requestTick())}for(const t of d)this.emit("initSlide",t,t.index)}prependSlide(t){this.addSlide(0,t)}appendSlide(t){this.addSlide(this.slides.length,t)}removeSlide(t){const e=this.slides.length;t=(t%e+e)%e;const i=this.slides[t];if(i){this.removeSlideEl(i,!0),this.slides.splice(t,1);for(let t=0;t<this.slides.length;t++)this.slides[t].index=t;this.updateMetrics(),this.slideTo(this.page,{friction:0,transition:!1}),this.emit("destroySlide",i)}}updateMetrics(){const{panzoom:e,viewport:i,track:n,slides:s,isHorizontal:o,isInfinite:a}=this;if(!n)return;const r=o?"width":"height",l=o?"offsetWidth":"offsetHeight";if(i){let e=Math.max(i[l],t(i.getBoundingClientRect()[r],1e3)),n=getComputedStyle(i),s="padding",a=o?"Right":"Bottom";e-=parseFloat(n[s+(o?"Left":"Top")])+parseFloat(n[s+a]),this.viewportDim=e}let c,h=0;for(const[e,i]of s.entries()){let n=0,o=0;!i.el&&c?(n=c.dim,o=c.gap):(({dim:n,gap:o}=this.getSlideMetrics(i)),c=i),n=t(n,1e3),o=t(o,1e3),i.dim=n,i.gap=o,i.pos=h,h+=n,(a||e<s.length-1)&&(h+=o)}h=t(h,1e3),this.contentDim=h,e&&(e.contentRect[r]=h,e.contentRect[o?"fullWidth":"fullHeight"]=h),this.pages=this.createPages(),this.pages=this.processPages(),this.state===B.Init&&this.setInitialPage(),this.page=Math.max(0,Math.min(this.page,this.pages.length-1)),this.manageSlideVisiblity(),this.emit("refresh")}getProgress(e,i=!1,n=!1){void 0===e&&(e=this.page);const s=this,o=s.panzoom,a=s.contentDim,r=s.pages[e]||0;if(!r||!o)return e>this.page?-1:1;let l=-1*o.current.e,c=t((l-r.pos)/(1*r.dim),1e3),h=c,d=c;this.isInfinite&&!0!==n&&(h=t((l-r.pos+a)/(1*r.dim),1e3),d=t((l-r.pos-a)/(1*r.dim),1e3));let u=[c,h,d].reduce((function(t,e){return Math.abs(e)<Math.abs(t)?e:t}));return i?u:u>1?1:u<-1?-1:u}setViewportHeight(){const{page:t,pages:e,viewport:i,isHorizontal:n}=this;if(!i||!e[t])return;let s=0;n&&this.track&&(this.track.style.height="auto",e[t].slides.forEach((t=>{t.el&&(s=Math.max(s,t.el.offsetHeight))}))),i.style.height=s?`${s}px`:""}getPageForSlide(t){for(const e of this.pages)for(const i of e.slides)if(i.index===t)return e.index;return-1}getVisibleSlides(t=0){var e;const i=new Set;let{panzoom:n,contentDim:s,viewportDim:o,pages:a,page:r}=this;if(o){s=s+(null===(e=this.slides[this.slides.length-1])||void 0===e?void 0:e.gap)||0;let l=0;l=n&&n.state!==m.Init&&n.state!==m.Destroy?-1*n.current[this.axis]:a[r]&&a[r].pos||0,this.isInfinite&&(l-=Math.floor(l/s)*s),this.isRTL&&this.isHorizontal&&(l*=-1);const c=l-o*t,h=l+o*(t+1),d=this.isInfinite?[-1,0,1]:[0];for(const t of this.slides)for(const e of d){const n=t.pos+e*s,o=n+t.dim+t.gap;n<h&&o>c&&i.add(t)}}return i}getPageFromPosition(t){const{viewportDim:e,contentDim:i,slides:n,pages:s,panzoom:o}=this,a=s.length,r=n.length,l=n[0],c=n[r-1],h=this.option("center");let d=0,u=0,p=0,f=void 0===t?-1*((null==o?void 0:o.target[this.axis])||0):t;h&&(f+=.5*e),this.isInfinite?(f<l.pos-.5*c.gap&&(f-=i,p=-1),f>c.pos+c.dim+.5*c.gap&&(f-=i,p=1)):f=Math.max(l.pos||0,Math.min(f,c.pos));let g=c,m=n.find((t=>{const e=t.pos-.5*g.gap,i=t.pos+t.dim+.5*t.gap;return g=t,f>=e&&f<i}));return m||(m=c),u=this.getPageForSlide(m.index),d=u+p*a,{page:d,pageIndex:u}}setPageFromPosition(){const{pageIndex:t}=this.getPageFromPosition();this.onChange(t)}destroy(){if([B.Destroy].includes(this.state))return;this.state=B.Destroy;const{container:t,viewport:e,track:i,slides:n,panzoom:s}=this,o=this.option("classes");t.removeEventListener("click",this.onClick,{passive:!1,capture:!1}),t.removeEventListener("slideTo",this.onSlideTo),window.removeEventListener("resize",this.onResize),s&&(s.destroy(),this.panzoom=null),n&&n.forEach((t=>{this.removeSlideEl(t)})),this.detachPlugins(),e&&(e.removeEventListener("scroll",this.onScroll),e.offsetParent&&i&&i.offsetParent&&e.replaceWith(...i.childNodes));for(const[e,i]of Object.entries(o))"container"!==e&&i&&t.classList.remove(i);this.track=null,this.viewport=null,this.page=0,this.slides=[];const a=this.events.get("ready");this.events=new Map,a&&this.events.set("ready",a)}}Object.defineProperty(Q,"Panzoom",{enumerable:!0,configurable:!0,writable:!0,value:I}),Object.defineProperty(Q,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:j}),Object.defineProperty(Q,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:U});const tt=function(t){if(!E(t))return 0;const e=window.scrollY,i=window.innerHeight,n=e+i,s=t.getBoundingClientRect(),o=s.y+e,a=s.height,r=o+a;if(e>r||n<o)return 0;if(e<o&&n>r)return 100;if(o<e&&r>n)return 100;let l=a;o<e&&(l-=e-o),r>n&&(l-=r-n);const c=l/i*100;return Math.round(c)},et=!("undefined"==typeof window||!window.document||!window.document.createElement);let it;const nt=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),st=t=>{if(t&&et){void 0===it&&document.createElement("div").focus({get preventScroll(){return it=!0,!1}});try{if(it)t.focus({preventScroll:!0});else{const e=window.scrollY||document.body.scrollTop,i=window.scrollX||document.body.scrollLeft;t.focus(),document.body.scrollTo({top:e,left:i,behavior:"auto"})}}catch(t){}}},ot=()=>{const t=document;let e,i="",n="",s="";return t.fullscreenEnabled?(i="requestFullscreen",n="exitFullscreen",s="fullscreenElement"):t.webkitFullscreenEnabled&&(i="webkitRequestFullscreen",n="webkitExitFullscreen",s="webkitFullscreenElement"),i&&(e={request:function(e=t.documentElement){return"webkitRequestFullscreen"===i?e[i](Element.ALLOW_KEYBOARD_INPUT):e[i]()},exit:function(){return t[s]&&t[n]()},isFullscreen:function(){return t[s]}}),e},at={animated:!0,autoFocus:!0,backdropClick:"close",Carousel:{classes:{container:"fancybox__carousel",viewport:"fancybox__viewport",track:"fancybox__track",slide:"fancybox__slide"}},closeButton:"auto",closeExisting:!1,commonCaption:!1,compact:()=>window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,contentClick:"toggleZoom",contentDblClick:!1,defaultType:"image",defaultDisplay:"flex",dragToClose:!0,Fullscreen:{autoStart:!1},groupAll:!1,groupAttr:"data-fancybox",hideClass:"f-fadeOut",hideScrollbar:!0,idle:3500,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"prev",ArrowDown:"next",ArrowRight:"next",ArrowLeft:"prev"},l10n:Object.assign(Object.assign({},b),{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ERROR:"Something Went Wrong, Please Try Again Later",IMAGE_ERROR:"Image Not Found",ELEMENT_NOT_FOUND:"HTML Element Not Found",AJAX_NOT_FOUND:"Error Loading AJAX : Not Found",AJAX_FORBIDDEN:"Error Loading AJAX : Forbidden",IFRAME_ERROR:"Error Loading Page",TOGGLE_ZOOM:"Toggle zoom level",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_SLIDESHOW:"Toggle slideshow",TOGGLE_FULLSCREEN:"Toggle full-screen mode",DOWNLOAD:"Download"}),parentEl:null,placeFocusBack:!0,showClass:"f-zoomInUp",startIndex:0,tpl:{closeButton:'<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',main:'<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'},trapFocus:!0,wheel:"zoom"};var rt,lt;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Closing=2]="Closing",t[t.CustomClosing=3]="CustomClosing",t[t.Destroy=4]="Destroy"}(rt||(rt={})),function(t){t[t.Loading=0]="Loading",t[t.Opening=1]="Opening",t[t.Ready=2]="Ready",t[t.Closing=3]="Closing"}(lt||(lt={}));let ct="",ht=!1,dt=!1,ut=null;const pt=()=>{let t="",e="";const i=Oe.getInstance();if(i){const n=i.carousel,s=i.getSlide();if(n&&s){let o=s.slug||void 0,a=s.triggerEl||void 0;e=o||(i.option("slug")||""),!e&&a&&a.dataset&&(e=a.dataset.fancybox||""),e&&"true"!==e&&(t="#"+e+(!o&&n.slides.length>1?"-"+(s.index+1):""))}}return{hash:t,slug:e,index:1}},ft=()=>{const t=new URL(document.URL).hash,e=t.slice(1).split("-"),i=e[e.length-1],n=i&&/^\+?\d+$/.test(i)&&parseInt(e.pop()||"1",10)||1;return{hash:t,slug:e.join("-"),index:n}},gt=()=>{const{slug:t,index:e}=ft();if(!t)return;let i=document.querySelector(`[data-slug="${t}"]`);if(i&&i.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),Oe.getInstance())return;const n=document.querySelectorAll(`[data-fancybox="${t}"]`);n.length&&(i=n[e-1],i&&i.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})))},mt=()=>{if(!1===Oe.defaults.Hash)return;const t=Oe.getInstance();if(!1===(null==t?void 0:t.options.Hash))return;const{slug:e,index:i}=ft(),{slug:n}=pt();t&&(e===n?t.jumpTo(i-1):(ht=!0,t.close())),gt()},vt=()=>{ut&&clearTimeout(ut),queueMicrotask((()=>{mt()}))},bt=()=>{window.addEventListener("hashchange",vt,!1),setTimeout((()=>{mt()}),500)};et&&(/complete|interactive|loaded/.test(document.readyState)?bt():document.addEventListener("DOMContentLoaded",bt));const yt="is-zooming-in";class wt extends _{onCreateSlide(t,e,i){const n=this.instance.optionFor(i,"src")||"";i.el&&"image"===i.type&&"string"==typeof n&&this.setImage(i,n)}onRemoveSlide(t,e,i){i.panzoom&&i.panzoom.destroy(),i.panzoom=void 0,i.imageEl=void 0}onChange(t,e,i,n){S(this.instance.container,yt);for(const t of e.slides){const e=t.panzoom;e&&t.index!==i&&e.reset(.35)}}onClose(){var t;const e=this.instance,i=e.container,n=e.getSlide();if(!i||!i.parentElement||!n)return;const{el:s,contentEl:o,panzoom:a,thumbElSrc:r}=n;if(!s||!r||!o||!a||a.isContentLoading||a.state===m.Init||a.state===m.Destroy)return;a.updateMetrics();let l=this.getZoomInfo(n);if(!l)return;this.instance.state=rt.CustomClosing,i.classList.remove(yt),i.classList.add("is-zooming-out"),o.style.backgroundImage=`url('${r}')`;const c=i.getBoundingClientRect();1===((null===(t=window.visualViewport)||void 0===t?void 0:t.scale)||1)&&Object.assign(i.style,{position:"absolute",top:`${i.offsetTop+window.scrollY}px`,left:`${i.offsetLeft+window.scrollX}px`,bottom:"auto",right:"auto",width:`${c.width}px`,height:`${c.height}px`,overflow:"hidden"});const{x:h,y:d,scale:u,opacity:p}=l;if(p){const t=((t,e,i,n)=>{const s=e-t,o=n-i;return e=>i+((e-t)/s*o||0)})(a.scale,u,1,0);a.on("afterTransform",(()=>{o.style.opacity=t(a.scale)+""}))}a.on("endAnimation",(()=>{e.destroy()})),a.target.a=u,a.target.b=0,a.target.c=0,a.target.d=u,a.panTo({x:h,y:d,scale:u,friction:p?.2:.33,ignoreBounds:!0}),a.isResting&&e.destroy()}setImage(t,e){const i=this.instance;t.src=e,this.process(t,e).then((e=>{const{contentEl:n,imageEl:s,thumbElSrc:o,el:a}=t;if(i.isClosing()||!n||!s)return;n.offsetHeight;const r=!!i.isOpeningSlide(t)&&this.getZoomInfo(t);if(this.option("protected")&&a){a.addEventListener("contextmenu",(t=>{t.preventDefault()}));const t=document.createElement("div");P(t,"fancybox-protected"),n.appendChild(t)}if(o&&r){const s=e.contentRect,a=Math.max(s.fullWidth,s.fullHeight);let c=null;!r.opacity&&a>1200&&(c=document.createElement("img"),P(c,"fancybox-ghost"),c.src=o,n.appendChild(c));const h=()=>{c&&(P(c,"f-fadeFastOut"),setTimeout((()=>{c&&(c.remove(),c=null)}),200))};(l=o,new Promise(((t,e)=>{const i=new Image;i.onload=t,i.onerror=e,i.src=l}))).then((()=>{i.hideLoading(t),t.state=lt.Opening,this.instance.emit("reveal",t),this.zoomIn(t).then((()=>{h(),this.instance.done(t)}),(()=>{})),c&&setTimeout((()=>{h()}),a>2500?800:200)}),(()=>{i.hideLoading(t),i.revealContent(t)}))}else{const n=this.optionFor(t,"initialSize"),s=this.optionFor(t,"zoom"),o={event:i.prevMouseMoveEvent||i.options.event,friction:s?.12:0};let a=i.optionFor(t,"showClass")||void 0,r=!0;i.isOpeningSlide(t)&&("full"===n?e.zoomToFull(o):"cover"===n?e.zoomToCover(o):"max"===n?e.zoomToMax(o):r=!1,e.stop("current")),r&&a&&(a=e.isDragging?"f-fadeIn":""),i.hideLoading(t),i.revealContent(t,a)}var l}),(()=>{i.setError(t,"{{IMAGE_ERROR}}")}))}process(t,e){return new Promise(((i,s)=>{var o;const a=this.instance,r=t.el;a.clearContent(t),a.showLoading(t);let l=this.optionFor(t,"content");if("string"==typeof l&&(l=n(l)),!l||!E(l)){if(l=document.createElement("img"),l instanceof HTMLImageElement){let i="",n=t.caption;i="string"==typeof n&&n?n.replace(/<[^>]+>/gi,"").substring(0,1e3):`Image ${t.index+1} of ${(null===(o=a.carousel)||void 0===o?void 0:o.pages.length)||1}`,l.src=e||"",l.alt=i,l.draggable=!1,t.srcset&&l.setAttribute("srcset",t.srcset),this.instance.isOpeningSlide(t)&&(l.fetchPriority="high")}t.sizes&&l.setAttribute("sizes",t.sizes)}P(l,"fancybox-image"),t.imageEl=l,a.setContent(t,l,!1);t.panzoom=new I(r,u({transformParent:!0},this.option("Panzoom")||{},{content:l,width:(e,i)=>a.optionFor(t,"width","auto",i)||"auto",height:(e,i)=>a.optionFor(t,"height","auto",i)||"auto",wheel:()=>{const t=a.option("wheel");return("zoom"===t||"pan"==t)&&t},click:(e,i)=>{var n,s;if(a.isCompact||a.isClosing())return!1;if(t.index!==(null===(n=a.getSlide())||void 0===n?void 0:n.index))return!1;if(i){const t=i.composedPath()[0];if(["A","BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].includes(t.nodeName))return!1}let o=!i||i.target&&(null===(s=t.contentEl)||void 0===s?void 0:s.contains(i.target));return a.option(o?"contentClick":"backdropClick")||!1},dblClick:()=>a.isCompact?"toggleZoom":a.option("contentDblClick")||!1,spinner:!1,panOnlyZoomed:!0,wheelLimit:1/0,on:{ready:t=>{i(t)},error:()=>{s()},destroy:()=>{s()}}}))}))}zoomIn(t){return new Promise(((e,i)=>{const n=this.instance,s=n.container,{panzoom:o,contentEl:a,el:r}=t;o&&o.updateMetrics();const l=this.getZoomInfo(t);if(!(l&&r&&a&&o&&s))return void i();const{x:c,y:h,scale:d,opacity:u}=l,p=()=>{t.state!==lt.Closing&&(u&&(a.style.opacity=Math.max(Math.min(1,1-(1-o.scale)/(1-d)),0)+""),o.scale>=1&&o.scale>o.targetScale-.1&&e(o))},f=t=>{(t.scale<.99||t.scale>1.01)&&!t.isDragging||(S(s,yt),a.style.opacity="",t.off("endAnimation",f),t.off("touchStart",f),t.off("afterTransform",p),e(t))};o.on("endAnimation",f),o.on("touchStart",f),o.on("afterTransform",p),o.on(["error","destroy"],(()=>{i()})),o.panTo({x:c,y:h,scale:d,friction:0,ignoreBounds:!0}),o.stop("current");const g={event:"mousemove"===o.panMode?n.prevMouseMoveEvent||n.options.event:void 0},m=this.optionFor(t,"initialSize");P(s,yt),n.hideLoading(t),"full"===m?o.zoomToFull(g):"cover"===m?o.zoomToCover(g):"max"===m?o.zoomToMax(g):o.reset(.172)}))}getZoomInfo(t){const{el:e,imageEl:i,thumbEl:n,panzoom:s}=t,o=this.instance,a=o.container;if(!e||!i||!n||!s||tt(n)<3||!this.optionFor(t,"zoom")||!a||o.state===rt.Destroy)return!1;if("0"===getComputedStyle(a).getPropertyValue("--f-images-zoom"))return!1;const r=window.visualViewport||null;if(1!==(r?r.scale:1))return!1;let{top:l,left:c,width:h,height:d}=n.getBoundingClientRect(),{top:u,left:p,fitWidth:f,fitHeight:g}=s.contentRect;if(!(h&&d&&f&&g))return!1;const m=s.container.getBoundingClientRect();p+=m.left,u+=m.top;const v=-1*(p+.5*f-(c+.5*h)),b=-1*(u+.5*g-(l+.5*d)),y=h/f;let w=this.option("zoomOpacity")||!1;return"auto"===w&&(w=Math.abs(h/d-f/g)>.1),{x:v,y:b,scale:y,opacity:w}}attach(){const t=this,e=t.instance;e.on("Carousel.change",t.onChange),e.on("Carousel.createSlide",t.onCreateSlide),e.on("Carousel.removeSlide",t.onRemoveSlide),e.on("close",t.onClose)}detach(){const t=this,e=t.instance;e.off("Carousel.change",t.onChange),e.off("Carousel.createSlide",t.onCreateSlide),e.off("Carousel.removeSlide",t.onRemoveSlide),e.off("close",t.onClose)}}Object.defineProperty(wt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{initialSize:"fit",Panzoom:{maxScale:1},protected:!1,zoom:!0,zoomOpacity:"auto"}}),"function"==typeof SuppressedError&&SuppressedError;const xt="html",Et="image",St="map",Pt="youtube",Ct="vimeo",Tt="html5video",Mt=(t,e={})=>{const i=new URL(t),n=new URLSearchParams(i.search),s=new URLSearchParams;for(const[t,i]of[...n,...Object.entries(e)]){let e=i+"";if("t"===t){let t=e.match(/((\d*)m)?(\d*)s?/);t&&s.set("start",60*parseInt(t[2]||"0")+parseInt(t[3]||"0")+"")}else s.set(t,e)}let o=s+"",a=t.match(/#t=((.*)?\d+s)/);return a&&(o+=`#t=${a[1]}`),o},Ot={ajax:null,autoSize:!0,iframeAttr:{allow:"autoplay; fullscreen",scrolling:"auto"},preload:!0,videoAutoplay:!0,videoRatio:16/9,videoTpl:'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',videoFormat:"",vimeo:{byline:1,color:"00adef",controls:1,dnt:1,muted:0},youtube:{controls:1,enablejsapi:1,nocookie:1,rel:0,fs:1}},At=["image","html","ajax","inline","clone","iframe","map","pdf","html5video","youtube","vimeo"];class Lt extends _{onBeforeInitSlide(t,e,i){this.processType(i)}onCreateSlide(t,e,i){this.setContent(i)}onClearContent(t,e){e.xhr&&(e.xhr.abort(),e.xhr=null);const i=e.iframeEl;i&&(i.onload=i.onerror=null,i.src="//about:blank",e.iframeEl=null);const n=e.contentEl,s=e.placeholderEl;if("inline"===e.type&&n&&s)n.classList.remove("fancybox__content"),"none"!==getComputedStyle(n).getPropertyValue("display")&&(n.style.display="none"),setTimeout((()=>{s&&(n&&s.parentNode&&s.parentNode.insertBefore(n,s),s.remove())}),0),e.contentEl=void 0,e.placeholderEl=void 0;else for(;e.el&&e.el.firstChild;)e.el.removeChild(e.el.firstChild)}onSelectSlide(t,e,i){i.state===lt.Ready&&this.playVideo()}onUnselectSlide(t,e,i){var n,s;if(i.type===Tt){try{null===(s=null===(n=i.el)||void 0===n?void 0:n.querySelector("video"))||void 0===s||s.pause()}catch(t){}return}let o;i.type===Ct?o={method:"pause",value:"true"}:i.type===Pt&&(o={event:"command",func:"pauseVideo"}),o&&i.iframeEl&&i.iframeEl.contentWindow&&i.iframeEl.contentWindow.postMessage(JSON.stringify(o),"*"),i.poller&&clearTimeout(i.poller)}onDone(t,e){t.isCurrentSlide(e)&&!t.isClosing()&&this.playVideo()}onRefresh(t,e){e.slides.forEach((t=>{t.el&&(this.resizeIframe(t),this.setAspectRatio(t))}))}onMessage(t){try{let e=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===e.event)for(let e of Array.from(document.getElementsByClassName("fancybox__iframe")))e instanceof HTMLIFrameElement&&e.contentWindow===t.source&&(e.dataset.ready="true")}else if(t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/)&&"onReady"===e.event){const t=document.getElementById(e.id);t&&(t.dataset.ready="true")}}catch(t){}}loadAjaxContent(t){const e=this.instance.optionFor(t,"src")||"";this.instance.showLoading(t);const i=this.instance,n=new XMLHttpRequest;i.showLoading(t),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&i.state===rt.Ready&&(i.hideLoading(t),200===n.status?i.setContent(t,n.responseText):i.setError(t,404===n.status?"{{AJAX_NOT_FOUND}}":"{{AJAX_FORBIDDEN}}"))};const s=t.ajax||null;n.open(s?"POST":"GET",e+""),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(s),t.xhr=n}setInlineContent(t){let e=null;if(E(t.src))e=t.src;else if("string"==typeof t.src){const i=t.src.split("#",2).pop();e=i?document.getElementById(i):null}if(e){if("clone"===t.type||e.closest(".fancybox__slide")){e=e.cloneNode(!0);const i=e.dataset.animationName;i&&(e.classList.remove(i),delete e.dataset.animationName);let n=e.getAttribute("id");n=n?`${n}--clone`:`clone-${this.instance.id}-${t.index}`,e.setAttribute("id",n)}else if(e.parentNode){const i=document.createElement("div");i.classList.add("fancybox-placeholder"),e.parentNode.insertBefore(i,e),t.placeholderEl=i}this.instance.setContent(t,e)}else this.instance.setError(t,"{{ELEMENT_NOT_FOUND}}")}setIframeContent(t){const{src:e,el:i}=t;if(!e||"string"!=typeof e||!i)return;i.classList.add("is-loading");const n=this.instance,s=document.createElement("iframe");s.className="fancybox__iframe",s.setAttribute("id",`fancybox__iframe_${n.id}_${t.index}`);for(const[e,i]of Object.entries(this.optionFor(t,"iframeAttr")||{}))s.setAttribute(e,i);s.onerror=()=>{n.setError(t,"{{IFRAME_ERROR}}")},t.iframeEl=s;const o=this.optionFor(t,"preload");if("iframe"!==t.type||!1===o)return s.setAttribute("src",t.src+""),n.setContent(t,s,!1),this.resizeIframe(t),void n.revealContent(t);n.showLoading(t),s.onload=()=>{if(!s.src.length)return;const e="true"!==s.dataset.ready;s.dataset.ready="true",this.resizeIframe(t),e?n.revealContent(t):n.hideLoading(t)},s.setAttribute("src",e),n.setContent(t,s,!1)}resizeIframe(t){const{type:e,iframeEl:i}=t;if(e===Pt||e===Ct)return;const n=null==i?void 0:i.parentElement;if(!i||!n)return;let s=t.autoSize;void 0===s&&(s=this.optionFor(t,"autoSize"));let o=t.width||0,a=t.height||0;o&&a&&(s=!1);const r=n&&n.style;if(!1!==t.preload&&!1!==s&&r)try{const t=window.getComputedStyle(n),e=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),s=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),l=i.contentWindow;if(l){const t=l.document,i=t.getElementsByTagName(xt)[0],n=t.body;r.width="",n.style.overflow="hidden",o=o||i.scrollWidth+e,r.width=`${o}px`,n.style.overflow="",r.flex="0 0 auto",r.height=`${n.scrollHeight}px`,a=i.scrollHeight+s}}catch(t){}if(o||a){const t={flex:"0 1 auto",width:"",height:""};o&&"auto"!==o&&(t.width=`${o}px`),a&&"auto"!==a&&(t.height=`${a}px`),Object.assign(r,t)}}playVideo(){const t=this.instance.getSlide();if(!t)return;const{el:e}=t;if(!e||!e.offsetParent)return;if(!this.optionFor(t,"videoAutoplay"))return;if(t.type===Tt)try{const t=e.querySelector("video");if(t){const e=t.play();void 0!==e&&e.then((()=>{})).catch((e=>{t.muted=!0,t.play()}))}}catch(t){}if(t.type!==Pt&&t.type!==Ct)return;const i=()=>{if(t.iframeEl&&t.iframeEl.contentWindow){let e;if("true"===t.iframeEl.dataset.ready)return e=t.type===Pt?{event:"command",func:"playVideo"}:{method:"play",value:"true"},e&&t.iframeEl.contentWindow.postMessage(JSON.stringify(e),"*"),void(t.poller=void 0);t.type===Pt&&(e={event:"listening",id:t.iframeEl.getAttribute("id")},t.iframeEl.contentWindow.postMessage(JSON.stringify(e),"*"))}t.poller=setTimeout(i,250)};i()}processType(t){if(t.html)return t.type=xt,t.src=t.html,void(t.html="");const e=this.instance.optionFor(t,"src","");if(!e||"string"!=typeof e)return;let i=t.type,n=null;if(n=e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)){const s=this.optionFor(t,Pt),{nocookie:o}=s,a=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}(s,["nocookie"]),r=`www.youtube${o?"-nocookie":""}.com`,l=Mt(e,a),c=encodeURIComponent(n[2]);t.videoId=c,t.src=`https://${r}/embed/${c}?${l}`,t.thumbSrc=t.thumbSrc||`https://i.ytimg.com/vi/${c}/mqdefault.jpg`,i=Pt}else if(n=e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)){const s=Mt(e,this.optionFor(t,Ct)),o=encodeURIComponent(n[1]),a=n[4]||"";t.videoId=o,t.src=`https://player.vimeo.com/video/${o}?${a?`h=${a}${s?"&":""}`:""}${s}`,i=Ct}if(!i&&t.triggerEl){const e=t.triggerEl.dataset.type;At.includes(e)&&(i=e)}i||"string"==typeof e&&("#"===e.charAt(0)?i="inline":(n=e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(i=Tt,t.videoFormat=t.videoFormat||"video/"+("ogv"===n[1]?"ogg":n[1])):e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?i=Et:e.match(/\.(pdf)((\?|#).*)?$/i)&&(i="pdf")),(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i))?(t.src=`https://maps.google.${n[1]}/?ll=${(n[2]?n[2]+"&z="+Math.floor(parseFloat(n[3]))+(n[4]?n[4].replace(/^\//,"&"):""):n[4]+"").replace(/\?/,"&")}&output=${n[4]&&n[4].indexOf("layer=c")>0?"svembed":"embed"}`,i=St):(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i))&&(t.src=`https://maps.google.${n[1]}/maps?q=${n[2].replace("query=","q=").replace("api=1","")}&output=embed`,i=St),i=i||this.instance.option("defaultType"),t.type=i,i===Et&&(t.thumbSrc=t.thumbSrc||t.src)}setContent(t){const e=this.instance.optionFor(t,"src")||"";if(t&&t.type&&e){switch(t.type){case xt:this.instance.setContent(t,e);break;case Tt:const i=this.option("videoTpl");i&&this.instance.setContent(t,i.replace(/\{\{src\}\}/gi,e+"").replace(/\{\{format\}\}/gi,this.optionFor(t,"videoFormat")||"").replace(/\{\{poster\}\}/gi,t.poster||t.thumbSrc||""));break;case"inline":case"clone":this.setInlineContent(t);break;case"ajax":this.loadAjaxContent(t);break;case"pdf":case St:case Pt:case Ct:t.preload=!1;case"iframe":this.setIframeContent(t)}this.setAspectRatio(t)}}setAspectRatio(t){const e=t.contentEl;if(!(t.el&&e&&t.type&&[Pt,Ct,Tt].includes(t.type)))return;let i,n=t.width||"auto",s=t.height||"auto";if("auto"===n||"auto"===s){i=this.optionFor(t,"videoRatio");const e=(i+"").match(/(\d+)\s*\/\s?(\d+)/);i=e&&e.length>2?parseFloat(e[1])/parseFloat(e[2]):parseFloat(i+"")}else n&&s&&(i=n/s);if(!i)return;e.style.aspectRatio="",e.style.width="",e.style.height="",e.offsetHeight;const o=e.getBoundingClientRect(),a=o.width||1,r=o.height||1;e.style.aspectRatio=i+"",i<a/r?(s="auto"===s?r:Math.min(r,s),e.style.width="auto",e.style.height=`${s}px`):(n="auto"===n?a:Math.min(a,n),e.style.width=`${n}px`,e.style.height="auto")}attach(){const t=this,e=t.instance;e.on("Carousel.beforeInitSlide",t.onBeforeInitSlide),e.on("Carousel.createSlide",t.onCreateSlide),e.on("Carousel.selectSlide",t.onSelectSlide),e.on("Carousel.unselectSlide",t.onUnselectSlide),e.on("Carousel.Panzoom.refresh",t.onRefresh),e.on("done",t.onDone),e.on("clearContent",t.onClearContent),window.addEventListener("message",t.onMessage)}detach(){const t=this,e=t.instance;e.off("Carousel.beforeInitSlide",t.onBeforeInitSlide),e.off("Carousel.createSlide",t.onCreateSlide),e.off("Carousel.selectSlide",t.onSelectSlide),e.off("Carousel.unselectSlide",t.onUnselectSlide),e.off("Carousel.Panzoom.refresh",t.onRefresh),e.off("done",t.onDone),e.off("clearContent",t.onClearContent),window.removeEventListener("message",t.onMessage)}}Object.defineProperty(Lt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:Ot});const zt="play",Rt="pause",kt="ready";class It extends _{constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:kt}),Object.defineProperty(this,"inHover",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"timer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"progressBar",{enumerable:!0,configurable:!0,writable:!0,value:null})}get isActive(){return this.state!==kt}onReady(t){this.option("autoStart")&&(t.isInfinite||t.page<t.pages.length-1)&&this.start()}onChange(){this.removeProgressBar(),this.pause()}onSettle(){this.resume()}onVisibilityChange(){"visible"===document.visibilityState?this.resume():this.pause()}onMouseEnter(){this.inHover=!0,this.pause()}onMouseLeave(){var t;this.inHover=!1,(null===(t=this.instance.panzoom)||void 0===t?void 0:t.isResting)&&this.resume()}onTimerEnd(){const t=this.instance;"play"===this.state&&(t.isInfinite||t.page!==t.pages.length-1?t.slideNext():t.slideTo(0))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}createProgressBar(){var t;if(!this.option("showProgress"))return null;this.removeProgressBar();const e=this.instance,i=(null===(t=e.pages[e.page])||void 0===t?void 0:t.slides)||[];let n=this.option("progressParentEl");if(n||(n=(1===i.length?i[0].el:null)||e.viewport),!n)return null;const s=document.createElement("div");return P(s,"f-progress"),n.prepend(s),this.progressBar=s,s.offsetHeight,s}set(){const t=this,e=t.instance;if(e.pages.length<2)return;if(t.timer)return;const i=t.option("timeout");t.state=zt,P(e.container,"has-autoplay");let n=t.createProgressBar();n&&(n.style.transitionDuration=`${i}ms`,n.style.transform="scaleX(1)"),t.timer=setTimeout((()=>{t.timer=null,t.inHover||t.onTimerEnd()}),i),t.emit("set")}clear(){const t=this;t.timer&&(clearTimeout(t.timer),t.timer=null),t.removeProgressBar()}start(){const t=this;if(t.set(),t.state!==kt){if(t.option("pauseOnHover")){const e=t.instance.container;e.addEventListener("mouseenter",t.onMouseEnter,!1),e.addEventListener("mouseleave",t.onMouseLeave,!1)}document.addEventListener("visibilitychange",t.onVisibilityChange,!1),t.emit("start")}}stop(){const t=this,e=t.state,i=t.instance.container;t.clear(),t.state=kt,i.removeEventListener("mouseenter",t.onMouseEnter,!1),i.removeEventListener("mouseleave",t.onMouseLeave,!1),document.removeEventListener("visibilitychange",t.onVisibilityChange,!1),S(i,"has-autoplay"),e!==kt&&t.emit("stop")}pause(){const t=this;t.state===zt&&(t.state=Rt,t.clear(),t.emit(Rt))}resume(){const t=this,e=t.instance;if(e.isInfinite||e.page!==e.pages.length-1)if(t.state!==zt){if(t.state===Rt&&!t.inHover){const e=new Event("resume",{bubbles:!0,cancelable:!0});t.emit("resume",e),e.defaultPrevented||t.set()}}else t.set();else t.stop()}toggle(){this.state===zt||this.state===Rt?this.stop():this.start()}attach(){const t=this,e=t.instance;e.on("ready",t.onReady),e.on("Panzoom.startAnimation",t.onChange),e.on("Panzoom.endAnimation",t.onSettle),e.on("Panzoom.touchMove",t.onChange)}detach(){const t=this,e=t.instance;e.off("ready",t.onReady),e.off("Panzoom.startAnimation",t.onChange),e.off("Panzoom.endAnimation",t.onSettle),e.off("Panzoom.touchMove",t.onChange),t.stop()}}Object.defineProperty(It,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{autoStart:!0,pauseOnHover:!0,progressParentEl:null,showProgress:!0,timeout:3e3}});class Dt extends _{constructor(){super(...arguments),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:null})}onPrepare(t){const e=t.carousel;if(!e)return;const i=t.container;i&&(e.options.Autoplay=u({autoStart:!1},this.option("Autoplay")||{},{pauseOnHover:!1,timeout:this.option("timeout"),progressParentEl:()=>this.option("progressParentEl")||null,on:{start:()=>{t.emit("startSlideshow")},set:e=>{var n;i.classList.add("has-slideshow"),(null===(n=t.getSlide())||void 0===n?void 0:n.state)!==lt.Ready&&e.pause()},stop:()=>{i.classList.remove("has-slideshow"),t.isCompact||t.endIdle(),t.emit("endSlideshow")},resume:(e,i)=>{var n,s,o;!i||!i.cancelable||(null===(n=t.getSlide())||void 0===n?void 0:n.state)===lt.Ready&&(null===(o=null===(s=t.carousel)||void 0===s?void 0:s.panzoom)||void 0===o?void 0:o.isResting)||i.preventDefault()}}}),e.attachPlugins({Autoplay:It}),this.ref=e.plugins.Autoplay)}onReady(t){const e=t.carousel,i=this.ref;i&&e&&this.option("playOnStart")&&(e.isInfinite||e.page<e.pages.length-1)&&i.start()}onDone(t,e){const i=this.ref,n=t.carousel;if(!i||!n)return;const s=e.panzoom;s&&s.on("startAnimation",(()=>{t.isCurrentSlide(e)&&i.stop()})),t.isCurrentSlide(e)&&i.resume()}onKeydown(t,e){var i;const n=this.ref;n&&e===this.option("key")&&"BUTTON"!==(null===(i=document.activeElement)||void 0===i?void 0:i.nodeName)&&n.toggle()}attach(){const t=this,e=t.instance;e.on("Carousel.init",t.onPrepare),e.on("Carousel.ready",t.onReady),e.on("done",t.onDone),e.on("keydown",t.onKeydown)}detach(){const t=this,e=t.instance;e.off("Carousel.init",t.onPrepare),e.off("Carousel.ready",t.onReady),e.off("done",t.onDone),e.off("keydown",t.onKeydown)}}Object.defineProperty(Dt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{key:" ",playOnStart:!1,progressParentEl:t=>{var e;return(null===(e=t.instance.container)||void 0===e?void 0:e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]"))||t.instance.container},timeout:3e3}});const Ft={classes:{container:"f-thumbs f-carousel__thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide",isResting:"is-resting",isSelected:"is-selected",isLoading:"is-loading",hasThumbs:"has-thumbs"},minCount:2,parentEl:null,thumbTpl:'<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',type:"modern"};var jt;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Hidden=2]="Hidden"}(jt||(jt={}));const Bt="isResting",Ht="thumbWidth",Nt="thumbHeight",_t="thumbClipWidth";let $t=class extends _{constructor(){super(...arguments),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:"modern"}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"track",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"thumbWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbClipWidth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbHeight",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"thumbExtraGap",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:jt.Init})}get isModern(){return"modern"===this.type}onInitSlide(t,e){const i=e.el?e.el.dataset:void 0;i&&(e.thumbSrc=i.thumbSrc||e.thumbSrc||"",e[_t]=parseFloat(i[_t]||"")||e[_t]||0,e[Nt]=parseFloat(i.thumbHeight||"")||e[Nt]||0),this.addSlide(e)}onInitSlides(){this.build()}onChange(){var t;if(!this.isModern)return;const e=this.container,i=this.instance,n=i.panzoom,s=this.carousel,a=s?s.panzoom:null,r=i.page;if(n&&s&&a){if(n.isDragging){S(e,this.cn(Bt));let n=(null===(t=s.pages[r])||void 0===t?void 0:t.pos)||0;n+=i.getProgress(r)*(this[_t]+this.thumbGap);let o=a.getBounds();-1*n>o.x.min&&-1*n<o.x.max&&a.panTo({x:-1*n,friction:.12})}else o(e,this.cn(Bt),n.isResting);this.shiftModern()}}onRefresh(){this.updateProps();for(const t of this.instance.slides||[])this.resizeModernSlide(t);this.shiftModern()}isDisabled(){const t=this.option("minCount")||0;if(t){const e=this.instance;let i=0;for(const t of e.slides||[])t.thumbSrc&&i++;if(i<t)return!0}const e=this.option("type");return["modern","classic"].indexOf(e)<0}getThumb(t){const e=this.option("thumbTpl")||"";return{html:this.instance.localize(e,[["%i",t.index],["%d",t.index+1],["%s",t.thumbSrc||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])}}addSlide(t){const e=this.carousel;e&&e.addSlide(t.index,this.getThumb(t))}getSlides(){const t=[];for(const e of this.instance.slides||[])t.push(this.getThumb(e));return t}resizeModernSlide(t){this.isModern&&(t[Ht]=t[_t]&&t[Nt]?Math.round(this[Nt]*(t[_t]/t[Nt])):this[Ht])}updateProps(){const t=this.container;if(!t)return;const e=e=>parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-"+e))||0;this.thumbGap=e("gap"),this.thumbExtraGap=e("extra-gap"),this[Ht]=e("width")||40,this[_t]=e("clip-width")||40,this[Nt]=e("height")||40}build(){const t=this;if(t.state!==jt.Init)return;if(t.isDisabled())return void t.emit("disabled");const e=t.instance,i=e.container,n=t.getSlides(),s=t.option("type");t.type=s;const o=t.option("parentEl"),a=t.cn("container"),r=t.cn("track");let l=null==o?void 0:o.querySelector("."+a);l||(l=document.createElement("div"),P(l,a),o?o.appendChild(l):i.after(l)),P(l,`is-${s}`),P(i,t.cn("hasThumbs")),t.container=l,t.updateProps();let c=l.querySelector("."+r);c||(c=document.createElement("div"),P(c,t.cn("track")),l.appendChild(c)),t.track=c;const h=u({},{track:c,infinite:!1,center:!0,fill:"classic"===s,dragFree:!0,slidesPerPage:1,transition:!1,preload:.25,friction:.12,Panzoom:{maxVelocity:0},Dots:!1,Navigation:!1,classes:{container:"f-thumbs",viewport:"f-thumbs__viewport",track:"f-thumbs__track",slide:"f-thumbs__slide"}},t.option("Carousel")||{},{Sync:{target:e},slides:n}),d=new e.constructor(l,h);d.on("createSlide",((e,i)=>{t.setProps(i.index),t.emit("createSlide",i,i.el)})),d.on("ready",(()=>{t.shiftModern(),t.emit("ready")})),d.on("refresh",(()=>{t.shiftModern()})),d.on("Panzoom.click",((e,i,n)=>{t.onClick(n)})),t.carousel=d,t.state=jt.Ready}onClick(t){t.preventDefault(),t.stopPropagation();const e=this.instance,{pages:i,page:n}=e,s=t=>{if(t){const e=t.closest("[data-carousel-index]");if(e)return[parseInt(e.dataset.carouselIndex||"",10)||0,e]}return[-1,void 0]},o=(t,e)=>{const i=document.elementFromPoint(t,e);return i?s(i):[-1,void 0]};let[a,r]=s(t.target);if(a>-1)return;const l=this[_t],c=t.clientX,h=t.clientY;let[d,u]=o(c-l,h),[p,f]=o(c+l,h);u&&f?(a=Math.abs(c-u.getBoundingClientRect().right)<Math.abs(c-f.getBoundingClientRect().left)?d:p,a===n&&(a=a===d?p:d)):u?a=d:f&&(a=p),a>-1&&i[a]&&e.slideTo(a)}getShift(t){var e;const i=this,{instance:n}=i,s=i.carousel;if(!n||!s)return 0;const o=i[Ht],a=i[_t],r=i.thumbGap,l=i.thumbExtraGap;if(!(null===(e=s.slides[t])||void 0===e?void 0:e.el))return 0;const c=.5*(o-a),h=n.pages.length-1;let d=n.getProgress(0),u=n.getProgress(h),p=n.getProgress(t,!1,!0),f=0,g=c+l+r;const m=d<0&&d>-1,v=u>0&&u<1;return 0===t?(f=g*Math.abs(d),v&&1===d&&(f-=g*Math.abs(u))):t===h?(f=g*Math.abs(u)*-1,m&&-1===u&&(f+=g*Math.abs(d))):m||v?(f=-1*g,f+=g*Math.abs(d),f+=g*(1-Math.abs(u))):f=g*p,f}setProps(e){var i;const n=this;if(!n.isModern)return;const{instance:s}=n,o=n.carousel;if(s&&o){const a=null===(i=o.slides[e])||void 0===i?void 0:i.el;if(a&&a.childNodes.length){let i=t(1-Math.abs(s.getProgress(e))),o=t(n.getShift(e));a.style.setProperty("--progress",i?i+"":""),a.style.setProperty("--shift",o+"")}}}shiftModern(){const t=this;if(!t.isModern)return;const{instance:e,track:i}=t,n=e.panzoom,s=t.carousel;if(!(e&&i&&n&&s))return;if(n.state===m.Init||n.state===m.Destroy)return;for(const i of e.slides)t.setProps(i.index);let o=(t[_t]+t.thumbGap)*(s.slides.length||0);i.style.setProperty("--width",o+"")}cleanup(){const t=this;t.carousel&&t.carousel.destroy(),t.carousel=null,t.container&&t.container.remove(),t.container=null,t.track&&t.track.remove(),t.track=null,t.state=jt.Init,S(t.instance.container,t.cn("hasThumbs"))}attach(){const t=this,e=t.instance;e.on("initSlide",t.onInitSlide),e.state===B.Init?e.on("initSlides",t.onInitSlides):t.onInitSlides(),e.on(["change","Panzoom.afterTransform"],t.onChange),e.on("Panzoom.refresh",t.onRefresh)}detach(){const t=this,e=t.instance;e.off("initSlide",t.onInitSlide),e.off("initSlides",t.onInitSlides),e.off(["change","Panzoom.afterTransform"],t.onChange),e.off("Panzoom.refresh",t.onRefresh),t.cleanup()}};Object.defineProperty($t,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:Ft});const Wt=Object.assign(Object.assign({},Ft),{key:"t",showOnStart:!0,parentEl:null}),Xt="is-masked",qt="aria-hidden";class Yt extends _{constructor(){super(...arguments),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"hidden",{enumerable:!0,configurable:!0,writable:!0,value:!1})}get isEnabled(){const t=this.ref;return t&&!t.isDisabled()}get isHidden(){return this.hidden}onClick(t,e){e.stopPropagation()}onCreateSlide(t,e){var i,n,s;const o=(null===(s=null===(n=null===(i=this.instance)||void 0===i?void 0:i.carousel)||void 0===n?void 0:n.slides[e.index])||void 0===s?void 0:s.type)||"",a=e.el;if(a&&o){let t=`for-${o}`;["video","youtube","vimeo","html5video"].includes(o)&&(t+=" for-video"),P(a,t)}}onInit(){var t;const e=this,i=e.instance,n=i.carousel;if(e.ref||!n)return;const s=e.option("parentEl")||i.footer||i.container;if(!s)return;const o=u({},e.options,{parentEl:s,classes:{container:"f-thumbs fancybox__thumbs"},Carousel:{Sync:{friction:i.option("Carousel.friction")||0}},on:{ready:t=>{const i=t.container;i&&this.hidden&&(e.refresh(),i.style.transition="none",e.hide(),i.offsetHeight,queueMicrotask((()=>{i.style.transition="",e.show()})))}}});o.Carousel=o.Carousel||{},o.Carousel.on=u((null===(t=e.options.Carousel)||void 0===t?void 0:t.on)||{},{click:this.onClick,createSlide:this.onCreateSlide}),n.options.Thumbs=o,n.attachPlugins({Thumbs:$t}),e.ref=n.plugins.Thumbs,e.option("showOnStart")||(e.ref.state=jt.Hidden,e.hidden=!0)}onResize(){var t;const e=null===(t=this.ref)||void 0===t?void 0:t.container;e&&(e.style.maxHeight="")}onKeydown(t,e){const i=this.option("key");i&&i===e&&this.toggle()}toggle(){const t=this.ref;if(t&&!t.isDisabled())return t.state===jt.Hidden?(t.state=jt.Init,void t.build()):void(this.hidden?this.show():this.hide())}show(){const t=this.ref;if(!t||t.isDisabled())return;const e=t.container;e&&(this.refresh(),e.offsetHeight,e.removeAttribute(qt),e.classList.remove(Xt),this.hidden=!1)}hide(){const t=this.ref,e=t&&t.container;e&&(this.refresh(),e.offsetHeight,e.classList.add(Xt),e.setAttribute(qt,"true")),this.hidden=!0}refresh(){const t=this.ref;if(!t||!t.state)return;const e=t.container,i=(null==e?void 0:e.firstChild)||null;e&&i&&i.childNodes.length&&(e.style.maxHeight=`${i.getBoundingClientRect().height}px`)}attach(){const t=this,e=t.instance;e.state===rt.Init?e.on("Carousel.init",t.onInit):t.onInit(),e.on("resize",t.onResize),e.on("keydown",t.onKeydown)}detach(){var t;const e=this,i=e.instance;i.off("Carousel.init",e.onInit),i.off("resize",e.onResize),i.off("keydown",e.onKeydown),null===(t=i.carousel)||void 0===t||t.detachPlugins(["Thumbs"]),e.ref=null}}Object.defineProperty(Yt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:Wt});const Vt={panLeft:{icon:'<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',change:{panX:-100}},panRight:{icon:'<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',change:{panX:100}},panUp:{icon:'<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',change:{panY:-100}},panDown:{icon:'<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',change:{panY:100}},zoomIn:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',action:"zoomIn"},zoomOut:{icon:'<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"zoomOut"},toggle1to1:{icon:'<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',action:"toggleZoom"},toggleZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"toggleZoom"},iterateZoom:{icon:'<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',action:"iterateZoom"},rotateCCW:{icon:'<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',action:"rotateCCW"},rotateCW:{icon:'<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',action:"rotateCW"},flipX:{icon:'<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',action:"flipX"},flipY:{icon:'<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',action:"flipY"},fitX:{icon:'<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',action:"fitX"},fitY:{icon:'<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',action:"fitY"},reset:{icon:'<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',action:"reset"},toggleFS:{icon:'<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',action:"toggleFS"}};var Zt;!function(t){t[t.Init=0]="Init",t[t.Ready=1]="Ready",t[t.Disabled=2]="Disabled"}(Zt||(Zt={}));const Ut={absolute:"auto",display:{left:["infobar"],middle:[],right:["iterateZoom","slideshow","fullscreen","thumbs","close"]},enabled:"auto",items:{infobar:{tpl:'<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'},download:{tpl:'<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'},prev:{tpl:'<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'},next:{tpl:'<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'},slideshow:{tpl:'<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'},fullscreen:{tpl:'<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'},thumbs:{tpl:'<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'},close:{tpl:'<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'}},parentEl:null},Gt={tabindex:"-1",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Kt="has-toolbar",Jt="fancybox__toolbar";class Qt extends _{constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:Zt.Init}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null})}onReady(t){var e;if(!t.carousel)return;let i=this.option("display"),n=this.option("absolute"),s=this.option("enabled");if("auto"===s){const t=this.instance.carousel;let e=0;if(t)for(const i of t.slides)(i.panzoom||"image"===i.type)&&e++;e||(s=!1)}s||(i=void 0);let o=0;const a={left:[],middle:[],right:[]};if(i)for(const t of["left","middle","right"])for(const n of i[t]){const i=this.createEl(n);i&&(null===(e=a[t])||void 0===e||e.push(i),o++)}let r=null;if(o&&(r=this.createContainer()),r){for(const[t,e]of Object.entries(a)){const i=document.createElement("div");P(i,Jt+"__column is-"+t);for(const t of e)i.appendChild(t);"auto"!==n||"middle"!==t||e.length||(n=!0),r.appendChild(i)}!0===n&&P(r,"is-absolute"),this.state=Zt.Ready,this.onRefresh()}else this.state=Zt.Disabled}onClick(t){var e,i;const n=this.instance,s=n.getSlide(),o=null==s?void 0:s.panzoom,a=t.target,r=a&&E(a)?a.dataset:null;if(!r)return;if(void 0!==r.fancyboxToggleThumbs)return t.preventDefault(),t.stopPropagation(),void(null===(e=n.plugins.Thumbs)||void 0===e||e.toggle());if(void 0!==r.fancyboxToggleFullscreen)return t.preventDefault(),t.stopPropagation(),void this.instance.toggleFullscreen();if(void 0!==r.fancyboxToggleSlideshow){t.preventDefault(),t.stopPropagation();const e=null===(i=n.carousel)||void 0===i?void 0:i.plugins.Autoplay;let s=e.isActive;return o&&"mousemove"===o.panMode&&!s&&o.reset(),void(s?e.stop():e.start())}const l=r.panzoomAction,c=r.panzoomChange;if((c||l)&&(t.preventDefault(),t.stopPropagation()),c){let t={};try{t=JSON.parse(c)}catch(t){}o&&o.applyChange(t)}else l&&o&&o[l]&&o[l]()}onChange(){this.onRefresh()}onRefresh(){if(this.instance.isClosing())return;const t=this.container;if(!t)return;const e=this.instance.getSlide();if(!e||e.state!==lt.Ready)return;const i=e&&!e.error&&e.panzoom;for(const e of t.querySelectorAll("[data-panzoom-action]"))i?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));let n=i&&i.canZoomIn(),s=i&&i.canZoomOut();for(const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))n?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));for(const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))s?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));for(const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')){s||n?(e.removeAttribute("disabled"),e.removeAttribute("tabindex")):(e.setAttribute("disabled",""),e.setAttribute("tabindex","-1"));const t=e.querySelector("g");t&&(t.style.display=n?"":"none")}}onDone(t,e){var i;null===(i=e.panzoom)||void 0===i||i.on("afterTransform",(()=>{this.instance.isCurrentSlide(e)&&this.onRefresh()})),this.instance.isCurrentSlide(e)&&this.onRefresh()}createContainer(){const t=this.instance.container;if(!t)return null;const e=this.option("parentEl")||t;let i=e.querySelector("."+Jt);return i||(i=document.createElement("div"),P(i,Jt),e.prepend(i)),i.addEventListener("click",this.onClick,{passive:!1,capture:!0}),t&&P(t,Kt),this.container=i,i}createEl(t){const e=this.instance,i=e.carousel;if(!i)return null;if("toggleFS"===t)return null;if("fullscreen"===t&&!ot())return null;let s=null;const o=i.slides.length||0;let a=0,r=0;for(const t of i.slides)(t.panzoom||"image"===t.type)&&a++,("image"===t.type||t.downloadSrc)&&r++;if(o<2&&["infobar","prev","next"].includes(t))return s;if(void 0!==Vt[t]&&!a)return null;if("download"===t&&!r)return null;if("thumbs"===t){const t=e.plugins.Thumbs;if(!t||!t.isEnabled)return null}if("slideshow"===t){if(!i.plugins.Autoplay||o<2)return null}if(void 0!==Vt[t]){const e=Vt[t];s=document.createElement("button"),s.setAttribute("title",this.instance.localize(`{{${t.toUpperCase()}}}`)),P(s,"f-button"),e.action&&(s.dataset.panzoomAction=e.action),e.change&&(s.dataset.panzoomChange=JSON.stringify(e.change)),s.appendChild(n(this.instance.localize(e.icon)))}else{const e=(this.option("items")||[])[t];e&&(s=n(this.instance.localize(e.tpl)),"function"==typeof e.click&&s.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),"function"==typeof e.click&&e.click.call(this,this,t)})))}const l=null==s?void 0:s.querySelector("svg");if(l)for(const[t,e]of Object.entries(Gt))l.getAttribute(t)||l.setAttribute(t,String(e));return s}removeContainer(){const t=this.container;t&&t.remove(),this.container=null,this.state=Zt.Disabled;const e=this.instance.container;e&&S(e,Kt)}attach(){const t=this,e=t.instance;e.on("Carousel.initSlides",t.onReady),e.on("done",t.onDone),e.on(["reveal","Carousel.change"],t.onChange),t.onReady(t.instance)}detach(){const t=this,e=t.instance;e.off("Carousel.initSlides",t.onReady),e.off("done",t.onDone),e.off(["reveal","Carousel.change"],t.onChange),t.removeContainer()}}Object.defineProperty(Qt,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:Ut});const te={Hash:class extends _{onReady(){ht=!1}onChange(t){ut&&clearTimeout(ut);const{hash:e}=pt(),{hash:i}=ft(),n=t.isOpeningSlide(t.getSlide());n&&(ct=i===e?"":i),e&&e!==i&&(ut=setTimeout((()=>{try{if(t.state===rt.Ready){let t="replaceState";n&&!dt&&(t="pushState",dt=!0),window.history[t]({},document.title,window.location.pathname+window.location.search+e)}}catch(t){}}),300))}onClose(t){if(ut&&clearTimeout(ut),!ht&&dt)return dt=!1,ht=!1,void window.history.back();if(!ht)try{window.history.replaceState({},document.title,window.location.pathname+window.location.search+(ct||""))}catch(t){}}attach(){const t=this.instance;t.on("ready",this.onReady),t.on(["Carousel.ready","Carousel.change"],this.onChange),t.on("close",this.onClose)}detach(){const t=this.instance;t.off("ready",this.onReady),t.off(["Carousel.ready","Carousel.change"],this.onChange),t.off("close",this.onClose)}static parseURL(){return ft()}static startFromUrl(){gt()}static destroy(){window.removeEventListener("hashchange",vt,!1)}},Html:Lt,Images:wt,Slideshow:Dt,Thumbs:Yt,Toolbar:Qt},ee="with-fancybox",ie="hide-scrollbar",ne="--fancybox-scrollbar-compensate",se="--fancybox-body-margin",oe="aria-hidden",ae="is-using-tab",re="is-animated",le="is-compact",ce="is-loading",he="is-opening",de="has-caption",ue="disabled",pe="tabindex",fe="download",ge="href",me="src",ve=t=>"string"==typeof t,be=function(){var t=window.getSelection();return!!t&&"Range"===t.type};let ye,we=null,xe=null,Ee=0,Se=0,Pe=0,Ce=0;const Te=new Map;let Me=0;class Oe extends g{get isIdle(){return this.idle}get isCompact(){return this.option("compact")}constructor(t=[],e={},i={}){super(e),Object.defineProperty(this,"userSlides",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"userPlugins",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"idle",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"idleTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"clickTimer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"pwt",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"ignoreFocusChange",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"startedFs",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:rt.Init}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"footer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"carousel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"lastFocus",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"prevMouseMoveEvent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),ye||(ye=ot()),this.id=e.id||++Me,Te.set(this.id,this),this.userSlides=t,this.userPlugins=i,queueMicrotask((()=>{this.init()}))}init(){if(this.state===rt.Destroy)return;this.state=rt.Init,this.attachPlugins(Object.assign(Object.assign({},Oe.Plugins),this.userPlugins)),this.emit("init"),this.emit("attachPlugins"),!0===this.option("hideScrollbar")&&(()=>{if(!et)return;const t=document,e=t.body,i=t.documentElement;if(e.classList.contains(ie))return;let n=window.innerWidth-i.getBoundingClientRect().width;const s=parseFloat(window.getComputedStyle(e).marginRight);n<0&&(n=0),i.style.setProperty(ne,`${n}px`),s&&e.style.setProperty(se,`${s}px`),e.classList.add(ie)})(),this.initLayout(),this.scale();const t=()=>{this.initCarousel(this.userSlides),this.state=rt.Ready,this.attachEvents(),this.emit("ready"),setTimeout((()=>{this.container&&this.container.setAttribute(oe,"false")}),16)};this.option("Fullscreen.autoStart")&&ye&&!ye.isFullscreen()?ye.request().then((()=>{this.startedFs=!0,t()})).catch((()=>t())):t()}initLayout(){var t,e;const i=this.option("parentEl")||document.body,s=n(this.localize(this.option("tpl.main")||""));if(s){if(s.setAttribute("id",`fancybox-${this.id}`),s.setAttribute("aria-label",this.localize("{{MODAL}}")),s.classList.toggle(le,this.isCompact),P(s,this.option("mainClass")||""),P(s,he),this.container=s,this.footer=s.querySelector(".fancybox__footer"),i.appendChild(s),P(document.documentElement,ee),we&&xe||(we=document.createElement("span"),P(we,"fancybox-focus-guard"),we.setAttribute(pe,"0"),we.setAttribute(oe,"true"),we.setAttribute("aria-label","Focus guard"),xe=we.cloneNode(),null===(t=s.parentElement)||void 0===t||t.insertBefore(we,s),null===(e=s.parentElement)||void 0===e||e.append(xe)),s.addEventListener("mousedown",(t=>{Ee=t.pageX,Se=t.pageY,S(s,ae)})),this.option("closeExisting"))for(const t of Te.values())t.id!==this.id&&t.close();else this.option("animated")&&(P(s,re),setTimeout((()=>{this.isClosing()||S(s,re)}),350));this.emit("initLayout")}}initCarousel(t){const i=this.container;if(!i)return;const n=i.querySelector(".fancybox__carousel");if(!n)return;const s=this.carousel=new Q(n,u({},{slides:t,transition:"fade",Panzoom:{lockAxis:this.option("dragToClose")?"xy":"x",infinite:!!this.option("dragToClose")&&"y"},Dots:!1,Navigation:{classes:{container:"fancybox__nav",button:"f-button",isNext:"is-next",isPrev:"is-prev"}},initialPage:this.option("startIndex"),l10n:this.option("l10n")},this.option("Carousel")||{}));s.on("*",((t,e,...i)=>{this.emit(`Carousel.${e}`,t,...i)})),s.on(["ready","change"],(()=>{this.manageCaption()})),this.on("Carousel.removeSlide",((t,e,i)=>{this.clearContent(i),i.state=void 0})),s.on("Panzoom.touchStart",(()=>{var t,e;this.isCompact||this.endIdle(),(null===(t=document.activeElement)||void 0===t?void 0:t.closest(".f-thumbs"))&&(null===(e=this.container)||void 0===e||e.focus())})),s.on("settle",(()=>{this.idleTimer||this.isCompact||!this.option("idle")||this.setIdle(),this.option("autoFocus")&&!this.isClosing&&this.checkFocus()})),this.option("dragToClose")&&(s.on("Panzoom.afterTransform",((t,i)=>{const n=this.getSlide();if(n&&e(n.el))return;const s=this.container;if(s){const t=Math.abs(i.current.f),e=t<1?"":Math.max(.5,Math.min(1,1-t/i.contentRect.fitHeight*1.5));s.style.setProperty("--fancybox-ts",e?"0s":""),s.style.setProperty("--fancybox-opacity",e+"")}})),s.on("Panzoom.touchEnd",((t,i,n)=>{var s;const o=this.getSlide();if(o&&e(o.el))return;if(i.isMobile&&document.activeElement&&-1!==["TEXTAREA","INPUT"].indexOf(null===(s=document.activeElement)||void 0===s?void 0:s.nodeName))return;const a=Math.abs(i.dragOffset.y);"y"===i.lockedAxis&&(a>=200||a>=50&&i.dragOffset.time<300)&&(n&&n.cancelable&&n.preventDefault(),this.close(n,"f-throwOut"+(i.current.f<0?"Up":"Down")))}))),s.on("change",(t=>{var e;let i=null===(e=this.getSlide())||void 0===e?void 0:e.triggerEl;if(i){const e=new CustomEvent("slideTo",{bubbles:!0,cancelable:!0,detail:t.page});i.dispatchEvent(e)}})),s.on(["refresh","change"],(t=>{const e=this.container;if(!e)return;for(const i of e.querySelectorAll("[data-fancybox-current-index]"))i.innerHTML=t.page+1;for(const i of e.querySelectorAll("[data-fancybox-count]"))i.innerHTML=t.pages.length;if(!t.isInfinite){for(const i of e.querySelectorAll("[data-fancybox-next]"))t.page<t.pages.length-1?(i.removeAttribute(ue),i.removeAttribute(pe)):(i.setAttribute(ue,""),i.setAttribute(pe,"-1"));for(const i of e.querySelectorAll("[data-fancybox-prev]"))t.page>0?(i.removeAttribute(ue),i.removeAttribute(pe)):(i.setAttribute(ue,""),i.setAttribute(pe,"-1"))}const i=this.getSlide();if(!i)return;let n=i.downloadSrc||"";n||"image"!==i.type||i.error||!ve(i[me])||(n=i[me]);for(const t of e.querySelectorAll("[data-fancybox-download]")){const e=i.downloadFilename;n?(t.removeAttribute(ue),t.removeAttribute(pe),t.setAttribute(ge,n),t.setAttribute(fe,e||n),t.setAttribute("target","_blank")):(t.setAttribute(ue,""),t.setAttribute(pe,"-1"),t.removeAttribute(ge),t.removeAttribute(fe))}})),this.emit("initCarousel")}attachEvents(){const t=this,e=t.container;if(!e)return;e.addEventListener("click",t.onClick,{passive:!1,capture:!1}),e.addEventListener("wheel",t.onWheel,{passive:!1,capture:!1}),document.addEventListener("keydown",t.onKeydown,{passive:!1,capture:!0}),document.addEventListener("visibilitychange",t.onVisibilityChange,!1),document.addEventListener("mousemove",t.onMousemove),t.option("trapFocus")&&document.addEventListener("focus",t.onFocus,!0),window.addEventListener("resize",t.onResize);const i=window.visualViewport;i&&(i.addEventListener("scroll",t.onResize),i.addEventListener("resize",t.onResize))}detachEvents(){const t=this,e=t.container;if(!e)return;document.removeEventListener("keydown",t.onKeydown,{passive:!1,capture:!0}),e.removeEventListener("wheel",t.onWheel,{passive:!1,capture:!1}),e.removeEventListener("click",t.onClick,{passive:!1,capture:!1}),document.removeEventListener("mousemove",t.onMousemove),window.removeEventListener("resize",t.onResize);const i=window.visualViewport;i&&(i.removeEventListener("resize",t.onResize),i.removeEventListener("scroll",t.onResize)),document.removeEventListener("visibilitychange",t.onVisibilityChange,!1),document.removeEventListener("focus",t.onFocus,!0)}scale(){const t=this.container;if(!t)return;const e=window.visualViewport,i=Math.max(1,(null==e?void 0:e.scale)||1);let n="",s="",o="";if(e&&i>1){let t=`${e.offsetLeft}px`,a=`${e.offsetTop}px`;n=e.width*i+"px",s=e.height*i+"px",o=`translate3d(${t}, ${a}, 0) scale(${1/i})`}t.style.transform=o,t.style.width=n,t.style.height=s}onClick(t){var e;const{container:i,isCompact:n}=this;if(!i||this.isClosing())return;!n&&this.option("idle")&&this.resetIdle();const s=t.composedPath()[0];if(s.closest(".fancybox-spinner")||s.closest("[data-fancybox-close]"))return t.preventDefault(),void this.close(t);if(s.closest("[data-fancybox-prev]"))return t.preventDefault(),void this.prev();if(s.closest("[data-fancybox-next]"))return t.preventDefault(),void this.next();if("click"===t.type&&0===t.detail)return;if(Math.abs(t.pageX-Ee)>30||Math.abs(t.pageY-Se)>30)return;const o=document.activeElement;if(be()&&o&&i.contains(o))return;if(n&&"image"===(null===(e=this.getSlide())||void 0===e?void 0:e.type))return void(this.clickTimer?(clearTimeout(this.clickTimer),this.clickTimer=null):this.clickTimer=setTimeout((()=>{this.toggleIdle(),this.clickTimer=null}),350));if(this.emit("click",t),t.defaultPrevented)return;let a=!1;if(s.closest(".fancybox__content")){if(o){if(o.closest("[contenteditable]"))return;s.matches(nt)||o.blur()}if(be())return;a=this.option("contentClick")}else s.closest(".fancybox__carousel")&&!s.matches(nt)&&(a=this.option("backdropClick"));"close"===a?(t.preventDefault(),this.close(t)):"next"===a?(t.preventDefault(),this.next()):"prev"===a&&(t.preventDefault(),this.prev())}onWheel(t){const e=t.target;let n=this.option("wheel",t);e.closest(".fancybox__thumbs")&&(n="slide");const s="slide"===n,o=[-t.deltaX||0,-t.deltaY||0,-t.detail||0].reduce((function(t,e){return Math.abs(e)>Math.abs(t)?e:t})),a=Math.max(-1,Math.min(1,o)),r=Date.now();this.pwt&&r-this.pwt<300?s&&t.preventDefault():(this.pwt=r,this.emit("wheel",t,a),t.defaultPrevented||("close"===n?(t.preventDefault(),this.close(t)):"slide"===n&&(i(e)||(t.preventDefault(),this[a>0?"prev":"next"]()))))}onScroll(){window.scrollTo(Pe,Ce)}onKeydown(t){if(!this.isTopmost())return;this.isCompact||!this.option("idle")||this.isClosing()||this.resetIdle();const e=t.key,i=this.option("keyboard");if(!i)return;const n=t.composedPath()[0],s=document.activeElement&&document.activeElement.classList,o=s&&s.contains("f-button")||n.dataset.carouselPage||n.dataset.carouselIndex;if("Escape"!==e&&!o&&E(n)){if(n.isContentEditable||-1!==["TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(n.nodeName))return}if("Tab"===t.key?P(this.container,ae):S(this.container,ae),t.ctrlKey||t.altKey||t.shiftKey)return;this.emit("keydown",e,t);const a=i[e];a&&"function"==typeof this[a]&&(t.preventDefault(),this[a]())}onResize(){const t=this.container;if(!t)return;const e=this.isCompact;t.classList.toggle(le,e),this.manageCaption(this.getSlide()),this.isCompact?this.clearIdle():this.endIdle(),this.scale(),this.emit("resize")}onFocus(t){this.isTopmost()&&this.checkFocus(t)}onMousemove(t){this.prevMouseMoveEvent=t,!this.isCompact&&this.option("idle")&&this.resetIdle()}onVisibilityChange(){"visible"===document.visibilityState?this.checkFocus():this.endIdle()}manageCloseBtn(t){const e=this.optionFor(t,"closeButton")||!1;if("auto"===e){const t=this.plugins.Toolbar;if(t&&t.state===Zt.Ready)return}if(!e)return;if(!t.contentEl||t.closeBtnEl)return;const i=this.option("tpl.closeButton");if(i){const e=n(this.localize(i));t.closeBtnEl=t.contentEl.appendChild(e),t.el&&P(t.el,"has-close-btn")}}manageCaption(t=void 0){var e,i;const n="fancybox__caption",s=this.container;if(!s)return;S(s,de);const o=this.isCompact||this.option("commonCaption"),a=!o;if(this.caption&&this.stop(this.caption),a&&this.caption&&(this.caption.remove(),this.caption=null),o&&!this.caption)for(const t of(null===(e=this.carousel)||void 0===e?void 0:e.slides)||[])t.captionEl&&(t.captionEl.remove(),t.captionEl=void 0,S(t.el,de),null===(i=t.el)||void 0===i||i.removeAttribute("aria-labelledby"));if(t||(t=this.getSlide()),!t||o&&!this.isCurrentSlide(t))return;const r=t.el;let l=this.optionFor(t,"caption","");if(!l)return void(o&&this.caption&&this.animate(this.caption,"f-fadeOut",(()=>{this.caption&&(this.caption.innerHTML="")})));let c=null;if(a){if(c=t.captionEl||null,r&&!c){const e=n+`_${this.id}_${t.index}`;c=document.createElement("div"),P(c,n),c.setAttribute("id",e),t.captionEl=r.appendChild(c),P(r,de),r.setAttribute("aria-labelledby",e)}}else{if(c=this.caption,c||(c=s.querySelector("."+n)),!c){c=document.createElement("div"),c.dataset.fancyboxCaption="",P(c,n);(this.footer||s).prepend(c)}P(s,de),this.caption=c}c&&(c.innerHTML="",ve(l)||"number"==typeof l?c.innerHTML=l+"":l instanceof HTMLElement&&c.appendChild(l))}checkFocus(t){this.focus(t)}focus(t){var e;if(this.ignoreFocusChange)return;const i=document.activeElement||null,n=(null==t?void 0:t.target)||null,s=this.container,o=null===(e=this.carousel)||void 0===e?void 0:e.viewport;if(!s||!o)return;if(!t&&i&&s.contains(i))return;const a=this.getSlide(),r=a&&a.state===lt.Ready?a.el:null;if(!r||r.contains(i)||s===i)return;t&&t.cancelable&&t.preventDefault(),this.ignoreFocusChange=!0;const l=Array.from(s.querySelectorAll(nt));let c=[],h=null;for(let t of l){const e=!t.offsetParent||!!t.closest('[aria-hidden="true"]'),i=r&&r.contains(t),n=!o.contains(t);if(t===s||(i||n)&&!e){c.push(t);const e=t.dataset.origTabindex;void 0!==e&&e&&(t.tabIndex=parseFloat(e)),t.removeAttribute("data-orig-tabindex"),!t.hasAttribute("autoFocus")&&h||(h=t)}else{const e=void 0===t.dataset.origTabindex?t.getAttribute("tabindex")||"":t.dataset.origTabindex;e&&(t.dataset.origTabindex=e),t.tabIndex=-1}}let d=null;t?(!n||c.indexOf(n)<0)&&(d=h||s,c.length&&(i===xe?d=c[0]:this.lastFocus!==s&&i!==we||(d=c[c.length-1]))):d=a&&"image"===a.type?s:h||s,d&&st(d),this.lastFocus=document.activeElement,this.ignoreFocusChange=!1}next(){const t=this.carousel;t&&t.pages.length>1&&t.slideNext()}prev(){const t=this.carousel;t&&t.pages.length>1&&t.slidePrev()}jumpTo(...t){this.carousel&&this.carousel.slideTo(...t)}isTopmost(){var t;return(null===(t=Oe.getInstance())||void 0===t?void 0:t.id)==this.id}animate(t=null,e="",i){if(!t||!e)return void(i&&i());this.stop(t);const n=s=>{s.target===t&&t.dataset.animationName&&(t.removeEventListener("animationend",n),delete t.dataset.animationName,i&&i(),S(t,e))};t.dataset.animationName=e,t.addEventListener("animationend",n),P(t,e)}stop(t){t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!1,cancelable:!0,currentTarget:t}))}setContent(t,e="",i=!0){if(this.isClosing())return;const s=t.el;if(!s)return;let o=null;if(E(e)?o=e:(o=n(e+""),E(o)||(o=document.createElement("div"),o.innerHTML=e+"")),["img","picture","iframe","video","audio"].includes(o.nodeName.toLowerCase())){const t=document.createElement("div");t.appendChild(o),o=t}E(o)&&t.filter&&!t.error&&(o=o.querySelector(t.filter)),o&&E(o)?(P(o,"fancybox__content"),t.id&&o.setAttribute("id",t.id),s.classList.add(`has-${t.error?"error":t.type||"unknown"}`),s.prepend(o),"none"===o.style.display&&(o.style.display=""),"none"===getComputedStyle(o).getPropertyValue("display")&&(o.style.display=t.display||this.option("defaultDisplay")||"flex"),t.contentEl=o,i&&this.revealContent(t),this.manageCloseBtn(t),this.manageCaption(t)):this.setError(t,"{{ELEMENT_NOT_FOUND}}")}revealContent(t,e){const i=t.el,n=t.contentEl;i&&n&&(this.emit("reveal",t),this.hideLoading(t),t.state=lt.Opening,(e=this.isOpeningSlide(t)?void 0===e?this.optionFor(t,"showClass"):e:"f-fadeIn")?this.animate(n,e,(()=>{this.done(t)})):this.done(t))}done(t){this.isClosing()||(t.state=lt.Ready,this.emit("done",t),P(t.el,"is-done"),this.isCurrentSlide(t)&&this.option("autoFocus")&&queueMicrotask((()=>{var e;null===(e=t.panzoom)||void 0===e||e.updateControls(),this.option("autoFocus")&&this.focus()})),this.isOpeningSlide(t)&&(S(this.container,he),!this.isCompact&&this.option("idle")&&this.setIdle()))}isCurrentSlide(t){const e=this.getSlide();return!(!t||!e)&&e.index===t.index}isOpeningSlide(t){var e,i;return null===(null===(e=this.carousel)||void 0===e?void 0:e.prevPage)&&t&&t.index===(null===(i=this.getSlide())||void 0===i?void 0:i.index)}showLoading(t){t.state=lt.Loading;const e=t.el;if(!e)return;P(e,ce),this.emit("loading",t),t.spinnerEl||setTimeout((()=>{if(!this.isClosing()&&!t.spinnerEl&&t.state===lt.Loading){let i=n(x);P(i,"fancybox-spinner"),t.spinnerEl=i,e.prepend(i),this.animate(i,"f-fadeIn")}}),250)}hideLoading(t){const e=t.el;if(!e)return;const i=t.spinnerEl;this.isClosing()?null==i||i.remove():(S(e,ce),i&&this.animate(i,"f-fadeOut",(()=>{i.remove()})),t.state===lt.Loading&&(this.emit("loaded",t),t.state=lt.Ready))}setError(t,e){if(this.isClosing())return;const i=new Event("error",{bubbles:!0,cancelable:!0});if(this.emit("error",i,t),i.defaultPrevented)return;t.error=e,this.hideLoading(t),this.clearContent(t);const n=document.createElement("div");n.classList.add("fancybox-error"),n.innerHTML=this.localize(e||"<p>{{ERROR}}</p>"),this.setContent(t,n)}clearContent(t){if(void 0===t.state)return;this.emit("clearContent",t),t.contentEl&&(t.contentEl.remove(),t.contentEl=void 0);const e=t.el;e&&(S(e,"has-error"),S(e,"has-unknown"),S(e,`has-${t.type||"unknown"}`)),t.closeBtnEl&&t.closeBtnEl.remove(),t.closeBtnEl=void 0,t.captionEl&&t.captionEl.remove(),t.captionEl=void 0,t.spinnerEl&&t.spinnerEl.remove(),t.spinnerEl=void 0}getSlide(){var t;const e=this.carousel;return(null===(t=null==e?void 0:e.pages[null==e?void 0:e.page])||void 0===t?void 0:t.slides[0])||void 0}close(t,e){if(this.isClosing())return;const i=new Event("shouldClose",{bubbles:!0,cancelable:!0});if(this.emit("shouldClose",i,t),i.defaultPrevented)return;t&&t.cancelable&&(t.preventDefault(),t.stopPropagation());const n=()=>{this.proceedClose(t,e)};this.startedFs&&ye&&ye.isFullscreen()?Promise.resolve(ye.exit()).then((()=>n())):n()}clearIdle(){this.idleTimer&&clearTimeout(this.idleTimer),this.idleTimer=null}setIdle(t=!1){const e=()=>{this.clearIdle(),this.idle=!0,P(this.container,"is-idle"),this.emit("setIdle")};if(this.clearIdle(),!this.isClosing())if(t)e();else{const t=this.option("idle");t&&(this.idleTimer=setTimeout(e,t))}}endIdle(){this.clearIdle(),this.idle&&!this.isClosing()&&(this.idle=!1,S(this.container,"is-idle"),this.emit("endIdle"))}resetIdle(){this.endIdle(),this.setIdle()}toggleIdle(){this.idle?this.endIdle():this.setIdle(!0)}toggleFullscreen(){ye&&(ye.isFullscreen()?ye.exit():ye.request().then((()=>{this.startedFs=!0})))}isClosing(){return[rt.Closing,rt.CustomClosing,rt.Destroy].includes(this.state)}proceedClose(t,e){var i,n;this.state=rt.Closing,this.clearIdle(),this.detachEvents();const s=this.container,o=this.carousel,a=this.getSlide(),r=a&&this.option("placeFocusBack")?a.triggerEl||this.option("triggerEl"):null;if(r&&(tt(r)?st(r):r.focus()),s&&(S(s,he),P(s,"is-closing"),s.setAttribute(oe,"true"),this.option("animated")&&P(s,re),s.style.pointerEvents="none"),o){o.clearTransitions(),null===(i=o.panzoom)||void 0===i||i.destroy(),null===(n=o.plugins.Navigation)||void 0===n||n.detach();for(const t of o.slides){t.state=lt.Closing,this.hideLoading(t);const e=t.contentEl;e&&this.stop(e);const i=null==t?void 0:t.panzoom;i&&(i.stop(),i.detachEvents(),i.detachObserver()),this.isCurrentSlide(t)||o.emit("removeSlide",t)}}Pe=window.scrollX,Ce=window.scrollY,window.addEventListener("scroll",this.onScroll),this.emit("close",t),this.state!==rt.CustomClosing?(void 0===e&&a&&(e=this.optionFor(a,"hideClass")),e&&a?(this.animate(a.contentEl,e,(()=>{o&&o.emit("removeSlide",a)})),setTimeout((()=>{this.destroy()}),500)):this.destroy()):setTimeout((()=>{this.destroy()}),500)}destroy(){var t;if(this.state===rt.Destroy)return;window.removeEventListener("scroll",this.onScroll),this.state=rt.Destroy,null===(t=this.carousel)||void 0===t||t.destroy();const e=this.container;e&&e.remove(),Te.delete(this.id);const i=Oe.getInstance();i?i.focus():(we&&(we.remove(),we=null),xe&&(xe.remove(),xe=null),S(document.documentElement,ee),(()=>{if(!et)return;const t=document,e=t.body;e.classList.remove(ie),e.style.setProperty(se,""),t.documentElement.style.setProperty(ne,"")})(),this.emit("destroy"))}static bind(t,e,i){if(!et)return;let n,s="",o={};if(void 0===t?n=document.body:ve(t)?(n=document.body,s=t,"object"==typeof e&&(o=e||{})):(n=t,ve(e)&&(s=e),"object"==typeof i&&(o=i||{})),!n||!E(n))return;s=s||"[data-fancybox]";const a=Oe.openers.get(n)||new Map;a.set(s,o),Oe.openers.set(n,a),1===a.size&&n.addEventListener("click",Oe.fromEvent)}static unbind(t,e){let i,n="";if(ve(t)?(i=document.body,n=t):(i=t,ve(e)&&(n=e)),!i)return;const s=Oe.openers.get(i);s&&n&&s.delete(n),n&&s||(Oe.openers.delete(i),i.removeEventListener("click",Oe.fromEvent))}static destroy(){let t;for(;t=Oe.getInstance();)t.destroy();for(const t of Oe.openers.keys())t.removeEventListener("click",Oe.fromEvent);Oe.openers=new Map}static fromEvent(t){if(t.defaultPrevented)return;if(t.button&&0!==t.button)return;if(t.ctrlKey||t.metaKey||t.shiftKey)return;let e=t.composedPath()[0];const i=e.closest("[data-fancybox-trigger]");if(i){const t=i.dataset.fancyboxTrigger||"",n=document.querySelectorAll(`[data-fancybox="${t}"]`),s=parseInt(i.dataset.fancyboxIndex||"",10)||0;e=n[s]||e}if(!(e&&e instanceof Element))return;let n,s,o,a;if([...Oe.openers].reverse().find((([t,i])=>!(!t.contains(e)||![...i].reverse().find((([i,r])=>{let l=e.closest(i);return!!l&&(n=t,s=i,o=l,a=r,!0)}))))),!n||!s||!o)return;a=a||{},t.preventDefault(),e=o;let r=[],l=u({},at,a);l.event=t,l.triggerEl=e,l.delegate=i;const c=l.groupAll,h=l.groupAttr,d=h&&e?e.getAttribute(`${h}`):"";if((!e||d||c)&&(r=[].slice.call(n.querySelectorAll(s))),e&&!c&&(r=d?r.filter((t=>t.getAttribute(`${h}`)===d)):[e]),!r.length)return;const p=Oe.getInstance();return p&&p.options.triggerEl&&r.indexOf(p.options.triggerEl)>-1?void 0:(e&&(l.startIndex=r.indexOf(e)),Oe.fromNodes(r,l))}static fromSelector(t,e,i){let n=null,s="",o={};if(ve(t)?(n=document.body,s=t,"object"==typeof e&&(o=e||{})):t instanceof HTMLElement&&ve(e)&&(n=t,s=e,"object"==typeof i&&(o=i||{})),!n||!s)return!1;const a=Oe.openers.get(n);return!!a&&(o=u({},a.get(s)||{},o),!!o&&Oe.fromNodes(Array.from(n.querySelectorAll(s)),o))}static fromNodes(t,e){e=u({},at,e||{});const i=[];for(const n of t){const t=n.dataset||{},s=t[me]||n.getAttribute(ge)||n.getAttribute("currentSrc")||n.getAttribute(me)||void 0;let o;const a=e.delegate;let r;a&&i.length===e.startIndex&&(o=a instanceof HTMLImageElement?a:a.querySelector("img:not([aria-hidden])")),o||(o=n instanceof HTMLImageElement?n:n.querySelector("img:not([aria-hidden])")),o&&(r=o.currentSrc||o[me]||void 0,!r&&o.dataset&&(r=o.dataset.lazySrc||o.dataset[me]||void 0));const l={src:s,triggerEl:n,thumbEl:o,thumbElSrc:r,thumbSrc:r};for(const e in t){let i=t[e]+"";i="false"!==i&&("true"===i||i),l[e]=i}i.push(l)}return new Oe(i,e)}static getInstance(t){if(t)return Te.get(t);return Array.from(Te.values()).reverse().find((t=>!t.isClosing()&&t))||null}static getSlide(){var t;return(null===(t=Oe.getInstance())||void 0===t?void 0:t.getSlide())||null}static show(t=[],e={}){return new Oe(t,e)}static next(){const t=Oe.getInstance();t&&t.next()}static prev(){const t=Oe.getInstance();t&&t.prev()}static close(t=!0,...e){if(t)for(const t of Te.values())t.close(...e);else{const t=Oe.getInstance();t&&t.close(...e)}}}Object.defineProperty(Oe,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.36"}),Object.defineProperty(Oe,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:at}),Object.defineProperty(Oe,"Plugins",{enumerable:!0,configurable:!0,writable:!0,value:te}),Object.defineProperty(Oe,"openers",{enumerable:!0,configurable:!0,writable:!0,value:new Map});


/***/ }),

/***/ "./node_modules/@yandex/ymaps3-default-ui-theme/dist/esm/index.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@yandex/ymaps3-default-ui-theme/dist/esm/index.mjs ***!
  \*************************************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YMapDefaultMarker: () => (/* binding */ s),
/* harmony export */   YMapDefaultRuler: () => (/* binding */ c),
/* harmony export */   YMapGeolocationControl: () => (/* binding */ h),
/* harmony export */   YMapPopupMarker: () => (/* binding */ u),
/* harmony export */   YMapRotateControl: () => (/* binding */ p),
/* harmony export */   YMapRotateTiltControl: () => (/* binding */ d),
/* harmony export */   YMapRouteControl: () => (/* binding */ v),
/* harmony export */   YMapSearchControl: () => (/* binding */ g),
/* harmony export */   YMapTiltControl: () => (/* binding */ f),
/* harmony export */   YMapZoomControl: () => (/* binding */ m)
/* harmony export */ });
/*! For license information please see index.mjs.LICENSE.txt */
var t,e,n,r,o={705:(t,e,n)=>{var r=n(639).Symbol;t.exports=r},221:(t,e,n)=>{var r=n(705),o=n(607),i=n(333),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},561:(t,e,n)=>{var r=n(990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},957:(t,e,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},607:(t,e,n)=>{var r=n(705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,l=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,l),n=t[l];try{t[l]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[l]=n:delete t[l]),o}},333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},639:(t,e,n)=>{var r=n(957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},990:t=>{var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},279:(t,e,n)=>{var r=n(218),o=n(771),i=n(841),a=Math.max,l=Math.min;t.exports=function(t,e,n){var s,c,h,u,p,d,v=0,g=!1,f=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function _(e){var n=s,r=c;return s=c=void 0,v=e,u=t.apply(r,n)}function w(t){var n=t-d;return void 0===d||n>=e||n<0||f&&t-v>=h}function y(){var t=o();if(w(t))return C(t);p=setTimeout(y,function(t){var n=e-(t-d);return f?l(n,h-(t-v)):n}(t))}function C(t){return p=void 0,m&&s?_(t):(s=c=void 0,u)}function M(){var t=o(),n=w(t);if(s=arguments,c=this,d=t,n){if(void 0===p)return function(t){return v=t,p=setTimeout(y,e),g?_(t):u}(d);if(f)return clearTimeout(p),p=setTimeout(y,e),_(d)}return void 0===p&&(p=setTimeout(y,e)),u}return e=i(e)||0,r(n)&&(g=!!n.leading,h=(f="maxWait"in n)?a(i(n.maxWait)||0,e):h,m="trailing"in n?!!n.trailing:m),M.cancel=function(){void 0!==p&&clearTimeout(p),v=0,s=d=c=p=void 0},M.flush=function(){return void 0===p?u:C(o())},M}},218:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},5:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},448:(t,e,n)=>{var r=n(221),o=n(5);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},486:function(t,e,n){var r;t=n.nmd(t),function(){var o,i="Expected a function",a="__lodash_hash_undefined__",l="__lodash_placeholder__",s=32,c=128,h=1/0,u=9007199254740991,p=NaN,d=4294967295,v=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",s],["partialRight",64],["rearg",256]],g="[object Arguments]",f="[object Array]",m="[object Boolean]",_="[object Date]",w="[object Error]",y="[object Function]",C="[object GeneratorFunction]",M="[object Map]",x="[object Number]",L="[object Object]",b="[object Promise]",z="[object RegExp]",E="[object Set]",H="[object String]",k="[object Symbol]",A="[object WeakMap]",V="[object ArrayBuffer]",S="[object DataView]",q="[object Float32Array]",O="[object Float64Array]",I="[object Int8Array]",T="[object Int16Array]",R="[object Int32Array]",j="[object Uint8Array]",P="[object Uint8ClampedArray]",F="[object Uint16Array]",D="[object Uint32Array]",N=/\b__p \+= '';/g,$=/\b(__p \+=) '' \+/g,B=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,Q=/[&<>"']/g,Y=RegExp(U.source),W=RegExp(Q.source),K=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,J=/<%=([\s\S]+?)%>/g,G=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/[\\^$.*+?()[\]{}|]/g,nt=RegExp(et.source),rt=/^\s+/,ot=/\s/,it=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,at=/\{\n\/\* \[wrapped with (.+)\] \*/,lt=/,? & /,st=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ct=/[()=,{}\[\]\/\s]/,ht=/\\(\\)?/g,ut=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pt=/\w*$/,dt=/^[-+]0x[0-9a-f]+$/i,vt=/^0b[01]+$/i,gt=/^\[object .+?Constructor\]$/,ft=/^0o[0-7]+$/i,mt=/^(?:0|[1-9]\d*)$/,_t=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,wt=/($^)/,yt=/['\n\r\u2028\u2029\\]/g,Ct="\\ud800-\\udfff",Mt="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",xt="\\u2700-\\u27bf",Lt="a-z\\xdf-\\xf6\\xf8-\\xff",bt="A-Z\\xc0-\\xd6\\xd8-\\xde",zt="\\ufe0e\\ufe0f",Et="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ht="["+Ct+"]",kt="["+Et+"]",At="["+Mt+"]",Vt="\\d+",St="["+xt+"]",qt="["+Lt+"]",Ot="[^"+Ct+Et+Vt+xt+Lt+bt+"]",It="\\ud83c[\\udffb-\\udfff]",Tt="[^"+Ct+"]",Rt="(?:\\ud83c[\\udde6-\\uddff]){2}",jt="[\\ud800-\\udbff][\\udc00-\\udfff]",Pt="["+bt+"]",Ft="\\u200d",Dt="(?:"+qt+"|"+Ot+")",Nt="(?:"+Pt+"|"+Ot+")",$t="(?:['’](?:d|ll|m|re|s|t|ve))?",Bt="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ut="(?:"+At+"|"+It+")?",Qt="["+zt+"]?",Yt=Qt+Ut+"(?:"+Ft+"(?:"+[Tt,Rt,jt].join("|")+")"+Qt+Ut+")*",Wt="(?:"+[St,Rt,jt].join("|")+")"+Yt,Kt="(?:"+[Tt+At+"?",At,Rt,jt,Ht].join("|")+")",Zt=RegExp("['’]","g"),Jt=RegExp(At,"g"),Gt=RegExp(It+"(?="+It+")|"+Kt+Yt,"g"),Xt=RegExp([Pt+"?"+qt+"+"+$t+"(?="+[kt,Pt,"$"].join("|")+")",Nt+"+"+Bt+"(?="+[kt,Pt+Dt,"$"].join("|")+")",Pt+"?"+Dt+"+"+$t,Pt+"+"+Bt,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Vt,Wt].join("|"),"g"),te=RegExp("["+Ft+Ct+Mt+zt+"]"),ee=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ne=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],re=-1,oe={};oe[q]=oe[O]=oe[I]=oe[T]=oe[R]=oe[j]=oe[P]=oe[F]=oe[D]=!0,oe[g]=oe[f]=oe[V]=oe[m]=oe[S]=oe[_]=oe[w]=oe[y]=oe[M]=oe[x]=oe[L]=oe[z]=oe[E]=oe[H]=oe[A]=!1;var ie={};ie[g]=ie[f]=ie[V]=ie[S]=ie[m]=ie[_]=ie[q]=ie[O]=ie[I]=ie[T]=ie[R]=ie[M]=ie[x]=ie[L]=ie[z]=ie[E]=ie[H]=ie[k]=ie[j]=ie[P]=ie[F]=ie[D]=!0,ie[w]=ie[y]=ie[A]=!1;var ae={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},le=parseFloat,se=parseInt,ce="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,he="object"==typeof self&&self&&self.Object===Object&&self,ue=ce||he||Function("return this")(),pe=e&&!e.nodeType&&e,de=pe&&t&&!t.nodeType&&t,ve=de&&de.exports===pe,ge=ve&&ce.process,fe=function(){try{return de&&de.require&&de.require("util").types||ge&&ge.binding&&ge.binding("util")}catch(t){}}(),me=fe&&fe.isArrayBuffer,_e=fe&&fe.isDate,we=fe&&fe.isMap,ye=fe&&fe.isRegExp,Ce=fe&&fe.isSet,Me=fe&&fe.isTypedArray;function xe(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Le(t,e,n,r){for(var o=-1,i=null==t?0:t.length;++o<i;){var a=t[o];e(r,a,n(a),t)}return r}function be(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}function ze(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}function Ee(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function He(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}function ke(t,e){return!(null==t||!t.length)&&Pe(t,e,0)>-1}function Ae(t,e,n){for(var r=-1,o=null==t?0:t.length;++r<o;)if(n(e,t[r]))return!0;return!1}function Ve(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function Se(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}function qe(t,e,n,r){var o=-1,i=null==t?0:t.length;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}function Oe(t,e,n,r){var o=null==t?0:t.length;for(r&&o&&(n=t[--o]);o--;)n=e(n,t[o],o,t);return n}function Ie(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var Te=$e("length");function Re(t,e,n){var r;return n(t,(function(t,n,o){if(e(t,n,o))return r=n,!1})),r}function je(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}function Pe(t,e,n){return e==e?function(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}(t,e,n):je(t,De,n)}function Fe(t,e,n,r){for(var o=n-1,i=t.length;++o<i;)if(r(t[o],e))return o;return-1}function De(t){return t!=t}function Ne(t,e){var n=null==t?0:t.length;return n?Qe(t,e)/n:p}function $e(t){return function(e){return null==e?o:e[t]}}function Be(t){return function(e){return null==t?o:t[e]}}function Ue(t,e,n,r,o){return o(t,(function(t,o,i){n=r?(r=!1,t):e(n,t,o,i)})),n}function Qe(t,e){for(var n,r=-1,i=t.length;++r<i;){var a=e(t[r]);a!==o&&(n=n===o?a:n+a)}return n}function Ye(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function We(t){return t?t.slice(0,pn(t)+1).replace(rt,""):t}function Ke(t){return function(e){return t(e)}}function Ze(t,e){return Ve(e,(function(e){return t[e]}))}function Je(t,e){return t.has(e)}function Ge(t,e){for(var n=-1,r=t.length;++n<r&&Pe(e,t[n],0)>-1;);return n}function Xe(t,e){for(var n=t.length;n--&&Pe(e,t[n],0)>-1;);return n}var tn=Be({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),en=Be({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nn(t){return"\\"+ae[t]}function rn(t){return te.test(t)}function on(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function an(t,e){return function(n){return t(e(n))}}function ln(t,e){for(var n=-1,r=t.length,o=0,i=[];++n<r;){var a=t[n];a!==e&&a!==l||(t[n]=l,i[o++]=n)}return i}function sn(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function cn(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}function hn(t){return rn(t)?function(t){for(var e=Gt.lastIndex=0;Gt.test(t);)++e;return e}(t):Te(t)}function un(t){return rn(t)?function(t){return t.match(Gt)||[]}(t):function(t){return t.split("")}(t)}function pn(t){for(var e=t.length;e--&&ot.test(t.charAt(e)););return e}var dn=Be({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),vn=function t(e){var n,r=(e=null==e?ue:vn.defaults(ue.Object(),e,vn.pick(ue,ne))).Array,ot=e.Date,Ct=e.Error,Mt=e.Function,xt=e.Math,Lt=e.Object,bt=e.RegExp,zt=e.String,Et=e.TypeError,Ht=r.prototype,kt=Mt.prototype,At=Lt.prototype,Vt=e["__core-js_shared__"],St=kt.toString,qt=At.hasOwnProperty,Ot=0,It=(n=/[^.]+$/.exec(Vt&&Vt.keys&&Vt.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",Tt=At.toString,Rt=St.call(Lt),jt=ue._,Pt=bt("^"+St.call(qt).replace(et,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ft=ve?e.Buffer:o,Dt=e.Symbol,Nt=e.Uint8Array,$t=Ft?Ft.allocUnsafe:o,Bt=an(Lt.getPrototypeOf,Lt),Ut=Lt.create,Qt=At.propertyIsEnumerable,Yt=Ht.splice,Wt=Dt?Dt.isConcatSpreadable:o,Kt=Dt?Dt.iterator:o,Gt=Dt?Dt.toStringTag:o,te=function(){try{var t=ci(Lt,"defineProperty");return t({},"",{}),t}catch(t){}}(),ae=e.clearTimeout!==ue.clearTimeout&&e.clearTimeout,ce=ot&&ot.now!==ue.Date.now&&ot.now,he=e.setTimeout!==ue.setTimeout&&e.setTimeout,pe=xt.ceil,de=xt.floor,ge=Lt.getOwnPropertySymbols,fe=Ft?Ft.isBuffer:o,Te=e.isFinite,Be=Ht.join,gn=an(Lt.keys,Lt),fn=xt.max,mn=xt.min,_n=ot.now,wn=e.parseInt,yn=xt.random,Cn=Ht.reverse,Mn=ci(e,"DataView"),xn=ci(e,"Map"),Ln=ci(e,"Promise"),bn=ci(e,"Set"),zn=ci(e,"WeakMap"),En=ci(Lt,"create"),Hn=zn&&new zn,kn={},An=Ri(Mn),Vn=Ri(xn),Sn=Ri(Ln),qn=Ri(bn),On=Ri(zn),In=Dt?Dt.prototype:o,Tn=In?In.valueOf:o,Rn=In?In.toString:o;function jn(t){if(tl(t)&&!$a(t)&&!(t instanceof Nn)){if(t instanceof Dn)return t;if(qt.call(t,"__wrapped__"))return ji(t)}return new Dn(t)}var Pn=function(){function t(){}return function(e){if(!Xa(e))return{};if(Ut)return Ut(e);t.prototype=e;var n=new t;return t.prototype=o,n}}();function Fn(){}function Dn(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=o}function Nn(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=d,this.__views__=[]}function $n(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Bn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Un(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Qn(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Un;++e<n;)this.add(t[e])}function Yn(t){var e=this.__data__=new Bn(t);this.size=e.size}function Wn(t,e){var n=$a(t),r=!n&&Na(t),o=!n&&!r&&Ya(t),i=!n&&!r&&!o&&sl(t),a=n||r||o||i,l=a?Ye(t.length,zt):[],s=l.length;for(var c in t)!e&&!qt.call(t,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||fi(c,s))||l.push(c);return l}function Kn(t){var e=t.length;return e?t[Ur(0,e-1)]:o}function Zn(t,e){return Si(Eo(t),ir(e,0,t.length))}function Jn(t){return Si(Eo(t))}function Gn(t,e,n){(n!==o&&!Pa(t[e],n)||n===o&&!(e in t))&&rr(t,e,n)}function Xn(t,e,n){var r=t[e];qt.call(t,e)&&Pa(r,n)&&(n!==o||e in t)||rr(t,e,n)}function tr(t,e){for(var n=t.length;n--;)if(Pa(t[n][0],e))return n;return-1}function er(t,e,n,r){return hr(t,(function(t,o,i){e(r,t,n(t),i)})),r}function nr(t,e){return t&&Ho(e,Al(e),t)}function rr(t,e,n){"__proto__"==e&&te?te(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function or(t,e){for(var n=-1,i=e.length,a=r(i),l=null==t;++n<i;)a[n]=l?o:bl(t,e[n]);return a}function ir(t,e,n){return t==t&&(n!==o&&(t=t<=n?t:n),e!==o&&(t=t>=e?t:e)),t}function ar(t,e,n,r,i,a){var l,s=1&e,c=2&e,h=4&e;if(n&&(l=i?n(t,r,i,a):n(t)),l!==o)return l;if(!Xa(t))return t;var u=$a(t);if(u){if(l=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&qt.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(t),!s)return Eo(t,l)}else{var p=pi(t),d=p==y||p==C;if(Ya(t))return Co(t,s);if(p==L||p==g||d&&!i){if(l=c||d?{}:vi(t),!s)return c?function(t,e){return Ho(t,ui(t),e)}(t,function(t,e){return t&&Ho(e,Vl(e),t)}(l,t)):function(t,e){return Ho(t,hi(t),e)}(t,nr(l,t))}else{if(!ie[p])return i?t:{};l=function(t,e,n){var r,o=t.constructor;switch(e){case V:return Mo(t);case m:case _:return new o(+t);case S:return function(t,e){var n=e?Mo(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,n);case q:case O:case I:case T:case R:case j:case P:case F:case D:return xo(t,n);case M:return new o;case x:case H:return new o(t);case z:return function(t){var e=new t.constructor(t.source,pt.exec(t));return e.lastIndex=t.lastIndex,e}(t);case E:return new o;case k:return r=t,Tn?Lt(Tn.call(r)):{}}}(t,p,s)}}a||(a=new Yn);var v=a.get(t);if(v)return v;a.set(t,l),il(t)?t.forEach((function(r){l.add(ar(r,e,n,r,t,a))})):el(t)&&t.forEach((function(r,o){l.set(o,ar(r,e,n,o,t,a))}));var f=u?o:(h?c?ni:ei:c?Vl:Al)(t);return be(f||t,(function(r,o){f&&(r=t[o=r]),Xn(l,o,ar(r,e,n,o,t,a))})),l}function lr(t,e,n){var r=n.length;if(null==t)return!r;for(t=Lt(t);r--;){var i=n[r],a=e[i],l=t[i];if(l===o&&!(i in t)||!a(l))return!1}return!0}function sr(t,e,n){if("function"!=typeof t)throw new Et(i);return Hi((function(){t.apply(o,n)}),e)}function cr(t,e,n,r){var o=-1,i=ke,a=!0,l=t.length,s=[],c=e.length;if(!l)return s;n&&(e=Ve(e,Ke(n))),r?(i=Ae,a=!1):e.length>=200&&(i=Je,a=!1,e=new Qn(e));t:for(;++o<l;){var h=t[o],u=null==n?h:n(h);if(h=r||0!==h?h:0,a&&u==u){for(var p=c;p--;)if(e[p]===u)continue t;s.push(h)}else i(e,u,r)||s.push(h)}return s}jn.templateSettings={escape:K,evaluate:Z,interpolate:J,variable:"",imports:{_:jn}},jn.prototype=Fn.prototype,jn.prototype.constructor=jn,Dn.prototype=Pn(Fn.prototype),Dn.prototype.constructor=Dn,Nn.prototype=Pn(Fn.prototype),Nn.prototype.constructor=Nn,$n.prototype.clear=function(){this.__data__=En?En(null):{},this.size=0},$n.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},$n.prototype.get=function(t){var e=this.__data__;if(En){var n=e[t];return n===a?o:n}return qt.call(e,t)?e[t]:o},$n.prototype.has=function(t){var e=this.__data__;return En?e[t]!==o:qt.call(e,t)},$n.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=En&&e===o?a:e,this},Bn.prototype.clear=function(){this.__data__=[],this.size=0},Bn.prototype.delete=function(t){var e=this.__data__,n=tr(e,t);return!(n<0||(n==e.length-1?e.pop():Yt.call(e,n,1),--this.size,0))},Bn.prototype.get=function(t){var e=this.__data__,n=tr(e,t);return n<0?o:e[n][1]},Bn.prototype.has=function(t){return tr(this.__data__,t)>-1},Bn.prototype.set=function(t,e){var n=this.__data__,r=tr(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},Un.prototype.clear=function(){this.size=0,this.__data__={hash:new $n,map:new(xn||Bn),string:new $n}},Un.prototype.delete=function(t){var e=li(this,t).delete(t);return this.size-=e?1:0,e},Un.prototype.get=function(t){return li(this,t).get(t)},Un.prototype.has=function(t){return li(this,t).has(t)},Un.prototype.set=function(t,e){var n=li(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},Qn.prototype.add=Qn.prototype.push=function(t){return this.__data__.set(t,a),this},Qn.prototype.has=function(t){return this.__data__.has(t)},Yn.prototype.clear=function(){this.__data__=new Bn,this.size=0},Yn.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Yn.prototype.get=function(t){return this.__data__.get(t)},Yn.prototype.has=function(t){return this.__data__.has(t)},Yn.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Bn){var r=n.__data__;if(!xn||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Un(r)}return n.set(t,e),this.size=n.size,this};var hr=Vo(_r),ur=Vo(wr,!0);function pr(t,e){var n=!0;return hr(t,(function(t,r,o){return n=!!e(t,r,o)})),n}function dr(t,e,n){for(var r=-1,i=t.length;++r<i;){var a=t[r],l=e(a);if(null!=l&&(s===o?l==l&&!ll(l):n(l,s)))var s=l,c=a}return c}function vr(t,e){var n=[];return hr(t,(function(t,r,o){e(t,r,o)&&n.push(t)})),n}function gr(t,e,n,r,o){var i=-1,a=t.length;for(n||(n=gi),o||(o=[]);++i<a;){var l=t[i];e>0&&n(l)?e>1?gr(l,e-1,n,r,o):Se(o,l):r||(o[o.length]=l)}return o}var fr=So(),mr=So(!0);function _r(t,e){return t&&fr(t,e,Al)}function wr(t,e){return t&&mr(t,e,Al)}function yr(t,e){return He(e,(function(e){return Za(t[e])}))}function Cr(t,e){for(var n=0,r=(e=mo(e,t)).length;null!=t&&n<r;)t=t[Ti(e[n++])];return n&&n==r?t:o}function Mr(t,e,n){var r=e(t);return $a(t)?r:Se(r,n(t))}function xr(t){return null==t?t===o?"[object Undefined]":"[object Null]":Gt&&Gt in Lt(t)?function(t){var e=qt.call(t,Gt),n=t[Gt];try{t[Gt]=o;var r=!0}catch(t){}var i=Tt.call(t);return r&&(e?t[Gt]=n:delete t[Gt]),i}(t):function(t){return Tt.call(t)}(t)}function Lr(t,e){return t>e}function br(t,e){return null!=t&&qt.call(t,e)}function zr(t,e){return null!=t&&e in Lt(t)}function Er(t,e,n){for(var i=n?Ae:ke,a=t[0].length,l=t.length,s=l,c=r(l),h=1/0,u=[];s--;){var p=t[s];s&&e&&(p=Ve(p,Ke(e))),h=mn(p.length,h),c[s]=!n&&(e||a>=120&&p.length>=120)?new Qn(s&&p):o}p=t[0];var d=-1,v=c[0];t:for(;++d<a&&u.length<h;){var g=p[d],f=e?e(g):g;if(g=n||0!==g?g:0,!(v?Je(v,f):i(u,f,n))){for(s=l;--s;){var m=c[s];if(!(m?Je(m,f):i(t[s],f,n)))continue t}v&&v.push(f),u.push(g)}}return u}function Hr(t,e,n){var r=null==(t=bi(t,e=mo(e,t)))?t:t[Ti(Ki(e))];return null==r?o:xe(r,t,n)}function kr(t){return tl(t)&&xr(t)==g}function Ar(t,e,n,r,i){return t===e||(null==t||null==e||!tl(t)&&!tl(e)?t!=t&&e!=e:function(t,e,n,r,i,a){var l=$a(t),s=$a(e),c=l?f:pi(t),h=s?f:pi(e),u=(c=c==g?L:c)==L,p=(h=h==g?L:h)==L,d=c==h;if(d&&Ya(t)){if(!Ya(e))return!1;l=!0,u=!1}if(d&&!u)return a||(a=new Yn),l||sl(t)?Xo(t,e,n,r,i,a):function(t,e,n,r,o,i,a){switch(n){case S:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case V:return!(t.byteLength!=e.byteLength||!i(new Nt(t),new Nt(e)));case m:case _:case x:return Pa(+t,+e);case w:return t.name==e.name&&t.message==e.message;case z:case H:return t==e+"";case M:var l=on;case E:var s=1&r;if(l||(l=sn),t.size!=e.size&&!s)return!1;var c=a.get(t);if(c)return c==e;r|=2,a.set(t,e);var h=Xo(l(t),l(e),r,o,i,a);return a.delete(t),h;case k:if(Tn)return Tn.call(t)==Tn.call(e)}return!1}(t,e,c,n,r,i,a);if(!(1&n)){var v=u&&qt.call(t,"__wrapped__"),y=p&&qt.call(e,"__wrapped__");if(v||y){var C=v?t.value():t,b=y?e.value():e;return a||(a=new Yn),i(C,b,n,r,a)}}return!!d&&(a||(a=new Yn),function(t,e,n,r,i,a){var l=1&n,s=ei(t),c=s.length;if(c!=ei(e).length&&!l)return!1;for(var h=c;h--;){var u=s[h];if(!(l?u in e:qt.call(e,u)))return!1}var p=a.get(t),d=a.get(e);if(p&&d)return p==e&&d==t;var v=!0;a.set(t,e),a.set(e,t);for(var g=l;++h<c;){var f=t[u=s[h]],m=e[u];if(r)var _=l?r(m,f,u,e,t,a):r(f,m,u,t,e,a);if(!(_===o?f===m||i(f,m,n,r,a):_)){v=!1;break}g||(g="constructor"==u)}if(v&&!g){var w=t.constructor,y=e.constructor;w==y||!("constructor"in t)||!("constructor"in e)||"function"==typeof w&&w instanceof w&&"function"==typeof y&&y instanceof y||(v=!1)}return a.delete(t),a.delete(e),v}(t,e,n,r,i,a))}(t,e,n,r,Ar,i))}function Vr(t,e,n,r){var i=n.length,a=i,l=!r;if(null==t)return!a;for(t=Lt(t);i--;){var s=n[i];if(l&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<a;){var c=(s=n[i])[0],h=t[c],u=s[1];if(l&&s[2]){if(h===o&&!(c in t))return!1}else{var p=new Yn;if(r)var d=r(h,u,c,t,e,p);if(!(d===o?Ar(u,h,3,r,p):d))return!1}}return!0}function Sr(t){return!(!Xa(t)||(e=t,It&&It in e))&&(Za(t)?Pt:gt).test(Ri(t));var e}function qr(t){return"function"==typeof t?t:null==t?ns:"object"==typeof t?$a(t)?jr(t[0],t[1]):Rr(t):us(t)}function Or(t){if(!Ci(t))return gn(t);var e=[];for(var n in Lt(t))qt.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Ir(t,e){return t<e}function Tr(t,e){var n=-1,o=Ua(t)?r(t.length):[];return hr(t,(function(t,r,i){o[++n]=e(t,r,i)})),o}function Rr(t){var e=si(t);return 1==e.length&&e[0][2]?xi(e[0][0],e[0][1]):function(n){return n===t||Vr(n,t,e)}}function jr(t,e){return _i(t)&&Mi(e)?xi(Ti(t),e):function(n){var r=bl(n,t);return r===o&&r===e?zl(n,t):Ar(e,r,3)}}function Pr(t,e,n,r,i){t!==e&&fr(e,(function(a,l){if(i||(i=new Yn),Xa(a))!function(t,e,n,r,i,a,l){var s=zi(t,n),c=zi(e,n),h=l.get(c);if(h)Gn(t,n,h);else{var u=a?a(s,c,n+"",t,e,l):o,p=u===o;if(p){var d=$a(c),v=!d&&Ya(c),g=!d&&!v&&sl(c);u=c,d||v||g?$a(s)?u=s:Qa(s)?u=Eo(s):v?(p=!1,u=Co(c,!0)):g?(p=!1,u=xo(c,!0)):u=[]:rl(c)||Na(c)?(u=s,Na(s)?u=fl(s):Xa(s)&&!Za(s)||(u=vi(c))):p=!1}p&&(l.set(c,u),i(u,c,r,a,l),l.delete(c)),Gn(t,n,u)}}(t,e,l,n,Pr,r,i);else{var s=r?r(zi(t,l),a,l+"",t,e,i):o;s===o&&(s=a),Gn(t,l,s)}}),Vl)}function Fr(t,e){var n=t.length;if(n)return fi(e+=e<0?n:0,n)?t[e]:o}function Dr(t,e,n){e=e.length?Ve(e,(function(t){return $a(t)?function(e){return Cr(e,1===t.length?t[0]:t)}:t})):[ns];var r=-1;e=Ve(e,Ke(ai()));var o=Tr(t,(function(t,n,o){var i=Ve(e,(function(e){return e(t)}));return{criteria:i,index:++r,value:t}}));return function(t,e){var r=t.length;for(t.sort((function(t,e){return function(t,e,n){for(var r=-1,o=t.criteria,i=e.criteria,a=o.length,l=n.length;++r<a;){var s=Lo(o[r],i[r]);if(s)return r>=l?s:s*("desc"==n[r]?-1:1)}return t.index-e.index}(t,e,n)}));r--;)t[r]=t[r].value;return t}(o)}function Nr(t,e,n){for(var r=-1,o=e.length,i={};++r<o;){var a=e[r],l=Cr(t,a);n(l,a)&&Zr(i,mo(a,t),l)}return i}function $r(t,e,n,r){var o=r?Fe:Pe,i=-1,a=e.length,l=t;for(t===e&&(e=Eo(e)),n&&(l=Ve(t,Ke(n)));++i<a;)for(var s=0,c=e[i],h=n?n(c):c;(s=o(l,h,s,r))>-1;)l!==t&&Yt.call(l,s,1),Yt.call(t,s,1);return t}function Br(t,e){for(var n=t?e.length:0,r=n-1;n--;){var o=e[n];if(n==r||o!==i){var i=o;fi(o)?Yt.call(t,o,1):so(t,o)}}return t}function Ur(t,e){return t+de(yn()*(e-t+1))}function Qr(t,e){var n="";if(!t||e<1||e>u)return n;do{e%2&&(n+=t),(e=de(e/2))&&(t+=t)}while(e);return n}function Yr(t,e){return ki(Li(t,e,ns),t+"")}function Wr(t){return Kn(Pl(t))}function Kr(t,e){var n=Pl(t);return Si(n,ir(e,0,n.length))}function Zr(t,e,n,r){if(!Xa(t))return t;for(var i=-1,a=(e=mo(e,t)).length,l=a-1,s=t;null!=s&&++i<a;){var c=Ti(e[i]),h=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(i!=l){var u=s[c];(h=r?r(u,c,s):o)===o&&(h=Xa(u)?u:fi(e[i+1])?[]:{})}Xn(s,c,h),s=s[c]}return t}var Jr=Hn?function(t,e){return Hn.set(t,e),t}:ns,Gr=te?function(t,e){return te(t,"toString",{configurable:!0,enumerable:!1,value:Xl(e),writable:!0})}:ns;function Xr(t){return Si(Pl(t))}function to(t,e,n){var o=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(n=n>i?i:n)<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var a=r(i);++o<i;)a[o]=t[o+e];return a}function eo(t,e){var n;return hr(t,(function(t,r,o){return!(n=e(t,r,o))})),!!n}function no(t,e,n){var r=0,o=null==t?r:t.length;if("number"==typeof e&&e==e&&o<=2147483647){for(;r<o;){var i=r+o>>>1,a=t[i];null!==a&&!ll(a)&&(n?a<=e:a<e)?r=i+1:o=i}return o}return ro(t,e,ns,n)}function ro(t,e,n,r){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var l=(e=n(e))!=e,s=null===e,c=ll(e),h=e===o;i<a;){var u=de((i+a)/2),p=n(t[u]),d=p!==o,v=null===p,g=p==p,f=ll(p);if(l)var m=r||g;else m=h?g&&(r||d):s?g&&d&&(r||!v):c?g&&d&&!v&&(r||!f):!v&&!f&&(r?p<=e:p<e);m?i=u+1:a=u}return mn(a,4294967294)}function oo(t,e){for(var n=-1,r=t.length,o=0,i=[];++n<r;){var a=t[n],l=e?e(a):a;if(!n||!Pa(l,s)){var s=l;i[o++]=0===a?0:a}}return i}function io(t){return"number"==typeof t?t:ll(t)?p:+t}function ao(t){if("string"==typeof t)return t;if($a(t))return Ve(t,ao)+"";if(ll(t))return Rn?Rn.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function lo(t,e,n){var r=-1,o=ke,i=t.length,a=!0,l=[],s=l;if(n)a=!1,o=Ae;else if(i>=200){var c=e?null:Yo(t);if(c)return sn(c);a=!1,o=Je,s=new Qn}else s=e?[]:l;t:for(;++r<i;){var h=t[r],u=e?e(h):h;if(h=n||0!==h?h:0,a&&u==u){for(var p=s.length;p--;)if(s[p]===u)continue t;e&&s.push(u),l.push(h)}else o(s,u,n)||(s!==l&&s.push(u),l.push(h))}return l}function so(t,e){return null==(t=bi(t,e=mo(e,t)))||delete t[Ti(Ki(e))]}function co(t,e,n,r){return Zr(t,e,n(Cr(t,e)),r)}function ho(t,e,n,r){for(var o=t.length,i=r?o:-1;(r?i--:++i<o)&&e(t[i],i,t););return n?to(t,r?0:i,r?i+1:o):to(t,r?i+1:0,r?o:i)}function uo(t,e){var n=t;return n instanceof Nn&&(n=n.value()),qe(e,(function(t,e){return e.func.apply(e.thisArg,Se([t],e.args))}),n)}function po(t,e,n){var o=t.length;if(o<2)return o?lo(t[0]):[];for(var i=-1,a=r(o);++i<o;)for(var l=t[i],s=-1;++s<o;)s!=i&&(a[i]=cr(a[i]||l,t[s],e,n));return lo(gr(a,1),e,n)}function vo(t,e,n){for(var r=-1,i=t.length,a=e.length,l={};++r<i;){var s=r<a?e[r]:o;n(l,t[r],s)}return l}function go(t){return Qa(t)?t:[]}function fo(t){return"function"==typeof t?t:ns}function mo(t,e){return $a(t)?t:_i(t,e)?[t]:Ii(ml(t))}var _o=Yr;function wo(t,e,n){var r=t.length;return n=n===o?r:n,!e&&n>=r?t:to(t,e,n)}var yo=ae||function(t){return ue.clearTimeout(t)};function Co(t,e){if(e)return t.slice();var n=t.length,r=$t?$t(n):new t.constructor(n);return t.copy(r),r}function Mo(t){var e=new t.constructor(t.byteLength);return new Nt(e).set(new Nt(t)),e}function xo(t,e){var n=e?Mo(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Lo(t,e){if(t!==e){var n=t!==o,r=null===t,i=t==t,a=ll(t),l=e!==o,s=null===e,c=e==e,h=ll(e);if(!s&&!h&&!a&&t>e||a&&l&&c&&!s&&!h||r&&l&&c||!n&&c||!i)return 1;if(!r&&!a&&!h&&t<e||h&&n&&i&&!r&&!a||s&&n&&i||!l&&i||!c)return-1}return 0}function bo(t,e,n,o){for(var i=-1,a=t.length,l=n.length,s=-1,c=e.length,h=fn(a-l,0),u=r(c+h),p=!o;++s<c;)u[s]=e[s];for(;++i<l;)(p||i<a)&&(u[n[i]]=t[i]);for(;h--;)u[s++]=t[i++];return u}function zo(t,e,n,o){for(var i=-1,a=t.length,l=-1,s=n.length,c=-1,h=e.length,u=fn(a-s,0),p=r(u+h),d=!o;++i<u;)p[i]=t[i];for(var v=i;++c<h;)p[v+c]=e[c];for(;++l<s;)(d||i<a)&&(p[v+n[l]]=t[i++]);return p}function Eo(t,e){var n=-1,o=t.length;for(e||(e=r(o));++n<o;)e[n]=t[n];return e}function Ho(t,e,n,r){var i=!n;n||(n={});for(var a=-1,l=e.length;++a<l;){var s=e[a],c=r?r(n[s],t[s],s,n,t):o;c===o&&(c=t[s]),i?rr(n,s,c):Xn(n,s,c)}return n}function ko(t,e){return function(n,r){var o=$a(n)?Le:er,i=e?e():{};return o(n,t,ai(r,2),i)}}function Ao(t){return Yr((function(e,n){var r=-1,i=n.length,a=i>1?n[i-1]:o,l=i>2?n[2]:o;for(a=t.length>3&&"function"==typeof a?(i--,a):o,l&&mi(n[0],n[1],l)&&(a=i<3?o:a,i=1),e=Lt(e);++r<i;){var s=n[r];s&&t(e,s,r,a)}return e}))}function Vo(t,e){return function(n,r){if(null==n)return n;if(!Ua(n))return t(n,r);for(var o=n.length,i=e?o:-1,a=Lt(n);(e?i--:++i<o)&&!1!==r(a[i],i,a););return n}}function So(t){return function(e,n,r){for(var o=-1,i=Lt(e),a=r(e),l=a.length;l--;){var s=a[t?l:++o];if(!1===n(i[s],s,i))break}return e}}function qo(t){return function(e){var n=rn(e=ml(e))?un(e):o,r=n?n[0]:e.charAt(0),i=n?wo(n,1).join(""):e.slice(1);return r[t]()+i}}function Oo(t){return function(e){return qe(Zl(Nl(e).replace(Zt,"")),t,"")}}function Io(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Pn(t.prototype),r=t.apply(n,e);return Xa(r)?r:n}}function To(t){return function(e,n,r){var i=Lt(e);if(!Ua(e)){var a=ai(n,3);e=Al(e),n=function(t){return a(i[t],t,i)}}var l=t(e,n,r);return l>-1?i[a?e[l]:l]:o}}function Ro(t){return ti((function(e){var n=e.length,r=n,a=Dn.prototype.thru;for(t&&e.reverse();r--;){var l=e[r];if("function"!=typeof l)throw new Et(i);if(a&&!s&&"wrapper"==oi(l))var s=new Dn([],!0)}for(r=s?r:n;++r<n;){var c=oi(l=e[r]),h="wrapper"==c?ri(l):o;s=h&&wi(h[0])&&424==h[1]&&!h[4].length&&1==h[9]?s[oi(h[0])].apply(s,h[3]):1==l.length&&wi(l)?s[c]():s.thru(l)}return function(){var t=arguments,r=t[0];if(s&&1==t.length&&$a(r))return s.plant(r).value();for(var o=0,i=n?e[o].apply(this,t):r;++o<n;)i=e[o].call(this,i);return i}}))}function jo(t,e,n,i,a,l,s,h,u,p){var d=e&c,v=1&e,g=2&e,f=24&e,m=512&e,_=g?o:Io(t);return function c(){for(var w=arguments.length,y=r(w),C=w;C--;)y[C]=arguments[C];if(f)var M=ii(c),x=function(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r;return r}(y,M);if(i&&(y=bo(y,i,a,f)),l&&(y=zo(y,l,s,f)),w-=x,f&&w<p){var L=ln(y,M);return Uo(t,e,jo,c.placeholder,n,y,L,h,u,p-w)}var b=v?n:this,z=g?b[t]:t;return w=y.length,h?y=function(t,e){for(var n=t.length,r=mn(e.length,n),i=Eo(t);r--;){var a=e[r];t[r]=fi(a,n)?i[a]:o}return t}(y,h):m&&w>1&&y.reverse(),d&&u<w&&(y.length=u),this&&this!==ue&&this instanceof c&&(z=_||Io(z)),z.apply(b,y)}}function Po(t,e){return function(n,r){return function(t,e,n,r){return _r(t,(function(t,o,i){e(r,n(t),o,i)})),r}(n,t,e(r),{})}}function Fo(t,e){return function(n,r){var i;if(n===o&&r===o)return e;if(n!==o&&(i=n),r!==o){if(i===o)return r;"string"==typeof n||"string"==typeof r?(n=ao(n),r=ao(r)):(n=io(n),r=io(r)),i=t(n,r)}return i}}function Do(t){return ti((function(e){return e=Ve(e,Ke(ai())),Yr((function(n){var r=this;return t(e,(function(t){return xe(t,r,n)}))}))}))}function No(t,e){var n=(e=e===o?" ":ao(e)).length;if(n<2)return n?Qr(e,t):e;var r=Qr(e,pe(t/hn(e)));return rn(e)?wo(un(r),0,t).join(""):r.slice(0,t)}function $o(t){return function(e,n,i){return i&&"number"!=typeof i&&mi(e,n,i)&&(n=i=o),e=pl(e),n===o?(n=e,e=0):n=pl(n),function(t,e,n,o){for(var i=-1,a=fn(pe((e-t)/(n||1)),0),l=r(a);a--;)l[o?a:++i]=t,t+=n;return l}(e,n,i=i===o?e<n?1:-1:pl(i),t)}}function Bo(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=gl(e),n=gl(n)),t(e,n)}}function Uo(t,e,n,r,i,a,l,c,h,u){var p=8&e;e|=p?s:64,4&(e&=~(p?64:s))||(e&=-4);var d=[t,e,i,p?a:o,p?l:o,p?o:a,p?o:l,c,h,u],v=n.apply(o,d);return wi(t)&&Ei(v,d),v.placeholder=r,Ai(v,t,e)}function Qo(t){var e=xt[t];return function(t,n){if(t=gl(t),(n=null==n?0:mn(dl(n),292))&&Te(t)){var r=(ml(t)+"e").split("e");return+((r=(ml(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}var Yo=bn&&1/sn(new bn([,-0]))[1]==h?function(t){return new bn(t)}:ls;function Wo(t){return function(e){var n=pi(e);return n==M?on(e):n==E?cn(e):function(t,e){return Ve(e,(function(e){return[e,t[e]]}))}(e,t(e))}}function Ko(t,e,n,a,h,u,p,d){var v=2&e;if(!v&&"function"!=typeof t)throw new Et(i);var g=a?a.length:0;if(g||(e&=-97,a=h=o),p=p===o?p:fn(dl(p),0),d=d===o?d:dl(d),g-=h?h.length:0,64&e){var f=a,m=h;a=h=o}var _=v?o:ri(t),w=[t,e,n,a,h,f,m,u,p,d];if(_&&function(t,e){var n=t[1],r=e[1],o=n|r,i=o<131,a=r==c&&8==n||r==c&&256==n&&t[7].length<=e[8]||384==r&&e[7].length<=e[8]&&8==n;if(!i&&!a)return t;1&r&&(t[2]=e[2],o|=1&n?0:4);var s=e[3];if(s){var h=t[3];t[3]=h?bo(h,s,e[4]):s,t[4]=h?ln(t[3],l):e[4]}(s=e[5])&&(h=t[5],t[5]=h?zo(h,s,e[6]):s,t[6]=h?ln(t[5],l):e[6]),(s=e[7])&&(t[7]=s),r&c&&(t[8]=null==t[8]?e[8]:mn(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=o}(w,_),t=w[0],e=w[1],n=w[2],a=w[3],h=w[4],!(d=w[9]=w[9]===o?v?0:t.length:fn(w[9]-g,0))&&24&e&&(e&=-25),e&&1!=e)y=8==e||16==e?function(t,e,n){var i=Io(t);return function a(){for(var l=arguments.length,s=r(l),c=l,h=ii(a);c--;)s[c]=arguments[c];var u=l<3&&s[0]!==h&&s[l-1]!==h?[]:ln(s,h);return(l-=u.length)<n?Uo(t,e,jo,a.placeholder,o,s,u,o,o,n-l):xe(this&&this!==ue&&this instanceof a?i:t,this,s)}}(t,e,d):e!=s&&33!=e||h.length?jo.apply(o,w):function(t,e,n,o){var i=1&e,a=Io(t);return function e(){for(var l=-1,s=arguments.length,c=-1,h=o.length,u=r(h+s),p=this&&this!==ue&&this instanceof e?a:t;++c<h;)u[c]=o[c];for(;s--;)u[c++]=arguments[++l];return xe(p,i?n:this,u)}}(t,e,n,a);else var y=function(t,e,n){var r=1&e,o=Io(t);return function e(){return(this&&this!==ue&&this instanceof e?o:t).apply(r?n:this,arguments)}}(t,e,n);return Ai((_?Jr:Ei)(y,w),t,e)}function Zo(t,e,n,r){return t===o||Pa(t,At[n])&&!qt.call(r,n)?e:t}function Jo(t,e,n,r,i,a){return Xa(t)&&Xa(e)&&(a.set(e,t),Pr(t,e,o,Jo,a),a.delete(e)),t}function Go(t){return rl(t)?o:t}function Xo(t,e,n,r,i,a){var l=1&n,s=t.length,c=e.length;if(s!=c&&!(l&&c>s))return!1;var h=a.get(t),u=a.get(e);if(h&&u)return h==e&&u==t;var p=-1,d=!0,v=2&n?new Qn:o;for(a.set(t,e),a.set(e,t);++p<s;){var g=t[p],f=e[p];if(r)var m=l?r(f,g,p,e,t,a):r(g,f,p,t,e,a);if(m!==o){if(m)continue;d=!1;break}if(v){if(!Ie(e,(function(t,e){if(!Je(v,e)&&(g===t||i(g,t,n,r,a)))return v.push(e)}))){d=!1;break}}else if(g!==f&&!i(g,f,n,r,a)){d=!1;break}}return a.delete(t),a.delete(e),d}function ti(t){return ki(Li(t,o,Bi),t+"")}function ei(t){return Mr(t,Al,hi)}function ni(t){return Mr(t,Vl,ui)}var ri=Hn?function(t){return Hn.get(t)}:ls;function oi(t){for(var e=t.name+"",n=kn[e],r=qt.call(kn,e)?n.length:0;r--;){var o=n[r],i=o.func;if(null==i||i==t)return o.name}return e}function ii(t){return(qt.call(jn,"placeholder")?jn:t).placeholder}function ai(){var t=jn.iteratee||rs;return t=t===rs?qr:t,arguments.length?t(arguments[0],arguments[1]):t}function li(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function si(t){for(var e=Al(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,Mi(o)]}return e}function ci(t,e){var n=function(t,e){return null==t?o:t[e]}(t,e);return Sr(n)?n:o}var hi=ge?function(t){return null==t?[]:(t=Lt(t),He(ge(t),(function(e){return Qt.call(t,e)})))}:vs,ui=ge?function(t){for(var e=[];t;)Se(e,hi(t)),t=Bt(t);return e}:vs,pi=xr;function di(t,e,n){for(var r=-1,o=(e=mo(e,t)).length,i=!1;++r<o;){var a=Ti(e[r]);if(!(i=null!=t&&n(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Ga(o)&&fi(a,o)&&($a(t)||Na(t))}function vi(t){return"function"!=typeof t.constructor||Ci(t)?{}:Pn(Bt(t))}function gi(t){return $a(t)||Na(t)||!!(Wt&&t&&t[Wt])}function fi(t,e){var n=typeof t;return!!(e=null==e?u:e)&&("number"==n||"symbol"!=n&&mt.test(t))&&t>-1&&t%1==0&&t<e}function mi(t,e,n){if(!Xa(n))return!1;var r=typeof e;return!!("number"==r?Ua(n)&&fi(e,n.length):"string"==r&&e in n)&&Pa(n[e],t)}function _i(t,e){if($a(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!ll(t))||X.test(t)||!G.test(t)||null!=e&&t in Lt(e)}function wi(t){var e=oi(t),n=jn[e];if("function"!=typeof n||!(e in Nn.prototype))return!1;if(t===n)return!0;var r=ri(n);return!!r&&t===r[0]}(Mn&&pi(new Mn(new ArrayBuffer(1)))!=S||xn&&pi(new xn)!=M||Ln&&pi(Ln.resolve())!=b||bn&&pi(new bn)!=E||zn&&pi(new zn)!=A)&&(pi=function(t){var e=xr(t),n=e==L?t.constructor:o,r=n?Ri(n):"";if(r)switch(r){case An:return S;case Vn:return M;case Sn:return b;case qn:return E;case On:return A}return e});var yi=Vt?Za:gs;function Ci(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||At)}function Mi(t){return t==t&&!Xa(t)}function xi(t,e){return function(n){return null!=n&&n[t]===e&&(e!==o||t in Lt(n))}}function Li(t,e,n){return e=fn(e===o?t.length-1:e,0),function(){for(var o=arguments,i=-1,a=fn(o.length-e,0),l=r(a);++i<a;)l[i]=o[e+i];i=-1;for(var s=r(e+1);++i<e;)s[i]=o[i];return s[e]=n(l),xe(t,this,s)}}function bi(t,e){return e.length<2?t:Cr(t,to(e,0,-1))}function zi(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var Ei=Vi(Jr),Hi=he||function(t,e){return ue.setTimeout(t,e)},ki=Vi(Gr);function Ai(t,e,n){var r=e+"";return ki(t,function(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(it,"{\n/* [wrapped with "+e+"] */\n")}(r,function(t,e){return be(v,(function(n){var r="_."+n[0];e&n[1]&&!ke(t,r)&&t.push(r)})),t.sort()}(function(t){var e=t.match(at);return e?e[1].split(lt):[]}(r),n)))}function Vi(t){var e=0,n=0;return function(){var r=_n(),i=16-(r-n);if(n=r,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(o,arguments)}}function Si(t,e){var n=-1,r=t.length,i=r-1;for(e=e===o?r:e;++n<e;){var a=Ur(n,i),l=t[a];t[a]=t[n],t[n]=l}return t.length=e,t}var qi,Oi,Ii=(qi=qa((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(tt,(function(t,n,r,o){e.push(r?o.replace(ht,"$1"):n||t)})),e}),(function(t){return 500===Oi.size&&Oi.clear(),t})),Oi=qi.cache,qi);function Ti(t){if("string"==typeof t||ll(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Ri(t){if(null!=t){try{return St.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function ji(t){if(t instanceof Nn)return t.clone();var e=new Dn(t.__wrapped__,t.__chain__);return e.__actions__=Eo(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}var Pi=Yr((function(t,e){return Qa(t)?cr(t,gr(e,1,Qa,!0)):[]})),Fi=Yr((function(t,e){var n=Ki(e);return Qa(n)&&(n=o),Qa(t)?cr(t,gr(e,1,Qa,!0),ai(n,2)):[]})),Di=Yr((function(t,e){var n=Ki(e);return Qa(n)&&(n=o),Qa(t)?cr(t,gr(e,1,Qa,!0),o,n):[]}));function Ni(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=null==n?0:dl(n);return o<0&&(o=fn(r+o,0)),je(t,ai(e,3),o)}function $i(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r-1;return n!==o&&(i=dl(n),i=n<0?fn(r+i,0):mn(i,r-1)),je(t,ai(e,3),i,!0)}function Bi(t){return null!=t&&t.length?gr(t,1):[]}function Ui(t){return t&&t.length?t[0]:o}var Qi=Yr((function(t){var e=Ve(t,go);return e.length&&e[0]===t[0]?Er(e):[]})),Yi=Yr((function(t){var e=Ki(t),n=Ve(t,go);return e===Ki(n)?e=o:n.pop(),n.length&&n[0]===t[0]?Er(n,ai(e,2)):[]})),Wi=Yr((function(t){var e=Ki(t),n=Ve(t,go);return(e="function"==typeof e?e:o)&&n.pop(),n.length&&n[0]===t[0]?Er(n,o,e):[]}));function Ki(t){var e=null==t?0:t.length;return e?t[e-1]:o}var Zi=Yr(Ji);function Ji(t,e){return t&&t.length&&e&&e.length?$r(t,e):t}var Gi=ti((function(t,e){var n=null==t?0:t.length,r=or(t,e);return Br(t,Ve(e,(function(t){return fi(t,n)?+t:t})).sort(Lo)),r}));function Xi(t){return null==t?t:Cn.call(t)}var ta=Yr((function(t){return lo(gr(t,1,Qa,!0))})),ea=Yr((function(t){var e=Ki(t);return Qa(e)&&(e=o),lo(gr(t,1,Qa,!0),ai(e,2))})),na=Yr((function(t){var e=Ki(t);return e="function"==typeof e?e:o,lo(gr(t,1,Qa,!0),o,e)}));function ra(t){if(!t||!t.length)return[];var e=0;return t=He(t,(function(t){if(Qa(t))return e=fn(t.length,e),!0})),Ye(e,(function(e){return Ve(t,$e(e))}))}function oa(t,e){if(!t||!t.length)return[];var n=ra(t);return null==e?n:Ve(n,(function(t){return xe(e,o,t)}))}var ia=Yr((function(t,e){return Qa(t)?cr(t,e):[]})),aa=Yr((function(t){return po(He(t,Qa))})),la=Yr((function(t){var e=Ki(t);return Qa(e)&&(e=o),po(He(t,Qa),ai(e,2))})),sa=Yr((function(t){var e=Ki(t);return e="function"==typeof e?e:o,po(He(t,Qa),o,e)})),ca=Yr(ra),ha=Yr((function(t){var e=t.length,n=e>1?t[e-1]:o;return n="function"==typeof n?(t.pop(),n):o,oa(t,n)}));function ua(t){var e=jn(t);return e.__chain__=!0,e}function pa(t,e){return e(t)}var da=ti((function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,i=function(e){return or(e,t)};return!(e>1||this.__actions__.length)&&r instanceof Nn&&fi(n)?((r=r.slice(n,+n+(e?1:0))).__actions__.push({func:pa,args:[i],thisArg:o}),new Dn(r,this.__chain__).thru((function(t){return e&&!t.length&&t.push(o),t}))):this.thru(i)})),va=ko((function(t,e,n){qt.call(t,n)?++t[n]:rr(t,n,1)})),ga=To(Ni),fa=To($i);function ma(t,e){return($a(t)?be:hr)(t,ai(e,3))}function _a(t,e){return($a(t)?ze:ur)(t,ai(e,3))}var wa=ko((function(t,e,n){qt.call(t,n)?t[n].push(e):rr(t,n,[e])})),ya=Yr((function(t,e,n){var o=-1,i="function"==typeof e,a=Ua(t)?r(t.length):[];return hr(t,(function(t){a[++o]=i?xe(e,t,n):Hr(t,e,n)})),a})),Ca=ko((function(t,e,n){rr(t,n,e)}));function Ma(t,e){return($a(t)?Ve:Tr)(t,ai(e,3))}var xa=ko((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]})),La=Yr((function(t,e){if(null==t)return[];var n=e.length;return n>1&&mi(t,e[0],e[1])?e=[]:n>2&&mi(e[0],e[1],e[2])&&(e=[e[0]]),Dr(t,gr(e,1),[])})),ba=ce||function(){return ue.Date.now()};function za(t,e,n){return e=n?o:e,e=t&&null==e?t.length:e,Ko(t,c,o,o,o,o,e)}function Ea(t,e){var n;if("function"!=typeof e)throw new Et(i);return t=dl(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=o),n}}var Ha=Yr((function(t,e,n){var r=1;if(n.length){var o=ln(n,ii(Ha));r|=s}return Ko(t,r,e,n,o)})),ka=Yr((function(t,e,n){var r=3;if(n.length){var o=ln(n,ii(ka));r|=s}return Ko(e,r,t,n,o)}));function Aa(t,e,n){var r,a,l,s,c,h,u=0,p=!1,d=!1,v=!0;if("function"!=typeof t)throw new Et(i);function g(e){var n=r,i=a;return r=a=o,u=e,s=t.apply(i,n)}function f(t){var n=t-h;return h===o||n>=e||n<0||d&&t-u>=l}function m(){var t=ba();if(f(t))return _(t);c=Hi(m,function(t){var n=e-(t-h);return d?mn(n,l-(t-u)):n}(t))}function _(t){return c=o,v&&r?g(t):(r=a=o,s)}function w(){var t=ba(),n=f(t);if(r=arguments,a=this,h=t,n){if(c===o)return function(t){return u=t,c=Hi(m,e),p?g(t):s}(h);if(d)return yo(c),c=Hi(m,e),g(h)}return c===o&&(c=Hi(m,e)),s}return e=gl(e)||0,Xa(n)&&(p=!!n.leading,l=(d="maxWait"in n)?fn(gl(n.maxWait)||0,e):l,v="trailing"in n?!!n.trailing:v),w.cancel=function(){c!==o&&yo(c),u=0,r=h=a=c=o},w.flush=function(){return c===o?s:_(ba())},w}var Va=Yr((function(t,e){return sr(t,1,e)})),Sa=Yr((function(t,e,n){return sr(t,gl(e)||0,n)}));function qa(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new Et(i);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(qa.Cache||Un),n}function Oa(t){if("function"!=typeof t)throw new Et(i);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}qa.Cache=Un;var Ia=_o((function(t,e){var n=(e=1==e.length&&$a(e[0])?Ve(e[0],Ke(ai())):Ve(gr(e,1),Ke(ai()))).length;return Yr((function(r){for(var o=-1,i=mn(r.length,n);++o<i;)r[o]=e[o].call(this,r[o]);return xe(t,this,r)}))})),Ta=Yr((function(t,e){var n=ln(e,ii(Ta));return Ko(t,s,o,e,n)})),Ra=Yr((function(t,e){var n=ln(e,ii(Ra));return Ko(t,64,o,e,n)})),ja=ti((function(t,e){return Ko(t,256,o,o,o,e)}));function Pa(t,e){return t===e||t!=t&&e!=e}var Fa=Bo(Lr),Da=Bo((function(t,e){return t>=e})),Na=kr(function(){return arguments}())?kr:function(t){return tl(t)&&qt.call(t,"callee")&&!Qt.call(t,"callee")},$a=r.isArray,Ba=me?Ke(me):function(t){return tl(t)&&xr(t)==V};function Ua(t){return null!=t&&Ga(t.length)&&!Za(t)}function Qa(t){return tl(t)&&Ua(t)}var Ya=fe||gs,Wa=_e?Ke(_e):function(t){return tl(t)&&xr(t)==_};function Ka(t){if(!tl(t))return!1;var e=xr(t);return e==w||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!rl(t)}function Za(t){if(!Xa(t))return!1;var e=xr(t);return e==y||e==C||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Ja(t){return"number"==typeof t&&t==dl(t)}function Ga(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}function Xa(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function tl(t){return null!=t&&"object"==typeof t}var el=we?Ke(we):function(t){return tl(t)&&pi(t)==M};function nl(t){return"number"==typeof t||tl(t)&&xr(t)==x}function rl(t){if(!tl(t)||xr(t)!=L)return!1;var e=Bt(t);if(null===e)return!0;var n=qt.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&St.call(n)==Rt}var ol=ye?Ke(ye):function(t){return tl(t)&&xr(t)==z},il=Ce?Ke(Ce):function(t){return tl(t)&&pi(t)==E};function al(t){return"string"==typeof t||!$a(t)&&tl(t)&&xr(t)==H}function ll(t){return"symbol"==typeof t||tl(t)&&xr(t)==k}var sl=Me?Ke(Me):function(t){return tl(t)&&Ga(t.length)&&!!oe[xr(t)]},cl=Bo(Ir),hl=Bo((function(t,e){return t<=e}));function ul(t){if(!t)return[];if(Ua(t))return al(t)?un(t):Eo(t);if(Kt&&t[Kt])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[Kt]());var e=pi(t);return(e==M?on:e==E?sn:Pl)(t)}function pl(t){return t?(t=gl(t))===h||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}function dl(t){var e=pl(t),n=e%1;return e==e?n?e-n:e:0}function vl(t){return t?ir(dl(t),0,d):0}function gl(t){if("number"==typeof t)return t;if(ll(t))return p;if(Xa(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Xa(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=We(t);var n=vt.test(t);return n||ft.test(t)?se(t.slice(2),n?2:8):dt.test(t)?p:+t}function fl(t){return Ho(t,Vl(t))}function ml(t){return null==t?"":ao(t)}var _l=Ao((function(t,e){if(Ci(e)||Ua(e))Ho(e,Al(e),t);else for(var n in e)qt.call(e,n)&&Xn(t,n,e[n])})),wl=Ao((function(t,e){Ho(e,Vl(e),t)})),yl=Ao((function(t,e,n,r){Ho(e,Vl(e),t,r)})),Cl=Ao((function(t,e,n,r){Ho(e,Al(e),t,r)})),Ml=ti(or),xl=Yr((function(t,e){t=Lt(t);var n=-1,r=e.length,i=r>2?e[2]:o;for(i&&mi(e[0],e[1],i)&&(r=1);++n<r;)for(var a=e[n],l=Vl(a),s=-1,c=l.length;++s<c;){var h=l[s],u=t[h];(u===o||Pa(u,At[h])&&!qt.call(t,h))&&(t[h]=a[h])}return t})),Ll=Yr((function(t){return t.push(o,Jo),xe(ql,o,t)}));function bl(t,e,n){var r=null==t?o:Cr(t,e);return r===o?n:r}function zl(t,e){return null!=t&&di(t,e,zr)}var El=Po((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=Tt.call(e)),t[e]=n}),Xl(ns)),Hl=Po((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=Tt.call(e)),qt.call(t,e)?t[e].push(n):t[e]=[n]}),ai),kl=Yr(Hr);function Al(t){return Ua(t)?Wn(t):Or(t)}function Vl(t){return Ua(t)?Wn(t,!0):function(t){if(!Xa(t))return function(t){var e=[];if(null!=t)for(var n in Lt(t))e.push(n);return e}(t);var e=Ci(t),n=[];for(var r in t)("constructor"!=r||!e&&qt.call(t,r))&&n.push(r);return n}(t)}var Sl=Ao((function(t,e,n){Pr(t,e,n)})),ql=Ao((function(t,e,n,r){Pr(t,e,n,r)})),Ol=ti((function(t,e){var n={};if(null==t)return n;var r=!1;e=Ve(e,(function(e){return e=mo(e,t),r||(r=e.length>1),e})),Ho(t,ni(t),n),r&&(n=ar(n,7,Go));for(var o=e.length;o--;)so(n,e[o]);return n})),Il=ti((function(t,e){return null==t?{}:function(t,e){return Nr(t,e,(function(e,n){return zl(t,n)}))}(t,e)}));function Tl(t,e){if(null==t)return{};var n=Ve(ni(t),(function(t){return[t]}));return e=ai(e),Nr(t,n,(function(t,n){return e(t,n[0])}))}var Rl=Wo(Al),jl=Wo(Vl);function Pl(t){return null==t?[]:Ze(t,Al(t))}var Fl=Oo((function(t,e,n){return e=e.toLowerCase(),t+(n?Dl(e):e)}));function Dl(t){return Kl(ml(t).toLowerCase())}function Nl(t){return(t=ml(t))&&t.replace(_t,tn).replace(Jt,"")}var $l=Oo((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),Bl=Oo((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),Ul=qo("toLowerCase"),Ql=Oo((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()})),Yl=Oo((function(t,e,n){return t+(n?" ":"")+Kl(e)})),Wl=Oo((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),Kl=qo("toUpperCase");function Zl(t,e,n){return t=ml(t),(e=n?o:e)===o?function(t){return ee.test(t)}(t)?function(t){return t.match(Xt)||[]}(t):function(t){return t.match(st)||[]}(t):t.match(e)||[]}var Jl=Yr((function(t,e){try{return xe(t,o,e)}catch(t){return Ka(t)?t:new Ct(t)}})),Gl=ti((function(t,e){return be(e,(function(e){e=Ti(e),rr(t,e,Ha(t[e],t))})),t}));function Xl(t){return function(){return t}}var ts=Ro(),es=Ro(!0);function ns(t){return t}function rs(t){return qr("function"==typeof t?t:ar(t,1))}var os=Yr((function(t,e){return function(n){return Hr(n,t,e)}})),is=Yr((function(t,e){return function(n){return Hr(t,n,e)}}));function as(t,e,n){var r=Al(e),o=yr(e,r);null!=n||Xa(e)&&(o.length||!r.length)||(n=e,e=t,t=this,o=yr(e,Al(e)));var i=!(Xa(n)&&"chain"in n&&!n.chain),a=Za(t);return be(o,(function(n){var r=e[n];t[n]=r,a&&(t.prototype[n]=function(){var e=this.__chain__;if(i||e){var n=t(this.__wrapped__);return(n.__actions__=Eo(this.__actions__)).push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,Se([this.value()],arguments))})})),t}function ls(){}var ss=Do(Ve),cs=Do(Ee),hs=Do(Ie);function us(t){return _i(t)?$e(Ti(t)):function(t){return function(e){return Cr(e,t)}}(t)}var ps=$o(),ds=$o(!0);function vs(){return[]}function gs(){return!1}var fs,ms=Fo((function(t,e){return t+e}),0),_s=Qo("ceil"),ws=Fo((function(t,e){return t/e}),1),ys=Qo("floor"),Cs=Fo((function(t,e){return t*e}),1),Ms=Qo("round"),xs=Fo((function(t,e){return t-e}),0);return jn.after=function(t,e){if("function"!=typeof e)throw new Et(i);return t=dl(t),function(){if(--t<1)return e.apply(this,arguments)}},jn.ary=za,jn.assign=_l,jn.assignIn=wl,jn.assignInWith=yl,jn.assignWith=Cl,jn.at=Ml,jn.before=Ea,jn.bind=Ha,jn.bindAll=Gl,jn.bindKey=ka,jn.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return $a(t)?t:[t]},jn.chain=ua,jn.chunk=function(t,e,n){e=(n?mi(t,e,n):e===o)?1:fn(dl(e),0);var i=null==t?0:t.length;if(!i||e<1)return[];for(var a=0,l=0,s=r(pe(i/e));a<i;)s[l++]=to(t,a,a+=e);return s},jn.compact=function(t){for(var e=-1,n=null==t?0:t.length,r=0,o=[];++e<n;){var i=t[e];i&&(o[r++]=i)}return o},jn.concat=function(){var t=arguments.length;if(!t)return[];for(var e=r(t-1),n=arguments[0],o=t;o--;)e[o-1]=arguments[o];return Se($a(n)?Eo(n):[n],gr(e,1))},jn.cond=function(t){var e=null==t?0:t.length,n=ai();return t=e?Ve(t,(function(t){if("function"!=typeof t[1])throw new Et(i);return[n(t[0]),t[1]]})):[],Yr((function(n){for(var r=-1;++r<e;){var o=t[r];if(xe(o[0],this,n))return xe(o[1],this,n)}}))},jn.conforms=function(t){return function(t){var e=Al(t);return function(n){return lr(n,t,e)}}(ar(t,1))},jn.constant=Xl,jn.countBy=va,jn.create=function(t,e){var n=Pn(t);return null==e?n:nr(n,e)},jn.curry=function t(e,n,r){var i=Ko(e,8,o,o,o,o,o,n=r?o:n);return i.placeholder=t.placeholder,i},jn.curryRight=function t(e,n,r){var i=Ko(e,16,o,o,o,o,o,n=r?o:n);return i.placeholder=t.placeholder,i},jn.debounce=Aa,jn.defaults=xl,jn.defaultsDeep=Ll,jn.defer=Va,jn.delay=Sa,jn.difference=Pi,jn.differenceBy=Fi,jn.differenceWith=Di,jn.drop=function(t,e,n){var r=null==t?0:t.length;return r?to(t,(e=n||e===o?1:dl(e))<0?0:e,r):[]},jn.dropRight=function(t,e,n){var r=null==t?0:t.length;return r?to(t,0,(e=r-(e=n||e===o?1:dl(e)))<0?0:e):[]},jn.dropRightWhile=function(t,e){return t&&t.length?ho(t,ai(e,3),!0,!0):[]},jn.dropWhile=function(t,e){return t&&t.length?ho(t,ai(e,3),!0):[]},jn.fill=function(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&mi(t,e,n)&&(n=0,r=i),function(t,e,n,r){var i=t.length;for((n=dl(n))<0&&(n=-n>i?0:i+n),(r=r===o||r>i?i:dl(r))<0&&(r+=i),r=n>r?0:vl(r);n<r;)t[n++]=e;return t}(t,e,n,r)):[]},jn.filter=function(t,e){return($a(t)?He:vr)(t,ai(e,3))},jn.flatMap=function(t,e){return gr(Ma(t,e),1)},jn.flatMapDeep=function(t,e){return gr(Ma(t,e),h)},jn.flatMapDepth=function(t,e,n){return n=n===o?1:dl(n),gr(Ma(t,e),n)},jn.flatten=Bi,jn.flattenDeep=function(t){return null!=t&&t.length?gr(t,h):[]},jn.flattenDepth=function(t,e){return null!=t&&t.length?gr(t,e=e===o?1:dl(e)):[]},jn.flip=function(t){return Ko(t,512)},jn.flow=ts,jn.flowRight=es,jn.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var o=t[e];r[o[0]]=o[1]}return r},jn.functions=function(t){return null==t?[]:yr(t,Al(t))},jn.functionsIn=function(t){return null==t?[]:yr(t,Vl(t))},jn.groupBy=wa,jn.initial=function(t){return null!=t&&t.length?to(t,0,-1):[]},jn.intersection=Qi,jn.intersectionBy=Yi,jn.intersectionWith=Wi,jn.invert=El,jn.invertBy=Hl,jn.invokeMap=ya,jn.iteratee=rs,jn.keyBy=Ca,jn.keys=Al,jn.keysIn=Vl,jn.map=Ma,jn.mapKeys=function(t,e){var n={};return e=ai(e,3),_r(t,(function(t,r,o){rr(n,e(t,r,o),t)})),n},jn.mapValues=function(t,e){var n={};return e=ai(e,3),_r(t,(function(t,r,o){rr(n,r,e(t,r,o))})),n},jn.matches=function(t){return Rr(ar(t,1))},jn.matchesProperty=function(t,e){return jr(t,ar(e,1))},jn.memoize=qa,jn.merge=Sl,jn.mergeWith=ql,jn.method=os,jn.methodOf=is,jn.mixin=as,jn.negate=Oa,jn.nthArg=function(t){return t=dl(t),Yr((function(e){return Fr(e,t)}))},jn.omit=Ol,jn.omitBy=function(t,e){return Tl(t,Oa(ai(e)))},jn.once=function(t){return Ea(2,t)},jn.orderBy=function(t,e,n,r){return null==t?[]:($a(e)||(e=null==e?[]:[e]),$a(n=r?o:n)||(n=null==n?[]:[n]),Dr(t,e,n))},jn.over=ss,jn.overArgs=Ia,jn.overEvery=cs,jn.overSome=hs,jn.partial=Ta,jn.partialRight=Ra,jn.partition=xa,jn.pick=Il,jn.pickBy=Tl,jn.property=us,jn.propertyOf=function(t){return function(e){return null==t?o:Cr(t,e)}},jn.pull=Zi,jn.pullAll=Ji,jn.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?$r(t,e,ai(n,2)):t},jn.pullAllWith=function(t,e,n){return t&&t.length&&e&&e.length?$r(t,e,o,n):t},jn.pullAt=Gi,jn.range=ps,jn.rangeRight=ds,jn.rearg=ja,jn.reject=function(t,e){return($a(t)?He:vr)(t,Oa(ai(e,3)))},jn.remove=function(t,e){var n=[];if(!t||!t.length)return n;var r=-1,o=[],i=t.length;for(e=ai(e,3);++r<i;){var a=t[r];e(a,r,t)&&(n.push(a),o.push(r))}return Br(t,o),n},jn.rest=function(t,e){if("function"!=typeof t)throw new Et(i);return Yr(t,e=e===o?e:dl(e))},jn.reverse=Xi,jn.sampleSize=function(t,e,n){return e=(n?mi(t,e,n):e===o)?1:dl(e),($a(t)?Zn:Kr)(t,e)},jn.set=function(t,e,n){return null==t?t:Zr(t,e,n)},jn.setWith=function(t,e,n,r){return r="function"==typeof r?r:o,null==t?t:Zr(t,e,n,r)},jn.shuffle=function(t){return($a(t)?Jn:Xr)(t)},jn.slice=function(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&mi(t,e,n)?(e=0,n=r):(e=null==e?0:dl(e),n=n===o?r:dl(n)),to(t,e,n)):[]},jn.sortBy=La,jn.sortedUniq=function(t){return t&&t.length?oo(t):[]},jn.sortedUniqBy=function(t,e){return t&&t.length?oo(t,ai(e,2)):[]},jn.split=function(t,e,n){return n&&"number"!=typeof n&&mi(t,e,n)&&(e=n=o),(n=n===o?d:n>>>0)?(t=ml(t))&&("string"==typeof e||null!=e&&!ol(e))&&!(e=ao(e))&&rn(t)?wo(un(t),0,n):t.split(e,n):[]},jn.spread=function(t,e){if("function"!=typeof t)throw new Et(i);return e=null==e?0:fn(dl(e),0),Yr((function(n){var r=n[e],o=wo(n,0,e);return r&&Se(o,r),xe(t,this,o)}))},jn.tail=function(t){var e=null==t?0:t.length;return e?to(t,1,e):[]},jn.take=function(t,e,n){return t&&t.length?to(t,0,(e=n||e===o?1:dl(e))<0?0:e):[]},jn.takeRight=function(t,e,n){var r=null==t?0:t.length;return r?to(t,(e=r-(e=n||e===o?1:dl(e)))<0?0:e,r):[]},jn.takeRightWhile=function(t,e){return t&&t.length?ho(t,ai(e,3),!1,!0):[]},jn.takeWhile=function(t,e){return t&&t.length?ho(t,ai(e,3)):[]},jn.tap=function(t,e){return e(t),t},jn.throttle=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new Et(i);return Xa(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Aa(t,e,{leading:r,maxWait:e,trailing:o})},jn.thru=pa,jn.toArray=ul,jn.toPairs=Rl,jn.toPairsIn=jl,jn.toPath=function(t){return $a(t)?Ve(t,Ti):ll(t)?[t]:Eo(Ii(ml(t)))},jn.toPlainObject=fl,jn.transform=function(t,e,n){var r=$a(t),o=r||Ya(t)||sl(t);if(e=ai(e,4),null==n){var i=t&&t.constructor;n=o?r?new i:[]:Xa(t)&&Za(i)?Pn(Bt(t)):{}}return(o?be:_r)(t,(function(t,r,o){return e(n,t,r,o)})),n},jn.unary=function(t){return za(t,1)},jn.union=ta,jn.unionBy=ea,jn.unionWith=na,jn.uniq=function(t){return t&&t.length?lo(t):[]},jn.uniqBy=function(t,e){return t&&t.length?lo(t,ai(e,2)):[]},jn.uniqWith=function(t,e){return e="function"==typeof e?e:o,t&&t.length?lo(t,o,e):[]},jn.unset=function(t,e){return null==t||so(t,e)},jn.unzip=ra,jn.unzipWith=oa,jn.update=function(t,e,n){return null==t?t:co(t,e,fo(n))},jn.updateWith=function(t,e,n,r){return r="function"==typeof r?r:o,null==t?t:co(t,e,fo(n),r)},jn.values=Pl,jn.valuesIn=function(t){return null==t?[]:Ze(t,Vl(t))},jn.without=ia,jn.words=Zl,jn.wrap=function(t,e){return Ta(fo(e),t)},jn.xor=aa,jn.xorBy=la,jn.xorWith=sa,jn.zip=ca,jn.zipObject=function(t,e){return vo(t||[],e||[],Xn)},jn.zipObjectDeep=function(t,e){return vo(t||[],e||[],Zr)},jn.zipWith=ha,jn.entries=Rl,jn.entriesIn=jl,jn.extend=wl,jn.extendWith=yl,as(jn,jn),jn.add=ms,jn.attempt=Jl,jn.camelCase=Fl,jn.capitalize=Dl,jn.ceil=_s,jn.clamp=function(t,e,n){return n===o&&(n=e,e=o),n!==o&&(n=(n=gl(n))==n?n:0),e!==o&&(e=(e=gl(e))==e?e:0),ir(gl(t),e,n)},jn.clone=function(t){return ar(t,4)},jn.cloneDeep=function(t){return ar(t,5)},jn.cloneDeepWith=function(t,e){return ar(t,5,e="function"==typeof e?e:o)},jn.cloneWith=function(t,e){return ar(t,4,e="function"==typeof e?e:o)},jn.conformsTo=function(t,e){return null==e||lr(t,e,Al(e))},jn.deburr=Nl,jn.defaultTo=function(t,e){return null==t||t!=t?e:t},jn.divide=ws,jn.endsWith=function(t,e,n){t=ml(t),e=ao(e);var r=t.length,i=n=n===o?r:ir(dl(n),0,r);return(n-=e.length)>=0&&t.slice(n,i)==e},jn.eq=Pa,jn.escape=function(t){return(t=ml(t))&&W.test(t)?t.replace(Q,en):t},jn.escapeRegExp=function(t){return(t=ml(t))&&nt.test(t)?t.replace(et,"\\$&"):t},jn.every=function(t,e,n){var r=$a(t)?Ee:pr;return n&&mi(t,e,n)&&(e=o),r(t,ai(e,3))},jn.find=ga,jn.findIndex=Ni,jn.findKey=function(t,e){return Re(t,ai(e,3),_r)},jn.findLast=fa,jn.findLastIndex=$i,jn.findLastKey=function(t,e){return Re(t,ai(e,3),wr)},jn.floor=ys,jn.forEach=ma,jn.forEachRight=_a,jn.forIn=function(t,e){return null==t?t:fr(t,ai(e,3),Vl)},jn.forInRight=function(t,e){return null==t?t:mr(t,ai(e,3),Vl)},jn.forOwn=function(t,e){return t&&_r(t,ai(e,3))},jn.forOwnRight=function(t,e){return t&&wr(t,ai(e,3))},jn.get=bl,jn.gt=Fa,jn.gte=Da,jn.has=function(t,e){return null!=t&&di(t,e,br)},jn.hasIn=zl,jn.head=Ui,jn.identity=ns,jn.includes=function(t,e,n,r){t=Ua(t)?t:Pl(t),n=n&&!r?dl(n):0;var o=t.length;return n<0&&(n=fn(o+n,0)),al(t)?n<=o&&t.indexOf(e,n)>-1:!!o&&Pe(t,e,n)>-1},jn.indexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=null==n?0:dl(n);return o<0&&(o=fn(r+o,0)),Pe(t,e,o)},jn.inRange=function(t,e,n){return e=pl(e),n===o?(n=e,e=0):n=pl(n),function(t,e,n){return t>=mn(e,n)&&t<fn(e,n)}(t=gl(t),e,n)},jn.invoke=kl,jn.isArguments=Na,jn.isArray=$a,jn.isArrayBuffer=Ba,jn.isArrayLike=Ua,jn.isArrayLikeObject=Qa,jn.isBoolean=function(t){return!0===t||!1===t||tl(t)&&xr(t)==m},jn.isBuffer=Ya,jn.isDate=Wa,jn.isElement=function(t){return tl(t)&&1===t.nodeType&&!rl(t)},jn.isEmpty=function(t){if(null==t)return!0;if(Ua(t)&&($a(t)||"string"==typeof t||"function"==typeof t.splice||Ya(t)||sl(t)||Na(t)))return!t.length;var e=pi(t);if(e==M||e==E)return!t.size;if(Ci(t))return!Or(t).length;for(var n in t)if(qt.call(t,n))return!1;return!0},jn.isEqual=function(t,e){return Ar(t,e)},jn.isEqualWith=function(t,e,n){var r=(n="function"==typeof n?n:o)?n(t,e):o;return r===o?Ar(t,e,o,n):!!r},jn.isError=Ka,jn.isFinite=function(t){return"number"==typeof t&&Te(t)},jn.isFunction=Za,jn.isInteger=Ja,jn.isLength=Ga,jn.isMap=el,jn.isMatch=function(t,e){return t===e||Vr(t,e,si(e))},jn.isMatchWith=function(t,e,n){return n="function"==typeof n?n:o,Vr(t,e,si(e),n)},jn.isNaN=function(t){return nl(t)&&t!=+t},jn.isNative=function(t){if(yi(t))throw new Ct("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Sr(t)},jn.isNil=function(t){return null==t},jn.isNull=function(t){return null===t},jn.isNumber=nl,jn.isObject=Xa,jn.isObjectLike=tl,jn.isPlainObject=rl,jn.isRegExp=ol,jn.isSafeInteger=function(t){return Ja(t)&&t>=-9007199254740991&&t<=u},jn.isSet=il,jn.isString=al,jn.isSymbol=ll,jn.isTypedArray=sl,jn.isUndefined=function(t){return t===o},jn.isWeakMap=function(t){return tl(t)&&pi(t)==A},jn.isWeakSet=function(t){return tl(t)&&"[object WeakSet]"==xr(t)},jn.join=function(t,e){return null==t?"":Be.call(t,e)},jn.kebabCase=$l,jn.last=Ki,jn.lastIndexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r;return n!==o&&(i=(i=dl(n))<0?fn(r+i,0):mn(i,r-1)),e==e?function(t,e,n){for(var r=n+1;r--;)if(t[r]===e)return r;return r}(t,e,i):je(t,De,i,!0)},jn.lowerCase=Bl,jn.lowerFirst=Ul,jn.lt=cl,jn.lte=hl,jn.max=function(t){return t&&t.length?dr(t,ns,Lr):o},jn.maxBy=function(t,e){return t&&t.length?dr(t,ai(e,2),Lr):o},jn.mean=function(t){return Ne(t,ns)},jn.meanBy=function(t,e){return Ne(t,ai(e,2))},jn.min=function(t){return t&&t.length?dr(t,ns,Ir):o},jn.minBy=function(t,e){return t&&t.length?dr(t,ai(e,2),Ir):o},jn.stubArray=vs,jn.stubFalse=gs,jn.stubObject=function(){return{}},jn.stubString=function(){return""},jn.stubTrue=function(){return!0},jn.multiply=Cs,jn.nth=function(t,e){return t&&t.length?Fr(t,dl(e)):o},jn.noConflict=function(){return ue._===this&&(ue._=jt),this},jn.noop=ls,jn.now=ba,jn.pad=function(t,e,n){t=ml(t);var r=(e=dl(e))?hn(t):0;if(!e||r>=e)return t;var o=(e-r)/2;return No(de(o),n)+t+No(pe(o),n)},jn.padEnd=function(t,e,n){t=ml(t);var r=(e=dl(e))?hn(t):0;return e&&r<e?t+No(e-r,n):t},jn.padStart=function(t,e,n){t=ml(t);var r=(e=dl(e))?hn(t):0;return e&&r<e?No(e-r,n)+t:t},jn.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),wn(ml(t).replace(rt,""),e||0)},jn.random=function(t,e,n){if(n&&"boolean"!=typeof n&&mi(t,e,n)&&(e=n=o),n===o&&("boolean"==typeof e?(n=e,e=o):"boolean"==typeof t&&(n=t,t=o)),t===o&&e===o?(t=0,e=1):(t=pl(t),e===o?(e=t,t=0):e=pl(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var i=yn();return mn(t+i*(e-t+le("1e-"+((i+"").length-1))),e)}return Ur(t,e)},jn.reduce=function(t,e,n){var r=$a(t)?qe:Ue,o=arguments.length<3;return r(t,ai(e,4),n,o,hr)},jn.reduceRight=function(t,e,n){var r=$a(t)?Oe:Ue,o=arguments.length<3;return r(t,ai(e,4),n,o,ur)},jn.repeat=function(t,e,n){return e=(n?mi(t,e,n):e===o)?1:dl(e),Qr(ml(t),e)},jn.replace=function(){var t=arguments,e=ml(t[0]);return t.length<3?e:e.replace(t[1],t[2])},jn.result=function(t,e,n){var r=-1,i=(e=mo(e,t)).length;for(i||(i=1,t=o);++r<i;){var a=null==t?o:t[Ti(e[r])];a===o&&(r=i,a=n),t=Za(a)?a.call(t):a}return t},jn.round=Ms,jn.runInContext=t,jn.sample=function(t){return($a(t)?Kn:Wr)(t)},jn.size=function(t){if(null==t)return 0;if(Ua(t))return al(t)?hn(t):t.length;var e=pi(t);return e==M||e==E?t.size:Or(t).length},jn.snakeCase=Ql,jn.some=function(t,e,n){var r=$a(t)?Ie:eo;return n&&mi(t,e,n)&&(e=o),r(t,ai(e,3))},jn.sortedIndex=function(t,e){return no(t,e)},jn.sortedIndexBy=function(t,e,n){return ro(t,e,ai(n,2))},jn.sortedIndexOf=function(t,e){var n=null==t?0:t.length;if(n){var r=no(t,e);if(r<n&&Pa(t[r],e))return r}return-1},jn.sortedLastIndex=function(t,e){return no(t,e,!0)},jn.sortedLastIndexBy=function(t,e,n){return ro(t,e,ai(n,2),!0)},jn.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var n=no(t,e,!0)-1;if(Pa(t[n],e))return n}return-1},jn.startCase=Yl,jn.startsWith=function(t,e,n){return t=ml(t),n=null==n?0:ir(dl(n),0,t.length),e=ao(e),t.slice(n,n+e.length)==e},jn.subtract=xs,jn.sum=function(t){return t&&t.length?Qe(t,ns):0},jn.sumBy=function(t,e){return t&&t.length?Qe(t,ai(e,2)):0},jn.template=function(t,e,n){var r=jn.templateSettings;n&&mi(t,e,n)&&(e=o),t=ml(t),e=yl({},e,r,Zo);var i,a,l=yl({},e.imports,r.imports,Zo),s=Al(l),c=Ze(l,s),h=0,u=e.interpolate||wt,p="__p += '",d=bt((e.escape||wt).source+"|"+u.source+"|"+(u===J?ut:wt).source+"|"+(e.evaluate||wt).source+"|$","g"),v="//# sourceURL="+(qt.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++re+"]")+"\n";t.replace(d,(function(e,n,r,o,l,s){return r||(r=o),p+=t.slice(h,s).replace(yt,nn),n&&(i=!0,p+="' +\n__e("+n+") +\n'"),l&&(a=!0,p+="';\n"+l+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),h=s+e.length,e})),p+="';\n";var g=qt.call(e,"variable")&&e.variable;if(g){if(ct.test(g))throw new Ct("Invalid `variable` option passed into `_.template`")}else p="with (obj) {\n"+p+"\n}\n";p=(a?p.replace(N,""):p).replace($,"$1").replace(B,"$1;"),p="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var f=Jl((function(){return Mt(s,v+"return "+p).apply(o,c)}));if(f.source=p,Ka(f))throw f;return f},jn.times=function(t,e){if((t=dl(t))<1||t>u)return[];var n=d,r=mn(t,d);e=ai(e),t-=d;for(var o=Ye(r,e);++n<t;)e(n);return o},jn.toFinite=pl,jn.toInteger=dl,jn.toLength=vl,jn.toLower=function(t){return ml(t).toLowerCase()},jn.toNumber=gl,jn.toSafeInteger=function(t){return t?ir(dl(t),-9007199254740991,u):0===t?t:0},jn.toString=ml,jn.toUpper=function(t){return ml(t).toUpperCase()},jn.trim=function(t,e,n){if((t=ml(t))&&(n||e===o))return We(t);if(!t||!(e=ao(e)))return t;var r=un(t),i=un(e);return wo(r,Ge(r,i),Xe(r,i)+1).join("")},jn.trimEnd=function(t,e,n){if((t=ml(t))&&(n||e===o))return t.slice(0,pn(t)+1);if(!t||!(e=ao(e)))return t;var r=un(t);return wo(r,0,Xe(r,un(e))+1).join("")},jn.trimStart=function(t,e,n){if((t=ml(t))&&(n||e===o))return t.replace(rt,"");if(!t||!(e=ao(e)))return t;var r=un(t);return wo(r,Ge(r,un(e))).join("")},jn.truncate=function(t,e){var n=30,r="...";if(Xa(e)){var i="separator"in e?e.separator:i;n="length"in e?dl(e.length):n,r="omission"in e?ao(e.omission):r}var a=(t=ml(t)).length;if(rn(t)){var l=un(t);a=l.length}if(n>=a)return t;var s=n-hn(r);if(s<1)return r;var c=l?wo(l,0,s).join(""):t.slice(0,s);if(i===o)return c+r;if(l&&(s+=c.length-s),ol(i)){if(t.slice(s).search(i)){var h,u=c;for(i.global||(i=bt(i.source,ml(pt.exec(i))+"g")),i.lastIndex=0;h=i.exec(u);)var p=h.index;c=c.slice(0,p===o?s:p)}}else if(t.indexOf(ao(i),s)!=s){var d=c.lastIndexOf(i);d>-1&&(c=c.slice(0,d))}return c+r},jn.unescape=function(t){return(t=ml(t))&&Y.test(t)?t.replace(U,dn):t},jn.uniqueId=function(t){var e=++Ot;return ml(t)+e},jn.upperCase=Wl,jn.upperFirst=Kl,jn.each=ma,jn.eachRight=_a,jn.first=Ui,as(jn,(fs={},_r(jn,(function(t,e){qt.call(jn.prototype,e)||(fs[e]=t)})),fs),{chain:!1}),jn.VERSION="4.17.21",be(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){jn[t].placeholder=jn})),be(["drop","take"],(function(t,e){Nn.prototype[t]=function(n){n=n===o?1:fn(dl(n),0);var r=this.__filtered__&&!e?new Nn(this):this.clone();return r.__filtered__?r.__takeCount__=mn(n,r.__takeCount__):r.__views__.push({size:mn(n,d),type:t+(r.__dir__<0?"Right":"")}),r},Nn.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),be(["filter","map","takeWhile"],(function(t,e){var n=e+1,r=1==n||3==n;Nn.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:ai(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}})),be(["head","last"],(function(t,e){var n="take"+(e?"Right":"");Nn.prototype[t]=function(){return this[n](1).value()[0]}})),be(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");Nn.prototype[t]=function(){return this.__filtered__?new Nn(this):this[n](1)}})),Nn.prototype.compact=function(){return this.filter(ns)},Nn.prototype.find=function(t){return this.filter(t).head()},Nn.prototype.findLast=function(t){return this.reverse().find(t)},Nn.prototype.invokeMap=Yr((function(t,e){return"function"==typeof t?new Nn(this):this.map((function(n){return Hr(n,t,e)}))})),Nn.prototype.reject=function(t){return this.filter(Oa(ai(t)))},Nn.prototype.slice=function(t,e){t=dl(t);var n=this;return n.__filtered__&&(t>0||e<0)?new Nn(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==o&&(n=(e=dl(e))<0?n.dropRight(-e):n.take(e-t)),n)},Nn.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Nn.prototype.toArray=function(){return this.take(d)},_r(Nn.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),i=jn[r?"take"+("last"==e?"Right":""):e],a=r||/^find/.test(e);i&&(jn.prototype[e]=function(){var e=this.__wrapped__,l=r?[1]:arguments,s=e instanceof Nn,c=l[0],h=s||$a(e),u=function(t){var e=i.apply(jn,Se([t],l));return r&&p?e[0]:e};h&&n&&"function"==typeof c&&1!=c.length&&(s=h=!1);var p=this.__chain__,d=!!this.__actions__.length,v=a&&!p,g=s&&!d;if(!a&&h){e=g?e:new Nn(this);var f=t.apply(e,l);return f.__actions__.push({func:pa,args:[u],thisArg:o}),new Dn(f,p)}return v&&g?t.apply(this,l):(f=this.thru(u),v?r?f.value()[0]:f.value():f)})})),be(["pop","push","shift","sort","splice","unshift"],(function(t){var e=Ht[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);jn.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var o=this.value();return e.apply($a(o)?o:[],t)}return this[n]((function(n){return e.apply($a(n)?n:[],t)}))}})),_r(Nn.prototype,(function(t,e){var n=jn[e];if(n){var r=n.name+"";qt.call(kn,r)||(kn[r]=[]),kn[r].push({name:e,func:n})}})),kn[jo(o,2).name]=[{name:"wrapper",func:o}],Nn.prototype.clone=function(){var t=new Nn(this.__wrapped__);return t.__actions__=Eo(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Eo(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Eo(this.__views__),t},Nn.prototype.reverse=function(){if(this.__filtered__){var t=new Nn(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},Nn.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,n=$a(t),r=e<0,o=n?t.length:0,i=function(t,e,n){for(var r=-1,o=n.length;++r<o;){var i=n[r],a=i.size;switch(i.type){case"drop":t+=a;break;case"dropRight":e-=a;break;case"take":e=mn(e,t+a);break;case"takeRight":t=fn(t,e-a)}}return{start:t,end:e}}(0,o,this.__views__),a=i.start,l=i.end,s=l-a,c=r?l:a-1,h=this.__iteratees__,u=h.length,p=0,d=mn(s,this.__takeCount__);if(!n||!r&&o==s&&d==s)return uo(t,this.__actions__);var v=[];t:for(;s--&&p<d;){for(var g=-1,f=t[c+=e];++g<u;){var m=h[g],_=m.iteratee,w=m.type,y=_(f);if(2==w)f=y;else if(!y){if(1==w)continue t;break t}}v[p++]=f}return v},jn.prototype.at=da,jn.prototype.chain=function(){return ua(this)},jn.prototype.commit=function(){return new Dn(this.value(),this.__chain__)},jn.prototype.next=function(){this.__values__===o&&(this.__values__=ul(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?o:this.__values__[this.__index__++]}},jn.prototype.plant=function(t){for(var e,n=this;n instanceof Fn;){var r=ji(n);r.__index__=0,r.__values__=o,e?i.__wrapped__=r:e=r;var i=r;n=n.__wrapped__}return i.__wrapped__=t,e},jn.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Nn){var e=t;return this.__actions__.length&&(e=new Nn(this)),(e=e.reverse()).__actions__.push({func:pa,args:[Xi],thisArg:o}),new Dn(e,this.__chain__)}return this.thru(Xi)},jn.prototype.toJSON=jn.prototype.valueOf=jn.prototype.value=function(){return uo(this.__wrapped__,this.__actions__)},jn.prototype.first=jn.prototype.head,Kt&&(jn.prototype[Kt]=function(){return this}),jn}();ue._=vn,(r=function(){return vn}.call(e,n,e,t))===o||(t.exports=r)}.call(this)},771:(t,e,n)=>{var r=n(639);t.exports=function(){return r.Date.now()}},841:(t,e,n)=>{var r=n(561),o=n(218),i=n(448),a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=l.test(t);return n||s.test(t)?c(t.slice(2),n?2:8):a.test(t)?NaN:+t}},391:(t,e,n)=>{function r(t){const e=document.createElement("ymaps3");return t&&(e.className=t),e}function o(t,e,n=1e-6){const r=[t[0]-e[0],t[1]-e[1]];return-n<r[0]&&r[0]<n&&-n<r[1]&&r[1]<n}n.d(e,{$:()=>r,p:()=>o})},180:(t,e,n)=>{n.d(e,{lv:()=>l,$M:()=>f,sH:()=>L,cN:()=>Q,Ew:()=>tt,kZ:()=>ot,FZ:()=>dt});class r extends ymaps3.YMapComplexEntity{_onAttach(){const t=document.createElement("ymaps3");t.classList.add("ymaps3--controls-spinner");const e=document.createElement("ymaps3");e.classList.add("ymaps3--controls-spinner__circle"),t.appendChild(e),this._detachDom=ymaps3.useDomContext(this,t,null),this._unwatchThemeContext=this._watchContext(ymaps3.ThemeContext,(()=>this._updateTheme(e)),{immediate:!0})}_onDetach(){var t,e;null===(t=this._detachDom)||void 0===t||t.call(this),this._detachDom=void 0,null===(e=this._unwatchThemeContext)||void 0===e||e.call(this)}_updateTheme(t){const e=this._consumeContext(ymaps3.ThemeContext);if(!e)return;const{theme:n}=e,r="ymaps3--controls-spinner__dark";"dark"===n?t.classList.add(r):"light"===n&&t.classList.remove(r)}}var o;const i=Object.freeze({duration:500,positionOptions:{enableHighAccuracy:!0,timeout:5e3,maximumAge:6e4}}),a={props:{onGeolocatePosition:Function,onGeolocateError:Function,source:String,easing:[String,Object,Function],duration:{type:Number,default:i.duration},zoom:{type:Number},positionOptions:{type:Object,default:i.positionOptions}}};class l extends ymaps3.YMapGroupEntity{constructor(t){super(t),this._loading=!1,this._position=null,this._handleGeolocationClick=this._handleGeolocationClick.bind(this)}_setLoading(t){this._loading=t,clearTimeout(this._timeout),this._timeout=window.setTimeout((()=>{!this._spinner.parent&&t?this._button.addChild(this._spinner):this._spinner.parent&&!t&&this._button.removeChild(this._spinner),this._element.classList.toggle("ymaps3--geolocation-control-is-loading",t),this._button.update({disabled:this._loading})}),100)}_updatePosition(t){var e,n;this._position=t,null===(n=(e=this._props).onGeolocatePosition)||void 0===n||n.call(e,this._position);const r=this.root;null==r||r.update({location:{center:this._position,zoom:this._props.zoom,duration:this._props.duration,easing:this._props.easing}}),this.addChild(this._marker),this._marker.update({coordinates:this._position})}_handleGeolocationClick(){this._loading||(this._setLoading(!0),ymaps3.geolocation.getPosition(this._props.positionOptions).then((t=>{this._updatePosition(t.coords)})).catch((()=>{var t,e;null===(e=(t=this._props).onGeolocateError)||void 0===e||e.call(t)})).finally((()=>{this._setLoading(!1)})))}_onAttach(){this._control=new ymaps3.YMapControl,this._element=document.createElement("ymaps3"),this._element.classList.add("ymaps3--geolocation-control"),this._button=new ymaps3.YMapControlCommonButton({onClick:this._handleGeolocationClick,element:this._element}),this._spinner=new r({}),this._control.addChild(this._button),this.addChild(this._control),this._initMarker(),this._unwatchThemeContext=this._watchContext(ymaps3.ThemeContext,(()=>this._updateTheme()),{immediate:!0})}_onDetach(){var t;this._control.removeChild(this._button),this.removeChild(this._control),null===(t=this._unwatchThemeContext)||void 0===t||t.call(this)}_onUpdate(t){t.source&&this._marker.update({source:t.source})}_initMarker(){this._marker=new ymaps3.YMapMarker({source:this._props.source,coordinates:[0,0]},document.createElement("ymaps3")),this._marker.element.className="ymaps3--geolocation-control-self"}_updateTheme(){const t=this._consumeContext(ymaps3.ThemeContext);if(!t)return;const{theme:e}=t,n="ymaps3--geolocation-control__dark";"dark"===e?this._element.classList.add(n):"light"===e&&this._element.classList.remove(n)}}o=ymaps3.optionsKeyVuefy,l.defaultProps=i,l[o]=a,Math.PI;const s=180/Math.PI,c=(t,e,n)=>Math.round(t)===e?n:e,h=t=>0===t?-Math.PI/4:t<Math.PI?0:2*Math.PI,u=(t,e,n)=>Math.atan2(n.y-e.y,n.x-e.x)-Math.atan2(t.y-e.y,t.x-e.x),p=t=>t*s;var d;const v=Object.freeze({duration:200}),g={props:{easing:[Function,String,Object],duration:{type:Number,default:v.duration}}};class f extends ymaps3.YMapComplexEntity{constructor(t){super(t),this._control=new ymaps3.YMapControl({transparent:!0}),this._rotateControl=new m(this._props),this._control.addChild(this._rotateControl),this.addChild(this._control)}_onUpdate(){this._rotateControl.update(this._props)}}d=ymaps3.optionsKeyVuefy,f.defaultProps=v,f[d]=g;class m extends ymaps3.YMapComplexEntity{constructor(t){super(t),this._isClick=!1,this._toggleMapRotate=()=>{if(!this.root||!this._isClick)return;const{duration:t,easing:e}=this._props;let n=h(this.root.azimuth);this.root.setCamera({azimuth:n,duration:t,easing:e})},this._onRotateStart=t=>{var e;if(0!==t.button||!this._element)return;this._isClick=!0;const{x:n,y:r,height:o,width:i}=this._element.getBoundingClientRect();this._controlCenterPosition={x:n+i/2,y:r+o/2},this._startMovePosition={x:t.clientX,y:t.clientY},this._startAzimuth=null===(e=this.root)||void 0===e?void 0:e.azimuth,this._addRotateEventListeners()},this._onRotateMove=t=>{var e;if(!this._controlCenterPosition||!this._startMovePosition||void 0===this._startAzimuth)return;const n=u(this._startMovePosition,this._controlCenterPosition,{x:t.pageX,y:t.pageY});this._isClick=!1,null===(e=this.root)||void 0===e||e.setCamera({azimuth:this._startAzimuth+n})},this._onRotateEnd=()=>{this._removeRotateEventListeners()},this._addRotateEventListeners=()=>{window.addEventListener("mousemove",this._onRotateMove),window.addEventListener("mouseup",this._onRotateEnd)},this._removeRotateEventListeners=()=>{window.removeEventListener("mousemove",this._onRotateMove),window.removeEventListener("mouseup",this._onRotateEnd)},this._listener=new ymaps3.YMapListener({onUpdate:t=>this._onMapUpdate(t.camera)}),this.addChild(this._listener)}_onAttach(){this._element=document.createElement("ymaps3"),this._element.textContent="N",this._element.classList.add("ymaps3--rotate-control"),this._element.addEventListener("click",this._toggleMapRotate),this._element.addEventListener("mousedown",this._onRotateStart),this._domDetach=ymaps3.useDomContext(this,this._element,null)}_onDetach(){var t,e,n;null===(t=this._element)||void 0===t||t.removeEventListener("click",this._toggleMapRotate),null===(e=this._element)||void 0===e||e.removeEventListener("mousedown",this._onRotateStart),null===(n=this._domDetach)||void 0===n||n.call(this),this._domDetach=void 0}_onMapUpdate({azimuth:t}){this._element&&(this._element.style.transform=`rotateZ(${t}rad)`)}}class _ extends ymaps3.YMapGroupEntity{constructor(t){super(t),this._isClick=!1,this._toggleMapRotate=()=>{if(!this.root||!this._isClick)return;const{duration:t,easing:e}=this._props;let n=h(this.root.azimuth);this.root.setCamera({azimuth:n,duration:t,easing:e})},this._onRotateStart=t=>{var e;if(0!==t.button||!this._element)return;this._isClick=!0;const{x:n,y:r,height:o,width:i}=this._element.getBoundingClientRect();this._controlCenterPosition={x:n+i/2,y:r+o/2},this._startMovePosition={x:t.clientX,y:t.clientY},this._startAzimuth=null===(e=this.root)||void 0===e?void 0:e.azimuth,this._addRotateEventListeners()},this._onRotateMove=t=>{var e;if(!this._controlCenterPosition||!this._startMovePosition||void 0===this._startAzimuth)return;const n=u(this._startMovePosition,this._controlCenterPosition,{x:t.pageX,y:t.pageY});this._isClick=!1,null===(e=this.root)||void 0===e||e.setCamera({azimuth:this._startAzimuth+n})},this._onRotateEnd=()=>{this._removeRotateEventListeners()},this._addRotateEventListeners=()=>{window.addEventListener("mousemove",this._onRotateMove),window.addEventListener("mouseup",this._onRotateEnd)},this._removeRotateEventListeners=()=>{window.removeEventListener("mousemove",this._onRotateMove),window.removeEventListener("mouseup",this._onRotateEnd)},this._listener=new ymaps3.YMapListener({onUpdate:t=>this._onMapUpdate(t.camera)}),this.addChild(this._listener)}_onAttach(){this._element=document.createElement("ymaps3"),this._element.classList.add("ymaps3--rotate-tilt_rotate"),this._containerElement=document.createElement("ymaps3"),this._containerElement.classList.add("ymaps3--rotate-tilt_rotate__container"),this._ringElement=document.createElement("ymaps3"),this._ringElement.classList.add("ymaps3--rotate-tilt_rotate__ring"),this._ringElement.addEventListener("click",this._toggleMapRotate),this._ringElement.addEventListener("mousedown",this._onRotateStart),this._element.appendChild(this._ringElement),this._element.appendChild(this._containerElement),this._domDetach=ymaps3.useDomContext(this,this._element,this._containerElement)}_onDetach(){var t,e,n;null===(t=this._ringElement)||void 0===t||t.removeEventListener("click",this._toggleMapRotate),null===(e=this._ringElement)||void 0===e||e.removeEventListener("mousedown",this._onRotateStart),null===(n=this._domDetach)||void 0===n||n.call(this),this._domDetach=void 0,this._element=void 0}_onMapUpdate({azimuth:t}){void 0!==this._ringElement&&(this._ringElement.style.transform=`rotateZ(${t}rad)`)}}const w="ymaps3--rotate-tilt_tilt__in-action";class y extends ymaps3.YMapComplexEntity{constructor(t){super(t),this._isClick=!1,this._toggleMapTilt=()=>{if(!this.root||!this._isClick)return;const{duration:t,easing:e}=this._props,{tilt:n,tiltRange:{max:r,min:o}}=this.root,i=c(n,o,r);this.root.setCamera({tilt:i,duration:t,easing:e})},this._onTiltStart=t=>{var e,n;0===t.button&&(this._isClick=!0,this._startTilt=null===(e=this.root)||void 0===e?void 0:e.tilt,this._startMovePosition={x:t.clientX,y:t.clientY},null===(n=this._element)||void 0===n||n.classList.toggle(w,!0),this._addTiltEventListeners())},this._onTiltMove=t=>{if(!this._startMovePosition||void 0===this._startTilt||!this.root)return;const e=this._startMovePosition.y-t.clientY;if(Math.abs(e)<3)return;const n=Math.PI*e/this.root.size.y;this._isClick=!1,this.root.setCamera({tilt:this._startTilt+n})},this._onTiltEnd=()=>{var t;null===(t=this._element)||void 0===t||t.classList.toggle(w,!1),this._removeTiltEventListeners()},this._listener=new ymaps3.YMapListener({onUpdate:t=>this._onMapUpdate(t.camera)}),this.addChild(this._listener)}_onAttach(){this._element=document.createElement("ymaps3"),this._element.classList.add("ymaps3--rotate-tilt_tilt");const{tilt:t,tiltRange:e}=this.root;this._element.textContent=t===e.min?"3D":"2D",this._element.addEventListener("click",this._toggleMapTilt),this._element.addEventListener("mousedown",this._onTiltStart),this._domDetach=ymaps3.useDomContext(this,this._element,null)}_onDetach(){var t,e,n;null===(t=this._element)||void 0===t||t.removeEventListener("click",this._toggleMapTilt),null===(e=this._element)||void 0===e||e.removeEventListener("mousedown",this._onTiltStart),null===(n=this._domDetach)||void 0===n||n.call(this),this._domDetach=void 0,this._element=void 0}_onMapUpdate({tilt:t}){if(void 0===this._element)return;const e=p(null!=t?t:0),n=Math.round(e)===this.root.tiltRange.min;this._element.style.transform=`rotateX(${e}deg)`,this._element.textContent=n?"3D":"2D",this._element.classList.toggle("ymaps3--rotate-tilt_tilt__tilted",!n)}_addTiltEventListeners(){window.addEventListener("mousemove",this._onTiltMove),window.addEventListener("mouseup",this._onTiltEnd)}_removeTiltEventListeners(){window.removeEventListener("mousemove",this._onTiltMove),window.removeEventListener("mouseup",this._onTiltEnd)}}var C;const M=Object.freeze({duration:200}),x={props:{easing:[Function,String,Object],duration:{type:Number,default:M.duration}}};class L extends ymaps3.YMapComplexEntity{constructor(t){super(t),this._control=new ymaps3.YMapControl({transparent:!0}),this._rotateControl=new _(this._props),this._tiltControl=new y(this._props),this._rotateControl.addChild(this._tiltControl),this._control.addChild(this._rotateControl),this.addChild(this._control)}_onUpdate(){this._rotateControl.update(this._props),this._tiltControl.update(this._props)}}C=ymaps3.optionsKeyVuefy,L.defaultProps=M,L[C]=x;var b=n(279),z=n.n(b);const E="ymaps3--suggest-item-control",H="_hide",k="_active";class A extends ymaps3.YMapComplexEntity{constructor(){super(...arguments),this._updateSuggestList=async t=>{var e,n,r,o,i;this._removeSuggestItems();const a=null!==(r=await(null===(n=(e=this._props).suggest)||void 0===n?void 0:n.call(e,{text:t,map:this.root})))&&void 0!==r?r:await ymaps3.suggest({text:t});this._addSuggestItems(a,this._props.onSuggestClick),null===(o=this._getSuggestElements().at(0))||void 0===o||o.classList.add(k),null===(i=this._rootElement)||void 0===i||i.classList.toggle(H,!this.children.length)},this._updateActiveSuggest=t=>{var e,n;const r=this._getSuggestElements();if(!r)return;let o=r.findIndex((t=>t.classList.contains(k)));o=t.isNextSuggest?(o+1)%r.length:-1===o?r.length-1:(o-1+r.length)%r.length,r.forEach(((t,e)=>{t.classList.toggle(k,e===o)})),r[o]&&(null===(n=null===(e=r[o])||void 0===e?void 0:e.dataset)||void 0===n?void 0:n.text)&&this._props.setSearchInputValue(r[o].dataset.text)},this._removeSuggestItems=()=>{for(;this.children.length;)this.removeChild(this.children[0])},this._onMouseOverHandler=t=>{const e=t.target.closest(`.${E}`);e&&this._getSuggestElements().forEach((t=>t.classList.toggle(k,t===e)))},this._onMouseOutHandler=t=>{this._rootElement.contains(t.relatedTarget)||this._getSuggestElements().forEach((t=>t.classList.remove(k)))},this._getSuggestElements=()=>this.children.filter((t=>t instanceof V)).map((t=>t.element))}get activeSuggest(){return this._getSuggestElements().find((t=>null==t?void 0:t.classList.contains(k)))}_updateSuggest(t){void 0!==t.searchInputValue&&t.searchInputValue!==this._searchInputValue&&(this._searchInputValue=t.searchInputValue,this._updateSuggestList(t.searchInputValue)),void 0!==t.suggestNavigationAction&&this._updateActiveSuggest(t.suggestNavigationAction)}_addSuggestItems(t,e){t.forEach((t=>{const n={uri:t.uri,text:t.value};this.addChild(new V({suggestItem:t,onClick:()=>e(n)}))}))}_updateTheme(t){const e=this._consumeContext(ymaps3.ThemeContext);if(!e)return;const{theme:n}=e;t.classList.toggle("_dark","dark"===n)}_updateVerticalOrder(t){const e=this._consumeContext(ymaps3.ControlContext);if(!e)return;const n=e.position[0];t.classList.toggle("_bottom","bottom"===n)}_onAttach(){var t;this._rootElement=document.createElement("ymaps3"),this._rootElement.classList.add("ymaps3--suggest-control"),null===(t=this._rootElement)||void 0===t||t.classList.toggle(H,!this.children.length),this._rootElement.addEventListener("mouseover",this._onMouseOverHandler),this._rootElement.addEventListener("mouseout",this._onMouseOutHandler),this._detachDom=ymaps3.useDomContext(this,this._rootElement,this._rootElement),this._updateSuggest(this._props),this._unwatchThemeContext=this._watchContext(ymaps3.ThemeContext,(()=>this._updateTheme(this._rootElement)),{immediate:!0}),this._unwatchControlContext=this._watchContext(ymaps3.ControlContext,(()=>this._updateVerticalOrder(this._rootElement)),{immediate:!0})}_onUpdate(t){this._updateSuggest(t)}_onDetach(){var t,e,n;null===(t=this._detachDom)||void 0===t||t.call(this),this._detachDom=void 0,null===(e=this._unwatchThemeContext)||void 0===e||e.call(this),this._unwatchThemeContext=void 0,null===(n=this._unwatchControlContext)||void 0===n||n.call(this),this._unwatchControlContext=void 0,this._rootElement.removeEventListener("mouseover",this._onMouseOverHandler),this._rootElement.removeEventListener("mouseout",this._onMouseOutHandler),this._rootElement=void 0}}class V extends ymaps3.YMapComplexEntity{get element(){return this._rootElement}_updateTheme(t,e,n){const r=this._consumeContext(ymaps3.ThemeContext);if(!r)return;const{theme:o}=r,i="_dark";t.classList.toggle(i,"dark"===o),e.classList.toggle(i,"dark"===o),null==n||n.classList.toggle(i,"dark"===o)}_onAttach(){var t;this._rootElement=document.createElement("ymaps3"),this._rootElement.classList.add(E),this._rootElement.tabIndex=-1,this._rootElement.addEventListener("click",this._props.onClick),this._rootElement.dataset.text=this._props.suggestItem.title.text,(null===(t=this._props.suggestItem)||void 0===t?void 0:t.uri)&&(this._rootElement.dataset.uri=this._props.suggestItem.uri),this._detachDom=ymaps3.useDomContext(this,this._rootElement,this._rootElement);const e=document.createElement("ymaps3");let n;e.classList.add("ymaps3--suggest-item-control__title"),e.innerText=this._props.suggestItem.title.text,this._rootElement.appendChild(e),this._props.suggestItem.subtitle&&(n=document.createElement("ymaps3"),n.classList.add("ymaps3--suggest-item-control__subtitle"),n.innerText=this._props.suggestItem.subtitle.text,this._rootElement.appendChild(n)),this._unwatchThemeContext=this._watchContext(ymaps3.ThemeContext,(()=>this._updateTheme(this._rootElement,e,n)),{immediate:!0})}_onDetach(){var t,e;null===(t=this._detachDom)||void 0===t||t.call(this),this._detachDom=void 0,null===(e=this._unwatchThemeContext)||void 0===e||e.call(this),this._unwatchThemeContext=void 0,this._rootElement.removeEventListener("click",this._props.onClick),this._rootElement=void 0}}const S={light:{from:"#2E4CE5",to:"#313133"},dark:{from:"#D6FD63",to:"#C8D2E6"}},q=Object.freeze({geolocationTextInput:"My location"});class O extends ymaps3.YMapComplexEntity{triggerFocus(){this._inputEl.focus()}getValue(){return this._inputEl.value}constructor(t){super(t,{container:!0}),this._isHoverMode=!1,this._isInputFocused=!1,this._resetInput=()=>{this._inputEl.value="",this._suggestComponent.update({searchInputValue:""}),this._updateIndicatorStatus("empty"),this._props.onSelectWaypoint(null)},this._onUpdateWaypoint=z()((t=>{const e=t.target;this._suggestComponent.update({searchInputValue:e.value})}),200),this._onFocusInput=t=>{this._isInputFocused=!0,this._suggestComponent.update({searchInputValue:this.getValue(),suggestNavigationAction:void 0}),this._addDirectChild(this._suggestComponent),this._updateIndicatorStatus("focus")},this._onBlurInput=t=>{this._isHoverMode?this._inputEl.focus():(t.relatedTarget!==this._suggestComponent.activeSuggest&&this._removeDirectChild(this._suggestComponent),this._updateIndicatorStatus("empty"),setTimeout((()=>{this._isInputFocused=!1}),200))},this._submitWaypointInput=t=>{if(null==t||t.preventDefault(),!this._suggestComponent.activeSuggest)return void this._inputEl.focus();const{uri:e,text:n}=this._suggestComponent.activeSuggest.dataset;this._inputEl.value=n,this._search({uri:e,text:n}),this._removeDirectChild(this._suggestComponent),this._inputEl.blur()},this._onKeydownInput=t=>{switch(t.key){case"ArrowDown":t.preventDefault(),this._suggestComponent.update({suggestNavigationAction:{isNextSuggest:!this._isBottomPosition}});break;case"ArrowUp":t.preventDefault(),this._suggestComponent.update({suggestNavigationAction:{isNextSuggest:this._isBottomPosition}})}},this._getGeolocation=async()=>{const t=this._props.geolocationTextInput;this._inputEl.value=t;const e={properties:{name:t,description:t},geometry:{type:"Point",coordinates:(await ymaps3.geolocation.getPosition()).coords}};this._updateIndicatorStatus("setted"),this._props.onSelectWaypoint({feature:e})},this._onMapMouseLeave=(t,e)=>{var n,r;this._isInputFocused&&void 0===t&&(this._isHoverMode=!1,null===(r=(n=this._props).onMouseMoveOnMap)||void 0===r||r.call(n,e.coordinates,!0))},this._onMapMouseMove=(t,e)=>{var n,r;this._isInputFocused&&(this._isHoverMode=!0,null===(r=(n=this._props).onMouseMoveOnMap)||void 0===r||r.call(n,e.coordinates,!1))},this._onMapFastClick=(t,e)=>{var n,r;this._isInputFocused&&(this._isHoverMode=!1,this._isInputFocused=!1,null===(r=(n=this._props).onMouseMoveOnMap)||void 0===r||r.call(n,e.coordinates,!0),this._inputEl.blur(),this._search({text:e.coordinates.toString()},e.coordinates))},this._suggestComponent=new A({suggest:this._props.suggest,setSearchInputValue:t=>{this._inputEl.value=t},onSuggestClick:()=>{this._submitWaypointInput()}}),this._mapListener=new ymaps3.YMapListener({onMouseMove:this._onMapMouseMove,onMouseLeave:this._onMapMouseLeave,onFastClick:this._onMapFastClick}),this._addDirectChild(this._mapListener)}_onAttach(){this._rootElement=document.createElement("ymaps3"),this._rootElement.classList.add("ymaps3--route-control_waypoint-input");const t=document.createElement("form");t.addEventListener("submit",this._submitWaypointInput),t.classList.add("ymaps3--route-control_waypoint-input_form"),this._indicator=document.createElement("ymaps3"),this._indicator.classList.add("ymaps3--route-control_waypoint-input__indicator"),this._updateIndicatorStatus("empty"),t.appendChild(this._indicator),this._inputEl=document.createElement("input"),this._inputEl.classList.add("ymaps3--route-control_waypoint-input__field"),this._inputEl.placeholder=this._props.inputPlaceholder,this._inputEl.addEventListener("input",this._onUpdateWaypoint),this._inputEl.addEventListener("focus",this._onFocusInput),this._inputEl.addEventListener("blur",this._onBlurInput),this._inputEl.addEventListener("keydown",this._onKeydownInput),t.appendChild(this._inputEl);const e=document.createElement("ymaps3");e.classList.add("ymaps3--route-control_waypoint-input__field-buttons"),t.appendChild(e),this._locationButton=document.createElement("button"),this._locationButton.addEventListener("mousedown",this._getGeolocation),this._locationButton.classList.add("ymaps3--route-control_waypoint-input__field-buttons__location"),this._locationButton.insertAdjacentHTML("afterbegin",'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="currentColor" d="M8.65 15.375c-.074.185-.343.16-.382-.035L7 9 .66 7.732a.2.2 0 0 1-.035-.382l12.942-5.177a.2.2 0 0 1 .26.26z"/></svg>'),e.appendChild(this._locationButton),this._resetButton=document.createElement("button"),this._resetButton.addEventListener("mousedown",this._resetInput),this._resetButton.classList.add("ymaps3--route-control_waypoint-input__field-buttons__reset"),this._resetButton.insertAdjacentHTML("afterbegin",'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="currentColor" d="m8 7.057 3.3-3.3.943.943-3.3 3.3 3.3 3.3-.943.943-3.3-3.3-3.3 3.3-.942-.943 3.3-3.3-3.3-3.3.943-.942z"/></svg>'),e.appendChild(this._resetButton);const n=document.createElement("ymaps3");n.classList.add("ymaps3--route-control_waypoint-input_suggest"),this._rootElement.appendChild(t),this._rootElement.appendChild(n),this._detachDom=ymaps3.useDomContext(this,this._rootElement,n),this._watchContext(ymaps3.ControlContext,(()=>{const t=this._consumeContext(ymaps3.ControlContext),[e]=t.position;this._isBottomPosition="bottom"===e,n.classList.toggle("_bottom",this._isBottomPosition)}),{immediate:!0}),this._watchContext(ymaps3.ThemeContext,(()=>{const{theme:t}=this._consumeContext(ymaps3.ThemeContext);this._indicator.style.color=S[t][this._props.type],this._rootElement.classList.toggle("_dark-input","dark"===t)}),{immediate:!0}),void 0!==this._props.waypoint&&null!==this._props.waypoint&&this._search({text:this._props.waypoint.toString()},this._props.waypoint)}_onUpdate(t){void 0!==this._props.waypoint&&(null===this._props.waypoint?(this._props.waypoint=void 0,this._resetInput()):this._search({text:this._props.waypoint.toString()},this._props.waypoint,this._props.value)),void 0!==t.inputPlaceholder&&(this._inputEl.placeholder=t.inputPlaceholder)}_onDetach(){var t;null===(t=this._detachDom)||void 0===t||t.call(this),this._detachDom=void 0,this._removeDirectChild(this._suggestComponent)}_updateIndicatorStatus(t){switch(this._indicator.classList.toggle("ymaps3--route-control_waypoint-input__indicator_empty","empty"===t),t){case"empty":this._indicator.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><circle cx="10" cy="10" r="4" fill="currentColor"/></svg>';break;case"focus":this._indicator.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" fill="currentColor"/><circle cx="10" cy="10" r="3" fill="#fff"/></svg>';break;case"setted":this._indicator.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><circle cx="10" cy="10" r="6" fill="currentColor"/></svg>'}}async _search(t,e,n){var r,o,i,a,l;try{const a=null!==(i=await(null===(o=(r=this._props).search)||void 0===o?void 0:o.call(r,{params:t,map:this.root})))&&void 0!==i?i:await ymaps3.search(t);if(0===a.length)return;const l=a[0];e&&(this._inputEl.value=n||l.properties.name,l.geometry.coordinates=e),this._updateIndicatorStatus("setted"),this._props.onSelectWaypoint({feature:l})}catch(t){console.error(t),this._updateIndicatorStatus("empty"),this._inputEl.value="",null===(l=(a=this._props).onError)||void 0===l||l.call(a)}}}O.defaultProps=q;const I='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect width="2.5" height="2.5" x="10.75" y="15.5" fill="#FF5E5E" rx="1"/><path fill="#FF5E5E" d="M12 6c-.591 0-1.251.058-1.192.75l.692 7.75c.022.256.241.27.46.27h.08c.219 0 .438-.014.46-.27l.736-7.75C13.297 6.059 12.593 6 12 6"/><path stroke="#FF5E5E" stroke-width="2" d="M5.714 9.51C8.52 4.502 9.925 2 12 2s3.479 2.503 6.286 7.51l.715 1.274c2.396 4.272 3.594 6.408 2.707 8.16s-3.13 1.838-7.616 2.011c-.73.029-1.436.045-2.092.045s-1.362-.016-2.092-.045c-4.486-.173-6.729-.26-7.616-2.011s.311-3.888 2.707-8.16z"/></svg>',T={driving:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M20 18.5v-5.014c0-.357-.059-.702-.168-1.025l-1.403-5.33a2.56 2.56 0 0 0-2.195-1.893C14.79 5.079 14.045 5 12 5s-2.79.08-4.233.238A2.56 2.56 0 0 0 5.57 7.13l-1.403 5.33c-.107.324-.167.67-.167 1.026V18.5a.5.5 0 0 0 .5.5h2.11a.5.5 0 0 0 .485-.379L7.5 17h9l.405 1.621a.5.5 0 0 0 .486.379h2.11a.5.5 0 0 0 .499-.5m-4.2-12c.624.09 1.173.53 1.337 1.154L18 10.7c-.318-.169-1.026-.326-1.401-.378C15.058 10.107 13.978 10 12 10s-3.056.107-4.597.322c-.375.052-1.085.209-1.403.378l.862-3.046C7.026 7.029 7.576 6.59 8.2 6.5c1.404-.201 1.79-.232 3.8-.232 2.011 0 2.395.031 3.8.232m1.7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/><path fill="#000" d="M21.5 9a.5.5 0 0 1 .5.5v.408a1 1 0 0 1-.886.993l-.428.05a.5.5 0 0 1-.542-.376l-.238-.954A.498.498 0 0 1 20.39 9zm-19 0a.5.5 0 0 0-.5.5v.408a1 1 0 0 0 .886.993l.428.05a.5.5 0 0 0 .542-.376l.239-.954A.5.5 0 0 0 3.61 9z"/></svg>',truck:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M7 3a2 2 0 0 0-2 2v2.517a.2.2 0 0 0 .341.142l.366-.366A1 1 0 0 1 6.414 7h11.172a1 1 0 0 1 .707.293l.366.366A.2.2 0 0 0 19 7.517V5a2 2 0 0 0-2-2z"/><path fill="currentColor" fill-rule="evenodd" d="M7 8a1 1 0 0 0-1 1v4l-.414.414A2 2 0 0 0 5 14.828V16h2a1 1 0 0 1 1 1v.7a.3.3 0 0 1-.3.3H5v2.25c0 .414.256.75.571.75h2.411c.263 0 .491-.234.555-.568L8.81 19h6.38l.273 1.432c.064.334.292.568.555.568h2.41c.316 0 .572-.336.572-.75V18h-2.7a.3.3 0 0 1-.3-.3V17a1 1 0 0 1 1-1h2v-1.172a2 2 0 0 0-.586-1.414L18 13V9a1 1 0 0 0-1-1zm.46 1h9.04c.5 0 .5.384.5.776V12.2c0 .168 0 .313-.247.432-.76.368-1.82.368-4.747.368h-.012c-2.927 0-4.057 0-4.752-.368C7 12.505 7 12.368 7 12.2V9.8c0-.4 0-.8.46-.8" clip-rule="evenodd"/><path fill="currentColor" d="M3.474 9C3.212 9 3 9.19 3 9.426V12.2c0 .187.193.358.498.442l.884.21a.5.5 0 0 0 .615-.489L4.986 9.53c0-.175-.061-.341-.185-.44l-.061-.04A.45.45 0 0 0 4.526 9zM21 9.426C21 9.19 20.788 9 20.526 9h-1.052a.45.45 0 0 0-.213.05l-.062.04c-.124.098-.185.264-.185.44l-.011 2.834a.5.5 0 0 0 .615.489l.884-.21c.305-.084.498-.255.498-.442z"/></svg>',walking:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M14 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.836 10.633q.075.099.11.217l1.4 4.734a.716.716 0 0 1-.516.889.76.76 0 0 1-.909-.447l-1.672-4.413-2.815-2.707a1.01 1.01 0 0 1-.29-.93l.6-3.292-1.352.385L8.2 12.233a.635.635 0 0 1-.82.32.593.593 0 0 1-.34-.766l1.2-3.007a.63.63 0 0 1 .309-.332l.077-.037 3.008-1.478.021-.008.015-.005a.94.94 0 0 1 .6-.089c.269.05.5.199.615.425s.154.641.154.641c.046.256.062.508.078.76q.06.709.039 1.42c-.021.72-.07 1.434-.17 2.141l-.053.418 1.833 2.407.068.091z"/><path fill="currentColor" d="m14.12 9.253 2.643 2.276c.27.206.316.583.103.843a.644.644 0 0 1-.858.114l-2.128-1.482.023-.129.028-.158.074-.407.026-.145.025-.142.017-.23.025-.29.01-.12zm-3.956 5.146c.209.2.44.405.674.609.37.326.75.64 1.085.895-.142.287-.38.76-.38.76l-2.538 3.992a.77.77 0 0 1-1.031.24.707.707 0 0 1-.278-.943l2.117-3.99.029-.277q.032-.338.077-.675l.11-.736.065.06z"/></svg>',transit:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M19 11v8.5a.5.5 0 0 1-.5.5h-2.11a.5.5 0 0 1-.485-.379L15.5 18h-7l-.405 1.621A.5.5 0 0 1 7.61 20H5.5a.5.5 0 0 1-.5-.5V11l-.724-.362A.5.5 0 0 1 4 10.191V8a1 1 0 0 1 1-1v-.612a2 2 0 0 1 1.382-1.902C7.411 4.152 9.255 4 12 4s4.59.152 5.618.486A2 2 0 0 1 19 6.388V7a1 1 0 0 1 1 1v2.191a.5.5 0 0 1-.276.447zm-7-5q-3.38 0-5.12.715a1 1 0 0 0-.617.86L6 11.618a.5.5 0 0 0 .424.494Q7.642 12.3 12 12.3t5.576-.188a.5.5 0 0 0 .424-.494l-.263-4.043a1 1 0 0 0-.617-.86Q15.38 6 12 6m4.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/></svg>'},R=["driving","truck","walking","transit"];function j(t){const e=document.createElement("ymaps3");e.classList.add("ymaps3--route-control_modes");const n=document.createElement("ymaps3");if(n.classList.add("ymaps3--route-control_modes__container"),e.appendChild(n),t.length<1)throw new Error("The route must contain at least one type of route.");const r=[];return t.forEach((t=>{if(!R.includes(t))return;const e=document.createElement("input"),n=document.createElement("label");e.type="radio",e.id=t,e.value=t,n.htmlFor=t,n.insertAdjacentHTML("afterbegin",T[t]),e.name="route-mode",r.push({option:e,label:n})})),r[0].option.checked=!0,r.forEach((({option:t,label:e})=>{n.appendChild(t),n.appendChild(e)})),e}function P(t,e){const n=document.createElement("ymaps3");n.classList.add("ymaps3--route-control_info_container");const r=document.createElement("ymaps3");r.classList.add("ymaps3--route-control_info_container__label"),r.textContent="time"===t?"Время в пути":"Расстояние";const o=document.createElement("ymaps3");return o.classList.add("ymaps3--route-control_info_container__value"),o.textContent=e,n.replaceChildren(r,o),n}const F=86400,D=3600;var N,$=n(391);const B=Object.freeze({geolocationTextInput:"Моя геопозиция",clearFieldsText:"Сбросить",changeOrderText:"Поменять порядок",waypointsPlaceholders:["Откуда","Куда"],availableTypes:["driving","truck","walking","transit"],autofocus:!0}),U={props:{geolocationTextInput:{type:String,default:B.geolocationTextInput},clearFieldsText:{type:String,default:B.clearFieldsText},changeOrderText:{type:String,default:B.changeOrderText},availableTypes:{type:Array,default:B.availableTypes},truckParameters:Object,waypoints:Array,waypointsPlaceholders:{type:Array,default:B.waypointsPlaceholders},search:Function,suggest:Function,route:Function,onMouseMoveOnMap:Function,onUpdateWaypoints:Function,onRouteResult:Function,onBuildRouteError:Function,autofocus:{type:Boolean,default:B.autofocus}}};class Q extends ymaps3.YMapComplexEntity{constructor(t){super(t,{container:!0})}_onAttach(){this._control=new ymaps3.YMapControl({transparent:!0}),this._router=new Y(this._props),this._control.addChild(this._router),this._addDirectChild(this._control)}_onUpdate(t){this._router.update(t)}_onDetach(){this._removeDirectChild(this._control)}}N=ymaps3.optionsKeyVuefy,Q.defaultProps=B,Q[N]=U;class Y extends ymaps3.YMapComplexEntity{constructor(){super(...arguments),this._waypoints=[null,null],this._clearAll=()=>{this._waypointInputFromElement.update({waypoint:null}),this._waypointInputToElement.update({waypoint:null}),this._clearInfo()},this._clearInfo=()=>{this._routeInfoElement.replaceChildren(),this._routeInfoElement.parentElement===this._rootElement&&this._rootElement.removeChild(this._routeInfoElement)},this._changeOrder=()=>{const[t,e]=this._waypoints,n=this._waypointInputFromElement.getValue(),r=this._waypointInputToElement.getValue();this._waypointInputToElement.update({waypoint:null===t?null:t.geometry.coordinates,value:n||null}),this._waypointInputFromElement.update({waypoint:null===e?null:e.geometry.coordinates,value:r||null})},this._onUpdateRouteMode=t=>{const e=t.target;this._setRouteMode(e.value)},this._route=z()((async()=>{var t,e,n,r,o,i,a;if(!this._waypoints.every((t=>null!==t)))return;const l=this._waypoints.map((t=>t.geometry.coordinates)),s=this._routeMode,c={points:l,type:s,truck:"truck"===s?this._props.truckParameters:void 0};this._routeInfoElement.classList.remove("ymaps3--route-control_info__error"),this._routeInfoElement.replaceChildren(function(){const t=document.createElement("ymaps3");return t.classList.add("ymaps3--route-control_info_loading"),t.insertAdjacentHTML("afterbegin",'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M5.636 5.636 7.05 7.05A7 7 0 1 0 12 5V3a9 9 0 1 1-6.364 2.636"/></svg>'),t}());try{const l=null!==(n=await(null===(e=(t=this._props).route)||void 0===e?void 0:e.call(t,{params:c,map:this.root})))&&void 0!==n?n:await ymaps3.route(c);0!==l[0].toRoute().geometry.coordinates.length?(null===(o=(r=this._props).onRouteResult)||void 0===o||o.call(r,l[0],this._routeMode),this._rootElement.appendChild(this._routeInfoElement),this._routeInfoElement.replaceChildren(...this._getRouteDetails(l[0]))):(null===(a=(i=this._props).onBuildRouteError)||void 0===a||a.call(i),this._rootElement.appendChild(this._routeInfoElement),this._routeInfoElement.classList.add("ymaps3--route-control_info__error"),this._routeInfoElement.replaceChildren(...function(){const t=document.createElement("ymaps3");t.classList.add("ymaps3--route-control_info_error__icon"),t.insertAdjacentHTML("afterbegin",I);const e=document.createElement("ymaps3");e.classList.add("ymaps3--route-control_info_error__text-container");const n=document.createElement("ymaps3");n.classList.add("ymaps3--route-control_info_error__label"),n.textContent="Невозможно построить маршрут";const r=document.createElement("ymaps3");return r.classList.add("ymaps3--route-control_info_error__description"),r.textContent="Проверьте места начальной и конечной точек, а так же наличие дорог между",e.replaceChildren(n,r),[t,e]}()))}catch(t){console.error(t),this._showServerError((()=>this._route()))}}),200)}_onAttach(){var t,e,n,r;this._rootElement=document.createElement("ymaps3"),this._rootElement.classList.add("ymaps3--route-control"),this._routeParametersElement=document.createElement("ymaps3"),this._routeParametersElement.classList.add("ymaps3--route-control_parameters"),this._rootElement.appendChild(this._routeParametersElement),this._routeInfoElement=document.createElement("ymaps3"),this._routeInfoElement.classList.add("ymaps3--route-control_info"),this._routeMode=this._props.availableTypes[0],this._routeModesElement=j(this._props.availableTypes),this._routeModesElement.addEventListener("change",this._onUpdateRouteMode),this._routeParametersElement.appendChild(this._routeModesElement),this._waypointsElement=document.createElement("ymaps3"),this._waypointsElement.classList.add("ymaps3--route-control_waypoints"),this._routeParametersElement.appendChild(this._waypointsElement),this._waypointInputFromElement=this._createWaypointInput("from",null!==(e=null===(t=this._props.waypoints)||void 0===t?void 0:t[0])&&void 0!==e?e:void 0),this._waypointInputToElement=this._createWaypointInput("to",null!==(r=null===(n=this._props.waypoints)||void 0===n?void 0:n[1])&&void 0!==r?r:void 0);const{container:o,changeOrderButton:i,clearFieldsButton:a}=function(t){const e=document.createElement("ymaps3");e.classList.add("ymaps3--route-control_actions");const n=document.createElement("button");n.insertAdjacentHTML("afterbegin",'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12.022 12.5V3.828l1.01 1.01a.5.5 0 0 0 .707 0l.707-.706a.5.5 0 0 0 0-.707L11.376.354a.5.5 0 0 0-.708 0l-3.071 3.07a.5.5 0 0 0 0 .708l.707.707a.5.5 0 0 0 .707 0l1.01-1.01V12.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5m-8.044-9v8.672l-1.01-1.01a.5.5 0 0 0-.707 0l-.707.706a.5.5 0 0 0 0 .707l3.07 3.071a.5.5 0 0 0 .708 0l3.07-3.07a.5.5 0 0 0 0-.708l-.706-.707a.5.5 0 0 0-.707 0l-1.01 1.01V3.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5" clip-rule="evenodd"/></svg>');const r=document.createElement("span");r.textContent=t.changeOrderText,n.appendChild(r);const o=document.createElement("button");return o.textContent=t.clearFieldsText,e.appendChild(n),e.appendChild(o),{container:e,changeOrderButton:n,clearFieldsButton:o}}({clearFieldsText:this._props.clearFieldsText,changeOrderText:this._props.changeOrderText});this._changeOrderButton=i,this._changeOrderButton.addEventListener("click",this._changeOrder),this._clearFieldsButton=a,this._clearFieldsButton.addEventListener("click",this._clearAll),this._actionsContainerElement=o,this._routeParametersElement.appendChild(this._actionsContainerElement),this._detachDom=ymaps3.useDomContext(this,this._rootElement,this._waypointsElement),this.addChild(this._waypointInputFromElement),this.addChild(this._waypointInputToElement),this._watchContext(ymaps3.ControlContext,(()=>{const t=this._consumeContext(ymaps3.ControlContext),[e]=t.position;this._rootElement.classList.toggle("ymaps3--route-control_bottom","bottom"===e)}),{immediate:!0}),this._watchContext(ymaps3.ThemeContext,(()=>{const{theme:t}=this._consumeContext(ymaps3.ThemeContext);this._rootElement.classList.toggle("_dark","dark"===t)}),{immediate:!0})}_onUpdate(t){void 0!==t.search&&(this._waypointInputFromElement.update({search:t.search}),this._waypointInputToElement.update({search:t.search})),void 0!==t.suggest&&(this._waypointInputFromElement.update({suggest:t.suggest}),this._waypointInputToElement.update({suggest:t.suggest})),void 0!==t.waypoints&&((0,$.p)(this._waypoints[0].geometry.coordinates,t.waypoints[0])||this._waypointInputFromElement.update({waypoint:t.waypoints[0],value:void 0}),(0,$.p)(this._waypoints[1].geometry.coordinates,t.waypoints[1])||this._waypointInputToElement.update({waypoint:t.waypoints[1],value:void 0})),void 0!==t.geolocationTextInput&&(this._waypointInputFromElement.update({geolocationTextInput:t.geolocationTextInput}),this._waypointInputToElement.update({geolocationTextInput:t.geolocationTextInput})),void 0!==t.waypointsPlaceholders&&(this._waypointInputFromElement.update({inputPlaceholder:t.waypointsPlaceholders[0]}),this._waypointInputToElement.update({inputPlaceholder:t.waypointsPlaceholders[1]})),void 0!==t.clearFieldsText&&(this._clearFieldsButton.textContent=t.clearFieldsText),void 0!==t.changeOrderText&&(this._changeOrderButton.textContent=t.changeOrderText),void 0!==t.availableTypes&&(this._routeModesElement.replaceChildren(...j(t.availableTypes).children),this._setRouteMode(t.availableTypes[0]))}_onDetach(){var t;null===(t=this._detachDom)||void 0===t||t.call(this),this._detachDom=void 0,this.removeChild(this._waypointInputFromElement),this.removeChild(this._waypointInputToElement)}_createWaypointInput(t,e){const n="from"===t?0:1,{geolocationTextInput:r,onMouseMoveOnMap:o,waypointsPlaceholders:i,search:a,suggest:l}=this._props;return new O({type:t,inputPlaceholder:i[n],waypoint:e,geolocationTextInput:r,search:a,suggest:l,onSelectWaypoint:t=>{if(null===t)return this._waypoints[n]=null,this._onUpdateWaypoints(null,n),void this._clearInfo();const{feature:e}=t;this._waypoints[n]=e,this._onUpdateWaypoints(e,n)},onMouseMoveOnMap:(t,e)=>{null==o||o(t,n,e)},onError:()=>{this._showServerError((()=>{this._rootElement.removeChild(this._routeInfoElement)}))}})}_onUpdateWaypoints(t,e){var n,r;this._waypoints[e]=t,null===(r=(n=this._props).onUpdateWaypoints)||void 0===r||r.call(n,this._waypoints),this._props.autofocus&&this._autofocusNextInput(e),this._waypoints.every((t=>null!==t))&&this._route()}_autofocusNextInput(t){0===t&&null===this._waypoints[1]?this._waypointInputToElement.triggerFocus():1===t&&null===this._waypoints[0]&&this._waypointInputFromElement.triggerFocus()}_setRouteMode(t){this._routeMode=t,this._route()}_showServerError(t){var e,n;null===(n=(e=this._props).onBuildRouteError)||void 0===n||n.call(e),this._rootElement.appendChild(this._routeInfoElement),this._routeInfoElement.classList.add("ymaps3--route-control_info__error"),this._routeInfoElement.replaceChildren(...function(t){const e=document.createElement("ymaps3");e.classList.add("ymaps3--route-control_info_error__icon"),e.insertAdjacentHTML("afterbegin",I);const n=document.createElement("ymaps3");n.classList.add("ymaps3--route-control_info_error__label"),n.textContent="Ошибка сервера";const r=document.createElement("button");return r.classList.add("ymaps3--route-control_info_error__button"),r.textContent="Повторить построение",r.addEventListener("click",t),[e,n,r]}(t))}_getRouteDetails(t){if(!t.toSteps)return[];const e=t.toSteps();let n=0,r=0;e.forEach((t=>{n+=t.properties.length,r+=t.properties.duration}));const o=(i=n)<1e3?`${i.toFixed(0)} m`:`${(i/1e3).toFixed(2)} km`;var i;return[P("time",function(t){const e=Math.floor(t/F),n=Math.floor(t%F/D),r=Math.floor(t%F%D/60),o=Math.floor(t%F%D%60);if(0===e&&0===n&&0===r)return`${o} s`;let i="";return 0!==e&&(i+=` ${e} d.`),0!==n&&(i+=` ${n} hr`),0!==r&&(i+=` ${r} min`),i}(r)),P("distance",o)]}}var W,K=n(486);const Z="_hide",J=Object.freeze({placeholder:"Введите адрес"}),G={props:{placeholder:{type:String,default:J.placeholder},search:{type:Function},suggest:{type:Function},searchResult:{type:Function}}};class X extends ymaps3.YMapComplexEntity{constructor(t){super(t,{container:!0}),this._resetInput=()=>{this._searchInput.value="",this._searchInput.dispatchEvent(new Event("input"))},this._updateSuggestComponent=()=>{this._searchInput.value?(this._suggestComponent.update({searchInputValue:this._searchInput.value}),this._addDirectChild(this._suggestComponent)):this._removeDirectChild(this._suggestComponent)},this._onChangeSearchInputDebounced=(0,K.debounce)((()=>{this._updateSuggestComponent()}),200),this._onChangeSearchInput=()=>{this._clearButton.classList.toggle(Z,!this._searchInput.value),this._onChangeSearchInputDebounced()},this._onFocusBlurSearchInput=t=>{var e;"focus"===t.type?this._updateSuggestComponent():"blur"===t.type&&t.relatedTarget!==(null===(e=this._suggestComponent)||void 0===e?void 0:e.activeSuggest)&&this._removeDirectChild(this._suggestComponent)},this._onKeyDownSearchInput=t=>{if(this._searchInput.value)switch(t.key){case"ArrowUp":t.preventDefault(),this._suggestComponent.update({suggestNavigationAction:{isNextSuggest:this._isBottomOrder}});break;case"ArrowDown":t.preventDefault(),this._suggestComponent.update({suggestNavigationAction:{isNextSuggest:!this._isBottomOrder}})}},this._onClickClearButton=t=>{t.preventDefault(),this._resetInput(),this._searchInput.focus()},this._onSubmitSearchForm=t=>{var e,n,r;t.preventDefault();const o={uri:null===(r=null===(n=null===(e=this.children[0])||void 0===e?void 0:e.activeSuggest)||void 0===n?void 0:n.dataset)||void 0===r?void 0:r.uri,text:this._searchInput.value};this._search(o),this._resetInput(),this._searchInput.blur()}}async _search(t){var e,n,r;const o=null!==(r=await(null===(n=(e=this._props).search)||void 0===n?void 0:n.call(e,{params:t,map:this.root})))&&void 0!==r?r:await ymaps3.search(t);this._props.searchResult(o)}_updateTheme(t){const e=this._consumeContext(ymaps3.ThemeContext);if(!e)return;const{theme:n}=e;t.classList.toggle("_dark","dark"===n)}_updateVerticalOrder(t){const e=this._consumeContext(ymaps3.ControlContext);if(!e)return;const n=e.position[0];this._isBottomOrder="bottom"===n,t.classList.toggle("_bottom",this._isBottomOrder)}_onAttach(){this._rootElement=document.createElement("ymaps3"),this._rootElement.classList.add("ymaps3--search-control"),this._detachDom=ymaps3.useDomContext(this,this._rootElement,this._rootElement),this._searchInput=document.createElement("input"),this._searchInput.type="text",this._searchInput.autocomplete="off",this._searchInput.classList.add("ymaps3--search-control__input"),this._searchInput.placeholder=this._props.placeholder,this._searchInput.addEventListener("input",this._onChangeSearchInput),this._searchInput.addEventListener("focus",this._onFocusBlurSearchInput),this._searchInput.addEventListener("blur",this._onFocusBlurSearchInput),this._searchInput.addEventListener("keydown",this._onKeyDownSearchInput),this._clearButton=document.createElement("button"),this._clearButton.type="reset",this._clearButton.classList.add("ymaps3--search-control__clear",Z),this._clearButton.addEventListener("click",this._onClickClearButton),this._searchForm=document.createElement("form"),this._searchForm.classList.add("ymaps3--search-control__form"),this._searchForm.addEventListener("submit",this._onSubmitSearchForm),this._searchForm.appendChild(this._searchInput),this._searchForm.appendChild(this._clearButton),this._rootElement.appendChild(this._searchForm),this._suggestComponent=new A({setSearchInputValue:t=>{this._searchInput.value=t},onSuggestClick:t=>{this._search(t),this._resetInput()},suggest:this._props.suggest}),this._unwatchThemeContext=this._watchContext(ymaps3.ThemeContext,(()=>this._updateTheme(this._searchInput)),{immediate:!0}),this._unwatchControlContext=this._watchContext(ymaps3.ControlContext,(()=>this._updateVerticalOrder(this._rootElement)),{immediate:!0})}_onUpdate(t){void 0!==t.placeholder&&(this._searchInput.placeholder=t.placeholder)}_onDetach(){var t,e,n;this._removeDirectChild(this._suggestComponent),this._suggestComponent=void 0,null===(t=this._detachDom)||void 0===t||t.call(this),this._detachDom=void 0,null===(e=this._unwatchThemeContext)||void 0===e||e.call(this),this._unwatchThemeContext=void 0,null===(n=this._unwatchControlContext)||void 0===n||n.call(this),this._unwatchControlContext=void 0,this._isBottomOrder=void 0,this._clearButton.removeEventListener("click",this._resetInput),this._clearButton=void 0,this._searchInput.removeEventListener("input",this._onChangeSearchInput),this._searchInput.removeEventListener("focus",this._onFocusBlurSearchInput),this._searchInput.removeEventListener("blur",this._onFocusBlurSearchInput),this._searchInput.removeEventListener("keydown",this._onKeyDownSearchInput),this._searchInput=void 0,this._searchForm.removeEventListener("submit",this._onSubmitSearchForm),this._searchForm=void 0,this._rootElement=void 0}}W=ymaps3.optionsKeyVuefy,X.defaultProps=J,X[W]=G;class tt extends ymaps3.YMapComplexEntity{_onAttach(){this._search=new X(this._props),this._control=new ymaps3.YMapControl({transparent:!0}).addChild(this._search),this.addChild(this._control)}_onUpdate(t){this._search.update(t)}_onDetach(){this._control.removeChild(this._search),this.removeChild(this._control)}}var et;const nt=Object.freeze({duration:200}),rt={props:{easing:[Function,String,Object],duration:{type:Number,default:nt.duration}}};class ot extends ymaps3.YMapComplexEntity{constructor(t){super(t),this._control=new ymaps3.YMapControl({transparent:!0}),this._tiltControl=new st(this._props),this._control.addChild(this._tiltControl),this.addChild(this._control)}_onUpdate(){this._tiltControl.update(this._props)}}et=ymaps3.optionsKeyVuefy,ot.defaultProps=nt,ot[et]=rt;const it="ymaps3--tilt-control__in-action",at="ymaps3--tilt_indicator__active",lt="hide-indicator";class st extends ymaps3.YMapComplexEntity{constructor(){super(...arguments),this._isClick=!1,this._toggleMapTilt=()=>{if(!this.root||!this._isClick)return;const{duration:t,easing:e}=this._props,{tilt:n,tiltRange:{min:r,max:o}}=this.root,i=c(n,r,o);this.root.setCamera({tilt:i,duration:t,easing:e})},this._onTiltStart=t=>{var e,n,r;0===t.button&&(this._isClick=!0,this._startTilt=null===(e=this.root)||void 0===e?void 0:e.tilt,this._prevTilt=null===(n=this.root)||void 0===n?void 0:n.tilt,this._startMovePosition={x:t.clientX,y:t.clientY},null===(r=this._element)||void 0===r||r.classList.toggle(it,!0),this._addTiltEventListeners())},this._onTiltMove=t=>{var e,n,r,o;if(!this._startMovePosition||void 0===this._startTilt||void 0===this._prevTilt||!this.root)return;const i=this._startMovePosition.y-t.clientY;if(Math.abs(i)<3)return;const a=Math.PI*i/this.root.size.y,l=this._startTilt+a;this._isClick=!1,null===(e=this._tiltIn)||void 0===e||e.classList.remove(lt),null===(n=this._tiltOut)||void 0===n||n.classList.remove(lt);const s=l-this._prevTilt;0!==s&&(null===(r=this._tiltOut)||void 0===r||r.classList.toggle(at,s<0),null===(o=this._tiltIn)||void 0===o||o.classList.toggle(at,s>0)),this.root.setCamera({tilt:l}),this._prevTilt=l},this._onTiltEnd=()=>{var t,e,n;null===(t=this._tiltIn)||void 0===t||t.classList.add(lt),null===(e=this._tiltOut)||void 0===e||e.classList.add(lt),null===(n=this._element)||void 0===n||n.classList.toggle(it,!1),this._removeTiltEventListeners()}}_onAttach(){this._listener=new ymaps3.YMapListener({onUpdate:t=>this._onMapUpdate(t.camera)}),this.addChild(this._listener),this._element=document.createElement("ymaps3"),this._label=document.createElement("ymaps3"),this._tiltIn=document.createElement("ymaps3"),this._tiltOut=document.createElement("ymaps3"),this._element.classList.add("ymaps3--tilt"),this._label.classList.add("ymaps3--tilt_label");const{tilt:t,tiltRange:e}=this.root;this._label.textContent=t===e.min?"3D":"2D",this._tiltIn.classList.add("ymaps3--tilt_indicator_in",lt),this._tiltOut.classList.add("ymaps3--tilt_indicator_out",lt),this._element.appendChild(this._tiltIn),this._element.appendChild(this._label),this._element.appendChild(this._tiltOut),this._element.addEventListener("click",this._toggleMapTilt),this._element.addEventListener("mousedown",this._onTiltStart),this._domDetach=ymaps3.useDomContext(this,this._element,null)}_onDetach(){var t,e,n;null===(t=this._domDetach)||void 0===t||t.call(this),this._domDetach=void 0,null===(e=this._element)||void 0===e||e.removeEventListener("click",this._toggleMapTilt),null===(n=this._element)||void 0===n||n.removeEventListener("mousedown",this._onTiltStart)}_onMapUpdate({tilt:t}){if(!this._element||!this._label)return;const e=p(null!=t?t:0),n=Math.round(e)===this.root.tiltRange.min;this._label.textContent=n?"3D":"2D",this._element.classList.toggle("ymaps3--tilt_active",!n)}_addTiltEventListeners(){window.addEventListener("mousemove",this._onTiltMove),window.addEventListener("mouseup",this._onTiltEnd)}_removeTiltEventListeners(){window.removeEventListener("mousemove",this._onTiltMove),window.removeEventListener("mouseup",this._onTiltEnd)}}var ct;const ht=Object.freeze({duration:200}),ut={props:{easing:[String,Object,Function],duration:{type:Number,default:ht.duration}}};class pt extends ymaps3.YMapGroupEntity{constructor(t){super(t),this._currentZoom=10,this._onMapUpdate=this._onMapUpdate.bind(this)}_onMapUpdate({location:t}){this._currentZoom=t.zoom,this._onUpdate()}_changeZoom(t){const e=this._currentZoom+t;this.root.update({location:{zoom:e,duration:this._props.duration,easing:this._props.easing}}),this._currentZoom=e,this._onUpdate()}_onAttach(){this._element=document.createElement("ymaps3"),this._element.classList.add("ymaps3--zoom-control"),this._detachDom=ymaps3.useDomContext(this,this._element,this._element);const t=document.createElement("ymaps3");t.classList.add("ymaps3--zoom-control__in");const e=document.createElement("ymaps3");e.classList.add("ymaps3--zoom-control__out"),this._zoomIn=new ymaps3.YMapControlCommonButton({onClick:()=>this._changeZoom(1),element:t}),this._zoomOut=new ymaps3.YMapControlCommonButton({onClick:()=>this._changeZoom(-1),element:e}),this._listener=new ymaps3.YMapListener({onUpdate:this._onMapUpdate}),this.addChild(this._zoomIn).addChild(this._zoomOut).addChild(this._listener),this._currentZoom=this.root.zoom,this._unwatchThemeContext=this._watchContext(ymaps3.ThemeContext,(()=>{this._element&&this._updateTheme({zoomIn:t,zoomOut:e})}),{immediate:!0}),this._unwatchControlContext=this._watchContext(ymaps3.ControlContext,(()=>{this._element&&this._updateOrientation(this._element)}),{immediate:!0})}_onDetach(){var t,e,n;null===(t=this._detachDom)||void 0===t||t.call(this),this._detachDom=void 0,this._element=void 0,this.removeChild(this._zoomIn).removeChild(this._zoomOut).removeChild(this._listener),null===(e=this._unwatchThemeContext)||void 0===e||e.call(this),null===(n=this._unwatchControlContext)||void 0===n||n.call(this)}_onUpdate(){const t=this.root;this._zoomIn.update({disabled:this._currentZoom>=t.zoomRange.max}),this._zoomOut.update({disabled:this._currentZoom<=t.zoomRange.min})}_updateTheme(t){const e=this._consumeContext(ymaps3.ThemeContext);if(!e)return;const{theme:n}=e,{zoomIn:r,zoomOut:o}=t;r.classList.toggle("ymaps3--zoom-control__dark-in","dark"===n),o.classList.toggle("ymaps3--zoom-control__dark-out","dark"===n)}_updateOrientation(t){const e=this._consumeContext(ymaps3.ControlContext);if(!e)return;const n=e.position[2];t.classList.toggle("ymaps3--zoom-control_vertical","vertical"===n),t.classList.toggle("ymaps3--zoom-control_horizontal","horizontal"===n)}}class dt extends ymaps3.YMapComplexEntity{_onAttach(){this._zoom=new pt(this._props),this._control=(new ymaps3.YMapControl).addChild(this._zoom),this.addChild(this._control)}_onUpdate(t){this._zoom.update(t)}_onDetach(){this.removeChild(this._control)}}ct=ymaps3.optionsKeyVuefy,dt[ct]=ut,dt.defaultProps=ht},239:(t,e,n)=>{n.a(t,(async(t,e)=>{try{var r=n(609);await r.ZP.init({lng:"ru",resources:{ru:{translation:{distance:{meters:"{{value, number}} м",kilometers:"{{value, number}} км"},area:{squareMeters:"{{value, number}} м²",squareKilometers:"{{value, number}} км²"}}}}}),e()}catch(t){e(t)}}),1)},341:(t,e,n)=>{n.a(t,(async(t,r)=>{try{n.d(e,{$M:()=>i.$M,Ew:()=>i.Ew,FZ:()=>i.FZ,Rw:()=>l.R,b2:()=>a.b,cN:()=>i.cN,kZ:()=>i.kZ,lv:()=>i.lv,py:()=>a.p,sH:()=>i.sH});var o=n(239),i=n(180),a=n(24),l=n(178),s=t([o,l]);[o,l]=s.then?(await s)():s,r()}catch(t){r(t)}}))},24:(t,e,n)=>{n.d(e,{p:()=>k,b:()=>h});const r={darkblue:{day:"#196dffff",night:"#3d7effff"},white:{day:"#ffffffff",night:"#4c4c4cff"},lavender:{day:"#9c89f9ff",night:"#7869d5ff"},brightgreen:{day:"#6ec901ff",night:"#498801ff"},tulip:{day:"#f99090ff",night:"#bb5a5cff"},pink:{day:"#f48bb5ff",night:"#ba5681ff"},brightlilac:{day:"#d38de0ff",night:"#a15fafff"},red:{day:"#e63d2eff",night:"#e43b2dff"},silver:{day:"#abaeb2ff",night:"#76797cff"},brightblue:{day:"#3377e4ff",night:"#0278f2ff"},lightblue:{day:"#60a8f0ff",night:"#237dc1ff"},blue:{day:"#5eb3edff",night:"#0181b8ff"},lightgreen:{day:"#69bfa9ff",night:"#2d8673ff"},green:{day:"#8cc157ff",night:"#018a45ff"},orange:{day:"#ffa15eff",night:"#c15a37ff"},crayola:{day:"#a9a9bbff",night:"#7c81b4ff"}},o={administration:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M3.448 0a1.5 1.5 0 0 0-.578 2.862l-.851 18.72a.4.4 0 0 0 .4.418H4.58a.4.4 0 0 0 .4-.418l-.85-18.72A1.5 1.5 0 0 0 3.521 0h-.074"/><path fill="currentColor" d="M5.815 15.783 16 15h.188c.118 0 .138.168.024.197l-5.345 1.336.044.485a1 1 0 0 0 1.072.906l11.648-.896A.4.4 0 0 0 24 16.63V8.372a.4.4 0 0 0-.372-.399l-8.39-.599-.155-1.546a1 1 0 0 0-.912-.897l-9.325-.777z"/></svg>',airfield:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M3 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M1.5 3.8q-.311 0-.599-.079l.9 19.611a.7.7 0 1 0 1.398-.064l-.538-11.733c.63.708 1.165 1.873 1.692 3.021C5.153 16.298 5.935 18 7 18l1.794-.371Q7 14.314 7 11q0-3.315 1.794-6.629L7 4C6 4 5.154 5.764 4.353 7.444c-.54 1.176-1.089 2.37-1.739 3.072L2.3 3.657q-.377.141-.8.143M14.694 16.408l-3.191.66Q10 14.035 10 11t1.503-6.068l3.19.66Q13.5 8.296 13.5 11t1.194 5.408"/><path fill="currentColor" fill-rule="evenodd" d="M17.672 15.792 21.5 15q2.5-.4 2.5-4t-2.5-4l-3.828-.792Q16.5 8.604 16.5 11t1.172 4.792M23 11c0 1.953-.589 3-1.5 3-.912 0-1.5-1.047-1.5-3 0-1.957.585-3 1.5-3S23 9.043 23 11" clip-rule="evenodd"/></svg>',airport:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M22.98 22.62 19.151 9.606c-1.342 1.671-3.049 3.454-5.22 5.255l5.943 8.914c.126.19.364.271.58.2l2.2-.734a.505.505 0 0 0 .324-.621M9 23.062v-4.459a107 107 0 0 1-3.316 2.313L6.79 23.68c.101.252.383.38.639.29l1.231-.43a.51.51 0 0 0 .34-.48"/><path fill="currentColor" fill-rule="evenodd" d="M6.892 15a114 114 0 0 1 3.502-4.096L.224 4.124a.505.505 0 0 1-.198-.579l.733-2.2a.505.505 0 0 1 .621-.324l14.387 4.231C20.34.822 23.164-.508 23.836.164c.705.706-.796 3.793-5.787 8.784S4.455 21.31 3.572 20.428c-.202-.203.03-.812.568-1.69L.32 17.21a.507.507 0 0 1-.29-.639l.43-1.231A.51.51 0 0 1 .94 15z" clip-rule="evenodd"/></svg>',animation:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M15.313 3.214a.3.3 0 0 1 .472.14l2.157 6.473a.4.4 0 0 0 .226.243l5.167 2.153a.3.3 0 0 1 0 .554l-5.167 2.153a.4.4 0 0 0-.226.243l-2.157 6.473a.3.3 0 0 1-.57 0l-2.157-6.473a.4.4 0 0 0-.226-.243l-5.167-2.153a.3.3 0 0 1 0-.554l5.167-2.153a.4.4 0 0 0 .119-.077L14 11zM4.716 4.1 5.81.735a.2.2 0 0 1 .38 0L7.284 4.1a.2.2 0 0 0 .11.121l2.56 1.126a.2.2 0 0 1 0 .366l-2.56 1.126a.2.2 0 0 0-.11.12L6.19 10.324a.2.2 0 0 1-.38 0L4.716 6.959a.2.2 0 0 0-.11-.121l-2.56-1.126a.2.2 0 0 1 0-.366l2.56-1.126a.2.2 0 0 0 .11-.121m1.712 14.177.888-2.73a.2.2 0 0 1 .38 0l.888 2.73a.2.2 0 0 0 .11.122l2.08.914a.2.2 0 0 1 0 .366l-2.08.915a.2.2 0 0 0-.11.121l-.888 2.731a.2.2 0 0 1-.38 0l-.888-2.73a.2.2 0 0 0-.11-.122l-2.081-.915a.2.2 0 0 1 0-.366l2.08-.915a.2.2 0 0 0 .11-.12" clip-rule="evenodd"/></svg>',aquarium:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M13.593 1.436q-2.757-1.94-7.17-1.26a.5.5 0 0 0-.275.85Q7.41 2.276 7.991 3.55C4.996 5.39 3 8.685 3 12.444v3.38c0 .812-.316 1.59-.879 2.165L.707 19.432A2.5 2.5 0 0 0 0 21.174v.418q0 .079.029.151c.082.21.314.311.52.228l2.983-1.218c.948-.387 2-.419 2.968-.09l.842.287A.505.505 0 0 0 8 20.466v-.312a2.5 2.5 0 0 0-.707-1.742l-.293-.3c-.597-.609-.828-1.54-.45-2.31l.42-.75-.002-.002.035-.056L7 15l.018-.03q.141-.219.288-.432Q10.615 10 23 10h.8a.2.2 0 0 0 .2-.2v-.386a1 1 0 0 0-.293-.707L22.65 7.65A8 8 0 0 0 15 2h-.736a3 3 0 0 0-.671-.564M20.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" clip-rule="evenodd"/><path fill="currentColor" d="M11 13.76v1.446c0 .428 0 .643.09.772a.5.5 0 0 0 .337.208c.156.023.347-.073.73-.265l.305-.152c1.284-.642 1.927-.963 2.396-1.442a4 4 0 0 0 .923-1.495c.096-.278.15-.573.18-.938-2.115.522-3.744 1.206-4.96 1.866"/></svg>',architect_bureau:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M11 0v7.513a9 9 0 0 1 4.09 2.942l.2.256 2.601-.948zM14.302 11.071 0 16.286V16a8 8 0 0 1 14.302-4.929"/><path fill="currentColor" fill-rule="evenodd" d="M23 20.5a.5.5 0 0 0 .5.5h.1c.22 0 .4.18.4.4v.2a.4.4 0 0 1-.4.4H.4a.4.4 0 0 1-.4-.4v-.2c0-.22.18-.4.4-.4h.1a.5.5 0 0 0 .5-.5v-1.229a.2.2 0 0 0-.269-.188l-.194.071A.4.4 0 0 1 0 18.778V17.63a.4.4 0 0 1 .263-.376l23.2-8.458a.4.4 0 0 1 .537.376v1.148a.4.4 0 0 1-.263.376l-.474.173a.4.4 0 0 0-.263.376zm-6.974-5.814c-.026.07-.026.15-.026.31v4.364c0 .224 0 .336.044.422a.4.4 0 0 0 .174.174c.086.044.198.044.422.044h2.72c.224 0 .336 0 .422-.044a.4.4 0 0 0 .174-.174c.044-.086.044-.198.044-.422v-5.363c0-.308 0-.463-.065-.562a.4.4 0 0 0-.246-.172c-.116-.026-.26.027-.55.133l-2.72 1c-.15.055-.226.083-.282.132a.4.4 0 0 0-.11.158M10 17.18c0-.162 0-.243.027-.312a.4.4 0 0 1 .11-.159c.057-.048.133-.076.285-.13l2.72-.987c.289-.105.433-.157.548-.13a.4.4 0 0 1 .246.172c.064.1.064.253.064.56v3.167c0 .224 0 .336-.044.422a.4.4 0 0 1-.174.174c-.086.044-.198.044-.422.044h-2.72c-.224 0-.336 0-.422-.044a.4.4 0 0 1-.174-.174C10 19.696 10 19.584 10 19.36zm-5.973 1.858c-.027.07-.027.15-.027.312v.011c0 .224 0 .336.044.422a.4.4 0 0 0 .174.174c.086.044.198.044.422.044h2.72c.224 0 .336 0 .422-.044a.4.4 0 0 0 .174-.174C8 19.696 8 19.584 8 19.36v-.997c0-.307 0-.46-.064-.56a.4.4 0 0 0-.246-.172c-.115-.027-.26.025-.548.13l-2.72.986c-.152.055-.228.083-.284.131a.4.4 0 0 0-.111.159" clip-rule="evenodd"/></svg>',armenian_church:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m6.5 6.5-3-1L5 8l-1.5 2.5 3-1h4V21L9 24l3-1.5 3 1.5-1.5-3V9.5h4l3 1L19 8l1.5-2.5-3 1h-4V3L15 0l-3 1.5L9 0l1.5 3v3.5z"/></svg>',art:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M17.169 7.217a26 26 0 0 0-1.377 3.13 66 66 0 0 0-1.535 4.836q-.625.106-1.355.13a2 2 0 0 0-1.806 2.698Q11.838 20 9 20a9 9 0 1 1 8.169-12.783M6.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-7 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-1-5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m17.154-3.346a25.3 25.3 0 0 1-1.104 4.06q-1.65 4.53-4.808 10.492a.575.575 0 0 1-1.071-.39q1.41-6.597 3.06-11.128a25.3 25.3 0 0 1 1.765-3.82 3.495 3.495 0 0 0 2.158.786m-.803-1.151c-1.446-.527-1.642-1.829-1.212-3.102.475-1.407 1.829-2.5 3.3-2.523-.348.956.673 1.84.63 3.421s-1.345 2.703-2.718 2.204" clip-rule="evenodd"/></svg>',atm:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M16 11v3h1v-3zM20 11v3h1v-3z"/><path fill="currentColor" fill-rule="evenodd" d="M4 4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm3.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m9.5-1h-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m4 0h-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-7 0h-1s-.034 1-1 1v1h1v3h1z" clip-rule="evenodd"/><path fill="currentColor" d="M1 7h1v9.6A1.4 1.4 0 0 0 3.4 18H21v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"/></svg>',attraction:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12 0a1.5 1.5 0 0 1 1.5 1.5v.612c1.66.25 3.186.907 4.474 1.867q.056-.088.133-.165l.354-.353a1.5 1.5 0 1 1 2.121 2.121l-.354.354q-.08.08-.172.138a9.95 9.95 0 0 1 1.833 4.432q.055-.006.111-.006h.5a1.5 1.5 0 0 1 0 3H22q-.057 0-.11-.006a10 10 0 0 1-4.533 6.951l-.638-1.985a7.99 7.99 0 0 0 3.266-5.96h-4.016a4 4 0 0 0 0-1h4.016a7.97 7.97 0 0 0-1.986-4.792l-2.84 2.84a4 4 0 0 0-.706-.708L17.293 6A7.97 7.97 0 0 0 12.5 4.016v4.016a4 4 0 0 0-1 0V4.015a7.97 7.97 0 0 0-4.792 1.986l2.84 2.84a4 4 0 0 0-.708.706L6 6.707A7.97 7.97 0 0 0 4.016 11.5h4.016a4 4 0 0 0 0 1H4.015a7.99 7.99 0 0 0 3.266 5.96l-.638 1.985A10 10 0 0 1 2.112 13.5H1.5a1.5 1.5 0 0 1 0-3h.612a9.95 9.95 0 0 1 1.846-4.445 1 1 0 0 1-.144-.12l-.353-.353a1.5 1.5 0 1 1 2.121-2.121l.354.353q.067.067.119.144A9.95 9.95 0 0 1 10.5 2.112V1.5A1.5 1.5 0 0 1 12 0"/><path fill="currentColor" fill-rule="evenodd" d="M14.5 12c0 .677-.269 1.29-.706 1.741l2.557 8.182c.085.273.154.493.202.676C17.436 22.812 18 23 18 23v1H6v-1s.564-.188 1.447-.4c.048-.184.117-.404.202-.677l2.557-8.182A2.5 2.5 0 1 1 14.5 12m-1.73 5.775 1.21 4.353A17 17 0 0 0 12 22c-.671 0-1.342.05-1.98.128l1.21-4.353c.229-.826.343-1.239.522-1.34a.5.5 0 0 1 .496 0c.179.101.293.514.523 1.34M12.7 12a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0" clip-rule="evenodd"/></svg>',auto:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 19.429v-5.73c0-.409-.066-.803-.19-1.172l-1.577-6.092a2.89 2.89 0 0 0-2.47-2.163C15.138 4.09 14.3 4 12 4s-3.138.09-4.763.272a2.89 2.89 0 0 0-2.47 2.163L3.19 12.526c-.123.37-.189.764-.189 1.172v5.73c0 .316.252.572.563.572h2.373a.564.564 0 0 0 .546-.433L7 18h10l.518 1.567a.564.564 0 0 0 .546.433h2.374c.31 0 .562-.256.562-.571M16.63 5.274c.72.083 1.318.624 1.502 1.36L19.1 10.5a3.4 3.4 0 0 0-1.173-.4c-1.73-.253-3.705-.4-5.927-.4s-4.197.147-5.927.4c-.42.062-.816.2-1.173.4l.968-3.865c.184-.737.781-1.278 1.502-1.361C8.946 5.092 9.742 5 12 5s3.054.092 4.63.274M18.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M7 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/><path fill="currentColor" d="M22.702 9c.332 0 .6.272.6.607v.5a1.21 1.21 0 0 1-1.07 1.203l-.5.057a.605.605 0 0 1-.657-.456l-.287-1.16A.605.605 0 0 1 21.375 9zM1.3 9c-.331 0-.6.272-.6.607v.5c0 .615.46 1.132 1.071 1.203l.5.057a.605.605 0 0 0 .657-.456l.287-1.16A.605.605 0 0 0 2.627 9z"/></svg>',auto_parts:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m19.871 2.021-1.414 1.415q-.354 1.06.353 1.767.708.708 1.768.354l1.414-1.414 1.415 1.414-1.415 2.828a4 4 0 0 1-4.278.9l-8.428 8.43a4 4 0 0 1-.9 4.277l-2.83 1.415-1.413-1.415 1.414-1.414q.354-1.06-.354-1.768-.707-.707-1.767-.353L2.02 19.87.607 18.457l1.414-2.829a4 4 0 0 1 4.259-.908l8.44-8.44a4 4 0 0 1 .908-4.259L18.457.607z"/><path fill="currentColor" d="m1 2 1-1 4 2v1.91L10.5 9 9 10.5 4.91 6H3zM12.732 16.154c.037.115.136.214.334.412L19 22.5s1.62-.12 2.5-1 1-2.5 1-2.5l-5.934-5.934c-.198-.198-.297-.297-.412-.334a.5.5 0 0 0-.309 0c-.114.037-.213.136-.41.334l-2.37 2.368c-.197.198-.296.297-.333.412a.5.5 0 0 0 0 .308"/></svg>',auto_repair:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M5 8.4c2 0 2.8-2 2.8-2h8.45s.75 2 2.75 2l2-.8V6.2h-1.5a.9.9 0 0 1-.9-.9v-.6a.9.9 0 0 1 .9-.9H21V2.4l-2-.8c-2 0-2.744 2-2.744 2H7.8s-.8-2-2.8-2l-2 .8v1.4h1.5a.9.9 0 0 1 .9.9v.6a.9.9 0 0 1-.9.9H3v1.4z"/><path fill="currentColor" fill-rule="evenodd" d="M20 17.486V22.5a.5.5 0 0 1-.5.5h-2.11a.5.5 0 0 1-.485-.379L16.5 21h-9l-.405 1.621A.5.5 0 0 1 6.61 23H4.5a.5.5 0 0 1-.5-.5v-5.014c0-.357.059-.703.168-1.026l1.403-5.33a2.56 2.56 0 0 1 2.196-1.892C9.21 9.079 9.955 9 12 9s2.79.08 4.234.238a2.56 2.56 0 0 1 2.195 1.893l1.403 5.33c.11.323.168.668.168 1.025m-1.676-2.826-.862-3.275a1.56 1.56 0 0 0-1.337-1.153C14.72 10.078 14.01 10 12 10c-2.01 0-2.72.078-4.124.232a1.56 1.56 0 0 0-1.338 1.153l-.862 3.275c.318-.17.67-.286 1.045-.338Q9.03 14 12 14q2.967 0 5.278.322c.375.052.727.169 1.045.338M19 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/><path fill="currentColor" d="M21.5 13h-1.11a.5.5 0 0 0-.484.621l.238.954a.5.5 0 0 0 .542.375l.428-.049a1 1 0 0 0 .886-.993V13.5a.5.5 0 0 0-.5-.5M2.5 13h1.11a.5.5 0 0 1 .485.621l-.239.954a.5.5 0 0 1-.542.375l-.428-.049A1 1 0 0 1 2 13.908V13.5a.5.5 0 0 1 .5-.5"/></svg>',baby_shop:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M4.357 11.216a4 4 0 0 1 2.813-3.06 4.002 4.002 0 1 0 7.414-2.935l.012-.017A7.99 7.99 0 0 1 21 2h3q0 1-.5 1.5l-.483 5.318a.2.2 0 0 1-.2.182h-.673a1 1 0 0 1-.91-.586l-.882-1.94a568 568 0 0 0-.994 3.319L20.74 16.7a13.3 13.3 0 0 1-2.433 1.683Q15.7 14 12 14t-6.307 4.384A13.3 13.3 0 0 1 3.26 16.7z"/><path fill="currentColor" d="M12 24c-5.31 0-9.89-3.105-12-7.587l.747-.913A14.27 14.27 0 0 0 12 20.965c4.573 0 8.644-2.14 11.253-5.465l.747.913A13.25 13.25 0 0 1 12 24M8.17 8c.365 1.165 1.347 2 2.5 2 1.155 0 2.137-.835 2.5-2zM0 10c0 .672.145 1.305.401 1.86q.8.64 1.599.64.525 0 1.05-.276l.234-1.289a4.8 4.8 0 0 1 2.857-3.56C5.499 6.532 4.554 6 3.5 6 1.567 6 0 7.79 0 10"/></svg>',banks:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M1.234 4.893A.4.4 0 0 0 1 5.258V6.6c0 .221.18.4.4.4H3v12H1.4a.4.4 0 0 0-.4.4v.85a.75.75 0 0 1-.75.75.25.25 0 0 0-.25.25v.35c0 .221.18.4.4.4h23.2a.4.4 0 0 0 .4-.4v-.35a.25.25 0 0 0-.25-.25.75.75 0 0 1-.75-.75v-.85a.4.4 0 0 0-.4-.4H21V7h1.6a.4.4 0 0 0 .4-.4V5.258a.4.4 0 0 0-.235-.365L12.166.075a.4.4 0 0 0-.33 0zm7.572 12.383c1.002.25 1.83.412 2.494.483V19h1.4v-1.32c1.361-.343 2.1-1.275 2.1-2.68 0-1.63-.994-2.623-2.72-2.796-.94-.094-1.28-.433-1.28-1.204s.34-1.11 1.28-1.204c.489.004 1.242.155 2.167.463l.506-1.518q-1.145-.383-2.053-.495V7h-1.4v1.32C9.939 8.662 9.2 9.594 9.2 11c0 1.63.994 2.624 2.72 2.796.94.094 1.28.433 1.28 1.204s-.34 1.11-1.28 1.204c-.507-.004-1.45-.161-2.726-.48z" clip-rule="evenodd"/></svg>',bars:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M5.786 6.63c4.994-1.392 8.947 2.383 12.452.199C18.09 5.489 17.686 4.002 17 2.4H7c-.653 1.523-1.05 2.941-1.214 4.23m7.655 14.304 3.06.922a.7.7 0 0 1 .498.644.71.71 0 0 1-.458.693Q14.411 24 11.99 24q-2.416 0-4.512-.804A.745.745 0 0 1 7 22.5c0-.297.195-.558.479-.644l3.08-.924L11 17a5.1 5.1 0 0 0 2 0zM6.42 1h11.158c5.478 9.73.812 15-5.579 15C5.61 16 .943 10.73 6.42 1" clip-rule="evenodd"/></svg>',baths:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M17 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M20 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0M1 9c4.24 0 7.196.674 10.803 2.131.422.17 1.897.785 1.794.742.709.292 1.236.499 1.757.683 2.701.954 4.99 1.138 7.888.414a1 1 0 0 0-.485-1.94c-2.492.623-4.387.47-6.737-.36-.483-.17-.98-.365-1.66-.646.112.046-1.375-.572-1.808-.747C8.723 7.73 5.522 7 1 7a1 1 0 1 0 0 2"/><path fill="currentColor" d="M2 10c4.829 0 7.792 1.283 10.467 2.44C15.33 13.68 17.863 14.775 22 14c0 3.481-.99 5.231-2.722 6.11l.222.89h.5a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5H19a1 1 0 0 1-.8-.4l-.45-.6a2.5 2.5 0 0 0-2-1h-7.5a2.5 2.5 0 0 0-2 1l-.45.6a1 1 0 0 1-.8.4H3.5a.5.5 0 0 1-.5-.5V22a1 1 0 0 1 1-1h.5l.31-1.243.02-.07C3.03 18.333 2 15.584 2 10"/></svg>',beach:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m12.564 11.634 2.022 5.555a16 16 0 0 0-2.083.124l-1.82-4.998a66 66 0 0 1 1.881-.681M8.642.658l.199.546a5 5 0 0 0-1.894.646l-.184-.508A1 1 0 0 1 8.642.658"/><path fill="currentColor" d="M21.742 7.936c-1.19-1.892-5.082-6.898-12.323-5.664q1.497 1.45 3.82 6.021-1.232.387-2.544.864-1.319.48-2.514.978-1.167-5.025-.943-7.093c-6.454 3.7-6.215 10.098-5.91 12.325.05.368.48.517.78.299 1.242-.905 4.298-2.901 9.19-4.682 4.89-1.78 8.507-2.213 10.038-2.318.37-.025.604-.416.406-.73M4.999 20.665 4 21a1 1 0 0 0 1 1h15a2 2 0 0 0 2-2c-6.608-2.832-11.434-1.208-17.001.665"/></svg>',beauty:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M22 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M1 12c.514-.514 1.028-1.16 1.576-1.848C4.16 8.16 6.029 5.81 9.006 5.262c.548-.1 1.064.252 1.582.607.461.315.924.631 1.412.631.492 0 .952-.312 1.412-.625.524-.355 1.048-.711 1.618-.606 1.136.21 2.11.686 2.97 1.307 1.369.989 2.446 2.344 3.417 3.566.55.692 1.067 1.342 1.583 1.858-2.424.485-3.9-.12-5.315-.7-.99-.406-1.95-.8-3.185-.8-.532 0-.987.113-1.413.22-.374.092-.726.18-1.087.18-.424 0-.788-.094-1.165-.19-.402-.103-.819-.21-1.335-.21-1.242 0-2.227.395-3.238.8-1.43.574-2.916 1.17-5.262.7M12 18.5c6.075 0 7.5-1.5 10-5.5l-.025-.013A4.2 4.2 0 0 0 20 12.5c-1.5 0-2.75.25-4 .5s-2.5.5-4 .5-2.75-.25-4-.5-2.5-.5-4-.5a4.2 4.2 0 0 0-1.968.484L2 13c2.5 4 3.925 5.5 10 5.5"/></svg>',beauty_shops:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M22 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M1 12c.514-.514 1.028-1.16 1.576-1.848C4.16 8.16 6.029 5.81 9.006 5.262c.548-.1 1.064.252 1.582.607.461.315.924.631 1.412.631.492 0 .952-.312 1.412-.625.524-.355 1.048-.711 1.618-.606 1.136.21 2.11.686 2.97 1.307 1.369.989 2.446 2.344 3.417 3.566.55.692 1.067 1.342 1.583 1.858-2.424.485-3.9-.12-5.315-.7-.99-.406-1.95-.8-3.185-.8-.532 0-.987.113-1.413.22-.374.092-.726.18-1.087.18-.424 0-.788-.094-1.165-.19-.402-.103-.819-.21-1.335-.21-1.242 0-2.227.395-3.238.8-1.43.574-2.916 1.17-5.262.7M12 18.5c6.075 0 7.5-1.5 10-5.5l-.025-.013A4.2 4.2 0 0 0 20 12.5c-1.5 0-2.75.25-4 .5s-2.5.5-4 .5-2.75-.25-4-.5-2.5-.5-4-.5a4.2 4.2 0 0 0-1.968.484L2 13c2.5 4 3.925 5.5 10 5.5"/></svg>',beer_market:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M10.75 0h2.5a.75.75 0 0 1 .75.75V1a.5.5 0 0 1-.5.5h-3A.5.5 0 0 1 10 1V.75a.75.75 0 0 1 .75-.75M7.95 8.4l.245-.326c.15-.2.216-.292.259-.359-.028-.1-.057-.23-.111-.502l-.566-2.826a.5.5 0 0 0 .148-.572l-.275-.69a.2.2 0 0 0-.15-.122V3a.5.5 0 0 0 .5-.5v-.25a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v.25a.5.5 0 0 0 .5.5v.003a.2.2 0 0 0-.15.123l-.276.688a.5.5 0 0 0 .148.574l-.565 2.825c-.071.358-.098.47-.138.592-.04.123-.087.228-.152.34-.065.11-.13.205-.349.497L2.75 9A3.75 3.75 0 0 0 2 11.25v9.733a1 1 0 0 0 .445.832Q4.223 23 6 23q.536 0 1.072-.108A2 2 0 0 1 7 22.361V11.25a4.75 4.75 0 0 1 .95-2.85M17 22.36q0 .276-.072.532Q17.464 23 18 23q1.777 0 3.555-1.184a1 1 0 0 0 .445-.833V11.25c0-.811-.263-1.6-.75-2.25l-.268-.358a5 5 0 0 1-.35-.498 1.7 1.7 0 0 1-.151-.34 5 5 0 0 1-.138-.591l-.566-2.826a.5.5 0 0 0 .148-.572l-.275-.69a.2.2 0 0 0-.15-.122V3a.5.5 0 0 0 .5-.5v-.25a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v.25a.5.5 0 0 0 .5.5v.003a.2.2 0 0 0-.15.123l-.276.688a.5.5 0 0 0 .148.574l-.565 2.825a7 7 0 0 1-.11.502c.042.067.109.16.258.359l.245.326a4.75 4.75 0 0 1 .95 2.85z"/><path fill="currentColor" fill-rule="evenodd" d="M10.039 3a.5.5 0 0 0 .225.418l-.625 3.751c-.063.374-.088.492-.127.622s-.087.243-.155.362c-.067.118-.135.218-.362.521L8.75 9A3.75 3.75 0 0 0 8 11.25v11.11a1 1 0 0 0 .61.922Q10.305 24 12 24t3.39-.718a1 1 0 0 0 .61-.921V11.25c0-.811-.263-1.6-.75-2.25l-.245-.326c-.227-.303-.295-.403-.362-.521a1.7 1.7 0 0 1-.155-.362 5 5 0 0 1-.127-.622l-.625-3.751a.5.5 0 0 0 .19-.604l-.276-.688a.2.2 0 0 0-.15-.123V2h-3v.003a.2.2 0 0 0-.15.123l-.276.688A.5.5 0 0 0 10.04 3m1.711 2a.35.35 0 0 0-.246.103l-.386 2.313c-.07.42-.106.595-.17.807a3.2 3.2 0 0 1-.287.67c-.11.194-.211.34-.466.681L9.95 9.9a2.25 2.25 0 0 0-.45 1.35v10.773q.502.19 1 .304v-3.49Q11.175 19 12 19q1.28 0 2.197-.392a.5.5 0 0 0 .303-.46v-4.396a.5.5 0 0 0-.655-.475q-.802.262-1.845.261-.825 0-1.5-.174V11.75c0-.811.263-1.6.75-2.25A3.75 3.75 0 0 0 12 7.25v-2a.25.25 0 0 0-.25-.25" clip-rule="evenodd"/></svg>',bike:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M10.577 15.126a10 10 0 0 0-.223-.812 13.5 13.5 0 0 0-.89-2.166c-.372-.689-.77-1.372-1.254-1.996-.224-.326-.493-.618-.741-.926q-.163-.185-.333-.365l-.943.283A.927.927 0 0 1 5 8.257V7.41a.4.4 0 0 1 .4-.4h4.2c.22 0 .4.179.4.4v.293a.4.4 0 0 1-.285.383l-1.469.441c.278.314.576.614.829.95.546.65 1.007 1.366 1.44 2.098.424.74.78 1.519 1.07 2.326.094.254.163.518.239.78l4.058-6.313-1.434-3.792-2.077-.581a.506.506 0 0 1 .2-.992l2.548.31c.243.03.435.194.51.41l.013.038 2.874 8.343q.476-.107.984-.108a4.501 4.501 0 1 1-3.35 1.496l.947 1.049a3.1 3.1 0 0 0-.697 1.957 3.105 3.105 0 0 0 3.1 3.1c1.709 0 3.1-1.39 3.1-3.1a3.105 3.105 0 0 0-3.624-3.057l.997 2.892a.504.504 0 0 1-.95.341l-2.73-7.218-3.532 6.235a1.5 1.5 0 0 1 .239.813 1.497 1.497 0 0 1-1.71 1.482l-2.435-.35a4.501 4.501 0 1 1-.774-3.866L4.5 15.205l-1.568-1.38A3.1 3.1 0 0 0 1.4 16.5a3.105 3.105 0 0 0 3.1 3.1c1.382 0 2.556-.91 2.955-2.162l-2.452-.352a.586.586 0 0 1 0-1.16zM18.512 6h3.976a.4.4 0 0 1 .388.497l-.512 2.049a1.92 1.92 0 0 1-1.864 1.456h-1.188a.4.4 0 0 1-.388-.303l-.8-3.202a.4.4 0 0 1 .388-.497" clip-rule="evenodd"/></svg>',bike_rent:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M15 2a2 2 0 1 1-3.999.001A2 2 0 0 1 15 2M11.988 5.095l2.324 3.249 2.69 1.353c.01-.017.106-.097.998-.097 1 0 1.4 1.4.4 2a.6.6 0 0 1-.27.092.7.7 0 0 1-.43-.046l-4.289-1.892a.5.5 0 0 1-.13-.081l-.128-.108L11.5 8.16l-1.556 3.463 2.812 2.656a.95.95 0 0 1 .295.72l-.215 6a.832.832 0 0 1-1.662 0l-.193-5.395-3.8-2.25a2 2 0 0 1-.666-2.799l3.294-5.153.103-.188a1.23 1.23 0 0 1 2.077-.12"/><path fill="currentColor" d="m5.003 18.92 5.07-.727.093 2.627-1.31-.187a4.5 4.5 0 1 1-.78-3.863L4.5 18.2l-1.564-1.377A3.099 3.099 0 0 0 4.5 22.6a3.1 3.1 0 0 0 2.957-2.168l-2.454-.352a.586.586 0 0 1 0-1.16M15.484 14.031l-1.506 3.014.072-2.008a1.95 1.95 0 0 0-.607-1.484l-2.296-2.168.001-.002 3.758 1.252a1 1 0 0 1 .578 1.396M19.022 19.67l-1.36-6.995a1.72 1.72 0 0 0 1.24-.233l.399 2.562Q19.4 15 19.5 15a4.5 4.5 0 1 1-2.735.927l.73 1.21a3.1 3.1 0 1 0 2.023-.736l.455 2.928a.504.504 0 0 1-.95.341"/></svg>',boat_station:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13.07.418 13.7 4h-3.4l.63-3.582A.5.5 0 0 1 11.424 0h1.152a.5.5 0 0 1 .494.418M3.944 8.45 3.5 12.6l7.816-2.551c.442-.161.926-.161 1.368 0L20.5 12.6l-.444-4.15a.5.5 0 0 0-.498-.45H15.63a.2.2 0 0 1-.05-.394l2.748-.686-.25-1.502A.5.5 0 0 0 17.584 5H6.416a.5.5 0 0 0-.494.418l-.25 1.502 2.747.686A.2.2 0 0 1 8.371 8H4.442a.5.5 0 0 0-.498.45"/><path fill="currentColor" fill-rule="evenodd" d="m.626 15.563 10.986-4.487c.248-.101.528-.101.776 0l10.986 4.486a.993.993 0 0 1 .476 1.446l-3.665 5.875a1 1 0 0 1-.22.249Q18.89 24 16.055 24c-1.52 0-2.788-.5-4.055-.999s-2.535-.998-4.056-.998q-2.177 0-3.315.511a1.02 1.02 0 0 1-1.285-.386L.15 17.008a.99.99 0 0 1 .476-1.445M15 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/></svg>',bookstore:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M9.087.437C9 .607 9 .832 9 1.28V3h4V1.28c0-.448 0-.672-.087-.843a.8.8 0 0 0-.35-.35C12.392 0 12.168 0 11.72 0h-1.44c-.448 0-.672 0-.843.087a.8.8 0 0 0-.35.35M13 4H9v18.72c0 .448 0 .672.087.843a.8.8 0 0 0 .35.35c.17.087.395.087.843.087h1.44c.448 0 .672 0 .843-.087a.8.8 0 0 0 .35-.35c.087-.17.087-.395.087-.843zM4.327 6.257c.078-.44.117-.662.232-.815a.8.8 0 0 1 .405-.284c.184-.056.405-.017.846.061l1.128.199c.442.078.662.117.816.232a.8.8 0 0 1 .283.405c.056.184.017.405-.06.846l-.243 1.375-3.65-.643zM3.91 8.617 1.55 22.01c-.078.441-.117.662-.061.845a.8.8 0 0 0 .283.405c.154.116.375.155.816.233l1.128.199c.441.078.662.116.846.06a.8.8 0 0 0 .405-.283c.115-.154.154-.374.232-.816L7.56 9.261z"/><path fill="currentColor" fill-rule="evenodd" d="M15 3.28c0-.448 0-.672.087-.843a.8.8 0 0 1 .35-.35C15.607 2 15.832 2 16.28 2h5.44c.448 0 .672 0 .843.087a.8.8 0 0 1 .35.35c.087.17.087.395.087.843v19.44c0 .448 0 .672-.087.843a.8.8 0 0 1-.35.35c-.171.087-.395.087-.843.087h-5.44c-.448 0-.672 0-.843-.087a.8.8 0 0 1-.35-.35C15 23.393 15 23.168 15 22.72zm2.044 14.938c-.044.086-.044.198-.044.422v2.72c0 .224 0 .336.044.422a.4.4 0 0 0 .174.174c.086.044.198.044.422.044h2.72c.224 0 .336 0 .422-.044a.4.4 0 0 0 .174-.174c.044-.086.044-.198.044-.422v-2.72c0-.224 0-.336-.044-.422a.4.4 0 0 0-.174-.174C20.696 18 20.584 18 20.36 18h-2.72c-.224 0-.336 0-.422.044a.4.4 0 0 0-.174.174" clip-rule="evenodd"/></svg>',bowling:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M17.12 8.702A29.6 29.6 0 0 0 15 19.706c0 .5.234.972.665 1.226C16.418 21.375 17.709 22 19 22s2.582-.625 3.335-1.068c.431-.254.665-.726.665-1.226 0-3.77-.72-7.504-2.12-11.004l-.075-.189c-.488-1.221-.136-2.61.354-3.831A4.5 4.5 0 0 0 21.5 3c0-2-1-3-2.5-3s-2.5 1-2.5 3c0 .618.143 1.189.341 1.682.49 1.22.842 2.61.354 3.83z"/><path fill="currentColor" fill-rule="evenodd" d="M14.026 16.067c-.026.451-.026.907-.026 1.819v1.147c0 .494 0 .866.032 1.186a8 8 0 1 1 1.655-10.613c-.072.196-.167.441-.292.767-.327.851-.49 1.276-.63 1.707a16 16 0 0 0-.74 3.987M7.25 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M11 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-6 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/></svg>',buddhism:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M5 8h14q2.408 0 2.88-2.118a.1.1 0 0 0-.125-.119Q20.899 6 19.8 6c-3.27 0-6.083-1.804-7.323-4.571a8 8 0 0 1-.287-.787.2.2 0 0 0-.381 0q-.162.512-.295.806C10.27 4.204 7.463 6 4.2 6q-1.098 0-1.956-.236a.1.1 0 0 0-.125.118Q2.591 8 5 8"/><path fill="currentColor" fill-rule="evenodd" d="M5 9h14v3a4.52 4.52 0 0 0 3.75 2q.339 0 .942-.108a.1.1 0 0 1 .11.14Q22.916 16 21 16H3q-1.917 0-2.801-1.968a.1.1 0 0 1 .109-.14Q.91 14 1.25 14c1.56 0 2.935-.794 3.742-2zm2.256 1h1.488c.089 0 .121.01.154.027a.2.2 0 0 1 .075.075c.018.033.027.065.027.154v1.488c0 .089-.01.121-.027.154a.2.2 0 0 1-.075.075c-.033.018-.065.027-.154.027H7.256c-.089 0-.121-.01-.154-.027a.2.2 0 0 1-.075-.075c-.018-.033-.027-.065-.027-.154v-1.488c0-.089.01-.121.027-.154a.2.2 0 0 1 .075-.075c.033-.018.065-.027.154-.027m6.488 0h-3.488c-.089 0-.121.01-.154.027a.2.2 0 0 0-.075.075c-.018.033-.027.065-.027.154v1.488c0 .089.01.121.027.154a.2.2 0 0 0 .075.075c.033.018.065.027.154.027h3.488c.089 0 .121-.01.154-.027a.2.2 0 0 0 .075-.075c.018-.033.027-.065.027-.154v-1.488c0-.089-.01-.121-.027-.154a.2.2 0 0 0-.075-.075c-.033-.018-.065-.027-.154-.027m1.512 0h1.488c.089 0 .121.01.154.027a.2.2 0 0 1 .075.075c.018.033.027.065.027.154v1.488c0 .089-.01.121-.027.154a.2.2 0 0 1-.075.075c-.033.018-.065.027-.154.027h-1.488c-.089 0-.121-.01-.154-.027a.2.2 0 0 1-.075-.075c-.018-.033-.027-.065-.027-.154v-1.488c0-.089.01-.121.027-.154a.2.2 0 0 1 .075-.075c.033-.018.065-.027.154-.027M21 17v3.4a.6.6 0 0 0 .6.6c.22 0 .4.18.4.4v.1a.5.5 0 0 0 .5.5h.1c.22 0 .4.18.4.4v.2a.4.4 0 0 1-.4.4H1.4a.4.4 0 0 1-.4-.4v-.2c0-.22.18-.4.4-.4h.1a.5.5 0 0 0 .5-.5v-.1c0-.22.18-.4.4-.4a.6.6 0 0 0 .6-.6V17zM8.8 18H6.2a.2.2 0 0 0-.2.2v2.6c0 .11.09.2.2.2h2.6a.2.2 0 0 0 .2-.2v-2.6a.2.2 0 0 0-.2-.2m6.4 0h2.6c.11 0 .2.09.2.2v2.6a.2.2 0 0 1-.2.2h-2.6a.2.2 0 0 1-.2-.2v-2.6c0-.11.09-.2.2-.2m-1.4 0h-3.6a.2.2 0 0 0-.2.2v2.6c0 .11.09.2.2.2h3.6a.2.2 0 0 0 .2-.2v-2.6a.2.2 0 0 0-.2-.2" clip-rule="evenodd"/></svg>',building:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M10 18.2V23h11.4a.6.6 0 0 0 .6-.6V8.6a.6.6 0 0 0-.6-.6h-4.954l-.158 2H20v1h-3.79l-.159 2H20v1h-4.028l-.373 4.715a.303.303 0 0 1-.323.284.306.306 0 0 1-.276-.309V2.4a.4.4 0 0 0-.4-.4H14v-.6a.4.4 0 0 0-.4-.4H3.4a.4.4 0 0 0-.4.4V2h-.6a.4.4 0 0 0-.4.4v20a.6.6 0 0 0 .6.6H7v-4.8c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2M5.5 15V9h2v6zm4-6v6h2V9zm-4-2V4h2v3zm4-3v3h2V4zM17 17v-1h3v1z" clip-rule="evenodd"/><path fill="currentColor" d="m16.526 7 .079-1H19.6c.22 0 .4.18.4.4V7z"/></svg>',bus:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M6 24a3 3 0 1 1 0-6 3 3 0 0 1 0 6" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M0 19V3h19c3 0 5 1.125 5 2.999V20a1 1 0 0 1-1 1H11a5 5 0 0 0-9.584-2zm21-7q0 2 3 3V6h-2a1 1 0 0 0-1 1zm-8 6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zM5 7v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1M0 6v6h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" clip-rule="evenodd"/></svg>',bus_station:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M22 23.25V10.5l1.585-.543a.75.75 0 0 0 .415-.67V6c0-.828-1.172-1.5-2-1.5v-.918A3 3 0 0 0 19.927.729C18.384.228 16.117 0 12 0S5.543.228 4 .729c-1.236.4-2 1.553-2 2.853V4.5c-.828 0-2 .672-2 1.5v3.286c0 .285.16.544.415.671L2 10.5v12.75c0 .414.336.75.75.75h2.914a.75.75 0 0 0 .728-.568l.375-1.501-1.856-.552A.2.2 0 0 1 5 21h14a.2.2 0 0 1 .09.379l-1.857.552.375 1.5a.75.75 0 0 0 .728.569h2.914a.75.75 0 0 0 .75-.75M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4m7-16Q6.93 3 4.32 4.135c-.53.23-.889.76-.926 1.365L3 11.917c0 .391.27.724.636.784q1.829.3 8.364.299 6.535 0 8.365-.299c.365-.06.635-.393.635-.784L20.606 5.5c-.037-.605-.397-1.134-.926-1.365Q17.07 3 12 3m9 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0" clip-rule="evenodd"/></svg>',bus_stop:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M6 24a3 3 0 1 1 0-6 3 3 0 0 1 0 6" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M0 19V3h19c3 0 5 1.125 5 2.999V20a1 1 0 0 1-1 1H11a5 5 0 0 0-9.584-2zm21-7q0 2 3 3V6h-2a1 1 0 0 0-1 1zm-8 6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zM5 7v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1M0 6v6h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" clip-rule="evenodd"/></svg>',butcher_shop:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M22.473 5.626a34 34 0 0 0-1.44-1.796c-1.001-1.163-2.2-2.395-3.636-3.73a.496.496 0 0 0-.701.105Q11.192 7.725 5 14.022q3.604 1.466 6.17 3.986c1.865-.957 4.598-2.616 6.83-5.008 2.432-2.606 3.804-5.582 4.473-7.374M17 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/><path fill="currentColor" d="M22.956 6.288c-.794 1.773-2.4 4.999-4.456 7.212-1.921 2.069-4.918 3.974-6.792 5.06q.555.595 1.058 1.245c.149.193.411.25.624.138q3.775-1.989 6.64-4.902 2.925-2.975 3.953-6.915a.52.52 0 0 0-.064-.408q-.464-.73-.963-1.43M4 15 .149 18.851a.5.5 0 0 0-.146.366Q.036 20.609.5 22q.383 1.15 1.649 1.712a1 1 0 0 0 1.263-.399l3.793-6.322a.5.5 0 0 0-.231-.717z"/></svg>',cableway:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m23.41 1.543-6.915 1.362a2.8 2.8 0 0 0-.314-1.519L23.154.013c.39-.077.763.203.834.626.071.422-.187.827-.578.904M.846 5.987 7.842 4.61a2.8 2.8 0 0 1-.314-1.519L.59 4.457c-.39.077-.65.482-.578.904.07.423.444.703.834.626"/><path fill="currentColor" fill-rule="evenodd" d="M21.597 13H19.8a.8.8 0 0 0-.8.8v4.4a.8.8 0 0 0 .8.8h2.894l.274 1.496c.06.33.036.671-.071.99l-.384 1.146A2.01 2.01 0 0 1 20.605 24H3.395a2.01 2.01 0 0 1-1.908-1.368l-.384-1.146a2 2 0 0 1-.07-.99L1.305 19H4.2a.8.8 0 0 0 .8-.8v-4.4a.8.8 0 0 0-.8-.8H2.403l.248-1.358A2.01 2.01 0 0 1 4.629 10h4.006l.974-1.533a.98.98 0 0 1 1.075-.436l3.047.8a1 1 0 0 1 .465.276l.851.893h4.324c.972 0 1.804.691 1.978 1.642zm-8.64-9.056 1.239-.225c1.443-.263 1.05-2.427-.394-2.165l-3.975.723c-1.443.262-1.05 2.427.393 2.165l1.357-.247.744 2.975a.7.7 0 0 0 1.358-.34zM8.8 13a.8.8 0 0 0-.8.8v7.4a.8.8 0 0 0 .8.8h1.4a.8.8 0 0 0 .8-.8v-7.4a.8.8 0 0 0-.8-.8zm5 0a.8.8 0 0 0-.8.8v7.4a.8.8 0 0 0 .8.8h1.4a.8.8 0 0 0 .8-.8v-7.4a.8.8 0 0 0-.8-.8z" clip-rule="evenodd"/></svg>',cafe:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M23 8v-.5A3.5 3.5 0 0 0 19.5 4h-1.283q-.072 0-.144.003L18 4H4a1 1 0 0 0-1 1c0 6 .03 12 8 12 2.972 0 4.84-.834 6.014-2.191.199-.23.56-.67.878-1.06.4-.491.913-.879 1.464-1.195C20.66 11.806 23 10.163 23 8m-4.002-2h.502A1.5 1.5 0 0 1 21 7.5V8a2 2 0 0 1-2 2h-.191c.152-1.267.183-2.625.19-4" clip-rule="evenodd"/><path fill="currentColor" d="M2.906 18c-.5 0-.906.406-.906.906 0 .36.213.685.553.803C3.735 20.123 6.75 21 11 21s7.265-.878 8.447-1.29a.84.84 0 0 0 .553-.804c0-.5-.406-.906-.906-.906z"/></svg>',canteen:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M20.6 10Q19 13 16 13t-4.6-3l.376-9.4A.624.624 0 0 1 12.4 0h.41a.2.2 0 0 1 .2.19L13.35 7h1.7l.34-6.81a.2.2 0 0 1 .2-.19h.82a.2.2 0 0 1 .2.19L16.95 7h1.7l.34-6.81a.2.2 0 0 1 .2-.19h.41c.335 0 .61.265.624.6zm-3.49 3.854.26 9.117A1 1 0 0 1 16.372 24h-.742a1 1 0 0 1-1-1.029l.26-9.117q.555.147 1.111.146.555 0 1.11-.146M9 1.055V24h-.718a2 2 0 0 1-1.999-2.08L6.6 14Q6 12.44 4 12 4 4.017 7.256.388A1 1 0 0 1 9 1.055" clip-rule="evenodd"/></svg>',car:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m21.369 10.877.421 1.715c.137.415.21.86.21 1.319v7.446c0 .355-.28.643-.625.643h-2.942a.6.6 0 0 1-.57-.41L17.3 19.9l2.115-.705a.1.1 0 0 0-.031-.195H4.616a.1.1 0 0 0-.031.195L6.7 19.9l-.563 1.69a.6.6 0 0 1-.57.41H2.626A.634.634 0 0 1 2 21.357v-7.446c0-.46.074-.904.21-1.319l.421-1.715-1.947-.65A1 1 0 0 1 0 9.28V8.6A.6.6 0 0 1 .6 8h1.986a1 1 0 0 1 .685.272l.693-2.821C4.3 4.134 5.392 3.166 6.708 3.017c1.805-.203 2.736-.305 5.292-.305s3.487.102 5.292.305c1.316.15 2.408 1.117 2.745 2.434l.692 2.82A1 1 0 0 1 21.414 8H23.4a.6.6 0 0 1 .6.6v.68a1 1 0 0 1-.684.948zm-2.541-5.099a1.97 1.97 0 0 0-1.672-1.482C15.4 4.097 14.514 3.997 12 3.997s-3.4.1-5.155.299c-.802.09-1.467.68-1.672 1.482l-1.078 4.499a3.9 3.9 0 0 1 1.306-.434q2.889-.414 6.6-.414t6.598.414a3.9 3.9 0 0 1 1.306.434zM19 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4" clip-rule="evenodd"/></svg>',car_park:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13.5 12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4v6zm-4 10h-4V2h8a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6h-4z"/></svg>',car_park_barrier:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M4.117 18.364H1V2h6.234c2.582 0 4.675 2.198 4.675 4.91v1.635q0 .475-.082.922a3.76 3.76 0 0 0-2.575 3.508 4.5 4.5 0 0 1-2.018.48H4.117zm3.117-8.182c.86 0 1.558-.733 1.558-1.637V6.91c0-.904-.698-1.636-1.558-1.636H4.117v4.909z" clip-rule="evenodd"/><path fill="currentColor" d="M15.573 20.182h-.634V13.03c0-1.07-.83-1.94-1.911-1.94a1.95 1.95 0 0 0-1.958 1.94v7.152h-.588a.39.39 0 0 0-.391.388v1.042a.39.39 0 0 0 .392.388h5.09a.39.39 0 0 0 .392-.388V20.57a.39.39 0 0 0-.392-.388M16.151 12.06h1.47l1.13 2.061h-2.6zM22.818 12.449a.39.39 0 0 0-.391-.388H19.43l1.13 2.06h1.867c.216 0 .391-.15.391-.363z"/></svg>',car_park_covered:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M11.41.111a1.63 1.63 0 0 1 1.18 0l7 2.75c.762.3 1.115 1.107.788 1.805s-1.208 1.022-1.97.722L12 2.871 5.591 5.388c-.761.3-1.643-.024-1.97-.722s.027-1.506.788-1.805z"/><path fill="currentColor" fill-rule="evenodd" d="M9.6 24H6V7h7.2c2.982 0 5.4 2.283 5.4 5.1v1.7c0 2.817-2.418 5.1-5.4 5.1H9.6zm3.6-8.5c.994 0 1.8-.761 1.8-1.7v-1.7c0-.939-.806-1.7-1.8-1.7H9.6v5.1z" clip-rule="evenodd"/></svg>',car_park_disabled:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M5.121 18.364H2V2h6.242c2.586 0 4.682 2.198 4.682 4.91v1.686c-.15.138-.288.276-.411.405-.357.375-.693.787-.974 1.155a23 23 0 0 0-.908 1.28 2.2 2.2 0 0 0-.301 1.505 4.5 4.5 0 0 1-2.088.513h-3.12zm3.121-8.182c.862 0 1.561-.733 1.561-1.637V6.91c0-.904-.699-1.636-1.56-1.636H5.12v4.909z" clip-rule="evenodd"/><path fill="currentColor" d="M17.137 8.557a1.45 1.45 0 0 0 1.44-1.46 1.45 1.45 0 0 0-1.44-1.46 1.45 1.45 0 0 0-1.44 1.46c0 .806.645 1.46 1.44 1.46M14.678 15.165a.49.49 0 0 1-.213.583.474.474 0 0 1-.65-.176l-1.729-3.035s1.528-2.403 2.612-3.01c1.137-.638 2.967-.788 3.34.607.286 1.07.082 2.928-.029 3.74.455.321.847.727 1.155 1.195L22 16.157l-.207 4.671a.574.574 0 0 1-.57.55.574.574 0 0 1-.569-.532l-.277-3.408-.487-.191q.01.144.01.293c0 2.463-1.97 4.46-4.398 4.46-2.43 0-4.398-1.997-4.398-4.46 0-.66.226-1.411.358-1.792a.22.22 0 0 1 .32-.116l.696.407c.096.057.139.174.107.282-.08.269-.214.783-.214 1.219 0 1.753 1.402 3.175 3.13 3.175 1.73 0 3.132-1.422 3.132-3.175 0-1.54-1.082-2.825-2.517-3.114-.504-.102-.949-.425-1.018-.942l-.286-2.16-1.052 1.232z"/></svg>',car_park_taxi:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M4.8 7.2h4.8V12H4.8zM4.8 12v4.8H0V12zM14.4 12v4.8H9.6V12zM19.2 12V7.2h-4.8V12zM19.2 12v4.8H24V12z"/></svg>',car_park_toll:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M5.117 18.364H2V2h6.234c2.582 0 4.675 2.198 4.675 4.91v1.635c0 2.712-2.093 4.91-4.675 4.91H5.117zm3.117-8.182c.86 0 1.558-.733 1.558-1.637V6.91c0-.904-.698-1.636-1.558-1.636H5.117v4.909z" clip-rule="evenodd"/><path fill="currentColor" d="M22 12.91a3.636 3.636 0 0 0-7.273 0 5.46 5.46 0 0 1 5.037 3.356A3.64 3.64 0 0 0 22 12.91M18.364 18.364a3.636 3.636 0 1 0-7.273 0 3.636 3.636 0 0 0 7.273 0"/></svg>',car_wash:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13 3a1 1 0 1 1-2 0c0-.552 1-2 1-2s1 1.448 1 2"/><path fill="currentColor" fill-rule="evenodd" d="M20 17.486V22.5a.5.5 0 0 1-.5.5h-2.11a.5.5 0 0 1-.485-.379L16.5 21h-9l-.405 1.621A.5.5 0 0 1 6.61 23H4.5a.5.5 0 0 1-.5-.5v-5.014c0-.357.059-.703.168-1.026l1.403-5.33a2.56 2.56 0 0 1 2.196-1.892C9.21 9.079 9.955 9 12 9s2.79.08 4.234.238a2.56 2.56 0 0 1 2.195 1.893l1.403 5.33c.11.323.168.668.168 1.025m-1.676-2.826-.862-3.275a1.56 1.56 0 0 0-1.337-1.153C14.72 10.078 14.01 10 12 10c-2.01 0-2.72.078-4.124.232a1.56 1.56 0 0 0-1.338 1.153l-.862 3.275a3.2 3.2 0 0 1 1.045-.338Q9.03 14 12 14q2.967 0 5.278.322a3.2 3.2 0 0 1 1.045.338M19 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/><path fill="currentColor" d="M21.5 13h-1.11a.5.5 0 0 0-.484.621l.238.954a.5.5 0 0 0 .542.375l.428-.049a1 1 0 0 0 .886-.993V13.5a.5.5 0 0 0-.5-.5M2.5 13h1.11a.5.5 0 0 1 .485.621l-.239.954a.5.5 0 0 1-.542.375l-.428-.049A1 1 0 0 1 2 13.908V13.5a.5.5 0 0 1 .5-.5M18 4a1 1 0 0 0 1-1c0-.552-1-2-1-2s-1 1.448-1 2a1 1 0 0 0 1 1M16 6a1 1 0 1 1-2 0c0-.552 1-2 1-2s1 1.448 1 2M9 7a1 1 0 0 0 1-1c0-.552-1-2-1-2S8 5.448 8 6a1 1 0 0 0 1 1M7 3a1 1 0 0 1-2 0c0-.552 1-2 1-2s1 1.448 1 2"/></svg>',cart_parking:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M17.497 19.997H8.384q.084.235.085.499v.001a1.502 1.502 0 0 1-2.969.32l1.535-.627a.1.1 0 0 0-.038-.193h-.585v-.001a3.5 3.5 0 0 1-3.42-3.5v-11.3c0-.728-.43-1.386-1.096-1.678l-.487-.213a.683.683 0 0 1-.358-.883.677.677 0 0 1 .871-.376l.973.376a2.46 2.46 0 0 1 1.572 2.323q-.075 6.004-.075 7.43 0 1.154.049 3.864a2.5 2.5 0 0 0 2.5 2.455h14.308a.751.751 0 0 1 0 1.503h-.92q.083.235.084.499v.001a1.502 1.502 0 0 1-2.967.323l1.572-.63a.1.1 0 0 0-.037-.193zM11.502 7.5a.5.5 0 0 0 .5.501h3.003a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.502h5.3a.2.2 0 0 1 .2.195q.095 3.664.095 5.289 0 1.138-.047 3.057a2 2 0 0 1-2 1.951H7.438a2 2 0 0 1-2-1.953q-.045-1.93-.044-3.055 0-1.604.09-5.289a.2.2 0 0 1 .2-.195h5.319a.5.5 0 0 1 .5.501m2.882 3.627a.2.2 0 0 0-.14.245l.672 2.516a.2.2 0 0 0 .245.142l4.447-1.193a.2.2 0 0 0 .141-.245l-.673-2.516a.2.2 0 0 0-.245-.142zM12.264 3.3h2.508a1.5 1.5 0 0 1 1.474 1.227l.186 1.002a.4.4 0 0 1-.393.473h-.42a.4.4 0 0 1-.4-.4v-.55a.5.5 0 0 0-.5-.5h-2.403a.5.5 0 0 0-.5.5v.55a.4.4 0 0 1-.4.4h-.42a.4.4 0 0 1-.393-.473l.186-1.002A1.5 1.5 0 0 1 12.264 3.3" clip-rule="evenodd"/></svg>',catholic_church:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13.5 0h-3v2.7H8v2.6h2.5v3.2H4v3h6.5V24h3V11.5H20v-3h-6.5V5.3H16V2.7h-2.5z"/></svg>',cemetery:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 1C6 1 4 3 4 3l.946 14.191a1 1 0 0 0 .856.924l.827.118Q9.089 18 12 18q2.91 0 5.371.233l.827-.118a1 1 0 0 0 .856-.924L20 3s-2-2-8-2M8 5.2c0-.11.09-.2.2-.2h7.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2H8.2a.2.2 0 0 1-.2-.2zM10.2 7a.2.2 0 0 0-.2.2v.6c0 .11.09.2.2.2h3.6a.2.2 0 0 0 .2-.2v-.6a.2.2 0 0 0-.2-.2zM9 12.2c0-.11.09-.2.2-.2h5.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2H9.2a.2.2 0 0 1-.2-.2z" clip-rule="evenodd"/><path fill="currentColor" d="M22 22.6a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4v-1.806a1 1 0 0 1 .79-.977Q6.577 19 12 19t9.21.817a1 1 0 0 1 .79.977z"/></svg>',checkpoint:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M3.448 0a1.5 1.5 0 0 0-.578 2.862l-.851 18.72a.4.4 0 0 0 .4.418H4.58a.4.4 0 0 0 .4-.418l-.85-18.72A1.5 1.5 0 0 0 3.521 0h-.074"/><path fill="currentColor" d="M5.815 15.783 16 15h.188c.118 0 .138.168.024.197l-5.345 1.336.044.485a1 1 0 0 0 1.072.906l11.648-.896A.4.4 0 0 0 24 16.63V8.372a.4.4 0 0 0-.372-.399l-8.39-.599-.155-1.546a1 1 0 0 0-.912-.897l-9.325-.777z"/></svg>',childrens_camp:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M23.73 19.673a.2.2 0 0 1-.155.327h-4.14A28.3 28.3 0 0 1 17 16a28.3 28.3 0 0 1-2.436 4H10c2-2 6.3-9 6.3-11.12V2a.5.5 0 0 1 .5-.5h.4a.5.5 0 0 1 .5.5v6.88c0 2.12 3.354 7.528 6.03 10.793"/><path fill="currentColor" d="M15.3 2.418c-.58-.052-1.19-.235-1.8-.418-1.25-.375-2.5-.75-3.5 0v3.5c1-.5 2.18-.287 3.396.052.644.18 1.29.36 1.904.398zM10.775 9q-2 0-4-1Q4.83 13.837.045 19.673A.2.2 0 0 0 .2 20h8.075q5-6 7-12-2.5 1-4.5 1"/></svg>',childrens_playground:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M16.612 5.967a1.5 1.5 0 1 1-.624-2.933 1.5 1.5 0 0 1 .624 2.933M5.212 8.167a1.5 1.5 0 1 0-.623-2.934 1.5 1.5 0 0 0 .623 2.934M19.857 8.833 19.2 8l-3.246 1.623a.668.668 0 0 1-.75-1.092L18.2 5.8c.317-.308.684-.53 1.114-.416q4.119 1.27 4.633 3.469.201.858-.364 1.458l.194.932a1.07 1.07 0 0 1-.81 1.267l-2.65.573.416 1.732a.78.78 0 0 1-.382.954.754.754 0 0 1-1.017-.352l-.713-1.967-3.821.826V14c0-.673-.237-1.29-.633-1.773l3.72-.804-.105-.29a.82.82 0 0 1 .225-.996q1.66-1.195 1.85-1.304M9.293 13.281l-2.791.603.007-.27a.81.81 0 0 0-.6-.818q-1.97-.41-2.184-.431L4 11.2l3.508.35a.6.6 0 0 0 .28-1.152L4.003 8.9c-.394-.115-.818-.193-1.16.089Q-.363 11.842.046 14.063q.163.884.936 1.195l.182.873c.12.577.679.945 1.247.823l2.387-.516.09 1.846c.03.386.338.7.724.715a.755.755 0 0 0 .776-.74l.057-2.177 2.755-.596V14q0-.374.093-.719"/><path fill="currentColor" fill-rule="evenodd" d="M12 12a2 2 0 0 0-2 2v6.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14a2 2 0 0 0-2-2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/></svg>',cinemas:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m21 19 1.591 1.591a.502.502 0 0 0 .792-.112Q24 19.356 24 17t-.617-3.479a.5.5 0 0 0-.792-.113L21 15h-.359c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189c-.043.081-.066.162-.066.385v2.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066zm-5.629 3.516-.12.477c-.093.373-.157.501-.254.628a.9.9 0 0 1-.364.284c-.146.063-.286.095-.67.095H9.037c-.385 0-.525-.032-.67-.095a.9.9 0 0 1-.365-.284c-.097-.127-.161-.255-.255-.628l-.386-1.545-2.228-.297c-.409-.054-.553-.112-.696-.205a.9.9 0 0 1-.326-.373c-.074-.154-.112-.305-.112-.717v-5.574c0-.446.046-.607.134-.77a.9.9 0 0 1 .378-.378c.163-.088.324-.134.77-.134h12.436c.446 0 .608.046.77.134q.246.132.378.378c.088.162.134.324.134.77v6.434a2 2 0 0 1-2.264 1.982zM9.022 7a5.5 5.5 0 1 1 5.478 5h-10a4.5 4.5 0 1 1 4.473-5zM4.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m10-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1.641 15h.718c.223 0 .304.023.385.067a.45.45 0 0 1 .19.189c.043.081.066.162.066.385v2.718c0 .223-.023.304-.067.385a.45.45 0 0 1-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 0 1-.19-.189C1.024 18.663 1 18.582 1 18.36v-2.718c0-.223.023-.304.067-.385a.45.45 0 0 1 .189-.19c.081-.043.162-.066.385-.066m11 1c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189c-.043.081-.066.162-.066.385v.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066h3.718c.223 0 .304-.023.385-.067a.45.45 0 0 0 .19-.189c.043-.081.066-.162.066-.385v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19c-.081-.043-.162-.066-.385-.066z" clip-rule="evenodd"/></svg>',circus:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M16.446 23.264Q12.929 21.573 12 16q-.93 5.573-4.446 7.264-4.193-.5-6.282-2.05a.5.5 0 0 1-.184-.53Q2 17.275 2 12.5 6 14 12 14t10-1.5q0 4.776.913 8.184a.5.5 0 0 1-.186.53q-2.088 1.55-6.281 2.05M11.35 2.989 11.482.38a.4.4 0 0 1 .4-.38h.239a.4.4 0 0 1 .399.38l.13 2.61q2.212 3.095 6.418 5.791A8.3 8.3 0 0 0 20.6 9.5q.979.326 1.702.014a.5.5 0 0 1 .698.46V11q-4 2-11 2T1 11V9.973a.5.5 0 0 1 .698-.459q.723.312 1.702-.014a8.3 8.3 0 0 0 1.533-.719Q9.14 6.085 11.351 2.99M5 1.5 9.995.138a.4.4 0 0 1 .505.386v1.952a.4.4 0 0 1-.505.386z" clip-rule="evenodd"/></svg>',clothes_shop:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m19.102 12-.493-2.429-.522 1.929.487 9.59a.6.6 0 0 1-.366.58Q15.104 23 12 23t-6.208-1.33a.6.6 0 0 1-.366-.58l.487-9.59-.522-1.929L4.898 12l-1.636.807a.615.615 0 0 1-.703-.113l-2.38-2.346a.594.594 0 0 1-.077-.757L3.884 4Q7.94 2 12 2t8.116 2l3.782 5.59c.16.239.129.556-.076.758l-2.38 2.346a.615.615 0 0 1-.704.113zM12 6a4 4 0 0 1-3.735-2.564Q10.132 3 12 3q1.867 0 3.735.436A4 4 0 0 1 12 6" clip-rule="evenodd"/></svg>',college:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m11.568 2.108-10.3 5.436a.524.524 0 0 0 0 .912l10.3 5.436a.92.92 0 0 0 .864 0l4.875-2.572-5.226-2.412a1 1 0 0 1-.336-1.564l6.244 2.974a2.3 2.3 0 0 1 1.311 2.076v1.892a1 1 0 1 0 1.4 0v-1.892c0-.896-.323-1.742-.883-2.399l2.916-1.539a.524.524 0 0 0 0-.912l-10.3-5.436a.92.92 0 0 0-.865 0"/><path fill="currentColor" d="M18 12.5v.678c-.677 1.666-1.82 4.76-1.986 7.02-1.098.471-2.432.802-4.014.802-5.5 0-8-4-8-4v-5.5l7.284 3.642c.263.131.394.197.532.223a1 1 0 0 0 .368 0c.138-.026.27-.092.532-.223zM21.548 16.267A2 2 0 0 1 20 17a2 2 0 0 1-1.548-.733c-.428 1.104-.952 2.756-.952 4.233 0 0 1 1.5 2.5 1.5s2.5-1.5 2.5-1.5c0-1.477-.524-3.129-.952-4.233"/></svg>',concert_hall:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M20.995 16c.09 1.45-1.1 2.996-2.942 3.673-2.13.784-4.33.11-4.91-1.504-.583-1.615.673-3.559 2.804-4.342 1.072-.394 2.161-.42 3.053-.142V6.429L9 8.57V19h-.005c.09 1.45-1.1 2.996-2.942 3.673-2.13.784-4.33.11-4.91-1.504-.582-1.615.673-3.559 2.804-4.342 1.072-.394 2.161-.42 3.053-.142V3.572a1 1 0 0 1 .79-.978l12-2.572A1 1 0 0 1 21 1v1.763-.881V16z" clip-rule="evenodd"/></svg>',confectionary:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M10.646 15.376a.2.2 0 0 0 .354-.128V13.79a.8.8 0 0 0-.185-.512L2 2.7V2a1 1 0 0 1 1.224-.974l20 4.596a1 1 0 0 1 .776.974v8.712a2 2 0 0 1-.353 1.134Q21.68 19.299 19 20.967q-2.53 1.573-6.67 2.695a2 2 0 0 1-2.13-.74L2 11.868V9.3l8.642 11.234a.2.2 0 0 0 .358-.122V18.59a.8.8 0 0 0-.185-.512L2 7.5V5z" clip-rule="evenodd"/></svg>',construction_hypermarket:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M4.912 2.125Q2.62 3.501 2.01 5.718a.2.2 0 0 0 .275.236Q8.57 3.142 11 8h4a1.585 1.585 0 0 1 3 0h2q1-1.72 1-3.5T20 1h-2l-.037.113A1.56 1.56 0 0 1 15 1.125q-7.587-.5-10.088 1M15.995 21.695 15 9h-4l-.994 12.695c-.067.9.497 1.733 1.376 2.03q.81.276 1.619.275.809 0 1.618-.274c.879-.298 1.442-1.13 1.376-2.031"/></svg>',construction_tool:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M4.912 2.125Q2.62 3.501 2.01 5.718a.2.2 0 0 0 .275.236Q8.57 3.142 11 8h4a1.585 1.585 0 0 1 3 0h2q1-1.72 1-3.5T20 1h-2l-.037.113A1.56 1.56 0 0 1 15 1.125q-7.587-.5-10.088 1M15.995 21.695 15 9h-4l-.994 12.695c-.067.9.497 1.733 1.376 2.03q.81.276 1.619.275.809 0 1.618-.274c.879-.298 1.442-1.13 1.376-2.031"/></svg>',country:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M3.448 0a1.5 1.5 0 0 0-.578 2.862l-.851 18.72a.4.4 0 0 0 .4.418H4.58a.4.4 0 0 0 .4-.418l-.85-18.72A1.5 1.5 0 0 0 3.521 0h-.074"/><path fill="currentColor" d="M5.815 15.783 16 15h.188c.118 0 .138.168.024.197l-5.345 1.336.044.485a1 1 0 0 0 1.072.906L24 17l-2-4.5L24 8l-8.763-.626-.154-1.546a1 1 0 0 0-.912-.897l-9.325-.777z"/></svg>',currency_exchange:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M16.596 5.12C16.566 2.859 13.291 1 9.256 1S1.945 2.859 1.915 5.12v.656c.2 1.554 1.834 3.667 7.331 3.667 5.666-.098 7.237-2.35 7.35-3.808zM8.837 12.276c-5.726-.008-6.633-2.095-6.922-3.187v3.478c.32 1.372 1.168 3.424 5.801 3.635.093-1.303.508-2.85 1.12-3.926M8.043 19.31a8.85 8.85 0 0 0 2.18 3.572q-.67.071-1.377.072c-4.054 0-6.931-1.827-6.931-4.102V15.88c.276 1.043 1.015 3.225 6.128 3.43M15.934 10.717a6.145 6.145 0 0 1 6.148 6.141A6.145 6.145 0 0 1 15.934 23a6.145 6.145 0 0 1-6.147-6.142 6.145 6.145 0 0 1 6.147-6.142"/></svg>',currency_exchange_fallback:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M11.3 2.673C8.55 3.283 7 5.141 7 8c0 3.205 1.947 5.152 5.35 5.493 1.93.193 2.65.912 2.65 2.507 0 1.574-.7 2.296-2.574 2.5-1.188-.013-3.057-.329-5.562-.955l-.728 2.91c2.097.525 3.812.853 5.164.982V24h2.4v-2.673c2.75-.61 4.3-2.468 4.3-5.327 0-3.205-1.947-5.152-5.35-5.493C10.72 10.314 10 9.595 10 8c0-1.574.7-2.295 2.574-2.5 1.141.013 2.632.316 4.452.923l.948-2.846q-2.401-.802-4.274-1.008V0h-2.4z"/></svg>',dairy:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M7.985.332A1.17 1.17 0 0 0 7 1.5c0 .581.41 1.08.985 1.168C8.942 2.813 10.47 3 12 3c1.53 0 3.058-.187 4.015-.332C16.59 2.58 17 2.08 17 1.5S16.59.42 16.015.332C15.058.187 13.53 0 12 0c-1.53 0-3.058.187-4.015.332"/><path fill="currentColor" fill-rule="evenodd" d="M7.991 3.663a6 6 0 0 1-.846 2.762l-1.29 2.15A6 6 0 0 0 5 11.662v8.597c0 1.077.576 2.075 1.568 2.493C7.915 23.319 9.958 24 12 24s4.085-.681 5.432-1.248c.992-.418 1.568-1.416 1.568-2.493v-8.597a6 6 0 0 0-.855-3.087l-1.29-2.15a6 6 0 0 1-.846-2.762q-.059.014-.119.023C14.928 3.83 13.464 4 12 4s-2.928-.171-3.89-.314a1 1 0 0 1-.119-.023M12 10c3.5 0 6.5 10 0 10s-3.5-10 0-10" clip-rule="evenodd"/></svg>',dancehall:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M13.9 4.2a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2M9.46 18.585l-.368 3.834Q9 24.005 7.353 23.907a.5.5 0 0 1-.47-.499V17.35c0-.26.082-.503.221-.7l.043-.062 2.091-2.976q.354-.492.781-1.223l.62-5.105a.2.2 0 0 0-.127-.21L7.379 5.861l-.12-.056a1 1 0 0 1-.456-.437L5.33 2.029q-.425-.975.359-1.68a.5.5 0 0 1 .764.116l2.028 3.409q2.338.477 3.208.726 1.755.5 2.78.976 2.301 1.017 4.083 2.177c.308.195.863.697.566 1.434l-1.229 2.71a.2.2 0 0 0 .018.196l.207.297a.6.6 0 0 1 .107.343v.722a.3.3 0 0 1-.3.3h-.903a.3.3 0 0 1-.29-.222l-.397-1.48a.2.2 0 0 1 0-.105l.657-2.38a.2.2 0 0 0-.113-.237l-1.622-.703a.095.095 0 0 0-.133.099q.422 3.401.29 4.885l-.518 3.088-.002-.005-.457 2.42.456-.44 2.31 3.102q.735 1.043-.218 2.024a.5.5 0 0 1-.719-.002l-4.123-4.28a1.17 1.17 0 0 1-.332-.854l.008-.211.108-3.135-1.84 1.97-1.235 1.296z" clip-rule="evenodd"/></svg>',dental:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13.773 2.223q.115-.11.227-.223c.5-.5 1-1 2-1 3 0 6 4 6 7-1.888 8.306-4.346 12.621-5.436 14.236l-.01.016.062-.094c-.318.447-1.036.828-1.583.841-.024.001.042.001.016.001h-.104a.985.985 0 0 1-.96-.933l-.004-.113C13.91 19.584 13.575 14 12 14s-1.91 5.583-1.98 7.954l-.005.113a.985.985 0 0 1-.96.932L8.952 23h.016c-.548-.014-1.266-.395-1.584-.842l.063.094-.01-.016C6.345 20.621 3.886 16.306 2 8c0-4 3-7 6-7 1 0 1.5.5 2 1 .21.21.42.42.666.592A8.6 8.6 0 0 1 9.274 4.26c-.075.07-.015.196.085.176.876-.178 3.144-.762 4.414-2.212"/></svg>',district:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12m0-2c5.002 0 9.147-3.673 9.884-8.47l-6.677 6.677a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 .122-.104 9.96 9.96 0 0 0-2.173-5.019l-.035.037-12 11.998a1 1 0 0 1-1.414-1.415l12-11.997.037-.035a9.96 9.96 0 0 0-5.019-2.173q-.045.065-.104.122l-8 8a1 1 0 0 1-1.414-1.414l6.676-6.677C5.673 2.853 2 6.998 2 12c0 1.081.172 2.122.489 3.097L13.293 4.293a1 1 0 1 1 1.414 1.414L3.366 17.048a10.05 10.05 0 0 0 3.586 3.586l11.34-11.341a1 1 0 1 1 1.415 1.414L8.903 21.511A10 10 0 0 0 12 22" clip-rule="evenodd"/></svg>',dolmus:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M4 1.4c0-.22.18-.4.4-.4h6.848q2.276 0 4.238.522 1.962.52 3.414 1.718t2.276 3.16q.825 1.964.824 4.848 0 2.916-.824 5.109-.823 2.194-2.306 3.667a9.7 9.7 0 0 1-3.504 2.224Q13.345 23 10.948 23H4.4a.4.4 0 0 1-.4-.4zm3.624 2.822v15.587h3.444q1.588 0 2.89-.491a5.85 5.85 0 0 0 2.247-1.504q.944-1.012 1.467-2.592t.524-3.759q0-2.148-.509-3.544-.51-1.395-1.422-2.224a5.04 5.04 0 0 0-2.172-1.151 11 11 0 0 0-2.725-.322z" clip-rule="evenodd"/></svg>',driving_school:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12 5.014c2.428 0 3.086-.738 3.196-.89L14.375.79a.56.56 0 0 0-.289-.366C14.003.38 13.238 0 12.001 0S9.998.38 9.914.423a.56.56 0 0 0-.289.366l-.811 3.298c.077.122.685.927 3.186.927M12 15.629c2.768 0 5.149-1.001 5.55-1.934l-1.387-5.64c-.241.607-2.007 1.272-4.163 1.272s-3.922-.665-4.163-1.271l-1.387 5.64c.402.932 2.783 1.933 5.55 1.933M18.452 16.883l3.772 1.532c1.035.359 1.034 1.801 0 2.16l-.987.37c-1.981.746-6.329 2.381-7.246 2.702-1.348.473-2.585.466-3.964.007-.775-.259-4.152-1.534-6.343-2.362-1.024-.386-1.789-.675-1.91-.718-1.032-.36-1.033-1.8.002-2.16l3.773-1.531-.018.086c-.08.38-.173.826.292 1.409.908 1.137 3.448 1.93 6.177 1.93 2.709 0 5.163-.751 6.107-1.872.537-.637.425-1.167.358-1.49q-.008-.033-.013-.063"/></svg>',drop_off:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M18.229.02c.52.107.856.63.752 1.166l-.676 3.496c-.096.5-.334.958-.682 1.318L15.74 7.948v15.417c0 .35-.274.635-.613.635h-1.074a.624.624 0 0 1-.614-.635v-6.664a.625.625 0 0 0-.613-.635h-.307a.625.625 0 0 0-.614.635v6.664c0 .35-.275.635-.614.635h-1.074a.624.624 0 0 1-.613-.635V10.52L8.21 14.796a.95.95 0 0 1-1.215.623c-.502-.175-.771-.737-.602-1.256l2.19-6.724.005-.019c.086-.272.26-.516.514-.68.195-.127.421-.194.652-.194h4.63l1.883-1.949a.6.6 0 0 0 .158-.304L17.1.797c.104-.537.609-.885 1.128-.778"/><path fill="currentColor" d="M12.671 5.355c1.06 0 1.918-.888 1.918-1.983s-.859-1.983-1.918-1.983c-1.06 0-1.918.888-1.918 1.983s.859 1.983 1.918 1.983M5.614 16.066h1.84c.34 0 .614.284.614.635v6.664c0 .35-.274.635-.613.635H5.614A.624.624 0 0 1 5 23.365v-6.664c0-.35.275-.635.614-.635"/></svg>',drugstores:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g fill="currentColor" fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path d="M10.904 5.466c0 3.02-2.441 5.467-5.452 5.467S0 8.485 0 5.466 2.44 0 5.452 0c3.01 0 5.452 2.447 5.452 5.466m-4.03-2.55a.79.79 0 0 1 1.121 0c.31.31.31.814 0 1.125L4.03 8.016a.79.79 0 0 1-1.121 0 .797.797 0 0 1 0-1.124zM22.413 7.084a5.42 5.42 0 0 0-7.665 0l-7.664 7.664a5.42 5.42 0 0 0 7.664 7.665l7.665-7.665a5.42 5.42 0 0 0 0-7.664M8.617 16.28a3.252 3.252 0 1 0 4.598 4.599l3.833-3.832-4.599-4.599z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>',dry_cleaning:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m9.175 9.054-7.107 2.443C.8 12.003 0 13.185 0 14.5A2.5 2.5 0 0 0 2.5 17H4v-2H2.5a.5.5 0 0 1-.5-.5c0-.497.303-.944.764-1.129l7.061-2.425a1 1 0 0 0-.65-1.892"/><path fill="currentColor" fill-rule="evenodd" d="M5 23v-8h.01c.012-.196.038-.335.099-.454a1 1 0 0 1 .437-.437C5.76 14 6.04 14 6.6 14h10.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.06.119.087.258.1.454H19v8s-3.5 1-7 1-7-1-7-1m2.588-1.895a.504.504 0 0 0-.588.493c0 .234.164.434.394.474.8.138 2.703.428 4.606.428s3.805-.29 4.606-.428c.23-.04.394-.24.394-.474a.504.504 0 0 0-.587-.493c-.887.146-2.65.395-4.413.395s-3.526-.249-4.412-.395" clip-rule="evenodd"/><path fill="currentColor" d="M20 17h1.5a2.5 2.5 0 0 0 2.5-2.5c0-1.315-.8-2.497-2.021-2.986l-7.844-2.683A.2.2 0 0 1 14 8.642v-1.3a.2.2 0 0 1 .113-.181C15.352 6.565 16 5.456 16 4a4 4 0 0 0-8 0 1 1 0 1 0 2 0 2 2 0 1 1 4 0c0 .71-.232 1.108-.753 1.358A2.2 2.2 0 0 0 12 7.341v1.301a2.2 2.2 0 0 0 1.488 2.082l7.796 2.665c.413.167.716.614.716 1.111a.5.5 0 0 1-.5.5H20z"/></svg>',electronics:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m4 4 .772-2.316A1 1 0 0 1 5.721 1h12.558a1 1 0 0 1 .949.684L20 4h.995a1.003 1.003 0 0 1 1.004 1.053l-.82 15.5c-.046.863-.15 1.173-.33 1.483q-.273.467-.758.715c-.32.163-.636.249-1.506.249H5.415c-.87 0-1.185-.086-1.506-.25a1.8 1.8 0 0 1-.758-.714c-.18-.31-.284-.62-.33-1.483l-.82-15.5A1 1 0 0 1 3.005 4zm8 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10m5-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7.019 3c-.192 0-.262.016-.335.047a.45.45 0 0 0-.183.143c-.048.063-.08.127-.127.313l-.219.876A.5.5 0 0 0 6.64 5H9.36c.223 0 .304-.023.385-.067a.45.45 0 0 0 .19-.189c.043-.081.066-.162.066-.385v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19C9.663 3.024 9.582 3 9.36 3zm2.113 8.212c2.668.213 2.691 4.559 6.862 3.01a4 4 0 1 1-6.862-3.01" clip-rule="evenodd"/></svg>',emergency:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M19.672 4.328Q18.225 2.879 16.776.483a1.003 1.003 0 0 0-1.565-.19l-.14.14a1.95 1.95 0 0 0-.282 2.4q1.38 2.24 2.76 3.619 1.378 1.38 3.619 2.759c.768.473 1.76.356 2.398-.281l.14-.141a1.003 1.003 0 0 0-.19-1.565q-2.395-1.447-3.844-2.896"/><path fill="currentColor" fill-rule="evenodd" d="m14.437 3.883-4.71 4.71c-2.501 2.501-3.94 5.358-4.569 6.814-.22.512-.331.769-.397.895a3 3 0 0 1-.19.327c-.076.12-.19.27-.416.572l-2.28 3.04-1.335.445a.2.2 0 0 0-.077.048l-.318.317a.496.496 0 0 0 0 .701l2.103 2.103a.495.495 0 0 0 .7 0l.318-.317a.2.2 0 0 0 .048-.078l.463-1.389 2.999-2.249c.302-.226.453-.34.572-.416.144-.094.175-.111.327-.19.126-.065.383-.176.896-.397 1.456-.628 4.312-2.068 6.814-4.57l4.71-4.71c-.487-.26-1.11-.623-1.752-1.076l-2.251 2.25-2.828-2.828 2.25-2.25a17 17 0 0 1-1.077-1.752m-2.941 5.77.353-.354 2.829 2.829-.354.354c-1.387 1.386-2.956 2.33-4.23 2.939-.494.237-.741.355-1.112.243-.267-.08-.589-.402-.67-.669-.111-.37.007-.618.244-1.112.61-1.273 1.553-2.843 2.94-4.23" clip-rule="evenodd"/></svg>',entertainments:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12 0a1.5 1.5 0 0 1 1.5 1.5v.612c1.66.25 3.186.907 4.474 1.867q.056-.088.133-.165l.354-.353a1.5 1.5 0 1 1 2.121 2.121l-.354.354q-.08.08-.172.138a9.95 9.95 0 0 1 1.833 4.432q.055-.006.111-.006h.5a1.5 1.5 0 0 1 0 3H22q-.057 0-.11-.006a10 10 0 0 1-4.533 6.951l-.638-1.985a7.99 7.99 0 0 0 3.266-5.96h-4.016a4 4 0 0 0 0-1h4.016a7.97 7.97 0 0 0-1.986-4.792l-2.84 2.84a4 4 0 0 0-.706-.708L17.293 6A7.97 7.97 0 0 0 12.5 4.016v4.016a4 4 0 0 0-1 0V4.015a7.97 7.97 0 0 0-4.792 1.986l2.84 2.84a4 4 0 0 0-.708.706L6 6.707A7.97 7.97 0 0 0 4.016 11.5h4.016a4 4 0 0 0 0 1H4.015a7.99 7.99 0 0 0 3.266 5.96l-.638 1.985A10 10 0 0 1 2.112 13.5H1.5a1.5 1.5 0 0 1 0-3h.612a9.95 9.95 0 0 1 1.846-4.445 1 1 0 0 1-.144-.12l-.353-.353a1.5 1.5 0 1 1 2.121-2.121l.354.353q.067.067.119.144A9.95 9.95 0 0 1 10.5 2.112V1.5A1.5 1.5 0 0 1 12 0"/><path fill="currentColor" fill-rule="evenodd" d="M14.5 12c0 .677-.269 1.29-.706 1.741l2.557 8.182c.085.273.154.493.202.676C17.436 22.812 18 23 18 23v1H6v-1s.564-.188 1.447-.4c.048-.184.117-.404.202-.677l2.557-8.182A2.5 2.5 0 1 1 14.5 12m-1.73 5.775 1.21 4.353A17 17 0 0 0 12 22c-.671 0-1.342.05-1.98.128l1.21-4.353c.229-.826.343-1.239.522-1.34a.5.5 0 0 1 .496 0c.179.101.293.514.523 1.34M12.7 12a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0" clip-rule="evenodd"/></svg>',entrance:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path fill="currentColor" d="M20.5 1h-12A1.5 1.5 0 0 0 7 2.5v4l2 1V3h10.677l-5.993 1.998a1 1 0 0 0-.684.948V19H9v-4.5l-2 1v4A1.5 1.5 0 0 0 8.5 21H13v2.532a.5.5 0 0 0 .658.474l6.975-2.325A2 2 0 0 0 22 19.785V2.5A1.5 1.5 0 0 0 20.5 1"/><path fill="currentColor" d="M0 11a1 1 0 0 1 1-1h4V7.934a.5.5 0 0 1 .777-.416l4.599 3.066a.5.5 0 0 1 0 .832l-4.599 3.066A.5.5 0 0 1 5 14.066V12H1a1 1 0 0 1-1-1"/></svg>',equestrian:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M14.034 8.57 11.58 7.48a1 1 0 0 0 .212.313l.461.461c-.291 1.135-.827 1.84-1.53 2.114L12.5 12.5l.38-.19a.8.8 0 0 0 .4-.968L12.5 9h.713a1 1 0 0 0 .82-.43m.549-.848A7.99 7.99 0 0 1 21 4.5h3a.81.81 0 0 1-.447.724l-.597.298-.44 5.295a.2.2 0 0 1-.2.183h-.595a1 1 0 0 1-.949-.684l-.487-1.46c-.18-.54-.1-1.133.215-1.606l.164-.246q.14-.21.223-.448l-.229.115a1.6 1.6 0 0 0-.837 1.043l-1.253 5.014a3 3 0 0 1-.25.659 2 2 0 0 0-.03 1.24l2.058 6.858a.4.4 0 0 1-.384.515h-.708a.4.4 0 0 1-.362-.23l-2.916-6.196A1 1 0 0 0 15.07 15H8.156a2 2 0 0 0-1.338.513l-3.104 2.795a1 1 0 0 0-.293.468l-.88 3.079A.2.2 0 0 1 2.35 22h-.626a.2.2 0 0 1-.2-.2l.445-4.012a1 1 0 0 1 .213-.514l1.124-1.405a2 2 0 0 0 .378-1.739 6.7 6.7 0 0 1-.183-1.628c0-.622.162-1.205.445-1.71a1 1 0 0 0-.636.758l-.327 1.8A2.2 2.2 0 0 1 2 14.813V14l-.62 1.085A2.2 2.2 0 0 1 0 15l1.904-4.57a2 2 0 0 1 2.13-1.211l1.324.19A3.5 3.5 0 0 1 7 9h2.625L9.5 8.5H9Q9.5 7 9.5 6c0-1-.5-2 .5-3h1q1.5 1 1.5 3 0 .168-.004.33zM8 15.842v2.392a1 1 0 0 0 .132.497l1.697 2.97a.2.2 0 0 1-.174.299h-.561a.2.2 0 0 1-.154-.072l-2.294-2.752a1 1 0 0 1-.201-.398l-.314-1.254zm7.25.158-2.201 5.87a.2.2 0 0 1-.188.13h-.62a.2.2 0 0 1-.197-.237L13.125 16zM11.2 2.6h-.705q-.49-.466-1.028-.6a1.35 1.35 0 1 1 2.53-.555l-.397.088V2.2a.4.4 0 0 1-.4.4" clip-rule="evenodd"/></svg>',exhibition_center:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M1 18.5V9q4.5-1 9-1t9 1v2h2.718c.446 0 .608.046.77.134q.246.132.378.378c.088.162.134.324.134.77V18.5a.5.5 0 0 0 .5.5h.037c.119 0 .193.019.258.053a.36.36 0 0 1 .152.152c.034.065.053.14.053.258v.074a.5.5 0 0 1-.053.258.36.36 0 0 1-.152.152.5.5 0 0 1-.258.053H.463a.5.5 0 0 1-.258-.053.36.36 0 0 1-.152-.152.5.5 0 0 1-.053-.258v-.074c0-.119.019-.193.053-.258a.36.36 0 0 1 .152-.152A.5.5 0 0 1 .463 19H.5a.5.5 0 0 0 .5-.5m.617-12.765Q5.81 4 10 4t8.383 1.735a1 1 0 0 1 .617.924V8q-4.5-1-9-1T1 8V6.659a1 1 0 0 1 .617-.924M11.514 13c-.178 0-.243.019-.308.053a.36.36 0 0 0-.152.152c-.034.065-.053.13-.053.308V19h2v-5.487c0-.178-.019-.243-.053-.308a.36.36 0 0 0-.152-.152c-.065-.034-.13-.053-.308-.053zM3.64 13c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189c-.043.081-.066.162-.066.385v.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066h.718c.223 0 .304-.023.385-.067a.45.45 0 0 0 .19-.189c.043-.081.066-.162.066-.385v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19C4.663 13.024 4.582 13 4.36 13zm3 0c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189c-.043.081-.066.162-.066.385v.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066h.718c.223 0 .304-.023.385-.067a.45.45 0 0 0 .19-.189c.043-.081.066-.162.066-.385v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19C7.663 13.024 7.582 13 7.36 13zm8.872 0c-.178 0-.243.019-.308.053a.36.36 0 0 0-.152.152c-.034.065-.053.13-.053.308V19h2v-5.487c0-.178-.019-.243-.053-.308a.36.36 0 0 0-.152-.152c-.065-.034-.13-.053-.308-.053zm4 0c-.179 0-.243.019-.308.053a.36.36 0 0 0-.152.152c-.034.065-.053.13-.053.308V19h2v-5.487c0-.178-.019-.243-.053-.308a.36.36 0 0 0-.152-.152c-.065-.034-.13-.053-.308-.053z" clip-rule="evenodd"/></svg>',factory:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M24 21H.256c-.089 0-.121-.01-.154-.027a.2.2 0 0 1-.075-.075C.009 20.865 0 20.833 0 20.744v-1.488c0-.089.01-.121.027-.154a.2.2 0 0 1 .075-.075C.135 19.009.167 19 .256 19H1V7.38a.2.2 0 0 1 .306-.17l7.537 5.182A.1.1 0 0 0 9 12.31v-.735c0-.03-.002-.04-.005-.052a.1.1 0 0 0-.016-.032.2.2 0 0 0-.04-.033L7 10.125V7.38a.2.2 0 0 1 .313-.165L13 11.12v.005l1.843 1.267A.1.1 0 0 0 15 12.31v-.735c0-.03-.002-.04-.005-.052a.1.1 0 0 0-.016-.032.2.2 0 0 0-.04-.033L13 10.125V7.38a.2.2 0 0 1 .313-.165l4.74 3.255L17.2 19h1l1.777-17.766c.008-.084.019-.113.037-.143a.2.2 0 0 1 .075-.068c.032-.015.062-.023.146-.023h1.53c.084 0 .114.008.146.023a.2.2 0 0 1 .075.068c.018.03.029.06.037.143zM4.256 15c-.089 0-.121.01-.154.027a.2.2 0 0 0-.075.075c-.018.033-.027.065-.027.154v1.488c0 .089.01.121.027.154a.2.2 0 0 0 .075.075c.033.018.065.027.154.027h1.488c.089 0 .121-.01.154-.027a.2.2 0 0 0 .075-.075c.018-.033.027-.065.027-.154v-1.488c0-.089-.01-.121-.027-.154a.2.2 0 0 0-.075-.075c-.033-.018-.065-.027-.154-.027zm4 0c-.089 0-.121.01-.154.027a.2.2 0 0 0-.075.075c-.018.033-.027.065-.027.154v1.488c0 .089.01.121.027.154a.2.2 0 0 0 .075.075c.033.018.065.027.154.027h1.488c.089 0 .121-.01.154-.027a.2.2 0 0 0 .075-.075c.018-.033.027-.065.027-.154v-1.488c0-.089-.01-.121-.027-.154a.2.2 0 0 0-.075-.075c-.033-.018-.065-.027-.154-.027zm4 0c-.089 0-.121.01-.154.027a.2.2 0 0 0-.075.075c-.018.033-.027.065-.027.154v1.488c0 .089.01.121.027.154a.2.2 0 0 0 .075.075c.033.018.065.027.154.027h1.488c.089 0 .121-.01.154-.027a.2.2 0 0 0 .075-.075c.018-.033.027-.065.027-.154v-1.488c0-.089-.01-.121-.027-.154a.2.2 0 0 0-.075-.075c-.033-.018-.065-.027-.154-.027z" clip-rule="evenodd"/></svg>',fallback:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clip-rule="evenodd"/></svg>',fast_food:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 2c8.938 0 9.943 5.706 10.014 7.768.015.437-.304.789-.735.864-1.567.271-5.448.868-9.279.868s-7.712-.597-9.279-.868c-.43-.075-.75-.427-.735-.864C2.057 7.706 3.062 2 12 2m3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/><path fill="currentColor" d="M2 15.783c0-.307.276-.54.579-.495.975.148 1.868.28 2.689.401h.001c5.94.878 8.085 1.194 10.231 2.911 2.756-3.123 5.934-3.378 6.433-3.398.038-.002.067.03.067.068 0 2.788-1.665 5.337-4.375 5.993-1.669.403-3.647.737-5.625.737-3.117 0-6.234-.829-8.14-1.453C2.719 20.173 2 19.088 2 17.887zM2.217 11.538A1.03 1.03 0 0 0 1 12.542v.623c0 .484.343.896.82.972C3.553 14.41 7.777 15 12 15s8.447-.59 10.18-.863a.976.976 0 0 0 .82-.972v-.623a1.03 1.03 0 0 0-1.217-1.004c-1.924.35-5.853.962-9.783.962s-7.859-.613-9.783-.962"/></svg>',fast_tram:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M6 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0M11 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path fill="currentColor" fill-rule="evenodd" d="M2.913 4.286 5.345 6H0v3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H0v4.958l1.043-.043.404-.81A2 2 0 0 1 3.237 18h6.527a2 2 0 0 1 1.789 1.105L13 22h10a1 1 0 0 0 1-1v-4q-3-1-3-3v-4a1 1 0 0 1 1-1h2v-.001c0-1.874-2-3-5-3h-8.345l2.432-1.713a.4.4 0 0 0 .01-.647L8.48.17a.8.8 0 0 0-.962 0L2.903 3.64a.4.4 0 0 0 .01.647M15 20a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1zM5 10v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m5.988-6.07L8 6.035 5.013 3.93 8 1.685z" clip-rule="evenodd"/></svg>',festival:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M5.743 1h12.514c1.65 0 2.247.172 2.85.494a3.36 3.36 0 0 1 1.399 1.399c.322.603.494 1.2.494 2.85v11.514c0 1.65-.172 2.247-.494 2.85a3.36 3.36 0 0 1-1.399 1.399c-.603.322-1.2.494-2.85.494H5.743c-1.65 0-2.247-.172-2.85-.494a3.36 3.36 0 0 1-1.399-1.399c-.322-.603-.494-1.2-.494-2.85V5.743c0-1.65.172-2.247.494-2.85a3.36 3.36 0 0 1 1.399-1.399C3.496 1.172 4.093 1 5.743 1m6.236 16.014 3.009 1.918a.43.43 0 0 0 .341.054.464.464 0 0 0 .325-.56l-.869-3.627 2.54-2.056a.47.47 0 0 0 .17-.326.46.46 0 0 0-.409-.5l-3.327-.285-1.363-3.35a.44.44 0 0 0-.821-.001L10.2 11.633l-3.304.285a.44.44 0 0 0-.314.176.474.474 0 0 0 .076.65l2.528 2.056-.87 3.624a.48.48 0 0 0 .053.355c.129.217.404.285.613.151zM6.5 5.998a1.5 1.5 0 1 0 .001-3 1.5 1.5 0 0 0-.001 3m11 0a1.5 1.5 0 1 0 .001-3 1.5 1.5 0 0 0-.001 3" clip-rule="evenodd"/></svg>',film_studio:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m21 19 1.591 1.591a.502.502 0 0 0 .792-.112Q24 19.356 24 17t-.617-3.479a.5.5 0 0 0-.792-.113L21 15h-.359c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189c-.043.081-.066.162-.066.385v2.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066zm-5.629 3.516-.12.477c-.093.373-.157.501-.254.628a.9.9 0 0 1-.364.284c-.146.063-.286.095-.67.095H9.037c-.385 0-.525-.032-.67-.095a.9.9 0 0 1-.365-.284c-.097-.127-.161-.255-.255-.628l-.386-1.545-2.228-.297c-.409-.054-.553-.112-.696-.205a.9.9 0 0 1-.326-.373c-.074-.154-.112-.305-.112-.717v-5.574c0-.446.046-.607.134-.77a.9.9 0 0 1 .378-.378c.163-.088.324-.134.77-.134h12.436c.446 0 .608.046.77.134q.246.132.378.378c.088.162.134.324.134.77v6.434a2 2 0 0 1-2.264 1.982zM9.022 7a5.5 5.5 0 1 1 5.478 5h-10a4.5 4.5 0 1 1 4.473-5zM4.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m10-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1.641 15h.718c.223 0 .304.023.385.067a.45.45 0 0 1 .19.189c.043.081.066.162.066.385v2.718c0 .223-.023.304-.067.385a.45.45 0 0 1-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 0 1-.19-.189C1.024 18.663 1 18.582 1 18.36v-2.718c0-.223.023-.304.067-.385a.45.45 0 0 1 .189-.19c.081-.043.162-.066.385-.066m11 1c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189c-.043.081-.066.162-.066.385v.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066h3.718c.223 0 .304-.023.385-.067a.45.45 0 0 0 .19-.189c.043-.081.066-.162.066-.385v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19c-.081-.043-.162-.066-.385-.066z" clip-rule="evenodd"/></svg>',fire_station:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M9.42 22.74C8.546 22.044 8.03 21.14 8 20c-.06-2.227 1.638-4.212 4-5 0 .857.862 1.665 1.761 2.508.675.633 1.371 1.285 1.739 1.992.548 1.053.344 2.252-.851 3.227 1.866-.4 3.572-1.261 4.923-2.727 3.086-3.35 3.558-9.5-.508-14-.262 1.802-1.58 3.216-3.064 4-1.796-2.132-3.5-4.733-3.5-9-3.807 2.724-6.01 5.645-6.998 9-.892-.662-1.506-1.755-1.687-3-4.076 7.573-.89 14.351 5.604 15.74"/></svg>',fish_store:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12.401 1.332A4.162 4.162 0 0 0 12.095 4c.155-.914.517-1.804 1.206-2.406C17.141 1.956 20 3.273 20 4c0 .848-3.304 5.5-9 5.5-.988 0-2.073-.244-3.172-.49C6.702 8.755 5.563 8.5 4.5 8.5 3 8.5 1.7 9 1.7 10s1.16 1.5 2.6 1.5c.558 0 1.22-.304 1.748-.547.547-.252.952-.438.952-.153 0 1.631-.815 2.134-1.549 2.588-.452.279-.873.539-1.056 1.032-.102.274-.375.483-.64.36C2.596 14.24 0 12.625 0 9c0-1.823 1.661-6.553 9-7.377a4.6 4.6 0 0 0-.877-1.32C8.024.199 7.974.147 7.973.11A.1.1 0 0 1 8.01.026c.03-.023.097-.02.233-.016.878.032 2.88.215 4.016 1.193q.075.066.142.129M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4 20c0-.849 3.304-5.5 9-5.5.988 0 2.073.244 3.172.49 1.125.254 2.265.51 3.328.51 1.5 0 2.8-.5 2.8-1.5s-1.16-1.5-2.6-1.5c-.558 0-1.22.304-1.748.547-.547.252-.952.438-.952.153 0-1.631.814-2.134 1.549-2.588.452-.279.873-.539 1.056-1.032.101-.274.375-.483.64-.36C21.404 9.76 24 11.375 24 15c0 1.823-1.662 6.553-9 7.377.253.59.618 1.044.877 1.32.099.105.149.158.15.194a.1.1 0 0 1-.037.083c-.03.023-.097.02-.233.016-.878-.032-2.88-.215-4.016-1.193a4 4 0 0 1-.142-.129A4.161 4.161 0 0 0 11.905 20c-.155.914-.517 1.805-1.206 2.406C6.859 22.044 4 20.727 4 20m4-1a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clip-rule="evenodd"/></svg>',fitness:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M16.06 10q.098-1.992.36-5.085A1 1 0 0 1 17.418 4h.194a1 1 0 0 1 .994.89 64.4 64.4 0 0 1 0 14.22 1 1 0 0 1-.994.89h-.194a1 1 0 0 1-.996-.915A151 151 0 0 1 16.06 14H7.938q-.1 1.973-.36 5.084a1 1 0 0 1-.997.916h-.193a1 1 0 0 1-.994-.89 64.3 64.3 0 0 1 0-14.22A1 1 0 0 1 6.389 4h.193a1 1 0 0 1 .996.916Q7.84 8.03 7.938 10zM1.556 14h-.274c-.446 0-.607-.046-.77-.134a.9.9 0 0 1-.378-.378c-.088-.162-.134-.324-.134-.77v-1.436c0-.446.046-.607.134-.77a.9.9 0 0 1 .378-.378c.163-.088.324-.134.77-.134h.274a37 37 0 0 1 .311-3.141A1 1 0 0 1 2.857 6H3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-.143a1 1 0 0 1-.99-.859A37 37 0 0 1 1.556 14m20.888-4h.274c.446 0 .608.046.77.134q.246.132.378.378c.088.162.134.324.134.77v1.436c0 .446-.046.607-.134.77a.9.9 0 0 1-.378.378c-.162.088-.324.134-.77.134h-.274a37 37 0 0 1-.311 3.141 1 1 0 0 1-.99.859H21a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h.143a1 1 0 0 1 .99.859q.224 1.57.311 3.141" clip-rule="evenodd"/></svg>',flower_shop:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12 5s3.047-.648 4.913-2.99l.128-.01S21.58 12 12 12 6.958 2 6.958 2c1.029.079 2.009.342 2.905.736C10.48 1.51 11.24.502 12 0c.701.464 1.403 1.357 1.99 2.456C13.439 4.041 12 5 12 5M10.7 19.311C4.824 20.421 3.62 16.337 4.088 14c1.649 0 4.792 0 6.74 2.6L11 13h2l.5 10.5s-.75.5-1.5.5-1.5-.5-1.5-.5zM14.373 19.47c4.894.392 5.972-3.296 5.537-5.47-1.402 0-3.925 0-5.86 1.598z"/></svg>',food_market:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path fill="currentColor" d="M14.5 4.517s2.478.28 3.65-.89c1.171-1.172.707-3.536.707-3.536s-2.364-.465-3.536.707C14.15 1.97 14.5 4.517 14.5 4.517M11.144 6.947C10.132 8.563 10 10.017 10 10.017s1.745-3.228 5.426-3.899q3.5-.59 5.572 2.247c3.416 6.142-2.65 15.282-6.985 14.617a1.9 1.9 0 0 1-.553-.205 3.16 3.16 0 0 0-2.918.001 1.9 1.9 0 0 1-.543.203c-4.336.682-10.416-8.469-6.997-14.616Q5.48 4.97 10.007 6.484c.292.097.739.286 1.135.462z"/><path fill="currentColor" d="M9.134.023C11.472.61 12.798 2.388 13 5.017l-1 .8c-.49-2.746-3.32-3.453-4.827-3.83l-.087-.022C6.559 1.833 8.606-.109 9.134.023"/></svg>',forest:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M7.845 6.93V7c1.566 0 3.152-.126 4.548-.399l-1.426 2.562-.032.062a1 1 0 0 0 .481 1.33l1.012.474-2.63 4.384A7.8 7.8 0 0 1 6.845 16C4.195 16 .763 14.438 0 10.625 1.3 11.586 3.536 12 5.845 12v-.06C2.972 11.586.662 9.74.022 7.345.575 5.454 1.894 4.473 3.41 3.344 4.576 2.476 5.86 1.522 7 0c2.376 1.188 4.245 2.326 5.496 4.132a7 7 0 0 1-4.65 2.797M8 17l.18 6.295a.686.686 0 0 1-.686.705h-.988a.686.686 0 0 1-.686-.705L6 17zM16 20h2l.164 3.28a.686.686 0 0 1-.685.72h-.958a.686.686 0 0 1-.685-.72zM20.934 11.256l2.735 6.015a.6.6 0 0 1-.462.842L17.01 19l-6.217-.887a.6.6 0 0 1-.462-.842l2.735-6.015 3.51 1.645a1 1 0 0 0 .848 0z"/><path fill="currentColor" d="M17.179.537a.4.4 0 0 1 .179.179l4.448 8.895a.4.4 0 0 1-.21.55l-4.225 1.69a1 1 0 0 1-.742 0l-4.225-1.69c-.206-.082-.305-.314-.21-.55L16.642.716a.4.4 0 0 1 .537-.18"/></svg>',fountain:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M11 7.5V11h2V7.5C13 5.015 14 3 16 3s3 2.015 3 4.5c0 1 3 1 3 0C22 3 19.5 1 16 1c-1.89 0-3.198.85-4 2.196C11.198 1.849 9.89 1 8 1 4.5 1 2 3 2 7.5c0 1 3 1 3 0C5 5.015 6 3 8 3s3 2.015 3 4.5M16 13a1 1 0 0 1-1 1 1 1 0 0 0-1 1v1h-4v-1a1 1 0 0 0-1-1 1 1 0 1 1 0-2h6a1 1 0 0 1 1 1M22 18a1 1 0 0 1-1 1v2.208a1 1 0 0 1-.785.976Q16.515 23 12 23t-8.215-.816A1 1 0 0 1 3 21.208V19a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1"/></svg>',funicular:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m22.778 17.025-22 5a1 1 0 0 0 .444 1.95l22-5a1 1 0 0 0-.444-1.95M2 14l2.453-.818A.8.8 0 0 0 5 12.423V7.8a.8.8 0 0 0-.8-.8H2V5.405c0-.817.577-1.52 1.378-1.68L17 1l.766-.766A.8.8 0 0 1 18.33 0H21.2a.8.8 0 0 1 .8.8V3h-2.2a.8.8 0 0 0-.8.8v4.623a.8.8 0 0 0 .547.76L22 10v3.2a.8.8 0 0 1-.8.8H18.33a.8.8 0 0 0-.565.234l-1.532 1.531a.8.8 0 0 1-.565.235H8.33a.8.8 0 0 0-.565.234l-1.532 1.531A.8.8 0 0 1 5.67 18H2.8a.8.8 0 0 1-.8-.8zm5.8-9a.8.8 0 0 0-.8.8v5.4a.8.8 0 0 0 .8.8h2.4a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8zm6 0a.8.8 0 0 0-.8.8v5.4a.8.8 0 0 0 .8.8h2.4a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8z" clip-rule="evenodd"/></svg>',furniture_store:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M17 15.677q-.189-.045-.374-.085Q14.313 14.5 12 14.5q-2.295 0-4.59 1.075-.204.045-.411.095v-2.053L7 13.5a3.5 3.5 0 0 0-2.983-3.462l-.332-1.162c-.72-2.525.719-5.153 3.301-6.028Q9.491 2 11.996 2q2.509 0 5.018.85c2.582.875 4.021 3.503 3.3 6.027l-.33 1.16A3.5 3.5 0 0 0 17 13.5v2.177M10.5 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 4.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m5.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75-3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" clip-rule="evenodd"/><path fill="currentColor" d="M18 16.602V13.5a2.5 2.5 0 1 1 1.936 2.436l1.194 1.194L19.5 23H18v-3.367a49.3 49.3 0 0 1-12 0V23H4.553l-1.67-5.884 1.18-1.18Q3.792 16 3.5 16A2.5 2.5 0 1 1 6 13.5v3.102Q9 15.5 12 15.5t6 1.102"/></svg>',gallery:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m10.59 13.09 3.23-3.875a.233.233 0 0 1 .36 0L19 15H5l4.799-8.158a.233.233 0 0 1 .402 0l1.67 2.837zM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path fill="currentColor" fill-rule="evenodd" d="M5.938 21.346 7.171 18h9.658l1.233 3.346a1 1 0 1 0 1.876-.692L18.96 18h3.27c.268 0 .365-.028.463-.08a.55.55 0 0 0 .227-.227c.052-.098.08-.195.08-.462V3.769c0-.267-.028-.364-.08-.462a.55.55 0 0 0-.227-.227c-.098-.052-.195-.08-.462-.08h-8.797l-.496-1.346c-.321-.872-1.555-.872-1.876 0L10.566 3H1.769c-.267 0-.364.028-.462.08a.55.55 0 0 0-.227.227c-.052.098-.08.195-.08.462v13.462c0 .267.028.364.08.462a.55.55 0 0 0 .227.227c.098.052.195.08.462.08h3.27l-.977 2.654a1 1 0 1 0 1.876.692M20.744 5H3.256c-.089 0-.121.01-.154.027a.2.2 0 0 0-.075.075c-.018.033-.027.065-.027.154v10.488c0 .089.01.121.027.154a.2.2 0 0 0 .075.075c.033.018.065.027.154.027h17.488c.089 0 .121-.01.154-.027a.2.2 0 0 0 .075-.075c.018-.033.027-.065.027-.154V5.256c0-.089-.01-.121-.027-.154a.2.2 0 0 0-.075-.075c-.033-.018-.065-.027-.154-.027" clip-rule="evenodd"/></svg>',garage_cooperative:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 5.004V9h2V7h16v2h2V5.004L12 0z"/><path fill="currentColor" fill-rule="evenodd" d="M20 17.486V22.5a.5.5 0 0 1-.5.5h-2.11a.5.5 0 0 1-.485-.379L16.5 21h-9l-.405 1.621A.5.5 0 0 1 6.61 23H4.5a.5.5 0 0 1-.5-.5v-5.014c0-.357.059-.703.168-1.026l1.403-5.33a2.56 2.56 0 0 1 2.196-1.892C9.21 9.079 9.955 9 12 9s2.79.08 4.234.238a2.56 2.56 0 0 1 2.195 1.893l1.403 5.33c.11.323.168.668.168 1.025m-1.676-2.826-.862-3.275a1.56 1.56 0 0 0-1.337-1.153C14.72 10.078 14.01 10 12 10c-2.01 0-2.72.078-4.124.232a1.56 1.56 0 0 0-1.338 1.153l-.862 3.275a3.2 3.2 0 0 1 1.045-.338Q9.03 14 12 14q2.967 0 5.278.322a3.2 3.2 0 0 1 1.045.338M19 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/><path fill="currentColor" d="M21.5 13h-1.11a.5.5 0 0 0-.484.621l.238.954a.5.5 0 0 0 .542.375l.428-.049a1 1 0 0 0 .886-.993V13.5a.5.5 0 0 0-.5-.5M2.5 13h1.11a.5.5 0 0 1 .485.621l-.239.954a.5.5 0 0 1-.542.375l-.428-.049A1 1 0 0 1 2 13.908V13.5a.5.5 0 0 1 .5-.5"/></svg>',garden:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M10.245 19.955a.42.42 0 0 1-.224-.273.42.42 0 0 1 .036-.343c.196-.394.416-.777.65-1.144a.3.3 0 0 0 .043-.077s.158-.238.235-.35C12.276 15.829 14 14 17 13c-3 0-5 1-6.015 3C9 8 14 4 24 4c0 13-4 17-12.446 14.536a.1.1 0 0 0-.039.064 1 1 0 0 1-.048.068q-.336.522-.615 1.071a.45.45 0 0 1-.275.234.4.4 0 0 1-.332-.018"/><path fill="currentColor" d="M9.964 16.843a.33.33 0 0 1-.214.143.4.4 0 0 1-.27-.023q-.465-.19-.898-.417a.2.2 0 0 0-.06-.028l-.275-.151q-2.287-1.245-4.052-3.365C4.83 14.66 5.701 16.164 7 17c-5.25 1.45-7-2-7-9 9 0 9.98 3 8.85 8.001q.02.02.05.025l.053.03q.41.217.842.396.142.062.184.177a.22.22 0 0 1-.015.214"/></svg>',gasstation:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M9 19V3.282c0-.446.046-.607.134-.77a.9.9 0 0 1 .378-.378c.163-.088.324-.134.77-.134h8.436c.446 0 .608.046.77.134q.246.132.378.378c.088.163.134.324.134.77V19zm-1-7.366a1 1 0 0 0-.5.866v2.25a3.25 3.25 0 0 1-6.5 0V6.914a1 1 0 0 1 .293-.707l3.853-3.853a.5.5 0 0 1 .708 0l.792.792a.5.5 0 0 1 0 .708L5 5.5v1.086a1 1 0 0 1-.293.707L3 9v5.75a1.25 1.25 0 1 0 2.5 0V12.5A3 3 0 0 1 8 9.541zM16.718 4h-4.436c-.446 0-.607.046-.77.134a.9.9 0 0 0-.378.378c-.088.163-.134.324-.134.77v2.436c0 .446.046.607.134.77q.132.246.378.378c.162.088.324.134.77.134h4.436c.446 0 .608-.046.77-.134a.9.9 0 0 0 .378-.378c.088-.163.134-.324.134-.77V5.282c0-.446-.046-.607-.134-.77a.9.9 0 0 0-.378-.378c-.162-.088-.324-.134-.77-.134M21 20a1 1 0 0 1 1 1v.487c0 .179-.019.243-.053.308a.36.36 0 0 1-.152.152c-.065.034-.13.053-.308.053H7.513c-.179 0-.243-.019-.308-.053a.36.36 0 0 1-.152-.152C7.02 21.73 7 21.665 7 21.487V21a1 1 0 0 1 1-1z" clip-rule="evenodd"/></svg>',gastro_market:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path fill="currentColor" d="M14.5 4.517s2.478.28 3.65-.89c1.171-1.172.707-3.536.707-3.536s-2.364-.465-3.536.707C14.15 1.97 14.5 4.517 14.5 4.517M11.144 6.947C10.132 8.563 10 10.017 10 10.017s1.745-3.228 5.426-3.899q3.5-.59 5.572 2.247c3.416 6.142-2.65 15.282-6.985 14.617a1.9 1.9 0 0 1-.553-.205 3.16 3.16 0 0 0-2.918.001 1.9 1.9 0 0 1-.543.203c-4.336.682-10.416-8.469-6.997-14.616Q5.48 4.97 10.007 6.484c.292.097.739.286 1.135.462z"/><path fill="currentColor" d="M9.134.023C11.472.61 12.798 2.388 13 5.017l-1 .8c-.49-2.746-3.32-3.453-4.827-3.83l-.087-.022C6.559 1.833 8.606-.109 9.134.023"/></svg>',geyser:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12 22.286a6.857 6.857 0 0 0 6.857-6.857C18.857 10.286 12 1.714 12 1.714S5.143 10.286 5.143 15.43A6.857 6.857 0 0 0 12 22.286"/></svg>',giftshop:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M20.4 8h-1.583c1.191-1.212 1.551-2.974.764-4.35-.969-1.693-3.683-2.16-5.601-1.042-.773.45-1.485 1.157-1.996 1.952-.512-.795-1.224-1.502-1.996-1.952-1.918-1.118-4.6-.65-5.57 1.043-.786 1.375-.426 3.137.765 4.349H3.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 8.76 2 9.04 2 9.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C2.76 12 3.04 12 3.599 12h16.802c.56 0 .84 0 1.053-.109a1 1 0 0 0 .437-.437C22 11.24 22 10.96 22 10.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C21.24 8 20.96 8 20.4 8m-6.848-1.114-.002-.003c-.027-.047-.035-.06-.009-.052q0 .036.01.055m-.01-.055c.002-.314.647-1.527 1.623-2.095.867-.505 2.101-.28 2.349.152.254.444-.017 1.246-.837 1.724-.516.3-1.398.483-2.203.43-.367-.025-.675-.096-.88-.189zM6.485 4.888c.25-.436 1.452-.656 2.316-.152.979.57 1.625 1.786 1.624 2.097l-.052.022c-.202.093-.504.162-.865.187-.796.053-1.669-.129-2.186-.43-.82-.478-1.091-1.28-.837-1.724m3.931 1.995c.025-.044.033-.058.01-.05q0 .034-.011.053z" clip-rule="evenodd"/><path fill="currentColor" d="M3 13h7v4.227c0 .243 0 .364.048.42a.2.2 0 0 0 .168.07c.073-.006.159-.092.33-.263l1.228-1.228c.079-.079.119-.118.164-.133a.2.2 0 0 1 .124 0c.046.015.085.054.164.133l1.228 1.228c.171.171.257.257.33.262a.2.2 0 0 0 .168-.069c.048-.056.048-.177.048-.42V13h7v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',golf:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M16.06 10q.098-1.992.36-5.085A1 1 0 0 1 17.418 4h.194a1 1 0 0 1 .994.89 64.4 64.4 0 0 1 0 14.22 1 1 0 0 1-.994.89h-.194a1 1 0 0 1-.996-.915A151 151 0 0 1 16.06 14H7.938q-.1 1.973-.36 5.084a1 1 0 0 1-.997.916h-.193a1 1 0 0 1-.994-.89 64.3 64.3 0 0 1 0-14.22A1 1 0 0 1 6.389 4h.193a1 1 0 0 1 .996.916Q7.84 8.03 7.938 10zM1.556 14h-.274c-.446 0-.607-.046-.77-.134a.9.9 0 0 1-.378-.378c-.088-.162-.134-.324-.134-.77v-1.436c0-.446.046-.607.134-.77a.9.9 0 0 1 .378-.378c.163-.088.324-.134.77-.134h.274a37 37 0 0 1 .311-3.141A1 1 0 0 1 2.857 6H3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-.143a1 1 0 0 1-.99-.859A37 37 0 0 1 1.556 14m20.888-4h.274c.446 0 .608.046.77.134q.246.132.378.378c.088.162.134.324.134.77v1.436c0 .446-.046.607-.134.77a.9.9 0 0 1-.378.378c-.162.088-.324.134-.77.134h-.274a37 37 0 0 1-.311 3.141 1 1 0 0 1-.99.859H21a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h.143a1 1 0 0 1 .99.859q.224 1.57.311 3.141" clip-rule="evenodd"/></svg>',government:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M3.448 0a1.5 1.5 0 0 0-.578 2.862l-.851 18.72a.4.4 0 0 0 .4.418H4.58a.4.4 0 0 0 .4-.418l-.85-18.72A1.5 1.5 0 0 0 3.521 0h-.074"/><path fill="currentColor" d="M5.815 15.783 16 15h.188c.118 0 .138.168.024.197l-5.345 1.336.044.485a1 1 0 0 0 1.072.906l11.648-.896A.4.4 0 0 0 24 16.63V8.372a.4.4 0 0 0-.372-.399l-8.39-.599-.155-1.546a1 1 0 0 0-.912-.897l-9.325-.777z"/></svg>',grass:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M10 22Q10 6 21 0q-8 7-7 22 0 2-2 2t-2-2"/><path fill="currentColor" d="M2 3c4.832 1.933 7.329 4.332 8.62 6.86q-1.17 3.005-1.661 6.597c-.532-.865-.832-2.041-1.178-3.398C7.027 10.104 6.055 6.295 2 3M24 7c-9 3-9 11-9 15 3.34 0 3.493-1.82 3.717-4.485.245-2.92.577-6.854 5.283-10.515M9 22c0-5-2-9-9-12 2.629 3.067 3.53 5.75 4.217 7.797C5.1 20.422 5.63 22 9 22"/></svg>',greengrocery:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M3.896 7.121C2.64 5.422 1.83 3.058 2.056 2.097c.962-.226 3.344.576 5.056 1.824.476-1.11 1.2-2.3 2.098-3.421q1.761 2.202 1.118 4.672a5 5 0 0 0-1.508.693q-.814.555-1.606 1.345-.795.795-1.351 1.616a5 5 0 0 0-.69 1.501Q2.704 10.972.5 9.21c1.113-.89 2.294-1.611 3.396-2.089M21.575 22.908l-7.996-3.691q.579-1.588 1.843-3.454a.2.2 0 0 0-.246-.297q-1.61.698-3.214 3.005l-4.129-1.906a4.015 4.015 0 0 1-2.094-5.007q.642-1.78 2.34-3.479 1.698-1.698 3.479-2.34a4.015 4.015 0 0 1 5.007 2.094l.11.24q-1.729 1.521-2.268 3.518a.2.2 0 0 0 .332.198q1.485-1.404 2.713-2.034l3.072 6.657a8 8 0 0 0-1.226 2.584.201.201 0 0 0 .335.196 8.9 8.9 0 0 1 1.585-1.276l1.69 3.66a1.004 1.004 0 0 1-1.333 1.332"/></svg>',hairdressers:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.64 22.05 10.888 18h1.549a1 1 0 0 0 .854-.48l.583-.957.232.348a1 1 0 0 1-.031 1.155l-.043.056c-.285.381-.327.891-.107 1.313l.25.483 1.185 2.131a3.5 3.5 0 1 0 .632-3.992L16 18l-1.481-2.495 4.33-7.115a4 4 0 0 0 .162-3.869l-1.345-2.688a.2.2 0 0 0-.352-.011L7.967 18.017a3.5 3.5 0 1 0 .672 4.032M20.5 20.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-15 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4M13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/><path fill="currentColor" d="M5.84 9.524C5.17 8.42 4.834 7.868 4.686 7.275a4 4 0 0 1-.066-1.604c.097-.603.386-1.181.964-2.337l.65-1.301c.087-.173.13-.26.19-.29a.2.2 0 0 1 .168-.005c.061.027.11.11.206.278l4.606 8-2.587 4.396z"/></svg>',haulier:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 0 0 5v14l12 5 12-5V5zm7 7.668L23 6v12.333L13 22.5V10.17l4-1.668V13.8l2-.8zm-.997-1.043 3.458-1.482L12 1.088 8.599 2.546zm-2.524 1.082L6.102 3.616 2.539 5.143 12 9.198zM1 18.417l2 .833v-4l-2-.833zm3 1.25v-4l1 .416v4zm1.5.625.5.208v-4l-.5-.208zm1 .416v-4l.5.209v4zm3.5 1.459 1 .416v-4l-1-.416zm-1-.417-1.5-.625v-4l1.5.625z" clip-rule="evenodd"/></svg>',helicopter:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M7.25 6a.25.25 0 0 0-.25.25v11.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25V13.5h4v4.25c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25V6.25a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25v4.25h-4V6.25A.25.25 0 0 0 9.75 6z"/><path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12m-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10" clip-rule="evenodd"/></svg>',home_appliances:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m4 4 .772-2.316A1 1 0 0 1 5.721 1h12.558a1 1 0 0 1 .949.684L20 4h.995a1.003 1.003 0 0 1 1.004 1.053l-.82 15.5c-.046.863-.15 1.173-.33 1.483q-.273.467-.758.715c-.32.163-.636.249-1.506.249H5.415c-.87 0-1.185-.086-1.506-.25a1.8 1.8 0 0 1-.758-.714c-.18-.31-.284-.62-.33-1.483l-.82-15.5A1 1 0 0 1 3.005 4zm8 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10m5-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7.019 3c-.192 0-.262.016-.335.047a.45.45 0 0 0-.183.143c-.048.063-.08.127-.127.313l-.219.876A.5.5 0 0 0 6.64 5H9.36c.223 0 .304-.023.385-.067a.45.45 0 0 0 .19-.189c.043-.081.066-.162.066-.385v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19C9.663 3.024 9.582 3 9.36 3zm2.113 8.212c2.668.213 2.691 4.559 6.862 3.01a4 4 0 1 1-6.862-3.01" clip-rule="evenodd"/></svg>',hospital:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M9.587 4.437c-.087.17-.087.395-.087.843V9.5H5.28c-.448 0-.672 0-.843.087a.8.8 0 0 0-.35.35C4 10.107 4 10.332 4 10.78v2.44c0 .448 0 .672.087.843a.8.8 0 0 0 .35.35c.17.087.395.087.843.087H9.5v4.22c0 .448 0 .672.087.843a.8.8 0 0 0 .35.35c.17.087.395.087.843.087h2.44c.448 0 .672 0 .843-.087a.8.8 0 0 0 .35-.35c.087-.17.087-.395.087-.843V14.5h4.22c.448 0 .672 0 .843-.087a.8.8 0 0 0 .35-.35c.087-.17.087-.395.087-.843v-2.44c0-.448 0-.672-.087-.843a.8.8 0 0 0-.35-.35c-.17-.087-.395-.087-.843-.087H14.5V5.28c0-.448 0-.672-.087-.843a.8.8 0 0 0-.35-.35C13.893 4 13.668 4 13.22 4h-2.44c-.448 0-.672 0-.843.087a.8.8 0 0 0-.35.35"/></svg>',hostels:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M22 22h-1.03c-.366 0-.499-.027-.639-.084a.9.9 0 0 1-.356-.256c-.098-.116-.166-.233-.282-.58l-.026-.08H3.333l-.026.08c-.116.347-.184.464-.282.58a.9.9 0 0 1-.356.256c-.14.057-.273.084-.64.084H1V1h.718c.446 0 .607.046.77.134q.246.132.378.378c.088.163.134.324.134.77v4.436c0 .446.046.607.134.77q.132.246.378.378c.163.088.324.134.77.134h17.077c.223 0 .304.023.385.067a.45.45 0 0 1 .19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 0 1-.189.19c-.081.043-.162.066-.385.066H4.282c-.446 0-.607.046-.77.134a.9.9 0 0 0-.378.378c-.088.162-.134.324-.134.77v5.436c0 .446.046.608.134.77q.132.246.378.378c.163.088.324.134.77.134h16.436c.446 0 .608.046.77.134q.246.132.378.378c.088.162.134.324.134.77z"/><path fill="currentColor" d="M18.729 2.716A3.58 3.58 0 0 1 22 6.284c0 .395-.32.716-.716.716H10.127a.838.838 0 0 1-.803-1.08 5.03 5.03 0 0 1 5.254-3.565zM22 16.284a3.58 3.58 0 0 0-3.271-3.568l-4.151-.361a5.03 5.03 0 0 0-5.254 3.566.838.838 0 0 0 .803 1.079h11.157c.395 0 .716-.32.716-.716M6.75 16a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5M8.5 4.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"/></svg>',hotels:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M23 18v-3.718c0-.446-.046-.607-.134-.77a.9.9 0 0 0-.378-.378c-.162-.088-.324-.134-.77-.134H5.411c-.855 0-1.166-.083-1.483-.243a1.8 1.8 0 0 1-.752-.7c-.181-.305-.287-.609-.348-1.462L2.543 6.6c-.015-.213-.042-.289-.087-.365a.45.45 0 0 0-.188-.175C2.188 6.02 2.11 6 1.898 6H1v12h.962c.385 0 .525-.032.67-.095a.9.9 0 0 0 .365-.284c.097-.127.161-.255.255-.628L3.5 16h17l.248.993c.094.373.158.501.255.628a.9.9 0 0 0 .364.284c.146.063.286.095.67.095z"/><path fill="currentColor" d="M18.732 7.703A3.593 3.593 0 0 1 22 11.28a.72.72 0 0 1-.719.719H10.337a.905.905 0 0 1-.84-1.242 5.43 5.43 0 0 1 5.534-3.392zM8.5 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/></svg>',household_supplies:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M22.2 1.6a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6M9.967 1H14v3.163A3 3 0 0 0 11.976 7H8c0-1.698-2.202-2.675-2.868-2.931-.104-.04-.158-.153-.112-.254C5.317 3.16 6.557 1 9.967 1M14.5 5h-.065c-.534.26-.98.672-1.279 1.181q.078.053.144.12l1.556 1.555a.492.492 0 0 0 .788-.568zM15 1v3h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/><path fill="currentColor" fill-rule="evenodd" d="M8 8h4c1.112 3.335 2.223 4.662 3.163 5.784.752.896 1.393 1.661 1.837 3.216q.826 2.888-.393 5.777A2 2 0 0 1 14.764 24h-6.8a2 2 0 0 1-1.714-.969Q5 20.954 5 17q0-5 3-9m-.882 6.044c.336-1.504.94-2.915 1.815-4.244h1.8c.485 1.251 1.003 2.283 1.577 3.183.304.475.613.9.97 1.347l.281.342c-.99.259-1.709-.038-2.489-.36-.99-.41-2.08-.862-3.954-.268" clip-rule="evenodd"/><path fill="currentColor" d="M20.6 2.5a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0M23 4.2a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0"/></svg>',hydro:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 7.1h1.667c1.598 0 3-.564 4.166-1.656C9 6.536 10.402 7.1 12 7.1s3-.564 4.167-1.656C17.333 6.536 18.735 7.1 20.333 7.1H22V4.9h-1.667c-1.311 0-2.38-.565-3.29-1.764l-.876-1.158-.877 1.158C14.38 4.336 13.312 4.9 12 4.9s-2.381-.565-3.29-1.764l-.877-1.158-.876 1.158c-.91 1.2-1.979 1.764-3.29 1.764H2zM3.667 14.1H2v-2.2h1.667c1.311 0 2.38-.565 3.29-1.764l.876-1.158.877 1.158c.909 1.2 1.978 1.764 3.29 1.764s2.381-.565 3.29-1.764l.877-1.158.877 1.158c.908 1.2 1.977 1.764 3.29 1.764H22v2.2h-1.667c-1.598 0-3-.564-4.166-1.656C15 13.536 13.598 14.1 12 14.1s-3-.564-4.167-1.656C6.667 13.536 5.265 14.1 3.667 14.1M3.667 21.1H2v-2.2h1.667c1.311 0 2.38-.564 3.29-1.764l.876-1.158.877 1.158c.909 1.2 1.978 1.764 3.29 1.764s2.381-.564 3.29-1.764l.877-1.158.877 1.158c.908 1.2 1.977 1.764 3.29 1.764H22v2.2h-1.667c-1.598 0-3-.564-4.166-1.656C15 20.536 13.598 21.1 12 21.1s-3-.564-4.167-1.656C6.667 20.536 5.265 21.1 3.667 21.1"/></svg>',hypermarket:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M.725 2.207 3.5 3l2.36 7.552a1 1 0 0 0 .575.626l2.234.917a.5.5 0 0 1-.028.936l-3.738 1.278A2.37 2.37 0 0 0 5.383 19H19a1 1 0 1 0 0-2l-12.425-.268A.37.37 0 0 1 6.5 16l13.517-2.775a3 3 0 0 0 2.277-2.114l1.495-6.374A.6.6 0 0 0 23.204 4H6.5L4.956.706A1 1 0 0 0 4 0H1a1 1 0 0 0-1 1v.246a1 1 0 0 0 .725.961M3 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4M16 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></svg>',indoor_exit:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M5.5 1h13A1.5 1.5 0 0 1 20 2.5v17.059a2 2 0 0 1-1.367 1.897l-6.975 2.325a.5.5 0 0 1-.658-.475V5.721a1 1 0 0 1 .684-.949L17 3H6v16h4v2H5.5A1.5 1.5 0 0 1 4 19.5v-17A1.5 1.5 0 0 1 5.5 1m7.627 12.12a.704.704 0 0 1 .852.496.7.7 0 0 1 .021.166c0 .513-.36.96-.873 1.085l-.054.012a.704.704 0 0 1-.852-.495.7.7 0 0 1-.021-.166c0-.513.36-.96.873-1.085z" clip-rule="evenodd"/></svg>',indoor_info_arrival:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6zm9.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 9v-7l-3.5 1v1h.5a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h1.5v-1H14a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>',indoor_info_departure:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6zm9.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 9v-7l-3.5 1v1h.5a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h1.5v-1H14a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>',indoor_info_inquiry_office:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6zm9.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 9v-7l-3.5 1v1h.5a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h1.5v-1H14a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>',indoor_info_meetingpoint:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M15 3.615v4.039C15 8.397 15.603 9 16.346 9h4.039L22 7.385h-4.308L22 3.077 20.923 2l-4.307 4.308V2zM15 20.385v-4.039c0-.743.603-1.346 1.346-1.346h4.039L22 16.615h-4.308L22 20.923 20.923 22l-4.307-4.308V22zM9 16.346v4.039L7.385 22v-4.308L3.077 22 2 20.923l4.308-4.308H2L3.616 15h4.038C8.397 15 9 15.603 9 16.346M9 3.615v4.039C9 8.397 8.397 9 7.654 9H3.616L2 7.385h4.308L2 3.077 3.077 2l4.308 4.308V2zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>',indoor_info_schedule:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6zm9.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 9v-7l-3.5 1v1h.5a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h1.5v-1H14a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>',indoor_info_scheme:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6zm9.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 9v-7l-3.5 1v1h.5a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h1.5v-1H14a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>',indoor_info_stand:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6zm9.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 9v-7l-3.5 1v1h.5a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h1.5v-1H14a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>',indoor_infra_control_frame:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g fill="currentColor" fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path d="M18.5 0c1.105 0 2 .893 2 1.998v21.615a.39.39 0 0 1-.4.387h-1.2a.4.4 0 0 1-.4-.4V5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v18.6a.4.4 0 0 1-.4.4H3.9a.4.4 0 0 1-.4-.4V2a2 2 0 0 1 2-2zM9.359 1h-.718c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189C8.024 1.337 8 1.418 8 1.64v.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066h.718c.223 0 .304-.023.385-.067a.45.45 0 0 0 .19-.189c.043-.081.066-.162.066-.385v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19C9.663 1.024 9.582 1 9.36 1m2.282 0h.718c.223 0 .304.023.385.067a.45.45 0 0 1 .19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 0 1-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 0 1-.19-.189C11.024 2.663 11 2.582 11 2.36v-.718c0-.223.023-.304.067-.385a.45.45 0 0 1 .189-.19c.081-.043.162-.066.385-.066m3 0h.718c.223 0 .304.023.385.067a.45.45 0 0 1 .19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 0 1-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 0 1-.19-.189C14.024 2.663 14 2.582 14 2.36v-.718c0-.223.023-.304.067-.385a.45.45 0 0 1 .189-.19c.081-.043.162-.066.385-.066"/><path d="M9.818 11.265a.994.994 0 0 1 .969-.765H13.2c.468 0 .873.323.975.78.227 1.012.619 2.761.825 3.72a.92.92 0 0 1-.352.857l-.507.405L13.466 24h-.137c-.608 0-1.079-.462-1.079-1v-4.75a.25.25 0 0 0-.5 0V23c0 .538-.471 1-1.079 1h-.137l-.664-7.738-.507-.405A.92.92 0 0 1 9.011 15c.168-.977.57-2.73.807-3.735M11.984 6h.032c.958 0 1.734.776 1.734 1.734v.032c0 .958-.776 1.734-1.734 1.734h-.032a1.734 1.734 0 0 1-1.734-1.734v-.032c0-.958.776-1.734 1.734-1.734"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>',indoor_infra_elevator:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M15.936.637 14.616 2.8a.42.42 0 0 1-.715 0L12.58.637A.42.42 0 0 1 12.94 0h2.64a.419.419 0 0 1 .357.637"/><path fill="currentColor" fill-rule="evenodd" d="M20 6.998a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM10.133 9.5H8.367a.84.84 0 0 0-.836.716l-.523 2.354a.82.82 0 0 0 .27.73l.39.346.457 5.857h.105c.466 0 .82-.372.82-.83V15.2a.2.2 0 1 1 .4 0v3.472c0 .459.354.83.82.83h.106l.457-5.856.388-.345a.82.82 0 0 0 .27-.731l-.522-2.354a.84.84 0 0 0-.836-.716m-.872-3H9.24C8.555 6.5 8 7.055 8 7.739v.022C8 8.445 8.555 9 9.239 9h.022c.684 0 1.239-.555 1.239-1.239V7.74c0-.684-.555-1.239-1.239-1.239m6.372 3h-1.766a.84.84 0 0 0-.836.716l-.523 2.354a.82.82 0 0 0 .27.73l.39.346.457 5.857h.105c.466 0 .82-.372.82-.83V15.2a.2.2 0 1 1 .4 0v3.472c0 .459.354.83.82.83h.106l.457-5.856.388-.345a.82.82 0 0 0 .27-.731l-.522-2.354a.84.84 0 0 0-.836-.716m-.872-3h-.022c-.684 0-1.239.555-1.239 1.239v.022c0 .684.555 1.239 1.239 1.239h.022C15.445 9 16 8.445 16 7.761V7.74c0-.684-.555-1.239-1.239-1.239" clip-rule="evenodd"/><path fill="currentColor" d="M11.478 2.581a.4.4 0 0 0-.062-.218L10.096.2a.42.42 0 0 0-.715 0L8.06 2.363A.419.419 0 0 0 8.42 3h2.64a.42.42 0 0 0 .419-.419"/></svg>',indoor_infra_elevator_disabled:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path fill="currentColor" fill-rule="evenodd" d="M9.834 13.818a.657.657 0 0 1-1.19.541l-2.351-4.03a.05.05 0 0 1 0-.054c.194-.304 2.09-3.23 3.559-4.043 1.55-.857 4.047-1.06 4.555.818.345 1.27.168 3.371.018 4.597a4.2 4.2 0 0 0-1.777-.367q.705.203 1.327.56a6.03 6.03 0 0 1 2.35 2.445c.25.48.437.996.55 1.54q.015-.18.015-.365c0-.569-.113-1.111-.32-1.605l3.084 1.258c.029.012.047.04.046.072l-.139 6.582a.8.8 0 0 1-1.596.059l-.449-4.765a.02.02 0 0 0-.009-.014c-.045-.025-.27-.146-.513-.263q.006.133.006.267a6 6 0 0 1-12 0c-.046-1.604.864-3.095 1.182-3.564a.19.19 0 0 1 .263-.049l.835.548c.1.066.122.205.053.303-.288.407-.933 1.464-.933 2.762a4.6 4.6 0 1 0 3.061-4.336zm-.821-2.43a6 6 0 0 1 1.263-.294 27 27 0 0 0-.165-1.237c-.11-.646-.259-.997-.259-.997s-.391.617-.575.855c-.174.225-.554.624-.598.67a.01.01 0 0 0-.002.01z" clip-rule="evenodd"/></svg>',indoor_infra_emergency_exit:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M19 4H9a1 1 0 0 0-1 1v10.5c-.98.045-1.736.762-1.736 1.716S6.942 18.965 8 19v3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3v-9.912l-1.102.273a1 1 0 0 1-.756-.114l-1.474-.821.53-1.542 1.395 1.203a.2.2 0 0 0 .15.05L19 11.042zm-3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-3.309 8.307-1.085 1.232a.8.8 0 0 1-.6.27H7.93a.554.554 0 0 1-.554-.574.614.614 0 0 1 .597-.59l2.388-.064a.2.2 0 0 0 .154-.08l.852-1.136zm-.987-7.856q2.174-.012 2.617-.043c.497-.035 1.02.228 1.156.721a.84.84 0 0 1 0 .481l-.039.132-1.242 4.248 1.742 1.855a2 2 0 0 1 .523 1.093l.485 3.47a.544.544 0 0 1-.464.614l-.009.002a.65.65 0 0 1-.702-.465l-1.026-3.575a.2.2 0 0 0-.076-.107q-2.802-2-2.974-2.292a1.04 1.04 0 0 1-.059-.937l.018-.04 1.428-3.516-1.332-.187a.2.2 0 0 0-.185.075l-1.408 1.8a.416.416 0 0 1-.584.07l-.004-.003a.48.48 0 0 1-.11-.624l1.397-2.292a1 1 0 0 1 .848-.48" clip-rule="evenodd"/></svg>',indoor_infra_escalator:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M9.991 3.5a1.5 1.5 0 1 0 2.999.002A1.5 1.5 0 0 0 9.99 3.5M8.699 10.006l2.346 2.165L21.5 4.711a1.19 1.19 0 0 0 .246-1.704l-9.314 6.596q-.036-2.985-2.512-3.853L7.322 8.351a1.5 1.5 0 0 0-.16 1.933l1.434 2.009-4.892 3.429a4.003 4.003 0 0 0-.981 5.57 3.993 3.993 0 0 0 5.565.983l13.689-9.643a1.405 1.405 0 0 0-1.934-.29l-7.625 5.45V12.75L9.42 14.86l.826 4.455-2.703 1.895a2.695 2.695 0 0 1-3.756-.663 2.7 2.7 0 0 1 .662-3.76l5.44-3.814a.5.5 0 0 0 .136-.676L8.623 10.07a.05.05 0 0 1 .076-.063"/></svg>',indoor_infra_fire_stairs:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M19 4H9a1 1 0 0 0-1 1v10.5c-.98.045-1.736.762-1.736 1.716S6.942 18.965 8 19v3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3v-9.912l-1.102.273a1 1 0 0 1-.756-.114l-1.474-.821.53-1.542 1.395 1.203a.2.2 0 0 0 .15.05L19 11.042zm-3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-3.309 8.307-1.085 1.232a.8.8 0 0 1-.6.27H7.93a.554.554 0 0 1-.554-.574.614.614 0 0 1 .597-.59l2.388-.064a.2.2 0 0 0 .154-.08l.852-1.136zm-.987-7.856q2.174-.012 2.617-.043c.497-.035 1.02.228 1.156.721a.84.84 0 0 1 0 .481l-.039.132-1.242 4.248 1.742 1.855a2 2 0 0 1 .523 1.093l.485 3.47a.544.544 0 0 1-.464.614l-.009.002a.65.65 0 0 1-.702-.465l-1.026-3.575a.2.2 0 0 0-.076-.107q-2.802-2-2.974-2.292a1.04 1.04 0 0 1-.059-.937l.018-.04 1.428-3.516-1.332-.187a.2.2 0 0 0-.185.075l-1.408 1.8a.416.416 0 0 1-.584.07l-.004-.003a.48.48 0 0 1-.11-.624l1.397-2.292a1 1 0 0 1 .848-.48" clip-rule="evenodd"/></svg>',indoor_infra_luggage_inspection:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g fill="currentColor" fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path d="M18.5 0c1.105 0 2 .893 2 1.998v21.615a.39.39 0 0 1-.4.387h-1.2a.4.4 0 0 1-.4-.4V5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v18.6a.4.4 0 0 1-.4.4H3.9a.4.4 0 0 1-.4-.4V2a2 2 0 0 1 2-2zM9.359 1h-.718c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189C8.024 1.337 8 1.418 8 1.64v.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066h.718c.223 0 .304-.023.385-.067a.45.45 0 0 0 .19-.189c.043-.081.066-.162.066-.385v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19C9.663 1.024 9.582 1 9.36 1m2.282 0h.718c.223 0 .304.023.385.067a.45.45 0 0 1 .19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 0 1-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 0 1-.19-.189C11.024 2.663 11 2.582 11 2.36v-.718c0-.223.023-.304.067-.385a.45.45 0 0 1 .189-.19c.081-.043.162-.066.385-.066m3 0h.718c.223 0 .304.023.385.067a.45.45 0 0 1 .19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 0 1-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 0 1-.19-.189C14.024 2.663 14 2.582 14 2.36v-.718c0-.223.023-.304.067-.385a.45.45 0 0 1 .189-.19c.081-.043.162-.066.385-.066"/><path d="M9.818 11.265a.994.994 0 0 1 .969-.765H13.2c.468 0 .873.323.975.78.227 1.012.619 2.761.825 3.72a.92.92 0 0 1-.352.857l-.507.405L13.466 24h-.137c-.608 0-1.079-.462-1.079-1v-4.75a.25.25 0 0 0-.5 0V23c0 .538-.471 1-1.079 1h-.137l-.664-7.738-.507-.405A.92.92 0 0 1 9.011 15c.168-.977.57-2.73.807-3.735M11.984 6h.032c.958 0 1.734.776 1.734 1.734v.032c0 .958-.776 1.734-1.734 1.734h-.032a1.734 1.734 0 0 1-1.734-1.734v-.032c0-.958.776-1.734 1.734-1.734"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>',indoor_infra_pandus:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path fill="currentColor" fill-rule="evenodd" d="m6.252 13.599.61 1.382a.683.683 0 0 1-1.18.675l-2.77-3.848a.06.06 0 0 1-.01-.052C3.015 11.42 4.14 8.09 5.35 6.924c1.276-1.23 3.635-2.07 4.612-.39.663 1.14 1.036 3.22 1.208 4.442a3.4 3.4 0 0 0-1.769.1c.474.01.94.077 1.389.195a6.03 6.03 0 0 1 2.816 1.66 3.4 3.4 0 0 0-1.033-1.31h3.88a.07.07 0 0 1 .068.053l1.574 5.985a.803.803 0 0 1-1.522.503l-1.616-4.031a.02.02 0 0 0-.016-.01c-.047.001-.231.01-.445.012a6.003 6.003 0 0 1-2.199 8.122 3.72 3.72 0 0 0 2.737-1.95l5.698-1.531a.212.212 0 0 1 .268.205v4.863c0 .087-.07.158-.158.158H5.566a.566.566 0 0 1-.147-1.113l1.34-.36a5.99 5.99 0 0 1-3.29-3.899c-.383-1.334-.086-2.743.064-3.3a.188.188 0 0 1 .288-.105l.879.577a.21.21 0 0 1 .088.222c-.076.35-.231 1.291.034 2.244a4.6 4.6 0 1 0 1.43-4.667m-.585-1.327a6 6 0 0 1 1.352-.76 27 27 0 0 0-.48-1.154c-.274-.596-.508-.896-.508-.896l-.373.896c-.11.265-.409.844-.436.897v.008z" clip-rule="evenodd"/></svg>',indoor_infra_stairs:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M11 2.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M7.565 7.031a.6.6 0 0 1 .236-.264l.08-.047 3.046-1.793a.927.927 0 0 1 1.397.82l-.003.138-.1 4.425 2.584 1.945a.05.05 0 0 1 .017.025l1.054 3.773a.682.682 0 0 1-1.289.44l-1.28-3.143-3.348-1.819a1.04 1.04 0 0 1-.3-.889l.007-.044.491-3.28-1.49.564-1.305 2.307a.548.548 0 0 1-.978-.494z"/><path fill="currentColor" d="m13.194 6.616 2.452 2.401a.536.536 0 0 1-.68.824l-1.894-1.308zM11.84 13.723l-.466 1.74-.003.008-1.517 3.095a.612.612 0 0 1-1.12-.49l1.293-3.338v-.003l.106-1.831zM8.1 23.296a.2.2 0 0 0 .2-.2v-1.7a.1.1 0 0 1 .1-.1h4.7a.2.2 0 0 0 .2-.2v-1.7a.1.1 0 0 1 .1-.1h4.7a.2.2 0 0 0 .2-.2v-1.7a.1.1 0 0 1 .1-.1h3.4a.2.2 0 0 0 .2-.2v-.905a.2.2 0 0 0-.2-.2h-4.6a.2.2 0 0 0-.2.2V17.9a.1.1 0 0 1-.1.1h-4.698a.2.2 0 0 0-.2.2v1.7a.1.1 0 0 1-.1.1h-4.7a.2.2 0 0 0-.2.2v1.7a.1.1 0 0 1-.1.1H3.2a.2.2 0 0 0-.2.2v.897c0 .11.09.2.2.2z"/></svg>',indoor_infra_travolator:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M23 12a1.3 1.3 0 0 1-1.3 1.3h-7.44l-2.731-3.444a.136.136 0 0 0-.176-.029.12.12 0 0 0-.04.164l1.405 2.569a.5.5 0 0 1-.438.74H5.5a3.2 3.2 0 0 0 0 6.4H11v-5.1h3.001l-.864 5.1H20.7A1.3 1.3 0 0 1 22 21H5.5a4.5 4.5 0 1 1 0-9h5.532l-.956-1.56a1.5 1.5 0 0 1 .149-1.77L12.99 5.5c3.568 1.912 2.238 4.275 2.034 6.5zm-8.5-7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" clip-rule="evenodd"/></svg>',indoor_leisure_scene:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M3.325 16.72a5.2 5.2 0 0 0 1.06 1.033c-.608.944-.589 2.257.358 3.192 1.126 1.096 2.78.915 3.71 0l6.156-6.044c1.191-1.165 3.033-1.237 4.285.002 1.284 1.245 1.17 3.05 0 4.2l-3.879 3.8c-.688.675-1.728-.346-1.04-1.02l3.878-3.8c.605-.591.699-1.464 0-2.16-.716-.69-1.605-.59-2.203-.002-.81.796-4.968 4.88-6.157 6.044-1.542 1.506-4.129 1.636-5.791 0-1.515-1.48-1.549-3.71-.377-5.245m11.95-6.067-8.318 6.932q-1.417-.003-2.475-1.06-1.059-1.06-1.118-2.533l6.988-8.263q.931 1.332 2.263 2.663a20 20 0 0 0 2.66 2.26m-4.217-.705a.8.8 0 1 0-1.131 1.131.8.8 0 0 0 1.131-1.131m-.07-5.029a4.5 4.5 0 1 1 5.099 5.098 20 20 0 0 1-2.765-2.333 20 20 0 0 1-2.334-2.765" clip-rule="evenodd"/></svg>',indoor_serivce_smoking_room:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M7.117 10.373C6.77 11.338 6.11 12.4 5.3 13c1.532-.63 3.206-2.001 4.157-3.998.856-1.798.516-2.98.216-4.022-.2-.693-.381-1.323-.18-2.032C9.828 1.766 10.381.639 11 0 9.497.912 8.296 2.097 7.621 3.513c-.585 1.228-.489 2.847-.404 4.273.062 1.04.118 1.977-.1 2.587"/><path fill="currentColor" d="M2.533 11.482q-.9 1.398-.282 3.518c.106-.807.411-1.41.794-1.837.187-.208.445-.342.744-.498.55-.287 1.24-.646 1.873-1.665.513-.827.535-2.067.338-3-.183.632-.571 1.04-1.043 1.477-.25.23-.512.374-.788.524-.506.277-1.053.576-1.636 1.481M22.884 12.064a.2.2 0 0 0 .098-.262l-1.85-4.183a.2.2 0 0 0-.267-.1L6.213 14.32a1 1 0 0 0-.485 1.329l1.612 3.469a.2.2 0 0 0 .266.097zM3.911 16.502a1.006 1.006 0 0 1 .486-1.335l1.696 3.648c.234.503.016 1.1-.486 1.335zM2.58 16.017c-.503.235-.72.832-.487 1.335L3.79 21c.503-.235.72-.832.486-1.335z"/></svg>',indoor_service_charging_socket:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 10h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.333L21 12v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2zM4.5 7.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm.5 1h8.595a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5" clip-rule="evenodd"/></svg>',indoor_service_checkin_desk:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M23 9.129a.4.4 0 0 1-.36.398q-.164.017-.269.039a3.001 3.001 0 0 0-.021 5.863q.112.025.291.044a.4.4 0 0 1 .36.398L23 19.6a.4.4 0 0 1-.4.4H1.4a.4.4 0 0 1-.4-.4v-3.724a.4.4 0 0 1 .358-.397l.044-.006a3 3 0 0 0-.042-5.95.4.4 0 0 1-.36-.398V5.4c0-.22.18-.4.4-.4h21.2c.22 0 .4.18.4.4zm-10.893 5.798 2.131 1.035a.38.38 0 0 0 .543-.39l-.306-2.405 1.637-1.77a.38.38 0 0 0-.207-.632l-2.334-.447-1.13-2.117a.38.38 0 0 0-.67 0l-1.129 2.117-2.334.447a.38.38 0 0 0-.207.631l1.637 1.77-.306 2.406a.38.38 0 0 0 .543.39z" clip-rule="evenodd"/></svg>',indoor_service_fitting_room:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m9.175 9.054-7.107 2.443C.8 12.003 0 13.185 0 14.5A2.5 2.5 0 0 0 2.5 17H4v-2H2.5a.5.5 0 0 1-.5-.5c0-.497.303-.944.764-1.129l7.061-2.425a1 1 0 0 0-.65-1.892"/><path fill="currentColor" fill-rule="evenodd" d="M5 23v-8h.01c.012-.196.038-.335.099-.454a1 1 0 0 1 .437-.437C5.76 14 6.04 14 6.6 14h10.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.06.119.087.258.1.454H19v8s-3.5 1-7 1-7-1-7-1m2.588-1.895a.504.504 0 0 0-.588.493c0 .234.164.434.394.474.8.138 2.703.428 4.606.428s3.805-.29 4.606-.428c.23-.04.394-.24.394-.474a.504.504 0 0 0-.587-.493c-.887.146-2.65.395-4.413.395s-3.526-.249-4.412-.395" clip-rule="evenodd"/><path fill="currentColor" d="M20 17h1.5a2.5 2.5 0 0 0 2.5-2.5c0-1.315-.8-2.497-2.021-2.986l-7.844-2.683A.2.2 0 0 1 14 8.642v-1.3a.2.2 0 0 1 .113-.181C15.352 6.565 16 5.456 16 4a4 4 0 0 0-8 0 1 1 0 1 0 2 0 2 2 0 1 1 4 0c0 .71-.232 1.108-.753 1.358A2.2 2.2 0 0 0 12 7.341v1.301a2.2 2.2 0 0 0 1.488 2.082l7.796 2.665c.413.167.716.614.716 1.111a.5.5 0 0 1-.5.5H20z"/></svg>',indoor_service_luggage:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M9.77 2a1.5 1.5 0 0 0-1.479 1.253l-.213 1.281A.4.4 0 0 0 8.472 5H8.9a.4.4 0 0 0 .4-.4v-.85a.5.5 0 0 1 .5-.5h4.4a.5.5 0 0 1 .5.5v.85c0 .22.18.4.4.4h.428a.4.4 0 0 0 .394-.466l-.213-1.28A1.5 1.5 0 0 0 14.229 2z"/><path fill="currentColor" fill-rule="evenodd" d="M10 6.5a.5.5 0 0 0-.5-.5H2.467a.493.493 0 0 0-.495.465c-.055.987-.172 3.459-.172 6.584 0 2.163.112 3.985.218 5.22.085.995.925 1.731 1.923 1.731H20.06c.997 0 1.837-.736 1.922-1.73.106-1.236.218-3.058.218-5.22 0-3.126-.117-5.598-.172-6.585A.493.493 0 0 0 21.533 6H14.5a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5M5.05 15a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m12.724-5L12 12.113l1.226 3.387L19 13.387z" clip-rule="evenodd"/></svg>',indoor_service_luggage_claim:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M9.77 2a1.5 1.5 0 0 0-1.479 1.253l-.213 1.281A.4.4 0 0 0 8.472 5H8.9a.4.4 0 0 0 .4-.4v-.85a.5.5 0 0 1 .5-.5h4.4a.5.5 0 0 1 .5.5v.85c0 .22.18.4.4.4h.428a.4.4 0 0 0 .394-.466l-.213-1.28A1.5 1.5 0 0 0 14.229 2z"/><path fill="currentColor" fill-rule="evenodd" d="M10 6.5a.5.5 0 0 0-.5-.5H2.467a.493.493 0 0 0-.495.465c-.055.987-.172 3.459-.172 6.584 0 2.163.112 3.985.218 5.22.085.995.925 1.731 1.923 1.731H20.06c.997 0 1.837-.736 1.922-1.73.106-1.236.218-3.058.218-5.22 0-3.126-.117-5.598-.172-6.585A.493.493 0 0 0 21.533 6H14.5a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5M5.05 15a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m12.724-5L12 12.113l1.226 3.387L19 13.387z" clip-rule="evenodd"/></svg>',indoor_service_luggage_oversized_claim:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M9.77 2a1.5 1.5 0 0 0-1.479 1.253l-.213 1.281A.4.4 0 0 0 8.472 5H8.9a.4.4 0 0 0 .4-.4v-.85a.5.5 0 0 1 .5-.5h4.4a.5.5 0 0 1 .5.5v.85c0 .22.18.4.4.4h.428a.4.4 0 0 0 .394-.466l-.213-1.28A1.5 1.5 0 0 0 14.229 2z"/><path fill="currentColor" fill-rule="evenodd" d="M10 6.5a.5.5 0 0 0-.5-.5H2.467a.493.493 0 0 0-.495.465c-.055.987-.172 3.459-.172 6.584 0 2.163.112 3.985.218 5.22.085.995.925 1.731 1.923 1.731H20.06c.997 0 1.837-.736 1.922-1.73.106-1.236.218-3.058.218-5.22 0-3.126-.117-5.598-.172-6.585A.493.493 0 0 0 21.533 6H14.5a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5M5.05 15a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m12.724-5L12 12.113l1.226 3.387L19 13.387z" clip-rule="evenodd"/></svg>',indoor_service_luggage_oversized_dropoff:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M9.77 2a1.5 1.5 0 0 0-1.479 1.253l-.213 1.281A.4.4 0 0 0 8.472 5H8.9a.4.4 0 0 0 .4-.4v-.85a.5.5 0 0 1 .5-.5h4.4a.5.5 0 0 1 .5.5v.85c0 .22.18.4.4.4h.428a.4.4 0 0 0 .394-.466l-.213-1.28A1.5 1.5 0 0 0 14.229 2z"/><path fill="currentColor" fill-rule="evenodd" d="M10 6.5a.5.5 0 0 0-.5-.5H2.467a.493.493 0 0 0-.495.465c-.055.987-.172 3.459-.172 6.584 0 2.163.112 3.985.218 5.22.085.995.925 1.731 1.923 1.731H20.06c.997 0 1.837-.736 1.922-1.73.106-1.236.218-3.058.218-5.22 0-3.126-.117-5.598-.172-6.585A.493.493 0 0 0 21.533 6H14.5a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5M5.05 15a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m12.724-5L12 12.113l1.226 3.387L19 13.387z" clip-rule="evenodd"/></svg>',indoor_service_luggage_storage:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M8.291 3.253A1.5 1.5 0 0 1 9.771 2h4.458a1.5 1.5 0 0 1 1.48 1.253l.213 1.281a.4.4 0 0 1-.394.466H15.1a.4.4 0 0 1-.4-.4v-.85a.5.5 0 0 0-.5-.5H9.8a.5.5 0 0 0-.5.5v.85a.4.4 0 0 1-.4.4h-.428a.4.4 0 0 1-.394-.466zM6.5 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/><path fill="currentColor" fill-rule="evenodd" d="M9.5 6a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h7.033c.263 0 .48.202.495.465.055.987.172 3.459.172 6.584 0 2.163-.112 3.985-.218 5.22-.085.995-.925 1.731-1.922 1.731H3.94c-.997 0-1.837-.736-1.922-1.73a62 62 0 0 1-.218-5.22c0-3.126.117-5.598.172-6.585A.493.493 0 0 1 2.467 6zm-1 3.5a3.5 3.5 0 1 0 3.164 4.998h1.772a1 1 0 0 0 .657-.246l.913-.795a.3.3 0 0 1 .466.094l.336.687a.3.3 0 0 0 .492.07l.756-.83a.3.3 0 0 1 .506.107l.125.373a.5.5 0 0 0 .879.136l.05-.069A2 2 0 0 0 19 12.847V12a.5.5 0 0 0-.5-.5h-6.837a3.5 3.5 0 0 0-3.163-2" clip-rule="evenodd"/></svg>',indoor_service_shopping_cart_parking:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M.725 2.207 3.5 3l2.36 7.552a1 1 0 0 0 .575.626l2.234.917a.5.5 0 0 1-.028.936l-3.738 1.278A2.37 2.37 0 0 0 5.383 19H19a1 1 0 1 0 0-2l-12.425-.268A.37.37 0 0 1 6.5 16l13.517-2.775a3 3 0 0 0 2.277-2.114l1.495-6.374A.6.6 0 0 0 23.204 4H6.5L4.956.706A1 1 0 0 0 4 0H1a1 1 0 0 0-1 1v.246a1 1 0 0 0 .725.961M3 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4M16 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></svg>',indoor_service_shower:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g fill="currentColor" clip-path="url(#a)"><path d="M7.326 2A3.323 3.323 0 0 0 4 5.322V20a2 2 0 0 1-2 2V5.322A5.323 5.323 0 0 1 7.326 0a5.33 5.33 0 0 1 4.764 2.944l.56 1.04a.19.19 0 0 1-.041.235 5 5 0 0 1-.675.48c-.33.194-.687.27-.873.298a.18.18 0 0 1-.188-.098l-.572-1.06A3.33 3.33 0 0 0 7.326 2M20.093 12.195a.946.946 0 0 1-1.678.868c-.24-.462-.031-2.108-.031-2.108s1.468.778 1.709 1.24M23.914 13.405a.946.946 0 0 1-1.678.868c-.24-.462-.03-2.109-.03-2.109s1.468.778 1.708 1.24M18.477 17.282a.94.94 0 0 0 .404-1.272c-.24-.463-1.709-1.24-1.709-1.24s-.209 1.646.031 2.108.81.643 1.274.404M15.06 14.8a.946.946 0 0 1-1.678.868c-.24-.462-.031-2.108-.031-2.108s1.468.778 1.708 1.24M13.848 18.615a.946.946 0 0 1-1.678.868c-.24-.462-.031-2.108-.031-2.108s1.469.778 1.709 1.24"/><path d="M13.474 5.111a.43.43 0 0 1 .484-.102l4.027 1.806c.354.08.541.439.335.737-.438.633-1.418 1.69-3.502 2.76-2.085 1.07-3.516 1.247-4.285 1.234-.363-.007-.546-.368-.403-.702l.882-4.324a.435.435 0 0 1 .367-.334 3.7 3.7 0 0 0 1.13-.374 3.7 3.7 0 0 0 .965-.7"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>',indoor_service_ticket_office:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M23 9.129a.4.4 0 0 1-.36.398q-.164.017-.269.039a3.001 3.001 0 0 0-.021 5.863q.112.025.291.044a.4.4 0 0 1 .36.398L23 19.6a.4.4 0 0 1-.4.4H1.4a.4.4 0 0 1-.4-.4v-3.724a.4.4 0 0 1 .358-.397l.044-.006a3 3 0 0 0-.042-5.95.4.4 0 0 1-.36-.398V5.4c0-.22.18-.4.4-.4h21.2c.22 0 .4.18.4.4zm-10.893 5.798 2.131 1.035a.38.38 0 0 0 .543-.39l-.306-2.405 1.637-1.77a.38.38 0 0 0-.207-.632l-2.334-.447-1.13-2.117a.38.38 0 0 0-.67 0l-1.129 2.117-2.334.447a.38.38 0 0 0-.207.631l1.637 1.77-.306 2.406a.38.38 0 0 0 .543.39z" clip-rule="evenodd"/></svg>',indoor_service_waiting_room:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m10.202 16.714-.047.05a3 3 0 0 0-.834 2.075v2.39l-.122.88a1.035 1.035 0 0 1-1.183.879.886.886 0 0 1-.73-1.02l.825-4.92a.4.4 0 0 1 .394-.334zm.237-4.478a.737.737 0 0 1-.051-1.468L15.3 10.2l-2.012-.575a.1.1 0 0 1-.07-.115l.355-1.82a2 2 0 0 1 2.566-1.523l2.513.795a.2.2 0 0 1 .127.261l-2.003 5.296a.01.01 0 0 1-.008.005zm5.815 1.327a.1.1 0 0 1 .088.135l-.242.659a2 2 0 0 1-1.877 1.31H8.207a.03.03 0 0 0-.027.014l-3.006 4.247a.915.915 0 0 1-1.54-.982l3.368-5.894a.08.08 0 0 1 .071-.038zm.939-8.373a2.097 2.097 0 0 1-2.1-2.095c0-1.157.94-2.095 2.1-2.095 1.159 0 2.099.938 2.099 2.095s-.94 2.095-2.1 2.095m2.848 2.29q.75.7.483 1.42l-2.384 6.52A3.93 3.93 0 0 1 14.448 18H12.7a1 1 0 0 0-1 1v1.71a1 1 0 0 0 1 1h6.206c.877 0 1.239.689 1.37 1.06.041.118-.05.23-.175.23h-7.73a2 2 0 0 1-2-2v-2.286a2 2 0 0 1 2-2h2.202a2.5 2.5 0 0 0 2.343-1.628l2.8-7.529a.2.2 0 0 1 .325-.077" clip-rule="evenodd"/></svg>',indoor_service_wardrobe:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m9.175 9.054-7.107 2.443C.8 12.003 0 13.185 0 14.5A2.5 2.5 0 0 0 2.5 17H4v-2H2.5a.5.5 0 0 1-.5-.5c0-.497.303-.944.764-1.129l7.061-2.425a1 1 0 0 0-.65-1.892"/><path fill="currentColor" fill-rule="evenodd" d="M5 23v-8h.01c.012-.196.038-.335.099-.454a1 1 0 0 1 .437-.437C5.76 14 6.04 14 6.6 14h10.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.06.119.087.258.1.454H19v8s-3.5 1-7 1-7-1-7-1m2.588-1.895a.504.504 0 0 0-.588.493c0 .234.164.434.394.474.8.138 2.703.428 4.606.428s3.805-.29 4.606-.428c.23-.04.394-.24.394-.474a.504.504 0 0 0-.587-.493c-.887.146-2.65.395-4.413.395s-3.526-.249-4.412-.395" clip-rule="evenodd"/><path fill="currentColor" d="M20 17h1.5a2.5 2.5 0 0 0 2.5-2.5c0-1.315-.8-2.497-2.021-2.986l-7.844-2.683A.2.2 0 0 1 14 8.642v-1.3a.2.2 0 0 1 .113-.181C15.352 6.565 16 5.456 16 4a4 4 0 0 0-8 0 1 1 0 1 0 2 0 2 2 0 1 1 4 0c0 .71-.232 1.108-.753 1.358A2.2 2.2 0 0 0 12 7.341v1.301a2.2 2.2 0 0 0 1.488 2.082l7.796 2.665c.413.167.716.614.716 1.111a.5.5 0 0 1-.5.5H20z"/></svg>',indoor_service_wheelchair_rent:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M11 11.5a5 5 0 0 1 4.769 3.494h-3.525a3 3 0 0 1-2.878-2.153l-.283-.96A5 5 0 0 1 11 11.5"/><path fill="currentColor" fill-rule="evenodd" d="M3.5.001a1 1 0 0 0 1 1H5.88l2.493 8.471a7.5 7.5 0 1 0 9.974 5.522H21.8a.2.2 0 0 0 .2-.2v-1.311a1.5 1.5 0 0 0-1.5-1.5h-3.511A7.49 7.49 0 0 0 11.028 9l-.483-1.497L17 6.989a1 1 0 0 0-1.001-1h-5.943L8.476.918C8.34.49 8 .001 7.5.001zm8.02 10.521a5.989 5.989 0 0 0-2.72.394A6.002 6.002 0 0 0 11 22.5a6 6 0 0 0 .52-11.978" clip-rule="evenodd"/><path fill="currentColor" d="M19 21a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8.95.504l.19-.062a.8.8 0 0 1 1.007.514l.433 1.333a.8.8 0 0 1-.513 1.008l-.19.062z"/></svg>',industrial_enterprise:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M24 21H.256c-.089 0-.121-.01-.154-.027a.2.2 0 0 1-.075-.075C.009 20.865 0 20.833 0 20.744v-1.488c0-.089.01-.121.027-.154a.2.2 0 0 1 .075-.075C.135 19.009.167 19 .256 19H1V7.38a.2.2 0 0 1 .306-.17l7.537 5.182A.1.1 0 0 0 9 12.31v-.735c0-.03-.002-.04-.005-.052a.1.1 0 0 0-.016-.032.2.2 0 0 0-.04-.033L7 10.125V7.38a.2.2 0 0 1 .313-.165L13 11.12v.005l1.843 1.267A.1.1 0 0 0 15 12.31v-.735c0-.03-.002-.04-.005-.052a.1.1 0 0 0-.016-.032.2.2 0 0 0-.04-.033L13 10.125V7.38a.2.2 0 0 1 .313-.165l4.74 3.255L17.2 19h1l1.777-17.766c.008-.084.019-.113.037-.143a.2.2 0 0 1 .075-.068c.032-.015.062-.023.146-.023h1.53c.084 0 .114.008.146.023a.2.2 0 0 1 .075.068c.018.03.029.06.037.143zM4.256 15c-.089 0-.121.01-.154.027a.2.2 0 0 0-.075.075c-.018.033-.027.065-.027.154v1.488c0 .089.01.121.027.154a.2.2 0 0 0 .075.075c.033.018.065.027.154.027h1.488c.089 0 .121-.01.154-.027a.2.2 0 0 0 .075-.075c.018-.033.027-.065.027-.154v-1.488c0-.089-.01-.121-.027-.154a.2.2 0 0 0-.075-.075c-.033-.018-.065-.027-.154-.027zm4 0c-.089 0-.121.01-.154.027a.2.2 0 0 0-.075.075c-.018.033-.027.065-.027.154v1.488c0 .089.01.121.027.154a.2.2 0 0 0 .075.075c.033.018.065.027.154.027h1.488c.089 0 .121-.01.154-.027a.2.2 0 0 0 .075-.075c.018-.033.027-.065.027-.154v-1.488c0-.089-.01-.121-.027-.154a.2.2 0 0 0-.075-.075c-.033-.018-.065-.027-.154-.027zm4 0c-.089 0-.121.01-.154.027a.2.2 0 0 0-.075.075c-.018.033-.027.065-.027.154v1.488c0 .089.01.121.027.154a.2.2 0 0 0 .075.075c.033.018.065.027.154.027h1.488c.089 0 .121-.01.154-.027a.2.2 0 0 0 .075-.075c.018-.033.027-.065.027-.154v-1.488c0-.089-.01-.121-.027-.154a.2.2 0 0 0-.075-.075c-.033-.018-.065-.027-.154-.027z" clip-rule="evenodd"/></svg>',information:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12m-.5-16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 9v-7l-3.5 1v1h.5a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h1.5v-1H14a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>',it:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M5.038 11.309C5 11.4 5 11.517 5 11.75s0 .35.038.441a.5.5 0 0 0 .27.27c.093.039.209.039.442.039h11.5c.233 0 .35 0 .441-.038a.5.5 0 0 0 .27-.27C18 12.1 18 11.982 18 11.75s0-.35-.038-.441a.5.5 0 0 0-.27-.27C17.598 11 17.482 11 17.25 11H5.75c-.233 0-.35 0-.441.038a.5.5 0 0 0-.27.27M5 14.75c0-.233 0-.35.038-.441a.5.5 0 0 1 .27-.27C5.402 14 5.518 14 5.75 14h6.5c.233 0 .35 0 .441.038a.5.5 0 0 1 .27.27c.039.092.039.209.039.442s0 .35-.038.441a.5.5 0 0 1-.27.27c-.092.039-.209.039-.442.039h-6.5c-.233 0-.35 0-.441-.038a.5.5 0 0 1-.27-.27C5 15.1 5 14.982 5 14.75"/><path fill="currentColor" fill-rule="evenodd" d="M21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M3 9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1.359-5h-.718c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189C3.024 4.337 3 4.418 3 4.64v.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066h.718c.223 0 .304-.023.385-.067a.45.45 0 0 0 .19-.189C4.976 5.663 5 5.582 5 5.36v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19C4.663 4.024 4.582 4 4.36 4m2.282 0h.718c.223 0 .304.023.385.067a.45.45 0 0 1 .19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 0 1-.189.19C7.663 5.976 7.582 6 7.36 6h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 0 1-.19-.189C6.024 5.663 6 5.582 6 5.36v-.718c0-.223.023-.304.067-.385a.45.45 0 0 1 .189-.19C6.337 4.024 6.418 4 6.64 4m3.718 0h-.718c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189C9.024 4.337 9 4.418 9 4.64v.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066h.718c.223 0 .304-.023.385-.067a.45.45 0 0 0 .19-.189c.043-.081.066-.162.066-.385v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19C10.663 4.024 10.582 4 10.36 4" clip-rule="evenodd"/></svg>',jewelry_store:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M9 1 6 4l5 6 1 1 1-1 5-6-3-3zm3 3H8l4 4.5z" clip-rule="evenodd"/><path fill="currentColor" d="M6.869 6.605a9 9 0 1 0 10.26 0l-1.287 1.543a7 7 0 1 1-7.686.001z"/></svg>',justice:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M22.196 5.33q-.896.633-2.123.633c-.627 0-1.6-.337-2.74-.731C15.72 4.674 13.773 4 12 4s-3.72.674-5.333 1.232c-1.14.394-2.113.731-2.74.731q-1.23 0-2.125-.634a.508.508 0 0 0-.792.327q-.107.656.898 1.343c.961.658 2.988.48 5.47.264 1.43-.125 3.008-.264 4.622-.264s3.193.134 4.621.254c2.483.21 4.51.381 5.47-.254q1.031-.68.893-1.36a.505.505 0 0 0-.788-.309M10.121 20.17c.23-1.705.722-5.97.849-12.17h2.06c.127 6.2.618 10.465.849 12.17 1.372.201 2.859.532 3.616.709.297.07.505.335.505.64 0 .288-.182.541-.457.62-.952.276-3.247.861-5.543.861-2.295 0-4.59-.585-5.542-.86A.64.64 0 0 1 6 21.52c0-.306.208-.572.505-.641.757-.177 2.244-.508 3.616-.709"/><path fill="currentColor" fill-rule="evenodd" d="M20 17c3 0 4-1.62 4-3h-.691l-2.862-5.724a.5.5 0 0 0-.894 0L16.69 14H16c0 1.38 1 3 4 3m-2.191-3h4.382L20 9.618zM8 14c0 1.38-1 3-4 3s-4-1.62-4-3h.691l2.862-5.724a.5.5 0 0 1 .894 0L7.31 14zm-6.191 0L4 9.618 6.191 14z" clip-rule="evenodd"/></svg>',kindergarten:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M4.357 11.216a4 4 0 0 1 2.813-3.06 4.002 4.002 0 1 0 7.414-2.935l.012-.017A7.99 7.99 0 0 1 21 2h3q0 1-.5 1.5l-.483 5.318a.2.2 0 0 1-.2.182h-.673a1 1 0 0 1-.91-.586l-.882-1.94a568 568 0 0 0-.994 3.319L20.74 16.7a13.3 13.3 0 0 1-2.433 1.683Q15.7 14 12 14t-6.307 4.384A13.3 13.3 0 0 1 3.26 16.7z"/><path fill="currentColor" d="M12 24c-5.31 0-9.89-3.105-12-7.587l.747-.913A14.27 14.27 0 0 0 12 20.965c4.573 0 8.644-2.14 11.253-5.465l.747.913A13.25 13.25 0 0 1 12 24M8.17 8c.365 1.165 1.347 2 2.5 2 1.155 0 2.137-.835 2.5-2zM0 10c0 .672.145 1.305.401 1.86q.8.64 1.599.64.525 0 1.05-.276l.234-1.289a4.8 4.8 0 0 1 2.857-3.56C5.499 6.532 4.554 6 3.5 6 1.567 6 0 7.79 0 10"/></svg>',landmark:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m11.976 18.028-5.989 3.83a.873.873 0 0 1-1.227-.302.96.96 0 0 1-.106-.71l1.74-7.248-5.053-4.113a.95.95 0 0 1-.15-1.3.88.88 0 0 1 .627-.35l6.603-.57L11.167.563a.88.88 0 0 1 1.642.003l2.724 6.699 6.649.57c.49.042.856.49.815.998a.94.94 0 0 1-.34.653l-5.073 4.112 1.736 7.254c.12.496-.172.997-.65 1.12a.86.86 0 0 1-.681-.109z" clip-rule="evenodd"/></svg>',laundry:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M16 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path fill="currentColor" fill-rule="evenodd" d="M20.529 10.414 22 6c0-.045 1.5-.5 2 .5L21 20c-.368 1.288-1.66 2-3 2H6c-1.34 0-2.632-.712-3-2L0 6.5c.5-1 2-.5 2-.5l1.426 4.279c3.31-2.285 6.074-1.06 8.772.135 2.683 1.19 5.302 2.35 8.33 0M6 19.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" clip-rule="evenodd"/><path fill="currentColor" d="M14.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></svg>',library:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M15 7h4v5h-4zM19 14h-4v1h4zM9 7H5v2h4zM5 11h4v1H5zM9 14H5v1h4z"/><path fill="currentColor" fill-rule="evenodd" d="M10 21h.114c.274.583 1.015 1 1.886 1 .87 0 1.612-.417 1.886-1H14l7.957.884.048.004a1 1 0 0 0 1.06-.935L23.96 6.66a1 1 0 0 0-.551-.957l-.948-.474L22.5 4h-.516c-1.39 0-2.309-.276-3.652-.947.121.06-.567-.286-.74-.37-.967-.468-1.7-.683-2.608-.683-1.355 0-2.409.377-2.992 1.192C11.408 2.377 10.355 2 9 2c-.909 0-1.641.215-2.608.683-.174.084-.862.43-.74.37C4.308 3.724 3.388 4 2 4h-.516l.04 1.238-.932.466a1 1 0 0 0-.55.957l.893 14.292a1 1 0 0 0 1.108.931zm2.484-3.185V5c0-1.421.868-2 2.5-2 .733 0 1.329.175 2.173.583.164.08.841.42.728.364 1.303.652 2.284.975 3.583 1.04l-.463 14.34c-2.884-.89-5.078-1.415-6.594-1.574-.792-.084-1.442-.069-1.927.062M11.5 5c0-1.421-.868-2-2.5-2-.733 0-1.33.175-2.173.583-.165.08-.842.42-.728.364-1.303.652-2.284.975-3.583 1.04l.463 14.34c2.884-.89 5.078-1.415 6.594-1.574.791-.084 1.442-.069 1.927.062z" clip-rule="evenodd"/></svg>',liquor_store:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M10.75 0h2.5a.75.75 0 0 1 .75.75V1a.5.5 0 0 1-.5.5h-3A.5.5 0 0 1 10 1V.75a.75.75 0 0 1 .75-.75M7.95 8.4l.245-.326c.15-.2.216-.292.259-.359-.028-.1-.057-.23-.111-.502l-.566-2.826a.5.5 0 0 0 .148-.572l-.275-.69a.2.2 0 0 0-.15-.122V3a.5.5 0 0 0 .5-.5v-.25a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v.25a.5.5 0 0 0 .5.5v.003a.2.2 0 0 0-.15.123l-.276.688a.5.5 0 0 0 .148.574l-.565 2.825c-.071.358-.098.47-.138.592-.04.123-.087.228-.152.34-.065.11-.13.205-.349.497L2.75 9A3.75 3.75 0 0 0 2 11.25v9.733a1 1 0 0 0 .445.832Q4.223 23 6 23q.536 0 1.072-.108A2 2 0 0 1 7 22.361V11.25a4.75 4.75 0 0 1 .95-2.85M17 22.36q0 .276-.072.532Q17.464 23 18 23q1.777 0 3.555-1.184a1 1 0 0 0 .445-.833V11.25c0-.811-.263-1.6-.75-2.25l-.268-.358a5 5 0 0 1-.35-.498 1.7 1.7 0 0 1-.151-.34 5 5 0 0 1-.138-.591l-.566-2.826a.5.5 0 0 0 .148-.572l-.275-.69a.2.2 0 0 0-.15-.122V3a.5.5 0 0 0 .5-.5v-.25a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v.25a.5.5 0 0 0 .5.5v.003a.2.2 0 0 0-.15.123l-.276.688a.5.5 0 0 0 .148.574l-.565 2.825a7 7 0 0 1-.11.502c.042.067.109.16.258.359l.245.326a4.75 4.75 0 0 1 .95 2.85z"/><path fill="currentColor" fill-rule="evenodd" d="M10.039 3a.5.5 0 0 0 .225.418l-.625 3.751c-.063.374-.088.492-.127.622s-.087.243-.155.362c-.067.118-.135.218-.362.521L8.75 9A3.75 3.75 0 0 0 8 11.25v11.11a1 1 0 0 0 .61.922Q10.305 24 12 24t3.39-.718a1 1 0 0 0 .61-.921V11.25c0-.811-.263-1.6-.75-2.25l-.245-.326c-.227-.303-.295-.403-.362-.521a1.7 1.7 0 0 1-.155-.362 5 5 0 0 1-.127-.622l-.625-3.751a.5.5 0 0 0 .19-.604l-.276-.688a.2.2 0 0 0-.15-.123V2h-3v.003a.2.2 0 0 0-.15.123l-.276.688A.5.5 0 0 0 10.04 3m1.711 2a.35.35 0 0 0-.246.103l-.386 2.313c-.07.42-.106.595-.17.807a3.2 3.2 0 0 1-.287.67c-.11.194-.211.34-.466.681L9.95 9.9a2.25 2.25 0 0 0-.45 1.35v10.773q.502.19 1 .304v-3.49Q11.175 19 12 19q1.28 0 2.197-.392a.5.5 0 0 0 .303-.46v-4.396a.5.5 0 0 0-.655-.475q-.802.262-1.845.261-.825 0-1.5-.174V11.75c0-.811.263-1.6.75-2.25A3.75 3.75 0 0 0 12 7.25v-2a.25.25 0 0 0-.25-.25" clip-rule="evenodd"/></svg>',locality:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 14a7 7 0 1 0 0-14 7 7 0 0 0 0 14m-1-9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/><path fill="currentColor" d="M10.307 14.82a8 8 0 0 0 3.387 0l-.919 8.484a.78.78 0 0 1-1.55 0z"/></svg>',locker:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M9.009 10.183A25 25 0 0 1 12 10q3.124 0 6.247.797a1 1 0 0 1 .753.968V16a7 7 0 1 1-14 0v-3.097q0-2.247 2-2.393V7a5 5 0 1 1 10 0c0 .685-2 .717-2 0 0-1.657-1.347-3-3-3-1.657 0-3 1.34-3 3q.003 2.19.009 3.183m2.491 9.326a.5.5 0 0 0 1 0v-2.594a1.5 1.5 0 1 0-1 0z" clip-rule="evenodd"/></svg>',malls:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M16 4a4 4 0 0 0-8 0v1h1V4c0-1.105 1-2.6 3-2.6s3 1.495 3 2.6v1h1z"/><path fill="currentColor" fill-rule="evenodd" d="M2.998 6.802c.001-.283.002-.424.057-.53a.5.5 0 0 1 .218-.218C3.38 6 3.52 6 3.8 6h16.4c.28 0 .42 0 .527.054.094.048.17.124.218.218.055.106.056.247.057.53.04 8.25.678 13.543.949 15.427.04.277.06.415.023.527a.5.5 0 0 1-.18.245c-.094.07-.227.093-.492.139-1.598.275-5.45.86-9.302.86s-7.704-.585-9.302-.86c-.265-.046-.398-.069-.493-.139a.5.5 0 0 1-.179-.245c-.037-.112-.017-.25.023-.527.271-1.884.91-7.177.95-15.427M9 8.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1H8v.5a4 4 0 0 0 8 0V9h.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5V9c0 1.38-1 3-3 3s-3-1.62-3-3z" clip-rule="evenodd"/></svg>',market:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m19.102 12-.493-2.429-.522 1.929.487 9.59a.6.6 0 0 1-.366.58Q15.104 23 12 23t-6.208-1.33a.6.6 0 0 1-.366-.58l.487-9.59-.522-1.929L4.898 12l-1.636.807a.615.615 0 0 1-.703-.113l-2.38-2.346a.594.594 0 0 1-.077-.757L3.884 4Q7.94 2 12 2t8.116 2l3.782 5.59c.16.239.129.556-.076.758l-2.38 2.346a.615.615 0 0 1-.704.113zM12 6a4 4 0 0 1-3.735-2.564Q10.132 3 12 3q1.867 0 3.735.436A4 4 0 0 1 12 6" clip-rule="evenodd"/></svg>',marketplace:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 12.897v7.246C21 21.169 20.194 22 19.2 22H4.8c-.994 0-1.8-.831-1.8-1.857v-7.246a2.78 2.78 0 0 0 2-.194v4.564c0 .405.328.733.733.733h12.534a.733.733 0 0 0 .733-.733v-4.564a2.776 2.776 0 0 0 2 .195m-8.575-2.146L12.212 7.2a.2.2 0 0 0-.031-.106.2.2 0 0 0-.074-.069A.2.2 0 0 0 12 7a.2.2 0 0 0-.107.025.2.2 0 0 0-.074.07.2.2 0 0 0-.031.105l-.213 3.55a.6.6 0 0 0-.076.09l-.032.046A2.75 2.75 0 0 1 9.25 12a2.75 2.75 0 0 1-2.177-1.061.7.7 0 0 0-.145-.143L6.712 7.2a.2.2 0 0 0-.031-.106.2.2 0 0 0-.074-.069A.2.2 0 0 0 6.5 7a.2.2 0 0 0-.107.025.2.2 0 0 0-.074.07.2.2 0 0 0-.031.105l-.216 3.597-.006.005a.7.7 0 0 0-.135.133A2.75 2.75 0 0 1 3.75 12C2.231 12 1 10.779 1 9.273q0-.77 1.682-6.739A.73.73 0 0 1 3.388 2h17.224c.328 0 .617.218.706.534Q23 8.502 23 9.273C23 10.779 21.769 12 20.25 12c-.98 0-1.84-.508-2.326-1.272L17.712 7.2a.2.2 0 0 0-.031-.106.2.2 0 0 0-.074-.069A.2.2 0 0 0 17.5 7a.2.2 0 0 0-.107.025.2.2 0 0 0-.074.07.2.2 0 0 0-.031.105l-.211 3.521-.004.006q-.03.055-.064.102A2.75 2.75 0 0 1 14.75 12c-.934 0-1.76-.462-2.257-1.169a1 1 0 0 0-.068-.08M6.4 16h11.2c.22 0 .4.18.4.4v.2a.4.4 0 0 1-.4.4H6.4a.4.4 0 0 1-.4-.4v-.2c0-.22.18-.4.4-.4" clip-rule="evenodd"/></svg>',medical:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M23 5H1a1 1 0 0 0-1 1v13.306c0 .977.705 1.809 1.674 1.94C3.874 21.54 7.937 22 12 22s8.127-.459 10.326-.755A1.94 1.94 0 0 0 24 19.305V6a1 1 0 0 0-1-1M10.5 8.64c0-.224 0-.336.044-.422a.4.4 0 0 1 .174-.174C10.804 8 10.916 8 11.14 8h1.72c.224 0 .336 0 .422.044a.4.4 0 0 1 .174.174c.044.086.044.198.044.422v2.86h2.86c.224 0 .336 0 .422.044a.4.4 0 0 1 .174.174c.044.086.044.198.044.422v1.72c0 .224 0 .336-.044.422a.4.4 0 0 1-.174.174c-.086.044-.198.044-.422.044H13.5v2.86c0 .224 0 .336-.044.422a.4.4 0 0 1-.174.174c-.086.044-.198.044-.422.044h-1.72c-.224 0-.336 0-.422-.044a.4.4 0 0 1-.174-.174c-.044-.086-.044-.198-.044-.422V14.5H7.64c-.224 0-.336 0-.422-.044a.4.4 0 0 1-.174-.174C7 14.196 7 14.084 7 13.86v-1.72c0-.224 0-.336.044-.422a.4.4 0 0 1 .174-.174c.086-.044.198-.044.422-.044h2.86z" clip-rule="evenodd"/><path fill="currentColor" d="M15.5 2.5V4H17V2.5A2.5 2.5 0 0 0 14.5 0h-5A2.5 2.5 0 0 0 7 2.5V4h1.5V2.5A.5.5 0 0 1 9 2h6a.5.5 0 0 1 .5.5"/></svg>',medicine:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M9.33 14.32v6.23a.45.45 0 0 1-.45.45H4.45a.45.45 0 0 1-.45-.45V3.45A.45.45 0 0 1 4.45 3h4.43a.45.45 0 0 1 .45.45v6.32h5.34V3.45a.45.45 0 0 1 .45-.45h4.43a.45.45 0 0 1 .45.45v17.1a.45.45 0 0 1-.45.45h-4.43a.45.45 0 0 1-.45-.45v-6.23z" clip-rule="evenodd"/></svg>',memorable_event:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m11.976 18.028-5.989 3.83a.873.873 0 0 1-1.227-.302.96.96 0 0 1-.106-.71l1.74-7.248-5.053-4.113a.95.95 0 0 1-.15-1.3.88.88 0 0 1 .627-.35l6.603-.57L11.167.563a.88.88 0 0 1 1.642.003l2.724 6.699 6.649.57c.49.042.856.49.815.998a.94.94 0 0 1-.34.653l-5.073 4.112 1.736 7.254c.12.496-.172.997-.65 1.12a.86.86 0 0 1-.681-.109z" clip-rule="evenodd"/></svg>',metro:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m6.747 12.839 3.95 6.913a1.5 1.5 0 0 0 2.605 0l3.95-6.913a.4.4 0 0 1 .748.198V20.5a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5V4.012a2 2 0 0 0-3.737-.991l-6.09 10.674a.2.2 0 0 1-.347 0L5.737 3.021A2 2 0 0 0 2 4.01V20.5A1.5 1.5 0 0 0 3.5 22h1A1.5 1.5 0 0 0 6 20.5v-7.463a.4.4 0 0 1 .747-.198" clip-rule="evenodd"/></svg>',metro_bus:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M6 24a3 3 0 1 1 0-6 3 3 0 0 1 0 6" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M0 19V3h19c3 0 5 1.125 5 2.999V20a1 1 0 0 1-1 1H11a5 5 0 0 0-9.584-2zm21-7q0 2 3 3V6h-2a1 1 0 0 0-1 1zm-8 6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zM5 7v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1M0 6v6h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" clip-rule="evenodd"/></svg>',metro_cable:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m23.41 1.543-6.915 1.362a2.8 2.8 0 0 0-.314-1.519L23.154.013c.39-.077.763.203.834.626.071.422-.187.827-.578.904M.846 5.987 7.842 4.61a2.8 2.8 0 0 1-.314-1.519L.59 4.457c-.39.077-.65.482-.578.904.07.423.444.703.834.626"/><path fill="currentColor" fill-rule="evenodd" d="M21.597 13H19.8a.8.8 0 0 0-.8.8v4.4a.8.8 0 0 0 .8.8h2.894l.274 1.496c.06.33.036.671-.071.99l-.384 1.146A2.01 2.01 0 0 1 20.605 24H3.395a2.01 2.01 0 0 1-1.908-1.368l-.384-1.146a2 2 0 0 1-.07-.99L1.305 19H4.2a.8.8 0 0 0 .8-.8v-4.4a.8.8 0 0 0-.8-.8H2.403l.248-1.358A2.01 2.01 0 0 1 4.629 10h4.006l.974-1.533a.98.98 0 0 1 1.075-.436l3.047.8a1 1 0 0 1 .465.276l.851.893h4.324c.972 0 1.804.691 1.978 1.642zm-8.64-9.056 1.239-.225c1.443-.263 1.05-2.427-.394-2.165l-3.975.723c-1.443.262-1.05 2.427.393 2.165l1.357-.247.744 2.975a.7.7 0 0 0 1.358-.34zM8.8 13a.8.8 0 0 0-.8.8v7.4a.8.8 0 0 0 .8.8h1.4a.8.8 0 0 0 .8-.8v-7.4a.8.8 0 0 0-.8-.8zm5 0a.8.8 0 0 0-.8.8v7.4a.8.8 0 0 0 .8.8h1.4a.8.8 0 0 0 .8-.8v-7.4a.8.8 0 0 0-.8-.8z" clip-rule="evenodd"/></svg>',metro_funicular:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m22.778 17.025-22 5a1 1 0 0 0 .444 1.95l22-5a1 1 0 0 0-.444-1.95M2 14l2.453-.818A.8.8 0 0 0 5 12.423V7.8a.8.8 0 0 0-.8-.8H2V5.405c0-.817.577-1.52 1.378-1.68L17 1l.766-.766A.8.8 0 0 1 18.33 0H21.2a.8.8 0 0 1 .8.8V3h-2.2a.8.8 0 0 0-.8.8v4.623a.8.8 0 0 0 .547.76L22 10v3.2a.8.8 0 0 1-.8.8H18.33a.8.8 0 0 0-.565.234l-1.532 1.531a.8.8 0 0 1-.565.235H8.33a.8.8 0 0 0-.565.234l-1.532 1.531A.8.8 0 0 1 5.67 18H2.8a.8.8 0 0 1-.8-.8zm5.8-9a.8.8 0 0 0-.8.8v5.4a.8.8 0 0 0 .8.8h2.4a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8zm6 0a.8.8 0 0 0-.8.8v5.4a.8.8 0 0 0 .8.8h2.4a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8z" clip-rule="evenodd"/></svg>',metro_light:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M6 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0M11 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path fill="currentColor" fill-rule="evenodd" d="M2.913 4.286 5.345 6H0v3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H0v4.958l1.043-.043.404-.81A2 2 0 0 1 3.237 18h6.527a2 2 0 0 1 1.789 1.105L13 22h10a1 1 0 0 0 1-1v-4q-3-1-3-3v-4a1 1 0 0 1 1-1h2v-.001c0-1.874-2-3-5-3h-8.345l2.432-1.713a.4.4 0 0 0 .01-.647L8.48.17a.8.8 0 0 0-.962 0L2.903 3.64a.4.4 0 0 0 .01.647M15 20a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1zM5 10v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m5.988-6.07L8 6.035 5.013 3.93 8 1.685z" clip-rule="evenodd"/></svg>',metro_monorail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m6.747 12.839 3.95 6.913a1.5 1.5 0 0 0 2.605 0l3.95-6.913a.4.4 0 0 1 .748.198V20.5a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5V4.012a2 2 0 0 0-3.737-.991l-6.09 10.674a.2.2 0 0 1-.347 0L5.737 3.021A2 2 0 0 0 2 4.01V20.5A1.5 1.5 0 0 0 3.5 22h1A1.5 1.5 0 0 0 6 20.5v-7.463a.4.4 0 0 1 .747-.198" clip-rule="evenodd"/></svg>',metro_tram:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M6 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0M11 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path fill="currentColor" fill-rule="evenodd" d="M2.913 4.286 5.345 6H0v3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H0v4.958l1.043-.043.404-.81A2 2 0 0 1 3.237 18h6.527a2 2 0 0 1 1.789 1.105L13 22h10a1 1 0 0 0 1-1v-4q-3-1-3-3v-4a1 1 0 0 1 1-1h2v-.001c0-1.874-2-3-5-3h-8.345l2.432-1.713a.4.4 0 0 0 .01-.647L8.48.17a.8.8 0 0 0-.962 0L2.903 3.64a.4.4 0 0 0 .01.647M15 20a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1zM5 10v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m5.988-6.07L8 6.035 5.013 3.93 8 1.685z" clip-rule="evenodd"/></svg>',mobile_phones:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M18.247 3.796A25.2 25.2 0 0 0 12 3q-2.5 0-5 .51V1a1 1 0 0 0-2 0v16a7 7 0 1 0 14 0V4.765a1 1 0 0 0-.753-.969M7.11 6.546C7 6.76 7 7.04 7 7.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C7.76 13 8.04 13 8.6 13h6.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C17 12.24 17 11.96 17 11.4V7.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C16.24 6 15.96 6 15.4 6H8.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437M8.641 15h.718c.223 0 .304.023.385.067a.45.45 0 0 1 .19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 0 1-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 0 1-.19-.189C8.024 16.663 8 16.582 8 16.36v-.718c0-.223.023-.304.067-.385a.45.45 0 0 1 .189-.19c.081-.043.162-.066.385-.066m4.103.067c-.081-.044-.162-.067-.385-.067h-.718c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189c-.043.081-.066.162-.066.385v.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066h.718c.223 0 .304-.023.385-.067a.45.45 0 0 0 .19-.189c.043-.081.066-.162.066-.385v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19M8.641 18h.718c.223 0 .304.023.385.067a.45.45 0 0 1 .19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 0 1-.189.19c-.081.043-.162.066-.385.066H9a1 1 0 0 1-1-1v-.359c0-.223.023-.304.067-.385a.45.45 0 0 1 .189-.19c.081-.043.162-.066.385-.066m4.103.067c-.081-.044-.162-.067-.385-.067h-.718c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189c-.043.081-.066.162-.066.385v.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066h.718c.223 0 .304-.023.385-.067a.45.45 0 0 0 .19-.189c.043-.081.066-.162.066-.385v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19M14.641 15h.718c.223 0 .304.023.385.067a.45.45 0 0 1 .19.189c.043.081.066.162.066.385v.718c0 .223-.023.304-.067.385a.45.45 0 0 1-.189.19c-.081.043-.162.066-.385.066h-.718c-.223 0-.304-.023-.385-.067a.45.45 0 0 1-.19-.189c-.043-.081-.066-.162-.066-.385v-.718c0-.223.023-.304.067-.385a.45.45 0 0 1 .189-.19c.081-.043.162-.066.385-.066m.718 3h-.718c-.223 0-.304.023-.385.067a.45.45 0 0 0-.19.189c-.043.081-.066.162-.066.385v.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.19c.081.043.162.066.385.066H15a1 1 0 0 0 1-1v-.359c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.19c-.081-.043-.162-.066-.385-.066" clip-rule="evenodd"/></svg>',monument:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12.362 15.724a.5.5 0 0 1 .447-.724H14l1.5 3h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H19v4H5v-3.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h4.433l-.79-11.867A2 2 0 0 1 10.137 4h3.853a2 2 0 0 1 1.923 1.45l1.222 4.275a1 1 0 0 1-.74 1.25l.484 2.427a.5.5 0 0 1-.49.598H10a1 1 0 0 0 .73.963L10.934 18H13.5zM11.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m.5 17a1 1 0 0 0 1 1h6v-1z" clip-rule="evenodd"/></svg>',mosque:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M20.7 5c-.11 0-.2-.09-.197-.2.063-1.931.997-3.8.997-3.8s.934 1.869.997 3.8c.003.11-.087.2-.197.2zM3.517 6H1.483a.2.2 0 0 0-.142.341l.6.6-.894 14.306c.922.179 2.505.416 4.953.576V18.5a1.5 1.5 0 0 1 3 0v3.46q.484.014 1 .023V18a2 2 0 1 1 4 0v3.983q.516-.01 1-.023V18.5a1.5 1.5 0 0 1 3 0v3.323c2.448-.16 4.031-.397 4.953-.576l-.894-14.306.6-.6A.2.2 0 0 0 22.517 6h-2.034a.2.2 0 0 0-.142.341l.6.6L20.2 18.8l-.32-3.403C18.555 14.808 16.005 14 12 14s-6.554.808-7.881 1.397L3.8 18.8 3.059 6.941l.6-.6A.2.2 0 0 0 3.517 6M1.503 4.8c-.003.11.087.2.197.2h1.6c.11 0 .2-.09.197-.2C3.434 2.869 2.5 1 2.5 1s-.934 1.869-.997 3.8"/><path fill="currentColor" d="M4.554 13.336c-.227.43-.327.91-.372 1.394l-.01.095C5.378 13.984 7.706 13 12 13s6.623.984 7.827 1.825l-.009-.095c-.045-.485-.145-.963-.372-1.394-.687-1.302-2.638-4.081-6.86-4.32L12 8l-.587 1.016c-4.22.239-6.172 3.018-6.859 4.32"/></svg>',mountain:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12.045 21.974a.4.4 0 0 0 .141-.009l11.507-2.82a.4.4 0 0 0 .222-.63l-8.491-11.1a.4.4 0 0 0-.636 0L8.251 15.96l3.665-8.533-2.579-4.775a.4.4 0 0 0-.704 0L.05 18.545a.4.4 0 0 0 .256.578l11.599 2.842a.4.4 0 0 0 .14.01"/></svg>',museum:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m20.556 10 .42 7.578a.4.4 0 0 1-.399.422h-2.154a.4.4 0 0 1-.4-.422L18.444 10H18.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zm-5 0 .42 7.578a.4.4 0 0 1-.399.422h-2.154a.4.4 0 0 1-.4-.422L13.445 10H13.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zm-5 0 .42 7.578a.4.4 0 0 1-.399.422H8.423a.4.4 0 0 1-.4-.422L8.444 10H8.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zm-5 0 .42 7.578a.4.4 0 0 1-.399.422H3.423a.4.4 0 0 1-.4-.422L3.444 10H3.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zM1 20.5v-1.1c0-.22.18-.4.4-.4h21.2c.22 0 .4.18.4.4v1.1a.5.5 0 0 0 .5.5h.3c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h.3a.5.5 0 0 0 .5-.5m.234-15.607 10.6-4.818a.4.4 0 0 1 .332 0l10.6 4.818a.4.4 0 0 1 .234.365V6.6a.4.4 0 0 1-.4.4H1.4a.4.4 0 0 1-.4-.4V5.258a.4.4 0 0 1 .234-.365M12 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/></svg>',music_store:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M21.546.04a4.5 4.5 0 0 1 1.456.96q.604.603.958 1.452a.52.52 0 0 1-.168.615l-2.435 1.829a.52.52 0 0 1-.449.086 3 3 0 0 1-.353-.118l-5.077 5.078-1.415-1.414 5.076-5.075a3 3 0 0 1-.12-.36.52.52 0 0 1 .085-.448L20.93.208a.52.52 0 0 1 .616-.168M11.235 14.185a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414"/><path fill="currentColor" fill-rule="evenodd" d="M13.892 10.108c2.1 2.1 2.764 4.238 1.382 5.62-.807.807-1.262 1.023-1.64 1.203-.27.128-.5.237-.792.528-.63.63-.764 1.33-.912 2.101-.18.944-.382 1.995-1.538 3.15-1.751 1.751-4.202 2.101-7.703-1.4-3.5-3.5-3.15-5.951-1.4-7.701 1.156-1.157 2.207-1.358 3.15-1.54.772-.147 1.472-.282 2.101-.911.292-.291.401-.522.53-.791.179-.379.395-.834 1.202-1.641 1.382-1.382 3.52-.719 5.62 1.382m-1.95 4.784a2 2 0 1 1-2.828-2.828 2 2 0 0 1 2.828 2.828m-7.92.848a.2.2 0 0 1 .283 0l3.96 3.96a.2.2 0 0 1 0 .283l-.424.424a.2.2 0 0 1-.283 0l-3.96-3.96a.2.2 0 0 1 0-.282z" clip-rule="evenodd"/></svg>',musicclub:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M20.995 16c.09 1.45-1.1 2.996-2.942 3.673-2.13.784-4.33.11-4.91-1.504-.583-1.615.673-3.559 2.804-4.342 1.072-.394 2.161-.42 3.053-.142V6.429L9 8.57V19h-.005c.09 1.45-1.1 2.996-2.942 3.673-2.13.784-4.33.11-4.91-1.504-.582-1.615.673-3.559 2.804-4.342 1.072-.394 2.161-.42 3.053-.142V3.572a1 1 0 0 1 .79-.978l12-2.572A1 1 0 0 1 21 1v1.763-.881V16z" clip-rule="evenodd"/></svg>',nail_studio:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M15 14.5a1.5 1.5 0 0 1-1.5 1.5 3 3 0 1 0 3 3v-8.5a.5.5 0 0 1 1 0V19a3 3 0 1 0 3-3 1.5 1.5 0 0 1-1.5-1.5V7c0-2-1.5-6-2-6s-2 4-2 6zm-1.5 6.1a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m7 0a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2M17.8 7a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0M0 14.5 2 13h5l2 1.5c0 3.925-1.018 6.067-1.602 6.973-.084.13-.126.196-.242.293a1.3 1.3 0 0 1-.348.19c-.144.044-.253.044-.47.044H2.662c-.218 0-.327 0-.471-.044a1.3 1.3 0 0 1-.348-.19c-.116-.097-.158-.163-.242-.293C1.018 20.567 0 18.425 0 14.5M1.5 17H4v2h1v-2h2.5c0 1.5-.5 3.5-3 3.5s-3-2-3-3.5" clip-rule="evenodd"/><path fill="currentColor" d="M3.048 2.485c-.116.192-.141.447-.192.956L2 12h5l-.856-8.56c-.05-.508-.076-.763-.192-.955a1 1 0 0 0-.43-.39C5.32 2 5.064 2 4.552 2h-.104c-.512 0-.767 0-.97.096a1 1 0 0 0-.43.389"/></svg>',news:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M19 18.5V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h17.5a2.5 2.5 0 0 1-2.5-2.5M5 6.32c0-.112 0-.168.022-.21a.2.2 0 0 1 .087-.088C5.152 6 5.208 6 5.32 6h10.36c.112 0 .168 0 .21.022a.2.2 0 0 1 .088.087c.022.043.022.099.022.211v3.36c0 .112 0 .168-.022.21a.2.2 0 0 1-.087.088c-.043.022-.099.022-.211.022H5.32c-.112 0-.168 0-.21-.022a.2.2 0 0 1-.088-.087C5 9.848 5 9.792 5 9.68zm.022 5.79C5 12.151 5 12.207 5 12.32v5.36c0 .112 0 .168.022.21a.2.2 0 0 0 .087.088c.043.022.099.022.211.022h3.36c.112 0 .168 0 .21-.022a.2.2 0 0 0 .088-.087C9 17.848 9 17.792 9 17.68v-5.36c0-.112 0-.168-.022-.21a.2.2 0 0 0-.087-.088C8.848 12 8.792 12 8.68 12H5.32c-.112 0-.168 0-.21.022a.2.2 0 0 0-.088.087M11 17.32c0-.112 0-.168.022-.21a.2.2 0 0 1 .087-.088c.043-.022.099-.022.211-.022h2.36c.112 0 .168 0 .21.022a.2.2 0 0 1 .088.087c.022.043.022.099.022.211v.36c0 .112 0 .168-.022.21a.2.2 0 0 1-.087.088c-.043.022-.099.022-.211.022h-2.36c-.112 0-.168 0-.21-.022a.2.2 0 0 1-.088-.087C11 17.848 11 17.792 11 17.68zm.022-2.71c-.022.042-.022.098-.022.21v.36c0 .112 0 .168.022.21a.2.2 0 0 0 .087.088c.043.022.099.022.211.022h4.36c.112 0 .168 0 .21-.022a.2.2 0 0 0 .088-.087c.022-.043.022-.099.022-.211v-.36c0-.112 0-.168-.022-.21a.2.2 0 0 0-.087-.088c-.043-.022-.099-.022-.211-.022h-4.36c-.112 0-.168 0-.21.022a.2.2 0 0 0-.088.087M11 12.32c0-.112 0-.168.022-.21a.2.2 0 0 1 .087-.088c.043-.022.099-.022.211-.022h4.36c.112 0 .168 0 .21.022a.2.2 0 0 1 .088.087c.022.043.022.099.022.211v.36c0 .112 0 .168-.022.21a.2.2 0 0 1-.087.088c-.043.022-.099.022-.211.022h-4.36c-.112 0-.168 0-.21-.022a.2.2 0 0 1-.088-.087C11 12.848 11 12.792 11 12.68z" clip-rule="evenodd"/><path fill="currentColor" d="M21.571 10H20v8.5a1.5 1.5 0 0 0 3 0v-7.071c0-.4 0-.599-.056-.76a1 1 0 0 0-.614-.613C22.17 10 21.97 10 21.571 10"/></svg>',night_club:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M6.853 3.389q.877.045 1.752.076L7.095.471A.86.86 0 0 0 6.33 0H5.143z"/><path fill="currentColor" fill-rule="evenodd" d="M10.939 20.303 6.577 21.55a.796.796 0 0 0-.577.765c0 .328.2.62.511.724C7.48 23.36 9.691 24 12 24s4.52-.64 5.489-.962a.755.755 0 0 0 .511-.724.796.796 0 0 0-.577-.765l-4.362-1.246.095-4.152a4.67 4.67 0 0 1 1.464-3.29L22.642 5.3c.23-.22.36-.526.358-.893a.45.45 0 0 0-.494-.404A104 104 0 0 1 1.451 4 .45.45 0 0 0 1 4.454c0 .319.13.624.36.845l8.02 7.562a4.67 4.67 0 0 1 1.464 3.29zM12 8.225q-2.44 0-5.544-.811L5.326 6.33a106 106 0 0 0 13.35 0l-5.254 5.043a12.6 12.6 0 0 0 1.503-3.4A18.5 18.5 0 0 1 12 8.225" clip-rule="evenodd"/></svg>',office:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M24 12v-2c-4 3-8.08 3.5-12 3.5S4 13 0 10v2c4.148 1.66 6.865 2.286 10 2.451V16a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.549c3.135-.165 5.852-.792 10-2.451M1 6h22a1 1 0 0 1 1 1v12.306c0 .977-.705 1.809-1.674 1.94-2.2.295-6.263.754-10.326.754s-8.126-.459-10.326-.755A1.94 1.94 0 0 1 0 19.305V7a1 1 0 0 1 1-1m14.5-1V3.5A.5.5 0 0 0 15 3H9a.5.5 0 0 0-.5.5V5H7V3.5A2.5 2.5 0 0 1 9.5 1h5A2.5 2.5 0 0 1 17 3.5V5z" clip-rule="evenodd"/></svg>',office_service:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M24 12v-2c-4 3-8.08 3.5-12 3.5S4 13 0 10v2c4.148 1.66 6.865 2.286 10 2.451V16a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.549c3.135-.165 5.852-.792 10-2.451M1 6h22a1 1 0 0 1 1 1v12.306c0 .977-.705 1.809-1.674 1.94-2.2.295-6.263.754-10.326.754s-8.126-.459-10.326-.755A1.94 1.94 0 0 1 0 19.305V7a1 1 0 0 1 1-1m14.5-1V3.5A.5.5 0 0 0 15 3H9a.5.5 0 0 0-.5.5V5H7V3.5A2.5 2.5 0 0 1 9.5 1h5A2.5 2.5 0 0 1 17 3.5V5z" clip-rule="evenodd"/></svg>',online_store:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m15.524 7.783-.089.451c-.528-.892-1.295-1.585-2.254-1.934-2.595-.944-5.618.98-6.751 4.093s.051 6.404 2.646 7.348c2.048.746 4.362-.192 5.804-2.151C15.608 16.965 17.132 18 19 18c2.906 0 5-2 5-6 0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12a1 1 0 1 0 0-2c-5.523 0-9-4.477-9-10S6.477 2 12 2s9 4.477 9 10c0 0 0 4-2 4-1.246 0-2.412-.985-2.5-3-.053-1.219.976-4.783.976-4.783a1 1 0 1 0-1.952-.434m-1.896 5.32c-.78 2.144-2.394 3.295-3.868 2.76-1.473-.537-1.464-3.116-.684-5.26S11.823 7.853 13 8.5s1.409 2.46.628 4.603" clip-rule="evenodd"/></svg>',opticial_store:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M4.417 6q-.128 0-.195.005L2.85 10.417C3.71 9.825 4.806 9.5 6 9.5c1.812 0 3.4.749 4.276 2.044A3 3 0 0 1 12 11c.642 0 1.236.201 1.724.544C14.6 10.249 16.188 9.5 18 9.5c1.194 0 2.29.325 3.15.917l-1.371-4.412A4 4 0 0 0 19.583 6H19.5a.5.5 0 0 0-.5.5 1 1 0 0 1-2 0A2.5 2.5 0 0 1 19.5 4h.091c1.037.004 1.723.28 2.063 1.302l2.3 7.4A1 1 0 0 1 23 14a5 5 0 0 1-10 0 1 1 0 1 0-2 0 5 5 0 0 1-10 0 1 1 0 0 1-.955-1.297l2.307-7.42C2.686 4.28 3.372 4.004 4.41 4H4.5A2.5 2.5 0 0 1 7 6.5a1 1 0 1 1-2 0 .5.5 0 0 0-.5-.5zM6 17a3 3 0 0 0 3-3c0-1.657-1.343-2-3-2s-3 .343-3 2a3 3 0 0 0 3 3m15-3a3 3 0 1 1-6 0c0-1.657 1.343-2 3-2s3 .343 3 2" clip-rule="evenodd"/></svg>',orthodox_church:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M10.5 0h3v2.7H16v2.6h-2.5v3.2H20v3h-6.5v4.563L16 17v3l-2.5-.937V24h-3v-6.062L8 17v-3l2.5.938V11.5H4v-3h6.5V5.3H8V2.7h2.5z"/></svg>',park:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M17.83 2.84a5.5 5.5 0 0 0-3.606 2.001 5 5 0 1 1 1.848 9.073l-3.165 5.408a.4.4 0 0 1-.043.06l.124 4.206a.4.4 0 0 1-.4.412h-1.176a.4.4 0 0 1-.4-.412l.234-7.968a7.3 7.3 0 0 0 1.464-1.493l.091 3.106 2.808-3.43a5 5 0 0 1-2.497-1.66 6 6 0 1 1-3.06-8.784 4.001 4.001 0 0 1 7.777-.519"/></svg>',pawnshop:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M3 8c0 3.2 1.79 5 4 5s4-1.8 4-5-1.79-5-4-5-4 1.8-4 5m6 0c0 2.009-.844 3-2 3s-2-.991-2-3 .844-3 2-3 2 .991 2 3" clip-rule="evenodd"/><path fill="currentColor" d="m16.2 3 1.724 1.013L7.924 21 6.2 19.987z"/><path fill="currentColor" fill-rule="evenodd" d="M17 21c-2.21 0-4-1.8-4-5s1.79-5 4-5 4 1.8 4 5-1.79 5-4 5m0-2c1.156 0 2-.991 2-3s-.844-3-2-3-2 .991-2 3 .844 3 2 3" clip-rule="evenodd"/></svg>',pedestrian:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M15 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0M15.687 16.177a.9.9 0 0 1 .143.29l1.82 6.312a.957.957 0 0 1-.67 1.185.98.98 0 0 1-1.182-.595l-2.174-5.884-3.66-3.61c-.328-.326-.457-.773-.377-1.24l.78-4.39-1.757.514-1.549 3.552a.82.82 0 0 1-1.065.426.8.8 0 0 1-.444-1.02l1.563-4.012a.83.83 0 0 1 .402-.442l.099-.05 3.911-1.97.027-.01.02-.008c.231-.12.502-.172.779-.118.35.067.651.265.8.566s.2.856.2.856c.06.34.08.677.102 1.013q.013.223.031.448c.031.486.03.967.019 1.446-.027.957-.09 1.91-.22 2.853l-.07.558 2.383 3.21z"/><path fill="currentColor" d="m14.755 8.337 3.436 3.036a.79.79 0 0 1 .134 1.124.823.823 0 0 1-1.115.15l-2.766-1.975.067-.383.095-.542.034-.194.032-.188.023-.308.032-.386.014-.16zM9.613 15.199c.271.267.574.54.876.812.483.435.977.852 1.41 1.192-.184.384-.491 1.015-.491 1.015L8.106 23.54a.984.984 0 0 1-1.34.32.956.956 0 0 1-.36-1.257l2.751-5.321.037-.368c.03-.301.06-.602.101-.901l.143-.98q.043.04.084.08z"/></svg>',perfume_shop:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M11 3.8V5H9.5a.5.5 0 0 0-.5.5v2.075c-3.496 1.372-6 4.985-6 8.502C3 21.537 7.03 22 12 22s9-.462 9-5.923c0-3.517-2.504-7.13-6-8.502V5.5a.5.5 0 0 0-.5-.5H13V3.8c.598-.26 1-.745 1-1.3s-.402-1.04-1-1.3V1a1 1 0 1 0-2 0v.2c-.598.26-1 .745-1 1.3s.402 1.04 1 1.3M12 9c-2.555 0-4.953 1.709-6.169 3.954 2.766-1.132 5.143-.53 7.303.015 1.833.464 3.51.888 5.137.18C17.09 10.809 14.629 9 12 9" clip-rule="evenodd"/><path fill="currentColor" d="m16.176 1.765-1.346-.113c.11.262.17.546.17.848s-.06.586-.17.848l1.346-.113C16.678 4.257 18.2 5 20 5c2.21 0 4-1.12 4-2.5S22.21 0 20 0c-1.8 0-3.322.743-3.824 1.765"/></svg>',pet_playground:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path fill="currentColor" d="m16.61.088 1.278 2.043 2.39.341a.5.5 0 0 1 .346.218l.21.314h2.93a.2.2 0 0 1 .197.233l-.109.653a3.03 3.03 0 0 1-2.463 2.48c-.45.08-.944.169-1.453.263a4 4 0 0 0-.551.247c-.62.33-.92 1.007-.983 1.706l-.03.336a9.5 9.5 0 0 1-2.952-1.478 8.4 8.4 0 0 1-1.161-1.05c.145-.287.278-.588.41-.89.236-.533.471-1.068.778-1.523-.254-2.487.55-3.582.899-3.933.08-.08.203-.055.263.04M13.438 7.563c-.303.277-1.676 1.441-3.438 1.441H5c-2.684 0-3.016 4.118-3.025 6.037L.168 17.752a1 1 0 0 0-.168.555v3.697a1 1 0 0 0 1 1h1.909c.05 0 .091-.04.091-.091a2.28 2.28 0 0 0-.912-1.824c.237-1.365.94-3.319 2.912-3.939 1.46-.617 1.983-1.697 2.265-2.146h.664c1.326 0 2.581.574 3.745 1.21.278.152.583.297.91.42l1.242 5.587a1 1 0 0 0 .976.783h2.121a.077.077 0 0 0 .077-.077c0-.757-.372-1.458-.98-1.885.062-1.492.249-3.593.78-5.429.55-.759.895-1.646 1.067-2.166q.066-.201.106-.406l.027-.037-.012-.045a5 5 0 0 0 .054-.417l.2-2.199q-2.059-.578-3.662-1.779a10 10 0 0 1-1.142-1.001M.412 3.147a.18.18 0 0 1 .33-.065C1.37 4.036 3 6.706 3 8.725-.351 8.725.158 4.513.412 3.147"/></svg>',petshop:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 11.054q2.046 0 2.745 1.74a6 6 0 0 0 2.834 3.105q2.19 1.12 2.19 3.185a3.93 3.93 0 0 1-5.646 3.538l-.051-.025a4.75 4.75 0 0 0-4.144 0l-.05.025a3.93 3.93 0 0 1-5.646-3.538q0-2.064 2.19-3.185a6 6 0 0 0 2.833-3.105q.699-1.74 2.745-1.74M8.87 9.047c-2.03.011-2.711-1.153-3.048-3.064-.337-1.91.649-4.72 2.057-4.968 1.409-.248 3.015 2.126 3.043 4.07.029 1.942-.021 3.952-2.052 3.962m-3.637 5.017c-1.343.49-2.776.2-3.44-1.622-.663-1.824-.111-3.698 1.233-4.187s2.97.592 3.634 2.415-.083 2.905-1.427 3.394m9.897-5.017c-2.03-.01-2.08-2.02-2.052-3.963S14.712.767 16.12 1.015c1.408.249 2.394 3.058 2.057 4.968S17.16 9.058 15.13 9.047m3.637 5.017c-1.344-.489-2.091-1.57-1.427-3.394.663-1.823 2.29-2.904 3.634-2.415s1.896 2.363 1.232 4.187c-.663 1.823-2.096 2.111-3.44 1.622" clip-rule="evenodd"/></svg>',photo:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M19 14.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/><path fill="currentColor" fill-rule="evenodd" d="m18.817 6.088.092.018Q21.969 6.731 24 8v10a3 3 0 0 1-3 3h-2.335A7.96 7.96 0 0 1 14 22.5 7.96 7.96 0 0 1 9.335 21H3a3 3 0 0 1-3-3V8q3.324-2.078 9.413-2.429L11 2h6zM14 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13M4.001 8.5A2 2 0 0 0 2 10.501a.4.4 0 0 0 .487.39l3.361-.746a.83.83 0 0 0 .652-.813V9.25a.75.75 0 0 0-.75-.75zm17.499 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/><path fill="currentColor" d="M20.466 4.578a.4.4 0 0 0-.466.394V5.5l3 1V5.339a.4.4 0 0 0-.334-.395z"/></svg>',picnic:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M3.564 16a.2.2 0 0 0 .186-.127l.626-1.6A.2.2 0 0 0 4.19 14H.5a.5.5 0 0 0-.5.5v.293a.5.5 0 0 0 .146.353l.708.707a.5.5 0 0 0 .353.147zM20.25 15.873a.2.2 0 0 0 .186.127h2.357a.5.5 0 0 0 .353-.146l.707-.708a.5.5 0 0 0 .147-.353V14.5a.5.5 0 0 0-.5-.5h-3.69a.2.2 0 0 0-.186.273zM4 8.5c0-.471 0-.707.146-.854C4.293 7.5 4.53 7.5 5 7.5h14c.471 0 .707 0 .854.146.146.147.146.383.146.854V9c0 .471 0 .707-.146.854C19.707 10 19.47 10 19 10H5c-.471 0-.707 0-.854-.146C4 9.707 4 9.47 4 9zM7 6.35v-.949q0-.143.021-.268.022-.124.068-.24a1.5 1.5 0 0 1 .12-.232l.091-.145c.054-.086.07-.114.086-.146a.5.5 0 0 0 .036-.099 2 2 0 0 0 .033-.171l.201-1.39.002-.02v-.515c0-.097.074-.175.164-.175h.844c.09 0 .164.078.164.175v.514q0 .011.002.022L9.045 4.1c.017.104.023.136.033.171.009.036.02.066.036.099.016.032.032.06.086.146l.09.145q.075.117.121.233.046.115.068.24.021.123.021.267v.949a.15.15 0 0 1-.15.15h-2.2A.15.15 0 0 1 7 6.35M10.5 6.35V3.401q0-.143.021-.268.022-.124.068-.24.045-.114.12-.232l.091-.145c.054-.086.07-.114.086-.146a.5.5 0 0 0 .036-.099c.01-.035.016-.067.032-.171l.202-1.39.002-.02V.174c0-.097.074-.175.164-.175h.844c.09 0 .164.078.164.175v.514q0 .011.002.022l.213 1.389c.017.104.023.136.033.171.009.036.02.066.036.099.016.032.032.06.086.146l.09.145q.075.117.121.233.046.115.068.24.021.123.021.267V6.35a.15.15 0 0 1-.15.15h-2.2a.15.15 0 0 1-.15-.15M17 6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v.25c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25z"/><path fill="currentColor" fill-rule="evenodd" d="M8.843 11.408a.3.3 0 0 0-.28-.408H7.196a.5.5 0 0 0-.467.32l-3.572 9.272a.3.3 0 0 0 .28.408h1.367a.5.5 0 0 0 .467-.32L7.074 16h9.852l1.802 4.68a.5.5 0 0 0 .467.32h1.367a.3.3 0 0 0 .28-.408l-3.571-9.272a.5.5 0 0 0-.467-.32h-1.367a.3.3 0 0 0-.28.408L16.156 14H7.844zM7 15a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m10.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" clip-rule="evenodd"/></svg>',pier:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M13.109 7.844A4.002 4.002 0 0 0 12 0a4 4 0 0 0-1.108 7.844l-.142 2.406-3.428.686a.4.4 0 0 0-.322.392v.344a.4.4 0 0 0 .322.392l4.6.92q.078.015.156 0l4.6-.92a.4.4 0 0 0 .322-.392v-.344a.4.4 0 0 0-.322-.392l-3.428-.686zM12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" clip-rule="evenodd"/><path fill="currentColor" d="M13.482 14.194a10.4 10.4 0 0 1-2.964 0l-.397 6.74c-2.581-.199-4.801-.913-6.473-2.906l.997-1.495A.343.343 0 0 0 4.36 16H1.847c-.63 0-1.038.626-.756 1.158C3.485 21.687 7.155 24 12 24s8.515-2.313 10.91-6.842c.28-.532-.128-1.158-.757-1.158H19.64a.343.343 0 0 0-.285.533l.996 1.495c-1.672 1.993-3.892 2.707-6.473 2.907z"/></svg>',pizzeria:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.266 0C16.956 0 24 7.039 24 15.722c0 1.163-.843 2.13-1.953 2.322l-18.623 3.93a1.18 1.18 0 0 1-1.398-1.395L5.939 1.966q.017-.105.045-.21l.002-.008.013-.044A2.36 2.36 0 0 1 8.266 0M11.9 18.142a3 3 0 1 1 4.888-1.03zm-6.045-6.058-.918 4.367a2.5 2.5 0 1 0 .918-4.367M10.75 11a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5M7.725 3.19c6.72 1.054 12.029 6.358 13.084 13.073l.896-.19a.36.36 0 0 0 .295-.351C22 8.143 15.852 2 8.266 2c-.152 0-.287.096-.351.278l-.02.1z" clip-rule="evenodd"/></svg>',planetarium:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m20.556 10 .42 7.578a.4.4 0 0 1-.399.422h-2.154a.4.4 0 0 1-.4-.422L18.444 10H18.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zm-5 0 .42 7.578a.4.4 0 0 1-.399.422h-2.154a.4.4 0 0 1-.4-.422L13.445 10H13.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zm-5 0 .42 7.578a.4.4 0 0 1-.399.422H8.423a.4.4 0 0 1-.4-.422L8.444 10H8.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zm-5 0 .42 7.578a.4.4 0 0 1-.399.422H3.423a.4.4 0 0 1-.4-.422L3.444 10H3.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zM1 20.5v-1.1c0-.22.18-.4.4-.4h21.2c.22 0 .4.18.4.4v1.1a.5.5 0 0 0 .5.5h.3c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h.3a.5.5 0 0 0 .5-.5m.234-15.607 10.6-4.818a.4.4 0 0 1 .332 0l10.6 4.818a.4.4 0 0 1 .234.365V6.6a.4.4 0 0 1-.4.4H1.4a.4.4 0 0 1-.4-.4V5.258a.4.4 0 0 1 .234-.365M12 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/></svg>',playground:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M17.27 3.632a2.5 2.5 0 1 1 .21.34 2.5 2.5 0 0 0-.21-.34m-.987 3.798.176-.097q.162-.09.31-.204L16.995 10h4.057q.065 0 .128.01a.87.87 0 0 1 .734.99 1.255 1.255 0 0 1-1.158 1.067l-4.679.31a1.05 1.05 0 0 1-.96-.574l-.064-.125-1.21-2.696zm-6.47 12.053-4.458 4.4a.4.4 0 0 1-.565-.003l-.465-.468a1.123 1.123 0 0 1-.04-1.54l2.337-2.614zm6.283-15.618a1.53 1.53 0 0 1-.122 2.593l-4.989 3.287a.5.5 0 0 0-.16.66l3.377 6.086.067.104a1.372 1.372 0 0 1-1.22 2.114l-9.677-.683A.4.4 0 0 1 3 17.627V17a1 1 0 0 1 1-1h5.997l-4.535-5.705a1.908 1.908 0 0 1 .72-2.97l6.055-2.706L9.8 2.286l-5.823.38A.826.826 0 0 1 3.1 1.9.93.93 0 0 1 3.897.874l6.1-.856c.282-.053.558.013.778.164z" clip-rule="evenodd"/></svg>',police:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 0c3.314 0 6 1.343 6 3 0 .907-.805 1.72-2.076 2.27q.075.588.076 1.192C16 9.775 14.21 12 12 12S8 9.775 8 6.462q0-.604.076-1.192C6.805 4.72 6 3.907 6 3c0-1.657 2.686-3 6-3m0 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/><path fill="currentColor" d="M6.232 14a3 3 0 0 0-2.873 2.138l-1.587 5.287A2 2 0 0 0 3.688 24H9L7 14zM20.312 24H15l2-10h.768a3 3 0 0 1 2.873 2.138l1.587 5.287A2 2 0 0 1 20.312 24M11.567 16a.4.4 0 0 0-.399.365l-.63 7.2a.4.4 0 0 0 .399.435h2.127a.4.4 0 0 0 .398-.435l-.63-7.2a.4.4 0 0 0-.399-.365z"/></svg>',police_post:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 0c3.314 0 6 1.343 6 3 0 .907-.805 1.72-2.076 2.27q.075.588.076 1.192C16 9.775 14.21 12 12 12S8 9.775 8 6.462q0-.604.076-1.192C6.805 4.72 6 3.907 6 3c0-1.657 2.686-3 6-3m0 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/><path fill="currentColor" d="M6.232 14a3 3 0 0 0-2.873 2.138l-1.587 5.287A2 2 0 0 0 3.688 24H9L7 14zM20.312 24H15l2-10h.768a3 3 0 0 1 2.873 2.138l1.587 5.287A2 2 0 0 1 20.312 24M11.567 16a.4.4 0 0 0-.399.365l-.63 7.2a.4.4 0 0 0 .399.435h2.127a.4.4 0 0 0 .398-.435l-.63-7.2a.4.4 0 0 0-.399-.365z"/></svg>',pool_hall:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M14.5 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/><path fill="currentColor" fill-rule="evenodd" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11m0-4a4.5 4.5 0 0 0 2.857-7.977 3.5 3.5 0 1 0-5.713 0A4.5 4.5 0 0 0 12 19" clip-rule="evenodd"/></svg>',port:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13.07.418 13.7 4h-3.4l.63-3.582A.5.5 0 0 1 11.424 0h1.152a.5.5 0 0 1 .494.418M3.944 8.45 3.5 12.6l7.816-2.551c.442-.161.926-.161 1.368 0L20.5 12.6l-.444-4.15a.5.5 0 0 0-.498-.45H15.63a.2.2 0 0 1-.05-.394l2.748-.686-.25-1.502A.5.5 0 0 0 17.584 5H6.416a.5.5 0 0 0-.494.418l-.25 1.502 2.747.686A.2.2 0 0 1 8.371 8H4.442a.5.5 0 0 0-.498.45"/><path fill="currentColor" fill-rule="evenodd" d="m.626 15.563 10.986-4.487c.248-.101.528-.101.776 0l10.986 4.486a.993.993 0 0 1 .476 1.446l-3.665 5.875a1 1 0 0 1-.22.249Q18.89 24 16.055 24c-1.52 0-2.788-.5-4.055-.999s-2.535-.998-4.056-.998q-2.177 0-3.315.511a1.02 1.02 0 0 1-1.285-.386L.15 17.008a.99.99 0 0 1 .476-1.445M15 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/></svg>',post_festival:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m2.306 9.05 5.37 5.16c.39.374.434 1.03.1 1.467a1 1 0 0 1-.1.113l-5.37 5.16a.172.172 0 0 1-.261-.023.22.22 0 0 1-.045-.135V9.208C2 9.093 2.083 9 2.186 9c.044 0 .087.018.12.05m19.388 0a.17.17 0 0 1 .12-.05c.103 0 .186.093.186.208v11.584c0 .05-.016.098-.045.135a.172.172 0 0 1-.261.023l-5.37-5.16a1 1 0 0 1-.1-.113c-.334-.436-.29-1.093.1-1.467zm-.768 12.594a.201.201 0 0 1-.123.356H3.197a.2.2 0 0 1-.154-.075.2.2 0 0 1 .031-.281l6.414-5.206c.35-.283.784-.438 1.232-.438h2.56c.448 0 .882.155 1.232.438zM13.233.47l8.193 7.146c.085.074.099.21.03.302a.2.2 0 0 1-.153.081H2.697c-.109 0-.197-.096-.197-.215 0-.065.027-.127.074-.168L10.768.471a1.847 1.847 0 0 1 2.464 0M7.5 10h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m2 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1" clip-rule="evenodd"/></svg>',post_office:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m2.306 9.05 5.37 5.16c.39.374.434 1.03.1 1.467a1 1 0 0 1-.1.113l-5.37 5.16a.172.172 0 0 1-.261-.023.22.22 0 0 1-.045-.135V9.208C2 9.093 2.083 9 2.186 9c.044 0 .087.018.12.05m19.388 0a.17.17 0 0 1 .12-.05c.103 0 .186.093.186.208v11.584c0 .05-.016.098-.045.135a.172.172 0 0 1-.261.023l-5.37-5.16a1 1 0 0 1-.1-.113c-.334-.436-.29-1.093.1-1.467zm-.768 12.594a.201.201 0 0 1-.123.356H3.197a.2.2 0 0 1-.154-.075.2.2 0 0 1 .031-.281l6.414-5.206c.35-.283.784-.438 1.232-.438h2.56c.448 0 .882.155 1.232.438zM13.233.47l8.193 7.146c.085.074.099.21.03.302a.2.2 0 0 1-.153.081H2.697c-.109 0-.197-.096-.197-.215 0-.065.027-.127.074-.168L10.768.471a1.847 1.847 0 0 1 2.464 0M7.5 10h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m2 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1" clip-rule="evenodd"/></svg>',printing_services:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M18 3v4h1V2H5v5h1V3zM8 16h8v1H8zM12 18H8v1h4z"/><path fill="currentColor" fill-rule="evenodd" d="M4 8a4 4 0 0 0-4 4v5a2 2 0 0 0 2 2h3v3h14v-3h3a2 2 0 0 0 2-2v-5a4 4 0 0 0-4-4zm16.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 15H6v6h12z" clip-rule="evenodd"/></svg>',protestant_church:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13.5 0h-3v6.5H4v3h6.5V24h3V9.5H20v-3h-6.5z"/></svg>',province:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 2Q7 2 2 4v9.476a6.77 6.77 0 0 0 2.887 5.545L12 24l7.113-4.979A6.77 6.77 0 0 0 22 13.476V4q-5-2-10-2m0 7V4c2.658 0 5.322.46 8 1.388v8.088a4.77 4.77 0 0 1-2.034 3.907L12 21.559V15l-3-3z" clip-rule="evenodd"/></svg>',pub:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M6.073 11Q4.806 7.324 5.034 1.957a1 1 0 0 1 1-.957h11.91a1 1 0 0 1 .998.943q.309 5.376-1.051 9.057-2.337 5.692-1.126 10.485a1 1 0 0 1-.278.968Q14.87 24 11.982 24t-4.505-1.547a1 1 0 0 1-.279-.968Q8.408 16.693 6.072 11m2.986 10.433c.699.503 1.653.767 2.923.767s2.225-.264 2.923-.767a15 15 0 0 1-.292-1.927Q13.6 20 11.944 20a7.8 7.8 0 0 1-1.656-.158q.415-4.982-1.488-9.552-.682-1.95-.951-4.26c1.842-.296 3.414.297 4.868.845 1.478.557 2.834 1.069 4.23.556q.322-2.081.234-4.631H6.809c-.067 3.004.254 5.527.95 7.567 1.602 3.926 2.048 7.627 1.3 11.066" clip-rule="evenodd"/></svg>',racing:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2.501 0a.5.5 0 0 0-.5.523l.98 21.096A.4.4 0 0 0 3.38 22H4.6a.4.4 0 0 0 .398-.437L3.04.453A.5.5 0 0 0 2.542 0z"/><path fill="currentColor" fill-rule="evenodd" d="M5.375 15 5.2 13.6H10V8h4.586l.8-5.6H10V8H4.5l-.875-7h11.991a1.2 1.2 0 0 1 1.188 1.37l-.09.63h3.963a.4.4 0 0 1 .39.316l2.83 13.2a.4.4 0 0 1-.392.484h-8.121a1.2 1.2 0 0 1-1.188-1.37l.09-.63zm11.04-5h4.653l1.2 5.6h-6.654z" clip-rule="evenodd"/></svg>',railway_entrance:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect width="12" height="12" x="6" y="6" fill="currentColor" rx="3"/></svg>',railway_station:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M0 22h24v2H0z"/><path fill="currentColor" fill-rule="evenodd" d="M16.05 2H0v3h3.4a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H0v7h9.343a4 4 0 0 1 2.829 1.172L13 20h9.232a.6.6 0 0 0 .582-.745L22 16v-3.222l-7.217-1.604a1 1 0 0 1-.783-.976V6a1 1 0 0 1 1-1h4.333l-.541-1.218A3 3 0 0 0 16.05 2M6.6 5a.6.6 0 0 0-.6.6v8.8a.6.6 0 0 0 .6.6h3.8a.6.6 0 0 0 .6-.6V5.6a.6.6 0 0 0-.6-.6z" clip-rule="evenodd"/></svg>',railway_terminal:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.5 21h7l-.355-.71a.2.2 0 0 1 .179-.29H16.9a.2.2 0 0 1 .16.08l2.7 3.6a.2.2 0 0 1-.16.32h-2.476a.2.2 0 0 1-.18-.11L16 22H8l-.945 1.89a.2.2 0 0 1-.179.11H4.4a.2.2 0 0 1-.16-.32l2.7-3.6A.2.2 0 0 1 7.1 20h1.576a.2.2 0 0 1 .18.29zM14.138 17.276a.5.5 0 0 0-.447-.276h-3.382a.5.5 0 0 0-.447.276l-.827 1.654a38 38 0 0 1-2.506-.205A4 4 0 0 1 3 14.752V5.166a3 3 0 0 1 2.056-2.848l2.317-.768A3 3 0 0 1 10 0h4c1.123 0 2.102.617 2.616 1.53l2.368.794a3 3 0 0 1 2.046 2.802l.07 4.834v.08l-.06 4.758a4 4 0 0 1-3.522 3.921q-1.17.14-2.553.211zM5.997 4.596c-1.12.224-1.822 1.278-1.606 2.36l.196 2.813a2 2 0 0 0 1.756 1.847Q9.536 12 12 12t5.657-.384a2 2 0 0 0 1.756-1.847l.196-2.812.007-.037a2 2 0 0 0-1.613-2.323Q14.703 4 12 4t-6.003.597M10.118 1A.69.69 0 0 0 9.5 2l.362.724a.5.5 0 0 0 .447.276h3.382a.5.5 0 0 0 .447-.276L14.5 2a.69.69 0 0 0-.618-1zM6 13a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1.613a1 1 0 0 0 .948-1.316l-.333-1A1 1 0 0 0 7.279 13zm12 0h-1.28a1 1 0 0 0-.948.684l-.333 1A1 1 0 0 0 16.387 16H17.5a1.5 1.5 0 0 0 1.5-1.5V14a1 1 0 0 0-1-1" clip-rule="evenodd"/></svg>',restaurants:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M20.6 10Q19 13 16 13t-4.6-3l.376-9.4A.624.624 0 0 1 12.4 0h.41a.2.2 0 0 1 .2.19L13.35 7h1.7l.34-6.81a.2.2 0 0 1 .2-.19h.82a.2.2 0 0 1 .2.19L16.95 7h1.7l.34-6.81a.2.2 0 0 1 .2-.19h.41c.335 0 .61.265.624.6zm-3.49 3.854.26 9.117A1 1 0 0 1 16.372 24h-.742a1 1 0 0 1-1-1.029l.26-9.117q.555.147 1.111.146.555 0 1.11-.146M9 1.055V24h-.718a2 2 0 0 1-1.999-2.08L6.6 14Q6 12.44 4 12 4 4.017 7.256.388A1 1 0 0 1 9 1.055" clip-rule="evenodd"/></svg>',rezervation:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M15.059 11.244c2.035.064 3.212-.969 3.498-2.614.233-1.345-.149-3.818-1.06-4.83a1.6 1.6 0 0 1-.36-.666 15 15 0 0 1-.435-2.85.29.29 0 0 0-.244-.28.305.305 0 0 0-.329.182 10.6 10.6 0 0 0-.731 2.926 1.57 1.57 0 0 1-.509 1c-.752.667-1.367 1.7-1.6 2.754-.414 1.904-.265 4.324 1.77 4.388zM5.921 8.63c.287 1.645 1.463 2.678 3.499 2.613s2.215-2.344 1.77-4.388c-.276-1.258-1.007-2.377-1.855-3a1.6 1.6 0 0 1-.54-.721c-.34-.947-.743-1.861-1.23-2.732a.3.3 0 0 0-.33-.151.32.32 0 0 0-.232.28l-.094 1.801-.065 1.275c-.01.236-.085.473-.202.678-.668 1.172-.922 3.172-.72 4.323zM22.924 10.609c-.043.28 0 .57.106.828h.021c.414.957.329 2.356-.042 3.399-.562 1.538-2.13 2.237-3.498 1.732s-2.322-1.98-1.77-3.518c.381-1.086 1.706-2.172 2.936-2.549.318-.096.604-.3.795-.58.424-.624.816-1.291 1.134-1.98a.31.31 0 0 1 .35-.16c.137.031.222.16.222.311a39 39 0 0 1-.254 2.517M6.865 13.061c-.36-1.01-1.548-2.043-2.703-2.484a1.5 1.5 0 0 1-.785-.689c-.466-.86-.964-1.7-1.494-2.506a.3.3 0 0 0-.35-.118.305.305 0 0 0-.201.312c.032.432.068.876.104 1.321.058.706.115 1.415.16 2.088.011.216-.01.42-.084.624-.34.947-.255 2.248.095 3.238.551 1.538 2.13 2.237 3.498 1.731 1.368-.505 2.322-1.979 1.77-3.517zM15.313 15.578c.34.775.954 1.388 1.728 1.732v-.01c1.473.655 2.215 1.677 2.215 3.064 0 2.012-1.6 3.636-3.582 3.636a3.5 3.5 0 0 1-1.686-.42l-.117-.064a3.47 3.47 0 0 0-3.275 0 3.59 3.59 0 0 1-3.964-.376c-.944-.764-1.42-1.69-1.42-2.765 0-1.387.73-2.398 2.204-3.044a3.4 3.4 0 0 0 1.75-1.742c.656-1.474 1.685-2.216 3.073-2.216 1.389 0 2.417.742 3.074 2.205"/></svg>',route:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M10.93 2.59a.4.4 0 0 0 .4.41h1.34a.4.4 0 0 0 .4-.41L13 0h5l4.106 22H13.6l-.153-5.61a.4.4 0 0 0-.4-.39h-2.094a.4.4 0 0 0-.4.39L10.4 22H2L6 0h5zM11.225 6a.4.4 0 0 0-.4.39l-.17 6.2a.4.4 0 0 0 .4.41h1.888a.4.4 0 0 0 .4-.41l-.17-6.2a.4.4 0 0 0-.4-.39zM19 0h.666a.4.4 0 0 1 .394.328l3.854 21.2a.4.4 0 0 1-.393.472H23zM4.334 0H5L1 22H.48a.4.4 0 0 1-.394-.472L3.94.328A.4.4 0 0 1 4.334 0" clip-rule="evenodd"/></svg>',sanatorium:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M6.182.044c.08.04.144.106.184.187l4.59 9.278a.42.42 0 0 1-.216.573l-4.368 1.766a1 1 0 0 1-.75 0l-4.368-1.766c-.212-.085-.315-.328-.216-.573L5.628.23a.41.41 0 0 1 .554-.187"/><path fill="currentColor" fill-rule="evenodd" d="M12.032 8.976a1.62 1.62 0 0 1-.72 2.163c-.06.03-.06.03-.122.056l-.165.067L13 16.13V14h2v3h-1.666c.105.405.083.827-.052 1.209a1.96 1.96 0 0 1-.96 1.104q-.266.136-.56.183l-.762.122V22H7.167l-.059-1.758-1.099.176-1.117-.179L4.833 22H3.2a.2.2 0 0 0-.2.2v.6c0 .11.09.2.2.2h20.6a.2.2 0 0 0 .2-.2v-.6a.2.2 0 0 0-.2-.2H23V9h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H10.56zM15 20h4v2h-4zm0-11h-2v3h2zm1 0h2v3h-2zm5 0h-2v3h2zm-3 5h-2v3h2zm1 0h2v3h-2z" clip-rule="evenodd"/><path fill="currentColor" d="m.048 17.27 2.224-5.481 2.9 1.172a2.2 2.2 0 0 0 1.65 0l2.905-1.174 2.225 5.484c.122.302.003.657-.266.795a.5.5 0 0 1-.146.047L6.01 19 .46 18.113c-.293-.047-.496-.35-.455-.679a.7.7 0 0 1 .043-.163"/></svg>',school:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M6.593 1.884A9.7 9.7 0 0 1 8.242 1c.5.61.27 1.523-.423 1.9-.148.08-.284.159-.394.232a8.3 8.3 0 0 0-1.267 1.041A8.22 8.22 0 0 0 3.75 10a8.249 8.249 0 0 0 12.84 6.853c.097-.064.24-.18.401-.316.617-.521 1.555-.423 2.009.245a9.8 9.8 0 0 1-1.573 1.317 9.7 9.7 0 0 1-4.399 1.597c.03.461.095 1.079.232 1.622l2.18.55c.31.079.53.35.543.668a.67.67 0 0 1-.405.654c-.692.29-2.135.81-3.577.81-1.457 0-2.914-.53-3.598-.819A.67.67 0 0 1 8 22.558c0-.328.223-.614.542-.693l2.2-.55c.136-.543.2-1.158.23-1.618A9.75 9.75 0 0 1 2.25 10a9.72 9.72 0 0 1 2.847-6.886 9.8 9.8 0 0 1 1.496-1.23"/><path fill="currentColor" fill-rule="evenodd" d="M5 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0m7-5.5a5.47 5.47 0 0 0-3 .89v.81a.8.8 0 0 0 .8.8h3.4a.8.8 0 0 1 .8.8v.869a.8.8 0 0 0 .234.565l.358.358a.8.8 0 0 0 .924.15l1.042-.52A.8.8 0 0 0 17 8.505v-.8A5.5 5.5 0 0 0 12 4.5m-1.211 10.866a5.5 5.5 0 0 0 1.596.12l2.199-2.93a.8.8 0 0 0-.075-1.047l-2.275-2.275A.8.8 0 0 0 11.67 9H8.577a.8.8 0 0 0-.76.547l-.564 1.694a.8.8 0 0 0 .506 1.012l1.862.62a.8.8 0 0 1 .505.507z" clip-rule="evenodd"/></svg>',science:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13.316 10.821 15.9 3.717a.5.5 0 0 0-.299-.641l-.47-.171.333-.913.01.004a.5.5 0 1 0 .342-.94L12.997.03a.5.5 0 0 0-.351.936l-.332.913-.47-.171a.5.5 0 0 0-.641.299L8.617 9.11z"/><path fill="currentColor" fill-rule="evenodd" d="M15.662 7.3A9 9 0 0 1 20 15a8.97 8.97 0 0 1-2.292 6H20a1 1 0 0 1 1 1v1H3v-1a1 1 0 0 1 1-1h5a1 1 0 0 1 1-1c3.356-.255 6-3.078 6-6.5a6.47 6.47 0 0 0-1.217-3.787zM16 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/><path fill="currentColor" d="M7.314 9.927c-.088.082-.136.214-.232.477l-.136.376c-.096.263-.144.395-.13.514a.5.5 0 0 0 .131.28c.082.088.214.135.477.231l.188.069.255 2.221 2.82 1.026 1.623-1.537.188.068c.263.096.395.144.514.13a.5.5 0 0 0 .28-.132c.088-.081.136-.213.231-.476l.137-.376c.096-.263.144-.395.13-.514a.5.5 0 0 0-.131-.28c-.082-.088-.214-.136-.477-.231L8.108 9.926c-.263-.096-.395-.144-.514-.13a.5.5 0 0 0-.28.131M10.344 16.06l-2.819-1.025-.068.188c-.096.263-.144.394-.13.513a.5.5 0 0 0 .131.28c.082.088.214.136.477.232l1.316.479c.263.096.394.143.513.129a.5.5 0 0 0 .28-.13c.088-.083.136-.214.232-.477z"/></svg>',shoe_store:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M4.001 6.5 2 7S.5 11.5.5 14.5c0 .63.176 1.172.38 1.588l3.884.388a.262.262 0 0 1-.026.524H1.5l-.207.207a1 1 0 0 0-.293.707v.586a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V17c1.5 0 2.75.5 4 1s2.5 1 4 1c4 0 8-2 8-2l-.527-1.317c-.288-.722-.968-1.213-1.726-1.386C19.167 13.71 13.307 11.462 11 3l-4.01.401a1 1 0 0 0-.896 1.09l.576 6.045c.055.575-.747.77-.962.233z"/></svg>',shooting:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2.466.81a.3.3 0 0 1 .511-.122l2.32 2.564-.408 1.43 7.768 7.768.5-.5-2.588-2.588a3 3 0 1 1-1.207 1.207l-5.18-5.18-1.43.409-2.564-2.32a.3.3 0 0 1 .121-.512L2 2.5z"/><path fill="currentColor" d="m6.8 9.006-2.172-2.17a9 9 0 1 0 1.64-1.774l2.136 2.135a6 6 0 1 1-1.605 1.81M17.714 20.208a10 10 0 0 1-2.31 1.197l1.202 2.163a.8.8 0 0 0 1.088.311l.874-.485a.8.8 0 0 0 .311-1.088zM8.595 21.405a10 10 0 0 1-2.309-1.197l-1.165 2.098a.8.8 0 0 0 .31 1.088l.875.485a.8.8 0 0 0 1.088-.31z"/></svg>',skating_rink:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M1.745 8.99Q1.871 8.514 2 8q.467-1.87.061-4.61a.5.5 0 0 1 .31-.538L9.5 0q2.22 10.66 11.15 12.64A3 3 0 0 1 23 15.567V16q-3.5 1-7.5 1c-1.5 0-2.875-.5-4.25-1S8.5 15 7 15v1.5a.5.5 0 0 1-.5.5H1.894a.5.5 0 0 1-.487-.387Q1 14.853 1 13.5c0-1.657.343-2.97.745-4.51M17 17.965V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1H3v1a1 1 0 0 1-1 1H1l-1 2h21a3 3 0 0 0 3-3h-2a2 2 0 0 1-1.89-1.346q-1.517.236-3.11.311"/></svg>',ski_resort:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12.016 10H0v-.4l7.985-.665 4.017-4.441a1.5 1.5 0 0 1 2.518.487l1.337 3.643 3.22.127a.954.954 0 0 1 .916.99.957.957 0 0 1-.915.914l-4 .159a1.02 1.02 0 0 1-.896-.463l-.097-.152-1.058-1.631zm.058.83 2.875 2.784.148.141c.46.447.522 1.15.177 1.665l-3.117 4.659 6.814 1.71c1.126.283 2.871.21 3.692-.61a.286.286 0 0 1 .396-.028l.112.093a.386.386 0 0 1 .026.57l-.099.098a4.7 4.7 0 0 1-4.467 1.235L4.026 19.481Q2.96 19.214 1 18.22l.17-.898 8.834 2.217c.014-.139.055-.277.124-.405l2.123-3.968-4.422-2.9a1.83 1.83 0 0 1-.81-1.266zM16 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4" clip-rule="evenodd"/></svg>',software:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9h-1V4.6a.6.6 0 0 0-.6-.6H4.6a.6.6 0 0 0-.6.6V13H3z"/><path fill="currentColor" fill-rule="evenodd" d="M21 14H3L.143 18.762a1 1 0 0 0-.143.515V20a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-.723a1 1 0 0 0-.142-.515zM8.834 18.332A.6.6 0 0 1 9.371 18h5.258a.6.6 0 0 1 .537.332l.545 1.09a.4.4 0 0 1-.358.578H8.647a.4.4 0 0 1-.358-.579z" clip-rule="evenodd"/><path fill="currentColor" d="m16.818 10.44-1.141-1.142 1.008-.432a.414.414 0 0 0-.015-.767l-4.108-1.572a.414.414 0 0 0-.534.535l1.572 4.107a.414.414 0 0 0 .767.016l.432-1.008 1.141 1.141a.62.62 0 1 0 .878-.878"/></svg>',spa:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M17 12c0 4.5-2 8-5 8s-5-3.5-5-8 4-10 5-10 5 5.5 5 10"/><path fill="currentColor" d="M4 15.5c1.03 1.471 2.572 2.696 4.179 3.5C6.55 17.534 5.5 15.073 5.5 12c0-1.636.073-3.627.497-5.463A28 28 0 0 0 4 6c-.82.574-2.438 6.019 0 9.5M23.782 12q-.837.069-1.609.177c-.177 1.563-.608 3.078-1.356 4.24-1.301 2.023-3.33 3.662-5.4 4.583q3.495-.064 5.58-1.942 2.94-2.646 3-6.837v-.02c-.01-.12-.105-.21-.215-.2"/><path fill="currentColor" d="M2.998 19.058Q5.072 20.94 8.579 21c-2.07-.92-4.1-2.56-5.4-4.582-.748-1.163-1.18-2.678-1.357-4.24A28 28 0 0 0 .215 12c-.11-.01-.206.08-.214.2L0 12.223q.08 4.19 2.998 6.836M18.003 6.537Q18.948 6.243 20 6c.82.574 2.438 6.019 0 9.5-1.03 1.471-2.572 2.696-4.179 3.5 1.629-1.467 2.679-3.928 2.679-7 0-1.636-.073-3.627-.497-5.463"/></svg>',sport:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.54 13.61C7.696 12.231 7.048 10.131 7 7V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4c-.045 3.127-.686 5.223-1.524 6.599 2.426-1.534 4.409-4.5 4.69-7.799H18V4.2h3a.8.8 0 0 1 .8.8c0 6.001-4.946 11.3-9.8 11.3S2.2 11.001 2.2 5a.8.8 0 0 1 .8-.8h3v1.6H3.834c.282 3.307 2.273 6.278 4.706 7.81m2.033-4.146-.336 1.963L12 10.5l1.763.927-.336-1.963 1.426-1.391-1.971-.287L12 6l-.882 1.786-1.971.287z" clip-rule="evenodd"/><path fill="currentColor" d="m13.2 19.343 4.25 1.214c.326.093.55.39.55.729 0 .348-.22.66-.549.776Q14.796 23 12 23t-5.451-.938A.82.82 0 0 1 6 21.286c0-.338.224-.636.55-.729l4.25-1.214v-1.755a6.5 6.5 0 0 0 2.4 0z"/></svg>',sport_school:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.54 13.61C7.696 12.231 7.048 10.131 7 7V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4c-.045 3.127-.686 5.223-1.524 6.599 2.426-1.534 4.409-4.5 4.69-7.799H18V4.2h3a.8.8 0 0 1 .8.8c0 6.001-4.946 11.3-9.8 11.3S2.2 11.001 2.2 5a.8.8 0 0 1 .8-.8h3v1.6H3.834c.282 3.307 2.273 6.278 4.706 7.81m2.033-4.146-.336 1.963L12 10.5l1.763.927-.336-1.963 1.426-1.391-1.971-.287L12 6l-.882 1.786-1.971.287z" clip-rule="evenodd"/><path fill="currentColor" d="m13.2 19.343 4.25 1.214c.326.093.55.39.55.729 0 .348-.22.66-.549.776Q14.796 23 12 23t-5.451-.938a.82.82 0 0 1-.55-.776c.001-.338.225-.636.55-.729l4.251-1.214v-1.755a6.5 6.5 0 0 0 2.4 0z"/></svg>',sportcenter:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.54 13.61C7.696 12.231 7.048 10.131 7 7V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4c-.045 3.127-.686 5.223-1.524 6.599 2.426-1.534 4.409-4.5 4.69-7.799H18V4.2h3a.8.8 0 0 1 .8.8c0 6.001-4.946 11.3-9.8 11.3S2.2 11.001 2.2 5a.8.8 0 0 1 .8-.8h3v1.6H3.834c.282 3.307 2.273 6.278 4.706 7.81m2.033-4.146-.336 1.963L12 10.5l1.763.927-.336-1.963 1.426-1.391-1.971-.287L12 6l-.882 1.786-1.971.287z" clip-rule="evenodd"/><path fill="currentColor" d="m13.2 19.343 4.25 1.214c.326.093.55.39.55.729 0 .348-.22.66-.549.776Q14.796 23 12 23t-5.451-.938a.82.82 0 0 1-.55-.776c.001-.338.225-.636.55-.729l4.251-1.214v-1.755a6.5 6.5 0 0 0 2.4 0z"/></svg>',sports_bar:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M6.073 11Q4.806 7.324 5.034 1.957a1 1 0 0 1 1-.957h11.91a1 1 0 0 1 .998.943q.309 5.376-1.051 9.057-2.337 5.692-1.126 10.485a1 1 0 0 1-.278.968Q14.87 24 11.982 24t-4.505-1.547a1 1 0 0 1-.279-.968Q8.408 16.693 6.072 11m2.986 10.433c.699.503 1.653.767 2.923.767s2.225-.264 2.923-.767a15 15 0 0 1-.292-1.927Q13.6 20 11.944 20a7.8 7.8 0 0 1-1.656-.158q.415-4.982-1.488-9.552-.682-1.95-.951-4.26c1.842-.296 3.414.297 4.868.845 1.478.557 2.834 1.069 4.23.556q.322-2.081.234-4.631H6.809c-.067 3.004.254 5.527.95 7.567 1.602 3.926 2.048 7.627 1.3 11.066" clip-rule="evenodd"/></svg>',spring:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12 22.286a6.857 6.857 0 0 0 6.857-6.857C18.857 10.286 12 1.714 12 1.714S5.143 10.286 5.143 15.43A6.857 6.857 0 0 0 12 22.286"/></svg>',stadium:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M19 5.713V3.3l-1-.1v2.307q-.49-.09-1-.165V3.1l-.722-.072a.4.4 0 0 1-.348-.301l-.298-1.189a.4.4 0 0 1 .42-.495l5.355.411a.4.4 0 0 1 .327.578l-.55 1.098a.6.6 0 0 1-.595.329L20 3.4v2.567a20 20 0 0 0-1-.254M4 5.967V3.4l-.59.059a.6.6 0 0 1-.597-.33l-.548-1.097a.4.4 0 0 1 .328-.578l5.351-.411a.4.4 0 0 1 .42.495l-.298 1.189a.4.4 0 0 1-.348.301L7 3.1v2.242q-.511.075-1 .165V3.2l-1 .1v2.413a20 20 0 0 0-1 .254M12 15c-9 0-12-3-12-3v6c0 .844 2.138 3.114 8.22 3.8l.67-3.353A1.8 1.8 0 0 1 10.657 17h2.688a1.8 1.8 0 0 1 1.765 1.447l.67 3.354C21.863 21.114 24 18.844 24 18v-6s-3 3-12 3"/><path fill="currentColor" d="M9.871 18.643a.8.8 0 0 1 .785-.643h2.688a.8.8 0 0 1 .785.643l.68 3.4a.8.8 0 0 1-.785.957H9.976a.8.8 0 0 1-.785-.957zM0 10c0 .837.777 1.614 2.097 2.256C2.709 9.676 6.513 8 12 8s9.291 1.676 9.903 4.256C23.223 11.614 24 10.837 24 10c0-2.209-5.373-4-12-4S0 7.791 0 10"/><path fill="currentColor" d="M7.035 13.643c-1.535-.233-2.895-.571-4.002-.986.133-.828.746-1.574 1.764-2.173l2.67 2.29c-.29.277-.442.575-.432.869M8.336 12.2c.438-.208.975-.384 1.595-.507l-.895-2.506c-1.267.17-2.364.451-3.262.818zM10.94 11.548a11.5 11.5 0 0 1 2.12 0l.882-2.471A24 24 0 0 0 12 9q-1.019 0-1.942.077zM14.964 9.187l-.895 2.506c.62.123 1.157.299 1.595.508l2.562-2.196c-.898-.367-1.995-.648-3.262-.818M16.533 12.773l2.67-2.289c1.018.6 1.63 1.345 1.764 2.173-1.107.415-2.467.753-4.002.986.01-.294-.142-.593-.432-.87"/></svg>',stage:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M3.325 16.72a5.2 5.2 0 0 0 1.06 1.033c-.608.944-.589 2.257.358 3.192 1.126 1.096 2.78.915 3.71 0l6.156-6.044c1.191-1.165 3.033-1.237 4.285.002 1.284 1.245 1.17 3.05 0 4.2l-3.879 3.8c-.688.675-1.728-.346-1.04-1.02l3.878-3.8c.605-.591.699-1.464 0-2.16-.716-.69-1.605-.59-2.203-.002-.81.796-4.968 4.88-6.157 6.044-1.542 1.506-4.129 1.636-5.791 0-1.515-1.48-1.549-3.71-.377-5.245m11.95-6.067-8.318 6.932q-1.417-.003-2.475-1.06-1.059-1.06-1.118-2.533l6.988-8.263q.931 1.332 2.263 2.663a20 20 0 0 0 2.66 2.26m-4.217-.705a.8.8 0 1 0-1.131 1.131.8.8 0 0 0 1.131-1.131m-.07-5.029a4.5 4.5 0 1 1 5.099 5.098 20 20 0 0 1-2.765-2.333 20 20 0 0 1-2.334-2.765" clip-rule="evenodd"/></svg>',standpipe:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12 22.286a6.857 6.857 0 0 0 6.857-6.857C18.857 10.286 12 1.714 12 1.714S5.143 10.286 5.143 15.43A6.857 6.857 0 0 0 12 22.286"/></svg>',stationery_store:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12.4 0h1.1Q14 5 17 8l-1.826 8.217a1 1 0 0 1-.976.783H9.802a1 1 0 0 1-.976-.783L7 8q3-3 3.5-8h1.1l-.493 8.21a2 2 0 1 0 1.786 0zM7.866 18.802c.048-.285.072-.427.143-.534a.6.6 0 0 1 .254-.215C8.38 18 8.524 18 8.813 18h6.374c.289 0 .433 0 .55.053.104.046.192.12.254.215.071.107.095.25.143.534l.68 4.08c.064.385.096.577.04.727a.6.6 0 0 1-.264.311c-.138.08-.333.08-.723.08H8.133c-.39 0-.585 0-.723-.08a.6.6 0 0 1-.264-.311c-.056-.15-.024-.342.04-.727z"/></svg>',stenograffia:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M11 .5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.315c0 .113-.067.216-.145.299a.55.55 0 0 0-.155.386c0 .179.078.305.155.386.078.083.145.186.145.3V2.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM12.002 7c4.498 0 3.993-1.4 3.993-1.4-.126-.842-.836-1.558-1.89-2.016a.2.2 0 0 0-.266.126.41.41 0 0 1-.39.29h-2.896a.405.405 0 0 1-.388-.29.197.197 0 0 0-.266-.127C8.846 4.041 8.135 4.758 8.01 5.6c0 0-.504 1.4 3.993 1.4M12 17.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"/><path fill="currentColor" fill-rule="evenodd" d="M7.25 6.984a.15.15 0 0 0-.112-.053.14.14 0 0 0-.138.138v14.825c0 .395.12.786.44 1.019C8.048 23.357 9.38 24 12 24s3.952-.643 4.56-1.087c.32-.233.44-.624.44-1.019V7.07a.14.14 0 0 0-.138-.138.15.15 0 0 0-.112.053c-.39.46-1.576 1.166-4.75 1.166s-4.36-.707-4.75-1.166M15.5 15.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" clip-rule="evenodd"/><path fill="currentColor" d="M17.75 1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M16 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M17.25 4a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"/></svg>',street:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M11 9.62a.2.2 0 0 0-.394-.049L9.999 12H3.5a1 1 0 0 1-.8-.4l-2.25-3a1 1 0 0 1 0-1.2l2.25-3a1 1 0 0 1 .8-.4H11V1a1 1 0 0 1 2 0v5h7.5a1 1 0 0 1 .8.4l2.25 3a1 1 0 0 1 0 1.2l-2.25 3a1 1 0 0 1-.8.4h-6.499l-.607-2.428a.2.2 0 0 0-.394.048V23.4a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6z" clip-rule="evenodd"/></svg>',supermarket:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M8.566 1h.625a.5.5 0 0 1 .447.724L6.5 8H3.8l3.909-6.514A1 1 0 0 1 8.566 1"/><path fill="currentColor" fill-rule="evenodd" d="m2.302 12.328 1.705 7.503c.176.775.264 1.162.48 1.477.184.268.458.508.748.655.341.172.719.206 1.475.275 1.42.129 3.355.262 5.29.262s3.87-.133 5.29-.262c.756-.069 1.134-.103 1.475-.275.29-.147.564-.387.748-.655.216-.315.304-.702.48-1.477l1.705-7.503C19.406 12.619 15.703 13 12 13s-7.406-.38-9.698-.672m4.775 3.055c-.027-.131-.04-.197-.022-.248a.2.2 0 0 1 .088-.107C7.19 15 7.257 15 7.39 15h1.32c.103 0 .154 0 .194.02a.2.2 0 0 1 .086.077c.024.039.029.09.039.191l.436 4.36c.012.122.018.183-.002.23a.2.2 0 0 1-.088.097C9.33 20 9.27 20 9.146 20h-.884c-.093 0-.14 0-.178-.017A.2.2 0 0 1 8 19.914c-.024-.034-.033-.08-.051-.171zm3.95-.269c-.02.045-.018.103-.014.219l.175 4.36c.004.108.006.162.029.203a.2.2 0 0 0 .086.083c.042.021.096.021.204.021h.986c.108 0 .162 0 .204-.02a.2.2 0 0 0 .086-.084c.023-.041.025-.095.03-.203l.174-4.36c.004-.116.007-.174-.014-.219a.2.2 0 0 0-.088-.091C12.84 15 12.783 15 12.667 15h-1.334c-.116 0-.174 0-.218.023a.2.2 0 0 0-.088.091m3.944.174c.01-.102.015-.152.039-.191a.2.2 0 0 1 .086-.078c.04-.019.091-.019.194-.019h1.32c.134 0 .2 0 .247.027a.2.2 0 0 1 .088.108c.018.051.005.117-.022.248l-.872 4.36c-.018.091-.027.137-.051.172a.2.2 0 0 1-.084.068c-.038.017-.085.017-.178.017h-.884c-.123 0-.184 0-.23-.025a.2.2 0 0 1-.087-.097c-.02-.047-.014-.108-.002-.23z" clip-rule="evenodd"/><path fill="currentColor" d="m20.201 8-3.909-6.514A1 1 0 0 0 15.435 1h-.625a.5.5 0 0 0-.447.724L17.5 8zM1.003 9.93C1 9.964 1 10.005 1 10.09a1.015 1.015 0 0 0 .783 1.039c.03.007.058.01.112.02C3.673 11.427 7.837 12 12 12s8.327-.573 10.105-.851l.113-.02c.425-.095.752-.477.78-.913.002-.031.002-.063.002-.126 0-.084 0-.125-.003-.16a1 1 0 0 0-.926-.927C22.035 9 21.994 9 21.91 9H2.09c-.084 0-.125 0-.16.003a1 1 0 0 0-.927.926"/></svg>',sushi:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M8 6c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1M18 7c1.105 0 2-.448 2-1s-.895-1-2-1-2 .448-2 1 .895 1 2 1"/><path fill="currentColor" fill-rule="evenodd" d="M0 6c0-2.586 2.828-4 6-4s6 1.414 6 4c0-2.586 2.828-4 6-4s6 1.414 6 4v6c0 2.31-2.257 3.685-5 3.952V14c0-3.327-3.347-5-7-5s-7 1.673-7 5v1.952C2.257 15.685 0 14.31 0 12zm10 0c0 1.105-1.79 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2m8 2c2.21 0 4-.895 4-2s-1.79-2-4-2-4 .895-4 2 1.79 2 4 2" clip-rule="evenodd"/><path fill="currentColor" d="M14 14c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1"/><path fill="currentColor" fill-rule="evenodd" d="M12 24c3.172 0 6-1.414 6-4v-6c0-2.586-2.828-4-6-4s-6 1.414-6 4v6c0 2.586 2.828 4 6 4m0-8c2.21 0 4-.895 4-2s-1.79-2-4-2-4 .895-4 2 1.79 2 4 2" clip-rule="evenodd"/></svg>',swimming_pool:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M20.965 10A2.99 2.99 0 0 1 18 6.984 2.95 2.95 0 0 1 20.971 4C22.66 3.992 24.026 5.358 24 7.027c-.026 1.63-1.417 2.993-3.035 2.973m-.004 8.296c-1.53-.953-3.752-1.717-6.798-.638-1.07.38-1.981.875-2.977 1.305-3.911 1.69-7.737 1.285-11.186-.999l.97-.581c2.553 1.605 6.456.752 9.534-.722 1.5-.718 3.018-1.402 4.674-1.73 1.93-.381 3.713-.08 5.402.646q.29 1.32.381 2.719m.038 1.44-.006.264h-9.146c1.532-.745 3.534-1.63 5.18-1.63 1.736 0 2.808.636 3.971 1.366M6.486 16.312c-.908-.025-2.382-.405-3.13-1.014l8.128-6.458a1 1 0 0 0 .037-1.535q-.852-.747-2.633-1.289c-1.548-.47-3.444-.391-4.697-.257l-.085-1.19c.837-.209 4.73-.86 7.77.138 2.351.772 4.567 2.388 5.929 4.405 1.694 2.507 2.323 5.03 2.323 5.03-2.709-1.452-6.665-.162-8.572.734-1.611.757-3.221 1.487-5.07 1.436" clip-rule="evenodd"/></svg>',synagogue:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 0 9.223 5h2.287l.49-.882L13.046 6H2l2.761 4.97 1.144-2.058L5.399 8h2.157L2 18h5.523l-1.111-2H5.399l1.079-1.94L12 24l2.778-5H12.49l-.49.882L10.955 18H22l-2.761-4.971-1.144 2.06.507.911h-2.158L22 6h-5.522l1.11 2h1.014l-1.08 1.941zM7.622 12.001 9.844 8h4.312l2.223 4.001L14.156 16H9.844z" clip-rule="evenodd"/></svg>',tableware:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M2.571 16.682C.975 14.955 0 13.725 0 11.5c0-2.385 1.919-4.318 4.286-4.318.747 0 1.45.193 2.062.532-.432.367-.84.769-1.22 1.195h-.842A2.58 2.58 0 0 0 1.714 11.5a2.58 2.58 0 0 0 2.454 2.588C5.108 10.886 7.718 7 12 7c6.857 0 9.429 9.682 7.714 11.41C18 20.135 15 21 12 21s-6-.864-7.714-2.59c-.137-.139-.2-.192-.27-.25-.156-.129-.338-.28-1.445-1.478"/><path fill="currentColor" d="M21.393 16.824Q23.287 14.89 24 7h-1.714l-3.038 3.06c1.516 2.282 2.231 4.952 2.145 6.764"/></svg>',tailor:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M7.764 3H4a2 2 0 0 0-2 2v6h6a1 1 0 0 1 1-1h.89q.11 0 .217.024l3.527.784a1 1 0 0 1 .741.69l-.285 3.419A1 1 0 0 0 15.087 16H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H10l-1.789-.894A1 1 0 0 0 7.764 3M18.5 7h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1" clip-rule="evenodd"/><path fill="currentColor" d="M22.4 5a.4.4 0 0 0-.4.4v3.2c0 .22.18.4.4.4h.6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM20.49 17H3.51c-.827 0-1.16.093-1.487.267-.326.174-.582.43-.756.756-.102.192-.177.841-.22 1.344a.585.585 0 0 0 .588.633h20.73c.345 0 .618-.29.588-.633-.043-.503-.118-1.152-.22-1.344a1.8 1.8 0 0 0-.756-.756c-.326-.174-.66-.267-1.486-.267M8 12a1 1 0 0 1-1 1H5.5v2.5a.5.5 0 0 1-1 0V13H3a1 1 0 0 1-1-1z"/></svg>',taxfree:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M2 3.5h6.337v1.617H6.082V11.5H4.255V5.117H2z"/><path fill="currentColor" fill-rule="evenodd" d="M10.322 3.5h2.046l2.656 7.703 2.27-3.73L14.886 3.5h2.096l1.53 2.588L20.005 3.5h1.888l-2.398 3.951L22 11.5h-2.087l-1.626-2.659L16.72 11.5h-3.451l-.64-1.86H9.82l-.64 1.86H7.564zm.903 2.042-.85 2.491h1.709z" clip-rule="evenodd"/><path fill="currentColor" d="M1 13.5h4.676v1.415H2.622v1.466h2.589v1.406H2.622V20.5H1z"/><path fill="currentColor" fill-rule="evenodd" d="M6.374 13.5h2.5c.902 0 1.602.164 2.08.515.489.36.72.94.72 1.699 0 .556-.122 1.01-.385 1.344a2 2 0 0 1-.883.627l1.677 2.815h-1.876l-1.536-2.591h-.675V20.5H6.374zm1.622 1.415h.879c.424 0 .717.068.9.183l.002.001c.166.102.265.288.265.605 0 .344-.103.55-.277.663-.197.122-.491.192-.9.192h-.869z" clip-rule="evenodd"/><path fill="currentColor" d="M17.307 13.5h-4.732v7h4.779v-1.406h-3.157V17.59h2.626v-1.405h-2.626v-1.27h3.11zM18.221 13.5h4.732v1.415h-3.11v1.27h2.626v1.406h-2.625v1.503H23V20.5h-4.779z"/></svg>',taxi:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M19.384 21H4.616a.1.1 0 0 0-.031.195L6.7 21.9l-.563 1.69a.6.6 0 0 1-.57.41H2.6a.6.6 0 0 1-.6-.6V16q0-.516.531-3.156l-1.847-.616A1 1 0 0 1 0 11.279V10.6a.6.6 0 0 1 .6-.6h2.013c.176 0 .341.046.485.126q.222-1.035.488-2.25a3 3 0 0 1 1.427-1.954l.708-4.25A2 2 0 0 1 7.694 0h8.612a2 2 0 0 1 1.973 1.671l.708 4.25a3 3 0 0 1 1.427 1.955q.267 1.215.488 2.25a1 1 0 0 1 .485-.126H23.4a.6.6 0 0 1 .6.6v.68a1 1 0 0 1-.684.948l-1.847.616Q22 15.484 22 16v7.4a.6.6 0 0 1-.6.6h-2.967a.6.6 0 0 1-.57-.41L17.3 21.9l2.115-.705a.1.1 0 0 0-.031-.195M19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.89-10.719a.9.9 0 0 0-.466.635l-.646 3.557a1 1 0 0 0 1.198 1.155Q8.837 12 12.005 12q3.165 0 6.019.627a1 1 0 0 0 1.198-1.155l-.647-3.557a.9.9 0 0 0-.463-.634Q15.697 6 12.005 6T5.889 7.281M7 3v2h2V3zm2-2v2h2V1zm2 2v2h2V3zm2-2v2h2V1zm2 2v2h2V3z" clip-rule="evenodd"/></svg>',tennis:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M6.296 15.24Q8.29 12.15 8.967 8.26c.061-1.829.967-3.79 2.717-5.54 3.223-3.224 7.163-3.582 9.67-1.075 2.508 2.508 2.15 6.448-1.074 9.671-1.542 1.543-3.249 2.43-4.884 2.66q-3.986.665-7.627 2.738zm12.551-5.357c-2.46 2.46-5.138 2.742-6.805 1.075s-1.385-4.346 1.075-6.805c2.46-2.46 5.138-2.742 6.805-1.075s1.385 4.346-1.075 6.805m-7.61 3.055a6 6 0 0 1-1.094-1.07 20 20 0 0 1-.676 1.745 25 25 0 0 1 1.77-.675" clip-rule="evenodd"/><path fill="currentColor" d="M14.5 16.877A4 4 0 0 1 17 16c.946 0 1.815.328 2.5.877A4 4 0 0 0 18 20c0 1.263.585 2.39 1.5 3.123A4 4 0 0 1 17 24a4 4 0 0 1-2.5-.877A4 4 0 0 0 16 20c0-1.263-.585-2.39-1.5-3.123"/><path fill="currentColor" d="M20.2 17.6c.502.668.8 1.5.8 2.4s-.298 1.732-.8 2.4A3 3 0 0 1 19 20c0-.982.471-1.853 1.2-2.4M15 20c0-.982-.471-1.853-1.2-2.4-.502.668-.8 1.5-.8 2.4s.298 1.732.8 2.4A3 3 0 0 0 15 20M7.028 17.405l-1.433-1.433a1.013 1.013 0 0 0-1.433 0l-2.865 2.866a1.013 1.013 0 0 0 0 1.433l1.432 1.432a1.013 1.013 0 0 0 1.433 0l2.866-2.865a1.013 1.013 0 0 0 0-1.433"/></svg>',theatre:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M4.794 1.164q3.666 1.59 7.256 1.59 3.563 0 7.152-1.567a1.996 1.996 0 0 1 2.633 1.054c.112.26.168.541.165.825q-.113 10.638-.985 12.84C19.012 20.965 15.005 24 12 24s-7.011-3.035-9.015-8.094Q2.112 13.702 2 3.045A2.014 2.014 0 0 1 3.982 1c.279-.003.555.053.812.164m10.21 3.374v.002l-1.355.244a2 2 0 0 0-1.645 1.969v.15H12l.001 9.003q-1.61 0-3.868-.656a.5.5 0 0 0-.563.746q1.527 2.44 4.433 2.44.91 0 1.562-.187a.4.4 0 0 1 .488.515 7 7 0 0 1-.08.222q-.684 1.004-2.254 1.785a.636.636 0 0 0 .282 1.206c2.316-.002 5.545-2.762 7.153-6.822.448-1.131.77-5.328.842-12.11a20.8 20.8 0 0 1-4.993 1.493m-8 3.275q-1.705 0-2.32 1.469a.4.4 0 0 0 .37.554h3.9a.4.4 0 0 0 .369-.554q-.615-1.47-2.32-1.47M16 8q1.699 0 2.315 1.443a.4.4 0 0 1-.367.557h-3.895a.4.4 0 0 1-.368-.557Q14.3 8 16 8" clip-rule="evenodd"/></svg>',ticket_office:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M23 9.129a.4.4 0 0 1-.36.398q-.164.017-.269.039a3.001 3.001 0 0 0-.021 5.863q.112.025.291.044a.4.4 0 0 1 .36.398L23 19.6a.4.4 0 0 1-.4.4H1.4a.4.4 0 0 1-.4-.4v-3.724a.4.4 0 0 1 .358-.397l.044-.006a3 3 0 0 0-.042-5.95.4.4 0 0 1-.36-.398V5.4c0-.22.18-.4.4-.4h21.2c.22 0 .4.18.4.4zm-10.893 5.798 2.131 1.035a.38.38 0 0 0 .543-.39l-.306-2.405 1.637-1.77a.38.38 0 0 0-.207-.632l-2.334-.447-1.13-2.117a.38.38 0 0 0-.67 0l-1.129 2.117-2.334.447a.38.38 0 0 0-.207.631l1.637 1.77-.306 2.406a.38.38 0 0 0 .543.39z" clip-rule="evenodd"/></svg>',tire_fitting:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M16 12c0 3.582-1.471 6.614-3.5 7.634A3.3 3.3 0 0 0 14 20c2.761 0 5-3.582 5-8s-2.239-8-5-8c-.523 0-1.027.128-1.5.366C14.529 5.386 16 8.418 16 12"/><path fill="currentColor" fill-rule="evenodd" d="M12 24c6.333 0 10-5.373 10-12S18.333 0 12 0 2 5.373 2 12s3.667 12 10 12m2-3c3.314 0 6-4.03 6-9s-2.686-9-6-9-6 4.03-6 9 2.686 9 6 9" clip-rule="evenodd"/></svg>',tram:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M6 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0M11 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path fill="currentColor" fill-rule="evenodd" d="M2.913 4.286 5.345 6H0v3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H0v4.958l1.043-.043.404-.81A2 2 0 0 1 3.237 18h6.527a2 2 0 0 1 1.789 1.105L13 22h10a1 1 0 0 0 1-1v-4q-3-1-3-3v-4a1 1 0 0 1 1-1h2v-.001c0-1.874-2-3-5-3h-8.345l2.432-1.713a.4.4 0 0 0 .01-.647L8.48.17a.8.8 0 0 0-.962 0L2.903 3.64a.4.4 0 0 0 .01.647M15 20a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1zM5 10v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m5.988-6.07L8 6.035 5.013 3.93 8 1.685z" clip-rule="evenodd"/></svg>',tram_stop:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M6 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0M11 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path fill="currentColor" fill-rule="evenodd" d="M2.913 4.286 5.345 6H0v3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H0v4.958l1.043-.043.404-.81A2 2 0 0 1 3.237 18h6.527a2 2 0 0 1 1.789 1.105L13 22h10a1 1 0 0 0 1-1v-4q-3-1-3-3v-4a1 1 0 0 1 1-1h2v-.001c0-1.874-2-3-5-3h-8.345l2.432-1.713a.4.4 0 0 0 .01-.647L8.48.17a.8.8 0 0 0-.962 0L2.903 3.64a.4.4 0 0 0 .01.647M15 20a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1zM5 10v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m5.988-6.07L8 6.035 5.013 3.93 8 1.685z" clip-rule="evenodd"/></svg>',transport_bus:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M6 24a3 3 0 1 1 0-6 3 3 0 0 1 0 6" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M0 19V3h19c3 0 5 1.125 5 2.999V20a1 1 0 0 1-1 1H11a5 5 0 0 0-9.584-2zm21-7q0 2 3 3V6h-2a1 1 0 0 0-1 1zm-8 6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zM5 7v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1M0 6v6h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" clip-rule="evenodd"/></svg>',transport_tram:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M6 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0M11 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path fill="currentColor" fill-rule="evenodd" d="M2.913 4.286 5.345 6H0v3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H0v4.958l1.043-.043.404-.81A2 2 0 0 1 3.237 18h6.527a2 2 0 0 1 1.789 1.105L13 22h10a1 1 0 0 0 1-1v-4q-3-1-3-3v-4a1 1 0 0 1 1-1h2v-.001c0-1.874-2-3-5-3h-8.345l2.432-1.713a.4.4 0 0 0 .01-.647L8.48.17a.8.8 0 0 0-.962 0L2.903 3.64a.4.4 0 0 0 .01.647M15 20a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1zM5 10v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m5.988-6.07L8 6.035 5.013 3.93 8 1.685z" clip-rule="evenodd"/></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M14.575 4a.5.5 0 0 1-.488-.39l-.482-2.142A.6.6 0 0 0 13.02 1h-2.04a.6.6 0 0 0-.585.468L9.913 3.61a.5.5 0 0 1-.488.39h-.157a.6.6 0 0 1-.582-.746L9.311.757A1 1 0 0 1 10.28 0h3.438a1 1 0 0 1 .97.757l.625 2.497a.6.6 0 0 1-.582.746z"/><path fill="currentColor" d="m8.172 1.188-.26 1.039C4.798 2.613 3 3.458 3 4.5 3 5.937 6.42 7 12 7s9-1.063 9-2.5c0-1.042-1.797-1.887-4.913-2.273l-.26-1.039C19.452 1.581 22 2.614 22 4.5v1C22 8 17.523 9 12 9S2 8 2 5.5v-1c0-1.886 2.549-2.919 6.172-3.312"/><path fill="currentColor" fill-rule="evenodd" d="M3.344 8.668C5.254 9.586 8.245 10 12 10s6.746-.414 8.656-1.332L19 21.5c-.2 1.5-3.134 2.5-7 2.5s-6.8-1-7-2.5zM17.08 20.325c-.066.893-.503 1.233-.842 1.27-.47.053-.67-.342-.634-.791 0 0 .675-5.087.895-7.948.047-.578.49-1.333 1.114-1.25.495.084.374.848.374.848s-.856 7.185-.907 7.871M12 22c.395-.004.699-.361.7-.886v-8.338c-.002-.527-.315-.776-.702-.776-.385 0-.696.25-.698.776v8.338c0 .524.304.882.7.886m-5.08-1.675c-.05-.686-.907-7.871-.907-7.871s-.121-.764.374-.848c.623-.083 1.067.672 1.114 1.25.22 2.861.895 7.948.895 7.948.037.45-.164.844-.635.791-.338-.037-.774-.377-.84-1.27" clip-rule="evenodd"/></svg>',travel_agency:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M9.857 8C8.082 8.02 6.02 7.53 5 6c1.036-1.554 3.144-1.498 4.937-.944C8.53 3.802 7.493 2.03 8 0c.851 0 4.602 1.45 5.698 4.966C15.771 3.78 19.331 3.331 22 6c-1.814 1.814-5.089 2.165-7.396 1.939C16.49 9.059 18 11.029 18 13c-1.759 0-5.452-1.547-6.316-4.642C8.679 10.201 6 13.983 6 22v.2a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V22q0-9.75 7.857-14"/><path fill="currentColor" d="M8.68 23a.4.4 0 0 1-.35-.594l4.376-7.877a.4.4 0 0 1 .665-.051L16.5 18.5l2.206-1.324a.4.4 0 0 1 .513.087l4.234 5.08a.4.4 0 0 1-.307.657z"/></svg>',university:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="m11.568 2.108-10.3 5.436a.524.524 0 0 0 0 .912l10.3 5.436a.92.92 0 0 0 .864 0l4.875-2.572-5.226-2.412a1 1 0 0 1-.336-1.564l6.244 2.974a2.3 2.3 0 0 1 1.311 2.076v1.892a1 1 0 1 0 1.4 0v-1.892c0-.896-.323-1.742-.883-2.399l2.916-1.539a.524.524 0 0 0 0-.912l-10.3-5.436a.92.92 0 0 0-.865 0"/><path fill="currentColor" d="M18 12.5v.678c-.677 1.666-1.82 4.76-1.986 7.02-1.098.471-2.432.802-4.014.802-5.5 0-8-4-8-4v-5.5l7.284 3.642c.263.131.394.197.532.223a1 1 0 0 0 .368 0c.138-.026.27-.092.532-.223zM21.548 16.267A2 2 0 0 1 20 17a2 2 0 0 1-1.548-.733c-.428 1.104-.952 2.756-.952 4.233 0 0 1 1.5 2.5 1.5s2.5-1.5 2.5-1.5c0-1.477-.524-3.129-.952-4.233"/></svg>',urban_gov_station_administration:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 0c3.314 0 6 1.343 6 3 0 .907-.805 1.72-2.076 2.27q.075.588.076 1.192C16 9.775 14.21 12 12 12S8 9.775 8 6.462q0-.604.076-1.192C6.805 4.72 6 3.907 6 3c0-1.657 2.686-3 6-3m0 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/><path fill="currentColor" d="M6.232 14a3 3 0 0 0-2.873 2.138l-1.587 5.287A2 2 0 0 0 3.688 24H9L7 14zM20.312 24H15l2-10h.768a3 3 0 0 1 2.873 2.138l1.587 5.287A2 2 0 0 1 20.312 24M11.567 16a.4.4 0 0 0-.399.365l-.63 7.2a.4.4 0 0 0 .399.435h2.127a.4.4 0 0 0 .398-.435l-.63-7.2a.4.4 0 0 0-.399-.365z"/></svg>',urban_gov_station_attendant:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M12 0c3.314 0 6 1.343 6 3 0 .907-.805 1.72-2.076 2.27q.075.588.076 1.192C16 9.775 14.21 12 12 12S8 9.775 8 6.462q0-.604.076-1.192C6.805 4.72 6 3.907 6 3c0-1.657 2.686-3 6-3m0 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/><path fill="currentColor" d="M6.232 14a3 3 0 0 0-2.873 2.138l-1.587 5.287A2 2 0 0 0 3.688 24H9L7 14zM20.312 24H15l2-10h.768a3 3 0 0 1 2.873 2.138l1.587 5.287A2 2 0 0 1 20.312 24M11.567 16a.4.4 0 0 0-.399.365l-.63 7.2a.4.4 0 0 0 .399.435h2.127a.4.4 0 0 0 .398-.435l-.63-7.2a.4.4 0 0 0-.399-.365z"/></svg>',urban_leisure_house_of_culture:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m20.556 10 .42 7.578a.4.4 0 0 1-.399.422h-2.154a.4.4 0 0 1-.4-.422L18.444 10H18.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zm-5 0 .42 7.578a.4.4 0 0 1-.399.422h-2.154a.4.4 0 0 1-.4-.422L13.445 10H13.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zm-5 0 .42 7.578a.4.4 0 0 1-.399.422H8.423a.4.4 0 0 1-.4-.422L8.444 10H8.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zm-5 0 .42 7.578a.4.4 0 0 1-.399.422H3.423a.4.4 0 0 1-.4-.422L3.444 10H3.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h2.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2zM1 20.5v-1.1c0-.22.18-.4.4-.4h21.2c.22 0 .4.18.4.4v1.1a.5.5 0 0 0 .5.5h.3c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h.3a.5.5 0 0 0 .5-.5m.234-15.607 10.6-4.818a.4.4 0 0 1 .332 0l10.6 4.818a.4.4 0 0 1 .234.365V6.6a.4.4 0 0 1-.4.4H1.4a.4.4 0 0 1-.4-.4V5.258a.4.4 0 0 1 .234-.365M12 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/></svg>',urban_med_first_aid_post:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M9.587 4.437c-.087.17-.087.395-.087.843V9.5H5.28c-.448 0-.672 0-.843.087a.8.8 0 0 0-.35.35C4 10.107 4 10.332 4 10.78v2.44c0 .448 0 .672.087.843a.8.8 0 0 0 .35.35c.17.087.395.087.843.087H9.5v4.22c0 .448 0 .672.087.843a.8.8 0 0 0 .35.35c.17.087.395.087.843.087h2.44c.448 0 .672 0 .843-.087a.8.8 0 0 0 .35-.35c.087-.17.087-.395.087-.843V14.5h4.22c.448 0 .672 0 .843-.087a.8.8 0 0 0 .35-.35c.087-.17.087-.395.087-.843v-2.44c0-.448 0-.672-.087-.843a.8.8 0 0 0-.35-.35c-.17-.087-.395-.087-.843-.087H14.5V5.28c0-.448 0-.672-.087-.843a.8.8 0 0 0-.35-.35C13.893 4 13.668 4 13.22 4h-2.44c-.448 0-.672 0-.843.087a.8.8 0 0 0-.35.35"/></svg>',urban_roadnet_parking_free_bld:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13.5 12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4v6zm-4 10h-4V2h8a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6h-4z"/></svg>',urban_service_factory:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M24 21H.256c-.089 0-.121-.01-.154-.027a.2.2 0 0 1-.075-.075C.009 20.865 0 20.833 0 20.744v-1.488c0-.089.01-.121.027-.154a.2.2 0 0 1 .075-.075C.135 19.009.167 19 .256 19H1V7.38a.2.2 0 0 1 .306-.17l7.537 5.182A.1.1 0 0 0 9 12.31v-.735c0-.03-.002-.04-.005-.052a.1.1 0 0 0-.016-.032.2.2 0 0 0-.04-.033L7 10.125V7.38a.2.2 0 0 1 .313-.165L13 11.12v.005l1.843 1.267A.1.1 0 0 0 15 12.31v-.735c0-.03-.002-.04-.005-.052a.1.1 0 0 0-.016-.032.2.2 0 0 0-.04-.033L13 10.125V7.38a.2.2 0 0 1 .313-.165l4.74 3.255L17.2 19h1l1.777-17.766c.008-.084.019-.113.037-.143a.2.2 0 0 1 .075-.068c.032-.015.062-.023.146-.023h1.53c.084 0 .114.008.146.023a.2.2 0 0 1 .075.068c.018.03.029.06.037.143zM4.256 15c-.089 0-.121.01-.154.027a.2.2 0 0 0-.075.075c-.018.033-.027.065-.027.154v1.488c0 .089.01.121.027.154a.2.2 0 0 0 .075.075c.033.018.065.027.154.027h1.488c.089 0 .121-.01.154-.027a.2.2 0 0 0 .075-.075c.018-.033.027-.065.027-.154v-1.488c0-.089-.01-.121-.027-.154a.2.2 0 0 0-.075-.075c-.033-.018-.065-.027-.154-.027zm4 0c-.089 0-.121.01-.154.027a.2.2 0 0 0-.075.075c-.018.033-.027.065-.027.154v1.488c0 .089.01.121.027.154a.2.2 0 0 0 .075.075c.033.018.065.027.154.027h1.488c.089 0 .121-.01.154-.027a.2.2 0 0 0 .075-.075c.018-.033.027-.065.027-.154v-1.488c0-.089-.01-.121-.027-.154a.2.2 0 0 0-.075-.075c-.033-.018-.065-.027-.154-.027zm4 0c-.089 0-.121.01-.154.027a.2.2 0 0 0-.075.075c-.018.033-.027.065-.027.154v1.488c0 .089.01.121.027.154a.2.2 0 0 0 .075.075c.033.018.065.027.154.027h1.488c.089 0 .121-.01.154-.027a.2.2 0 0 0 .075-.075c.018-.033.027-.065.027-.154v-1.488c0-.089-.01-.121-.027-.154a.2.2 0 0 0-.075-.075c-.033-.018-.065-.027-.154-.027z" clip-rule="evenodd"/></svg>',urban_service_nursing_room:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M15.5 5.25a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0"/><path fill="currentColor" fill-rule="evenodd" d="M14.562 9.765a3 3 0 0 1 2.215 1.543l1.875 3.467c.693 1.282.369 2.882-.796 3.757-.48.36-.923.682-1.17.834-.453.278-1.635.836-2.46 1.216-.51.235-1.112.09-1.465-.346a1.25 1.25 0 0 1 .302-1.832c.58-.373 1.208-.785 1.455-.978.358-.279.971-.917 1.303-1.27.068-.073-.003-.196-.101-.18-.612.103-1.958.23-3.025-.372-.99-.56-1.428-1.45-1.737-2.078-.137-.278-.248-.505-.371-.63-.401-.404-1.448-.3-1.448.692 0 .81.813 2.021 1.111 2.439a.15.15 0 0 1-.057.225c-.286.13-.884.387-1.346.489-.367.08-.93.113-1.314.126-.17.006-.26.205-.149.332.315.36.843.946 1.289 1.343.333.297.915.757 1.426 1.15.554.428.68 1.217.275 1.788a1.257 1.257 0 0 1-1.67.366c-.724-.431-1.672-1.023-2.253-1.493a32 32 0 0 1-1.549-1.38 2.93 2.93 0 0 1-.685-3.26l2.002-4.856a3 3 0 0 1 3.197-1.826zm-.294 5.746a2.004 2.004 0 1 0 0-4.008 2.004 2.004 0 0 0 0 4.008" clip-rule="evenodd"/></svg>',urban_service_ticket_transport:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M23 9.129a.4.4 0 0 1-.36.398q-.164.017-.269.039a3.001 3.001 0 0 0-.021 5.863q.112.025.291.044a.4.4 0 0 1 .36.398L23 19.6a.4.4 0 0 1-.4.4H1.4a.4.4 0 0 1-.4-.4v-3.724a.4.4 0 0 1 .358-.397l.044-.006a3 3 0 0 0-.042-5.95.4.4 0 0 1-.36-.398V5.4c0-.22.18-.4.4-.4h21.2c.22 0 .4.18.4.4zm-10.893 5.798 2.131 1.035a.38.38 0 0 0 .543-.39l-.306-2.405 1.637-1.77a.38.38 0 0 0-.207-.632l-2.334-.447-1.13-2.117a.38.38 0 0 0-.67 0l-1.129 2.117-2.334.447a.38.38 0 0 0-.207.631l1.637 1.77-.306 2.406a.38.38 0 0 0 .543.39z" clip-rule="evenodd"/></svg>',urban_service_toilet:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12.6 0h-1.2v24h1.2zM15.907 6.39a8 8 0 0 1 .285-.08 2.833 2.833 0 0 0 4.637-.031q.232.058.404.111a.72.72 0 0 1 .5.631l.334 3.374a.78.78 0 0 1-.51.816c-.25.09-.563.2-.897.307l1.301 5.322c.025.103.008.21-.067.285-.166.164-.553.455-1.346.656l-.298 4.472a.8.8 0 0 1-.798.747h-.504l-.26-5.001a13 13 0 0 1-.375 0L18.053 23h-.505a.8.8 0 0 1-.798-.747l-.298-4.472c-.793-.201-1.18-.492-1.346-.656-.075-.074-.092-.182-.067-.285l1.311-5.363a31 31 0 0 1-.773-.266.78.78 0 0 1-.509-.817l.34-3.374a.72.72 0 0 1 .499-.63M5.5 1a1.81 1.81 0 0 0-1.8 1.99l.15 1.517a1.657 1.657 0 0 0 3.3 0L7.3 2.99A1.81 1.81 0 0 0 5.501 1M3.282 6.428a9 9 0 0 0-.873.362A.73.73 0 0 0 2 7.46V12s.001 1.416 1.137 2.302l.148 7.913a.8.8 0 0 0 .8.785h.866L5.5 12.237 6.049 23h.866a.8.8 0 0 0 .8-.785l.148-7.91C9 13.417 9 12 9 12V7.46a.73.73 0 0 0-.409-.67 9 9 0 0 0-.872-.363 2.83 2.83 0 0 1-4.437 0M16.7 2.99a1.81 1.81 0 1 1 3.607-.297l.253-.253c.602-.602 1.464-.581 2.047.05L24 4l-.56.56c-.602.602-1.463.581-2.047-.05l-1.122-1.217-.122 1.214a1.658 1.658 0 0 1-3.298 0z"/></svg>',urban_service_toilet_disabled:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path fill="currentColor" fill-rule="evenodd" d="M9.834 13.818a.657.657 0 0 1-1.19.541l-2.351-4.03a.05.05 0 0 1 0-.054c.194-.304 2.09-3.23 3.559-4.043 1.55-.857 4.047-1.06 4.555.818.345 1.27.168 3.371.018 4.597a4.2 4.2 0 0 0-1.777-.367q.705.203 1.327.56a6.03 6.03 0 0 1 2.35 2.445c.25.48.437.996.55 1.54q.015-.18.015-.365c0-.569-.113-1.111-.32-1.605l3.084 1.258c.029.012.047.04.046.072l-.139 6.582a.8.8 0 0 1-1.596.059l-.449-4.765a.02.02 0 0 0-.009-.014c-.045-.025-.27-.146-.513-.263q.006.133.006.267a6 6 0 0 1-12 0c-.046-1.604.864-3.095 1.182-3.564a.19.19 0 0 1 .263-.049l.835.548c.1.066.122.205.053.303-.288.407-.933 1.464-.933 2.762a4.6 4.6 0 1 0 3.061-4.336zm-.821-2.43a6 6 0 0 1 1.263-.294 27 27 0 0 0-.165-1.237c-.11-.646-.259-.997-.259-.997s-.391.617-.575.855c-.174.225-.554.624-.598.67a.01.01 0 0 0-.002.01z" clip-rule="evenodd"/></svg>',urban_sport_skatingrink:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M1.745 8.99Q1.871 8.514 2 8q.467-1.87.061-4.61a.5.5 0 0 1 .31-.538L9.5 0q2.22 10.66 11.15 12.64A3 3 0 0 1 23 15.567V16q-3.5 1-7.5 1c-1.5 0-2.875-.5-4.25-1S8.5 15 7 15v1.5a.5.5 0 0 1-.5.5H1.894a.5.5 0 0 1-.487-.387Q1 14.853 1 13.5c0-1.657.343-2.97.745-4.51M17 17.965V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1H3v1a1 1 0 0 1-1 1H1l-1 2h21a3 3 0 0 0 3-3h-2a2 2 0 0 1-1.89-1.346q-1.517.236-3.11.311"/></svg>',vet_clinic:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M4 .8c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.219C4.38 0 4.52 0 4.8 0h1.4c.28 0 .42 0 .527.054a.5.5 0 0 1 .218.219C7 .38 7 .52 7 .8V3h2.2c.28 0 .42 0 .527.054a.5.5 0 0 1 .218.219C10 3.38 10 3.52 10 3.8v1.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C9.62 6 9.48 6 9.2 6H7v2.2c0 .28 0 .42-.054.527a.5.5 0 0 1-.219.218C6.62 9 6.48 9 6.2 9H4.8c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C4 8.62 4 8.48 4 8.2V6H1.8c-.28 0-.42 0-.527-.054a.5.5 0 0 1-.218-.219C1 5.62 1 5.48 1 5.2V3.8c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.219C1.38 3 1.52 3 1.8 3H4zM17.826 2.118 16.675.279c-.053-.085-.08-.127-.132-.153a.23.23 0 0 0-.145-.011c-.055.016-.082.047-.137.11-.374.425-1.034 1.514-.822 3.763-.303.453-.536.983-.77 1.512-.132.302-.265.603-.41.89q.52.57 1.161 1.05a9.5 9.5 0 0 0 2.954 1.479c.034-.29.086-.511.25-.866.117-.253.618-.896.834-1.072.332-.268.417-.325.482-.353l.861-.157c.584-.106.876-.158 1.117-.246a2.97 2.97 0 0 0 1.805-1.83c.085-.242.132-.527.227-1.097.01-.06.015-.09.013-.113a.2.2 0 0 0-.151-.18C23.788 3 23.758 3 23.698 3h-2.865l-.135-.202a1 1 0 0 0-.156-.207.5.5 0 0 0-.142-.09c-.058-.024-.124-.033-.254-.052zM18.242 10.34q-2.059-.579-3.662-1.78a10 10 0 0 1-1.143-1.002c-.532.415-1.33.882-2.252 1.423C8.787 10.386 5.554 12.28 4 15c-2.436 4.263-1 8-1 8h9c0-3-2-5-2-5s1.311-.048 2.822-.3l.9 4.047c.099.447.149.67.269.837.106.148.25.263.417.335.189.081.418.081.876.081h1.64a.077.077 0 0 0 .076-.077c0-.757-.372-1.458-.98-1.885.053-1.281.198-3.013.575-4.64q.24-.184.405-.398c.466-.604.731-1.595.878-2.644.019-.072.043-.178.066-.28L18 13l-.023-.08.023-.116c.039-.23.048-.334.067-.543z"/></svg>',veterinary:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M4 .8c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.219C4.38 0 4.52 0 4.8 0h1.4c.28 0 .42 0 .527.054a.5.5 0 0 1 .218.219C7 .38 7 .52 7 .8V3h2.2c.28 0 .42 0 .527.054a.5.5 0 0 1 .218.219C10 3.38 10 3.52 10 3.8v1.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C9.62 6 9.48 6 9.2 6H7v2.2c0 .28 0 .42-.054.527a.5.5 0 0 1-.219.218C6.62 9 6.48 9 6.2 9H4.8c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C4 8.62 4 8.48 4 8.2V6H1.8c-.28 0-.42 0-.527-.054a.5.5 0 0 1-.218-.219C1 5.62 1 5.48 1 5.2V3.8c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.219C1.38 3 1.52 3 1.8 3H4zM17.826 2.118 16.675.279c-.053-.085-.08-.127-.132-.153a.23.23 0 0 0-.145-.011c-.055.016-.082.047-.137.11-.374.425-1.034 1.514-.822 3.763-.303.453-.536.983-.77 1.512-.132.302-.265.603-.41.89q.52.57 1.161 1.05a9.5 9.5 0 0 0 2.954 1.479c.034-.29.086-.511.25-.866.117-.253.618-.896.834-1.072.332-.268.417-.325.482-.353l.861-.157c.584-.106.876-.158 1.117-.246a2.97 2.97 0 0 0 1.805-1.83c.085-.242.132-.527.227-1.097.01-.06.015-.09.013-.113a.2.2 0 0 0-.151-.18C23.788 3 23.758 3 23.698 3h-2.865l-.135-.202a1 1 0 0 0-.156-.207.5.5 0 0 0-.142-.09c-.058-.024-.124-.033-.254-.052zM18.242 10.34q-2.059-.579-3.662-1.78a10 10 0 0 1-1.143-1.002c-.532.415-1.33.882-2.252 1.423C8.787 10.386 5.554 12.28 4 15c-2.436 4.263-1 8-1 8h9c0-3-2-5-2-5s1.311-.048 2.822-.3l.9 4.047c.099.447.149.67.269.837.106.148.25.263.417.335.189.081.418.081.876.081h1.64a.077.077 0 0 0 .076-.077c0-.757-.372-1.458-.98-1.885.053-1.281.198-3.013.575-4.64q.24-.184.405-.398c.466-.604.731-1.595.878-2.644.019-.072.043-.178.066-.28L18 13l-.023-.08.023-.116c.039-.23.048-.334.067-.543z"/></svg>',viewpoint:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M13.5 16.662c-.367.207-.903.338-1.5.338s-1.133-.13-1.5-.338V19c0 2-2 4-5.25 4S0 21 0 19l1.009-6.499q.93-2.347 4.51-2.488a.5.5 0 0 0 .481-.5V9.5a.5.5 0 0 0-.5-.5h-.852a.5.5 0 0 1-.483-.627l.42-2.585c.193-.84 1.246-1.62 2.62-1.863 1.631-.288 3.097.293 3.274 1.297q.015.09.021.178v1.939C10.867 7.13 11.403 7 12 7s1.133.13 1.5.339V5.4q.006-.09.02-.178c.178-1.004 1.644-1.585 3.276-1.297 1.373.242 2.426 1.023 2.62 1.863l.42 2.585a.5.5 0 0 1-.484.627H18.5a.5.5 0 0 0-.5.5v.013a.5.5 0 0 0 .48.5q3.58.14 4.511 2.488L24 19c0 2-2 4-5.25 4s-5.23-2-5.25-4zm5.25 4.838c2.071 0 3.75-1.12 3.75-2.5s-1.679-2.5-3.75-2.5S15 17.62 15 19s1.679 2.5 3.75 2.5m-13.5 0C7.321 21.5 9 20.38 9 19s-1.679-2.5-3.75-2.5S1.5 17.62 1.5 19s1.679 2.5 3.75 2.5m6.75-6c.828 0 1.5-.448 1.5-1s-.672-1-1.5-1-1.5.448-1.5 1 .672 1 1.5 1m5.994-12.195a4.6 4.6 0 0 0-1.198-.38c-1.141-.201-2.201.022-2.796.518V2.75c0-.966.784-1.75 1.75-1.75 1.02 0 1.903.713 2.117 1.711zM10 3.443c-.595-.496-1.655-.72-2.796-.518a4.6 4.6 0 0 0-1.198.38l.127-.594A2.165 2.165 0 0 1 8.25 1C9.216 1 10 1.784 10 2.75z" clip-rule="evenodd"/></svg>',waterfall:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M16.539 15.997a.165.165 0 0 1-.166-.167c.166-2.508-.37-4.64-.957-6.97-.554-1.994-1.191-3.7-2.309-5.668C12.304 1.78 10.757 1 9.131 1h-4.85a.15.15 0 0 0-.125.233l.205.307c.192.288.514.46.86.46.375 0 .72.209.893.542l.221.427C8.224 6.78 9.09 11.331 8.96 15.803c-.004.11-.093.2-.2.178-.474-.095-.773-.545-.722-1.249.009-.114-.108-.196-.21-.144-.52.263-1.335.736-1.335 1.412 0 .862 1.233 1.399 1.878 1.657 1.28.514 3.085.843 5.104.843 2.018 0 3.776-.329 5.057-.843.644-.258 1.863-.913 1.863-1.774 0-1.06-1.093-1.946-2.735-2.381a.194.194 0 0 0-.241.172l-.021.25a.215.215 0 0 0 .145.219c.715.257 1.626.805 1.626 1.457 0 1.856-4.135 2.233-6.391 1.981-.17-.019-.146-.189.026-.193 6.572-.167 5.437-2.02 4.75-2.52-.066-.048-.153.007-.156.09-.017.492-.247 1.039-.86 1.039m-2.658-.008c.002.11.091.199.201.199l.6-.062c.11 0 .199-.09.196-.2a28.4 28.4 0 0 0-.442-4.517l-.08-.437v-.002c-.363-2.002-1.268-4.997-2.618-7.571-.276-.526-.822-.905-1.414-.9a.083.083 0 0 0-.071.125c1.662 2.904 2.779 6.66 3.203 8.967.268 1.463.387 2.914.425 4.398m-2.792.194a.203.203 0 0 1-.198-.202c-.013-1.518-.095-3.017-.318-4.522-.347-2.348-1.342-6.082-2.826-8.835a.077.077 0 0 1 .067-.113 1.46 1.46 0 0 1 1.317.8c1.31 2.653 2.1 5.78 2.429 8.001.231 1.565.33 3.133.332 4.713 0 .107-.087.19-.194.188z" clip-rule="evenodd"/><path fill="currentColor" d="M7.824 13.912a.32.32 0 0 0 .214-.238.016.016 0 0 0-.018-.019C5.877 14.024 4 15.2 4 16.5c0 2.485 3.966 4.5 9.475 4.5s9.926-2.015 9.926-4.5c0-1.798-2.602-2.97-5.98-3.69a.02.02 0 0 0-.023.016.193.193 0 0 0 .134.22l.01.002c1.675.498 3.865 1.149 3.865 2.952 0 1.342-1.424 2.152-2.504 2.585-1.426.572-3.316.915-5.428.915S9.426 19.157 8 18.585c-.711-.285-1.32-.637-1.76-1.054s-.744-.764-.744-1.36c0-1.297 1.253-1.918 2.328-2.259"/></svg>',waterpark:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M13.593 1.436q-2.757-1.94-7.17-1.26a.5.5 0 0 0-.275.85Q7.41 2.276 7.991 3.55C4.996 5.39 3 8.685 3 12.444v3.38c0 .812-.316 1.59-.879 2.165L.707 19.432A2.5 2.5 0 0 0 0 21.174v.418q0 .079.029.151c.082.21.314.311.52.228l2.983-1.218c.948-.387 2-.419 2.968-.09l.842.287A.505.505 0 0 0 8 20.466v-.312a2.5 2.5 0 0 0-.707-1.742l-.293-.3c-.597-.609-.828-1.54-.45-2.31l.42-.75-.002-.002.035-.056L7 15l.018-.03q.141-.219.288-.432Q10.615 10 23 10h.8a.2.2 0 0 0 .2-.2v-.386a1 1 0 0 0-.293-.707L22.65 7.65A8 8 0 0 0 15 2h-.736a3 3 0 0 0-.671-.564M20.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" clip-rule="evenodd"/><path fill="currentColor" d="M11 13.76v1.446c0 .428 0 .643.09.772a.5.5 0 0 0 .337.208c.156.023.347-.073.73-.265l.305-.152c1.284-.642 1.927-.963 2.396-1.442a4 4 0 0 0 .923-1.495c.096-.278.15-.573.18-.938-2.115.522-3.744 1.206-4.96 1.866"/></svg>',wc:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12.6 0h-1.2v24h1.2zM15.907 6.39a8 8 0 0 1 .285-.08 2.833 2.833 0 0 0 4.637-.031q.232.058.404.111a.72.72 0 0 1 .5.631l.334 3.374a.78.78 0 0 1-.51.816c-.25.09-.563.2-.897.307l1.301 5.322c.025.103.008.21-.067.285-.166.164-.553.455-1.346.656l-.298 4.472a.8.8 0 0 1-.798.747h-.504l-.26-5.001a13 13 0 0 1-.375 0L18.053 23h-.505a.8.8 0 0 1-.798-.747l-.298-4.472c-.793-.201-1.18-.492-1.346-.656-.075-.074-.092-.182-.067-.285l1.311-5.363a31 31 0 0 1-.773-.266.78.78 0 0 1-.509-.817l.34-3.374a.72.72 0 0 1 .499-.63M5.5 1a1.81 1.81 0 0 0-1.8 1.99l.15 1.517a1.657 1.657 0 0 0 3.3 0L7.3 2.99A1.81 1.81 0 0 0 5.501 1M3.282 6.428a9 9 0 0 0-.873.362A.73.73 0 0 0 2 7.46V12s.001 1.416 1.137 2.302l.148 7.913a.8.8 0 0 0 .8.785h.866L5.5 12.237 6.049 23h.866a.8.8 0 0 0 .8-.785l.148-7.91C9 13.417 9 12 9 12V7.46a.73.73 0 0 0-.409-.67 9 9 0 0 0-.872-.363 2.83 2.83 0 0 1-4.437 0M16.7 2.99a1.81 1.81 0 1 1 3.607-.297l.253-.253c.602-.602 1.464-.581 2.047.05L24 4l-.56.56c-.602.602-1.463.581-2.047-.05l-1.122-1.217-.122 1.214a1.658 1.658 0 0 1-3.298 0z"/></svg>',wedding:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M6 2h4l2 2-4 4-4-4zm8.629 17.088a7 7 0 1 0-.715-12.873c.533.465 1.01.992 1.421 1.569a5 5 0 1 1 .534 9.588 9 9 0 0 1-1.24 1.716m-3.244-2.408A6.97 6.97 0 0 1 10 12.5c0-1.289.348-2.496.956-3.533a5 5 0 0 1 1.424 1.619A5 5 0 0 0 12 12.5c0 .876.225 1.698.62 2.414a5 5 0 0 1-1.235 1.766M0 13a8 8 0 0 1 4.426-7.16l1.52 1.52A6.002 6.002 0 0 0 8 19a6 6 0 0 0 2.054-11.64l1.52-1.52A8 8 0 1 1 0 13m8-7L6 4h2z" clip-rule="evenodd"/></svg>',well:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12 22.286a6.857 6.857 0 0 0 6.857-6.857C18.857 10.286 12 1.714 12 1.714S5.143 10.286 5.143 15.43A6.857 6.857 0 0 0 12 22.286"/></svg>',wine:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M5.786 6.63c4.994-1.392 8.947 2.383 12.452.199C18.09 5.489 17.686 4.002 17 2.4H7c-.653 1.523-1.05 2.941-1.214 4.23m7.655 14.304 3.06.922a.7.7 0 0 1 .498.644.71.71 0 0 1-.458.693Q14.411 24 11.99 24q-2.416 0-4.512-.804A.745.745 0 0 1 7 22.5c0-.297.195-.558.479-.644l3.08-.924L11 17a5.1 5.1 0 0 0 2 0zM6.42 1h11.158c5.478 9.73.812 15-5.579 15C5.61 16 .943 10.73 6.42 1" clip-rule="evenodd"/></svg>',ya_electro_station:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M13.395 10.148 14.876 2 4.82 13.852h5.567L8.41 22l10.775-11.852z"/></svg>',yoga:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M12 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M13.553 18.055l2.862-1.15L16 14l-3.48-.695a.2.2 0 0 1 .028-.396l5.254-.31a1 1 0 0 0 .785-1.534l-2.273-3.572a2 2 0 0 0-.903-.766Q13.706 6 12 6t-3.41.727a2 2 0 0 0-.904.766L5.188 11.42a1 1 0 0 0 .527 1.486l5.116 1.705a.2.2 0 0 1-.063.39H8l-.324 1.942 2.44.992a5 5 0 0 0 3.437.121M5.539 17.16l5.12 2.058-3.153 1.267c-.43.15-.786.427-1.044.776l-2.093-.633a2 2 0 0 1-.152-.046c-.942-.331-1.443-1.379-1.118-2.34s1.35-1.472 2.292-1.141q.075.027.148.06M16.986 22.473l-3.26.986 1.547.468c.68.24 1.422-.13 1.656-.824.07-.21.087-.425.056-.63M7.879 21.413 18.46 17.16q.072-.032.148-.06c.942-.33 1.968.18 2.292 1.142.325.961-.176 2.009-1.118 2.34q-.075.027-.152.046l-10.904 3.3c-.68.238-1.422-.13-1.656-.825a1.336 1.336 0 0 1 .808-1.69"/></svg>',zoo:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M15 4.05c-.02 2.98-1.809 4.63-3.428 5.512.92-.834 1.562-2.155 1.393-4.246-.413-5.074-4.926-2.384-6.46-1.314Q.002 4.11 0 12.015 0 20.5 6 21v-1.17a3.001 3.001 0 0 1 1.264-5.819h.05l.007.006A3 3 0 0 1 9 14.764V19.5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077.481 0 .722 0 .885-.059a.88.88 0 0 0 .521-.428c.09-.149.145-.433.258-1.002.187-.948.589-2.116 1.45-2.77.829.168 1.638.259 2.386.259.86 0 1.649-.095 2.363-.276.877.65 1.284 1.831 1.473 2.787.113.569.169.853.258 1.002a.88.88 0 0 0 .521.428c.164.059.404.059.885.059.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883V10h-.014C22.778 6.293 20.231 4 16 4q-.486 0-1 .05M5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/></svg>'},i=Object.freeze({position:"top",offset:0,show:!0});const a={props:{coordinates:{type:Object,required:!0},source:String,zIndex:{type:Number,default:void 0},properties:Object,id:String,disableRoundCoordinates:{type:Boolean,default:void 0},hideOutsideViewport:{type:[Object,Boolean],default:void 0},draggable:{type:Boolean,default:void 0},mapFollowsOnDrag:{type:[Boolean,Object]},onDragStart:Function,onDragEnd:Function,onDragMove:Function,blockEvents:{type:Boolean,default:void 0},blockBehaviors:{type:Boolean,default:void 0},onDoubleClick:Function,onClick:Function,onFastClick:Function,content:{type:[Function,String],required:!0},position:{type:String,default:i.position},offset:{type:Number,default:i.offset},show:{type:Boolean,default:i.show},onClose:{type:Function},onOpen:{type:Function}}};var l,s,c;class h extends ymaps3.YMapComplexEntity{get isOpen(){return this._props.show}get coordinates(){return this._marker.coordinates}_togglePopup(t){var e,n,r,o;const i=null!=t?t:!this._props.show;this._markerElement.classList.toggle("ymaps3--popup-marker__hide",!i),i?null===(n=(e=this._props).onOpen)||void 0===n||n.call(e):null===(o=(r=this._props).onClose)||void 0===o||o.call(r),this._props.show=i}_onAttach(){this._markerElement=document.createElement("ymaps3"),this._markerElement.classList.add("ymaps3--popup-marker"),this._popupContainer=document.createElement("ymaps3"),this._popupContainer.classList.add("ymaps3--popup-marker_container"),"string"==typeof this._props.content?this._popupContainer.textContent=this._props.content:this._popupContainer.appendChild(this._props.content()),this._popupTail=document.createElement("ymaps3"),this._popupTail.classList.add("ymaps3--popup-marker_tail"),this._popupTail.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="9" fill="none"><path fill="currentColor" d="M24 8v1H0V8h.5C5.92 8 10.653 5.92 11.544.399a.46.46 0 0 1 .912 0C13.346 5.92 18.08 8 23.5 8z"/></svg>',this._togglePopup(this._props.show),this._updatePosition(),this._updateOffset(),this._markerElement.appendChild(this._popupContainer),this._markerElement.appendChild(this._popupTail),this._marker=new ymaps3.YMapMarker(this._props,this._markerElement),this.addChild(this._marker),this._watchContext(ymaps3.ThemeContext,(()=>this._updateTheme()),{immediate:!0})}_onUpdate(t){void 0!==t.position&&this._updatePosition(),void 0!==t.offset&&this._updateOffset(),void 0!==t.content&&(this._popupContainer.innerHTML="","string"==typeof this._props.content?this._popupContainer.textContent=this._props.content:this._popupContainer.appendChild(this._props.content())),void 0!==t.show&&this._togglePopup(t.show),this._marker.update(this._props)}_onDetach(){this.removeChild(this._marker)}_updateTheme(){const t=this._consumeContext(ymaps3.ThemeContext),{theme:e}=t;this._popupContainer.classList.toggle("ymaps3--popup-marker__dark","dark"===e),this._popupTail.classList.toggle("ymaps3--popup-marker__dark","dark"===e)}_updateOffset(){this._markerElement.style.setProperty("--ymaps3-default-offset",`${this._props.offset}px`)}_updatePosition(){const{position:t}=this._props;let e,n;const r={top:"vertical",left:"horizontal",bottom:"vertical",right:"horizontal"};if("top"===t||"bottom"===t)e=t;else if("left"===t||"right"===t)n=t;else{const[o,i]=t.split(" ");"vertical"===r[o]&&"horizontal"===r[i]?(e=o,n=i):"horizontal"===r[o]&&"vertical"===r[i]&&(e=i,n=o)}this._markerElement.classList.toggle("ymaps3--popup-marker__position-top","top"===e),this._markerElement.classList.toggle("ymaps3--popup-marker__position-bottom","bottom"===e),this._markerElement.classList.toggle("ymaps3--popup-marker__position-left","left"===n),this._markerElement.classList.toggle("ymaps3--popup-marker__position-right","right"===n)}}l=ymaps3.overrideKeyReactify,s=ymaps3.overrideKeyVuefy,c=ymaps3.optionsKeyVuefy,h.defaultProps=i,h[l]=(t,{reactify:e,React:n,ReactDOM:r})=>{const o=e.entity(t);return n.forwardRef(((t,e)=>{const[i]=n.useState(document.createElement("ymaps3")),[a,l]=n.useState(),s=n.useMemo((()=>("string"==typeof t.content?l(n.createElement(n.Fragment,null,t.content)):l(t.content()),()=>i)),[t.content,i]);return n.createElement(n.Fragment,null,n.createElement(o,Object.assign({},t,{content:s,ref:e})),r.createPortal(a,i))}))},h[s]=(t,e,{vuefy:n,Vue:r})=>{const o=n.entity(t),{content:i}=e,a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(e,["content"]);return r.defineComponent({name:"YMapPopupMarker",props:a,slots:Object,setup(t,{slots:e,expose:n}){const i=r.ref(null),a=document.createElement("ymaps3"),l=r.ref(null),s=r.computed((()=>{var t;return null===(t=l.value)||void 0===t?void 0:t.entity})),c=r.computed((()=>{var t;return i.value=null===(t=e.content)||void 0===t?void 0:t.call(e),()=>a}));return n({entity:s}),()=>r.h(o,Object.assign(Object.assign({},t),{content:c.value,ref:l}),(()=>r.h(r.Teleport,{to:a},[i.value])))}})},h[c]=a;const u=Object.freeze({color:"red",size:"small",staticHint:!0}),p={props:{coordinates:{type:Object,required:!0},source:String,zIndex:{type:Number,default:void 0},properties:Object,id:String,disableRoundCoordinates:{type:Boolean,default:void 0},hideOutsideViewport:{type:[Object,Boolean],default:void 0},draggable:{type:Boolean,default:void 0},mapFollowsOnDrag:{type:[Boolean,Object]},onDragStart:Function,onDragEnd:Function,onDragMove:Function,blockEvents:{type:Boolean,default:void 0},blockBehaviors:{type:Boolean,default:void 0},onDoubleClick:Function,onClick:Function,onFastClick:Function,iconName:{type:String},color:{type:[Object,String],default:u.color},size:{type:String,default:u.size},title:{type:String},subtitle:{type:String},staticHint:{type:Boolean,default:u.staticHint},popup:{type:Object}}},d='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path fill="currentColor" d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14"/></svg>',v='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none"><path fill="currentColor" d="M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0"/></svg>',g='<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><path fill="currentColor" d="M4 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/></svg>',f='<svg xmlns="http://www.w3.org/2000/svg" width="46" height="61" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M23 61a2 2 0 1 1 0-4 2 2 0 0 1 0 4" clip-rule="evenodd"/><path fill="currentColor" d="M28.342 45.376q-4.614 1.395-4.831 6.147a.5.5 0 0 1-.5.477h-.022a.5.5 0 0 1-.5-.477q-.216-4.752-4.831-6.147C7.53 42.968 0 33.863 0 23 0 10.298 10.298 0 23 0s23 10.298 23 23c0 10.863-7.531 19.968-17.658 22.376"/></svg>',m='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12"/></svg>',_='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10"/></svg>';var w,y,C;const M="#FFFFFF",x="ymaps3--default-marker__background",L="ymaps3--default-marker__stroke",b="ymaps3--default-marker__icon",z="ymaps3--hint__big",E="ymaps3--hint__stable",H="ymaps3--hint__hovered";class k extends ymaps3.YMapComplexEntity{get coordinates(){return this._marker.coordinates}constructor(t){super(t),this._onMarkerClick=(...t)=>{var e,n;this._popup&&this._popup.update({show:this._popup.isOpen}),null===(n=(e=this._props).onClick)||void 0===n||n.call(e,...t)},this._onMarkerDragMove=t=>{var e,n;this._popup&&this._popup.update({coordinates:t}),null===(n=(e=this._props).onDragMove)||void 0===n||n.call(e,t)}}_onAttach(){this._color=this._getColor();const{size:t,title:e,subtitle:n}=this._props;switch(this._markerElement=document.createElement("ymaps3"),this._markerElement.classList.add("ymaps3--default-marker-point"),this._updateMarkerSize(),t){case"normal":const t=this._createNormalPin();this._icon=t.icon,this._background=t.background,this._stroke=t.stroke;break;case"small":const e=this._createSmallPoi();this._icon=e.icon,this._background=e.background,this._stroke=e.stroke;break;case"micro":const n=this._createMicroPoi();this._stroke=n.stroke,this._background=n.background,this._icon=n.icon;break;default:throw new Error("Unknown size has been specified. The following sizes are available: normal, small and micro.")}this._markerElement.appendChild(this._background),this._stroke&&this._markerElement.appendChild(this._stroke),this._icon&&this._markerElement.appendChild(this._icon),this._hintContainer=this._createHintContainer(),(e||n)&&this._markerElement.appendChild(this._hintContainer),this._marker=new ymaps3.YMapMarker(Object.assign(Object.assign({},this._props),{onClick:this._onMarkerClick,onDragMove:this._onMarkerDragMove}),this._markerElement),this.addChild(this._marker),this._props.popup&&(this._popup=this._createPopupMarker(),this.addChild(this._popup)),this._watchContext(ymaps3.ThemeContext,(()=>this._updateTheme()),{immediate:!0})}_onUpdate(t,e){const{title:n,subtitle:r}=this._props;if(void 0!==t.color&&(this._color=this._getColor(),this._updateTheme()),this._props.popup!==e.popup&&(void 0===this._props.popup&&void 0!==e.popup?(this.removeChild(this._popup),this._popup=void 0):void 0!==this._props.popup&&void 0===e.popup?(this._popup=this._createPopupMarker(),this.addChild(this._popup)):this._popup.update(this._props.popup)),void 0!==t.size&&(this._updateMarkerSize(),this._updateSVG(),this._popup&&this._popup.update({offset:this._getPopupOffset()})),this._props.iconName!==e.iconName){const t=this._getIcon();this._icon.innerHTML=t}this._titleHint.textContent=null!=n?n:"",this._subtitleHint.textContent=null!=r?r:"",this._hintContainer.classList.toggle(z,void 0!==r);const o=this._markerElement.contains(this._hintContainer);o||void 0===n&&void 0===r?o&&void 0===n&&void 0===r&&this._markerElement.removeChild(this._hintContainer):this._markerElement.appendChild(this._hintContainer),void 0!==t.staticHint&&(this._hintContainer.classList.toggle(E,this._props.staticHint),this._hintContainer.classList.toggle(H,!this._props.staticHint)),this._marker.update(Object.assign(Object.assign({},this._props),{onClick:this._onMarkerClick}))}_onDetach(){this._popup&&this.removeChild(this._popup),this.removeChild(this._marker)}_createPopupMarker(){var t,e;return new h(Object.assign(Object.assign(Object.assign({},this._props),this._props.popup),{draggable:!1,show:null!==(t=this._props.popup.show)&&void 0!==t&&t,offset:null!==(e=this._props.popup.offset)&&void 0!==e?e:this._getPopupOffset(),zIndex:1e3}))}_createHintContainer(){const{title:t,subtitle:e,staticHint:n}=this._props,r=document.createElement("ymaps3");return this._titleHint=document.createElement("ymaps3"),this._subtitleHint=document.createElement("ymaps3"),r.classList.add("ymaps3--hint"),r.classList.add(n?E:H),r.classList.toggle(z,void 0!==e),this._titleHint.classList.add("ymaps3--hint-title"),this._subtitleHint.classList.add("ymaps3--hint-subtitle"),this._titleHint.textContent=null!=t?t:"",this._subtitleHint.textContent=null!=e?e:"",r.appendChild(this._titleHint),r.appendChild(this._subtitleHint),r}_updateTheme(){var t,e,n,r;const o=this._consumeContext(ymaps3.ThemeContext).theme,i="light"===o?null!==(t=this._color.strokeDay)&&void 0!==t?t:M:null!==(e=this._color.strokeNight)&&void 0!==e?e:M,a="light"===o?null!==(n=this._color.iconDay)&&void 0!==n?n:M:null!==(r=this._color.iconNight)&&void 0!==r?r:M,l="light"===o?this._color.day:this._color.night;switch(this._markerElement.classList.toggle("ymaps3--default-marker-point_dark","dark"===o),this._props.size){case"normal":case"small":this._background.style.color=l,this._stroke.style.color=i,this._icon.style.color=a;break;case"micro":this._background.style.color=l,this._stroke.style.color=i}}_updateMarkerSize(){const{size:t}=this._props;this._markerElement.classList.toggle("ymaps3--pin","normal"===t),this._markerElement.classList.toggle("ymaps3--small-poi","small"===t),this._markerElement.classList.toggle("ymaps3--micro-poi","micro"===t)}_updateSVG(){const{size:t}=this._props;switch(this._icon.innerHTML=this._getIcon(),t){case"normal":this._background.innerHTML=f,this._stroke.innerHTML=g;break;case"small":this._background.innerHTML=_,this._stroke.innerHTML=m;break;case"micro":this._background.innerHTML=v,this._stroke.innerHTML=d}}_getPopupOffset(){var t;const{size:e}=this._props;let n;switch(e){case"normal":const e=null!==(t=this._props.popup.position)&&void 0!==t?t:"top";n=e.includes("top")?69:e.includes("bottom")?8:31;break;case"small":n=20;break;case"micro":n=15}return n}_getIcon(){var t;const{size:e}=this._props;return"micro"===e||void 0===this._props.iconName?"":null!==(t=o[this._props.iconName])&&void 0!==t?t:""}_getColor(){const t=this._props.color;if("string"==typeof t){if(!r[t])throw new Error("The color should be one of the available color presets. If you need a custom color, pass it as an object with fields for day and night.");return r[t]}return t}_createNormalPin(){const t=document.createElement("ymaps3"),e=document.createElement("ymaps3"),n=document.createElement("ymaps3");return t.classList.add(x),t.innerHTML=f,e.classList.add(L),e.innerHTML=g,n.classList.add(b),n.innerHTML=this._getIcon(),{background:t,icon:n,stroke:e}}_createSmallPoi(){const t=document.createElement("ymaps3"),e=document.createElement("ymaps3"),n=document.createElement("ymaps3");return t.classList.add(x),t.innerHTML=_,e.classList.add(L),e.innerHTML=m,n.classList.add(b),n.innerHTML=this._getIcon(),{background:t,icon:n,stroke:e}}_createMicroPoi(){const t=document.createElement("ymaps3"),e=document.createElement("ymaps3"),n=document.createElement("ymaps3");return t.classList.add(x),t.innerHTML=v,e.classList.add(L),e.innerHTML=d,n.classList.add(b),{background:t,stroke:e,icon:n}}}w=ymaps3.overrideKeyReactify,y=ymaps3.overrideKeyVuefy,C=ymaps3.optionsKeyVuefy,k.defaultProps=u,k[w]=(t,{reactify:e,React:n,ReactDOM:r})=>{const o=e.entity(t);return n.forwardRef(((t,e)=>{const[i]=n.useState(document.createElement("ymaps3")),[a,l]=n.useState(),s=n.useMemo((()=>{if(void 0!==t.popup)return"string"==typeof t.popup.content?l(n.createElement(n.Fragment,null,t.popup.content)):"function"==typeof t.popup.content&&l(t.popup.content()),Object.assign(Object.assign({},t.popup),{content:()=>i})}),[t.popup,i]);return n.createElement(n.Fragment,null,n.createElement(o,Object.assign({},t,{popup:s,ref:e})),r.createPortal(a,i))}))},k[y]=(t,e,{vuefy:n,Vue:r})=>{const o=n.entity(t);return r.defineComponent({name:"YMapDefaultMarker",props:e,slots:Object,setup(t,{slots:e,expose:n}){const i=r.ref(null),a=document.createElement("ymaps3"),l=r.ref(null),s=r.computed((()=>{var t;return null===(t=l.value)||void 0===t?void 0:t.entity})),c=r.computed((()=>{var n,r,o;if(void 0!==e.popupContent||void 0!==(null===(n=t.popup)||void 0===n?void 0:n.content))return"string"==typeof(null===(r=t.popup)||void 0===r?void 0:r.content)?i.value=t.popup.content:i.value=null===(o=e.popupContent)||void 0===o?void 0:o.call(e),Object.assign(Object.assign({},t.popup),{content:()=>a})}));return n({entity:s}),()=>r.h(o,Object.assign(Object.assign({},t),{popup:c.value,ref:l}),(()=>r.h(r.Teleport,{to:a},[i.value])))}})},k[C]=p},931:(t,e,n)=>{n.a(t,(async(t,r)=>{try{n.d(e,{R:()=>v});var o,i=n(391),a=n(578),l=n(638),s=n(352);const{YMapRuler:t}=await ymaps3.import("@yandex/ymaps3-ruler"),c="#FF4433",h="#FF5B4D",u="#FF191914",p="#FF9A9A29",d={props:{type:String,points:Array,editable:{type:Boolean,default:void 0},source:String,zIndex:Number,onUpdate:Function,onUpdateEnd:Function,onUpdateStart:Function,onFinish:Function}};class v extends ymaps3.YMapComplexEntity{constructor(t){super(t),this._updateTheme=()=>{const t=this._consumeContext(ymaps3.ThemeContext);this._previewPoint.innerHTML="dark"===(null==t?void 0:t.theme)?a:l;const e={simplificationRate:0,fill:"dark"===(null==t?void 0:t.theme)?p:u,stroke:[{width:2,color:"dark"===(null==t?void 0:t.theme)?h:c}]};this._ruler.update({geometry:{style:e}})},this._onDeleteAllPoints=()=>{this.update({points:[]})},this._onFinish=()=>{var t,e;this.update({editable:!1}),null===(e=(t=this._props).onFinish)||void 0===e||e.call(t)},this._previewPoint=(0,i.$)("ymaps3--default-ruler-preview-point")}_onAttach(){this._ruler=new t(Object.assign(Object.assign({},this._props),{point:t=>new s.c(Object.assign(Object.assign({},t),{onDeleteAllPoints:this._onDeleteAllPoints,onFinish:this._onFinish})),geometry:{style:{}},previewPoint:this._previewPoint})),this.addChild(this._ruler),this._watchContext(ymaps3.ThemeContext,this._updateTheme,{immediate:!0})}_onUpdate(){this._ruler.update(this._props)}_onDetach(){this.removeChild(this._ruler)}}o=ymaps3.optionsKeyVuefy,v[o]=d,r()}catch(t){r(t)}}),1)},352:(t,e,n)=>{n.d(e,{c:()=>c});var r=n(391),o=n(578),i=n(638),a=n(609);function l(t){if(t>100)return Math.round(t);const e=Math.pow(10,t>10?1:2);return Math.round(t*e)/e}const s="ymaps3--default-ruler-point__hidden";class c extends ymaps3.YMapComplexEntity{get _isLastPoint(){return this._props.state.index===this._props.state.totalCount-1}constructor(t){super(t,{container:!0}),this._isHovered=!1,this._updateTheme=()=>{const t=this._consumeContext(ymaps3.ThemeContext);this._pointElement.classList.toggle("_dark","dark"===(null==t?void 0:t.theme)),this._pointElement.innerHTML="dark"===(null==t?void 0:t.theme)?o:i},this._onDeleteAllHandler=t=>{this._props.onDeleteAllPoints(),t.stopPropagation()},this._onFinishHandler=t=>{this._props.onFinish(),t.stopPropagation()};const{state:e}=this._props;this._pointMarker=this._createPointMarker(this._props),this.addChild(this._pointMarker),this._tooltipMarker=this._createTooltipMarker(e),this.addChild(this._tooltipMarker),this._measurementsElement.classList.toggle(s,!this._isLastPoint||1===e.totalCount),this._actionsElement.classList.toggle(s,!this._isLastPoint||1===e.totalCount),this._listener=new ymaps3.YMapListener({onMouseEnter:t=>{t&&t.entity===this._pointMarker&&this._onMouseEnter()},onMouseLeave:t=>{t&&t.entity===this._pointMarker&&this._onMouseLeave()}}),this._addDirectChild(this._listener)}_createTooltipMarker(t){this._tooltipElement=(0,r.$)("ymaps3--default-ruler-point_tooltip"),this._measurementsElement=(0,r.$)("ymaps3--default-ruler-point_measurements"),this._measurementsElement.textContent=this._getMeasurementsLabel(t.measurements),this._tooltipElement.appendChild(this._measurementsElement),this._actionsElement=(0,r.$)("ymaps3--default-ruler-point_actions"),this._deleteButton=document.createElement("button"),this._deleteButton.title="Remove all points",this._deleteButton.addEventListener("click",this._onDeleteAllHandler),this._deleteButton.innerHTML='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="icon_trash" fill="currentColor"><rect id="Rectangle 37121" x="2" y="3" width="12" height="2" /><rect id="Rectangle 37122" x="6" y="1" width="4" height="3" rx="1" /><path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M13 6H3L4 15H5H6.25757H7.16667H8.83333H9.74243H11H12L13 6ZM9.97812 13L10.5 8.57144H8.83333V13H9.97812ZM7.16667 13V8.57144H5.5L6.02188 13H7.16667Z" /></g></svg>\n',this._actionsElement.appendChild(this._deleteButton),this._finishButton=document.createElement("button"),this._finishButton.title="Finish editing the ruler",this._finishButton.addEventListener("click",this._onFinishHandler),this._finishButton.classList.add("ymaps3--default-ruler-point_actions__finish");const e=document.createElement("span");e.innerHTML='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="check" fill="currentColor"><path id="Union" d="M6.66697 10.1146L12.7952 3.98633L13.738 4.92913L6.66697 12.0002L2.42432 7.75758L3.36712 6.81478L6.66697 10.1146Z" /></g></svg>\n',this._finishButton.appendChild(e);const n=document.createElement("span");return n.textContent="Finish",this._finishButton.appendChild(n),this._actionsElement.appendChild(this._finishButton),this._tooltipElement.appendChild(this._actionsElement),new ymaps3.YMapMarker({source:t.source,coordinates:t.coordinates},this._tooltipElement)}_createPointMarker(t){const{state:e,onDragEnd:n,onDragMove:o,onDragStart:i,onDelete:a}=t;return this._pointElement=(0,r.$)("ymaps3--default-ruler-point_icon"),new ymaps3.YMapMarker({source:e.source,coordinates:e.coordinates,draggable:e.editable,onDragEnd:n,onDragMove:o,onDragStart:i,onDoubleClick:(t,e)=>{e.stopPropagation(),a()}},this._pointElement)}_onAttach(){this._watchContext(ymaps3.ThemeContext,this._updateTheme,{immediate:!0})}_onDetach(){this._deleteButton.removeEventListener("click",this._onDeleteAllHandler),this._finishButton.removeEventListener("click",this._onFinishHandler)}_onUpdate(t){if(void 0!==t.state){const{state:e}=t;this._measurementsElement.textContent=this._getMeasurementsLabel(e.measurements),this._pointMarker.update({source:e.source,coordinates:e.coordinates,draggable:e.editable}),this._tooltipMarker.update({source:e.source,coordinates:e.coordinates})}this._measurementsElement.classList.toggle(s,!this._isHovered&&!this._isLastPoint||1===this._props.state.totalCount),this._props.state.editable?this._actionsElement.classList.toggle(s,!this._isLastPoint||1===this._props.state.totalCount):this._actionsElement.classList.add(s)}_onMouseEnter(){this._isHovered=!0,this._measurementsElement.classList.remove(s)}_onMouseLeave(){this._isHovered=!1,this._measurementsElement.classList.toggle(s,!this._isLastPoint)}_getMeasurementsLabel(t){return"planimeter"===t.type?(n=t.area)>9e5?a.ZP.t("area.squareKilometers",{value:l(n/1e6)}):a.ZP.t("area.squareMeters",{value:l(n)}):"ruler"===t.type?(e=t.distance)>900?a.ZP.t("distance.kilometers",{value:l(e/1e3)}):a.ZP.t("distance.meters",{value:l(e)}):"";var e,n}}},178:(t,e,n)=>{n.a(t,(async(t,r)=>{try{n.d(e,{R:()=>o.R});var o=n(931),i=t([o]);o=(i.then?(await i)():i)[0],r()}catch(t){r(t)}}))},578:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" fill="#FF5B4D" stroke="white" stroke-width="2"/></svg>\n'},638:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" fill="#FF4433" stroke="white" stroke-width="2" /></svg>\n'},609:(t,e,n)=>{n.d(e,{ZP:()=>U});const r={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class o{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(t,e)}init(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=e.prefix||"i18next:",this.logger=t||r,this.options=e,this.debug=e.debug}log(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"log","",!0)}warn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"warn","",!0)}error(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"error","")}deprecate(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(t,e,n,r){return r&&!this.debug?null:("string"==typeof t[0]&&(t[0]=`${n}${this.prefix} ${t[0]}`),this.logger[e](t))}create(t){return new o(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return(t=t||this.options).prefix=t.prefix||this.prefix,new o(this.logger,t)}}var i=new o;class a{constructor(){this.observers={}}on(t,e){return t.split(" ").forEach((t=>{this.observers[t]||(this.observers[t]=new Map);const n=this.observers[t].get(e)||0;this.observers[t].set(e,n+1)})),this}off(t,e){this.observers[t]&&(e?this.observers[t].delete(e):delete this.observers[t])}emit(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.observers[t]&&Array.from(this.observers[t].entries()).forEach((t=>{let[e,r]=t;for(let t=0;t<r;t++)e(...n)})),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach((e=>{let[r,o]=e;for(let e=0;e<o;e++)r.apply(r,[t,...n])}))}}const l=()=>{let t,e;const n=new Promise(((n,r)=>{t=n,e=r}));return n.resolve=t,n.reject=e,n},s=t=>null==t?"":""+t,c=/###/g,h=t=>t&&t.indexOf("###")>-1?t.replace(c,"."):t,u=t=>!t||"string"==typeof t,p=(t,e,n)=>{const r="string"!=typeof e?e:e.split(".");let o=0;for(;o<r.length-1;){if(u(t))return{};const e=h(r[o]);!t[e]&&n&&(t[e]=new n),t=Object.prototype.hasOwnProperty.call(t,e)?t[e]:{},++o}return u(t)?{}:{obj:t,k:h(r[o])}},d=(t,e,n)=>{const{obj:r,k:o}=p(t,e,Object);if(void 0!==r||1===e.length)return void(r[o]=n);let i=e[e.length-1],a=e.slice(0,e.length-1),l=p(t,a,Object);for(;void 0===l.obj&&a.length;)i=`${a[a.length-1]}.${i}`,a=a.slice(0,a.length-1),l=p(t,a,Object),l&&l.obj&&void 0!==l.obj[`${l.k}.${i}`]&&(l.obj=void 0);l.obj[`${l.k}.${i}`]=n},v=(t,e)=>{const{obj:n,k:r}=p(t,e);if(n)return n[r]},g=(t,e,n)=>{for(const r in e)"__proto__"!==r&&"constructor"!==r&&(r in t?"string"==typeof t[r]||t[r]instanceof String||"string"==typeof e[r]||e[r]instanceof String?n&&(t[r]=e[r]):g(t[r],e[r],n):t[r]=e[r]);return t},f=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const _=t=>"string"==typeof t?t.replace(/[&<>"'\/]/g,(t=>m[t])):t,w=[" ",",","?","!",";"],y=new class{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const e=this.regExpMap.get(t);if(void 0!==e)return e;const n=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,n),this.regExpQueue.push(t),n}}(20),C=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!t)return;if(t[e])return t[e];const r=e.split(n);let o=t;for(let t=0;t<r.length;){if(!o||"object"!=typeof o)return;let e,i="";for(let a=t;a<r.length;++a)if(a!==t&&(i+=n),i+=r[a],e=o[i],void 0!==e){if(["string","number","boolean"].indexOf(typeof e)>-1&&a<r.length-1)continue;t+=a-t+1;break}o=e}return o},M=t=>t&&t.indexOf("_")>0?t.replace("_","-"):t;class x extends a{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=e,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)}getResource(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,i=void 0!==r.ignoreJSONStructure?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,e],n&&(Array.isArray(n)?a.push(...n):"string"==typeof n&&o?a.push(...n.split(o)):a.push(n)));const l=v(this.data,a);return!l&&!e&&!n&&t.indexOf(".")>-1&&(t=a[0],e=a[1],n=a.slice(2).join(".")),l||!i||"string"!=typeof n?l:C(this.data&&this.data[t]&&this.data[t][e],n,o)}addResource(t,e,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const i=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator;let a=[t,e];n&&(a=a.concat(i?n.split(i):n)),t.indexOf(".")>-1&&(a=t.split("."),r=e,e=a[1]),this.addNamespaces(e),d(this.data,a,r),o.silent||this.emit("added",t,e,n,r)}addResources(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const r in n)("string"==typeof n[r]||Array.isArray(n[r]))&&this.addResource(t,e,r,n[r],{silent:!0});r.silent||this.emit("added",t,e,n)}addResourceBundle(t,e,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},a=[t,e];t.indexOf(".")>-1&&(a=t.split("."),r=n,n=e,e=a[1]),this.addNamespaces(e);let l=v(this.data,a)||{};i.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?g(l,n,o):l={...l,...n},d(this.data,a,l),i.silent||this.emit("added",t,e,n)}removeResourceBundle(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)}hasResourceBundle(t,e){return void 0!==this.getResource(t,e)}getResourceBundle(t,e){return e||(e=this.options.defaultNS),"v1"===this.options.compatibilityAPI?{...this.getResource(t,e)}:this.getResource(t,e)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const e=this.getDataByLanguage(t);return!!(e&&Object.keys(e)||[]).find((t=>e[t]&&Object.keys(e[t]).length>0))}toJSON(){return this.data}}var L={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,r,o){return t.forEach((t=>{this.processors[t]&&(e=this.processors[t].process(e,n,r,o))})),e}};const b={};class z extends a{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var n,r;super(),n=t,r=this,["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"].forEach((t=>{n[t]&&(r[t]=n[t])})),this.options=e,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=i.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==t)return!1;const n=this.resolve(t,e);return n&&void 0!==n.res}extractFromKey(t,e){let n=void 0!==e.nsSeparator?e.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");const r=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator;let o=e.ns||this.options.defaultNS||[];const i=n&&t.indexOf(n)>-1,a=!(this.options.userDefinedKeySeparator||e.keySeparator||this.options.userDefinedNsSeparator||e.nsSeparator||((t,e,n)=>{e=e||"",n=n||"";const r=w.filter((t=>e.indexOf(t)<0&&n.indexOf(t)<0));if(0===r.length)return!0;const o=y.getRegExp(`(${r.map((t=>"?"===t?"\\?":t)).join("|")})`);let i=!o.test(t);if(!i){const e=t.indexOf(n);e>0&&!o.test(t.substring(0,e))&&(i=!0)}return i})(t,n,r));if(i&&!a){const e=t.match(this.interpolator.nestingRegexp);if(e&&e.length>0)return{key:t,namespaces:o};const i=t.split(n);(n!==r||n===r&&this.options.ns.indexOf(i[0])>-1)&&(o=i.shift()),t=i.join(r)}return"string"==typeof o&&(o=[o]),{key:t,namespaces:o}}translate(t,e,n){if("object"!=typeof e&&this.options.overloadTranslationOptionHandler&&(e=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof e&&(e={...e}),e||(e={}),null==t)return"";Array.isArray(t)||(t=[String(t)]);const r=void 0!==e.returnDetails?e.returnDetails:this.options.returnDetails,o=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator,{key:i,namespaces:a}=this.extractFromKey(t[t.length-1],e),l=a[a.length-1],s=e.lng||this.language,c=e.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(s&&"cimode"===s.toLowerCase()){if(c){const t=e.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${t}${i}`,usedKey:i,exactUsedKey:i,usedLng:s,usedNS:l,usedParams:this.getUsedParamsDetails(e)}:`${l}${t}${i}`}return r?{res:i,usedKey:i,exactUsedKey:i,usedLng:s,usedNS:l,usedParams:this.getUsedParamsDetails(e)}:i}const h=this.resolve(t,e);let u=h&&h.res;const p=h&&h.usedKey||i,d=h&&h.exactUsedKey||i,v=Object.prototype.toString.apply(u),g=void 0!==e.joinArrays?e.joinArrays:this.options.joinArrays,f=!this.i18nFormat||this.i18nFormat.handleAsObject;if(f&&u&&"string"!=typeof u&&"boolean"!=typeof u&&"number"!=typeof u&&["[object Number]","[object Function]","[object RegExp]"].indexOf(v)<0&&("string"!=typeof g||!Array.isArray(u))){if(!e.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const t=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,u,{...e,ns:a}):`key '${i} (${this.language})' returned an object instead of string.`;return r?(h.res=t,h.usedParams=this.getUsedParamsDetails(e),h):t}if(o){const t=Array.isArray(u),n=t?[]:{},r=t?d:p;for(const t in u)if(Object.prototype.hasOwnProperty.call(u,t)){const i=`${r}${o}${t}`;n[t]=this.translate(i,{...e,joinArrays:!1,ns:a}),n[t]===i&&(n[t]=u[t])}u=n}}else if(f&&"string"==typeof g&&Array.isArray(u))u=u.join(g),u&&(u=this.extendTranslation(u,t,e,n));else{let r=!1,a=!1;const c=void 0!==e.count&&"string"!=typeof e.count,p=z.hasDefaultValue(e),d=c?this.pluralResolver.getSuffix(s,e.count,e):"",v=e.ordinal&&c?this.pluralResolver.getSuffix(s,e.count,{ordinal:!1}):"",g=c&&!e.ordinal&&0===e.count&&this.pluralResolver.shouldUseIntlApi(),f=g&&e[`defaultValue${this.options.pluralSeparator}zero`]||e[`defaultValue${d}`]||e[`defaultValue${v}`]||e.defaultValue;!this.isValidLookup(u)&&p&&(r=!0,u=f),this.isValidLookup(u)||(a=!0,u=i);const m=(e.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&a?void 0:u,_=p&&f!==u&&this.options.updateMissing;if(a||r||_){if(this.logger.log(_?"updateKey":"missingKey",s,l,i,_?f:u),o){const t=this.resolve(i,{...e,keySeparator:!1});t&&t.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let t=[];const n=this.languageUtils.getFallbackCodes(this.options.fallbackLng,e.lng||this.language);if("fallback"===this.options.saveMissingTo&&n&&n[0])for(let e=0;e<n.length;e++)t.push(n[e]);else"all"===this.options.saveMissingTo?t=this.languageUtils.toResolveHierarchy(e.lng||this.language):t.push(e.lng||this.language);const r=(t,n,r)=>{const o=p&&r!==u?r:m;this.options.missingKeyHandler?this.options.missingKeyHandler(t,l,n,o,_,e):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(t,l,n,o,_,e),this.emit("missingKey",t,l,n,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&c?t.forEach((t=>{const n=this.pluralResolver.getSuffixes(t,e);g&&e[`defaultValue${this.options.pluralSeparator}zero`]&&n.indexOf(`${this.options.pluralSeparator}zero`)<0&&n.push(`${this.options.pluralSeparator}zero`),n.forEach((n=>{r([t],i+n,e[`defaultValue${n}`]||f)}))})):r(t,i,f))}u=this.extendTranslation(u,t,e,h,n),a&&u===i&&this.options.appendNamespaceToMissingKey&&(u=`${l}:${i}`),(a||r)&&this.options.parseMissingKeyHandler&&(u="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${i}`:i,r?u:void 0):this.options.parseMissingKeyHandler(u))}return r?(h.res=u,h.usedParams=this.getUsedParamsDetails(e),h):u}extendTranslation(t,e,n,r,o){var i=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const a="string"==typeof t&&(n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let l;if(a){const e=t.match(this.interpolator.nestingRegexp);l=e&&e.length}let s=n.replace&&"string"!=typeof n.replace?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),t=this.interpolator.interpolate(t,s,n.lng||this.language||r.usedLng,n),a){const e=t.match(this.interpolator.nestingRegexp);l<(e&&e.length)&&(n.nest=!1)}!n.lng&&"v1"!==this.options.compatibilityAPI&&r&&r.res&&(n.lng=this.language||r.usedLng),!1!==n.nest&&(t=this.interpolator.nest(t,(function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return o&&o[0]===r[0]&&!n.context?(i.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${e[0]}`),null):i.translate(...r,e)}),n)),n.interpolation&&this.interpolator.reset()}const a=n.postProcess||this.options.postProcess,l="string"==typeof a?[a]:a;return null!=t&&l&&l.length&&!1!==n.applyPostProcessor&&(t=L.handle(l,t,e,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),t}resolve(t){let e,n,r,o,i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof t&&(t=[t]),t.forEach((t=>{if(this.isValidLookup(e))return;const l=this.extractFromKey(t,a),s=l.key;n=s;let c=l.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const h=void 0!==a.count&&"string"!=typeof a.count,u=h&&!a.ordinal&&0===a.count&&this.pluralResolver.shouldUseIntlApi(),p=void 0!==a.context&&("string"==typeof a.context||"number"==typeof a.context)&&""!==a.context,d=a.lngs?a.lngs:this.languageUtils.toResolveHierarchy(a.lng||this.language,a.fallbackLng);c.forEach((t=>{this.isValidLookup(e)||(i=t,!b[`${d[0]}-${t}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(i)&&(b[`${d[0]}-${t}`]=!0,this.logger.warn(`key "${n}" for languages "${d.join(", ")}" won't get resolved as namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),d.forEach((n=>{if(this.isValidLookup(e))return;o=n;const i=[s];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(i,s,n,t,a);else{let t;h&&(t=this.pluralResolver.getSuffix(n,a.count,a));const e=`${this.options.pluralSeparator}zero`,r=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(i.push(s+t),a.ordinal&&0===t.indexOf(r)&&i.push(s+t.replace(r,this.options.pluralSeparator)),u&&i.push(s+e)),p){const n=`${s}${this.options.contextSeparator}${a.context}`;i.push(n),h&&(i.push(n+t),a.ordinal&&0===t.indexOf(r)&&i.push(n+t.replace(r,this.options.pluralSeparator)),u&&i.push(n+e))}}let l;for(;l=i.pop();)this.isValidLookup(e)||(r=l,e=this.getResource(n,t,l,a))})))}))})),{res:e,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:i}}isValidLookup(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)}getResource(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,e,n,r):this.resourceStore.getResource(t,e,n,r)}getUsedParamsDetails(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=t.replace&&"string"!=typeof t.replace;let r=n?t.replace:t;if(n&&void 0!==t.count&&(r.count=t.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(const t of e)delete r[t]}return r}static hasDefaultValue(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&"defaultValue"===e.substring(0,12)&&void 0!==t[e])return!0;return!1}}const E=t=>t.charAt(0).toUpperCase()+t.slice(1);class H{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=i.create("languageUtils")}getScriptPartFromCode(t){if(!(t=M(t))||t.indexOf("-")<0)return null;const e=t.split("-");return 2===e.length?null:(e.pop(),"x"===e[e.length-1].toLowerCase()?null:this.formatLanguageCode(e.join("-")))}getLanguagePartFromCode(t){if(!(t=M(t))||t.indexOf("-")<0)return t;const e=t.split("-");return this.formatLanguageCode(e[0])}formatLanguageCode(t){if("string"==typeof t&&t.indexOf("-")>-1){const e=["hans","hant","latn","cyrl","cans","mong","arab"];let n=t.split("-");return this.options.lowerCaseLng?n=n.map((t=>t.toLowerCase())):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),e.indexOf(n[1].toLowerCase())>-1&&(n[1]=E(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),e.indexOf(n[1].toLowerCase())>-1&&(n[1]=E(n[1].toLowerCase())),e.indexOf(n[2].toLowerCase())>-1&&(n[2]=E(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let e;return t.forEach((t=>{if(e)return;const n=this.formatLanguageCode(t);this.options.supportedLngs&&!this.isSupportedCode(n)||(e=n)})),!e&&this.options.supportedLngs&&t.forEach((t=>{if(e)return;const n=this.getLanguagePartFromCode(t);if(this.isSupportedCode(n))return e=n;e=this.options.supportedLngs.find((t=>t===n?t:t.indexOf("-")<0&&n.indexOf("-")<0?void 0:t.indexOf("-")>0&&n.indexOf("-")<0&&t.substring(0,t.indexOf("-"))===n||0===t.indexOf(n)&&n.length>1?t:void 0))})),e||(e=this.getFallbackCodes(this.options.fallbackLng)[0]),e}getFallbackCodes(t,e){if(!t)return[];if("function"==typeof t&&(t=t(e)),"string"==typeof t&&(t=[t]),Array.isArray(t))return t;if(!e)return t.default||[];let n=t[e];return n||(n=t[this.getScriptPartFromCode(e)]),n||(n=t[this.formatLanguageCode(e)]),n||(n=t[this.getLanguagePartFromCode(e)]),n||(n=t.default),n||[]}toResolveHierarchy(t,e){const n=this.getFallbackCodes(e||this.options.fallbackLng||[],t),r=[],o=t=>{t&&(this.isSupportedCode(t)?r.push(t):this.logger.warn(`rejecting language code not found in supportedLngs: ${t}`))};return"string"==typeof t&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?("languageOnly"!==this.options.load&&o(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&o(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&o(this.getLanguagePartFromCode(t))):"string"==typeof t&&o(this.formatLanguageCode(t)),n.forEach((t=>{r.indexOf(t)<0&&o(this.formatLanguageCode(t))})),r}}let k=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],A={1:t=>Number(t>1),2:t=>Number(1!=t),3:t=>0,4:t=>Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2),5:t=>Number(0==t?0:1==t?1:2==t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5),6:t=>Number(1==t?0:t>=2&&t<=4?1:2),7:t=>Number(1==t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2),8:t=>Number(1==t?0:2==t?1:8!=t&&11!=t?2:3),9:t=>Number(t>=2),10:t=>Number(1==t?0:2==t?1:t<7?2:t<11?3:4),11:t=>Number(1==t||11==t?0:2==t||12==t?1:t>2&&t<20?2:3),12:t=>Number(t%10!=1||t%100==11),13:t=>Number(0!==t),14:t=>Number(1==t?0:2==t?1:3==t?2:3),15:t=>Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2),16:t=>Number(t%10==1&&t%100!=11?0:0!==t?1:2),17:t=>Number(1==t||t%10==1&&t%100!=11?0:1),18:t=>Number(0==t?0:1==t?1:2),19:t=>Number(1==t?0:0==t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3),20:t=>Number(1==t?0:0==t||t%100>0&&t%100<20?1:2),21:t=>Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0),22:t=>Number(1==t?0:2==t?1:(t<0||t>10)&&t%10==0?2:3)};const V=["v1","v2","v3"],S=["v4"],q={zero:0,one:1,two:2,few:3,many:4,other:5};class O{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=t,this.options=e,this.logger=i.create("pluralResolver"),this.options.compatibilityJSON&&!S.includes(this.options.compatibilityJSON)||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=(()=>{const t={};return k.forEach((e=>{e.lngs.forEach((n=>{t[n]={numbers:e.nr,plurals:A[e.fc]}}))})),t})(),this.pluralRulesCache={}}addRule(t,e){this.rules[t]=e}clearCache(){this.pluralRulesCache={}}getRule(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{const n=M("dev"===t?"en":t),r=e.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:n,type:r});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];const i=new Intl.PluralRules(n,{type:r});return this.pluralRulesCache[o]=i,i}catch(t){return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=this.getRule(t,e);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(t,n).map((t=>`${e}${t}`))}getSuffixes(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=this.getRule(t,e);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort(((t,e)=>q[t]-q[e])).map((t=>`${this.options.prepend}${e.ordinal?`ordinal${this.options.prepend}`:""}${t}`)):n.numbers.map((n=>this.getSuffix(t,n,e))):[]}getSuffix(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(e)}`:this.getSuffixRetroCompatible(r,e):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,e){const n=t.noAbs?t.plurals(e):t.plurals(Math.abs(e));let r=t.numbers[n];this.options.simplifyPluralSuffix&&2===t.numbers.length&&1===t.numbers[0]&&(2===r?r="plural":1===r&&(r=""));const o=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return"v1"===this.options.compatibilityJSON?1===r?"":"number"==typeof r?`_plural_${r.toString()}`:o():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===t.numbers.length&&1===t.numbers[0]?o():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!V.includes(this.options.compatibilityJSON)}}const I=function(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=((t,e,n)=>{const r=v(t,n);return void 0!==r?r:v(e,n)})(t,e,n);return!i&&o&&"string"==typeof n&&(i=C(t,n,r),void 0===i&&(i=C(e,n,r))),i},T=t=>t.replace(/\$/g,"$$$$");class R{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=i.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(t=>t),this.init(t)}init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:e,escapeValue:n,useRawValueToEscape:r,prefix:o,prefixEscaped:i,suffix:a,suffixEscaped:l,formatSeparator:s,unescapeSuffix:c,unescapePrefix:h,nestingPrefix:u,nestingPrefixEscaped:p,nestingSuffix:d,nestingSuffixEscaped:v,nestingOptionsSeparator:g,maxReplaces:m,alwaysFormat:w}=t.interpolation;this.escape=void 0!==e?e:_,this.escapeValue=void 0===n||n,this.useRawValueToEscape=void 0!==r&&r,this.prefix=o?f(o):i||"{{",this.suffix=a?f(a):l||"}}",this.formatSeparator=s||",",this.unescapePrefix=c?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=u?f(u):p||f("$t("),this.nestingSuffix=d?f(d):v||f(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=m||1e3,this.alwaysFormat=void 0!==w&&w,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(t,e)=>t&&t.source===e?(t.lastIndex=0,t):new RegExp(e,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,e,n,r){let o,i,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=t=>{if(t.indexOf(this.formatSeparator)<0){const o=I(e,l,t,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(o,void 0,n,{...r,...e,interpolationkey:t}):o}const o=t.split(this.formatSeparator),i=o.shift().trim(),a=o.join(this.formatSeparator).trim();return this.format(I(e,l,i,this.options.keySeparator,this.options.ignoreJSONStructure),a,n,{...r,...e,interpolationkey:i})};this.resetRegExp();const h=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r&&r.interpolation&&void 0!==r.interpolation.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:t=>T(t)},{regex:this.regexp,safeValue:t=>this.escapeValue?T(this.escape(t)):T(t)}].forEach((e=>{for(a=0;o=e.regex.exec(t);){const n=o[1].trim();if(i=c(n),void 0===i)if("function"==typeof h){const e=h(t,o,r);i="string"==typeof e?e:""}else if(r&&Object.prototype.hasOwnProperty.call(r,n))i="";else{if(u){i=o[0];continue}this.logger.warn(`missed to pass in variable ${n} for interpolating ${t}`),i=""}else"string"==typeof i||this.useRawValueToEscape||(i=s(i));const l=e.safeValue(i);if(t=t.replace(o[0],l),u?(e.regex.lastIndex+=i.length,e.regex.lastIndex-=o[0].length):e.regex.lastIndex=0,a++,a>=this.maxReplaces)break}})),t}nest(t,e){let n,r,o,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=(t,e)=>{const n=this.nestingOptionsSeparator;if(t.indexOf(n)<0)return t;const r=t.split(new RegExp(`${n}[ ]*{`));let i=`{${r[1]}`;t=r[0],i=this.interpolate(i,o);const a=i.match(/'/g),l=i.match(/"/g);(a&&a.length%2==0&&!l||l.length%2!=0)&&(i=i.replace(/'/g,'"'));try{o=JSON.parse(i),e&&(o={...e,...o})}catch(e){return this.logger.warn(`failed parsing options string in nesting for key ${t}`,e),`${t}${n}${i}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,t};for(;n=this.nestingRegexp.exec(t);){let l=[];o={...i},o=o.replace&&"string"!=typeof o.replace?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(-1!==n[0].indexOf(this.formatSeparator)&&!/{.*}/.test(n[1])){const t=n[1].split(this.formatSeparator).map((t=>t.trim()));n[1]=t.shift(),l=t,c=!0}if(r=e(a.call(this,n[1].trim(),o),o),r&&n[0]===t&&"string"!=typeof r)return r;"string"!=typeof r&&(r=s(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${t}`),r=""),c&&(r=l.reduce(((t,e)=>this.format(t,e,i.lng,{...i,interpolationkey:n[1].trim()})),r.trim())),t=t.replace(n[0],r),this.regexp.lastIndex=0}return t}}const j=t=>{const e={};return(n,r,o)=>{let i=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(i={...i,[o.interpolationkey]:void 0});const a=r+JSON.stringify(i);let l=e[a];return l||(l=t(M(r),o),e[a]=l),l(n)}};class P{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=i.create("formatter"),this.options=t,this.formats={number:j(((t,e)=>{const n=new Intl.NumberFormat(t,{...e});return t=>n.format(t)})),currency:j(((t,e)=>{const n=new Intl.NumberFormat(t,{...e,style:"currency"});return t=>n.format(t)})),datetime:j(((t,e)=>{const n=new Intl.DateTimeFormat(t,{...e});return t=>n.format(t)})),relativetime:j(((t,e)=>{const n=new Intl.RelativeTimeFormat(t,{...e});return t=>n.format(t,e.range||"day")})),list:j(((t,e)=>{const n=new Intl.ListFormat(t,{...e});return t=>n.format(t)}))},this.init(t)}init(t){const e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=e.formatSeparator?e.formatSeparator:e.formatSeparator||","}add(t,e){this.formats[t.toLowerCase().trim()]=e}addCached(t,e){this.formats[t.toLowerCase().trim()]=j(e)}format(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=e.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find((t=>t.indexOf(")")>-1))){const t=o.findIndex((t=>t.indexOf(")")>-1));o[0]=[o[0],...o.splice(1,t)].join(this.formatSeparator)}return o.reduce(((t,e)=>{const{formatName:o,formatOptions:i}=(t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const r=t.split("(");e=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);"currency"===e&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):"relativetime"===e&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach((t=>{if(t){const[e,...r]=t.split(":"),o=r.join(":").trim().replace(/^'+|'+$/g,""),i=e.trim();n[i]||(n[i]=o),"false"===o&&(n[i]=!1),"true"===o&&(n[i]=!0),isNaN(o)||(n[i]=parseInt(o,10))}}))}return{formatName:e,formatOptions:n}})(e);if(this.formats[o]){let e=t;try{const a=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},l=a.locale||a.lng||r.locale||r.lng||n;e=this.formats[o](t,l,{...i,...r,...a})}catch(t){this.logger.warn(t)}return e}return this.logger.warn(`there was no format function for ${o}`),t}),t)}}class F extends a{constructor(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=t,this.store=e,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=i.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,r.backend,r)}queueLoad(t,e,n,r){const o={},i={},a={},l={};return t.forEach((t=>{let r=!0;e.forEach((e=>{const a=`${t}|${e}`;!n.reload&&this.store.hasResourceBundle(t,e)?this.state[a]=2:this.state[a]<0||(1===this.state[a]?void 0===i[a]&&(i[a]=!0):(this.state[a]=1,r=!1,void 0===i[a]&&(i[a]=!0),void 0===o[a]&&(o[a]=!0),void 0===l[e]&&(l[e]=!0)))})),r||(a[t]=!0)})),(Object.keys(o).length||Object.keys(i).length)&&this.queue.push({pending:i,pendingCount:Object.keys(i).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(o),pending:Object.keys(i),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,e,n){const r=t.split("|"),o=r[0],i=r[1];e&&this.emit("failedLoading",o,i,e),!e&&n&&this.store.addResourceBundle(o,i,n,void 0,void 0,{skipCopy:!0}),this.state[t]=e?-1:2,e&&n&&(this.state[t]=0);const a={};this.queue.forEach((n=>{((t,e,n,r)=>{const{obj:o,k:i}=p(t,e,Object);o[i]=o[i]||[],o[i].push(n)})(n.loaded,[o],i),((t,e)=>{void 0!==t.pending[e]&&(delete t.pending[e],t.pendingCount--)})(n,t),e&&n.errors.push(e),0!==n.pendingCount||n.done||(Object.keys(n.loaded).forEach((t=>{a[t]||(a[t]={});const e=n.loaded[t];e.length&&e.forEach((e=>{void 0===a[t][e]&&(a[t][e]=!0)}))})),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())})),this.emit("loaded",a),this.queue=this.queue.filter((t=>!t.done))}read(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,i=arguments.length>5?arguments[5]:void 0;if(!t.length)return i(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:t,ns:e,fcName:n,tried:r,wait:o,callback:i});this.readingCalls++;const a=(a,l)=>{if(this.readingCalls--,this.waitingReads.length>0){const t=this.waitingReads.shift();this.read(t.lng,t.ns,t.fcName,t.tried,t.wait,t.callback)}a&&l&&r<this.maxRetries?setTimeout((()=>{this.read.call(this,t,e,n,r+1,2*o,i)}),o):i(a,l)},l=this.backend[n].bind(this.backend);if(2!==l.length)return l(t,e,a);try{const n=l(t,e);n&&"function"==typeof n.then?n.then((t=>a(null,t))).catch(a):a(null,n)}catch(t){a(t)}}prepareLoading(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();"string"==typeof t&&(t=this.languageUtils.toResolveHierarchy(t)),"string"==typeof e&&(e=[e]);const o=this.queueLoad(t,e,n,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach((t=>{this.loadOne(t)}))}load(t,e,n){this.prepareLoading(t,e,{},n)}reload(t,e,n){this.prepareLoading(t,e,{reload:!0},n)}loadOne(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=t.split("|"),r=n[0],o=n[1];this.read(r,o,"read",void 0,void 0,((n,i)=>{n&&this.logger.warn(`${e}loading namespace ${o} for language ${r} failed`,n),!n&&i&&this.logger.log(`${e}loaded namespace ${o} for language ${r}`,i),this.loaded(t,n,i)}))}saveMissing(t,e,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(e))this.logger.warn(`did not save key "${n}" as the namespace "${e}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=n&&""!==n){if(this.backend&&this.backend.create){const l={...i,isUpdate:o},s=this.backend.create.bind(this.backend);if(s.length<6)try{let o;o=5===s.length?s(t,e,n,r,l):s(t,e,n,r),o&&"function"==typeof o.then?o.then((t=>a(null,t))).catch(a):a(null,o)}catch(t){a(t)}else s(t,e,n,r,a,l)}t&&t[0]&&this.store.addResource(t[0],e,n,r)}}}const D=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if("object"==typeof t[1]&&(e=t[1]),"string"==typeof t[1]&&(e.defaultValue=t[1]),"string"==typeof t[2]&&(e.tDescription=t[2]),"object"==typeof t[2]||"object"==typeof t[3]){const n=t[3]||t[2];Object.keys(n).forEach((t=>{e[t]=n[t]}))}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),N=t=>("string"==typeof t.ns&&(t.ns=[t.ns]),"string"==typeof t.fallbackLng&&(t.fallbackLng=[t.fallbackLng]),"string"==typeof t.fallbackNS&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),$=()=>{};class B extends a{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;var n;if(super(),this.options=N(t),this.services={},this.logger=i,this.modules={external:[]},n=this,Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t=>{"function"==typeof n[t]&&(n[t]=n[t].bind(n))})),e&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,e),this;setTimeout((()=>{this.init(t,e)}),0)}}init(){var t=this;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"==typeof e&&(n=e,e={}),!e.defaultNS&&!1!==e.defaultNS&&e.ns&&("string"==typeof e.ns?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const r=D();this.options={...r,...this.options,...N(e)},"v1"!==this.options.compatibilityAPI&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),void 0!==e.keySeparator&&(this.options.userDefinedKeySeparator=e.keySeparator),void 0!==e.nsSeparator&&(this.options.userDefinedNsSeparator=e.nsSeparator);const o=t=>t?"function"==typeof t?new t:t:null;if(!this.options.isClone){let e;this.modules.logger?i.init(o(this.modules.logger),this.options):i.init(null,this.options),this.modules.formatter?e=this.modules.formatter:"undefined"!=typeof Intl&&(e=P);const n=new H(this.options);this.store=new x(this.options.resources,this.options);const a=this.services;a.logger=i,a.resourceStore=this.store,a.languageUtils=n,a.pluralResolver=new O(n,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!e||this.options.interpolation.format&&this.options.interpolation.format!==r.interpolation.format||(a.formatter=o(e),a.formatter.init(a,this.options),this.options.interpolation.format=a.formatter.format.bind(a.formatter)),a.interpolator=new R(this.options),a.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},a.backendConnector=new F(o(this.modules.backend),a.resourceStore,a,this.options),a.backendConnector.on("*",(function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t.emit(e,...r)})),this.modules.languageDetector&&(a.languageDetector=o(this.modules.languageDetector),a.languageDetector.init&&a.languageDetector.init(a,this.options.detection,this.options)),this.modules.i18nFormat&&(a.i18nFormat=o(this.modules.i18nFormat),a.i18nFormat.init&&a.i18nFormat.init(this)),this.translator=new z(this.services,this.options),this.translator.on("*",(function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t.emit(e,...r)})),this.modules.external.forEach((t=>{t.init&&t.init(this)}))}if(this.format=this.options.interpolation.format,n||(n=$),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const t=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);t.length>0&&"dev"!==t[0]&&(this.options.lng=t[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((e=>{this[e]=function(){return t.store[e](...arguments)}})),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((e=>{this[e]=function(){return t.store[e](...arguments),t}}));const a=l(),s=()=>{const t=(t,e)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(e),n(t,e)};if(this.languages&&"v1"!==this.options.compatibilityAPI&&!this.isInitialized)return t(null,this.t.bind(this));this.changeLanguage(this.options.lng,t)};return this.options.resources||!this.options.initImmediate?s():setTimeout(s,0),a}loadResources(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$;const n="string"==typeof t?t:this.language;if("function"==typeof t&&(e=t),!this.options.resources||this.options.partialBundledLanguages){if(n&&"cimode"===n.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return e();const t=[],r=e=>{e&&"cimode"!==e&&this.services.languageUtils.toResolveHierarchy(e).forEach((e=>{"cimode"!==e&&t.indexOf(e)<0&&t.push(e)}))};n?r(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((t=>r(t))),this.options.preload&&this.options.preload.forEach((t=>r(t))),this.services.backendConnector.load(t,this.options.ns,(t=>{t||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),e(t)}))}else e(null)}reloadResources(t,e,n){const r=l();return"function"==typeof t&&(n=t,t=void 0),"function"==typeof e&&(n=e,e=void 0),t||(t=this.languages),e||(e=this.options.ns),n||(n=$),this.services.backendConnector.reload(t,e,(t=>{r.resolve(),n(t)})),r}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===t.type&&(this.modules.backend=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"i18nFormat"===t.type&&(this.modules.i18nFormat=t),"postProcessor"===t.type&&L.addPostProcessor(t),"formatter"===t.type&&(this.modules.formatter=t),"3rdParty"===t.type&&this.modules.external.push(t),this}setResolvedLanguage(t){if(t&&this.languages&&!(["cimode","dev"].indexOf(t)>-1))for(let t=0;t<this.languages.length;t++){const e=this.languages[t];if(!(["cimode","dev"].indexOf(e)>-1)&&this.store.hasLanguageSomeTranslations(e)){this.resolvedLanguage=e;break}}}changeLanguage(t,e){var n=this;this.isLanguageChangingTo=t;const r=l();this.emit("languageChanging",t);const o=t=>{this.language=t,this.languages=this.services.languageUtils.toResolveHierarchy(t),this.resolvedLanguage=void 0,this.setResolvedLanguage(t)},i=(t,i)=>{i?(o(i),this.translator.changeLanguage(i),this.isLanguageChangingTo=void 0,this.emit("languageChanged",i),this.logger.log("languageChanged",i)):this.isLanguageChangingTo=void 0,r.resolve((function(){return n.t(...arguments)})),e&&e(t,(function(){return n.t(...arguments)}))},a=e=>{t||e||!this.services.languageDetector||(e=[]);const n="string"==typeof e?e:this.services.languageUtils.getBestMatchFromCodes(e);n&&(this.language||o(n),this.translator.language||this.translator.changeLanguage(n),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(n)),this.loadResources(n,(t=>{i(t,n)}))};return t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t):a(this.services.languageDetector.detect()),r}getFixedT(t,e,n){var r=this;const o=function(t,e){let i;if("object"!=typeof e){for(var a=arguments.length,l=new Array(a>2?a-2:0),s=2;s<a;s++)l[s-2]=arguments[s];i=r.options.overloadTranslationOptionHandler([t,e].concat(l))}else i={...e};i.lng=i.lng||o.lng,i.lngs=i.lngs||o.lngs,i.ns=i.ns||o.ns,""!==i.keyPrefix&&(i.keyPrefix=i.keyPrefix||n||o.keyPrefix);const c=r.options.keySeparator||".";let h;return h=i.keyPrefix&&Array.isArray(t)?t.map((t=>`${i.keyPrefix}${c}${t}`)):i.keyPrefix?`${i.keyPrefix}${c}${t}`:t,r.t(h,i)};return"string"==typeof t?o.lng=t:o.lngs=t,o.ns=e,o.keyPrefix=n,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=e.lng||this.resolvedLanguage||this.languages[0],r=!!this.options&&this.options.fallbackLng,o=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;const i=(t,e)=>{const n=this.services.backendConnector.state[`${t}|${e}`];return-1===n||0===n||2===n};if(e.precheck){const t=e.precheck(this,i);if(void 0!==t)return t}return!(!this.hasResourceBundle(n,t)&&this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages)&&(!i(n,t)||r&&!i(o,t)))}loadNamespaces(t,e){const n=l();return this.options.ns?("string"==typeof t&&(t=[t]),t.forEach((t=>{this.options.ns.indexOf(t)<0&&this.options.ns.push(t)})),this.loadResources((t=>{n.resolve(),e&&e(t)})),n):(e&&e(),Promise.resolve())}loadLanguages(t,e){const n=l();"string"==typeof t&&(t=[t]);const r=this.options.preload||[],o=t.filter((t=>r.indexOf(t)<0&&this.services.languageUtils.isSupportedCode(t)));return o.length?(this.options.preload=r.concat(o),this.loadResources((t=>{n.resolve(),e&&e(t)})),n):(e&&e(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const e=this.services&&this.services.languageUtils||new H(D());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(e.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new B(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$;const n=t.forkResourceStore;n&&delete t.forkResourceStore;const r={...this.options,...t,isClone:!0},o=new B(r);return void 0===t.debug&&void 0===t.prefix||(o.logger=o.logger.clone(t)),["store","services","language"].forEach((t=>{o[t]=this[t]})),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},n&&(o.store=new x(this.store.data,r),o.services.resourceStore=o.store),o.translator=new z(o.services,r),o.translator.on("*",(function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];o.emit(t,...n)})),o.init(r,e),o.translator.options=r,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const U=B.createInstance();U.createInstance=B.createInstance,U.createInstance,U.dir,U.init,U.loadResources,U.reloadResources,U.use,U.changeLanguage,U.getFixedT,U.t,U.exists,U.setDefaultNamespace,U.hasLoadedNamespace,U.loadNamespaces,U.loadLanguages}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={id:t,loaded:!1,exports:{}};return o[t].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},a.a=(o,i,a)=>{var l;a&&((l=[]).d=-1);var s,c,h,u=new Set,p=o.exports,d=new Promise(((t,e)=>{h=e,c=t}));d[e]=p,d[t]=t=>(l&&t(l),u.forEach(t),d.catch((t=>{}))),o.exports=d,i((o=>{var i;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var i=[];i.d=0,o.then((t=>{a[e]=t,r(i)}),(t=>{a[n]=t,r(i)}));var a={};return a[t]=t=>t(i),a}}var l={};return l[t]=t=>{},l[e]=o,l})))(o);var a=()=>s.map((t=>{if(t[n])throw t[n];return t[e]})),c=new Promise((e=>{(i=()=>e(a)).r=0;var n=t=>t!==l&&!u.has(t)&&(u.add(t),t&&!t.d&&(i.r++,t.push(i)));s.map((e=>e[t](n)))}));return i.r?c:a()}),(t=>(t?h(d[n]=t):c(p),r(l)))),l&&l.d<0&&(l.d=0)},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var l=a(341),s=(l=await l).py,c=l.Rw,h=l.lv,u=l.b2,p=l.$M,d=l.sH,v=l.cN,g=l.Ew,f=l.kZ,m=l.FZ;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./node_modules/swiper/modules/a11y.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/a11y.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A11y)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");




function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null,
      scrollOnFocus: true
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  let preventFocusHandler;
  let focusTargetSlideEl;
  let visibilityChangedTimestamp = new Date().getTime();
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.innerHTML = '';
    notification.innerHTML = message;
  }
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
      const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.navigation.prevEl);
      const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.navigation.nextEl);
      if (nextEls.includes(targetEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (prevEls.includes(targetEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
    }
    if (swiper.pagination && targetEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bulletEl) + 1));
        }
      }
      if (bulletEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = e => {
    if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
      preventFocusHandler = true;
    }
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    preventFocusHandler = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const onVisibilityChange = e => {
    visibilityChangedTimestamp = new Date().getTime();
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
    if (new Date().getTime() - visibilityChangedTimestamp < 100) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    focusTargetSlideEl = slideEl;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    requestAnimationFrame(() => {
      if (preventFocusHandler) return;
      if (swiper.params.loop) {
        swiper.slideToLoop(parseInt(slideEl.getAttribute('data-swiper-slide-index')), 0);
      } else {
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
      }
      preventFocusHandler = false;
    });
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }
    if (params.containerRole) {
      addElRole(containerEl, params.containerRole);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
    // Tab focus
    if (swiper.el && typeof swiper.el !== 'string') {
      swiper.el.removeEventListener('focus', handleFocus, true);
      swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
      swiper.el.removeEventListener('pointerup', handlePointerUp, true);
    }
  }
  on('beforeInit', () => {
    liveRegion = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.c)('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/autoplay.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Autoplay)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.find(slideEl => slideEl.classList.contains('swiper-slide-active'));
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    autoplayStartTime = new Date().getTime();
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== 'string') {
      swiper.el.removeEventListener('pointerenter', onPointerEnter);
      swiper.el.removeEventListener('pointerleave', onPointerLeave);
    }
  };
  const attachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('_freeModeStaticRelease', () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on('_freeModeNoMomentumRelease', () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/controller.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/controller.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(() => {
            c.updateAutoHeight();
          });
        }
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElements = typeof swiper.params.controller.control === 'string' ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
      controlElements.forEach(controlElement => {
        if (!swiper.controller.control) swiper.controller.control = [];
        if (controlElement && controlElement.swiper) {
          swiper.controller.control.push(controlElement.swiper);
        } else if (controlElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onControllerSwiper = e => {
            swiper.controller.control.push(e.detail[0]);
            swiper.update();
            controlElement.removeEventListener(eventName, onControllerSwiper);
          };
          controlElement.addEventListener(eventName, onControllerSwiper);
        }
      });
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCards)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        // next
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

      /* eslint-disable */
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      /* eslint-enable */

      if (params.slideShadows) {
        // Set shadows
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('cards', slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      _loopSwapReset: false,
      watchSlidesProgress: true,
      loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
      centeredSlides: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCoverflow)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    const r = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.o)(swiper);
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBeforeEl) {
          shadowBeforeEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'left' : 'top');
        }
        if (!shadowAfterEl) {
          shadowAfterEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCreative)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    const rotateFix = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.o)(swiper);
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        let val = data.rotate[index] * Math.abs(progress * multiplier);
        r[index] = val;
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl && data.shadow) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('creative', slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCube)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const r = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(swiper);
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector('.swiper-cube-shadow');
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFade)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFlip)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // Set shadows
    swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    const rotateFix = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.o)(swiper);
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/free-mode.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ freeMode)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)()
    });
  }
  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    // Time diff
    const touchEndTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      emit('_freeModeStaticRelease');
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/grid.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/grid.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  let wasMultiRow;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = slides => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const unsetSlides = () => {
    if (swiper.slides) {
      swiper.slides.forEach(slide => {
        if (slide.swiperSlideGridSet) {
          slide.style.height = '';
          slide.style[swiper.getDirectionLabel('margin-top')] = '';
        }
      });
    }
  };
  const updateSlide = (i, slide, slides) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    // Set slides order
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.style.order = newSlideOrderIndex;
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide.row = row;
    slide.column = column;
    slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
    slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
    slide.swiperSlideGridSet = true;
  };
  const updateWrapperSize = (slideSize, snapGrid) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  const onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  };
  const onUpdate = () => {
    const {
      params,
      el
    } = swiper;
    const isMultiRow = params.grid && params.grid.rows > 1;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      numFullColumns = 1;
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (params.grid.fill === 'column') {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    wasMultiRow = isMultiRow;
  };
  on('init', onInit);
  on('update', onUpdate);
  swiper.grid = {
    initSlides,
    unsetSlides,
    updateSlide,
    updateWrapperSize
  };
}




/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HashNavigation)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.find(slideEl => slideEl.getAttribute('data-hash') === hash);
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
          return index;
        }
        return swiper.getSlideIndex((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${activeSlideHash}` || '');
      emit('hashSet');
    } else {
      document.location.hash = activeSlideHash || '';
      emit('hashSet');
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window.addEventListener('hashchange', onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window.removeEventListener('hashchange', onHashChange);
    }
  };
  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/history.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/history.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };
  const getPathValues = urlOverride => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
    let value = slugify(slide.getAttribute('data-history'));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ''}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ''}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute('data-history'));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };
  const destroy = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };
  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/swiper/modules/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11y: () => (/* reexport safe */ _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Autoplay: () => (/* reexport safe */ _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   Controller: () => (/* reexport safe */ _controller_mjs__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   EffectCards: () => (/* reexport safe */ _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   EffectCoverflow: () => (/* reexport safe */ _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   EffectCreative: () => (/* reexport safe */ _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   EffectCube: () => (/* reexport safe */ _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   EffectFade: () => (/* reexport safe */ _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   EffectFlip: () => (/* reexport safe */ _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   FreeMode: () => (/* reexport safe */ _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   Grid: () => (/* reexport safe */ _grid_mjs__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   HashNavigation: () => (/* reexport safe */ _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   History: () => (/* reexport safe */ _history_mjs__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   Keyboard: () => (/* reexport safe */ _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Manipulation: () => (/* reexport safe */ _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   Mousewheel: () => (/* reexport safe */ _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Navigation: () => (/* reexport safe */ _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Pagination: () => (/* reexport safe */ _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Parallax: () => (/* reexport safe */ _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Scrollbar: () => (/* reexport safe */ _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Thumbs: () => (/* reexport safe */ _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Virtual: () => (/* reexport safe */ _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Zoom: () => (/* reexport safe */ _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual.mjs */ "./node_modules/swiper/modules/virtual.mjs");
/* harmony import */ var _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.mjs */ "./node_modules/swiper/modules/keyboard.mjs");
/* harmony import */ var _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mousewheel.mjs */ "./node_modules/swiper/modules/mousewheel.mjs");
/* harmony import */ var _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.mjs */ "./node_modules/swiper/modules/navigation.mjs");
/* harmony import */ var _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.mjs */ "./node_modules/swiper/modules/pagination.mjs");
/* harmony import */ var _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollbar.mjs */ "./node_modules/swiper/modules/scrollbar.mjs");
/* harmony import */ var _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax.mjs */ "./node_modules/swiper/modules/parallax.mjs");
/* harmony import */ var _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom.mjs */ "./node_modules/swiper/modules/zoom.mjs");
/* harmony import */ var _controller_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller.mjs */ "./node_modules/swiper/modules/controller.mjs");
/* harmony import */ var _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./a11y.mjs */ "./node_modules/swiper/modules/a11y.mjs");
/* harmony import */ var _history_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history.mjs */ "./node_modules/swiper/modules/history.mjs");
/* harmony import */ var _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hash-navigation.mjs */ "./node_modules/swiper/modules/hash-navigation.mjs");
/* harmony import */ var _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autoplay.mjs */ "./node_modules/swiper/modules/autoplay.mjs");
/* harmony import */ var _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thumbs.mjs */ "./node_modules/swiper/modules/thumbs.mjs");
/* harmony import */ var _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./free-mode.mjs */ "./node_modules/swiper/modules/free-mode.mjs");
/* harmony import */ var _grid_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid.mjs */ "./node_modules/swiper/modules/grid.mjs");
/* harmony import */ var _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manipulation.mjs */ "./node_modules/swiper/modules/manipulation.mjs");
/* harmony import */ var _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effect-fade.mjs */ "./node_modules/swiper/modules/effect-fade.mjs");
/* harmony import */ var _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effect-cube.mjs */ "./node_modules/swiper/modules/effect-cube.mjs");
/* harmony import */ var _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effect-flip.mjs */ "./node_modules/swiper/modules/effect-flip.mjs");
/* harmony import */ var _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effect-coverflow.mjs */ "./node_modules/swiper/modules/effect-coverflow.mjs");
/* harmony import */ var _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effect-creative.mjs */ "./node_modules/swiper/modules/effect-creative.mjs");
/* harmony import */ var _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effect-cards.mjs */ "./node_modules/swiper/modules/effect-cards.mjs");
























/***/ }),

/***/ "./node_modules/swiper/modules/keyboard.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit('keyPress', kc);
    return undefined;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document.addEventListener('keydown', handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document.removeEventListener('keydown', handle);
    swiper.keyboard.enabled = false;
  }
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/manipulation.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manipulation)
/* harmony export */ });
function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.append(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}

function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.prepend(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mousewheel)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: 'swiper-no-mousewheel'
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    }

    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    lastScrollTime = new window.Date().getTime();
    // Return false as a default
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  }
  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;

    // Ignore event if the target or its parents have the swiper-no-mousewheel class
    if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    // Get the scroll positions
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

    // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? 'next' : 'prev',
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              if (swiper.destroyed || !swiper.params) return;
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              if (swiper.destroyed || !swiper.params) return;
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]('mouseenter', handleMouseEnter);
    targetEl[method]('mouseleave', handleMouseLeave);
    targetEl[method]('wheel', handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events('addEventListener');
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events('removeEventListener');
    swiper.mousewheel.enabled = false;
    return true;
  }
  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/navigation.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/navigation.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const targetEl = e.target;
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e.path || e.composedPath && e.composedPath();
      if (path) {
        targetIsButton = path.find(pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl));
      }
    }
    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/pagination.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/pagination.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");




function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function getMoveDirection(prevIndex, nextIndex, length) {
    prevIndex = prevIndex % length;
    nextIndex = nextIndex % length;
    if (nextIndex === prevIndex + 1) {
      return 'next';
    } else if (nextIndex === prevIndex - 1) {
      return 'previous';
    }
    return;
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
      if (moveDirection === 'next') {
        swiper.slideNext();
      } else if (moveDirection === 'previous') {
        swiper.slidePrev();
      } else {
        swiper.slideToLoop(index);
      }
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.f)(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        subEl.innerHTML = paginationHTML || '';
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.find(subEl => {
          if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        });
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/parallax.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/parallax.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute('data-swiper-parallax') || '0';
    let x = el.getAttribute('data-swiper-parallax-x');
    let y = el.getAttribute('data-swiper-parallax-y');
    const scale = el.getAttribute('data-swiper-parallax-scale');
    const opacity = el.getAttribute('data-swiper-parallax-opacity');
    const rotate = el.getAttribute('data-swiper-parallax-rotate');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== 'undefined' && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.hostEl, elementsSelector));
    }
    elements.forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = function (duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");





function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault && e.cancelable) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.c)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__.c)(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on('changeDirection', () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock changeDirection', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.lockClass));
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/thumbs.mjs":
/*!************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Thumb)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      if (thumbsParams.swiper.destroyed) {
        initialized = false;
        return false;
      }
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`);
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener(eventName, onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener(eventName, onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/virtual.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/virtual.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Virtual)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document.createElement('div');
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    // eslint-disable-next-line
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === 'string') {
        tempDOM.innerHTML = slideEl;
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide');
    } else {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.slideClass);
    }
    slideEl.setAttribute('data-swiper-slide-index', index);
    if (!params.renderSlide) {
      slideEl.innerHTML = slide;
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update(force, beforeInit, forceActiveIndex) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop,
      initialSlide
    } = swiper.params;
    if (beforeInit && !isLoop && initialSlide > 0) {
      return;
    }
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = typeof forceActiveIndex === 'undefined' ? swiper.activeIndex || 0 : forceActiveIndex;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit('virtualUpdate');
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        // eslint-disable-next-line
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
        if (cachedElIndex) {
          cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          // shift cache indexes
          Object.keys(swiper.virtual.cache).forEach(key => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        // shift cache indexes
        Object.keys(swiper.virtual.cache).forEach(key => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === 'undefined') {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update(false, true);
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/zoom.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/zoom.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zoom)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    zoom: {
      enabled: false,
      limitToOriginalSize: false,
      maxRatio: 3,
      minRatio: 1,
      panOnMouseMove: false,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let isPanningWithMouse = false;
  let mousePanStart = {
    x: 0,
    y: 0
  };
  const mousePanSensitivity = -3; // Negative to invert pan direction
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    imageEl: undefined,
    imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit('zoomChange', value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getMaxRatio() {
    const params = swiper.params.zoom;
    const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
      const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
      return Math.min(imageMaxRatio, maxRatio);
    }
    return maxRatio;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }

  // Events
  function onGestureStart(e) {
    if (e.pointerType === 'mouse') {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = undefined;
        return;
      }
      gesture.maxRatio = getMaxRatio();
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = '0ms';
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = undefined;
    }
  }
  let allowTouchMoveTimeout;
  function allowTouchMove() {
    swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
  }
  function preventTouchMove() {
    clearTimeout(allowTouchMoveTimeout);
    swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
    allowTouchMoveTimeout = setTimeout(() => {
      if (swiper.destroyed) return;
      allowTouchMove();
    });
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event.pageX;
    image.touchesStart.y = event.pageY;
  }
  function onTouchMove(e) {
    const isMouseEvent = e.pointerType === 'mouse';
    const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
      return;
    }
    const zoom = swiper.zoom;
    if (!gesture.imageEl) {
      return;
    }
    if (!image.isTouched || !gesture.slideEl) {
      if (isMousePan) onMouseMove(e);
      return;
    }
    if (isMousePan) {
      onMouseMove(e);
      return;
    }
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      image.startX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(gesture.imageWrapEl, 'x') || 0;
      image.startY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(gesture.imageWrapEl, 'y') || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = '0ms';
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    preventTouchMove();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    evCache.length = 0;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = undefined;
      gesture.imageEl = undefined;
      gesture.imageWrapEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function onMouseMove(e) {
    // Only pan if zoomed in and mouse panning is enabled
    if (currentScale <= 1 || !gesture.imageWrapEl) return;
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const currentTransform = window.getComputedStyle(gesture.imageWrapEl).transform;
    const matrix = new window.DOMMatrix(currentTransform);
    if (!isPanningWithMouse) {
      isPanningWithMouse = true;
      mousePanStart.x = e.clientX;
      mousePanStart.y = e.clientY;
      image.startX = matrix.e;
      image.startY = matrix.f;
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      return;
    }
    const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
    const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
    const scaledWidth = image.width * currentScale;
    const scaledHeight = image.height * currentScale;
    const slideWidth = gesture.slideWidth;
    const slideHeight = gesture.slideHeight;
    const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
    const maxX = -minX;
    const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
    const maxY = -minY;
    const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
    const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
    gesture.imageWrapEl.style.transitionDuration = '0ms';
    gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    mousePanStart.x = e.clientX;
    mousePanStart.y = e.clientY;
    image.startX = newX;
    image.startY = newY;
    image.currentX = newX;
    image.currentY = newY;
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const prevScale = currentScale;
    const forceZoomRatio = typeof e === 'number' ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = undefined;
      touchY = undefined;
      image.touchesStart.x = undefined;
      image.touchesStart.y = undefined;
    }
    const maxRatio = getMaxRatio();
    zoom.scale = forceZoomRatio || maxRatio;
    currentScale = forceZoomRatio || maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.slideEl).left + window.scrollX;
      offsetY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.slideEl).top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      if (prevScale > 0 && forceZoomRatio && typeof image.currentX === 'number' && typeof image.currentY === 'number') {
        translateX = image.currentX * zoom.scale / prevScale;
        translateY = image.currentY * zoom.scale / prevScale;
      } else {
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
      }
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    image.currentX = translateX;
    image.currentY = translateY;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }
    zoom.scale = 1;
    currentScale = 1;
    image.currentX = undefined;
    image.currentY = undefined;
    image.touchesStart.x = undefined;
    image.touchesStart.y = undefined;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = undefined;
    gesture.originX = 0;
    gesture.originY = 0;
    if (swiper.params.zoom.panOnMouseMove) {
      mousePanStart = {
        x: 0,
        y: 0
      };
      if (isPanningWithMouse) {
        isPanningWithMouse = false;
        image.startX = 0;
        image.startY = 0;
      }
    }
  }

  // Toggle Zoom
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  // Attach/Detach Events
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.mjs":
/*!************************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ classesToSelector)
/* harmony export */ });
function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createElementIfNotDefined)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createShadow)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
  const shadowContainer = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
  if (!shadowEl) {
    shadowEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', shadowClass.split(' '));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectInit)
/* harmony export */ });
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      // remove shadows
      swiper.slides.forEach(slideEl => {
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
      });
      // create new one
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectTarget)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectTarget(effectParams, slideEl) {
  const transformEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectVirtualTransitionEnd)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.find(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}




/***/ }),

/***/ "./node_modules/swiper/shared/ssr-window.esm.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/shared/ssr-window.esm.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getWindow),
/* harmony export */   g: () => (/* binding */ getDocument)
/* harmony export */ });
/**
 * SSR Window 5.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2025, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: February 12, 2025
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}




/***/ }),

/***/ "./node_modules/swiper/shared/swiper-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/swiper-core.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Swiper),
/* harmony export */   d: () => (/* binding */ defaults)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



let support;
function calcSupport() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'padding-left') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'padding-right') || 0, 10);
  height = height - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'padding-top') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', '');
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slides);
    }
    if (slides[i] && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'width', true) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit('slidesUpdated');
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

const toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.find(slideEl => slideEl.column === activeIndex);
      nextSlide = slides.find(slideEl => slideEl.column === activeIndex + 1);
      prevSlide = slides.find(slideEl => slideEl.column === activeIndex - 1);
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      // Next Slide
      nextSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }

      // Prev Slide
      prevSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach(slideEl => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.find(slideEl => slideEl.column === activeIndex);
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // initial virtual
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  // Update Index
  if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  const browser = getBrowser();
  const isSafari = browser.isSafari;
  if (isVirtual && !initial && isSafari && swiper.isElement) {
    swiper.virtual.update(false, false, slideIndex);
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  const isFreeMode = params.freeMode && params.freeMode.enabled;
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && (params.cssMode || isFreeMode)) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex, initial) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute('data-swiper-slide-index', index);
    });
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide', [params.slideBlankClass]) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next',
    initial
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    initial,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides,
    initialSlide
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
  } else if (gridEnabled && params.grid.fill === 'row') {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
  let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(slides.find(el => el.classList.contains(params.slideActiveClass)));
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
        }
        // slides.forEach((slide, slideIndex) => {
        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
        // });
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    if (isInitialOverflow) {
      slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
    }
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
    if (appendSlidesIndexes.includes(activeSlideIndex)) {
      appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
    if (prependSlidesIndexes.includes(activeSlideIndex)) {
      prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)() || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === 'pointerdown') {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === 'touchstart') {
    // don't proceed touch event
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)(targetEl, swiper.wrapperEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === 'pointermove') {
    if (data.touchId !== null) return; // return from pointer if we use touch
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === 'touchmove') {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
      return;
    } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
      return;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== 'mouse') {
    document.activeElement.blur();
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  new Date().getTime();
  if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
  if (!isTouchEvent) {
    if (data.touchId !== null) return; // return from pointer if we use touch
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = 'auto';
  }
}

const events = (swiper, method) => {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;
  if (!el || typeof el === 'string') return;

  // Touch Events
  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]('touchstart', swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('touchmove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('touchend', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('touchcancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();

  // Get breakpoint for window/container width and update parameters
  const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase ? params.breakpointsBase : 'container';
  const breakpointContainer = ['window', 'container'].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
  const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === 'string') return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  swiperElementNodeName: 'SWIPER-CONTAINER',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: 'swiper',
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-blank',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, params);
    if (el && !params.el) params.el = el;
    const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, swiper.params);
    swiper.passedParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slides[0]);
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index));
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(el, 'direction') === 'rtl'),
      wrongRTL: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate(undefined, true);
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== 'string') {
        el.removeAttribute('style');
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute('style');
      }
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== 'string') {
        swiper.el.swiper = null;
      }
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);




/***/ }),

/***/ "./node_modules/swiper/shared/utils.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/shared/utils.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ elementParents),
/* harmony export */   b: () => (/* binding */ elementOffset),
/* harmony export */   c: () => (/* binding */ createElement),
/* harmony export */   d: () => (/* binding */ now),
/* harmony export */   e: () => (/* binding */ elementChildren),
/* harmony export */   f: () => (/* binding */ elementOuterSize),
/* harmony export */   g: () => (/* binding */ getSlideTransformEl),
/* harmony export */   h: () => (/* binding */ elementIndex),
/* harmony export */   i: () => (/* binding */ classesToTokens),
/* harmony export */   j: () => (/* binding */ getTranslate),
/* harmony export */   k: () => (/* binding */ elementTransitionEnd),
/* harmony export */   l: () => (/* binding */ isObject),
/* harmony export */   m: () => (/* binding */ makeElementsArray),
/* harmony export */   n: () => (/* binding */ nextTick),
/* harmony export */   o: () => (/* binding */ getRotateFix),
/* harmony export */   p: () => (/* binding */ elementStyle),
/* harmony export */   q: () => (/* binding */ elementNextAll),
/* harmony export */   r: () => (/* binding */ elementPrevAll),
/* harmony export */   s: () => (/* binding */ setCSSProperty),
/* harmony export */   t: () => (/* binding */ animateCSSModeScroll),
/* harmony export */   u: () => (/* binding */ showWarning),
/* harmony export */   v: () => (/* binding */ elementIsChildOf),
/* harmony export */   w: () => (/* binding */ extend),
/* harmony export */   x: () => (/* binding */ deleteProps)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function classesToTokens(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return classes.trim().split(' ').filter(c => !!c.trim());
}

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const children = [...element.children];
  if (window.HTMLSlotElement && element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter(el => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
  // Breadth-first search through all parent's children and assigned elements
  const elementsQueue = [slot];
  while (elementsQueue.length > 0) {
    const elementToCheck = elementsQueue.shift();
    if (el === elementToCheck) {
      return true;
    }
    elementsQueue.push(...elementToCheck.children, ...(elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : []), ...(elementToCheck.assignedElements ? elementToCheck.assignedElements() : []));
  }
}
function elementIsChildOf(el, parent) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let isChild = parent.contains(el);
  if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    isChild = children.includes(el);
    if (!isChild) {
      isChild = elementIsChildOfSlot(el, parent);
    }
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
    // err
  }
}
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
  return el;
}
function elementOffset(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}
function getRotateFix(swiper) {
  return v => {
    if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
      return v + 0.001;
    }
    return v;
  };
}




/***/ }),

/***/ "./node_modules/swiper/swiper.mjs":
/*!****************************************!*\
  !*** ./node_modules/swiper/swiper.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swiper: () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "default": () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/swiper-core.mjs */ "./node_modules/swiper/shared/swiper-core.mjs");
/**
 * Swiper 11.2.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 19, 2025
 */




/***/ }),

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_inputs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/inputs.js */ "./src/js/components/inputs.js");
/* harmony import */ var _components_sliders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sliders.js */ "./src/js/components/sliders.js");
/* harmony import */ var _components_fancybox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fancybox.js */ "./src/js/components/fancybox.js");
/* harmony import */ var _components_services_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/services.js */ "./src/js/components/services.js");





/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/components/fancybox.js":
/*!***************************************!*\
  !*** ./src/js/components/fancybox.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");

_fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

/***/ }),

/***/ "./src/js/components/inputs.js":
/*!*************************************!*\
  !*** ./src/js/components/inputs.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const inputs = document.querySelectorAll(".form__input");
if (inputs.length > 0) {
  function toggleFilledClass(input) {
    const parent = input.parentElement; // Контейнер для input
    if (input.value.trim() !== "") {
      parent.classList.add("form__field--filled");
    } else {
      parent.classList.remove("form__field--filled");
    }
  }
  inputs.forEach(input => {
    input.addEventListener("input", () => toggleFilledClass(input));
    input.addEventListener("blur", () => toggleFilledClass(input));
  });
}

/***/ }),

/***/ "./src/js/components/services.js":
/*!***************************************!*\
  !*** ./src/js/components/services.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const serviceItems = document.querySelectorAll(".our-service__item--extra");
if (serviceItems.length > 0) {
  const modals = document.querySelectorAll(".modal[data-modal]");
  const clear = () => {
    modals.forEach(item => {
      item.classList.remove("active");
    });
  };
  modals.forEach(m => {
    const body = m.querySelector(".modal__body");
    const closeBtn = m.querySelector(".modal__close");
    body.addEventListener("click", e => {
      e.stopPropagation();
    });
    closeBtn.addEventListener("click", e => {
      e.preventDefault();
      m.classList.remove("active");
      document.body.style.overflow = null;
    });
    m.addEventListener("click", e => {
      e.preventDefault();
      m.classList.remove("active");
      document.body.style.overflow = null;
    });
  });
  serviceItems.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const cat = item.dataset.service;
      clear();
      document.body.style.overflow = "hidden";
      document.querySelector(`.modal[data-modal=${cat}]`).classList.add("active");
    });
  });
}

/***/ }),

/***/ "./src/js/components/sliders.js":
/*!**************************************!*\
  !*** ./src/js/components/sliders.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper.use([swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination]);
const singleThumbsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper(".single__slider--thumb", {
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    prevEl: ".single__arr--prev",
    nextEl: ".single__arr--next"
  }
});
const singleSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper(".single__slider--main", {
  slidesPerView: 1,
  spaceBetween: 40,
  thumbs: {
    swiper: singleThumbsSlider
  },
  navigation: {
    prevEl: ".single__arr--prev",
    nextEl: ".single__arr--next"
  }
});

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll.js */ "./src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll.js */ "./src/js/functions/enable-scroll.js");


(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  burger?.addEventListener('click', e => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      (0,_functions_disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      (0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    (0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      (0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableScroll: () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth}px`;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = `-${pagePosition}px`;
};

/***/ }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableScroll: () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");
/* harmony import */ var _functions_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/burger.js */ "./src/js/functions/burger.js");
/* harmony import */ var _yandex_ymaps3_default_ui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @yandex/ymaps3-default-ui-theme */ "./node_modules/@yandex/ymaps3-default-ui-theme/dist/esm/index.mjs");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_yandex_ymaps3_default_ui_theme__WEBPACK_IMPORTED_MODULE_2__]);
_yandex_ymaps3_default_ui_theme__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



initMap();
async function initMap() {
  await ymaps3.ready;
  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer
  } = ymaps3;
  const map1 = new YMap(document.getElementById("map1"), {
    location: {
      center: [37.588144, 55.733842],
      zoom: 16
    }
  }, [
  // Add a map scheme layer
  new YMapDefaultSchemeLayer({}),
  // Add a layer of geo objects to display the markers
  new YMapDefaultFeaturesLayer({})]);
  map1.addChild(new _yandex_ymaps3_default_ui_theme__WEBPACK_IMPORTED_MODULE_2__.YMapDefaultMarker({
    coordinates: [37.588144, 55.733842],
    title: "Днепровская улица, 25",
    color: "darkblue",
    size: "normal",
    iconName: "fallback"
  }));
  const map2 = new YMap(document.getElementById("map2"), {
    location: {
      center: [37.588144, 55.733842],
      zoom: 16
    }
  }, [
  // Add a map scheme layer
  new YMapDefaultSchemeLayer({}),
  // Add a layer of geo objects to display the markers
  new YMapDefaultFeaturesLayer({})]);
  map2.addChild(new _yandex_ymaps3_default_ui_theme__WEBPACK_IMPORTED_MODULE_2__.YMapDefaultMarker({
    coordinates: [37.588144, 55.733842],
    title: "Рязанский проспект, 86/1c1",
    color: "darkblue",
    size: "normal",
    iconName: "fallback"
  }));
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map