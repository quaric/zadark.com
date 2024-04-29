import React from 'react'
import CardInstall, { ICardInstall } from '../card-install';

type IProps = {
  cards: ICardInstall[];
}

const CardsInstall: React.FC<IProps> = ({ cards }) => {
  return (
    <div className="margin-top--lg">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col col--6 margin-bottom--lg">
            <CardInstall
              title={card.title}
              image={card.image}
              content={card.content}
              downloadLink={card.downloadLink}
              tutorialLink={card.tutorialLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsInstall
