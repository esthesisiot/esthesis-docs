"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[254],{3905:(e,i,n)=>{n.d(i,{Zo:()=>c,kt:()=>u});var t=n(67294);function o(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function r(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?r(Object(n),!0).forEach((function(i){o(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function s(e,i){if(null==e)return{};var n,t,o=function(e,i){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var i=t.useContext(l),n=i;return e&&(n="function"==typeof e?e(i):a(a({},i),e)),n},c=function(e){var i=p(e.components);return t.createElement(l.Provider,{value:i},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},v=t.forwardRef((function(e,i){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),v=o,u=d["".concat(l,".").concat(v)]||d[v]||g[v]||r;return n?t.createElement(u,a(a({ref:i},c),{},{components:n})):t.createElement(u,a({ref:i},c))}));function u(e,i){var n=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=v;var s={};for(var l in i)hasOwnProperty.call(i,l)&&(s[l]=i[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},70334:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=n(87462),o=(n(67294),n(3905));const r={},a="Provisioning",s={unversionedId:"developers-guide/Provisioning",id:"version-3.0.49/developers-guide/Provisioning",title:"Provisioning",description:"Provisioning can be executed in two ways:",source:"@site/versioned_docs/version-3.0.49/07-developers-guide/17-Provisioning.md",sourceDirName:"07-developers-guide",slug:"/developers-guide/Provisioning",permalink:"/docs/developers-guide/Provisioning",draft:!1,tags:[],version:"3.0.49",sidebarPosition:17,frontMatter:{},sidebar:"sidebar",previous:{title:"Observability",permalink:"/docs/developers-guide/Observability"},next:{title:"Release process",permalink:"/docs/developers-guide/Release process"}},l={},p=[{value:"Provisioning initiation",id:"provisioning-initiation",level:2},{value:"Platform initiated provisioning",id:"platform-initiated-provisioning",level:3},{value:"Device initiated provisioning",id:"device-initiated-provisioning",level:3},{value:"Provisioning package selection",id:"provisioning-package-selection",level:2},{value:"Provisioning flow",id:"provisioning-flow",level:2},{value:"Provisioning security",id:"provisioning-security",level:2},{value:"Querying for provisioning packages",id:"querying-for-provisioning-packages",level:3},{value:"Downloading provisioning packages",id:"downloading-provisioning-packages",level:3},{value:"Request limits",id:"request-limits",level:3}],c={toc:p},d="wrapper";function g(e){let{components:i,...n}=e;return(0,o.kt)(d,(0,t.Z)({},c,n,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"provisioning"},"Provisioning"),(0,o.kt)("p",null,"Provisioning can be executed in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By issuing a command to the device from the platform, or"),(0,o.kt)("li",{parentName:"ul"},"By the device itself as part of its auto-update mechanism.")),(0,o.kt)("p",null,"Regardless of which way provisioning is initiated, the underlying mechanism is the same. In the\nfollowing sections we present the differences in the initiation mechanism and then proceed analysing\nthe common provisioning mechanism."),(0,o.kt)("h2",{id:"provisioning-initiation"},"Provisioning initiation"),(0,o.kt)("h3",{id:"platform-initiated-provisioning"},"Platform initiated provisioning"),(0,o.kt)("p",null,"The platform can initiate device provisioning via commands or campaigns. Both functionalities allow\nthe platform to send a message to the device, which will trigger the provisioning process. In case\nof a command, a command of type ",(0,o.kt)("inlineCode",{parentName:"p"},"firmware")," is created which can optionally specify a specific\nprovisioning package version to be installed. Similarly, a campaign of type ",(0,o.kt)("inlineCode",{parentName:"p"},"provisioning")," can be used to\nachieve similar results."),(0,o.kt)("h3",{id:"device-initiated-provisioning"},"Device initiated provisioning"),(0,o.kt)("p",null,"The device agent can be configured to periodically check for new provisioning package versions. If a\nnew version is found, the device will download and install it. This process is called auto-update.\nThe underlying implementation of this functionality is the same as a platform-initiated provisioning\nwhen not specifying a specific firmware version."),(0,o.kt)("h2",{id:"provisioning-package-selection"},"Provisioning package selection"),(0,o.kt)("p",null,"The provisioning package can be selected in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Specific version selection: A specific version of a provisioning package is requested. If the package exists, it gets downloaded and the provisioning process is initiated."),(0,o.kt)("li",{parentName:"ul"},"Latest version selection: The latest version of a provisioning package is requested. esthesis CORE uses semantic versioning to determine what the next version should be based on the current version of the device. For this method to work, the device should be able to report its local version.")),(0,o.kt)("h2",{id:"provisioning-flow"},"Provisioning flow"),(0,o.kt)("p",null,"The following diagram depicts the provisioning flow. For simplicity, the MQTT server between the Device Agent and esthesis CORE platform is omitted."),(0,o.kt)("mermaid",{value:"sequenceDiagram\n\tparticipant W as Web server\n\tparticipant A as Device Agent\n\tparticipant P as esthesis CORE\n\tparticipant U as User\n\n\tU->>P: Issue provisioning command\n\talt Campaign\n\t\tU->>P: Create provisioning campaign\n\tend\n\tP->>A: Provisioning command\n\tA->>P: Check for requested provisioning package\n\talt Auto update\n\t\tA->>P: Check for provisioning package\n\tend\n\tP->>P: Check for requested provisioning package\n\talt Find latest version\n\t\tP->>P: Check for latest version available\n\tend\n\tP--\x3e>A: Provisioning package details\n\talt INTERNAL provisioning package\n\t\tA->>P: Download provisioning package\n\t\tP--\x3e>A: Provisioning package binary\n\telse EXTERNAL provisioning package\n\t\tA->>W: Download provisioning package\n\t\tW--\x3e>A: Provisioning package binary\n\tend\n\tA->>A: Install provisioning package\n\tA->>P: Provisioning package command output"}),(0,o.kt)("h2",{id:"provisioning-security"},"Provisioning security"),(0,o.kt)("p",null,"As depicted above, the provisioning process is a two-part process: First, the device asks for the\ndetails of the provisioning package, then, the device downloads and installs the package. Both\nmechanisms can be secured as presented next."),(0,o.kt)("h3",{id:"querying-for-provisioning-packages"},"Querying for provisioning packages"),(0,o.kt)("p",null,"Querying for provisioning packages is a publicly accessible endpoint, so devices can query it from\nanywhere. To secure this endpoint, the querying endpoint incorporates a simple token validation\nmechanism (this option can be disabled in application settings)."),(0,o.kt)("p",null,"The token to be sent together with a provisioning package query request consists of the device's\nhardware id signed by the device's secret key. esthesis CORE validates the token by checking the\nsignature of the hardware id with the device's public key."),(0,o.kt)("h3",{id:"downloading-provisioning-packages"},"Downloading provisioning packages"),(0,o.kt)("p",null,"Provisioning packages hosted in esthesis CORE (i.e. INTERNAL type) are served directly by esthesis\nCORE to devices. To prevent unauthorized access to the provisioning packages, the download link\npresented to the devices as part of the provisioning package querying process incorporates a unique,\nrandom token. As a result, the download link is only valid for a single download and cannot be reused."),(0,o.kt)("h3",{id:"request-limits"},"Request limits"),(0,o.kt)("p",null,"Querying for provisioning package is rate limited to a total of 5 request in 5 minutes. The rate\nlimit is currently hardcoded into the code - may the need arise, it can be provided as a configurable\noption in the future."),(0,o.kt)("p",null,"The validity of the download token can be set in the application settings. The default value is 60\nminutes."))}g.isMDXComponent=!0}}]);