"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},a="Installation guide",l={unversionedId:"installation-guide/index",id:"version-3.0.8/installation-guide/index",title:"Installation guide",description:"esthesis CORE is a cloud native application that can be deployed in a variety ways, using:",source:"@site/versioned_docs/version-3.0.8/01-installation-guide/index.md",sourceDirName:"01-installation-guide",slug:"/installation-guide/",permalink:"/docs/3.0.8/installation-guide/",draft:!1,tags:[],version:"3.0.8",frontMatter:{},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/3.0.8/index"},next:{title:"Kubernetes",permalink:"/docs/3.0.8/installation-guide/Kubernetes"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-guide"},"Installation guide"),(0,i.kt)("p",null,"esthesis CORE is a cloud native application that can be deployed in a variety ways, using:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubernetes: This is the officially supported installation method, allowing to deploy all\ncomponents in a Kubernetes cluster. The installation is based on Helm charts, providing you ample\nconfiguration options to customize the deployment to your needs.")))}d.isMDXComponent=!0}}]);