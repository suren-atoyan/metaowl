import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

import { Actions, Pages } from './types';

const molActivePage = atom<Pages>({
  key: 'mol-active-page',
  default: Pages.Welcome,
});

const stopObserverFlag = atom<boolean>({
  key: 'stop-observer-flag',
  default: false,
});

function usePageSwitcher(): [Pages, Actions] {
  const [activePage, setActivePage] = useRecoilState(molActivePage);
  const [stopObserver, setStopObserver] = useRecoilState(stopObserverFlag);

  function switchPage(page: Pages) {
    setActivePage(page);
    setStopObserver(true);

    const pageElement = document.getElementById(page);
    pageElement?.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      setStopObserver(false);
    }, 350);
  }

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
  }, [stopObserver, setActivePage]);

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
  }, [stopObserver, setActivePage]);

  return [activePage, { switchPage }];
}

export default usePageSwitcher;
