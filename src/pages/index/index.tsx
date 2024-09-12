import React from 'react'
import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

interface IProps { }

const Index: React.FC<IProps> = () => {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}

export default Index
