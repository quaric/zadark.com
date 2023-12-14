export const INSTALL_LINKS_FOR_PC = [{
  title: 'Cài đặt ZaDark for Windows',
  content: <span>Hỗ trợ <strong>Windows 10</strong> trở lên</span>,
  image: require('@site/docs/install/img/windows.jpeg').default,
  downloadLink: '/pc/windows',
  // tutorialLink: '/pc/windows'
}, {
  title: 'Cài đặt ZaDark for macOS',
  content: <span>Hỗ trợ <strong>macOS Mojave</strong> trở lên</span>,
  image: require('@site/docs/install/img/macos.jpeg').default,
  downloadLink: '/pc/macos',
  // tutorialLink: '/pc/macos'
}]

export const INSTALL_LINKS_FOR_WEB = [{
  title: 'ZaDark for Chrome',
  content: null,
  image: require('@site/docs/install/img/chrome.jpeg').default,
  downloadLink: 'https://chrome.google.com/webstore/detail/zadark-%E2%80%93-zalo-dark-mode/llfhpkkeljlgnjgkholeppfnepmjppob',
  // tutorialLink: '/web/chrome'
}, {
  title: 'ZaDark for Safari',
  content: null,
  image: require('@site/docs/install/img/safari.jpeg').default,
  downloadLink: 'https://apps.apple.com/us/app/zadark-zalo-dark-mode/id1615941471?mt=12',
  // tutorialLink: '/web/safari'
}, {
  title: 'ZaDark for Edge',
  content: null,
  image: require('@site/docs/install/img/edge.jpeg').default,
  downloadLink: 'https://microsoftedge.microsoft.com/addons/detail/zadark-%E2%80%93-zalo-dark-mode/nbcljbcabjegmmogkcegephdkhckegcf',
  // tutorialLink: '/web/edge'
}, {
  title: 'ZaDark for Opera',
  content: null,
  image: require('@site/docs/install/img/opera.jpeg').default,
  downloadLink: 'https://addons.opera.com/en/extensions/details/zadark-best-dark-theme-for-zalo/',
  // tutorialLink: '/web/opera'
}, {
  title: 'ZaDark for Firefox',
  content: null,
  image: require('@site/docs/install/img/firefox.jpeg').default,
  downloadLink: 'https://addons.mozilla.org/en-US/firefox/addon/zadark/',
  // tutorialLink: '/web/firefox'
}]

export default {
  INSTALL_LINKS_FOR_PC,
  INSTALL_LINKS_FOR_WEB
}
