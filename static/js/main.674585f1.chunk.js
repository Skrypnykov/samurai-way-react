(this["webpackJsonpsamurai-way-react"]=this["webpackJsonpsamurai-way-react"]||[]).push([[0],{100:function(e,t,s){e.exports={dialog:"DialogItem_dialog__8qC4u",activeLink:"DialogItem_activeLink__cyvux"}},11:function(e,t,s){e.exports={header:"ProfileInfo_header__1MJ9f",description:"ProfileInfo_description__1FWdy",avatar:"ProfileInfo_avatar__289cO",content:"ProfileInfo_content__leN5h",contentTitle:"ProfileInfo_contentTitle__1FFwa",contentItem:"ProfileInfo_contentItem__1XmK7",contentData:"ProfileInfo_contentData__26g3e",socialNetwork:"ProfileInfo_socialNetwork__31c45",facebook:"ProfileInfo_facebook__3Ces_",website:"ProfileInfo_website__VMjUj",vk:"ProfileInfo_vk__3mOPT",twitter:"ProfileInfo_twitter__18bi0",instagram:"ProfileInfo_instagram__2rj5p",youtube:"ProfileInfo_youtube__2IJCP",github:"ProfileInfo_github__23xoF",mainLink:"ProfileInfo_mainLink__1dGad",switch:"ProfileInfo_switch__3nDNV",slider:"ProfileInfo_slider__27asz",switchInput:"ProfileInfo_switchInput__3QRJp"}},140:function(e,t,s){e.exports={wrap:"Profile_wrap__3GM7T"}},143:function(e,t,s){e.exports={message:"Message_message__28aa8"}},144:function(e,t,s){e.exports={title:"News_title__1W7rS"}},145:function(e,t,s){e.exports={title:"Music_title__fVbPg"}},146:function(e,t,s){e.exports={title:"Settings_title__Z9KHv"}},16:function(e,t,s){e.exports={nav:"Navbar_nav__1dWpI",list:"Navbar_list__16LHF",item:"Navbar_item__3UZIM",activeLink:"Navbar_activeLink__3i75j"}},18:function(e,t,s){e.exports={pagination:"Users_pagination__1qdKu",selectedPage:"Users_selectedPage__21xQ4",buttonGet:"Users_buttonGet__Mqqoq",wrap:"Users_wrap__1gcSF",wrapUser:"Users_wrapUser__2LuIu",avatar:"Users_avatar__1xz_T",wrapButton:"Users_wrapButton__2FJ1O",wrapDescription:"Users_wrapDescription__3vXkl",fullName:"Users_fullName__CktC1",statusUser:"Users_statusUser__1amE0",alignment:"Users_alignment__2uVOl",country:"Users_country__SXPsp",city:"Users_city__tBoZY"}},22:function(e,t,s){e.exports={wrap:"Login_wrap__2wDKw",form:"Login_form__3vW3u",formItemInput:"Login_formItemInput__j0vER",formCheckbox:"Login_formCheckbox__2l9AF",formCheckboxLabel:"Login_formCheckboxLabel__QhBhk",formCheckboxInput:"Login_formCheckboxInput__3eRiq",formLoginButton:"Login_formLoginButton__3lMhy",formControlError:"Login_formControlError__2_HYW"}},254:function(e,t,s){},255:function(e,t,s){},307:function(e,t,s){"use strict";s.r(t);var a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,308)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;s(e),a(e),n(e),r(e),o(e)}))},n=s(9),r=s(46),o=s(4),i=s(134).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a8051bff-0f4f-4056-b54f-7f5326bdab8d"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return i.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return i.post("follow/".concat(e))},unfollow:function(e){return i.delete("follow/".concat(e))}},l=function(e){return i.get("profile/"+e)},u=function(e){return i.get("profile/status/"+e)},j=function(e){return i.put("profile/status",{status:e})},d=function(){return i.get("auth/me")},b=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.post("auth/login",{email:e,password:t,rememberMe:s})},f=function(){return i.delete("auth/login")},m=s.p+"static/media/avatar-female.69e4a8d2.png",p=s.p+"static/media/avatar-friend.db419fa6.png",h=s.p+"static/media/avatar-of-nurse.3601435d.png",g=s.p+"static/media/avatar-cartoon-eyes-female.03b8f595.png",O="SET_USER_PROFILE",_="ADD-POST",x="SET_STATUS",v={postsData:[{id:1,avatar:m,message:"Hey, why nobody love me?",like:11,dislike:0},{id:2,avatar:p,message:"It's our new program! Hey!",like:9,dislike:1},{id:3,avatar:h,message:"Hi, It's my first post!",like:21,dislike:2}],profile:null,status:""},N=function(e){return{type:x,status:e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:var s={id:4,avatar:g,message:t.newPostText,like:0,dislike:0};return Object(o.a)(Object(o.a)({},e),{},{postsData:[].concat(Object(r.a)(e.postsData),[s])});case x:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case O:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});default:return e}},P="SEND-MESSAGE",I={dialogsData:[{id:1,name:"Oleh"},{id:2,name:"Hanna"},{id:3,name:"Iryna"},{id:4,name:"Serge"},{id:5,name:"Niklas"},{id:6,name:"Manuel"},{id:7,name:"Tomas"},{id:8,name:"Robert"}],messagesData:[{id:1e3,message:"Hi!!!"},{id:1001,message:"How are you?"},{id:1002,message:"Very well!"},{id:1003,message:"Yo"},{id:1004,message:"Yo"},{id:1005,message:"Yo"}]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;if(t.type===P){var s=t.newMessageBody;return Object(o.a)(Object(o.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:1006,message:s}])})}return e},y={},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return e},S="FOLLOW",L="UNFOLLOW",U="SET_USERS",T="SET_CURRENT_PAGE",F="SET_TOTAL_USERS_COUNT",D="TOGGLE_IS_FETCHING",M="TOGGLE_IS_FOLLOWING_PROGRESS",E={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},A=function(e){return{type:T,currentPage:e}},B=function(e){return{type:D,isFetching:e}},z=function(e,t){return{type:M,isFetching:e,userId:t}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!0}):e}))});case L:return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!1}):e}))});case U:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case T:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case F:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case D:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case M:return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(r.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},R=s(42),G="SET_USER_DATA",q={userId:null,email:null,login:null,isAuth:!1},W=function(e,t,s,a){return{type:G,payload:{userId:e,email:t,login:s,isAuth:a}}},Y=function(){return function(e){return d().then((function(t){if(0===t.data.resultCode){var s=t.data.data,a=s.id,n=s.email,r=s.login;e(W(a,n,r,!0))}}))}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;return t.type===G?Object(o.a)(Object(o.a)({},e),t.payload):e},J="INITIALIZED_SUCCESS",K={initialized:!1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;return t.type===J?Object(o.a)(Object(o.a)({},e),{},{initialized:!0}):e},X=s(136),Q=s(133),$=Object(n.c)({profilePage:w,dialogsPage:k,usersPage:H,sidebar:C,auth:Z,form:Q.a,app:V}),ee=Object(n.e)($,Object(n.a)(X.a));window.store=ee;var te=ee,se=s(1),ae=s.n(se),ne=s(71),re=s.n(ne),oe=(s(254),s(27)),ie=s(28),ce=s(29),le=s(30),ue=(s(255),s(10)),je=s(12),de=s(13),be=s(40),fe=s.n(be),me=s.p+"static/media/logo-django.03d5cf41.svg",pe=s(0),he=function(e){return Object(pe.jsxs)("header",{className:fe.a.header,children:[Object(pe.jsxs)("div",{className:fe.a.logo,children:[Object(pe.jsx)("h1",{children:"The Social Network"}),Object(pe.jsx)("img",{src:me,alt:""})]}),Object(pe.jsx)("div",{className:fe.a.loginBlock,children:e.isAuth?Object(pe.jsxs)("div",{className:fe.a.logIn,children:[e.login," \xa0 ",Object(pe.jsx)("button",{className:fe.a.logOutButton,onClick:e.logout,children:"Log out"})]}):Object(pe.jsx)(de.b,{className:fe.a.loginLink,to:"/login",children:"Login"})})]})},ge=function(e){Object(ce.a)(s,e);var t=Object(le.a)(s);function s(){return Object(oe.a)(this,s),t.apply(this,arguments)}return Object(ie.a)(s,[{key:"render",value:function(){return Object(pe.jsx)(he,Object(o.a)({},this.props))}}]),s}(ae.a.Component),Oe=Object(je.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){f().then((function(t){0===t.data.resultCode&&e(W(null,null,null,!1))}))}}})(ge),_e=s(16),xe=s.n(_e),ve=function(){return Object(pe.jsx)("nav",{className:xe.a.nav,children:Object(pe.jsxs)("ul",{className:xe.a.list,children:[Object(pe.jsx)("li",{className:xe.a.item,children:Object(pe.jsx)(de.b,{to:"/profile",activeClassName:xe.a.activeLink,children:"Profile"})}),Object(pe.jsx)("li",{className:xe.a.item,children:Object(pe.jsx)(de.b,{to:"/dialogs",activeClassName:xe.a.activeLink,children:"Messages"})}),Object(pe.jsx)("li",{className:xe.a.item,children:Object(pe.jsx)(de.b,{to:"/users",activeClassName:xe.a.activeLink,children:"Users"})}),Object(pe.jsx)("li",{className:xe.a.item,children:Object(pe.jsx)(de.b,{to:"/news",activeClassName:xe.a.activeLink,children:"News"})}),Object(pe.jsx)("li",{className:xe.a.item,children:Object(pe.jsx)(de.b,{to:"/music",activeClassName:xe.a.activeLink,children:"Music"})}),Object(pe.jsx)("li",{className:xe.a.item,children:Object(pe.jsx)(de.b,{to:"/settings",activeClassName:xe.a.activeLink,children:"Settings"})})]})})},Ne=function(e){return{isAuth:e.auth.isAuth}},we=function(e){var t=function(t){Object(ce.a)(a,t);var s=Object(le.a)(a);function a(){return Object(oe.a)(this,a),s.apply(this,arguments)}return Object(ie.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(pe.jsx)(e,Object(o.a)({},this.props)):Object(pe.jsx)(ue.a,{to:"/login"})}}]),a}(ae.a.Component);return Object(je.b)(Ne)(t)},Pe=s(140),Ie=s.n(Pe),ke=s(11),ye=s.n(ke),Ce=s.p+"static/media/avatar-man.c8950e98.png",Se=s(97),Le=s.n(Se),Ue=s.p+"static/media/preloader.80c1dbfa.svg",Te=function(e){return Object(pe.jsx)("div",{className:Le.a.container,children:Object(pe.jsx)("div",{className:Le.a.preloader,children:Object(pe.jsx)("img",{src:Ue,alt:""})})})},Fe=s(101),De=s(77),Me=s.n(De),Ee=function(e){var t=Object(se.useState)(!1),s=Object(Fe.a)(t,2),a=s[0],n=s[1],r=Object(se.useState)(e.status),o=Object(Fe.a)(r,2),i=o[0],c=o[1];Object(se.useEffect)((function(){c(e.status)}),[e.status]);return Object(pe.jsxs)("div",{className:Me.a.status,children:[!a&&Object(pe.jsx)("div",{className:Me.a.statusMode,onDoubleClick:function(){n(!0)},children:e.status||"no status"}),a&&Object(pe.jsx)("input",{className:Me.a.statusInput,onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(i)},defaultValue:i})]})},Ae=s(23),Be=s(141),ze=s(36),He=function(e){return e.profile?Object(pe.jsxs)("div",{children:[Object(pe.jsx)("div",{className:ye.a.header}),Object(pe.jsxs)("div",{className:ye.a.description,children:[Object(pe.jsx)("img",{className:ye.a.avatar,src:null!=e.profile.photos.large?e.profile.photos.large:Ce,alt:""}),Object(pe.jsxs)("div",{className:ye.a.content,children:[Object(pe.jsx)(Ee,{status:e.status,updateStatus:e.updateStatus}),Object(pe.jsx)("h4",{className:ye.a.contentTitle,children:e.profile.fullName}),Object(pe.jsxs)("p",{className:ye.a.contentItem,children:["about me: \xa0",Object(pe.jsx)("span",{className:ye.a.contentData,children:e.profile.aboutMe})]}),Object(pe.jsxs)("p",{className:ye.a.contentItem,children:["looking for a job: \xa0",Object(pe.jsxs)("label",{className:ye.a.switch,children:[Object(pe.jsx)("input",{className:ye.a.switchInput,type:"checkbox",value:e.profile.lookingForAJob}),Object(pe.jsx)("span",{className:ye.a.slider})]})]}),Object(pe.jsxs)("p",{className:ye.a.contentItem,children:["description: \xa0",Object(pe.jsx)("span",{className:ye.a.contentData,children:e.profile.lookingForAJobDescription})]}),Object(pe.jsxs)("ul",{className:ye.a.socialNetwork,children:[Object(pe.jsx)("li",{children:Object(pe.jsx)("a",{className:ye.a.facebook,href:e.profile.contacts.facebook,target:"_blank",rel:"noopener noreferrer",children:Object(pe.jsx)(Ae.a,{icon:ze.a})})}),Object(pe.jsx)("li",{children:Object(pe.jsx)("a",{className:ye.a.website,href:e.profile.contacts.website,target:"_blank",rel:"noopener noreferrer",children:Object(pe.jsx)(Ae.a,{icon:ze.d})})}),Object(pe.jsx)("li",{children:Object(pe.jsx)("a",{className:ye.a.vk,href:e.profile.contacts.vk,target:"_blank",rel:"noopener noreferrer",children:Object(pe.jsx)(Ae.a,{icon:ze.f})})}),Object(pe.jsx)("li",{children:Object(pe.jsx)("a",{className:ye.a.twitter,href:e.profile.contacts.twitter,target:"_blank",rel:"noopener noreferrer",children:Object(pe.jsx)(Ae.a,{icon:ze.e})})}),Object(pe.jsx)("li",{children:Object(pe.jsx)("a",{className:ye.a.instagram,href:e.profile.contacts.instagram,target:"_blank",rel:"noopener noreferrer",children:Object(pe.jsx)(Ae.a,{icon:ze.c})})}),Object(pe.jsx)("li",{children:Object(pe.jsx)("a",{className:ye.a.youtube,href:e.profile.contacts.youtube,target:"_blank",rel:"noopener noreferrer",children:Object(pe.jsx)(Ae.a,{icon:ze.g})})}),Object(pe.jsx)("li",{children:Object(pe.jsx)("a",{className:ye.a.github,href:e.profile.contacts.github,target:"_blank",rel:"noopener noreferrer",children:Object(pe.jsx)(Ae.a,{icon:ze.b})})}),Object(pe.jsx)("li",{children:Object(pe.jsx)("a",{className:ye.a.mainLink,href:e.profile.contacts.mainLink,target:"_blank",rel:"noopener noreferrer",children:Object(pe.jsx)(Ae.a,{icon:Be.a})})})]})]})]})]}):Object(pe.jsx)(Te,{})},Re=s(131),Ge=s(132),qe=s(47),We=s.n(qe),Ye=s(48),Ze=s.n(Ye),Je=s(75),Ke=Object(pe.jsx)(Ae.a,{icon:Je.b}),Ve=Object(pe.jsx)(Ae.a,{icon:Je.a}),Xe=function(e){return Object(pe.jsxs)("div",{className:Ze.a.message,children:[Object(pe.jsxs)("div",{className:Ze.a.postItem,children:[Object(pe.jsx)("img",{src:e.avatar,alt:"avatar"}),Object(pe.jsx)("p",{children:e.message})]}),Object(pe.jsxs)("div",{className:Ze.a.buttonWrap,children:[Object(pe.jsxs)("button",{className:Ze.a.button,children:[Ke," ",Object(pe.jsx)("span",{children:e.like})]}),Object(pe.jsxs)("button",{className:Ze.a.button,children:[Ve,Object(pe.jsx)("span",{children:e.dislike})]})]})]})},Qe=function(e){if(!e)return"Field is required"},$e=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},et=s(78),tt=s(60),st=s.n(tt),at=["input","meta","child"],nt=["input","meta","child"],rt=["input","meta","child"],ot=function(e){e.input;var t=e.meta,s=(e.child,Object(et.a)(e,at)),a=t.touched&&t.error;return Object(pe.jsx)("div",{className:st.a.formControl+" "+(a?st.a.error:""),children:Object(pe.jsxs)("div",{className:st.a.formControlChild,children:[s.children,a&&Object(pe.jsx)("span",{className:st.a.formControlError,children:t.error})]})})},it=function(e){var t=e.input,s=(e.meta,e.child,Object(et.a)(e,nt));return Object(pe.jsx)(ot,Object(o.a)(Object(o.a)({},e),{},{children:Object(pe.jsx)("textarea",Object(o.a)(Object(o.a)({},t),s))}))},ct=function(e){var t=e.input,s=(e.meta,e.child,Object(et.a)(e,rt));return Object(pe.jsx)(ot,Object(o.a)(Object(o.a)({},e),{},{children:Object(pe.jsx)("input",Object(o.a)(Object(o.a)({},t),s))}))},lt=$e(50),ut=ae.a.memo((function(e){var t=e.posts.map((function(e){return Object(pe.jsx)(Xe,{avatar:e.avatar,message:e.message,like:e.like,dislike:e.dislike},e.id)}));return Object(pe.jsxs)("div",{className:We.a.posts,children:[Object(pe.jsx)("h3",{className:We.a.postsTitle,children:"My posts"}),Object(pe.jsx)(jt,{onSubmit:function(t){e.addPost(t.newPostText)}}),t]})})),jt=Object(Ge.a)({form:"profileAddNewPostForm"})((function(e){return Object(pe.jsxs)("form",{className:We.a.postNew,onSubmit:e.handleSubmit,children:[Object(pe.jsx)("div",{children:Object(pe.jsx)(Re.a,{className:We.a.postNewTextarea,component:it,name:"newPostText",cols:"",rows:"3",placeholder:"post message...",validate:[Qe,lt]})}),Object(pe.jsx)("button",{className:We.a.postNewButton,children:"Add post"})]})})),dt=ut,bt=Object(je.b)((function(e){return{posts:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:_,newPostText:e}}(t))}}}))(dt),ft=function(e){return Object(pe.jsxs)("div",{className:Ie.a.wrap,children:[Object(pe.jsx)(He,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(pe.jsx)(bt,{})]})},mt=function(e){Object(ce.a)(s,e);var t=Object(le.a)(s);function s(){return Object(oe.a)(this,s),t.apply(this,arguments)}return Object(ie.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.autorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(pe.jsx)(ft,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(ae.a.Component),pt=Object(n.d)(Object(je.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){l(e).then((function(e){var s;t((s=e.data,{type:O,profile:s}))}))}},getStatus:function(e){return function(t){u(e).then((function(e){t(N(e.data))}))}},updateStatus:function(e){return function(t){j(e).then((function(s){0===s.data.resultCode&&t(N(e))}))}}}),ue.f,we)(mt),ht=s(31),gt=s.n(ht),Ot=s(100),_t=s.n(Ot),xt=function(e){var t="/dialogs/"+e.id;return Object(pe.jsx)("div",{className:_t.a.dialog,children:Object(pe.jsx)(de.b,{to:t,activeClassName:_t.a.activeLink,children:e.name})})},vt=s(143),Nt=s.n(vt),wt=function(e){return Object(pe.jsx)("div",{className:Nt.a.message,children:e.message})},Pt=$e(30),It=Object(Ge.a)({form:"dialogAddMessageForm"})((function(e){return Object(pe.jsxs)("form",{className:gt.a.messageNew,onSubmit:e.handleSubmit,children:[Object(pe.jsx)("div",{children:Object(pe.jsx)(Re.a,{className:gt.a.messageNewTextarea,component:it,validate:[Qe,Pt],name:"newMessageBody",placeholder:"your message...",cols:"40",rows:"3"})}),Object(pe.jsx)("button",{className:gt.a.messageNewButton,children:"Send"})]})})),kt=function(e){var t=e.dialogsPage,s=t.dialogsData.map((function(e){return Object(pe.jsx)(xt,{name:e.name,id:e.id},e.id)})),a=t.messagesData.map((function(e){return Object(pe.jsx)(wt,{message:e.message},e.id)}));return e.isAuth?Object(pe.jsxs)("div",{className:gt.a.wrap,children:[Object(pe.jsx)("h2",{className:gt.a.title,children:"Dialogs"}),Object(pe.jsxs)("div",{className:gt.a.dialogs,children:[Object(pe.jsx)("div",{className:gt.a.dialogsItems,children:s}),Object(pe.jsxs)("div",{className:gt.a.messagesItems,children:[Object(pe.jsx)("div",{children:a}),Object(pe.jsx)(It,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})]})]}):Object(pe.jsx)(ue.a,{to:"/login"})},yt=Object(n.d)(Object(je.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:P,newMessageBody:e}}(t))}}})),we)(kt),Ct=s(144),St=s.n(Ct),Lt=function(e){return Object(pe.jsx)("div",{children:Object(pe.jsx)("h2",{className:St.a.title,children:"News"})})},Ut=s(145),Tt=s.n(Ut),Ft=function(e){return Object(pe.jsx)("div",{className:Tt.a.title,children:"Music"})},Dt=s(18),Mt=s.n(Dt),Et=s.p+"static/media/user.ba7b88ec.png",At=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],a=1;a<=t;a++)s.push(a);return Object(pe.jsxs)("div",{children:[e.users.map((function(t){return Object(pe.jsx)("div",{children:Object(pe.jsxs)("div",{className:Mt.a.wrap,children:[Object(pe.jsxs)("div",{className:Mt.a.wrapUser,children:[Object(pe.jsx)(de.b,{to:"/profile/"+t.id,children:Object(pe.jsx)("img",{className:Mt.a.avatar,src:null!=t.photos.small?t.photos.small:Et,alt:""})}),Object(pe.jsx)("div",{className:Mt.a.wrapButton,children:t.followed?Object(pe.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(pe.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(pe.jsxs)("div",{className:Mt.a.wrapDescription,children:[Object(pe.jsxs)("div",{className:Mt.a.alignment,children:[Object(pe.jsx)("div",{className:Mt.a.fullName,children:t.name}),Object(pe.jsx)("div",{className:Mt.a.statusUser,children:t.status})]}),Object(pe.jsxs)("div",{className:Mt.a.alignment,children:[Object(pe.jsx)("div",{className:Mt.a.country,children:"u.location.country"}),Object(pe.jsx)("div",{className:Mt.a.city,children:"u.location.city"})]})]})]})},t.id)})),Object(pe.jsx)("div",{className:Mt.a.pagination,children:s.map((function(t){return Object(pe.jsx)("span",{className:e.currentPage===t&&Mt.a.selectedPage,onClick:function(s){e.onPageChanged(t)},children:t})}))})]})},Bt=s(147),zt=Object(Bt.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ht=function(e){return e.usersPage.pageSize},Rt=function(e){return e.usersPage.totalUsersCount},Gt=function(e){return e.usersPage.currentPage},qt=function(e){return e.usersPage.isFetching},Wt=function(e){return e.usersPage.followingInProgress},Yt=function(e){Object(ce.a)(s,e);var t=Object(le.a)(s);function s(){var e;Object(oe.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(ie.a)(s,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(pe.jsxs)(pe.Fragment,{children:[this.props.isFetching?Object(pe.jsx)(Te,{}):null,Object(pe.jsx)(At,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unFollow,followingInProgress:this.props.followingInProgress})]})}}]),s}(ae.a.Component),Zt=Object(n.d)(Object(je.b)((function(e){return{users:zt(e),pageSize:Ht(e),totalUsersCount:Rt(e),currentPage:Gt(e),isFetching:qt(e),followingInProgress:Wt(e)}}),{follow:function(e){return function(t){t(z(!0,e)),c.follow(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:S,userId:e}}(e)),t(z(!1,e))}))}},unFollow:function(e){return function(t){t(z(!0,e)),c.unfollow(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:L,userId:e}}(e)),t(z(!1,e))}))}},setCurrentPage:A,toggleFollowingProgress:z,requestUsers:function(e,t){return function(s){s(B(!0)),s(A(e)),c.getUsers(e,t).then((function(e){var t,a;s(B(!1)),s((t=e.items,{type:U,users:t})),s((a=e.totalCount,{type:F,count:a}))}))}}}))(Yt),Jt=s(146),Kt=s.n(Jt),Vt=function(e){return Object(pe.jsx)("div",{children:Object(pe.jsx)("h2",{className:Kt.a.title,children:"Settings"})})},Xt=s(22),Qt=s.n(Xt),$t=Object(Ge.a)({form:"login"})((function(e){return Object(pe.jsx)("div",{className:Qt.a.wrap,children:Object(pe.jsxs)("form",{onSubmit:e.handleSubmit,className:Qt.a.form,children:[Object(pe.jsx)("div",{className:Qt.a.formItem,children:Object(pe.jsx)(Re.a,{className:Qt.a.formItemInput,placeholder:"email",name:"email",type:"text",component:ct,validate:[Qe]})}),Object(pe.jsx)("div",{className:Qt.a.formItem,children:Object(pe.jsx)(Re.a,{className:Qt.a.formItemInput,placeholder:"password",name:"password",type:"password",component:ct,validate:[Qe]})}),Object(pe.jsx)("div",{className:Qt.a.formCheckbox,children:Object(pe.jsxs)("label",{className:Qt.a.formCheckboxLabel,htmlFor:"",children:[Object(pe.jsx)(Re.a,{className:Qt.a.formCheckboxInput,name:"rememberMe",type:"checkbox",component:ct}),"remember me"]})}),Object(pe.jsx)("div",{className:Qt.a.formItem,children:Object(pe.jsx)("button",{className:Qt.a.formLoginButton,children:"Login"})}),e.error&&Object(pe.jsx)("div",{className:Qt.a.formControlError,children:e.error})]})})})),es=Object(je.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,s){return function(a){b(e,t,s).then((function(e){if(0===e.data.resultCode)a(Y());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";a(Object(R.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(pe.jsx)(ue.a,{to:"/profile"}):Object(pe.jsx)("div",{children:Object(pe.jsx)($t,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})})})),ts=function(e){Object(ce.a)(s,e);var t=Object(le.a)(s);function s(){return Object(oe.a)(this,s),t.apply(this,arguments)}return Object(ie.a)(s,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(pe.jsxs)("div",{className:"app-wrapper",children:[Object(pe.jsx)(Oe,{}),Object(pe.jsx)(ve,{}),Object(pe.jsxs)("div",{className:"app-wrapper-content",children:[Object(pe.jsx)(ue.b,{path:"/profile/:userId?",render:function(){return Object(pe.jsx)(pt,{})}}),Object(pe.jsx)(ue.b,{path:"/dialogs",render:function(){return Object(pe.jsx)(yt,{})}}),Object(pe.jsx)(ue.b,{path:"/users",render:function(){return Object(pe.jsx)(Zt,{})}}),Object(pe.jsx)(ue.b,{path:"/news",render:function(){return Object(pe.jsx)(Lt,{})}}),Object(pe.jsx)(ue.b,{path:"/music",render:function(){return Object(pe.jsx)(Ft,{})}}),Object(pe.jsx)(ue.b,{path:"/settings",render:function(){return Object(pe.jsx)(Vt,{})}}),Object(pe.jsx)(ue.b,{path:"/login",render:function(){return Object(pe.jsx)(es,{})}})]})]}):Object(pe.jsx)(Te,{})}}]),s}(ae.a.Component),ss=Object(n.d)(ue.f,Object(je.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Y());Promise.all([t]).then((function(){e({type:J})}))}}}))(ts);re.a.render(Object(pe.jsx)(de.a,{basename:"/samurai-way-react",children:Object(pe.jsx)(je.a,{store:te,children:Object(pe.jsx)(ss,{})})}),document.getElementById("root")),a()},31:function(e,t,s){e.exports={title:"Dialogs_title__3oREp",dialogs:"Dialogs_dialogs__1rZ3k",dialogsItems:"Dialogs_dialogsItems__2cvy3",messagesItems:"Dialogs_messagesItems__1yMkL",messageNew:"Dialogs_messageNew__21xdy",messageNewTextarea:"Dialogs_messageNewTextarea__C3EkH",messageNewButton:"Dialogs_messageNewButton__2ljKT"}},40:function(e,t,s){e.exports={header:"Header_header__1CGKd",logo:"Header_logo__ffv_d",loginBlock:"Header_loginBlock__2dPsT",logIn:"Header_logIn__3gRv0",loginLink:"Header_loginLink__2EMUY",logOutButton:"Header_logOutButton__2N3Z2"}},47:function(e,t,s){e.exports={posts:"MyPosts_posts__C8sZj",postsTitle:"MyPosts_postsTitle__3GbLg",postNew:"MyPosts_postNew__uCfe-",postNewTextarea:"MyPosts_postNewTextarea__1x2Ul",postNewButton:"MyPosts_postNewButton__12X_E"}},48:function(e,t,s){e.exports={message:"Post_message__2b4Q6",postItem:"Post_postItem__2prE8",buttonWrap:"Post_buttonWrap__1FYOy",button:"Post_button__3ZU6R"}},60:function(e,t,s){e.exports={formControl:"FormsControls_formControl__3TUBZ",error:"FormsControls_error__tEsmo",formControlError:"FormsControls_formControlError__3_K2f",formControlChild:"FormsControls_formControlChild__2Yrl_"}},77:function(e,t,s){e.exports={status:"ProfileStatus_status__2GbXk",statusMode:"ProfileStatus_statusMode__2shht",statusInput:"ProfileStatus_statusInput__3Nrhd"}},97:function(e,t,s){e.exports={container:"Preloader_container__1fq9g",preloader:"Preloader_preloader__1_D0u"}}},[[307,1,2]]]);
//# sourceMappingURL=main.674585f1.chunk.js.map