import Box from '@mui/material/Box';
import { styled } from '@mui/system';

import usePageSwitcher from '@/store/mol';
import { Pages } from '@/store/mol/types';

const Dot = styled(Box)<{ active: boolean }>(({ active }) => ({
  width: 14,
  height: 14,
  background: active ? 'white' : 'lightgray',
  '&:not(:last-of-type)': {
    marginBottom: 20,
  },
  borderRadius: '50%',
  cursor: 'pointer',
}));

function PageSwitcher() {
  const [activePage, { switchPage }] = usePageSwitcher();

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 10,
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        zIndex: 2,
      }}
    >
      <Box>
        {Object.values(Pages).map((page) => (
          <Dot active={page === activePage} key={page} onClick={() => switchPage(page)} />
        ))}
      </Box>
    </Box>
  );
}

export default PageSwitcher;
