"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[93136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={},o="Permissions and Security",s={unversionedId:"developers-guide/Permissions and Security",id:"version-3.0.50/developers-guide/Permissions and Security",title:"Permissions and Security",description:"esthesis CORE secures access to resources via a permissions system. This system is based on the",source:"@site/versioned_docs/version-3.0.50/07-developers-guide/07-Permissions and Security.md",sourceDirName:"07-developers-guide",slug:"/developers-guide/Permissions and Security",permalink:"/docs/3.0.50/developers-guide/Permissions and Security",draft:!1,tags:[],version:"3.0.50",sidebarPosition:7,frontMatter:{},sidebar:"sidebar",previous:{title:"Developing dataflows",permalink:"/docs/3.0.50/developers-guide/Developing dataflows"},next:{title:"Cross-Service transactions",permalink:"/docs/3.0.50/developers-guide/Cross-Service transactions"}},l={},c=[{value:"Backend integration",id:"backend-integration",level:2},{value:"Placement",id:"placement",level:3},{value:"Frontend integration",id:"frontend-integration",level:2},{value:"Hide or disable?",id:"hide-or-disable",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"permissions-and-security"},"Permissions and Security"),(0,a.kt)("p",null,"esthesis CORE secures access to resources via a permissions system. This system is based on the\nPolicies model, which is a set of rules that are evaluated to determine whether a user has access\nto a resource."),(0,a.kt)("p",null,"A policy template contains the following parts:"),(0,a.kt)("mermaid",{value:"graph LR\n\tclassDef MainElement fill: red\n\n\tsubgraph a[Prefix]\n\t\tsubgraph ern[Resource identification number]\n\t\t\tA[ern]:::MainElement\n\t\t\tA1[Constant]\n\t\t\tA1 -.-> A\n\t\tend\n\n\t\tsubgraph application[esthesis IOT platform]\n\t\t\tB[esthesis]:::MainElement\n\t\t\tB1[Constant]\n\t\t\tB1 -.-> B\n\t\tend\n\tend\n\n\tsubgraph b[Service identification]\n\t\tsubgraph module[Platform module]\n\t\t\tC[module]:::MainElement\n\t\t\tC1[core, uns, gateway, etc.]\n\t\t\tC1 -.-> C\n\t\tend\n\n\t\tsubgraph service[Service name]\n\t\t\tD[service]:::MainElement\n\t\t\tD1[Variable]\n\t\t\tD1 -.-> D\n\t\tend\n\tend\n\n\tsubgraph c[Object identification]\n\t\tsubgraph objectID[Object identifier]\n\t\t\tE[object ID]:::MainElement\n\t\t\tE1[Variable]\n\t\t\tE1 -.-> E\n\t\tend\n\tend\n\n\tsubgraph d[Operation identification]\n\t\tsubgraph operation[Operation]\n\t\t\tF[operation]:::MainElement\n\t\t\tF1[create, read, update, delete, etc.]\n\t\t\tF1 -.-> F\n\t\tend\n\n\t\tsubgraph allowdeny[Access type]\n\t\t\tG[access]:::MainElement\n\t\t\tG1[allow, deny]\n\t\t\tG1 -.-> G\n\t\tend\n\tend\n\n\tern --\x3e|:| application\n\tapplication --\x3e|:| module\n\tmodule --\x3e|:| service\n\tservice --\x3e|:| objectID\n\tobjectID --\x3e|:| operation\n\toperation --\x3e|:| allowdeny"}),(0,a.kt)("p",null,"An example policy could be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"ern:esthesis:core:ca:*:delete:allow\n")),(0,a.kt)("p",null,"The above policy allows the deletion of any resources in the Certificate Authoridy service of the\nesthesis CORE module."),(0,a.kt)("h2",{id:"backend-integration"},"Backend integration"),(0,a.kt)("p",null,"You can perform manual security checks using the ",(0,a.kt)("inlineCode",{parentName:"p"},"isPermitted")," method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"SecurityPermissionsService"),"\nclass (or respectively via the ",(0,a.kt)("inlineCode",{parentName:"p"},"SecurityResource")," client). There are two variations of this method,\none that checks the category and the operation that you want to check, and a similar one that also\ntakes into account a specific resource id. The method returns a boolean value that indicates whether\nthe user has the required permissions or not. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'if (!securityResource.isPermitted(TAG, Operation.DELETE, id)) {\n   throw new QSecurityException("You are not allowed to delete this tag.");\n} else {\n   return super.deleteById(id);\n}\n')),(0,a.kt)("p",null,'Manually checking for permissions can be helpful in cases where you need to evaluate a more complex\nlogic than just "can user X perform operation Y", however, for most other cases it is indeed that\nsimple security check the only thing you need to perform. To facilitate scenarios such as this, we\nhave created the ',(0,a.kt)("inlineCode",{parentName:"p"},"ErnPermission")," annotation. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@ErnPermission(category = TAG, operation = DELETE)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@ErnPermission")," provides two additional features you should be aware of:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"bypassForRoles")," parameter allows you to define a list of roles that are allowed to bypass the\npermission check. This is useful for cases where you want to allow certain roles to perform an\noperation regardless of the permissions, for example, system actions."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"checkResourceId")," parameter allows you to define whether a specific resource check should be\nperformed or skipped. By default, this is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", meaning that the permission check will\nalways try to figure out if you are accessing a specific resource and try to explicitly check\npermissions for that resource. If you set this to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", the permission check will only check\npermissions for the category and operation, without taking into account the resource id. The way\nin which resource id discovery takes place is by inspecting the first argument of the method\nannotated with ",(0,a.kt)("inlineCode",{parentName:"li"},"@ErnPermission"),". If the argument is of type ",(0,a.kt)("inlineCode",{parentName:"li"},"String"),", it will be considered as\nthe resource id; similarly, if the argument is of type ",(0,a.kt)("inlineCode",{parentName:"li"},"BaseEntity"),", its ",(0,a.kt)("inlineCode",{parentName:"li"},"getId()")," method will be\ninvoked to get the resource id. In case you have a method that e.g. has a single argument of type\n",(0,a.kt)("inlineCode",{parentName:"li"},"String")," but that argument is not a resource id, you can set the ",(0,a.kt)("inlineCode",{parentName:"li"},"checkResourceId")," parameter to\n",(0,a.kt)("inlineCode",{parentName:"li"},"false")," and the permission check will not try to extract the resource id from the method argument.")),(0,a.kt)("h3",{id:"placement"},"Placement"),(0,a.kt)("p",null,"On top of the permission system, all endpoints of the application are secured by OIDC. That\neffectively means that you need to carefully place security checks and annotations in appropriate\nplaces in the code. As a rule of thumb you can go by the following guidelines:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If you are working with the implementation of the client of a service, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"TagResourceImpl"),",\nannotate all endpoints with ",(0,a.kt)("inlineCode",{parentName:"li"},"@RolesAllowed"),". This will ensure that the endpoint is secured by\nOIDC and that only users with the required roles can access it."),(0,a.kt)("li",{parentName:"ol"},"If you are working with the implementation of the service itself, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"TagService"),", annotate\nall methods that need to be secured with ",(0,a.kt)("inlineCode",{parentName:"li"},"@ErnPermission"),". This will ensure that the method is\nsecured by the permission system and that only users with the required permissions can access it.")),(0,a.kt)("h2",{id:"frontend-integration"},"Frontend integration"),(0,a.kt)("p",null,"Security and permissions can also be checked on the frontend side allowing to show, hide, or disable\ncertain UI elements based on the user's permissions. Note that frontend permissions checks are only\nused for UI purposes and should not be used as a security measure; you should always secure your\nbackend endpoints as well as described above."),(0,a.kt)("p",null,"The security policies associated with the currently logged-in user are fetched during login and\nstored in the browser's session storage under the key ",(0,a.kt)("inlineCode",{parentName:"p"},"X-ESTHESIS-PERMISSIONS"),". That effectively\nmeans that if you change policies for a user, they will need to log out and log back in to see the\nchanges (or just refreshing their browser); backend security checks are automatically updated."),(0,a.kt)("p",null,"In your frontend code you do not need to directly access the session storage, as there are helper\nmethods available. Here is how you can check for permissions in your frontend code:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Have your Angular component extending the ",(0,a.kt)("inlineCode",{parentName:"li"},"SecurityBaseComponent")," class. ",(0,a.kt)("inlineCode",{parentName:"li"},"SecurityBaseComponent"),"\nprovides several variations of an ",(0,a.kt)("inlineCode",{parentName:"li"},"isPermitted")," method that you can use to check for permissions, but\nalso performs automatic permission evaluations exposing the following instance variables:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"allowRead"),": Indicating whether the user is allowed to read the resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"allowCreate"),": Indicating whether the user is allowed to create the resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"allowWrite"),": Indicating whether the user is allowed to edit the resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"allowDelete"),": Indicating whether the user is allowed to delete the resource."))),(0,a.kt)("li",{parentName:"ol"},"Have your Angular component's constructor call its parent constructor passing the correct\ncategory and resource id - if applicable.")),(0,a.kt)("p",null,"Once you have properly initialised your Angular component, you can influence how the UI should be\nrendered based on the user's permissions. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<button (click)="delete()"\n        *ngIf="allowDelete && id !== appConstants.NEW_RECORD_ID"\n        class="btn btn-sm btn-accent">DELETE\n</button>\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<button (click)="save()"\n        *ngIf="allowCreate || allowWrite" [disabled]="form.invalid"\n        class="btn btn-sm btn-primary">SAVE\n</button>\n')),(0,a.kt)("h3",{id:"hide-or-disable"},"Hide or disable?"),(0,a.kt)("p",null,"When deciding whether to hide or disable a UI element based on the user's permissions, you should\nconsider the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the user is not allowed to perform an action, you should hide the UI element. This is because\ndisabling the element can be confusing to the user, as they might not understand why they cannot\nperform the action."),(0,a.kt)("li",{parentName:"ul"},"If the user is allowed to perform an action but the action is currently not available, you should\ndisable the UI element. This is because the user should be able to see that the action is possible,\nbut that they cannot perform it at the moment.")))}p.isMDXComponent=!0}}]);