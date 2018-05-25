// pages/main/canvas/canvas.jsc
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
      url:'../../../img/cord.jpg',
      bg_url:'../../../img/bg_img.jpg',
      context:'',
      poster:[
          {
              id:0,
              url:'../../../img/bg_img.jpg'
          },
          {
              id:1,
              url:'../../../img/bg_img02.jpg'
          },
          {
              id:2,
              url:'../../../img/bg_img03.jpg'
          },
          {
              id:3,
              url:'../../../img/bg_img04.jpg'
          }
      ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   wx.downloadFile({
    //       url:'../../../img/test.png',
    //       success:function(res){
    //           console.log(res)
    //       },
    //       fail:function(){
    //           console.log("fail")
    //       }
    //   })


  },
  //绘制canvas


  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  onReady: function (e) {
   
      var context = wx.createCanvasContext('first');
      context.clearRect(0, 0, 330, 500);
      context.drawImage(this.data.bg_url, 0, 0, 330, 500);
      context.drawImage(this.data.url, 120, 350, 100, 100)
      // context.setFillStyle('pink');
      // context.fillRect(0,0,150,100)
      context.save();
      context.draw();
      this.setData({
          context: context
      })
  },

  //保存图片
  saveImage:function(){
      var that = this;
      wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: 330,
          height: 500,
          destWidth:330,
          destHeight: 500,
          canvasId: 'first',
          fileType: 'png',
          success: function (res) {
              console.log(res);
              console.log("save photo is success");
              wx.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success: function (res) {
                      console.log(res);
                  }
              })
          },
          fail: function () {
              console.log('save phtot is fail')
          }
      }, this)
  },

  //选择背景
  picker:function(e){
    //   console.log(e);
    //   console.log(e.currentTarget.dataset.index);
      let bg = this.data.poster[e.currentTarget.dataset.index].url;
      const context = this.data.context;
      this.setData({
          bg_url: bg
      })
      wx.showLoading({
          title: '正在生成海报....',
          icon:'loading',
          mask:true,
          duration:500
      })
     setTimeout(()=>{
         context.clearRect(0, 0, 330, 500);
         context.drawImage(this.data.bg_url, 0, 0, 330, 500);
         context.drawImage(this.data.url, 120, 350, 100, 100)
         // context.setFillStyle('pink');
         // context.fillRect(0,0,150,100)
         context.save();
         context.draw();
         this.setData({
             context: context
         })
     },60)
     
    

  },


 

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onshareAppMessage')
  }
})