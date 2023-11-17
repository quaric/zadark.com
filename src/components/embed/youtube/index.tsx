import React from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

type IProps = {
  videoId: string
  title?: string
  isRounded?: boolean;
}

const YouTubeEmbed: React.FC<IProps> = ({ videoId, title, isRounded = true }) => {
  return (
    <div className={styles.embed}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={clsx(styles.embed__iframe, {
          [styles['embed__iframe--rounded']]: isRounded,
        })}
      />
    </div>
  )
}

export default YouTubeEmbed
