(this.webpackJsonpmoskom=this.webpackJsonpmoskom||[]).push([[0],{19:function(e,a,t){e.exports=t(36)},25:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(9),o=t.n(r),c=(t(24),t(25),t(8)),s=t(41),m=t(44),i=t(42),u=t(43),d=t(10),E=t(11),b=t(37),h=t(38),g=t(39),p=t(40),w=function(e,a){switch(!0){case e&&a:return"green";case!e&&a:return"red";default:return""}},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c"),l.a.createElement("ul",{style:{listStyle:"none",padding:0}},l.a.createElement("li",null,"\u041e\u0442 6 \u0434\u043e 32 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("li",null,"\u0426\u0438\u0444\u0440\u0443"),l.a.createElement("li",null,"\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0438 \u0441\u0442\u0440\u043e\u0447\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443")))},y=function(e){var a=e.setSubmitting,t=e.setModal,r=Object(n.useState)({email:"",name:"",password:"",checkPassword:""}),o=Object(c.a)(r,2),m=o[0],i=o[1],u=Object(n.useState)(!1),y=Object(c.a)(u,2),v=y[0],k=y[1],O=Object(n.useState)({email:!1,name:!1}),j=Object(c.a)(O,2),C=j[0],B=j[1],S=Object.values(m).every((function(e){return Boolean(e)})),P=!!m.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),A=!!m.name.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{3,40}$/),W=!!m.password.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,32}$/),N=!!m.checkPassword&&m.password===m.checkPassword;console.log(N);var x=S&&P&&A&&W&&N&&v,z=function(e){var a=e.target.name,t=e.target.value;i(Object(E.a)(Object(E.a)({},m),{},Object(d.a)({},a,t)))},Z=function(e){var a=e.target.name;B(Object(E.a)(Object(E.a)({},C),{},Object(d.a)({},a,!0)))};return l.a.createElement(b.a,{onSubmit:function(e){e.preventDefault(),a(!0),t(!1),console.log(JSON.stringify(m))}},l.a.createElement(h.a,null,l.a.createElement(g.a,{style:{fontWeight:"bold"},for:"email"},"Email"),l.a.createElement(p.a,{style:{borderColor:w(P,C.email)},value:m.email,onBlur:Z,onChange:z,type:"email",name:"email",id:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail"}),C.email&&!P&&l.a.createElement("p",{style:{color:"red"}},"\u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 email")),l.a.createElement(h.a,null,l.a.createElement(g.a,{style:{fontWeight:"bold"},for:"name"},"\u041d\u0438\u043a\u043d\u0435\u0439\u043c"),l.a.createElement(p.a,{style:{borderColor:w(A,C.name)},value:m.name,onBlur:Z,onChange:z,type:"text",name:"name",id:"name"}),C.name&&!A&&l.a.createElement("p",{style:{color:"red"}}," \u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u0438\u043a\u043d\u0435\u0439\u043c")),l.a.createElement(h.a,null,l.a.createElement(g.a,{style:{fontWeight:"bold"},for:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),l.a.createElement(p.a,{style:{borderColor:w(W,C.password)},value:m.pass,onBlur:Z,onChange:z,type:"password",name:"password",id:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),C.password&&!W&&l.a.createElement("p",{style:{color:"red"}}," \u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c")),l.a.createElement(f,null),l.a.createElement(h.a,null,l.a.createElement(g.a,{style:{fontWeight:"bold"},for:"checkPassword"},"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"),l.a.createElement(p.a,{style:{borderColor:w(N,C.checkPassword)},value:m.checkPassword,onBlur:Z,onChange:z,type:"password",name:"checkPassword",id:"checkPassword",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437 \u043f\u0430\u0440\u043e\u043b\u044c"}),C.checkPassword&&!N&&l.a.createElement("p",{style:{color:"red"}}," \u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442")),l.a.createElement(h.a,{check:!0},l.a.createElement(g.a,{check:!0},l.a.createElement(p.a,{value:v,onChange:function(){k(!v)},type:"checkbox",name:"conditions"})," ","\u042f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u0443\u0441\u043b\u043e\u0432\u0438\u044f ",l.a.createElement("a",{href:"#"},"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f"))),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(s.a,{disabled:!x,style:{backgroundColor:"#558CB7"}},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))},v=function(e){var a=Object(n.useState)(!1),t=Object(c.a)(a,2),r=t[0],o=t[1],d=r?"green":"#558CB7",E=e.buttonLabel,b=e.className,h=Object(n.useState)(!0),g=Object(c.a)(h,2),p=g[0],w=g[1],f=function(){return w(!p)};return l.a.createElement("div",null,l.a.createElement(s.a,{style:{backgroundColor:d,borderColor:"#558CB7"},color:"danger",onClick:f,disabled:r},E),l.a.createElement(m.a,{isOpen:p,toggle:f,className:b},l.a.createElement(i.a,{style:{border:"none"},toggle:f},"\u0420\u0435\u0433\u0438\u0441\u0442\u0430\u0440\u0446\u0438\u044f"),l.a.createElement(u.a,null,l.a.createElement(y,{setSubmitting:o,setModal:w}))))};t(35);var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,{buttonLabel:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",className:"registration"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.329271a8.chunk.js.map