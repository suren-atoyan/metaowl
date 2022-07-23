import { useCallback, useEffect, useRef, useState } from 'react';
import { AiFillPlayCircle, AiOutlinePause } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';

import { Typography } from '@mui/material';

import tracks from '@/assets/tracks';
import useScreen from '@/utils/useScreen';

import { Actions, ActionsWrapper, InfoBox, NextPrev, Progress, Root, StartStop } from './styled';

const Player = () => {
  const { isMobile } = useScreen();
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);

  const activeTrack = tracks[activeTrackIndex];

  const intervalRef = useRef<number | null>(null);
  const isReady = useRef(false);
  const audioRef = useRef(new Audio(activeTrack.src));

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current as number);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  }, []);

  const toPrevTrack = () => {
    setActiveTrackIndex((prev) => (prev <= 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true);
  };
  const toNextTrack = () => {
    setActiveTrackIndex((prev) => (prev >= tracks.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, startTimer]);

  useEffect(() => {
    if (isPlaying && isReady.current) {
      audioRef.current.pause();
      audioRef.current = new Audio(activeTrack.src);
      setTrackProgress(audioRef.current.currentTime);
      audioRef.current.play();
      // stex vor es setIsPlaying(true) dnume em araji angam porcum a avtom play ani chromy chi toxum
      // hanel em verev next/prev-i jamanak em drel de play/stop knopki depqum parz a vor es kanchvum
      // menak es mi hat xndir uni. senc vichakum amen play/stop-ic ergy noric a sksum vorovhetev es effecty kancvhum a
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [isPlaying, activeTrack, startTimer]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current as number);
    };
  }, []);

  return (
    <Root isMobile={isMobile}>
      <Progress isMobile={isMobile} value={(100 * trackProgress) / audioRef.current.duration} />
      <StartStop isMobile={isMobile} played={isPlaying} onClick={() => setIsPlaying((p) => !p)}>
        {isPlaying ? <AiOutlinePause /> : <AiFillPlayCircle />}
      </StartStop>
      <ActionsWrapper isMobile={isMobile} played={isPlaying}>
        <Actions isMobile={isMobile}>
          <NextPrev isMobile={isMobile} onClick={toPrevTrack}>
            <BiSkipPrevious />
          </NextPrev>
          <InfoBox isMobile={isMobile}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 0.75 }}>
              {activeTrack.title}
            </Typography>
            <Typography variant="caption" sx={{ lineHeight: 0, mt: '10px' }}>
              {activeTrack.artist}
            </Typography>
          </InfoBox>
          <NextPrev isMobile={isMobile} onClick={toNextTrack}>
            <BiSkipNext />
          </NextPrev>
        </Actions>
      </ActionsWrapper>
    </Root>
  );
};

export default Player;
