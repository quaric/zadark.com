import React from 'react'
import CardInstall from '../card-install';
import { INSTALL_LINKS_FOR_WEB } from '@site/src/constants';
import CardsInstall from '../cards-install';


const CardsInstallWeb = () => {
  return <CardsInstall cards={INSTALL_LINKS_FOR_WEB} />
}

export default CardsInstallWeb
