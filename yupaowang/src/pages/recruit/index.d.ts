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
  joblisttype: 'newest' | 'recommend',
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
}

export interface RecruitPublishInfo extends RecruitBaseInfo {
  images: string[]
}

export interface RecruitImageModel {
  url: string,
  httpurl: string
}