"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[85003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,h=u["".concat(c,".").concat(g)]||u[g]||p[g]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},18403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={},o="Registering a test device",s={unversionedId:"startup-guide/Registering a test device",id:"version-3.0.38/startup-guide/Registering a test device",title:"Registering a test device",description:"Before you start registering real devices it is a good idea to test the platform with a test device.",source:"@site/versioned_docs/version-3.0.38/02-startup-guide/02-Registering a test device.md",sourceDirName:"02-startup-guide",slug:"/startup-guide/Registering a test device",permalink:"/docs/3.0.38/startup-guide/Registering a test device",draft:!1,tags:[],version:"3.0.38",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Initial configuration",permalink:"/docs/3.0.38/startup-guide/Initial configuration"},next:{title:"MQTT security hardening",permalink:"/docs/3.0.38/startup-guide/MQTT-security-hardening"}},c={},l=[{value:"Prepare the platform for new devices registration",id:"prepare-the-platform-for-new-devices-registration",level:2},{value:"Which agent client to use",id:"which-agent-client-to-use",level:2},{value:"Native client",id:"native-client",level:3},{value:"Container client",id:"container-client",level:3},{value:"Check the device registration",id:"check-the-device-registration",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"registering-a-test-device"},"Registering a test device"),(0,r.kt)("p",null,'Before you start registering real devices it is a good idea to test the platform with a test device.\nYou can register a test device and enable its "demo mode" to start receiving data right away.'),(0,r.kt)("h2",{id:"prepare-the-platform-for-new-devices-registration"},"Prepare the platform for new devices registration"),(0,r.kt)("p",null,'Check that esthesis Core is configured to accept new device registrations in\nSettings > Device registration > Registration mode. You can set it to "Open registration" for now,\nbut do not forget to change it to a more secure setting later.'),(0,r.kt)("h2",{id:"which-agent-client-to-use"},"Which agent client to use"),(0,r.kt)("p",null,"esthesis Device Agent comes as a standalone executable natively compiled for different platform, as\nwell as a container image. You can choose the one that best fits your needs."),(0,r.kt)("h3",{id:"native-client"},"Native client"),(0,r.kt)("p",null,"You can download the device agent from:"),(0,r.kt)("p",null,"[todo: add link to download page]"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you select the correct version for your platform.")),(0,r.kt)("p",null,"The agent client is a command line tool that can be heavily customised for your esthesis Core\ninstallation. You can view all the available configuration options by issuing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./esthesis-device-agent --help\n")),(0,r.kt)("p",null,"For a typical demo installation, you can run the device agent as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./esthesis-device-agent \\\n    --hardwareId "test-device-1" \\\n    --registrationUrl "http://{{URL}}/api/agent/v1/register" \\\n    --demoInterval 5\n')),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"{{URL}}")," with the URL of your esthesis Core UI installation."),(0,r.kt)("h3",{id:"container-client"},"Container client"),(0,r.kt)("p",null,"The container client is available on Docker Hub and is built for multiple platforms and architectures:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hub.docker.com/repository/docker/esthesisiot/esthesis-core-device/general",alt:"esthesis Core Device Agent"})),(0,r.kt)("p",null,"For a typical demo installation, you can run the device agent as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n    --name test-device-2 \\\n    --restart unless-stopped \\\n    -e HARDWARE_ID=test-device-2 \\\n    -e REGISTRATION_URL=http://{{URL}}/api/agent/v1/register \\\n    -e DEMO_INTERVAL=5 \\\n    esthesisiot/esthesis-core-device\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"{{URL}}")," with the URL of your esthesis Core UI installation."),(0,r.kt)("h2",{id:"check-the-device-registration"},"Check the device registration"),(0,r.kt)("p",null,"If registration was successful, you should see the device in the device list in esthesis Core and\nthe device should be sending data to the platform:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Demo device data",src:n(29178).Z,width:"1932",height:"721"})))}p.isMDXComponent=!0},29178:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/demo-device-data-3a9dfd7eb011138b8863c31655896f59.png"}}]);