// pages/addpet/addpet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weight: ["1-5kg", "5-10kg", "10-15kg", "15-20kg","20kg以上"],
    index: 0,
    birthday: "2018-03-26",
    homeday: "2018-03-26",
    jueyu: "否",
    mianyi: "否",
  },
  switchJueyu: function(e) {
    this.setData({
      jueyu: e.detail.value ? "是" : "否",
    });
  },
  switchMianyi: function (e) {
    this.setData({
      mianyi: e.detail.value ? "是" : "否",
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  }
})