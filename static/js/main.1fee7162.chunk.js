(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{115:function(e,n,t){"use strict";t.r(n);var r=t(4),a=t(0),o=t.n(a),c=t(16),i=t.n(c),l=(t(71),t(8)),u=t(22),d=t(3),p=t(135),s=t(133),b=t(132),f=t(131),v=t(56);function m(){var e=Object(r.a)(["\n  margin-left: 8px;\n  cursor: pointer;\n"]);return m=function(){return e},e}function g(){var e=Object(r.a)(["\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n"]);return g=function(){return e},e}function E(){var e=Object(r.a)(["\n  resize: none;\n  width: 100%;\n  overflow: hidden;\n  outline: none;\n  border: none;\n"]);return E=function(){return e},e}function O(){var e=Object(r.a)(["\n  min-height: 85px;\n  padding: 6px 8px 2px;\n"]);return O=function(){return e},e}function j(){var e=Object(r.a)(["\n  width: 284px;\n  margin-bottom: 8px;\n"]);return j=function(){return e},e}var x=d.b.div(j()),h=Object(d.b)(p.a)(O()),y=Object(d.b)(v.a)(E()),D=d.b.div(g()),I=Object(d.b)(f.a)(m()),w=o.a.memo((function(e){var n=e.list,t=e.text,r=void 0===t?"":t,a=e.onChange,c=e.closeForm,i=e.children,l=n?"\ub9ac\uc2a4\ud2b8\uc81c\ubaa9 \uc785\ub825":"\uce74\ub4dc\ub0b4\uc6a9 \uc785\ub825";return o.a.createElement(x,null,o.a.createElement(h,null,o.a.createElement(y,{placeholder:l,autoFocus:!0,value:r,onChange:function(e){return a(e)},onBlur:c})),o.a.createElement(D,null,i,o.a.createElement(I,{onMouseDown:c},"close")))})),k=t(134);function S(){var e=Object(r.a)(["\n  && {\n    color: white;\n    background: #2e2e2e;\n  }\n"]);return S=function(){return e},e}var T=Object(d.b)(k.a)(S()),A=function(e){var n=e.children,t=e.onClick;return o.a.createElement(T,{variant:"contained",onMouseDown:t},n)},C=t(21),_=t(6),L=t(12),R=t(34),P=t.n(R),z={"0\uce74\ub4dc":{text:"\uc804\uc5d0\ud560\uc77c",id:"0\uce74\ub4dc",list:"0\ub9ac\uc2a4\ud2b8"}};function F(){var e=Object(r.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    color: #df013a;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return F=function(){return e},e}function H(){var e=Object(r.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    color: #01df01;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return H=function(){return e},e}function M(){var e=Object(r.a)(["\n  margin: 0 0 8px 0;\n  position: relative;\n  max-width: 100%;\n  word-wrap: break-word;\n"]);return M=function(){return e},e}var B=d.b.div(M()),G=Object(d.b)(f.a)(H(),B),N=Object(d.b)(f.a)(F(),B);var J=function(e){var n=e.text,t=e.id,r=e.index,c=e.listID;console.log(c),console.log(t);var i=Object(l.c)(),d=Object(a.useState)(!1),f=Object(u.a)(d,2),v=f[0],m=f[1],g=Object(a.useState)(n),E=Object(u.a)(g,2),O=E[0],j=E[1];console.log(O);var x=function(e){i(function(e,n){return{type:"DELETE_CARD",payload:{id:e,listID:n}}}(t,c))};return console.log(n),console.log(t),v?o.a.createElement(w,{text:O,onChange:function(e){return function(e){j(e.target.value)}(e)},closeForm:function(e){m(!1)}},o.a.createElement(A,{onClick:function(e){return function(e){e.preventDefault(),i(function(e,n,t){return{type:"EDIT_CARD",payload:{id:e,listID:n,cardText:t}}}(t,c,O)),m(!1)}(e)}},"save")):o.a.createElement(C.b,{draggableId:String(t),index:r},(function(e){return o.a.createElement(B,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),o.a.createElement(p.a,null,O&&o.a.createElement(G,{onMouseDown:function(){return m(!0)},fontSize:"small"},"edit"),o.a.createElement(N,{fontSize:"small",onMouseDown:x},"delete"),o.a.createElement(b.a,null,o.a.createElement(s.a,null,n))))}))},W=t(14),$={"0\ub9ac\uc2a4\ud2b8":{id:"0\ub9ac\uc2a4\ud2b8",title:"myList",cards:["0\uce74\ub4dc"]}};function q(){var e=Object(r.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 3px;\n    height: 36px;\n    margin-left: 8px;\n    width: 300px;\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: ",";\n    color: ",";\n    background-color: ",";\n  "]);return q=function(){return e},e}var K=function(e){var n=e.list,t=e.children,r=e.onClick,a=n?1:.5,c=n?"white":"inherit",i=n?"rgba(0,0,0,.15)":"inherit",l=d.b.div(q(),a,c,i);return o.a.createElement(l,{onClick:r},o.a.createElement(f.a,null,"add"),t)};var Q=function(e){console.log(e);var n=e.listID,t=e.list,r=Object(l.c)(),c=Object(a.useState)({formOpen:!1,text:""}),i=Object(u.a)(c,2),d=i[0],p=i[1];return d.formOpen?o.a.createElement(w,{list:t,text:d.text,onChange:function(e){return function(e){p(Object(L.a)({},d,{text:e.target.value}))}(e)},closeForm:function(){p({formOpen:!1})}},o.a.createElement(A,{onClick:t?function(){d.text&&p({text:""}),r({type:"ADD_LIST",payload:{title:d.text,id:P()()}})}:function(){d.text&&p({text:""}),r(function(e,n){return{type:"ADD_CARD",payload:{listID:e,text:n,id:P()()}}}(n,d.text))}},t?"add list":"add card")):o.a.createElement(K,{list:t,onClick:function(){p(Object(L.a)({},d,{formOpen:!0}))}},t?"\ub9ac\uc2a4\ud2b8 \ucd94\uac00":"\uce74\ub4dc \ucd94\uac00")};function U(){var e=Object(r.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  margin-top: 3px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    color: #df013a;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return U=function(){return e},e}function V(){var e=Object(r.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    color: #01df01;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return V=function(){return e},e}function X(){var e=Object(r.a)(["\n  transition: 0.3s ease-in;\n  ",":hover & {\n    background: #ccc;\n  }\n"]);return X=function(){return e},e}function Y(){var e=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"]);return Y=function(){return e},e}function Z(){var e=Object(r.a)(["\n  width: 96.5%;\n  border: none;\n  outline-color: black;\n  border-radius: 3px;\n  margin-bottom: 3px;\n  padding: 5px;\n"]);return Z=function(){return e},e}function ee(){var e=Object(r.a)(["\n  position: relative;\n  background-color: #dfe3e6;\n  border-radius: 3px;\n  width: 300px;\n  padding: 8px;\n  height: 100%;\n  margin: 0 8px 0 0;\n"]);return ee=function(){return e},e}var ne=d.b.div(ee()),te=d.b.input(Z()),re=d.b.div(Y()),ae=d.b.h4(X(),re),oe=Object(d.b)(f.a)(V(),ne),ce=Object(d.b)(f.a)(U(),ne);var ie=function(e){var n=e.title,t=e.cards,r=e.listID,c=(e.list,e.index),i=(e.id,Object(a.useState)(!1)),d=Object(u.a)(i,2),p=d[0],s=d[1],b=Object(a.useState)(n),f=Object(u.a)(b,2),v=f[0],m=f[1],g=Object(l.c)(),E=function(e){s(!1),g(function(e,n){return{type:"EDIT_LIST",payload:{listID:e,title:n}}}(r,v))},O=function(e){e.preventDefault(),m(e.target.value)},j=function(){g(function(e){return{type:"DELETE_LIST",payload:{listID:e}}}(r))};return o.a.createElement(C.b,{draggableId:String(r),index:c},(function(e){return o.a.createElement(ne,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),o.a.createElement(C.c,{droppableId:String(r),type:"card"},(function(e){return o.a.createElement("div",null,p?o.a.createElement("form",{onSubmit:E},o.a.createElement(te,{type:"text",value:v,onChange:O,placeholder:"\uc218\uc815\ud6c4 enter\ub97c \uc785\ub825\ud558\uc138\uc694..."})):o.a.createElement(re,null,o.a.createElement(oe,{onMouseDown:function(){return s(!p)},fontSize:"small"},"edit"),o.a.createElement(ce,{onClick:j},"delete"),o.a.createElement(ae,null," ",n)),o.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),t.map((function(e,n){return o.a.createElement(J,{text:e.text,key:e.id,id:e.id,index:n,listID:r})})),e.placeholder,o.a.createElement(Q,{listID:r})))})))}))};function le(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return le=function(){return e},e}var ue=d.b.div(le());var de=function(){var e=Object(l.d)((function(e){return e.lists})),n=Object(l.d)((function(e){return e.origin}));console.log(n);var t=Object(l.d)((function(e){return e.cards})),r=Object(l.c)();return console.log(e),o.a.createElement("div",null,o.a.createElement(C.a,{onDragEnd:function(e){var n=e.destination,t=e.source,a=e.draggableId,o=e.type;n&&r(function(e,n,t,r,a,o){return{type:"DRAG_HAPPENED",payload:{droppableIdStart:e,droppableIdEnd:n,droppableIndexStart:t,droppableIndexEnd:r,draggableId:a,type:o}}}(t.droppableId,n.droppableId,t.index,n.index,a,o))}},o.a.createElement(C.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},(function(r){return o.a.createElement(ue,Object.assign({},r.droppableProps,{ref:r.innerRef}),n.map((function(n,r){var a=e[n];if(a){var c=a.cards.map((function(e){return t[e]}));return o.a.createElement(ie,{list:a,listID:a.id,title:a.title,key:a.id,cards:c,index:r})}})),r.placeholder,o.a.createElement(Q,{list:!0}))}))))};function pe(){var e=Object(r.a)(["\n  display: flex;\n  position: fixed;\n  z-index: 1;\n  height: 75px;\n  padding: 1rem;\n  font-size: 1.25rem;\n  text-align: justify;\n  margin: 0 auto;\n  color: #e6e6e6;\n  font-weight: bold;\n"]);return pe=function(){return e},e}var se=d.b.div(pe());var be=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(de,null),o.a.createElement(se,null,"Trello\uc758 \ub9ac\uc2a4\ud2b8 \uc640 \uce74\ub4dc \ucd94\uac00,\uc218\uc815,\uc0ad\uc81c \ub4dc\ub798\uadf8 \uc564 \ub4dc\ub86d \uae30\ub2a5\uc774 \uc788\uc2b5\ub2c8\ub2e4."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=t(60),ve=t(7),me=["0\ub9ac\uc2a4\ud2b8"];var ge=Object(ve.c)({origin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_LIST":return[].concat(Object(W.a)(e),["".concat(n.payload.id,"\ub9ac\uc2a4\ud2b8")]);case"DRAG_HAPPENED":var t=n.payload,r=t.droppableIndexStart,a=t.droppableIndexEnd,o=t.type,c=Object(W.a)(e);if("list"===o){var i=c.splice(r,1);return c.splice.apply(c,[a,0].concat(Object(W.a)(i))),c}return e;case"DELETE_LIST":var l=n.payload.listID,u=Object(W.a)(e),d=u.filter((function(e){return e!==l}));return d;default:return e}},lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_LIST":var t=n.payload,r=t.title,a=t.id,o={id:"".concat(a,"\ub9ac\uc2a4\ud2b8"),title:r,cards:[]},c=Object(L.a)({},e,Object(_.a)({},"".concat(a,"\ub9ac\uc2a4\ud2b8"),o));return c;case"ADD_CARD":var i=n.payload,l=i.listID,u=i.id,d=e[l];return d.cards.push("".concat(u,"\uce74\ub4dc")),Object(L.a)({},e,Object(_.a)({},l,d));case"DRAG_HAPPENED":var p=n.payload,s=p.droppableIdStart,b=p.droppableIdEnd,f=p.droppableIndexEnd,v=p.droppableIndexStart,m=p.type;if("list"===m)return e;if(s===b){var g,E=e[s],O=E.cards.splice(v,1);return(g=E.cards).splice.apply(g,[f,0].concat(Object(W.a)(O))),Object(L.a)({},e,Object(_.a)({},s,E))}if(s!==b){var j,x,h=e[s],y=h.cards.splice(v,1),D=e[b];return(j=D.cards).splice.apply(j,[f,0].concat(Object(W.a)(y))),Object(L.a)({},e,(x={},Object(_.a)(x,s,h),Object(_.a)(x,b,D),x))}return e;case"DELETE_CARD":var I=n.payload,w=I.listID,k=I.id,S=e[w],T=S.cards.filter((function(e){return e!==k}));return Object(L.a)({},e,Object(_.a)({},w,Object(L.a)({},S,{cards:T})));case"EDIT_LIST":var A=n.payload,C=A.listID,R=A.title,P=e[C];return P.title=R,Object(L.a)({},e,Object(_.a)({},C,P));case"DELETE_LIST":var z=n.payload.listID,F=e;return delete F[z],F;default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_CARD":var t=n.payload,r=t.listID,a=t.text,o=t.id,c={text:a,id:"".concat(o,"\uce74\ub4dc"),list:r};return Object(L.a)({},e,Object(_.a)({},"".concat(o,"\uce74\ub4dc"),c));case"EDIT_CARD":var i=n.payload,l=i.id,u=i.cardText,d=e[l];return d.text=u,Object(L.a)({},e,Object(_.a)({},"".concat(l,"\uce74\ub4dc"),d));case"DELETE_CARD":var p=n.payload.id,s=e;return delete s[p],s;default:return e}}}),Ee=t(39),Oe=t(61),je=t.n(Oe),xe=t(62),he=t.n(xe),ye={key:"root",storage:je.a},De=Object(Ee.a)(ye,ge);function Ie(){var e=Object(r.a)(["\n\n body{\n    background-color: #6E6E6E;\n }\n"]);return Ie=function(){return e},e}var we=function(){var e=Object(ve.e)(De,Object(ve.a)(he.a));return{store:e,persistor:Object(Ee.b)(e)}}(),ke=we.persistor,Se=we.store,Te=Object(d.a)(Ie());i.a.render(o.a.createElement(l.a,{store:Se},o.a.createElement(fe.a,{loading:null,persistor:ke},o.a.createElement(Te,null),o.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,n,t){e.exports=t(115)},71:function(e,n,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.1fee7162.chunk.js.map