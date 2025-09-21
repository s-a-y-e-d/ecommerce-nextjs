import { HomePage } from '@/app/pages/homepage/HomePage'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomePage cart={null} loadCartData={null}/>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
