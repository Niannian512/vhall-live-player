const key = 'vhall_options';
Page({
  /* 测试直播信息 */
  // data:{
  //     roomid: 833103009,
  //     account: '1',
  //     username: '1',
  //     appkey: '6df499bfa2a5fef0b4b1cc39bf16e145',
  //     signedat: '1527786061',
  //     sign: 'caf4aefdf8d8f0841b67fda83d8283d9',
  //     email: '1@1.com'
  // },
  data: {
    roomid: '881752380',
    account: 'test001',
    username: 'lisi',
    appkey: 'abb389afd505b40eaab3a50ec4ec8694',
    signedat: '1531881008000',
    sign: '11a5d4fd6e019a0c479c63c41fa10596',
    email: 'test001@vhall.com'
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
      appkey: e.detail.value
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
    } else if (!this.data.email) {
      wx.showToast({
        title: 'email没有填写',
        icon: 'none',
        duration: 1000
      });
      return false;
    } else if (!this.data.appkey) {
      wx.showToast({
        title: 'appkey没有填写',
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
    let url = '../index/index?roomid=' + this.data.roomid + '&account=' + this.data.account + '&username=' + this.data.username + '&email=' + this.data.email + '&appkey=' + this.data.appkey + '&sign=' + this.data.sign + '&signedat=' + this.data.signedat;
    //console.log(url);
    wx.navigateTo({
      url: url
    })
  }
});