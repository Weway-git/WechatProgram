// pages/goods_list/index.js
import { request } from "../../request/index.js";

Page({

  
  data: {
    tabs:[
      {
        id:0,
        value:"综合",
        isActive:true
      },
      {
        id:1,
        value:"销量",
        isActive:false
      },
      {
        id:2,
        value:"价格",
        isActive:false
      },
      
    ],
    goodsList:[]

  },
  // 接口要的参数
  QueryParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10,
  },
  totalPages:1,
  handleTabsItemChange(e){
    console.log("tabs",e);
    // 获取被点击的索引
    const {index} = e.detail;
    // 修改原数组
    let {tabs}=this.data;
    tabs.forEach((v,i) => i===index?v.isActive=true:v.isActive=false);
    // 赋值给data
    this.setData({
      tabs
    })

  },
  onReachBottom(){
    // console.log("页面触底");
    if(this.QueryParams.pagenum>=this.totalPages){
      // 没有下一页数据
      //  console.log('%c'+"没有下一页数据","color:red;font-size:100px;background-image:linear-gradient(to right,#0094ff,pink)");
       wx.showToast({title:"没有下一页数据了"});
    }else{
      this.QueryParams.pagenum++;
      this.getGoodsList();
     
    }

  },
  onLoad: function (options) {
    // console.log(options)
    this.QueryParams.cid=options.cid;
    this.getGoodsList();
    wx.showLoading({
      title: '加载中',
    })
    
    setTimeout(function () {
      wx.hideLoading()
    }, 5000)

  },
  // 获取商品列表数据
  async getGoodsList(){
    const res=await request({url:"/goods/search",data:this.QueryParams})
    // console.log(res)
    const total = res.total;
    this.totalPages=Math.ceil(total/this.QueryParams.pagesize)
    console.log(this.totalPages);

    this.setData({
      goodsList:[...this.data.goodsList, ...res.goods]
    })

  }

  
})