  let ajaxTimes = 0;
  export const request=(params)=>{
    ajaxTimes++;
    // 显示加载中
    wx.showLoading({
      title: '加载中',
      mask:true
    });

    
    const baseUrl="http://157.122.54.189:9087/api/public/v1";
      return new Promise((resolve,reject)=>{
          wx.request({
              ...params,
              url:baseUrl+params.url,

              success:(result)=>{
                resolve(result.data.message);
              },
              fail:(err)=>{
                  reject(err);
              },
              complete:()=>{
                ajaxTimes--;
                // 关闭正在等待图标
                if(ajaxTimes===0){
                  wx.hideLoading();
                }
              }
          });
      })
  }