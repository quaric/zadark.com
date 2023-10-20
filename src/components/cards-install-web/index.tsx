import React from 'react'
import CardInstall from '../card-install';

const BROWSERS = [{
  title: 'ZaDark for Chrome',
  image: require('@site/docs/install/img/chrome.jpeg').default,
  downloadLink: 'https://go.quaric.com/zadark-chrome',
  tutorialLink: '/web/chrome'
}, {
  title: 'ZaDark for Safari',
  image: require('@site/docs/install/img/safari.jpeg').default,
  downloadLink: 'https://go.quaric.com/zadark-safari',
  tutorialLink: '/web/safari'
}, {
  title: 'ZaDark for Edge',
  image: require('@site/docs/install/img/edge.jpeg').default,
  downloadLink: 'https://go.quaric.com/zadark-edge',
  tutorialLink: '/web/edge'
}, {
  title: 'ZaDark for Opera',
  image: require('@site/docs/install/img/opera.jpeg').default,
  downloadLink: 'https://go.quaric.com/zadark-opera',
  tutorialLink: '/web/opera'
}, {
  title: 'ZaDark for Firefox',
  image: require('@site/docs/install/img/firefox.jpeg').default,
  downloadLink: 'https://go.quaric.com/zadark-firefox',
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
