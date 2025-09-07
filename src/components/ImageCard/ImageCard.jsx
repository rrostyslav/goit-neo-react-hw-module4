import css from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
  return (
    <div className={css.card} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Unsplash image'}
        className={css.image}
        loading="lazy"
      />
      <div className={css.info}>
        <p className={css.author}>By {image.user.name}</p>
        <p className={css.likes}>♥ {image.likes}</p>
      </div>
    </div>
  );
}
