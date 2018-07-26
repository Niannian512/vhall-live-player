const key = 'vhall_options';
Page({
  /* 测试直播信息 */
  data: {
    roomid: '881752380',
    account: 'test001',
    username: 'lisi',
    app_key: 'abb389afd505b40eaab3a50ec4ec8694',
    signedat: '1532413317000',
    sign: 'd8f37d3d5ff61431dca71cf9cf1a3329'
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: '录入播放信息'
    });
  },
  inputRoom(e){
    this.setData({
      roomid: e.detail.value
    });
  },
  inputAccount(e) {
    this.setData({
      account: e.detail.value
    });
  },
  inputUserName(e) {
    this.setData({
      username: e.detail.value
    });
  },
  inputAppkey(e) {
    this.setData({
      app_key: e.detail.value
    });
  },
  inputEmail(e) {
    this.setData({
      email: e.detail.value
    });
  },
  inputSign(e) {
    this.setData({
      sign: e.detail.value
    });
  },
  inputSignedat(e) {
    this.setData({
      signedat: e.detail.value
    });
  },
  checkInput(){
    if(!this.data.roomid){
      wx.showToast({
        title: 'roomid没有填写',
        icon: 'none',
        duration: 1000
      });
      return false;
    } else if (!this.data.account){
      wx.showToast({
        title: 'account没有填写',
        icon: 'none',
        duration: 1000
      });
      return false;
    } else if (!this.data.username) {
      wx.showToast({
        title: 'username没有填写',
        icon: 'none',
        duration: 1000
      });
      return false;
    } else if (!this.data.app_key) {
      wx.showToast({
        title: 'app_key没有填写',
        icon: 'none',
        duration: 1000
      });
      return false;
    } else if (!this.data.sign) {
      wx.showToast({
        title: 'sign没有填写',
        icon: 'none',
        duration: 1000
      });
      return false;
    } else if (!this.data.signedat) {
      wx.showToast({
        title: 'signedat没有填写',
        icon: 'none',
        duration: 1000
      });
      return false;
    }
    return true;
  },
  joinLive(){
    if (!this.checkInput()) return;
    wx.setStorage({
      key: key,
      data: this.data
    });
    let url = '../index/index?roomid=' + this.data.roomid + '&account=' + this.data.account + '&username=' + this.data.username + '&app_key=' + this.data.app_key + '&sign=' + this.data.sign + '&signedat=' + this.data.signedat;
    //console.log(url);
    wx.navigateTo({
      url: url
    })
  }
});