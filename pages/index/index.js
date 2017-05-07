//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: '欢迎来做客',
    userInfo: {},
    animationData:{},
    imgUrls:[
      '../img/1.jpg',
      '../img/2.jpg',
      '../img/3.jpg',
      '../img/4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorColor:'rgba(0,0,0,0.3)',
    indicatorActiveColor:'#000',
    inputValue:'',
    musicTab:true,
    pictureTab:false,
    mgsTab:false,
    otherTab:false
  },
  bindKeyInput: function(){
    this.setData({
      inputValue: e.detail.value
    })
  },
   changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
  },
  onShow:function(){
    setTimeout(function(){
       var animation = wx.createAnimation({
          duration: 1500,
          timingFunction: 'ease'
        });
        this.animation = animation;
        animation.opacity(0).step();
        this.setData({
          animationData:animation.export()
        });
        setTimeout(function() {
          animation.translate(0,-100).step();
          this.setData({
            animationData:animation.export()
          })
        }.bind(this), 500)
    }.bind(this),1000)
  },
  changeTab:function(event){
    console.log(event);
    var tap =  event.target.dataset.tap;
    if(tap=="musicTab"){
      console.log(true);
      musicTab = true;
      pictureTab=false;
      mgsTab=false;
      otherTab=false
    }else if(tap=="pictureTab"){
      pictureTab = true;
        musicTab=false;
      mgsTab=false;
      otherTab=false
    }else if(tap=="msgTab"){
      msgTab = true;
        pictureTab=false;
      musicTab=false;
      otherTab=false
    }else if(tap=="otherTab"){
      otherTab=true;
        pictureTab=false;
      mgsTab=false;
      musicTab=false
    }
  
  }
});
