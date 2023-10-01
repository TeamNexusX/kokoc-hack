"use strict";(self.webpackChunkkokoc_hack=self.webpackChunkkokoc_hack||[]).push([[857],{1277:(e,t,n)=>{n.d(t,{p:()=>D});var r,l=n(7294),a=n(2984),o=n(2351),i=n(3784),s=n(6723),u=n(2180),c=n(7896);let d=null!=(r=l.useId)?r:function(){let e=(0,u.H)(),[t,n]=l.useState(e?()=>c.O.nextId():null);return(0,s.e)((()=>{null===t&&n(c.O.nextId())}),[t]),null!=t?""+t:void 0};var f,p=((f=p||{}).Space=" ",f.Enter="Enter",f.Escape="Escape",f.Backspace="Backspace",f.Delete="Delete",f.ArrowLeft="ArrowLeft",f.ArrowUp="ArrowUp",f.ArrowRight="ArrowRight",f.ArrowDown="ArrowDown",f.Home="Home",f.End="End",f.PageUp="PageUp",f.PageDown="PageDown",f.Tab="Tab",f);var m=n(6567);function v(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}var h,g=n(3781);let b=null!=(h=l.startTransition)?h:function(e){e()};var E=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(E||{}),y=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(y||{});let S={0:e=>({...e,disclosureState:(0,a.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},w=(0,l.createContext)(null);function T(e){let t=(0,l.useContext)(w);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,T),t}return t}w.displayName="DisclosureContext";let P=(0,l.createContext)(null);function C(e){let t=(0,l.useContext)(P);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return t}P.displayName="DisclosureAPIContext";let O=(0,l.createContext)(null);function k(e,t){return(0,a.E)(t.type,S,e,t)}O.displayName="DisclosurePanelContext";let F=l.Fragment,N=o.AN.RenderStrategy|o.AN.Static,R=(0,o.yV)((function(e,t){let{defaultOpen:n=!1,...r}=e,s=(0,l.useRef)(null),u=(0,i.T)(t,(0,i.h)((e=>{s.current=e}),void 0===e.as||e.as===l.Fragment)),d=(0,l.useRef)(null),f=(0,l.useRef)(null),p=(0,l.useReducer)(k,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:f,panelRef:d,buttonId:null,panelId:null}),[{disclosureState:v,buttonId:h},b]=p,E=(0,g.z)((e=>{b({type:1});let t=function(e){return c.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}(s);if(!t||!h)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(h):t.getElementById(h);null==n||n.focus()})),y=(0,l.useMemo)((()=>({close:E})),[E]),S=(0,l.useMemo)((()=>({open:0===v,close:E})),[v,E]),T={ref:u};return l.createElement(w.Provider,{value:p},l.createElement(P.Provider,{value:y},l.createElement(m.up,{value:(0,a.E)(v,{0:m.ZM.Open,1:m.ZM.Closed})},(0,o.sY)({ourProps:T,theirProps:r,slot:S,defaultTag:F,name:"Disclosure"}))))})),A=(0,o.yV)((function(e,t){let n=d(),{id:r=`headlessui-disclosure-button-${n}`,...a}=e,[u,c]=T("Disclosure.Button"),f=(0,l.useContext)(O),m=null!==f&&f===u.panelId,h=(0,l.useRef)(null),b=(0,i.T)(h,t,m?null:u.buttonRef);(0,l.useEffect)((()=>{if(!m)return c({type:2,buttonId:r}),()=>{c({type:2,buttonId:null})}}),[r,c,m]);let E=(0,g.z)((e=>{var t;if(m){if(1===u.disclosureState)return;switch(e.key){case p.Space:case p.Enter:e.preventDefault(),e.stopPropagation(),c({type:0}),null==(t=u.buttonRef.current)||t.focus()}}else switch(e.key){case p.Space:case p.Enter:e.preventDefault(),e.stopPropagation(),c({type:0})}})),y=(0,g.z)((e=>{e.key===p.Space&&e.preventDefault()})),S=(0,g.z)((t=>{var n;(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r})(t.currentTarget)||e.disabled||(m?(c({type:0}),null==(n=u.buttonRef.current)||n.focus()):c({type:0}))})),w=(0,l.useMemo)((()=>({open:0===u.disclosureState})),[u]),P=function(e,t){let[n,r]=(0,l.useState)((()=>v(e)));return(0,s.e)((()=>{r(v(e))}),[e.type,e.as]),(0,s.e)((()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")}),[n,t]),n}(e,h),C=m?{ref:b,type:P,onKeyDown:E,onClick:S}:{ref:b,id:r,type:P,"aria-expanded":0===u.disclosureState,"aria-controls":u.linkedPanel?u.panelId:void 0,onKeyDown:E,onKeyUp:y,onClick:S};return(0,o.sY)({ourProps:C,theirProps:a,slot:w,defaultTag:"button",name:"Disclosure.Button"})})),I=(0,o.yV)((function(e,t){let n=d(),{id:r=`headlessui-disclosure-panel-${n}`,...a}=e,[s,u]=T("Disclosure.Panel"),{close:c}=C("Disclosure.Panel"),f=(0,i.T)(t,s.panelRef,(e=>{b((()=>u({type:e?4:5})))}));(0,l.useEffect)((()=>(u({type:3,panelId:r}),()=>{u({type:3,panelId:null})})),[r,u]);let p=(0,m.oJ)(),v=null!==p?(p&m.ZM.Open)===m.ZM.Open:0===s.disclosureState,h=(0,l.useMemo)((()=>({open:0===s.disclosureState,close:c})),[s,c]),g={ref:f,id:r};return l.createElement(O.Provider,{value:s.panelId},(0,o.sY)({ourProps:g,theirProps:a,slot:h,defaultTag:"div",features:N,visible:v,name:"Disclosure.Panel"}))})),D=Object.assign(R,{Button:A,Panel:I})},446:(e,t,n)=>{n.d(t,{u:()=>L});var r=n(7294),l=n(2351),a=n(6567),o=n(2984),i=n(6723);function s(){let e=(0,r.useRef)(!1);return(0,i.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var u=n(3855),c=n(2180),d=n(3784);function f(){let e=[],t={addEventListener:(e,n,r,l)=>(e.addEventListener(n,r,l),t.add((()=>e.removeEventListener(n,r,l)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return function(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=f();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function m(e,...t){e&&t.length>0&&e.classList.remove(...t)}function v(){let[e]=(0,r.useState)(f);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}function h({immediate:e,container:t,direction:n,classes:r,onStart:l,onStop:a}){let c=s(),d=v(),h=(0,u.E)(n);(0,i.e)((()=>{e&&(h.current="enter")}),[e]),(0,i.e)((()=>{let e=f();d.add(e.dispose);let n=t.current;if(n&&"idle"!==h.current&&c.current)return e.dispose(),l.current(h.current),e.add(function(e,t,n,r){let l=n?"enter":"leave",a=f(),i=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{};"enter"===l&&(e.removeAttribute("hidden"),e.style.display="");let s=(0,o.E)(l,{enter:()=>t.enter,leave:()=>t.leave}),u=(0,o.E)(l,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,o.E)(l,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return m(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),p(e,...t.base,...s,...c),a.nextFrame((()=>{m(e,...t.base,...s,...c),p(e,...t.base,...s,...u),function(e,t){let n=f();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[a,o]=[r,l].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),i=a+o;if(0!==i){n.group((n=>{n.setTimeout((()=>{t(),n.dispose()}),i),n.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&n.dispose()}))}));let r=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),r())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(m(e,...t.base,...s),p(e,...t.base,...t.entered),i())))})),a.dispose}(n,r.current,"enter"===h.current,(()=>{e.dispose(),a.current(h.current)}))),e.dispose}),[n])}var g=n(3781),b=n(4067);function E(e=0){let[t,n]=(0,r.useState)(e),l=s(),a=(0,r.useCallback)((e=>{l.current&&n((t=>t|e))}),[t,l]),o=(0,r.useCallback)((e=>Boolean(t&e)),[t]),i=(0,r.useCallback)((e=>{l.current&&n((t=>t&~e))}),[n,l]),u=(0,r.useCallback)((e=>{l.current&&n((t=>t^e))}),[n]);return{flags:t,addFlag:a,hasFlag:o,removeFlag:i,toggleFlag:u}}function y(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let S=(0,r.createContext)(null);S.displayName="TransitionContext";var w,T=((w=T||{}).Visible="visible",w.Hidden="hidden",w);let P=(0,r.createContext)(null);function C(e){return"children"in e?C(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function O(e,t){let n=(0,u.E)(e),a=(0,r.useRef)([]),i=s(),c=v(),d=(0,g.z)(((e,t=l.l4.Hidden)=>{let r=a.current.findIndex((({el:t})=>t===e));-1!==r&&((0,o.E)(t,{[l.l4.Unmount](){a.current.splice(r,1)},[l.l4.Hidden](){a.current[r].state="hidden"}}),c.microTask((()=>{var e;!C(a)&&i.current&&(null==(e=n.current)||e.call(n))})))})),f=(0,g.z)((e=>{let t=a.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):a.current.push({el:e,state:"visible"}),()=>d(e,l.l4.Unmount)})),p=(0,r.useRef)([]),m=(0,r.useRef)(Promise.resolve()),h=(0,r.useRef)({enter:[],leave:[],idle:[]}),b=(0,g.z)(((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{p.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(h.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?m.current=m.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),E=(0,g.z)(((e,t,n)=>{Promise.all(h.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=p.current.shift())||e()})).then((()=>n(t)))}));return(0,r.useMemo)((()=>({children:a,register:f,unregister:d,onStart:b,onStop:E,wait:m,chains:h})),[f,d,a,b,E,h,m])}function k(){}P.displayName="NestingContext";let F=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function N(e){var t;let n={};for(let r of F)n[r]=null!=(t=e[r])?t:k;return n}let R=l.AN.RenderStrategy,A=(0,l.yV)((function(e,t){let{show:n,appear:o=!1,unmount:s=!0,...u}=e,f=(0,r.useRef)(null),p=(0,d.T)(f,t);(0,c.H)();let m=(0,a.oJ)();if(void 0===n&&null!==m&&(n=(m&a.ZM.Open)===a.ZM.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,r.useState)(n?"visible":"hidden"),b=O((()=>{h("hidden")})),[E,y]=(0,r.useState)(!0),w=(0,r.useRef)([n]);(0,i.e)((()=>{!1!==E&&w.current[w.current.length-1]!==n&&(w.current.push(n),y(!1))}),[w,n]);let T=(0,r.useMemo)((()=>({show:n,appear:o,initial:E})),[n,o,E]);(0,r.useEffect)((()=>{if(n)h("visible");else if(C(b)){let e=f.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")}),[n,b]);let k={unmount:s},F=(0,g.z)((()=>{var t;E&&y(!1),null==(t=e.beforeEnter)||t.call(e)})),N=(0,g.z)((()=>{var t;E&&y(!1),null==(t=e.beforeLeave)||t.call(e)}));return r.createElement(P.Provider,{value:b},r.createElement(S.Provider,{value:T},(0,l.sY)({ourProps:{...k,as:r.Fragment,children:r.createElement(I,{ref:p,...k,...u,beforeEnter:F,beforeLeave:N})},theirProps:{},defaultTag:r.Fragment,features:R,visible:"visible"===v,name:"Transition"})))})),I=(0,l.yV)((function(e,t){var n,i;let{beforeEnter:s,afterEnter:f,beforeLeave:p,afterLeave:m,enter:v,enterFrom:w,enterTo:T,entered:k,leave:F,leaveFrom:A,leaveTo:I,...D}=e,L=(0,r.useRef)(null),x=(0,d.T)(L,t),M=null==(n=D.unmount)||n?l.l4.Unmount:l.l4.Hidden,{show:j,appear:H,initial:z}=function(){let e=(0,r.useContext)(S);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[B,Z]=(0,r.useState)(j?"visible":"hidden"),U=function(){let e=(0,r.useContext)(P);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:V,unregister:$}=U;(0,r.useEffect)((()=>V(L)),[V,L]),(0,r.useEffect)((()=>{if(M===l.l4.Hidden&&L.current)return j&&"visible"!==B?void Z("visible"):(0,o.E)(B,{hidden:()=>$(L),visible:()=>V(L)})}),[B,L,V,$,j,M]);let Y=(0,u.E)({base:y(D.className),enter:y(v),enterFrom:y(w),enterTo:y(T),entered:y(k),leave:y(F),leaveFrom:y(A),leaveTo:y(I)}),q=function(e){let t=(0,r.useRef)(N(e));return(0,r.useEffect)((()=>{t.current=N(e)}),[e]),t}({beforeEnter:s,afterEnter:f,beforeLeave:p,afterLeave:m}),J=(0,c.H)();(0,r.useEffect)((()=>{if(J&&"visible"===B&&null===L.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[L,B,J]);let K=H&&j&&z,_=!J||z&&!H?"idle":j?"enter":"leave",W=E(0),G=(0,g.z)((e=>(0,o.E)(e,{enter:()=>{W.addFlag(a.ZM.Opening),q.current.beforeEnter()},leave:()=>{W.addFlag(a.ZM.Closing),q.current.beforeLeave()},idle:()=>{}}))),Q=(0,g.z)((e=>(0,o.E)(e,{enter:()=>{W.removeFlag(a.ZM.Opening),q.current.afterEnter()},leave:()=>{W.removeFlag(a.ZM.Closing),q.current.afterLeave()},idle:()=>{}}))),X=O((()=>{Z("hidden"),$(L)}),U);h({immediate:K,container:L,classes:Y,direction:_,onStart:(0,u.E)((e=>{X.onStart(L,e,G)})),onStop:(0,u.E)((e=>{X.onStop(L,e,Q),"leave"===e&&!C(X)&&(Z("hidden"),$(L))}))});let ee=D,te={ref:x};return K?ee={...ee,className:(0,b.A)(D.className,...Y.current.enter,...Y.current.enterFrom)}:(ee.className=(0,b.A)(D.className,null==(i=L.current)?void 0:i.className),""===ee.className&&delete ee.className),r.createElement(P.Provider,{value:X},r.createElement(a.up,{value:(0,o.E)(B,{visible:a.ZM.Open,hidden:a.ZM.Closed})|W.flags},(0,l.sY)({ourProps:te,theirProps:ee,defaultTag:"div",features:R,visible:"visible"===B,name:"Transition.Child"})))})),D=(0,l.yV)((function(e,t){let n=null!==(0,r.useContext)(S),l=null!==(0,a.oJ)();return r.createElement(r.Fragment,null,!n&&l?r.createElement(A,{ref:t,...e}):r.createElement(I,{ref:t,...e}))})),L=Object.assign(A,{Child:D,Root:A})},3781:(e,t,n)=>{n.d(t,{z:()=>a});var r=n(7294),l=n(3855);let a=function(e){let t=(0,l.E)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},6723:(e,t,n)=>{n.d(t,{e:()=>a});var r=n(7294),l=n(7896);let a=(e,t)=>{l.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3855:(e,t,n)=>{n.d(t,{E:()=>a});var r=n(7294),l=n(6723);function a(e){let t=(0,r.useRef)(e);return(0,l.e)((()=>{t.current=e}),[e]),t}},2180:(e,t,n)=>{var r;n.d(t,{H:()=>o});var l=n(7294),a=n(7896);function o(){let e=function(){let e="undefined"==typeof document;return(r||(r=n.t(l,2))).useSyncExternalStore((()=>()=>{}),(()=>!1),(()=>!e))}(),[t,o]=l.useState(a.O.isHandoffComplete);return t&&!1===a.O.isHandoffComplete&&o(!1),l.useEffect((()=>{!0!==t&&o(!0)}),[t]),l.useEffect((()=>a.O.handoff()),[]),!e&&t}},3784:(e,t,n)=>{n.d(t,{T:()=>i,h:()=>o});var r=n(7294),l=n(3781);let a=Symbol();function o(e,t=!0){return Object.assign(e,{[a]:t})}function i(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,l.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[a])))?void 0:n}},6567:(e,t,n)=>{n.d(t,{ZM:()=>o,oJ:()=>i,up:()=>s});var r=n(7294);let l=(0,r.createContext)(null);l.displayName="OpenClosedContext";var a,o=((a=o||{})[a.Open=1]="Open",a[a.Closed=2]="Closed",a[a.Closing=4]="Closing",a[a.Opening=8]="Opening",a);function i(){return(0,r.useContext)(l)}function s({value:e,children:t}){return r.createElement(l.Provider,{value:e},t)}},4067:(e,t,n)=>{function r(...e){return Array.from(new Set(e.flatMap((e=>"string"==typeof e?e.split(" "):[])))).filter(Boolean).join(" ")}n.d(t,{A:()=>r})},7896:(e,t,n)=>{n.d(t,{O:()=>a});var r=Object.defineProperty,l=(e,t,n)=>(((e,t,n)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let a=new class{constructor(){l(this,"current",this.detect()),l(this,"handoffState","pending"),l(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},2984:(e,t,n)=>{function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,r),l}n.d(t,{E:()=>r})},2351:(e,t,n)=>{n.d(t,{AN:()=>s,l4:()=>u,sY:()=>c,yV:()=>p});var r,l,a=n(7294),o=n(4067),i=n(2984),s=((l=s||{})[l.None=0]="None",l[l.RenderStrategy=1]="RenderStrategy",l[l.Static=2]="Static",l),u=((r=u||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:a=!0,name:o}){let s=f(t,e);if(a)return d(s,n,r,o);let u=null!=l?l:0;if(2&u){let{static:e=!1,...t}=s;if(e)return d(t,n,r,o)}if(1&u){let{unmount:e=!0,...t}=s;return(0,i.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,o)})}return d(s,n,r,o)}function d(e,t={},n,r){let{as:l=n,children:i,refName:s="ref",...u}=v(e,["unmount","static"]),c=void 0!==e.ref?{[s]:e.ref}:{},d="function"==typeof i?i(t):i;"className"in u&&u.className&&"function"==typeof u.className&&(u.className=u.className(t));let p={};if(t){let e=!1,n=[];for(let[r,l]of Object.entries(t))"boolean"==typeof l&&(e=!0),!0===l&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(l===a.Fragment&&Object.keys(m(u)).length>0){if(!(0,a.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,o.A)(null==e?void 0:e.className(...t),u.className):(0,o.A)(null==e?void 0:e.className,u.className),n=t?{className:t}:{};return(0,a.cloneElement)(d,Object.assign({},f(d.props,m(v(u,["ref"]))),p,c,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),n))}return(0,a.createElement)(l,Object.assign({},v(u,["ref"]),l!==a.Fragment&&c,l!==a.Fragment&&p),d)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let e in n)Object.assign(t,{[e](t,...r){let l=n[e];for(let e of l){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;e(t,...r)}}});return t}function p(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function v(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);