import{d as w,r as _,s as M,i as H,W as F,a as N,a0 as B,m as K,f as d,aA as U,aB as D,aC as X,aa as Y,n as L,an as q}from"./index-b37327d6.js";var W=function(e,t){var u,n=t.arg;if(!n){console.error("\u53C2\u6570\u6709\u8BEF");return}var s=t.value,c=X(n)?n.value:(u=t.instance)===null||u===void 0?void 0:u.$refs[n];if(!c){console.error("\u6CA1\u6709\u627E\u5230 ".concat(n," \u5BF9\u5E94\u7684\u5B9E\u4F8B"));return}if(typeof c.addReference!="function"){console.error("".concat(n," \u5BF9\u5E94\u7684\u5B9E\u4F8B\u4E0D\u662F VContextmenu"));return}e.$contextmenuKey=n,c.addReference(e,s)},G=function(e,t){var u,n=e.$contextmenuKey;if(!!n){var s=(u=t.instance)===null||u===void 0?void 0:u.$refs[n];s==null||s.removeReference(e)}},z=function(e,t){G(e,t),W(e,t)},te={mounted:W,updated:z,beforeUnmount:G},o={contextmenu:"v-contextmenu",contextmenuIcon:"v-contextmenu-icon",contextmenuInner:"v-contextmenu-inner",contextmenuDivider:"v-contextmenu-divider",contextmenuItem:"v-contextmenu-item",contextmenuItemHover:"v-contextmenu-item--hover",contextmenuItemDisabled:"v-contextmenu-item--disabled",contextmenuGroup:"v-contextmenu-group",contextmenuGroupTitle:"v-contextmenu-group__title",contextmenuGroupMenus:"v-contextmenu-group__menus",contextmenuSubmenu:"v-contextmenu-submenu",contextmenuSubmenuTitle:"v-contextmenu-submenu__title",contextmenuSubmenuMenus:"v-contextmenu-submenu__menus",contextmenuSubmenuMenusTop:"v-contextmenu-submenu__menus--top",contextmenuSubmenuMenusRight:"v-contextmenu-submenu__menus--right",contextmenuSubmenuMenusBottom:"v-contextmenu-submenu__menus--bottom",contextmenuSubmenuMenusLeft:"v-contextmenu-submenu__menus--left",contextmenuSubmenuArrow:"v-contextmenu-submenu__arrow"};function J(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!Y(r)}var Q={trigger:["contextmenu"]},ne=w({name:"VContextmenu",props:{modelValue:{type:Boolean,default:!1},autoAjustPlacement:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},teleport:{type:[String,Object],default:function(){return"body"}}},emits:["show","hide","update:modelValue"],setup:function(e,t){var u=t.emit,n=_(null),s=_(e.modelValue||!1),c=function(l){s.value=l,u("update:modelValue",l)},x=_({top:0,left:0}),y=M(function(){return{top:"".concat(x.value.top,"px"),left:"".concat(x.value.left,"px")}}),$=_(null),m=function(l,v){var a=l instanceof Event?v:l,I=(a==null?void 0:a.autoAjustPlacement)||e.autoAjustPlacement,h={top:(a==null?void 0:a.top)||0,left:(a==null?void 0:a.left)||0};if(l instanceof Event){var R,k;l.preventDefault(),h.top=(R=a==null?void 0:a.top)!==null&&R!==void 0?R:l.pageY,h.left=(k=a==null?void 0:a.left)!==null&&k!==void 0?k:l.pageX}c(!0),L(function(){if(I){var O=n.value;if(!O)return;var P=O.clientWidth,V=O.clientHeight;if(V+h.top>=window.innerHeight+window.scrollY){var T=h.top-V;T>window.scrollY&&(h.top=T)}if(P+h.left>=window.innerWidth+window.scrollX){var j=h.left-P;j>window.scrollX&&(h.left=j)}}x.value=h,u("show")})},b=function(){$.value=null,c(!1),u("hide")},i=H(new Map),p=_(),g=M(function(){return p.value&&i.get(p.value)}),A=function(l,v){var a=function(){return v!=null&&v.trigger?Array.isArray(v.trigger)?v.trigger:[v.trigger]:Q.trigger}(),I=function(R){e.disabled||(p.value=l,m(R,{}))};a.forEach(function(h){l.addEventListener(h,I)}),i.set(l,{triggers:a,handler:I})},E=function(l){var v=i.get(l);!v||(v.triggers.forEach(function(a){l.removeEventListener(a,v.handler)}),i.delete(l))},S=function(l){if(!(!l.target||!n.value||!p.value)){var v=n.value.contains(l.target)||g.value&&g.value.triggers.includes("click")&&p.value.contains(l.target);v||c(!1)}};return F(s,function(C){C?document.addEventListener("click",S):document.removeEventListener("click",S)}),N(function(){document.removeEventListener("click",S)}),B("visible",s),B("autoAjustPlacement",e.autoAjustPlacement),B("show",m),B("hide",b),{visible:s,style:y,currentReferenceOptions:g,currentOptions:$,contextmenuRef:n,addReference:A,removeReference:E,toggle:c,show:m,hide:b}},methods:{renderContent:function(){var e,t;return K(d("div",{class:o.contextmenu,ref:"contextmenuRef",style:this.style},[d("ul",{class:o.contextmenuInner},[(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t,{triggerOptions:"currentReferenceOptions",options:"currentOptions"})])]),[[q,"visible"]])}},render:function(){var e;return this.visible?this.teleport?d(U,{to:this.teleport},J(e=this.renderContent())?e:{default:function(){return[e]}}):this.renderContent():null}});function f(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var ue=w({name:"VContextmenuItem",props:{disabled:{type:Boolean,default:!1},hideOnClick:{type:Boolean,default:!0}},emits:["click","mouseenter","mouseleave"],setup:function(e,t){var u=t.emit,n=D("hide"),s=_(!1),c=M(function(){var m;return m={},f(m,o.contextmenuItem,!0),f(m,o.contextmenuItemDisabled,e.disabled),f(m,o.contextmenuItemHover,s.value),m}),x=function(b){e.disabled||(u("click",b),e.hideOnClick&&(n==null||n()))},y=function(b){e.disabled||(s.value=!0,u("mouseenter",b))},$=function(b){e.disabled||(s.value=!1,u("mouseleave",b))};return{classes:c,handleClick:x,handleMouseenter:y,handleMouseleave:$}},render:function(){var e,t;return d("li",{class:this.classes,onClick:this.handleClick,onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave},[(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t)])}}),re=w({name:"VContextmenuDivider",render:function(){return d("li",{class:o.contextmenuDivider},null)}}),Z=w({name:"VContextmenuIcon",props:{name:{type:String,required:!0}},render:function(){return d("i",{class:[o.contextmenuIcon,"".concat(o.contextmenuIcon,"-").concat(this.name)]},null)}}),oe=w({name:"VContextmenuSubmenu",props:{title:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["mouseenter","mouseleave"],setup:function(e,t){var u=t.emit,n=_(null),s=D("autoAjustPlacement"),c=_(["top","right"]),x=_(!1),y=function(p){e.disabled||(x.value=!0,u("mouseenter",p),L(function(){var g=[];if(s){var A=p.target,E=A.getBoundingClientRect();if(!n.value)return;var S=n.value.clientWidth,C=n.value.clientHeight;E.right+S>=window.innerWidth?g.push("left"):g.push("right"),E.bottom+C>=window.innerHeight?g.push("bottom"):g.push("top")}c.value=g}))},$=function(p){e.disabled||(x.value=!1,u("mouseleave",p))},m=M(function(){var i;return i={},f(i,o.contextmenuItem,!0),f(i,o.contextmenuSubmenuTitle,!0),f(i,o.contextmenuItemHover,x.value),f(i,o.contextmenuItemDisabled,e.disabled),i}),b=M(function(){var i;return i={},f(i,o.contextmenu,!0),f(i,o.contextmenuSubmenuMenus,!0),f(i,o.contextmenuSubmenuMenusTop,c.value.includes("top")),f(i,o.contextmenuSubmenuMenusRight,c.value.includes("right")),f(i,o.contextmenuSubmenuMenusBottom,c.value.includes("bottom")),f(i,o.contextmenuSubmenuMenusLeft,c.value.includes("left")),i});return{hover:x,submenuRef:n,titleClasses:m,menusClasses:b,handleMouseenter:y,handleMouseleave:$}},render:function(){var e,t,u,n;return d("li",{class:o.contextmenuSubmenu,onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave},[d("div",{class:this.titleClasses},[((e=(t=this.$slots).title)===null||e===void 0?void 0:e.call(t))||this.title,d("span",{class:o.contextmenuSubmenuArrow},[d(Z,{name:"right-arrow"},null)])]),this.hover?d("div",{ref:"submenuRef",class:this.menusClasses},[d("ul",{class:o.contextmenuInner},[(u=(n=this.$slots).default)===null||u===void 0?void 0:u.call(n)])]):null])}}),ie=w({name:"VContextmenuGroup",props:{title:{type:String,default:void 0},maxWidth:{type:[Number,String],default:void 0}},setup:function(e){var t=M(function(){if(!!e.maxWidth)return{"max-width":typeof e.maxWidth=="number"?"".concat(e.maxWidth,"px"):e.maxWidth,"overflow-x":"auto"}});return{style:t}},methods:{renderTitle:function(){var e,t,u=((e=(t=this.$slots).title)===null||e===void 0?void 0:e.call(t))||this.title;return u?d("div",{class:o.contextmenuGroupTitle},[u]):null}},render:function(){var e,t;return d("li",{class:o.contextmenuGroup},[this.renderTitle(),d("ul",{style:this.style,class:o.contextmenuGroupMenus},[(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t)])])}});export{ne as C,ue as a,re as b,oe as c,ie as d,te as e};
