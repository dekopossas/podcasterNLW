import styles from './styles.module.scss';

export function Player() {
  return (
   <div className={styles.playerComponent}>
     <header>
       <img src="/playing.svg" alt="logo do player" />
       <strong>playing now</strong>
     </header>
    <div className={styles.emptyPlayer}>
      <strong>Selecione um podcast apra ouvir</strong>
    </div>
    <footer>
      <div className={styles.progress}>
        <span>00:00</span>
        <div className={styles.emptySlider} />
      </div>
      
    </footer>
   </div>
  );
}
