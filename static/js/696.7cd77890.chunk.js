"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[696],{5892:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var r=a(9439),n=a(4670),i=a(4554),s=a(3896),l=a(4153),c=a(2791),o=a(7689),u=a(786),d=a(683),f=a(5359),m=a(4418),h=a(8473),p="Categories_categoryList__v3AHm",x="Categories_categoryItem__t9p5P",g="Categories_loader__BJN6k",v="Categories_pagination__wBjwq",j=a(7124),_=a(3329),b=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),a=t[0],b=t[1],y=(0,c.useState)(""),Z=(0,r.Z)(y,2),N=Z[0],C=Z[1],w=(0,c.useState)([]),k=(0,r.Z)(w,2),O=k[0],M=k[1],S=(0,c.useState)(!1),E=(0,r.Z)(S,2),D=E[0],A=E[1],B=(0,c.useState)(null),T=(0,r.Z)(B,2),I=T[0],L=T[1],P=(0,c.useState)(1),W=(0,r.Z)(P,2),F=W[0],G=W[1],H=(0,o.UO)().categoryName,z=(0,c.useState)(!0),R=(0,r.Z)(z,2),V=R[0],Y=R[1],J=(0,n.Z)("(max-width: 767px)"),q=(0,n.Z)("(max-width: 1439px)"),K=(0,n.Z)("(min-width: 1440px)"),Q=function(){A((function(e){return!e}))};(0,c.useEffect)((function(){Y(!0),N?((0,h.xG)(N||"",F,8).then((function(e){var t=e.recipes,a=e.total;M(t);var r=Math.ceil(a/8);L(r>1?r:null)})),Y(!1)):Y(!1)}),[N,H,F]),(0,c.useEffect)((function(){(0,h.tG)().then((function(e){var t=e.map((function(e){return e.title})).sort((function(e,t){return e.localeCompare(t)}));b(t),H?C(H):e.length>0&&C(e[0].title)})).catch((function(e){return console.log(e.message)}))}),[]);return(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:"container ",children:[(0,_.jsx)(u.Z,{}),(0,_.jsx)(m.Z,{text:"Categories"}),(0,_.jsx)(i.Z,{sx:{maxWidth:"100%",marginTop:{xs:"50px",lg:"100px"},borderBottom:"1px solid var(--lineColor)",minHeight:"48px"},children:(0,_.jsx)(l.Z,{value:N,onChange:function(e,t){C(t),G(1)},variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,"aria-label":"scrollable force tabs example",sx:{".MuiTabs-indicator":{backgroundColor:"#8BAA36"}},children:a.map((function(e,t){return(0,_.jsx)(s.Z,{sx:{"&.Mui-selected":{color:"#8BAA36"},color:"var(--categoriesForDarkToWhite)"},value:e,label:e},t)}))})}),V||0===O.length?K&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:g,children:(0,_.jsx)(d.Z.Desktop,{})}),(0,_.jsx)(d.Z.Desktop,{})]})||q&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(d.Z.Tablet,{}),(0,_.jsx)(d.Z.Tablet,{}),(0,_.jsx)(d.Z.Tablet,{}),(0,_.jsx)(d.Z.Tablet,{})]})||J&&(0,_.jsx)(d.Z.Mobile,{}):(0,_.jsx)("ul",{className:p,children:O.map((function(e){e.category,e.description;var t=e.favorite,a=e.like,r=e.popularity,n=e.preview,i=(e.time,e.title),s=e._id;return(0,_.jsx)("li",{className:x,children:(0,_.jsx)(f.Z,{id:s,isShow:D,toogle:Q,image:n,altText:i,text:i,favorite:t,like:a,allData:O,setAllData:M,popularity:r})},s)}))})]}),I&&(0,_.jsx)("div",{className:v,children:(0,_.jsx)(j.Z,{count:I,page:F,isChange:function(e,t){G(t)}})})]})},y=a(4534),Z=function(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(b,{}),(0,_.jsx)(y.Z,{})]})}},786:function(e,t,a){a.d(t,{Z:function(){return i}});a(2791);var r="BGDots_container__5gslR",n=a(3329),i=function(){return(0,n.jsx)("div",{className:r})}},683:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(1413),n=a(8175),i="CategoriesLoader_loaderWrapper__buIb6",s="CategoriesLoader_oneCardLoader__fHRfp",l=a(3329),c=function(e){return(0,l.jsxs)(n.ZP,(0,r.Z)((0,r.Z)({width:290,height:313,viewBox:"0 0 300 323",backgroundColor:"#f5f5f5",foregroundColor:"#EBF3D4"},e),{},{children:[(0,l.jsx)("rect",{x:"0",y:"0",rx:"16",ry:"16",width:"290",height:"220"}),"-",(0,l.jsx)("rect",{x:"0",y:"0",rx:"16",ry:"16",width:"30",height:"313"}),"-",(0,l.jsx)("rect",{x:"260",y:"0",rx:"16",ry:"16",width:"30",height:"313"}),"-",(0,l.jsx)("rect",{x:"0",y:"278",rx:"16",ry:"16",width:"290",height:"35"}),"-"]}))},o={Desktop:function(){return(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)(c,{className:s}),(0,l.jsx)(c,{className:s}),(0,l.jsx)(c,{className:s}),(0,l.jsx)(c,{className:s})]})},Tablet:function(){return(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)(c,{className:s}),(0,l.jsx)(c,{className:s})]})},Mobile:function(){return(0,l.jsx)("div",{className:i,children:(0,l.jsx)(c,{className:s})})}}},5359:function(e,t,a){a.d(t,{Z:function(){return D}});var r,n=a(1413),i=a(9439),s=a(2791),l=a(1087),c=a(8473),o="DishCard_cardContainer__xrHI6",u="DishCard_image__1i+M7",d="DishCard_btnLike__aJj0L",f="DishCard_btnFav__r4gGG",m="DishCard_likeIco__K6e3q",h="DishCard_favIco__pmEss",p="DishCard_textContainer__dBfdz",x="DishCard_popularity__eKX7P",g=["title","titleId"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},v.apply(this,arguments)}function j(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function _(e,t){var a=e.title,n=e.titleId,i=j(e,g);return s.createElement("svg",v({viewBox:"0 0 48 48",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),a?s.createElement("title",{id:n},a):null,r||(r=s.createElement("g",{id:"SVGRepo_iconCarrier"},s.createElement("rect",{width:48,height:48,fillOpacity:.01}),s.createElement("path",{d:"M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",stroke:"#ffffff",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round"}))))}var b,y,Z=s.forwardRef(_),N=(a.p,["title","titleId"]);function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},C.apply(this,arguments)}function w(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function k(e,t){var a=e.title,r=e.titleId,n=w(e,N);return s.createElement("svg",C({width:"800px",height:"800px",viewBox:"0 0 1024 1024",fill:"current",id:"svg9",ref:t,"aria-labelledby":r},n),a?s.createElement("title",{id:r},a):null,b||(b=s.createElement("path",{d:"m 273,495.9 v 428 l 0.3,-428 z M 811.2,407.6 H 496.8 l 9.6,-198.4 c 0.6,-11.9 -4.7,-23.1 -14.6,-30.5 -6.1,-4.5 -13.6,-6.8 -21.1,-6.7 -19.6,0.1 -36.9,13.4 -42.2,32.3 C 391.4,338.7 363.6,439.5 345,506.8 V 852 H 744.4 A 56.85,56.85 0 0 0 778,800.2 c 0,-9.7 -2.3,-18.9 -6.9,-27.3 l -13.9,-25.4 21.9,-19 a 56.76,56.76 0 0 0 19.6,-43 c 0,-9.7 -2.3,-18.9 -6.9,-27.3 l -13.9,-25.4 21.9,-19 a 56.76,56.76 0 0 0 19.6,-43 c 0,-9.7 -2.3,-18.9 -6.9,-27.3 l -14,-25.5 21.9,-19 A 56.76,56.76 0 0 0 840,456 c 0,-19.1 -11,-37.5 -28.8,-48.4 z",id:"path4"})),y||(y=s.createElement("path",{d:"m 112,528 v 364 c 0,17.7 14.3,32 32,32 h 65 V 496 h -65 c -17.7,0 -32,14.3 -32,32 z m 773.9,5.7 C 902.7,511.5 912,484.3 912,456 912,411.1 886.9,368.5 846.5,345 a 67.67,67.67 0 0 0 -34.3,-9.3 H 572.3 l 6,-122.9 c 1.5,-29.7 -9,-57.9 -29.5,-79.4 A 106.4,106.4 0 0 0 470.9,100 c -52,0 -98,35 -111.8,85.1 l -85.8,310.8 -0.3,428 h 472.1 c 9.3,0 18.2,-1.8 26.5,-5.4 47.6,-20.3 78.3,-66.8 78.3,-118.4 0,-12.6 -1.8,-25 -5.4,-37 16.8,-22.2 26.1,-49.4 26.1,-77.7 0,-12.6 -1.8,-25 -5.4,-37 16.8,-22.2 26.1,-49.4 26.1,-77.7 0,-12.6 -1.8,-25 -5.4,-37 z m -65.5,-34.7 -21.9,19 14,25.5 a 56.2,56.2 0 0 1 6.9,27.3 c 0,16.5 -7.1,32.2 -19.6,43 l -21.9,19 13.9,25.4 a 56.2,56.2 0 0 1 6.9,27.3 c 0,16.5 -7.1,32.2 -19.6,43 l -21.9,19 13.9,25.4 a 56.2,56.2 0 0 1 6.9,27.3 c 0,22.4 -13.2,42.6 -33.6,51.8 H 345 V 506.8 c 18.6,-67.2 46.4,-168 83.5,-302.5 A 44.28,44.28 0 0 1 470.7,172 c 7.5,-0.1 15,2.2 21.1,6.7 9.9,7.4 15.2,18.6 14.6,30.5 l -9.6,198.4 h 314.4 c 17.8,10.9 28.8,29.3 28.8,48.4 0,16.5 -7.1,32.2 -19.6,43 z",id:"path6",fill:"#ffffff"})))}var O=s.forwardRef(k),M=(a.p,a(5985)),S=a(5036),E=a(3329),D=function(e){var t=e.image,a=e.altText,r=e.text,g=e.favorite,v=e.like,j=e.toogle,_=e.isShow,b=e.id,y=e.allData,N=void 0===y?[]:y,C=e.setAllData,w=void 0===C?function(){}:C,k=e.popularity,D=(0,s.useState)(v),A=(0,i.Z)(D,2),B=A[0],T=A[1],I=(0,s.useState)(g),L=(0,i.Z)(I,2),P=L[0],W=L[1],F=(0,s.useState)(!1),G=(0,i.Z)(F,2),H=G[0],z=G[1],R=(0,s.useState)(!1),V=(0,i.Z)(R,2),Y=V[0],J=V[1],q=(0,s.useState)(""),K=(0,i.Z)(q,2),Q=K[0],U=K[1],X=(0,s.useState)(k),$=(0,i.Z)(X,2),ee=$[0],te=$[1],ae=g||P?"var(--secondaryGreenColor)":"none",re=v||B?"var(--secondaryGreenColor)":"none",ne=r.length<26?r:r.substr(0,26).replace(/\s+\S*$/,"")+"...";return(0,E.jsxs)(E.Fragment,{children:["10"===Q&&(0,E.jsx)(S.Z,{option:3}),(0,E.jsxs)("div",{className:o,children:[(0,E.jsx)(l.rU,{to:"/recipe/".concat(b),children:(0,E.jsx)("img",{src:t,alt:a,className:u})}),(0,E.jsx)("button",{onMouseOver:r.length<26?null:j,className:p,onClick:r.length<26?null:j,children:_?r:ne}),(0,E.jsx)("button",{className:f,type:"button",onClick:function(){H||(z(!0),(0,c.j4)(b).then((function(e){var t=e.favorite,a=e.popularity,r=e.motivation;z(!1);var i=N.map((function(e){return e._id===b?(0,n.Z)((0,n.Z)({},e),{},{favorite:t}):e}));w(i),te(a),W(t),U(r),t&&M.Am.success("Added to Favorite!"),!t&&M.Am.info("Removed from Favorite!")})).catch((function(){return z(!1)})))},children:(0,E.jsx)(Z,{className:h,fill:ae})}),(0,E.jsx)("button",{className:d,type:"button",onClick:function(){Y||(J(!0),(0,c.Q0)(b).then((function(e){var t=e.like,a=e.popularity;J(!1);var r=N.map((function(e){return e._id===b?(0,n.Z)((0,n.Z)({},e),{},{like:t}):e}));w(r),te(a),T(t)})).catch((function(){return J(!1)})))},children:(0,E.jsx)(O,{className:m,fill:re})}),(0,E.jsx)("p",{className:x,children:ee})]})]})}},5036:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(9439),n=a(2791),i="MotivatingModal_backdrop__5BOy8",s="MotivatingModal_wrapper__stTGO",l="MotivatingModal_content__7uQT7",c="MotivatingModal_image__AmYgr",o="MotivatingModal_blur__yJ3Ek",u="MotivatingModal_text__+Z-Mb",d="MotivatingModal_closeButton__F7JdX",f=a(5053),m=a.p+"static/media/m_first_shl.e1b874e39be8e8445774.png",h=a.p+"static/media/m_100days.10dae4f82223331deada.png",p=a.p+"static/media/m_10rec_tofav.4cf7c2c21ef5bc5a18da.png",x=a.p+"static/media/m_first_tofav.00293edf6f92975d7a47.png",g=a(3329),v=function(e){var t=e.option,a=(0,n.useState)(!0),v=(0,r.Z)(a,2),j=v[0],_=v[1],b=function(){_(!1),document.removeEventListener("keydown",y)},y=function(e){"Escape"===e.key&&b()};document.addEventListener("keydown",y);return j?(0,g.jsx)("div",{className:i,onClick:function(e){e.target===e.currentTarget&&b()},children:(0,g.jsxs)("div",{className:s,children:[(0,g.jsx)("button",{className:d,onClick:b,children:"\u2715"}),function(){switch(t){case 1:return(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("img",{className:c,src:m,alt:"img_first_shl"}),(0,g.jsx)("img",{className:o,src:f,alt:"blur"}),(0,g.jsxs)("p",{className:u,children:[(0,g.jsx)("span",{children:"Wow!"})," You have created your first shopping list!"]})]});case 2:return(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("img",{className:c,src:h,alt:"img_100days"}),(0,g.jsx)("img",{className:o,src:f,alt:"blur"}),(0,g.jsxs)("p",{className:u,children:[(0,g.jsx)("span",{children:"Wow!"})," You have been using the application for",(0,g.jsx)("span",{children:" 100 "}),"days!"]})]});case 3:return(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("img",{className:c,src:p,alt:"img_10rec_tofav"}),(0,g.jsx)("img",{className:o,src:f,alt:"blur"}),(0,g.jsxs)("p",{className:u,children:[(0,g.jsx)("span",{children:"Wow!"})," You have added ",(0,g.jsx)("span",{children:" 10 "})," recipes to your favorites!"]})]});case 4:return(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("img",{className:c,src:x,alt:"img_first_tofav"}),(0,g.jsx)("img",{className:o,src:f,alt:"blur"}),(0,g.jsxs)("p",{className:u,children:[(0,g.jsx)("span",{children:"Wow!"})," You have created your first recipe!"]})]});default:return null}}()]})}):null}},7124:function(e,t,a){a.d(t,{Z:function(){return l}});a(2791);var r=a(2958),n=a(1582),i={paginationWrapper:"Pagination_paginationWrapper__eVcLt",mui:"Pagination_mui__tVHCj"},s=a(3329);function l(e){var t=e.count,a=e.page,l=e.isChange;return(0,s.jsx)("div",{className:i.paginationWrapper,children:(0,s.jsx)(n.Z,{spacing:2,children:(0,s.jsx)(r.Z,{count:t,page:a,className:i.mui,onChange:l})})})}},4418:function(e,t,a){a.d(t,{Z:function(){return i}});a(2791);var r="Title_title__9ucC4",n=a(3329),i=function(e){var t=e.text;return(0,n.jsx)("h1",{className:r,children:t})}}}]);
//# sourceMappingURL=696.7cd77890.chunk.js.map