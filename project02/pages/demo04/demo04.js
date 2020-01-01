// pages/demo04/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0

  },
  // 输入input的执行逻辑
  handleinput(e){
    this.setData({
      num: e.detail.value
    })
  },
  handletap(e){
    // console.log(e.currentTarget.dataset.opration)
    const opration=e.currentTarget.dataset.opration;
    this.setData({
      num: this.data.num + opration
    })
  },

  // 清空钱包
  HandletapZero(e) {
    // console.log(e.currentTarget.dataset.opration)
    const opration = e.currentTarget.dataset.opration;
    this.setData({
      num: 0
    })
  }
  
})