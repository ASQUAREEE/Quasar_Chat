import{R as tt,Q as ae,d as nt,c as K,v as Qe,h as J,l as at,m as ot,n as rt}from"./use-router-link.01604f00.js";import{i as lt,e as de,r as B,c as f,o as oe,b as it,V as Ne,E as st,h as y,F as Z,G as ut,W as ct,g as W,X as dt,Y as ye,P as Fe,w as G,p as vt,Z as ft,$ as mt,a0 as Y,n as bt,a1 as ht,M as ne,a2 as ve,O as Be,N as fe,T as gt,a3 as pt,q as yt,_ as ze,t as ge,u as pe,v as O,y as wt,x as L,D as Tt,s as Ct}from"./index.96129251.js";import{u as qt,Q as me,a as Pt}from"./QForm.aaa24dbb.js";import{Q as xt}from"./QResizeObserver.1310bb85.js";import{u as we,a as Te}from"./use-dark.1116cf1f.js";import{Q as _t}from"./QPage.0ba3aa5d.js";import{Q as kt}from"./QBtn.6a7f6267.js";let St=0;const Rt=["click","keydown"],At={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${St++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Lt(e,t,i,s){const o=lt(Ne,de);if(o===de)return console.error("QTab/QRouteTab component needs to be child of QTabs"),de;const{proxy:a}=W(),l=B(null),m=B(null),P=B(null),I=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),h=f(()=>o.currentModel.value===e.name),M=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(h.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(s!==void 0?s.linkClass.value:"")),p=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),w=f(()=>e.disable===!0||o.hasFocus.value===!0||h.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function x(u,_){if(_!==!0&&l.value!==null&&l.value.focus(),e.disable===!0){s!==void 0&&s.hasRouterLink.value===!0&&Z(u);return}if(s===void 0){o.updateModel({name:e.name}),i("click",u);return}if(s.hasRouterLink.value===!0){const R=(q={})=>{let k;const D=q.to===void 0||dt(q.to,e.to)===!0?o.avoidRouteWatcher=qt():null;return s.navigateToRouterLink(u,{...q,returnRouterError:!0}).catch(E=>{k=E}).then(E=>{if(D===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,k===void 0&&(E===void 0||E.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),q.returnRouterError===!0)return k!==void 0?Promise.reject(k):E})};i("click",u,R),u.defaultPrevented!==!0&&R();return}i("click",u)}function $(u){ut(u,[13,32])?x(u,!0):ct(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&o.onKbdNavigate(u.keyCode,a.$el)===!0&&Z(u),i("keydown",u)}function V(){const u=o.tabProps.value.narrowIndicator,_=[],R=y("div",{ref:P,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&_.push(y(ae,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&_.push(y("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&_.push(e.alertIcon!==void 0?y(ae,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):y("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),u===!0&&_.push(R);const q=[y("div",{class:"q-focus-helper",tabindex:-1,ref:l}),y("div",{class:p.value},nt(t.default,_))];return u===!1&&q.push(R),q}const Q={name:f(()=>e.name),rootRef:m,tabIndicatorRef:P,routeData:s};oe(()=>{o.unregisterTab(Q)}),it(()=>{o.registerTab(Q)});function j(u,_){const R={ref:m,class:M.value,tabindex:w.value,role:"tab","aria-selected":h.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:x,onKeydown:$,..._};return st(y(u,R,V()),[[tt,I.value]])}return{renderTab:j,$tabs:o}}var $e=K({name:"QTab",props:At,emits:Rt,setup(e,{slots:t,emit:i}){const{renderTab:s}=Lt(e,t,i);return()=>s("div")}});function be(){let e;const t=W();function i(){e=void 0}return ye(i),oe(i),{removeTick:i,registerTick(s){e=s,Fe(()=>{e===s&&(Qe(t)===!1&&e(),e=void 0)})}}}function De(){let e=null;const t=W();function i(){e!==null&&(clearTimeout(e),e=null)}return ye(i),oe(i),{removeTimeout:i,registerTimeout(s,o){i(),Qe(t)===!1&&(e=setTimeout(s,o))}}}let Ue=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,Ue=e.scrollLeft>=0,e.remove()}function Bt(e,t,i){const s=i===!0?["left","right"]:["top","bottom"];return`absolute-${t===!0?s[0]:s[1]}${e?` text-${e}`:""}`}const $t=["left","center","right","justify"];var Dt=K({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>$t.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:t,emit:i}){const{proxy:s}=W(),{$q:o}=s,{registerTick:a}=be(),{registerTick:l}=be(),{registerTick:m}=be(),{registerTimeout:P,removeTimeout:I}=De(),{registerTimeout:h,removeTimeout:M}=De(),p=B(null),w=B(null),x=B(e.modelValue),$=B(!1),V=B(!0),Q=B(!1),j=B(!1),u=[],_=B(0),R=B(!1);let q=null,k=null,D;const E=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Bt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),re=f(()=>{const n=_.value,r=x.value;for(let c=0;c<n;c++)if(u[c].name.value===r)return!0;return!1}),le=f(()=>`q-tabs__content--align-${$.value===!0?"left":j.value===!0?"justify":e.align}`),ie=f(()=>`q-tabs row no-wrap items-center q-tabs--${$.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),d=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+le.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),A=f(()=>e.vertical!==!0&&o.lang.rtl===!0),F=f(()=>Ue===!1&&A.value===!0);G(A,H),G(()=>e.modelValue,n=>{se({name:n,setCurrent:!0,skipEmit:!0})}),G(()=>e.outsideArrows,ee);function se({name:n,setCurrent:r,skipEmit:c}){x.value!==n&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",n),(r===!0||e["onUpdate:modelValue"]===void 0)&&(We(x.value,n),x.value=n))}function ee(){a(()=>{qe({width:p.value.offsetWidth,height:p.value.offsetHeight})})}function qe(n){if(g.value===void 0||w.value===null)return;const r=n[g.value.container],c=Math.min(w.value[g.value.scroll],Array.prototype.reduce.call(w.value.children,(C,b)=>C+(b[g.value.content]||0),0)),T=r>0&&c>r;$.value=T,T===!0&&l(H),j.value=r<parseInt(e.breakpoint,10)}function We(n,r){const c=n!=null&&n!==""?u.find(C=>C.name.value===n):null,T=r!=null&&r!==""?u.find(C=>C.name.value===r):null;if(c&&T){const C=c.tabIndicatorRef.value,b=T.tabIndicatorRef.value;q!==null&&(clearTimeout(q),q=null),C.style.transition="none",C.style.transform="none",b.style.transition="none",b.style.transform="none";const v=C.getBoundingClientRect(),S=b.getBoundingClientRect();b.style.transform=e.vertical===!0?`translate3d(0,${v.top-S.top}px,0) scale3d(1,${S.height?v.height/S.height:1},1)`:`translate3d(${v.left-S.left}px,0,0) scale3d(${S.width?v.width/S.width:1},1,1)`,m(()=>{q=setTimeout(()=>{q=null,b.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",b.style.transform="none"},70)})}T&&$.value===!0&&X(T.rootRef.value)}function X(n){const{left:r,width:c,top:T,height:C}=w.value.getBoundingClientRect(),b=n.getBoundingClientRect();let v=e.vertical===!0?b.top-T:b.left-r;if(v<0){w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(v),H();return}v+=e.vertical===!0?b.height-C:b.width-c,v>0&&(w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(v),H())}function H(){const n=w.value;if(n===null)return;const r=n.getBoundingClientRect(),c=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);A.value===!0?(V.value=Math.ceil(c+r.width)<n.scrollWidth-1,Q.value=c>0):(V.value=c>0,Q.value=e.vertical===!0?Math.ceil(c+r.height)<n.scrollHeight:Math.ceil(c+r.width)<n.scrollWidth)}function Pe(n){k!==null&&clearInterval(k),k=setInterval(()=>{Ke(n)===!0&&z()},5)}function xe(){Pe(F.value===!0?Number.MAX_SAFE_INTEGER:0)}function _e(){Pe(F.value===!0?0:Number.MAX_SAFE_INTEGER)}function z(){k!==null&&(clearInterval(k),k=null)}function je(n,r){const c=Array.prototype.filter.call(w.value.children,S=>S===r||S.matches&&S.matches(".q-tab.q-focusable")===!0),T=c.length;if(T===0)return;if(n===36)return X(c[0]),c[0].focus(),!0;if(n===35)return X(c[T-1]),c[T-1].focus(),!0;const C=n===(e.vertical===!0?38:37),b=n===(e.vertical===!0?40:39),v=C===!0?-1:b===!0?1:void 0;if(v!==void 0){const S=A.value===!0?-1:1,N=c.indexOf(r)+v*S;return N>=0&&N<T&&(X(c[N]),c[N].focus({preventScroll:!0})),!0}}const Oe=f(()=>F.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,r)=>{n.scrollLeft=-r}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,r)=>{n.scrollTop=r}}:{get:n=>n.scrollLeft,set:(n,r)=>{n.scrollLeft=r}});function Ke(n){const r=w.value,{get:c,set:T}=Oe.value;let C=!1,b=c(r);const v=n<b?-1:1;return b+=v*5,b<0?(C=!0,b=0):(v===-1&&b<=n||v===1&&b>=n)&&(C=!0,b=n),T(r,b),H(),C}function ke(n,r){for(const c in n)if(n[c]!==r[c])return!1;return!0}function Xe(){let n=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const c=u.filter(v=>v.routeData!==void 0&&v.routeData.hasRouterLink.value===!0),{hash:T,query:C}=s.$route,b=Object.keys(C).length;for(const v of c){const S=v.routeData.exact.value===!0;if(v.routeData[S===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:N,query:ue,matched:Je,href:et}=v.routeData.resolvedLink.value,ce=Object.keys(ue).length;if(S===!0){if(N!==T||ce!==b||ke(C,ue)===!1)continue;n=v.name.value;break}if(N!==""&&N!==T||ce!==0&&ke(ue,C)===!1)continue;const U={matchedLen:Je.length,queryDiff:b-ce,hrefLen:et.length-N.length};if(U.matchedLen>r.matchedLen){n=v.name.value,r=U;continue}else if(U.matchedLen!==r.matchedLen)continue;if(U.queryDiff<r.queryDiff)n=v.name.value,r=U;else if(U.queryDiff!==r.queryDiff)continue;U.hrefLen>r.hrefLen&&(n=v.name.value,r=U)}n===null&&u.some(v=>v.routeData===void 0&&v.name.value===x.value)===!0||se({name:n,setCurrent:!0})}function He(n){if(I(),R.value!==!0&&p.value!==null&&n.target&&typeof n.target.closest=="function"){const r=n.target.closest(".q-tab");r&&p.value.contains(r)===!0&&(R.value=!0,$.value===!0&&X(r))}}function Ye(){P(()=>{R.value=!1},30)}function te(){Re.avoidRouteWatcher===!1?h(Xe):M()}function Se(){if(D===void 0){const n=G(()=>s.$route.fullPath,te);D=()=>{n(),D=void 0}}}function Ge(n){u.push(n),_.value++,ee(),n.routeData===void 0||s.$route===void 0?h(()=>{if($.value===!0){const r=x.value,c=r!=null&&r!==""?u.find(T=>T.name.value===r):null;c&&X(c.rootRef.value)}}):(Se(),n.routeData.hasRouterLink.value===!0&&te())}function Ze(n){u.splice(u.indexOf(n),1),_.value--,ee(),D!==void 0&&n.routeData!==void 0&&(u.every(r=>r.routeData===void 0)===!0&&D(),te())}const Re={currentModel:x,tabProps:E,hasFocus:R,hasActiveTab:re,registerTab:Ge,unregisterTab:Ze,verifyRouteModel:te,updateModel:se,onKbdNavigate:je,avoidRouteWatcher:!1};vt(Ne,Re);function Ae(){q!==null&&clearTimeout(q),z(),D!==void 0&&D()}let Le;return oe(Ae),ye(()=>{Le=D!==void 0,Ae()}),ft(()=>{Le===!0&&Se(),ee()}),()=>y("div",{ref:p,class:ie.value,role:"tablist",onFocusin:He,onFocusout:Ye},[y(xt,{onResize:qe}),y("div",{ref:w,class:d.value,onScroll:H},J(t.default)),y(ae,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(V.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:xe,onTouchstartPassive:xe,onMouseupPassive:z,onMouseleavePassive:z,onTouchendPassive:z}),y(ae,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:_e,onTouchstartPassive:_e,onMouseupPassive:z,onMouseleavePassive:z,onTouchendPassive:z})])}});const It={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},he={xs:2,sm:4,md:8,lg:16,xl:24};var Vt=K({name:"QSeparator",props:{...we,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=W(),i=Te(e,t.proxy.$q),s=f(()=>e.vertical===!0?"vertical":"horizontal"),o=f(()=>` q-separator--${s.value}`),a=f(()=>e.inset!==!1?`${o.value}-${It[e.inset]}`:""),l=f(()=>`q-separator${o.value}${a.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(i.value===!0?" q-separator--dark":"")),m=f(()=>{const P={};if(e.size!==void 0&&(P[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const I=e.spaced===!0?`${he.md}px`:e.spaced in he?`${he[e.spaced]}px`:e.spaced,h=e.vertical===!0?["Left","Right"]:["Top","Bottom"];P[`margin${h[0]}`]=P[`margin${h[1]}`]=I}return P});return()=>y("hr",{class:l.value,style:m.value,"aria-orientation":s.value})}});const Ce={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Mt=Object.keys(Ce);Ce.all=!0;function Ie(e){const t={};for(const i of Mt)e[i]===!0&&(t[i]=!0);return Object.keys(t).length===0?Ce:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Et=["INPUT","TEXTAREA"];function Ve(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Et.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Qt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),mt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Nt(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,s)=>{const o=parseFloat(i);o&&(t[s]=o)}),t}var Ft=at({name:"touch-swipe",beforeMount(e,{value:t,arg:i,modifiers:s}){if(s.mouse!==!0&&Y.has.touch!==!0)return;const o=s.mouseCapture===!0?"Capture":"",a={handler:t,sensitivity:Nt(i),direction:Ie(s),noop:bt,mouseStart(l){Ve(l,a)&&ht(l)&&(ne(a,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),a.start(l,!0))},touchStart(l){if(Ve(l,a)){const m=l.target;ne(a,"temp",[[m,"touchmove","move","notPassiveCapture"],[m,"touchcancel","end","notPassiveCapture"],[m,"touchend","end","notPassiveCapture"]]),a.start(l)}},start(l,m){Y.is.firefox===!0&&ve(e,!0);const P=Be(l);a.event={x:P.left,y:P.top,time:Date.now(),mouse:m===!0,dir:!1}},move(l){if(a.event===void 0)return;if(a.event.dir!==!1){Z(l);return}const m=Date.now()-a.event.time;if(m===0)return;const P=Be(l),I=P.left-a.event.x,h=Math.abs(I),M=P.top-a.event.y,p=Math.abs(M);if(a.event.mouse!==!0){if(h<a.sensitivity[1]&&p<a.sensitivity[1]){a.end(l);return}}else if(window.getSelection().toString()!==""){a.end(l);return}else if(h<a.sensitivity[2]&&p<a.sensitivity[2])return;const w=h/m,x=p/m;a.direction.vertical===!0&&h<p&&h<100&&x>a.sensitivity[0]&&(a.event.dir=M<0?"up":"down"),a.direction.horizontal===!0&&h>p&&p<100&&w>a.sensitivity[0]&&(a.event.dir=I<0?"left":"right"),a.direction.up===!0&&h<p&&M<0&&h<100&&x>a.sensitivity[0]&&(a.event.dir="up"),a.direction.down===!0&&h<p&&M>0&&h<100&&x>a.sensitivity[0]&&(a.event.dir="down"),a.direction.left===!0&&h>p&&I<0&&p<100&&w>a.sensitivity[0]&&(a.event.dir="left"),a.direction.right===!0&&h>p&&I>0&&p<100&&w>a.sensitivity[0]&&(a.event.dir="right"),a.event.dir!==!1?(Z(l),a.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Qt(),a.styleCleanup=$=>{a.styleCleanup=void 0,document.body.classList.remove("non-selectable");const V=()=>{document.body.classList.remove("no-pointer-events--children")};$===!0?setTimeout(V,50):V()}),a.handler({evt:l,touch:a.event.mouse!==!0,mouse:a.event.mouse,direction:a.event.dir,duration:m,distance:{x:h,y:p}})):a.end(l)},end(l){a.event!==void 0&&(fe(a,"temp"),Y.is.firefox===!0&&ve(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(!0),l!==void 0&&a.event.dir!==!1&&Z(l),a.event=void 0)}};if(e.__qtouchswipe=a,s.mouse===!0){const l=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";ne(a,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}Y.has.touch===!0&&ne(a,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const i=e.__qtouchswipe;i!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&i.end(),i.handler=t.value),i.direction=Ie(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(fe(t,"main"),fe(t,"temp"),Y.is.firefox===!0&&ve(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function zt(){const e=new Map;return{getCache:function(t,i){return e[t]===void 0?e[t]=i:e[t]},getCacheWithFn:function(t,i){return e[t]===void 0?e[t]=i():e[t]}}}const Ut={name:{required:!0},disable:Boolean},Me={setup(e,{slots:t}){return()=>y("div",{class:"q-panel scroll",role:"tabpanel"},J(t.default))}},Wt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},jt=["update:modelValue","beforeTransition","transition"];function Ot(){const{props:e,emit:t,proxy:i}=W(),{getCacheWithFn:s}=zt();let o,a;const l=B(null),m=B(null);function P(d){const g=e.vertical===!0?"up":"left";k((i.$q.lang.rtl===!0?-1:1)*(d.direction===g?1:-1))}const I=f(()=>[[Ft,P,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),h=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),M=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),p=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),w=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),x=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),$=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);G(()=>e.modelValue,(d,g)=>{const A=u(d)===!0?_(d):-1;a!==!0&&q(A===-1?0:A<_(g)?-1:1),l.value!==A&&(l.value=A,t("beforeTransition",d,g),Fe(()=>{t("transition",d,g)}))});function V(){k(1)}function Q(){k(-1)}function j(d){t("update:modelValue",d)}function u(d){return d!=null&&d!==""}function _(d){return o.findIndex(g=>g.props.name===d&&g.props.disable!==""&&g.props.disable!==!0)}function R(){return o.filter(d=>d.props.disable!==""&&d.props.disable!==!0)}function q(d){const g=d!==0&&e.animated===!0&&l.value!==-1?"q-transition--"+(d===-1?h.value:M.value):null;m.value!==g&&(m.value=g)}function k(d,g=l.value){let A=g+d;for(;A>-1&&A<o.length;){const F=o[A];if(F!==void 0&&F.props.disable!==""&&F.props.disable!==!0){q(d),a=!0,t("update:modelValue",F.props.name),setTimeout(()=>{a=!1});return}A+=d}e.infinite===!0&&o.length!==0&&g!==-1&&g!==o.length&&k(d,d===-1?o.length:-1)}function D(){const d=_(e.modelValue);return l.value!==d&&(l.value=d),!0}function E(){const d=u(e.modelValue)===!0&&D()&&o[l.value];return e.keepAlive===!0?[y(pt,x.value,[y($.value===!0?s(w.value,()=>({...Me,name:w.value})):Me,{key:w.value,style:p.value},()=>d)])]:[y("div",{class:"q-panel scroll",style:p.value,key:w.value,role:"tabpanel"},[d])]}function re(){if(o.length!==0)return e.animated===!0?[y(gt,{name:m.value},E)]:E()}function le(d){return o=ot(J(d.default,[])).filter(g=>g.props!==null&&g.props.slot===void 0&&u(g.props.name)===!0),o.length}function ie(){return o}return Object.assign(i,{next:V,previous:Q,goTo:j}),{panelIndex:l,panelDirectives:I,updatePanelsList:le,updatePanelIndex:D,getPanelContent:re,getEnabledPanels:R,getPanels:ie,isValidPanelName:u,keepAliveProps:x,needsUniqueKeepAliveWrapper:$,goToPanelByOffset:k,goToPanel:j,nextPanel:V,previousPanel:Q}}var Ee=K({name:"QTabPanel",props:Ut,setup(e,{slots:t}){return()=>y("div",{class:"q-tab-panel",role:"tabpanel"},J(t.default))}}),Kt=K({name:"QTabPanels",props:{...Wt,...we},emits:jt,setup(e,{slots:t}){const i=W(),s=Te(e,i.proxy.$q),{updatePanelsList:o,getPanelContent:a,panelDirectives:l}=Ot(),m=f(()=>"q-tab-panels q-panel-parent"+(s.value===!0?" q-tab-panels--dark q-dark":""));return()=>(o(t),rt("div",{class:m.value},a(),"pan",e.swipeable,()=>l.value))}}),Xt=K({name:"QCard",props:{...we,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:i}}=W(),s=Te(e,i),o=f(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>y(e.tag,{class:o.value},J(t.default))}});const Ht=y("div",{class:"q-space"});var Yt=K({name:"QSpace",setup(){return()=>Ht}});const Gt={props:["tab"],data(){return{formData:{name:"",email:"",password:""}}},methods:{...yt("store1",["registerUser","loginUser"]),submitForm(){this.tab=="login"?this.loginUser(this.formData):this.registerUser(this.formData)}}},Zt={class:"row"};function Jt(e,t,i,s,o,a){return ge(),pe(Pt,null,{default:O(()=>[i.tab=="register"?(ge(),pe(me,{key:0,class:"q-mb-md",outlined:"",modelValue:o.formData.name,"onUpdate:modelValue":t[0]||(t[0]=l=>o.formData.name=l),label:"Name"},null,8,["modelValue"])):wt("",!0),L(me,{class:"q-mb-md",outlined:"",modelValue:o.formData.email,"onUpdate:modelValue":t[1]||(t[1]=l=>o.formData.email=l),type:"email",label:"Email"},null,8,["modelValue"]),L(me,{class:"q-mb-md",outlined:"",modelValue:o.formData.password,"onUpdate:modelValue":t[2]||(t[2]=l=>o.formData.password=l),type:"password",label:"Password"},null,8,["modelValue"]),Tt("div",Zt,[L(Yt),L(kt,{onClick:a.submitForm,type:"submit",color:"primary",label:i.tab},null,8,["onClick","label"])])]),_:1})}var en=ze(Gt,[["render",Jt]]);const tn={data(){return{tab:"login"}},components:{LoginReg:en}};function nn(e,t,i,s,o,a){const l=Ct("LoginReg");return ge(),pe(_t,{class:"flex q-pa-md"},{default:O(()=>[L(Xt,{class:"full-width"},{default:O(()=>[L(Dt,{modelValue:o.tab,"onUpdate:modelValue":t[0]||(t[0]=m=>o.tab=m),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:O(()=>[L($e,{name:"login",label:"Login"}),L($e,{name:"register",label:"Register"})]),_:1},8,["modelValue"]),L(Vt),L(Kt,{modelValue:o.tab,"onUpdate:modelValue":t[1]||(t[1]=m=>o.tab=m),animated:""},{default:O(()=>[L(Ee,{name:"login"},{default:O(()=>[L(l,{tab:o.tab},null,8,["tab"])]),_:1}),L(Ee,{name:"register"},{default:O(()=>[L(l,{tab:o.tab},null,8,["tab"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}var dn=ze(tn,[["render",nn]]);export{dn as default};
