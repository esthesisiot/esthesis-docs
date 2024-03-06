"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[3351],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},51123:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={},i="Transforming payloads",l={unversionedId:"device-agent/Transforming payloads",id:"version-3.0.29/device-agent/Transforming payloads",title:"Transforming payloads",description:"The embedded MQTT and HTTP endpoints allow the device agent to receive data from external sources",source:"@site/versioned_docs/version-3.0.29/04-device-agent/05-Transforming payloads.md",sourceDirName:"04-device-agent",slug:"/device-agent/Transforming payloads",permalink:"/docs/3.0.29/device-agent/Transforming payloads",draft:!1,tags:[],version:"3.0.29",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"Embedded endpoints",permalink:"/docs/3.0.29/device-agent/Embedded endpoints"},next:{title:"Digital Twins",permalink:"/docs/3.0.29/digital-twins/"}},s={},c=[{value:"Lua incoming payload variable",id:"lua-incoming-payload-variable",level:2},{value:"Example Lua script",id:"example-lua-script",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transforming-payloads"},"Transforming payloads"),(0,r.kt)("p",null,"The embedded MQTT and HTTP endpoints allow the device agent to receive data from external sources\nusing the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.29/References/esthesis-line-protocol"},"eLP protocol"),". When the external sources\nare under your control, eLP is a simple protocol you can easily work with. However, when the\nexternal sources are not under your control, you may need to transform their payloads before they\nare sent to the device agent."),(0,r.kt)("p",null,"esthesis device agent allows you to transform payloads using external Lua scripts, for both MQTT\nand HTTP endpoints (see the ",(0,r.kt)("inlineCode",{parentName:"p"},"LUA*")," parameters in ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.29/device-agent/Configuration%20parameters"},"Configuration parameters"),"\nfor more details)."),(0,r.kt)("h2",{id:"lua-incoming-payload-variable"},"Lua incoming payload variable"),(0,r.kt)("p",null,"In your Lua script, you have access to the original payload in the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," variable; the variable\nis a string. You can modify the payload as you wish, and simply ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," it at the end."),(0,r.kt)("h2",{id:"example-lua-script"},"Example Lua script"),(0,r.kt)("p",null,"Let us consider an external data source that pushes data in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"cpu\ntemperature=20\nload=2\n")),(0,r.kt)("p",null,"The first line is always the category name, whereas the remaining lines contain individual measurements\nfor that category. Measurements are separated by an equal sign."),(0,r.kt)("p",null,"We want to transform this incoming payload to eLP format, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"cpu temperature=20,load=2\n")),(0,r.kt)("p",null,"The following Lua script could be used to achieve this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- Splitting the payload into lines\nlocal lines = {}\nfor line in payload:gmatch("[^\\r\\n]+") do\n    table.insert(lines, line)\nend\n\n-- Extracting the category and measurements\nlocal category = lines[1]\nlocal measurements = {}\nfor i = 2, #lines do\n    local measurement = lines[i]:gsub("%s+", "")  -- Remove whitespace\n    table.insert(measurements, measurement)\nend\n\n-- Constructing the single-line format\nlocal transformedPayload = category .. " " .. table.concat(measurements, ",")\n\nreturn transformedPayload\n')))}u.isMDXComponent=!0}}]);