//Page Object
import{request} from "../../request/index.js";
Page({
  data: {
    // 轮播图数组
    swiperList:[],
    // 导航数组
    catesList:[]
  },
  //options(Object)
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    //   success: (result)=>{
    //     // console.log(result);
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // });

    // request({ url: "https://api.zbztb.cn/api/public/v1/home/swiperdata" })
    //   .then(result =>
    //     this.setData({
    //       swiperList: result.data.message
    //     }))
    // // .then()
    this.getSwiperList();
    this.getCatesList();
  },
  // 获取轮播图数据
  getSwiperList(){
    request({ url: "https://api.zbztb.cn/api/public/v1/home/swiperdata" })
    .then(result =>
      this.setData({
        swiperList: result.data.message
      }))
  },
  // 获取导航数组数据
  getCatesList(){
    request({ url: "https://api.zbztb.cn/api/public/v1/home/catitems" })
    .then(result =>
      this.setData({
        catesList: result.data.message
      }))
  }
});
