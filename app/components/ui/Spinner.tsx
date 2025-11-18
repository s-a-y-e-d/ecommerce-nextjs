import styles from './Spinner.module.css';

export default function Spinner({ message }: { message: string }) {
  return (
    <div className={styles['spinner-overlay']}>
      <div className={styles['spinner-container']}>
        <div className={styles.spinner}></div>
        <div className={styles['spinner-text']}>{message}</div>
      </div>
    </div>
  );
}
