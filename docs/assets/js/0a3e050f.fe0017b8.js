"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[23317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,v=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?s.createElement(v,o(o({ref:t},u),{},{components:n})):s.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<r;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(87462),i=(n(67294),n(3905));const r={},o="Resources vs System Resources",a={unversionedId:"developers-guide/Resources vs System Resources",id:"version-3.0.18/developers-guide/Resources vs System Resources",title:"Resources vs System Resources",description:"This page explains the concept of Resources and System Resources in esthesis.",source:"@site/versioned_docs/version-3.0.18/07-developers-guide/13-Resources vs System Resources.md",sourceDirName:"07-developers-guide",slug:"/developers-guide/Resources vs System Resources",permalink:"/docs/3.0.18/developers-guide/Resources vs System Resources",draft:!1,tags:[],version:"3.0.18",sidebarPosition:13,frontMatter:{},sidebar:"sidebar",previous:{title:"Redis cache",permalink:"/docs/3.0.18/developers-guide/Redis cache"},next:{title:"Testing",permalink:"/docs/3.0.18/developers-guide/Testing"}},c={},l=[{value:"Service module structure",id:"service-module-structure",level:2},{value:"Security",id:"security",level:2},{value:"Resource",id:"resource",level:2},{value:"Source service",id:"source-service",level:3},{value:"Target service",id:"target-service",level:3},{value:"System Resource",id:"system-resource",level:2},{value:"Source service",id:"source-service-1",level:3},{value:"Target service",id:"target-service-1",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"resources-vs-system-resources"},"Resources vs System Resources"),(0,i.kt)("p",null,"This page explains the concept of Resources and System Resources in esthesis."),(0,i.kt)("h2",{id:"service-module-structure"},"Service module structure"),(0,i.kt)("p",null,"Before we delve into the details, we should first have a basic understanding of the structure of an\nesthesis service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Client module: The client module defines the client interface of the service. It is the only\nmodule that is exposed to the outside world, and it is the only module that can be\nimported by other services."),(0,i.kt)("li",{parentName:"ul"},"Impl module: The impl module provides the implementation of the client module. This module should\nnever be imported by other services.")),(0,i.kt)("p",null,'The client module of each service is kind of "special", as it is annotated with Quarkus\'\n',(0,i.kt)("inlineCode",{parentName:"p"},"@RegisterRestClient"),' annotation. This annotation tells Quarkus to generate a REST client for the\nservice which can then be injected into other services. This way we get a "free" client for each\nservice that does not need any additional maintenance as the service evolves.'),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("p",null,"esthesis' security is based on OIDC. An end-user trying to access an esthesis service needs to\nprovide a valid access token. This token is then validated by the service against the OIDC provider.\nThe same applies to service-to-service communication: The source service needs to provide a valid\naccess token to the target service. This token is then validated by the target service against the\nOIDC provider."),(0,i.kt)("p",null,"But what happens when a service needs to access another service without having an end-user initiating\nthe request thus providing an access token? This is where the concept of System Resources comes into\nplay."),(0,i.kt)("p",null,'Effectively, the differentiation of Resources and System Resources is only relevant to the underlying\nsecurity mechanism: Resources are services requiring an active end-user (i.e. a valid access token\nprovided by the user), whereas System Resources are services that do not require an active end-user.\nAt this point you may be wondering: "...and who provides the access token for System Resources?".\nThe following sections provide an overview of how Resources and System Resources are defined and used\nin esthesis.'),(0,i.kt)("h2",{id:"resource"},"Resource"),(0,i.kt)("h3",{id:"source-service"},"Source service"),(0,i.kt)("p",null,"As the source service does not know the location of the target service merely by importing the target\nservice's REST client, you need to define the target service's location in the source service's\n",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties")," file. Here is an example of how this can be done:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"rest-client:\n    SettingsResource:\n        url: http://esthesis-core-srv-settings-service:8080\n        scope: Singleton\n")),(0,i.kt)("p",null,"The above snippet defines the URL of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SettingsResource")," service. You can then inject the\n",(0,i.kt)("inlineCode",{parentName:"p"},"SettingsResource")," REST client into your source service and use it to communicate with the Settings\nservice."),(0,i.kt)("h3",{id:"target-service"},"Target service"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Annotate the ",(0,i.kt)("inlineCode",{parentName:"li"},"SettingsResource")," interface with ",(0,i.kt)("inlineCode",{parentName:"li"},'@RegisterRestClient(configKey = "SettingsResource")'),".\nIt is important to note that the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"configKey")," parameter must match the name of the service\nin source service's ",(0,i.kt)("inlineCode",{parentName:"li"},"application.properties")," file."),(0,i.kt)("li",{parentName:"ul"},"Annotate the ",(0,i.kt)("inlineCode",{parentName:"li"},"SettingsResource")," interface with ",(0,i.kt)("inlineCode",{parentName:"li"},"@RegisterProvider(AccessTokenRequestReactiveFilter.class)"),".\nThis annotation tells Quarkus to inject the ",(0,i.kt)("inlineCode",{parentName:"li"},"AccessTokenRequestReactiveFilter")," into the REST client,\nwhich is responsible for propagating the access token provided by the end-user calling the source\nservice.")),(0,i.kt)("h2",{id:"system-resource"},"System Resource"),(0,i.kt)("h3",{id:"source-service-1"},"Source service"),(0,i.kt)("p",null,"Similarly to Resources, you need to define the target service's location in the source service's\n",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties")," file. Here is an example of how this can be done:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"rest-client:\n    SettingsSystemResource:\n        url: http://esthesis-core-srv-settings-service:8080\n        scope: Singleton\n")),(0,i.kt)("p",null,"The above snippet defines the URL of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SettingsSystemResource")," service. You can then inject the\n",(0,i.kt)("inlineCode",{parentName:"p"},"SettingsSystemResource")," REST client into your source service and use it to communicate with the Settings\nservice."),(0,i.kt)("p",null,"In this case, the source service will act as an OIDC client, therefore it needs to be configured\nappropriately to obtain an access token from the OIDC provider. This is done by adding the following\nproperties to the source service's ",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"oidc-client:\n    client-id: esthesis\n    grant:\n        type: password\n    grant-options:\n        password:\n            username: ${OIDC_CLIENT_USERNAME}\n            password: ${OIDC_CLIENT_PASSWORD}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"${OIDC_CLIENT_USERNAME}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"${OIDC_CLIENT_USERNAME}")," are environment variables allowing the OIDC\nclient to authenticate against the OIDC provider using a password grant. For development, you can\nset those values to the default values used in esthesis' default Keycloak esthesis-realm\n",(0,i.kt)("inlineCode",{parentName:"p"},"esthesis-system"),". In production, those values will be provided by the Kubernetes deployment descriptor\nresulting from the esthesis Helm charts. To instruct Helm to inject those values into a deployment, you\nneed to set the following flags to the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment.yaml")," descriptor of the source service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'"podOidcClient" true\n')),(0,i.kt)("h3",{id:"target-service-1"},"Target service"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Annotate the ",(0,i.kt)("inlineCode",{parentName:"li"},"SettingsSystemResource")," interface with ",(0,i.kt)("inlineCode",{parentName:"li"},'@RegisterRestClient(configKey = "SettingsSystemResource")'),".\nIt is important to note that the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"configKey")," parameter must match the name of the service\nin source service's ",(0,i.kt)("inlineCode",{parentName:"li"},"application.properties")," file."),(0,i.kt)("li",{parentName:"ul"},"Annotate the ",(0,i.kt)("inlineCode",{parentName:"li"},"SettingsResource")," interface with ",(0,i.kt)("inlineCode",{parentName:"li"},"@RegisterProvider(OidcClientRequestReactiveFilter.class)"),".\nThis annotation tells Quarkus to inject the ",(0,i.kt)("inlineCode",{parentName:"li"},"OidcClientRequestReactiveFilter")," into the REST client,\nwhich is responsible to obtain (e.g. create) a valid access token from the OIDC provider and propagate\nit to the target service. Using this annotation the source service acts as an OIDC client obtaining\na new access token for itself which then uses to identifies itself to the target service. In esthesis'\ndefault Keycloak esthesis-realm, there is a user created especially for this purpose.")))}d.isMDXComponent=!0}}]);