import Taro from '@tarojs/taro'
import * as api from '../api'
import { TOKEN } from '../../config'
import * as Inter from './index.d'
import Msg from '../msg'
import { UserOpenid } from '../../config/inter'
import { SearchType as RecruitSearchType } from '../../pages/recruit/index.d'
import { SearchType as ResumeSearchType } from '../../pages/resume/index.d'
import { SearchType as FleamarketSearchType } from '../../pages/used/lists/index'
import { AuthData } from '../../components/auth'
import { FilterData } from '../../pages/home'
import { User } from '../../reducers/user'
import { IntegralData } from '../../pages/integral/config'
import { InitRecruitView } from '../../pages/recruit/publish'
import { UserInfo } from '../../config/store'
import { CreateOrder } from '../../pages/recharge'
import { UsedPublishModel } from '../../pages/used/index.d'
import { UserPublishUsedInfo } from '../../pages/used/index.d'
import * as Hooks from '../../hooks/index.d'
import { UserAddInfo } from '../../pages/userinfo/add'

interface RequestHeader {
  'content-type'?: string
  mid?: number,
  token?: string,
  time?: number,
  uuid?: string
}

interface RequestBase {
  url: string,
  method: 'GET' | 'POST',
  header: RequestHeader,
  data: any,
  failToast: boolean,
  loading: boolean,
  title: string
}

type Request = {
  [K in keyof RequestBase]?: RequestBase[K]
}

// 请求失败提示信息
function requestShowToast(show: boolean):void {
  if (show) {
    setTimeout(() => {
      Msg('网络错误，请求失败')
    }, 200)
  }
}

// 获取header请求头信息
function getRequestHeaderInfo(): RequestHeader{
  // 获取用户信息
  let userInfo: User = Taro.getStorageSync(UserInfo)
  const requestHeader: RequestHeader = userInfo.login ? {
    'content-type': 'application/x-www-form-urlencoded',
    mid: userInfo.userId,
    token: userInfo.token,
    time: userInfo.tokenTime,
    uuid: userInfo.uuid
    } : {
      'content-type': 'application/x-www-form-urlencoded',
    }
  return requestHeader
}

// 配置默认请求参数
const defaultRequestData: RequestBase = {
  url: '',
  method: 'GET',
  header: getRequestHeaderInfo(),
  data: {},
  loading: true,
  title: '数据加载中...',
  failToast: true
}

// 全局通用请求方法
export function doRequestAction(reqData: Request): Promise<any> {
  let req: RequestBase = { ...defaultRequestData, ...reqData }
  if (req.loading) {
    Taro.showLoading({
      title: req.title
    })
  }
  let data = { ...req.data, wechat_token: TOKEN }
  // 获取用户信息
  let userInfo: User = Taro.getStorageSync(UserInfo)
  if(req.method === 'POST' && userInfo.login){
    data.userId = userInfo.userId
    data.token = userInfo.token
    data.tokenTime = userInfo.tokenTime
  }
  return new Promise((resolve, reject) => {
    Taro.request({
      url: /^http(s?):\/\//.test(req.url) ? req.url :req.url,
      method: req.method,
      header: req.header,
      data: data,
      success: (res) => {
        //console.log(res)
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          requestShowToast(req.failToast)
          reject(res)
        }
      },
      fail: (e) => {
      // todo requestShowToast(req.failToast)
        requestShowToast(req.failToast)
        reject(e)
      },
      complete: function () {
        if (req.loading) {
          Taro.hideLoading()
        }
      }
    })
  })
}

// 用户授权-获取session_key
export function getUserSessionKey(code: string): Promise<Inter.SessionKey>{
  return doRequestAction({
    url: api.GetUserSessionKey,
    data: {
      code: code
    }
  })
}

// session_key换取userinfo
export function GetUserInfo(data: AuthData): Promise<Inter.InitUserInfo>{
  return doRequestAction({
    url: api.GetUserInfo,
    data: data
  })
}

// 获取首页banner以及公告
export function getBannerNotice(): Promise<Inter.BannerNotice> {
  return doRequestAction({
    url: api.GetBannerNotice,
    loading: false
  })
}

// 获取首页列表数据
export function getAllListItem(data: FilterData): Promise<Inter.HomeLists> {
  return doRequestAction({
    url: api.GetAllListItem,
    data: data
  })
}

// 获取招工列表
export function getRecruitList(data: RecruitSearchType): Promise<Inter.RecruitList[]> {
  return doRequestAction({
    url: api.GetRecruitlist,
    data: data
  })
}

// 获取找活列表
export function getResumeList(data: ResumeSearchType): Promise<Inter.ResumeResult>{
  return doRequestAction({
    url: api.GetResumelist,
    data: data
  })
}

// 获取二手交易列表
export function getFleamarketList(data: FleamarketSearchType): Promise<any>{
  return doRequestAction({
    url: api.GetFleamarketlist,
    data: data
  })
}

// 获取微信号以及公告
export function getWechatNotice(){
  return doRequestAction({
    url: api.GetWechatNotice,
    method: 'POST',
    loading: false
  })
}

// 获取列表页筛选条件
export function getListFilterData(){
  return doRequestAction({
    url: api.GetListFilterData,
    loading: false
  })
}

// tabbar未读消息统计
export function getTabbarMsg(){
  return
}

// 获取积分记录分页数据
export function getIntegralList<T>(data: IntegralData): Promise<Inter.IntegralList<T>> {
  return doRequestAction({
    url: api.GetIntegralList,
    data: data,
    method: 'POST'
  })
} 

// 初始化发布招工信息视图
export function getPublishRecruitView(data: InitRecruitView): Promise<any>{
  return doRequestAction({
    url: api.GetPublisRecruitView,
    data: data,
    method: 'POST'
  })
}

