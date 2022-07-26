import { useCallback, useEffect, useRef, useState } from 'react';

import PauseIcon from '@mui/icons-material/Pause';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';

import tracks from '@/assets/tracks';
import useScreen from '@/utils/useScreen';

import { Actions, ActionsWrapper, InfoBox, Progress, Root, StartStop } from './styled';

const Player = () => {
  const { isMobile } = useScreen();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);

  const activeTrack = tracks[activeTrackIndex];

  const [hasEverPlayed, setHasEvenPlayed] = useState(false);

  const intervalRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!audioRef.current) {
    audioRef.current = new Audio(activeTrack.src);
  }

  const startTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (audioRef.current?.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current?.currentTime as number);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (hasEverPlayed) {
      audioRef.current?.pause();
      audioRef.current = new Audio(tracks[activeTrackIndex].src);
      setTrackProgress(audioRef.current.currentTime);
      audioRef.current.play();
      startTimer();
    }
  }, [activeTrackIndex, startTimer, hasEverPlayed]);

  useEffect(() => {
    setIsLoading(isPlaying && audioRef.current?.readyState !== 4);
  }, [isPlaying, activeTrackIndex, audioRef.current?.readyState]);

  function toPrevTrack() {
    setActiveTrackIndex((prev) => (prev <= 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true);
    setHasEvenPlayed(true);
    setTrackProgress(0);
  }

  function toNextTrack() {
    setActiveTrackIndex((prev) => (prev >= tracks.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
    setHasEvenPlayed(true);
    setTrackProgress(0);
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startTimer();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, startTimer]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <Root isMobile={isMobile}>
      <Progress isMobile={isMobile} value={(100 * trackProgress) / audioRef.current.duration} />
      <StartStop
        isMobile={isMobile}
        played={isPlaying}
        onClick={() =>
          setIsPlaying((p) => {
            setHasEvenPlayed(true);
            return !p;
          })
        }
      >
        {isPlaying ? <PauseIcon /> : <PlayCircleIcon />}
      </StartStop>
      <ActionsWrapper isMobile={isMobile} played={isPlaying}>
        <Actions isMobile={isMobile}>
          <IconButton onClick={toPrevTrack}>
            <SkipPreviousIcon />
          </IconButton>
          <InfoBox isMobile={isMobile}>
            {isLoading && <CircularProgress size={28} color="info" sx={{ position: 'absolute' }} />}
            <Box
              sx={{
                filter: `blur(${isLoading ? '1px' : '0px'})`,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "'Nunito', sans-serif;",
                  fontWeight: 900,
                  lineHeight: 0.75,
                  color: '#2B2B2B',
                }}
              >
                {activeTrack.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "'Nunito', sans-serif;",
                  lineHeight: 0,
                  mt: '10px',
                  color: '#898989',
                }}
              >
                {activeTrack.artist}
              </Typography>
            </Box>
          </InfoBox>
          <IconButton onClick={toNextTrack}>
            <SkipNextIcon />
          </IconButton>
        </Actions>
      </ActionsWrapper>
    </Root>
  );
};

export default Player;
