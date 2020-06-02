import Taro, { Config, useState, useEffect, useRouter, useDidShow } from '@tarojs/taro'
import { View, Text, Image, Block, Button, Textarea } from '@tarojs/components'
import { resumeListAction } from '../../../utils/request/index'
import WechatNotice from '../../../components/wechat'
import { IMGCDNURL, SERVERPHONE } from '../../../config'
import { isVaildVal } from '../../../utils/v'
import Msg from '../../../utils/msg'
import { resumeDetailCertificates, resumeDetailProject, resumeDetailOperation, recommendListDataList } from '../../../utils/request/index.d'
import './index.scss'

interface DataType {
  id:string,
  check:string,
  name:string,
  fail_case:string,
  certificate_time:string,
  image:[]
}
export default function SkillList() {
  // 刷新一次
  const [refresh, setRefresh] = useState<boolean>(false)
  // 数据
  const [data, setData] = useState<DataType[]>([])
  const [resume_uuid, setResume_uuid] = useState<string>('')

  useDidShow(() => {
    if (refresh) {
      setRefresh(false)
      return
    }
    resumeListAction().then(res => {
      setData(res.data.certificates)
      setResume_uuid(res.data.info.user_uuid);
    })
  })
  // 点击方法
  const handleImg = (e: string) => {
    Taro.previewImage({
      current: e,
      urls: [e]
    })
    setRefresh(true)
  }
  return (
    <View>
      {data.map(item=>(
        <View key={item.id} className='skilleight'>
          {item.check == '1' && <Image className='audit' src={`${IMGCDNURL}lpy/review.png`} />}
          {item.check == '0' && <Image className='audit' src={`${IMGCDNURL}lpy/notthrough.png`} />}
          {item.check == '2' && <View className='editor'>编辑</View>}
          {item.check == '0' && <View className='editorone'>待修改</View>}
          <View className="skilleightzong">
            <View>
              <Image src={`${IMGCDNURL}lpy/newresume-experience-item.png`} className='skilleightone' />
            </View>
            <View className="skilleightall">
              <View className="skilleighttwo">
                <Text className='skilleighttwo-text'>{item.name}</Text>
              </View>
              <View className='skillcertificate'>
                <Text>{item.certificate_time}</Text>
              </View>
              <View className="skilleightfive">
                <View className="skilleightfiveline">
                  <View className='temimage'>
                    {item.image.map((v, i) => (
                      <Image className='skilleightfive-image' src={v} key={i + i} onClick={() => handleImg(v)} />
                    ))}
                  </View>
                </View>
              </View>
              {item.check == '0' &&
                <View className="resson">
                  未通过原因：{item.fail_case}
                </View>
              }
            </View>
          </View>
        </View>
      ))}
      {data.length < 3 && resume_uuid !== '' && 
      <View className='footer-box'>
        <Button className='footer'>添加技能经验</Button>
      </View>
    }
    </View>
  )
}
SkillList.config = {
  navigationBarTitleText: '技能证书',
} as Config