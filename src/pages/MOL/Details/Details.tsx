import { useMediaQuery } from 'react-responsive';

import Box from '@mui/material/Box';

import title from '@/assets/images/details_title.svg';

import About from './About';
import Examples from './Examples';
import Title from './Title';

function Details() {
  const isHugeScreen = useMediaQuery({
    query: '(min-width: 2150px)',
  });
  const isBigScreen = useMediaQuery({
    query: '(min-width: 1680px)',
  });
  const isMidScreen = useMediaQuery({
    query: '(min-width: 1010px)',
  });
  const isTablet = useMediaQuery({
    query: '(max-width: 820px)',
  });

  function getContent() {
    if (isHugeScreen) {
      return (
        <>
          <Box>
            <Title />
            <About />
          </Box>
          <Examples isHugeScreen={isHugeScreen} />
        </>
      );
    }

    if (isBigScreen) {
      return (
        <>
          <Box>
            <Title />
            <About />
          </Box>
          <Examples />
        </>
      );
    }

    if (isMidScreen) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center' }}>
          <Title sx={{ mb: 10 }} />
          <Examples />
          <About />
        </Box>
      );
    }

    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Title isTablet={isTablet} sx={{ mb: 10 }} />
        <Examples isSingleLine />
        <About />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100%',
        backgroundColor: '#C95962',
      }}
      id="details"
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0,

          img: {
            width: '80%',
          },
        }}
      >
        <img src={title} alt="details-title" />
      </Box>
      <Box
        sx={{
          pt: '150px',
          pb: '50px',
          px: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {getContent()}
      </Box>
    </Box>
  );
}

export default Details;
