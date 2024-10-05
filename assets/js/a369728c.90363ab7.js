"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[2396],{9461:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var i=r(74848),c=r(28453);const t={},s=void 0,l={id:"React/Fiber\u67b6\u6784",title:"Fiber\u67b6\u6784",description:"\u4e00\u3001\u95ee\u9898",source:"@site/docs/React/Fiber\u67b6\u6784.md",sourceDirName:"React",slug:"/React/Fiber\u67b6\u6784",permalink:"/docs/React/Fiber\u67b6\u6784",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactSidebar",previous:{title:"react\u6587\u6863",permalink:"/docs/React/react\u6587\u6863"},next:{title:"Fiber\u7b97\u6cd5",permalink:"/docs/React/Fiber\u7b97\u6cd5"}},d={},a=[{value:"\u4e00\u3001\u95ee\u9898",id:"\u4e00\u95ee\u9898",level:2},{value:"\u4e8c\u3001\u662f\u4ec0\u4e48",id:"\u4e8c\u662f\u4ec0\u4e48",level:2},{value:"\u4e09\u3001\u5982\u4f55\u89e3\u51b3",id:"\u4e09\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u4e00\u95ee\u9898",children:"\u4e00\u3001\u95ee\u9898"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JavaScript "}),"\u5f15\u64ce\u548c\u9875\u9762\u6e32\u67d3\u5f15\u64ce\u4e24\u4e2a\u7ebf\u7a0b\u662f\u4e92\u65a5\u7684\uff0c\u5f53\u5176\u4e2d\u4e00\u4e2a\u7ebf\u7a0b\u6267\u884c\u65f6\uff0c\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u53ea\u80fd\u6302\u8d77\u7b49\u5f85"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c ",(0,i.jsx)(n.code,{children:"JavaScript"})," \u7ebf\u7a0b\u957f\u65f6\u95f4\u5730\u5360\u7528\u4e86\u4e3b\u7ebf\u7a0b\uff0c\u90a3\u4e48\u6e32\u67d3\u5c42\u9762\u7684\u66f4\u65b0\u5c31\u4e0d\u5f97\u4e0d\u957f\u65f6\u95f4\u5730\u7b49\u5f85\uff0c\u754c\u9762\u957f\u65f6\u95f4\u4e0d\u66f4\u65b0\uff0c\u4f1a\u5bfc\u81f4\u9875\u9762\u54cd\u5e94\u5ea6\u53d8\u5dee\uff0c\u7528\u6237\u53ef\u80fd\u4f1a\u611f\u89c9\u5230\u5361\u987f"]}),"\n",(0,i.jsxs)(n.p,{children:["\u800c\u8fd9\u4e5f\u6b63\u662f ",(0,i.jsx)(n.code,{children:"React 15"})," \u7684 ",(0,i.jsx)(n.code,{children:"Stack Reconciler "}),"\u6240\u9762\u4e34\u7684\u95ee\u9898\uff0c\u5f53 ",(0,i.jsx)(n.code,{children:"React "}),"\u5728\u6e32\u67d3\u7ec4\u4ef6\u65f6\uff0c\u4ece\u5f00\u59cb\u5230\u6e32\u67d3\u5b8c\u6210\u6574\u4e2a\u8fc7\u7a0b\u662f\u4e00\u6c14\u5475\u6210\u7684\uff0c\u65e0\u6cd5\u4e2d\u65ad"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u7ec4\u4ef6\u8f83\u5927\uff0c\u90a3\u4e48",(0,i.jsx)(n.code,{children:"js"}),"\u7ebf\u7a0b\u4f1a\u4e00\u76f4\u6267\u884c\uff0c\u7136\u540e\u7b49\u5230\u6574\u68f5",(0,i.jsx)(n.code,{children:"VDOM"}),"\u6811\u8ba1\u7b97\u5b8c\u6210\u540e\uff0c\u624d\u4f1a\u4ea4\u7ed9\u6e32\u67d3\u7684\u7ebf\u7a0b"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u5c31\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u7528\u6237\u4ea4\u4e92\u3001\u52a8\u753b\u7b49\u4efb\u52a1\u65e0\u6cd5\u7acb\u5373\u5f97\u5230\u5904\u7406\uff0c\u5bfc\u81f4\u5361\u987f\u7684\u60c5\u51b5"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://static.vue-js.com/5eb3a850-ed24-11eb-ab90-d9ae814b240d.png",alt:""})}),"\n",(0,i.jsx)(n.h2,{id:"\u4e8c\u662f\u4ec0\u4e48",children:"\u4e8c\u3001\u662f\u4ec0\u4e48"}),"\n",(0,i.jsx)(n.p,{children:"React Fiber \u662f Facebook \u82b1\u8d39\u4e24\u5e74\u4f59\u65f6\u95f4\u5bf9 React \u505a\u51fa\u7684\u4e00\u4e2a\u91cd\u5927\u6539\u53d8\u4e0e\u4f18\u5316\uff0c\u662f\u5bf9 React \u6838\u5fc3\u7b97\u6cd5\u7684\u4e00\u6b21\u91cd\u65b0\u5b9e\u73b0\u3002\u4ece Facebook \u5728 React Conf 2017 \u4f1a\u8bae\u4e0a\u786e\u8ba4\uff0cReact Fiber \u5728 React 16 \u7248\u672c\u53d1\u5e03"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.code,{children:"react"}),"\u4e2d\uff0c\u4e3b\u8981\u505a\u4e86\u4ee5\u4e0b\u7684\u64cd\u4f5c\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e3a\u6bcf\u4e2a\u589e\u52a0\u4e86\u4f18\u5148\u7ea7\uff0c\u4f18\u5148\u7ea7\u9ad8\u7684\u4efb\u52a1\u53ef\u4ee5\u4e2d\u65ad\u4f4e\u4f18\u5148\u7ea7\u7684\u4efb\u52a1\u3002\u7136\u540e\u518d\u91cd\u65b0\uff0c\u6ce8\u610f\u662f\u91cd\u65b0\u6267\u884c\u4f18\u5148\u7ea7\u4f4e\u7684\u4efb\u52a1"}),"\n",(0,i.jsx)(n.li,{children:"\u589e\u52a0\u4e86\u5f02\u6b65\u4efb\u52a1\uff0c\u8c03\u7528 requestIdleCallback api\uff0c\u6d4f\u89c8\u5668\u7a7a\u95f2\u7684\u65f6\u5019\u6267\u884c"}),"\n",(0,i.jsx)(n.li,{children:"dom diff \u6811\u53d8\u6210\u4e86\u94fe\u8868\uff0c\u4e00\u4e2a dom \u5bf9\u5e94\u4e24\u4e2a fiber\uff08\u4e00\u4e2a\u94fe\u8868\uff09\uff0c\u5bf9\u5e94\u4e24\u4e2a\u961f\u5217\uff0c\u8fd9\u90fd\u662f\u4e3a\u627e\u5230\u88ab\u4e2d\u65ad\u7684\u4efb\u52a1\uff0c\u91cd\u65b0\u6267\u884c"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ece\u67b6\u6784\u89d2\u5ea6\u6765\u770b\uff0c",(0,i.jsx)(n.code,{children:"Fiber"})," \u662f\u5bf9 ",(0,i.jsx)(n.code,{children:"React "}),"\u6838\u5fc3\u7b97\u6cd5\uff08\u5373\u8c03\u548c\u8fc7\u7a0b\uff09\u7684\u91cd\u5199"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ece\u7f16\u7801\u89d2\u5ea6\u6765\u770b\uff0c",(0,i.jsx)(n.code,{children:"Fiber "}),"\u662f ",(0,i.jsx)(n.code,{children:"React "}),"\u5185\u90e8\u6240\u5b9a\u4e49\u7684\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u662f ",(0,i.jsx)(n.code,{children:"Fiber "}),"\u6811\u7ed3\u6784\u7684\u8282\u70b9\u5355\u4f4d\uff0c\u4e5f\u5c31\u662f ",(0,i.jsx)(n.code,{children:"React 16"})," \u65b0\u67b6\u6784\u4e0b\u7684\u865a\u62df",(0,i.jsx)(n.code,{children:"DOM"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"fiber "}),"\u5c31\u662f\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"JavaScript "}),"\u5bf9\u8c61\uff0c\u5305\u542b\u4e86\u5143\u7d20\u7684\u4fe1\u606f\u3001\u8be5\u5143\u7d20\u7684\u66f4\u65b0\u64cd\u4f5c\u961f\u5217\u3001\u7c7b\u578b\uff0c\u5176\u6570\u636e\u7ed3\u6784\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"type Fiber = {\r\n  // \u7528\u4e8e\u6807\u8bb0fiber\u7684WorkTag\u7c7b\u578b\uff0c\u4e3b\u8981\u8868\u793a\u5f53\u524dfiber\u4ee3\u8868\u7684\u7ec4\u4ef6\u7c7b\u578b\u5982FunctionComponent\u3001ClassComponent\u7b49\r\n  tag: WorkTag,\r\n  // ReactElement\u91cc\u9762\u7684key\r\n  key: null | string,\r\n  // ReactElement.type\uff0c\u8c03\u7528`createElement`\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\r\n  elementType: any,\r\n  // The resolved function/class/ associated with this fiber.\r\n  // \u8868\u793a\u5f53\u524d\u4ee3\u8868\u7684\u8282\u70b9\u7c7b\u578b\r\n  type: any,\r\n  // \u8868\u793a\u5f53\u524dFiberNode\u5bf9\u5e94\u7684element\u7ec4\u4ef6\u5b9e\u4f8b\r\n  stateNode: any,\r\n\r\n  // \u6307\u5411\u4ed6\u5728Fiber\u8282\u70b9\u6811\u4e2d\u7684`parent`\uff0c\u7528\u6765\u5728\u5904\u7406\u5b8c\u8fd9\u4e2a\u8282\u70b9\u4e4b\u540e\u5411\u4e0a\u8fd4\u56de\r\n  return: Fiber | null,\r\n  // \u6307\u5411\u81ea\u5df1\u7684\u7b2c\u4e00\u4e2a\u5b50\u8282\u70b9\r\n  child: Fiber | null,\r\n  // \u6307\u5411\u81ea\u5df1\u7684\u5144\u5f1f\u7ed3\u6784\uff0c\u5144\u5f1f\u8282\u70b9\u7684return\u6307\u5411\u540c\u4e00\u4e2a\u7236\u8282\u70b9\r\n  sibling: Fiber | null,\r\n  index: number,\r\n\r\n  ref: null | (((handle: mixed) => void) & { _stringRef: ?string }) | RefObject,\r\n\r\n  // \u5f53\u524d\u5904\u7406\u8fc7\u7a0b\u4e2d\u7684\u7ec4\u4ef6props\u5bf9\u8c61\r\n  pendingProps: any,\r\n  // \u4e0a\u4e00\u6b21\u6e32\u67d3\u5b8c\u6210\u4e4b\u540e\u7684props\r\n  memoizedProps: any,\r\n\r\n  // \u8be5Fiber\u5bf9\u5e94\u7684\u7ec4\u4ef6\u4ea7\u751f\u7684Update\u4f1a\u5b58\u653e\u5728\u8fd9\u4e2a\u961f\u5217\u91cc\u9762\r\n  updateQueue: UpdateQueue<any> | null,\r\n\r\n  // \u4e0a\u4e00\u6b21\u6e32\u67d3\u7684\u65f6\u5019\u7684state\r\n  memoizedState: any,\r\n\r\n  // \u4e00\u4e2a\u5217\u8868\uff0c\u5b58\u653e\u8fd9\u4e2aFiber\u4f9d\u8d56\u7684context\r\n  firstContextDependency: ContextDependency<mixed> | null,\r\n\r\n  mode: TypeOfMode,\r\n\r\n  // Effect\r\n  // \u7528\u6765\u8bb0\u5f55Side Effect\r\n  effectTag: SideEffectTag,\r\n\r\n  // \u5355\u94fe\u8868\u7528\u6765\u5feb\u901f\u67e5\u627e\u4e0b\u4e00\u4e2aside effect\r\n  nextEffect: Fiber | null,\r\n\r\n  // \u5b50\u6811\u4e2d\u7b2c\u4e00\u4e2aside effect\r\n  firstEffect: Fiber | null,\r\n  // \u5b50\u6811\u4e2d\u6700\u540e\u4e00\u4e2aside effect\r\n  lastEffect: Fiber | null,\r\n\r\n  // \u4ee3\u8868\u4efb\u52a1\u5728\u672a\u6765\u7684\u54ea\u4e2a\u65f6\u95f4\u70b9\u5e94\u8be5\u88ab\u5b8c\u6210\uff0c\u4e4b\u540e\u7248\u672c\u6539\u540d\u4e3a lanes\r\n  expirationTime: ExpirationTime,\r\n\r\n  // \u5feb\u901f\u786e\u5b9a\u5b50\u6811\u4e2d\u662f\u5426\u6709\u4e0d\u5728\u7b49\u5f85\u7684\u53d8\u5316\r\n  childExpirationTime: ExpirationTime,\r\n\r\n  // fiber\u7684\u7248\u672c\u6c60\uff0c\u5373\u8bb0\u5f55fiber\u66f4\u65b0\u8fc7\u7a0b\uff0c\u4fbf\u4e8e\u6062\u590d\r\n  alternate: Fiber | null,\r\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4e09\u5982\u4f55\u89e3\u51b3",children:"\u4e09\u3001\u5982\u4f55\u89e3\u51b3"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Fiber"}),"\u628a\u6e32\u67d3\u66f4\u65b0\u8fc7\u7a0b\u62c6\u5206\u6210\u591a\u4e2a\u5b50\u4efb\u52a1\uff0c\u6bcf\u6b21\u53ea\u505a\u4e00\u5c0f\u90e8\u5206\uff0c\u505a\u5b8c\u770b\u662f\u5426\u8fd8\u6709\u5269\u4f59\u65f6\u95f4\uff0c\u5982\u679c\u6709\u7ee7\u7eed\u4e0b\u4e00\u4e2a\u4efb\u52a1\uff1b\u5982\u679c\u6ca1\u6709\uff0c\u6302\u8d77\u5f53\u524d\u4efb\u52a1\uff0c\u5c06\u65f6\u95f4\u63a7\u5236\u6743\u4ea4\u7ed9\u4e3b\u7ebf\u7a0b\uff0c\u7b49\u4e3b\u7ebf\u7a0b\u4e0d\u5fd9\u7684\u65f6\u5019\u5728\u7ee7\u7eed\u6267\u884c"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5373\u53ef\u4ee5\u4e2d\u65ad\u4e0e\u6062\u590d\uff0c\u6062\u590d\u540e\u4e5f\u53ef\u4ee5\u590d\u7528\u4e4b\u524d\u7684\u4e2d\u95f4\u72b6\u6001\uff0c\u5e76\u7ed9\u4e0d\u540c\u7684\u4efb\u52a1\u8d4b\u4e88\u4e0d\u540c\u7684\u4f18\u5148\u7ea7\uff0c\u5176\u4e2d\u6bcf\u4e2a\u4efb\u52a1\u66f4\u65b0\u5355\u5143\u4e3a ",(0,i.jsx)(n.code,{children:"React Element"})," \u5bf9\u5e94\u7684 ",(0,i.jsx)(n.code,{children:"Fiber "}),"\u8282\u70b9"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5b9e\u73b0\u7684\u4e0a\u8ff0\u65b9\u5f0f\u7684\u662f",(0,i.jsx)(n.code,{children:"requestIdleCallback"}),"\u65b9\u6cd5"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"window.requestIdleCallback()"}),"\u65b9\u6cd5\u5c06\u5728\u6d4f\u89c8\u5668\u7684\u7a7a\u95f2\u65f6\u6bb5\u5185\u8c03\u7528\u7684\u51fd\u6570\u6392\u961f\u3002\u8fd9\u4f7f\u5f00\u53d1\u8005\u80fd\u591f\u5728\u4e3b\u4e8b\u4ef6\u5faa\u73af\u4e0a\u6267\u884c\u540e\u53f0\u548c\u4f4e\u4f18\u5148\u7ea7\u5de5\u4f5c\uff0c\u800c\u4e0d\u4f1a\u5f71\u54cd\u5ef6\u8fdf\u5173\u952e\u4e8b\u4ef6\uff0c\u5982\u52a8\u753b\u548c\u8f93\u5165\u54cd\u5e94"]}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148 React \u4e2d\u4efb\u52a1\u5207\u5272\u4e3a\u591a\u4e2a\u6b65\u9aa4\uff0c\u5206\u6279\u5b8c\u6210\u3002\u5728\u5b8c\u6210\u4e00\u90e8\u5206\u4efb\u52a1\u4e4b\u540e\uff0c\u5c06\u63a7\u5236\u6743\u4ea4\u56de\u7ed9\u6d4f\u89c8\u5668\uff0c\u8ba9\u6d4f\u89c8\u5668\u6709\u65f6\u95f4\u518d\u8fdb\u884c\u9875\u9762\u7684\u6e32\u67d3\u3002\u7b49\u6d4f\u89c8\u5668\u5fd9\u5b8c\u4e4b\u540e\u6709\u5269\u4f59\u65f6\u95f4\uff0c\u518d\u7ee7\u7eed\u4e4b\u524d React \u672a\u5b8c\u6210\u7684\u4efb\u52a1\uff0c\u662f\u4e00\u79cd\u5408\u4f5c\u5f0f\u8c03\u5ea6\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u5b9e\u73b0\u8fc7\u7a0b\u662f\u57fa\u4e8e ",(0,i.jsx)(n.code,{children:"Fiber "}),"\u8282\u70b9\u5b9e\u73b0\uff0c\u4f5c\u4e3a\u9759\u6001\u7684\u6570\u636e\u7ed3\u6784\u6765\u8bf4\uff0c\u6bcf\u4e2a ",(0,i.jsx)(n.code,{children:"Fiber"})," \u8282\u70b9\u5bf9\u5e94\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"React element"}),"\uff0c\u4fdd\u5b58\u4e86\u8be5\u7ec4\u4ef6\u7684\u7c7b\u578b\uff08\u51fd\u6570\u7ec4\u4ef6/\u7c7b\u7ec4\u4ef6/\u539f\u751f\u7ec4\u4ef6\u7b49\u7b49\uff09\u3001\u5bf9\u5e94\u7684 DOM \u8282\u70b9\u7b49\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f5c\u4e3a\u52a8\u6001\u7684\u5de5\u4f5c\u5355\u5143\u6765\u8bf4\uff0c\u6bcf\u4e2a ",(0,i.jsx)(n.code,{children:"Fiber"})," \u8282\u70b9\u4fdd\u5b58\u4e86\u672c\u6b21\u66f4\u65b0\u4e2d\u8be5\u7ec4\u4ef6\u6539\u53d8\u7684\u72b6\u6001\u3001\u8981\u6267\u884c\u7684\u5de5\u4f5c\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6bcf\u4e2a Fiber \u8282\u70b9\u6709\u4e2a\u5bf9\u5e94\u7684 ",(0,i.jsx)(n.code,{children:"React element"}),"\uff0c\u591a\u4e2a ",(0,i.jsx)(n.code,{children:"Fiber "}),"\u8282\u70b9\u6839\u636e\u5982\u4e0b\u4e09\u4e2a\u5c5e\u6027\u6784\u5efa\u4e00\u9897\u6811\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// \u6307\u5411\u7236\u7ea7Fiber\u8282\u70b9\r\nthis.return = null;\r\n// \u6307\u5411\u5b50Fiber\u8282\u70b9\r\nthis.child = null;\r\n// \u6307\u5411\u53f3\u8fb9\u7b2c\u4e00\u4e2a\u5144\u5f1fFiber\u8282\u70b9\r\nthis.sibling = null;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u4e9b\u5c5e\u6027\u5c31\u80fd\u627e\u5230\u4e0b\u4e00\u4e2a\u6267\u884c\u76ee\u6807"}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://juejin.cn/post/6926432527980691470",children:"https://juejin.cn/post/6926432527980691470"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/137234573",children:"https://zhuanlan.zhihu.com/p/137234573"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vue3js.cn/interview",children:"https://vue3js.cn/interview"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var i=r(96540);const c={},t=i.createContext(c);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);