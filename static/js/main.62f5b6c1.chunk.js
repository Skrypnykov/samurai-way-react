(this["webpackJsonpsamurai-way-react"]=this["webpackJsonpsamurai-way-react"]||[]).push([[0],{18:function(e,t,s){e.exports={title:"Dialogs_title__3oREp",dialogs:"Dialogs_dialogs__1rZ3k",dialogsItems:"Dialogs_dialogsItems__2cvy3",messagesItems:"Dialogs_messagesItems__1yMkL",messageNew:"Dialogs_messageNew__21xdy"}},19:function(e,t,s){e.exports={message:"Post_message__2b4Q6",postItem:"Post_postItem__2prE8",buttonWrap:"Post_buttonWrap__1FYOy",button:"Post_button__3ZU6R"}},33:function(e,t,s){e.exports={posts:"MyPosts_posts__C8sZj",postsTitle:"MyPosts_postsTitle__3GbLg",postNew:"MyPosts_postNew__uCfe-"}},37:function(e,t,s){e.exports={container:"Preloader_container__1fq9g",preloader:"Preloader_preloader__1_D0u"}},38:function(e,t,s){e.exports={dialog:"DialogItem_dialog__8qC4u",activeLink:"DialogItem_activeLink__cyvux"}},5:function(e,t,s){e.exports={header:"ProfileInfo_header__1MJ9f",description:"ProfileInfo_description__1FWdy",avatar:"ProfileInfo_avatar__289cO",content:"ProfileInfo_content__leN5h",contentTitle:"ProfileInfo_contentTitle__1FFwa",contentItem:"ProfileInfo_contentItem__1XmK7",contentData:"ProfileInfo_contentData__26g3e",socialNetwork:"ProfileInfo_socialNetwork__31c45",facebook:"ProfileInfo_facebook__3Ces_",website:"ProfileInfo_website__VMjUj",vk:"ProfileInfo_vk__3mOPT",twitter:"ProfileInfo_twitter__18bi0",instagram:"ProfileInfo_instagram__2rj5p",youtube:"ProfileInfo_youtube__2IJCP",github:"ProfileInfo_github__23xoF",mainLink:"ProfileInfo_mainLink__1dGad",switch:"ProfileInfo_switch__3nDNV",slider:"ProfileInfo_slider__27asz",switchInput:"ProfileInfo_switchInput__3QRJp"}},50:function(e,t,s){e.exports={header:"Header_header__1CGKd"}},53:function(e,t,s){e.exports={wrap:"Profile_wrap__3GM7T"}},55:function(e,t,s){e.exports={message:"Message_message__28aa8"}},56:function(e,t,s){e.exports={title:"News_title__1W7rS"}},57:function(e,t,s){e.exports={title:"Music_title__fVbPg"}},58:function(e,t,s){e.exports={title:"Settings_title__Z9KHv"}},63:function(e,t,s){},64:function(e,t,s){},8:function(e,t,s){e.exports={nav:"Navbar_nav__1dWpI",list:"Navbar_list__16LHF",item:"Navbar_item__3UZIM",activeLink:"Navbar_activeLink__3i75j"}},9:function(e,t,s){e.exports={title:"Users_title__tn1BY",pagination:"Users_pagination__1qdKu",selectedPage:"Users_selectedPage__21xQ4",buttonGet:"Users_buttonGet__Mqqoq",wrap:"Users_wrap__1gcSF",wrapUser:"Users_wrapUser__2LuIu",avatar:"Users_avatar__1xz_T",wrapButton:"Users_wrapButton__2FJ1O",wrapDescription:"Users_wrapDescription__3vXkl",fullName:"Users_fullName__CktC1",statusUser:"Users_statusUser__1amE0",alignment:"Users_alignment__2uVOl",country:"Users_country__SXPsp",city:"Users_city__tBoZY"}},90:function(e,t,s){"use strict";s.r(t);var a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,91)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),r(e),c(e)}))},n=s(39),r=s(30),c=s(3),i=s.p+"static/media/avatar-female.69e4a8d2.png",o=s.p+"static/media/avatar-friend.db419fa6.png",l=s.p+"static/media/avatar-of-nurse.3601435d.png",j=s.p+"static/media/avatar-cartoon-eyes-female.03b8f595.png",u="SET_USER_PROFILE",d="ADD-POST",b="UPDATE-NEW-POST-TEXT",p={postsData:[{id:1,avatar:i,message:"Hey, why nobody love me?",like:11,dislike:0},{id:2,avatar:o,message:"It's our new program! Hey!",like:9,dislike:1},{id:3,avatar:l,message:"Hi, It's my first post!",like:21,dislike:2}],newPostText:"",profile:null},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var s={id:4,avatar:j,message:e.newPostText,like:0,dislike:0};return Object(c.a)(Object(c.a)({},e),{},{postsData:[].concat(Object(r.a)(e.postsData),[s]),newPostText:""});case b:return Object(c.a)(Object(c.a)({},e),{},{newPostText:t.newText});case u:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});default:return e}},f="UPDATE-NEW-MESSAGE-BODY",g="SEND-MESSAGE",h={dialogsData:[{id:1,name:"Oleh"},{id:2,name:"Hanna"},{id:3,name:"Iryna"},{id:4,name:"Serge"},{id:5,name:"Niklas"},{id:6,name:"Manuel"},{id:7,name:"Tomas"},{id:8,name:"Robert"}],messagesData:[{id:1e3,message:"Hi!!!"},{id:1001,message:"How are you?"},{id:1002,message:"Very well!"},{id:1003,message:"Yo"},{id:1004,message:"Yo"},{id:1005,message:"Yo"}],newMessageBody:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(c.a)(Object(c.a)({},e),{},{newMessageBody:t.body});case g:var s=e.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{newMessageBody:"",messagesData:[].concat(Object(r.a)(e.messagesData),[{id:1006,message:s}])});default:return e}},_={},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;return e},v="FOLLOW",N="UNFOLLOW",w="SET_USERS",P="SET_CURRENT_PAGE",k="SET_TOTAL_USERS_COUNT",y="TOGGLE_IS_FETCHING",I={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!0}):e}))});case N:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!1}):e}))});case w:return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case P:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case k:return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.count});case y:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});default:return e}},C=Object(n.a)({profilePage:m,dialogsPage:O,usersPage:U,sidebar:x}),T=Object(n.b)(C);window.store=T;var D=T,S=s(1),F=s.n(S),M=s(26),L=s.n(M),E=(s(63),s(64),s(6)),B=s(50),G=s.n(B),A=s.p+"static/media/logo-django.03d5cf41.svg",R=s(0),z=function(){return Object(R.jsxs)("header",{className:G.a.header,children:[Object(R.jsx)("h1",{children:"The Social Network"}),Object(R.jsx)("img",{src:A,alt:""})]})},H=s(7),W=s(8),J=s.n(W),Y=function(){return Object(R.jsx)("nav",{className:J.a.nav,children:Object(R.jsxs)("ul",{className:J.a.list,children:[Object(R.jsx)("li",{className:J.a.item,children:Object(R.jsx)(H.b,{to:"/profile",activeClassName:J.a.activeLink,children:"Profile"})}),Object(R.jsx)("li",{className:J.a.item,children:Object(R.jsx)(H.b,{to:"/dialogs",activeClassName:J.a.activeLink,children:"Messages"})}),Object(R.jsx)("li",{className:J.a.item,children:Object(R.jsx)(H.b,{to:"/users",activeClassName:J.a.activeLink,children:"Users"})}),Object(R.jsx)("li",{className:J.a.item,children:Object(R.jsx)(H.b,{to:"/news",activeClassName:J.a.activeLink,children:"News"})}),Object(R.jsx)("li",{className:J.a.item,children:Object(R.jsx)(H.b,{to:"/music",activeClassName:J.a.activeLink,children:"Music"})}),Object(R.jsx)("li",{className:J.a.item,children:Object(R.jsx)(H.b,{to:"/settings",activeClassName:J.a.activeLink,children:"Settings"})})]})})},q=s(27),Z=s(28),V=s(32),K=s(31),X=s(21),Q=s(16),$=s(53),ee=s.n($),te=s(5),se=s.n(te),ae=s.p+"static/media/prof-header.d3fd7af1.jpg",ne=s.p+"static/media/avatar-man.c8950e98.png",re=s(37),ce=s.n(re),ie=s.p+"static/media/preloader.80c1dbfa.svg",oe=function(e){return Object(R.jsx)("div",{className:ce.a.container,children:Object(R.jsx)("div",{className:ce.a.preloader,children:Object(R.jsx)("img",{src:ie,alt:""})})})},le=s(15),je=s(54),ue=s(17),de=function(e){return e.profile?Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:se.a.header,children:Object(R.jsx)("img",{src:ae,alt:""})}),Object(R.jsxs)("div",{className:se.a.description,children:[Object(R.jsx)("img",{className:se.a.avatar,src:null!=e.profile.photos.large?e.profile.photos.large:ne,alt:""}),Object(R.jsxs)("div",{className:se.a.content,children:[Object(R.jsx)("h4",{className:se.a.contentTitle,children:e.profile.fullName}),Object(R.jsxs)("p",{className:se.a.contentItem,children:["about me: \xa0",Object(R.jsx)("span",{className:se.a.contentData,children:e.profile.aboutMe})]}),Object(R.jsxs)("p",{className:se.a.contentItem,children:["looking for a job: \xa0",Object(R.jsxs)("label",{className:se.a.switch,children:[Object(R.jsx)("input",{className:se.a.switchInput,type:"checkbox",value:e.profile.lookingForAJob}),Object(R.jsx)("span",{className:se.a.slider})]})]}),Object(R.jsxs)("p",{className:se.a.contentItem,children:["description: \xa0",Object(R.jsx)("span",{className:se.a.contentData,children:e.profile.lookingForAJobDescription})]}),Object(R.jsxs)("ul",{className:se.a.socialNetwork,children:[Object(R.jsx)("li",{children:Object(R.jsx)("a",{className:se.a.facebook,href:e.profile.contacts.facebook,target:"_blank",rel:"noopener noreferrer",children:Object(R.jsx)(le.a,{icon:ue.a})})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{className:se.a.website,href:e.profile.contacts.website,target:"_blank",rel:"noopener noreferrer",children:Object(R.jsx)(le.a,{icon:ue.d})})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{className:se.a.vk,href:e.profile.contacts.vk,target:"_blank",rel:"noopener noreferrer",children:Object(R.jsx)(le.a,{icon:ue.f})})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{className:se.a.twitter,href:e.profile.contacts.twitter,target:"_blank",rel:"noopener noreferrer",children:Object(R.jsx)(le.a,{icon:ue.e})})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{className:se.a.instagram,href:e.profile.contacts.instagram,target:"_blank",rel:"noopener noreferrer",children:Object(R.jsx)(le.a,{icon:ue.c})})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{className:se.a.youtube,href:e.profile.contacts.youtube,target:"_blank",rel:"noopener noreferrer",children:Object(R.jsx)(le.a,{icon:ue.g})})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{className:se.a.github,href:e.profile.contacts.github,target:"_blank",rel:"noopener noreferrer",children:Object(R.jsx)(le.a,{icon:ue.b})})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{className:se.a.mainLink,href:e.profile.contacts.mainLink,target:"_blank",rel:"noopener noreferrer",children:Object(R.jsx)(le.a,{icon:je.a})})})]})]})]})]}):Object(R.jsx)(oe,{})},be=s(33),pe=s.n(be),me=s(19),fe=s.n(me),ge=s(29),he=Object(R.jsx)(le.a,{icon:ge.b}),Oe=Object(R.jsx)(le.a,{icon:ge.a}),_e=function(e){return Object(R.jsxs)("div",{className:fe.a.message,children:[Object(R.jsxs)("div",{className:fe.a.postItem,children:[Object(R.jsx)("img",{src:e.avatar,alt:"avatar"}),Object(R.jsx)("p",{children:e.message})]}),Object(R.jsxs)("div",{className:fe.a.buttonWrap,children:[Object(R.jsxs)("button",{className:fe.a.button,children:[he," ",Object(R.jsx)("span",{children:e.like})]}),Object(R.jsxs)("button",{className:fe.a.button,children:[Oe,Object(R.jsx)("span",{children:e.dislike})]})]})]})},xe=function(e){var t=e.posts.map((function(e){return Object(R.jsx)(_e,{avatar:e.avatar,message:e.message,like:e.like,dislike:e.dislike},e.id)})),s=F.a.createRef();return Object(R.jsxs)("div",{className:pe.a.posts,children:[Object(R.jsx)("h3",{className:pe.a.postsTitle,children:"My posts"}),Object(R.jsxs)("div",{className:pe.a.postNew,children:[Object(R.jsx)("textarea",{onChange:function(){var t=s.current.value;e.updateNewPostText(t)},ref:s,name:"comment",cols:"",rows:"3",placeholder:"your post...",value:e.newPostText}),Object(R.jsx)("br",{}),Object(R.jsx)("input",{type:"submit",value:"Add post",onClick:function(){e.addPost()}})]}),t]})},ve=Object(Q.b)((function(e){return{posts:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){var s=function(e){return{type:b,newText:e}}(t);e(s)},addPost:function(){e({type:d})}}}))(xe),Ne=function(e){return Object(R.jsxs)("div",{className:ee.a.wrap,children:[Object(R.jsx)(de,{profile:e.profile}),Object(R.jsx)(ve,{})]})},we=function(e){Object(V.a)(s,e);var t=Object(K.a)(s);function s(){return Object(q.a)(this,s),t.apply(this,arguments)}return Object(Z.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;t||(t=2),X.get("https://social-network.samuraijs.com/api/1.0/profile/"+t).then((function(t){e.props.setUserProfile(t.data)}))}},{key:"render",value:function(){return Object(R.jsx)(Ne,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile}))}}]),s}(F.a.Component),Pe=Object(E.e)(we),ke=Object(Q.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfile:function(e){return{type:u,profile:e}}})(Pe),ye=s(18),Ie=s.n(ye),Ue=s(38),Ce=s.n(Ue),Te=function(e){var t="/dialogs/"+e.id;return Object(R.jsx)("div",{className:Ce.a.dialog,children:Object(R.jsx)(H.b,{to:t,activeClassName:Ce.a.activeLink,children:e.name})})},De=s(55),Se=s.n(De),Fe=function(e){return Object(R.jsx)("div",{className:Se.a.message,children:e.message})},Me=function(e){var t=e.dialogsPage,s=t.dialogsData.map((function(e){return Object(R.jsx)(Te,{name:e.name,id:e.id},e.id)})),a=t.messagesData.map((function(e){return Object(R.jsx)(Fe,{message:e.message},e.id)})),n=t.newMessageBody;return Object(R.jsxs)("div",{className:Ie.a.wrap,children:[Object(R.jsx)("h2",{className:Ie.a.title,children:"Dialogs"}),Object(R.jsxs)("div",{className:Ie.a.dialogs,children:[Object(R.jsx)("div",{className:Ie.a.dialogsItems,children:s}),Object(R.jsxs)("div",{className:Ie.a.messagesItems,children:[Object(R.jsx)("div",{children:a}),Object(R.jsxs)("div",{className:Ie.a.messageNew,children:[Object(R.jsx)("div",{children:Object(R.jsx)("textarea",{value:n,onChange:function(t){var s=t.target.value;e.updateNewMessageBody(s)},placeholder:"your message...",name:"comment",cols:"40",rows:"3"})}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})]})]})},Le=Object(Q.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(){e({type:g})},updateNewMessageBody:function(t){e(function(e){return{type:f,body:e}}(t))}}}))(Me),Ee=s(56),Be=s.n(Ee),Ge=function(e){return Object(R.jsx)("div",{children:Object(R.jsx)("h2",{className:Be.a.title,children:"News"})})},Ae=s(57),Re=s.n(Ae),ze=function(e){return Object(R.jsx)("div",{className:Re.a.title,children:"Music"})},He=s(9),We=s.n(He),Je=s.p+"static/media/user.ba7b88ec.png",Ye=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],a=1;a<=t;a++)s.push(a);return Object(R.jsxs)("div",{children:[Object(R.jsx)("h2",{className:We.a.title,children:"Users"}),e.users.map((function(t){return Object(R.jsx)("div",{children:Object(R.jsxs)("div",{className:We.a.wrap,children:[Object(R.jsxs)("div",{className:We.a.wrapUser,children:[Object(R.jsx)(H.b,{to:"/profile/"+t.id,children:Object(R.jsx)("img",{className:We.a.avatar,src:null!=t.photos.small?t.photos.small:Je,alt:""})}),Object(R.jsx)("div",{className:We.a.wrapButton,children:t.followed?Object(R.jsx)("button",{onClick:function(){e.unfollow(t.id)},children:"Follow"}):Object(R.jsx)("button",{onClick:function(){e.follow(t.id)},children:"Unfollow"})})]}),Object(R.jsxs)("div",{className:We.a.wrapDescription,children:[Object(R.jsxs)("div",{className:We.a.alignment,children:[Object(R.jsx)("div",{className:We.a.fullName,children:t.name}),Object(R.jsx)("div",{className:We.a.statusUser,children:t.status})]}),Object(R.jsxs)("div",{className:We.a.alignment,children:[Object(R.jsx)("div",{className:We.a.country,children:"u.location.country"}),Object(R.jsx)("div",{className:We.a.city,children:"u.location.city"})]})]})]})},t.id)})),Object(R.jsx)("div",{className:We.a.pagination,children:s.map((function(t){return Object(R.jsx)("span",{className:e.currentPage===t&&We.a.selectedPage,onClick:function(s){e.onPageChanged(t)},children:t})}))})]})},qe=function(e){Object(V.a)(s,e);var t=Object(K.a)(s);function s(){var e;Object(q.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.toggleIsFetching(!0),X.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.pageSize)).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items)}))},e}return Object(Z.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),X.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount)}))}},{key:"render",value:function(){return Object(R.jsxs)(R.Fragment,{children:[this.props.isFetching?Object(R.jsx)(oe,{}):null,Object(R.jsx)(Ye,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unFollow})]})}}]),s}(F.a.Component),Ze=Object(Q.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{follow:function(e){return{type:v,userId:e}},unFollow:function(e){return{type:N,userId:e}},setUsers:function(e){return{type:w,users:e}},setCurrentPage:function(e){return{type:P,currentPage:e}},setTotalUsersCount:function(e){return{type:k,count:e}},toggleIsFetching:function(e){return{type:y,isFetching:e}}})(qe),Ve=s(58),Ke=s.n(Ve),Xe=function(e){return Object(R.jsx)("div",{children:Object(R.jsx)("h2",{className:Ke.a.title,children:"Settings"})})},Qe=function(e){return Object(R.jsxs)("div",{className:"app-wrapper",children:[Object(R.jsx)(z,{}),Object(R.jsx)(Y,{}),Object(R.jsxs)("div",{className:"app-wrapper-content",children:[Object(R.jsx)(E.a,{path:"/profile/:userId?",render:function(){return Object(R.jsx)(ke,{})}}),Object(R.jsx)(E.a,{path:"/dialogs",render:function(){return Object(R.jsx)(Le,{})}}),Object(R.jsx)(E.a,{path:"/users",render:function(){return Object(R.jsx)(Ze,{})}}),Object(R.jsx)(E.a,{path:"/news",render:function(){return Object(R.jsx)(Ge,{})}}),Object(R.jsx)(E.a,{path:"/music",render:function(){return Object(R.jsx)(ze,{})}}),Object(R.jsx)(E.a,{path:"/settings",render:function(){return Object(R.jsx)(Xe,{})}})]})]})};L.a.render(Object(R.jsx)(H.a,{basename:"/samurai-way-react",children:Object(R.jsx)(Q.a,{store:D,children:Object(R.jsx)(Qe,{})})}),document.getElementById("root")),a()}},[[90,1,2]]]);
//# sourceMappingURL=main.62f5b6c1.chunk.js.map