(tt.webpackJsonp=tt.webpackJsonp||[]).push([[73],{"201":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var Fe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},be=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,a=!1,r=void 0;try{for(var u,i=e[Symbol.iterator]();!(o=(u=i.next()).done)&&(t.push(u.value),!n||t.length!==n);o=!0);}catch(e){a=!0,r=e}finally{try{!o&&i.return&&i.return()}finally{if(a)throw r}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Se=t(0),ke=_interopRequireDefault(Se),we=t(2),Ae=t(1),Ce=t(4),je=_interopRequireDefault(Ce),$e=t(8),Re=t(7),Te=t(3),De=_interopRequireDefault(t(5)),Me=t(15),Pe=t(202);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}t(203);var a=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(ResumeDetail,ke.default.Component),o(ResumeDetail,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,n,t)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(t):void 0})(ResumeDetail.prototype.__proto__||Object.getPrototypeOf(ResumeDetail.prototype),"_constructor",this).call(this,e),this.$$refs=new ke.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var a=this;this.__state=e||this.state||{},this.__props=n||this.props||{};var o=this.$prefix,r=(0,Se.genCompid)(o+"$compid__76"),u=be(r,2),i=u[0],s=u[1],f=(0,Te.useDispatch)(),c=(0,Te.useSelector)(function(e){return e.User.login}),l=(0,Te.useSelector)(function(e){return e.User}),p=(0,Se.useRouter)().params,m=p.uuid,y=p.location,d=(0,Se.useState)({"certificates":[],"info":{"introduce":"","headerimg":"","nation":"","username":"","tel":"","hometown":"","occupations":[],"experience":"","prof_degree_str":"","type_str":"","number_people":"","address":"","authentication":"","is_read":0,"is_end":"","certificate_show":0,"uuid":"","user_uuid":"","gender":"","tags":[],"distance":"","location":"","show_complain":{"show_complain":void 0,"tips_message":""}},"operation":{"is_collect":0,"is_zan":0,"status":0},"project":[]}),h=be(d,2),g=h[0],_=h[1],v=(0,Se.useState)(!0),F=be(v,2),b=F[0],S=F[1],k=(0,Se.useState)(!1),w=be(k,2),A=w[0],C=w[1],j=(0,Se.useState)(""),$=be(j,2),R=$[0],T=$[1],D=(0,Se.useState)(!1),M=be(D,2),P=M[0],x=M[1],O=(0,Se.useState)(0),E=be(O,2),I=E[0],B=E[1],N=(0,Se.useState)(0),z=be(N,2),U=z[0],L=z[1],q=(0,Se.useState)(""),G=be(q,2),K=G[0],H=G[1],J=(0,Se.useState)(!1),V=be(J,2),Y=V[0],Q=V[1],W=(0,Se.useState)(""),X=be(W,2),Z=X[0],ee=X[1],ne=(0,Se.useState)(!1),te=be(ne,2),oe=te[0],ae=te[1],re=(0,Se.useState)(!1),ue=be(re,2),ie=ue[0],se=ue[1],ce=(0,Se.useState)(""),le=be(ce,2),fe=le[0],pe=le[1];function Cb(e){ke.default.previewImage({"current":e,"urls":[e]})}(0,Se.useShareAppMessage)(function(){return Fe({},(0,Re.getUserShareMessage)())}),(0,Se.useDidShow)(function(){!function getDataList(){var e={"location":y,"resume_uuid":m};(0,we.resumeDetailAction)(e).then(function(e){if("ok"===e.errcode){for(var n=[].concat(_toConsumableArray(e.certificates)),t=[],o=0;o<n.length;o++){var a=Fe({},n[o],{"images":n[o].images.split(",")});t.push(a)}f((0,Pe.setSubpackcertificate)([].concat(t)));for(var r=[].concat(_toConsumableArray(e.project)),u=[],i=0;i<r.length;i++){var s=Fe({},r[i],{"images":r[i].images.split(",")});u.push(s)}f((0,Pe.setSubpackProject)([].concat(u)));var c=(new Date).getTime(),l=new Date(c);e.info.birthday&&(l.getFullYear()-parseInt(e.info.birthday)==0?H(""):H(l.getFullYear()-parseInt(e.info.birthday)+"岁")),_({"certificates":e.certificates,"info":e.info,"operation":e.operation,"project":e.project}),T(e.info.tel),S(!1),L(e.operation.is_zan),B(e.operation.is_collect),0==e.info.is_read&&"2"!=e.info.is_end&&0==e.operation.status&&C(!0)}})}()}),(0,Se.useEffect)(function(){c&&fe&&("support"===fe?ye():"collect"===fe?de():"phone"===fe&&me())},[c]);var me=function handlePhone(){if(!c)return pe("phone"),void se(!0);var e={"resume_uuid":m};(0,we.resumesGetTelAcrion)(e).then(function(e){200===e.errcode?(C(!0),T(e.tel),x(!1)):7405==e.errcode?ke.default.showModal({"title":"温馨提示","content":e.errmsg,"success":function success(e){e.confirm?ke.default.navigateTo({"url":"/pages/getintegral/index"}):e.cancel&&ke.default.navigateBack()}}):(0,je.default)(e.errmsg)})},ye=function resumeSupport(){if(pe("support"),c){var e={"resume_uuid":m};(0,we.resumeSupportAction)(e).then(function(e){"ok"===e.errcode?((0,je.default)(e.errmsg),L(e.show)):(0,je.default)(e.errmsg)})}else se(!0)},de=function resumeCollect(){if(!c)return pe("collect"),void se(!0);var e={"resume_uuid":m};(0,we.resumeCollectAction)(e).then(function(e){"ok"===e.errcode?((0,je.default)(e.errmsg),B(e.show)):(0,je.default)(e.errmsg)})};this.anonymousFunc0=me,this.anonymousFunc1=function(){return ke.default.makePhoneCall({"phoneNumber":R})},this.anonymousFunc2=function(){return function handleComplaint(){oe||!g.info.show_complain.show_complain?ke.default.showModal({"title":"温馨提示","content":"您已投诉该信息,请勿重复提交！","showCancel":!1}):Q(!0)}()};var he=g.info.address?(0,De.default)({"workotextone-address":!0,"workotextone-noaddress":!g.info.distance}):null;this.anonymousFunc3=function handleMap(){var e=g.info.location.split(",");ke.default.openLocation({"latitude":parseFloat(e[1]),"longitude":parseFloat(e[0]),"name":g.info.address,"address":g.info.address,"scale":18})},this.anonymousFunc5=function(){return ke.default.navigateTo({"url":"/subpackage/pages/projects/index"})},this.anonymousFunc7=function(){return ke.default.navigateTo({"url":"/subpackage/pages/skills/index"})},this.anonymousFunc8=ye,this.anonymousFunc9=de,this.anonymousFunc10=function(){x(!1)},this.anonymousFunc11=function handleTellPhone(){ke.default.makePhoneCall({"phoneNumber":R})};var ge=g.info.occupations.length?g.info.occupations.map(function(e,n){return e={"$original":(0,Se.internal_get_original)(e)},{"$loopState__temp2":g.info.occupations.length?n+n:null,"$original":e.$original}}):[],_e=g.project.length?g.project[0].image.map(function(e,n){e={"$original":(0,Se.internal_get_original)(e)};var t=g.project.length?n+n:null,o="jdzzz"+n;return a.anonymousFunc4Map[o]=function(){return Cb(e.$original)},{"$loopState__temp5":t,"_$indexKey":o,"$original":e.$original}}):[],ve=g.certificates.length?g.certificates[0].image.map(function(e,n){e={"$original":(0,Se.internal_get_original)(e)};var t=g.certificates.length?n+n:null,o="jezzz"+n;return a.anonymousFunc6Map[o]=function(){return Cb(e.$original)},{"$loopState__temp7":t,"_$indexKey2":o,"$original":e.$original}}):[];return Y&&Se.propsManager.set({"display":Y,"textarea":Z,"handleTextarea":function handleTextarea(e){var n=e.detail.value;ee(n)},"setComplaintModal":Q,"handleSubmit":function handleSubmit(){if(!(0,$e.isVaildVal)(Z,5,500))return(0,Ce.ShowActionModal)({"msg":"输入内容不少于5个字且必须包含文字"}),!1;var e={"content":Z,"resume_uuid":g.info.uuid};(0,we.resumesComplainAction)(e).then(function(e){"ok"===e.errcode?(0,Me.SubscribeToNews)("complain",function(){(0,Ce.showModalTip)({"tips":e.errmsg,"callback":function callback(){ae(!0),Q(!1)}})}):(0,je.default)(e.errmsg)})}},s,i),Object.assign(this.__state,{"anonymousState__temp3":he,"data":g,"loopArray91":ge,"loopArray93":_e,"loopArray94":ve,"$compid__76":s,"isAuth":ie,"IMGCDNURL":Ae.IMGCDNURL,"examine":b,"onoff":A,"login":c,"user":l,"praise":U,"ISCANSHARE":Ae.ISCANSHARE,"collect":I,"shownewtips":P,"complaintModal":Y,"age":K,"phone":R}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc4Map[e]&&(n=this.anonymousFunc4Map)[e].apply(n,o)}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc6Map[e]&&(n=this.anonymousFunc6Map)[e].apply(n,o)}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}}]),ResumeDetail);function ResumeDetail(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ResumeDetail);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(ResumeDetail.__proto__||Object.getPrototypeOf(ResumeDetail)).apply(this,arguments));return e.config={"navigationBarTitleText":"找活名片","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["anonymousState__temp3","data","loopArray91","loopArray93","loopArray94","$compid__76","isAuth","IMGCDNURL","examine","onoff","login","user","praise","ISCANSHARE","collect","shownewtips","complaintModal","age","phone"],e.anonymousFunc4Map={},e.anonymousFunc6Map={},e.customComponents=["Auth","Report"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11"],a.$$componentPath="pages/resume/detail/index",a.config={"navigationBarTitleText":"找活名片","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},n.default=a,Page(t(0).default.createComponent(a,!0))},"202":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0}),n.setSubpackcertificate=function setSubpackcertificate(e){return{"type":o.SETSUBPACKCERTIFICATE,"data":e}},n.setSubpackProject=function setSubpackProject(e){return{"type":o.SETSUBPACKPROJECT,"data":e}};var o=t(37)},"203":function(e,n,t){}},[[201,0,1]]]);