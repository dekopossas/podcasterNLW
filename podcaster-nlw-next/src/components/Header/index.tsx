import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="logo do podcast" />

      <p>O melhor para vc ouvir, sempre</p>

      <span>quinta, 8 abril</span>
    </header>
  );
}
