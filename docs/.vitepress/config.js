export default {
  title: "我的博客",
  base: "/mybook/",
  themeConfig: {
    siteTitle: "我的博客",
    nav: [
      { text: "Home", link: "/" },
      { text: "大前端", link: "/notes/" },
      { text: "疑难杂症", link: "/difficult/"},
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/aiyouBug" },
    ],

    sidebar: {
      "/notes/": [
        {
          text: "iOS相关",
          items: [
            { text: "UI与视图", link: "/notes/uiview" },
            // { text: "iOS 动画相关", link: "/guide/playground" },
            // { text: "iOS 埋点", link: "/guide/background-image" },
            // { text: "机型判断宏", link: "/guide/accent-color" },
          ],
        },
        {
          text: "前端相关",
          items: [
            // { text: "数据类型", link: "/guide/router" },
            // { text: "原型和原型链", link: "/guide/register" },
            // { text: "继承", link: "/guide/reset-password" },
            // { text: "输入url之后发生的事情", link: "/guide/advanced-login" },
            // { text: "This", link: "/guide/advanced-register" },
          ],
        },
      ],

      "/difficult/": [
        {
          text: "Mac相关",
          collapsible: true,
          items: [
            // {
            //   text: "Element",
            //   link: "/component/element",
            // },
            // {
            //   text: "Text",
            //   link: "/component/text",
            // },
            // {
            //   text: "Button",
            //   link: "/component/button",
            // },
            // {
            //   text: "Input",
            //   link: "/component/input",
            // },
            // {
            //   text: "Image",
            //   link: "/component/image",
            // },
          ],
        },
        {
          text: "环境相关",
          collapsible: true,
          items: [
            // {
            //   text: "Guard",
            //   link: "/component/guard",
            // },
            // {
            //   text: "GuardContainer",
            //   link: "/component/guard-container",
            // },
            // {
            //   text: "AppLogo",
            //   link: "/component/app-logo",
            // },
            // {
            //   text: "AppName",
            //   link: "/component/app-name",
            // },
            // {
            //   text: "AccountInput",
            //   link: "/component/account-input",
            // },
            // {
            //   text: "PasswordInput",
            //   link: "/component/password-input",
            // },
            // {
            //   text: "LoginButton",
            //   link: "/component/login-button",
            // },
            // {
            //   text: "ErrorText",
            //   link: "/component/error-text",
            // },
          ],
        },
      ],
    },

    footer: {
      message: "Released under the MIT License.",
    },
  },
};
