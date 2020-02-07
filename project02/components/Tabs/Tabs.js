// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   * properties从父组件接受的数据
   */
  properties: {
    // aaa:{
    //   type:String,
    //   value:""
    // }
    tabs:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
   

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      // console.log(e)
      const {index}=e.currentTarget.dataset;//解构,直接获取的是{index：1}

      this.triggerEvent('itemChange',{index});
      
      // console.log(this.data)
      let {tabs}=this.data;
      // console.log(list)
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);  
      console.log(tabs[0].isActive)
      this.setData({
        tabs
      })
    }

  }
})
