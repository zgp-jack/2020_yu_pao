export interface Result {

}

interface RecruitState {
  label: string,
  state: string
}

// sessionkey
export interface SessionKey {
  openid: string,
  session_key: string,
  unionid: string
}

// 获取用户信息
export interface InitUserInfo {
  errcode: string,
  errmsg: string,
  data: InitUserInfoData
}

export interface InitUserInfoData {
  id: number,
  headimgurl: string,
  nickname: string,
  username: string,
  uuid: string,
  sign: InitUserInfoSign
}

interface InitUserInfoSign {
  token: string,
  time: number
}

// 首页banner notice
export interface BannerNotice {
  address: BannerNoticeAddress,
  banner: BannerNoticeBanner[],
  notice: BannerNoticeNotice[]
}

interface BannerNoticeAddress {
  id: string,
  letter: string,
  name: string,
  pid: string
}

export interface BannerNoticeBanner {
  banner: string,
  small_url: string
}

export interface BannerNoticeNotice {
  id: string,
  title: string
}

// 首页列表数据
export interface HomeLists {
  fleamarket: FleamarketItem,
  job: RecruitItem,
  resume: ResumeItem
}

export interface FleamarketItem {
  lists: FleamarketList[],
  title: string
}

export interface RecruitItem {
  lists: RecruitList[],
  title: string
}

export interface ResumeItem {
  lists: ResumeList[],
  title: string
}

// 招工列表数据
export interface RecruitList {
  id: number,
  detail: string,
  image: string,
  is_check: string,
  is_end: number,
  location: string,
  occupations: string[],
  show_address: string,
  state_arr: RecruitState,
  time: string,
  title: string,
  top: number,
  user_id: number,
  user_name: string,
  user_uuid: number,
  uuid: string
}

// 找活列表数据
export interface ResumeList {
  id: number,
  username: string,
  uuid: string,
  user_uuid: string,
  type: string,
  occupations: string[],
  nation: string,
  location: string,
  is_end: number,
  introduce: string,
  headerimg: string,
  gender: '1'|'2',
  experience: string,
  distance: string,
  birthday: number,
  show_address: string,
  tags: string[],
  prof_degree: string
}

// 二手列表数据
export interface FleamarketList {
  city_id: string,
  id: string,
  image: string,
  is_check: string,
  is_end: string,
  province_id: string,
  show_address: string,
  time: string,
  title: string,
  user_name: string,
  state_arr: FleamarketStateArr
}

interface FleamarketStateArr {
  is_today: number,
  label: string,
  state: string,
  today_text: string
}

export interface ResumeResult {
  errcode: string,
  errmsg: ResumeList[]
}

// 积分记录数据
export interface IntegralList<T> {
  list: T[],
  pageSize: number
}

// 消耗积分记录
export interface IntegralExpendItem {
  His: string,
  day: string,
  expend_integral_string: string,
  headerText: string,
  id: string,
  source: string,
  target_id: string,
  title: string,
  year_month: string
}

// 积分来源记录
export interface IntegralSourceItem {
  His: string,
  day: string,
  ext: string,
  id: string,
  integral: string,
  source_integral_string: string,
  source_title: string,
  year_month: string
}