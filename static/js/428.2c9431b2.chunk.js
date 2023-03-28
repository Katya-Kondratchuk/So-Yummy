/*! For license information please see 428.2c9431b2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[428],{2614:function(e,t,r){r.d(t,{r:function(){return l}});var n,i=r(2791),a=["title","titleId"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function c(e,t){var r=e.title,c=e.titleId,l=o(e,a);return i.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:18,height:19,fill:"none",ref:t,"aria-labelledby":c},l),r?i.createElement("title",{id:c},r):null,n||(n=i.createElement("path",{stroke:"#333",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m14.0625 4.4375-10.125 10.125M14.0625 14.5625 3.9375 4.4375"})))}var l=i.forwardRef(c);r.p},1428:function(e,t,r){r.r(t),r.d(t,{default:function(){return B}});var n=r(4165),i=r(5861),a=r(9439),s=r(2791),o=r(5985),c=r(786),l=r(4418),u=r(8473),d=r(9401),p="ShoppingItemDescription_wrapper__yisXq",h="ShoppingItemDescription_name__-QK7S",m=r(3329),f=function(e){var t=e.name;return(0,m.jsx)("div",{className:p,children:(0,m.jsx)("span",{className:h,children:t})})},x="ShoppingItemNumber_wrapper__xdpU6",g=function(e){var t=e.text;return(0,m.jsx)("div",{className:x,children:t})},y="ShoppingItemPhoto_wrapper__iPDbR",v="ShoppingItemPhoto_image__Act4-",j=function(e){var t=e.image;return(0,m.jsx)("div",{className:y,children:(0,m.jsx)("img",{className:v,src:t,alt:"ingredient"})})},_={wrapper:"ShoppingItem_wrapper__vmK3f",rightWrapper:"ShoppingItem_rightWrapper__nP4uq",button:"ShoppingItem_button__Qg7qu"},b=r(5846),w=r(8813),O=r(2614),N=function(e){var t=e.image,r=e.name,n=e.measure,i=(e.id,e.onDelete);return(0,m.jsxs)("li",{className:_.wrapper,children:[(0,m.jsx)(j,{image:t||b}),(0,m.jsx)("div",{children:(0,m.jsx)(f,{name:r})}),(0,m.jsx)("div",{className:_.rightThumb,children:n.map((function(e){return(0,m.jsxs)("div",{className:_.rightWrapper,children:[(0,m.jsx)(g,{text:e}),(0,m.jsx)("button",{className:_.button,type:"button",onClick:function(t){i(e,t)},children:(0,m.jsx)(O.r,{width:"18px",height:"18px"})})]},(0,w.nanoid)())}))})]})},E="ShoppingList_shoppingItemList__ul7KI",S="ShoppingList_emptyShoppingList__Qf1xO",I="ShoppingList_emptyShoppingListImg__zsleT",k="ShoppingList_emptyShoppingListText__ICeLh",L="TitleShoppingList_titleWrapper__DtDwx",C="TitleShoppingList_title__l7tA0",Z="TitleShoppingList_products__btfyR",P="TitleShoppingList_rightPartText__CdXda",T=function(){return(0,m.jsx)("div",{className:L,children:(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)("span",{className:Z,children:"Products"}),(0,m.jsxs)("div",{className:P,children:[(0,m.jsx)("span",{children:"Number"}),(0,m.jsx)("span",{children:"Remove"})]})]})})},D=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],p=t[1],h=(0,s.useState)(!0),f=(0,a.Z)(h,2),x=f[0],g=f[1],y=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.target.disabled){e.next=2;break}return e.abrupt("return");case 2:return i.target.disabled=!0,e.next=5,(0,u.xZ)({productId:t,measure:r}).then((function(e){var t=e.shoppingList;p(t),o.Am.info("You removed ingridient from shopping list",{toastId:"1234"})})).catch((function(e){return console.log(e.message)}));case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){g(!0),setTimeout((0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.ym)().then((function(e){var t=e.shoppingList;p(t)})).catch((function(e){return console.log(e)}));case 2:g(!1);case 3:case"end":return e.stop()}}),e)}))),1e3)}),[]),(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)(c.Z,{}),(0,m.jsx)(l.Z,{text:"Shopping list"}),(0,m.jsx)(T,{}),x?(0,m.jsx)(d.G,{}):r.length>0?(0,m.jsx)("ul",{className:E,children:r.map((function(e,t){var r=e.thumb,n=e.title,i=e.measure,a=e.productId;return(0,m.jsx)(N,{image:r,name:n,measure:i,id:a,onDelete:function(e,t){return y(a,e,t)}},(0,w.nanoid)())}))}):(0,m.jsxs)("div",{className:S,children:[(0,m.jsx)("div",{className:I}),(0,m.jsx)("p",{className:k,children:"Shopping list is empty"})]})]})},R=r(4534),B=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(D,{}),(0,m.jsx)(R.Z,{})]})}},786:function(e,t,r){r.d(t,{Z:function(){return a}});r(2791);var n="BGDots_container__5gslR",i=r(3329),a=function(){return(0,i.jsx)("div",{className:n})}},9401:function(e,t,r){r.d(t,{G:function(){return l}});var n=r(1413),i=r(8175),a="IngredientsLoader_IngredientLoader__CetnI",s="IngredientsLoader_cardIngLoader__mCb0p",o=r(3329),c=function(e){return(0,o.jsxs)(i.ZP,(0,n.Z)((0,n.Z)({width:1240,height:182,viewBox:"0 0 1240 182",backgroundColor:"#f5f5f5",foregroundColor:"#EBF3D4"},e),{},{children:[(0,o.jsx)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"5",height:"182"}),"-",(0,o.jsx)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"1240",height:"5"}),"-",(0,o.jsx)("rect",{x:"1235",y:"0",rx:"3",ry:"3",width:"5",height:"182"}),"-",(0,o.jsx)("rect",{x:"40",y:"20",rx:"16",ry:"16",width:"180",height:"140"}),"-",(0,o.jsx)("rect",{x:"265",y:"30",rx:"5",ry:"5",width:"250",height:"33"}),"-",(0,o.jsx)("rect",{x:"265",y:"80",rx:"3",ry:"3",width:"520",height:"7"}),"-",(0,o.jsx)("rect",{x:"277",y:"100",rx:"3",ry:"3",width:"540",height:"7"}),"-",(0,o.jsx)("rect",{x:"265",y:"120",rx:"3",ry:"3",width:"300",height:"7"}),"-",(0,o.jsx)("rect",{x:"0",y:"177",rx:"3",ry:"3",width:"1240",height:"5"}),"-",(0,o.jsx)("rect",{x:"900",y:"65",rx:"10",ry:"10",width:"150",height:"45"}),"-",(0,o.jsx)("rect",{x:"1150",y:"65",rx:"7",ry:"7",width:"45",height:"10"}),"-",(0,o.jsx)("rect",{x:"1150",y:"65",rx:"7",ry:"7",width:"10",height:"45"}),(0,o.jsx)("rect",{x:"1150",y:"100",rx:"7",ry:"7",width:"45",height:"10"}),(0,o.jsx)("rect",{x:"1185",y:"65",rx:"7",ry:"7",width:"10",height:"45"})]}))},l=function(){return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)(c,{className:s}),(0,o.jsx)(c,{className:s}),(0,o.jsx)(c,{className:s}),(0,o.jsx)(c,{className:s})]})}},4418:function(e,t,r){r.d(t,{Z:function(){return a}});r(2791);var n="Title_title__9ucC4",i=r(3329),a=function(e){var t=e.text;return(0,i.jsx)("h1",{className:n,children:t})}},8175:function(e,t,r){var n=r(2791),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};var a=function(e){var t=e.animate,r=void 0===t||t,a=e.animateBegin,s=e.backgroundColor,o=void 0===s?"#f5f6f7":s,c=e.backgroundOpacity,l=void 0===c?1:c,u=e.baseUrl,d=void 0===u?"":u,p=e.children,h=e.foregroundColor,m=void 0===h?"#eee":h,f=e.foregroundOpacity,x=void 0===f?1:f,g=e.gradientRatio,y=void 0===g?2:g,v=e.gradientDirection,j=void 0===v?"left-right":v,_=e.uniqueKey,b=e.interval,w=void 0===b?.25:b,O=e.rtl,N=void 0!==O&&O,E=e.speed,S=void 0===E?1.2:E,I=e.style,k=void 0===I?{}:I,L=e.title,C=void 0===L?"Loading...":L,Z=e.beforeMask,P=void 0===Z?null:Z,T=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),D=_||Math.random().toString(36).substring(6),R=D+"-diff",B=D+"-animated-diff",q=D+"-aria",K=N?{transform:"scaleX(-1)"}:null,W="0; "+w+"; 1",G=S+"s",M="top-bottom"===j?"rotate(90)":void 0;return(0,n.createElement)("svg",i({"aria-labelledby":q,role:"img",style:i(i({},k),K)},T),C?(0,n.createElement)("title",{id:q},C):null,P&&(0,n.isValidElement)(P)?P:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+d+"#"+R+")",style:{fill:"url("+d+"#"+B+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:R},p),(0,n.createElement)("linearGradient",{id:B,gradientTransform:M},(0,n.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:l},r&&(0,n.createElement)("animate",{attributeName:"offset",values:-y+"; "+-y+"; 1",keyTimes:W,dur:G,repeatCount:"indefinite",begin:a})),(0,n.createElement)("stop",{offset:"50%",stopColor:m,stopOpacity:x},r&&(0,n.createElement)("animate",{attributeName:"offset",values:-y/2+"; "+-y/2+"; "+(1+y/2),keyTimes:W,dur:G,repeatCount:"indefinite",begin:a})),(0,n.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:l},r&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+y),keyTimes:W,dur:G,repeatCount:"indefinite",begin:a})))))},s=function(e){return e.children?(0,n.createElement)(a,i({},e)):(0,n.createElement)(o,i({},e))},o=function(e){return(0,n.createElement)(s,i({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=s},5846:function(e,t,r){e.exports=r.p+"static/media/notFound.e425eba8338fc04f10af.png"}}]);
//# sourceMappingURL=428.2c9431b2.chunk.js.map