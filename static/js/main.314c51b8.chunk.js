(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{26:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(17),c=n.n(i),o=(n(26),n(21)),s=n(6),l=n(7),d=n(11),u=n(10),h=n(8);n(28),n(29),n(30);h.defaults.styling="material",h.defaults.icons="material";var j,b,p,m,f,O,x=n(13),g=n(9),v=n(4),C=n.n(v),y=n(47),F=n(2),S=n(3),k=S.a.div(j||(j=Object(F.a)(["\n\twidth: 1170px;\n\tmargin: 0 auto;\n\tpadding: 0 15px;\n"])));k.displayName="Container";var w=S.a.form(b||(b=Object(F.a)(["\n\twidth: 50%;\n\tborder: 1px solid #555;\n\tborder-radius: 5px;\n\tpadding: 15px;\n\tmargin-bottom: 15px;\n"])));w.displayName="FormElement";var A=S.a.div(p||(p=Object(F.a)(["\n\tdisplay: flex;\n\tmargin-top: 10px;\n"])));A.displayName="FormGroup";var N=S.a.label(m||(m=Object(F.a)(["\n\tflex-basis: 20%;\n"])));N.displayName="Label";var I=S.a.input(f||(f=Object(F.a)(["\n\tborder: 1px solid #000;\n\tbackground: #fff;\n\tcolor: #000;\n\tpadding: 5px 15px;\n"])));I.displayName="Input";var L=S.a.button(O||(O=Object(F.a)(["\n\tborder: 1px solid #000;\n\tbackground: #fff;\n\tcolor: #000;\n\tpadding: 5px 15px;\n\ttransition: all 200ms ease-in-out;\n\tfont-size: 16px;\n\talign-items: center;\n\tdisplay: inline-flex;\n\t&:hover {\n\t\tbackground: #000;\n\t\tcolor: #fff;\n\t}\n"])));L.displayName="Button";var P,z=n(0),D={name:"",phone:""},B=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state=D,t.onInputChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(g.a)({},a,r))},t.onFormSubmit=function(e){e.preventDefault(),t.props.onFormSubmit(Object(x.a)(Object(x.a)({},t.state),{},{id:Object(y.a)()})),t.setState(D)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=C.a.generate(),e=C.a.generate();return Object(z.jsxs)(w,{onSubmit:this.onFormSubmit,children:[Object(z.jsxs)(A,{children:[Object(z.jsx)(N,{htmlFor:t,children:"Name"}),Object(z.jsx)(I,{id:t,type:"text",name:"name",value:this.state.name,onChange:this.onInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(z.jsxs)(A,{children:[Object(z.jsx)(N,{htmlFor:e,children:"Phone"}),Object(z.jsx)(I,{id:e,type:"tel",name:"phone",value:this.state.phone,onChange:this.onInputChange,required:!0})]}),Object(z.jsx)(A,{children:Object(z.jsx)(L,{type:"submit",children:"Add contact"})})]})}}]),n}(a.Component),T=S.a.li(P||(P=Object(F.a)(["\n\tdisplay: flex;\n\talign-items: center;\n"])));T.displayName="Li";var E=function(t){var e=t.contacts,n=t.onDeleteClick;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("h1",{children:"Contacts"}),e.length?Object(z.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.phone;return Object(z.jsxs)(T,{children:[a,": ",r,Object(z.jsxs)(L,{onClick:function(){return n(e)},children:[Object(z.jsx)("span",{className:"material-icons",children:"delete"}),"Delete"]})]},e)}))}):Object(z.jsx)("p",{children:"There are no contacts yet..."})]})};E.defaultProps={contacts:[]};var J=function(t){var e=t.value,n=t.onFilterInput,a=C.a.generate();return Object(z.jsx)(w,{children:Object(z.jsxs)(A,{children:[Object(z.jsx)(N,{htmlFor:a,children:"Filter"}),Object(z.jsx)(I,{id:a,name:"filter",value:e,onChange:n})]})})},M=(n(44),function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",phone:"459-12-56"},{id:"id-2",name:"Hermione Kline",phone:"443-89-12"},{id:"id-3",name:"Eden Clements",phone:"645-17-79"},{id:"id-4",name:"Annie Copeland",phone:"227-91-26"}],filter:""},t.addContact=function(e){var n=t.state.contacts,a=e.name,r=e.phone;n.some((function(t){return t.name===a||t.phone===r}))?Object(h.notice)({title:"The contact is already in the list",text:"Please, add a contact with a different name or phone number"}):t.setState((function(t){return{contacts:[e].concat(Object(o.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.setFilter=function(e){t.setState({filter:e.target.value})},t.getContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase().trim();return n.filter((function(t){return t.name.toLowerCase().trim().includes(a)||t.phone.toLowerCase().trim().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsxs)(k,{children:[Object(z.jsx)("h1",{children:"Phonebook"}),Object(z.jsx)(B,{onFormSubmit:this.addContact}),Object(z.jsx)(J,{value:t,onFilterInput:this.setFilter}),Object(z.jsx)(E,{contacts:this.getContacts(),onDeleteClick:this.deleteContact})]})})}}]),n}(a.Component)),Z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),i(t),c(t)}))};c.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(M,{})}),document.getElementById("root")),Z()}},[[45,1,2]]]);
//# sourceMappingURL=main.314c51b8.chunk.js.map