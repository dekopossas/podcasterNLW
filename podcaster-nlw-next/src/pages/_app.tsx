import React from 'react';
import { Header } from '../components/Header';
import { Player } from '../components/Player';
import '../styles/global.scss';
import { PlayerContext } from '../contexts/PlayerContext';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContext.Provider values={'deko'}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
