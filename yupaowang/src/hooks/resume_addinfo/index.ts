/*
 * @Author: zyb
 * @Date: 2020-11-03 09:23:50
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-05 17:29:51
 * @Description: 
 */
import Taro, { useState, useEffect } from '@tarojs/taro'
import { getResumeAddInfoConfig } from '../../utils/request'
import { ResumeAddInfoConfig } from '../../utils/request/index.d'
import { useDispatch, useSelector }  from '@tarojs/redux'
import { setResumeInfoConfig } from '../../actions/resume_addinfo'
import { DEFAUTL_STATE_TYPE } from '../../reducers/resume_addinfo' 

export default function useResumeAddInfo() {

  const dispatch = useDispatch()

  const addInfoConfig = useSelector<any, DEFAUTL_STATE_TYPE>(store => store['resumeAddInfo'])
  // 保存配置项
  const [infoConfig, setInfoConfig] = useState<ResumeAddInfoConfig>(addInfoConfig)
  // 当前性别的下标
  const [genderCurrent, setGenderCurrent] = useState<number>(0)
  // 当前民族的下标
  const [nationCurrent, setNationCurrent] = useState<number>(0)
  // 获取年月日范围
  const startDatePicker: string = (new Date().getFullYear() - 60) + '-01-01'

  // 初始化基本信息数据
  //const 



  // 请求配置项数据
  useEffect(()=>{
    if (addInfoConfig.isset) return
    getResumeAddInfoConfig().then(res => {
      setInfoConfig(res)
      dispatch(setResumeInfoConfig({ ...res, isset: true }))
    })
  },[])

  return {
    infoConfig,
    genderCurrent,
    startDatePicker
  }
}