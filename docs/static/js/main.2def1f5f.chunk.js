(this["webpackJsonp05-gif-expert-app"]=this["webpackJsonp05-gif-expert-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),r=n.n(c),i=n(2),s=n(10),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o("")),e.preventDefault()},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)},placeholder:"Ingrese la categoria a buscar"})})},j=n(7),l=function(e){var t=e.title,n=e.url,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1];return Object(u.jsxs)("div",{className:"card animate__animated animate__pulse",children:[!s&&Object(u.jsx)("p",{className:"animate__animated animate__flash animate__infinite",children:"Cargando..."}),Object(u.jsx)("img",{src:n,onLoad:function(){return o(!0)}}),Object(u.jsx)("p",{className:"title",children:0==t.trim().length?"Sin titulo":t})]})},d=n(6),f=n.n(d),b=n(9),p=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,a,c,r,i,s,u,o=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:5,a="EYtcZUyg6JXj41AGeDs8dKJPQ167PnEd",c="https://api.giphy.com/v1/gifs/search?limit=".concat(n,"&q=").concat(encodeURI(t),"&api_key=").concat(a),e.next=5,fetch(c);case 5:return r=e.sent,e.next=8,r.json();case 8:return i=e.sent,s=i.data,u=s.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=(n(17),function(e){var t=e.category,n=function(e){var t=Object(a.useState)({gifs:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){return r({gifs:e,loading:!1})}))}),[e]),c}(t),c=n.gifs,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:t}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(a.createElement)(l,Object(j.a)(Object(j.a)({},e),{},{key:e.id}))}))})]})}),g=function(e){var t=e.defaultCategories,n=void 0===t?[]:t,c=Object(a.useState)(n),r=Object(i.a)(c,2),s=r[0],j=r[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Gif Expert App"}),Object(u.jsx)(o,{setCategories:j}),Object(u.jsx)("hr",{}),Object(u.jsx)("ul",{children:s.map((function(e){return Object(u.jsx)(m,{category:e},e)}))})]})};n(18);r.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2def1f5f.chunk.js.map