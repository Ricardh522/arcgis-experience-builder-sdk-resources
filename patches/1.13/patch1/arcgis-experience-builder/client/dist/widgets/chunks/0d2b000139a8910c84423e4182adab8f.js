"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[72172],{72571:(e,t,r)=>{r.d(t,{a:()=>i});var s=r(47817);r(58574);const o=new s.aq({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let n=class extends s.ao{constructor(e){super(e),this.description=null,this.type=null}};(0,s.Z)([(0,s._)({type:String,json:{write:!0}})],n.prototype,"description",void 0),(0,s.Z)([(0,s._)({type:String,json:{read:o.read,write:o.write}})],n.prototype,"type",void 0),n=(0,s.Z)([(0,s.a0)("esri.tasks.support.GPMessage")],n);var i=n},94882:(e,t,r)=>{r.d(t,{a:()=>u,b:()=>S,c:()=>f,d:()=>x,i:()=>w,l:()=>v,n:()=>T,o:()=>a,u:()=>M});var s=r(47817),o=r(11115),n=(r(58574),r(72571));class i{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach((e=>{const s=this._options[e];if(s){const o="boolean"!=typeof s&&s.name?s.name:e,n="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=n&&(r[o]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(n)?n.join(","):"object"==typeof n?JSON.stringify(n):n)}else r[e]=t[e]}),this),r}}function a(e){return new i(e)}const l=new s.aq({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let p=class extends n.a{constructor(e){super(e),this.type=null}};(0,s.Z)([(0,s._)({type:String,json:{read:l.read,write:l.write}})],p.prototype,"type",void 0),p=(0,s.Z)([(0,s.a0)("esri.tasks.support.NAMessage")],p);var u=p;let c=class extends s.ap{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){(e||[]).forEach((e=>{this._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));const r=s.O.fromJSON(t.spatialReference);return e.map((e=>{const t=s.an.fromJSON(e),o=e.geometry&&e.geometry.spatialReference;return t.geometry&&!o&&((0,s.I)(t.geometry).spatialReference=r),t.strings=e.strings,t.events=(e.events||[]).map((t=>{const r=new s.an({geometry:new s.q({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>(0,s.I)(e))),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map((({strings:e})=>e))}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,s=0,o=0,n=0;const i=[];let a,l,p,u,c,f,d,y,h=0,g=0,m=0;if(c=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),c||(c=[]),0===parseInt(c[h],32)){h=2;const e=parseInt(c[h],32);h++,f=parseInt(c[h],32),h++,1&e&&(g=c.indexOf("|")+1,d=parseInt(c[g],32),g++),2&e&&(m=c.indexOf("|",g)+1,y=parseInt(c[m],32),m++)}else f=parseInt(c[h],32),h++;for(;h<c.length&&"|"!==c[h];){a=parseInt(c[h],32)+r,h++,r=a,l=parseInt(c[h],32)+s,h++,s=l;const e=[a/f,l/f];g&&(u=parseInt(c[g],32)+o,g++,o=u,e.push(u/d)),m&&(p=parseInt(c[m],32)+n,m++,n=p,e.push(p/y)),i.push(e)}return{paths:[i],hasZ:g>0,hasM:m>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach((e=>{e.paths.forEach((e=>{r=r.concat(e)}))}));const o=[];let n=[0,0];return r.forEach((e=>{e[0]===n[0]&&e[1]===n[1]||(o.push(e),n=e)})),new s.v({paths:[o]},t)}};(0,s.Z)([(0,s._)({type:s.M,json:{read:{source:"summary.envelope"}}})],c.prototype,"extent",void 0),(0,s.Z)([(0,s._)()],c.prototype,"features",void 0),(0,s.Z)([(0,s.ab)("features")],c.prototype,"readFeatures",null),(0,s.Z)([(0,s._)()],c.prototype,"geometryType",void 0),(0,s.Z)([(0,s._)({readOnly:!0})],c.prototype,"mergedGeometry",null),(0,s.Z)([(0,s._)()],c.prototype,"routeId",void 0),(0,s.Z)([(0,s._)()],c.prototype,"routeName",void 0),(0,s.Z)([(0,s._)({value:null,readOnly:!0})],c.prototype,"strings",null),(0,s.Z)([(0,s._)({json:{read:{source:"summary.totalDriveTime"}}})],c.prototype,"totalDriveTime",void 0),(0,s.Z)([(0,s._)({json:{read:{source:"summary.totalLength"}}})],c.prototype,"totalLength",void 0),(0,s.Z)([(0,s._)({json:{read:{source:"summary.totalTime"}}})],c.prototype,"totalTime",void 0),c=(0,s.Z)([(0,s.a0)("esri.tasks.support.DirectionsFeatureSet")],c);var f=c;let d=class extends s.ao{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};(0,s.Z)([(0,s._)({type:f,json:{write:!0}})],d.prototype,"directions",void 0),(0,s.Z)([(0,s._)({type:s.an,json:{write:!0}})],d.prototype,"route",void 0),(0,s.Z)([(0,s._)({type:String,json:{write:!0}})],d.prototype,"routeName",void 0),(0,s.Z)([(0,s._)({type:[s.an],json:{write:!0}})],d.prototype,"stops",void 0),d=(0,s.Z)([(0,s.a0)("esri.tasks.support.RouteResult")],d);var y=d;function h(e){return e&&s.ap.fromJSON(e).features.map((e=>e))}let g=class extends s.ao{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return h(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return h(e)}readPolygonBarriers(e){return h(e)}};(0,s.Z)([(0,s._)({aliasOf:"pointBarriers"})],g.prototype,"barriers",void 0),(0,s.Z)([(0,s._)({type:[u]})],g.prototype,"messages",void 0),(0,s.Z)([(0,s._)({type:[s.an]})],g.prototype,"pointBarriers",void 0),(0,s.Z)([(0,s.ab)("pointBarriers",["barriers","pointBarriers"])],g.prototype,"readPointBarriers",null),(0,s.Z)([(0,s._)({type:[s.an]})],g.prototype,"polylineBarriers",void 0),(0,s.Z)([(0,s.ab)("polylineBarriers")],g.prototype,"readPolylineBarriers",null),(0,s.Z)([(0,s._)({type:[s.an]})],g.prototype,"polygonBarriers",void 0),(0,s.Z)([(0,s.ab)("polygonBarriers")],g.prototype,"readPolygonBarriers",null),(0,s.Z)([(0,s._)({type:[y]})],g.prototype,"routeResults",void 0),g=(0,s.Z)([(0,s.a0)("esri.tasks.support.RouteResultsContainer")],g);var m=g;function v(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}function T(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function w(e){const t=[],r=[],{directions:s=[],routes:{features:o=[],spatialReference:n=null}={},stops:{features:i=[],spatialReference:a=null}={},barriers:l,polygonBarriers:p,polylineBarriers:u,messages:c}=e.data,f="esri.tasks.RouteTask.NULL_ROUTE_NAME";let d,y,h=!0;const g=o&&n||i&&a||l&&l.spatialReference||p&&p.spatialReference||u&&u.spatialReference;s.forEach((e=>{t.push(d=e.routeName),r[d]={directions:e}})),o.forEach((e=>{-1===t.indexOf(d=e.attributes.Name)&&(t.push(d),r[d]={}),e.geometry&&(e.geometry.spatialReference=g),r[d].route=e})),i.forEach((e=>{y=e.attributes,-1===t.indexOf(d=y.RouteName||f)&&(t.push(d),r[d]={}),d!==f&&(h=!1),e.geometry&&(e.geometry.spatialReference=g),null==r[d].stops&&(r[d].stops=[]),r[d].stops.push(e)})),i.length>0&&!0===h&&(r[t[0]].stops=r[f].stops,delete r[f],t.splice(t.indexOf(f),1));const v=t.map((e=>(r[e].routeName=e===f?null:e,r[e])));return m.fromJSON({routeResults:v,pointBarriers:l,polygonBarriers:p,polylineBarriers:u,messages:c})}function M(e,t){for(let r=0;r<t.length;r++){const o=e[t[r]];if(o&&o.length)for(const e of o)if((0,s.H)(e)&&e.hasZ)return!0}return!1}async function x(e){if(!e)throw new s.s("network-service:missing-url","Url to Network service is missing");const{data:t}=await(0,s.U)(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let e=0;e<t.supportedTravelModes.length;e++)t.supportedTravelModes[e].id||(t.supportedTravelModes[e].id=t.supportedTravelModes[e].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await(0,s.U)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(e){throw new s.s("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await(0,s.U)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await(0,s.U)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),n=(0,s.al)("helperServices.routingUtilities.url",r);if(!n)return{supportedTravelModes:[],defaultTravelMode:null};const i=(0,o.r)(e),a=/\/solve$/.test(i.path)?"Route":/\/solveClosestFacility$/.test(i.path)?"ClosestFacility":"ServiceAreas",l=await(0,s.U)(n+("/"===n[n.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:a}}),p=[];let u=null;if(l&&l.data&&l.data.results&&l.data.results.length){const e=l.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);p.push(t)}}else"defaultTravelMode"===t.paramName&&(u=t.value)}return{supportedTravelModes:p,defaultTravelMode:u}}(e),{defaultTravelMode:n,supportedTravelModes:i}=await r;return t.defaultTravelMode=n,t.supportedTravelModes=i,t}const S=e=>{let t=class extends e{async getServiceDescription(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription(e)),this._serviceDescriptionPromise}async _fetchServiceDescription(e){if(!this.url||!this.parsedUrl)throw new s.s("network-service:missing-url","Url to Network service is missing");const t=this.url,{data:r}=await(0,s.U)(t,{query:{f:"json",token:e}});r.supportedTravelModes||(r.supportedTravelModes=[]);for(let e=0;e<r.supportedTravelModes.length;e++)r.supportedTravelModes[e].id||(r.supportedTravelModes[e].id=r.supportedTravelModes[e].itemId);const o=r.currentVersion>=10.4?async function(e,t){try{const{data:{supportedTravelModes:r,defaultTravelMode:o}}=await(0,s.U)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json",token:t}});return{supportedTravelModes:r,defaultTravelMode:o}}catch(e){throw new s.s("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(t,e):async function(e,t){const{data:r}=await(0,s.U)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json",token:t}});if(!r||!r.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=r.owningSystemUrl;const{data:o}=await(0,s.U)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json",token:t}}),n=(0,s.al)("helperServices.routingUtilities.url",o);if(!n)return{supportedTravelModes:[],defaultTravelMode:null};const i=(0,s.j)(e),a=/\/solveClosestFacility$/.test(i.path)?"Route":/\/solveClosestFacility$/.test(i.path)?"ClosestFacility":"ServiceAreas",l=await(0,s.U)(n+("/"===n[n.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:a,token:t}}),p=[];let u=null;if(l&&l.data&&l.data.results&&l.data.results.length){const e=l.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);p.push(t)}}else"defaultTravelMode"===t.paramName&&(u=t.value)}return{supportedTravelModes:p,defaultTravelMode:u}}(t,e),{defaultTravelMode:n,supportedTravelModes:i}=await o;return r.defaultTravelMode=n,r.supportedTravelModes=i,r}_isInputGeometryZAware(e,t){for(let r=0;r<t.length;r++){const o=e[t[r]];if(o&&o.length)for(const e of o)if((0,s.H)(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return t=(0,s.Z)([(0,s.a0)("esri.tasks.mixins.NAServiceDescription")],t),t};let _=class extends(S(o.p)){};_=(0,s.Z)([(0,s.a0)("esri.tasks.mixins.NAServiceDescription")],_)},89300:(e,t,r)=>{r.d(t,{L:()=>g});var s=r(47817);const o={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new s.v({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:s.O.WebMercator}),minus180Line:new s.v({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:s.O.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new s.v({paths:[[[180,-180],[180,180]]],spatialReference:s.O.WGS84}),minus180Line:new s.v({paths:[[[-180,-180],[-180,180]]],spatialReference:s.O.WGS84})}};function n(e,t){return Math.ceil((e-t)/(2*t))}function i(e,t){const r=a(e);for(const e of r)for(const r of e)r[0]+=t;return e}function a(e){return(0,s.V)(e)?e.rings:e.paths}async function l(e,t,r){const o="string"==typeof e?(0,s.j)(e):e,n=t[0].spatialReference,i=(0,s.ar)(t[0]),a={...r,query:{...o.query,f:"json",sr:n.wkid?n.wkid:JSON.stringify(n),geometries:JSON.stringify(p(t))}};return function(e,t,r){const o=(0,s.as)(t);return e.map((e=>{const t=o.fromJSON(e);return t.spatialReference=r,t}))}((await(0,s.U)(o.path+"/simplify",a)).data,i,n)}function p(e){return{geometryType:(0,s.ar)(e[0]),geometries:e.map((e=>e.toJSON()))}}const u=s.S.getLogger("esri.geometry.support.normalizeUtils");function c(e){return"polygon"===e[0].type}function f(e){return"polyline"===e[0].type}function d(e,t,r){if(t){const t=function(e,t){if(!(e instanceof s.v||e instanceof s.x)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw u.error(e),new s.s(e)}const r=a(e),o=[];for(const e of r){const r=[];o.push(r),r.push([e[0][0],e[0][1]]);for(let s=0;s<e.length-1;s++){const o=e[s][0],n=e[s][1],i=e[s+1][0],a=e[s+1][1],l=Math.sqrt((i-o)*(i-o)+(a-n)*(a-n)),p=(a-n)/l,u=(i-o)/l,c=l/t;if(c>1){for(let e=1;e<=c-1;e++){const s=e*t,i=u*s+o,a=p*s+n;r.push([i,a])}const e=(l+Math.floor(c-1)*t)/2,s=u*e+o,i=p*e+n;r.push([s,i])}r.push([i,a])}}return function(e){return"polygon"===e.type}(e)?new s.x({rings:o,spatialReference:e.spatialReference}):new s.v({paths:o,spatialReference:e.spatialReference})}(e,1e6);e=(0,s.au)(t,!0)}return r&&(e=i(e,r)),e}function y(e,t,r){if(Array.isArray(e)){const s=e[0];if(s>t){const r=n(s,t);e[0]=s+r*(-2*t)}else if(s<r){const t=n(s,r);e[0]=s+t*(-2*r)}}else{const s=e.x;if(s>t){const r=n(s,t);e=e.clone().offset(r*(-2*t),0)}else if(s<r){const t=n(s,r);e=e.clone().offset(t*(-2*r),0)}}return e}function h(e,t){let r=-1;for(let s=0;s<t.cutIndexes.length;s++){const o=t.cutIndexes[s],i=t.geometries[s],l=a(i);for(let e=0;e<l.length;e++){const t=l[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const s=t[e][0];r=s>r?s:r}r=Number(r.toFixed(9));const s=-360*n(r,180);for(let r=0;r<t.length;r++){const t=i.getPoint(e,r);i.setPoint(e,r,t.clone().offset(s,0))}return!0}}))}if(o===r){if(c(e))for(const t of a(i))e[o]=e[o].addRing(t);else if(f(e))for(const t of a(i))e[o]=e[o].addPath(t)}else r=o,e[o]=i}return e}async function g(e,t,r){if(!Array.isArray(e))return g([e],t);const a=t?t.url:s.aw.geometryServiceUrl;let p,u,c,f,m,v,T,w,M=0;const x=[],S=[];for(const t of e)if((0,s.t)(t))S.push(t);else if(p||(p=t.spatialReference,u=(0,s.av)(p),c=p.isWebMercator,v=c?102100:4326,f=o[v].maxX,m=o[v].minX,T=o[v].plus180Line,w=o[v].minus180Line),u)if("mesh"===t.type)S.push(t);else if("point"===t.type)S.push(y(t.clone(),f,m));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>y(e,f,m))),S.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,u);S.push(e.rings?new s.x(e):e)}else if(t.extent){const e=t.extent,r=n(e.xmin,m)*(2*f);let s=0===r?t.clone():i(t.clone(),r);e.offset(r,0),e.intersects(T)&&e.xmax!==f?(M=e.xmax>M?e.xmax:M,s=d(s,c),x.push(s),S.push("cut")):e.intersects(w)&&e.xmin!==m?(M=e.xmax*(2*f)>M?e.xmax*(2*f):M,s=d(s,c,360),x.push(s),S.push("cut")):S.push(s)}else S.push(t.clone());else S.push(t);let _=n(M,f),N=-90;const Z=_,b=new s.v;for(;_>0;){const e=360*_-180;b.addPath([[e,N],[e,-1*N]]),N*=-1,_--}if(x.length>0&&Z>0){const t=h(x,await async function(e,t,r,o){const n="string"==typeof e?(0,s.j)(e):e,i=t[0].spatialReference,a={...o,query:{...n.query,f:"json",sr:JSON.stringify(i),target:JSON.stringify({geometryType:(0,s.ar)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},l=await(0,s.U)(n.path+"/cut",a),{cutIndexes:p,geometries:u=[]}=l.data;return{cutIndexes:p,geometries:u.map((e=>{const t=(0,s.J)(e);return t.spatialReference=i,t}))}}(a,x,b,r)),o=[],n=[];for(let r=0;r<S.length;r++){const i=S[r];if("cut"!==i)n.push(i);else{const i=t.shift(),a=e[r];(0,s.H)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&i.rings.length>=a.rings.length?(o.push(i),n.push("simplify")):n.push(c?(0,s.at)(i):i)}}if(!o.length)return n;const i=await l(a,o,r),p=[];for(let e=0;e<n.length;e++){const t=n[e];"simplify"!==t?p.push(t):p.push(c?(0,s.at)(i.shift()):i.shift())}return p}const O=[];for(let e=0;e<S.length;e++){const t=S[e];if("cut"!==t)O.push(t);else{const e=x.shift();O.push(!0===c?(0,s.at)(e):e)}}return Promise.resolve(O)}},11115:(e,t,r)=>{r.d(t,{e:()=>i,n:()=>l,p:()=>n,r:()=>a});var s=r(47817);r(58574);let o=class extends s.a1{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?(0,s.j)(e):null}_encode(e,t,r){const s={};for(const o in e){if("declaredClass"===o)continue;const n=e[o];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){s[o]=[];for(let e=0;e<n.length;e++)s[o][e]=this._encode(n[e])}else if("object"==typeof n)if(n.toJSON){const e=n.toJSON(r&&r[o]);s[o]=t?e:JSON.stringify(e)}else s[o]=t?n:JSON.stringify(n);else s[o]=n}return s}};(0,s.Z)([(0,s._)({readOnly:!0})],o.prototype,"parsedUrl",null),(0,s.Z)([(0,s._)()],o.prototype,"requestOptions",void 0),(0,s.Z)([(0,s._)({type:String})],o.prototype,"url",void 0),o=(0,s.Z)([(0,s.a0)("esri.tasks.Task")],o);var n=o;function i(e,t){let r={query:e};return t&&(r={...t,...r},r.query={...r.query,...t.query}),r}function a(e){return"string"==typeof e?(0,s.j)(e):e}function l(e,t,r){const s={};for(const o in e){if("declaredClass"===o)continue;const n=e[o];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){s[o]=[];for(let e=0;e<n.length;e++)s[o][e]=l(n[e])}else if("object"==typeof n)if(n.toJSON){const e=n.toJSON(r&&r[o]);s[o]=t?e:JSON.stringify(e)}else s[o]=t?n:JSON.stringify(n);else s[o]=n}return s}}}]);