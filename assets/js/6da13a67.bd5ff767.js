"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[48966],{62533:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(74848),t=r(28453);const a={},s=void 0,c={id:"JavaScript/\u5982\u4f55\u5b9e\u73b0\u5c5e\u6027\u79c1\u6709\u5316",title:"\u5982\u4f55\u5b9e\u73b0\u5c5e\u6027\u79c1\u6709\u5316",description:"",source:"@site/docs/JavaScript/\u5982\u4f55\u5b9e\u73b0\u5c5e\u6027\u79c1\u6709\u5316.md",sourceDirName:"JavaScript",slug:"/JavaScript/\u5982\u4f55\u5b9e\u73b0\u5c5e\u6027\u79c1\u6709\u5316",permalink:"/docs/JavaScript/\u5982\u4f55\u5b9e\u73b0\u5c5e\u6027\u79c1\u6709\u5316",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"javascriptSidebar",previous:{title:"\u5806\u548c\u6808",permalink:"/docs/JavaScript/\u5806\u548c\u6808"},next:{title:"\u5b58\u50a8",permalink:"/docs/JavaScript/\u5b58\u50a8/"}},i={},l=[];function m(n){const e={code:"code",pre:"pre",...(0,t.R)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"// let obj = {\r\n//   _name: 'coderEasy',\r\n//   getName () {\r\n//     return this._name;\r\n//   }\r\n// };\r\n// console.log(obj.getName()); // coderEasy\r\n\r\n// \u4f7f\u7528Symbol(\u4e0d\u662f\u5f88\u597d)\r\nlet nameSymbol = Symbol('name');\r\nlet obj = {\r\n  [nameSymbol]: 'coderEasy',\r\n  getName() {\r\n    return this[nameSymbol];\r\n  }\r\n};\r\n// \u8bd5\u56fe\u76f4\u63a5\u8bbf\u95eenameSymbol\u5c5e\u6027\u4f1a\u5931\u6548\uff0c\u9664\u975e\u4f60\u5177\u6709Symbol\u5f15\u7528\r\n// \u8bbf\u95eeSymbol\u5c5e\u6027\r\nconsole.log(obj[nameSymbol]); // coderEasy\r\nconsole.log(obj['name']); // undefined\r\n// \u83b7\u53d6\u5bf9\u8c61\u4e0a\u6240\u6709Symbol\u7c7b\u578b\u7684\u5c5e\u6027\r\nconsole.log(Object.getOwnPropertySymbols(obj));\r\n\r\n// \u4f7f\u7528for in \u6216\u8005Object.keys\u90fd\u904d\u5386\u4e0d\u5230Symbol\u5c5e\u6027\r\nfor (let key in obj) {\r\n  console.log(key);\r\n}\r\nconsole.log(Object.keys(obj));\r\n\r\n// \u4f7f\u7528#name (es12)\r\nclass MyClass {\r\n  #name = 'coderEasy';\r\n  getName() {\r\n    return this.#name;\r\n  }\r\n}\r\nconst instance = new MyClass();\r\nconsole.log(instance.getName()); // coderEasy\r\n\r\n// console.log(instance.#name); // \u62a5\u9519 Property '#name' is not accessible outside class 'MyClass' because it has a private identifier.\n"})})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>c});var o=r(96540);const t={},a=o.createContext(t);function s(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);