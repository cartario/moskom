(this.webpackJsonpmoskom=this.webpackJsonpmoskom||[]).push([[0],{19:function(e,a,t){e.exports=t(36)},25:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(11),r=t.n(l),s=(t(24),t(25),t(9)),o=t(41),m=t(44),i=t(42),u=t(43),d=t(10),E=t(7),h=t(37),p=t(38),b=t(39),k=t(40),w=function(e,a,t){switch(!0){case a:return"success";case e&&!a:case t&&!a:return"error";default:return"default"}},v=function(e){var a=e.password,t=e.touched,n=!!a.match(/[0-9a-zA-Z]{6,32}$/),l=!!a.match(/(?=.*[a-z])(?=.*[A-Z])/),r=!!a.match(/(?=.*[0-9])/);return c.a.createElement("div",{className:"rules"},c.a.createElement("span",null,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c"),c.a.createElement("ul",null,c.a.createElement("li",{className:a.length<2&&!t?"default":w(a,n,t)},"\u041e\u0442 6 \u0434\u043e 32 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),c.a.createElement("li",{className:l||r||t?w(a,r,t):"default"},"\u0426\u0438\u0444\u0440\u0443"),c.a.createElement("li",{className:a.length<2&&!t?"default":w(a,l,t)},"\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0438 \u0441\u0442\u0440\u043e\u0447\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443")))},f=function(e){return c.a.createElement("div",{style:{fontSize:"12px"}},c.a.createElement("span",null,"\u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u0438\u043a\u043d\u0435\u0439\u043c. \u041d\u0438\u043a\u043d\u0435\u0439\u043c:"),c.a.createElement("ul",null,c.a.createElement("li",{className:"error"},"\u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 \u0431\u0443\u043a\u0432\u044b"),c.a.createElement("li",{className:"error"},"\u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0431\u043e\u043b\u0435\u0435 3-\u0445 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0431\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432 \u0438 \u0441\u043f\u0435\u0446\u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),c.a.createElement("li",null,"\u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b \u0438 \u043d\u0438\u0436\u043d\u0435\u0435 \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435")))},g=function(e){var a=e.form,t=e.touched;switch(!0){case a.email&&a.password===a.email:return c.a.createElement("span",{className:"checkPass error"},"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c \u0441 \u043f\u043e\u0447\u0442\u043e\u0439");case a.name&&a.password===a.name:return c.a.createElement("span",{className:"checkPass error"},"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c \u0441 \u043d\u0438\u043a\u043d\u0435\u0439\u043c\u043e\u043c");case t.checkPassword&&a.checkPassword!==a.password:return c.a.createElement("span",{className:"checkPass error"}," \u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442");default:return""}},O=function(e){e.setSubmitting,e.setModal;var a=e.setFormData,t=Object(n.useState)({email:"",name:"",password:"",checkPassword:""}),l=Object(s.a)(t,2),r=l[0],m=l[1],i=Object(n.useState)(!1),u=Object(s.a)(i,2),w=u[0],O=u[1],j=Object(n.useState)({email:!1,name:!1,password:!1,checkPassword:!1}),N=Object(s.a)(j,2),P=N[0],y=N[1],C=function(e){return{allFieldsFulled:Object.values(e).every((function(e){return Boolean(e)})),isValidEmail:!!e.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),isValidName:!!e.name.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{3,40}$/),isValidPassword:!!e.password.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,32}$/),isValidCheckPass:Boolean(e.checkPassword&&e.password===e.checkPassword&&e.checkPassword!==e.email&&e.checkPassword!==e.name)}}(r),S=C.allFieldsFulled,x=C.isValidEmail,B=C.isValidName,F=C.isValidPassword,D=C.isValidCheckPass,V=S&&x&&B&&F&&D&&w,z=function(e){var a=e.target.name,t=e.target.value;m(Object(E.a)(Object(E.a)({},r),{},Object(d.a)({},a,t)))},A=function(e){var a=e.target.name;y(Object(E.a)(Object(E.a)({},P),{},Object(d.a)({},a,!0)))};return c.a.createElement(h.a,{onSubmit:function(e){e.preventDefault(),a(r)}},c.a.createElement(p.a,null,c.a.createElement(b.a,{className:"label",for:"email"},"Email"),c.a.createElement(k.a,{valid:x&&P.email,invalid:!x&&P.email,value:r.email,onBlur:A,onChange:z,type:"email",name:"email",id:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail"}),P.email&&!x&&c.a.createElement("p",{className:"error"},"\u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 email")),c.a.createElement(p.a,null,c.a.createElement(b.a,{className:"label",for:"name"},"\u041d\u0438\u043a\u043d\u0435\u0439\u043c"),c.a.createElement(k.a,{valid:B&&P.name,invalid:!B&&P.name,value:r.name,onBlur:A,onChange:z,type:"text",name:"name",id:"name"}),!B&&P.name&&c.a.createElement(f,null)),c.a.createElement(p.a,null,c.a.createElement(b.a,{className:"label",for:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),c.a.createElement(k.a,{valid:F&&P.password,invalid:!F&&P.password,value:r.pass,onBlur:A,onChange:z,type:"password",name:"password",id:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),P.password&&!F&&c.a.createElement("p",{className:"error"}," \u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),c.a.createElement(v,{password:r.password,touched:P.password})),c.a.createElement(p.a,null,c.a.createElement(b.a,{className:"label",for:"checkPassword"},"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"),c.a.createElement(k.a,{valid:D&&P.checkPassword,invalid:!D&&P.checkPassword,value:r.checkPassword,onBlur:A,onChange:z,type:"password",name:"checkPassword",id:"checkPassword",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437 \u043f\u0430\u0440\u043e\u043b\u044c"}),r.checkPassword&&D?c.a.createElement("span",{className:"checkPass checkPassOk"}," \u041f\u0430\u0440\u043e\u043b\u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"):c.a.createElement(g,{form:r,touched:P})),c.a.createElement(p.a,{check:!0},c.a.createElement(b.a,{check:!0},c.a.createElement(k.a,{value:w,onChange:function(){return O(!w)},type:"checkbox",name:"conditions"})," ","\u042f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u0443\u0441\u043b\u043e\u0432\u0438\u044f ",c.a.createElement("a",{href:"#"},"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f"))),c.a.createElement("div",{className:"center"},c.a.createElement(o.a,{disabled:!V,style:{backgroundColor:"#558CB7"}},"\u0414\u0430\u043b\u0435\u0435")))},j=function(e){var a=e.setSubmitting,t=e.setModal,l=e.formData,r=e.setFormData,m=Object(n.useState)({sex:"",education:"",about:"",politic:!1,economic:!1,events:!1}),i=Object(s.a)(m,2),u=i[0],w=i[1],v=function(e){var a=e.target.name,t=e.target.value;"checkbox"!==e.target.type?w(Object(E.a)(Object(E.a)({},u),{},Object(d.a)({},a,t))):w(Object(E.a)(Object(E.a)({},u),{},Object(d.a)({},a,!u[a])))};return c.a.createElement(h.a,{onSubmit:function(e){e.preventDefault(),a(!0),t(!1),r(Object(E.a)(Object(E.a)({},l),u)),console.log(JSON.stringify(Object(E.a)(Object(E.a)({},l),u)))}},c.a.createElement(p.a,{tag:"fieldset",onChange:v},c.a.createElement("legend",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b"),c.a.createElement(p.a,{check:!0},c.a.createElement(b.a,{check:!0},c.a.createElement(k.a,{type:"radio",name:"sex",value:"\u041c"})," ","\u041c")),c.a.createElement(p.a,{check:!0},c.a.createElement(b.a,{check:!0},c.a.createElement(k.a,{type:"radio",name:"sex",value:"\u0416"})," ","\u0416"))),c.a.createElement(p.a,null,c.a.createElement(b.a,{for:"education"},"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),c.a.createElement(k.a,{type:"select",name:"education",id:"education",value:u.education,onChange:v},c.a.createElement("option",null),c.a.createElement("option",null,"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435"),c.a.createElement("option",null,"\u0421\u0440\u0435\u0434\u043d\u0435\u0435"),c.a.createElement("option",null,"\u0412\u044b\u0441\u0448\u0435\u0435"))),c.a.createElement(p.a,null,c.a.createElement(b.a,{for:"about"},"\u041e \u0441\u0435\u0431\u0435"),c.a.createElement(k.a,{type:"textarea",name:"about",id:"about",value:u.about,onChange:v})),c.a.createElement(b.a,null,"\u0425\u043e\u0447\u0443 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0443\u0431\u0440\u0438\u043a\u0438:"),c.a.createElement(p.a,{check:!0},c.a.createElement(b.a,{check:!0},c.a.createElement(k.a,{type:"checkbox",name:"politic",value:u.politic,onChange:v})," ","\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430")),c.a.createElement(p.a,{check:!0},c.a.createElement(b.a,{check:!0},c.a.createElement(k.a,{type:"checkbox",name:"economic",value:u.economic,onChange:v})," ","\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0430")),c.a.createElement(p.a,{check:!0},c.a.createElement(b.a,{check:!0},c.a.createElement(k.a,{type:"checkbox",name:"events",value:u.events,onChange:v})," ","\u041f\u0440\u043e\u0438\u0448\u0435\u0441\u0442\u0432\u0438\u044f")),c.a.createElement("p",null),c.a.createElement("div",{className:"center"},c.a.createElement(o.a,{style:{backgroundColor:"#558CB7"}},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))},N=function(e){var a=e.buttonLabel,t=e.className,l=Object(n.useState)(!1),r=Object(s.a)(l,2),d=r[0],E=r[1],h=Object(n.useState)(!1),p=Object(s.a)(h,2),b=p[0],k=p[1],w=Object(n.useState)(null),v=Object(s.a)(w,2),f=v[0],g=v[1],N=function(){return k(!b)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{style:{backgroundColor:d?"green":"#558CB7"},onClick:N,disabled:d},a),c.a.createElement(m.a,{isOpen:b,toggle:N,className:t},c.a.createElement(i.a,{style:{border:"none"},toggle:N},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),c.a.createElement(u.a,null,f?c.a.createElement(j,{setFormData:g,formData:f,setSubmitting:E,setModal:k}):c.a.createElement(O,{setFormData:g,setSubmitting:E,setModal:k}))))};t(35);var P=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(N,{buttonLabel:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",className:"registration"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.184d57df.chunk.js.map