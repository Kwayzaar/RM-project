(this["webpackJsonprm-app"]=this["webpackJsonprm-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var r=c(2),n=c.n(r),a=c(9),s=c.n(a),o=(c(14),c(8)),i=c(3),l=(c(15),c.p+"static/media/RM-logo.93c0c4c5.png"),b=c(1);function u(){return Object(b.jsx)("div",{className:"sm:flex backdrop-filter backdrop-blur shadow-lg",children:Object(b.jsx)("img",{src:l,className:"m-auto sm:"})})}var j=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],a="h-1 w-6 my-1 bg-black rounded-full transition ease transform duration-300";return Object(b.jsxs)("button",{onClick:function(){n(!c)},className:"flex flex-col h-12 w-12 border-2 border-black justify-center items-center group cursor-pointer",alt:"menu-button",children:[Object(b.jsx)("div",{className:"".concat(a," ").concat(c?"rotate-45 translate-y-3 opacity-50 group-hover:opacity-100":"opacity-100 group-hover:opacity-50")}),Object(b.jsx)("div",{className:"".concat(a," ").concat(c?"opacity-0":"opacity-100 group-hover:opacity-50")}),Object(b.jsx)("div",{className:"".concat(a," ").concat(c?"-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100":"opacity-100 group-hover:opacity-50")})]})};var d=function(){return Object(b.jsx)("div",{className:"sticky top-0 bg-white",children:Object(b.jsx)("header",{className:"w-full h-10 mb-32 mt-4 text-black",children:Object(b.jsx)(j,{})})})};var h=function(e){var t=e.character;return Object(b.jsxs)("li",{className:"flex flex-col items-center m-2",alt:"character-icons",children:[Object(b.jsx)("h2",{className:"flex items-center text-center h-full",alt:t.name,children:t.name}),Object(b.jsx)("img",{src:t.image,className:"w-28 sm:w-28 sm:h-28 rounded-lg shadow-lg h-28",alt:t.name+" image"})]})},m=c(0),x=c(5);var p=function(e){var t=e.characters,c=e.pageNumber,r=e.setPageNumber,n=e.pageSize,a=Math.ceil(t.length/n);return Object(b.jsx)(m.b.Provider,{value:{className:"cl-icons"},children:Object(b.jsxs)("div",{className:"order-2 flex flex-row items-center justify-center m-1 mt- space-x-4",children:[Object(b.jsx)("button",{type:"button",className:"border rounded-md shadow bg-blue-500 hover:bg-blue-400 active:bg-blue-400 text-white p-1",onClick:function(){return 0===c?c:r(0)},children:Object(b.jsx)(x.c,{})}),Object(b.jsx)("button",{type:"button",className:"border rounded-md shadow bg-blue-500 hover:bg-blue-400 active:bg-blue-400 text-white p-1",onClick:function(){setTimeout((function(){return 0===c?c:r(c-1)}),200)},children:Object(b.jsx)(x.a,{})}),Object(b.jsx)("button",{type:"button",className:"border rounded-md shadow bg-blue-500 hover:bg-blue-400 active:bg-blue-400 text-white p-1",onClick:function(){setTimeout((function(){return c===a-1?c:r(c+1)}),200)},children:Object(b.jsx)(x.b,{})}),Object(b.jsx)("button",{type:"button",className:"border rounded-md shadow bg-blue-500 hover:bg-blue-400 active:bg-blue-400 text-white p-1",onClick:function(){return c===a?c:r(a-1)},children:Object(b.jsx)(x.d,{})})]})})};var g=function(e){var t=e.characters,c=Object(r.useState)(0),n=Object(i.a)(c,2),a=n[0],s=n[1],o=Object(r.useState)(6),l=Object(i.a)(o,2),u=l[0];return l[1],Object(b.jsx)("div",{className:"flex-col min-w-full min-h-full overflow-hidden p-1.5 mb-10 bg-blue-100 shadow-lg overflow-hidden",children:Object(b.jsxs)("div",{className:"background-none",children:[Object(b.jsx)("ul",{className:"grid grid-cols-2 order-1 sm:grid-cols-3 sm:px-28 md:px-44 lg:px-60 xl:px-96",children:function(e,c,r){var n=r*c,a=r*c+c;return t.slice(n,a)}(0,u,a).map((function(e){return Object(b.jsx)(h,{character:e},e.id)}))}),Object(b.jsx)(p,{characters:t,pageNumber:a,setPageNumber:s,pageSize:u})]})})};var f=function(){return Object(b.jsx)("div",{className:"flex-col min-w-screen min-h-full p-1.5 mt-10 bg-blue-100 shadow-lg overflow-hidden",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"location"}),Object(b.jsx)("li",{children:"location"}),Object(b.jsx)("li",{children:"location"}),Object(b.jsx)("li",{children:"location"})]})})};var O=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=function(e){return e.json()};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://rickandmortyapi.com/api/character/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return fetch("".concat(e,"?page=").concat(t)).then(a).then((function(r){console.log(r);var a=[].concat(Object(o.a)(c),Object(o.a)(r.results));return r.info.next!=="".concat(e,"?page=4")?(t++,s(e,t,a)):n(a)}))}return Object(r.useEffect)((function(){s()}),[]),Object(b.jsx)("div",{className:"h-screen w-screen flex-col",children:Object(b.jsxs)("div",{className:"h-screen w-screen bg-black bg-center bg-cover bg-fixed 2xl:pt-24 pt-4 ",children:[Object(b.jsx)(u,{}),Object(b.jsx)(d,{}),Object(b.jsx)(g,{characters:c}),Object(b.jsx)(f,{})]})})};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d59c14cd.chunk.js.map