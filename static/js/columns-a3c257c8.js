import{u as e,w as m}from"./xlsx-acc0a47d.js";import{t as u}from"./data-e6159eef.js";import{r as i,N as f}from"./index-9817b40b.js";import{m as b}from"./message-4e95d53b.js";function _(){const r=i(f(u,!0)),o=[{label:"ID",prop:"id"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"}];return{columns:o,dataList:r,exportExcel:()=>{const s=r.value.map(t=>{const n=[];return o.forEach(c=>{n.push(t[c.prop])}),n}),a=[];o.forEach(t=>{a.push(t.label)}),s.unshift(a);const l=e.aoa_to_sheet(s),p=e.book_new();e.book_append_sheet(p,l,"\u6570\u636E\u62A5\u8868"),m(p,"pure-admin-table.xlsx"),b("\u5BFC\u51FA\u6210\u529F",{type:"success"})}}}export{_ as useColumns};