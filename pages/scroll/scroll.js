// pages/scroll/scroll.js
var startPoint;
Page({
    data:{
        text:"编辑文字",
        animationData:{},
        buttonTop:0,
        buttonLeft:0

    },
    viewTouchMove:function(e){
        this.setData({
            left:e.touches[0].clientX-60,
            top:e.touches[0].clientY-60
        })
    },
    
  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //   let con= this.data.text
    //   console.log(con);
    //   var ctx = wx.createCanvasContext('text');
    //   ctx.clearRect(0, 0, 330, 500);

    //   ctx.setFontSize(20)
    //   ctx.fillText(con,100,100)

    //   ctx.draw()

      
  },
gain:function(e){
    let text =  e.detail.value
    var ctx = wx.createCanvasContext('text');
    ctx.clearRect(0, 0, 330, 500);
    ctx.setFontSize(20)
    ctx.fillText(text, 100, 100)
    ctx.draw()
    // this.setData({
    //     text:text
    // })
},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.animation = wx.createAnimation({
        duration:0,
        timingFunction:'ease',

    })
  },

  //button拖放的三个方法
  buttonStart: function (e) { startPoint = e.touches[0] }, 
  buttonMove: function (e) { 
      var endPoint = e.touches[e.touches.length - 1] 
      this.animation.translate(endPoint.clientX - startPoint.clientX,endPoint.clientY - startPoint.clientY).step() 
      this.setData({ animationData: this.animation.export()
       }) 
       }, 
     buttonEnd: function (e) { 
        console.log(e); var endPoint = e.changedTouches[0]
         this.setData({ buttonTop: (endPoint.clientY - 20), 
         buttonLeft: (endPoint.clientX - 50) })
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
  
  }
})