(this["webpackJsonpdigiftng-technical-assessment"]=this["webpackJsonpdigiftng-technical-assessment"]||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var i,c,n,a,r=s(1),l=s.n(r),d=s(15),j=s.n(d),o=s(8),b=s(3),m=s(2),h=s(0),x=function(e){var t=e.to,s=e.className,i=e.children;return Object(h.jsx)(o.b,{to:t,className:"no-underline ".concat(s&&s),children:i})},O=s.p+"static/media/Logo.ed863daa.svg",g=s.p+"static/media/ArrowRight.cda5699c.svg",u=s(7),p=s(5),f=s.p+"static/media/Light.5340abc4.svg",v=s.p+"static/media/Dark-Moon.2fc51e4f.svg",N=function(e){var t=e.changeTheme,s=Object(r.useState)("Light"),i=Object(b.a)(s,2),c=i[0],n=i[1];return Object(h.jsx)(y,{children:Object(h.jsxs)("div",{className:"toggleContainer",children:[Object(h.jsx)("div",{className:"".concat("Light"===c?"active":"default"),onClick:function(){n("Light"),t()},children:Object(h.jsx)("img",{src:f,alt:"star"})}),Object(h.jsx)("div",{className:"".concat("Dark"===c?"active":"default"),onClick:function(){n("Dark"),t()},children:Object(h.jsx)("img",{src:v,alt:"star"})})]})})},y=p.a.div(i||(i=Object(u.a)(["\n  background: #f3f4f7;\n  margin-right: 10rem;\n  margin-left: 7rem;\n  border-radius: 999px;\n  padding: 4px;\n  @media (max-width: 1406px) {\n    margin-right: 4.4rem;\n  }\n  @media (max-width: 1346px) {\n    margin-right: 2rem;\n  }\n  @media (max-width: 970px) {\n    margin-right: 1rem;\n  }\n  @media (max-width: 760px) {\n    margin-right: 0rem;\n    margin-left: 0rem;\n  }\n  .toggleContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 82px;\n  }\n  .active {\n    background: #ffffff;\n    width: 100%;\n    margin: auto;\n    text-align: center;\n    padding: 5px;\n    border-radius: 22px !important;\n    cursor: pointer;\n    pointer-events: none;\n  }\n  .default {\n    background: none;\n    width: 100%;\n    margin: auto;\n    text-align: center;\n    padding: 5px;\n    border-radius: 22px !important;\n    cursor: pointer;\n  }\n  img {\n    max-width: 100% !important;\n  }\n"]))),w=function(e){var t=e.className,s=e.text,i=e.icon,c=e.type;return Object(h.jsx)("div",{className:"w-full mt-5",children:Object(h.jsxs)("button",{type:c||"button",onClick:e.onClick?function(){return e.onClick()}:null,className:t,children:[Object(h.jsxs)("span",{children:[" ",s," "]}),i&&Object(h.jsx)("img",{className:"",src:i,alt:s})]})})},C=s.p+"static/media/sparkles.e6b6f27e.svg",k=function(){return Object(h.jsxs)("div",{className:"authBtn",children:[Object(h.jsx)(w,{type:"submit",text:"Login",className:"login"}),Object(h.jsx)(w,{type:"submit",text:"Get started",className:"signup",icon:C})]})},L=(s(26),s.p+"static/media/HamMenu.ead8762e.svg"),I=s.p+"static/media/Search-Icon.36d9e699.svg",D=function(e){e.theme;var t=Object(r.useState)(""),s=Object(b.a)(t,2),i=s[0],c=s[1];return Object(h.jsxs)("form",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:I,alt:"HomeLogo"})}),Object(h.jsx)("input",{type:"text",name:"search",onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),c(""))},placeholder:"Find cards anywhere",value:i,onChange:function(e){c(e.target.value)}})]})},A=p.a.section(c||(c=Object(u.a)(["\n  display: flex;\n  justify-content: space-between !important;\n  z-index: 100;\n  background: white;\n  padding-top:15px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n"]))),B=p.a.div(n||(n=Object(u.a)(["\n    font-size: 1.8rem;\n    cursor: pointer;\n  img {\n      max-width: 100%;\n      width:40px;\n  }\n  @media (min-width: 700px) {\n    .navmenu {\n      display: none;\n    }\n"]))),T=p.a.div(a||(a=Object(u.a)(["\n  overflow: hidden !important;\n\n  .nav-menu {\n    width: 100%;\n    position: initial;\n    opacity: 1;\n    border-top: none;\n    border-bottom: none;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    position: absolute;\n    top: 60px;\n    left: -100%;\n    border-top: 2px solid blanchedalmond;\n    border-bottom: 1px solid blanchedalmond;\n    transition: all 0.5s ease;\n  }\n\n  .nav-menu.active {\n    background: #f9f9f9;\n    left: 0;\n    color: white;\n    opacity: 1;\n    width: 100%;\n    height: 100vh;\n    z-index: 1;\n    position: fixed;\n    overflow-y: hidden !important;\n  }\n"]))),G=function(e){var t=e.changeTheme,s=Object(r.useState)(!1),i=Object(b.a)(s,2),c=i[0],n=i[1],a=function(){n(!c)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(A,{children:[Object(h.jsx)(x,{to:"/",children:Object(h.jsx)("img",{src:O,alt:"logo",style:{height:"40px"}})}),Object(h.jsx)(B,{onClick:a,children:Object(h.jsx)("img",{src:L,alt:"menu"})})]}),Object(h.jsx)(T,{children:Object(h.jsxs)("div",{className:c?"nav-menu active":"nav-menu",children:[Object(h.jsx)(D,{}),Object(h.jsxs)("div",{className:"MobileList",children:[Object(h.jsx)(x,{to:"/",className:"contentListMobile",children:Object(h.jsx)("h4",{className:"content",onClick:a,children:"Personal"})}),Object(h.jsx)(x,{to:"/business",className:"contentListMobile",children:Object(h.jsx)("h4",{className:"content",onClick:a,children:"Business"})}),Object(h.jsxs)("div",{className:"MobileAuth",onClick:a,children:[Object(h.jsx)(k,{}),Object(h.jsx)(N,{changeTheme:t})]})]})]})})]})},S=function(e){var t=e.changeTheme;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"NavContainer",children:[Object(h.jsx)(x,{to:"/",className:"logo",children:Object(h.jsx)("img",{src:O,alt:"HomeLogo"})}),Object(h.jsxs)(x,{to:"/",className:"contentList",children:[Object(h.jsx)("h4",{className:"content",children:"Personal"}),Object(h.jsx)("div",{className:"contentIimg",children:Object(h.jsx)("img",{src:g,alt:"HomeLogo"})})]}),Object(h.jsxs)(x,{to:"/business",className:"contentList",children:[Object(h.jsx)("h4",{className:"content",children:"Business"}),Object(h.jsx)("div",{className:"contentIimg",children:Object(h.jsx)("img",{src:g,alt:"HomeLogo"})})]}),Object(h.jsx)(D,{}),Object(h.jsx)(N,{changeTheme:t}),Object(h.jsx)(k,{})]}),Object(h.jsx)("div",{className:"mobile",children:Object(h.jsx)(G,{changeTheme:t})})]})},z=s.p+"static/media/IG.eacab276.svg",P=s.p+"static/media/FB.aa88c7b4.svg",H=s.p+"static/media/TWITTER.3dbe4963.svg",W=s.p+"static/media/LINKEDIN.578e8e45.svg",F=function(){return Object(h.jsxs)("div",{className:"socialsContainer",children:[Object(h.jsx)("div",{className:"socialImg",children:Object(h.jsx)("img",{src:O,alt:"HomeLogo"})}),Object(h.jsx)("p",{children:"Creating Happiness One Giftcard at a Time."}),Object(h.jsxs)("div",{className:"MediaIcons",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:z,alt:"IgIcon"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:P,alt:"FbIcon"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:H,alt:"TwitterIcon"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:W,alt:"LinkedinIcon"})})]})]})},E=s.p+"static/media/PolicyArr.5bd35169.svg",M=function(){return Object(h.jsxs)("div",{className:"ContactsContainer",children:[Object(h.jsx)("h4",{children:"Contact us"}),Object(h.jsx)("p",{children:"hello@digiftng.com"}),Object(h.jsx)("h4",{children:"Office"}),Object(h.jsx)("p",{children:"226, Awolowo road, Ikoyi, Lagos State, Nigeria"}),Object(h.jsxs)("p",{className:"policies",children:[Object(h.jsxs)(x,{to:"#",className:"policyLinks",children:[Object(h.jsx)("p",{children:"Our privacy policy "}),Object(h.jsx)("p",{children:Object(h.jsx)("img",{src:E,alt:"arrow right"})})]}),Object(h.jsxs)(x,{to:"#",className:"policyLinks",children:[Object(h.jsx)("p",{children:"Terms and Condition"}),Object(h.jsx)("p",{children:Object(h.jsx)("img",{src:E,alt:"arrow right"})})]})]})]})},R=[{label:"Careers",target:null,url:"#"},{label:"FAQ",target:null,url:"#"}],U=[{label:"Personal",target:null,url:"#"},{label:"Business",target:null,url:"#"},{label:"Vendor",target:null,url:"#"}],$=[{label:"Instagram",target:null,url:"#"},{label:"Twitter",target:null,url:"#"},{label:"LinkedIn",target:null,url:"#"},{label:"Facebook",target:null,url:"#"}],J=function(){var e=Object(h.jsx)("div",{children:R.map((function(e,t){return Object(h.jsx)(x,{to:e.url,className:"category",children:e.label},t)}))}),t=Object(h.jsx)("div",{children:U.map((function(e,t){return Object(h.jsx)(x,{to:e.url,className:"category",children:e.label},t)}))}),s=Object(h.jsx)("div",{children:$.map((function(e,t){return Object(h.jsx)(x,{to:e.url,className:"category",children:e.label},t)}))});return Object(h.jsxs)("div",{className:"routesContainer",children:[Object(h.jsxs)("div",{className:"routes",children:[Object(h.jsx)("h4",{children:"Company"}),e]}),Object(h.jsxs)("div",{className:"routes",children:[Object(h.jsx)("h4",{children:"Products"}),t]}),Object(h.jsxs)("div",{className:"routes",children:[Object(h.jsx)("h4",{children:"Contact"}),s]})]})},K=function(){return Object(h.jsxs)("div",{className:"footer1",children:[Object(h.jsx)(F,{}),Object(h.jsx)(M,{}),Object(h.jsx)(J,{})]})},Q=s.p+"static/media/Arrow-Up.2a6bfbab.svg",V=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"footer2Conatiner",children:[Object(h.jsx)("div",{className:"footer2Img",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(h.jsx)("img",{src:Q,alt:"arrow-up"})}),Object(h.jsx)("p",{children:"The website www.digiftng.com is owned and operated by Blinksky Nigeria Limited, a company duly registered under the Laws of the Federal Republic of Nigeria with RC Number: 1656204. Trademark to all logos of Giftcards are owned by their respective brands and Blinksky Nigeria Limited doesn\u2019t claim ownership of these trademarks. All Giftcards dominated in USD are provided in conjunction with BlinkSky Inc. Users must have valid US account and in some cases a valid US address before purchasing."})]}),Object(h.jsx)("div",{className:"copyright",children:Object(h.jsx)("p",{children:"Copyright \xa9 2022 Blinksky Nigeria Limited"})})]})},q=(s(27),function(){return Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsx)(K,{}),Object(h.jsx)(V,{})]})}),X=function(e){var t=e.theme,s=e.setTheme,i=e.children;return Object(h.jsx)("div",{style:{backgroundColor:"light"===t?"white":"black",transition:"all .5s ease",color:"dark"===t&&"white",maxWidth:"1440px",margin:"0 auto"},children:Object(h.jsxs)("div",{style:{width:"95%",margin:"0 auto"},children:[Object(h.jsx)(S,{changeTheme:function(){s("light"===t?"dark":"light")}}),Object(h.jsx)("div",{className:"pages",children:i}),Object(h.jsx)(q,{})]})})},Y=s.p+"static/media/Hero.ace26f95.svg",Z=function(){return Object(h.jsx)("div",{className:"heroImg",children:Object(h.jsx)("img",{src:Y,alt:"introductoryImg"})})},_=s(13),ee=["Ecommerce","Popular","Airtime & Electricity","Gaming","Electronics","Clothes and Fashion","Jewelry & Watches","Home and furnitures","Sports & Entertainment"],te=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),s=t[0],i=t[1],c=function(e){var t=Object(_.a)(s);e.target.checked?t=[].concat(Object(_.a)(s),[e.target.value]):t.splice(s.indexOf(e.target.value),1),i(t)};return Object(h.jsx)("div",{className:"filterContainer",children:Object(h.jsxs)("div",{className:"filterBody",children:[Object(h.jsxs)("div",{className:"filterHeader",children:[Object(h.jsx)("h4",{children:"Filters"}),Object(h.jsx)("h4",{children:"Reset"})]}),Object(h.jsx)("h4",{children:"Categories"}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"list-container",children:ee.map((function(e){return Object(h.jsxs)("div",{className:"lists",children:[Object(h.jsx)("input",{value:e,type:"checkbox",onChange:c}),Object(h.jsx)("span",{className:(t=e,s.includes(t)?"checked-item":"not-checked-item"),children:e})]},e);var t}))})})]})})},se=[{label:"Giftcard",title:"Amazon Gift Card",content:"Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",info:"This card has a fee of $ 0.99",btn:"Purchase card"},{label:"Giftcard",title:"Amazon Gift Card",content:"Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",info:"This card has a fee of $ 0.99",btn:"Purchase card"},{label:"Giftcard",title:"Amazon Gift Card",content:"Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",info:"This card has a fee of $ 0.99",btn:"Purchase card"},{label:"Giftcard",title:"Amazon Gift Card",content:"Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",info:"This card has a fee of $ 0.99",btn:"Purchase card"}],ie=s.p+"static/media/DarkAmazon.d0b90427.svg",ce=s.p+"static/media/info.385c944c.svg",ne=s.p+"static/media/WhiteArr.164dff1d.svg",ae=function(){return Object(h.jsxs)("div",{className:"CardsContent",children:[Object(h.jsx)("div",{className:"CardsWrapper",children:se.map((function(e,t){return Object(h.jsxs)("div",{className:"Cards CardsList",children:[Object(h.jsx)("div",{className:"cardLabel",children:Object(h.jsx)("p",{children:e.label})}),Object(h.jsxs)("div",{className:"cardImg",children:[Object(h.jsx)("img",{src:ie,alt:"amazon card"}),Object(h.jsx)("p",{children:e.title})]}),Object(h.jsx)("div",{className:"title",children:e.content}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:ce,alt:"infoIcon"})}),Object(h.jsx)("p",{children:e.info})]}),Object(h.jsxs)("button",{children:[Object(h.jsx)("p",{children:e.btn}),Object(h.jsx)("p",{children:Object(h.jsx)("img",{src:ne,alt:"arrow"})})]})]},t)}))}),Object(h.jsx)("div",{className:"CardsWrapper",children:se.map((function(e,t){return Object(h.jsxs)("div",{className:"Cards CardsList",children:[Object(h.jsx)("div",{className:"cardLabel",children:Object(h.jsx)("p",{children:e.label})}),Object(h.jsxs)("div",{className:"cardImg",children:[Object(h.jsx)("img",{src:ie,alt:"amazon card"}),Object(h.jsx)("p",{children:e.title})]}),Object(h.jsx)("div",{className:"title",children:e.content}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:ce,alt:"infoIcon"})}),Object(h.jsx)("p",{children:e.info})]}),Object(h.jsxs)("button",{children:[Object(h.jsx)("p",{children:e.btn}),Object(h.jsx)("p",{children:Object(h.jsx)("img",{src:ne,alt:"arrow"})})]})]},t)}))}),Object(h.jsx)("div",{className:"CardsWrapper",children:se.map((function(e,t){return Object(h.jsxs)("div",{className:"Cards CardsList",children:[Object(h.jsx)("div",{className:"cardLabel",children:Object(h.jsx)("p",{children:e.label})}),Object(h.jsxs)("div",{className:"cardImg",children:[Object(h.jsx)("img",{src:ie,alt:"amazon card"}),Object(h.jsx)("p",{children:e.title})]}),Object(h.jsx)("div",{className:"title",children:e.content}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:ce,alt:"infoIcon"})}),Object(h.jsx)("p",{children:e.info})]}),Object(h.jsxs)("button",{children:[Object(h.jsx)("p",{children:e.btn}),Object(h.jsx)("p",{children:Object(h.jsx)("img",{src:ne,alt:"arrow"})})]})]},t)}))})]})},re=function(){return Object(h.jsxs)("div",{className:"LatestArrivalContainer",children:[Object(h.jsx)("h2",{children:"Latest Arrivals"}),Object(h.jsxs)("div",{className:"latestWrapper",children:[Object(h.jsx)(te,{}),Object(h.jsx)(ae,{})]})]})},le=(s(28),[{label:"\u201cDigift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.\u201d",Name:"Osemwengie Benjamin",title:"Product Designer at Digift"},{label:"\u201cDigift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.\u201d",Name:"Osemwengie Benjamin",title:"Product Designer at Digift"},{label:"\u201cDigift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.\u201d",Name:"Osemwengie Benjamin",title:"Product Designer at Digift"}]),de=s.p+"static/media/Cs.d7c241e8.svg",je=function(){return Object(h.jsxs)("div",{className:"testimonyContainer",children:[Object(h.jsx)("h1",{children:"\u201cHear what happy customers are saying about Digift\u201d"}),Object(h.jsx)("div",{className:"testimonyContent",children:le.map((function(e,t){return Object(h.jsx)("div",{className:"testimonyBody",children:Object(h.jsxs)("div",{className:"testimonyList",children:[Object(h.jsx)("p",{children:e.label}),Object(h.jsxs)("div",{className:"testimonyImg",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:de,alt:"customer"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"name",children:e.Name}),Object(h.jsx)("div",{className:"title",children:e.title})]})]})]})},t)}))}),Object(h.jsx)("div",{})]})},oe=s.p+"static/media/LastCard.c9e408ee.svg",be=function(){return Object(h.jsxs)("div",{className:"PersonalContainer",children:[Object(h.jsx)(Z,{}),Object(h.jsx)(re,{}),Object(h.jsx)(je,{}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:oe,alt:"Last Card"})})]})},me=s.p+"static/media/Dashboard.4aed99a4.svg",he=s.p+"static/media/wide.0d71b07a.svg",xe=s.p+"static/media/Darkarr.daae6491.svg",Oe=s.p+"static/media/NormalArr.ed663795.svg",ge=function(){return Object(h.jsxs)("div",{className:"BusinessContainer",children:[Object(h.jsxs)("div",{className:"BusinessWrapper",children:[Object(h.jsxs)("h2",{children:["Expand the giftcard industry,"," ",Object(h.jsx)("span",{className:"oneCard",children:"one card"})," at a time!",Object(h.jsx)("span",{className:"Star",children:Object(h.jsx)("img",{src:he,alt:"star"})})]}),Object(h.jsx)("p",{children:"Digift helps businesses connect with customers by letting them offer their business gift cards to a large number of people."}),Object(h.jsxs)("div",{className:"AuthBtn",children:[Object(h.jsx)(w,{type:"submit",text:"Get started",className:"signup",icon:Oe}),Object(h.jsx)(w,{type:"submit",text:"Sign In",className:"login",icon:xe})]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:me,alt:"Dashboard img"})})]})},ue=s.p+"static/media/Business-Homepage.aaab3373.svg",pe=s.p+"static/media/Design.5c5612fe.svg",fe=(s(29),s.p+"static/media/CodeImg.82c6fc88.svg"),ve=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"BusinessContainer",children:[Object(h.jsxs)("div",{className:"BusinessWrapper",children:[Object(h.jsxs)("h2",{children:["Our API is built to be as"," ",Object(h.jsx)("span",{className:"oneCard",children:"lightweight"})," and efficient as possible.",Object(h.jsx)("span",{className:"Star",children:Object(h.jsx)("img",{src:he,alt:"star"})})]}),Object(h.jsx)("p",{children:"We offer client and server libraries in everything from our API"}),Object(h.jsxs)("div",{className:"AuthBtn",children:[Object(h.jsx)(w,{type:"submit",text:"Get started",className:"signup",icon:Oe}),Object(h.jsx)(w,{type:"submit",text:"Sign In",className:"login",icon:xe})]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:fe,alt:"Api img"})})]})})},Ne=function(){return Object(h.jsxs)("div",{className:"BusinessComponent",children:[Object(h.jsx)(ge,{}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:ue,alt:"Business img"})}),Object(h.jsxs)("div",{className:"DesignImg",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:pe,alt:"Design img"})}),Object(h.jsx)("div",{className:"DesignImg2",children:Object(h.jsx)("img",{src:pe,alt:"Design img"})})]}),Object(h.jsx)(ve,{})]})},ye=s.p+"static/media/404.6bb19f5f.svg",we=(s(30),function(){return Object(h.jsx)("div",{className:"notfoundContainer",children:Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)("img",{src:ye,alt:"Not found img"}),Object(h.jsx)("h1",{children:"Error 404"}),Object(h.jsx)("p",{children:"Oops! Something is missing."}),Object(h.jsx)("p",{children:"We can\u2019t find the page you\u2019re looking for or the link is broken."}),Object(h.jsx)(x,{to:"/",className:"btn btn-eze",children:"Back to Homepage"})]})})}),Ce=function(){var e=Object(r.useState)("light"),t=Object(b.a)(e,2),s=t[0],i=t[1];return Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{exact:!0,path:"/",element:Object(h.jsx)(X,{theme:s,setTheme:i,children:Object(h.jsx)(be,{})})}),Object(h.jsx)(m.a,{path:"/business",element:Object(h.jsx)(X,{theme:s,setTheme:i,children:Object(h.jsx)(Ne,{})})}),Object(h.jsx)(m.a,{path:"*",element:Object(h.jsx)(we,{})})]})};var ke=function(){return Object(h.jsx)(o.a,{children:Object(h.jsx)(Ce,{})})};j.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(ke,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2f4f336c.chunk.js.map