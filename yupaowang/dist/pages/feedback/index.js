<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[44],{"166":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ce=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(o=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&i.return&&i.return()}finally{if(r)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var se=n(0),le=_interopRequireDefault(se),pe=_interopRequireDefault(n(17)),fe=_interopRequireDefault(n(12)),me=n(2),de=n(4),ye=_interopRequireDefault(de),he=n(15),_e=n(8);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(167);var r=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Feedback,le.default.Component),o(Feedback,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0})(Feedback.prototype.__proto__||Object.getPrototypeOf(Feedback.prototype),"_constructor",this).call(this,e),this.$$refs=new le.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,r=(0,se.genCompid)(o+"$compid__59"),a=ce(r,2),u=a[0],i=a[1],c=(0,se.genCompid)(o+"$compid__60"),s=ce(c,2),l=s[0],p=s[1],f=(0,se.genCompid)(o+"$compid__61"),m=ce(f,2),d=m[0],y=m[1],h=(0,se.genCompid)(o+"$compid__62"),_=ce(h,2),g=_[0],v=_[1],b=(0,se.genCompid)(o+"$compid__63"),F=ce(b,2),w=F[0],k=F[1],$=(0,se.useRouter)().params,S=$.username,O=void 0===S?"":S,x=$.phone,C=void 0===x?"":x,A=(0,se.useState)(O),P=ce(A,2),j=P[0],M=P[1],T=(0,se.useState)(C),R=ce(T,2),D=R[0],I=R[1],q=(0,se.useState)(""),E=ce(q,2),B=E[0],V=E[1],J=(0,se.useState)(!1),L=ce(J,2),N=L[0],U=L[1],W=(0,se.useState)(""),G=ce(W,2),z=G[0],H=G[1],K=(0,se.useState)({"item":[]}),Q=ce(K,2),X=Q[0],Y=Q[1],Z=(0,se.useState)(0),ee=ce(Z,2),te=ee[0],ne=ee[1],oe=(0,fe.default)(),re=oe.text,ae=oe.userGetCode,ue=oe.disabled;return this.anonymousFunc0=function(e){return function handleTextarea(e){var t=e.detail.value;V(t),ne(t.length)}(e)},this.anonymousFunc1=function(e){return M(e)},this.anonymousFunc2=function(e){return function handlePhone(e){U(e!==C||!C),I(e)}(e)},this.anonymousFunc3=function(e){return H(e)},this.anonymousFunc4=function(){return ae(D)},this.anonymousFunc5=function handleSubmission(){var e=X.item.map(function(e){return e.url});if(!(0,_e.isVaildVal)(B,15,500))return(0,de.ShowActionModal)({"msg":"输入内容不少于15个字且必须包含文字"}),!1;if(!j)return(0,de.ShowActionModal)({"msg":"请输入联系人姓名"}),!1;if(!(0,_e.isPhone)(D))return(0,de.ShowActionModal)({"msg":"请输入正确手机号"}),!1;if(D!==C&&!z)return(0,de.ShowActionModal)({"msg":"请输入验证码"}),!1;var t={"images":e.join(","),"content":B,"username":j,"tel":D,"code":z};(0,me.feedbackSubmissionAction)(t).then(function(e){"ok"==e.errcode?(0,he.SubscribeToNews)("msg",function(){(0,de.ShowActionModal)({"msg":e.errmsg,"success":function success(){le.default.navigateBack({"delta":1})}})}):(0,ye.default)(e.errmsg)})},se.propsManager.set({"num":te},i,u),X.item&&se.propsManager.set({"images":X.item,"max":9,"userUploadImg":function userUploadImg(e){var n=0<arguments.length&&void 0!==e?e:-1;(0,pe.default)().then(function(e){var t={"url":e.url,"httpurl":e.httpurl};-1===n?Y(ie({},X,{"item":[].concat(function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(X.item),[t])})):(X.item[n]=t,Y(ie({},X)))})}},p,l),se.propsManager.set({"name":"name","title":"联系人","type":"text","placeholder":"请输入你的名字","value":j,"onChange":this.anonymousFunc1},y,d),se.propsManager.set({"name":"phone","title":"联系电话","type":"text","placeholder":"请输入手机号方便客服联系你","maxLength":11,"value":D,"onChange":this.anonymousFunc2},v,g),N&&se.propsManager.set({"clear":!0,"title":"验证码","type":"text","maxLength":4,"placeholder":"请输入你的验证码","name":"code","value":z,"onChange":this.anonymousFunc3},k,w),Object.assign(this.__state,{"$compid__59":i,"$compid__60":p,"$compid__61":y,"$compid__62":v,"$compid__63":k,"textarea":B,"image":X,"isShow":N,"disabled":ue,"text":re}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}}]),Feedback);function Feedback(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Feedback);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Feedback.__proto__||Object.getPrototypeOf(Feedback)).apply(this,arguments));return e.config={"navigationBarTitleText":"鱼泡网-意见反馈"},e.$usedState=["$compid__59","$compid__60","$compid__61","$compid__62","$compid__63","textarea","image","isShow","disabled","text"],e.customComponents=["Auth","WechatNotice","WordsTotal","ImageView","AtInput"],e}r.$$events=["anonymousFunc0","anonymousFunc4","anonymousFunc5"],r.$$componentPath="pages/feedback/index",r.config={"navigationBarTitleText":"鱼泡网-意见反馈"},t.default=r,Page(n(0).default.createComponent(r,!0))},"167":function(e,t,n){}},[[166,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/feedback/index"],{

/***/ "./src/pages/feedback/index.scss":
/*!***************************************!*\
  !*** ./src/pages/feedback/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/feedback/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/feedback/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../hooks/code/index */ "./src/hooks/code/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index6 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index7 = _interopRequireDefault(_index6);

var _index8 = __webpack_require__(/*! ../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

var _index9 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/feedback/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Feedback = function (_Taro$Component) {
  _inherits(Feedback, _Taro$Component);

  function Feedback() {
    _classCallCheck(this, Feedback);

    var _this = _possibleConstructorReturn(this, (Feedback.__proto__ || Object.getPrototypeOf(Feedback)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '鱼泡网-意见反馈'
    };

    _this.$usedState = ["$compid__59", "$compid__60", "$compid__61", "$compid__62", "$compid__63", "textarea", "image", "isShow", "disabled", "text"];
    _this.customComponents = ["Auth", "WechatNotice", "WordsTotal", "ImageView", "AtInput"];
    return _this;
  }

  _createClass(Feedback, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Feedback.prototype.__proto__ || Object.getPrototypeOf(Feedback.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__59"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__59 = _genCompid2[0],
          $compid__59 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__60"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__60 = _genCompid4[0],
          $compid__60 = _genCompid4[1];

      var _genCompid5 = (0, _taroSwan.genCompid)(__prefix + "$compid__61"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__61 = _genCompid6[0],
          $compid__61 = _genCompid6[1];

      var _genCompid7 = (0, _taroSwan.genCompid)(__prefix + "$compid__62"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__62 = _genCompid8[0],
          $compid__62 = _genCompid8[1];

      var _genCompid9 = (0, _taroSwan.genCompid)(__prefix + "$compid__63"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__63 = _genCompid10[0],
          $compid__63 = _genCompid10[1];

      var router = (0, _taroSwan.useRouter)();
      var _router$params = router.params,
          _router$params$userna = _router$params.username,
          username = _router$params$userna === undefined ? '' : _router$params$userna,
          _router$params$phone = _router$params.phone,
          phone = _router$params$phone === undefined ? '' : _router$params$phone;
      // 用户名字

      var _useState = (0, _taroSwan.useState)(username),
          _useState2 = _slicedToArray(_useState, 2),
          name = _useState2[0],
          setName = _useState2[1];
      // 用户电话号码


      var _useState3 = (0, _taroSwan.useState)(phone),
          _useState4 = _slicedToArray(_useState3, 2),
          uphone = _useState4[0],
          setUPhone = _useState4[1];
      // 意见


      var _useState5 = (0, _taroSwan.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          textarea = _useState6[0],
          setTextarea = _useState6[1];
      // 是否显示获取验证码


      var _useState7 = (0, _taroSwan.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          isShow = _useState8[0],
          setIsShow = _useState8[1];
      // 验证码


      var _useState9 = (0, _taroSwan.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          code = _useState10[0],
          setCode = _useState10[1];

      var _useState11 = (0, _taroSwan.useState)({
        item: []
      }),
          _useState12 = _slicedToArray(_useState11, 2),
          image = _useState12[0],
          setImage = _useState12[1];
      // 默认字数


      var _useState13 = (0, _taroSwan.useState)(0),
          _useState14 = _slicedToArray(_useState13, 2),
          num = _useState14[0],
          setNum = _useState14[1];
      // 使用自定义验证码hook


      var _useCode = (0, _index4.default)(),
          text = _useCode.text,
          userGetCode = _useCode.userGetCode,
          disabled = _useCode.disabled;
      // 用户上传图片


      var userUploadImg = function userUploadImg() {
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

        (0, _index2.default)().then(function (res) {
          var imageItem = {
            url: res.url,
            httpurl: res.httpurl
          };
          if (i === -1) {
            setImage(_extends({}, image, { item: [].concat(_toConsumableArray(image.item), [imageItem]) }));
          } else {
            image.item[i] = imageItem;
            setImage(_extends({}, image));
          }
        });
      };
      var handlePhone = function handlePhone(e) {
        if (e !== phone || !phone) {
          setIsShow(true);
        } else {
          setIsShow(false);
        }
        setUPhone(e);
      };
      // 提交
      var handleSubmission = function handleSubmission() {
        var images = image.item.map(function (item) {
          return item.url;
        });
        if (!(0, _index9.isVaildVal)(textarea, 15, 500)) {
          (0, _index6.ShowActionModal)({ msg: '输入内容不少于15个字且必须包含文字' });
          return false;
        }
        if (!name) {
          (0, _index6.ShowActionModal)({ msg: '请输入联系人姓名' });
          return false;
        }
        if (!(0, _index9.isPhone)(uphone)) {
          (0, _index6.ShowActionModal)({ msg: '请输入正确手机号' });
          return false;
        }
        if (uphone !== phone && !code) {
          (0, _index6.ShowActionModal)({ msg: '请输入验证码' });
          return false;
        }
        var params = {
          images: images.join(','),
          content: textarea,
          username: name,
          tel: uphone,
          code: code
        };
        (0, _index5.feedbackSubmissionAction)(params).then(function (res) {
          if (res.errcode == 'ok') {
            (0, _index8.SubscribeToNews)('msg', function () {
              (0, _index6.ShowActionModal)({
                msg: res.errmsg,
                success: function success() {
                  _taroSwan2.default.navigateBack({
                    delta: 1
                  });
                }
              });
            });
          } else {
            (0, _index7.default)(res.errmsg);
          }
        });
      };
      var handleTextarea = function handleTextarea(e) {
        var val = e.detail.value;
        setTextarea(val);
        setNum(val.length);
      };
      this.anonymousFunc0 = function (e) {
        return handleTextarea(e);
      };
      this.anonymousFunc1 = function (e) {
        return setName(e);
      };
      this.anonymousFunc2 = function (e) {
        return handlePhone(e);
      };
      this.anonymousFunc3 = function (e) {
        return setCode(e);
      };
      this.anonymousFunc4 = function () {
        return userGetCode(uphone);
      };
      this.anonymousFunc5 = handleSubmission;
      _taroSwan.propsManager.set({
        "num": num
      }, $compid__59, $prevCompid__59);
      image.item && _taroSwan.propsManager.set({
        "images": image.item,
        "max": 9,
        "userUploadImg": userUploadImg
      }, $compid__60, $prevCompid__60);
      _taroSwan.propsManager.set({
        "name": "name",
        "title": "\u8054\u7CFB\u4EBA",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u5B57",
        "value": name,
        "onChange": this.anonymousFunc1
      }, $compid__61, $prevCompid__61);
      _taroSwan.propsManager.set({
        "name": "phone",
        "title": "\u8054\u7CFB\u7535\u8BDD",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u65B9\u4FBF\u5BA2\u670D\u8054\u7CFB\u4F60",
        "maxLength": 11,
        "value": uphone,
        "onChange": this.anonymousFunc2
      }, $compid__62, $prevCompid__62);
      isShow && _taroSwan.propsManager.set({
        "clear": true,
        "title": "\u9A8C\u8BC1\u7801",
        "type": "text",
        "maxLength": 4,
        "placeholder": "\u8BF7\u8F93\u5165\u4F60\u7684\u9A8C\u8BC1\u7801",
        "name": "code",
        "value": code,
        "onChange": this.anonymousFunc3
      }, $compid__63, $prevCompid__63);
      Object.assign(this.__state, {
        $compid__59: $compid__59,
        $compid__60: $compid__60,
        $compid__61: $compid__61,
        $compid__62: $compid__62,
        $compid__63: $compid__63,
        textarea: textarea,
        image: image,
        isShow: isShow,
        disabled: disabled,
        text: text
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }]);

  return Feedback;
}(_taroSwan2.default.Component);

Feedback.$$events = ["anonymousFunc0", "anonymousFunc4", "anonymousFunc5"];
Feedback.$$componentPath = "pages/feedback/index";
Feedback.config = { navigationBarTitleText: '鱼泡网-意见反馈' };
exports.default = Feedback;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Feedback, true));

/***/ })

},[["./src/pages/feedback/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
