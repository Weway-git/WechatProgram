//Page Object
import{request} from "../../request/index.js";
Page({
  data: {
    // 轮播图数组
    swiperList:[],
    // 导航数组
    catesList:[],
    // 楼层数据
    floorList:[]
  },
  //options(Object)
  onLoad: function (options) {
    // wx.request({
    //   url: '/home/swiperdata',
    //   success: (result)=>{
    //     // console.log(result);
    //     this.setData({
    //       swiperList:result
    //     })
    //   }
    // });

    // request({ url: "/home/swiperdata" })
    //   .then(result =>
    //     this.setData({
    //       swiperList: result
    //     }))
    // // .then()
    this.getSwiperList();
    this.getCatesList();
    this.getFloorList();
  },
  // 获取轮播图数据
  getSwiperList(){
    request({ url: "/home/swiperdata" })
    .then(result =>
      this.setData({
        swiperList: result
      }))
  },
  // 获取导航数组数据
  getCatesList(){
    request({ url: "/home/catitems" })
    .then(result =>
      this.setData({
        catesList: result
      }))
  },
  // 获取楼层数据
  getFloorList(){
    request({ url: "/home/floordata" })
    .then(result =>
      this.setData({
        floorList: result
      }))
  }
});
