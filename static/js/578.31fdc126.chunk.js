"use strict";(self.webpackChunkflight_news=self.webpackChunkflight_news||[]).push([[578],{4578:function(n,e,t){t.r(e),t.d(e,{HomePage:function(){return $}});var r,i,a,o,c,s,u,l,d,p,h,f=t(885),m=t(2791),x=t(7494),g=t(4663),Z=t(5616),j=t(9126),b=t(6731),v=function(){var n,e,t=(0,b.lr)(),r=(0,f.Z)(t,2),i=r[0],a=r[1];return{pageNumber:Number(null!==(n=i.get("page"))&&void 0!==n?n:1),keyword:null!==(e=i.get("keyword"))&&void 0!==e?e:"",setSearchParams:a}},y=t(168),k=t(7691),w=k.ZP.button(r||(r=(0,y.Z)(["\n  padding: ","px;\n  border: ",";\n  border-radius: ",";\n  background-color: transparent;\n  cursor: pointer;\n  color: ",";\n  transition: scale 250ms linear;\n  :hover {\n    scale: 1.2;\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.deleteButton})),P=t(184),C=function(){var n=(0,m.useRef)(),e=v(),t=e.keyword,r=e.setSearchParams,i=(0,m.useState)(t),a=(0,f.Z)(i,2),o=a[0],c=a[1],s=(0,m.useMemo)((function(){return(0,x.debounce)((function(n){return r(""!==n?{page:1,keyword:n}:{page:1})}),500)}),[r]);return(0,P.jsxs)(g.Z,{children:[(0,P.jsx)(Z.Z,{fullWidth:!0,variant:"standard",label:"Type to search... \ud83d\udd0e  ",type:"text",value:o,onChange:function(n){var e=n.target.value;c(e),s(e)},ref:n}),(0,P.jsx)(w,{type:"button",onClick:function(){c(""),r({page:1}),n.current.focus()},children:(0,P.jsx)(j.C7Q,{size:"24"})})]})},N=t(7689),F=t(1889),S=t(7621),R=t(2169),B=t(9504),E=t(890),H=(0,k.ZP)(F.ZP)(i||(i=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),T=(0,k.ZP)(S.Z)(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),A=(0,k.ZP)(R.Z)(o||(o=(0,y.Z)(["\n  height: 240px;\n"]))),D=(0,k.ZP)(B.Z)(c||(c=(0,y.Z)(["\n  flex-grow: 1;\n"]))),M=(0,k.ZP)(E.Z)(s||(s=(0,y.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),O=(0,k.ZP)(E.Z)(u||(u=(0,y.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),W=(0,k.ZP)(E.Z)(l||(l=(0,y.Z)([""]))),_=function(n){var e=n.filter,t=n.str;if(!e)return t;var r=new RegExp(e,"ig"),i=t.match(r);return i?t.split(r).map((function(n,e,t){if(e<t.length-1){var r=i.shift();return(0,P.jsxs)(m.Fragment,{children:[n," ",(0,P.jsx)("span",{style:{backgroundColor:"yellow"},children:r})]},e)}return n})):t},z=t(1042),Q=function(n){var e=n.article,t=e.id,r=e.imageUrl,i=e.updatedAt,a=e.title,o=e.summary,c=(0,N.TH)(),s=v().keyword,u=(0,m.useCallback)((function(n){return new Date(n.slice(0,10)).toDateString().slice(3)}),[]),l=(0,m.useCallback)((function(n){return(0,P.jsx)(_,{filter:s,str:n})}),[s]);return(0,P.jsx)(H,{item:!0,xs:12,md:4,component:"li",children:(0,P.jsxs)(T,{children:[(0,P.jsx)(A,{component:"img",src:"".concat(r),alt:"".concat(a)}),(0,P.jsxs)(D,{children:[i&&(0,P.jsx)(M,{component:"p",children:u(i)}),(0,P.jsx)(O,{variant:"h5",component:"h2",children:l(a)}),(0,P.jsx)(W,{component:"p",children:l(o.slice(0,100))})]}),(0,P.jsx)(z.x,{to:"/articlePage/".concat(t),state:{from:c},children:"Read more"})]})})},U=t(9835),V=t(4281),X=k.ZP.div(d||(d=(0,y.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n  text-align: center;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),q=k.ZP.span(p||(p=(0,y.Z)(["\n  padding-left: ","px;\n  padding-right: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),G=function(n){var e=n.disabled,t=void 0===e?0:e,r=v(),i=r.pageNumber,a=r.keyword,o=r.setSearchParams,c=function(n){var e=n.target.name;o("next"===e?""!==a?{page:i+1,keyword:a}:{page:i+1}:""!==a?{page:i-1,keyword:a}:{page:i-1}),window.scrollBy({top:-1e4,behavior:"smooth"})};return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(X,{children:[(0,P.jsx)(V.Z,{name:"prev",variant:"contained",type:"button",onClick:c,disabled:1===i,children:"PREV"}),(0,P.jsx)(q,{children:i}),(0,P.jsx)(V.Z,{name:"next",variant:"contained",type:"button",onClick:c,disabled:t<=19,children:"NEXT"})]})})},I=(0,k.ZP)(F.ZP)(h||(h=(0,y.Z)(["\n  list-style-type: style none;\n  padding-left: ","px;\n"])),(function(n){return n.theme.space[0]})),J=t(8496),K=t(1056),L=function(){var n=v(),e=n.pageNumber,t=n.keyword,r=1===e?0:20*e-20,i=(0,U.WB)({skip:r,keyword:t},{refetchOnMountOrArgChange:!0}),a=i.data,o=i.isFetching;if(a)return(0,P.jsxs)(P.Fragment,{children:[o&&(0,P.jsx)(J.Z,{}),(0,P.jsx)(G,{disabled:a.length}),(0,P.jsx)(I,{container:!0,spacing:2,component:"ul",children:a.length>0?a.map((function(n){return(0,P.jsx)(Q,{article:n},n.id)})):(0,P.jsx)(K.s,{})}),(0,P.jsx)(G,{disabled:a.length})]})},Y=function(){return(0,P.jsxs)("section",{children:[(0,P.jsx)("h1",{className:"visually-hidden",children:" Home page"}),(0,P.jsx)(C,{}),(0,P.jsx)(L,{})]})},$=function(){return(0,P.jsx)(Y,{})}},1056:function(n,e,t){t.d(e,{s:function(){return s}});var r,i=t(168),a=t(7691).ZP.img(r||(r=(0,i.Z)(["\n  max-width: 300px;\n  margin: 50px auto 0 auto;\n"]))),o=t(5239),c=t(184),s=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a,{src:o,alt:"no info"})})}},5239:function(n,e,t){n.exports=t.p+"static/media/pulp-fiction-john-travolta.59b46f4510af6cc07976.gif"}}]);
//# sourceMappingURL=578.31fdc126.chunk.js.map