import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { useReady, useDidShow, useDidHide, usePullDownRefresh } from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'
import Taro from "@tarojs/taro";
// import './index.scss'
function Index() {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Hooks】
  usePullDownRefresh(() => {})
  //点击搜索则跳转至搜索界面
  const goSearchPage = ()=>{
    Taro.navigateTo({
      url: '/pages/search/index',
    })
  }
  return (
    <View className="index">
      <View onClick={goSearchPage}>
        <AtSearchBar 
        disabled='true'
        >
          搜索
        </AtSearchBar>
      </View>
    </View>
  )
}

export default Index