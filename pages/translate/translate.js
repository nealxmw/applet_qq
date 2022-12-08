//index.js
import { en2zh } from '../../utils/youdao.js'
const app = getApp()
const innerAudioContext = qq.createInnerAudioContext()
const audioPath = 'https://dict.youdao.com/dictvoice?audio='
Page({
  data: {
    langList: [
      { key: 'zh-CHS', value: '中文' },
      { key: 'en', value: '英语' }
    ],
    langIndex: 0,
    tolangIndex: 1,
    isInput: false,
    inputText: '',
    outputText: '',
    isListen: false
  },
  // 原语言
  langPickerChange (e) {
    if (e.detail.value) {
      this.setData({
        langIndex: Number(e.detail.value)
      })
    }
  },
  // 翻译语言
  tolangPickerChange (e) {
    if (e.detail.value) {
      this.setData({
        tolangIndex: Number(e.detail.value)
      })
    }
  },
  // 语言互换
  switchLang () {
    let index = this.data.langIndex
    let _index = this.data.tolangIndex
    this.setData({
      langIndex: _index,
      tolangIndex: index
    })
  },
  // 输入
  inputInput (e) {
    this.setData({
      inputText: e.detail.value,
      outputText: ''
    })
  },
  // 确认输入
  confirmInput (e) {
    console.log(e.detail.value)
    let _this = this
    if (e.detail.value) {
      this.setData({
        inputText: e.detail.value
      })
      // 翻译
      qq.request({
        url: 'https://openapi.youdao.com/api', // 仅为示例，并非真实的接口地址
        data: en2zh(this.data.inputText, this.data.langList[this.data.langIndex].key, this.data.langList[this.data.tolangIndex].key),
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (e) {
          console.log(e.data, 'youdao')
          _this.setData({
            outputText: e.data.translation[0]
          })
          // qq.showModal({
          //   title: '结果',
          //   content: e.data.translation[0],
          //   showCancel: false
          // })
        }
      })
    }
  },

  //  听读音
  listen () {
    console.log(audioPath + this.data.outputText.replaceAll(" ", "_"))
    innerAudioContext.src = audioPath + this.data.outputText.replaceAll(" ", "_")
    this.setData({
      isListen: true
    })
    innerAudioContext.play()
    setTimeout(() => {
      this.setData({
        isListen: false
      })
    }, 1500)
  },
  copy () {

  },
  onLoad: function () {
    // 数据初始化
  }
})
