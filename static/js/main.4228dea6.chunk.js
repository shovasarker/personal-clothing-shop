(this["webpackJsonppersonal-clothing-shop"]=this["webpackJsonppersonal-clothing-shop"]||[]).push([[0],{61:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n.n(r),i=n(40),a=n.n(i),s=(n(61),n(0)),l=n.n(s),o=n(17),u=n(2),b=n(1),d=n(3),p=n(12),m=n(13),j=n(15),h=n(20),g=n(18),O=(n(68),n(32)),f=(n(69),n(6)),v=function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.linkUrl,i=Object(j.g)();return Object(f.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return i("/".concat(c))},children:[Object(f.jsx)("div",{style:{backgroundImage:"url(".concat(n,")")},className:"background-image"}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(f.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})},x=(n(71),Object(g.a)([function(e){return e.directory}],(function(e){return e.sections}))),y=["id"],w=Object(g.b)({sections:x}),k=Object(h.b)(w)((function(e){var t=e.sections;return Object(f.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(O.a)(e,y);return Object(f.jsx)(v,Object(o.a)({},n),t)}))})})),N=(n(72),function(e){return Object(f.jsx)("div",{className:"homepage",children:Object(f.jsx)(k,{})})}),C=n(51),E=n.n(C),U=Object(g.a)([function(e){return e.shop}],(function(e){return e.collections})),I=Object(g.a)([U],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),T=E()((function(e){return Object(g.a)([U],(function(t){return t[e]}))})),S=n(27),P=(n(73),n(74),n(75),["children","isGoogleSignIn","inverted"]),A=function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,c=Object(O.a)(e,P);return Object(f.jsx)("button",Object(o.a)(Object(o.a)({className:"".concat(r?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),{},{children:t}))},R={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM_FROM_CART:"REMOVE_ITEM_FROM_CART",REDUCE_QUANTITY:"REDUCE_QUANTITY"},B=function(){return{type:R.TOGGLE_CART_HIDDEN}},D=function(e){return{type:R.ADD_ITEM,payload:e}},M=Object(h.b)(null,(function(e){return{addItem:function(t){return e(D(t))}}}))((function(e){var t=e.item,n=e.addItem;return Object(f.jsxs)("div",{className:"collection-item",children:[Object(f.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(t.imageUrl,")")}}),Object(f.jsxs)("div",{className:"collection-footer",children:[Object(f.jsx)("span",{className:"name",children:t.name}),Object(f.jsx)("span",{className:"price",children:t.price})]}),Object(f.jsx)(A,{inverted:!0,onClick:function(){return n(t)},children:"Add to Cart"})]})})),_=function(e){var t=e.title,n=e.items;return Object(f.jsxs)("div",{className:"collection-preview",children:[Object(f.jsx)(S.b,{to:"/shop/".concat(t.toLowerCase()),className:"title",children:t.toUpperCase()}),Object(f.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(f.jsx)(M,{item:e},e.id)}))})]})},G=(n(76),["id"]),z=Object(g.b)({collections:I}),V=Object(h.b)(z)((function(e){var t=e.collections;return console.log(t),Object(f.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(O.a)(e,G);return Object(f.jsx)(_,Object(o.a)({},n),t)}))})})),W=(n(77),Object(h.b)((function(e,t){return{collection:T(t.collectionId)(e)}}))((function(e){var t=e.collection;return Object(f.jsx)("div",{className:"items",children:t.items.map((function(e){return Object(f.jsx)(M,{item:e},e.id)}))})}))),q=(n(78),function(){var e=Object(j.h)().collectionId;return Object(f.jsxs)("div",{className:"collection-page",children:[Object(f.jsx)("h1",{className:"title",children:e.toUpperCase()}),Object(f.jsx)(W,{collectionId:e})]})}),H=(n(79),function(){return Object(f.jsx)("div",{className:"shop-page",children:Object(f.jsxs)(j.d,{children:[Object(f.jsx)(j.b,{path:"/",element:Object(f.jsx)(V,{})}),Object(f.jsx)(j.b,{path:":collectionId",element:Object(f.jsx)(q,{})})]})})}),L=n(39),F=(n(96),n(81),n(56));L.a.initializeApp({apiKey:"AIzaSyBnTLhw51zjW6Pl2imVVRl2OaHfzbA3278",authDomain:"clothing-shop-db-7f750.firebaseapp.com",projectId:"clothing-shop-db-7f750",storageBucket:"clothing-shop-db-7f750.appspot.com",messagingSenderId:"847899020184",appId:"1:847899020184:web:a0242fc619c757198379ed",measurementId:"G-G79C2KH045"});var J=L.a.auth(),Q=L.a.firestore(),Y=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var r,c,i,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=Q.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,i=t.email,a=new Date,e.prev=9,e.next=12,r.set(Object(o.a)({displayName:c,email:i,createdAt:a},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error Creatting User : ",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),K=new F.a;K.setCustomParameters({prompt:"select_account"});var X,Z,$,ee,te,ne,re,ce,ie,ae,se,le,oe,ue,be,de=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.signInWithPopup(K);case 3:if(t=e.sent,!t.user){e.next=7;break}return e.abrupt("return",!0);case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),pe=(L.a,["title","titleId"]);function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}function je(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function he(e,t){var n=e.title,c=e.titleId,i=je(e,pe);return r.createElement("svg",me({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),X||(X=r.createElement("g",null)),Z||(Z=r.createElement("g",null)),$||($=r.createElement("g",null)),ee||(ee=r.createElement("g",null)),te||(te=r.createElement("g",null)),ne||(ne=r.createElement("g",null)),re||(re=r.createElement("g",null)),ce||(ce=r.createElement("g",null)),ie||(ie=r.createElement("g",null)),ae||(ae=r.createElement("g",null)),se||(se=r.createElement("g",null)),le||(le=r.createElement("g",null)),oe||(oe=r.createElement("g",null)),ue||(ue=r.createElement("g",null)),be||(be=r.createElement("g",null)))}var ge,Oe,fe=r.forwardRef(he),ve=(n.p,function(e){return e.cart}),xe=Object(g.a)([ve],(function(e){return e.cartItems})),ye=Object(g.a)([ve],(function(e){return e.hidden})),we=Object(g.a)([xe],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ke=Object(g.a)([xe],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Ne=(n(83),Object(g.b)({itemCount:we})),Ce=Object(h.b)(Ne,(function(e){return{toggleCartHidden:function(){return e(B())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(f.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(f.jsx)(fe,{className:"shopping-icon"}),Object(f.jsx)("span",{className:"item-count",children:n})]})})),Ee=(n(84),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,i=t.quantity;return Object(f.jsxs)("div",{className:"cart-item",children:[Object(f.jsx)("img",{src:n,alt:"item"}),Object(f.jsxs)("div",{className:"item-details",children:[Object(f.jsx)("span",{className:"name",children:c}),Object(f.jsxs)("span",{className:"price",children:[i," x $",r]})]})]})}),Ue=(n(85),Object(g.b)({cartItems:xe})),Ie=Object(h.b)(Ue)((function(e){var t=e.cartItems,n=e.dispatch,r=Object(j.g)();return Object(f.jsxs)("div",{className:"".concat(0===t.length?"hidden":""," cart-dropdown"),children:[Object(f.jsx)("div",{className:"cart-items",children:0===t.length?Object(f.jsx)("span",{children:"No item added to cart yet"}):t.map((function(e){return Object(f.jsx)(Ee,{item:e},e.id)}))}),Object(f.jsx)(A,{onClick:function(){r("/checkout"),n(B())},children:"Go to Checkout"})]})})),Te=["title","titleId"];function Se(){return Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}function Pe(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Ae(e,t){var n=e.title,c=e.titleId,i=Pe(e,Te);return r.createElement("svg",Se({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},i),void 0===n?r.createElement("title",{id:c},"Group"):n?r.createElement("title",{id:c},n):null,ge||(ge=r.createElement("desc",null,"Created with Sketch.")),Oe||(Oe=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var Re=r.forwardRef(Ae),Be=(n.p,Object(g.a)([function(e){return e.user}],(function(e){return e.currentUser}))),De=(n(86),Object(g.b)({currentUser:Be,hidden:ye})),Me=Object(h.b)(De)((function(e){var t=e.currentUser,n=e.hidden;return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)(S.b,{to:"/",className:"logo-container",children:Object(f.jsx)(Re,{className:"logo"})}),Object(f.jsxs)("div",{className:"options",children:[Object(f.jsx)(S.b,{to:"/shop",className:"option",children:"SHOP"}),Object(f.jsx)(S.b,{to:"/shop",className:"option",children:"CONTACT"}),t?Object(f.jsx)("div",{className:"option",onClick:function(){return J.signOut()},children:"SIGN OUT"}):Object(f.jsx)(S.b,{to:"/signin",className:"option",children:"SIGN IN"}),Object(f.jsx)(Ce,{})]}),n?null:Object(f.jsx)(Ie,{})]})})),_e=n(16),Ge=(n(87),["handleChange","label"]),ze=function(e){var t=e.handleChange,n=e.label,r=Object(O.a)(e,Ge);return Object(f.jsxs)("div",{className:"group",children:[Object(f.jsx)("input",Object(o.a)({className:"form-input",onChange:t},r)),n?Object(f.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})},Ve=(n(88),function(){var e=Object(r.useState)(""),t=Object(_e.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),a=Object(_e.a)(i,2),s=a[0],o=a[1],b=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,J.signInWithEmailAndPassword(n,s);case 4:c(""),o(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":c(r);break;case"password":o(r)}},p=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,de();case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"sign-in",children:[Object(f.jsx)("h2",{children:" I already have an account"}),Object(f.jsx)("span",{children:"Sign in with your email and password"}),Object(f.jsxs)("form",{onSubmit:b,children:[Object(f.jsx)(ze,{type:"email",name:"email",handleChange:d,value:n,label:"Email",required:!0}),Object(f.jsx)(ze,{type:"password",name:"password",onChange:d,value:s,label:"Password",required:!0}),Object(f.jsxs)("div",{className:"custom-button-container",children:[Object(f.jsx)(A,{type:"submit",children:"Sign In"}),Object(f.jsx)(A,{type:"button",onClick:p,isGoogleSignIn:!0,children:"Sign In with google"})]})]})]})}),We=n(5),qe=(n(89),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,i,a,s,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=r.state,c=n.displayName,i=n.email,a=n.password,s=n.confirmPassword,a===s){e.next=6;break}return alert("Passwords Don't Match"),r.setState({confirmPassword:""}),e.abrupt("return");case 6:return e.prev=6,e.next=9,J.createUserWithEmailAndPassword(i,a);case 9:return o=e.sent,u=o.user,e.next=13,Y(u,{displayName:c});case 13:r.setState({displayName:"",email:"",password:"",confirmPassword:""}),J.signOut(),alert("Your Sign Up is Complete, please sign in now with the email and password"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(6),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.name,c=t.value;r.setState(Object(We.a)({},n,c),(function(){return console.log(r.state)}))},r.state={displayName:"",email:"",password:"",confirmPassword:""},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,c=e.confirmPassword;return Object(f.jsxs)("div",{className:"sign-up",children:[Object(f.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(f.jsx)("span",{children:"Sign up with your email and password"}),Object(f.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(f.jsx)(ze,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(f.jsx)(ze,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(f.jsx)(ze,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(f.jsx)(ze,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm password",required:!0}),Object(f.jsx)(A,{type:"submit",children:"Sign Up"})]})]})}}]),n}(r.Component)),He=qe,Le=(n(90),function(){return Object(f.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(f.jsx)(Ve,{}),Object(f.jsx)(He,{})]})}),Fe=(n(91),Object(h.b)(null,(function(e){return{addItem:function(t){return e(D(t))},removeItem:function(t){return e({type:R.REMOVE_ITEM_FROM_CART,payload:t})},reduceQuantity:function(t){return e({type:R.REDUCE_QUANTITY,payload:t})}}}))((function(e){var t=e.cartItem,n=e.removeItem,r=e.reduceQuantity,c=e.addItem;return Object(f.jsxs)("div",{className:"checkout-item",children:[Object(f.jsx)("div",{className:"image-container",children:Object(f.jsx)("img",{src:t.imageUrl,alt:"item"})}),Object(f.jsx)("span",{className:"name",children:t.name}),Object(f.jsxs)("div",{className:"quantity",children:[Object(f.jsx)("div",{className:"arrow",onClick:function(){return t.quantity>1?r(t):n(t)},children:"\u276e"}),Object(f.jsx)("div",{className:"quantity__value",children:t.quantity}),Object(f.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(f.jsxs)("span",{className:"price",children:["$",t.price]}),Object(f.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),Je=n(52),Qe=n.n(Je),Ye=function(e){var t=e.price,n=100*t;return Object(f.jsx)(Qe.a,{className:"checkout-btn",label:"Pay Now",name:"Personal Clothing ltd",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e)},stripeKey:"pk_test_51KCmDPJRLMbRrdCMxbVI1MxlYwGBKycxcxQPz4xsZwhhRrfc4ABxi6TjWmX9d9f6C0k0mSVQCQTtTIyzt8yNIzu400K7Nbs1o8"})},Ke=(n(92),Object(g.b)({cartItems:xe,totalPrice:ke})),Xe=Object(h.b)(Ke)((function(e){var t=e.cartItems,n=e.totalPrice;return Object(f.jsxs)("div",{className:"checkout-page",children:[Object(f.jsxs)("div",{className:"checkout-header",children:[Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Product"})}),Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Description"})}),Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Quantity"})}),Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Price"})}),Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(f.jsx)(Fe,{cartItem:e},e.id)})),Object(f.jsx)("div",{className:"total",children:Object(f.jsxs)("span",{children:["TOTAL : $",n]})}),Object(f.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(f.jsx)("br",{}),"4242 4242 4242 4242 -EXP : 01/22 - CVC : 123"]}),Object(f.jsx)(Ye,{price:n})]})})),Ze="SET_CURRENT_USER",$e=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromAuth=null,e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=J.onAuthStateChanged(function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,Y(n);case 3:t.sent.onSnapshot((function(t){e(Object(o.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(null);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(Me,{}),Object(f.jsxs)(j.d,{children:[Object(f.jsx)(j.b,{path:"/",element:Object(f.jsx)(N,{})}),Object(f.jsx)(j.b,{path:"/shop/*",element:Object(f.jsx)(H,{})}),Object(f.jsx)(j.b,{path:"/signin",element:this.props.currentUser?Object(f.jsx)(j.a,{replace:!0,to:"/"}):Object(f.jsx)(Le,{})}),Object(f.jsx)(j.b,{path:"/checkout",element:Object(f.jsx)(Xe,{})})]})]})}}]),n}(r.Component),et=Object(g.b)({currentUser:Be}),tt=Object(h.b)(et,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:Ze,payload:e}}(t))}}}))($e),nt=n(30),rt=n(45),ct=n(53),it=n.n(ct),at=n(54),st=n.n(at),lt={currentUser:null},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;return t.type===Ze?Object(o.a)(Object(o.a)({},e),{},{currentUser:t.payload}):e},ut=n(24),bt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(ut.a)(e),[Object(o.a)(Object(o.a)({},t),{},{quantity:1})])},dt=function(e,t){return e.filter((function(e){return e.id!==t.id}))},pt=function(e,t){return e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity-1}):e}))},mt={hidden:!0,cartItems:[]},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.TOGGLE_CART_HIDDEN:return Object(o.a)(Object(o.a)({},e),{},{hidden:!e.hidden});case R.ADD_ITEM:return Object(o.a)(Object(o.a)({},e),{},{cartItems:bt(e.cartItems,t.payload)});case R.REMOVE_ITEM_FROM_CART:return Object(o.a)(Object(o.a)({},e),{},{cartItems:dt(e.cartItems,t.payload)});case R.REDUCE_QUANTITY:return Object(o.a)(Object(o.a)({},e),{},{cartItems:pt(e.cartItems,t.payload)});default:return e}},ht={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ot={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;return t.type,e},vt={key:"root",storage:st.a,whitelist:["cart"]},xt=Object(nt.b)({user:ot,cart:jt,directory:gt,shop:ft}),yt=Object(rt.a)(vt,xt),wt=[it.a],kt=Object(nt.c)(yt,nt.a.apply(void 0,wt)),Nt=Object(rt.b)(kt),Ct=n(55),Et=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(h.a,{store:kt,children:Object(f.jsx)(S.a,{children:Object(f.jsx)(Ct.a,{persistor:Nt,children:Object(f.jsx)(tt,{})})})})}),document.getElementById("root")),Et()}},[[95,1,2]]]);
//# sourceMappingURL=main.4228dea6.chunk.js.map