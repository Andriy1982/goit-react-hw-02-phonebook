(this["webpackJsonpreact-homework-template"]=this["webpackJsonpreact-homework-template"]||[]).push([[0],{188:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),c=t.n(a),o=t(72),i=t.n(o),u=(t(87),t(8)),s=t(2),l=t(3),b=t(4),d=t(5),m=t(9),j=t(10);function h(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]);return h=function(){return n},n}function f(){var n=Object(m.a)(["\n  padding: 0;\n"]);return f=function(){return n},n}var p=j.a.ul(f()),x=j.a.li(h()),O=function(n){Object(b.a)(t,n);var e=Object(d.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var n=this.props,e=n.contacts,t=n.onDeleteContact;return Object(r.jsx)(p,{children:e.map((function(n){var e=n.id,a=n.name,c=n.number;return Object(r.jsxs)(x,{children:[Object(r.jsxs)("span",{children:[a,":"]}),Object(r.jsx)("span",{children:c}),Object(r.jsx)("button",{type:"button",onClick:function(){return t(e)},children:"Delete"})]},e)}))})}}]),t}(a.Component),v=t(81),g=t(37),y=t(190);function C(){var n=Object(m.a)(["\n  margin: 0;\n  font-size: 14px;\n  font-family: 'Raleway', sans-serif;\n  color: red;\n  /* color: "," */\n"]);return C=function(){return n},n}function k(){var n=Object(m.a)(["\n  width: 90px;\n  height: 28px;\n  border: 1px solid #ccc;\n  background: #fff;\n  color: #666;\n  border-radius: 5px;\n  box-shadow: inset 0 2px 2px #ccc;\n  background-color: lightgreen;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0 0 2px #ccc;\n  }\n\n  &:active {\n    margin-top: 1px;\n    margin-bottom: -1px;\n    zoom: 1;\n  }\n"]);return k=function(){return n},n}function w(){var n=Object(m.a)(["\n  display: block;\n  width: 200px;\n  font-size: 13px;\n  padding: 6px 0 4px 10px;\n  border: ",";\n  background: #f6f6f6;\n  border-radius: 8px;\n\n  &:focus {\n    outline: none;\n  }\n"]);return w=function(){return n},n}function S(){var n=Object(m.a)(["\n  display: block;\n  font-size: 20px;\n  margin-bottom: 10px;\n"]);return S=function(){return n},n}function F(){var n=Object(m.a)(["\n  margin: 0 auto;\n"]);return F=function(){return n},n}var N=j.a.form(F()),z=j.a.label(S()),D=j.a.input(w(),(function(n){return n.border||"1px solid #ccc"})),q=j.a.button(k()),A=j.a.p(C(),(function(n){return n.color||"#4d4d4d"})),B=RegExp(/[0-9]{3}-[0-9]{2}-[0-9]{2}?$/),V=g.a({name:g.b().min(2,"The name must be longer than 2 characters").max(20,"The name must be max 20 characters").required(" Name is required"),number:g.b().matches(B,"Invalid number").required("Number is required")}),E=function(n){Object(b.a)(t,n);var e=Object(d.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var n=this;return Object(r.jsx)(v.a,{initialValues:{name:"",number:""},validationSchema:V,onSubmit:function(e,t){var r=t.resetForm,a=e.name,c=e.number;n.props.onAddContact({id:Object(y.a)(),name:a,number:c}),r()},render:function(n){var e=n.errors,t=n.values,a=n.handleChange,c=n.handleSubmit;return Object(r.jsxs)(N,{onSubmit:c,children:[Object(r.jsxs)(z,{children:["Name",e.name&&Object(r.jsx)(A,{children:e.name}),Object(r.jsx)(D,{border:e.name&&"1px solid red",type:"text",value:t.name,name:"name",onChange:a,placeholder:"Name*"})]}),Object(r.jsxs)(z,{children:["Number",e.number&&Object(r.jsx)(A,{color:"red",children:e.number}),Object(r.jsx)(D,{border:e.number&&"1px solid red",type:"string",value:t.number,name:"number",onChange:a,placeholder:"111-11-11*"})]}),Object(r.jsx)(q,{type:"submit",children:"Add contact"})]})}})}}]),t}(a.Component);function I(){var n=Object(m.a)(["\nfont-size: 18px;\n"]);return I=function(){return n},n}var J=j.a.label(I());var L=function(n){var e=n.name,t=n.onChangeFilter;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(J,{children:["Find contacts by name",Object(r.jsx)("input",{type:"text",value:e,onChange:function(n){return t(n.target.value)}})]})})},R=function(n){Object(b.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=e.call.apply(e,[this].concat(a))).state={contacts:[],filter:""},n.addContact=function(e){n.setState((function(n){if(!n.contacts.some((function(n){return n.name===e.name})))return{contacts:[].concat(Object(u.a)(n.contacts),[e])};alert("".concat(e.name," is already in contacts!"))}))},n.handleButtonDelete=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n.handleFilter=function(e){n.setState({filter:e})},n.getVisibleContacts=function(){var e=n.state,t=e.contacts,r=e.filter;return t.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}))},n}return Object(l.a)(t,[{key:"render",value:function(){var n=this.state,e=n.contacts,t=n.filter,a=this.getVisibleContacts();return Object(r.jsxs)("section",{className:"section",children:[Object(r.jsx)("h1",{children:"Phonebook"}),Object(r.jsx)(E,{onAddContact:this.addContact}),Object(r.jsx)("h2",{children:"Contacts"}),e.length>0&&Object(r.jsx)(L,{name:t,onChangeFilter:this.handleFilter}),Object(r.jsx)(O,{contacts:a,onDeleteContact:this.handleButtonDelete})]})}}]),t}(a.Component);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root"))},87:function(n,e,t){}},[[188,1,2]]]);
//# sourceMappingURL=main.9b7bd78f.chunk.js.map