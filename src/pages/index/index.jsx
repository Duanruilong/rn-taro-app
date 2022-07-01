import { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import user from "../../assent/user1.png";
import './index.less'

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
         <Image  src={user} mode='aspectFit' />
      </View>
    )
  }
}
