"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[48371],{43817:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var t=e(74848),o=e(28453);const c={},i=void 0,a={id:"Vue/vue2\u6587\u6863/\u53cc\u5411\u6570\u636e\u7ed1\u5b9a",title:"\u53cc\u5411\u6570\u636e\u7ed1\u5b9a",description:"Object.defineProperty",source:"@site/docs/Vue/vue2\u6587\u6863/\u53cc\u5411\u6570\u636e\u7ed1\u5b9a.md",sourceDirName:"Vue/vue2\u6587\u6863",slug:"/Vue/vue2\u6587\u6863/\u53cc\u5411\u6570\u636e\u7ed1\u5b9a",permalink:"/docs/Vue/vue2\u6587\u6863/\u53cc\u5411\u6570\u636e\u7ed1\u5b9a",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"vueSidebar",previous:{title:"\u4ec0\u4e48\u662fvue",permalink:"/docs/Vue/vue2\u6587\u6863/\u4ec0\u4e48\u662fvue"},next:{title:"\u57fa\u7840\u8bed\u6cd5",permalink:"/docs/Vue/vue2\u6587\u6863/\u57fa\u7840\u8bed\u6cd5"}},l={},s=[{value:"Object.defineProperty",id:"objectdefineproperty",level:2},{value:"obServer \u6570\u636e\u76d1\u542c\u5668",id:"observer-\u6570\u636e\u76d1\u542c\u5668",level:2},{value:"Compile \u6307\u4ee4\u89e3\u6790\u5668",id:"compile-\u6307\u4ee4\u89e3\u6790\u5668",level:2},{value:"watcher",id:"watcher",level:2},{value:"\u4e09\u79cd\u6ca1\u6709\u54cd\u5e94\u5f0f\u7684\u60c5\u51b5<code>$set</code> <code>$forceUpdate</code>",id:"\u4e09\u79cd\u6ca1\u6709\u54cd\u5e94\u5f0f\u7684\u60c5\u51b5set-forceupdate",level:2}];function d(n){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"objectdefineproperty",children:"Object.defineProperty"}),"\n",(0,t.jsx)(r.p,{children:"set \u548c get \u5c31\u662f\u76f8\u5f53\u4e8e\u5427\u6211\u4eec\u539f\u5bf9\u8c61\u7684\u503c\u63a5\u8f66\u4e0b\u6765\uff0c\u5f53\u6211\u5bf9\u8c61\u91cc\u9762\u7684\u503c\u6539\u53d8\u4f1a\u89e6\u53d1 set \u65b9\u6cd5\uff0c\u88ab\u8bbf\u95ee\u65f6\u89e6\u53d1 get \u65b9\u6cd5"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:'// Object.defineProperty()\u65b9\u6cd5\u5728\u8bed\u8a00\u5c42\u9762\u6765\u4fee\u6539\u4ee3\u7801\u7684\r\n// Object.defineProperty() \u65b9\u6cd5\u4f1a\u76f4\u63a5\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u4e00\u4e2a\u65b0\u5c5e\u6027\uff0c\u6216\u8005\u4fee\u6539\u4e00\u4e2a\u5bf9\u8c61\u7684\u73b0\u6709\u5c5e\u6027\uff0c\u5e76\u8fd4\u56de\u6b64\u5bf9\u8c61\u3002\r\n\r\nconst obj = {\r\n  a: 3,\r\n  b: 4,\r\n  c: {\r\n    x: 10,\r\n  },\r\n};\r\n/*\r\nObject.defineProperty() \u65b9\u6cd5\u53ef\u4ee5\u4ee5\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\r\n  obj\r\n    \u8981\u5b9a\u4e49\u5c5e\u6027\u7684\u5bf9\u8c61\u3002\r\n  prop\r\n    \u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u540d\u79f0\u6216 Symbol \u3002\r\n  descriptor\r\n    \u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002\r\n*/\r\nlet num;\r\nObject.defineProperty(obj, "a", {\r\n  // get\u51fd\u6570\u662f\u5728\u8fd9\u4e2a\u5bf9\u8c61\u7684\u8be5\u5c5e\u6027\u88ab\u8bbf\u95ee\u7684\u65f6\u5019\u8c03\u7528\u7684\r\n  // get\u65b9\u6cd5\u662f\u5fc5\u987b\u8981\u6709\u4e00\u4e2a\u8fd4\u56de\u503c\u7684\uff0c\u76f8\u5f53\u4e8e\u6211get\u65b9\u6cd5return\u7684\u503c\u5c31\u662fa\u7684\u503c\u4e86\r\n  // \u5982\u679c\u6ca1\u6709\u5199\u8fd4\u56de\u503c\uff0c\u5c31\u4f1a\u8f93\u51faundefined(\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u4f1a\u8f93\u51faundefined)\r\n  get() {\r\n    // console.log("get");\r\n    return num;\r\n  },\r\n  // set\u65b9\u6cd5\u662f\u5f53\u6211\u4eec\u53bb\u4fee\u6539\u8fd9\u4e2a\u5bf9\u8c61\u7684\u8be5\u5c5e\u6027\u7684\u65f6\u5019\u88ab\u8c03\u7528\u7684\r\n  // set\u65b9\u6cd5\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff0c\u53c2\u6570val\u5c31\u662f\u6211\u4eec\u60f3\u8981\u6539\u53d8\u7684\u503c\r\n  set(val) {\r\n    // console.log("set");\r\n    console.log(val);\r\n\r\n    num = val;\r\n    // \u53ef\u4ee5\u5728set\u91cc\u9762\u53bb\u89e6\u53d1\u76d1\u542c\u56de\u8c03\uff0c\u4ece\u800c\u53bb\u91cd\u65b0\u6e32\u67d3\u9875\u9762\r\n  },\r\n});\r\n// set\u548cget\u5c31\u662f\u76f8\u5f53\u4e8e\u5427\u6211\u4eec\u539f\u5bf9\u8c61\u7684\u503c\u63a5\u8f66\u4e0b\u6765\uff0c\u5f53\u6211\u5bf9\u8c61\u91cc\u9762\u7684\u503c\u6539\u53d8\u4f1a\u89e6\u53d1set\u65b9\u6cd5\uff0c\u88ab\u8bbf\u95ee\u65f6\u89e6\u53d1get\u65b9\u6cd5\r\n// obj.a=100;\r\n// console.log(obj.a);\r\n\r\n// \u7531\u4e8e JavaScript \u7684\u9650\u5236\uff0cVue \u4e0d\u80fd\u68c0\u6d4b\u6570\u7ec4\u548c\u5bf9\u8c61\u7684\u53d8\u5316\u3002\u5c3d\u7ba1\u5982\u6b64\u6211\u4eec\u8fd8\u662f\u6709\u4e00\u4e9b\u529e\u6cd5\u6765\u56de\u907f\u8fd9\u4e9b\u9650\u5236\u5e76\u4fdd\u8bc1\u5b83\u4eec\u7684\u54cd\u5e94\u6027\r\n// vue3\u4e2d\u7684proxy\u662f\u53ef\u4ee5\u5b9e\u73b0\u7684\r\nobj.c.x = 20;\n'})}),"\n",(0,t.jsx)(r.h2,{id:"observer-\u6570\u636e\u76d1\u542c\u5668",children:"obServer \u6570\u636e\u76d1\u542c\u5668"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:'const obj = {\r\n  a: 10,\r\n  b: 50,\r\n};\r\n\r\n// observe\u51fd\u6570\u662f\u4e00\u4e2a\u6570\u636e\u76d1\u542c\u5668\uff0c\u5728\u51fd\u6570\u91cc\u9762\u76d1\u542cObject.defineProperty\u51fd\u6570\u52ab\u6301\u5230\u7684\u5c5e\u6027\r\nconst observer = (data, key, value) => {\r\n  Object.defineProperty(data, key, {\r\n    get() {\r\n      return value;\r\n    },\r\n    set(val) {\r\n      // get\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570val,\u8868\u793a\u6539\u53d8\u7684\u503c\r\n      console.log(key + "\u7684\u503c\u4ece" + value + "\u53d8\u6210\u4e86" + val);\r\n      value = val;\r\n    },\r\n  });\r\n};\r\nObject.keys(obj).forEach((key) => {\r\n  // \u904d\u5386\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\r\n  observer(obj, key, obj[key]);\r\n  //\u8c03\u7528observer\u51fd\u6570\uff0c\r\n  // \u7b2c\u4e00\u4e2a\u53c2\u6570\u662fobj\u5bf9\u8c61\r\n  // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\r\n  // \u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u5bf9\u8c61\u7684\u5c5e\u6027\u503c\r\n});\r\n\r\nobj.a = 100;\r\nconsole.log(obj.a);\r\n// console.log(obj.b)\r\nsetTimeout(() => {\r\n  obj.b = 500;\r\n}, 2000);\r\nconsole.log(obj.b);\n'})}),"\n",(0,t.jsx)(r.h2,{id:"compile-\u6307\u4ee4\u89e3\u6790\u5668",children:"Compile \u6307\u4ee4\u89e3\u6790\u5668"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:'<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r\n    <title>Document</title>\r\n  </head>\r\n  <body>\r\n    <div id="app">\r\n      <h2>\u6307\u4ee4\u89e3\u6790\u5668</h2>\r\n      <p>{{ a }}</p>\r\n      <p>{{ b }}</p>\r\n    </div>\r\n\r\n    <script>\r\n      const data = {\r\n        a: 3,\r\n        b: 4,\r\n      };\r\n\r\n      const compile = (node) => {\r\n        //compile\u51fd\u6570\u662f\u6307\u4ee4\u89e3\u6790\u5668\uff0ccompile\u662f\u7f16\u8bd1\u7684\u610f\u601d\r\n        // \u5148\u8981\u53bb\u540e\u53bb\u8fd9\u4e2a\u5143\u7d20\u6240\u6709\u7684\u5b50\u5143\u7d20\r\n        console.log(node.children); //\u7c7b\u6570\u7ec4HTMLCollection(3)\xa0[h2, p, p]\r\n        // const children=Array.from(node.children);//\u5c06\u7c7b\u6570\u7ec4\u8f6c\u4e3a\u6570\u7ec4[h2, p, p]\r\n        const children = [...node.children]; //\u5c06\u7c7b\u6570\u7ec4\u8f6c\u4e3a\u6570\u7ec4[h2, p, p]\r\n        // console.log(children);\r\n        // \u4f7f\u7528\u6b63\u5219\uff0c\u6765\u5339\u914d\u662f\u5426\u6709\u53cc\u5927\u62ec\u53f7\r\n        const reg = /\\{\\{(.*)\\}\\}/;\r\n\r\n        // \u904d\u5386\u6570\u7ec4\r\n        children.forEach(child=>{\r\n            // \u5224\u65ad\u6807\u7b7e\u4e2d\u662f\u5426\u6709\u53cc\u5927\u62ec\u53f7\r\n            if(reg.test(child.textContent)){// child.textContent\u662f\u83b7\u53d6\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\r\n                // console.log(child.textContent);//{{ a }}  {{ b }}\r\n            child.innerHTML = data[RegExp.$1.trim()];\r\n            }\r\n        });\r\n      };\r\n      compile(document.querySelector("#app")); //\u8c03\u7528\u6307\u4ee4\u89e3\u6790\u5668\u51fd\u6570\uff0c\u4f20\u5165\u4e00\u4e2a\u8282\u70b9\uff08\u610f\u601d\u5c31\u662f\u89e3\u6790\u8282\u70b9\u91cc\u9762\u7684\u6307\u4ee4\uff09\r\n    <\/script>\r\n  </body>\r\n</html>\n'})}),"\n",(0,t.jsx)(r.h2,{id:"watcher",children:"watcher"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:'<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r\n    <title>Document</title>\r\n  </head>\r\n  <body>\r\n    <div id="app">\r\n      <h2>\u6307\u4ee4\u89e3\u6790\u5668</h2>\r\n      <p>{{ a }}</p>\r\n      <p>{{ b }}</p>\r\n    </div>\r\n\r\n    <button>btn</button>\r\n\r\n\r\n    <script>\r\n      const str = document.querySelector("#app").innerHTML;\r\n      const button = document.querySelector("button");\r\n      const data = {\r\n        a: 3,\r\n        b: 4,\r\n      };\r\n\r\n      // 1.\u6307\u4ee4\u89e3\u6790\u5668\uff08\u5c06\u5bf9\u8c61\u6e32\u67d3\u8fdb\u5165\u6807\u7b7e\u4e2d\u7684\u6307\u4ee4\uff09\r\n      const compile = (node) => {\r\n        document.querySelector("#app").innerHTML = str;// \u521d\u59cb\u5316\r\n        //compile\u51fd\u6570\u662f\u6307\u4ee4\u89e3\u6790\u5668\uff0ccompile\u662f\u7f16\u8bd1\u7684\u610f\u601d\r\n        // \u5148\u8981\u53bb\u540e\u53bb\u8fd9\u4e2a\u5143\u7d20\u6240\u6709\u7684\u5b50\u5143\u7d20\r\n        console.log(node.children); //\u7c7b\u6570\u7ec4HTMLCollection(3)\xa0[h2, p, p]\r\n        // const children=Array.from(node.children);//\u5c06\u7c7b\u6570\u7ec4\u8f6c\u4e3a\u6570\u7ec4[h2, p, p]\r\n        const children = [...node.children]; //\u5c06\u7c7b\u6570\u7ec4\u8f6c\u4e3a\u6570\u7ec4[h2, p, p]\r\n        // console.log(children);\r\n        // \u4f7f\u7528\u6b63\u5219\uff0c\u6765\u5339\u914d\u662f\u5426\u6709\u53cc\u5927\u62ec\u53f7\r\n        const reg = /\\{\\{(.*)\\}\\}/;\r\n\r\n        // \u904d\u5386\u6570\u7ec4\r\n        children.forEach((child) => {\r\n          // \u5224\u65ad\u6807\u7b7e\u4e2d\u662f\u5426\u6709\u53cc\u5927\u62ec\u53f7\r\n          if (reg.test(child.textContent)) {\r\n            // child.textContent\u662f\u83b7\u53d6\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\r\n            // console.log(child.textContent);//{{ a }}  {{ b }}\r\n            child.innerHTML = data[RegExp.$1.trim()];\r\n          }\r\n        });\r\n      };\r\n      compile(document.querySelector("#app")); //\u8c03\u7528\u6307\u4ee4\u89e3\u6790\u5668\u51fd\u6570\uff0c\u4f20\u5165\u4e00\u4e2a\u8282\u70b9\uff08\u610f\u601d\u5c31\u662f\u89e3\u6790\u8282\u70b9\u91cc\u9762\u7684\u6307\u4ee4\uff09\r\n\r\n      // 2.\u6570\u636e\u76d1\u542c\u5668(\u6570\u636e\u6539\u53d8\u8fdb\u884c\u76d1\u542c)\r\n      // observe\u51fd\u6570\u662f\u4e00\u4e2a\u6570\u636e\u76d1\u542c\u5668\uff0c\u5728\u51fd\u6570\u91cc\u9762\u76d1\u542cObject.defineProperty\u51fd\u6570\u52ab\u6301\u5230\u7684\u5c5e\u6027\r\n      const observer = (data, item, value) => {\r\n        Object.defineProperty(data, item, {\r\n          get() {\r\n            return value;\r\n          },\r\n          set(val) {\r\n            // get\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570val,\u8868\u793a\u6539\u53d8\u7684\u503c\r\n            console.log(item + "\u7684\u503c\u4ece" + value + "\u53d8\u6210\u4e86" + val);\r\n            value = val;\r\n            compile(document.querySelector("#app"));//\u6570\u636e\u6539\u53d8\uff0c\u91cd\u65b0\u8c03\u7528\u6307\u4ee4\u89e3\u6790\u5668\u8fdb\u884c\u6e32\u67d3\r\n          },\r\n        });\r\n      };\r\n      Object.keys(data).forEach((item) => {\r\n        // \u904d\u5386\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\r\n        observer(data, item, data[item]);\r\n        //\u8c03\u7528observer\u51fd\u6570\uff0c\r\n        // \u7b2c\u4e00\u4e2a\u53c2\u6570\u662fobj\u5bf9\u8c61\r\n        // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\r\n        // \u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u5bf9\u8c61\u7684\u5c5e\u6027\u503c\r\n      });\r\n\r\n    //   setTimeout(() => {\r\n    //     data.a = 10;\r\n    //   }, 2000);\r\n    button.onclick = () => {\r\n        data.b = 20;\r\n      };\r\n    <\/script>\r\n  </body>\r\n</html>\r\n\n'})}),"\n",(0,t.jsxs)(r.h2,{id:"\u4e09\u79cd\u6ca1\u6709\u54cd\u5e94\u5f0f\u7684\u60c5\u51b5set-forceupdate",children:["\u4e09\u79cd\u6ca1\u6709\u54cd\u5e94\u5f0f\u7684\u60c5\u51b5",(0,t.jsx)(r.code,{children:"$set"})," ",(0,t.jsx)(r.code,{children:"$forceUpdate"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:'<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r\n    <title>Document</title>\r\n  </head>\r\n  <body>\r\n    <div id="app">\r\n      <p>{{ arr }}</p>\r\n      <p>{{ obj }}</p>\r\n      <button @click="fn">btn</button>\r\n    </div>\r\n\r\n    <script src="../../Vue.js"><\/script>\r\n    <script>\r\n      /*\r\n        \u4e09\u79cd\u60c5\u51b5\u4e0bvue\u4f1a\u6ca1\u6709\u54cd\u5e94\u5f0f\r\n          1. \u76f4\u63a5\u6539\u53d8\u6570\u7ec4\u957f\u5ea6\r\n          2. \u901a\u8fc7\u7d22\u5f15\u53bb\u6539\u53d8\u6570\u7ec4\u9879\r\n          3. \u5728\u5bf9\u8c61\u91cc\u9762\u6302\u8f7d\u65b0\u5c5e\u6027\r\n      */\r\n      new Vue({\r\n        el: "#app",\r\n        data: {\r\n          arr: [1, 2, 3, 4],\r\n          obj: {\r\n            a: 3,\r\n            b: 4,\r\n          },\r\n        },\r\n        methods:{\r\n            fn(){\r\n                // this.arr.length=2;\r\n                // \u4f7f\u7528\u6d45\u62f7\u8d1d\u7684\u65b9\u6cd5\r\n                // this.arr=[...this.arr];\r\n                // this.arr=[].concat(this.arr);\r\n                // \u5f3a\u5236\u66f4\u65b0\r\n                // this.$forceUpdate();\r\n                // this.arr.splice(2);\r\n\r\n                // this.arr[1]=10;\r\n                // this.arr=[...this.arr];\r\n                // this.arr=[].concat(this.arr);\r\n                // this.$forceUpdate();\r\n                // this.$set(this.arr,1,10);\r\n\r\n                // this.obj.c=5;\r\n                // this.obj={...this.obj};\r\n                // this.obj=Object.assign({},this.obj);\r\n                // this.$forceUpdate();\r\n                this.$set(this.obj,"c",5);\r\n\r\n            }\r\n        }\r\n      });\r\n    <\/script>\r\n  </body>\r\n</html>\r\n\n'})})]})}function p(n={}){const{wrapper:r}={...(0,o.R)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,r,e)=>{e.d(r,{R:()=>i,x:()=>a});var t=e(96540);const o={},c=t.createContext(o);function i(n){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function a(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),t.createElement(c.Provider,{value:r},n.children)}}}]);