import{d as w}from"./dayjs.min-e0adaab4.js";import{m as W}from"./message-271e9b98.js";import{a as z}from"./system-0af19747.js";import{J as M}from"./index-7c978c8a.js";import{J as s,r as n,a as T,o as S,D as m,a3 as u}from"./runtime-core.esm-bundler-1f6332ae.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-e24b4c59.js";import"./vue.runtime.esm-bundler-7c6ab200.js";import"./runtime-dom.esm-bundler-7421a035.js";import"./index-fdd73d3e.js";import"./isObject-8409f96c.js";import"./index-24d7a72c.js";import"./index-ea94f923.js";import"./index-04e49040.js";import"./vue-i18n.runtime.esm-bundler-789c3ea9.js";import"./hot-18a7c2fd.js";import"./index-59d64693.js";import"./multiTags-67235d32.js";import"./index-162fdfcd.js";import"./axios-a900fd7e.js";import"./vue-router-82e8a5de.js";function K(){const p=s({name:"",code:"",status:""}),r=n([]),o=n(!0),a=n({}),l=s({total:0,pageSize:10,currentPage:1,background:!0}),d=[{type:"selection",width:55,align:"left",hide:({checkList:t})=>!t.includes("勾选列")},{label:"序号",type:"index",width:70,hide:({checkList:t})=>!t.includes("序号列")},{label:"角色编号",prop:"id",minWidth:100},{label:"角色名称",prop:"name",minWidth:120},{label:"角色标识",prop:"code",minWidth:150},{label:"角色类型",prop:"type",minWidth:150,cellRenderer:({row:t,props:e})=>m(u("el-tag"),{size:e.size,type:t.type===1?"danger":"",effect:"plain"},{default:()=>[t.type===1?"内置":"自定义"]})},{label:"显示顺序",prop:"sort",minWidth:100},{label:"状态",minWidth:130,cellRenderer:t=>{var e;return m(u("el-switch"),{size:t.props.size==="small"?"small":"default",loading:(e=a.value[t.index])==null?void 0:e.loading,modelValue:t.row.status,"onUpdate:modelValue":C=>t.row.status=C,"active-value":1,"inactive-value":0,"active-text":"已开启","inactive-text":"已关闭","inline-prompt":!0,onChange:()=>g(t)},null)}},{label:"创建时间",minWidth:180,prop:"createTime",formatter:({createTime:t})=>w(t).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:180,slot:"operation"}],c=T(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]);function g({row:t,index:e}){M.confirm(`确认要<strong>${t.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${t.name}</strong>角色吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{a.value[e]=Object.assign({},a.value[e],{loading:!0}),setTimeout(()=>{a.value[e]=Object.assign({},a.value[e],{loading:!1}),W("已成功修改角色状态",{type:"success"})},300)}).catch(()=>{t.status===0?t.status=1:t.status=0})}function h(t){}function f(t){}function v(t){}function y(t){}function b(t){}async function i(){o.value=!0;const{data:t}=await z();r.value=t.list,l.total=t.total,setTimeout(()=>{o.value=!1},500)}const x=t=>{t&&(t.resetFields(),i())};return S(()=>{i()}),{form:p,loading:o,columns:d,dataList:r,pagination:l,buttonClass:c,onSearch:i,resetForm:x,handleUpdate:h,handleDelete:f,handleSizeChange:v,handleCurrentChange:y,handleSelectionChange:b}}export{K as useRole};
