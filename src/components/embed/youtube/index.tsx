import React from 'react'
import styles from './styles.module.css'

type IProps = {
  videoId: string
  title?: string
}

const YouTubeEmbed: React.FC<IProps> = ({ videoId, title }) => {
  return (
    <div className={styles.embed}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={styles.embed__iframe}
      />
    </div>
  )
}

export default YouTubeEmbed
