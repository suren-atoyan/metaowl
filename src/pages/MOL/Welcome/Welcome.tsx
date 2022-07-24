import Box from '@mui/material/Box';

import title from '@/assets/images/title.svg';
import titleMobile from '@/assets/images/title_mobile.svg';
import trio from '@/assets/images/trio.svg';
import useScreen from '@/utils/useScreen';

function Welcome() {
  const { isBigScreen, isMidScreen, isMobile } = useScreen();

  const trioWidth = isBigScreen ? '30%' : isMidScreen ? '40%' : isMobile ? '120%' : '30%';

  return (
    <Box
      sx={{
        height: '100%',
        backgroundColor: '#eeeae7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="welcome"
    >
      <img src={isMobile ? titleMobile : title} style={{ width: '84%', height: 'fit-content' }} />
      <img
        src={trio}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: trioWidth,
          marginRight: isMobile ? '-10%' : '5%',
        }}
      />
    </Box>
  );
}

export default Welcome;
