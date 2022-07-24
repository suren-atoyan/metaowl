import { useMediaQuery } from 'react-responsive';

const useScreen = () => {
  const isBigScreen = useMediaQuery({
    query: '(min-width: 1681px)',
  });
  const isMidScreen = useMediaQuery({
    query: '(min-width: 801px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 801px) and (max-width: 1100px)',
  });
  const isMobile = useMediaQuery({ query: `(max-width: 800px)` });

  return {
    isBigScreen,
    isMidScreen,
    isMobile,
    isTablet,
  };
};

export default useScreen;
