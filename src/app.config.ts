export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/company/index",
    "pages/brands/index",
    "pages/detail/index",
    // 国酿
    "pages/detail/guoniang/home",
    "pages/detail/guoniang/detail",
    // 叙府
    "pages/detail/xufu/home",
    "pages/detail/xufu/detail",
  ],

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  }
});
