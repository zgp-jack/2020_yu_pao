/*
 * @Author: zyb
 * @Date: 2020-11-05 10:04:59
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-07 09:17:43
 * @Description: 
 */
export interface NationsType{
  id?:string,
  name?:string,
  mz_id:string,
  mz_name:string,
}

export interface OccupationType {
  id: string, 
  pid: string,
  name: string,
  letter: string,
  not_auth: string,
}
export interface LocationDataType {
  province: string,
  city: string,
  adcode: string|number,
  citycode:string,
  address:string,
  oadcode:string,
  longitude:string,
  latitude:string,
  wardenryid:string,
  regionone:string,
}
