import{t as r}from"./data-c4761788.js";import{d as n,b as o,c as u,e as l,u as p}from"./index-9817b40b.js";const i=n({__name:"status",setup(_){const a=({rowIndex:e})=>e===1||e===5?"pure-warning-row":e===3||e===7?"pure-success-row":"",t=[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}];return(e,c)=>{const s=o("pure-table");return u(),l(s,{data:p(r),columns:t,"row-class-name":a},null,8,["data"])}}});export{i as _};