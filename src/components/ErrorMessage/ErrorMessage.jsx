import css from './ErrorMessage.module.css';

export default function ErrorMessage({ message }) {
  return (
    <div className={css.error}>
      <p className={css.text}>{message || 'Something went wrong. Please try again.'}</p>
    </div>
  );
}
