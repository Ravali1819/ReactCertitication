(this.webpackJsonpcertification=this.webpackJsonpcertification||[]).push([[0],{15:function(e,t,c){e.exports={form_align:"LoginPage_form_align__3P1MD",form:"LoginPage_form__2dlSb","form-actions":"LoginPage_form-actions__37nWG",invalid:"LoginPage_invalid__1zSUk","error-text":"LoginPage_error-text__3e1TE",link:"LoginPage_link__2k2Ju"}},17:function(e,t,c){},22:function(e,t,c){},3:function(e,t,c){e.exports={form:"NewMedicine_form__1NSOG",control:"NewMedicine_control__188IH",actions:"NewMedicine_actions__1Ersa",selection:"NewMedicine_selection__Ivzgs",addHandler:"NewMedicine_addHandler__1v5Em",cart_items:"NewMedicine_cart_items__2dH0U"}},30:function(e,t,c){},31:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(18),r=c.n(s),i=(c(30),c(31),c(5)),a=c(15),d=c.n(a),o=c(2),j=c(0),l=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useState)(!1),s=Object(i.a)(c,2),r=s[0],a=s[1];function l(){var c=e.current.value,n=t.current.value;console.log("test-admin"==c&&"test-admin"==n),a("test-admin"==c&&"test-admin"==n)}var b=r?"form-control invalid":"form-control";return Object(j.jsx)(n.Fragment,{children:Object(j.jsxs)("div",{className:d.a.form_align,children:[Object(j.jsxs)("div",{className:d.a.form,children:[Object(j.jsx)("h1",{children:"Admin Access:"}),Object(j.jsxs)("form",{onSubmit:l,children:[Object(j.jsxs)("label",{htmlFor:"name",children:[Object(j.jsx)("input",{type:"text",placeholder:"UserName",required:!0,ref:e}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("label",{htmlFor:"password",children:[Object(j.jsx)("input",{type:"password",placeholder:"Password",required:!0,ref:t}),Object(j.jsx)("br",{})]}),Object(j.jsx)("button",{type:"submit",className:b,children:Object(j.jsx)(o.b,{to:"/MainPage",className:d.a.link,children:"SignIn"})})]})]}),Object(j.jsxs)("div",{className:d.a.form,children:[Object(j.jsx)("h1",{children:"SalesExecutive Access:"}),Object(j.jsxs)("form",{onSubmit:l,children:[Object(j.jsxs)("label",{htmlFor:"name",children:[Object(j.jsx)("input",{type:"text",placeholder:"UserName",required:!0,ref:e}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("label",{htmlFor:"password",children:[Object(j.jsx)("input",{type:"password",placeholder:"Password",required:!0,ref:t}),Object(j.jsx)("br",{})]}),Object(j.jsx)("button",{type:"submit",children:Object(j.jsx)(o.b,{to:"/SalesPage",className:d.a.link,children:"SignIn"})})]})]})]})})},b=c(6),h=(c(22),function(){return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsxs)("nav",{className:"admin_nav",children:[Object(j.jsx)("h1",{children:"Welcome Admin!"}),Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("button",{children:"Log Out"})})]}),Object(j.jsxs)("div",{className:"cards",children:[Object(j.jsx)("div",{className:"medicine",children:Object(j.jsxs)(o.b,{to:"/MainPage/Medicine",children:[Object(j.jsx)("img",{src:"https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",alt:"medicines"}),Object(j.jsx)("h2",{children:"Add Medicine"})]})}),Object(j.jsx)("div",{className:"inventory",children:Object(j.jsxs)(o.b,{to:"/MainPage/Inventory",children:[Object(j.jsx)("img",{src:"https://www.skunexus.com/hs-fs/hubfs/managing-inventory-in-real-time.png?width=300&name=managing-inventory-in-real-time.png",alt:"inventory"}),Object(j.jsx)("h2",{children:"View Inventory"})]})}),Object(j.jsx)("div",{className:"sales",children:Object(j.jsxs)(o.b,{to:"/MainPage/NewSalesForm",children:[Object(j.jsx)("img",{src:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-person-add-512.png",alt:"person"}),Object(j.jsx)("h2",{children:"Add sales Executive"})]})}),Object(j.jsx)("div",{className:"team",children:Object(j.jsxs)(o.b,{to:"/MainPage/SalesPerson",children:[Object(j.jsx)("img",{src:"https://icon-library.com/images/team-icon-png/team-icon-png-4.jpg",alt:"team"}),Object(j.jsx)("h2",{children:"View Team"})]})}),Object(j.jsx)("div",{className:"orders",children:Object(j.jsxs)(o.b,{to:"/MainPage/NewOrdersForm",children:[Object(j.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHCAZF6Tgy9pLs3PhP2ZIVjdSv6v2Yv9_QioBdtVhonT75LJcpVzlFMzb8OakBRxROR94&usqp=CAU",alt:"team"}),Object(j.jsx)("h2",{children:"Add Orders"})]})}),Object(j.jsx)("div",{className:"orders",children:Object(j.jsxs)(o.b,{to:"/MainPage/Orders",children:[Object(j.jsx)("img",{src:"https://booster.io/wp-content/uploads/custom-order-numbers-e1438361586475.png",alt:"team"}),Object(j.jsx)("h2",{children:"View Orders"})]})})]})]})}),u=c(7),O=(c(17),c(12)),m=c.n(O),x=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!0),a=Object(i.a)(r,2),d=a[0],l=a[1];if(Object(n.useEffect)((function(){fetch("https://reactcert-default-rtdb.firebaseio.com/data.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var n=Object(u.a)({id:c},e[c]);t.push(n)}l(!1),s(t)}))}),[]),d)return Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:"Loading..."})});console.log(c.length);var b=[];for(var h in console.log(c),c)b.push(c[h]);var O=function(e){var t=e.target.id;fetch("https://reactcert-default-rtdb.firebaseio.com/data/".concat(t,".json"),{method:"DELETE"}).then((function(e){console.log(e),b.splice(t-1,1)}))};console.log(b);var m=b.map((function(e){return Object(j.jsxs)("div",{className:"medicine_card",id:e.id,children:[Object(j.jsxs)("h2",{children:["Name: ",e.name]}),Object(j.jsxs)("h3",{children:["Manufacturer: ",e.manufacturer]}),Object(j.jsxs)("h3",{children:["Price: ",e.price]}),Object(j.jsxs)("h4",{children:["Stock: ",e.stock]}),Object(j.jsxs)("h4",{children:["Discount: ",e.discount]}),Object(j.jsx)("button",{type:"submit",id:e.id,onClick:O,children:"Delete"})]},e.id)}));return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsxs)("nav",{className:"medicine_nav",children:[Object(j.jsx)(o.b,{to:"/MainPage",children:Object(j.jsx)("button",{type:"button",children:"Back To Main Page"})}),Object(j.jsx)("h1",{children:"Medicines"})]}),Object(j.jsx)("div",{className:"medicine_cards",children:m})]})},f=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!0),a=Object(i.a)(r,2),d=a[0],l=a[1];if(Object(n.useEffect)((function(){fetch("https://reactcert-default-rtdb.firebaseio.com/data.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var n=Object(u.a)({id:c},e[c]);t.push(n)}l(!1),s(t)}))}),[]),d)return Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:"Loading..."})});console.log(c.length);var b=[];for(var h in console.log(c),c)b.push(c[h]);var O=function(e){var t=e.target.id;fetch("https://reactcert-default-rtdb.firebaseio.com/data/".concat(t,".json"),{method:"DELETE"}).then((function(e){console.log(e),b.splice(t-1,1)}))};console.log(b);var m=b.map((function(e){return Object(j.jsxs)("div",{className:"medicine_card",id:e.id,children:[Object(j.jsxs)("h2",{children:["Name: ",e.name]}),Object(j.jsxs)("h3",{children:["Manufacturer: ",e.manufacturer]}),Object(j.jsxs)("h3",{children:["Price: ",e.price]}),Object(j.jsxs)("h4",{children:["Stock: ",e.stock]}),Object(j.jsxs)("h4",{children:["Discount: ",e.discount]}),Object(j.jsx)("button",{type:"submit",id:e.id,onClick:O,children:"Delete"})]},e.id)}));return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsxs)("nav",{className:"medicine_nav",children:[Object(j.jsx)(o.b,{to:"/MainPage",children:Object(j.jsx)("button",{type:"button",children:"Back To Main Page"})}),Object(j.jsx)("h1",{children:"Medicines"}),Object(j.jsx)(o.b,{to:"/MainPage/NewMedicineForm",children:Object(j.jsx)("button",{type:"button",children:"Add Medicine"})})]}),Object(j.jsx)("div",{className:"medicine_cards",children:m})]})},p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!0),a=Object(i.a)(r,2),d=a[0],l=a[1],b=Object(n.useState)([]),h=Object(i.a)(b,2),O=(h[0],h[1]);if(Object(n.useEffect)((function(){fetch("https://reactcert-default-rtdb.firebaseio.com/sales.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var n=Object(u.a)({id:c},e[c]);t.push(n)}l(!1),s(t)}))}),[]),d)return Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:"Loading..."})});console.log(c.length);var x=[];for(var f in console.log(c),c)x.push(c[f]);var p=function(e){var t=e.target.id;fetch("https://reactcert-default-rtdb.firebaseio.com/sales/".concat(t,".json"),{method:"DELETE"}).then((function(e){console.log(e),x.splice(t-1,1),m()("#"+t).css("display","none")}))},v=function(e){console.log(e);var t=e.target.id;fetch("https://reactcert-default-rtdb.firebaseio.com/sales/".concat(t,".json"),{method:"Get"}).then((function(e){return e.json()})).then((function(e){O(e)})),fetch("https://reactcert-default-rtdb.firebaseio.com/sales/".concat(t,".json"),{method:"PATCH",body:JSON.stringify(),headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e)}))};console.log(x);var g=x.map((function(e){return Object(j.jsxs)("div",{className:"medicine_card",id:e.id,children:[Object(j.jsxs)("h2",{children:["First Name: ",e.firstname]}),Object(j.jsxs)("h3",{children:["Last Name: ",e.lastname]}),Object(j.jsxs)("h3",{children:["DOB: ",e.dob]}),Object(j.jsxs)("h4",{children:["Gender: ",e.gender]}),Object(j.jsxs)("h4",{children:["Experinece Years: ",e.experience]}),Object(j.jsxs)("h4",{children:["Password: ",e.password," "]}),Object(j.jsx)("button",{type:"submit",id:e.id,onClick:p,children:"Delete"}),Object(j.jsx)(o.b,{to:"/MainPage/NewSalesForm",children:Object(j.jsx)("button",{type:"submit",id:e.id,onClick:v,children:"Update"})})]},e.id)}));return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsxs)("nav",{className:"medicine_nav",children:[Object(j.jsx)(o.b,{to:"/MainPage",children:Object(j.jsx)("button",{type:"button",children:"Back To Main Page"})}),Object(j.jsx)("h1",{children:"Sales Persons"})]}),Object(j.jsx)("div",{className:"medicine_cards",children:g})]})},v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!0),a=Object(i.a)(r,2),d=a[0],l=a[1];if(Object(n.useEffect)((function(){fetch("https://reactcert-default-rtdb.firebaseio.com/team.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var n=Object(u.a)({id:c},e[c]);t.push(n)}l(!1),s(t)}))}),[]),d)return Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:"Loading..."})});console.log(c.length);var b=[];for(var h in console.log(c),c)b.push(c[h]);var O=function(e){var t=e.target.id;fetch("https://reactcert-default-rtdb.firebaseio.com/data/".concat(t,".json"),{method:"DELETE"}).then((function(e){console.log(e),b.splice(t-1,1)}))};console.log(b);var m=b.map((function(e){return Object(j.jsxs)("div",{className:"medicine_card",id:e.id,children:[Object(j.jsxs)("h2",{children:["Name: ",e.name]}),Object(j.jsxs)("h3",{children:["Manufacturer: ",e.manufacturer]}),Object(j.jsxs)("h3",{children:["Price: ",e.price]}),Object(j.jsxs)("h4",{children:["Stock: ",e.stock]}),Object(j.jsxs)("h4",{children:["Discount: ",e.discount]}),Object(j.jsx)("button",{type:"submit",id:e.id,onClick:O,children:"Delete"})]},e.id)}));return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsxs)("nav",{className:"medicine_nav",children:[Object(j.jsx)(o.b,{to:"/MainPage",children:Object(j.jsx)("button",{type:"button",children:"Back To Main Page"})}),Object(j.jsx)("h1",{children:"Team"})]}),Object(j.jsx)("div",{className:"medicine_cards",children:m})]})},g=c(3),N=c.n(g);var y=function(e){var t=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(n.useRef)(),r=Object(n.useRef)(),i=Object(n.useRef)();return Object(j.jsxs)("form",{className:N.a.form,onSubmit:function(n){n.preventDefault();var a={name:t.current.value,manufacturer:c.current.value,price:s.current.value,stock:r.current.value,discount:i.current.value};e.onAddMeetup(a)},children:[Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"title",children:"Name"}),Object(j.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"image",children:"Manufacturer"}),Object(j.jsx)("input",{type:"text",required:!0,id:"manu",ref:c})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"address",children:"Price"}),Object(j.jsx)("input",{type:"text",required:!0,id:"price",ref:s})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"description",children:"Stock"}),Object(j.jsx)("input",{type:"text",id:"description",required:!0,ref:r})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"discount",children:"Discount"}),Object(j.jsx)("input",{type:"text",id:"discount",required:!0,ref:i})]}),Object(j.jsxs)("div",{className:N.a.actions,children:[Object(j.jsx)(o.b,{to:"/MainPage/Medicine",children:Object(j.jsx)("button",{children:"Add Medicine"})}),Object(j.jsx)(o.b,{to:"/MainPage/Medicine",children:Object(j.jsx)("button",{children:"Back"})})]})]})};var P=function(){var e=Object(b.e)();return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Add New Medicine"}),Object(j.jsx)(y,{onAddMeetup:function(t){fetch("https://reactcert-default-rtdb.firebaseio.com/data.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/MainPage/Medicine")}))}})]})};var S=function(e){var t=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(n.useRef)(),r=Object(n.useRef)(),i=Object(n.useRef)(),a=Object(n.useRef)();return Object(j.jsxs)("form",{className:N.a.form,onSubmit:function(n){n.preventDefault();var d={firstname:t.current.value,lastname:c.current.value,dob:s.current.value,gender:r.current.value,experience:i.current.value,password:a.current.value};e.onAddMeetup(d)},children:[Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"title",children:"First Name"}),Object(j.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"image",children:"Last Name"}),Object(j.jsx)("input",{type:"text",required:!0,id:"manu",ref:c})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"address",children:"DOB"}),Object(j.jsx)("input",{type:"text",required:!0,id:"price",ref:s})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"description",children:"Gender"}),Object(j.jsx)("input",{type:"text",id:"description",required:!0,ref:r})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"discount",children:"Experience"}),Object(j.jsx)("input",{type:"text",id:"discount",required:!0,ref:i})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"text",id:"password",required:!0,ref:a})]}),Object(j.jsxs)("div",{className:N.a.actions,children:[Object(j.jsx)(o.b,{to:"/MainPage/SalesPerson",children:Object(j.jsx)("button",{children:"Add SalesPerson"})}),Object(j.jsx)(o.b,{to:"/MainPage/SalesPerson",children:Object(j.jsx)("button",{children:"Back"})})]})]})};var M=function(){var e=Object(b.e)();return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Add New Sales Person"}),Object(j.jsx)(S,{onAddMeetup:function(t){fetch("https://reactcert-default-rtdb.firebaseio.com/sales.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/MainPage/SalesPerson")}))}})]})},_=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!0),a=Object(i.a)(r,2),d=a[0],l=a[1];if(Object(n.useEffect)((function(){fetch("https://reactcert-default-rtdb.firebaseio.com/AdminOrders.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var n=Object(u.a)({id:c},e[c]);t.push(n)}l(!1),s(t)}))}),[]),d)return Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:"Loading..."})});var b=[];for(var h in c)b.push(c[h]);var O=function(e){var t=e.target.id;fetch("https://reactcert-default-rtdb.firebaseio.com/AdminOrders/".concat(t,".json"),{method:"DELETE"}).then((function(e){console.log(e),b.splice(t,1),("#"+t).css("display","none")}))},m=function(e){console.log(e);var t=e.target.id;fetch("https://reactcert-default-rtdb.firebaseio.com/AdminOrders/".concat(t,".json"),{method:"PUT",body:JSON.stringify(),headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e)}))};console.log(b);var x=b.map((function(e){return Object(j.jsxs)("div",{className:"medicine_card",id:e.id,children:[Object(j.jsxs)("h3",{children:["Order ID: ",e.id]}),Object(j.jsxs)("h2",{children:["Customer Name: ",e.cname]}),Object(j.jsxs)("h3",{children:["Contact Number: ",e.cnumber]}),Object(j.jsxs)("h3",{children:["Products: ",e.cproducts]}),Object(j.jsxs)("h4",{children:["Quantity: ",e.cquantity]}),Object(j.jsxs)("h4",{children:["Total: ",e.ctotal]}),Object(j.jsx)("button",{type:"submit",id:e.id,onClick:O,children:"Delete"}),Object(j.jsx)("button",{type:"submit",id:e.id,onClick:m,children:"Update"})]},e.id)}));return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsxs)("nav",{className:"medicine_nav",children:[Object(j.jsx)(o.b,{to:"/MainPage",children:Object(j.jsx)("button",{type:"button",children:"Back To Main Page"})}),Object(j.jsx)("h1",{children:"Admin Orders"}),Object(j.jsx)(o.b,{to:"/MainPage/NewOrdersForm",children:Object(j.jsx)("button",{type:"button",children:"Add Orders"})})]}),Object(j.jsx)("div",{className:"medicine_cards",children:x})]})},A=function(){return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsxs)("nav",{className:"admin_nav",children:[Object(j.jsx)("h1",{children:"Welcome Sales Executive!"}),Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("button",{children:"Log Out"})})]}),Object(j.jsxs)("div",{className:"cards",children:[Object(j.jsx)("div",{className:"orders",children:Object(j.jsxs)(o.b,{to:"/SalesPage/CreateOrder",children:[Object(j.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHCAZF6Tgy9pLs3PhP2ZIVjdSv6v2Yv9_QioBdtVhonT75LJcpVzlFMzb8OakBRxROR94&usqp=CAU",alt:"team"}),Object(j.jsx)("h2",{children:"Add Orders"})]})}),Object(j.jsx)("div",{className:"orders",children:Object(j.jsxs)(o.b,{to:"SalesPage/SalesOrder",children:[Object(j.jsx)("img",{src:"https://booster.io/wp-content/uploads/custom-order-numbers-e1438361586475.png",alt:"team"}),Object(j.jsx)("h2",{children:"View Orders"})]})})]})]})},F=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!0),a=Object(i.a)(r,2),d=a[0],l=a[1];if(Object(n.useEffect)((function(){fetch("https://reactcert-default-rtdb.firebaseio.com/salesExec.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var n=Object(u.a)({id:c},e[c]);t.push(n)}l(!1),s(t)}))}),[]),d)return Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:"Loading..."})});console.log(c.length);var b=[];for(var h in console.log(c),c)b.push(c[h]);var O=function(e){var t=e.target.id;fetch("https://reactcert-default-rtdb.firebaseio.com/salesExec/".concat(t,".json"),{method:"DELETE"}).then((function(e){console.log(e),b.splice(t,1),m()("#"+t).css("display","none")}))};console.log(b);var x=b.map((function(e){return Object(j.jsxs)("div",{className:"medicine_card",id:e.id,children:[Object(j.jsxs)("h2",{children:["Customer Name: ",e.cname]}),Object(j.jsxs)("h3",{children:["Contact Number: ",e.cnumber]}),Object(j.jsxs)("h3",{children:["Select Products: ",e.cproducts]}),Object(j.jsxs)("h4",{children:["Quantity: ",e.cquantity]}),Object(j.jsx)("button",{type:"submit",id:e.id,onClick:O,children:"Delete"})]},e.id)}));return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsxs)("nav",{className:"medicine_nav",children:[Object(j.jsx)(o.b,{to:"/SalesPage",children:Object(j.jsx)("button",{type:"button",children:"Back To Main Page"})}),Object(j.jsx)("h1",{children:"Sales Order Add"}),Object(j.jsx)(o.b,{to:"/SalesPage/CreateOrder",children:Object(j.jsx)("button",{type:"button",children:"Add SalesOrder"})})]}),Object(j.jsx)("div",{className:"medicine_cards",children:x})]})},w=c(13),k=c(19),C={items:[],totalAmount:0,totalQuantity:0,overAllAmount:0},E=Object(k.b)({name:"cart",initialState:{items:[],totalQuantity:0,totalAmount:0,overAllAmount:0,totalPrice:0},reducers:{addItemToCart:function(e,t){var c=t.payload,n=e.items.find((function(e){return e.id===c.id}));e.totalQuantity++,n?(n.quantity=n.quantity+1,n.totalPrice=n.totalPrice+c.price):e.items.push({id:c.id,price:c.price,quantity:1,discount:c.discount,totalPrice:c.price,name:c.name})},clearCartData:function(e,t){return C}}}),T=E.actions,q=E;var R=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)(!0),d=Object(i.a)(a,2),l=d[0],b=d[1],h=Object(n.useState)([]),O=Object(i.a)(h,2),m=O[0],x=(O[1],Object(w.b)()),f=Object(w.c)((function(e){return e.items})),p=Object(w.c)((function(e){return e.totalQuantity})),v=Object(n.useRef)(),g=Object(n.useRef)(),y=Object(n.useRef)(),P=Object(n.useRef)();if(Object(n.useEffect)((function(){fetch("https://reactcert-default-rtdb.firebaseio.com/data.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var n=Object(u.a)({id:c},e[c]);t.push(n)}b(!1),r(t)}))}),[]),l)return Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:"Loading..."})});var S=[];for(var M in s)S.push(s[M]);var _=function(e){var t=e.target.id;fetch("https://reactcert-default-rtdb.firebaseio.com/data/".concat(t,".json"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.price;console.log(t),x(T.addItemToCart({price:Number(e.price),name:e.name,discount:e.discount}))}))};console.log(m);var A=0;f.map((function(e){A+=e.totalPrice,console.log(A)}));var F=S.map((function(e){return Object(j.jsxs)("div",{className:"medicine_card",id:e.id,children:[Object(j.jsxs)("h2",{children:["Name: ",e.name]}),Object(j.jsxs)("h3",{children:["Manufacturer: ",e.manufacturer]}),Object(j.jsxs)("h3",{children:["Price: ",e.price]}),Object(j.jsxs)("h4",{children:["Stock: ",e.stock]}),Object(j.jsxs)("h4",{children:["Discount: ",e.discount]}),Object(j.jsx)("button",{type:"submit",id:e.id,onClick:_,children:"Add"})]},e.id)}));return console.log(f),Object(j.jsxs)("form",{className:N.a.form,onSubmit:function(t){t.preventDefault();var c={cname:v.current.value,cnumber:g.current.value,cproducts:y.current.value,cquantity:P.current.value};e.onAddMeetup(c)},children:[Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"title",children:"Customer Name"}),Object(j.jsx)("input",{type:"text",required:!0,id:"title",ref:v})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"image",children:"Contact Number"}),Object(j.jsx)("input",{type:"text",required:!0,id:"manu",ref:g})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"address",children:"Select Products"}),Object(j.jsxs)("h3",{children:["Added Items: ",[]]})]}),f.map((function(e){return Object(j.jsx)(n.Fragment,{children:Object(j.jsx)("div",{className:N.a.cart_items,children:Object(j.jsxs)("div",{className:N.a.details,children:[Object(j.jsxs)("h4",{children:["Items: x",e.quantity]}),Object(j.jsxs)("h4",{children:["Amount: ",e.totalPrice]})]})})})})),Object(j.jsx)("div",{className:N.a.selection,children:F}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"description",children:"Quantity"}),Object(j.jsxs)("h2",{children:["Total Quantity: ",p]})]}),Object(j.jsxs)("div",{className:N.a.actions,children:[Object(j.jsx)(o.b,{to:"/SalesPage/SalesOrder",children:Object(j.jsx)("button",{children:"Create Order"})}),Object(j.jsx)(o.b,{to:"/SalesPage",onClick:function(){console.log("clicked"),x(T.clearCartData())},children:Object(j.jsx)("button",{children:"Back"})})]})]})};var D=function(){var e=Object(b.e)();return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Add New Sales Order"}),Object(j.jsx)(R,{onAddMeetup:function(t){fetch("https://reactcert-default-rtdb.firebaseio.com/salesExec.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/SalesPage/SalesOrder")}))}})]})};var L=function(e){var t=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(n.useRef)(),r=Object(n.useRef)(),i=Object(n.useRef)();return Object(j.jsxs)("form",{className:N.a.form,onSubmit:function(n){n.preventDefault();var a={cname:t.current.value,cnumber:c.current.value,cproducts:s.current.value,cquantity:r.current.value,ctotal:i.current.value};e.onAddMeetup(a)},children:[Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"title",children:"Customer Name"}),Object(j.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"image",children:"Customer Contact Number"}),Object(j.jsx)("input",{type:"text",required:!0,id:"manu",ref:c})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"address",children:"Products"}),Object(j.jsx)("input",{type:"text",required:!0,id:"price",ref:s})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"description",children:"Quantity"}),Object(j.jsx)("input",{type:"text",id:"description",required:!0,ref:r})]}),Object(j.jsxs)("div",{className:N.a.control,children:[Object(j.jsx)("label",{htmlFor:"discount",children:"Amount"}),Object(j.jsx)("input",{type:"text",id:"discount",required:!0,ref:i})]}),Object(j.jsxs)("div",{className:N.a.actions,children:[Object(j.jsx)("button",{children:"Add Medicine"}),Object(j.jsx)(o.b,{to:"/MainPage/Orders",children:Object(j.jsx)("button",{children:"Back"})})]})]})};var B=function(){var e=Object(b.e)();return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Add New Medicine"}),Object(j.jsx)(L,{onAddMeetup:function(t){fetch("https://reactcert-default-rtdb.firebaseio.com/AdminOrders.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/MainPage/Orders")}))}})]})};var I=function(){return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(b.a,{path:"/",exact:!0,children:Object(j.jsx)(l,{})}),Object(j.jsx)(b.a,{path:"/MainPage",exact:!0,children:Object(j.jsx)(h,{})}),Object(j.jsx)(b.a,{path:"/MainPage/Inventory",children:Object(j.jsx)(x,{})}),Object(j.jsx)(b.a,{path:"/MainPage/Medicine",children:Object(j.jsx)(f,{})}),Object(j.jsx)(b.a,{path:"/MainPage/SalesPerson",children:Object(j.jsx)(p,{})}),Object(j.jsx)(b.a,{path:"/MainPage/Team",children:Object(j.jsx)(v,{})}),Object(j.jsx)(b.a,{path:"/MainPage/NewMedicineForm",children:Object(j.jsx)(P,{})}),Object(j.jsx)(b.a,{path:"/MainPage/NewSalesForm",children:Object(j.jsx)(M,{})}),Object(j.jsx)(b.a,{path:"/MainPage/Orders",children:Object(j.jsx)(_,{})}),Object(j.jsx)(b.a,{path:"/MainPage/NewOrdersForm",children:Object(j.jsx)(B,{})}),Object(j.jsx)(b.a,{path:"/SalesPage",exact:!0,children:Object(j.jsx)(A,{})}),Object(j.jsx)(b.a,{path:"/SalesPage/SalesOrder",children:Object(j.jsx)(F,{})}),Object(j.jsx)(b.a,{path:"/SalesPage/CreateOrder",children:Object(j.jsx)(D,{})})]})},J=Object(k.a)({reducer:q.reducer});r.a.render(Object(j.jsx)(o.a,{children:Object(j.jsx)(w.a,{store:J,children:Object(j.jsx)(I,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.1b746727.chunk.js.map