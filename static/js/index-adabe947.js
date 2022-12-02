import{d as A,N as w,O as N,s as D,bN as I,R as M,r as x,b2 as _,b as F,c as p,e as S,w as l,h as o,k as B,F as E,l as v,f as t,u as d,g as s,I as C,Q as h,bO as k}from"./index-c80d305d.js";import{u as U}from"./hooks-0b677009.js";const H=o("div",null,"\u6807\u7B7E\u9875\u590D\u7528\uFF0C\u8D85\u51FA\u9650\u5236\u81EA\u52A8\u5173\u95ED\uFF08\u4F7F\u7528\u573A\u666F: \u52A8\u6001\u8DEF\u7531\uFF09",-1),L={class:"flex flex-wrap items-center"},O=o("p",null,"query\u4F20\u53C2\u6A21\u5F0F\uFF1A",-1),P={class:"flex flex-wrap items-center"},j=o("p",null,"params\u4F20\u53C2\u6A21\u5F0F\uFF1A",-1),z=A({name:"Tabs"}),J=A({...z,setup(Q){const{toDetail:c,router:b}=U(),g=w(N().wholeMenus,!0),m=D(()=>I(M(g),0,{disabled:!0})),i=x([]),f=D(()=>{var n;return(n=_())==null?void 0:n.multiTags});function $(){i.value.length!==0&&i.value.forEach(n=>{var a;const e=(a=k(m.value,n).redirect)!=null?a:k(m.value,n).path;_().handleTags("splice",e),e==="/tabs/index"&&b.push({path:f.value[f.value.length-1].path})})}return(n,e)=>{const a=F("el-button"),r=F("el-divider"),y=F("el-tree-select"),T=F("el-link"),q=F("el-card");return p(),S(q,null,{header:l(()=>[H]),default:l(()=>[o("div",L,[O,(p(),B(E,null,v(6,u=>t(a,{class:"m-2",key:u,onClick:V=>d(c)(u,"query")},{default:l(()=>[s(" \u6253\u5F00"+C(u)+"\u8BE6\u60C5\u9875 ",1)]),_:2},1032,["onClick"])),64))]),t(r),o("div",P,[j,(p(),B(E,null,v(6,u=>t(a,{class:"m-2",key:u,onClick:V=>d(c)(u,"params")},{default:l(()=>[s(" \u6253\u5F00"+C(u)+"\u8BE6\u60C5\u9875 ",1)]),_:2},1032,["onClick"])),64))]),t(r),t(y,{class:"w-[300px]","node-key":"uniqueId",placeholder:"\u8BF7\u9009\u62E9\u8981\u5173\u95ED\u7684\u6807\u7B7E",clearable:"",multiple:"",filterable:"","default-expand-all":"",props:{label:u=>d(h)(u.meta.title),value:"uniqueId",children:"children",disabled:"disabled"},data:d(m),modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=u=>i.value=u)},{default:l(({data:u})=>[o("span",null,C(d(h)(u.meta.title)),1)]),_:1},8,["props","data","modelValue"]),t(a,{class:"m-2",onClick:$},{default:l(()=>[s("\u5173\u95ED\u6807\u7B7E")]),_:1}),t(r),t(a,{onClick:e[1]||(e[1]=u=>n.$router.push({name:"Menu1-2-2"}))},{default:l(()=>[s(" \u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u4F20name\u5BF9\u8C61\uFF0C\u4F18\u5148\u63A8\u8350\uFF09 ")]),_:1}),t(a,{onClick:e[2]||(e[2]=u=>n.$router.push("/nested/menu1/menu1-2/menu1-2-2"))},{default:l(()=>[s(" \u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u76F4\u63A5\u4F20\u8981\u8DF3\u8F6C\u7684\u8DEF\u5F84\uFF09 ")]),_:1}),t(a,{onClick:e[3]||(e[3]=u=>n.$router.push({path:"/nested/menu1/menu1-2/menu1-2-2"}))},{default:l(()=>[s(" \u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u4F20path\u5BF9\u8C61\uFF09 ")]),_:1}),t(r),t(a,{onClick:e[4]||(e[4]=u=>n.$router.push({name:"Menu1-2-2",query:{text:"\u4F20name\u5BF9\u8C61\uFF0C\u4F18\u5148\u63A8\u8350"}}))},{default:l(()=>[s(" \u643A\u53C2\u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u4F20name\u5BF9\u8C61\uFF0C\u4F18\u5148\u63A8\u8350\uFF09 ")]),_:1}),t(a,{onClick:e[5]||(e[5]=u=>n.$router.push({path:"/nested/menu1/menu1-2/menu1-2-2",query:{text:"\u4F20path\u5BF9\u8C61"}}))},{default:l(()=>[s(" \u643A\u53C2\u8DF3\u8F6C\u9875\u5185\u83DC\u5355\uFF08\u4F20path\u5BF9\u8C61\uFF09 ")]),_:1}),t(T,{class:"ml-4",href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE",target:"_blank"},{default:l(()=>[s(" \u70B9\u51FB\u67E5\u770B\u66F4\u591A\u8DF3\u8F6C\u65B9\u5F0F ")]),_:1}),t(r),t(a,{onClick:e[6]||(e[6]=u=>n.$router.push({name:"Empty"}))},{default:l(()=>[s(" \u8DF3\u8F6C\u65E0Layout\u7684\u7A7A\u767D\u9875\u9762 ")]),_:1})]),_:1})}}});export{J as default};