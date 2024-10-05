"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[26707],{83130:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=r(74848),c=r(28453);const i={},t=void 0,l={id:"Vue/$nextTick",title:"$nextTick",description:"this.$nextTick \u5f02\u6b65\u66f4\u65b0\u961f\u5217",source:"@site/docs/Vue/$nextTick.md",sourceDirName:"Vue",slug:"/Vue/$nextTick",permalink:"/docs/Vue/$nextTick",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"vueSidebar",previous:{title:"\u8fdb\u9636",permalink:"/docs/Vue/vue2\u6587\u6863/\u8fdb\u9636"},next:{title:"MVC\u548cMVVM\u533a\u522b",permalink:"/docs/Vue/MVC\u548cMVVM\u533a\u522b"}},o={},d=[{value:"this.$nextTick \u5f02\u6b65\u66f4\u65b0\u961f\u5217",id:"thisnexttick-\u5f02\u6b65\u66f4\u65b0\u961f\u5217",level:2},{value:"\u4e00\u3001NextTick \u662f\u4ec0\u4e48",id:"\u4e00nexttick-\u662f\u4ec0\u4e48",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u6709 nexttick",id:"\u4e3a\u4ec0\u4e48\u8981\u6709-nexttick",level:4},{value:"\u4e8c\u3001\u4f7f\u7528\u573a\u666f",id:"\u4e8c\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4e09\u3001\u5b9e\u73b0\u539f\u7406",id:"\u4e09\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"thisnexttick-\u5f02\u6b65\u66f4\u65b0\u961f\u5217",children:"this.$nextTick \u5f02\u6b65\u66f4\u65b0\u961f\u5217"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'<div id="app">\r\n      <p>{{ count }}</p>\r\n      <button @click="fn">btn</button>\r\n    </div>\r\n    <script src="../../Vue.js"><\/script>\r\n<script>\r\n  new Vue({\r\n    el: "#app",\r\n    data: {\r\n      count: 1,\r\n    },\r\n    methods: {\r\n      fn() {\r\n        // \u76f4\u63a5\u4ece1\u53d8\u62104\r\n        // \u865a\u62dfdom\uff0c\u4e00\u6b21\u6027\u505a\u6e32\u67d3\uff0c\u51cf\u5c11dom\u64cd\u4f5c\r\n        // update\u7684\u751f\u547d\u5468\u671f\u4e5f\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u95ee\u9898\r\n        // \u6570\u636e\u7684\u6539\u53d8\u548c\u9875\u9762\u7684\u6e32\u67d3\u4e0d\u662f\u4e00\u8d77\u53d1\u751f\u7684\r\n        // this.count++;\r\n        // console.log(this.count);\r\n        // console.log(document.querySelector("p").innerHTML);\r\n        // this.count++;\r\n        // this.count++;\r\n\r\n        this.count++;\r\n        // nextTick\u8868\u793a\u4e0b\u4e00\u6b21\u7684\u4e8b\u4ef6\u8f6e\u8be2\r\n        // \u7b49\u5f85\u9875\u9762\u6e32\u67d3\u5b8c\u518d\u6267\u884c\u91cc\u9762\u7684\u56de\u8c03\u51fd\u6570\r\n        this.$nextTick(() => {\r\n          this.count++;\r\n        });\r\n      },\r\n    },\r\n  });\r\n<\/script>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e00nexttick-\u662f\u4ec0\u4e48",children:"\u4e00\u3001NextTick \u662f\u4ec0\u4e48"}),"\n",(0,s.jsx)(n.p,{children:"\u5b98\u65b9\u5bf9\u5176\u7684\u5b9a\u4e49"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728\u4e0b\u6b21 DOM \u66f4\u65b0\u5faa\u73af\u7ed3\u675f\u4e4b\u540e\u6267\u884c\u5ef6\u8fdf\u56de\u8c03\u3002\u5728\u4fee\u6539\u6570\u636e\u4e4b\u540e\u7acb\u5373\u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u83b7\u53d6\u66f4\u65b0\u540e\u7684 DOM"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ec0\u4e48\u610f\u601d\u5462\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u7406\u89e3\u6210\uff0c",(0,s.jsx)(n.code,{children:"Vue"})," \u5728\u66f4\u65b0 ",(0,s.jsx)(n.code,{children:"DOM"})," \u65f6\u662f\u5f02\u6b65\u6267\u884c\u7684\u3002\u5f53\u6570\u636e\u53d1\u751f\u53d8\u5316\uff0c",(0,s.jsx)(n.code,{children:"Vue"}),"\u5c06\u5f00\u542f\u4e00\u4e2a\u5f02\u6b65\u66f4\u65b0\u961f\u5217\uff0c\u89c6\u56fe\u9700\u8981\u7b49\u961f\u5217\u4e2d\u6240\u6709\u6570\u636e\u53d8\u5316\u5b8c\u6210\u4e4b\u540e\uff0c\u518d\u7edf\u4e00\u8fdb\u884c\u66f4\u65b0"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e3e\u4f8b\u4e00\u4e0b"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Html"}),"\u7ed3\u6784"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div id="app">{{ message }}</div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6784\u5efa\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"vue"}),"\u5b9e\u4f8b"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const vm = new Vue({\r\n  el: "#app",\r\n  data: {\r\n    message: "\u539f\u59cb\u503c",\r\n  },\r\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4fee\u6539",(0,s.jsx)(n.code,{children:"message"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'this.message = "\u4fee\u6539\u540e\u7684\u503c1";\r\nthis.message = "\u4fee\u6539\u540e\u7684\u503c2";\r\nthis.message = "\u4fee\u6539\u540e\u7684\u503c3";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u65f6\u5019\u60f3\u83b7\u53d6\u9875\u9762\u6700\u65b0\u7684",(0,s.jsx)(n.code,{children:"DOM"}),"\u8282\u70b9\uff0c\u5374\u53d1\u73b0\u83b7\u53d6\u5230\u7684\u662f\u65e7\u503c"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"console.log(vm.$el.textContent); // \u539f\u59cb\u503c\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u662f\u56e0\u4e3a",(0,s.jsx)(n.code,{children:"message"}),"\u6570\u636e\u5728\u53d1\u73b0\u53d8\u5316\u7684\u65f6\u5019\uff0c",(0,s.jsx)(n.code,{children:"vue"}),"\u5e76\u4e0d\u4f1a\u7acb\u523b\u53bb\u66f4\u65b0",(0,s.jsx)(n.code,{children:"Dom"}),"\uff0c\u800c\u662f\u5c06\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u653e\u5728\u4e86\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\u961f\u5217\u4e2d"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u4e00\u76f4\u4fee\u6539\u76f8\u540c\u6570\u636e\uff0c\u5f02\u6b65\u64cd\u4f5c\u961f\u5217\u8fd8\u4f1a\u8fdb\u884c\u53bb\u91cd"}),"\n",(0,s.jsxs)(n.p,{children:["\u7b49\u5f85\u540c\u4e00\u4e8b\u4ef6\u5faa\u73af\u4e2d\u7684\u6240\u6709\u6570\u636e\u53d8\u5316\u5b8c\u6210\u4e4b\u540e\uff0c\u4f1a\u5c06\u961f\u5217\u4e2d\u7684\u4e8b\u4ef6\u62ff\u6765\u8fdb\u884c\u5904\u7406\uff0c\u8fdb\u884c",(0,s.jsx)(n.code,{children:"DOM"}),"\u7684\u66f4\u65b0"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4e3a\u4ec0\u4e48\u8981\u6709-nexttick",children:"\u4e3a\u4ec0\u4e48\u8981\u6709 nexttick"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3e\u4e2a\u4f8b\u5b50"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\r\n  {\r\n    num;\r\n  }\r\n}\r\nfor (let i = 0; i < 100000; i++) {\r\n  num = i;\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u6ca1\u6709 ",(0,s.jsx)(n.code,{children:"nextTick"})," \u66f4\u65b0\u673a\u5236\uff0c\u90a3\u4e48 ",(0,s.jsx)(n.code,{children:"num"})," \u6bcf\u6b21\u66f4\u65b0\u503c\u90fd\u4f1a\u89e6\u53d1\u89c6\u56fe\u66f4\u65b0(\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u4e5f\u5c31\u662f\u4f1a\u66f4\u65b0 10 \u4e07\u6b21\u89c6\u56fe)\uff0c\u6709\u4e86",(0,s.jsx)(n.code,{children:"nextTick"}),"\u673a\u5236\uff0c\u53ea\u9700\u8981\u66f4\u65b0\u4e00\u6b21\uff0c\u6240\u4ee5",(0,s.jsx)(n.code,{children:"nextTick"}),"\u672c\u8d28\u662f\u4e00\u79cd\u4f18\u5316\u7b56\u7565"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e8c\u4f7f\u7528\u573a\u666f",children:"\u4e8c\u3001\u4f7f\u7528\u573a\u666f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u8981\u5728\u4fee\u6539\u6570\u636e\u540e\u7acb\u523b\u5f97\u5230\u66f4\u65b0\u540e\u7684",(0,s.jsx)(n.code,{children:"DOM"}),"\u7ed3\u6784\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.code,{children:"Vue.nextTick()"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\uff1a\u56de\u8c03\u51fd\u6570\uff08\u53ef\u4ee5\u83b7\u53d6\u6700\u8fd1\u7684",(0,s.jsx)(n.code,{children:"DOM"}),"\u7ed3\u6784\uff09"]}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\uff1a\u6267\u884c\u51fd\u6570\u4e0a\u4e0b\u6587"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// \u4fee\u6539\u6570\u636e\r\nvm.message = "\u4fee\u6539\u540e\u7684\u503c";\r\n// DOM \u8fd8\u6ca1\u6709\u66f4\u65b0\r\nconsole.log(vm.$el.textContent); // \u539f\u59cb\u7684\u503c\r\nVue.nextTick(function () {\r\n  // DOM \u66f4\u65b0\u4e86\r\n  console.log(vm.$el.textContent); // \u4fee\u6539\u540e\u7684\u503c\r\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u7ec4\u4ef6\u5185\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"vm.$nextTick()"})," \u5b9e\u4f8b\u65b9\u6cd5\u53ea\u9700\u8981\u901a\u8fc7",(0,s.jsx)(n.code,{children:"this.$nextTick()"}),"\uff0c\u5e76\u4e14\u56de\u8c03\u51fd\u6570\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"this"})," \u5c06\u81ea\u52a8\u7ed1\u5b9a\u5230\u5f53\u524d\u7684 ",(0,s.jsx)(n.code,{children:"Vue"})," \u5b9e\u4f8b\u4e0a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"this.message = \"\u4fee\u6539\u540e\u7684\u503c\";\r\nconsole.log(this.$el.textContent); // => '\u539f\u59cb\u7684\u503c'\r\nthis.$nextTick(function () {\r\n  console.log(this.$el.textContent); // => '\u4fee\u6539\u540e\u7684\u503c'\r\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$nextTick()"})," \u4f1a\u8fd4\u56de\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"Promise"})," \u5bf9\u8c61\uff0c\u53ef\u4ee5\u662f\u7528",(0,s.jsx)(n.code,{children:"async/await"}),"\u5b8c\u6210\u76f8\u540c\u4f5c\u7528\u7684\u4e8b\u60c5"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"this.message = \"\u4fee\u6539\u540e\u7684\u503c\";\r\nconsole.log(this.$el.textContent); // => '\u539f\u59cb\u7684\u503c'\r\nawait this.$nextTick();\r\nconsole.log(this.$el.textContent); // => '\u4fee\u6539\u540e\u7684\u503c'\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e09\u5b9e\u73b0\u539f\u7406",children:"\u4e09\u3001\u5b9e\u73b0\u539f\u7406"}),"\n",(0,s.jsxs)(n.p,{children:["\u6e90\u7801\u4f4d\u7f6e\uff1a",(0,s.jsx)(n.code,{children:"/src/core/util/next-tick.js"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"callbacks"}),"\u4e5f\u5c31\u662f\u5f02\u6b65\u64cd\u4f5c\u961f\u5217"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"callbacks"}),"\u65b0\u589e\u56de\u8c03\u51fd\u6570\u540e\u53c8\u6267\u884c\u4e86",(0,s.jsx)(n.code,{children:"timerFunc"}),"\u51fd\u6570\uff0c",(0,s.jsx)(n.code,{children:"pending"}),"\u662f\u7528\u6765\u6807\u8bc6\u540c\u4e00\u4e2a\u65f6\u95f4\u53ea\u80fd\u6267\u884c\u4e00\u6b21"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'export function nextTick(cb?: Function, ctx?: Object) {\r\n  let _resolve;\r\n\r\n  // cb \u56de\u8c03\u51fd\u6570\u4f1a\u7ecf\u7edf\u4e00\u5904\u7406\u538b\u5165 callbacks \u6570\u7ec4\r\n  callbacks.push(() => {\r\n    if (cb) {\r\n      // \u7ed9 cb \u56de\u8c03\u51fd\u6570\u6267\u884c\u52a0\u4e0a\u4e86 try-catch \u9519\u8bef\u5904\u7406\r\n      try {\r\n        cb.call(ctx);\r\n      } catch (e) {\r\n        handleError(e, ctx, "nextTick");\r\n      }\r\n    } else if (_resolve) {\r\n      _resolve(ctx);\r\n    }\r\n  });\r\n\r\n  // \u6267\u884c\u5f02\u6b65\u5ef6\u8fdf\u51fd\u6570 timerFunc\r\n  if (!pending) {\r\n    pending = true;\r\n    timerFunc();\r\n  }\r\n\r\n  // \u5f53 nextTick \u6ca1\u6709\u4f20\u5165\u51fd\u6570\u53c2\u6570\u7684\u65f6\u5019\uff0c\u8fd4\u56de\u4e00\u4e2a Promise \u5316\u7684\u8c03\u7528\r\n  if (!cb && typeof Promise !== "undefined") {\r\n    return new Promise((resolve) => {\r\n      _resolve = resolve;\r\n    });\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"timerFunc"}),"\u51fd\u6570\u5b9a\u4e49\uff0c\u8fd9\u91cc\u662f\u6839\u636e\u5f53\u524d\u73af\u5883\u652f\u6301\u4ec0\u4e48\u65b9\u6cd5\u5219\u786e\u5b9a\u8c03\u7528\u54ea\u4e2a\uff0c\u5206\u522b\u6709\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise.then"}),"\u3001",(0,s.jsx)(n.code,{children:"MutationObserver"}),"\u3001",(0,s.jsx)(n.code,{children:"setImmediate"}),"\u3001",(0,s.jsx)(n.code,{children:"setTimeout"})]}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u9762\u4efb\u610f\u4e00\u79cd\u65b9\u6cd5\uff0c\u8fdb\u884c\u964d\u7ea7\u64cd\u4f5c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'export let isUsingMicroTask = false;\r\nif (typeof Promise !== "undefined" && isNative(Promise)) {\r\n  //\u5224\u65ad1\uff1a\u662f\u5426\u539f\u751f\u652f\u6301Promise\r\n  const p = Promise.resolve();\r\n  timerFunc = () => {\r\n    p.then(flushCallbacks);\r\n    if (isIOS) setTimeout(noop);\r\n  };\r\n  isUsingMicroTask = true;\r\n} else if (\r\n  !isIE &&\r\n  typeof MutationObserver !== "undefined" &&\r\n  (isNative(MutationObserver) ||\r\n    MutationObserver.toString() === "[object MutationObserverConstructor]")\r\n) {\r\n  //\u5224\u65ad2\uff1a\u662f\u5426\u539f\u751f\u652f\u6301MutationObserver\r\n  let counter = 1;\r\n  const observer = new MutationObserver(flushCallbacks);\r\n  const textNode = document.createTextNode(String(counter));\r\n  observer.observe(textNode, {\r\n    characterData: true,\r\n  });\r\n  timerFunc = () => {\r\n    counter = (counter + 1) % 2;\r\n    textNode.data = String(counter);\r\n  };\r\n  isUsingMicroTask = true;\r\n} else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {\r\n  //\u5224\u65ad3\uff1a\u662f\u5426\u539f\u751f\u652f\u6301setImmediate\r\n  timerFunc = () => {\r\n    setImmediate(flushCallbacks);\r\n  };\r\n} else {\r\n  //\u5224\u65ad4\uff1a\u4e0a\u9762\u90fd\u4e0d\u884c\uff0c\u76f4\u63a5\u7528setTimeout\r\n  timerFunc = () => {\r\n    setTimeout(flushCallbacks, 0);\r\n  };\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u65e0\u8bba\u662f\u5fae\u4efb\u52a1\u8fd8\u662f\u5b8f\u4efb\u52a1\uff0c\u90fd\u4f1a\u653e\u5230",(0,s.jsx)(n.code,{children:"flushCallbacks"}),"\u4f7f\u7528"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u5c06",(0,s.jsx)(n.code,{children:"callbacks"}),"\u91cc\u9762\u7684\u51fd\u6570\u590d\u5236\u4e00\u4efd\uff0c\u540c\u65f6",(0,s.jsx)(n.code,{children:"callbacks"}),"\u7f6e\u7a7a"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f9d\u6b21\u6267\u884c",(0,s.jsx)(n.code,{children:"callbacks"}),"\u91cc\u9762\u7684\u51fd\u6570"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function flushCallbacks() {\r\n  pending = false;\r\n  const copies = callbacks.slice(0);\r\n  callbacks.length = 0;\r\n  for (let i = 0; i < copies.length; i++) {\r\n    copies[i]();\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5c0f\u7ed3\uff1a"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u628a\u56de\u8c03\u51fd\u6570\u653e\u5165 callbacks \u7b49\u5f85\u6267\u884c"}),"\n",(0,s.jsx)(n.li,{children:"\u5c06\u6267\u884c\u51fd\u6570\u653e\u5230\u5fae\u4efb\u52a1\u6216\u8005\u5b8f\u4efb\u52a1\u4e2d"}),"\n",(0,s.jsx)(n.li,{children:"\u4e8b\u4ef6\u5faa\u73af\u5230\u4e86\u5fae\u4efb\u52a1\u6216\u8005\u5b8f\u4efb\u52a1\uff0c\u6267\u884c\u51fd\u6570\u4f9d\u6b21\u6267\u884c callbacks \u4e2d\u7684\u56de\u8c03"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://juejin.cn/post/6844904147804749832",children:"https://juejin.cn/post/6844904147804749832"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(96540);const c={},i=s.createContext(c);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);