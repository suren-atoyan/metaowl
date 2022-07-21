import { useMediaQuery } from 'react-responsive';

const useScreen = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return {
    isMobile,
  };
};

export default useScreen;
