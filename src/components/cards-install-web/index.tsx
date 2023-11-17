import React from 'react'
import CardInstall from '../card-install';

const BROWSERS = [{
  title: 'ZaDark for Chrome',
  image: require('@site/docs/install/img/chrome.jpeg').default,
  downloadLink: 'https://chrome.google.com/webstore/detail/zadark-%E2%80%93-zalo-dark-mode/llfhpkkeljlgnjgkholeppfnepmjppob',
  tutorialLink: '/web/chrome'
}, {
  title: 'ZaDark for Safari',
  image: require('@site/docs/install/img/safari.jpeg').default,
  downloadLink: 'https://apps.apple.com/us/app/zadark-zalo-dark-mode/id1615941471?mt=12',
  tutorialLink: '/web/safari'
}, {
  title: 'ZaDark for Edge',
  image: require('@site/docs/install/img/edge.jpeg').default,
  downloadLink: 'https://microsoftedge.microsoft.com/addons/detail/zadark-%E2%80%93-zalo-dark-mode/nbcljbcabjegmmogkcegephdkhckegcf',
  tutorialLink: '/web/edge'
}, {
  title: 'ZaDark for Opera',
  image: require('@site/docs/install/img/opera.jpeg').default,
  downloadLink: 'https://addons.opera.com/en/extensions/details/zadark-best-dark-theme-for-zalo/',
  tutorialLink: '/web/opera'
}, {
  title: 'ZaDark for Firefox',
  image: require('@site/docs/install/img/firefox.jpeg').default,
  downloadLink: 'https://addons.mozilla.org/en-US/firefox/addon/zadark/',
  tutorialLink: '/web/firefox'
}]

const CardsInstallWeb = () => {
  return (
    <div className="container margin-top--lg">
      <div className="row">
        {BROWSERS.map((browser, index) => (
          <div key={index} className="col col--6 margin-bottom--lg">
            <CardInstall
              title={browser.title}
              image={browser.image}
              downloadLink={browser.downloadLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsInstallWeb
