(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(16),a=t.n(r),i=t(3),u=t(0),o=function(e){var n=e.type,t=e.value,c=e.eventHandler;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{type:n,value:t,onChange:c})]})},d=function(e){var n=e.searchedPersons,t=e.searchTerm,c=e.deleteHandler,r=new RegExp(t,"i");return Object(u.jsx)("div",{children:n.filter((function(e){return""===t||!0===r.test(e.name)?e:null})).map((function(e){return Object(u.jsxs)("div",{children:[e.name," ",e.number,Object(u.jsx)("button",{onClick:function(n){return c(n,e)},children:"delete"})]},e.name)}))})},s=function(e){var n=e.submitEventHandler,t=e.name,c=e.number,r=e.nameEventHandler,a=e.numberEventHandler;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:t,onChange:r})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:c,onChange:a})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},l=t(4),b=t.n(l),j="/api/persons",f={getAll:function(){return b.a.get(j).then((function(e){return e.data}))},create:function(e){return b.a.post(j,e).then((function(e){return e.data}))},update:function(e,n){return b.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){if(!0===window.confirm("Delete ".concat(e.name," ?")))return b.a.delete("".concat(j,"/").concat(e.id)).then((function(e){return e.data}))}},m=function(e){var n=e.message,t=e.type;return null==n?null:"notification"===t?Object(u.jsx)("div",{className:"notification",children:n}):"error"===t?Object(u.jsx)("div",{className:"error",children:n}):null},h=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),l=Object(i.a)(a,2),b=l[0],j=l[1],h=Object(c.useState)(""),v=Object(i.a)(h,2),O=v[0],p=v[1],x=Object(c.useState)(""),g=Object(i.a)(x,2),w=g[0],H=g[1],y=Object(c.useState)(null),E=Object(i.a)(y,2),k=E[0],S=E[1],T=Object(c.useState)(""),C=Object(i.a)(T,2),A=C[0],D=C[1];Object(c.useEffect)((function(){f.getAll().then((function(e){r(e)}))}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(m,{message:k,type:A}),Object(u.jsx)(o,{type:"text",value:w,eventHandler:function(e){H(e.target.value)}}),Object(u.jsx)("h2",{children:"add a new"}),Object(u.jsx)(s,{submitEventHandler:function(e){e.preventDefault();var n={name:b,number:O},c=t.findIndex((function(e){return e.name===b}));-1!==c?window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))&&f.update(t[c].id,n).then((function(e){r(t.map((function(n){return n.id!==t[c].id?n:e}))),S("Changed ".concat(n.name,"'s number")),D("notification"),setTimeout((function(){S(null),D("")}),5e3)})).catch((function(e){S("Information of ".concat(n.name," has already been removed from the server")),D("error"),setTimeout((function(){S(null),D("")}),5e3),r(t.filter((function(e){return e.id!==t[c].id})))})):(f.create(n).then((function(e){r(t.concat(e))})),S("Added ".concat(n.name)),D("notification"),setTimeout((function(){S(null),D("")}),5e3)),j(""),p("")},name:b,number:O,nameEventHandler:function(e){j(e.target.value)},numberEventHandler:function(e){p(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(d,{searchedPersons:t,searchTerm:w,deleteHandler:function(e,n){e.preventDefault();var c=f.remove(n);void 0!==c&&(c.then((function(){r(t.filter((function(e){return e.id!==n.id})))})),S("Removed ".concat(n.name)),D("notification"),setTimeout((function(){S(null),D("")}),5e3))}})]})};t(40);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.9520f7e5.chunk.js.map