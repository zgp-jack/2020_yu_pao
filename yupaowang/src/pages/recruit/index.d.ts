import { ProfessionRecruitData } from '../../components/profession/index.d'

export enum FilterMenu {
  area = 0,
  work = 1,
  filter = 2
}

// 招工列表搜索
export interface SearchType {
  page: number,
  list_type: string,
  area_id: string,
  classify_id: string,
  keywords: string,
  // joblisttype: 'newest' | 'recommend',
  joblisttype: string,
  token: string,
}

// 发布招工显示数据
export interface RecruitBaseInfo {
  title: string,
  user_mobile: string,
  user_name: string,
  province_id: number,
  city_id: number,
  type: string,
  infoId: string,
  detail: string,
  classifies: string[]
  address: string,
  location: string,
  adcode: string,
  county_id: string,
  code: string
}

export interface RecruitModelInfo extends RecruitBaseInfo {
  classifyTree: ProfessionRecruitData[],
  placeholder: string,
  maxImageCount: number,
  maxClassifyCount: number,
  view_images: RecruitImageModel[],
  is_check: number,
  check_fail_msg: string
}
// 极速发布数据
export interface FastPublishInit {
  classifyTree: ProfessionRecruitData[],
  mate_data:[],
  not_mate_data:[],
  placeholder:string,
  memberInfo: FastPublishMenberInfo,
  errcode:string,
  typeTextArr: FasttypeTextArr,
  detail: string,
  classifies: string[],
  user_mobile:string,
  code:string,
  view_images: RecruitImageModel[],
  address:string
}

export interface FastPublishMenberInfo {
  check_degree: string,
  headimgurl: string,
  id: string,
  is_check: string,
  status: string,
  tel: string,
  username: string,
  uuid: string
}

export interface FasttypeTextArr {
  classifyLabel: string,
  headerText: string,
  maxClassifyCount: number,
  maxImageCount: number,
  relationField: string,
  relationModelName: string,
  selectedClassifyLabel: string
}

export interface DefaultSearchName {
  id: string
  letter: string
  name: string
  pid:  string
}

export interface RecruitPublishInfo extends RecruitBaseInfo {
  images: string[]
}

export interface RecruitImageModel {
  url: string,
  httpurl: string
}

// 发布招工 最后发布地区
export interface UserLastPublishRecruitArea {
  location: string,
  adcode: string,
  title: string,
  info: string,
  city?:string,
  provice?:string,
}