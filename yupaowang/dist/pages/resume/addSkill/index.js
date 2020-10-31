(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/resume/addSkill/index"],{

/***/ "./src/pages/resume/addSkill/index.scss":
/*!**********************************************!*\
  !*** ./src/pages/resume/addSkill/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/addSkill/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/resume/addSkill/index.tsx ***!
  \*********************************************/
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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index2 = _interopRequireDefault(_index);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index3 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

var _index6 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

var _index7 = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/addSkill/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddSkillPage = function (_Taro$Component) {
  _inherits(AddSkillPage, _Taro$Component);

  function AddSkillPage() {
    _classCallCheck(this, AddSkillPage);

    var _this = _possibleConstructorReturn(this, (AddSkillPage.__proto__ || Object.getPrototypeOf(AddSkillPage)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '新增技能证书'
    };

    _this.$usedState = ["$compid__74", "val", "extraText", "image", "type", "num", "maxNum"];
    _this.customComponents = ["ImageView"];
    return _this;
  }

  _createClass(AddSkillPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AddSkillPage.prototype.__proto__ || Object.getPrototypeOf(AddSkillPage.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__74"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__74 = _genCompid2[0],
          $compid__74 = _genCompid2[1];

      var router = (0, _taroTt.useRouter)();
      // 获取存入的公用内容
      var useSelectorItem = (0, _redux.useSelector)(function (state) {
        return state;
      });
      //  url传递过来的数据
      var _router$params = router.params,
          type = _router$params.type,
          id = _router$params.id;

      console.log(id, 'xxx');
      // 证书名称

      var _useState = (0, _taroTt.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          val = _useState2[0],
          setVal = _useState2[1];
      // 领取证书时间


      var _useState3 = (0, _taroTt.useState)(''),
          _useState4 = _slicedToArray(_useState3, 2),
          extraText = _useState4[0],
          setExtraText = _useState4[1];
      // 图片


      var _useState5 = (0, _taroTt.useState)({
        item: []
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          image = _useState6[0],
          setImage = _useState6[1];
      // uuid


      var _useState7 = (0, _taroTt.useState)(''),
          _useState8 = _slicedToArray(_useState7, 2),
          uuid = _useState8[0],
          setUuid = _useState8[1];
      // 设置技能证书数量


      var _useState9 = (0, _taroTt.useState)(0),
          _useState10 = _slicedToArray(_useState9, 2),
          num = _useState10[0],
          setNum = _useState10[1];
      // 最大数量


      var _useState11 = (0, _taroTt.useState)(3),
          _useState12 = _slicedToArray(_useState11, 2),
          maxNum = _useState12[0],
          setMaxNum = _useState12[1];

      (0, _taroTt.useEffect)(function () {
        // console.log(skillData,'skillData')
        // 设置技能长度
        if (useSelectorItem.Myresume) {
          var listNum = useSelectorItem.Myresume.certificates.length ? useSelectorItem.Myresume.certificates.length : 0;
          setNum(listNum);
          setMaxNum(useSelectorItem.Myresume.certificate_count);
        }
        if (type) {
          _taroTt2.default.setNavigationBarTitle({
            title: '修改技能证书'
          });
          var AllData = JSON.parse(JSON.stringify(useSelectorItem.Myresume));
          if (AllData) {
            var data = AllData.certificates[type];
            setVal(data.name);
            setExtraText(data.certificate_time);
            var arr = [];
            for (var i = 0; i < data.image.length; i++) {
              for (var j = 0; j < data.images.length; j++) {
                var obj = {
                  httpurl: '',
                  url: ''
                };
                if (i === j) {
                  obj.httpurl = data.image[i];
                  obj.url = data.images[i];
                  arr.push(obj);
                }
              }
            }
            console.log(data, 'xxx');
            console.log(data.uuid);
            setImage({ item: arr });
            setUuid(data.uuid);
          }
        }
      }, []);
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
      // 取消
      var handleCanle = function handleCanle() {
        _taroTt2.default.navigateBack({
          delta: 1
        });
      };
      // 确定保存
      var handelSubmit = function handelSubmit(state) {
        if (num >= maxNum) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: "\u6700\u591A\u53EA\u80FD\u6DFB\u52A0" + maxNum + "\u4E2A\u6280\u80FD\u8BC1\u4E66",
            showCancel: false
          });
          return;
        }
        if (!(0, _index6.isVaildVal)(val, 3, 12)) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '请填写真实证书名称，3-12字，必须含有汉字',
            showCancel: false
          });
          return;
        }
        if (extraText == '请选择您领取证书时间') {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '请选择您的领证时间',
            showCancel: false
          });
          return;
        }
        if (!image.item.length) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '您添加的图片为空请重新添加',
            showCancel: false
          });
          return;
        }
        var params = void 0;
        var images = image.item.map(function (item) {
          return item.url;
        });
        if (type) {
          params = {
            image: images,
            name: val,
            certificate_time: extraText,
            certificate_uuid: uuid,
            resume_uuid: id
          };
        } else {
          params = {
            image: images,
            name: val,
            certificate_time: extraText,
            resume_uuid: id
          };
        }
        (0, _index7.resumesCertificateAction)(params).then(function (res) {
          if (res.errcode === 'ok') {
            (0, _index5.SubscribeToNews)('resume', function () {
              (0, _index3.SubPopup)({
                tips: res.errmsg,
                callback: function callback() {
                  if (state === 0) {
                    setVal('');
                    setExtraText('');
                    setImage({ item: [] });
                    setNum(num + 1);
                  } else {
                    _taroTt2.default.navigateBack({
                      delta: 1
                    });
                  }
                }
              });
            });
          } else {
            (0, _index4.default)(res.errmsg);
          }
        });
      };
      var handleDel = function handleDel() {
        _taroTt2.default.showModal({
          title: '提示',
          content: "\u6280\u80FD\u8BC1\u4E66\u5220\u9664\u540E\uFF0C\u5C06\u65E0\u6CD5\u6062\u590D",
          showCancel: true,
          success: function success(res) {
            if (res.confirm == true) {
              var params = {
                certificate_uuid: uuid
              };
              (0, _index7.delCertificateAction)(params).then(function (res) {
                if (res.errcode == "ok") {
                  _taroTt2.default.navigateBack({
                    delta: 1
                  });
                } else {
                  (0, _index4.default)(res.errmsg);
                }
              });
            }
          }
        });
      };
      this.anonymousFunc0 = function (e) {
        setVal(e.detail.value);
      };
      this.anonymousFunc1 = function (e) {
        setExtraText(e.detail.value);
      };
      this.anonymousFunc2 = handleDel;
      this.anonymousFunc3 = handleCanle;
      this.anonymousFunc4 = function () {
        return handelSubmit(0);
      };
      this.anonymousFunc5 = function () {
        return handelSubmit(1);
      };
      image.item && _taroTt.propsManager.set({
        "images": image.item,
        "max": 3,
        "userUploadImg": userUploadImg
      }, $compid__74, $prevCompid__74);
      Object.assign(this.__state, {
        $compid__74: $compid__74,
        val: val,
        extraText: extraText,
        image: image,
        type: type,
        num: num,
        maxNum: maxNum
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

  return AddSkillPage;
}(_taroTt2.default.Component);

AddSkillPage.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5"];
AddSkillPage.$$componentPath = "pages/resume/addSkill/index";
AddSkillPage.config = { navigationBarTitleText: '新增技能证书' };
exports.default = AddSkillPage;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(AddSkillPage, true));

/***/ })

},[["./src/pages/resume/addSkill/index.tsx","runtime","vendors"]]]);