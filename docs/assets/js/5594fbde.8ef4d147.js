"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[9703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,m=c["".concat(o,".").concat(d)]||c[d]||h[d]||i;return n?l.createElement(m,r(r({ref:t},p),{},{components:n})):l.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const i={},r="Kubernetes",s={unversionedId:"installation-guide/Kubernetes",id:"version-3.0.0/installation-guide/Kubernetes",title:"Kubernetes",description:"esthesis CORE can be deployed on Kubernetes using the publicly available Helm charts. The Helm",source:"@site/versioned_docs/version-3.0.0/01-installation-guide/01-Kubernetes.md",sourceDirName:"01-installation-guide",slug:"/installation-guide/Kubernetes",permalink:"/docs/3.0.0/installation-guide/Kubernetes",draft:!1,tags:[],version:"3.0.0",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Installation guide",permalink:"/docs/3.0.0/installation-guide/"},next:{title:"Startup guide",permalink:"/docs/3.0.0/startup-guide/"}},o={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Configuration parameters",id:"configuration-parameters",level:2},{value:"General",id:"general",level:3},{value:"Accounts",id:"accounts",level:3},{value:"Keycloak",id:"keycloak",level:3},{value:"MongoDB",id:"mongodb",level:3},{value:"APISIX",id:"apisix",level:3},{value:"OpenID Connect",id:"openid-connect",level:3},{value:"esthesis UI",id:"esthesis-ui",level:3},{value:"Redis",id:"redis",level:3},{value:"Mosquitto",id:"mosquitto",level:3},{value:"InfluxDB",id:"influxdb",level:3},{value:"Kafka",id:"kafka",level:3},{value:"Camunda",id:"camunda",level:3},{value:"Microk8s",id:"microk8s",level:3},{value:"Installation",id:"installation",level:2},{value:"Environment variables",id:"environment-variables",level:3},{value:"Supporting infrastructure",id:"supporting-infrastructure",level:3},{value:"Application",id:"application",level:3},{value:"Notes",id:"notes",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"esthesis CORE can be deployed on Kubernetes using the publicly available Helm charts. The Helm\ncharts are available on the ","[TBC]","."),(0,a.kt)("p",null,"esthesis CORE comes with a variety of different Helm charts. Some of the provided Helm charts\npertain to mandatory components, while others are optional. During the installation you can choose which\ncomponents you want to install by enabling the relevant configuration options. You can also choose\nto use already existing resources, such as a database or a message broker, instead of the\nones provided in the Helm charts."),(0,a.kt)("p",null,"Please note that Helm charts come with reasonable defaults; we strongly advise to\nreview them, so you can customize them to your needs."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Kubernetes cluster with a minimum of 3 nodes and support for Load Balancer service types as well\nas Ingress support."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/helmfile/helmfile"},"Helmfile"))),(0,a.kt)("h2",{id:"configuration-parameters"},"Configuration parameters"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The following parameters can be defined as environmental variables during installation:"),(0,a.kt)("h3",{id:"general"},"General"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"TIMEZONE"),(0,a.kt)("br",null),"\nThe containers timezone to set (note, some containers do not respect this setting).",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"Europe/Athens")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_LOG_LEVEL"),(0,a.kt)("br",null),"\nThe log level to be used for the esthesis components (i.e. does not affect third-party components\ninstalled by the Helm chart).",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"WARN")),(0,a.kt)("h3",{id:"accounts"},"Accounts"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_ADMIN_USERNAME"),(0,a.kt)("br",null),"\nThe username of the esthesis administrator user. Use this account to connect to esthesis UI after installation is done.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesis-admin")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_ADMIN_PASSWORD"),(0,a.kt)("br",null),"\nThe password of the esthesis administrator user.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesis-admin")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_SYSTEM_USERNAME"),(0,a.kt)("br",null),"\nThe username of the esthesis system user. This is the user being used for esthesis inter-component\ncommunication, as well as the default username for all other third-party products installed by the\nHelm charts.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesis-system")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_SYSTEM_PASSWORD"),(0,a.kt)("br",null),"\nThe password of the esthesis system user.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesis-system")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_SYSTEM_PASSWORD"),(0,a.kt)("br",null),"\nThe password of the esthesis system user.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesis-system")),(0,a.kt)("h3",{id:"keycloak"},"Keycloak"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"KEYCLOAK_ENABLED"),(0,a.kt)("br",null),"\nWhether Keycloak should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"KEYCLOAK_INGRESS_HOSTNAME"),(0,a.kt)("br",null),"\nThe hostname of the ingress rule that will be created for Keycloak\\\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"keycloak.esthesis.local")),(0,a.kt)("h3",{id:"mongodb"},"MongoDB"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_ENABLED"),(0,a.kt)("br",null),"\nWhether MongoDB should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_URL_CLUSTER"),(0,a.kt)("br",null),"\nThe internal URL cluster components should use to connect to MongoDB.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb://mongodb:27017")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_DATABASE"),(0,a.kt)("br",null),"\nThe database name to use.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesiscore")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_USERNAME"),(0,a.kt)("br",null),"\nThe username to authenticate with.",(0,a.kt)("br",null),"\nDefault: As specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_SYSTEM_USERNAME")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_PASSWORD"),(0,a.kt)("br",null),"\nThe password to authenticate with.",(0,a.kt)("br",null),"\nDefault: As specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_SYSTEM_PASSWORD")),(0,a.kt)("h3",{id:"apisix"},"APISIX"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX_ENABLED"),(0,a.kt)("br",null),"\nWhether APISIX should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX_INGRESS_NAMESPACE"),(0,a.kt)("br",null),"\nThe namespace to monitor for ingress rules.",(0,a.kt)("br",null),"\nDefault: (empty, all namespaces are monitored)"),(0,a.kt)("h3",{id:"openid-connect"},"OpenID Connect"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_AUTHORITY_URL_EXTERNAL"),(0,a.kt)("br",null),"\nThe URL of the OpenID Connect authority to use for external connections. This URL should be accessible\nfrom the end-user's Internet browser using esthesis UI.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://keycloak.esthesis.local/realms/esthesis")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_AUTHORITY_URL_CLUSTER"),(0,a.kt)("br",null),"\nThe URL of the OpenID Connect authority to use for internal connections. This URL should be accessible\nfrom components running inside the Kubernetes cluster.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://keycloak/realms/esthesis")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_DISCOVERY_URL_CLUSTER"),(0,a.kt)("br",null),"\nThe URL of the OpenID Connect discovery endpoint to use for internal connections. This URL should be\naccessible from components running inside the Kubernetes cluster.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://keycloak/realms/esthesis/.well-known/openid-configuration")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_JWT_VERIFY_LOCATION_CLUSTER"),(0,a.kt)("br",null),"\nThe URL of the OpenID Connect JWT verification endpoint to use for internal connections. This URL\nshould be accessible from components running inside the Kubernetes cluster.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://keycloak/realms/esthesis/protocol/openid-connect/certs")),(0,a.kt)("h3",{id:"esthesis-ui"},"esthesis UI"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_UI_INGRESS_HOSTNAME"),(0,a.kt)("br",null),"\nThe hostname of the ingress rule that will be created for esthesis UI.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesiscore.esthesis.local")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_UI_LOGOUT_URL"),(0,a.kt)("br",null),"\nThe URL to redirect to after logging out from esthesis UI.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"/logout")),(0,a.kt)("h3",{id:"redis"},"Redis"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"REDIS_ENABLED"),(0,a.kt)("br",null),"\nWhether Redis should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"REDIS_HOSTS"),(0,a.kt)("br",null),"\nThe list of Redis hosts to use. This URL should be accessible from components running inside the\nKubernetes cluster.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-master:6379/0")),(0,a.kt)("h3",{id:"mosquitto"},"Mosquitto"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MOSQUITTO_ENABLED"),(0,a.kt)("br",null),"\nWhether Mosquitto should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("h3",{id:"influxdb"},"InfluxDB"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"INFLUXDB_ENABLED"),(0,a.kt)("br",null),"\nWhether InfluxDB should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("h3",{id:"kafka"},"Kafka"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"KAFKA_ENABLED"),(0,a.kt)("br",null),"\nWhether Kafka should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"KAFKA_BOOTSTRAP_SERVERS"),(0,a.kt)("br",null),"\nThe list of Kafka bootstrap servers to use. This URL should be accessible from components running\ninside the Kubernetes cluster.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka:9092")),(0,a.kt)("h3",{id:"camunda"},"Camunda"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"CAMUNDA_ENABLED"),(0,a.kt)("br",null),"\nWhether Camunda should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"CAMUNDA_GATEWAY_URL_CLUSTER"),(0,a.kt)("br",null),"\nThe URL of the Camunda gateway to use for internal connections. This URL should be accessible from\ncomponents running inside the Kubernetes cluster.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"camunda-zeebe-gateway:26500")),(0,a.kt)("h3",{id:"microk8s"},"Microk8s"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MK8S_EXPOSE_INGRESS"),(0,a.kt)("br",null),"\nExposes the default ingress (NGINX) by creating a LoadBalancer type service.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MK8S_INGRESS_NAMESPACE"),(0,a.kt)("br",null),"\nThe namespace to use for the default ingress (NGINX).",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"ingress"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"esthesis Core comes in two Helm charts, one installing all the required dependencies and another one\ninstalling the application components. You can enable/disable which specific dependencies you want\nto install by setting the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"*_ENABLED")," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". Do note that\nalthough the provided dependencies are adequate to have esthesis Core up and running, you might want to\ntune their properties or replace them altogether with your own resources to support your specific\nproduction use case."),(0,a.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,a.kt)("p",null,"The following environment variables are used by the Helm charts to configure the installation, you\nmay change them to suit your needs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export DOMAIN=esthesis-prod.home.nassosmichas.com\nexport TIMEZONE=Europe/Athens\nexport ESTHESIS_ADMIN_USERNAME=admin\nexport ESTHESIS_ADMIN_PASSWORD=esthesis\nexport ESTHESIS_SYSTEM_USERNAME=system\nexport ESTHESIS_SYSTEM_PASSWORD=esthesis\nexport KEYCLOAK_INGRESS_HOSTNAME=keycloak.$DOMAIN\nexport ESTHESIS_UI_INGRESS_HOSTNAME=esthesis-core.$DOMAIN\nexport ESTHESIS_API_INGRESS_HOSTNAME=esthesis-core.$DOMAIN\nexport OIDC_AUTHORITY_URL_EXTERNAL="https://$KEYCLOAK_INGRESS_HOSTNAME/realms/esthesis"\n')),(0,a.kt)("h3",{id:"supporting-infrastructure"},"Supporting infrastructure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Obtain the Helmfile corresponding to the esthesis version you want to install. For example:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget -qO- https://esthes.is/helm/helmfile-esthesis-core-deps-3.0.0.tgz | tar xvz\n"))),(0,a.kt)("li",{parentName:"ul"},"Install the Helmfile:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helmfile sync\n")))),(0,a.kt)("h3",{id:"application"},"Application"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Obtain the Helmfile corresponding to the esthesis version you want to install. For example:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget -qO- https://esthes.is/helm/helmfile-esthesis-core-3.0.0.tgz | tar xvz\n"))),(0,a.kt)("li",{parentName:"ul"},"Install the Helmfile:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helmfile sync\n")))),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You need to access the UI via HTTPS, accessing it via HTTP will not work."),(0,a.kt)("li",{parentName:"ol"},"The UI is exposed under the domain you specified in the environmental variable ",(0,a.kt)("inlineCode",{parentName:"li"},"ESTHESIS_UI_INGRESS_HOSTNAME"),"."),(0,a.kt)("li",{parentName:"ol"},"If you are using a self-signed certificate which is not imported into your local system, before\ntrying to log in into the application you need to visit the Keycloak URL first and accept the\ncertificate. Otherwise, the login will fail."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"esthesis-core-srv-kubernetes")," needs to be able to list all namespaces as well as schedule pods\nvia deployments, configure HPA, etc. A Service Account ",(0,a.kt)("inlineCode",{parentName:"li"},"esthesis-core-srv-kubernetes")," is automatically\ncreated with no additional permissions other than the ones of the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," service account. Depending\non how security is implemented in your Kubernetes cluster, you may need to provide the necessary\nroles/permissions to this service account.")))}h.isMDXComponent=!0}}]);