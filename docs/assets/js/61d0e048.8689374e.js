"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[43059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},l),{},{components:n})):a.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={},r="Embedded endpoints",s={unversionedId:"device-agent/Embedded endpoints",id:"version-3.0.17/device-agent/Embedded endpoints",title:"Embedded endpoints",description:"esthesis device agent comes with two embedded endpoints:",source:"@site/versioned_docs/version-3.0.17/04-device-agent/03-Embedded endpoints.md",sourceDirName:"04-device-agent",slug:"/device-agent/Embedded endpoints",permalink:"/docs/device-agent/Embedded endpoints",draft:!1,tags:[],version:"3.0.17",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Configuration parameters",permalink:"/docs/device-agent/Configuration parameters"},next:{title:"Transforming payloads",permalink:"/docs/device-agent/Transforming payloads"}},d={},p=[{value:"HTTP endpoints",id:"http-endpoints",level:2},{value:"Sending data example",id:"sending-data-example",level:3},{value:"MQTT endpoint",id:"mqtt-endpoint",level:2},{value:"Sending data example",id:"sending-data-example-1",level:3}],l={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"embedded-endpoints"},"Embedded endpoints"),(0,i.kt)("p",null,"esthesis device agent comes with two embedded endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An MQTT endpoint, allowing external applications to communicate with the device agent using MQTT, and"),(0,i.kt)("li",{parentName:"ul"},"An HTTP/REST endpoint, allowing external applications to communicate with the device agent using HTTP.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Both endpoints are off by default, so you need to enable them in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/device-agent/Configuration%20parameters"},"configuration options")," before you can use them.")),(0,i.kt)("p",null,"The purpose of the embedded endpoints is to allow external sources to forward data to the esthesis\nplatform. Since the endpoints are defined and configured on the esthesis device agent, external\nsources can forward data to the esthesis platform without having to be aware of any connectivity\ndetails, other than the IP address and port of the endpoints on the esthesis device agent."),(0,i.kt)("mermaid",{value:"graph LR\n\t\tA[External source]\n\t\tsubgraph device\n\t\t\tB[esthesis device agent]\n\t\tend\n\t\tC[esthesis platform]\n\n\t\tA --\x3e|MQTT / IP:port| B\n\t\tA --\x3e|REST / IP:port| B\n\t\tB --\x3e |MQTT| C"}),(0,i.kt)("mermaid",{value:"graph LR\n\tsubgraph device\n\t\tA[External source] --\x3e|MQTT / 127.0.0.1:1883| B[esthesis device agent]\n\t\tA --\x3e|REST / 127.0.0.1:8080| B\n\tend\n\t\tB --\x3e|MQTT| C[esthesis platform]"}),(0,i.kt)("p",null,"As depicted above, in the case where the external source is running on the same device as the\nesthesis device agent, the external source can be configured to use ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The embedded endpoints do not support security, i.e. they do not support authentication. If you\nmake your endpoints accessible to other devices in your network, make sure you do so in a controlled\nenvironment. Alternatively, if your external source is running on the same device as the esthesis\ndevice agent, you can have the embedded endpoints only listen to ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," (which is the default\nvalue).")),(0,i.kt)("p",null,"Both embedded endpoints expect data to follow the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/References/esthesis-line-protocol"},"esthesis Line Protocol"),", however you can push any\nother format you may have and convert it into the esthesis Line Protocol using the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/device-agent/Transforming%20payloads"},"Transforming payloads")," functionality of the agent."),(0,i.kt)("h2",{id:"http-endpoints"},"HTTP endpoints"),(0,i.kt)("p",null,"esthesis device agent exposes two HTTP endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/telemetry")," - for sending telemetry data to the esthesis platform, and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/metadata")," - for sending metadata to the esthesis platform.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The HTTP endpoints are off by default, so you need to enable them first using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ENDPOINT_HTTP"),"\nenvironment variable, or the ",(0,i.kt)("inlineCode",{parentName:"p"},"endpointHttp")," command line argument.")),(0,i.kt)("h3",{id:"sending-data-example"},"Sending data example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST 127.0.0.1:8080/telemetry -d "cpu temperature=30"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X POST 127.0.0.1:8080/metadata -d \"net ip='192.168.1.1'\"\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The above example considers the esthesis device agent being accessible at 127.0.0.1 IP address.\nThis is fine if you execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," command on the same device as the esthesis device agent. If\nyou execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," command from a different device, you need to replace the IP address with the\nIP address of the device where the esthesis device agent is running and configure the esthesis device\nagent to listen to that IP address via the ",(0,i.kt)("inlineCode",{parentName:"p"},"ENDPOINT_HTTP_LISTENING_IP")," environment variable, or the\n",(0,i.kt)("inlineCode",{parentName:"p"},"endpointHttpListeningIP")," command line argument.")),(0,i.kt)("h2",{id:"mqtt-endpoint"},"MQTT endpoint"),(0,i.kt)("p",null,"esthesis device agent exposes two MQTT endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"telemetry")," - for sending telemetry data to the esthesis platform, and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadata")," - for sending metadata to the esthesis platform.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The MQTT endpoints are off by default, so you need to enable them first using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ENDPOINT_MQTT"),"\nenvironment variable, or the ",(0,i.kt)("inlineCode",{parentName:"p"},"endpointMqtt")," command line argument.")),(0,i.kt)("h3",{id:"sending-data-example-1"},"Sending data example"),(0,i.kt)("p",null,"To send data to the MQTT endpoints you need to use an MQTT client. The following examples use the\n",(0,i.kt)("a",{parentName:"p",href:"https://mosquitto.org"},"Mosquitto MQTT client"),", which is available for most operating systems."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'mosquitto_pub -h 127.0.0.1 -t telemetry -m "cpu temperature=20"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mosquitto_pub -h 127.0.0.1 -t metadata -m \"net ip='192.168.1.2'\"\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The above example considers the esthesis device agent being accessible at 127.0.0.1 IP address.\nThis is fine if you execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"mosquitto_pub")," command on the same device as the esthesis device agent. If\nyou execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"mosquitto_pub")," command from a different device, you need to replace the IP address with the\nIP address of the device where the esthesis device agent is running and configure the esthesis device\nagent to listen to that IP address via the ",(0,i.kt)("inlineCode",{parentName:"p"},"ENDPOINT_MQTT_LISTENING_IP")," environment variable, or the\n",(0,i.kt)("inlineCode",{parentName:"p"},"endpointMqttListeningIP")," command line argument.")))}c.isMDXComponent=!0}}]);