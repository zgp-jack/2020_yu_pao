(tt.webpackJsonp=tt.webpackJsonp||[]).push([[87],{"115":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var V=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=t(0),o=_interopRequireDefault(L),G=_interopRequireDefault(t(116)),H=_interopRequireDefault(t(5)),W=_interopRequireDefault(t(12));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t(117);var i=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(UsedPublish,o.default.Component),r(UsedPublish,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,n,t)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(t):void 0})(UsedPublish.prototype.__proto__||Object.getPrototypeOf(UsedPublish.prototype),"_constructor",this).call(this,e),this.$$refs=new o.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var o=this;function Qa(e,n){var t=JSON.parse(JSON.stringify(h));t[n]=e.detail.value,_(t)}function Ta(e){q(e)}this.__state=e||this.state||{},this.__props=n||this.props||{};var r=this.$prefix,i=(0,L.genCompid)(r+"$compid__45"),a=K(i,2),u=a[0],s=a[1],c=(0,L.genCompid)(r+"$compid__46"),l=K(c,2),d=l[0],f=l[1],y=(0,L.useRouter)().params.id,m=void 0===y?"":y,p=(0,G.default)(m),h=p.model,_=p.setModel,v=p.initModel,b=p.parentCurrent,g=p.setParentCurrent,F=p.childCurrent,C=p.setChildCurrent,P=p.classifyName,T=p.setClassiryName,w=p.cityName,k=p.setCityName,M=p.setCIndex,x=p.setPIndex,I=p.areaProvince,O=p.areaCity,S=p.cIndex,A=p.pIndex,$=p.thisCurrentAreaCity,j=p.userTel,N=p.vaildPublishModelInfo,D=(0,L.useState)(!1),R=K(D,2),U=R[0],q=R[1],E=(0,W.default)(),z=E.text,J=E.userGetCode;this.anonymousFunc0=function(){return Ta(!1)},this.anonymousFunc3=function(e){return Qa(e,"title")},this.anonymousFunc4=function(){return Ta(!0)},this.anonymousFunc5=function(e){return function onPickerChange(e){if(v){var n=e.detail.value[0],t=e.detail.value[1];k(v.areaTree[n].name+"-"+v.areaTree[n].children[t].name),_(V({},h,{"province_id":v.areaTree[n].id,"city_id":v.areaTree[n].children[t].id}))}}(e)},this.anonymousFunc6=function(e){return function onColumnChange(e){var n=e.detail.column,t=e.detail.value;0===n?(x(t),$(t)):M(t)}(e)},this.anonymousFunc7=function(e){return Qa(e,"user_name")},this.anonymousFunc8=function(e){return Qa(e,"user_mobile")},this.anonymousFunc9=function(e){return Qa(e,"code")},this.anonymousFunc10=function(){return J(h.user_mobile)},this.anonymousFunc11=function(e){return Qa(e,"detail")},this.anonymousFunc12=function(){return N()};var Q=v?v.classifyTree.map(function(e,n){e={"$original":(0,L.internal_get_original)(e)};var t=v?(0,H.default)({"drawer-list-item overwords":!0,"drawer-list-item-active":n===b}):null,r="fdzzz"+n;return o.anonymousFunc1Map[r]=function(){return function useClickClassifyParentId(e){g(e)}(n)},{"$loopState__temp2":t,"_$indexKey":r,"$original":e.$original}}):[],B=v?v.classifyTree[b].attributes.map(function(e,n){e={"$original":(0,L.internal_get_original)(e)};var t=v?(0,H.default)({"drawer-list-item overwords":!0,"drawer-list-item-active":n==F&&e.$original.id==h.attribute_id}):null,r="fezzz"+n;return o.anonymousFunc2Map[r]=function(){return function useClickClassifyChildId(e){if(C(e),v){var n=v.classifyTree[b].name+"-"+v.classifyTree[b].attributes[e].name;T(n),q(!1),_(V({},h,{"attribute_id":v.classifyTree[b].attributes[e].id,"category_id":v.classifyTree[b].id}))}}(n)},{"$loopState__temp4":t,"_$indexKey2":r,"$original":e.$original}}):[];return L.propsManager.set({"show":U,"onClose":this.anonymousFunc0},s,u),L.propsManager.set({"num":0},f,d),Object.assign(this.__state,{"initModel":v,"loopArray50":Q,"loopArray51":B,"$compid__45":s,"$compid__46":f,"parentCurrent":b,"model":h,"classifyName":P,"areaProvince":I,"areaCity":O,"pIndex":A,"cIndex":S,"cityName":w,"userTel":j,"text":z}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(e){for(var n,t=arguments.length,r=Array(1<t?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return this.anonymousFunc1Map[e]&&(n=this.anonymousFunc1Map)[e].apply(n,r)}},{"key":"anonymousFunc2","value":function anonymousFunc2(e){for(var n,t=arguments.length,r=Array(1<t?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return this.anonymousFunc2Map[e]&&(n=this.anonymousFunc2Map)[e].apply(n,r)}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}},{"key":"anonymousFunc12","value":function anonymousFunc12(){}}]),UsedPublish);function UsedPublish(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,UsedPublish);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(UsedPublish.__proto__||Object.getPrototypeOf(UsedPublish)).apply(this,arguments));return e.config={"navigationBarTitleText":"发布二手交易"},e.$usedState=["initModel","loopArray50","loopArray51","$compid__45","$compid__46","parentCurrent","model","classifyName","areaProvince","areaCity","pIndex","cIndex","cityName","userTel","text"],e.anonymousFunc1Map={},e.anonymousFunc2Map={},e.customComponents=["Auth","AtDrawer","WordsTotal"],e}i.$$events=["anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11","anonymousFunc12"],i.$$componentPath="pages/used/publish/index",i.config={"navigationBarTitleText":"发布二手交易"},n.default=i,Page(t(0).default.createComponent(i,!0))},"116":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var V=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")};n.default=function useUsedInfo(e){var n={"type":"fleamarket","infoId":e},t=(0,L.useState)({"type":"fleamarket","infoId":e,"user_mobile":"","title":"","user_name":"","detail":"","code":"","province_id":"","city_id":"","category_id":"","attribute_id":""}),r=K(t,2),o=r[0],i=r[1],a=(0,L.useState)(),u=K(a,2),s=u[0],c=u[1],l=(0,L.useState)(0),d=K(l,2),f=d[0],y=d[1],m=(0,L.useState)(0),p=K(m,2),h=p[0],_=p[1],v=(0,L.useState)(""),b=K(v,2),g=b[0],F=b[1],C=(0,L.useState)(""),P=K(C,2),T=P[0],w=P[1],k=(0,L.useState)(0),M=K(k,2),x=M[0],I=M[1],O=(0,L.useState)([]),S=K(O,2),A=S[0],$=S[1],j=(0,L.useState)(0),N=K(j,2),D=N[0],R=N[1],U=(0,L.useState)([]),q=K(U,2),E=q[0],z=q[1];(0,L.useEffect)(function(){(0,H.getUsedInfoModel)(n).then(function(e){"ok"==e.errcode?(ne=e.areaTree,c(e),J(e),Q(e)):"to_auth"==e.errcode?G.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"取消","confirmText":"去实名","success":function success(e){e.cancel?G.default.navigateBack():e.confirm&&G.default.navigateTo({"url":Z.REALNAMEPATH})}}):"auth_checking"==e.errcode?(0,W.ShowActionModal)({"msg":e.errmsg,"success":function success(){return G.default.navigateBack()}}):(0,W.ShowActionModal)({"msg":e.errmsg,"success":function success(){G.default.navigateBack()}})})},[]);var J=function initPublishModelInfo(e){var n=V({},o,{"title":e.model.title||"","attribute_id":e.model.attribute_id||"","category_id":e.model.category_id||"","detail":e.model.detail||"","user_mobile":e.model.user_mobile||"","user_name":e.model.user_name||"","province_id":e.model.province_id||"","city_id":e.model.city_id||""});if(te=n.user_mobile,0===e.model.is_check&&(re=JSON.stringify(n)),i(n),w(e.show_address),n.category_id){var t=e.classifyTree.findIndex(function(e){return e.id==n.category_id}),r=e.classifyTree[t].attributes.findIndex(function(e){return e.id==n.attribute_id});F(e.classifyTree[t].name+"-"+e.classifyTree[t].attributes[r].name),_(r),y(t)}},Q=function initAreaPicker(e){var n=(0,Y.objDeepCopy)(e.areaTree),a=e.model.province_id||"",u=e.model.city_id||"",s=0,c=[];n.map(function(e,n){a==e.id&&(I(n),s=n);var t=e.has_children;if(c.push({"id":e.id,"has_children":t,"name":e.name}),t)for(var r=e.children,o=r.length,i=0;i<o;i++)if(u==r[i].id){R(i);break}}),$(c),B(s)},B=function thisCurrentAreaCity(e){if(ne){var n=(0,Y.objDeepCopy)(ne[e]),t=n.has_children;z(t?n.children:[{"id":n.id,"pid":n.pid,"name":n.name}])}};return{"model":o,"setModel":i,"initModel":s,"parentCurrent":f,"setParentCurrent":y,"childCurrent":h,"setChildCurrent":_,"classifyName":g,"setClassiryName":F,"cityName":T,"setCityName":w,"setCIndex":R,"cIndex":D,"setAreaCity":z,"areaCity":E,"setPIndex":I,"setAreaProvince":$,"areaProvince":A,"pIndex":x,"thisCurrentAreaCity":B,"userTel":te,"vaildPublishModelInfo":function vaildPublishModelInfo(){if(!(0,ee.isVaildVal)(o.title,3,30))return(0,X.default)("请输入3-30字的标题"),!1;if(!o.category_id||!o.attribute_id)return(0,X.default)("请选择交易目的"),!1;if(!o.province_id||!o.city_id)return(0,X.default)("请选择您的地区"),!1;if(!o.user_name)return(0,X.default)("请输入您的姓名"),!1;if(!(0,ee.isPhone)(o.user_mobile))return(0,X.default)("请输入正确的联系电话"),!1;if(o.user_mobile!==te&&!o.code)return(0,X.default)("请输入验证码"),!1;if(!(0,ee.isVaildVal)(o.detail,15,500))return(0,X.default)("请正确输入5-500字的交易详情"),!1;if(s&&0==s.model.is_check&&JSON.stringify(o)==re)return(0,W.ShowActionModal)({"title":"审核失败","msg":"请修改该信息后再进行提交"}),!1;(0,H.publishUsedInfo)(o).then(function(e){(0,W.ShowActionModal)({"msg":e.errmsg,"success":function success(){"ok"==e.errcode&&G.default.reLaunch({"url":"/pages/published/used/index"})}})}).catch(function(){(0,W.ShowActionModal)({"msg":"网络错误，发布失败"})})}}};var L=t(0),G=_interopRequireDefault(L),H=t(2),W=t(4),X=_interopRequireDefault(W),Y=t(7),Z=t(1),ee=t(8);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var ne=!1,te="",re=""},"117":function(e,n,t){}},[[115,0,1]]]);