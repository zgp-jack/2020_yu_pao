(swan.webpackJsonp=swan.webpackJsonp||[]).push([[47],{"184":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var We=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},He=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,a=!1,i=void 0;try{for(var r,u=e[Symbol.iterator]();!(o=(r=u.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){a=!0,i=e}finally{try{!o&&u.return&&u.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Ge=n(0),Qe=_interopRequireDefault(Ge),Ye=n(2),qe=n(1),ze=n(3),Xe=n(8),Je=n(7),Ve=n(4),Ke=_interopRequireDefault(Ve),Ze=n(16),et=n(6);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(185);var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DetailInfoPage,Qe.default.Component),o(DetailInfoPage,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0})(DetailInfoPage.prototype.__proto__||Object.getPrototypeOf(DetailInfoPage.prototype),"_constructor",this).call(this,e),this.$$refs=new Qe.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){var a=this;this.__state=e||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,i=(0,Ge.genCompid)(o+"$compid__66"),r=He(i,2),u=r[0],s=r[1],c=(0,Ge.genCompid)(o+"$compid__67"),l=He(c,2),f=l[0],d=l[1],p=(0,Ge.genCompid)(o+"$compid__68"),m=He(p,2),y=m[0],_=m[1],g=(0,Ge.useRouter)().params,h=g.id,v=void 0===h?"":h,S=g.refId,b=void 0===S?"":S,F=g.type,I=Qe.default.getStorageSync(et.UserInfo),w=(0,Ge.useState)({"title":"","time":"","image":"","user_name":"","classifyName":[],"detail":"","show_full_address":"","location":"","map_address_name":"","map_street_name":"","tel_str":"","show_ajax_btn":!1,"id":0,"is_collect":0,"view_images":[],"is_end":0,"is_check":0,"has_top":0,"show_complaint":{"show_complaint":0,"tips_message":""},"top_info":{"is_top":""}}),A=He(w,2),C=A[0],O=A[1],P=(0,Ge.useState)(!1),k=He(P,2),T=k[0],E=k[1],D=(0,Ge.useState)(""),j=He(D,2),M=j[0],x=j[1],R=(0,Ge.useState)(!1),N=He(R,2),L=N[0],$=N[1],U=(0,Ge.useState)(0),B=He(U,2),W=B[0],H=B[1],G=(0,Ge.useState)(""),Q=He(G,2),Y=Q[0],q=Q[1],z=(0,Ge.useState)(!1),X=He(z,2),J=(X[0],X[1],(0,Ge.useState)(!1)),V=He(J,2),K=V[0],Z=V[1],ee=(0,Ge.useState)(!1),te=He(ee,2),ne=(te[0],te[1],(0,Ge.useState)("")),oe=He(ne,2),ae=oe[0],ie=oe[1],re=(0,Ge.useState)(!1),ue=He(re,2),se=ue[0],ce=ue[1],le=(0,Ge.useState)(!0),fe=He(le,2),de=fe[0],pe=fe[1],me=(0,ze.useSelector)(function(e){return e.User.login}),ye=(0,Ge.useState)([]),_e=He(ye,2),ge=_e[0],he=_e[1],ve=(0,Ge.useState)(!1),Se=He(ve,2),be=Se[0],Fe=Se[1],Ie=(0,Ge.useState)([]),we=He(Ie,2),Ae=(we[0],we[1],(0,Ge.useState)(0)),Ce=He(Ae,2),Oe=Ce[0],Pe=Ce[1],ke=(0,Ge.useState)(""),Te=He(ke,2),Ee=Te[0],De=Te[1],je=(0,Ge.useState)(0),Me=He(je,2),xe=Me[0],Re=Me[1];function Yb(e){Qe.default.navigateTo({"url":e})}function _b(){return me||(Qe.default.navigateTo({"url":qe.CODEAUTHPATH}),0)}(0,Ge.useDidShow)(function(){Fe((0,Xe.isIos)()),L?$(!1):Ne()});var Ne=function getRecruitInfo(){var e={"type":"job","infoId":v};(me?Ye.jobInfoAction:Ye.jobNoUserInfoAction)(e).then(function(r){console.log("then"),Le(r,function(){if($(!1),O(r.result),ie(r.result.tel_str),pe(r.result.show_ajax_btn),Qe.default.setNavigationBarTitle({"title":r.result.title}),qe.SERIES==qe.BAIDUSERIES){var e=r.result.classifyName[0]||"",t=e.split("/").map(function(e){return"招"+e+"师傅"}).join(",");Qe.default.setPageInfo({"title":r.result.title,"description":r.result.title+r.result.detail,"keywords":r.result.show_full_address+"招"+e+"师傅,"+t+",工地招工,找工人,建筑工地"})}H(r.result.is_collect);var n=r.result.city_id&&0!=r.result.city_id?r.result.city_id:r.result.province_id;Pe(n);var o=r.result.occupations.length?r.result.occupations.join(","):"";De(o);var a=r.result.id;Re(a),I.userId===r.result.user_id?q("own"):q(r.errcode);var i={"page":1,"type":1,"area_id":r.result.city_id,"job_ids":r.result.id,"classify_id":[].concat(function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(r.result.occupations)).join(",")};(0,Ye.jobDetailsListAction)(i).then(function(e){"ok"===e.errcode?he(e.data.list):(0,Ke.default)(e.errmsg)})})}).catch(function(){console.log("catch"),(0,Ve.ShowActionModal)({"msg":"网络异常，请重新进入","success":function success(){Qe.default.navigateBack()}})})},Le=function detailGetTelAction(e,t){if(console.log(e.errcode),"ok"==e.errcode||"end"==e.errcode||"ajax"==e.errcode)t&&t();else if("auth_not_pass"==e.errcode||"to_auth"==e.errcode)Qe.default.showModal({"title":"温馨提示","content":e.errmsg,"success":function success(e){e.confirm?Qe.default.navigateTo({"url":"/pages/realname/index"}):Qe.default.navigateBack()}});else if("none_tel"==e.errcode)Qe.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"返回列表","confirmText":"绑定手机","success":function success(e){e.confirm?Qe.default.navigateTo({"url":"/pages/userinfo/add/index"}):e.cancel&&Qe.default.navigateBack()}});else if("get_integral"==e.errcode)Qe.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"返回列表","confirmText":"获取积分","success":function success(e){e.confirm?Qe.default.navigateTo({"url":"/pages/getintegral/index"}):e.cancel&&Qe.default.navigateBack()}});else if("reload"==e.errcode)Qe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"confirmText":"确定","success":function success(e){e.confirm&&Ne()}});else if("goback"==e.errcode){var n=Qe.default.getCurrentPages();Qe.default.showModal({"title":"温馨提示","content":e.errmsg,"confirmText":"确定","showCancel":!1,"success":function success(e){e.confirm&&(1<n.length?Qe.default.navigateBack():Qe.default.reLaunch({"url":"/pages/index/index"}))}})}else Qe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"confirmText":"我知道了","success":function success(){Qe.default.navigateBack()}})};function bc(){if(_b()){var e={"type":"job","infoId":C.id};(0,Ye.jobGetTelAction)(e).then(function(e){Le(e,function(){"end"!=e.errcode?($(!0),ie(e.tel),ce(!0),pe(!1)):(0,Ke.default)(e.errmsg)})})}}function cc(){"end"===Y?Qe.default.showModal({"title":"温馨提示","content":"该招工信息已招到，暂时不能投诉","showCancel":!1}):K?Qe.default.showModal({"title":"提示","content":"您已投诉该信息，请勿重复操作！","showCancel":!1}):se?E(!0):C.show_ajax_btn?(0,Ke.default)("请查看完整的手机号码后再操作！"):2!==C.is_end&&C.show_complaint.show_complaint?E(!0):Qe.default.showModal({"title":"提示","content":"您已投诉该信息，请勿重复投诉！","showCancel":!1})}(0,Ge.useEffect)(function(){b&&Qe.default.setStorageSync(et.REFID,b)},[b]),(0,Ge.useShareAppMessage)(function(){var e="/pages/detail/info/index?id="+v,t=Qe.default.getStorageSync(et.UserInfo);return We({},(0,Je.getUserShareMessage)(),{"path":t?e+"&refId="+t.userId:e})}),this.anonymousFunc0=function(){return bc()},this.anonymousFunc1=function(){Qe.default.makePhoneCall({"phoneNumber":ae})},this.anonymousFunc2=cc,this.anonymousFunc3=function(){return Yb("/subpackage/pages/anti-fraud/index")},this.anonymousFunc4=function(){return Yb("/pages/static/notice/index?id=32")};var $e=qe.REPLACEWEIXINTEXT?C.detail.replace(qe.FILTERWEIXINREG,""):C.detail;this.anonymousFunc6=function handleMap(){var e=C.location.split(",");$(!0),Qe.default.openLocation({"latitude":parseFloat(e[1]),"longitude":parseFloat(e[0]),"name":C.map_address_name,"address":C.map_street_name,"scale":18})},this.anonymousFunc7=function(){return Yb(qe.DOWNLOADAPPPATH)},this.anonymousFunc8=function collection(){_b()&&(0,Ye.recruitListCancelCollectionAction)(C.id.toString()).then(function(e){(0,Ke.default)(e.errmsg),"add"===e.action?H(1):H(0)})},this.anonymousFunc9=cc,this.anonymousFunc10=function(){return bc()},this.anonymousFunc11=function(){Qe.default.makePhoneCall({"phoneNumber":ae})};var Ue=C.classifyName.map(function(e,t){return{"loopState__temp2":t+t,"privateOriginal":(e={"privateOriginal":(0,Ge.internal_get_original)(e)}).privateOriginal}}),Be=C.view_images.length?C.view_images.map(function(e,t){e={"privateOriginal":(0,Ge.internal_get_original)(e)};var n=C.view_images.length?t+t:null,o="ifzzz"+t;return a.anonymousFunc5Map[o]=function(){return function handleImage(e){$(!0),Qe.default.previewImage({"current":e,"urls":[e]})}(e.privateOriginal)},{"loopState__temp5":n,"_$indexKey":o,"privateOriginal":e.privateOriginal}}):[];return Ge.propsManager.set({"type":1},s,u),ge.length&&Ge.propsManager.set({"data":ge,"type":1,"areasId":Oe,"occupations":Ee,"jobIds":xe,"detailList":!0},d,f),T&&Ge.propsManager.set({"display":T,"textarea":M,"handleTextarea":function handleTextarea(e){var t=e.detail.value;x(t)},"setComplaintModal":E,"handleSubmit":function handleSubmit(){if(!(0,Xe.isVaildVal)(M,5,500))return(0,Ve.ShowActionModal)({"msg":"输入内容不少于5个字且必须包含文字"}),!1;var e={"content":M,"type":"job","infoId":C.id};(0,Ye.publishComplainAction)(e).then(function(e){"ok"===e.errcode&&(0,Ze.SubscribeToNews)("complain",function(){(0,Ve.showModalTip)({"tips":e.errmsg,"callback":function callback(){E(!1),Z(!0)}})})})}},_,y),Object.assign(this.__state,{"anonymousState__temp3":$e,"data":C,"loopArray74":Ue,"loopArray75":Be,"$compid__66":s,"$compid__67":d,"$compid__68":_,"type":F,"resCode":Y,"editPhone":de,"SHOWOFFICIALACCOUNT":qe.SHOWOFFICIALACCOUNT,"SERIES":qe.SERIES,"QQSERIES":qe.QQSERIES,"ios":be,"DOWNLOADAPP":qe.DOWNLOADAPP,"IMGCDNURL":qe.IMGCDNURL,"isCollection":W,"ISCANSHARE":qe.ISCANSHARE,"recommend":ge,"complaintModal":T,"phone":ae}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(e){for(var t,n=arguments.length,o=Array(1<n?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.anonymousFunc5Map[e]&&(t=this.anonymousFunc5Map)[e].apply(t,o)}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}}]),DetailInfoPage);function DetailInfoPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DetailInfoPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DetailInfoPage.__proto__||Object.getPrototypeOf(DetailInfoPage)).apply(this,arguments));return e.config={"navigationBarTitleText":""},e.$usedState=["anonymousState__temp3","data","loopArray74","loopArray75","$compid__66","$compid__67","$compid__68","type","resCode","editPhone","SHOWOFFICIALACCOUNT","SERIES","QQSERIES","ios","DOWNLOADAPP","IMGCDNURL","isCollection","ISCANSHARE","recommend","complaintModal","phone"],e.anonymousFunc5Map={},e.customComponents=["WechatNotice","CollectionRecruitList","Report"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11"],a.$$componentPath="pages/detail/info/index",a.config={"navigationBarTitleText":""},t.default=a,Page(n(0).default.createComponent(a,!0))},"185":function(e,t,n){}},[[184,0,1]]]);