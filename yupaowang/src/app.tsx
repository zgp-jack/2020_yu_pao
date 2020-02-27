import Taro, { Config, Component } from '@tarojs/taro'
import { Provider, useDispatch } from '@tarojs/redux'
import Index from './pages/index'
import configStore from './store'
import { UserInfo } from './config/store'
import { setUserInfo } from '../src/actions/user'
import './app.scss'

const store = configStore()

class App extends Component {

  config: Config = {
    pages: [
      'pages/index/index',
      'pages/used/index',
      'pages/userauth/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    navigateToMiniProgramAppIdList: [
      'wxca0eab5cd5fe6a7c', //装修招工
      'wxd348efa56021e8d0', //焊工招聘
      'wxbfab0a324f27b966', //招聘司机
      'wx33194c327f50b99d', //工厂招人
      'wx0ae31bf0edad4390', //机械租赁
      'wx7cea45b9ebdf87ac', //在建项目
      'wx3faf62a5edbb1513', //工具商城
      'wxbac40ffffdee0573'  //招标采购
    ] 
  }

  componentDidMount () {
    const userInfo = Taro.getStorageSync(UserInfo)
    const dispatch = useDispatch()
    if (userInfo) dispatch(setUserInfo(userInfo))
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store} >
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
