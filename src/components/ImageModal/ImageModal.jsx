import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({ isOpen, image, onClose }) {
  if (!image) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
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

          <a href={image.links.html} target="_blank" rel="noopener noreferrer" className={css.link}>
            View on Unsplash
          </a>
        </div>
      </div>
    </Modal>
  );
}
