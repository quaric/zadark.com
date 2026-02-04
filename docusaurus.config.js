// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const dotenv = require('dotenv')

const { themes } = require('prism-react-renderer');

const packageJSON = require('./package.json');

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZaDark by Quaric',
  tagline: 'Dark Mode tốt nhất cho Zalo',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zadark.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  organizationName: 'quaric',
  projectName: 'zadark-docs',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5192881442581767',
      async: true,
      crossorigin: 'anonymous'
    },
    {
      src: "https://fundingchoicesmessages.google.com/i/pub-5192881442581767?ers=1",
      async: true,
      nonce: "6Y7VL5KEsl61CQfbmFD7uQ",
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Cập nhật từ ZaDark',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: process.env.GTAG_MEASUREMENT_ID,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/zadark-social-card.jpeg',
      metadata: [{
        name: 'keywords',
        content: 'zalo dark mode, cách bật dark mode trên zalo pc, dark mode cho zalo pc, tải zalo dark mode, zalo dark, cách đổi nền zalo màu đen trên máy tính, thay đổi giao diện zalo màu đen trên máy tính, chỉnh zalo màu đen pc, cách chỉnh zalo thành màu đen, cách chuyển zalo sang màu đen, ẩn đang soạn tin zalo'
      }],
      announcementBar: {
        id: `zadark_release_${packageJSON.version.replace(/\./g, '')}`,
        content: `Bản cập nhật <strong>ZaDark ${packageJSON.version}</strong> đã được phát hành 🎉 <a href="/blog/changelog#zadark-${packageJSON.version.replace(/\./g, '')}">Xem thay đổi</a>`,
        backgroundColor: '#0068ff',
        textColor: '#fff',
      },
      // announcementBar: {
      //   id: 'zadark_product_hunt',
      //   content: 'ZaDark đã có mặt trên <strong>Product Hunt</strong>. Nếu bạn yêu thích ZaDark đừng quên để lại <strong>1 Vote</strong> nhé! <a href="https://www.producthunt.com/posts/zadark-zalo-dark-mode">Vote ZaDark</a>',
      //   backgroundColor: '#FF6154',
      //   textColor: '#fff',
      // },
      // announcementBar: {
      //   id: 'zadark_noti_zalopc_24121',
      //   content: 'Nếu bạn gặp lỗi Dark Mode trên <strong>Zalo PC 24.12.1</strong>, <a href="/blog/noti#khắc-phục-lỗi-zadark-trên-zalo-pc-24121-trở-lên">Nhấn vào đây</a> để xem cách khắc phục.',
      //   backgroundColor: '#dc2626',
      //   textColor: '#fff',
      //   isCloseable: false,
      // },
      navbar: {
        title: 'ZaDark',
        logo: {
          alt: 'ZaDark Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Hướng dẫn',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { href: '/contact', label: 'Liên hệ', position: 'left' },
          // {
          //   href: "https://status.quaric.com/status/zadark",
          //   position: "right",
          //   className: "header-status-link",
          //   label: "Online",
          // },
          { href: '/sponsors', label: 'Nhà tài trợ', position: 'left' },
          {
            href: 'https://github.com/quaric/zadark',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [{
          title: 'Tải xuống',
          items: [
            {
              label: 'ZaDark for Windows',
              href: '/pc/windows?utm_source=zadark&utm_medium=footer&utm_campaign=download_campaign',
            },
            {
              label: 'ZaDark for macOS',
              href: '/pc/macos?utm_source=zadark&utm_medium=footer&utm_campaign=download_campaign',
            },
            {
              label: 'ZaDark for Chrome',
              href: 'https://chrome.google.com/webstore/detail/zadark-%E2%80%93-zalo-dark-mode/llfhpkkeljlgnjgkholeppfnepmjppob',
            },
            {
              label: 'ZaDark for Safari',
              href: 'https://apps.apple.com/us/app/zadark-zalo-dark-mode/id1615941471?mt=12',
            },
            {
              label: 'ZaDark for Edge',
              href: 'https://microsoftedge.microsoft.com/addons/detail/zadark-%E2%80%93-zalo-dark-mode/nbcljbcabjegmmogkcegephdkhckegcf',
            },
            {
              label: 'ZaDark for Firefox',
              href: 'https://addons.mozilla.org/en-US/firefox/addon/zadark/',
            },
          ],
        }, {
          title: 'Kênh chính thức',
          items: [
            {
              label: 'Zalo Official Account',
              href: 'https://zalo.me/2353934240045322830',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/zadarkcom'
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@quaric'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/quaric/zadark'
            },
          ],
        }, {
          title: 'Chính sách',
          items: [{
            label: 'Điều khoản sử dụng',
            to: '/terms-of-use',
          }, {
            label: 'Chính sách bảo mật',
            to: '/privacy-policy',
          }, {
            label: "Trạng thái hệ thống",
            to: "https://status.quaric.com/status/zadark"
          }, {
            html: `<a href="//www.dmca.com/Protection/Status.aspx?id=85a452ca-06aa-4352-bfeb-7cb563dbd2b9&refurl=https://zadark.com/" title="DMCA.com Protection Status" target="_blank" rel="noopener noreferrer" class="dmca-badge"><img src ="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=85a452ca-06aa-4352-bfeb-7cb563dbd2b9" alt="DMCA.com Protection Status" height="32" /></a>`
          }],
        }],
        logo: {
          src: 'img/quaric-lockup-light.svg',
          alt: 'Quaric',
          height: 32,
          href: 'https://quaric.com',
          target: '_blank'
        },
        copyright: `© 2022-${new Date().getFullYear()} Quaric Co., Ltd.`,
      },
      prism: {
        theme: themes.dracula,
        additionalLanguages: ['bash']
      },
      colorMode: {
        // defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      zoom: {
        selector: '.markdown :not(.can-not-zoom) > img:not(.can-not-zoom), .zoomable',
        config: {
          margin: 32
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
      algolia: {
        // The application ID provided by Algolia
        appId: process.env.ALGOLIA_APP_ID,

        // Public API key: it is safe to commit it
        apiKey: process.env.ALGOLIA_API_KEY,

        indexName: process.env.ALGOLIA_INDEX_NAME,

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'quaric\\.com|go.quaric\\.com|sourceforge\\.net',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional, automatically send insights when user interacts with search results
        insights: true,
      },
    }),
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
  ],
  customFields: {
    MIXPANEL_TOKEN: process.env.MIXPANEL_TOKEN,
  },
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true, // required
    },
    experimental_faster: {
      rspackBundler: true, // required flag
      rspackPersistentCache: true, // new flag
      ssgWorkerThreads: true,
    },
  },
};

module.exports = config;
