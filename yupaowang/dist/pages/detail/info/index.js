(swan.webpackJsonp=swan.webpackJsonp||[]).push([[47],{"184":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var Xe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Je=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,a=!1,u=void 0;try{for(var i,r=e[Symbol.iterator]();!(o=(i=r.next()).done)&&(t.push(i.value),!n||t.length!==n);o=!0);}catch(e){a=!0,u=e}finally{try{!o&&r.return&&r.return()}finally{if(a)throw u}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Ke=t(0),Ye=_interopRequireDefault(Ke),Ze=t(2),en=t(1),nn=t(3),tn=t(8),on=t(7),an=t(4),un=_interopRequireDefault(an),rn=t(16),sn=t(6);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t(185);var a=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(DetailInfoPage,Ye.default.Component),o(DetailInfoPage,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,n,t)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(t):void 0})(DetailInfoPage.prototype.__proto__||Object.getPrototypeOf(DetailInfoPage.prototype),"_constructor",this).call(this,e),this.$$refs=new Ye.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var a=this;this.__state=e||this.state||{},this.__props=n||this.props||{};var o=this.$prefix,u=(0,Ke.genCompid)(o+"$compid__66"),i=Je(u,2),r=i[0],s=i[1],c=(0,Ke.genCompid)(o+"$compid__67"),l=Je(c,2),f=l[0],d=l[1],p=(0,Ke.genCompid)(o+"$compid__68"),m=Je(p,2),y=m[0],g=m[1],h=(0,Ke.useRouter)().params,_=h.id,v=void 0===_?"":_,F=h.refId,S=void 0===F?"":F,b=(h.type,Ye.default.getStorageSync(sn.UserInfo)),w=(0,Ke.useState)({"title":"","time":"","image":"","user_name":"","classifyName":[],"detail":"","show_full_address":"","location":"","map_address_name":"","map_street_name":"","tel_str":"","show_ajax_btn":!1,"id":0,"is_collect":0,"view_images":[],"is_end":0,"is_check":0,"has_top":0,"show_complaint":{"show_complaint":0,"tips_message":""},"top_info":{"is_top":""}}),I=Je(w,2),A=I[0],C=I[1],T=(0,Ke.useState)(!1),k=Je(T,2),O=k[0],P=k[1],x=(0,Ke.useState)(""),j=Je(x,2),E=j[0],D=j[1],M=(0,Ke.useState)(!1),R=Je(M,2),N=R[0],L=R[1],$=(0,Ke.useState)(0),U=Je($,2),H=U[0],B=U[1],W=(0,Ke.useState)(""),G=Je(W,2),Q=G[0],q=G[1],z=(0,Ke.useState)(!1),V=Je(z,2),X=V[0],J=V[1],K=(0,Ke.useState)(!1),Y=Je(K,2),Z=Y[0],ee=Y[1],ne=(0,Ke.useState)(!1),te=Je(ne,2),oe=te[0],ae=te[1],ue=(0,Ke.useState)(""),ie=Je(ue,2),re=ie[0],se=ie[1],ce=(0,Ke.useState)(!1),le=Je(ce,2),fe=le[0],de=le[1],pe=(0,Ke.useState)(!0),me=Je(pe,2),ye=me[0],ge=me[1],he=(0,nn.useSelector)(function(e){return e.User.login}),_e=(0,Ke.useState)([]),ve=Je(_e,2),Fe=ve[0],Se=ve[1],be=(0,Ke.useState)(!1),we=Je(be,2),Ie=we[0],Ae=we[1],Ce=(0,Ke.useState)([]),Te=Je(Ce,2),ke=(Te[0],Te[1],(0,Ke.useState)(0)),Oe=Je(ke,2),Pe=Oe[0],xe=Oe[1],je=(0,Ke.useState)(""),Ee=Je(je,2),De=Ee[0],Me=Ee[1],Re=(0,Ke.useState)(0),Ne=Je(Re,2),Le=Ne[0],$e=Ne[1],Ue=(0,Ke.useState)(0),He=Je(Ue,2),Be=He[0],We=He[1];function ac(e){Ye.default.navigateTo({"url":e})}function dc(){return he||(Ye.default.navigateTo({"url":en.CODEAUTHPATH}),0)}(0,Ke.useDidShow)(function(){Ae((0,tn.isIos)()),N?L(!1):Ge()});var Ge=function getRecruitInfo(){var e={"type":"job","infoId":v};(he?Ze.jobInfoAction:Ze.jobNoUserInfoAction)(e).then(function(i){console.log("then"),Qe(i,function(){if(L(!1),C(i.result),se(i.result.tel_str),ge(i.result.show_ajax_btn),Ye.default.setNavigationBarTitle({"title":i.result.title}),en.SERIES==en.BAIDUSERIES){var e=i.result.classifyName[0]||"",n=e.split("/").map(function(e){return"招"+e+"师傅"}).join(",");Ye.default.setPageInfo({"title":i.result.title,"description":i.result.title+i.result.detail,"keywords":i.result.show_full_address+"招"+e+"师傅,"+n+",工地招工,找工人,建筑工地"})}B(i.result.is_collect);var t=i.result.city_id&&0!=i.result.city_id?i.result.city_id:i.result.province_id;console.error(t,"111"),xe(t);var o=i.result.occupations.length?i.result.occupations.join(","):"";Me(o);var a=i.result.id;$e(a),b.userId===i.result.user_id?q("own"):q(i.errcode);var u={"page":1,"type":1,"area_id":t,"job_ids":i.result.id,"classify_id":[].concat(function _toConsumableArray(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(i.result.occupations)).join(",")};(0,Ze.jobDetailsListAction)(u).then(function(e){"ok"===e.errcode?Se(e.data.list):(0,un.default)(e.errmsg)})})}).catch(function(){console.log("catch"),(0,an.ShowActionModal)({"msg":"网络异常，请重新进入","success":function success(){Ye.default.navigateBack()}})})},Qe=function detailGetTelAction(e,n){if(console.log(e.errcode),"ok"==e.errcode||"end"==e.errcode||"ajax"==e.errcode)n&&n();else if("auth_not_pass"==e.errcode||"to_auth"==e.errcode)Ye.default.showModal({"title":"温馨提示","content":e.errmsg,"success":function success(e){e.confirm?Ye.default.navigateTo({"url":"/pages/realname/index"}):Ye.default.navigateBack()}});else if("none_tel"==e.errcode)Ye.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"返回列表","confirmText":"绑定手机","success":function success(e){e.confirm?Ye.default.navigateTo({"url":"/pages/userinfo/add/index"}):e.cancel&&Ye.default.navigateBack()}});else if("get_integral"==e.errcode)Ye.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"返回列表","confirmText":"获取积分","success":function success(e){e.confirm?Ye.default.navigateTo({"url":"/pages/getintegral/index"}):e.cancel&&Ye.default.navigateBack()}});else if("reload"==e.errcode)Ye.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"confirmText":"确定","success":function success(e){e.confirm&&Ge()}});else if("goback"==e.errcode){var t=Ye.default.getCurrentPages();Ye.default.showModal({"title":"温馨提示","content":e.errmsg,"confirmText":"确定","showCancel":!1,"success":function success(e){e.confirm&&(1<t.length?Ye.default.navigateBack():Ye.default.reLaunch({"url":"/pages/index/index"}))}})}else Ye.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"confirmText":"我知道了","success":function success(){Ye.default.navigateBack()}})};function fc(){if(dc()){var e={"type":"job","infoId":A.id};(0,Ze.jobGetTelAction)(e).then(function(e){Qe(e,function(){"end"!=e.errcode?(L(!0),se(e.tel),de(!0),ge(!1)):(0,un.default)(e.errmsg)})})}}function gc(){"end"===Q?Ye.default.showModal({"title":"温馨提示","content":"该招工信息已招到，暂时不能投诉","showCancel":!1}):Z?Ye.default.showModal({"title":"提示","content":"您已投诉该信息，请勿重复操作！","showCancel":!1}):fe?P(!0):A.show_ajax_btn?(0,un.default)("请查看完整的手机号码后再操作！"):2!==A.is_end&&A.show_complaint.show_complaint?P(!0):Ye.default.showModal({"title":"提示","content":"您已投诉该信息，请勿重复投诉！","showCancel":!1})}function jc(){(0,Ze.jobEndStatusAction)(A.id).then(function(e){"ok"===e.errcode?X||2===A.is_end?ae(!0):(J(!0),(0,un.default)(e.errmsg),J(!1),L(!0)):(0,un.default)(e.errmsg)})}(0,Ke.useEffect)(function(){S&&Ye.default.setStorageSync(sn.REFID,S)},[S]),(0,Ke.useShareAppMessage)(function(){var e="/pages/detail/info/index?id="+v,n=Ye.default.getStorageSync(sn.UserInfo);return Xe({},(0,on.getUserShareMessage)(),{"path":n?e+"&refId="+n.userId:e})}),this.anonymousFunc0=function(){return fc()},this.anonymousFunc1=function(){Ye.default.makePhoneCall({"phoneNumber":re})},this.anonymousFunc2=gc,this.anonymousFunc3=function(){return ac("/subpackage/pages/anti-fraud/index")},this.anonymousFunc4=function(){return ac("/pages/static/notice/index?id=32")};var qe=en.REPLACEWEIXINTEXT?A.detail.replace(en.FILTERWEIXINREG,""):A.detail;this.anonymousFunc6=function handleMap(){var e=A.location.split(",");L(!0),Ye.default.openLocation({"latitude":parseFloat(e[1]),"longitude":parseFloat(e[0]),"name":A.map_address_name,"address":A.map_street_name,"scale":18})},this.anonymousFunc7=function(){return ac(en.DOWNLOADAPPPATH)},this.anonymousFunc8=function(){return ac("/pages/recruit/publish/index?id="+A.id)},this.anonymousFunc9=jc,this.anonymousFunc10=function(){return ac("/pages/newtopping/recRang/index?job_id="+A.id)},this.anonymousFunc11=jc,this.anonymousFunc12=function(){return function handleTopping(e){if(e.has_top){var n=parseInt(e.top_info.end_time);if((new Date).getTime()/1e3<n){Ye.default.showLoading({"title":"正在执行操作"});var t={"infoId":v,"status":"1"==e.toping?"1":"0"};return(0,Ze.jobUpdateTopStatusAction)(t).then(function(e){if("ok"===e.errcode)(0,un.default)(e.errmsg),L(!0),J(!0),We(1);else{if("auth_forbid"===e.errcode)return void Ye.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"取消","confirmText":"去实名","success":function success(e){e.confirm&&Ye.default.navigateTo({"url":"/pages/realname/index?backtwo=backtwo"})}});if("member_forbid"==e.errcode)return void Ye.default.showModal({"title":"温馨提示","content":"mydata.errmsg","cancelText":"取消","confirmText":"联系客服","success":function success(e){if(e.confirm){var n=en.SERVERPHONE;Ye.default.makePhoneCall({"phoneNumber":n})}}});Ye.default.showToast({"title":e.errmsg,"icon":"none","duration":1500})}}),!1}}ac("/pages/newtopping/recRang/index?defaultTopArea="+e.area_id+"&job_id="+e.id)}(A)},this.anonymousFunc13=function(){return ac("/pages/recruit/publish/index?id="+A.id)},this.anonymousFunc14=function collection(){dc()&&(0,Ze.recruitListCancelCollectionAction)(A.id.toString()).then(function(e){(0,un.default)(e.errmsg),"add"===e.action?B(1):B(0)})},this.anonymousFunc15=gc,this.anonymousFunc16=function(){return fc()},this.anonymousFunc17=function(){Ye.default.makePhoneCall({"phoneNumber":re})};var ze=A.classifyName.map(function(e,n){return{"loopState__temp2":n+n,"privateOriginal":(e={"privateOriginal":(0,Ke.internal_get_original)(e)}).privateOriginal}}),Ve=A.view_images.length?A.view_images.map(function(e,n){e={"privateOriginal":(0,Ke.internal_get_original)(e)};var t=A.view_images.length?n+n:null,o="igzzz"+n;return a.anonymousFunc5Map[o]=function(){return function handleImage(e){L(!0),Ye.default.previewImage({"current":e,"urls":[e]})}(e.privateOriginal)},{"loopState__temp5":t,"_$indexKey":o,"privateOriginal":e.privateOriginal}}):[];return Ke.propsManager.set({"type":1},s,r),Fe.length&&Ke.propsManager.set({"data":Fe,"type":1,"areasId":Pe,"occupations":De,"jobIds":Le,"detailList":!0},d,f),O&&Ke.propsManager.set({"display":O,"textarea":E,"handleTextarea":function handleTextarea(e){var n=e.detail.value;D(n)},"setComplaintModal":P,"handleSubmit":function handleSubmit(){if(!(0,tn.isVaildVal)(E,5,500))return(0,an.ShowActionModal)({"msg":"输入内容不少于5个字且必须包含文字"}),!1;var e={"content":E,"type":"job","infoId":A.id};(0,Ze.publishComplainAction)(e).then(function(e){"ok"===e.errcode&&(0,rn.SubscribeToNews)("complain",function(){(0,an.showModalTip)({"tips":e.errmsg,"callback":function callback(){P(!1),ee(!0)}})})})}},g,y),Object.assign(this.__state,{"anonymousState__temp3":qe,"data":A,"loopArray74":ze,"loopArray75":Ve,"$compid__66":s,"$compid__67":d,"$compid__68":g,"resCode":Q,"editPhone":ye,"SHOWOFFICIALACCOUNT":en.SHOWOFFICIALACCOUNT,"SERIES":en.SERIES,"QQSERIES":en.QQSERIES,"ios":Ie,"DOWNLOADAPP":en.DOWNLOADAPP,"IMGCDNURL":en.IMGCDNURL,"again":oe,"stopHiring":X,"editTopping":Be,"isCollection":H,"ISCANSHARE":en.ISCANSHARE,"recommend":Fe,"complaintModal":O,"phone":re}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc5Map[e]&&(n=this.anonymousFunc5Map)[e].apply(n,o)}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}},{"key":"anonymousFunc12","value":function anonymousFunc12(){}},{"key":"anonymousFunc13","value":function anonymousFunc13(){}},{"key":"anonymousFunc14","value":function anonymousFunc14(){}},{"key":"anonymousFunc15","value":function anonymousFunc15(){}},{"key":"anonymousFunc16","value":function anonymousFunc16(){}},{"key":"anonymousFunc17","value":function anonymousFunc17(){}}]),DetailInfoPage);function DetailInfoPage(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,DetailInfoPage);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(DetailInfoPage.__proto__||Object.getPrototypeOf(DetailInfoPage)).apply(this,arguments));return e.config={"navigationBarTitleText":""},e.$usedState=["anonymousState__temp3","data","loopArray74","loopArray75","$compid__66","$compid__67","$compid__68","resCode","editPhone","SHOWOFFICIALACCOUNT","SERIES","QQSERIES","ios","DOWNLOADAPP","IMGCDNURL","again","stopHiring","editTopping","isCollection","ISCANSHARE","recommend","complaintModal","phone"],e.anonymousFunc5Map={},e.customComponents=["WechatNotice","CollectionRecruitList","Report"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11","anonymousFunc12","anonymousFunc13","anonymousFunc14","anonymousFunc15","anonymousFunc16","anonymousFunc17"],a.$$componentPath="pages/detail/info/index",a.config={"navigationBarTitleText":""},n.default=a,Page(t(0).default.createComponent(a,!0))},"185":function(e,n,t){}},[[184,0,1]]]);