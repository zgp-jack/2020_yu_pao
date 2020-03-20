import Taro from '@tarojs/taro'

export default function Msg(msg: string, duration: number = 1500) {
  Taro.showToast({
    title: msg,
    icon: 'none',
    duration: duration
  })
}

interface ShowBackModel {
  title?: string,
  msg: string,
  confirmText?: string,
  success?: () => void
}

export function ShowActionModel(data: any){
  let falg: boolean = typeof data === 'string'
  let { title = '温馨提示', confirmText = '确定', msg, success } = data as ShowBackModel
  Taro.showModal({
    title: title,
    content: falg ? data : msg,
    showCancel: false,
    confirmText: confirmText,
    success: ()=> {
      success && success()
    }
  })
}

export function errMsg(msg: string = ''){
  Taro.atMessage({
    'message': msg,
    'type': 'error',
  })
}

export function warnMsg(msg: string = '') {
  Taro.atMessage({
    'message': msg,
    'type': 'warning',
  })
}

export function successMsg(msg: string = '') {
  Taro.atMessage({
    'message': msg,
    'type': 'success',
  })
}