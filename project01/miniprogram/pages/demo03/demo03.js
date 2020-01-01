
let that;
Component({
  properties: {
    // 初始化的输入框的值
    value: {
      type: String,
      value: '',
      observer(new_value, old_value) {
        this.data.value = new_value;
        this.triggerEvent("hgchange", this.data.value);
      }
    },
    placeholder: {
      type: String,
      value: '请输入'
    },
    //类型，默认为text
    type: {
      type: String,
      value: "text"
    }
  },
  ready() {
    that = this;
  },
  methods: {
    // input事件
    hginput: function (e) {
      if ((e.detail.value * 10) % 10 == 0) {     //判断是否为正整数
        app.globalData.num = e.detail.value //num为全局变量 将输入的值赋给num
      }
      else {
        console.log("！");
      }
    },

    }, // commit事件
    // hgconfirm: function (data) {
    //   this.triggerEvent("hgconfirm", this.data.value);
    // },
    // clearValue: function () {
    //   this.setData({
    //     value: ''
    //   })
    //   this.triggerEvent("hgchange", '');
    // },
  mimi: function (e) {
    if (app.globalData.num == 0) {    		//检验是否赋值成功
      console.log("请输入人数！");
    }
    else {
      console.log(app.globalData.num);
    }
  }
  })
