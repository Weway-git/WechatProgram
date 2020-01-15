// pages/demo14/demo14.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:""
  },
  handlechange(e){
    console.log(e.detail)
    let gender = e.detail.value;
    this.setData({
      // gender:gender
      gender
    })
  }

  /**
   * 生命周期函数--监听页面加载
   */
  
})