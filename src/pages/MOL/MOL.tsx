import Box from '@mui/material/Box';

import Meta from '@/components/Meta';
import useScreen from '@/utils/useScreen';

import Details from './Details';
import Header from './Header';
import PageSwitcher from './PageSwitcher';
import Player from './Player';
import Welcome from './Welcome';

function MOL() {
  const { isMobile } = useScreen();

  return (
    <>
      <Meta />
      <Box sx={{ position: 'relative', height: '100%' }}>
        <Header />
        <Player />
        {!isMobile && <PageSwitcher />}
        <Welcome />
        <Details />
      </Box>
    </>
  );
}

export default MOL;
