import{request} from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧菜单数据
    leftMenuList:[],
    // 右侧商品数据
    rightContent:[]

  },
  // 接口的返回数据
  Cates:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCates();
  },
  // 获取分类数据
  getCates(){
    request({
      url:"https://api.zbztb.cn/api/public/v1/categories"
    })
    .then(res =>{
      this.Cates=res.data.message;

      // 构造左侧的大菜单数据
      let leftMenuList=this.Cates.map(v=>v.cat_name);
      // 构造右侧的商品数据
      let rightContent=this.Cates[0].children;
      this.setData({
        leftMenuList,
        rightContent
      })
    })
  }
  
})