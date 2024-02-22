"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[14071],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,f=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},17538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={},o="MQTT security hardening",s={unversionedId:"startup-guide/MQTT-security-hardening",id:"version-3.0.21/startup-guide/MQTT-security-hardening",title:"MQTT security hardening",description:"The default Helm charts for esthesis dependencies deploy an MQTT broker with no security",source:"@site/versioned_docs/version-3.0.21/02-startup-guide/03-MQTT-security-hardening.md",sourceDirName:"02-startup-guide",slug:"/startup-guide/MQTT-security-hardening",permalink:"/docs/3.0.21/startup-guide/MQTT-security-hardening",draft:!1,tags:[],version:"3.0.21",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Registering a test device",permalink:"/docs/3.0.21/startup-guide/Registering a test device"},next:{title:"Central logging",permalink:"/docs/3.0.21/startup-guide/Central-logging"}},c={},l=[{value:"Create a Certificate Authority and a Certificate",id:"create-a-certificate-authority-and-a-certificate",level:2},{value:"Create a Certificate Authority",id:"create-a-certificate-authority",level:3},{value:"Create a server Certificate",id:"create-a-server-certificate",level:3},{value:"Download the CA and the Server Certificate",id:"download-the-ca-and-the-server-certificate",level:3},{value:"Redeploy the Helm chart enabling TLS",id:"redeploy-the-helm-chart-enabling-tls",level:2},{value:"Warnings",id:"warnings",level:2}],u={toc:l},d="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mqtt-security-hardening"},"MQTT security hardening"),(0,i.kt)("p",null,"The default Helm charts for esthesis dependencies deploy an MQTT broker with no security\nconfigured. This may be convenient to make sure everything works in your environment, however by no\nmeans this is a production-ready setup. As esthesis uses the topic names to connect device IDs with\nthe actual devices managed in the system, it is of paramount importance to enable security in MQTT\nbefore you expose your installation outside a controlled network."),(0,i.kt)("p",null,"The following instructions show you how you can enable certificate-based authentication using\nEclipse Mosquitto, which is the MQTT broker being used when you set up esthesis using the provider\nHelm charts."),(0,i.kt)("h2",{id:"create-a-certificate-authority-and-a-certificate"},"Create a Certificate Authority and a Certificate"),(0,i.kt)("p",null,"To enable certificate-based authentication and mutual TLS, you need to create a Certificate\nAuthority (CA) and a server certificate."),(0,i.kt)("p",null,"The CA will be responsible to sign the server certificate, and should be the same CA that signs\nthe certificates used by the devices to connect to the MQTT broker."),(0,i.kt)("p",null,"The server certificate will be used by the MQTT broker to establish a TLS connections with the devices."),(0,i.kt)("h3",{id:"create-a-certificate-authority"},"Create a Certificate Authority"),(0,i.kt)("p",null,'To create a Certificate Authority, go to Key Management > CAs and click on the "Create" button.\nIf you have already configured a CA before, you can skip this part. Make sure the CA you create\nhere is the one set as the Root CA under Settings > Security.'),(0,i.kt)("h3",{id:"create-a-server-certificate"},"Create a server Certificate"),(0,i.kt)("p",null,'You need to create a certificate to be used by the MQTT server to establish TLS. To create a\nCertificate, go to Key Management > Certificates and click on the "Create" button. Pay attention to\nthe following points:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The certificate should be signed by the CA you created above."),(0,i.kt)("li",{parentName:"ol"},"The CN of the certificate should match the domain where the MQTT server is accessible from your\ndevices' perspective. You can add additional domains as SANs (for example, the domain name of the\nservice under which the MQTT server is accessible from within the cluster, i.e. mosquitto).")),(0,i.kt)("h3",{id:"download-the-ca-and-the-server-certificate"},"Download the CA and the Server Certificate"),(0,i.kt)("p",null,"Download the private key and the certificate for the server certificate you created above and the\ncertificate for the CA."),(0,i.kt)("h2",{id:"redeploy-the-helm-chart-enabling-tls"},"Redeploy the Helm chart enabling TLS"),(0,i.kt)("p",null,"Go to the location where you deployed the esthesis dependencies via executing ",(0,i.kt)("inlineCode",{parentName:"p"},"helmfile sync"),"\nand add the following environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export MOSQUITTO_MUTUAL_TLS=true\nexport MOSQUITTO_CA_CERT=$(cat ca.crt | base64)\nexport MOSQUITTO_SERVER_CERT=$(cat cert.crt | base64)\nexport MOSQUITTO_SERVER_KEY=$(cat cert.key | base64)\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"Replace the names of ca.crt, cert.crt and cert.key with the files you downloaded above."),(0,i.kt)("li",{parentName:"ol"},"The name of the user specified by ",(0,i.kt)("inlineCode",{parentName:"li"},"MOSQUITTO_SUPER_USER"),' will be the "superuser" for the MQTT, i.e.\na user that can subscribe and publish to/from any topic. This user should be used by the esthesis\nplatform to communicate with the MQTT broker. Create a separate certificate for this user, having\nthe Common Name set to the same name as the one you specified by ',(0,i.kt)("inlineCode",{parentName:"li"},"MOSQUITTO_SUPER_USER")," (if you\ndid not specify a value for ",(0,i.kt)("inlineCode",{parentName:"li"},"MOSQUITTO_SUPER_USER"),", the default value is 'esthesis')."),(0,i.kt)("li",{parentName:"ol"},"During the deployment of the supporting infrastructure you, probably, had to define an array of\nenvironment variables to be used by the Helm charts. Do not forget to re-specify these variables\nbefore you re-run the ",(0,i.kt)("inlineCode",{parentName:"li"},"helmfile sync")," command here, otherwise the deployment might fail or have\nunexpected results."))),(0,i.kt)("h2",{id:"warnings"},"Warnings"),(0,i.kt)("admonition",{title:"Losing connectivity with your devices",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Before you apply the above procedure, make sure devices already provisioned to esthesis Core have\nbeen issued with a certificate signed by the CA used above. Otherwise, they will lose connectivity\nto the MQTT broker."),(0,i.kt)("p",{parentName:"admonition"},"In addition, since the MQTT broker will no longer accept non-TLS connections, you need to update\nthe URL of the MQTT broker used by the devices to start with ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl://")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"tcp://"),".")),(0,i.kt)("admonition",{title:"Dataflows failing to connect",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"If you have configured a dataflow that accesses the MQTT broker, you need to update it to point\nto the TLS URL of the MQTT broker. In addition, you need to update the dataflow to use a certificate\nto identify itself to the MQTT broker."),(0,i.kt)("p",{parentName:"admonition"},'Be careful which certificate you will use. Dataflows accessing the MQTT broker, usually, require\nfull-access, that means to be able to subscribe and publish to/from any topic. If you have used the\nprovided Mosquitto configuration, you need to use the certificate of the "superuser" you created\nwhile hardening the security of the MQTT broker.')))}h.isMDXComponent=!0}}]);