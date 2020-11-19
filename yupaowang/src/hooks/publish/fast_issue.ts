import { usePublishData } from './issue'
import { FastIssueData } from '../../pages/recruit/index.d'
import Taro, { useState, useEffect } from '@tarojs/taro'
import { isVaildVal, isPhone } from '../../utils/v'
import { ShowActionModal } from '../../utils/msg'
import { fastIssue } from '../../utils/request'
import { FastData } from '../../utils/request/index.d'
import { setToken, setPhone } from '../../actions/recruit'//获取发布招工信息action
import { useDispatch } from '@tarojs/redux'
import { SERVERPHONE } from '../../config'


// 初始化获取信息类型
export interface InitRecruitView {
  type: string,
  infoId: string
}

export function useFastIssue() {
  // 定义请求参数
  const id: string = ''
  const type: string = 'job'
  const InitParams: InitRecruitView = { type: type,infoId: id }
  // 发送获取数据请求
  const { phone, setEnterInfo } = usePublishData(InitParams)
  // 定义快速发布数据
  const [issueData, setIssueData] = useState<FastIssueData>({ phone: phone , content:''})
  // 数据变化的标题
  const [dataType, setDataType] = useState<string>('')
  // 展示或者隐藏电话框
  const [showPhoneBox, setShowPhoneBox] = useState<boolean>(false)
  // 详情输入框输入内容
  const [num, setNum] = useState<number>(0)
  // 获取dispatch分发action
  const dispatch = useDispatch()
  // 存入电话号码
  useEffect(() => {
    setIssueData({ ...issueData, phone: phone })
  }, [phone])
  // 监听输入电话或者详情变化，存入缓存
  useEffect(() => {
    if (dataType == 'phone') {
      setEnterInfo(dataType, issueData[dataType])
    }
    if (dataType == 'content') {
      setEnterInfo(dataType, issueData[dataType])
    }
  }, [dataType, issueData])
  // 用户填写发布信息
  function inputEnter (e: any, key: string) {
    const value: string = e.detail.value
    setIssueData({ ...issueData, [key]:value})
    setDataType(key)
    if (key == 'content'){
      setNum(value.length)
      let content:string = value.replace(/\s+/g, "")
      // 匹配电话正则表达式
      let _partten: RegExp = /1[3-9]\d{9}/g;
      // 获取匹配结果，可能为null可能有值（数组）
      let result = content.match(_partten)
      let phoneNum = result && result[0]
      if (phoneNum){
        // 如果匹配有手机号码，保存最新的手机号并显示电话框
        setIssueData({ ...issueData, phone: phoneNum })
        // 如果匹配的手机号等于账号手机号也不显示电话框
        if (phoneNum == phone) return
        setShowPhoneBox(true)
      }
    }
  }
  // 发布招工详情
  function fastPublish () {
    let data = { ...issueData }
    if (data.content == "") {
      ShowActionModal({
        title: '温馨提示',
        msg: '请输入招工详情。'
      })
      return
    }
    if (!isVaildVal(data.content, 3, 500)) {
      ShowActionModal({
        title: '温馨提示',
        msg: '请正确输入3~500字招工详情,必须含有汉字。'
      })
      return;
    }
    if (!data.phone ||　data.phone == "") {
      ShowActionModal({
        title: '温馨提示',
        msg: '请输入联系电话。'
      })
      setShowPhoneBox(true)
      return false
    }
    if (data.phone && !isPhone(data.phone)) {
      ShowActionModal({
        title: '温馨提示',
        msg: '请正确输入11位联系电话。'
      })
      return false;
    }
    if (data.phone == "18349296434") {
      ShowActionModal({
        title: '温馨提示',
        msg: '该手机号暂不支持发布招工信息，请重新输入。'
      })
      return false;
    }
    fastIssue(data).then(res => {
      if (res.errcode == 'ok') {
        // 获取请求的手机号验证结果true为验证通过
        let checked: boolean = (res.data as FastData).checked 
        // 快速发布招工信息的token，用户携带到整个发布流程使用
        let token: string = (res.data as FastData).token
        // token存入redux
        dispatch(setToken(token))
        // 发布手机号存入redux
        dispatch(setPhone(issueData.phone))
        if (checked){
          Taro.navigateTo({
            url: '/pages/recruit/fast_issue/release/index',
          })
        }else{
          Taro.navigateTo({
            url: '/pages/recruit/fast_issue/code/index',
          })
        }
      } else if (res.errcode == "unusable") {
        Taro.showModal({
          title: '温馨提示',
          content: "mydata.errmsg",
          cancelText: "知道了",
          confirmText: "联系客服",
          success(res) {
            if (res.confirm) {
              let tel = SERVERPHONE;
              Taro.makePhoneCall({
                phoneNumber: tel,
              })
            }
          }
        })
      } else {
        ShowActionModal({
          msg: res.errmsg
        })
      }
    })
  }
  return {
    issueData, 
    setIssueData,
    inputEnter,
    setDataType,
    dataType,
    fastPublish,
    showPhoneBox,
    setShowPhoneBox,
    num,
    setNum
  }
}
