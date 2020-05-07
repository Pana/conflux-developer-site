(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(217)),i={id:"signing_data_with_portal",title:"Signing Data with ConfluxPortal",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/API_Reference/Signing_Data.md"},c={id:"conflux-portal/docs/en/portal/API_Reference/signing_data_with_portal",title:"Signing Data with ConfluxPortal",description:"## History of the signing methods",source:"@site/docs/conflux-portal/docs/en/portal/API_Reference/Signing_Data.md",permalink:"/docs/conflux-portal/docs/en/portal/API_Reference/signing_data_with_portal",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/API_Reference/Signing_Data.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1587706878,sidebar:"docs",previous:{title:"Portal Provider API",permalink:"/docs/conflux-portal/docs/en/portal/API_Reference/provider_api"}},l=[{value:"History of the signing methods",id:"history-of-the-signing-methods",children:[]},{value:"What changed in ConfluxPortal",id:"what-changed-in-confluxportal",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"history-of-the-signing-methods"},"History of the signing methods"),Object(o.b)("p",null,"Portal is forked from MetaMask and there are multiple signing methods in\nMetaMask. You can read the history of all the signing methods in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.metamask.io/guide/signing-data.html#a-brief-history"}),"MetaMask\ndocumentation"),". "),Object(o.b)("h2",{id:"what-changed-in-confluxportal"},"What changed in ConfluxPortal"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We changed ",Object(o.b)("inlineCode",{parentName:"li"},"cfx_sign")," to use the\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ethereum/go-ethereum/pull/2940"}),Object(o.b)("inlineCode",{parentName:"a"},"personal_sign"))," logic. We\nrecommend using ",Object(o.b)("inlineCode",{parentName:"li"},"cfx_sign")," method instead of ",Object(o.b)("inlineCode",{parentName:"li"},"personal_sign"),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"signTypedData"),", ",Object(o.b)("inlineCode",{parentName:"li"},"signTypedData_v1"),", ",Object(o.b)("inlineCode",{parentName:"li"},"signTypedData_v3"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"signTypedData_v4")," still works the same way as\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.metamask.io/guide/signing-data.html#sign-typed-data-v1"}),"MetaMask"),".\nBut we are planning to change them before our mainet launch.")))}p.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);