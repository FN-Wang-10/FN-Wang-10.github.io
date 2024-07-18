"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[25267],{44118:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var l=i(74848),s=i(28453);const r={tags:["\u5b89\u5168","\u653b\u51fb","XSS","CSRF","SQL\u6ce8\u5165"]},c=void 0,d={id:"JavaScript/web\u5e38\u89c1\u7684\u653b\u51fb\u65b9\u5f0f\u6709\u54ea\u4e9b",title:"web\u5e38\u89c1\u7684\u653b\u51fb\u65b9\u5f0f\u6709\u54ea\u4e9b",description:"\u4e00\u3001\u662f\u4ec0\u4e48",source:"@site/docs/JavaScript/web\u5e38\u89c1\u7684\u653b\u51fb\u65b9\u5f0f\u6709\u54ea\u4e9b.md",sourceDirName:"JavaScript",slug:"/JavaScript/web\u5e38\u89c1\u7684\u653b\u51fb\u65b9\u5f0f\u6709\u54ea\u4e9b",permalink:"/docs/JavaScript/web\u5e38\u89c1\u7684\u653b\u51fb\u65b9\u5f0f\u6709\u54ea\u4e9b",draft:!1,unlisted:!1,tags:[{inline:!0,label:"\u5b89\u5168",permalink:"/docs/tags/\u5b89\u5168"},{inline:!0,label:"\u653b\u51fb",permalink:"/docs/tags/\u653b\u51fb"},{inline:!0,label:"XSS",permalink:"/docs/tags/xss"},{inline:!0,label:"CSRF",permalink:"/docs/tags/csrf"},{inline:!0,label:"SQL\u6ce8\u5165",permalink:"/docs/tags/sql\u6ce8\u5165"}],version:"current",frontMatter:{tags:["\u5b89\u5168","\u653b\u51fb","XSS","CSRF","SQL\u6ce8\u5165"]},sidebar:"javascriptSidebar",previous:{title:"require\u548cimport\u7684\u533a\u522b",permalink:"/docs/JavaScript/require\u548cimport\u7684\u533a\u522b"},next:{title:"\u4e8b\u4ef6",permalink:"/docs/JavaScript/\u4e8b\u4ef6/"}},h={},t=[{value:"\u4e00\u3001\u662f\u4ec0\u4e48",id:"\u4e00\u662f\u4ec0\u4e48",level:2},{value:"\u4e8c\u3001XSS",id:"\u4e8cxss",level:2},{value:"\u5b58\u50a8\u578b",id:"\u5b58\u50a8\u578b",level:3},{value:"\u53cd\u5c04\u578b XSS",id:"\u53cd\u5c04\u578b-xss",level:3},{value:"DOM \u578b XSS",id:"dom-\u578b-xss",level:3},{value:"XSS \u7684\u9884\u9632",id:"xss-\u7684\u9884\u9632",level:3},{value:"\u4e09\u3001CSRF",id:"\u4e09csrf",level:2},{value:"CSRF \u7684\u7279\u70b9",id:"csrf-\u7684\u7279\u70b9",level:3},{value:"CSRF \u7684\u9884\u9632",id:"csrf-\u7684\u9884\u9632",level:3},{value:"\u56db\u3001SQL \u6ce8\u5165",id:"\u56dbsql-\u6ce8\u5165",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u4e00\u662f\u4ec0\u4e48",children:"\u4e00\u3001\u662f\u4ec0\u4e48"}),"\n",(0,l.jsx)(n.p,{children:"Web \u653b\u51fb\uff08WebAttack\uff09\u662f\u9488\u5bf9\u7528\u6237\u4e0a\u7f51\u884c\u4e3a\u6216\u7f51\u7ad9\u670d\u52a1\u5668\u7b49\u8bbe\u5907\u8fdb\u884c\u653b\u51fb\u7684\u884c\u4e3a"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u690d\u5165\u6076\u610f\u4ee3\u7801\uff0c\u4fee\u6539\u7f51\u7ad9\u6743\u9650\uff0c\u83b7\u53d6\u7f51\u7ad9\u7528\u6237\u9690\u79c1\u4fe1\u606f\u7b49\u7b49"}),"\n",(0,l.jsx)(n.p,{children:"Web \u5e94\u7528\u7a0b\u5e8f\u7684\u5b89\u5168\u6027\u662f\u4efb\u4f55\u57fa\u4e8e Web \u4e1a\u52a1\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206"}),"\n",(0,l.jsx)(n.p,{children:"\u786e\u4fdd Web \u5e94\u7528\u7a0b\u5e8f\u5b89\u5168\u5341\u5206\u91cd\u8981\uff0c\u5373\u4f7f\u662f\u4ee3\u7801\u4e2d\u5f88\u5c0f\u7684 bug \u4e5f\u6709\u53ef\u80fd\u5bfc\u81f4\u9690\u79c1\u4fe1\u606f\u88ab\u6cc4\u9732"}),"\n",(0,l.jsx)(n.p,{children:"\u7ad9\u70b9\u5b89\u5168\u5c31\u662f\u4e3a\u4fdd\u62a4\u7ad9\u70b9\u4e0d\u53d7\u672a\u6388\u6743\u7684\u8bbf\u95ee\u3001\u4f7f\u7528\u3001\u4fee\u6539\u548c\u7834\u574f\u800c\u91c7\u53d6\u7684\u884c\u4e3a\u6216\u5b9e\u8df5"}),"\n",(0,l.jsx)(n.p,{children:"\u6211\u4eec\u5e38\u89c1\u7684 Web \u653b\u51fb\u65b9\u5f0f\u6709"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"XSS (Cross Site Scripting) \u8de8\u7ad9\u811a\u672c\u653b\u51fb"}),"\n",(0,l.jsx)(n.li,{children:"CSRF\uff08Cross-site request forgery\uff09\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020"}),"\n",(0,l.jsx)(n.li,{children:"SQL \u6ce8\u5165\u653b\u51fb"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4e8cxss",children:"\u4e8c\u3001XSS"}),"\n",(0,l.jsx)(n.p,{children:"XSS\uff0c\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff0c\u5141\u8bb8\u653b\u51fb\u8005\u5c06\u6076\u610f\u4ee3\u7801\u690d\u5165\u5230\u63d0\u4f9b\u7ed9\u5176\u5b83\u7528\u6237\u4f7f\u7528\u7684\u9875\u9762\u4e2d"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"XSS"}),"\u6d89\u53ca\u5230\u4e09\u65b9\uff0c\u5373\u653b\u51fb\u8005\u3001\u5ba2\u6237\u7aef\u4e0e",(0,l.jsx)(n.code,{children:"Web"}),"\u5e94\u7528"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"XSS"}),"\u7684\u653b\u51fb\u76ee\u6807\u662f\u4e3a\u4e86\u76d7\u53d6\u5b58\u50a8\u5728\u5ba2\u6237\u7aef\u7684",(0,l.jsx)(n.code,{children:"cookie"}),"\u6216\u8005\u5176\u4ed6\u7f51\u7ad9\u7528\u4e8e\u8bc6\u522b\u5ba2\u6237\u7aef\u8eab\u4efd\u7684\u654f\u611f\u4fe1\u606f\u3002\u4e00\u65e6\u83b7\u53d6\u5230\u5408\u6cd5\u7528\u6237\u7684\u4fe1\u606f\u540e\uff0c\u653b\u51fb\u8005\u751a\u81f3\u53ef\u4ee5\u5047\u5192\u5408\u6cd5\u7528\u6237\u4e0e\u7f51\u7ad9\u8fdb\u884c\u4ea4\u4e92"]}),"\n",(0,l.jsx)(n.p,{children:"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e00\u4e2a\u641c\u7d22\u9875\u9762\uff0c\u6839\u636e",(0,l.jsx)(n.code,{children:"url"}),"\u53c2\u6570\u51b3\u5b9a\u5173\u952e\u8bcd\u7684\u5185\u5bb9"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<input type="text" value="<%= getParameter("keyword") %>">\r\n<button>\u641c\u7d22</button>\r\n<div>\u60a8\u641c\u7d22\u7684\u5173\u952e\u8bcd\u662f\uff1a<%= getParameter("keyword") %></div>\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u91cc\u770b\u4f3c\u5e76\u6ca1\u6709\u95ee\u9898\uff0c\u4f46\u662f\u5982\u679c\u4e0d\u6309\u5957\u8def\u51fa\u724c\u5462\uff1f"}),"\n",(0,l.jsxs)(n.p,{children:["\u7528\u6237\u8f93\u5165",(0,l.jsx)(n.code,{children:"\"><script>alert('XSS');<\/script>"}),"\uff0c\u62fc\u63a5\u5230 HTML \u4e2d\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668\u3002\u5f62\u6210\u4e86\u5982\u4e0b\u7684 HTML\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<input type="text" value="" />\r\n<script>\r\n  alert(\'XSS\');\r\n<\/script>\r\n">\r\n<button>\u641c\u7d22</button>\r\n<div>\r\n  \u60a8\u641c\u7d22\u7684\u5173\u952e\u8bcd\u662f\uff1a">\r\n  <script>\r\n    alert(\'XSS\');\r\n  <\/script>\r\n</div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u6d4f\u89c8\u5668\u65e0\u6cd5\u5206\u8fa8\u51fa ",(0,l.jsx)(n.code,{children:"<script>alert('XSS');<\/script>"})," \u662f\u6076\u610f\u4ee3\u7801\uff0c\u56e0\u800c\u5c06\u5176\u6267\u884c\uff0c\u8bd5\u60f3\u4e00\u4e0b\uff0c\u5982\u679c\u662f\u83b7\u53d6",(0,l.jsx)(n.code,{children:"cookie"}),"\u53d1\u9001\u5bf9\u9ed1\u5ba2\u670d\u52a1\u5668\u5462\uff1f"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6839\u636e\u653b\u51fb\u7684\u6765\u6e90\uff0c",(0,l.jsx)(n.code,{children:"XSS"}),"\u653b\u51fb\u53ef\u4ee5\u5206\u6210\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5b58\u50a8\u578b"}),"\n",(0,l.jsx)(n.li,{children:"\u53cd\u5c04\u578b"}),"\n",(0,l.jsx)(n.li,{children:"DOM \u578b"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5b58\u50a8\u578b",children:"\u5b58\u50a8\u578b"}),"\n",(0,l.jsx)(n.p,{children:"\u5b58\u50a8\u578b XSS \u7684\u653b\u51fb\u6b65\u9aa4\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u653b\u51fb\u8005\u5c06\u6076\u610f\u4ee3\u7801\u63d0\u4ea4\u5230\u76ee\u6807\u7f51\u7ad9\u7684\u6570\u636e\u5e93\u4e2d"}),"\n",(0,l.jsx)(n.li,{children:"\u7528\u6237\u6253\u5f00\u76ee\u6807\u7f51\u7ad9\u65f6\uff0c\u7f51\u7ad9\u670d\u52a1\u7aef\u5c06\u6076\u610f\u4ee3\u7801\u4ece\u6570\u636e\u5e93\u53d6\u51fa\uff0c\u62fc\u63a5\u5728 HTML \u4e2d\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668"}),"\n",(0,l.jsx)(n.li,{children:"\u7528\u6237\u6d4f\u89c8\u5668\u63a5\u6536\u5230\u54cd\u5e94\u540e\u89e3\u6790\u6267\u884c\uff0c\u6df7\u5728\u5176\u4e2d\u7684\u6076\u610f\u4ee3\u7801\u4e5f\u88ab\u6267\u884c"}),"\n",(0,l.jsx)(n.li,{children:"\u6076\u610f\u4ee3\u7801\u7a83\u53d6\u7528\u6237\u6570\u636e\u5e76\u53d1\u9001\u5230\u653b\u51fb\u8005\u7684\u7f51\u7ad9\uff0c\u6216\u8005\u5192\u5145\u7528\u6237\u7684\u884c\u4e3a\uff0c\u8c03\u7528\u76ee\u6807\u7f51\u7ad9\u63a5\u53e3\u6267\u884c\u653b\u51fb\u8005\u6307\u5b9a\u7684\u64cd\u4f5c"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u79cd\u653b\u51fb\u5e38\u89c1\u4e8e\u5e26\u6709\u7528\u6237\u4fdd\u5b58\u6570\u636e\u7684\u7f51\u7ad9\u529f\u80fd\uff0c\u5982\u8bba\u575b\u53d1\u5e16\u3001\u5546\u54c1\u8bc4\u8bba\u3001\u7528\u6237\u79c1\u4fe1\u7b49"}),"\n",(0,l.jsx)(n.h3,{id:"\u53cd\u5c04\u578b-xss",children:"\u53cd\u5c04\u578b XSS"}),"\n",(0,l.jsx)(n.p,{children:"\u53cd\u5c04\u578b XSS \u7684\u653b\u51fb\u6b65\u9aa4\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u653b\u51fb\u8005\u6784\u9020\u51fa\u7279\u6b8a\u7684 URL\uff0c\u5176\u4e2d\u5305\u542b\u6076\u610f\u4ee3\u7801"}),"\n",(0,l.jsx)(n.li,{children:"\u7528\u6237\u6253\u5f00\u5e26\u6709\u6076\u610f\u4ee3\u7801\u7684 URL \u65f6\uff0c\u7f51\u7ad9\u670d\u52a1\u7aef\u5c06\u6076\u610f\u4ee3\u7801\u4ece URL \u4e2d\u53d6\u51fa\uff0c\u62fc\u63a5\u5728 HTML \u4e2d\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668"}),"\n",(0,l.jsx)(n.li,{children:"\u7528\u6237\u6d4f\u89c8\u5668\u63a5\u6536\u5230\u54cd\u5e94\u540e\u89e3\u6790\u6267\u884c\uff0c\u6df7\u5728\u5176\u4e2d\u7684\u6076\u610f\u4ee3\u7801\u4e5f\u88ab\u6267\u884c"}),"\n",(0,l.jsx)(n.li,{children:"\u6076\u610f\u4ee3\u7801\u7a83\u53d6\u7528\u6237\u6570\u636e\u5e76\u53d1\u9001\u5230\u653b\u51fb\u8005\u7684\u7f51\u7ad9\uff0c\u6216\u8005\u5192\u5145\u7528\u6237\u7684\u884c\u4e3a\uff0c\u8c03\u7528\u76ee\u6807\u7f51\u7ad9\u63a5\u53e3\u6267\u884c\u653b\u51fb\u8005\u6307\u5b9a\u7684\u64cd\u4f5c"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u53cd\u5c04\u578b XSS \u8ddf\u5b58\u50a8\u578b XSS \u7684\u533a\u522b\u662f\uff1a\u5b58\u50a8\u578b XSS \u7684\u6076\u610f\u4ee3\u7801\u5b58\u5728\u6570\u636e\u5e93\u91cc\uff0c\u53cd\u5c04\u578b XSS \u7684\u6076\u610f\u4ee3\u7801\u5b58\u5728 URL \u91cc\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u53cd\u5c04\u578b XSS \u6f0f\u6d1e\u5e38\u89c1\u4e8e\u901a\u8fc7 URL \u4f20\u9012\u53c2\u6570\u7684\u529f\u80fd\uff0c\u5982\u7f51\u7ad9\u641c\u7d22\u3001\u8df3\u8f6c\u7b49\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7531\u4e8e\u9700\u8981\u7528\u6237\u4e3b\u52a8\u6253\u5f00\u6076\u610f\u7684 URL \u624d\u80fd\u751f\u6548\uff0c\u653b\u51fb\u8005\u5f80\u5f80\u4f1a\u7ed3\u5408\u591a\u79cd\u624b\u6bb5\u8bf1\u5bfc\u7528\u6237\u70b9\u51fb\u3002"}),"\n",(0,l.jsx)(n.p,{children:"POST \u7684\u5185\u5bb9\u4e5f\u53ef\u4ee5\u89e6\u53d1\u53cd\u5c04\u578b XSS\uff0c\u53ea\u4e0d\u8fc7\u5176\u89e6\u53d1\u6761\u4ef6\u6bd4\u8f83\u82db\u523b\uff08\u9700\u8981\u6784\u9020\u8868\u5355\u63d0\u4ea4\u9875\u9762\uff0c\u5e76\u5f15\u5bfc\u7528\u6237\u70b9\u51fb\uff09\uff0c\u6240\u4ee5\u975e\u5e38\u5c11\u89c1"}),"\n",(0,l.jsx)(n.h3,{id:"dom-\u578b-xss",children:"DOM \u578b XSS"}),"\n",(0,l.jsx)(n.p,{children:"DOM \u578b XSS \u7684\u653b\u51fb\u6b65\u9aa4\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u653b\u51fb\u8005\u6784\u9020\u51fa\u7279\u6b8a\u7684 URL\uff0c\u5176\u4e2d\u5305\u542b\u6076\u610f\u4ee3\u7801"}),"\n",(0,l.jsx)(n.li,{children:"\u7528\u6237\u6253\u5f00\u5e26\u6709\u6076\u610f\u4ee3\u7801\u7684 URL"}),"\n",(0,l.jsx)(n.li,{children:"\u7528\u6237\u6d4f\u89c8\u5668\u63a5\u6536\u5230\u54cd\u5e94\u540e\u89e3\u6790\u6267\u884c\uff0c\u524d\u7aef JavaScript \u53d6\u51fa URL \u4e2d\u7684\u6076\u610f\u4ee3\u7801\u5e76\u6267\u884c"}),"\n",(0,l.jsx)(n.li,{children:"\u6076\u610f\u4ee3\u7801\u7a83\u53d6\u7528\u6237\u6570\u636e\u5e76\u53d1\u9001\u5230\u653b\u51fb\u8005\u7684\u7f51\u7ad9\uff0c\u6216\u8005\u5192\u5145\u7528\u6237\u7684\u884c\u4e3a\uff0c\u8c03\u7528\u76ee\u6807\u7f51\u7ad9\u63a5\u53e3\u6267\u884c\u653b\u51fb\u8005\u6307\u5b9a\u7684\u64cd\u4f5c"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"DOM \u578b XSS \u8ddf\u524d\u4e24\u79cd XSS \u7684\u533a\u522b\uff1aDOM \u578b XSS \u653b\u51fb\u4e2d\uff0c\u53d6\u51fa\u548c\u6267\u884c\u6076\u610f\u4ee3\u7801\u7531\u6d4f\u89c8\u5668\u7aef\u5b8c\u6210\uff0c\u5c5e\u4e8e\u524d\u7aef JavaScript \u81ea\u8eab\u7684\u5b89\u5168\u6f0f\u6d1e\uff0c\u800c\u5176\u4ed6\u4e24\u79cd XSS \u90fd\u5c5e\u4e8e\u670d\u52a1\u7aef\u7684\u5b89\u5168\u6f0f\u6d1e"}),"\n",(0,l.jsx)(n.h3,{id:"xss-\u7684\u9884\u9632",children:"XSS \u7684\u9884\u9632"}),"\n",(0,l.jsxs)(n.p,{children:["\u901a\u8fc7\u524d\u9762\u4ecb\u7ecd\uff0c\u770b\u5230",(0,l.jsx)(n.code,{children:"XSS"}),"\u653b\u51fb\u7684\u4e24\u5927\u8981\u7d20\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u653b\u51fb\u8005\u63d0\u4ea4\u800c\u6076\u610f\u4ee3\u7801"}),"\n",(0,l.jsx)(n.li,{children:"\u6d4f\u89c8\u5668\u6267\u884c\u6076\u610f\u4ee3\u7801"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u9488\u5bf9\u7b2c\u4e00\u4e2a\u8981\u7d20\uff0c\u6211\u4eec\u5728\u7528\u6237\u8f93\u5165\u7684\u8fc7\u7a0b\u4e2d\uff0c\u8fc7\u6ee4\u6389\u7528\u6237\u8f93\u5165\u7684\u6076\u52a3\u4ee3\u7801\uff0c\u7136\u540e\u63d0\u4ea4\u7ed9\u540e\u7aef\uff0c\u4f46\u662f\u5982\u679c\u653b\u51fb\u8005\u7ed5\u5f00\u524d\u7aef\u8bf7\u6c42\uff0c\u76f4\u63a5\u6784\u9020\u8bf7\u6c42\u5c31\u4e0d\u80fd\u9884\u9632\u4e86"}),"\n",(0,l.jsx)(n.p,{children:"\u800c\u5982\u679c\u5728\u540e\u7aef\u5199\u5165\u6570\u636e\u5e93\u524d\uff0c\u5bf9\u8f93\u5165\u8fdb\u884c\u8fc7\u6ee4\uff0c\u7136\u540e\u628a\u5185\u5bb9\u7ed9\u524d\u7aef\uff0c\u4f46\u662f\u8fd9\u4e2a\u5185\u5bb9\u5728\u4e0d\u540c\u5730\u65b9\u5c31\u4f1a\u6709\u4e0d\u540c\u663e\u793a"}),"\n",(0,l.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e00\u4e2a\u6b63\u5e38\u7684\u7528\u6237\u8f93\u5165\u4e86 ",(0,l.jsx)(n.code,{children:"5 < 7"})," \u8fd9\u4e2a\u5185\u5bb9\uff0c\u5728\u5199\u5165\u6570\u636e\u5e93\u524d\uff0c\u88ab\u8f6c\u4e49\uff0c\u53d8\u6210\u4e86 ",(0,l.jsx)(n.code,{children:"5 < 7"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u5ba2\u6237\u7aef\u4e2d\uff0c\u4e00\u65e6\u7ecf\u8fc7\u4e86 ",(0,l.jsx)(n.code,{children:"escapeHTML()"}),"\uff0c\u5ba2\u6237\u7aef\u663e\u793a\u7684\u5185\u5bb9\u5c31\u53d8\u6210\u4e86\u4e71\u7801( ",(0,l.jsx)(n.code,{children:"5 < 7"})," )"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u524d\u7aef\u4e2d\uff0c\u4e0d\u540c\u7684\u4f4d\u7f6e\u6240\u9700\u7684\u7f16\u7801\u4e5f\u4e0d\u540c\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5f53 ",(0,l.jsx)(n.code,{children:"5 < 7"})," \u4f5c\u4e3a HTML \u62fc\u63a5\u9875\u9762\u65f6\uff0c\u53ef\u4ee5\u6b63\u5e38\u663e\u793a\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<div title="comment">5 &lt; 7</div>\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5f53 ",(0,l.jsx)(n.code,{children:"5 < 7"})," \u901a\u8fc7 Ajax \u8fd4\u56de\uff0c\u7136\u540e\u8d4b\u503c\u7ed9 JavaScript \u7684\u53d8\u91cf\u65f6\uff0c\u524d\u7aef\u5f97\u5230\u7684\u5b57\u7b26\u4e32\u5c31\u662f\u8f6c\u4e49\u540e\u7684\u5b57\u7b26\u3002\u8fd9\u4e2a\u5185\u5bb9\u4e0d\u80fd\u76f4\u63a5\u7528\u4e8e Vue \u7b49\u6a21\u677f\u7684\u5c55\u793a\uff0c\u4e5f\u4e0d\u80fd\u76f4\u63a5\u7528\u4e8e\u5185\u5bb9\u957f\u5ea6\u8ba1\u7b97\u3002\u4e0d\u80fd\u7528\u4e8e\u6807\u9898\u3001alert \u7b49"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u8fc7\u6ee4\u5e76\u975e\u53ef\u9760\u7684\uff0c\u4e0b\u9762\u5c31\u8981\u901a\u8fc7\u9632\u6b62\u6d4f\u89c8\u5668\u6267\u884c\u6076\u610f\u4ee3\u7801\uff1a"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:".innerHTML"}),"\u3001",(0,l.jsx)(n.code,{children:".outerHTML"}),"\u3001",(0,l.jsx)(n.code,{children:"document.write()"})," \u65f6\u8981\u7279\u522b\u5c0f\u5fc3\uff0c\u4e0d\u8981\u628a\u4e0d\u53ef\u4fe1\u7684\u6570\u636e\u4f5c\u4e3a HTML \u63d2\u5230\u9875\u9762\u4e0a\uff0c\u800c\u5e94\u5c3d\u91cf\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:".textContent"}),"\u3001",(0,l.jsx)(n.code,{children:".setAttribute()"})," \u7b49"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u7528 ",(0,l.jsx)(n.code,{children:"Vue/React"})," \u6280\u672f\u6808\uff0c\u5e76\u4e14\u4e0d\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"v-html"}),"/",(0,l.jsx)(n.code,{children:"dangerouslySetInnerHTML"})," \u529f\u80fd\uff0c\u5c31\u5728\u524d\u7aef ",(0,l.jsx)(n.code,{children:"render"})," \u9636\u6bb5\u907f\u514d ",(0,l.jsx)(n.code,{children:"innerHTML"}),"\u3001",(0,l.jsx)(n.code,{children:"outerHTML"})," \u7684 XSS \u9690\u60a3"]}),"\n",(0,l.jsxs)(n.p,{children:["DOM \u4e2d\u7684\u5185\u8054\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u5982 ",(0,l.jsx)(n.code,{children:"location"}),"\u3001",(0,l.jsx)(n.code,{children:"onclick"}),"\u3001",(0,l.jsx)(n.code,{children:"onerror"}),"\u3001",(0,l.jsx)(n.code,{children:"onload"}),"\u3001",(0,l.jsx)(n.code,{children:"onmouseover"})," \u7b49\uff0c",(0,l.jsx)(n.code,{children:"<a>"})," \u6807\u7b7e\u7684 ",(0,l.jsx)(n.code,{children:"href"})," \u5c5e\u6027\uff0cJavaScript \u7684 ",(0,l.jsx)(n.code,{children:"eval()"}),"\u3001",(0,l.jsx)(n.code,{children:"setTimeout()"}),"\u3001",(0,l.jsx)(n.code,{children:"setInterval()"})," \u7b49\uff0c\u90fd\u80fd\u628a\u5b57\u7b26\u4e32\u4f5c\u4e3a\u4ee3\u7801\u8fd0\u884c\u3002\u5982\u679c\u4e0d\u53ef\u4fe1\u7684\u6570\u636e\u62fc\u63a5\u5230\u5b57\u7b26\u4e32\u4e2d\u4f20\u9012\u7ed9\u8fd9\u4e9b API\uff0c\u5f88\u5bb9\u6613\u4ea7\u751f\u5b89\u5168\u9690\u60a3\uff0c\u8bf7\u52a1\u5fc5\u907f\u514d"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'\x3c!-- \u94fe\u63a5\u5185\u5305\u542b\u6076\u610f\u4ee3\u7801 --\x3e\r\n< a href=" ">1</ a>\r\n\r\n<script>\r\n// setTimeout()/setInterval() \u4e2d\u8c03\u7528\u6076\u610f\u4ee3\u7801\r\nsetTimeout("UNTRUSTED")\r\nsetInterval("UNTRUSTED")\r\n\r\n// location \u8c03\u7528\u6076\u610f\u4ee3\u7801\r\nlocation.href = \'UNTRUSTED\'\r\n\r\n// eval() \u4e2d\u8c03\u7528\u6076\u610f\u4ee3\u7801\r\neval("UNTRUSTED")\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u4e09csrf",children:"\u4e09\u3001CSRF"}),"\n",(0,l.jsx)(n.p,{children:"CSRF\uff08Cross-site request forgery\uff09\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\uff1a\u653b\u51fb\u8005\u8bf1\u5bfc\u53d7\u5bb3\u8005\u8fdb\u5165\u7b2c\u4e09\u65b9\u7f51\u7ad9\uff0c\u5728\u7b2c\u4e09\u65b9\u7f51\u7ad9\u4e2d\uff0c\u5411\u88ab\u653b\u51fb\u7f51\u7ad9\u53d1\u9001\u8de8\u7ad9\u8bf7\u6c42"}),"\n",(0,l.jsx)(n.p,{children:"\u5229\u7528\u53d7\u5bb3\u8005\u5728\u88ab\u653b\u51fb\u7f51\u7ad9\u5df2\u7ecf\u83b7\u53d6\u7684\u6ce8\u518c\u51ed\u8bc1\uff0c\u7ed5\u8fc7\u540e\u53f0\u7684\u7528\u6237\u9a8c\u8bc1\uff0c\u8fbe\u5230\u5192\u5145\u7528\u6237\u5bf9\u88ab\u653b\u51fb\u7684\u7f51\u7ad9\u6267\u884c\u67d0\u9879\u64cd\u4f5c\u7684\u76ee"}),"\n",(0,l.jsx)(n.p,{children:"\u4e00\u4e2a\u5178\u578b\u7684 CSRF \u653b\u51fb\u6709\u7740\u5982\u4e0b\u7684\u6d41\u7a0b\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u53d7\u5bb3\u8005\u767b\u5f55 a.com\uff0c\u5e76\u4fdd\u7559\u4e86\u767b\u5f55\u51ed\u8bc1\uff08Cookie\uff09"}),"\n",(0,l.jsx)(n.li,{children:"\u653b\u51fb\u8005\u5f15\u8bf1\u53d7\u5bb3\u8005\u8bbf\u95ee\u4e86 b.com"}),"\n",(0,l.jsx)(n.li,{children:"b.com \u5411 a.com \u53d1\u9001\u4e86\u4e00\u4e2a\u8bf7\u6c42\uff1aa.com/act=xx\u3002\u6d4f\u89c8\u5668\u4f1a\u9ed8\u8ba4\u643a\u5e26 a.com \u7684 Cookie"}),"\n",(0,l.jsx)(n.li,{children:"a.com \u63a5\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u5bf9\u8bf7\u6c42\u8fdb\u884c\u9a8c\u8bc1\uff0c\u5e76\u786e\u8ba4\u662f\u53d7\u5bb3\u8005\u7684\u51ed\u8bc1\uff0c\u8bef\u4ee5\u4e3a\u662f\u53d7\u5bb3\u8005\u81ea\u5df1\u53d1\u9001\u7684\u8bf7\u6c42"}),"\n",(0,l.jsx)(n.li,{children:"a.com \u4ee5\u53d7\u5bb3\u8005\u7684\u540d\u4e49\u6267\u884c\u4e86 act=xx"}),"\n",(0,l.jsx)(n.li,{children:"\u653b\u51fb\u5b8c\u6210\uff0c\u653b\u51fb\u8005\u5728\u53d7\u5bb3\u8005\u4e0d\u77e5\u60c5\u7684\u60c5\u51b5\u4e0b\uff0c\u5192\u5145\u53d7\u5bb3\u8005\uff0c\u8ba9 a.com \u6267\u884c\u4e86\u81ea\u5df1\u5b9a\u4e49\u7684\u64cd\u4f5c"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"csrf"}),"\u53ef\u4ee5\u901a\u8fc7",(0,l.jsx)(n.code,{children:"get"}),"\u8bf7\u6c42\uff0c\u5373\u901a\u8fc7\u8bbf\u95ee",(0,l.jsx)(n.code,{children:"img"}),"\u7684\u9875\u9762\u540e\uff0c\u6d4f\u89c8\u5668\u81ea\u52a8\u8bbf\u95ee\u76ee\u6807\u5730\u5740\uff0c\u53d1\u9001\u8bf7\u6c42"]}),"\n",(0,l.jsxs)(n.p,{children:["\u540c\u6837\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u81ea\u52a8\u63d0\u4ea4\u7684\u8868\u5355\u53d1\u9001",(0,l.jsx)(n.code,{children:"post"}),"\u8bf7\u6c42\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'<form action="http://bank.example/withdraw" method=POST>\r\n    <input type="hidden" name="account" value="xiaoming" />\r\n    <input type="hidden" name="amount" value="10000" />\r\n    <input type="hidden" name="for" value="hacker" />\r\n</form>\r\n<script> document.forms[0].submit(); <\/script>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u8bbf\u95ee\u8be5\u9875\u9762\u540e\uff0c\u8868\u5355\u4f1a\u81ea\u52a8\u63d0\u4ea4\uff0c\u76f8\u5f53\u4e8e\u6a21\u62df\u7528\u6237\u5b8c\u6210\u4e86\u4e00\u6b21",(0,l.jsx)(n.code,{children:"POST"}),"\u64cd\u4f5c"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd8\u6709\u4e00\u79cd\u4e3a\u4f7f\u7528",(0,l.jsx)(n.code,{children:"a"}),"\u6807\u7b7e\u7684\uff0c\u9700\u8981\u7528\u6237\u70b9\u51fb\u94fe\u63a5\u624d\u4f1a\u89e6\u53d1"]}),"\n",(0,l.jsx)(n.p,{children:"\u8bbf\u95ee\u8be5\u9875\u9762\u540e\uff0c\u8868\u5355\u4f1a\u81ea\u52a8\u63d0\u4ea4\uff0c\u76f8\u5f53\u4e8e\u6a21\u62df\u7528\u6237\u5b8c\u6210\u4e86\u4e00\u6b21 POST \u64cd\u4f5c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'< a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker"\r\ntaget="_blank"> \u91cd\u78c5\u6d88\u606f\uff01\uff01 <a />\n'})}),"\n",(0,l.jsx)(n.h3,{id:"csrf-\u7684\u7279\u70b9",children:"CSRF \u7684\u7279\u70b9"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u653b\u51fb\u4e00\u822c\u53d1\u8d77\u5728\u7b2c\u4e09\u65b9\u7f51\u7ad9\uff0c\u800c\u4e0d\u662f\u88ab\u653b\u51fb\u7684\u7f51\u7ad9\u3002\u88ab\u653b\u51fb\u7684\u7f51\u7ad9\u65e0\u6cd5\u9632\u6b62\u653b\u51fb\u53d1\u751f"}),"\n",(0,l.jsx)(n.li,{children:"\u653b\u51fb\u5229\u7528\u53d7\u5bb3\u8005\u5728\u88ab\u653b\u51fb\u7f51\u7ad9\u7684\u767b\u5f55\u51ed\u8bc1\uff0c\u5192\u5145\u53d7\u5bb3\u8005\u63d0\u4ea4\u64cd\u4f5c\uff1b\u800c\u4e0d\u662f\u76f4\u63a5\u7a83\u53d6\u6570\u636e"}),"\n",(0,l.jsx)(n.li,{children:"\u6574\u4e2a\u8fc7\u7a0b\u653b\u51fb\u8005\u5e76\u4e0d\u80fd\u83b7\u53d6\u5230\u53d7\u5bb3\u8005\u7684\u767b\u5f55\u51ed\u8bc1\uff0c\u4ec5\u4ec5\u662f\u201c\u5192\u7528\u201d"}),"\n",(0,l.jsx)(n.li,{children:"\u8de8\u7ad9\u8bf7\u6c42\u53ef\u4ee5\u7528\u5404\u79cd\u65b9\u5f0f\uff1a\u56fe\u7247 URL\u3001\u8d85\u94fe\u63a5\u3001CORS\u3001Form \u63d0\u4ea4\u7b49\u7b49\u3002\u90e8\u5206\u8bf7\u6c42\u65b9\u5f0f\u53ef\u4ee5\u76f4\u63a5\u5d4c\u5165\u5728\u7b2c\u4e09\u65b9\u8bba\u575b\u3001\u6587\u7ae0\u4e2d\uff0c\u96be\u4ee5\u8fdb\u884c\u8ffd\u8e2a"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"csrf-\u7684\u9884\u9632",children:"CSRF \u7684\u9884\u9632"}),"\n",(0,l.jsx)(n.p,{children:"CSRF \u901a\u5e38\u4ece\u7b2c\u4e09\u65b9\u7f51\u7ad9\u53d1\u8d77\uff0c\u88ab\u653b\u51fb\u7684\u7f51\u7ad9\u65e0\u6cd5\u9632\u6b62\u653b\u51fb\u53d1\u751f\uff0c\u53ea\u80fd\u901a\u8fc7\u589e\u5f3a\u81ea\u5df1\u7f51\u7ad9\u9488\u5bf9 CSRF \u7684\u9632\u62a4\u80fd\u529b\u6765\u63d0\u5347\u5b89\u5168\u6027"}),"\n",(0,l.jsxs)(n.p,{children:["\u9632\u6b62",(0,l.jsx)(n.code,{children:"csrf"}),"\u5e38\u7528\u65b9\u6848\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u963b\u6b62\u4e0d\u660e\u5916\u57df\u7684\u8bbf\u95ee","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u540c\u6e90\u68c0\u6d4b"}),"\n",(0,l.jsx)(n.li,{children:"Samesite Cookie"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u63d0\u4ea4\u65f6\u8981\u6c42\u9644\u52a0\u672c\u57df\u624d\u80fd\u83b7\u53d6\u7684\u4fe1\u606f","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"CSRF Token"}),"\n",(0,l.jsx)(n.li,{children:"\u53cc\u91cd Cookie \u9a8c\u8bc1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd9\u91cc\u4e3b\u8981\u8bb2\u8bb2",(0,l.jsx)(n.code,{children:"token"}),"\u8fd9\u79cd\u5f62\u5f0f\uff0c\u6d41\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7528\u6237\u6253\u5f00\u9875\u9762\u7684\u65f6\u5019\uff0c\u670d\u52a1\u5668\u9700\u8981\u7ed9\u8fd9\u4e2a\u7528\u6237\u751f\u6210\u4e00\u4e2a Token"}),"\n",(0,l.jsx)(n.li,{children:"\u5bf9\u4e8e GET \u8bf7\u6c42\uff0cToken \u5c06\u9644\u5728\u8bf7\u6c42\u5730\u5740\u4e4b\u540e\u3002\u5bf9\u4e8e POST \u8bf7\u6c42\u6765\u8bf4\uff0c\u8981\u5728 form \u7684\u6700\u540e\u52a0\u4e0a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<input type="\u201dhidden\u201d" name="\u201dcsrftoken\u201d" value="\u201dtokenvalue\u201d" />\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5f53\u7528\u6237\u4ece\u5ba2\u6237\u7aef\u5f97\u5230\u4e86 Token\uff0c\u518d\u6b21\u63d0\u4ea4\u7ed9\u670d\u52a1\u5668\u7684\u65f6\u5019\uff0c\u670d\u52a1\u5668\u9700\u8981\u5224\u65ad Token \u7684\u6709\u6548\u6027"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u56dbsql-\u6ce8\u5165",children:"\u56db\u3001SQL \u6ce8\u5165"}),"\n",(0,l.jsxs)(n.p,{children:["Sql \u6ce8\u5165\u653b\u51fb\uff0c\u662f\u901a\u8fc7\u5c06\u6076\u610f\u7684 ",(0,l.jsx)(n.code,{children:"Sql "}),"\u67e5\u8be2\u6216\u6dfb\u52a0\u8bed\u53e5\u63d2\u5165\u5230\u5e94\u7528\u7684\u8f93\u5165\u53c2\u6570\u4e2d\uff0c\u518d\u5728\u540e\u53f0 ",(0,l.jsx)(n.code,{children:"Sql "}),"\u670d\u52a1\u5668\u4e0a\u89e3\u6790\u6267\u884c\u8fdb\u884c\u7684\u653b\u51fb"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://static.vue-js.com/ead52fa0-8d1d-11eb-85f6-6fac77c0c9b3.png",alt:""})}),"\n",(0,l.jsx)(n.p,{children:"\u6d41\u7a0b\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u627e\u51fa SQL \u6f0f\u6d1e\u7684\u6ce8\u5165\u70b9"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5224\u65ad\u6570\u636e\u5e93\u7684\u7c7b\u578b\u4ee5\u53ca\u7248\u672c"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u731c\u89e3\u7528\u6237\u540d\u548c\u5bc6\u7801"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5229\u7528\u5de5\u5177\u67e5\u627e Web \u540e\u53f0\u7ba1\u7406\u5165\u53e3"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5165\u4fb5\u548c\u7834\u574f"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u9884\u9632\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e25\u683c\u68c0\u67e5\u8f93\u5165\u53d8\u91cf\u7684\u7c7b\u578b\u548c\u683c\u5f0f"}),"\n",(0,l.jsx)(n.li,{children:"\u8fc7\u6ee4\u548c\u8f6c\u4e49\u7279\u6b8a\u5b57\u7b26"}),"\n",(0,l.jsx)(n.li,{children:"\u5bf9\u8bbf\u95ee\u6570\u636e\u5e93\u7684 Web \u5e94\u7528\u7a0b\u5e8f\u91c7\u7528 Web \u5e94\u7528\u9632\u706b\u5899"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4e0a\u8ff0\u53ea\u662f\u5217\u4e3e\u4e86\u5e38\u89c1\u7684",(0,l.jsx)(n.code,{children:"web"}),"\u653b\u51fb\u65b9\u5f0f\uff0c\u5b9e\u9645\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u8fd8\u4f1a\u9047\u5230\u5f88\u591a\u5b89\u5168\u95ee\u9898\uff0c\u5bf9\u4e8e\u8fd9\u4e9b\u95ee\u9898\uff0c \u5207\u8bb0\u4e0d\u53ef\u5ffd\u89c6"]}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://tech.meituan.com/2018/09/27/fe-security.html",children:"https://tech.meituan.com/2018/09/27/fe-security.html"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/learn/Server-side/First_steps/Website_security",children:"https://developer.mozilla.org/zh-CN/docs/learn/Server-side/First_steps/Website_security"})}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var l=i(96540);const s={},r=l.createContext(s);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);