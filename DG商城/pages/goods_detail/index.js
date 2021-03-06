// pages/goods_detail/index.js
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj:{}

  },
  // 商品对象
  GoodsInfo:{},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {goods_id}=options;
    console.log(goods_id)
    this.getGoodsDetail(goods_id) 

  },
  // 获取商品详情
  async  getGoodsDetail(goods_id){

      const goodsObj=await request({url:"/goods/detail",data:{goods_id}});
      this.GoodsInfo=goodsObj;
      // console.log(goods_id)
      // console.log("goodObj:",goodsObj)
      this.setData({
        goodsObj:{
          goods_name:goodsObj.goods_name,
          goods_price:goodsObj.goods_price,
          goods_introduce:goodsObj.goods_introduce,
          pics:goodsObj.pics
        }
      })
      },
  // 点击轮播图方法预览
  handlePreviewImage(e){
    // 构造预览的图片数组
    const urls = this.GoodsInfo.pics.map(v=>v.pics_mid);
    // 接受传递过来的图片url
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current, // 当前显示图片的http链接
      urls, // 需要预览的图片http链接列表
    })
  },
  // 点击加入购物车
  handleCartAdd(e){
    // 获得缓存中的购物车数组
    let cart=wx.getStorageSync("cart")||[];
    // 判断商品对象是否存在购物车数组
    let index=cart.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id);
    if(index===-1){
      // 不存在，第一次添加
      this.GoodsInfo.num=1;
      cart.push(this.GoodsInfo);
    }else{
      // 已经存在
      cart[index].num++;

    }
    wx.setStorageSync("cart",cart);
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask: true
    });


  }
  

  
})