import { createContext, useState, ReactNode } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  setIsPlayingState: (state: boolean) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrev: () => void;
  playList: (list: Episode[], index: number) => void;
};

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = {
  children: ReactNode;
}

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  };

  function playList(list: Episode[], index: number) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!true);
  };

  function setIsPlayingState(state: boolean) {
    setIsPlaying(state);
  };
  
  function playNext() {
    const nextEp = currentEpisodeIndex + 1

    if (nextEp < episodeList.length) {
      setCurrentEpisodeIndex(nextEp);
    };
  };

  function playPrev() {
    const prevEp = currentEpisodeIndex - 1

    if (prevEp < episodeList.length) {
      setCurrentEpisodeIndex(prevEp);
    };
  };

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        play,
        isPlaying,
        playPrev,
        playNext,
        togglePlay,
        playList,
        setIsPlayingState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
