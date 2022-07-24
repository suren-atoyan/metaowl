import { useMediaQuery } from 'react-responsive';

const useScreen = () => {
  const isBigScreen = useMediaQuery({
    query: '(min-width: 1681px)',
  });
  const isMidScreen = useMediaQuery({
    query: '(min-width: 801px)',
  });
  const isMobile = useMediaQuery({ query: `(max-width: 800px)` });

  return {
    isBigScreen,
    isMidScreen,
    isMobile,
  };
};

export default useScreen;
