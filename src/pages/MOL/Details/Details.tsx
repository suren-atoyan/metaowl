import Box from '@mui/material/Box';

import axe from '@/assets/images/axe.svg';
import title from '@/assets/images/details_title.svg';
import gun from '@/assets/images/gun.svg';
import oscar from '@/assets/images/oscar.svg';
import useScreen from '@/utils/useScreen';

import { MOBILE_PLAYER_HEIGHT } from '../Player/styled';
import About from './About';
import Examples from './Examples';
import Title from './Title';

function Details() {
  const { isMobile, isTablet } = useScreen();

  function getContent() {
    if (!isMobile) {
      return (
        <>
          <Box sx={{ flex: 0.8 }}>
            <Title />
            <About />
          </Box>
          <Examples isMobile={isMobile} />
        </>
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
        <Title isMobile={isMobile} sx={{ mb: 5 }} />
        <Examples isTablet={isTablet} isMobile={isMobile} />
        <About />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100%',
        pb: isMobile ? `${MOBILE_PLAYER_HEIGHT}px` : 0,
        backgroundColor: '#C95962',
        display: isMobile ? 'block' : 'flex',
        alignItems: isMobile ? 'unset' : 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="details"
    >
      {!isMobile && (
        <>
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
              position: 'absolute',
              left: '14%',
              top: '5%',
              width: '20%',
              height: '20%',
              display: 'flex',
              zIndex: 0,
            }}
          >
            <img src={axe} alt="details-title" />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              left: '30%',
              bottom: '5%',
              width: '20%',
              height: '20%',
              display: 'flex',
              zIndex: 0,
            }}
          >
            <img src={oscar} alt="details-title" />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              right: '10%',
              top: '3%',
              width: '20%',
              height: '20%',
              display: 'flex',
              zIndex: 0,
            }}
          >
            <img src={gun} alt="details-title" />
          </Box>
        </>
      )}
      <Box
        sx={{
          py: '50px',
          px: isMobile ? 0 : isTablet ? '25px' : '50px',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          width: '100%',
        }}
      >
        {getContent()}
      </Box>
    </Box>
  );
}

export default Details;
