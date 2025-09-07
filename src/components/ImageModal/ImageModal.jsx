import { useEffect } from 'react';
import css from './ImageModal.module.css';

export default function ImageModal({ isOpen, image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !image) {
    return null;
  }

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <div className={css.content}>
          <button onClick={onClose} className={css.closeButton} aria-label="Close modal">
            ×
          </button>

          <img
            src={image.urls.regular}
            alt={image.alt_description || 'Unsplash image'}
            className={css.image}
          />

          <div className={css.info}>
            <h3 className={css.title}>{image.alt_description || 'Untitled'}</h3>

            <div className={css.details}>
              <p className={css.author}>
                <strong>Author:</strong> {image.user.name}
              </p>
              <p className={css.likes}>
                <strong>Likes:</strong> {image.likes}
              </p>
              {image.description && (
                <p className={css.description}>
                  <strong>Description:</strong> {image.description}
                </p>
              )}
            </div>

            <a
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              View on Unsplash
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
