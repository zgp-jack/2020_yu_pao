(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/resume/preview/index"],{

/***/ "./src/pages/resume/preview/index.scss":
/*!*********************************************!*\
  !*** ./src/pages/resume/preview/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/preview/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/resume/preview/index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/preview/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = function (_Taro$Component) {
  _inherits(Preview, _Taro$Component);

  function Preview() {
    _classCallCheck(this, Preview);

    var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '找活名片'
    };

    _this.$usedState = ["data", "loopArray89", "loopArray90", "loopArray91", "loopArray92", "IMGCDNURL", "checkpan", "checkone", "headerimg", "age", "sex", "project", "skillbooksone", "telephone"];
    _this.anonymousFunc0Map = {};
    _this.anonymousFunc2Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Preview, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Preview.prototype.__proto__ || Object.getPrototypeOf(Preview.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
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
      // 左上角图片

      var _useState = (0, _taroTt.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          checkpan = _useState2[0],
          setCheckpan = _useState2[1];
      // 图片审核中


      var _useState3 = (0, _taroTt.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          checkone = _useState4[0],
          setCheckone = _useState4[1];
      // 头像


      var _useState5 = (0, _taroTt.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          headerimg = _useState6[0],
          setHeaderimg = _useState6[1];
      // 性别


      var _useState7 = (0, _taroTt.useState)('未填写'),
          _useState8 = _slicedToArray(_useState7, 2),
          sex = _useState8[0],
          setSex = _useState8[1];
      // 年龄


      var _useState9 = (0, _taroTt.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          age = _useState10[0],
          setAge = _useState10[1];
      // 电话


      var _useState11 = (0, _taroTt.useState)('未填写'),
          _useState12 = _slicedToArray(_useState11, 2),
          telephone = _useState12[0],
          settelephone = _useState12[1];
      // 项目


      var _useState13 = (0, _taroTt.useState)([]),
          _useState14 = _slicedToArray(_useState13, 2),
          project = _useState14[0],
          setProject = _useState14[1];
      // 技能


      var _useState15 = (0, _taroTt.useState)([]),
          _useState16 = _slicedToArray(_useState15, 2),
          skillbooksone = _useState16[0],
          setSkillbooksone = _useState16[1];
      // 总数据


      var _useState17 = (0, _taroTt.useState)({
        info: {
          username: '未填写',
          authentication: '',
          certificate_show: 0,
          nation: '',
          address: '',
          introduce: '',
          miniInfoOccupations: []
        },
        introduces: {
          hometown: '',
          experience_str: '',
          prof_degree_str: '',
          type_str: '',
          number_people: '',
          tags: []
        },
        project: [],
        certificates: [],
        content: {
          show_tips: 0
        }
      }),
          _useState18 = _slicedToArray(_useState17, 2),
          data = _useState18[0],
          setData = _useState18[1];

      (0, _taroTt.useEffect)(function () {
        (0, _index.resumeListAction)().then(function (res) {
          if (res.errcode === 200) {
            var date = new Date();
            var dateo = date.getTime();
            var dateone = new Date(dateo);
            if (res.data.info.birthday) {
              if (dateone.getFullYear() - (res.data.info.birthday.split("-")[0] - 0) == 0) {
                setAge('');
              } else {
                setAge(dateone.getFullYear() - (res.data.info.birthday.split("-")[0] - 0) + "岁");
              }
            }
            // Taro.setStorageSync("introinfo", res.data.info)
            setSex(res.data.info.gender == '1' ? '男' : '女');
            setCheckpan(res.data.info.check == '0' ? true : false);
            setCheckone(res.data.info.check == '0' ? true : false);
            setHeaderimg(res.data.info.headerimg);
            setData({ info: res.data.info, introduces: res.data.introduces, project: res.data.project, certificates: res.data.certificates, content: res.data.content });
            settelephone(res.data.info.tel);
            if (res.data.project.length === 0) {
              setProject([]);
              setSkillbooksone([]);
            } else {
              setSkillbooksone([res.data.certificates[0]]);
              if (res.data.project) {
                if (new Date(res.data.project[0].completion_time).getTime() / 86400000 < new Date().getTime() / 86400000) {
                  var item = res.data.project[0];
                  item.completiontime = 'zhijing';
                  setProject([item]);
                } else {
                  var _item = res.data.project[0];
                  _item.completiontime = 'zhijin';
                  setProject([_item]);
                }
              }
            }
          } else {
            _taroTt2.default.showModal({
              title: '温馨提示',
              content: res.errmsg,
              showCancel: false
            });
            return;
          }
        });
      }, []);
      // 点击图片
      var handleImg = function handleImg(e) {
        _taroTt2.default.previewImage({
          current: e,
          urls: [e]
        });
      };
      this.anonymousFunc1 = function () {
        return _taroTt2.default.navigateTo({ url: "/pages/resume/projectList/index?preview=1" });
      };
      this.anonymousFunc4 = function () {
        return _taroTt2.default.navigateTo({ url: "/pages/resume/skillList/index?preview=1" });
      };
      var loopArray89 = data.info.miniInfoOccupations.length ? data.info.miniInfoOccupations.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp2 = data.info.miniInfoOccupations.length ? i + i : null;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: v.$original
        };
      }) : [];
      var loopArray90 = data.introduces.tags.length ? data.introduces.tags.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp4 = data.introduces.tags.length ? i + i : null;
        return {
          $loopState__temp4: $loopState__temp4,
          $original: v.$original
        };
      }) : [];
      var loopArray91 = data.project.length ? project.map(function (item, i) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var $loopState__temp6 = data.project.length ? i + i : null;
        var $anonymousCallee__10 = data.project.length ? item.$original.image.map(function (v, i) {
          v = {
            $original: (0, _taroTt.internal_get_original)(v)
          };
          var $loopState__temp8 = data.project.length ? i + i : null;
          var _$indexKey = "jczzz" + i + "-" + i;
          _this2.anonymousFunc0Map[_$indexKey] = function () {
            return handleImg(v.$original);
          };
          return {
            $loopState__temp8: $loopState__temp8,
            _$indexKey: _$indexKey,
            $original: v.$original
          };
        }) : [];
        return {
          $loopState__temp6: $loopState__temp6,
          $anonymousCallee__10: $anonymousCallee__10,
          $original: item.$original
        };
      }) : [];
      var loopArray92 = data.certificates.length ? skillbooksone.map(function (item, __index3) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var $anonymousCallee__11 = data.certificates.length ? item.$original.image.map(function (v, i) {
          v = {
            $original: (0, _taroTt.internal_get_original)(v)
          };
          var $loopState__temp10 = data.certificates.length ? i + i : null;
          var _$indexKey2 = "jdzzz" + __index3 + "-" + i;
          _this2.anonymousFunc2Map[_$indexKey2] = function () {
            return handleImg(v.$original);
          };
          return {
            $loopState__temp10: $loopState__temp10,
            _$indexKey2: _$indexKey2,
            $original: v.$original
          };
        }) : [];
        return {
          $anonymousCallee__11: $anonymousCallee__11,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        data: data,
        loopArray89: loopArray89,
        loopArray90: loopArray90,
        loopArray91: loopArray91,
        loopArray92: loopArray92,
        IMGCDNURL: _index2.IMGCDNURL,
        checkpan: checkpan,
        checkone: checkone,
        headerimg: headerimg,
        age: age,
        sex: sex,
        project: project,
        skillbooksone: skillbooksone,
        telephone: telephone
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey2) {
      var _anonymousFunc2Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc2Map[_$indexKey2] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey2].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }]);

  return Preview;
}(_taroTt2.default.Component);

Preview.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc4"];
Preview.$$componentPath = "pages/resume/preview/index";
Preview.config = { navigationBarTitleText: '找活名片' };
exports.default = Preview;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Preview, true));

/***/ })

},[["./src/pages/resume/preview/index.tsx","runtime","vendors"]]]);