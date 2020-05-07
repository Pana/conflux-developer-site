(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(9),r=(n(0),n(217)),c={id:"send_transaction",title:"My First Transaction",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/send_transaction.md",keywords:["conflux","transaction","sdk"]},i={id:"conflux-doc/docs/send_transaction",title:"My First Transaction",description:"This document will guide you to compose and send your first transaction into the Conflux network, including the introduction of technical specs of Conflux's transaction, and the basic techniques to track the status of sent transactions in Conflux network and error handling.",source:"@site/docs/conflux-doc/docs/send_transaction.md",permalink:"/docs/conflux-doc/docs/send_transaction",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/send_transaction.md",lastUpdatedBy:"ConfluxBot",lastUpdatedAt:1588830055,sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/conflux-doc/docs/get_started"},next:{title:"Run An Independent Chain",permalink:"/docs/conflux-doc/docs/independent_chain"}},s=[{value:"Compose and send my first transaction",id:"compose-and-send-my-first-transaction",children:[{value:"Create an account with Conflux Portal",id:"create-an-account-with-conflux-portal",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Send transaction by JavaScript program",id:"send-transaction-by-javascript-program",children:[]}]},{value:"Track my transaction",id:"track-my-transaction",children:[{value:"1. rejected by RPC provider immediately",id:"1-rejected-by-rpc-provider-immediately",children:[]},{value:"2. got stucked in the transaction pool",id:"2-got-stucked-in-the-transaction-pool",children:[]},{value:"3. mined but skipped",id:"3-mined-but-skipped",children:[]},{value:"4. mined and executed with some error outcome",id:"4-mined-and-executed-with-some-error-outcome",children:[]},{value:"5. mined and executed with no error outcome",id:"5-mined-and-executed-with-no-error-outcome",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This document will guide you to compose and send your first transaction into the Conflux network, including the introduction of technical specs of Conflux's transaction, and the basic techniques to track the status of sent transactions in Conflux network and error handling."),Object(r.b)("p",null,"For common users, it is recommended to use a Conflux wallet like ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-portal"}),"Conflux Portal"),", which is easy, safe and user-friendly."),Object(r.b)("p",null,"For developers that want to compose and send transaction in your own program. Conflux provides you several SDKs in different languages:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/js-conflux-sdk"}),"JavaScript: js-conflux-sdk")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/java-conflux-sdk"}),"Java: java-conflux-sdk")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/go-conflux-sdk"}),"Go: go-conflux-sdk"))),Object(r.b)("p",null,"The following document will use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/js-conflux-sdk"}),"js-conflux-sdk")," as an example."),Object(r.b)("h2",{id:"compose-and-send-my-first-transaction"},"Compose and send my first transaction"),Object(r.b)("h3",{id:"create-an-account-with-conflux-portal"},"Create an account with Conflux Portal"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-portal"}),"Conflux Portal"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Generate a new account.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Get test-net tokens from the faucet.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Export and copy your private key to somewhere, we'll use it later."))),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"npm install js-conflux-sdk")),Object(r.b)("h3",{id:"send-transaction-by-javascript-program"},"Send transaction by JavaScript program"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"require js-conflux-sdk and set a Conflux provider. For the Conflux test-net, there is a node provided at ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://testnet-jsonrpc.conflux-chain.org:12537"}),"http://testnet-jsonrpc.conflux-chain.org:12537"),". It can also be changed to any other Conflux nodes, even the one set on your own.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { Conflux, util } = require('js-conflux-sdk');\n\nconst cfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultGasPrice: 100, // The default gas price of your following transactions\n  defaultGas: 1000000, // The default gas of your following transactions\n  logger: console,\n});\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"paste your private key into the program")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const PRIVATE_KEY = 'Your Private Key';\n// const PRIVATE_KEY = '0x5f15f9e52fc5ec6f77115a9f306c120a7e80d83115212d33a843bb6b7989c261';\nconst account = cfx.Account(PRIVATE_KEY); // create account instance\nconst receiver = '0xa70ddf9b9750c575db453eea6a041f4c8536785a'\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Compose your transaction, here are the fields could be filled with:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"    * **nonce**: optional, the nonce of a transaction to keep the order of your sending transactions, starting with some random large number and increase one by one. If missing, the result of cfx_getNextNonce will be automatically filled in and it works for general scenarios. Some cases, like sending a lot of transactions in a short period. It's recommended to maintain the nonce on your own.\n    * **gasPrice**: optional, the price in Drip that you would like to pay for each gas consumed. If missing, the result of cfx_gasPrice will be automatically filled in, which is the median of recent transactions.\n    * **gas**: optional, the max gas you would like to use in the transaction. After the end of transaction processing, the unused gas will be refunded if used_gas >= gas * 0.75. If missing, the result of cfx_estimateGasAndCollateral will be automatically filled in and it works for general scenarios.\n    * **to**: the receiver of the transaction, could be a personal account(start with 1) or contract(start with 8). Leave a null here to deploy a contract.\n    * **value**: the value (in Drip) to be transferred.\n    * **storageLimit**: optional, he max storage (in Byte) you would like to collateralize in the transaction. If missing, the result of cfx_estimateGasAndCollateral will be automatically filled in and it works for general senarios.transactions.\n    * **epochHeight**: optional, a transaction is can be verified only in epochs in the range [epochHeight - 10000, epochHeight + 10000], so it's  a timeout mechanism. If missing, the result of cfx_epochNumber will be automatically filled in and it works for general scenarios.\n    * **data**: optional, it's either an attached message of a transaction or a function signature of a contract call. If missing, a null will be filled into it.\n    * **chainId**: optional, it used for dealing with a hard fork or preventing a transaction replay attack. If missing, 0 will be filled into it.\n    * **from**: The sender account(with private key) to sign the transaction.\n")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"let txParams = {\n  from: account, // from account instance and will by sign by account.privateKey\n  // nonce \n  // gasPrice\n  // gas\n  to: receiver, // accept address string or account instance\n  value: util.unit.fromCFXToDrip(0.125), // use unit to transfer from 0.125 CFX to Drip\n  // storageLimit\n  // epochHeight\n  // data\n};\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Send it away by ",Object(r.b)("inlineCode",{parentName:"li"},"cfx.sendTransaction")," and get the returned transaction hash, then you can view the transaction details by searching the hash on ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://confluxscan.io/"}),"Conflux Scan"),". ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"async function main() {\n  const txHash = await cfx.sendTransaction(txParams);\n  console.log(txHash);\n}\n\nmain().catch(e => console.error(e));\n")),Object(r.b)("h2",{id:"track-my-transaction"},"Track my transaction"),Object(r.b)("p",null,"After sending, the transaction could be in several different states:"),Object(r.b)("h3",{id:"1-rejected-by-rpc-provider-immediately"},"1. rejected by RPC provider immediately"),Object(r.b)("p",null,"After the provider got the cfx_sendRawTransaction RPC call, it will try to do the basic verification and insert it into the transaction pool. If there an obvious error of the transaction, e.t.c, RLP decoding error, signature verification error, it will be rejected immediately. Otherwise, it will be inserted into the transaction pool and start to wait to be mined, and the RPC will return a transaction hash."),Object(r.b)("h3",{id:"2-got-stucked-in-the-transaction-pool"},"2. got stucked in the transaction pool"),Object(r.b)("p",null,"However, the transaction hash you got doesn't mean it's successfully executed. Conflux transaction will store as much verified transactions in the pool as possible, even the transactions whose nonce doesn' match expected one or the balance is not enough to pay the ",Object(r.b)("inlineCode",{parentName:"p"},"gas * gasPrice + value"),". "),Object(r.b)("p",null,"So if you wait for 1 minute and still cannot find the transaction in ConfluxScan after sending it, it very likely got stuck in the transaction pool. "),Object(r.b)("p",null,"Use cfx_getTransactionByHash, cfx_getBalance and cfx_getNextNonce to check if your transaction is ready to be packed and mined, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -X POST --data \'{"jsonrpc":"2.0","method":"cfx_getBalance","params":["0xfbe45681ac6c53d5a40475f7526bac1fe7590fb8"],"id":1}\' -H "Content-Type: application/json" http://testnet-jsonrpc.conflux-chain.org:12537\n')),Object(r.b)("p",null,"And compare the result with value + gas * gasPrice."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -X POST --data \'{"jsonrpc":"2.0","method":"cfx_getNextNonce","params":["0xfbe45681ac6c53d5a40475f7526bac1fe7590fb8"],"id":1}\' -H "Content-Type: application/json" http://testnet-jsonrpc.conflux-chain.org:12537\n\n')),Object(r.b)("p",null,"And compare the result with nonce you filled in."),Object(r.b)("p",null,"You can always get the transaction details by cfx_getTransactionByHash:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -X POST --data \'{"jsonrpc":"2.0","method":"cfx_getTransactionByHash","params":["0x53fe995edeec7d241791ff32635244e94ecfd722c9fe90f34ddf59082d814514"],"id":1}\' -H "Content-Type: application/json" http://testnet-jsonrpc.conflux-chain.org:12537\n')),Object(r.b)("p",null,"In this situation, you may want to send a new transaction after fixing the nonce or balance problem. Note that, replacing a transaction in the pool with the same nonce, a higher gasPrice is necessary."),Object(r.b)("h3",{id:"3-mined-but-skipped"},"3. mined but skipped"),Object(r.b)("p",null,"If you can view the transaction on ConfluxScan but its status always shows \"skip\". Which means it didn't pass the basic verification (etc, nonce doesn't match, balance can't cover the basic fee) in execution engine and got skipped."),Object(r.b)("p",null,"In this situation, you may want to send a new transaction after fixing the nonce or balance problem. Note that, replacing a transaction in the pool with the same nonce, a higher gasPrice is necessary."),Object(r.b)("h3",{id:"4-mined-and-executed-with-some-error-outcome"},"4. mined and executed with some error outcome"),Object(r.b)("p",null,"In this case, you'll see an error message on ConfluxScan. This could be in several causes: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"EVM error: like assert, require"),Object(r.b)("li",{parentName:"ul"},"balance is enough to pay the basic fee, but not for the whole transaction fee"),Object(r.b)("li",{parentName:"ul"},"storageLimit reached")),Object(r.b)("p",null,"It's a good idea to double-check your contract in Remix IDE and check the storageLimit and balance issue by cfx_estimateGasAndCollateral RPC."),Object(r.b)("h3",{id:"5-mined-and-executed-with-no-error-outcome"},"5. mined and executed with no error outcome"),Object(r.b)("p",null,"Congrats! Your first transaction finally got there."))}u.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||r;return n?o.a.createElement(f,i({ref:t},l,{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);