import React from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.css'

interface IProps {
  children?: React.ReactNode
}

const App: React.FC<IProps> = ({ children }) => {
  useLaunch(() => {
    console.log('App launched.')
  })

  return children
}

export default App
