(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(6),s=n.n(i);n(17),n(18),n(19);var l=function(){return Object(c.jsx)("div",{className:"Header",children:Object(c.jsx)("header",{className:"Header-header",children:Object(c.jsx)("h1",{children:"Tic Tac Toe"})})})},j=n(2),o=n(4);n(28);function u(e){var t=e.value,n=e.handleClick,a=e.xIsNext;return Object(c.jsx)("div",{className:"content-cell ".concat(a?"x_style":"o_style"),onClick:n,children:t})}n(29);var O=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(j.a)(t[n],3),a=c[0],r=c[1],i=c[2];if(e[a]&&e[a]===e[r]&&e[a]===e[i])return e[a]}return null};function d(){var e=Object(a.useState)(Array(9).fill(null)),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),s=Object(j.a)(i,2),l=s[0],d=s[1],b=Object(a.useState)(""),h=Object(j.a)(b,2),f=h[0],x=h[1],v=(Object(o.c)((function(e){return e})),Object(o.b)());return Object(a.useEffect)((function(){var e=O(n);e&&x(e)}),[n]),Object(c.jsxs)("div",{className:"mainContent",children:[[0,1,2,3,4,5,6,7,8].map((function(e){return Object(c.jsx)(u,{value:n[e],handleClick:function(){return function(e){var t=n.slice();t[e]=l?"X":"O",r(t),v({type:"CELLPOSITION"}),d(!l),!O(n)&&n[e]}(e)},xIsNext:l})})),f&&Object(c.jsx)("div",{id:"myModal",className:"winning-message",children:Object(c.jsxs)("div",{className:"winning-content",children:[Object(c.jsx)("span",{className:"close",children:"\xd7"}),Object(c.jsxs)("p",{children:["O"===f?"Player 1":"Player 2"," won!"]})]})})]})}var b=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{children:Object(c.jsx)(l,{})}),Object(c.jsx)("main",{className:"main-container",children:Object(c.jsx)(d,{})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},f=n(3),x=n(5),v={cellPosition:Array(9).fill(null),xIsNext:!1,winnerStatus:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CELLPOSITION":return v;case"PAGE2":case"PAGE3":return Object(x.a)(Object(x.a)({},e),{},{responseData:t.payload});default:return e}},N=Object(f.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),E=Object(f.c)(m,N);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(o.a,{store:E,children:Object(c.jsx)(b,{})})}),document.getElementById("root")),h()}},[[30,1,2]]]);
//# sourceMappingURL=main.de9a441e.chunk.js.map