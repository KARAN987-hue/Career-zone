import styles from './HeaderButton.module.css';

function HeaderButton({ label, variant = 'default', onClick }) {
  const buttonClass = `${styles.button} ${styles[variant] || ''}`;
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
}

export default HeaderButton;
