require("./runtime"),require("./vendors"),(tt.webpackJsonp=tt.webpackJsonp||[]).push([[2],{"48":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=_interopRequireDefault(r(0)),i=r(52),o=r(3),u=_interopRequireDefault(r(56));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(82);var s=(0,u.default)();(0,o.setStore)(s),o.ReduxContext.Provider&&(o.ReduxContext.Provider({"store":s}),o.ReduxContext.Provider({"store":s}));var c=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(_App,i.Component),a(_App,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"componentDidCatchError","value":function componentDidCatchError(){}},{"key":"_createData","value":function _createData(){}}]),_App);function _App(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_App);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(_App.__proto__||Object.getPrototypeOf(_App)).apply(this,arguments));return e.config={"pages":["pages/index/index","pages/userauth/index","pages/recruit/publish/index","pages/used/lists/index","pages/map/recruit/index","pages/map/resume/index","pages/used/publish/index","pages/used/info/index","pages/static/invite/index","pages/static/notice/index","pages/getintegral/index","pages/integral/source/index","pages/integral/temp/index","pages/integral/official/index","pages/integral/expend/index","pages/recharge/index","pages/realname/index","pages/map/realname/index","pages/userinfo/info/index","pages/userinfo/add/index","pages/userinfo/phone/index","pages/userinfo/updatePass/index","pages/published/recruit/index","pages/published/used/index","pages/collection/index","pages/help/index","pages/feedbacklist/index","pages/feedback/index","pages/information/mymessage/index","pages/information/system/index","pages/integral/tabber/index","pages/detail/info/index","pages/topping/index","pages/topping/distruction/index","pages/resume/publish/index","pages/resume/add_info/index","pages/resume/add_member/index","pages/resume/add_skill/index","pages/resume/add_project/index","pages/resume/projects/index","pages/resume/skills/index","pages/rank-rules/index","pages/turntable/index","pages/resume/detail/index","pages/resume/newPreview/index","pages/resume/preview/index","pages/login/index"],"subPackages":[{"root":"subpackage/pages","pages":["checkauth/index","about/index","report/index","download/index","ranking/index","course/index","anti-fraud/index","projects/index","skills/index","news/index"]}],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#0099ff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"white"},"navigateToMiniProgramAppIdList":["wxca0eab5cd5fe6a7c","wxd348efa56021e8d0","wxbfab0a324f27b966","wx33194c327f50b99d","wx0ae31bf0edad4390","wx7cea45b9ebdf87ac","wx3faf62a5edbb1513","wxbac40ffffdee0573"],"permission":{"scope.userLocation":{"desc":"获取您的位置将会为您推荐该地区最新信息"}}},e}t.default=c,App(r(0).default.createApp(c)),n.default.initPxTransform({"designWidth":750,"deviceRatio":{"640":1.17,"750":1,"828":.905}})},"56":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function configStore(){return(0,a.createStore)(o.default,a.applyMiddleware.apply(void 0,u))};var a=r(24),n=_interopRequireDefault(r(60)),i=r(61),o=_interopRequireDefault(r(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=[n.default,(0,i.createLogger)()]},"62":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=r(24),n=_interopRequireDefault(r(63)),i=_interopRequireDefault(r(67)),o=_interopRequireDefault(r(68)),u=_interopRequireDefault(r(69)),s=_interopRequireDefault(r(70)),c=_interopRequireDefault(r(72)),d=_interopRequireDefault(r(73)),f=r(75),l=_interopRequireDefault(r(76)),p=_interopRequireDefault(r(77)),g=_interopRequireDefault(r(78)),v=_interopRequireDefault(r(79)),y=_interopRequireDefault(r(80)),b=_interopRequireDefault(r(81));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t.default=(0,a.combineReducers)({"tabbar":n.default,"WechatNotice":i.default,"User":o.default,"msg":u.default,"Personnel":s.default,"Myresume":d.default,"filterClassify":c.default,"MyAreaInfo":f.MyAreaInfo,"MyArea":f.MyArea,"member":l.default,"realname":p.default,"resumeAddInfo":g.default,"PositionStatus":f.PositionStatus,"resumeData":v.default,"resumeList":y.default,"recruitTop":b.default})},"63":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function tabbar(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1],r=JSON.parse(JSON.stringify(i));switch(r.list.find(function(e){e.id===t.type&&(r.key=e.id)}),t.type){case a.HOME:case a.RECRUIT:case a.RESUME:case a.MEMBER:return r;default:return e}};var a=r(14),n=r(1),i={"list":[{"title":"首页","defaultImg":n.ALIYUNCDN+"/newyupao/images/footer-home.png","activeImg":n.ALIYUNCDN+"/newyupao/images/footer-home-active.png","id":a.HOME},{"title":"招工","defaultImg":n.ALIYUNCDN+"/newyupao/images/footer-zg.png","activeImg":n.ALIYUNCDN+"/newyupao/images/footer-zg-active.png","id":a.RECRUIT},{"title":"发布","defaultImg":n.IMGCDNURL+"tabbar-publish-icon.png","activeImg":n.IMGCDNURL+"tabbar-publish-icon.png","id":"","click":"openPublishMenu"},{"title":"找活","defaultImg":n.ALIYUNCDN+"/newyupao/images/footer-zh.png","activeImg":n.ALIYUNCDN+"/newyupao/images/footer-zh-active.png","id":a.RESUME},{"title":"会员","defaultImg":n.ALIYUNCDN+"/newyupao/images/footer-member.png","activeImg":n.ALIYUNCDN+"/newyupao/images/footer-member-active.png","id":a.MEMBER,"msg":!0}],"key":""}},"67":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function WechatNotice(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case i.default:return a({},e,t.data);default:return e}};var n=r(1),i=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(26));var o={"notice":[],"phone":n.SERVERPHONE,"wechat":{"number":"","outTime":600},"success":!1}},"68":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function User(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1];switch(t.type){case o.SET:return a({},e,t.data);case o.GET:if(!e.login){var r=n.default.getStorageSync(i.UserInfo);if(r)return r}return e;default:return e}};var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(0)),i=r(6),o=r(27);var u=n.default.getStorageSync(i.UserInfo),s=u||{"userId":0,"uuid":"","tokenTime":0,"token":"","login":!1}},"69":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function msg(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GET:return e;case n.SET:return a({},e,t.data);default:return e}};var n=r(28),i={"jobNumber":0,"messageNumber":0}},"70":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function Personnel(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GETDATA:return e;case n.SETDATA:return e=a({},e,t.data);default:return e}};var n=r(71),i={"data":{}}},"71":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GETDATA="getdata",t.SETDATA="setdata"},"72":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function msg(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GET:return e;case n.SET:return a({},e,t.data);default:return e}};var n=r(29),i={"classTree":[],"fleamarketTree":[],"jobListType":[],"resumeListType":[],"staffTree":[],"isSet":!1}},"73":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function Myresume(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GETLIST:return e;case n.SETLIST:return e=a({},e,t.data);default:return e}};var n=r(74),i={"data":{}}},"74":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GETLIST="getlist",t.SETLIST="setlist"},"75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.MyAreaInfo=function MyAreaInfo(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case n.GETAREAINFO:return e;case n.SETAREAINFO:return e=a({},e,t.data);default:return e}},t.MyArea=function MyArea(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case n.GETAREA:return e;case n.SETAREA:return e=t.data;default:return e}},t.PositionStatus=function PositionStatus(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],t=arguments[1];switch(t.type){case n.SETPOSITIONSTATUS:return e=t.data;default:return e}};var n=r(30),i=r(9),o={"title":"","adcode":"","location":"","info":""},u=i.AREABEIJING.name},"76":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function UserMemberInfo(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GET:return e;case n.SET:return a({},e,t.data);case n.TEL:return a({},e,{"phone":t.data});default:return e}};var n=r(31),i={"username":"","avatar":"","phone":"","pwd_status":"","changeName":!1}},"77":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function RealnameStore(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GET:return e;case n.SET:return a({},e,t.data);case n.SETFUN:return a({},e,{"setRealnameArea":t.data});case n.SETAREA:return a({},e,{"RealnameArea":t.data});default:return e}};var n=r(32),i={"RealnameArea":"","setRealnameArea":function setRealnameArea(){}}},"78":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function resumeAddInfo(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GET:return a({},e);case n.SET:return a({},e,t.data);default:return a({},e)}};var n=r(33),i={"label":[],"gender":[],"occupation":[],"nation":[],"type":[],"prof_degree":[],"isset":!1}},"79":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function resumeData(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case n.GETUSERRESUME:return e;case n.SETUSERRESUME:return a({},e,t.data);case n.SETINTRODUCE:return a({},e,{"introducesData":t.data});case n.SETCERTIFICATE:return a({},e,{"certificates":t.data});default:return e}};var n=r(34),i=r(35),o={"info":i.INFODATA_DATA,"introducesData":i.INTRODUCERS_DATA,"projectData":[],"certificates":[],"resume_uuid":"","isSet":!1}},"80":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function resumeList(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.SETSUBPACKCERTIFICATE:return a({},e,{"certificates":t.data});case n.SETSUBPACKPROJECT:return a({},e,{"project":t.data});default:return e}};var n=r(36),i={"certificates":[],"project":[]}},"81":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function RecruitTopRedux(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.SET_RECRUIT_TOP_AREA:return a({},e,{"AreParams":a({},t.data)});default:return e}};var n=r(37),i={"AreParams":{"city":[],"province":[],"whole":[]}}},"82":function(e,t,r){}},[[48,0,1]]]);