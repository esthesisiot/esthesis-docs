"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[7964],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},h=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(t),h=a,u=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return t?s.createElement(u,o(o({ref:n},m),{},{components:t})):s.createElement(u,o({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=t[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}h.displayName="MDXCreateElement"},43060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=t(87462),a=(t(67294),t(3905));const r={},o="Avro support",i={unversionedId:"References/avro-support",id:"version-3.0.22/References/avro-support",title:"Avro support",description:"Introduction",source:"@site/versioned_docs/version-3.0.22/08-References/02-avro-support.md",sourceDirName:"08-References",slug:"/References/avro-support",permalink:"/docs/3.0.22/References/avro-support",draft:!1,tags:[],version:"3.0.22",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"esthesis Line Protocol (eLP)",permalink:"/docs/3.0.22/References/esthesis-line-protocol"},next:{title:"Contact & Support",permalink:"/docs/3.0.22/contact-support/"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Design",id:"design",level:2},{value:"Specification",id:"specification",level:2},{value:"esthesis Data Message",id:"esthesis-data-message",level:3},{value:"esthesis Command Request Message",id:"esthesis-command-request-message",level:3},{value:"esthesis Command Reply Message",id:"esthesis-command-reply-message",level:3},{value:"Helpers",id:"helpers",level:2}],m={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,s.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"avro-support"},"Avro support"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://avro.apache.org"},"Apache Avro")," is a widely used data serialization system developed by the Apache Software Foundation.\nIt provides a compact, fast, and schema-based format for data exchange between different components\nof distributed systems. Avro focuses on efficient data storage and transmission, making it suitable\nfor use cases where performance and interoperability are critical."),(0,a.kt)("p",null,"At its core, Avro uses a schema to define the structure of the data. The schema describes the fields,\ntheir types, and the relationships between them. Avro schemas are defined using JSON, which makes\nthem easy to read, write, and interpret by different programming languages."),(0,a.kt)("p",null,"Avro data is serialized in a binary format, which results in compact data representation and\nefficient storage. This binary format enables fast serialization and deserialization, making Avro\nsuitable for high-performance applications and systems with stringent latency requirements."),(0,a.kt)("h2",{id:"design"},"Design"),(0,a.kt)("p",null,"esthesis communicates with external sources using the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0.22/References/esthesis-line-protocol"},"esthesis Line Protocol")," (eLP). eLP is a simple protocol,\nhuman-readable, which can be manipulated very easily with rudimentary programming effort and resources.\nIt is therefore a convenient protocol for devices with limited resources."),(0,a.kt)("p",null,"However, being a text-based protocol, it is not the most efficient way to use when data has already\narrived at esthesis and needs to be further processed by the various Dataflow components of esthesis\nCore. For this reason, esthesis Core supports internally the ",(0,a.kt)("a",{parentName:"p",href:"https://avro.apache.org/"},"Avro"),"\ndata serialization."),(0,a.kt)("p",null,"Here is how it works:"),(0,a.kt)("mermaid",{value:'flowchart LR\n\tA[External source]\n\tB[esthesis device agent]\n\tD[Dataflow #1]\n\tE[Dataflow #2]\n\tR1[Dataflow receiver]\n\tR2[Dataflow receiver]\n\tK[Kafka]\n\tDT1[Data broker MQTT]\n\tDT2["Data broker (any)"]\n\tP[Data persistence]\n\n\tA -- eLP --\x3e DT2\n\tB -- eLP --\x3e DT1\n\tDT1 -- eLP --\x3e R1\n\tDT2 -- eLP --\x3e R2\n\tsubgraph esthesis Core\n\t\tR1 --Avro--\x3e K\n\t\tR2 --Avro--\x3e K\n\t\tK --Avro--\x3e D\n\t\tK --Avro--\x3e E\n\t\tD -.->|Avro| K\n\t\tE -.->|Avro| K\n\tend\n\tD -.-> P\n\tE -.-> P'}),(0,a.kt)("p",null,"As depicted above, external data sources send data to a data broker using eLP. The esthesis device agent\nis using MQTT, however other custom external data sources may choose to use any other protocol, provided\na dataflow is available to receive the data."),(0,a.kt)("p",null,"Once the data is received by the dataflow receiver, it is processed using eLP and then converted to Avro.\nThe converter Avro data is then sent to a Kafka topic, where it is available for further processing by\nother dataflow components."),(0,a.kt)("p",null,"In case a dataflow component needs to put a processed message back to Kafka for another dataflow\nto pick it up, it is also using Avro."),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("p",null,"esthesis uses three different Avro schemas as presented next."),(0,a.kt)("h3",{id:"esthesis-data-message"},"esthesis Data Message"),(0,a.kt)("p",null,"The Avro schema used to serialize data received from external sources. It is defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/esthesis-iot/esthesis-platform/blob/main/esthesis-core/esthesis-core-backend/avro/src/main/avro/esthesis-data-message.avsc"},"esthesis-data-message.avsc")," file."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"AVSC"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "record",\n  "name": "EsthesisDataMessage",\n  "namespace": "esthesis.avro",\n  "fields": [\n    {\n      "name": "id",\n      "type": "string",\n      "doc": "The unique identifier for this message"\n    },\n    {\n      "name": "correlationId",\n      "type": [\n        "null",\n        "string"\n      ],\n      "default": null,\n      "doc": "The id of the message that this message is a response to"\n    },\n    {\n      "name": "hardwareId",\n      "type": "string",\n      "doc": "The hardware id of the device that sent the message"\n    },\n    {\n      "name": "seenBy",\n      "type": "string",\n      "doc": "A text describing the component that originally constructed this message"\n    },\n    {\n      "name": "seenAt",\n      "type": [\n        "null",\n        "string"\n      ],\n      "default": null,\n      "doc": "A timestamp in ISO-8601 format, created by the first component that received this message"\n    },\n    {\n      "name": "type",\n      "type": {\n        "name": "MessageTypeEnum",\n        "type": "enum",\n        "symbols": [\n          // PING\n          "P",\n          // TELEMETRY\n          "T",\n          // METADATA\n          "M"\n        ],\n        "doc": "P = Ping, T = Telemetry, M = Metadata"\n      }\n    },\n    {\n      "name": "channel",\n      "type": "string",\n      "doc": "The channel that the message was received on."\n    },\n    {\n      "name": "payload",\n      "type": {\n        "type": "record",\n        "name": "PayloadData",\n        "fields": [\n          {\n            "name": "category",\n            "type": "string",\n            "doc": "The category of the values being submitted"\n          },\n          {\n            "name": "timestamp",\n            "type": [\n              "null",\n              "string"\n            ],\n            "default": null,\n            "doc": "A timestamp in ISO-8601 format pertaining to the values submitted"\n          },\n          {\n            "name": "values",\n            "type": {\n              "type": "array",\n              "items": {\n                "type": "record",\n                "name": "ValueData",\n                "fields": [\n                  {\n                    "name": "name",\n                    "type": "string",\n                    "doc": "The name of the key for this value"\n                  },\n                  {\n                    "name": "value",\n                    "type": "string",\n                    "doc": "The value for this key"\n                  },\n                  {\n                    "name": "valueType",\n                    "type": {\n                      "name": "ValueTypeEnum",\n                      "type": "enum",\n                      "symbols": [\n                        "STRING",\n                        "BOOLEAN",\n                        "BYTE",\n                        "SHORT",\n                        "INTEGER",\n                        "LONG",\n                        "BIG_INTEGER",\n                        "FLOAT",\n                        "DOUBLE",\n                        "BIG_DECIMAL",\n                        "UNKNOWN"\n                      ],\n                    "doc": "You can provide hints in the esthesis Line Protocol regarding the type of this value, otherwise a best-effort automatic detection will take place"\n                    }\n                  }\n                ]\n              }\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n'))),(0,a.kt)("h3",{id:"esthesis-command-request-message"},"esthesis Command Request Message"),(0,a.kt)("p",null,"The Avro schema used to serialize command request messages. It is defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/esthesis-iot/esthesis-platform/blob/main/esthesis-core/esthesis-core-backend/avro/src/main/avro/esthesis-command-request-message.avsc"},"esthesis-command-request-message.avsc")," file."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"AVSC"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "record",\n  "name": "EsthesisCommandRequestMessage",\n  "namespace": "esthesis.avro",\n  "fields": [\n    {\n      "name": "id",\n      "type": "string",\n      "doc": "The unique identifier for this message"\n    },\n    {\n      "name": "hardwareId",\n      "type": "string",\n      "doc": "The hardware id of the device that sent the message"\n    },\n    {\n      "name": "commandType",\n      "type": {\n        "name": "CommandType",\n        "type": "enum",\n        "symbols": [\n          // Execute command\n          "e",\n          // Firmware update\n          "f",\n          // Reboot\n          "r",\n          // Shutdown\n          "s",\n          // Ping\n          "p",\n          // Health report\n          "h"\n        ],\n        "doc": "The type of the command to execute, \'e\' for execute, \'f\' for firmware update, \'r\' for reboot, \'s\' for shutdown, \'p\' for ping, \'h\' for health report."\n      }\n    },\n    {\n      "name": "executionType",\n      "type": {\n        "name": "ExecutionType",\n        "type": "enum",\n        "symbols": [\n          // Asynchronous execution\n          "a",\n          // Synchronous execution\n          "s"\n        ],\n        "doc": "The execution type of the command to be executed, \'a\' for asynchronous, \'s\' for synchronous."\n      }\n    },\n    {\n      "name": "command",\n      "type": "string",\n      "doc": "The command to execute"\n    },\n    {\n      "name": "arguments",\n      "type": [\n        "null",\n        "string"\n      ],\n      "default": null,\n      "doc": "The command arguments to pass to the command to be executed"\n    },\n    {\n      "name": "createdAt",\n      "type": "string",\n      "doc": "A timestamp in ISO-8601 format"\n    }\n  ]\n}\n\n'))),(0,a.kt)("h3",{id:"esthesis-command-reply-message"},"esthesis Command Reply Message"),(0,a.kt)("p",null,"The Avro schema used to serialize command reply messages. It is defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/esthesis-iot/esthesis-platform/blob/main/esthesis-core/esthesis-core-backend/avro/src/main/avro/esthesis-command-reply-message.avsc"},"esthesis-command-reply-message.avsc")," file."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"AVSC"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "record",\n  "name": "EsthesisCommandReplyMessage",\n  "namespace": "esthesis.avro",\n  "fields": [\n    {\n      "name": "id",\n      "type": "string",\n      "doc": "The unique identifier for this message"\n    },\n    {\n      "name": "correlationId",\n      "type": [\n        "null",\n        "string"\n      ],\n      "default": null,\n      "doc": "The id of the message that this message is a response to"\n    },\n    {\n      "name": "hardwareId",\n      "type": "string",\n      "doc": "The hardware id of the device that sent the message"\n    },\n    {\n      "name": "seenBy",\n      "type": "string",\n      "doc": "A text describing the component that originally constructed this message"\n    },\n    {\n      "name": "seenAt",\n      "type": [\n        "null",\n        "string"\n      ],\n      "default": null,\n      "doc": "A timestamp in ISO-8601 format, created by the first component that received this message"\n    },\n    {\n      "name": "type",\n      "type": {\n        "name": "ReplyType",\n        "type": "enum",\n        "symbols": [\n          // Success\n          "s",\n          // Failure\n          "f"\n        ],\n        "doc": "s = Success reply, f = Failure reply"\n      }\n    },\n    {\n      "name": "channel",\n      "type": [\n        "null",\n        "string"\n      ],\n      "default": null,\n      "doc": "The channel that the message was received on."\n    },\n    {\n      "name": "payload",\n      "type": "string",\n      "doc": "The payload of the message"\n    }\n  ]\n}\n'))),(0,a.kt)("h2",{id:"helpers"},"Helpers"),(0,a.kt)("p",null,"There is an eLP to Avro helper that we are using in our Dataflows, available in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/esthesis-iot/esthesis-platform/blob/main/esthesis-core/esthesis-core-backend/avro/src/main/java/esthesis/avro/util/AvroUtils.java"},"AvroUtils"),".\nIf you are creating a new Dataflow, you can use this helper to convert eLP to Avro to save you some time."))}p.isMDXComponent=!0}}]);