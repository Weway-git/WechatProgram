// pages/demo14/demo14.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:"",
    list:[
      {
        id:0,
        name:"苹果",
        value:"apple"
      },
      {
        id:1,
        name:"葡萄",
        value:"purple"
      },
      {
        id:2,
        name:"香蕉",
        value:"banana"
      }
    ],
    checklist:[]
  },
  handlechange(e){
    console.log(e.detail)
    let gender = e.detail.value;
    this.setData({
      // gender:gender
      gender
    })
  },
  handleItemChange(e){
    console.log(e);
    const checklist=e.detail.value;
    this.setData({
      checklist
    })
  }

  /**
   * 生命周期函数--监听页面加载
   */
  
})