(this["webpackJsonpdigiftng-technical-assessment"]=this["webpackJsonpdigiftng-technical-assessment"]||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var i,c,n,a,r=s(1),l=s(15),d=s.n(l),j=s(8),o=s(3),b=s(2),m=s(0),h=function(e){var t=e.to,s=e.className,i=e.children;return Object(m.jsx)(j.b,{to:t,className:"no-underline ".concat(s&&s),children:i})},x=s.p+"static/media/Logo.ed863daa.svg",O=s.p+"static/media/ArrowRight.cda5699c.svg",g=s(7),u=s(5),p=s.p+"static/media/Light.5340abc4.svg",f=s.p+"static/media/Dark-Moon.2fc51e4f.svg",v=function(e){var t=e.changeTheme,s=Object(r.useState)("Light"),i=Object(o.a)(s,2),c=i[0],n=i[1];return Object(m.jsx)(N,{children:Object(m.jsxs)("div",{className:"toggleContainer",children:[Object(m.jsx)("div",{className:"".concat("Light"===c?"active":"default"),onClick:function(){n("Light"),t()},children:Object(m.jsx)("img",{src:p,alt:"star"})}),Object(m.jsx)("div",{className:"".concat("Dark"===c?"active":"default"),onClick:function(){n("Dark"),t()},children:Object(m.jsx)("img",{src:f,alt:"star"})})]})})},N=u.b.div(i||(i=Object(g.a)(["\n  background: #f3f4f7;\n  margin-right: 10rem;\n  margin-left: 7rem;\n  border-radius: 999px;\n  padding: 4px;\n  @media (max-width: 1406px) {\n    margin-right: 4.4rem;\n  }\n  @media (max-width: 1346px) {\n    margin-right: 2rem;\n  }\n  @media (max-width: 970px) {\n    margin-right: 1rem;\n  }\n  @media (max-width: 760px) {\n    margin-right: 0rem;\n    margin-left: 0rem;\n  }\n  .toggleContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 82px;\n  }\n  .active {\n    background: #ffffff;\n    width: 100%;\n    margin: auto;\n    text-align: center;\n    padding: 5px;\n    border-radius: 22px !important;\n    cursor: pointer;\n    pointer-events: none;\n  }\n  .default {\n    background: none;\n    width: 100%;\n    margin: auto;\n    text-align: center;\n    padding: 5px;\n    border-radius: 22px !important;\n    cursor: pointer;\n  }\n  img {\n    max-width: 100% !important;\n  }\n"]))),y=function(e){var t=e.className,s=e.text,i=e.icon,c=e.type;return Object(m.jsx)("div",{className:"w-full mt-5",children:Object(m.jsxs)("button",{type:c||"button",onClick:e.onClick?function(){return e.onClick()}:null,className:t,children:[Object(m.jsxs)("span",{children:[" ",s," "]}),i&&Object(m.jsx)("img",{className:"",src:i,alt:s})]})})},w=s.p+"static/media/sparkles.e6b6f27e.svg",C=function(){return Object(m.jsxs)("div",{className:"authBtn",children:[Object(m.jsx)(y,{type:"submit",text:"Login",className:"login"}),Object(m.jsx)(y,{type:"submit",text:"Get started",className:"signup",icon:w})]})},k=(s(26),s.p+"static/media/HamMenu.ead8762e.svg"),L=s.p+"static/media/Search-Icon.36d9e699.svg",I=function(e){e.theme;var t=Object(r.useState)(""),s=Object(o.a)(t,2),i=s[0],c=s[1];return Object(m.jsxs)("form",{children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:L,alt:"HomeLogo"})}),Object(m.jsx)("input",{type:"text",name:"search",onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),c(""))},placeholder:"Find cards anywhere",value:i,onChange:function(e){c(e.target.value)}})]})},D=u.b.section(c||(c=Object(g.a)(["\n  display: flex;\n  justify-content: space-between !important;\n  z-index: 100;\n  background: white;\n  padding-top:15px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n"]))),A=u.b.div(n||(n=Object(g.a)(["\n    font-size: 1.8rem;\n    cursor: pointer;\n  img {\n      max-width: 100%;\n      width:40px;\n  }\n  @media (min-width: 700px) {\n    .navmenu {\n      display: none;\n    }\n"]))),B=u.b.div(a||(a=Object(g.a)(["\n  overflow: hidden !important;\n\n  .nav-menu {\n    width: 100%;\n    position: initial;\n    opacity: 1;\n    border-top: none;\n    border-bottom: none;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    position: absolute;\n    top: 60px;\n    left: -100%;\n    border-top: 2px solid blanchedalmond;\n    border-bottom: 1px solid blanchedalmond;\n    transition: all 0.5s ease;\n  }\n\n  .nav-menu.active {\n    background: #f9f9f9;\n    left: 0;\n    color: white;\n    opacity: 1;\n    width: 100%;\n    height: 100vh;\n    z-index: 1;\n    position: fixed;\n    overflow-y: hidden !important;\n  }\n"]))),T=function(e){var t=e.changeTheme,s=Object(r.useState)(!1),i=Object(o.a)(s,2),c=i[0],n=i[1],a=function(){n(!c)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(D,{children:[Object(m.jsx)(h,{to:"/",children:Object(m.jsx)("img",{src:x,alt:"logo",style:{height:"40px"}})}),Object(m.jsx)(A,{onClick:a,children:Object(m.jsx)("img",{src:k,alt:"menu"})})]}),Object(m.jsx)(B,{children:Object(m.jsxs)("div",{className:c?"nav-menu active":"nav-menu",children:[Object(m.jsx)(I,{}),Object(m.jsxs)("div",{className:"MobileList",children:[Object(m.jsx)(h,{to:"/",className:"contentListMobile",children:Object(m.jsx)("h4",{className:"content",onClick:a,children:"Personal"})}),Object(m.jsx)(h,{to:"/business",className:"contentListMobile",children:Object(m.jsx)("h4",{className:"content",onClick:a,children:"Business"})}),Object(m.jsxs)("div",{className:"MobileAuth",onClick:a,children:[Object(m.jsx)(C,{}),Object(m.jsx)(v,{changeTheme:t})]})]})]})})]})},G=function(e){var t=e.changeTheme;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"NavContainer",children:[Object(m.jsx)(h,{to:"/",className:"logo",children:Object(m.jsx)("img",{src:x,alt:"HomeLogo"})}),Object(m.jsxs)(h,{to:"/",className:"contentList",children:[Object(m.jsx)("h4",{className:"content",children:"Personal"}),Object(m.jsx)("div",{className:"contentIimg",children:Object(m.jsx)("img",{src:O,alt:"HomeLogo"})})]}),Object(m.jsxs)(h,{to:"/business",className:"contentList",children:[Object(m.jsx)("h4",{className:"content",children:"Business"}),Object(m.jsx)("div",{className:"contentIimg",children:Object(m.jsx)("img",{src:O,alt:"HomeLogo"})})]}),Object(m.jsx)(I,{}),Object(m.jsx)(v,{changeTheme:t}),Object(m.jsx)(C,{})]}),Object(m.jsx)("div",{className:"mobile",children:Object(m.jsx)(T,{changeTheme:t})})]})},S=s.p+"static/media/IG.eacab276.svg",z=s.p+"static/media/FB.aa88c7b4.svg",P=s.p+"static/media/TWITTER.3dbe4963.svg",H=s.p+"static/media/LINKEDIN.578e8e45.svg",W=function(){return Object(m.jsxs)("div",{className:"socialsContainer",children:[Object(m.jsx)("div",{className:"socialImg",children:Object(m.jsx)("img",{src:x,alt:"HomeLogo"})}),Object(m.jsx)("p",{children:"Creating Happiness One Giftcard at a Time."}),Object(m.jsxs)("div",{className:"MediaIcons",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:S,alt:"IgIcon"})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:z,alt:"FbIcon"})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:P,alt:"TwitterIcon"})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:H,alt:"LinkedinIcon"})})]})]})},F=s.p+"static/media/PolicyArr.5bd35169.svg",E=function(){return Object(m.jsxs)("div",{className:"ContactsContainer",children:[Object(m.jsx)("h4",{children:"Contact us"}),Object(m.jsx)("p",{children:"hello@digiftng.com"}),Object(m.jsx)("h4",{children:"Office"}),Object(m.jsx)("p",{children:"226, Awolowo road, Ikoyi, Lagos State, Nigeria"}),Object(m.jsxs)("p",{className:"policies",children:[Object(m.jsxs)(h,{to:"#",className:"policyLinks",children:[Object(m.jsx)("p",{children:"Our privacy policy "}),Object(m.jsx)("p",{children:Object(m.jsx)("img",{src:F,alt:"arrow right"})})]}),Object(m.jsxs)(h,{to:"#",className:"policyLinks",children:[Object(m.jsx)("p",{children:"Terms and Condition"}),Object(m.jsx)("p",{children:Object(m.jsx)("img",{src:F,alt:"arrow right"})})]})]})]})},M=[{label:"Careers",target:null,url:"#"},{label:"FAQ",target:null,url:"#"}],R=[{label:"Personal",target:null,url:"#"},{label:"Business",target:null,url:"#"},{label:"Vendor",target:null,url:"#"}],U=[{label:"Instagram",target:null,url:"#"},{label:"Twitter",target:null,url:"#"},{label:"LinkedIn",target:null,url:"#"},{label:"Facebook",target:null,url:"#"}],$=function(){var e=Object(m.jsx)("div",{children:M.map((function(e,t){return Object(m.jsx)(h,{to:e.url,className:"category",children:e.label},t)}))}),t=Object(m.jsx)("div",{children:R.map((function(e,t){return Object(m.jsx)(h,{to:e.url,className:"category",children:e.label},t)}))}),s=Object(m.jsx)("div",{children:U.map((function(e,t){return Object(m.jsx)(h,{to:e.url,className:"category",children:e.label},t)}))});return Object(m.jsxs)("div",{className:"routesContainer",children:[Object(m.jsxs)("div",{className:"routes",children:[Object(m.jsx)("h4",{children:"Company"}),e]}),Object(m.jsxs)("div",{className:"routes",children:[Object(m.jsx)("h4",{children:"Products"}),t]}),Object(m.jsxs)("div",{className:"routes",children:[Object(m.jsx)("h4",{children:"Contact"}),s]})]})},J=function(){return Object(m.jsxs)("div",{className:"footer1",children:[Object(m.jsx)(W,{}),Object(m.jsx)(E,{}),Object(m.jsx)($,{})]})},K=s.p+"static/media/Arrow-Up.2a6bfbab.svg",Q=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"footer2Conatiner",children:[Object(m.jsx)("div",{className:"footer2Img",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(m.jsx)("img",{src:K,alt:"arrow-up"})}),Object(m.jsx)("p",{children:"The website www.digiftng.com is owned and operated by Blinksky Nigeria Limited, a company duly registered under the Laws of the Federal Republic of Nigeria with RC Number: 1656204. Trademark to all logos of Giftcards are owned by their respective brands and Blinksky Nigeria Limited doesn\u2019t claim ownership of these trademarks. All Giftcards dominated in USD are provided in conjunction with BlinkSky Inc. Users must have valid US account and in some cases a valid US address before purchasing."})]}),Object(m.jsx)("div",{className:"copyright",children:Object(m.jsx)("p",{children:"Copyright \xa9 2022 Blinksky Nigeria Limited"})})]})},V=(s(27),function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)(J,{}),Object(m.jsx)(Q,{})]})}),q=function(e){var t=e.theme,s=e.setTheme,i=e.children;return Object(m.jsx)("div",{style:{backgroundColor:"light"===t?"white":"black",transition:"all .5s ease",color:"dark"===t&&"white",maxWidth:"1440px",margin:"0 auto"},children:Object(m.jsxs)("div",{style:{width:"95%",margin:"0 auto"},children:[Object(m.jsx)(G,{changeTheme:function(){s("light"===t?"dark":"light")}}),Object(m.jsx)("div",{className:"pages",children:i}),Object(m.jsx)(V,{})]})})},X=s.p+"static/media/Hero.ace26f95.svg",Y=function(){return Object(m.jsx)("div",{className:"heroImg",children:Object(m.jsx)("img",{src:X,alt:"introductoryImg"})})},Z=s(13),_=["Ecommerce","Popular","Airtime & Electricity","Gaming","Electronics","Clothes and Fashion","Jewelry & Watches","Home and furnitures","Sports & Entertainment"],ee=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),s=t[0],i=t[1],c=function(e){var t=Object(Z.a)(s);e.target.checked?t=[].concat(Object(Z.a)(s),[e.target.value]):t.splice(s.indexOf(e.target.value),1),i(t)};return Object(m.jsx)("div",{className:"filterContainer",children:Object(m.jsxs)("div",{className:"filterBody",children:[Object(m.jsxs)("div",{className:"filterHeader",children:[Object(m.jsx)("h4",{children:"Filters"}),Object(m.jsx)("h4",{children:"Reset"})]}),Object(m.jsx)("h4",{children:"Categories"}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"list-container",children:_.map((function(e){return Object(m.jsxs)("div",{className:"lists",children:[Object(m.jsx)("input",{value:e,type:"checkbox",onChange:c}),Object(m.jsx)("span",{className:(t=e,s.includes(t)?"checked-item":"not-checked-item"),children:e})]},e);var t}))})})]})})},te=[{label:"Giftcard",title:"Amazon Gift Card",content:"Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",info:"This card has a fee of $ 0.99",btn:"Purchase card"},{label:"Giftcard",title:"Amazon Gift Card",content:"Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",info:"This card has a fee of $ 0.99",btn:"Purchase card"},{label:"Giftcard",title:"Amazon Gift Card",content:"Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",info:"This card has a fee of $ 0.99",btn:"Purchase card"},{label:"Giftcard",title:"Amazon Gift Card",content:"Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",info:"This card has a fee of $ 0.99",btn:"Purchase card"}],se=s.p+"static/media/DarkAmazon.d0b90427.svg",ie=s.p+"static/media/info.385c944c.svg",ce=s.p+"static/media/WhiteArr.164dff1d.svg",ne=function(){return Object(m.jsxs)("div",{className:"CardsContent",children:[Object(m.jsx)("div",{className:"CardsWrapper",children:te.map((function(e,t){return Object(m.jsxs)("div",{className:"Cards CardsList",children:[Object(m.jsx)("div",{className:"cardLabel",children:Object(m.jsx)("p",{children:e.label})}),Object(m.jsxs)("div",{className:"cardImg",children:[Object(m.jsx)("img",{src:se,alt:"amazon card"}),Object(m.jsx)("p",{children:e.title})]}),Object(m.jsx)("div",{className:"title",children:e.content}),Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:ie,alt:"infoIcon"})}),Object(m.jsx)("p",{children:e.info})]}),Object(m.jsxs)("button",{children:[Object(m.jsx)("p",{children:e.btn}),Object(m.jsx)("p",{children:Object(m.jsx)("img",{src:ce,alt:"arrow"})})]})]},t)}))}),Object(m.jsx)("div",{className:"CardsWrapper",children:te.map((function(e,t){return Object(m.jsxs)("div",{className:"Cards CardsList",children:[Object(m.jsx)("div",{className:"cardLabel",children:Object(m.jsx)("p",{children:e.label})}),Object(m.jsxs)("div",{className:"cardImg",children:[Object(m.jsx)("img",{src:se,alt:"amazon card"}),Object(m.jsx)("p",{children:e.title})]}),Object(m.jsx)("div",{className:"title",children:e.content}),Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:ie,alt:"infoIcon"})}),Object(m.jsx)("p",{children:e.info})]}),Object(m.jsxs)("button",{children:[Object(m.jsx)("p",{children:e.btn}),Object(m.jsx)("p",{children:Object(m.jsx)("img",{src:ce,alt:"arrow"})})]})]},t)}))}),Object(m.jsx)("div",{className:"CardsWrapper",children:te.map((function(e,t){return Object(m.jsxs)("div",{className:"Cards CardsList",children:[Object(m.jsx)("div",{className:"cardLabel",children:Object(m.jsx)("p",{children:e.label})}),Object(m.jsxs)("div",{className:"cardImg",children:[Object(m.jsx)("img",{src:se,alt:"amazon card"}),Object(m.jsx)("p",{children:e.title})]}),Object(m.jsx)("div",{className:"title",children:e.content}),Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:ie,alt:"infoIcon"})}),Object(m.jsx)("p",{children:e.info})]}),Object(m.jsxs)("button",{children:[Object(m.jsx)("p",{children:e.btn}),Object(m.jsx)("p",{children:Object(m.jsx)("img",{src:ce,alt:"arrow"})})]})]},t)}))})]})},ae=function(){return Object(m.jsxs)("div",{className:"LatestArrivalContainer",children:[Object(m.jsx)("h2",{children:"Latest Arrivals"}),Object(m.jsxs)("div",{className:"latestWrapper",children:[Object(m.jsx)(ee,{}),Object(m.jsx)(ne,{})]})]})},re=(s(28),[{label:"\u201cDigift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.\u201d",Name:"Osemwengie Benjamin",title:"Product Designer at Digift"},{label:"\u201cDigift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.\u201d",Name:"Osemwengie Benjamin",title:"Product Designer at Digift"},{label:"\u201cDigift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.\u201d",Name:"Osemwengie Benjamin",title:"Product Designer at Digift"}]),le=s.p+"static/media/Cs.d7c241e8.svg",de=function(){return Object(m.jsxs)("div",{className:"testimonyContainer",children:[Object(m.jsx)("h1",{children:"\u201cHear what happy customers are saying about Digift\u201d"}),Object(m.jsx)("div",{className:"testimonyContent",children:re.map((function(e,t){return Object(m.jsx)("div",{className:"testimonyBody",children:Object(m.jsxs)("div",{className:"testimonyList",children:[Object(m.jsx)("p",{children:e.label}),Object(m.jsxs)("div",{className:"testimonyImg",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:le,alt:"customer"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"name",children:e.Name}),Object(m.jsx)("div",{className:"title",children:e.title})]})]})]})},t)}))}),Object(m.jsx)("div",{})]})},je=s.p+"static/media/LastCard.c9e408ee.svg",oe=function(){return Object(m.jsxs)("div",{className:"PersonalContainer",children:[Object(m.jsx)(Y,{}),Object(m.jsx)(ae,{}),Object(m.jsx)(de,{}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:je,alt:"Last Card"})})]})},be=s.p+"static/media/Dashboard.4aed99a4.svg",me=s.p+"static/media/wide.0d71b07a.svg",he=s.p+"static/media/Darkarr.daae6491.svg",xe=s.p+"static/media/NormalArr.ed663795.svg",Oe=function(){return Object(m.jsxs)("div",{className:"BusinessContainer",children:[Object(m.jsxs)("div",{className:"BusinessWrapper",children:[Object(m.jsxs)("h2",{children:["Expand the giftcard industry,"," ",Object(m.jsx)("span",{className:"oneCard",children:"one card"})," at a time!",Object(m.jsx)("span",{className:"Star",children:Object(m.jsx)("img",{src:me,alt:"star"})})]}),Object(m.jsx)("p",{children:"Digift helps businesses connect with customers by letting them offer their business gift cards to a large number of people."}),Object(m.jsxs)("div",{className:"AuthBtn",children:[Object(m.jsx)(y,{type:"submit",text:"Get started",className:"signup",icon:xe}),Object(m.jsx)(y,{type:"submit",text:"Sign In",className:"login",icon:he})]})]}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:be,alt:"Dashboard img"})})]})},ge=s.p+"static/media/Business-Homepage.aaab3373.svg",ue=s.p+"static/media/Design.5c5612fe.svg",pe=(s(29),s.p+"static/media/CodeImg.82c6fc88.svg"),fe=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"BusinessContainer",children:[Object(m.jsxs)("div",{className:"BusinessWrapper",children:[Object(m.jsxs)("h2",{children:["Our API is built to be as"," ",Object(m.jsx)("span",{className:"oneCard",children:"lightweight"})," and efficient as possible.",Object(m.jsx)("span",{className:"Star",children:Object(m.jsx)("img",{src:me,alt:"star"})})]}),Object(m.jsx)("p",{children:"We offer client and server libraries in everything from our API"}),Object(m.jsxs)("div",{className:"AuthBtn",children:[Object(m.jsx)(y,{type:"submit",text:"Get started",className:"signup",icon:xe}),Object(m.jsx)(y,{type:"submit",text:"Sign In",className:"login",icon:he})]})]}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:pe,alt:"Api img"})})]})})},ve=function(){return Object(m.jsxs)("div",{className:"BusinessComponent",children:[Object(m.jsx)(Oe,{}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:ge,alt:"Business img"})}),Object(m.jsxs)("div",{className:"DesignImg",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:ue,alt:"Design img"})}),Object(m.jsx)("div",{className:"DesignImg2",children:Object(m.jsx)("img",{src:ue,alt:"Design img"})})]}),Object(m.jsx)(fe,{})]})},Ne=s.p+"static/media/404.6bb19f5f.svg",ye=(s(30),function(){return Object(m.jsx)("div",{className:"notfoundContainer",children:Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("img",{src:Ne,alt:"Not found img"}),Object(m.jsx)("h1",{children:"Error 404"}),Object(m.jsx)("p",{children:"Oops! Something is missing."}),Object(m.jsx)("p",{children:"We can\u2019t find the page you\u2019re looking for or the link is broken."}),Object(m.jsx)(h,{to:"/",className:"btn btn-eze",children:"Back to Homepage"})]})})}),we={light:{},dark:{}},Ce=function(){var e=Object(r.useState)("light"),t=Object(o.a)(e,2),s=t[0],i=t[1];return Object(m.jsx)("div",{children:Object(m.jsx)(u.a,{theme:we[s],children:Object(m.jsx)(q,{theme:s,setTheme:i,children:Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{exact:!0,path:"/",element:Object(m.jsx)(oe,{})}),Object(m.jsx)(b.a,{path:"/business",element:Object(m.jsx)(ve,{})}),Object(m.jsx)(b.a,{path:"*",element:Object(m.jsx)(ye,{})})]})})})})};var ke=function(){return Object(m.jsx)(j.a,{children:Object(m.jsx)(Ce,{})})};d.a.render(Object(m.jsx)(ke,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c2dd86d0.chunk.js.map