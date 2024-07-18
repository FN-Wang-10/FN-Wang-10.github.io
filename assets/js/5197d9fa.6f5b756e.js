"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[2631],{13795:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>t,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=n(74848),c=n(28453);const o={},t=void 0,l={id:"Es6/ES6\u4e2d\u7684Proxy",title:"ES6\u4e2d\u7684Proxy",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/docs/Es6/ES6\u4e2d\u7684Proxy.md",sourceDirName:"Es6",slug:"/Es6/ES6\u4e2d\u7684Proxy",permalink:"/docs/Es6/ES6\u4e2d\u7684Proxy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"es6Sidebar",previous:{title:"ES6\u4e2d\u7684Promise",permalink:"/docs/Es6/ES6\u4e2d\u7684Promise"},next:{title:"Es6",permalink:"/docs/Es6/"}},i={},d=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u7528\u6cd5",id:"\u4e8c\u7528\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"handler \u89e3\u6790",id:"handler-\u89e3\u6790",level:3},{value:"Reflect",id:"reflect",level:3},{value:"get()",id:"get",level:3},{value:"set()",id:"set",level:3},{value:"deleteProperty()",id:"deleteproperty",level:3},{value:"\u53d6\u6d88\u4ee3\u7406",id:"\u53d6\u6d88\u4ee3\u7406",level:3},{value:"\u4e09\u3001\u4f7f\u7528\u573a\u666f",id:"\u4e09\u4f7f\u7528\u573a\u666f",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u4e00\u4ecb\u7ecd",children:"\u4e00\u3001\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u5b9a\u4e49\uff1a"})," \u7528\u4e8e\u5b9a\u4e49\u57fa\u672c\u64cd\u4f5c\u7684\u81ea\u5b9a\u4e49\u884c\u4e3a"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u672c\u8d28\uff1a"})," \u4fee\u6539\u7684\u662f\u7a0b\u5e8f\u9ed8\u8ba4\u5f62\u4e3a\uff0c\u5c31\u5f62\u540c\u4e8e\u5728\u7f16\u7a0b\u8bed\u8a00\u5c42\u9762\u4e0a\u505a\u4fee\u6539\uff0c\u5c5e\u4e8e\u5143\u7f16\u7a0b",(0,s.jsx)(r.code,{children:"(meta programming)"})]}),"\n",(0,s.jsx)(r.p,{children:"\u5143\u7f16\u7a0b\uff08Metaprogramming\uff0c\u53c8\u8bd1\u8d85\u7f16\u7a0b\uff0c\u662f\u6307\u67d0\u7c7b\u8ba1\u7b97\u673a\u7a0b\u5e8f\u7684\u7f16\u5199\uff0c\u8fd9\u7c7b\u8ba1\u7b97\u673a\u7a0b\u5e8f\u7f16\u5199\u6216\u8005\u64cd\u7eb5\u5176\u5b83\u7a0b\u5e8f\uff08\u6216\u8005\u81ea\u8eab\uff09\u4f5c\u4e3a\u5b83\u4eec\u7684\u6570\u636e\uff0c\u6216\u8005\u5728\u8fd0\u884c\u65f6\u5b8c\u6210\u90e8\u5206\u672c\u5e94\u5728\u7f16\u8bd1\u65f6\u5b8c\u6210\u7684\u5de5\u4f5c"}),"\n",(0,s.jsx)(r.p,{children:"\u4e00\u6bb5\u4ee3\u7801\u6765\u7406\u89e3"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"#!/bin/bash\r\n# metaprogram\r\necho '#!/bin/bash' >program\r\nfor ((I=1; I<=1024; I++)) do\r\n    echo \"echo $I\" >>program\r\ndone\r\nchmod +x program\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u8fd9\u6bb5\u7a0b\u5e8f\u6bcf\u6267\u884c\u4e00\u6b21\u80fd\u5e2e\u6211\u4eec\u751f\u6210\u4e00\u4e2a\u540d\u4e3a",(0,s.jsx)(r.code,{children:"program"}),"\u7684\u6587\u4ef6\uff0c\u6587\u4ef6\u5185\u5bb9\u4e3a 1024 \u884c",(0,s.jsx)(r.code,{children:"echo"}),"\uff0c\u5982\u679c\u6211\u4eec\u624b\u52a8\u6765\u5199 1024 \u884c\u4ee3\u7801\uff0c\u6548\u7387\u663e\u7136\u4f4e\u6548"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u5143\u7f16\u7a0b\u4f18\u70b9\uff1a\u4e0e\u624b\u5de5\u7f16\u5199\u5168\u90e8\u4ee3\u7801\u76f8\u6bd4\uff0c\u7a0b\u5e8f\u5458\u53ef\u4ee5\u83b7\u5f97\u66f4\u9ad8\u7684\u5de5\u4f5c\u6548\u7387\uff0c\u6216\u8005\u7ed9\u4e0e\u7a0b\u5e8f\u66f4\u5927\u7684\u7075\u6d3b\u5ea6\u53bb\u5904\u7406\u65b0\u7684\u60c5\u5f62\u800c\u65e0\u9700\u91cd\u65b0\u7f16\u8bd1"}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Proxy"})," \u4ea6\u662f\u5982\u6b64\uff0c\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u7684\u4ee3\u7406\uff0c\u4ece\u800c\u5b9e\u73b0\u57fa\u672c\u64cd\u4f5c\u7684\u62e6\u622a\u548c\u81ea\u5b9a\u4e49\uff08\u5982\u5c5e\u6027\u67e5\u627e\u3001\u8d4b\u503c\u3001\u679a\u4e3e\u3001\u51fd\u6570\u8c03\u7528\u7b49\uff09"]}),"\n",(0,s.jsx)(r.h2,{id:"\u4e8c\u7528\u6cd5",children:"\u4e8c\u3001\u7528\u6cd5"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Proxy"}),"\u4e3a \u6784\u9020\u51fd\u6570\uff0c\u7528\u6765\u751f\u6210 ",(0,s.jsx)(r.code,{children:"Proxy "}),"\u5b9e\u4f8b"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"var proxy = new Proxy(target, handler);\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"target"}),"\u8868\u793a\u6240\u8981\u62e6\u622a\u7684\u76ee\u6807\u5bf9\u8c61\uff08\u4efb\u4f55\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u5305\u62ec\u539f\u751f\u6570\u7ec4\uff0c\u51fd\u6570\uff0c\u751a\u81f3\u53e6\u4e00\u4e2a\u4ee3\u7406\uff09\uff09"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"handler"}),"\u901a\u5e38\u4ee5\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u7684\u5bf9\u8c61\uff0c\u5404\u5c5e\u6027\u4e2d\u7684\u51fd\u6570\u5206\u522b\u5b9a\u4e49\u4e86\u5728\u6267\u884c\u5404\u79cd\u64cd\u4f5c\u65f6\u4ee3\u7406 ",(0,s.jsx)(r.code,{children:"p"})," \u7684\u884c\u4e3a"]}),"\n",(0,s.jsx)(r.h3,{id:"handler-\u89e3\u6790",children:"handler \u89e3\u6790"}),"\n",(0,s.jsxs)(r.p,{children:["\u5173\u4e8e",(0,s.jsx)(r.code,{children:"handler"}),"\u62e6\u622a\u5c5e\u6027\uff0c\u6709\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"get(target,propKey,receiver)\uff1a\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684\u8bfb\u53d6"}),"\n",(0,s.jsx)(r.li,{children:"set(target,propKey,value,receiver)\uff1a\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684\u8bbe\u7f6e"}),"\n",(0,s.jsxs)(r.li,{children:["has(target,propKey)\uff1a\u62e6\u622a",(0,s.jsx)(r.code,{children:"propKey in proxy"}),"\u7684\u64cd\u4f5c\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c"]}),"\n",(0,s.jsxs)(r.li,{children:["deleteProperty(target,propKey)\uff1a\u62e6\u622a",(0,s.jsx)(r.code,{children:"delete proxy[propKey]"}),"\u7684\u64cd\u4f5c\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c"]}),"\n",(0,s.jsxs)(r.li,{children:["ownKeys(target)\uff1a\u62e6\u622a",(0,s.jsx)(r.code,{children:"Object.keys(proxy)"}),"\u3001",(0,s.jsx)(r.code,{children:"for...in"}),"\u7b49\u5faa\u73af\uff0c\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4"]}),"\n",(0,s.jsxs)(r.li,{children:["getOwnPropertyDescriptor(target, propKey)\uff1a\u62e6\u622a",(0,s.jsx)(r.code,{children:"Object.getOwnPropertyDescriptor(proxy, propKey)"}),"\uff0c\u8fd4\u56de\u5c5e\u6027\u7684\u63cf\u8ff0\u5bf9\u8c61"]}),"\n",(0,s.jsxs)(r.li,{children:["defineProperty(target, propKey, propDesc)\uff1a\u62e6\u622a",(0,s.jsx)(r.code,{children:"Object.defineProperty(proxy, propKey, propDesc\uff09"}),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c"]}),"\n",(0,s.jsxs)(r.li,{children:["preventExtensions(target)\uff1a\u62e6\u622a",(0,s.jsx)(r.code,{children:"Object.preventExtensions(proxy)"}),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c"]}),"\n",(0,s.jsxs)(r.li,{children:["getPrototypeOf(target)\uff1a\u62e6\u622a",(0,s.jsx)(r.code,{children:"Object.getPrototypeOf(proxy)"}),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61"]}),"\n",(0,s.jsxs)(r.li,{children:["isExtensible(target)\uff1a\u62e6\u622a",(0,s.jsx)(r.code,{children:"Object.isExtensible(proxy)"}),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c"]}),"\n",(0,s.jsxs)(r.li,{children:["setPrototypeOf(target, proto)\uff1a\u62e6\u622a",(0,s.jsx)(r.code,{children:"Object.setPrototypeOf(proxy, proto)"}),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c"]}),"\n",(0,s.jsx)(r.li,{children:"apply(target, object, args)\uff1a\u62e6\u622a Proxy \u5b9e\u4f8b\u4f5c\u4e3a\u51fd\u6570\u8c03\u7528\u7684\u64cd\u4f5c"}),"\n",(0,s.jsx)(r.li,{children:"construct(target, args)\uff1a\u62e6\u622a Proxy \u5b9e\u4f8b\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u8c03\u7528\u7684\u64cd\u4f5c"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"reflect",children:"Reflect"}),"\n",(0,s.jsxs)(r.p,{children:["\u82e5\u9700\u8981\u5728",(0,s.jsx)(r.code,{children:"Proxy"}),"\u5185\u90e8\u8c03\u7528\u5bf9\u8c61\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u5efa\u8bae\u4f7f\u7528",(0,s.jsx)(r.code,{children:"Reflect"}),"\uff0c\u5176\u662f",(0,s.jsx)(r.code,{children:"ES6"}),"\u4e2d\u64cd\u4f5c\u5bf9\u8c61\u800c\u63d0\u4f9b\u7684\u65b0 ",(0,s.jsx)(r.code,{children:"API"})]}),"\n",(0,s.jsx)(r.p,{children:"\u57fa\u672c\u7279\u70b9\uff1a"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u53ea\u8981",(0,s.jsx)(r.code,{children:"Proxy"}),"\u5bf9\u8c61\u5177\u6709\u7684\u4ee3\u7406\u65b9\u6cd5\uff0c",(0,s.jsx)(r.code,{children:"Reflect"}),"\u5bf9\u8c61\u5168\u90e8\u5177\u6709\uff0c\u4ee5\u9759\u6001\u65b9\u6cd5\u7684\u5f62\u5f0f\u5b58\u5728"]}),"\n",(0,s.jsxs)(r.li,{children:["\u4fee\u6539\u67d0\u4e9b",(0,s.jsx)(r.code,{children:"Object"}),"\u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u8ba9\u5176\u53d8\u5f97\u66f4\u5408\u7406\uff08\u5b9a\u4e49\u4e0d\u5b58\u5728\u5c5e\u6027\u884c\u4e3a\u7684\u65f6\u5019\u4e0d\u62a5\u9519\u800c\u662f\u8fd4\u56de",(0,s.jsx)(r.code,{children:"false"}),"\uff09"]}),"\n",(0,s.jsxs)(r.li,{children:["\u8ba9",(0,s.jsx)(r.code,{children:"Object"}),"\u64cd\u4f5c\u90fd\u53d8\u6210\u51fd\u6570\u884c\u4e3a"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u4e0b\u9762\u6211\u4eec\u4ecb\u7ecd",(0,s.jsx)(r.code,{children:"proxy"}),"\u51e0\u79cd\u7528\u6cd5\uff1a"]}),"\n",(0,s.jsx)(r.h3,{id:"get",children:"get()"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"get"}),"\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\u76ee\u6807\u5bf9\u8c61\u3001\u5c5e\u6027\u540d\u548c ",(0,s.jsx)(r.code,{children:"proxy"})," \u5b9e\u4f8b\u672c\u8eab\uff0c\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u53ef\u9009"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'var person = {\r\n  name: "\u5f20\u4e09",\r\n};\r\n\r\nvar proxy = new Proxy(person, {\r\n  get: function (target, propKey) {\r\n    return Reflect.get(target, propKey);\r\n  },\r\n});\r\n\r\nproxy.name; // "\u5f20\u4e09"\n'})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"get"}),"\u80fd\u591f\u5bf9\u6570\u7ec4\u589e\u5220\u6539\u67e5\u8fdb\u884c\u62e6\u622a\uff0c\u4e0b\u9762\u662f\u8bd5\u4e0b\u4f60\u6570\u7ec4\u8bfb\u53d6\u8d1f\u6570\u7684\u7d22\u5f15"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'function createArray(...elements) {\r\n  let handler = {\r\n    get(target, propKey, receiver) {\r\n      let index = Number(propKey);\r\n      if (index < 0) {\r\n        propKey = String(target.length + index);\r\n      }\r\n      return Reflect.get(target, propKey, receiver);\r\n    },\r\n  };\r\n\r\n  let target = [];\r\n  target.push(...elements);\r\n  return new Proxy(target, handler);\r\n}\r\n\r\nlet arr = createArray("a", "b", "c");\r\narr[-1]; // c\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u6ce8\u610f\uff1a\u5982\u679c\u4e00\u4e2a\u5c5e\u6027\u4e0d\u53ef\u914d\u7f6e\uff08configurable\uff09\u4e14\u4e0d\u53ef\u5199\uff08writable\uff09\uff0c\u5219 Proxy \u4e0d\u80fd\u4fee\u6539\u8be5\u5c5e\u6027\uff0c\u5426\u5219\u4f1a\u62a5\u9519"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'const target = Object.defineProperties(\r\n  {},\r\n  {\r\n    foo: {\r\n      value: 123,\r\n      writable: false,\r\n      configurable: false,\r\n    },\r\n  }\r\n);\r\n\r\nconst handler = {\r\n  get(target, propKey) {\r\n    return "abc";\r\n  },\r\n};\r\n\r\nconst proxy = new Proxy(target, handler);\r\n\r\nproxy.foo;\r\n// TypeError: Invariant check failed\n'})}),"\n",(0,s.jsx)(r.h3,{id:"set",children:"set()"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"set"}),"\u65b9\u6cd5\u7528\u6765\u62e6\u622a\u67d0\u4e2a\u5c5e\u6027\u7684\u8d4b\u503c\u64cd\u4f5c\uff0c\u53ef\u4ee5\u63a5\u53d7\u56db\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\u76ee\u6807\u5bf9\u8c61\u3001\u5c5e\u6027\u540d\u3001\u5c5e\u6027\u503c\u548c ",(0,s.jsx)(r.code,{children:"Proxy"})," \u5b9e\u4f8b\u672c\u8eab"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5047\u5b9a",(0,s.jsx)(r.code,{children:"Person"}),"\u5bf9\u8c61\u6709\u4e00\u4e2a",(0,s.jsx)(r.code,{children:"age"}),"\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u5e94\u8be5\u662f\u4e00\u4e2a\u4e0d\u5927\u4e8e 200 \u7684\u6574\u6570\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(r.code,{children:"Proxy"}),"\u4fdd\u8bc1",(0,s.jsx)(r.code,{children:"age"}),"\u7684\u5c5e\u6027\u503c\u7b26\u5408\u8981\u6c42"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'let validator = {\r\n  set: function (obj, prop, value) {\r\n    if (prop === "age") {\r\n      if (!Number.isInteger(value)) {\r\n        throw new TypeError("The age is not an integer");\r\n      }\r\n      if (value > 200) {\r\n        throw new RangeError("The age seems invalid");\r\n      }\r\n    }\r\n\r\n    // \u5bf9\u4e8e\u6ee1\u8db3\u6761\u4ef6\u7684 age \u5c5e\u6027\u4ee5\u53ca\u5176\u4ed6\u5c5e\u6027\uff0c\u76f4\u63a5\u4fdd\u5b58\r\n    obj[prop] = value;\r\n  },\r\n};\r\n\r\nlet person = new Proxy({}, validator);\r\n\r\nperson.age = 100;\r\n\r\nperson.age; // 100\r\nperson.age = "young"; // \u62a5\u9519\r\nperson.age = 300; // \u62a5\u9519\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679c\u76ee\u6807\u5bf9\u8c61\u81ea\u8eab\u7684\u67d0\u4e2a\u5c5e\u6027\uff0c\u4e0d\u53ef\u5199\u4e14\u4e0d\u53ef\u914d\u7f6e\uff0c\u90a3\u4e48",(0,s.jsx)(r.code,{children:"set"}),"\u65b9\u6cd5\u5c06\u4e0d\u8d77\u4f5c\u7528"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'const obj = {};\r\nObject.defineProperty(obj, "foo", {\r\n  value: "bar",\r\n  writable: false,\r\n});\r\n\r\nconst handler = {\r\n  set: function (obj, prop, value, receiver) {\r\n    obj[prop] = "baz";\r\n  },\r\n};\r\n\r\nconst proxy = new Proxy(obj, handler);\r\nproxy.foo = "baz";\r\nproxy.foo; // "bar"\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u6ce8\u610f\uff0c\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c",(0,s.jsx)(r.code,{children:"set"}),"\u4ee3\u7406\u5982\u679c\u6ca1\u6709\u8fd4\u56de",(0,s.jsx)(r.code,{children:"true"}),"\uff0c\u5c31\u4f1a\u62a5\u9519"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"\"use strict\";\r\nconst handler = {\r\n  set: function (obj, prop, value, receiver) {\r\n    obj[prop] = receiver;\r\n    // \u65e0\u8bba\u6709\u6ca1\u6709\u4e0b\u9762\u8fd9\u4e00\u884c\uff0c\u90fd\u4f1a\u62a5\u9519\r\n    return false;\r\n  },\r\n};\r\nconst proxy = new Proxy({}, handler);\r\nproxy.foo = \"bar\";\r\n// TypeError: 'set' on proxy: trap returned falsish for property 'foo'\n"})}),"\n",(0,s.jsx)(r.h3,{id:"deleteproperty",children:"deleteProperty()"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"deleteProperty"}),"\u65b9\u6cd5\u7528\u4e8e\u62e6\u622a",(0,s.jsx)(r.code,{children:"delete"}),"\u64cd\u4f5c\uff0c\u5982\u679c\u8fd9\u4e2a\u65b9\u6cd5\u629b\u51fa\u9519\u8bef\u6216\u8005\u8fd4\u56de",(0,s.jsx)(r.code,{children:"false"}),"\uff0c\u5f53\u524d\u5c5e\u6027\u5c31\u65e0\u6cd5\u88ab",(0,s.jsx)(r.code,{children:"delete"}),"\u547d\u4ee4\u5220\u9664"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'var handler = {\r\n  deleteProperty(target, key) {\r\n    invariant(key, "delete");\r\n    Reflect.deleteProperty(target, key);\r\n    return true;\r\n  },\r\n};\r\nfunction invariant(key, action) {\r\n  if (key[0] === "_") {\r\n    throw new Error(`\u65e0\u6cd5\u5220\u9664\u79c1\u6709\u5c5e\u6027`);\r\n  }\r\n}\r\n\r\nvar target = { _prop: "foo" };\r\nvar proxy = new Proxy(target, handler);\r\ndelete proxy._prop;\r\n// Error: \u65e0\u6cd5\u5220\u9664\u79c1\u6709\u5c5e\u6027\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u6ce8\u610f\uff0c\u76ee\u6807\u5bf9\u8c61\u81ea\u8eab\u7684\u4e0d\u53ef\u914d\u7f6e\uff08configurable\uff09\u7684\u5c5e\u6027\uff0c\u4e0d\u80fd\u88ab",(0,s.jsx)(r.code,{children:"deleteProperty"}),"\u65b9\u6cd5\u5220\u9664\uff0c\u5426\u5219\u62a5\u9519"]}),"\n",(0,s.jsx)(r.h3,{id:"\u53d6\u6d88\u4ee3\u7406",children:"\u53d6\u6d88\u4ee3\u7406"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"Proxy.revocable(target, handler);\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u4e09\u4f7f\u7528\u573a\u666f",children:"\u4e09\u3001\u4f7f\u7528\u573a\u666f"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Proxy"}),"\u5176\u529f\u80fd\u975e\u5e38\u7c7b\u4f3c\u4e8e\u8bbe\u8ba1\u6a21\u5f0f\u4e2d\u7684\u4ee3\u7406\u6a21\u5f0f\uff0c\u5e38\u7528\u529f\u80fd\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u62e6\u622a\u548c\u76d1\u89c6\u5916\u90e8\u5bf9\u5bf9\u8c61\u7684\u8bbf\u95ee"}),"\n",(0,s.jsx)(r.li,{children:"\u964d\u4f4e\u51fd\u6570\u6216\u7c7b\u7684\u590d\u6742\u5ea6"}),"\n",(0,s.jsx)(r.li,{children:"\u5728\u590d\u6742\u64cd\u4f5c\u524d\u5bf9\u64cd\u4f5c\u8fdb\u884c\u6821\u9a8c\u6216\u5bf9\u6240\u9700\u8d44\u6e90\u8fdb\u884c\u7ba1\u7406"}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"Proxy"})," \u4fdd\u969c\u6570\u636e\u7c7b\u578b\u7684\u51c6\u786e\u6027"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'let numericDataStore = { count: 0, amount: 1234, total: 14 };\r\nnumericDataStore = new Proxy(numericDataStore, {\r\n  set(target, key, value, proxy) {\r\n    if (typeof value !== "number") {\r\n      throw Error("\u5c5e\u6027\u53ea\u80fd\u662fnumber\u7c7b\u578b");\r\n    }\r\n    return Reflect.set(target, key, value, proxy);\r\n  },\r\n});\r\n\r\nnumericDataStore.count = "foo";\r\n// Error: \u5c5e\u6027\u53ea\u80fd\u662fnumber\u7c7b\u578b\r\n\r\nnumericDataStore.count = 333;\r\n// \u8d4b\u503c\u6210\u529f\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u58f0\u660e\u4e86\u4e00\u4e2a\u79c1\u6709\u7684 ",(0,s.jsx)(r.code,{children:"apiKey"}),"\uff0c\u4fbf\u4e8e ",(0,s.jsx)(r.code,{children:"api"})," \u8fd9\u4e2a\u5bf9\u8c61\u5185\u90e8\u7684\u65b9\u6cd5\u8c03\u7528\uff0c\u4f46\u4e0d\u5e0c\u671b\u4ece\u5916\u90e8\u4e5f\u80fd\u591f\u8bbf\u95ee ",(0,s.jsx)(r.code,{children:"api._apiKey"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'let api = {\r\n  _apiKey: "123abc456def",\r\n  getUsers: function () {},\r\n  getUser: function (userId) {},\r\n  setUser: function (userId, config) {},\r\n};\r\nconst RESTRICTED = ["_apiKey"];\r\napi = new Proxy(api, {\r\n  get(target, key, proxy) {\r\n    if (RESTRICTED.indexOf(key) > -1) {\r\n      throw Error(`${key} \u4e0d\u53ef\u8bbf\u95ee.`);\r\n    }\r\n    return Reflect.get(target, key, proxy);\r\n  },\r\n  set(target, key, value, proxy) {\r\n    if (RESTRICTED.indexOf(key) > -1) {\r\n      throw Error(`${key} \u4e0d\u53ef\u4fee\u6539`);\r\n    }\r\n    return Reflect.get(target, key, value, proxy);\r\n  },\r\n});\r\n\r\nconsole.log(api._apiKey);\r\napi._apiKey = "987654321";\r\n// \u4e0a\u8ff0\u90fd\u629b\u51fa\u9519\u8bef\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u8fd8\u80fd\u901a\u8fc7\u4f7f\u7528",(0,s.jsx)(r.code,{children:"Proxy"}),"\u5b9e\u73b0\u89c2\u5bdf\u8005\u6a21\u5f0f"]}),"\n",(0,s.jsx)(r.p,{children:"\u89c2\u5bdf\u8005\u6a21\u5f0f\uff08Observer mode\uff09\u6307\u7684\u662f\u51fd\u6570\u81ea\u52a8\u89c2\u5bdf\u6570\u636e\u5bf9\u8c61\uff0c\u4e00\u65e6\u5bf9\u8c61\u6709\u53d8\u5316\uff0c\u51fd\u6570\u5c31\u4f1a\u81ea\u52a8\u6267\u884c"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"observable"}),"\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u539f\u59cb\u5bf9\u8c61\u7684 ",(0,s.jsx)(r.code,{children:"Proxy"})," \u4ee3\u7406\uff0c\u62e6\u622a\u8d4b\u503c\u64cd\u4f5c\uff0c\u89e6\u53d1\u5145\u5f53\u89c2\u5bdf\u8005\u7684\u5404\u4e2a\u51fd\u6570"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"const queuedObservers = new Set();\r\n\r\nconst observe = (fn) => queuedObservers.add(fn);\r\nconst observable = (obj) => new Proxy(obj, { set });\r\n\r\nfunction set(target, key, value, receiver) {\r\n  const result = Reflect.set(target, key, value, receiver);\r\n  queuedObservers.forEach((observer) => observer());\r\n  return result;\r\n}\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u89c2\u5bdf\u8005\u51fd\u6570\u90fd\u653e\u8fdb",(0,s.jsx)(r.code,{children:"Set"}),"\u96c6\u5408\uff0c\u5f53\u4fee\u6539",(0,s.jsx)(r.code,{children:"obj"}),"\u7684\u503c\uff0c\u5728\u4f1a",(0,s.jsx)(r.code,{children:"set"}),"\u51fd\u6570\u4e2d\u62e6\u622a\uff0c\u81ea\u52a8\u6267\u884c",(0,s.jsx)(r.code,{children:"Set"}),"\u6240\u6709\u7684\u89c2\u5bdf\u8005"]}),"\n",(0,s.jsx)(r.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://es6.ruanyifeng.com/#docs/proxy",children:"https://es6.ruanyifeng.com/#docs/proxy"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://vue3js.cn/es6",children:"https://vue3js.cn/es6"})}),"\n"]})]})}function x(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>l});var s=n(96540);const c={},o=s.createContext(c);function t(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);