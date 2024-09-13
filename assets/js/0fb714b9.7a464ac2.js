"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[87840],{40487:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var i=n(74848),a=n(28453);const l={},c=void 0,s={id:"\u7b97\u6cd5\u548c\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u53bb\u91cd",title:"\u6570\u7ec4\u53bb\u91cd",description:"1.\u4f7f\u7528 ES6 Set",source:"@site/docs/\u7b97\u6cd5\u548c\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u53bb\u91cd.md",sourceDirName:"\u7b97\u6cd5\u548c\u6570\u636e\u7ed3\u6784",slug:"/\u7b97\u6cd5\u548c\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u53bb\u91cd",permalink:"/docs/\u7b97\u6cd5\u548c\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u53bb\u91cd",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"algorithmSidebar",previous:{title:"\u5e38\u89c1\u7684\u6392\u5e8f\u7b97\u6cd5\u6709\u54ea\u4e9b\uff1f\u533a\u522b\uff1f",permalink:"/docs/\u7b97\u6cd5\u548c\u6570\u636e\u7ed3\u6784/\u5e38\u89c1\u7684\u6392\u5e8f\u7b97\u6cd5\u6709\u54ea\u4e9b\uff1f\u533a\u522b\uff1f"},next:{title:"\u6570\u7ec4\u6241\u5e73\u5316",permalink:"/docs/\u7b97\u6cd5\u548c\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u6241\u5e73\u5316"}},t={},d=[{value:"1.\u4f7f\u7528 ES6 Set",id:"1\u4f7f\u7528-es6-set",level:3},{value:"2.\u4f7f\u7528 indexOf",id:"2\u4f7f\u7528-indexof",level:3},{value:"3.\u4f7f\u7528 lastIndexOf",id:"3\u4f7f\u7528-lastindexof",level:3},{value:"4.\u4f7f\u7528\u53cc\u91cd for \u5faa\u73af\u52a0 splice \u65b9\u6cd5",id:"4\u4f7f\u7528\u53cc\u91cd-for-\u5faa\u73af\u52a0-splice-\u65b9\u6cd5",level:3},{value:"5.\u4f7f\u7528 forEach \u548c includes \u65b9\u6cd5",id:"5\u4f7f\u7528-foreach-\u548c-includes-\u65b9\u6cd5",level:3},{value:"6.\u4f7f\u7528 filter \u548c includes \u65b9\u6cd5",id:"6\u4f7f\u7528-filter-\u548c-includes-\u65b9\u6cd5",level:3},{value:"filter indexOf",id:"filter-indexof",level:3},{value:"reduce",id:"reduce",level:3},{value:"\u5bf9\u8c61\u6570\u7ec4\u53bb\u91cd",id:"\u5bf9\u8c61\u6570\u7ec4\u53bb\u91cd",level:3}];function o(r){const e={code:"code",h3:"h3",pre:"pre",...(0,a.R)(),...r.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"1\u4f7f\u7528-es6-set",children:"1.\u4f7f\u7528 ES6 Set"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var arr = [1, 1, 4, 2, 2, 3, 3, 3, 6, 6, 6];\r\narr = Array.from(new Set(arr));\r\n[...new Set(arr)];\r\nconsole.log(arr); //[1, 4, 2, 3, 6]\n"})}),"\n",(0,i.jsx)(e.h3,{id:"2\u4f7f\u7528-indexof",children:"2.\u4f7f\u7528 indexOf"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"forEach + indexof;\r\nvar arr = [1, 1, 4, 2, 2, 3, 3, 3, 6, 6, 6];\r\nvar newArr = [];\r\narr.forEach((item) => {\r\n  newArr.indexOf(item) === -1 ? newArr.push(item) : '';\r\n});\r\nconsole.log(newArr); //[1, 4, 2, 3, 6]\n"})}),"\n",(0,i.jsx)(e.h3,{id:"3\u4f7f\u7528-lastindexof",children:"3.\u4f7f\u7528 lastIndexOf"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var arr = [1, 1, 4, 2, 2, 3, 3, 3, 6, 6, 6];\r\nvar newArr = [];\r\narr.forEach((item) => {\r\n  newArr.lastIndexOf(item) === -1 ? newArr.push(item) : '';\r\n});\r\nconsole.log(newArr); //[1, 4, 2, 3, 6]\n"})}),"\n",(0,i.jsx)(e.h3,{id:"4\u4f7f\u7528\u53cc\u91cd-for-\u5faa\u73af\u52a0-splice-\u65b9\u6cd5",children:"4.\u4f7f\u7528\u53cc\u91cd for \u5faa\u73af\u52a0 splice \u65b9\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var arr = [1, 1, 4, 2, 2, 3, 3, 3, 6, 6, 6];\r\nfor (var i = 0; i < arr.length; i++) {\r\n  for (var j = i + 1; j < arr.length; j++) {\r\n    if (arr[i] == arr[j]) {\r\n      arr.splice(j, 1);\r\n      j--;\r\n    }\r\n  }\r\n}\r\nconsole.log(arr); //[1, 4, 2, 3, 6]\n"})}),"\n",(0,i.jsx)(e.h3,{id:"5\u4f7f\u7528-foreach-\u548c-includes-\u65b9\u6cd5",children:"5.\u4f7f\u7528 forEach \u548c includes \u65b9\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var arr = [1, 1, 4, 2, 2, 3, 3, 3, 6, 6, 6];\r\nvar newArr = [];\r\narr.forEach((item) => {\r\n  newArr.includes(item) ? '' : newArr.push(item);\r\n});\r\nconsole.log(newArr); //[1, 4, 2, 3, 6]\n"})}),"\n",(0,i.jsx)(e.h3,{id:"6\u4f7f\u7528-filter-\u548c-includes-\u65b9\u6cd5",children:"6.\u4f7f\u7528 filter \u548c includes \u65b9\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var arr = [1, 1, 4, 2, 2, 3, 3, 3, 6, 6, 6];\r\nvar newArr = [];\r\narr.filter((item) => {\r\n  newArr.includes(item) ? '' : newArr.push(item);\r\n});\r\nconsole.log(newArr); //[1, 4, 2, 3, 6]\n"})}),"\n",(0,i.jsx)(e.h3,{id:"filter-indexof",children:"filter indexOf"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"let arr = [1, 1, 2, 2, 3, 3];\r\nlet newArr = arr.filter((item, index, list) => {\r\n  return list.indexOf(item) === index;\r\n});\n"})}),"\n",(0,i.jsx)(e.h3,{id:"reduce",children:"reduce"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"let arr = [1, 1, 2, 2, 3, 3];\r\nlet newArr = arr.reduce((pre, cur) => {\r\n  if (!pre.includes(cur)) {\r\n    pre.push(cur);\r\n  }\r\n  return pre;\r\n}, []);\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u5bf9\u8c61\u6570\u7ec4\u53bb\u91cd",children:"\u5bf9\u8c61\u6570\u7ec4\u53bb\u91cd"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"// \u8fd9\u79cd\u65b9\u6cd5\u9002\u7528\u4e8e\u5bf9\u8c61\u6709\u591a\u4e2a\u5c5e\u6027\u9700\u8981\u7ec4\u5408\u5224\u65ad\u7684\u60c5\u51b5\u3002\r\nlet objArr = [\r\n  { id: 1, name: 'Alice' },\r\n  { id: 1, name: 'Alice' }, // \u91cd\u590d\u9879\r\n  { id: 2, name: 'Bob' },\r\n  { id: 3, name: 'Charlie' },\r\n  { id: 3, name: 'Charlie' } // \u53c8\u4e00\u4e2a\u91cd\u590d\u9879\r\n];\r\n\r\nfunction deduplicateArray(arr) {\r\n  return arr.reduce((acc, curr) => {\r\n    if (!acc.some((item) => item.id === curr.id && item.name === curr.name)) {\r\n      acc.push(curr);\r\n    }\r\n    return acc;\r\n  }, []);\r\n}\r\n\r\nlet uniqueObjArr = deduplicateArray(objArr);\r\nconsole.log(uniqueObjArr);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"// \u8fd9\u79cd\u65b9\u6cd5\u901a\u8fc7\u952e\u503c\u5bf9\u5b58\u50a8\u5bf9\u8c61\uff0c\u4ee5\u67d0\u4e2a\u552f\u4e00\u6807\u8bc6\u4f5c\u4e3a\u952e\u3002\r\nlet objArr = [\r\n  { id: 1, name: 'Alice' },\r\n  { id: 1, name: 'Alice' }, // \u91cd\u590d\u9879\r\n  { id: 2, name: 'Bob' },\r\n  { id: 3, name: 'Charlie' },\r\n  { id: 3, name: 'Charlie' } // \u53c8\u4e00\u4e2a\u91cd\u590d\u9879\r\n];\r\n\r\nfunction deduplicateArray(arr) {\r\n  const map = new Map();\r\n  const result = [];\r\n\r\n  arr.forEach((obj) => {\r\n    if (!map.has(obj.id)) {\r\n      map.set(obj.id, obj);\r\n      result.push(obj);\r\n    }\r\n  });\r\n\r\n  return result;\r\n}\r\n\r\nlet uniqueObjArr = deduplicateArray(objArr);\r\nconsole.log(uniqueObjArr);\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"// \u8fd9\u79cd\u65b9\u6cd5\u9002\u7528\u4e8e\u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7 JSON \u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u6765\u8868\u793a\u7684\u60c5\u51b5\u3002\r\nlet objArr = [\r\n  { id: 1, name: 'Alice' },\r\n  { id: 1, name: 'Alice' }, // \u91cd\u590d\u9879\r\n  { id: 2, name: 'Bob' },\r\n  { id: 3, name: 'Charlie' },\r\n  { id: 3, name: 'Charlie' } // \u53c8\u4e00\u4e2a\u91cd\u590d\u9879\r\n];\r\n\r\nfunction deduplicateArray(arr) {\r\n  const seen = new Set();\r\n  const result = [];\r\n\r\n  arr.forEach((obj) => {\r\n    const str = JSON.stringify(obj);\r\n    if (!seen.has(str)) {\r\n      seen.add(str);\r\n      result.push(obj);\r\n    }\r\n  });\r\n\r\n  return result;\r\n}\r\n\r\nlet uniqueObjArr = deduplicateArray(objArr);\r\nconsole.log(uniqueObjArr);\n"})})]})}function u(r={}){const{wrapper:e}={...(0,a.R)(),...r.components};return e?(0,i.jsx)(e,{...r,children:(0,i.jsx)(o,{...r})}):o(r)}},28453:(r,e,n)=>{n.d(e,{R:()=>c,x:()=>s});var i=n(96540);const a={},l=i.createContext(a);function c(r){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function s(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(a):r.components||a:c(r.components),i.createElement(l.Provider,{value:e},r.children)}}}]);