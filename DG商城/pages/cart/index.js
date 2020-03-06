/*
  获取用户收货地址
    绑定点击事件
    调用内置api获取收货地址

    2.获取当前用户对小程序 所授予 获取地址权限的状态scope
      1.假设用户一开始获取收货地址提示框 确定  scope值为true  authSetting
      2.点取消 是false
        诱导用户打开授权设置
      3。从来没有调用过 undefined
*/
import{getSetting, chooseAddress, openSetting} from "../../utils/asyncWx.js";

Page({
  data:{
    address:[],

  },
  onShow(){
    // 获取缓存收货信息
    const address=wx.getStorageSync("address");
    // gei data赋值
    this.setdata({
      address
    })

  },


 async handleChooseAddress() {
    // wx.getSetting({
    //   success: (result) => {
    //     // 获取权限状态 只要发现属性名很怪异，都要用中括号来获取
    //     const scopeAddress = result.authSetting["scope.address"];
    //     if (scopeAddress === true || scopeAddress === undefined) {
    //       wx.chooseAddress({
    //         success: (result1) => {
    //           console.log(result1) c
    //         },
    //       });
    //     } else {
    //       // 3用户曾经拒绝过
    //       wx.openSetting({
    //         success: (result2)=>{
    //           wx.chooseAddress({
    //             success: (result3) => {
    //               console.log(result3)
    //             },
    //           });
    //         },
    //       });
    //     }
    //   }
    // });

    // 获取 权限状态

  try {
    const res1=await getSetting();
    const scopeAddress = res1.authSetting["scope.address"]
    // 判断权限状态
    if (scopeAddress === false) {
      // 诱导用户打开授权设置
      await openSetting();
    }else{
      // 调用获取收货地址的api
    }
    const address=await chooseAddress();
    // 存入到缓存中
    wx.setStorageSync("address", address);
  } catch (error) {
    console.log(error);
    
  }

    
  }
})
