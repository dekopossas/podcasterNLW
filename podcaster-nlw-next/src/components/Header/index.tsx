import styles from './styles.module.scss';

export function Header() {
  const currentDate = new Date().toLocaleDateString();
  
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="logo do podcast" />

      <p>O melhor para vc ouvir, sempre</p>

      <span>quinta, 8 abril</span>
    </header>
  );
}
