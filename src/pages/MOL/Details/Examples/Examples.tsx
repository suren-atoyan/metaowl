import { Typography, styled } from '@mui/material';
import { Box } from '@mui/system';

import nft1 from '@/assets/images/1.svg';
import nft2 from '@/assets/images/2.svg';
import nft3 from '@/assets/images/3.svg';
import nft4 from '@/assets/images/4.svg';
import nft5 from '@/assets/images/5.svg';
import nft6 from '@/assets/images/6.svg';

const Image = styled('img')({
  boxShadow: '0px 7px 18px rgba(0, 0, 0, 0.25)',
  borderRadius: '17px',
});

function NFT({ src, title, size }: { src: string; title: string; size: string }) {
  return (
    <Box sx={{ display: 'inline-block' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Image style={{ width: size, height: size }} src={src} alt={title} />
        <Typography
          color="#eeeae7"
          sx={{ mt: 1, fontSize: 9, fontFamily: 'Arial Rounded MT Bold' }}
        >
          {'metaowl'.toUpperCase()}
        </Typography>
        <Typography color="#eeeae7" sx={{ fontFamily: 'Arial Rounded MT Bold' }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

function Examples({ isMobile }: { isMobile?: boolean }) {
  const margin = isMobile ? '50px' : '3vw';
  const size = isMobile ? '255px' : '12vw';

  if (isMobile) {
    return (
      <Box
        sx={{
          overflowX: 'scroll',
          display: 'flex',
          maxWidth: '100%',
          '> div:not(:last-child)': {
            mr: margin,
          },
        }}
      >
        <NFT size={size} src={nft1} title="NO. 4123" />
        <NFT size={size} src={nft2} title="NO. 1010" />
        <NFT size={size} src={nft3} title="NO. 298" />
        <NFT size={size} src={nft4} title="NO. 1212" />
        <NFT size={size} src={nft5} title="NO. 1010" />
        <NFT size={size} src={nft6} title="NO. 2198" />
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" flex={1}>
      <Box
        sx={{
          mb: 5,
          '> div:not(:last-child)': {
            mr: margin,
          },
        }}
      >
        <NFT size={size} src={nft1} title="NO. 4123" />
        <NFT size={size} src={nft2} title="NO. 1010" />
        <NFT size={size} src={nft3} title="NO. 298" />
      </Box>
      <Box
        sx={{
          '> div:not(:last-child)': {
            mr: margin,
          },
        }}
      >
        <NFT size={size} src={nft4} title="NO. 1212" />
        <NFT size={size} src={nft5} title="NO. 1010" />
        <NFT size={size} src={nft6} title="NO. 2198" />
      </Box>
    </Box>
  );
}

export default Examples;
