import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { styled } from '@mui/system';

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

enum Pages {
  Welcome = 'welcome',
  Details = 'details',
}

function PageSwitcher() {
  const [activePage, setActivePage] = useState<Pages>(Pages.Welcome);
  const [stopObserver, setStopObserver] = useState<boolean>(false);

  function switchPage(page: Pages) {
    return () => {
      setActivePage(page);
      setStopObserver(true);

      setTimeout(() => {
        setStopObserver(false);
      }, 200);
    };
  }

  useEffect(() => {
    const page = document.getElementById(activePage);
    page?.scrollIntoView({ behavior: 'smooth' });
  }, [activePage]);

  useEffect(() => {
    const welcomePage = document.getElementById(Pages.Welcome) as HTMLElement;

    const intersectionObserver = new IntersectionObserver(
      function (entries) {
        if (entries?.[0].intersectionRatio < 0.12 && !stopObserver) {
          setActivePage(Pages.Details);
        }
      },
      { root: document, threshold: 0.1 },
    );

    // start observing
    intersectionObserver.observe(welcomePage);

    return () => {
      intersectionObserver.unobserve(welcomePage);
    };
  }, [stopObserver]);

  useEffect(() => {
    const detailsPage = document.getElementById(Pages.Details) as HTMLElement;

    const intersectionObserver = new IntersectionObserver(
      function (entries) {
        if (entries?.[0].intersectionRatio < 0.12 && !stopObserver) {
          setActivePage(Pages.Welcome);
        }
      },
      { root: document, threshold: 0.1 },
    );

    // start observing
    intersectionObserver.observe(detailsPage);

    return () => {
      intersectionObserver.unobserve(detailsPage);
    };
  }, [stopObserver]);

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
          <Dot active={page === activePage} key={page} onClick={switchPage(page)} />
        ))}
      </Box>
    </Box>
  );
}

export default PageSwitcher;
