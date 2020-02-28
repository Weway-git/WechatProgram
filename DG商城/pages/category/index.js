import { request } from "../../request/index.js";
Page({
  data: {
    // 左侧的菜单数据
    leftMenuList: [],
    // 右侧的商品数据
    rightContent: [],


  },
  // 接口的返回数据
  Cates: [],
  onLoad: function (options) {
    const Cates = wx.getStorageSync("cates");
    if(!Cates){
      // 不存在
      this.getCates();
    }else{
      // 有旧数据
      if (Date.now() - Cates.time > 1000 * 10){
        this.getCates()
      }else{
        // 可以使用旧的数据
        this.Cates = Cates.data;
        let leftMenuList = this.Cates.map(v => v.cat_name);
        let rightContent = this.Cates[0].children
        this.setData({
          leftMenuList,
          rightContent
        })

      }
    }

  },
 async getCates() {
    // request({
    //   url:"/categories"
    // })
    //  .then(res => {
    //    this.Cates = res.data.message;
    //   //  接口数据存入本地storage中
    //    wx.setStorageSync("cates",{time:Date.now(),data:this.Cates});


    //   //  构造左侧的大菜单数据
    //   let leftMenuList = this.Cates.map(v => v.cat_name);
    //   // 构造右侧的商品数据
    //   let rightContent = this.Cates[0].children
    //   this.setData({
    //     leftMenuList,
    //     rightContent
    //   })
    //  })

    // 1使用es7 await
    const res=await request({url:"/categories"});
       this.Cates = res;
       //  接口数据存入本地storage中
       wx.setStorageSync("cates", { time: Date.now(), data: this.Cates });
       //  构造左侧的大菜单数据
       let leftMenuList = this.Cates.map(v => v.cat_name);
       // 构造右侧的商品数据
       let rightContent = this.Cates[0].children
       this.setData({
         leftMenuList,
         rightContent
       })
  },
  // 获取分类数据
  
  // 左侧菜单的点击事件
  handleItemTap(e) {
    /* 
    1 获取被点击的标题身上的索引
    2 给data中的currentIndex赋值就可以了
    3 根据不同的索引来渲染右侧的商品内容
     */
    const { index } = e.currentTarget.dataset;

    let rightContent = this.Cates[index].children;
    this.setData({
      currentIndex: index,
      rightContent,
    })

  }
})