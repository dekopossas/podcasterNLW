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
      <div className={styles.buttons}>
        <button type="button">
          <img src="/shuffle.svg" alt="Embaralhar" />
        </button>
        <button type="button">
          <img src="/play-previous.svg" alt="Tocar anterior" />
        </button>
        <button type="button">
          <img src="/play.svg" alt="Tocar" />
        </button>
        <button type="button">
          <img src="/play-next.svg" alt="Tocar próxima" />
        </button>
        <button type="button">
          <img src="/repeat.svg" alt="Repetir" />
        </button>
      </div>

    </footer>
   </div>
  );
}
