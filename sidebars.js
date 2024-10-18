/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      label: "Giới thiệu",
      id: "about"
    },
    {
      type: "category",
      label: "Cài đặt",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "install/zalo-pc",
          label: "Cho Zalo PC"
        },
        {
          type: "doc",
          id: "install/zalo-web",
          label: "Cho Zalo Web"
        },
        {
          type: "doc",
          id: "install/zalo-mobile",
          label: "Cho Zalo Mobile"
        }
      ]
    },
    {
      type: "category",
      label: "Hướng dẫn",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "pc/windows",
          label: "ZaDark for Windows"
        },
        {
          type: "doc",
          id: "pc/macos",
          label: "ZaDark for macOS"
        },
        {
          type: "doc",
          id: "web/chrome",
          label: "ZaDark for Chrome"
        },
        {
          type: "doc",
          id: "web/safari",
          label: "ZaDark for Safari"
        },
        {
          type: "doc",
          id: "web/edge",
          label: "ZaDark for Edge"
        },
        {
          type: "doc",
          id: "web/opera",
          label: "ZaDark for Opera"
        },
        {
          type: "doc",
          id: "web/firefox",
          label: "ZaDark for Firefox"
        }
      ]
    },
    {
      type: "category",
      label: "Chính sách",
      items: [{
        type: "link",
        label: 'Điều khoản sử dụng',
        href: '/terms-of-use',
      },
      {
        type: "link",
        label: 'Chính sách bảo mật',
        href: '/privacy-policy',
      }],
    },
    {
      type: "doc",
      id: "contact"
    },
    {
      type: "category",
      label: "Khác",
      items: [{
        type: "link",
        label: 'Giấy phép Nguồn mở',
        href: '/open-source-licenses',
      }, {
        type: "doc",
        id: "awards",
      }],
    },
    // {
    //   type: "link",
    //   label: 'Giấy phép Nguồn mở',
    //   href: '/open-source-licenses',
    // }, {
    //   type: "doc",
    //   id: "awards",
    // }, {
    //   type: "doc",
    //   id: "donate",
    // },
    // {
    //   type: "category",
    //   label: "Khác",
    //   items: [{
    //     type: "link",
    //     label: 'Giấy phép Nguồn mở',
    //     href: '/open-source-licenses',
    //   }, {
    //     type: "doc",
    //     id: "awards",
    //   }, {
    //     type: "doc",
    //     id: "donate",
    //   }],
    // },
    // {
    //   type: "html",
    //   value: `
    //     <!-- Sidebar -->
    //     <ins
    //       class="adsbygoogle"
    //       style="display:block"
    //       data-ad-client="ca-pub-5192881442581767"
    //       data-ad-slot="5216129007"
    //       data-ad-format="auto"
    //       data-full-width-responsive="true"
    //     ></ins>
    //     <script>
    //       (adsbygoogle = window.adsbygoogle || []).push({});
    //     </script>
    //   `
    // }
  ],
};

module.exports = sidebars;
