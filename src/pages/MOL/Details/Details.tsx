import Box from '@mui/material/Box';

import About from './About';
import Examples from './Examples';

function Details() {
  return (
    <Box
      sx={{
        height: '100%',
        backgroundColor: '#C95962',
        pt: '150px',
        px: '50px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
      id="details"
    >
      <About />
      <Examples />
    </Box>
  );
}

export default Details;
