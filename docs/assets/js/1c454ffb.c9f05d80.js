"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[66603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const s={},o="Permissions and Security",a={unversionedId:"developers-guide/Permissions and Security",id:"version-3.0.38/developers-guide/Permissions and Security",title:"Permissions and Security",description:"esthesis Core secures access to resources via a permissions system. This system is based on the",source:"@site/versioned_docs/version-3.0.38/07-developers-guide/07-Permissions and Security.md",sourceDirName:"07-developers-guide",slug:"/developers-guide/Permissions and Security",permalink:"/docs/3.0.38/developers-guide/Permissions and Security",draft:!1,tags:[],version:"3.0.38",sidebarPosition:7,frontMatter:{},sidebar:"sidebar",previous:{title:"Developing dataflows",permalink:"/docs/3.0.38/developers-guide/Developing dataflows"},next:{title:"Cross-Service transactions",permalink:"/docs/3.0.38/developers-guide/Cross-Service transactions"}},c={},l=[{value:"Backend",id:"backend",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"permissions-and-security"},"Permissions and Security"),(0,i.kt)("p",null,"esthesis Core secures access to resources via a permissions system. This system is based on the\nPolicies model, which is a set of rules that are evaluated to determine whether a user has access\nto a resource."),(0,i.kt)("p",null,"A policy template contains the following parts:"),(0,i.kt)("mermaid",{value:"graph LR\n\tclassDef MainElement fill: red\n\n\tsubgraph a[Prefix]\n\t\tsubgraph ern[Resource identification number]\n\t\t\tA[ern]:::MainElement\n\t\t\tA1[Constant]\n\t\t\tA1 -.-> A\n\t\tend\n\n\t\tsubgraph application[esthesis IOT platform]\n\t\t\tB[esthesis]:::MainElement\n\t\t\tB1[Constant]\n\t\t\tB1 -.-> B\n\t\tend\n\tend\n\n\tsubgraph b[Service identification]\n\t\tsubgraph module[Platform module]\n\t\t\tC[module]:::MainElement\n\t\t\tC1[core, uns, gateway, etc.]\n\t\t\tC1 -.-> C\n\t\tend\n\n\t\tsubgraph service[Service name]\n\t\t\tD[service]:::MainElement\n\t\t\tD1[Variable]\n\t\t\tD1 -.-> D\n\t\tend\n\tend\n\n\tsubgraph c[Object identification]\n\t\tsubgraph objectID[Object identifier]\n\t\t\tE[object ID]:::MainElement\n\t\t\tE1[Variable]\n\t\t\tE1 -.-> E\n\t\tend\n\tend\n\n\tsubgraph d[Operation identification]\n\t\tsubgraph operation[Operation]\n\t\t\tF[operation]:::MainElement\n\t\t\tF1[create, read, update, delete, etc.]\n\t\t\tF1 -.-> F\n\t\tend\n\n\t\tsubgraph allowdeny[Access type]\n\t\t\tG[access]:::MainElement\n\t\t\tG1[allow, deny]\n\t\t\tG1 -.-> G\n\t\tend\n\tend\n\n\tern --\x3e|:| application\n\tapplication --\x3e|:| module\n\tmodule --\x3e|:| service\n\tservice --\x3e|:| objectID\n\tobjectID --\x3e|:| operation\n\toperation --\x3e|:| allowdeny"}),(0,i.kt)("p",null,"An example policy could be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ern:esthesis:core:ca:*:delete:allow\n")),(0,i.kt)("p",null,"The above policy allows the deletion of any resources in the Certificate Authoridy service of the\nesthesis Core module."),(0,i.kt)("h2",{id:"backend"},"Backend"))}d.isMDXComponent=!0}}]);