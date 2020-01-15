// pages/demo13/demo13.js
Page({

  data: {
    

  },

  getPhoneNumber(e){
    console.log(e);
  },
  getUserInfo(e){
    console.log(e.detail.userInfo);
    const userInfo = e.detail.userInfo
    this.setData({
      name: userInfo.nickName,
      city: userInfo.city,
      province: userInfo.province,
      userID:"******************",
      phoneNumber:"1**********"
    })
  }




})