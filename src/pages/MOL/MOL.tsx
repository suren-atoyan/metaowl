import Box from '@mui/material/Box';

import Meta from '@/components/Meta';

import Details from './Details';
import Header from './Header';
import PageSwitcher from './PageSwitcher';
import Player from './Player';
import Welcome from './Welcome';

function MOL() {
  return (
    <>
      <Meta />
      <Box sx={{ position: 'relative', height: '100%' }}>
        <Header />
        <Player />
        <PageSwitcher />
        <Welcome />
        <Details />
      </Box>
    </>
  );
}

export default MOL;
