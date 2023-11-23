import React from 'react'
import CardInstall, { ICardInstall } from '../card-install';

type IProps = {
  cards: ICardInstall[];
}

const CardsInstall: React.FC<IProps> = ({ cards }) => {
  return (
    <div className="container margin-top--lg">
      <div className="row">
        {cards.map((browser, index) => (
          <div key={index} className="col col--6 margin-bottom--lg">
            <CardInstall
              title={browser.title}
              image={browser.image}
              downloadLink={browser.downloadLink}
              tutorialLink={browser.tutorialLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsInstall
