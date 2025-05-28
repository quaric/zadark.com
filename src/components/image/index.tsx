import React from 'react'
import styles from './styles.module.css';
import clsx from 'clsx';

type IProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;

  caption?: React.ReactNode;
  isRounded?: boolean;
  canZoom?: boolean;
  style: React.CSSProperties;
}

const Image: React.FC<IProps> = ({ src, width, height, alt, caption, isRounded = false, canZoom = true, style }) => {
  return (
    <figure className={styles.figure}>
      <img
        src={src}
        alt={alt}
        loading='lazy'
        width={width}
        height={height}
        className={clsx(styles.img, {
          [styles['img--rounded']]: isRounded,
          'can-not-zoom': !canZoom }
        )}
        style={style}
      />

      {caption && <figcaption className={styles.figcaption}>{caption}</figcaption>}
    </figure>
  )
}

export default Image
