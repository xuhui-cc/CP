//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    classify: ["判断", "语言", "数量", "资料", "申论"],
    current_classify:0
  },
  //事件处理函数
  
  onLoad: function () {

  },

  to_my: function () {
    wx.navigateTo({
      url: '../../pages/my/my',
    })
  },
  swichNav: function (e) {
    var that = this
    var cur = e.target.dataset.current;
    
    that.setData({
      current_classify: cur
    })
    console.log(that.data.current_classify)
    // }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。 
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  
})
