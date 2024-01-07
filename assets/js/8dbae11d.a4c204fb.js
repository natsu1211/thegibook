"use strict";(self.webpackChunkthegibook=self.webpackChunkthegibook||[]).push([[138],{937:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(5893),t=n(1151);const a={title:"3.3.1 \u5206\u5757\u7740\u8272"},d=void 0,l={id:"shading/light-assignment/tiled-shading",title:"3.3.1 \u5206\u5757\u7740\u8272",description:"\u4f7f\u7528\u5168\u5c40\u7684\u5149\u6e90\u5217\u8868\u662f\u975e\u5e38\u4f4e\u6548\u7684\uff0c\u6211\u4eec\u4e5f\u4e0d\u53ef\u80fd\u9488\u5bf9\u6bcf\u4e2a\u53ef\u89c6\u7684\u8868\u9762\u70b9\u90fd\u6267\u884c\u5149\u6e90\u5206\u914d\u8ba1\u7b97\uff0c\u90a3\u6837\u5149\u6e90\u5206\u914d\u8ba1\u7b97\u672c\u8eab\u7684\u5f00\u652f\u90fd\u662f\u5f88\u5927\u7684\uff0c\u5e76\u4e14\u5149\u6e90\u5206\u914d\u7684\u7ed3\u679c\u9700\u8981\u66f4\u5927\u7684\u7f13\u5b58\u5bf9\u8c61\u6765\u5b58\u50a8\u3002\u76f8\u53cd\uff0c\u6211\u4eec\u627e\u5230\u4e00\u79cd\u6298\u4e2d\u7684\u65b9\u6cd5\uff0c\u5373\u8ba9\u4e00\u4e2a\u533a\u57df\u5185\u76f8\u90bb\u7684\u8868\u9762\u70b9\u5171\u4eab\u4e00\u4e2a\u5149\u6e90\u5217\u8868\uff0c\u8fd9\u6837\u505a\u7684\u539f\u56e0\u662f\u76f8\u90bb\u7684\u8868\u9762\u70b9\u4e00\u822c\u62e5\u6709\u76f8\u540c\u7684\u5149\u6e90\u5217\u8868\u3002",source:"@site/docs/3-shading/3-light-assignment/1-tiled-shading.md",sourceDirName:"3-shading/3-light-assignment",slug:"/shading/light-assignment/tiled-shading",permalink:"/docs/shading/light-assignment/tiled-shading",draft:!1,unlisted:!1,editUrl:"https://github.com/ElvisQin/thegibook/edit/master/website/docs/3-shading/3-light-assignment/1-tiled-shading.md",tags:[],version:"current",lastUpdatedBy:"Chunlin Qin",lastUpdatedAt:1704615761,formattedLastUpdatedAt:"Jan 7, 2024",sidebarPosition:1,frontMatter:{title:"3.3.1 \u5206\u5757\u7740\u8272"},sidebar:"tutorialSidebar",previous:{title:"3.3 \u5149\u6e90\u5206\u914d",permalink:"/docs/shading/light-assignment/"},next:{title:"3.3.2 \u5206\u7c07\u7740\u8272",permalink:"/docs/shading/light-assignment/clustered-shading"}},r={},c=[];function h(s){const e={annotation:"annotation",li:"li",math:"math",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",...(0,t.a)(),...s.components},{Figure:n}=e;return n||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Figure",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u5168\u5c40\u7684\u5149\u6e90\u5217\u8868\u662f\u975e\u5e38\u4f4e\u6548\u7684\uff0c\u6211\u4eec\u4e5f\u4e0d\u53ef\u80fd\u9488\u5bf9\u6bcf\u4e2a\u53ef\u89c6\u7684\u8868\u9762\u70b9\u90fd\u6267\u884c\u5149\u6e90\u5206\u914d\u8ba1\u7b97\uff0c\u90a3\u6837\u5149\u6e90\u5206\u914d\u8ba1\u7b97\u672c\u8eab\u7684\u5f00\u652f\u90fd\u662f\u5f88\u5927\u7684\uff0c\u5e76\u4e14\u5149\u6e90\u5206\u914d\u7684\u7ed3\u679c\u9700\u8981\u66f4\u5927\u7684\u7f13\u5b58\u5bf9\u8c61\u6765\u5b58\u50a8\u3002\u76f8\u53cd\uff0c\u6211\u4eec\u627e\u5230\u4e00\u79cd\u6298\u4e2d\u7684\u65b9\u6cd5\uff0c\u5373\u8ba9\u4e00\u4e2a\u533a\u57df\u5185\u76f8\u90bb\u7684\u8868\u9762\u70b9\u5171\u4eab\u4e00\u4e2a\u5149\u6e90\u5217\u8868\uff0c\u8fd9\u6837\u505a\u7684\u539f\u56e0\u662f\u76f8\u90bb\u7684\u8868\u9762\u70b9\u4e00\u822c\u62e5\u6709\u76f8\u540c\u7684\u5149\u6e90\u5217\u8868\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5206\u5757\u7740\u8272\uff08tiled shading\uff09\u5c06\u5c4f\u5e55\u533a\u5206\u5212\u5206\u4e3a\u7531\u591a\u4e2a\u5757\uff08tile\uff09\u7ec4\u6210\u7684\u7f51\u683c\uff08grid\uff09\uff0c\u6bcf\u4e2a\u5757\u8986\u76d6\u7684\u50cf\u7d20\u533a\u57df\uff08\u5f53\u7136\u4e5f\u53ef\u4ee5\u6839\u636e\u6027\u80fd\u5206\u6790\u9009\u62e9\u5176\u4ed6\u5c3a\u5bf8\u7684\u5757\uff0c\u672c\u4e66\u4ee5",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mn,{children:"32"}),(0,i.jsx)(e.mo,{children:"\xd7"}),(0,i.jsx)(e.mn,{children:"32"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"32\\times 32"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord",children:"32"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"32"})]})]})]}),"\u5757\u5927\u5c0f\u4e3a\u4f8b\u8ba8\u8bba\u3002\uff09\u4e3a",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mn,{children:"32"}),(0,i.jsx)(e.mo,{children:"\xd7"}),(0,i.jsx)(e.mn,{children:"32"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"32\\times 32"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord",children:"32"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"32"})]})]})]}),"\uff0c\u6bcf\u4e2a\u5757\u62e5\u6709\u4e00\u4e2a\u72ec\u7acb\u7684\u5149\u6e90\u5217\u8868\uff0c\u5b83\u8868\u793a\u8be5\u533a\u57df\u5185\u6240\u6709\u50cf\u7d20\u70b9\u53d7\u5f71\u54cd\u7684\u5149\u6e90\u5217\u8868\uff0c\u5757\u5185\u7684\u6240\u6709\u50cf\u7d20\u70b9\u5171\u4eab\u6574\u4e2a\u5149\u6e90\u5217\u8868\uff0c\u5982\u56fe\uff082\uff09\u6240\u793a\u3002"]}),"\n",(0,i.jsx)(n,{num:"1",id:"f:shade-tiled-grid",caption:"\u5206\u5757\u7740\u8272\u5757\u5149\u6e90\u5217\u8868\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5168\u5c40\u5149\u6e90\u5217\u8868\u5b58\u50a8\u7740\u6240\u6709\u5149\u6e90\u7684ID\uff0c\u5757\u5149\u6e90\u7d22\u5f15\u5217\u8868\u8fde\u7eed\u5730\u5b58\u50a8\u8fd9\u6bcf\u4e2a\u5757\u5bf9\u5e94\u7684\u6240\u6709\u5149\u6e90\u7684\u7d22\u5f15\u503c\uff0c\u8fd9\u6837\u6bcf\u4e2a\u5757\u901a\u8fc7\u4e00\u4e2a\u504f\u79fb\u503c\u548c\u5c3a\u5bf8\u5373\u53ef\u4ece\u5757\u5149\u6e90\u7d22\u5f15\u5217\u8868\u4e2d\u53d6\u51fa\u8be5\u5757\u7684\u5149\u6e90ID\u5217\u8868",children:(0,i.jsx)("img",{src:"/img/figures/shade/tile-grid",width:"24%"})}),"\n",(0,i.jsx)(e.p,{children:"\u5168\u5c4f\u5757\u8868\u683c\u7684\u6570\u636e\u7ed3\u6784\u5982\u56fe\uff081\uff09\u6240\u793a\uff0c\u6240\u6709\u5757\u5b58\u50a8\u4e3a\u4e00\u4e2a2D\u7eb9\u7406\uff0c\u5982\u56fe\uff081\uff09\u4e0b\u9762\u7684\u6b63\u65b9\u5f62\u8868\u683c\uff0c\u6bcf\u4e2a\u50cf\u7d20\u70b9\u53ef\u4ee5\u901a\u8fc7\u5728\u5c4f\u5e55\u533a\u57df\u7684\u50cf\u7d20\u4f4d\u7f6e\u6765\u8ba1\u7b97\u5176\u5757\u7d22\u5f15\uff0c\u6bcf\u4e2a\u5757\u5b58\u50a8\u4e24\u4e2a\u6570\u636e\uff1a\u504f\u79fb\u548c\u5c3a\u5bf8\uff0c\u6240\u6709\u5757\u7684\u5149\u6e90\u5217\u8868\u5b58\u50a8\u5728\u4e00\u4e2a\u5927\u7684\u5168\u5c40\u5149\u6e90\u7d22\u5f15\u5217\u8868\u4e2d\uff0c\u8be5\u7d22\u5f15\u5217\u8868\u4e2d\u7684\u6bcf\u4e2a\u503c\u6307\u5411\u5168\u5c40\u5149\u6e90\u5217\u8868\u7684\u4e00\u4e2a\u5149\u6e90\uff0c\u6bcf\u4e2a\u5757\u901a\u8fc7\u5728\u5168\u5c40\u5149\u6e90\u7d22\u5f15\u5217\u8868\u4e2d\u7684\u504f\u79fb\u503c\u548c\u5c3a\u5bf8\u6765\u9009\u62e9\u8be5\u5757\u5bf9\u5e94\u7684\u5149\u6e90\u5217\u8868\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5bf9\u4e8e\u5757\u8868\u683c\u7ed3\u6784\u6570\u636e\u7684\u586b\u5145\uff0c\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u5c06\u6bcf\u4e2a\u5149\u6e90\u7684\u5305\u56f4\u76d2\u77e9\u5f62\u6295\u5c04\u5230\u5c4f\u5e55\u4e0a\uff0c\u7136\u540e\u5728\u6bcf\u4e2a\u5757\u4e2d\u5206\u522b\u63d2\u5165\u53d7\u5176\u5f71\u54cd\u7684\u5149\u6e90\u7d22\u5f15\u5230\u5168\u5c40\u5149\u6e90\u7d22\u5f15\u5217\u8868\u4e2d\uff0c\u5e76\u4fee\u6539\u5757\u6570\u636e\u4e2d\u7684\u504f\u79fb\u548c\u7d22\u5f15\u503c\uff0c\u5982\u56fe\uff082\uff09\u6240\u793a\uff0c\u8be5\u573a\u666f\u5305\u542b\u4e24\u4e2a\u5149\u6e90\uff0c\u91cd\u53e0\u90e8\u5206\u7684\u5757\u7684\u5149\u6e90\u5217\u8868\u5c06\u5305\u542b\u4e24\u4e2a\u5149\u6e90\uff0c\u672a\u88ab\u5149\u6e90\u5305\u56f4\u76d2\u6295\u5c04\u7684\u5757\u5219\u4e0d\u5305\u542b\u4efb\u4f55\u5149\u6e90\uff08\u6ce8\u610f\u8fd9\u4e9b\u5757\u867d\u7136\u6ca1\u6709\u4efb\u4f55\u76f4\u63a5\u7684\u5149\u6e90\u7167\u5c04\uff0c\u5b83\u4ecd\u7136\u53ef\u80fd\u88ab\u73af\u5883\u5149\uff0c\u5929\u7a7a\u76d2\u7b49\u5176\u4ed6\u5f62\u5f0f\u7684\u5149\u6e90\u7167\u5c04\u3002\uff09\uff0c\u5176\u4ed6\u53d7\u5355\u4e2a\u5149\u6e90\u5f71\u54cd\u7684\u533a\u57df\u5305\u542b\u4e00\u4e2a\u5149\u6e90\u3002"}),"\n",(0,i.jsx)(n,{num:"2",id:"f:shade-tiled-shading",caption:"\u4f7f\u7528\u5c06\u5149\u6e90\u5305\u56f4\u76d2\u76f4\u63a5\u6295\u5c04\u5230\u5c4f\u5e55\u533a\u57df\u6765\u5efa\u7acb\u5757\u5149\u6e90\u5217\u8868\u7684\u6570\u636e\uff0c\u8fd9\u91cc\u7684\u6570\u5b57\u4ec5\u7528\u4e8e\u6f14\u793a\u8868\u793a\u5149\u6e90\u7684\u6570\u91cf\uff0c\u5b83\u7684\u771f\u5b9e\u6570\u636e\u7ed3\u6784\u5982\u56fe\\ref{f:shade-tiled-grid}\u6240\u793a",children:(0,i.jsx)("img",{src:"/img/figures/shade/tiled-shading.svg",width:"550"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u79cd\u65b9\u6cd5\u867d\u7136\u7b80\u5355\uff0c\u4f46\u662f\u5b83\u5728\u4e00\u4e9b\u5757\u4e2d\u63d2\u5165\u4e86\u65e0\u6548\u7684\u5149\u6e90\uff0c\u4f8b\u5982\u5728\u4e00\u4e2a\u70b9\u5149\u6e90\u7684\u56db\u4e2a\u89d2\u7684\u4f4d\u7f6e\uff0c\u6216\u8005\u8868\u9762\u70b9\u5728\u5782\u76f4\u4e8e\u5c4f\u5e55\u65b9\u5411\u4e0a\u8ddd\u79bb\u5149\u6e90\u4f4d\u7f6e\u5f88\u8fdc\uff0c\u4ece\u800c\u5176\u6839\u672c\u4e0d\u4f1a\u53d7\u5230\u8be5\u5149\u6e90\u5f71\u54cd\uff0c\u4f46\u662f\u5b83\u540c\u6837\u5904\u4e8e\u8be5\u5149\u6e90\u6295\u5c04\u7684\u533a\u57df\u3002\u4e00\u4e9b\u65b9\u6cd5\u4f7f\u7528\u6a21\u677f\u6d4b\u8bd5\uff0c\u7c7b\u4f3c\u9634\u5f71\u4f53\u79ef\uff08shadow volume\uff09\u7684\u65b9\u6cd5\u6765\u7cbe\u786e\u5730\u5173\u8054\u5149\u6e90\u4e0e\u5176\u5f71\u54cd\u7684\u5757\uff0c\u53e6\u4e00\u4e9b\u65b9\u6cd5\u7ed9\u8868\u9762\u70b9\u8bbe\u5b9a\u4e00\u4e2a\u6700\u8fd1\u548c\u6700\u8fdc\u53d7\u5149\u6e90\u5f71\u54cd\u7684\u8ddd\u79bb\uff0c\u6765\u6392\u9664\u4e00\u4e9b\u8ddd\u79bb\u6bd4\u8f83\u8fdc\u7684\u5149\u6e90\u7684\u5f71\u54cd\u3002\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u8282\u5206\u7c07\u7740\u8272\u4e2d\u8ba8\u8bba\u4e00\u4e2a\u66f4\u8be6\u7ec6\u7684\u793a\u4f8b\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5757\u6570\u636e\u7684\u5efa\u7acb\u53ef\u4ee5\u53d1\u751f\u5728GPU\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u5728CPU\u4e2d\u5904\u7406\uff0c\u4f8b\u5982Dice\u5728Battlefield 3[a",":SPU-basedDeferredShadingforBattlefield3onPlaystation3","}\u4e2d\u5c31\u662f\u5c06\u5206\u5757\u7684\u6570\u636e\u4eceGPU\u8bfb\u56de\u5230CPU\uff0c\u7136\u540e\u5728SPU\u4e2d\u5904\u7406\u5757\u7684\u6570\u636e\u3002\u4e0d\u4f46\u5982\u6b64\uff0c\u4ed6\u4eec\u8fd8\u5728SPU\u4e2d\u6267\u884c\u5757\u7684\u7740\u8272\u8ba1\u7b97\uff0c\u6bcf\u6b21\u5904\u7406\u4e00\u4e2a\u5b8c\u6574\u5757\u5185\u7684\u6240\u6709\u50cf\u7d20\uff0c\u8fd9\u6837\u8fd8\u53ef\u4ee5\u51cf\u5c11\u4e00\u4e2a\u5757\u5185\u5149\u6e90\u5217\u8868\u7684\u91cd\u590d\u8bfb\u53d6\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5149\u6e90\u5206\u914d\u7684\u7ed3\u679c\u65e2\u53ef\u4ee5\u9002\u7528\u4e8e\u4f20\u7edf\u7684\u524d\u5411\u5206\u5757\u7740\u8272[a",":ForwardBringingDeferredLightingtotheNextLevel","}\uff08tiled forward shading\uff09\uff0c\u4e5f\u53ef\u4ee5\u9002\u7528\u4e8e\u5ef6\u8fdf\u5206\u5757\u7740\u8272\uff08tiled deferred shading\uff09\u4e2d\u3002\u7136\u800c\u4e0d\u7ba1\u4f7f\u7528\u4ec0\u4e48\u6837\u7684\u7740\u8272\u7ba1\u7ebf\uff0c\u5149\u6e90\u5206\u914d\u51e0\u4e4e\u90fd\u5177\u6709\u4ee5\u4e0b\u7684\u4e09\u4e2a\u9636\u6bb5\uff1a"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5bf9\u573a\u666f\uff08\u4e0d\u900f\u660e\u7684\u7269\u4f53\uff09\u6267\u884c\u4e00\u6b21\u65e0\u5149\u7167\u7684\u4f20\u7edf\u7684\u6e32\u67d3\u7ba1\u7ebf\uff0c\u4ee5\u786e\u5b9a\u54ea\u4e9b\u50cf\u7d20\u662f\u53ef\u89c1\u7684\uff0c\u8fd9\u901a\u5e38\u5c31\u662f\u5ef6\u8fdf\u7740\u8272\u7684\u524d\u5411\u7740\u8272\u9636\u6bb5\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5229\u7528\u67d0\u79cd\u65b9\u6cd5\u5bf9\u4e0a\u8ff0\u53ef\u89c6\u7684\u8868\u9762\u70b9\u6267\u884c\u5149\u6e90\u5206\u914d\uff08\u4f8b\u5982\u57fa\u4e8e\u5206\u5757\u7684\u65b9\u6848\u6216\u57fa\u4e8e\u5206\u7c07\u7684\u65b9\u6848\uff0c\u89c1\u672c\u8282\u540e\u9762\u7684\u5185\u5bb9\uff09\uff0c\u5b83\u8f93\u51fa\u4e00\u4e2a\u9488\u5bf9\u6bcf\u4e2a\u53ef\u89c6\u8868\u9762\u70b9\u7684\u5149\u6e90\u5217\u8868\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5229\u7528\u5149\u6e90\u5217\u8868\u6267\u884c\u6bcf\u4e2a\u53ef\u89c6\u8868\u9762\u70b9\u7684\u5149\u7167\u8ba1\u7b97\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u56e0\u4e3a\u6211\u4eec\u4e0d\u53ef\u80fd\u5bf9\u573a\u666f\u4e2d\u6240\u6709\u50cf\u7d20\u6216\u533a\u57df\u90fd\u6267\u884c\u5149\u6e90\u5206\u914d\uff0c\u6240\u4ee5\u65e0\u8bba\u4f7f\u7528\u524d\u5411\u6216\u8005\u5ef6\u8fdf\u7740\u8272\u65b9\u6cd5\uff0c\u90fd\u5fc5\u987b\u8981\u6709\u4e00\u4e2a\u524d\u5411\u7684\u6df1\u5ea6\u6d4b\u8bd5\u9636\u6bb5\u6765\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u5149\u6e90\u5206\u914d\u8ba1\u7b97\u3002\u56e0\u6b64\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u524d\u5411\u7740\u8272\u65b9\u6cd5\uff08\u4f8b\u5982[a",":ForwardBringingDeferredLightingtotheNextLevel","}\u4e2d\u7684Forward+\uff09\uff0c\u5219\u81f3\u5c11\u9700\u8981\u5305\u542b\u4e24\u4e2a\u524d\u5411\u6e32\u67d3\u9636\u6bb5\uff0c\u8fd9\u65f6\u7b2c\u4e00\u4e2a\u9636\u6bb5\u5f80\u5f80\u79f0\u4e3apre-z pass\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u5bf9\u4e8e\u5ef6\u8fdf\u5206\u5757\u7740\u8272\uff0c\u5b83\u4ec5\u4ec5\u662f\u589e\u52a0\u4e86\u4e00\u4e2a\u5149\u6e90\u5254\u9664\u7684\u9636\u6bb5\uff0c\u6240\u4ee5\u5b83\u62e5\u6709\u548c\u5ef6\u8fdf\u7740\u8272\u51e0\u4e4e\u4e00\u6837\u7684\u4f18\u70b9\u548c\u7f3a\u70b9\u3002\u9488\u5bf9\u5149\u6e90\u5254\u9664\u6765\u8bb2\uff0c\u5206\u5757\u7740\u8272\u8fd8\u5b58\u5728\u5f88\u5927\u7684\u4f18\u5316\u7a7a\u95f4\uff0c\u7531\u4e8e\u5206\u5757\u7740\u8272\u5c063D\u7a7a\u95f4\u6295\u5c04\u52302D\u7684\u5c4f\u5e55\u533a\u57df\uff0c\u56e0\u6b64\u5b83\u7684\u6bcf\u4e2a\u5757\u5360\u636e\u4e86\u6df1\u5ea6\u65b9\u5411\u4e0a\u975e\u5e38\u5927\u7684\u8303\u56f4\uff0c\u5982\u56fe\uff083\uff09\u6240\u793a\uff0c\u5728\u5206\u57571\u4e2d\uff0c\u4e24\u4e2a\u7269\u4f53\u4e4b\u95f4\u5b58\u5728\u6df1\u5ea6\u4e0d\u8fde\u7eed\uff08depth discontinuities\uff09\uff0c\u6211\u4eec\u65e0\u6cd5\u7528\u7b80\u5355\u7684\u5206\u5757\u8303\u56f4\uff08\u4e00\u4e2a\u6700\u5927\u6700\u5c0f\u6df1\u5ea6\u8303\u56f4\u503c\uff09\u6765\u5254\u9664\u5305\u542b\u5728\u4e2d\u95f4\u7684\u5149\u6e90\uff0c\u6240\u4ee5\u8fd9\u5bfc\u81f4\u65e0\u6548\u7684\u5149\u6e90\u88ab\u8ba1\u7b97\u5728\u5206\u5757\u5149\u6e90\u5217\u8868\u4e2d\uff1b\u4f8b\u5982\u5bf9\u4e8e\u5206\u57573\uff0c\u5b83\u7684\u6df1\u5ea6\u662f\u8fde\u7eed\u7684\uff0c\u4f46\u662f\u540c\u6837\u7531\u4e8e\u6df1\u5ea6\u8303\u56f4\u592a\u591a\uff0c\u4f7f\u5f97\u8be5\u5206\u5757\u5fc5\u987b\u5305\u542b\u8be5\u6df1\u5ea6\u8303\u56f4\u5185\u7684\u6240\u6709\u5149\u6e90\u3002"}),"\n",(0,i.jsx)(n,{num:"3",id:"f:shade-tiled-problem",caption:"\u5206\u5757\u7740\u8272\u4ec5\u4ec5\u5c063D\u7a7a\u95f4\u6295\u5c04\u5230\u4e00\u4e2a2D\u7684\u5c4f\u5e55\u533a\u57df\uff0c\u6240\u6709\u6bcf\u4e2a\u5206\u5757\u5305\u542b\u4e86\u8fc7\u5ea6\u7684\u5149\u6e90\u4fe1\u606f\uff0c\u5f71\u54cd\u4e86\u7740\u8272\u8ba1\u7b97\u65f6\u7684\u8ba1\u7b97\u6027\u80fd\uff0c\u6570\u5b571\uff0c2\uff0c3\uff0c4\u8868\u793a\u5206\u5757\u7d22\u5f15\uff0c\u5206\u57574\u5bf9\u5e94\u7684\u5c0f\u56fe\u8868\u793a\u4e00\u6bb5\u6df1\u5ea6\u8fde\u7eed\u7684\u8def\u9762\uff0c\u8fd9\u79cd\u60c5\u51b5\u5728\u6e38\u620f\u4e2d\u5f88\u5e38\u89c1",children:(0,i.jsx)("img",{src:"/img/figures/shade/tiled-problem.svg",width:"500"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u75282D\u5206\u5757\u7684\u53e6\u4e00\u4e2a\u95ee\u9898\u662f\u8fd9\u4e9b\u5206\u5757\u4fe1\u606f\u662f\u4e0e\u89c6\u70b9\u76f8\u5173\u7684\uff08view dependent\uff09\uff0c\u5373\u4e00\u65e6\u6444\u50cf\u673a\u4f4d\u7f6e\u548c\u65b9\u5411\u53d1\u751f\u79fb\u52a8\uff0c\u6216\u8005\u573a\u666f\u4e2d\u7684\u67d0\u4e9b\u7269\u4f53\u4f4d\u7f6e\u53d1\u751f\u6539\u53d8\uff08\u4e5f\u5305\u62ec\u5149\u6e90\u4f4d\u7f6e\u6539\u53d8\uff0c\u4f46\u6b64\u5904\u4ec5\u6539\u53d8\u5149\u6e90\u989c\u8272\u4e0d\u5f71\u54cd\u5149\u6e90\u5206\u914d\u3002\uff09\uff0c\u5219\u6574\u4e2a\u5206\u5757\u8868\u683c\u7684\u6570\u636e\u9700\u8981\u91cd\u65b0\u8ba1\u7b97\u3002\u5206\u5757\u7740\u8272\u7684\u8fd9\u4e9b\u95ee\u9898\u4f7f\u5f97\u6211\u4eec\u5c06\u76ee\u5149\u8f6c\u5411\u4e863D\u7684\u5206\u7c07\u7740\u8272\u3002"})]})}function m(s={}){const{wrapper:e}={...(0,t.a)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}},1151:(s,e,n)=>{n.d(e,{Z:()=>l,a:()=>d});var i=n(7294);const t={},a=i.createContext(t);function d(s){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:d(s.components),i.createElement(a.Provider,{value:e},s.children)}}}]);