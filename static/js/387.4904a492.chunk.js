"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4387:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,c,a,o,u=e(9439),i=e(6445),s=e(7689),f=e(2791),p=e(299),l=e(168),h=e(5706),d=(0,h.Z)("h4")(r||(r=(0,l.Z)(["\n  font-size: 20px;\n  margin-bottom: 8px;\n  //   text-align: center;\n"]))),x=(0,h.Z)("p")(c||(c=(0,l.Z)(["\n  margin-bottom: 16px;\n"]))),m=(0,h.Z)("a")(a||(a=(0,l.Z)(["\ndisplay: block;\nwidth: 110px;\n  border: 2px solid #31d0aa;\n  background-color: #ffffff;\n  border-radius: 10px;\n  padding: 8px 16px;\n  color: #111111;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  transition: \n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: #ffffff;\n    background-color: #31d0aa;\n"]))),v=(0,h.Z)("h4")(o||(o=(0,l.Z)(["\n  margin-bottom: 16px;\n  font-size: 20px;\n  text-align: center;\n"]))),Z=e(184),g=function(){var n=(0,f.useState)(null),t=(0,u.Z)(n,2),e=t[0],r=t[1],c=(0,f.useState)(""),a=(0,u.Z)(c,2),o=a[0],l=a[1],h=(0,f.useState)(!1),g=(0,u.Z)(h,2),b=g[0],w=g[1],j=(0,s.UO)().movieId;return(0,f.useEffect)((function(){w(!0),j&&((0,p.tx)(j).then((function(n){if(n.results.length<1)return r(null),void w(!1);r(n.results),w(!1)})).catch((function(n){return console.error(n)})),(0,p.TP)(j).then((function(n){l(n.title)})).catch((function(n){return console.error(n)})))}),[j]),(0,Z.jsxs)(Z.Fragment,{children:[e?(0,Z.jsx)("ul",{children:e.map((function(n){return(0,Z.jsxs)("li",{children:[(0,Z.jsx)(d,{children:n.author}),n.content.length>1e3?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(x,{children:n.content.slice(0,1e3)}),(0,Z.jsx)(m,{href:n.url,target:"_blank",rel:"noopener noreferrer",children:"Read more"})]}):(0,Z.jsx)(x,{children:n.content})]},n.id)}))}):(0,Z.jsxs)(v,{children:["We don't have any reviews for movie \"",o,'"']}),b&&(0,Z.jsx)(i.Z,{})]})}},299:function(n,t,e){e.d(t,{Hg:function(){return s},IR:function(){return h},M1:function(){return p},TP:function(){return f},tx:function(){return l}});var r=e(5861),c=e(4687),a=e.n(c),o=e(1243),u="https://api.themoviedb.org/3/",i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTZlYWZhMmEzOTE3ZDU3ZGQzMGRhOTZhOWQxOTg5MCIsInN1YiI6IjY0ODgzZjcyZTI3MjYwMDBjOTMyMjM2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XdPSLtTSAZv4fw0M0gYehYEL9mjnuAiltEwvVoL-DaE"}},s=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"trending/movie/day?language=en-US"),i);case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t),i);case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/credits"),i);case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/reviews"),i);case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"search/movie?query=").concat(t,"&page=1"),i);case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.4904a492.chunk.js.map