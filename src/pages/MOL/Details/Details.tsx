import Box from '@mui/material/Box';

import title from '@/assets/images/details_title.svg';

import About from './About';
import Examples from './Examples';

function Details() {
  return (
    <Box
      sx={{
        height: '100%',
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
          px: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <About />
        <Examples />
      </Box>
    </Box>
  );
}

export default Details;
