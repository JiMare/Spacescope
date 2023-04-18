import React from 'react';
import styles from './styles.module.scss';

export type PhotoGridType = {
  id: number;
  url: string;
  title?: string;
  description: React.ReactNode;
};

export interface PhotoGridProps {
  photos: PhotoGridType[];
}

export interface PhotoItemProps {
  photo: PhotoGridType;
}

const PhotoItem = ({ photo } : PhotoItemProps): JSX.Element => (
  <div className={styles.photo}>
    <img src={photo.url} alt={photo.title} />
    <div className={styles.info}>
      <div className={styles.infoBorder}>
        <strong>{photo.title}</strong>
        <div className={styles.description}>{photo.description}</div>
      </div>
    </div>
  </div>
);

const PhotoGrid = ({ photos }: PhotoGridProps): JSX.Element => {
  return (
    <>
      <div className={styles.photoGrid}>
        {photos.map((photo) => <PhotoItem key={photo.id} photo={photo} />)}
      </div>
      {photos.length === 0 && <div className={styles.noPhotos}>No photos found</div>}
    </>
  );
};

export default PhotoGrid;
