import HomePage from '@/app/pages/homepage/HomePage'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main >
        <HomePage />
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
