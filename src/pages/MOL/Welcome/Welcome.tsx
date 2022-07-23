import Box from '@mui/material/Box';

import title from '@/assets/images/title.svg';
import trio from '@/assets/images/trio.svg';

function Welcome() {
  return (
    <Box
      sx={{
        height: '100%',
        backgroundColor: '#eeeae7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
      id="welcome"
    >
      <img src={title} style={{ width: '84%', height: 'fit-content' }} />
      <img
        src={trio}
        style={{ position: 'absolute', bottom: 0, right: 0, width: '30%', marginRight: '5%' }}
      />
    </Box>
  );
}

export default Welcome;
