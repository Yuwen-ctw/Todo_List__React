(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{168:function(e,n,t){},169:function(e,n,t){},191:function(e,n){},193:function(e,n){},204:function(e,n){},206:function(e,n){},234:function(e,n){},236:function(e,n){},237:function(e,n){},242:function(e,n){},244:function(e,n){},263:function(e,n){},275:function(e,n){},278:function(e,n){},307:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,s,u,l,d=t(0),p=t.n(d),b=t(158),f=t.n(b),j=(t(168),t(169),t(22)),h=t(4),O=t(3),x=t(8),v=t(7),m=t(15),g=t(36),k=t.n(g),w="https://todo-list.alphacamp.io/api/auth",y=function(){var e=Object(x.a)(Object(O.a)().mark((function e(n){var t,r,a,c;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.username,r=n.password,e.prev=1,e.next=4,k.a.post("".concat(w,"/login"),{username:t,password:r});case 4:if(a=e.sent,c=a.data,!c.authToken){e.next=9;break}return e.abrupt("return",Object(m.a)(Object(m.a)({},c),{},{success:!0}));case 9:return e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),console.error("[Login Failed]",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(n){return e.apply(this,arguments)}}(),C=function(){var e=Object(x.a)(Object(O.a)().mark((function e(n){var t,r,a,c,o;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.username,r=n.password,a=n.email,e.prev=1,e.next=4,k.a.post("".concat(w,"/register"),{username:t,password:r,email:a});case 4:if(c=e.sent,o=c.data,!o.authToken){e.next=9;break}return e.abrupt("return",Object(m.a)(Object(m.a)({},o),{},{success:!0}));case 9:return e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),console.error("[Signup Failed]",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(n){return e.apply(this,arguments)}}(),D=function(){var e=Object(x.a)(Object(O.a)().mark((function e(n){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(w,"/test-token"),{headers:{Authorization:"Bearer "+n}});case 3:return t=e.sent,e.abrupt("return",t.data.success);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),T=t(62),E=t(1),S={isAuthenticated:!1,currentMember:null,register:null,login:null,logout:null},N=Object(d.createContext)(S),F=function(){return Object(d.useContext)(N)},z=function(e){var n=e.children,t=Object(d.useState)(null),r=Object(v.a)(t,2),a=r[0],c=r[1],o=Object(d.useState)(null),i=Object(v.a)(o,2),s=i[0],u=i[1],l=Object(h.j)().pathname;return Object(d.useEffect)((function(){function e(){return(e=Object(x.a)(Object(O.a)().mark((function e(){var n,t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("authToken")){e.next=5;break}return u(null),c(!1),e.abrupt("return");case 5:return e.next=7,D(n);case 7:e.sent?(t=T.decode(n),c(!0),u(t)):(u(null),c(!1));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[l]),Object(E.jsx)(N.Provider,{value:{isAuthenticated:a,currentMember:s,register:function(){var e=Object(x.a)(Object(O.a)().mark((function e(n){var t,r,a,o;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C({username:n.username,password:n.password,email:n.email});case 3:return t=e.sent,r=t.success,a=t.authToken,(o=T.decode(a))?(u(o),c(!0),localStorage.setItem("authToken",a)):(u(null),c(!1)),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}(),login:function(){var e=Object(x.a)(Object(O.a)().mark((function e(n){var t,r,a,o;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y({username:n.username,password:n.password});case 3:return t=e.sent,r=t.success,a=t.authToken,(o=T.decode(a))?(u(o),c(!0),localStorage.setItem("authToken",a)):(u(null),c(!1)),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}(),logout:function(){localStorage.removeItem("authToken"),u(null),c(!1)}},children:n})},L=function(){var e=F().isAuthenticated,n=Object(h.l)();Object(d.useEffect)((function(){if(e)return n("./todos");n("/login")}),[e,n])},M=t(10),R=t(11),A=R.a.div(r||(r=Object(M.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"]))),I=R.a.div(a||(a=Object(M.a)(["\n  width: 50%;\n  margin-top: 30px;\n"]))),B=R.a.button(c||(c=Object(M.a)(["\n  border-radius: 30px;\n  background-color: #ff6600;\n  border: none;\n\n  color: white;\n  min-width: 300px;\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: bold;\n  padding: 6px 0;\n  margin: 2rem 0;\n\n  &.hover {\n    cursor: pointer;\n  }\n"]))),P=R.a.div(o||(o=Object(M.a)(["\n  color: #0062ff;\n  font-size: 16px;\n  font-weight: 400;\n"]))),V=["title","titleId"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Z.apply(this,arguments)}function H(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function J(e,n){var t=e.title,r=e.titleId,a=H(e,V);return d.createElement("svg",Z({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),t?d.createElement("title",{id:r},t):null,i||(i=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.6996 18.4709C25.6996 18.4709 18.2328 30.5781 12.1109 30.5781C1.40314 30.5781 11.3821 7.51318 19.1916 7.51318C24.641 7.51318 25.6996 18.4709 25.6996 18.4709Z",fill:"#FF6600"})),s||(s=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.5723 33.6972C32.4451 35.9607 29.8198 37.6976 26.9044 38.7701C23.989 39.8426 20.8639 40.2213 17.7767 39.8761C14.6895 39.5309 11.7252 38.4713 9.11881 36.7813C6.51245 35.0914 4.33573 32.8175 2.76123 30.1401C4.5314 32.5477 7.53375 34.1527 11.803 34.1527C22.3199 34.1527 28.2899 25.98 28.2899 25.98C28.2899 25.98 28.8062 32.4392 34.5593 33.6972H34.5723Z",fill:"#FF6600"})),u||(u=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.7223 10.7451C39.2963 13.7527 40.0781 17.1116 39.9939 20.505C39.9096 23.8984 38.9621 27.2144 37.2407 30.1401C35.8792 29.3764 34.8725 28.1082 34.4379 26.609L32.1558 19.7724L37.7223 10.7451Z",fill:"#FF6600"})),l||(l=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0031 0.0173688C25.0185 0.0140335 29.8513 1.89881 33.5398 5.29665L29.7521 11.4088C28.3811 7.84302 25.5957 4.2729 20.1767 4.2729C9.07841 4.2729 0.852307 16.3888 0.852307 23.9846C0.849861 24.9669 0.975283 25.9454 1.22543 26.8953C0.115582 23.8725 -0.247948 20.6265 0.165719 17.4331C0.579385 14.2398 1.75802 11.1934 3.60147 8.55306C5.44491 5.91269 7.89866 3.75634 10.7542 2.26726C13.6097 0.778179 16.7826 0.000388507 20.0031 0V0.0173688Z",fill:"#FF6600"})))}var K,q,G,U,$,Q,W,X,Y,_,ee,ne,te=d.forwardRef(J),re=(t.p,t.p+"static/media/check-active.95ca055c.svg"),ae=t.p+"static/media/check-circle.30720b46.svg",ce=t.p+"static/media/check-hover.5e00062b.svg",oe=R.a.form(K||(K=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background-color: #f5f8fa;\n  width: 100%;\n  height: 54px;\n  border-bottom: 2px solid black;\n"]))),ie=R.a.label(q||(q=Object(M.a)(["\n  font-size: 14;\n  color: '#696974';\n  text-align: start;\n"]))),se=R.a.input(G||(G=Object(M.a)(["\n  outline: none;\n  border: none;\n  background-color: #f5f8fa;\n  border-radius: 0px;\n"]))),ue=function(e){var n=e.label,t=e.type,r=e.placeholder,a=e.value,c=e.onChange;return Object(E.jsxs)(oe,{children:[Object(E.jsx)(ie,{children:n}),Object(E.jsx)(se,{type:t||"text",placeholder:r||"",value:a||"",onChange:function(e){return null===c||void 0===c?void 0:c(e.target.value)},autoComplete:"off"})]})},le=R.a.header(U||(U=Object(M.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  color: var(--major);\n  padding: 0 16px;\n\n  h3 {\n    font-weight: 400;\n    user-select: none;\n  }\n"]))),de=R.a.div($||($=Object(M.a)(["\n  color: var(--gray);\n  span {\n    color: var(--major);\n  }\n"]))),pe=function(e){var n=e.userName;return Object(E.jsxs)(le,{children:[Object(E.jsx)("h3",{children:"Tasks"}),Object(E.jsxs)(de,{children:["Hi ",Object(E.jsx)("span",{children:n})]})]})},be=t(48),fe=R.a.div(Q||(Q=Object(M.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  &.active {\n    box-shadow: 0 17px 0 -16px var(--major);\n  }\n"]))),je=R.a.label(W||(W=Object(M.a)(["\n  display: inline-flex;\n  font-size: 30px;\n  transition: color 0.2s ease-out;\n  font-weight: 300;\n\n  &:after {\n    content: '+';\n  }\n"]))),he=R.a.div(X||(X=Object(M.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  user-select: none;\n\n  input {\n    flex: 1;\n    padding: 8px 12px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--major);\n      font-size: 13px;\n    }\n  }\n  $.active {\n    input::placeholder {\n      color: var(--gray);\n    }\n  }\n"]))),Oe=R.a.div(Y||(Y=Object(M.a)(["\n  button {\n    font-size: 13px;\n    color: var(--major);\n    padding-right: 5px;\n    display: none;\n  }\n\n  &.active {\n    button {\n      display: block;\n    }\n  }\n"]))),xe=function(e){var n=e.inputValue,t=e.onChange,r=e.onAddTodo;return Object(E.jsxs)(fe,{className:Object(be.a)({active:n.length>0}),children:[Object(E.jsx)(je,{className:"icon",htmlFor:"add-todo-input",onClick:r}),Object(E.jsx)(he,{children:Object(E.jsx)("input",{id:"add-todo-input",type:"text",placeholder:"\u65b0\u589e\u5de5\u4f5c",onChange:function(e){return t(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&r()},value:n})}),Object(E.jsx)(Oe,{className:Object(be.a)({active:n.length>0}),children:Object(E.jsx)("button",{className:"btn-reset",onClick:r,children:"\u65b0\u589e"})})]})},ve=R.a.div(_||(_=Object(M.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  .task-item-body-input {\n    user-select: none;\n    display: none;\n    flex: 1;\n    padding: 8px 0px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--gray);\n      font-size: 13px;\n    }\n  }\n\n  &:hover {\n    background: #fff3eb;\n    box-shadow: inset 0 0 0 1px #fff3eb;\n\n    .task-item-action .btn-destroy {\n      display: inline-flex;\n    }\n  }\n\n  &.done {\n    .task-item-body {\n      color: var(--gray);\n      text-decoration: line-through;\n    }\n\n    .icon-checked {\n      background-image: url(",");\n    }\n  }\n\n  &.edit {\n    .task-item-body-input {\n      display: block;\n    }\n    .task-item-body-text {\n      display: none;\n    }\n    .task-item-action {\n      display: none;\n    }\n  }\n\n  .task-item-checked {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .task-item-body {\n    font-weight: 400;\n    padding: 8px 12px;\n    flex: 1;\n    display: flex;\n  }\n\n  .task-item-action {\n    .btn-destroy {\n      display: none;\n      font-size: 30px;\n      transition: color 0.2s ease-out;\n      font-weight: 300;\n      &:after {\n        content: '\xd7';\n      }\n    }\n  }\n\n  .icon-checked {\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n\n    &:hover {\n      transition: background-image 0.5s;\n      background-image: url(",");\n    }\n  }\n"])),re,ae,ce),me=function(e){var n=e.todo,t=e.onSave,r=e.onDelete,a=e.onToggleDone,c=e.onChangeMode,o=Object(d.useRef)(null);return Object(E.jsxs)(ve,{className:Object(be.a)(n.isDone&&"done",n.isEdit&&"edit"),children:[Object(E.jsx)("div",{className:"task-item-checked",children:Object(E.jsx)("span",{className:"icon icon-checked",onClick:function(){return a(n.id)}})}),Object(E.jsxs)("div",{className:"task-item-body",children:[Object(E.jsx)("span",{className:"task-item-body-text",onDoubleClick:function(){return c(n.id)},children:n.title}),Object(E.jsx)("input",{ref:o,className:"task-item-body-input",defaultValue:n.title,onKeyDown:function(e){var r=o.current.value.trim();r.length>0&&"Enter"===e.key?t(n.id,r):"Escape"===e.key&&t(n.id,n.title)}})]}),Object(E.jsx)("div",{className:"task-item-action ",children:Object(E.jsx)("button",{className:"btn-reset btn-destroy icon",onClick:function(){return r(n.id)}})})]})},ge=function(e){var n=e.todos,t=e.onSave,r=e.onDelete,a=e.onToggleDone,c=e.onChangeMode;return Object(E.jsx)("div",{children:n.map((function(e){return Object(E.jsx)(me,{todo:e,onToggleDone:a,onChangeMode:c,onSave:t,onDelete:r},e.id)}))})},ke=R.a.footer(ee||(ee=Object(M.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: 0 16px;\n  p {\n    font-size: 14px;\n    font-weight: 300;\n    margin: 2rem 0 1rem;\n  }\n"]))),we=R.a.button(ne||(ne=Object(M.a)(["\n  padding: 0;\n  border: 0;\n  background: none;\n  vertical-align: baseline;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  cursor: pointer;\n  outline: 0;\n\n  font-size: 14px;\n  font-weight: 300;\n  margin: 2rem 0 1rem;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),ye=function(e){var n=e.todosLength,t=F().logout;return Object(E.jsxs)(ke,{children:[Object(E.jsxs)("p",{children:["\u5269\u9918\u9805\u76ee\u6578\uff1a ",n]}),Object(E.jsx)(we,{onClick:function(){t()},children:"\u767b\u51fa"})]})},Ce=t(37),De=t.n(Ce),Te=function(){var e=Object(d.useState)(""),n=Object(v.a)(e,2),t=n[0],r=n[1],a=Object(d.useState)(""),c=Object(v.a)(a,2),o=c[0],i=c[1],s=Object(h.l)(),u=F(),l=u.isAuthenticated,p=u.login;function b(){return b=Object(x.a)(Object(O.a)().mark((function e(n,t){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.length){e.next=2;break}return e.abrupt("return");case 2:if(0!==t.length){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,p({username:n,password:t});case 6:if(!e.sent){e.next=10;break}return De.a.fire({position:"top",icon:"success",title:"\u767b\u5165\u6210\u529f",showConfirmButton:!1,timer:1e3}),e.abrupt("return");case 10:De.a.fire({position:"top",icon:"error",title:"\u767b\u5165\u5931\u6557",showConfirmButton:!1,timer:1e3});case 11:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}return Object(d.useEffect)((function(){l&&s("/todos")}),[s,l]),Object(E.jsxs)(A,{children:[Object(E.jsx)("div",{children:Object(E.jsx)(te,{})}),Object(E.jsx)("h1",{children:"\u767b\u5165 Todo"}),Object(E.jsx)(I,{children:Object(E.jsx)(ue,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:t,onChange:function(e){return r(e)}})}),Object(E.jsx)(I,{children:Object(E.jsx)(ue,{label:"\u5bc6\u78bc",type:"password",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:o,onChange:function(e){return i(e)}})}),Object(E.jsx)(B,{onClick:function(){return function(e,n){return b.apply(this,arguments)}(t,o)},children:"\u767b\u5165"}),Object(E.jsx)(j.b,{to:"/signup",children:Object(E.jsx)(P,{children:"\u8a3b\u518a"})})]})},Ee=function(){var e=Object(d.useState)(""),n=Object(v.a)(e,2),t=n[0],r=n[1],a=Object(d.useState)(""),c=Object(v.a)(a,2),o=c[0],i=c[1],s=Object(d.useState)(""),u=Object(v.a)(s,2),l=u[0],p=u[1],b=F(),f=b.isAuthenticated,m=b.register,g=Object(h.l)();function k(){return k=Object(x.a)(Object(O.a)().mark((function e(n,t,r){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.length){e.next=2;break}return e.abrupt("return");case 2:if(0!==t.length){e.next=4;break}return e.abrupt("return");case 4:if(0!==r.length){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,m({username:n,password:t,email:r});case 8:if(!e.sent){e.next=12;break}return De.a.fire({position:"top",icon:"success",title:"\u8a3b\u518a\u6210\u529f",showConfirmButton:!1,timer:1e3}),e.abrupt("return");case 12:De.a.fire({position:"top",icon:"error",title:"\u8a3b\u518a\u5931\u6557",showConfirmButton:!1,timer:1e3});case 13:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}return Object(d.useEffect)((function(){if(f)return g("/todos")}),[g,f]),Object(E.jsxs)(A,{children:[Object(E.jsx)("div",{children:Object(E.jsx)(te,{})}),Object(E.jsx)("h1",{children:"\u5efa\u7acb\u60a8\u7684\u5e33\u865f"}),Object(E.jsx)(I,{children:Object(E.jsx)(ue,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:t,onChange:function(e){return r(e)}})}),Object(E.jsx)(I,{children:Object(E.jsx)(ue,{label:"Email",placeholder:"\u8acb\u8f38\u5165Email",type:"email",value:l,onChange:function(e){return p(e)}})}),Object(E.jsx)(I,{children:Object(E.jsx)(ue,{label:"\u5bc6\u78bc",type:"password",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:o,onChange:function(e){return i(e)}})}),Object(E.jsx)(B,{onClick:function(){return function(e,n,t){return k.apply(this,arguments)}(t,o,l)},children:"\u8a3b\u518a"}),Object(E.jsx)(j.b,{to:"/login",children:Object(E.jsx)(P,{children:"\u53d6\u6d88"})})]})},Se=t(16),Ne="https://todo-list.alphacamp.io/api",Fe=k.a.create({baseURL:"https://todo-list.alphacamp.io/api"});Fe.interceptors.request.use((function(e){var n=localStorage.getItem("authToken");return n&&(e.headers.Authorization="Bearer "+n),e}),(function(e){return console.error(e)}));var ze=function(){var e=Object(x.a)(Object(O.a)().mark((function e(){var n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Fe.get("".concat(Ne,"/todos"));case 3:return n=e.sent,e.abrupt("return",n.data.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("[Get Todos failed]: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Le=function(){var e=Object(x.a)(Object(O.a)().mark((function e(n){var t,r,a;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.title,r=n.isDone,e.prev=1,e.next=4,Fe.post("".concat(Ne,"/todos"),{title:t,isDone:r});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.error("[Create Todo failed]: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),Me=function(){var e=Object(x.a)(Object(O.a)().mark((function e(n){var t,r,a,c;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,r=n.title,a=n.isDone,e.prev=1,e.next=4,Fe.patch("".concat(Ne,"/todos/").concat(t),{title:r,isDone:a});case 4:return c=e.sent,e.abrupt("return",c.data);case 8:e.prev=8,e.t0=e.catch(1),console.error("[Patch Todo failed]: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),Re=function(){var e=Object(x.a)(Object(O.a)().mark((function e(n){var t,r;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,e.prev=1,e.next=4,Fe.delete("".concat(Ne,"/todos/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.error("[Delete Todo failed]: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),Ae=[{title:"Learn react-router",isDone:!0,id:1},{title:"Learn to create custom hooks",isDone:!1,id:2},{title:"Learn to use context",isDone:!0,id:3},{title:"Learn to implement auth",isDone:!1,id:4}],Ie=function(){var e=Object(d.useState)(""),n=Object(v.a)(e,2),t=n[0],r=n[1],a=Object(d.useState)(Ae),c=Object(v.a)(a,2),o=c[0],i=c[1],s=F(),u=s.isAuthenticated,l=s.currentMember,p=Object(h.l)();Object(d.useEffect)((function(){if(!u)return p("/login")}),[p,u]),Object(d.useEffect)((function(){var e=function(){var e=Object(x.a)(Object(O.a)().mark((function e(){var n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ze();case 3:n=e.sent,i(n.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{isEdit:!1})}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var b=function(){var e=Object(x.a)(Object(O.a)().mark((function e(){var n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.trim().length){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,Le({title:t,isDone:!1});case 5:n=e.sent,i((function(e){return[].concat(Object(Se.a)(e),[Object(m.a)(Object(m.a)({},n),{},{isEdit:!1})])})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:r("");case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(x.a)(Object(O.a)().mark((function e(n){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.find((function(e){return e.id===n})),e.prev=1,e.next=4,Me({id:n,isDone:!t.isDone});case 4:i((function(e){return e.map((function(e){return e.id===n?Object(m.a)(Object(m.a)({},e),{},{isDone:!e.isDone}):e}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),j=function(){var e=Object(x.a)(Object(O.a)().mark((function e(n,t){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me({id:n,title:t});case 2:i((function(e){return e.map((function(e){return e.id===n?Object(m.a)(Object(m.a)({},e),{},{title:t,isEdit:!1}):e}))}));case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),g=function(){var e=Object(x.a)(Object(O.a)().mark((function e(n){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Re({id:n});case 3:i((function(e){return e.filter((function(e){return e.id!==n}))})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return Object(E.jsxs)("div",{children:["TodoPage",Object(E.jsx)(pe,{userName:null===l||void 0===l?void 0:l.name}),Object(E.jsx)(xe,{inputValue:t,onChange:function(e){return r(e)},onAddTodo:b}),Object(E.jsx)(ge,{todos:o,onToggleDone:f,onChangeMode:function(e){i((function(n){return n.map((function(n){return n.id===e?Object(m.a)(Object(m.a)({},n),{},{isEdit:!0}):n}))}))},onSave:j,onDelete:g}),Object(E.jsx)(ye,{todosLength:o.length})]})};var Be=function(){return Object(E.jsx)("div",{className:"app",children:Object(E.jsx)(j.a,{children:Object(E.jsx)(z,{children:Object(E.jsxs)(h.c,{children:[Object(E.jsx)(h.a,{path:"login",element:Object(E.jsx)(Te,{})}),Object(E.jsx)(h.a,{path:"signup",element:Object(E.jsx)(Ee,{})}),Object(E.jsx)(h.a,{path:"todos",element:Object(E.jsx)(Ie,{})}),Object(E.jsx)(h.a,{path:"*",element:Object(E.jsx)(L,{})})]})})})})},Pe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,308)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};f.a.createRoot(document.getElementById("root")).render(Object(E.jsx)(p.a.StrictMode,{children:Object(E.jsx)(Be,{})})),Pe()}},[[307,1,2]]]);
//# sourceMappingURL=main.59a4cf07.chunk.js.map