(this["webpackJsonpreact-000"]=this["webpackJsonpreact-000"]||[]).push([[0],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(28),s=n(4),a="dialogs/ADD-MESSAGE",c={dialogs:[{id:1,name:"Anna"},{id:2,name:"Kristine"},{id:3,name:"Ammy"},{id:4,name:"Sasha"},{id:5,name:"Vika"},{id:6,name:"Victor"}],messages:[{id:1,sender:"Me",type:"outgoing",message:"Anna"},{id:2,sender:"Me",type:"outgoing",message:"Hi"},{id:3,sender:"Anna",type:"incoming",message:"Hello"},{id:3,sender:"Me",type:"outgoing",message:"How do you do?"},{id:3,sender:"Anna",type:"incoming",message:"I'm horny as hell..."}]},i=function(e){return{type:a,message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if(t.type===a){var n={id:1,sender:"Me",type:"outgoing",message:t.message};return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])})}return e}},123:function(e,t,n){e.exports={friend:"Friend_friend__19z3Q"}},126:function(e,t,n){e.exports={users:"Users_users__2Iv27",selected:"Users_selected__EHhn7"}},127:function(e,t,n){e.exports={loginForm:"Login_loginForm__1Hg13"}},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n(125),s=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"cf33d654-6242-4d8e-9684-14db21c7b808"}}),a={me:function(){return s.get("/auth/me").then((function(e){return e.data}))},login:function(e,t,n){return s.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return s.delete("auth/login").then((function(e){return e.data}))}},c={getProfile:function(e){return s.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return s.get("profile/status/".concat(e)).then((function(e){return e}))},updateStatus:function(e){return s.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),s.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfileData:function(e){return s.put("/profile",e).then((function(e){return e.data}))}},i={getUsers:function(e,t){return s.get("users?page=".concat(e,"&count=").concat(t),{withCredentials:!0}).then((function(e){return e.data}))},follow:function(e){return s.post("follow/".concat(e),{}).then((function(e){return e.data}))},unfollow:function(e){return s.delete("follow/".concat(e)).then((function(e){return e.data}))}}},157:function(e,t,n){},16:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},161:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r);n(157),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(63),c=n.n(a),i=n(32),o=n(33),u=n(36),l=n(34),d=(n(161),n(16)),j=n.n(d),f=n(13),b=n(85),p=n.n(b),h=n(123),m=n.n(h),O=n(0),g=function(e){return Object(O.jsxs)("div",{className:m.a.friend,children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{alt:"",src:e.imgSrc})}),Object(O.jsx)("div",{children:e.name})]})},v=function(e){var t=e.friends.map((function(e){return Object(O.jsx)(g,{name:e.name,imgSrc:e.imgSrc})}));return Object(O.jsxs)("div",{className:p.a.friends,children:[Object(O.jsx)("h4",{children:"Friends"}),Object(O.jsx)("div",{className:p.a.friendsList,children:t})]})},x=n(12),_=Object(x.b)((function(e){return{friends:e.sidebar.friends}}),{})(v),w=function(){return Object(O.jsxs)("nav",{className:j.a.nav,children:[Object(O.jsx)("div",{className:j.a.item,children:Object(O.jsx)(f.b,{to:"/profile",className:function(e){return e.isActive?"".concat(j.a.active):""},children:"Profile"})}),Object(O.jsx)("div",{className:j.a.item,children:Object(O.jsx)(f.b,{to:"/dialogs",className:function(e){return e.isActive?"".concat(j.a.active):""},children:"Messages"})}),Object(O.jsx)("div",{className:j.a.item,children:Object(O.jsx)(f.b,{to:"/users",className:function(e){return e.isActive?"".concat(j.a.active):""},children:"Users"})}),Object(O.jsx)("div",{className:j.a.item,children:Object(O.jsx)(f.b,{to:"/news",className:function(e){return e.isActive?"".concat(j.a.active):""},children:"News"})}),Object(O.jsx)("div",{className:j.a.item,children:Object(O.jsx)(f.b,{to:"/music",className:function(e){return e.isActive?"".concat(j.a.active):""},children:"Music"})}),Object(O.jsx)("div",{className:j.a.item,children:Object(O.jsx)(f.b,{to:"/settings",className:function(e){return e.isActive?"".concat(j.a.active):""},children:"Settings"})}),Object(O.jsx)(_,{})]})},y=function(){return Object(O.jsx)("div",{children:"Settings"})},S=function(){return Object(O.jsx)("div",{children:"Music"})},C=n(7),P=n(10),I=n.n(P),N=n(18),A=n(28),k=n(4),E=n(14),U=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(k.a)(Object(k.a)({},e),r):e}))},F="users/FOLLOW",L="users/UNFOLLOW",T="users/SET_USERS",z="users/SET_CURRENT_PAGE",M="users/SET_TOTAL_USERS_COUNT",D="users/TOGGLE_IS_FETCHING",R="users/TOGGLE_IS_FOLLOWING_PRORESS",B={users:[],pageSize:50,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},G=function(e){return{type:F,userId:e}},H=function(e){return{type:L,userId:e}},q=function(e){return{type:z,page:e}},K=function(e){return{type:D,isFetching:e}},V=function(e,t){return{type:R,isFetching:e,userId:t}},J=function(){var e=Object(N.a)(I.a.mark((function e(t,n,r,s){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(V(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(s(n)),t(V(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(k.a)(Object(k.a)({},e),{},{users:U(e.users,t.userId,"id",{followed:!0})});case L:return Object(k.a)(Object(k.a)({},e),{},{users:U(e.users,t.userId,"id",{followed:!1})});case T:return Object(k.a)(Object(k.a)({},e),{},{users:Object(A.a)(t.users)});case z:return Object(k.a)(Object(k.a)({},e),{},{currentPage:t.page});case M:return Object(k.a)(Object(k.a)({},e),{},{totalUsersCount:t.totalCount});case D:return Object(k.a)(Object(k.a)({},e),{},{isFetching:t.isFetching});case R:return Object(k.a)(Object(k.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(A.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},X=n(29),Z=n.n(X),Q=n.p+"static/media/user.feacc1e8.png",Y=function(e){var t=e.user,n=e.followingInProgress.some((function(e){return e===t.id}));return Object(O.jsxs)("div",{className:Z.a.user,children:[Object(O.jsxs)("div",{className:Z.a.avatar_button,children:[Object(O.jsx)("div",{children:Object(O.jsx)(f.b,{to:"/profile/"+t.id,children:Object(O.jsx)("img",{alt:"",src:null!=t.photos.large?t.photos.large:Q})})}),Object(O.jsx)("div",{children:t.followed?Object(O.jsx)("button",{disabled:n,onClick:function(){e.unfollow(t.id)},children:"Unsubscribe"}):Object(O.jsx)("button",{disabled:n,onClick:function(){e.follow(t.id)},children:"Subscribe"})})]}),Object(O.jsxs)("div",{className:Z.a.name_status,children:[Object(O.jsx)("div",{className:Z.a.name,children:t.name}),Object(O.jsx)("div",{className:Z.a.status,children:t.status})]}),Object(O.jsxs)("div",{className:Z.a.location,children:[Object(O.jsx)("div",{children:"Saint-Petersburg"}),Object(O.jsx)("div",{children:"Russia"})]})]})},$=n(126),ee=n.n($),te=n(86),ne=n.n(te),re=function(e){var t=e.requestItems,n=e.totalItemsCount,r=e.pageSize,s=e.currentPage,a=Math.ceil(n/r),c=function(e){t(e,r)},i=Object(O.jsx)("input",{type:"number",className:ne.a.pageInput,value:s,onChange:function(e){var t=parseInt(e.target.value);t>=1&&t<=a&&c(t)}});return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:ne.a.pagination,children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("button",{onClick:function(){1!==s&&c(1)},children:"<<"}),"  "]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("button",{onClick:function(){1!==s&&c(s-1)},children:"<"}),"  "]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("button",{onClick:function(){s!==a&&c(s+1)},children:">"}),"  "]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("button",{onClick:function(){s!==a&&c(a)},children:">>"}),"  "]}),Object(O.jsxs)("span",{children:["Page ",i," of ",a]})]})})},se=function(e){var t=e.users.map((function(t){return Object(O.jsx)(Y,{user:t,follow:function(t){return e.follow(t)},unfollow:function(t){return e.unfollow(t)},followingInProgress:e.followingInProgress})}));return Object(O.jsxs)("div",{className:ee.a.users,children:[Object(O.jsx)("h3",{children:"Users"}),Object(O.jsx)(re,{requestItems:e.requestUsers,currentPage:e.currentPage,pageSize:e.pageSize,totalItemsCount:e.totalUsersCount}),t]})},ae=n(65),ce=n(9),ie=n(130),oe=Object(ie.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ue=function(e){return e.usersPage.totalUsersCount},le=function(e){return e.usersPage.currentPage},de=function(e){return e.usersPage.pageSize},je=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},be=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.props.isFetching?Object(O.jsx)(ae.a,{}):Object(O.jsx)(se,{users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,requestUsers:this.props.requestUsers,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount})})}}]),n}(s.a.Component),pe=Object(ce.d)(Object(x.b)((function(e){return{users:oe(e),totalUsersCount:ue(e),currentPage:le(e),pageSize:de(e),isFetching:je(e),followingInProgress:fe(e)}}),{follow:function(e){return function(t){J(t,e,E.c.follow,G)}},unfollow:function(e){return function(t){J(t,e,E.c.unfollow,H)}},setCurrentPage:q,requestUsers:function(e,t){return function(){var n=Object(N.a)(I.a.mark((function n(r){var s;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(K(!0)),n.next=3,E.c.getUsers(e,t);case 3:s=n.sent,r(K(!1)),r((c=s.items,{type:T,users:c})),r(q(e)),r((a=s.totalCount,{type:M,totalCount:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(be),he=n(87),me=n.n(he),Oe=function(e){var t=e.isAuth,n=e.login,r=e.logout;return Object(O.jsxs)("header",{className:me.a.header,children:[Object(O.jsx)("img",{alt:"",src:"https://static.tildacdn.com/tild3533-3066-4136-b166-656161323666/shtaf.png"}),Object(O.jsx)("div",{className:me.a.login,children:t?Object(O.jsxs)("div",{children:[n," - ",Object(O.jsx)("button",{onClick:r,children:"Logout"})]}):Object(O.jsx)(f.b,{to:"/login",children:"Login"})})]})},ge=n(30),ve="auth/SET_USER_DATA",xe={userId:null,email:null,login:null,isAuth:!1},_e=function(e,t,n,r){return{type:ve,data:{userId:e,email:t,login:n,isAuth:r}}},we=function(){return function(){var e=Object(N.a)(I.a.mark((function e(t){var n,r,s,a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,a=r.email,c=r.login,t(_e(s,a,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ye=function(){return function(){var e=Object(N.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.logout();case 2:0===e.sent.resultCode&&t(_e(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;return t.type===ve?Object(k.a)(Object(k.a)({},e),t.data):e},Ce=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(Oe,Object(k.a)({},this.props))}}]),n}(s.a.Component),Pe=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:ye})(Ce),Ie=n(120),Ne=n(121),Ae=n(54),ke=n(68),Ee=n(45),Ue=n.n(Ee),Fe=n(127),Le=n.n(Fe),Te=Object(Ne.a)({form:"login"})((function(e){return Object(O.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(O.jsx)("div",{children:Object(O.jsx)(Ie.a,{component:Ae.a,validate:[ke.b],name:"email",placeholder:"Login"})}),Object(O.jsx)("div",{children:Object(O.jsx)(Ie.a,{component:Ae.a,validate:[ke.b],name:"password",placeholder:"Password"})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"rememberMe",children:"Remember Me"}),Object(O.jsx)(Ie.a,{component:Ae.a,name:"rememberMe",type:"checkbox"})]}),e.error&&Object(O.jsx)("div",{className:Ue.a.formCommonError,children:e.error}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"submit",children:"Login"})})]})})),ze=Object(x.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(N.a)(I.a.mark((function r(s){var a,c;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,E.a.login(e,t,n);case 2:0===(a=r.sent).resultCode?s(we()):(c=a.messages.length>0?a.messages[0]:"Unable to login",s(Object(ge.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},logout:ye})((function(e){var t=Object(C.f)();return e.isAuth&&t("/profile"),Object(O.jsxs)("div",{className:Le.a.loginForm,children:[Object(O.jsx)("h1",{children:"LOGIN"}),Object(O.jsx)(Te,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Me="app/SET_INITIALIZED",De={initialized:!1},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;return t.type===Me?Object(k.a)(Object(k.a)({},e),{},{initialized:!0}):e},Be=n(90),Ge=n(119),He={friends:[{name:"Anna",imgSrc:"https://intim-mall.ru/images/thumbnails/1223/1000/detailed/250/154335.jpg"},{name:"Kristine",imgSrc:"https://1.bp.blogspot.com/-IRT6j8h_fqk/XN9yeP_ojII/AAAAAAAATG0/9Av70aLOzJoDmaOMLjRFB8bhYQO0MvRhwCKgBGAs/s1600/45612837_361298791302732_5759895938742232043_n.jpg"},{name:"Ammy",imgSrc:"https://steamuserimages-a.akamaihd.net/ugc/28479983632518879/DDECB815BB7CD6E0D56C1CF8B6DBE9CE5F94BC29/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"},{name:"Vika",imgSrc:"https://sun9-60.userapi.com/c841228/v841228265/fed8/Dhjv4bMjHSc.jpg"},{name:"Sasha",imgSrc:"https://s45.radikal.ru/i109/1107/5e/8db777456d5c.png"}]},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He;return e},Ke=n(129),Ve=n(122),Je=Object(ce.c)({profilePage:Be.b,dialogsPage:Ge.b,sidebar:qe,usersPage:W,auth:Se,form:Ve.a,app:Re}),We=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,Xe=Object(ce.e)(Je,We(Object(ce.a)(Ke.a)));window.__store__=Xe;var Ze=Xe,Qe=s.a.lazy((function(){return n.e(3).then(n.bind(null,292))})),Ye=s.a.lazy((function(){return n.e(4).then(n.bind(null,293))})),$e=s.a.lazy((function(){return n.e(5).then(n.bind(null,291))})),et=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(O.jsxs)("div",{className:"app-wrapper",children:[Object(O.jsx)(Pe,{}),Object(O.jsx)(w,{}),Object(O.jsx)("div",{className:"app-wrapper-content",children:Object(O.jsx)(s.a.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading..."}),children:Object(O.jsxs)(C.c,{children:[Object(O.jsx)(C.a,{path:"/profile/:userId",element:Object(O.jsx)(Qe,{})}),Object(O.jsx)(C.a,{path:"/profile",element:Object(O.jsx)(Qe,{})}),Object(O.jsx)(C.a,{path:"/dialogs",element:Object(O.jsx)(Ye,{})}),Object(O.jsx)(C.a,{path:"/news",element:Object(O.jsx)($e,{})}),Object(O.jsx)(C.a,{path:"/music",element:Object(O.jsx)(S,{})}),Object(O.jsx)(C.a,{path:"/settings",element:Object(O.jsx)(y,{})}),Object(O.jsx)(C.a,{path:"/users",element:Object(O.jsx)(pe,{})}),Object(O.jsx)(C.a,{path:"/login",element:Object(O.jsx)(ze,{})})]})})})]}):Object(O.jsx)(ae.a,{})}}]),n}(s.a.Component),tt=Object(ce.d)(Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(we());Promise.all([t]).then((function(){return e({type:Me})}))}}}))(et),nt=function(){return Object(O.jsx)(x.a,{store:Ze,children:Object(O.jsx)(f.a,{children:Object(O.jsx)(tt,{})})})};c.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(nt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){e.exports={user:"User_user__y-OP6",avatar_button:"User_avatar_button__sZ6iL",name_status:"User_name_status__1Lxe9",location:"User_location__2fcbB",name:"User_name__3NrJR",status:"User_status__29Xzb"}},45:function(e,t,n){e.exports={formControl:"FormControls_formControl__zKx4R",error:"FormControls_error__frz7K",formCommonError:"FormControls_formCommonError__3gJr3"}},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var r=n(4),s=n(45),a=n.n(s),c=n(0),i=function(e){var t=e.meta.touched&&e.meta.error;return Object(c.jsxs)("div",{className:a.a.formControl+" "+(t?a.a.error:""),children:[Object(c.jsx)("div",{children:e.children}),Object(c.jsx)("div",{children:t&&Object(c.jsx)("span",{children:e.meta.error})})]})},o=function(e){return Object(c.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},e.input),e))}))},u=function(e){return Object(c.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},e.input),e))}))}},65:function(e,t,n){"use strict";n(1);var r=n.p+"static/media/preloader.ccce4fa5.svg",s=n(0);t.a=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{alt:"",src:r})})}},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e)}},s=function(e){if(!e)return"Field is required"}},85:function(e,t,n){e.exports={friends:"Friends_friends__1-Zf7",friendsList:"Friends_friendsList__1yYy2"}},86:function(e,t,n){e.exports={pagination:"Paginator_pagination__374nS",pageInput:"Paginator_pageInput__iXrZg"}},87:function(e,t,n){e.exports={header:"Header_header__1VCKf",login:"Header_login__3V3Qa"}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"g",(function(){return O})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"c",(function(){return _}));var r=n(10),s=n.n(r),a=n(18),c=n(28),i=n(4),o=n(14),u=n(30),l="profile/ADD-POST",d="profile/SET_USER_PROFILE",j="profile/SET_STATUS",f="profile/DELETE_POST",b="profile/SAVE_PHOTO",p={posts:[{id:1,message:"Spank me!",likesCount:15},{id:1,message:"Please, daddy!",likesCount:2}],profile:null,status:""},h=function(e){return{type:l,body:e}},m=function(e){return{type:j,status:e}},O=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n((s=r.data.photos,{type:b,photos:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n,r){var a,c,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,o.b.saveProfileData(e);case 3:if(0!==(c=t.sent).resultCode){t.next=8;break}n(_(a)),t.next=11;break;case 8:return i=c.messages.length>0?c.messages[0]:"Unable to save profile info",n(Object(u.a)("edit-profile",{_error:i})),t.abrupt("return",Promise.reject(i));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n({type:d,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.body,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case f:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case b:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[285,1,2]]]);
//# sourceMappingURL=main.0fc58540.chunk.js.map