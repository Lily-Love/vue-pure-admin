import{d as m,a5 as p,r as o,aL as h,u as e,o as g,j as x,m as k,c as w,k as L,h as R,n as V,_ as y}from"./index-b37327d6.js";const B=["element-loading-text"],E=["src"],S=m({name:"FrameView"}),b=m({...S,setup(D){var f,_,l;const{t:u}=p(),r=o(!0),t=h(),c=o(""),i=o(null);(f=e(t.meta))!=null&&f.frameSrc&&(c.value=(_=e(t.meta))==null?void 0:_.frameSrc),((l=e(t.meta))==null?void 0:l.frameLoading)===!1&&s();function s(){r.value=!1}function d(){V(()=>{const a=e(i);if(!a)return;const n=a;n.attachEvent?n.attachEvent("onload",()=>{s()}):a.onload=()=>{s()}})}return g(()=>{d()}),(a,n)=>{const v=x("loading");return k((w(),L("div",{class:"frame","element-loading-text":e(u)("status.hsLoad")},[R("iframe",{src:c.value,class:"frame-iframe",ref_key:"frameRef",ref:i},null,8,E)],8,B)),[[v,r.value]])}}});const j=y(b,[["__scopeId","data-v-8f8c8b9e"]]);export{j as default};
