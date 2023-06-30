"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,h=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a="Working with a private Docker Registry",s={unversionedId:"developers-guide/Working with a private Docker Registry",id:"developers-guide/Working with a private Docker Registry",title:"Working with a private Docker Registry",description:"When working in full dev mode you run all services in your local machine, so there is no need to",source:"@site/docs/06-developers-guide/03-Working with a private Docker Registry.md",sourceDirName:"06-developers-guide",slug:"/developers-guide/Working with a private Docker Registry",permalink:"/docs/developers-guide/Working with a private Docker Registry",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Working with Helm charts",permalink:"/docs/developers-guide/Working with Helm charts"},next:{title:"Developing backend services",permalink:"/docs/developers-guide/Developing backend services"}},l={},p=[{value:"Building and pushing images",id:"building-and-pushing-images",level:2},{value:"Using the private registry in testing a production installation",id:"using-the-private-registry-in-testing-a-production-installation",level:2},{value:"Deploying Dataflows",id:"deploying-dataflows",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"working-with-a-private-docker-registry"},"Working with a private Docker Registry"),(0,i.kt)("p",null,"When working in full dev mode you run all services in your local machine, so there is no need to\npush images to a Docker registry. However, when you want to test your changes in a production-like\nKubernetes environment you need to push your images to a Docker registry, so that your production-like\nKubernetes cluster can pull them from. Considering esthesis Core maintains many services with support\nof multiple architectures, pushing all those images to Docker Hub can take a long time."),(0,i.kt)("p",null,"To speed up the process you can use the Docker Registry provided by Microk8s."),(0,i.kt)("h2",{id:"building-and-pushing-images"},"Building and pushing images"),(0,i.kt)("p",null,"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"publish.sh")," script to prepare your images, you can define the ",(0,i.kt)("inlineCode",{parentName:"p"},"ESTHESIS_REGISTRY"),"\nenvironment variable to point to the private registry. This variable should point to the IP address\nof your Microk8s VM using port 32000.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ESTHESIS_REGISTRY=192.168.20.23:32000 ./publish.sh\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Backend services are built using JIB, so it is possible to push to a private Docker registry\nwith no additional configuration. Hoerver, the UI is built using Docker Buildx, so you need to\nconfigure Buildx accordingly to use a private Docker registry. There is a sample configuration file\n",(0,i.kt)("inlineCode",{parentName:"p"},"buildkit-config.tom")," you can use as a starting point.")),(0,i.kt)("h2",{id:"using-the-private-registry-in-testing-a-production-installation"},"Using the private registry in testing a production installation"),(0,i.kt)("p",null,"When testing a production installation, you can configure the Helm charts to use the images from\nyour private registry instead of Docker Hub. To do so, you can define the ",(0,i.kt)("inlineCode",{parentName:"p"},"ESTHESIS_REGISTRY"),"\nenvironment variable to point to the private registry. This variable should point to the IP address\nof your Microk8s VM using port 32000.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ESTHESIS_REGISTRY=localhost:32000 helmfile sync\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When using the Helm charts without the ",(0,i.kt)("inlineCode",{parentName:"p"},"-env dev")," flag, the charts will automatically\nuse multi-node deployments. If you are testing in a single-node Kubernetes cluster, you need to also\ndefine ",(0,i.kt)("inlineCode",{parentName:"p"},"ESTHESIS_SINGLE_NODE=true")," environmental variable.")),(0,i.kt)("h2",{id:"deploying-dataflows"},"Deploying Dataflows"),(0,i.kt)("p",null,'To use your private Docker Registry when deploying a Dataflow, you can use the\n"Custom Docker Registry" field in the Dataflow definition screen and specify ',(0,i.kt)("inlineCode",{parentName:"p"},"localhost:32000"),"."))}d.isMDXComponent=!0}}]);