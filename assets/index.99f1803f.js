import{p as n}from"./propTypes.1759d5a4.js";import{d as y,t as A,A as B,y as D,b as m,ay as z,o as k,l,L as _,r as T,K as w,F as E,k as r,a0 as F,h as R,e as x,i as q,j as C,g,f as $,Y as L}from"./index.def343f7.js";const M={startVal:n.number.def(0),endVal:n.number.def(2020),duration:n.number.def(1300),autoplay:n.bool.def(!0),decimals:{type:Number,required:!1,default:0,validator(e){return e>=0}},color:n.string.def(),fontSize:n.string.def(),decimal:n.string.def("."),separator:n.string.def(","),prefix:n.string.def(""),suffix:n.string.def(""),useEasing:n.bool.def(!0),easingFn:{type:Function,default(e,u,t,i){return t*(-Math.pow(2,-10*e/i)+1)*1024/1023+u}}},G=y({name:"ReNormalCountTo",props:M,emits:["mounted","callback"],setup(e,{emit:u}){const t=A({localStartVal:e.startVal,displayValue:p(e.startVal),printVal:null,paused:!1,localDuration:e.duration,startTime:null,timestamp:null,remaining:null,rAF:null,color:null,fontSize:"16px"}),i=B(()=>e.startVal>e.endVal);D([()=>e.startVal,()=>e.endVal],()=>{e.autoplay&&c()});function c(){const{startVal:o,duration:V,color:f,fontSize:a}=e;t.localStartVal=o,t.startTime=null,t.localDuration=V,t.paused=!1,t.color=f,t.fontSize=a,t.rAF=requestAnimationFrame(d)}function d(o){const{useEasing:V,easingFn:f,endVal:a}=e;t.startTime||(t.startTime=o),t.timestamp=o;const s=o-t.startTime;t.remaining=t.localDuration-s,V?m(i)?t.printVal=t.localStartVal-f(s,0,t.localStartVal-a,t.localDuration):t.printVal=f(s,t.localStartVal,a-t.localStartVal,t.localDuration):m(i)?t.printVal=t.localStartVal-(t.localStartVal-a)*(s/t.localDuration):t.printVal=t.localStartVal+(a-t.localStartVal)*(s/t.localDuration),m(i)?t.printVal=t.printVal<a?a:t.printVal:t.printVal=t.printVal>a?a:t.printVal,t.displayValue=p(t.printVal),s<t.localDuration?t.rAF=requestAnimationFrame(d):u("callback")}function p(o){const{decimals:V,decimal:f,separator:a,suffix:s,prefix:v}=e;o=Number(o).toFixed(V),o+="";const S=o.split(".");let b=S[0];const N=S.length>1?f+S[1]:"",h=/(\d+)(\d{3})/;if(a&&!z(a))for(;h.test(b);)b=b.replace(h,"$1"+a+"$2");return v+b+N+s}return k(()=>{e.autoplay&&c(),u("mounted")}),()=>l(_,null,[l("span",{style:{color:e.color,fontSize:e.fontSize}},[t.displayValue])])}});const P={delay:n.number.def(1),blur:n.number.def(2),i:{type:Number,required:!1,default:0,validator(e){return e<10&&e>=0&&Number.isInteger(e)}}},U=y({name:"ReboundCountTo",props:P,setup(e){const u=T(),t=T(null);return w(()=>{const i=navigator.userAgent.toLowerCase(),c=p=>p.test(i);c(/safari/g)&&!c(/chrome/g)&&(t.value=setTimeout(()=>{u.value.setAttribute("style",`
        animation: none;
        transform: translateY(calc(var(--i) * -9.09%))
      `)},e.delay*1e3))}),E(()=>{clearTimeout(m(t))}),()=>l(_,null,[l("div",{class:"scroll-num",style:{"--i":e.i,"--delay":e.delay}},[l("ul",{ref:"ulRef",style:{fontSize:"32px"}},[l("li",null,[r("0")]),l("li",null,[r("1")]),l("li",null,[r("2")]),l("li",null,[r("3")]),l("li",null,[r("4")]),l("li",null,[r("5")]),l("li",null,[r("6")]),l("li",null,[r("7")]),l("li",null,[r("8")]),l("li",null,[r("9")]),l("li",null,[r("0")])]),l("svg",{width:"0",height:"0"},[l("filter",{id:"blur"},[l("feGaussianBlur",{in:"SourceGraphic",stdDeviation:`0 ${e.blur}`},null)])])])])}}),Y=F(G),j=F(U),I=g("div",{class:"card-header"},[g("span",{class:"font-medium"},"\u6570\u5B57\u52A8\u753B\u7EC4\u4EF6")],-1),K={class:"flex items-center"},H={class:"flex ml-8"},J=y({name:"CountTo"}),W=y({...J,setup(e){return(u,t)=>{const i=R("el-card");return x(),q(i,null,{header:C(()=>[I]),default:C(()=>[g("div",K,[l(m(Y),{prefix:"$",duration:1e3,color:"#409EFF",fontSize:"2em",startVal:1,endVal:1e3}),g("ul",H,[(x(),$(_,null,L([1,6,6,6],(c,d)=>l(m(j),{key:d,i:c,blur:d,delay:d+1},null,8,["i","blur","delay"])),64))])])]),_:1})}}});export{W as default};
