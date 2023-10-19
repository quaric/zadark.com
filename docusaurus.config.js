// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const dotenv = require('dotenv')

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
        id: 'noti_update_website',
        content:
          'ZaDark thay đổi Website chính thức từ <strong>zadark.quaric.com</strong> thành <a target="_blank" rel="noopener noreferrer" href="https://zadark.com"><strong>zadark.com</strong></a>',
        backgroundColor: '#0068ff',
        textColor: '#fff',
      },
      navbar: {
        title: 'ZaDark by Quaric',
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
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          src: 'img/quaric-lockup-light.svg',
          alt: 'Quaric',
          height: 16,
          href: 'https://quaric.com',
          target: '_blank'
        },
        copyright: `Copyright © ${new Date().getFullYear()} Quaric. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      zoom: {
        selector: '.markdown :not(.no-zoom-img) > img:not(.no-zoom-img)',
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
};

module.exports = config;
