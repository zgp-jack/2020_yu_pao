import Taro, { Config, useState, useRouter, createContext, useDidShow, useEffect } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { resumeDetailAction, recommendListAction, resumesGetTelAcrion, resumeSupportAction, resumeCollectAction, resumesComplainAction } from '../../../utils/request/index'
import { IMGCDNURL } from '../../../config'
import Msg, { showModalTip } from '../../../utils/msg'
import { DataType, ListType, Injected } from './index.d'
// import CollectionRecruitList  from '../../../components/recommendList/index'
import { isVaildVal } from '../../../utils/v'
import Report from '../../../components/report';
import { useSelector, useDispatch } from '@tarojs/redux'
import Auth from '../../../components/auth'
import { resumeDetailCertificatesRedux, resumeDetailProjectRedux } from '../../../utils/request/index.d';
import { SubscribeToNews } from '../../../utils/subscribeToNews';
import { setSubpackcertificate, setSubpackProject} from '../../../actions/resume_list';
import './index.scss'

export const detailContext = createContext<Injected>({} as Injected)
export default function ResumeDetail() {
  // 获取dispatch分发action
  const dispatch = useDispatch()
  // 获取用户是否登录
  const login = useSelector<any, boolean>(state => state.User['login'])
  const router: Taro.RouterInfo = useRouter()
  //获取uuid和location,location需要修改，用一个共同的，最外层使用的
  let { uuid, location } = router.params;
  //总数据
  const [data, setDate] = useState<DataType>({
    certificates:[],
    info:{
      introduce:'',
      headerimg:'',
      nation: '',
      username: '',
      tel: '',
      hometown: '',
      occupations: [],
      experience: '',
      prof_degree_str: '',
      type_str: '',
      number_people: '',
      address: '',
      authentication:'',
      is_read:0,
      is_end:'',
      certificate_show:0,
      uuid:'',
      gender:'',
      tags: [],
      distance:'',
      location:'',
      show_complain:{
        show_complain: undefined,
        tips_message: '',
      },
    },
    operation:{
      is_collect: 0,
      is_zan: 0,
      status: 0,
    },
    project:[],
  })
  // 相关推荐
  // const [list,setList ] = useState<ListType>({
  //   item:[]
  // })
  const [examine, setExamine] = useState<boolean>(true)
  // 查看电话
  const [onoff, seOnoff] = useState<boolean>(false);
  // 手机号码
  const [phone,setPhone ] = useState<string>('')
  // 弹框
  const [shownewtips, setShownewtips] = useState<boolean>(false)
  // 收藏
  const [collect, setCollect ] = useState<number>(0)
  // 赞
  const [praise, setPraise] = useState<number>(0)
  // 年龄
  const [age, setAge] = useState<string>('')
  // 投诉
  const [complaintModal, setComplaintModal ] = useState<boolean>(false)
  // 投诉内容
  const [textarea, setTextarea] = useState<string>('')
  // 是否还可以投诉
  const [iscomplaint, setIsComplaint] = useState<boolean>(false)
  // 点赞获取电话号码分享收藏需要先登陆
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [clickType,setClickType] = useState<string>('');
  const getDataList = ()=>{
    const params = {
      location:location,
      resume_uuid: uuid
    }
    resumeDetailAction(params).then(res=>{
      if(res.errcode === 'ok'){
        // 技能证书
        let mylists = [...res.certificates]
        let data: resumeDetailCertificatesRedux[] = [];
        for(let i=0;i<mylists.length;i++){
          let item = { ...mylists[i], images: mylists[i].images.split(',') }
          data.push(item)
        }
        dispatch(setSubpackcertificate([...data]));
        // 项目经验
        let projectArr = [...res.project];
        let projectData: resumeDetailProjectRedux[] = [];
        // 职业技能
        for (let i = 0; i < projectArr.length; i++) {
          let item = { ...projectArr[i], images: projectArr[i].images.split(',') }
          projectData.push(item)
        }
        dispatch(setSubpackProject([...projectData]));
        const date = new Date();
        const dateo = date.getTime()
        const dateone = new Date(dateo);
        if (res.info.birthday) {
          if (dateone.getFullYear() - parseInt(res.info.birthday) == 0) {
            setAge('')
          } else {
            setAge(dateone.getFullYear() - parseInt(res.info.birthday) + "岁")
          }
        }
        // Taro.setStorageSync("introinfo", res.info)
        setDate({ certificates: res.certificates,info:res.info,operation:res.operation,project:res.project})
        setPhone(res.info.tel);
        setExamine(false)
        setPraise(res.operation.is_zan)
        setCollect(res.operation.is_collect)
        if (res.info.is_read == 0 && res.info.is_end != '2' && res.operation.status == 0){
          seOnoff(true)
        }
        // 加载相关推荐数据列表
        // const listParams = {
        //   page: 1,
        //   type: 1,
        //   area_id: res.info.city,
        //   occupations: res.info.occupations_id,
        //   uuid: res.info.uuid,
        // }
        // recommendListAction(listParams).then(res => {
        //   setList({ item: res.data.list })
        // })
      }
    })
  }
  useDidShow(() => {
    getDataList();
  })
  useEffect(() => {
    if (!login) return;
    // 授权获取内容
    if (clickType){
      if (clickType === 'support'){
        resumeSupport();
      } else if (clickType === 'collect'){
        resumeCollect();
      } else if (clickType === 'phone'){
        handlePhone();
      }
    }
  }, [login])
  // 查看电话
  const handlePhone =()=>{
    if (!login){
      setClickType('phone')
      setIsAuth(true)
      return
    }
    const params = {
      resume_uuid: uuid
    }
    resumesGetTelAcrion(params).then(res=>{
      if(res.errcode === 200){
        seOnoff(true)
        setPhone(res.tel)
        setShownewtips(false);
      } else if (res.errcode == 7405) {
        Taro.showModal({
          title: '温馨提示',
          content: res.errmsg,
          success: function (res) {
            if (res.confirm) {
              Taro.navigateTo({
                url: '/pages/getintegral/index',
              })
            } else if (res.cancel) {
              Taro.navigateBack()
            }
          }
        })
      }else{
        Msg(res.errmsg);
      }
    })
  }
  // 拨打电话
  const handleTellPhone = ()=>{
    Taro.makePhoneCall({
      phoneNumber: phone,
    })
  }
  // 赞
  const resumeSupport = ()=>{
    setClickType('support')
    if (!login) {
      setIsAuth(true)
      return
    }
    let params = {
      resume_uuid: uuid
    }
    resumeSupportAction(params).then(res=>{
      if(res.errcode === 'ok'){
        Msg(res.errmsg)
        setPraise(res.show);
      }else{
        Msg(res.errmsg)
      }
    })
  }
  // 收藏
  const resumeCollect = ()=>{
    if (!login) {
      setClickType('collect')
      setIsAuth(true)
      return
    }
    let params = {
      resume_uuid: uuid
    }
    resumeCollectAction(params).then(res=>{
      if (res.errcode === 'ok') {
        Msg(res.errmsg)
        setCollect(res.show);
      } else {
        Msg(res.errmsg)
      }
    })
  }
  // 多行输入
  const handleTextarea = (e: any) => {
    let val: string = e.detail.value;
    setTextarea(val);
  }
  // 提交投诉
  const handleSubmit = () => {
    if (!isVaildVal(textarea, 15, 500)) {
      Msg('输入内容不少于15个字且必须包含文字')
      return false
    }
    const params = {
      content: textarea,
      resume_uuid: data.info.uuid,
    };
    resumesComplainAction(params).then((res) => {
      if (res.errcode === 'ok') {
        SubscribeToNews('complain', () => {
          showModalTip({
            tips: res.errmsg,
            callback: () => {
              setIsComplaint(true)
              setComplaintModal(false);
            }
          })
        })
      }
    })
  }
  // 举报
  const handleComplaint = ()=>{
    if (iscomplaint || !data.info.show_complain.show_complain){
      Taro.showModal({
        title: '温馨提示',
        content: '您已投诉该信息,请勿重复提交！',
        showCancel: false,
      })
    }else{
      setComplaintModal(true)
    }
  }
  // 点击方法
  const handleImg = (e: string) => {
    Taro.previewImage({
      current: e,
      urls: [e]
    })
  }
  // 传递的值
  const value:Injected = {
    project: data.project,
    certificates:data.certificates
  }
  const handleMap = ()=>{
    let locArr = data.info.location.split(",");
    Taro.openLocation({
      latitude: parseFloat(locArr[1]),
      longitude: parseFloat(locArr[0]),
      name: data.info.address,
      address: data.info.address,
      scale: 18
    })
  }
  return(
    <detailContext.Provider value={value}>
      {isAuth && <Auth />}
    <View className='resumeDetail'>
      {/* 顶部 */}
      <View className='resumeDetail-cardcolore'>
        {data.operation.status === 0 && <View className='resumeDetail-header'>注:老板对找活者满意，可以直接与他联系以及点赞或转发</View> }
        {data.operation.status === 1 && <View className='resumeDetail-header'>注:分享名片 让您的名片排名更靠前</View>}
      </View>
      {/* 基础信息 */}
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image'  src={`${IMGCDNURL}newresume-catimg.png`}/>
            <Text className='resumeDetail-findingnamecardthreemobile-text tips'>基础信息</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      <View className='resumeDetail-basics'>
        <View className='resumeDetail-basics-heard'>
          <Image className='resumeDetail-basics-heard-img' src={data.info.headerimg}/>
          <View>
              <View className='resumeDetail-basics-heard-username'>
              {data.info.username}
              {data.info.authentication === '2' && <Image className='resumeDetail-basics-img' src={`${IMGCDNURL}new-list-realname-icon.png`}/>}
              {data.info.certificate_show === 1 && <Image className='resumeDetail-basics-img' src={`${IMGCDNURL}new-list-jnzs-icon.png`} />}
            </View>
              <View className='resumeDetail-basics-heard-content'>{data.info.gender && (data.info.gender === '1'?'男':'女') } {age} {data.info.nation}</View>
          </View>
        </View>
        <View className='lineone'>
          <View className='linezo'>
          <View className='cardotext-position'>
          <View className='cardotext'>
              <Text className='oworkotext'>手机</Text>
              <Text className='workotextone'>{phone}</Text>
            {examine || !onoff && data.info.is_read === 1 && data.info.is_end !='2' && data.operation.status === 0  &&
              <Text className='clioktel' onClick={handlePhone}>查看完整电话</Text>
            }
          {onoff && 
          <View className='flex'>
            <Text className='resumeDetail-basics-list-tel' onClick={() => Taro.makePhoneCall({ phoneNumber: phone })}>点击拨打</Text>
            <Text className='clioktelList-right' onClick={() => handleComplaint()}>举报</Text>
          </View>
          }
          {/* {onoff &&
            <Text className='clioktel-left' onClick={() => Taro.makePhoneCall({ phoneNumber: phone })}>点击拨打</Text>
          }
          {onoff &&
            <Text className='clioktelList-right' onClick={() => setComplaintModal(true)}>举报</Text>
          } */}
          {/* { onoff &&
              <Text className='cliok'>
                <Text className='resumeDetail-basics-list-tel' onClick={() => Taro.makePhoneCall({ phoneNumber: phone })}>点击拨打</Text>
                <Text className='resumeDetail-basics-list-report' onClick={() => { setComplaintModal(true)}}>举报</Text>
              </Text>
            } */}
          </View>
          </View>
            <View className='cardotext-position'>
            {data.info.hometown && 
              <View className='cardotext'>
              <Text className='oworkotext'>我的家乡</Text>
              <Text className='workotextone'>{data.info.hometown}</Text>
              </View>
            }
            </View>
            <View className='cardotext-position'>
            {data.info.occupations.length && 
              <View className='cworkotype'>
              <Text className='ocworkotype'>工种</Text>
              <View className='ocworkotypeoo'>
                <View className='ocworkotyp'>
                {data.info.occupations.map((v,i)=>(
                  <View className='ocworkotyptu' key={i+i}>{v}</View>
                ))}
                </View>
              </View>
            </View>
            }
            </View>
            <View className='cardotext-position'>
            {data.info.experience && 
              <View className='cardotext'>
              <Text className='oworkotext'>工龄</Text>:
              <Text className='workotextone'>{data.info.experience}</Text>
            </View>
            }
            </View>
            <View className='cardotext-position'>
            {data.info.prof_degree_str && 
              <View className='cardotext'>
              <Text className='oworkotext'>熟练</Text>:
              <Text className='workotextone'>{data.info.prof_degree_str}</Text>
            </View>
            }
            </View>
            <View className='cardotext-position'>
            {data.info.type_str && 
              <View className='cardotext'>
              <Text className='oworkotext'>人员构成</Text>:
              <Text className='workotextone'>{data.info.type_str}</Text>
            </View>
            }
            </View>
            <View className='cardotext-position'>
          {data.info.number_people && 
              <View className='cardotext'>
              <Text className='oworkotext'>队伍人数</Text>:
              <Text className='workotextone'>{data.info.number_people}</Text>
            </View>
          }
          </View>
            <View className='cardotext-position'>
          {data.info.address &&
            <View className='cardotext'>
              <Text className='oworkotext'>所在地区</Text>:
            <Text className='workotextone-address'>{data.info.address}</Text>
            {/* 地图 */}
            {data.info.distance && 
            <View onClick={handleMap}>
              <Image className='workotextone-address-img' src={`${IMGCDNURL}lpy/biaoqian.png`}/>
              {data.info.distance}
            </View>
            }
          </View>
          }
          </View>
          <View className='cardotext-position'>
          {data.info.tags.length && 
            <View className='cardotext'>
            <Text className='oworkotext'>标签</Text>:
            <Text className='workotextone'>
            {data.info.tags.map(v=>(
              <Text className='resumeDetail-basics-list-right-labelName' key={v.id}>{v.label_name}</Text>
            ))}
            </Text>
          </View>
          }
          </View>
        </View>
        </View>
      </View>
      {/* 自我介绍 */}
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
            <Text className='resumeDetail-findingnamecardthreemobile-text tips'>自我介绍</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      <View className='resumeDetail-introduce'>
        {data.info.introduce||'暂未填写'}
      </View>
      {/* 项目经验 */}
      {data.project.length &&
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
              <Text className='resumeDetail-findingnamecardthreemobile-text tips'>项目经验</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      }
      {data.project.length &&
        <View className='resumeDetail-experience'>
          <View>
          <View className='resumeDetail-experience-title'><Image className='resumeDetail-image' src={`${IMGCDNURL}lpy/newresume-experience-item.png`} />{data.project[0].project_name}</View>
            <View className='resumeDetail-experience-content'>
              <View className='resumeDetail-experience-content-list'>{data.project[0].start_time}-{data.project[0].completion_time}</View>
              <View className='resumeDetail-experience-content-list'>{data.project[0].detail}</View>
            </View>
          <View className="resumeDetail-experience-img-box">
              {data.project[0].image.map((v,i)=>(
                <Image className='resumeDetail-experience-img' key={i + i} src={v} onClick={() => handleImg(v)}/>
              ))}
            </View>
          <View className='resumeDetail-more-box'>
              <View className='resumeDetail-more' onClick={() => Taro.navigateTo({ url: '/subpackage/pages/projects/index'})}>更多项目经验
                <Image src={`${IMGCDNURL}lpy/downward.png`} className="down"/>
              </View>
            </View>
          </View>
        {/* {data.project.map((v)=>(
          <View key={v.id}>
            <View className='resumeDetail-experience-title'><Image className='resumeDetail-image' src={`${IMGCDNURL}lpy/newresume-experience-item.png`}/>{v.project_name}</View>
            <View className='resumeDetail-experience-content'>
              <View className='resumeDetail-experience-content-list'>{v.start_time}-{v.completion_time}</View>
              <View className='resumeDetail-experience-content-list'>{v.detail}</View>
            </View>
          </View>
        ))} */}
      </View>
        }

      {/* 职业技能 */}
      {data.certificates.length &&
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
              <Text className='resumeDetail-findingnamecardthreemobile-text tips'>职业技能</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      }
      {data.certificates.length &&
        <View className='resumeDetail-skill'>
          <View>
            <View className='resumeDetail-experience-title'>
              <Image className='resumeDetail-image' src={`${IMGCDNURL}lpy/newresume-experience-item.png`} />
            {data.certificates[0].name}
            </View>
            <View className='resumeDetail-experience-content'>
            <View className='resumeDetail-experience-content-list'>{data.certificates[0].certificate_time}</View>
              <View>
              {data.certificates[0].image.map((val, i) => (
                <Image key={i + i} src={val} className='resumeDetail-skill-image' onClick={() => handleImg(val)}/>
                ))}
              </View>
            </View>
          <View className='resumeDetail-more-box'>
              <View className='resumeDetail-more' onClick={() => Taro.navigateTo({ url: '/subpackage/pages/skills/index' })}>
                更多技能证书
                <Image src={`${IMGCDNURL}lpy/downward.png`} className="down" />
              </View>
            </View>
        </View>
      </View>
        }
      {/* 相关推荐 */}
      {/* <View className='resumeDetail-recommend'>
        <View className='resumeDetail-recommend-top'>
          <Text className='resumeDetail-recommend-top-text'>相关推荐</Text></View>
      </View> */}
      {/* {list.item.length &&
      <CollectionRecruitList data={list.item} type={2}/>
      } */}
      {/* <View className='resume-list-container'>
      {list.item.map(item=>(
        <Block key={item.id}>
          {
            <View className='resume-list-item' key={item.id}>
              <View className='resume-list-header'>
                <Image className='resume-list-user' src={item.headerimg} />
                <View className='resume-list-userinfo'>
                  <View className='resume-list-userinfo-detail'>
                    <Text className='resume-userinfo-name'>{item.username}</Text>
                    <Text className='resume-userinfo-birthday'>{item.birthday}岁</Text>
                    {item.certificate == 1 && < Image className='resume-userinfo-img' src={`${IMGCDNURL}newresume-infolist-jnz.png?t=1`} />}
                  </View>
                  <Text className='resume-list-type'>{item.type}</Text>
                  <View className='resume-otherinfo'>
                    <Text className='resume-otherinfo-text'>{item.nation}</Text>
                    <Text className='resume-otherinfo-text'>{item.experience}</Text>
                  </View>
                </View>
              </View>
              <View className='resume-list-works'>
                {item.occupations.map((v,i)=>(
                  <Text className='resume-list-words-text' key={i+i}>{v}</Text>
                ))}
              </View>
              <View className='resume-list-content overwords'>{item.introduce}</View>
              <View className='resume-list-footer'>
                <View className='resume-list-footer-flex'>
                  <Image className='resume-list-loc' src={IMGCDNURL + 'lpy/biaoqian.png'} />
                  <View className='resume-list-loctxt overwords'>{item.show_address}</View>
                </View>
                <Text className='resume-list-time'>{item.prof_degree}</Text>
              </View>
            </View>
          }
        </Block>
      ))}
        <View className="seemore-recommend-recruit">查看更多找活信息</View>
      </View> */}
      {/* 底部 */}
      <View className='resumeDetail-footer'>
        <View className='resumeDetail-footer-box' onClick={resumeSupport}>
          <Image className="bossimg" src={praise === 0 ? `${IMGCDNURL}newresume-footer-star.png` : `${IMGCDNURL}newresume-footer-star-active.png`} />
          <View>赞</View>
        </View>
        <View className='resumeDetail-footer-box'>
          <Image className="bossimg" src={`${IMGCDNURL}newresume-footer-share.png`} />
          <View>分享</View>
        </View>
        <View className='resumeDetail-footer-box' onClick={resumeCollect}>
          <Image className="bossimg" src={collect === 0 ? `${IMGCDNURL}newresume-footer-collect.png` : `${IMGCDNURL}newresume-footer-collect-active.png`}/>
          <View>收藏</View>
        </View>
      </View>
      {/* 弹框 */}
        {shownewtips && 
        <View className="newdetail-fixedshadow">
          <View className="newdetail-fixed-content" >
            <View className="newdetail-tips-box">
              <View className="newdetail-tips-header">鱼泡网提醒</View>
              <View className="newdetail-tips-body">
                <View className="newdetail-tips-item">
                  <View className="newdetail-tips-title">工作前</View>
                  <View className="newdetail-tips-text">确认好对方身份、签好合同，招工、找活中不要交任何费用。</View>
                </View>
                <View className="newdetail-tips-item">
                  <View className="newdetail-tips-title">工作中</View>
                  <View className="newdetail-tips-text">拍照、录视频留有证据！若双方发生经济纠纷，请立即报警或前往劳动局投诉，鱼泡网可配合调查，但概不负责。</View>
                </View>
              </View>
            </View>
            <View className="newdetail-tips-footer">
              <View className="newdetail-footer-item" onClick={()=>{setShownewtips(false)}}>暂不提示</View>
              <View className="newdetail-footer-item" onClick={handleTellPhone}>拨打电话</View>
            </View>
          </View>
        </View>
        }
        {/* 投诉 */}
        {complaintModal && <Report display={complaintModal} textarea={textarea} handleTextarea={handleTextarea} setComplaintModal={setComplaintModal} 
          handleSubmit={handleSubmit}/>
        }
    </View>
    </detailContext.Provider>
  )
}

ResumeDetail.config = {
  navigationBarTitleText: '找活名片',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config