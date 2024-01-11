/*! For license information please see c6b8793b93e0e0f0ef864a96cfab5dbe.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[37013],{58892:(e,t,s)=>{s.d(t,{a:()=>n,b:()=>i,c:()=>a,d:()=>r});const r=(0,s(27010).c)({typeKeywords:[],customParameters:[],analyzedLocationTypes:[],allowStoredAuth:!0,isSecured:null,checkAuth:!1}),n=r.state,a=r.state,i=r.state},37013:(e,t,s)=>{s.r(t),s.d(t,{arcgis_new_item_pages_data_store_select_nosql_credentials:()=>o});var r=s(28384),n=s(58892),a=s(47682),i=s(54871);s(27010);const o=class{constructor(e){(0,r.r)(this,e),this.newItemUpdatePage=(0,r.c)(this,"newItemUpdatePage",7),this.inputFields=["connectionUri","fallBackServers","username","password","database"],this.renderError=!1,this.connectionUri=n.a.connectionUri||"",this.fallBackServers=n.a.fallBackServers||"",this.username=n.a.username||"",this.password=n.a.password||"",this.database=n.a.database||"",this.error=[]}async componentWillLoad(){this.provider=n.a.noSqlProvider,this.i18n=i.u.i18n.dataStoreSelectNoSql}validateInputs(){const{i18n:e}=this,t=[];this.connectionUri||t.push(e.connectionUri),this.username||t.push(e.username),this.password||t.push(e.password),this.database||t.push(e.database),this.error=t}renderErrorItem(){if(null!==this.error){const e=this.i18n.errorMessage,t=(0,a.r)(e,this.error.join(", "),"missingFields").replace(/([^,]*)$/," "+this.i18n.and+"$1").replace(/:/g,"");return(0,r.h)("arcgis-new-item-alert",{heading:this.i18n.error,description:t,active:null!==this.error,onAlertDismiss:()=>{this.error=null}})}}handleNext(){this.validateInputs(),this.error.length?this.renderError=!0:(this.renderError=!1,n.a.connectionUri=this.connectionUri,n.a.fallBackServers=this.fallBackServers,n.a.username=this.username,n.a.password=this.password,n.a.database=this.database,this.newItemUpdatePage.emit("dataStoreSelectServerList"))}render(){const{provider:e,i18n:t,inputFields:s}=this;return(0,r.h)("div",null,(0,r.h)("arcgis-new-item-description",{header:t.credentialDescription}),(0,r.h)("div",{class:"noSql-connection-credential"},(0,r.h)("p",{class:"noSql-credential-text"},t.provider),(0,r.h)("calcite-label",null,(0,r.h)("calcite-input",{class:"noSql-credential-input",value:e,disabled:!0})),s.map(((e,n)=>(0,r.h)("div",{key:e},(0,r.h)("p",{class:"noSql-credential-text"},t[e]),(0,r.h)("calcite-label",null,(0,r.h)("calcite-input",{class:{"noSql-credential-input":!0,"noSql-footer-padding":n===s.length-1},value:this[e],type:"password"===e?"password":"text",onCalciteInputChange:t=>{const s=t.target.value;this[e]=s}}),t[`${e}Example`]?(0,r.h)("p",{class:"noSql-credential-text"},t[`${e}Example`]):null))))),this.renderError?this.renderErrorItem():null)}};o.style=".noSql-connection-credential{margin-top:1.5rem}.noSql-credential-input{margin-top:0.25rem}.noSql-credential-text{margin:0}.noSql-footer-padding{margin-bottom:2rem}"},47682:(e,t,s)=>{s.d(t,{r:()=>n});const r={fileName:/\$\{fileName\}/g,fileType:/\$\{type\}/g,typeList:/\$\{typeList\}/g,missingFields:/\$\{\missingFields\}/g},n=(e,t,s)=>{const n=new RegExp(r[s]);return null==e?void 0:e.replace(n,t)}},27010:(e,t,s)=>{s.d(t,{c:()=>o});var r=s(28384);const n=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let s;return(...e)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(n))})(...e)}),2e3)}})(),i=e=>"function"==typeof e?e():e,o=(e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=i(e);let r=new Map(Object.entries(null!=s?s:{}));const n={dispose:[],get:[],set:[],reset:[]},a=()=>{var t;r=new Map(Object.entries(null!==(t=i(e))&&void 0!==t?t:{})),n.reset.forEach((e=>e()))},o=e=>(n.get.forEach((t=>t(e))),r.get(e)),l=(e,s)=>{const a=r.get(e);t(s,a,e)&&(r.set(e,s),n.set.forEach((t=>t(e,s,a))))},c="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>o(t),ownKeys:e=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>r.has(t),set:(e,t,s)=>(l(t,s),!0)}),d=(e,t)=>(n[e].push(t),()=>{((e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)})(n[e],t)});return{state:c,get:o,set:l,on:d,onChange:(t,s)=>{const r=d("set",((e,r)=>{e===t&&s(r)})),n=d("reset",(()=>s(i(e)[t])));return()=>{r(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(d("set",t.set)),t.get&&e.push(d("get",t.get)),t.reset&&e.push(d("reset",t.reset)),t.dispose&&e.push(d("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{n.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=r.get(e);n.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof r.g)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,r.g)();s&&((e,t,s)=>{const r=e.get(t);r?r.includes(s)||r.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(r.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(r.f))),a(e)}}})()),s}},54871:(e,t,s)=>{s.d(t,{a:()=>r,u:()=>n});const r=(0,s(27010).c)({nextText:"next",workflow:"content",scale:"m",disableScroll:!1,featureFlags:{tileLayer3dTiles:!1}}),n=r.state}}]);