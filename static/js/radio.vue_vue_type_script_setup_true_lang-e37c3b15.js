import{t as s}from"./data-a382d419.js";import{d as C,r as l,b as u,c as g,k as v,f as n,h as c,i as h,w as p,g as d}from"./index-c084239f.js";const k={style:{"margin-top":"20px"}},B=C({__name:"radio",setup(w){const o=l(),i=l(),a=t=>{const{setCurrentRow:e}=o.value.getTableRef();e(t)},_=t=>{i.value=t},f=[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}];return(t,e)=>{const m=u("pure-table"),r=u("el-button");return g(),v("div",null,[n(m,{ref_key:"tableRef",ref:o,data:c(s),columns:f,"highlight-current-row":"",onCurrentChange:_},null,8,["data"]),h("div",k,[n(r,{onClick:e[0]||(e[0]=b=>a(c(s)[1]))},{default:p(()=>[d("Select second row")]),_:1}),n(r,{onClick:e[1]||(e[1]=b=>a())},{default:p(()=>[d("Clear selection")]),_:1})])])}}});export{B as _};