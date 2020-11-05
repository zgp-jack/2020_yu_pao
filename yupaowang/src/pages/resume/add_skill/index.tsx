import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Form, Textarea, Input, Picker, Button } from '@tarojs/components'
import WordsTotal from '../../../components/wordstotal'
import useResumeAddInfo from '../../../hooks/resume_addinfo'
import { RecruitImageModel } from '../../recruit/index.d'
import UploadImgAction from '../../../utils/upload'
import { resumesCertificateAction } from '../../../utils/request'
import ImageView from '../../../components/imageview'
import { CertificateImgMaxNum, CertificateMaxNum } from '../../../config'
import { useSelector, useDispatch } from '@tarojs/redux'
import { useResumeType } from '../../../actions/resume_data'
import './index.scss'
import Msg, { ShowActionModal } from '../../../utils/msg'

interface SkillBookInfoType {
  title: string,
  time: string,
  imgs: RecruitImageModel[]
}

export default function AddResumeInfo() {

  const resumeData: useResumeType = useSelector<any, useResumeType>(item => item.resumeData)

  // 保留一份默认数据， 方便我们继续添加的时候使用
  const defaultSkillBookData: SkillBookInfoType  = {
    title: '',
    time: '',
    imgs: []
  }

  // 技能证书信息
  const [skillBookInfo, setSkillBookInfo] = useState<SkillBookInfoType>(defaultSkillBookData)
  // 是否显示保存继续添加 总数是否大于等于 最大数量-1
  const [showBtn, setShowBtn] = useState<boolean>(resumeData.certificates.length >= CertificateMaxNum - 1  ? false : true)

  // 用户输入技能证书标题
  const userEnterFrom = (e: any) => {
    let title: string = e.detail.value;
    setSkillBookInfo({...skillBookInfo,title:title})
  }

  // 用户选择 领证时间
  const onPickerChange = (e: any) => { 
    let time: string = e.detail.value;
    setSkillBookInfo({ ...skillBookInfo, time: time })
  }

  // 用户删除图片
  const useDelImg = (i: number) => {
    let imgs: RecruitImageModel[] = {...skillBookInfo.imgs}
    imgs.splice(i,1)
    setSkillBookInfo({...skillBookInfo,imgs: imgs})
  }

  // 用户上传图片
  const userUploadImg = (i: number) => {
    UploadImgAction().then(res => {
      let imageItem: RecruitImageModel = {
        url: res.url,
        httpurl: res.httpurl
      }
      if (i === -1) { // -1 代表上传 其他代表当前图片下标
        setSkillBookInfo({ ...skillBookInfo, imgs: [...skillBookInfo.imgs, imageItem] })
      } else {
        skillBookInfo.imgs[i] = imageItem
        setSkillBookInfo({ ...skillBookInfo })
      }
    })
  }

  // 用户提交技能证书 type 区分是继续添加还是直接保存
  const userSubmitSkillBook = (type: number) => {
    if(!skillBookInfo.title){
      Msg('请输入技能证书名称')
      return 
    }
    if (!skillBookInfo.time) {
      Msg('请选择领证时间')
      return
    } 
    if (!skillBookInfo.imgs.length) {
      Msg('请上传技能证书图片')
      return
    }
    resumesCertificateAction({
      resume_uuid: resumeData.resume_uuid,
      image: skillBookInfo.imgs.map(item => item.url),
      name: skillBookInfo.title,
      certificate_time: skillBookInfo.time
    }).then(res => {
      if(res.errcode == 'ok'){
        if(type === 1){
          ShowActionModal({
            msg: res.errmsg,
            success: ()=> {
              Taro.navigateBack()
            }
          })
        }else{
          Msg(res.errmsg)
        }
        if (res.count >= CertificateMaxNum-1){
          setShowBtn(false)
        }
      }else{
        console.log('失败')
        Msg(res.errmsg)
      }
    })
  }

  // 用户点击取消按钮
  const userBack = () => {
    Taro.navigateBack()
  }

  return (
    <View className='resume-addinfo-container'>
      <View className='resume-addinfo-form'>
        <View className='publish-recruit-container'>
          <Form>
            <View className='resume-addinfo-body'>
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>职业技能</Text>
                <Input
                  className='publish-list-input'
                  type='text'
                  placeholder='请填写职业技能名称'
                  value={skillBookInfo.title}
                  onInput={(e) => userEnterFrom(e)}
                />
              </View>
              
              <View className='publish-list-item' >
                <Text className='pulish-list-title'>领证时间</Text>
                <Picker
                  mode="date"
                  value={skillBookInfo.time}
                  range-key="name"
                  onChange={(e) => onPickerChange(e)}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择领证时间' value={skillBookInfo.time} />
                </Picker>
              </View>
              
            </View>
            <View className='resume-add-imgsview'>
              <ImageView 
                images={skillBookInfo.imgs} 
                max={CertificateImgMaxNum} 
                userDelImg={(i)=>useDelImg(i)} 
                userUploadImg={(i) => userUploadImg(i)}
              />
            </View>
          </Form>
        </View>
      </View>
      <View className='resume-add-skill-footer'>
        {showBtn ? 
        <View className='resume-add-skill-btn' onClick={() => userSubmitSkillBook(1)}>保存 继续添加</View>
        :
        <View className='resume-add-skill-btn' onClick={() => userBack()}>取消</View>
        }
        <View className='resume-add-skill-btn' onClick={() => userSubmitSkillBook(2)}> 确认保存</View>
      </View>
    </View>
  )
}