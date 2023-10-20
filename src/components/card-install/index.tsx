import React from 'react'
import styles from './styles.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

type IProps = {
  title: string;
  image: string;
  content?: React.ReactNode;
  downloadLink: string;
  tutorialLink?: string;
}

const CardInstall: React.FC<IProps> = ({ title, image, content, downloadLink, tutorialLink }) => {
  return (
    <div className={styles.card}>
      <Link to={downloadLink} aria-label={title}>
        <img src={image} alt={title} loading='eager' className={clsx('no-zoom-img', styles.card__img)} />
      </Link>

      <div className={styles.card__body}>
        {content && (
          <div className={styles.card__content}>
            {content}
          </div>
        )}

        <div className={styles.card__actions}>
          <Link to={downloadLink} className='button button--primary button--block'>Cài đặt</Link>

          {tutorialLink && (
            <Link to={tutorialLink} className='button button--primary button--outline button--block'>Xem hướng dẫn</Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardInstall
