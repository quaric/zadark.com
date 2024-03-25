// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const dotenv = require('dotenv')

const { themes } = require('prism-react-renderer');

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
          blogSidebarTitle: 'Bài viết',
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
      // announcementBar: {
      //   id: 'noti_ads_231120',
      //   content: 'ZaDark vừa thêm quảng cáo để duy trì hoạt động. Chúng tôi xin lỗi nếu quảng cáo làm phiền mọi người!',
      //   backgroundColor: '#0068ff',
      //   textColor: '#fff',
      // },
      navbar: {
        title: 'ZaDark',
        hideOnScroll: true,
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
          { to: '/privacy-policy', label: 'Điều khoản sử dụng', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'dropdown',
            label: 'Đánh giá',
            position: 'right',
            items: [
              {
                label: 'ZaDark for Windows',
                href: 'https://sourceforge.net/projects/zadark/reviews/new?stars=5',
              },
              {
                label: 'ZaDark for macOS',
                href: 'https://sourceforge.net/projects/zadark/reviews/new?stars=5',
              },
              {
                label: 'ZaDark for Chrome',
                href: 'https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob/reviews',
              },
              {
                label: 'ZaDark for Safari',
                href: 'https://apps.apple.com/us/app/zadark-for-safari/id1615941471?mt=12?action=write-review',
              },
              {
                label: 'ZaDark for Edge',
                href: 'https://microsoftedge.microsoft.com/addons/detail/nbcljbcabjegmmogkcegephdkhckegcf',
              },
              {
                label: 'ZaDark for Firefox',
                href: 'https://addons.mozilla.org/en-US/firefox/addon/zadark/reviews',
              },
            ],
          },
          { href: 'https://zadark.canny.io/', label: 'Góp ý', position: 'right' },
          { label: 'Donate', to: '/donate', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [{
          title: 'Tải xuống',
          items: [
            {
              label: 'ZaDark for Windows',
              href: 'https://sourceforge.net/projects/zadark/files/ZaDarkPC/Windows/',
            },
            {
              label: 'ZaDark for macOS',
              href: 'https://sourceforge.net/projects/zadark/files/ZaDarkPC/macOS/',
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
              label: 'Zalo',
              to: '/contact',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/zadarkdotcom'
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
          title: 'Thêm',
          items: [{
            label: 'Điều khoản sử dụng',
            to: '/privacy-policy',
          }, {
            label: 'Blog',
            to: '/blog',
          }, {
            label: 'Giải thưởng',
            to: '/awards',
          }, {
            label: 'Donate',
            to: '/donate',
          }, {
            label: "Trạng thái hệ thống",
            href: "https://stats.uptimerobot.com/JXvCyf8fUy"
          }, {
            html: `
              <a href="https://www.digitalocean.com/?refcode=474b42f30e7d&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge" title="DigitalOcean Referral Badge" aria-label="DigitalOcean Referral Badge" class="digitalocean-badge">
                <img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%203.svg" alt="DigitalOcean Referral Badge" height="32" />
              </a>
            `
          }, {
            html: `<a href="//www.dmca.com/Protection/Status.aspx?id=85a452ca-06aa-4352-bfeb-7cb563dbd2b9&refurl=https://zadark.com/" title="DMCA.com Protection Status" target="_blank" rel="noopener noreferrer" class="dmca-badge"><img src ="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=85a452ca-06aa-4352-bfeb-7cb563dbd2b9" alt="DMCA.com Protection Status" height="32" /></a>`
          }],
        }],
        logo: {
          src: 'img/quaric-lockup-light.svg',
          alt: 'Quaric',
          height: 24,
          href: 'https://quaric.com',
          target: '_blank'
        },
        copyright: `© ${new Date().getFullYear()} Quaric Co., Ltd.`,
      },
      prism: {
        theme: themes.dracula,
        additionalLanguages: ['bash']
      },
      colorMode: {
        defaultMode: 'dark',
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
    require.resolve('docusaurus-plugin-image-zoom')
  ],
  customFields: {
    IS_DEV: process.env.NODE_ENV === 'development',
    MIXPANEL_TOKEN: process.env.MIXPANEL_TOKEN,
  }
};

module.exports = config;
