export const INSTALL_LINKS_FOR_PC = [{
  title: 'ZaDark for Windows',
  content: <span>Hỗ trợ <strong>Windows 10</strong> trở lên</span>,
  image: require('@site/docs/install/img/windows.jpeg').default,
  downloadLink: '/pc/windows',
}, {
  title: 'ZaDark for macOS',
  content: <span>Hỗ trợ <strong>macOS Mojave</strong> trở lên</span>,
  image: require('@site/docs/install/img/macos.jpeg').default,
  downloadLink: '/pc/macos',
}]

export const INSTALL_LINKS_FOR_WEB = [{
  title: 'ZaDark for Chrome',
  content: null,
  image: require('@site/docs/install/img/chrome.jpeg').default,
  downloadLink: 'https://chrome.google.com/webstore/detail/zadark-%E2%80%93-zalo-dark-mode/llfhpkkeljlgnjgkholeppfnepmjppob',
}, {
  title: 'ZaDark for Safari',
  content: null,
  image: require('@site/docs/install/img/safari.jpeg').default,
  downloadLink: 'https://apps.apple.com/us/app/zadark-zalo-dark-mode/id1615941471?mt=12',
}, {
  title: 'ZaDark for Edge',
  content: null,
  image: require('@site/docs/install/img/edge.jpeg').default,
  downloadLink: 'https://microsoftedge.microsoft.com/addons/detail/zadark-%E2%80%93-zalo-dark-mode/nbcljbcabjegmmogkcegephdkhckegcf',
}, {
  title: 'ZaDark for Firefox',
  content: null,
  image: require('@site/docs/install/img/firefox.jpeg').default,
  downloadLink: 'https://addons.mozilla.org/en-US/firefox/addon/zadark/',
}]

const ZADARK_PC_VERSION = '15.2.4';

export const DOWNLOAD_URLS = {
  WINDOWS: `https://storage.zadark.com/zadark${ZADARK_PC_VERSION}-windows.zip`,
  MAC_APPLE_CHIP: `https://storage.zadark.com/zadark${ZADARK_PC_VERSION}-macos-arm64.zip`,
  MAC_INTEL_CHIP: `https://storage.zadark.com/zadark${ZADARK_PC_VERSION}-macos-x64.zip`,
}

export default {
  INSTALL_LINKS_FOR_PC,
  INSTALL_LINKS_FOR_WEB,
  DOWNLOAD_URLS
}
