(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(216)),i={id:"internal_contract",title:"Internal Contract",custom_edit_url:"https://github.com/Conflux-Chain/conflux-rust/edit/master/internal_contract/README.md",keywords:["conflux","contract"]},c={id:"conflux-rust/internal_contract/internal_contract",title:"Internal Contract",description:"## AdminControl",source:"@site/docs/conflux-rust/internal_contract/README.md",permalink:"/docs/conflux-rust/internal_contract/internal_contract",editUrl:"https://github.com/Conflux-Chain/conflux-rust/edit/master/internal_contract/README.md",lastUpdatedBy:"ConfluxBot",lastUpdatedAt:1588089048,sidebar:"docs",previous:{title:"Run An Independent Chain",permalink:"/docs/conflux-doc/docs/independent_chain"},next:{title:"JSON RPC",permalink:"/docs/conflux-doc/docs/json_rpc"}},l=[{value:"AdminControl",id:"admincontrol",children:[]},{value:"SponsorWhitelistControl",id:"sponsorwhitelistcontrol",children:[]},{value:"Staking",id:"staking",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"admincontrol"},"AdminControl"),Object(o.b)("p",null,"The contract address is ",Object(o.b)("inlineCode",{parentName:"p"},"0x8060de9e1568e69811c4a398f92c3d10949dc891"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"set_admin(address contract, address admin)"),": Set the administrator of contract ",Object(o.b)("inlineCode",{parentName:"p"},"contract")," to ",Object(o.b)("inlineCode",{parentName:"p"},"admin"),". The caller should be the administrator of ",Object(o.b)("inlineCode",{parentName:"p"},"contract")," and it should be a normal account. Caller should make sure that ",Object(o.b)("inlineCode",{parentName:"p"},"contract")," should be an address of a contract and ",Object(o.b)("inlineCode",{parentName:"p"},"admin")," should be a normal account address. Otherwise, the call will fail.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"destroy(address contract)"),": Perform a suicide of the contract ",Object(o.b)("inlineCode",{parentName:"p"},"contract"),". The caller should be the administrator of ",Object(o.b)("inlineCode",{parentName:"p"},"contract")," and it should be a normal account. If the collateral for storage of the contract is not zero, the suicide will fail. Otherwise, the ",Object(o.b)("inlineCode",{parentName:"p"},"balance")," of ",Object(o.b)("inlineCode",{parentName:"p"},"contract")," will be refunded to the current administrator, the ",Object(o.b)("inlineCode",{parentName:"p"},"sponsor_balance_for_gas")," will be refunded to ",Object(o.b)("inlineCode",{parentName:"p"},"sponsor_for_gas"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"sponsor_balance_for_collateral")," will be refunded to ",Object(o.b)("inlineCode",{parentName:"p"},"sponsor_for_collateral"),"."))),Object(o.b)("h2",{id:"sponsorwhitelistcontrol"},"SponsorWhitelistControl"),Object(o.b)("p",null,"The contract address is ",Object(o.b)("inlineCode",{parentName:"p"},"0x8ad036480160591706c831f0da19d1a424e39469"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"set_sponsor_for_gas(address contract, uint upper_bound)"),": If someone wants to sponsor the gas fee for a contract with address ",Object(o.b)("inlineCode",{parentName:"li"},"contract"),", he/she (it can be a contract account) should call this function and in the meantime transfer some tokens to the address ",Object(o.b)("inlineCode",{parentName:"li"},"0x8ad036480160591706c831f0da19d1a424e39469"),". The parameter ",Object(o.b)("inlineCode",{parentName:"li"},"upper_bound")," is the upper bound of the gas fee the sponsor will pay for a single transaction. The number of transfered tokens should be at least 1000 times of the ",Object(o.b)("inlineCode",{parentName:"li"},"upper_bound"),". The sponsor could be replaced if the new sponsor transfers more tokens and sets a larger upper bound. The current sponsor can also call the function to transfer more tokens to sponsor the contract. The ",Object(o.b)("inlineCode",{parentName:"li"},"upper_bound")," can be changed to a smaller one if current sponsor balance is less than the ",Object(o.b)("inlineCode",{parentName:"li"},"upper_bound"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"set_sponsor_for_collateral(address contract_addr)"),": If someone wants to sponsor the CFS (collateral for storage) for a contract with address ",Object(o.b)("inlineCode",{parentName:"li"},"contract"),", he/she (it can be a contract account) should call this function and in the meantime transfer some tokens to the address ",Object(o.b)("inlineCode",{parentName:"li"},"0x8ad036480160591706c831f0da19d1a424e39469"),". The sponsor could be replaced if the new sponsor transfers more tokens. The current sponsor can also call the function to transfer more tokens to sponsor the contract."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"add_privilege(address[] memory)"),": A contract can call this function to add some normal account address to the whitelist. It means that if the ",Object(o.b)("inlineCode",{parentName:"li"},"sponsor_for_gas")," is set, the contract will pay the gas fee for the accounts in the whitelist, and if the ",Object(o.b)("inlineCode",{parentName:"li"},"sponsor_for_collateral")," is set, the contract will pay the CFS (collateral for storage) for the accounts in the whitelist. A special address ",Object(o.b)("inlineCode",{parentName:"li"},"0x0000000000000000000000000000000000000000")," could be used if the contract wants to add all account to the whitelist."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"remove_privilege(address[] memory)"),": A contract can call this function to remove some normal account address from the whitelist.")),Object(o.b)("h2",{id:"staking"},"Staking"),Object(o.b)("p",null,"The contract address is ",Object(o.b)("inlineCode",{parentName:"p"},"0x843c409373ffd5c0bec1dddb7bec830856757b65"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"deposit(uint amount)"),": The caller can call this function to deposit some tokens to Conflux Internal Staking Contract. The current annual interest rate is 4%."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"withdraw(uint amount)"),": The caller can call this function to withdraw some tokens to Conflux Internal Staking Contract. It will trigger a interest settlement. The staking capital and staking interest will be transferred to the user's balance in time. All the withdrawal applications will be processed on a first-come-first-served basis according to the sequence of staking orders."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lock(uint amount, uint duration)"),": This function is related with Voting Rights in Conflux. Staking users can choose the voting amount and locking maturity by locking a certain amount of CFX in a certain maturity from staking.")))}d.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return n?r.a.createElement(m,c({ref:t},s,{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);