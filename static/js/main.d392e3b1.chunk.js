(this["webpackJsonpsamurai-way-react"]=this["webpackJsonpsamurai-way-react"]||[]).push([[0],[,,,,,,,,function(e,t,s){e.exports={nav:"Navbar_nav__1yc_9",list:"Navbar_list__1nEoz",item:"Navbar_item__3QktE",activeLink:"Navbar_activeLink__3A7hM"}},,function(e,t,s){e.exports={header:"ProfileInfo_header__3mbxf",description:"ProfileInfo_description__1L6vF",avatar:"ProfileInfo_avatar__dyZ7G",content:"ProfileInfo_content__3Nm6p",contentTitle:"ProfileInfo_contentTitle__2G22c",date:"ProfileInfo_date__pVlbA",city:"ProfileInfo_city__2hmka",education:"ProfileInfo_education__3i3zv",web:"ProfileInfo_web__1tY2U"}},,function(e,t,s){e.exports={title:"Dialogs_title__28iCB",dialogs:"Dialogs_dialogs__3jcS6",dialogsItems:"Dialogs_dialogsItems__6M02R",messagesItems:"Dialogs_messagesItems__2U65X",messageNew:"Dialogs_messageNew__12CNz"}},function(e,t,s){e.exports={message:"Post_message__1L_fX",postItem:"Post_postItem__1mbyP",buttonWrap:"Post_buttonWrap__BY_ku",button:"Post_button__2DQAh"}},,,,function(e,t,s){e.exports={posts:"MyPosts_posts__29dbf",postsTitle:"MyPosts_postsTitle__1GkjU",postNew:"MyPosts_postNew__1s7lh"}},,,,,function(e,t,s){e.exports={dialog:"DialogItem_dialog__1Gbrh",activeLink:"DialogItem_activeLink__29AX-"}},,,function(e,t,s){e.exports={header:"Header_header__2LBsS"}},function(e,t,s){e.exports={title:"Music_title__1vL8H"}},,,function(e,t,s){e.exports={title:"News_title__1mkSt"}},function(e,t,s){e.exports={wrap:"Profile_wrap__Aiv5L"}},function(e,t,s){e.exports={message:"Message_message__Ormti"}},function(e,t,s){e.exports={title:"Settings_title__1Nsh2"}},,,,,function(e,t,s){},function(e,t,s){},,,,,,,,,,,,function(e,t,s){"use strict";s.r(t);var a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,51)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),i(e),n(e),c(e)}))},i=s(23),n=s.p+"static/media/avatar-female.69e4a8d2.png",c=s.p+"static/media/avatar-friend.db419fa6.png",r=s.p+"static/media/avatar-of-nurse.3601435d.png",o=s.p+"static/media/avatar-cartoon-eyes-female.03b8f595.png",l="ADD-POST",d="UPDATE-NEW-POST-TEXT",j={postsData:[{id:1,avatar:n,message:"Hey, why nobody love me?",like:11,dislike:0},{id:2,avatar:c,message:"It's our new program! Hey!",like:9,dislike:1},{id:3,avatar:r,message:"Hi, It's my first post!",like:21,dislike:2}],newPostText:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var s={id:5,avatar:o,message:e.newPostText,like:0,dislike:0};return e.postsData.push(s),e.newPostText="",e;case d:return e.newPostText=t.newText,e;default:return e}},b="UPDATE-NEW-MESSAGE-BODY",u="SEND-MESSAGE",p={dialogsData:[{id:1,name:"Oleh"},{id:2,name:"Hanna"},{id:3,name:"Iryna"},{id:4,name:"Serge"},{id:5,name:"Niklas"},{id:6,name:"Manuel"},{id:7,name:"Tomas"},{id:8,name:"Robert"}],messagesData:[{id:1e3,message:"Hi!!!"},{id:1001,message:"How are you?"},{id:1002,message:"Very well!"},{id:1003,message:"Yo"},{id:1004,message:"Yo"},{id:1005,message:"Yo"}],newMessageBody:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return e.newMessageBody=t.messageBody,e;case u:var s=e.newMessageBody;return e.newMessageBody="",e.messagesData.push({id:1006,message:s}),e;default:return e}},g={},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return e},_=Object(i.a)({profilePage:m,dialogsPage:h,sidebar:x}),v=Object(i.b)(_),f=s(1),O=s.n(f),N=s(24),w=s.n(N),y=(s(37),s(38),s(3)),k=s(25),P=s.n(k),D=s.p+"static/media/logo-django.5b8bfc5a.svg",I=s(0),T=function(){return Object(I.jsxs)("header",{className:P.a.header,children:[Object(I.jsx)("h1",{children:"The Social Network"}),Object(I.jsx)("img",{src:D,alt:""})]})},S=s(26),M=s.n(S),L=function(e){return Object(I.jsx)("div",{className:M.a.title,children:"Music"})},C=s(9),B=s(8),E=s.n(B),A=function(){return Object(I.jsx)("nav",{className:E.a.nav,children:Object(I.jsxs)("ul",{className:E.a.list,children:[Object(I.jsx)("li",{className:E.a.item,children:Object(I.jsx)(C.b,{to:"/profile",activeClassName:E.a.activeLink,children:"Profile"})}),Object(I.jsx)("li",{className:E.a.item,children:Object(I.jsx)(C.b,{to:"/dialogs",activeClassName:E.a.activeLink,children:"Messages"})}),Object(I.jsx)("li",{className:E.a.item,children:Object(I.jsx)(C.b,{to:"/news",activeClassName:E.a.activeLink,children:"News"})}),Object(I.jsx)("li",{className:E.a.item,children:Object(I.jsx)(C.b,{to:"/music",activeClassName:E.a.activeLink,children:"Music"})}),Object(I.jsx)("li",{className:E.a.item,children:Object(I.jsx)(C.b,{to:"/settings",activeClassName:E.a.activeLink,children:"Settings"})})]})})},H=s(29),G=s.n(H),W=function(e){return Object(I.jsx)("div",{className:G.a.title,children:"News"})},Y=s(30),F=s.n(Y),U=s(17),X=s.n(U),z=s(13),R=s.n(z),J=s(21),Q=s(16),V=Object(I.jsx)(J.a,{icon:Q.b}),Z=Object(I.jsx)(J.a,{icon:Q.a}),q=function(e){return Object(I.jsxs)("div",{className:R.a.message,children:[Object(I.jsxs)("div",{className:R.a.postItem,children:[Object(I.jsx)("img",{src:e.avatar,alt:"avatar"}),Object(I.jsx)("p",{children:e.message})]}),Object(I.jsxs)("div",{className:R.a.buttonWrap,children:[Object(I.jsxs)("button",{className:R.a.button,children:[V," ",Object(I.jsx)("span",{children:e.like})]}),Object(I.jsxs)("button",{className:R.a.button,children:[Z,Object(I.jsx)("span",{children:e.dislike})]})]})]})},K=function(e){var t=e.postsData.map((function(e){return Object(I.jsx)(q,{avatar:e.avatar,message:e.message,like:e.like,dislike:e.dislike},e.id)})),s=O.a.createRef();return Object(I.jsxs)("div",{className:X.a.posts,children:[Object(I.jsx)("h3",{className:X.a.postsTitle,children:"My posts"}),Object(I.jsxs)("div",{className:X.a.postNew,children:[Object(I.jsx)("textarea",{onChange:function(){var t=function(e){return{type:d,newText:e}}(s.current.value);e.dispatch(t)},ref:s,name:"comment",cols:"100",rows:"3",placeholder:"your post...",value:e.newPostText}),Object(I.jsx)("br",{}),Object(I.jsx)("input",{type:"submit",value:"Add post",onClick:function(){e.dispatch({type:l})}})]}),t]})},$=s(10),ee=s.n($),te=s.p+"static/media/prof-header.d3fd7af1.jpg",se=s.p+"static/media/avatar-icon-png.c8950e98.png",ae=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:ee.a.header,children:Object(I.jsx)("img",{src:te,alt:""})}),Object(I.jsxs)("div",{className:ee.a.description,children:[Object(I.jsx)("img",{className:ee.a.avatar,src:se,alt:""}),Object(I.jsxs)("div",{className:ee.a.content,children:[Object(I.jsx)("h4",{className:ee.a.contentTitle,children:"Oleh S."}),Object(I.jsx)("p",{className:ee.a.date,children:"Date of Birth: \xa024 August"}),Object(I.jsx)("p",{className:ee.a.city,children:"City: \xa0Dobropillya"}),Object(I.jsx)("p",{className:ee.a.education,children:"Education: \xa0School '19"}),Object(I.jsxs)("p",{className:ee.a.web,children:["Web: \xa0",Object(I.jsx)("a",{href:"https://skrypnykov.github.io/",target:"_blank",rel:"noreferrer",children:"https://skrypnykov.github.io/"})]})]})]})]})},ie=function(e){return Object(I.jsxs)("div",{className:F.a.wrap,children:[Object(I.jsx)(ae,{}),Object(I.jsx)(K,{postsData:e.state.postsData,newPostText:e.state.newPostText,dispatch:e.dispatch})]})},ne=s(12),ce=s.n(ne),re=s(22),oe=s.n(re),le=function(e){var t="/dialogs/"+e.id;return Object(I.jsx)("div",{className:oe.a.dialog,children:Object(I.jsx)(C.b,{to:t,activeClassName:oe.a.activeLink,children:e.name})})},de=s(31),je=s.n(de),me=function(e){return Object(I.jsx)("div",{className:je.a.message,children:e.message})},be=function(e){var t=e.store.getState().dialogsPage,s=t.dialogsData.map((function(e){return Object(I.jsx)(le,{name:e.name,id:e.id},e.id)})),a=t.messagesData.map((function(e){return Object(I.jsx)(me,{message:e.message},e.id)})),i=t.newMessageBody;return Object(I.jsxs)("div",{className:ce.a.wrap,children:[Object(I.jsx)("div",{className:ce.a.title,children:"Dialogs"}),Object(I.jsxs)("div",{className:ce.a.dialogs,children:[Object(I.jsx)("div",{className:ce.a.dialogsItems,children:s}),Object(I.jsxs)("div",{className:ce.a.messagesItems,children:[Object(I.jsx)("div",{children:a}),Object(I.jsxs)("div",{className:ce.a.messageNew,children:[Object(I.jsx)("div",{children:Object(I.jsx)("textarea",{value:i,onChange:function(t){var s=t.target.value;e.store.dispatch(function(e){return{type:b,messageBody:e}}(s))},placeholder:"your message...",name:"comment",cols:"40",rows:"3"})}),Object(I.jsx)("div",{children:Object(I.jsx)("button",{onClick:function(){e.store.dispatch({type:u})},children:"Send"})})]})]})]})]})},ue=s(32),pe=s.n(ue),he=function(e){return Object(I.jsx)("div",{className:pe.a.title,children:"Settings"})},ge=function(e){return Object(I.jsxs)("div",{className:"app-wrapper",children:[Object(I.jsx)(T,{}),Object(I.jsx)(A,{}),Object(I.jsxs)("div",{className:"app-wrapper-content",children:[Object(I.jsx)(y.a,{path:"/profile",render:function(){return Object(I.jsx)(ie,{state:e.state.profilePage,dispatch:e.dispatch})}}),Object(I.jsx)(y.a,{path:"/dialogs",render:function(){return Object(I.jsx)(be,{store:e.store})}}),Object(I.jsx)(y.a,{path:"/news",render:function(){return Object(I.jsx)(W,{})}}),Object(I.jsx)(y.a,{path:"/music",render:function(){return Object(I.jsx)(L,{})}}),Object(I.jsx)(y.a,{path:"/settings",render:function(){return Object(I.jsx)(he,{})}})]})]})},xe=function(e){w.a.render(Object(I.jsx)(C.a,{basename:"/samurai-way-react",children:Object(I.jsx)(ge,{state:e,dispatch:v.dispatch.bind(v),store:v})}),document.getElementById("root"))};xe(v.getState()),v.subscribe((function(){var e=v.getState();xe(e)})),a()}],[[50,1,2]]]);
//# sourceMappingURL=main.d392e3b1.chunk.js.map