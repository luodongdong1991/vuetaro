export default {
  pages: [
    'pages/index/index',
    // 'pages/home/home',
    // 'pages/me/me'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#6e6d6b",
    selectedColor: "#e64340",
    borderStyle: "white",
    backgroundColor: "#fff",
    custom:true,
    list: [
      {
        pagePath: 'pages/home/home',
        text: '我的',
        iconPath: './assets/images/index-off.png',
        selectedIconPath: './assets/images/index-off.png',
      },
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/images/index-off.png',
        selectedIconPath: './assets/images/index-off.png',
      },
      {
        pagePath: 'pages/me/me',
        text: '我的',
        iconPath: './assets/images/index-off.png',
        selectedIconPath: './assets/images/index-off.png',
      }
    ]
  }
}