// 获取城市数据
export function getAllAreas(loading: boolean = true): Promise<Inter.AllAreasDataItem[][]>{
  return doRequestAction({
    url: api.GetAllAreas,
    loading: loading
  })
}

// 获取热门城市
export function getHotAreas(){

}

// 检验adcode是否有效
export function checkAdcodeValid(adcode: string): Promise<Inter.CheckAdcodeValid>{
  return doRequestAction({
    url: api.CheckAdcodeValid,
    method: 'POST',
    data: {
      adcode: adcode
    }
  })
}

// 获取用户邀请链接
export function getUserInviteLink(): Promise<Inter.GetUserInviteLink>{
  return doRequestAction({
    url: api.GetUserInviteLink,
    method: 'POST',
    failToast: true
  })
}

// 获取充值选项
export function getRechargeList(): Promise<Inter.GetRechargeList>{
  return doRequestAction({
    url: api.GetRechargeList,
    method: 'POST'
  })
}

// 用户充值获取openid
export function getRechargeOpenid(code: string): Promise<UserOpenid>{
  return doRequestAction({
    url: api.GetRechargeOpenid,
    method: 'POST',
    data: {
      js_code: code
    }
  })
}

// 用户创建充值订单
export function getRechargeOrder(data: CreateOrder): Promise<Inter.GetCreateOrderData>{
  return doRequestAction({
    url: api.GetRechargeOrder,
    method: 'POST',
    data: data
  })
}

// 初始化用户发布二手交易信息
export function getUsedInfoModel(data: Hooks.InitUsedModelInfoParams): Promise<UsedPublishModel>{
  return doRequestAction({
    url: api.GetUsedInfoModel,
    data: data,
    method: 'POST'
  })
}

// 发布二手交易
export function publishUsedInfo(data: UserPublishUsedInfo): Promise<Inter.PublishUsedInfoRusult>{
  return doRequestAction({
    url: api.PublishUsedInfo,
    data: data,
    method: 'POST'
  })
}

// 获取验证码
export function getUserPhoneCode(data: Hooks.UserGetCodeData ): Promise<Inter.GetUserPhoneCode> {
  return doRequestAction({
    url: api.GetUserPhoneCode,
    method: 'POST',
    data: data,
    title: '验证码获取中'
  })
}

// 二手交易详情
export function getUsedInfo(id: string): Promise<Inter.GetUsedInfo>{
  return doRequestAction({
    url: api.GetUsedInfo,
    method: 'POST',
    data: {
      infoId: id
    }
  })
}

// 用户实名查询
export function getUserIsAuth(tel: string): Promise<Inter.CheckUserAuth>{
  return doRequestAction({
    url: api.CheckAuth,
    method: 'POST',
    data: {
      tel: tel
    }
  })
}

// 验证当前用户是否实名
export function checkMineAuthInfo(): Promise<Inter.Result>{
  return doRequestAction({
    url: api.CheckMineAuthInfo,
    method: 'POST'
  })
}

// 用户会员中心
export function getMemberInfo(): Promise<Inter.MemberInfo>{
  return doRequestAction({
    url: api.getMemberInfo,
    method: 'POST'
  })
}

// 获取当前用户的提示信息
export function getMemberMsgNumber(type: boolean): Promise<Inter.ResultData<Inter.MemberMsgNumber>>{
  return doRequestAction({
    url: api.getMemberMsgNumber,
    method: 'POST',
    data: {
      terminal_type: type ? 'ios' : 'android'
    },
    loading: false
  })
}

// 用户实名认证
export function getUserAuthInfo(): Promise<Inter.UserAuthInfo>{
  return doRequestAction({
    url: api.getUserAuthInfo,
    method: 'POST'
  })
}

// 提交实名认证信息
export function postUserAuthInfo(data: Hooks.PostUserAuthInfo): Promise<Inter.Result>{
  return doRequestAction({
    url: api.postUserAuthInfo,
    method: 'POST',
    data: data
  })
}

// 用户完善信息
export function postUserAddInfo(data: UserAddInfo): Promise<Inter.Result>{
  return doRequestAction({
    url: api.postUserAddInfo,
    method: 'POST',
    data: data
  })
}

// 用户修改头像
export function userChangeAvatar(img: string): Promise<Inter.Result>{
  return doRequestAction({
    url: api.userChangeAvatar,
    method: 'POST',
    data: {
      headerImg: img
    }
  })
}

// 用户修改名字
export function userUpdateName(name: string): Promise<Inter.Result>{
  return doRequestAction({
    url: api.userUpdateName,
    method: 'POST',
    data: {
      username: name
    }
  })
}

// 用户更换手机
export function userChangePhone(tel: string, code: string): Promise<Inter.Result>{
  return doRequestAction({
    url: api.userChangePhone,
    method: 'POST',
    data: {
      tel: tel,
      code: code
    }
  })
}
// 收藏招工请求数据
export function getCollectionRecruitListData(page: number): Promise<Inter.CollectionRecruitListData>{
  return doRequestAction({
    url: api.getCollectionRecruitList,
    method: 'POST',
    data: {
      page,
    }
  })
}
// 收藏找活请求数据
export function getCollectionResumeListData(page: number): Promise<Inter.CollectionResumeListData>{
  return doRequestAction({
    url: api.getCollectionResumeList,
    method: 'POST',
    data: {
      page,
    }
  })
}

// 取消招工收藏
export function recruitListCancelCollectionAction(id:string): Promise<Inter.Result>{
  return doRequestAction({
    url: api.recruitCancelCollection,
    method: 'POST',
    data: {
      id,
    }
  })
}