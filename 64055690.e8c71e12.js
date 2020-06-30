(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(9),a=(n(0),n(197)),c={},i={id:"conflux-rust/README",title:"README",description:"Conflux-Rust",source:"@site/docs/conflux-rust/README.md",permalink:"/docs/conflux-rust/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/README.md",lastUpdatedAt:1593488153},u=[{value:"Contribution",id:"contribution",children:[]},{value:"Resources",id:"resources",children:[]},{value:"License",id:"license",children:[]}],l={rightToc:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"conflux-rust"},"Conflux-Rust"),Object(a.b)("p",null,"Conflux-rust is a rust-based implementation of Conflux protocol, it is fast and reliable. Please follow the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/"}),"Conflux Documentation")," to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/install/"}),"build")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/get_started/"}),"run")," Conflux."),Object(a.b)("p",null,"This version depends on rustc 1.42.0."),Object(a.b)("h2",{id:"contribution"},"Contribution"),Object(a.b)("p",null,"Thank you for considering helping out with our source code. We appreciate any contributions, even the smallest fixes."),Object(a.b)("p",null,"Here are some guidelines before you start:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Please fork the project to contribute your pull requests."),Object(a.b)("li",{parentName:"ul"},"If you wish to submit complex changes, please fire an ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/conflux-rust/issues"}),"issue")," to communicate with the core devs first. "),Object(a.b)("li",{parentName:"ul"},"Pull requests need to be based on and opened against the ",Object(a.b)("inlineCode",{parentName:"li"},"master")," branch."),Object(a.b)("li",{parentName:"ul"},"Code must be formatted using ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/conflux-rust/blob/master/cargo_fmt.sh"}),"cargo_fmt.sh"),"."),Object(a.b)("li",{parentName:"ul"},"We use reviewable.io as our code review tool for any pull request.")),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.conflux-chain.org/"}),"Conflux Website")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://arxiv.org/abs/1805.03870"}),"Conflux Paper")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://medium.com/@ConfluxNetwork"}),"Medium"))),Object(a.b)("h2",{id:"license"},"License"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-rust/blob/master/LICENSE"}),"GNU General Public License v3.0")))}b.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=b(n),f=r,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||a;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);