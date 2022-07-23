import { useMediaQuery } from 'react-responsive';

import Box from '@mui/material/Box';

import title from '@/assets/images/title.svg';
import trio from '@/assets/images/trio.svg';

function Welcome() {
  const isBigScreen = useMediaQuery({
    query: '(min-width: 1700px)',
  });
  const isMidScreen = useMediaQuery({
    query: '(min-width: 820px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 820px)',
  });

  const trioWidth = isBigScreen ? '30%' : isMidScreen ? '40%' : isMobile ? '70%' : '30%';

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
        style={{ position: 'absolute', bottom: 0, right: 0, width: trioWidth, marginRight: '5%' }}
      />
    </Box>
  );
}

export default Welcome;
