<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[59],{"115":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var Q=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],a=!0,o=!1,r=void 0;try{for(var i,u=t[Symbol.iterator]();!(a=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){o=!0,r=t}finally{try{!a&&u.return&&u.return()}finally{if(o)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var q=n(0),G=_interopRequireDefault(q),Y=n(2),J=n(1),K=n(6),V=n(9),W=n(7),X=n(4),Z=_interopRequireDefault(X);n(116);var tt=n(3),et=n(16);function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}var nt=Math.PI,o=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(RecruitMap,G.default.Component),a(RecruitMap,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,e);if(void 0===a){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,n)}if("value"in a)return a.value;var r=a.get;return void 0!==r?r.call(n):void 0})(RecruitMap.prototype.__proto__||Object.getPrototypeOf(RecruitMap.prototype),"_constructor",this).call(this,t),this.$$refs=new G.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){var o=this;this.__state=t||this.state||{},this.__props=e||this.props||{};var a=this.$prefix,r=(0,q.genCompid)(a+"$compid__42"),i=Q(r,2),u=i[0],s=i[1],c=(0,q.useRouter)().params.id||"",l=(0,q.useState)([]),f=Q(l,2),p=f[0],y=f[1],d=(0,tt.useSelector)(function(t){return t.MyArea}),m=(0,tt.useSelector)(function(t){return t.PositionStatus}),h=(0,tt.useDispatch)();(0,q.useEffect)(function(){var t=G.default.getStorageSync(K.Areas);t?y(t):(0,Y.getAllAreas)().then(function(t){G.default.setStorageSync(K.Areas,t),y(t)})},[]);var v=(0,q.useState)({"id":"","pid":"","city":"","ad_name":""}),_=Q(v,2),g=_[0],F=_[1],M=(0,q.useState)(!1),S=Q(M,2),b=S[0],A=S[1],O=(0,q.useState)(""),P=Q(O,2),w=P[0],C=P[1],R=(0,q.useState)([]),k=Q(R,2),x=k[0],I=k[1],U=(0,q.useState)([]),$=Q(U,2),j=$[0],D=$[1],H=(0,q.useState)(!1),L=Q(H,2),T=L[0],E=L[1];function Qa(t){return parseFloat(t)*nt/180}function Sa(t){A(t),E(!1)}function Ya(e){(0,Y.checkAdcodeValid)(e.adcode).then(function(t){"ok"==t.errcode?(et.setAreaInfo&&(function setUserPublishAreaHistoryItem(e){var t=G.default.getStorageSync(K.UserPublishAreaHistory);if(t){var n=t.findIndex(function(t){return t.location===e.location&&t.name===e.name&&t.adcode==e.adcode});t.unshift(e),-1!==n&&t.splice(n,1),t.splice(J.UserPublishAreaHistoryMaxNum),D(t),G.default.setStorageSync(K.UserPublishAreaHistory,t)}else D([e]),G.default.setStorageSync(K.UserPublishAreaHistory,[e])}(e),h((0,et.setAreaInfo)({"title":e.name,"location":e.location,"adcode":e.adcode,"info":e.district})),h((0,et.setArea)({"name":e.cityName,"ad_name":e.ad_name}))),G.default.navigateBack()):(0,X.ShowActionModal)({"msg":t.errmsg})}).catch(function(){(0,Z.default)("网络错误，请求失败！")})}(0,q.useEffect)(function(){!function initUserLocationCity(){var t=G.default.getStorageSync(K.UserLocationCity);if(t){var e=(0,V.getCityInfo)(t,1),n={"id":e.id,"pid":e.pid,"ad_name":e.ad_name,"city":e.name};c||m&&(h((0,et.setArea)({"name":e.name,"ad_name":e.ad_name})),h((0,et.setPositionStaus)(!1))),F(n)}}(),z()},[]),(0,q.useEffect)(function(){(0,W.getAmapPoiList)(d.ad_name+w).then(function(e){var n=G.default.getStorageSync(K.UserLocation),t=e.filter(function(t){return t.name&&t.adcode&&"string"==typeof t.location});t.forEach(function(t){t.distance=function getGreatCircleDistance(t,e){if(!t)return"";var n=t.split(","),a=e.split(","),o=Qa(n[0]),r=Qa(a[0]),i=o-r,u=Qa(n[1])-Qa(a[1]),s=2*Math.asin(Math.sqrt(Math.pow(Math.sin(i/2),2)+Math.cos(o)*Math.cos(r)*Math.pow(Math.sin(u/2),2)));return s*=6378137,(s=parseInt((Math.round(1e4*s)/1e4).toFixed(2)))<1e3?s+"米":(s/1e3).toFixed(1)+"千米"}(n,t.location),t.cityName=e[0].name.slice(0,2),t.ad_name=d.ad_name}),I(t)})},[w,d]);var z=function initUserPublishAreaHistory(){var t=G.default.getStorageSync(K.UserPublishAreaHistory)||[];D(t)};this.anonymousFunc0=function(){return Sa(!0)},this.anonymousFunc1=function(t){return function userClickInputAction(t){t.detail.value||E(!0)}(t)},this.anonymousFunc2=function(t){return function userEnterPosition(t){var e=t.detail.value;C(e),E(!e)}(t)},this.anonymousFunc3=function(){return function closeHistoryClient(){E(!1),C("")}()},this.anonymousFunc4=function(){return function userCloseMap(){G.default.navigateBack()}()};var N=T?j.map(function(t,e){t={"privateOriginal":(0,q.internal_get_original)(t)};var n=T?e+e:null,a="efzzz"+e;return o.anonymousFunc5Map[a]=function(){return Ya(t.privateOriginal)},{"loopState__temp2":n,"_$indexKey":a,"privateOriginal":t.privateOriginal}}):[],B=x.map(function(t,e){t={"privateOriginal":(0,q.internal_get_original)(t)};var n=e+e,a="egzzz"+e;return o.anonymousFunc6Map[a]=function(){return Ya(t.privateOriginal)},{"loopState__temp4":n,"_$indexKey2":a,"privateOriginal":t.privateOriginal}});return b&&q.propsManager.set({"data":p,"area":d.name,"userLoc":g,"userTapCityBtn":Sa},s,u),Object.assign(this.__state,{"loopArray43":N,"loopArray44":B,"$compid__42":s,"smAreaText":w,"showHistory":T,"histroyList":j,"lists":x,"IMGCDNURL":J.IMGCDNURL,"showCity":b,"area":d}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(t){for(var e,n=arguments.length,a=Array(1<n?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return this.anonymousFunc5Map[t]&&(e=this.anonymousFunc5Map)[t].apply(e,a)}},{"key":"anonymousFunc6","value":function anonymousFunc6(t){for(var e,n=arguments.length,a=Array(1<n?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return this.anonymousFunc6Map[t]&&(e=this.anonymousFunc6Map)[t].apply(e,a)}}]),RecruitMap);function RecruitMap(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,RecruitMap);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(RecruitMap.__proto__||Object.getPrototypeOf(RecruitMap)).apply(this,arguments));return t.config={"navigationBarTitleText":"选择发布地址"},t.$usedState=["loopArray43","loopArray44","$compid__42","smAreaText","showHistory","histroyList","lists","IMGCDNURL","showCity","area"],t.anonymousFunc5Map={},t.anonymousFunc6Map={},t.customComponents=["Cities"],t}o.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6"],o.$$componentPath="pages/map/recruit/index",o.config={"navigationBarTitleText":"选择发布地址"},e.default=o,Page(n(0).default.createComponent(o,!0))},"116":function(t,e,n){}},[[115,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/map/recruit/index"],{

/***/ "./src/pages/map/recruit/index.scss":
/*!******************************************!*\
  !*** ./src/pages/map/recruit/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/map/recruit/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/map/recruit/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _index3 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index4 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index5 = _interopRequireDefault(_index4);

__webpack_require__(/*! ./index.scss */ "./src/pages/map/recruit/index.scss");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _recruit = __webpack_require__(/*! ../../../actions/recruit */ "./src/actions/recruit.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//获取发布招工信息action
var PI = Math.PI; // 数学 PI 常亮
var EARTH_RADIUS = 6378137.0; // 地球半径

var RecruitMap = function (_Taro$Component) {
  _inherits(RecruitMap, _Taro$Component);

  function RecruitMap() {
    _classCallCheck(this, RecruitMap);

    var _this = _possibleConstructorReturn(this, (RecruitMap.__proto__ || Object.getPrototypeOf(RecruitMap)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '选择发布地址'
    };

    _this.$usedState = ["loopArray43", "loopArray44", "$compid__42", "smAreaText", "showHistory", "histroyList", "lists", "IMGCDNURL", "showCity", "area"];
    _this.anonymousFunc5Map = {};
    _this.anonymousFunc6Map = {};
    _this.customComponents = ["Cities"];
    return _this;
  }

  _createClass(RecruitMap, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RecruitMap.prototype.__proto__ || Object.getPrototypeOf(RecruitMap.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__42"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__42 = _genCompid2[0],
          $compid__42 = _genCompid2[1];
      // 获取路由参数


      var router = (0, _taroSwan.useRouter)();
      var id = router.params.id || '';
      // 城市数据

      var _useState = (0, _taroSwan.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          areas = _useState2[0],
          setAreas = _useState2[1];
      // 定位城市
      // 获取redux中区域名称数据


      var area = (0, _redux.useSelector)(function (state) {
        return state.MyArea;
      });
      // 获取redux中定位状态
      var positionStatus = (0, _redux.useSelector)(function (state) {
        return state.PositionStatus;
      });
      // 获取dispatch分发action
      var dispatch = (0, _redux.useDispatch)();
      // 获取城市数据
      (0, _taroSwan.useEffect)(function () {
        var areas = _taroSwan2.default.getStorageSync(_store.Areas);
        if (areas) {
          setAreas(areas);
        } else (0, _index.getAllAreas)().then(function (res) {
          // 存入缓存
          _taroSwan2.default.setStorageSync(_store.Areas, res);
          setAreas(res);
        });
      }, []);
      // 用户定位城市

      var _useState3 = (0, _taroSwan.useState)({
        id: '',
        pid: '',
        city: '',
        ad_name: ''
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          userLoc = _useState4[0],
          setUserLoc = _useState4[1];
      // 是否显示城市


      var _useState5 = (0, _taroSwan.useState)(false),
          _useState6 = _slicedToArray(_useState5, 2),
          showCity = _useState6[0],
          setShowCity = _useState6[1];
      // 详细地址的输入框


      var _useState7 = (0, _taroSwan.useState)(''),
          _useState8 = _slicedToArray(_useState7, 2),
          smAreaText = _useState8[0],
          setSmAreaText = _useState8[1];
      // 关键词地区列表


      var _useState9 = (0, _taroSwan.useState)([]),
          _useState10 = _slicedToArray(_useState9, 2),
          lists = _useState10[0],
          setLists = _useState10[1];
      // 关键词地区列表的历史记录


      var _useState11 = (0, _taroSwan.useState)([]),
          _useState12 = _slicedToArray(_useState11, 2),
          histroyList = _useState12[0],
          setHistoryList = _useState12[1];
      // 显示关键词列表还是历史记录


      var _useState13 = (0, _taroSwan.useState)(false),
          _useState14 = _slicedToArray(_useState13, 2),
          showHistory = _useState14[0],
          setShowHistory = _useState14[1];
      // 初始化用户定位信息


      var initUserLocationCity = function initUserLocationCity() {
        // 获取用户定位数据
        var userLoc = _taroSwan2.default.getStorageSync(_store.UserLocationCity);
        // 如果定位
        if (userLoc) {
          var data = (0, _area.getCityInfo)(userLoc, 1);
          var userLocData = {
            id: data.id,
            pid: data.pid,
            ad_name: data.ad_name,
            city: data.name
          };
          if (!id) {
            if (positionStatus) {
              dispatch((0, _recruit.setArea)({ name: data.name, ad_name: data.ad_name }));
              dispatch((0, _recruit.setPositionStaus)(false));
            }
          }
          setUserLoc(userLocData);
        }
      };
      // 初始化所需数据
      (0, _taroSwan.useEffect)(function () {
        initUserLocationCity();
        initUserPublishAreaHistory();
      }, []);
      // 用户点击取消 返回上一页
      var userCloseMap = function userCloseMap() {
        _taroSwan2.default.navigateBack();
      };
      var getRad = function getRad(d) {
        return parseFloat(d) * PI / 180.0;
      };
      // 根据经纬度计算距离
      var getGreatCircleDistance = function getGreatCircleDistance(l, loc) {
        if (!l) {
          return '';
        }
        var arr1 = l.split(",");
        var arr2 = loc.split(",");
        var radLat1 = getRad(arr1[0]);
        var radLat2 = getRad(arr2[0]);
        var a = radLat1 - radLat2;
        var b = getRad(arr1[1]) - getRad(arr2[1]);
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s = s * EARTH_RADIUS;
        s = parseInt((Math.round(s * 10000) / 10000.0).toFixed(2));
        var distance = s < 1000 ? s + "米" : (s / 1000).toFixed(1) + "千米";
        return distance;
      };
      // 获取关键词地区列表
      (0, _taroSwan.useEffect)(function () {
        (0, _index3.getAmapPoiList)(area.ad_name + smAreaText).then(function (data) {
          var loc = _taroSwan2.default.getStorageSync(_store.UserLocation);
          var lists = data.filter(function (item) {
            return item.name && item.adcode && typeof item.location === 'string';
          });
          lists.forEach(function (item) {
            item.distance = getGreatCircleDistance(loc, item.location);
            item.cityName = data[0].name.slice(0, 2);
            item.ad_name = area.ad_name;
          });
          setLists(lists);
        });
      }, [smAreaText, area]);
      // 用户点击城市选择
      var userTapCityBtn = function userTapCityBtn(b) {
        setShowCity(b);
        setShowHistory(false);
      };
      // 用户输入小地区名字
      var userEnterPosition = function userEnterPosition(e) {
        var value = e.detail.value;
        setSmAreaText(value);
        setShowHistory(value ? false : true);
      };
      // 小地址存入缓存，生成历史记录
      var setUserPublishAreaHistoryItem = function setUserPublishAreaHistoryItem(item) {
        var userPublishAreaHistory = _taroSwan2.default.getStorageSync(_store.UserPublishAreaHistory);
        if (userPublishAreaHistory) {
          var isset = userPublishAreaHistory.findIndex(function (data) {
            return data.location === item.location && data.name === item.name && data.adcode == item.adcode;
          });
          userPublishAreaHistory.unshift(item);
          if (isset !== -1) {
            userPublishAreaHistory.splice(isset, 1);
          }
          userPublishAreaHistory.splice(_index2.UserPublishAreaHistoryMaxNum);
          setHistoryList(userPublishAreaHistory);
          _taroSwan2.default.setStorageSync(_store.UserPublishAreaHistory, userPublishAreaHistory);
        } else {
          setHistoryList([item]);
          _taroSwan2.default.setStorageSync(_store.UserPublishAreaHistory, [item]);
        }
      };
      // 初始化用户点击小地区的历史记录
      var initUserPublishAreaHistory = function initUserPublishAreaHistory() {
        var userPublishAreaHistory = _taroSwan2.default.getStorageSync(_store.UserPublishAreaHistory) || [];
        setHistoryList(userPublishAreaHistory);
      };
      // 用户点击输入框
      var userClickInputAction = function userClickInputAction(e) {
        var value = e.detail.value;
        if (value) {
          return;
        }
        setShowHistory(true);
      };
      // 用户点击输入框后面的×关闭当前窗口
      var closeHistoryClient = function closeHistoryClient() {
        setShowHistory(false);
        setSmAreaText('');
      };
      // 用户选择小地区 检测adcode
      var userClickAreaItem = function userClickAreaItem(item) {
        (0, _index.checkAdcodeValid)(item.adcode).then(function (res) {
          if (res.errcode == "ok") {
            if (_recruit.setAreaInfo) {
              setUserPublishAreaHistoryItem(item);
              dispatch((0, _recruit.setAreaInfo)({
                title: item.name,
                location: item.location,
                adcode: item.adcode,
                info: item.district
              }));
              dispatch((0, _recruit.setArea)({ name: item.cityName, ad_name: item.ad_name }));
            }
            _taroSwan2.default.navigateBack();
          } else (0, _index4.ShowActionModal)({ msg: res.errmsg });
        }).catch(function () {
          (0, _index5.default)("网络错误，请求失败！");
        });
      };
      this.anonymousFunc0 = function () {
        return userTapCityBtn(true);
      };
      this.anonymousFunc1 = function (e) {
        return userClickInputAction(e);
      };
      this.anonymousFunc2 = function (e) {
        return userEnterPosition(e);
      };
      this.anonymousFunc3 = function () {
        return closeHistoryClient();
      };
      this.anonymousFunc4 = function () {
        return userCloseMap();
      };
      var loopArray43 = showHistory ? histroyList.map(function (item, index) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp2 = showHistory ? index + index : null;
        var _$indexKey = "efzzz" + index;
        _this2.anonymousFunc5Map[_$indexKey] = function () {
          return userClickAreaItem(item.privateOriginal);
        };
        return {
          loopState__temp2: loopState__temp2,
          _$indexKey: _$indexKey,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      var loopArray44 = lists.map(function (item, index) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp4 = index + index;
        var _$indexKey2 = "egzzz" + index;
        _this2.anonymousFunc6Map[_$indexKey2] = function () {
          return userClickAreaItem(item.privateOriginal);
        };
        return {
          loopState__temp4: loopState__temp4,
          _$indexKey2: _$indexKey2,
          privateOriginal: item.privateOriginal
        };
      });
      showCity && _taroSwan.propsManager.set({
        "data": areas,
        "area": area.name,
        "userLoc": userLoc,
        "userTapCityBtn": userTapCityBtn
      }, $compid__42, $prevCompid__42);
      Object.assign(this.__state, {
        loopArray43: loopArray43,
        loopArray44: loopArray44,
        $compid__42: $compid__42,
        smAreaText: smAreaText,
        showHistory: showHistory,
        histroyList: histroyList,
        lists: lists,
        IMGCDNURL: _index2.IMGCDNURL,
        showCity: showCity,
        area: area
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
    value: function anonymousFunc5(_$indexKey) {
      var _anonymousFunc5Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc5Map[_$indexKey] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey].apply(_anonymousFunc5Map, e);
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(_$indexKey2) {
      var _anonymousFunc6Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc6Map[_$indexKey2] && (_anonymousFunc6Map = this.anonymousFunc6Map)[_$indexKey2].apply(_anonymousFunc6Map, e);
    }
  }]);

  return RecruitMap;
}(_taroSwan2.default.Component);

RecruitMap.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6"];
RecruitMap.$$componentPath = "pages/map/recruit/index";
RecruitMap.config = { navigationBarTitleText: '选择发布地址' };
exports.default = RecruitMap;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(RecruitMap, true));

/***/ })

},[["./src/pages/map/recruit/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
