import { Typography, styled } from '@mui/material';
import { Box } from '@mui/system';

import nft1 from '@/assets/images/nft_1.png';
import nft2 from '@/assets/images/nft_2.png';
import nft3 from '@/assets/images/nft_3.png';
import nft4 from '@/assets/images/nft_4.png';
import nft5 from '@/assets/images/nft_5.png';
import nft6 from '@/assets/images/nft_6.png';

const Image = styled('img')({
  width: 255,
  height: 255,
  boxShadow: '0px 7px 18px rgba(0, 0, 0, 0.25)',
  borderRadius: '10px',
});

// const images = [
//   {
//     src: nft1,
//     title: 'NO. 4123',
//   },
//   {
//     src: nft2,
//     title: 'NO. 1010',
//   },
//   {
//     src: nft3,
//     title: 'NO. 298',
//   },
//   {
//     src: nft4,
//     title: 'NO. 1212',
//   },
//   {
//     src: nft5,
//     title: 'NO. 1010',
//   },
//   {
//     src: nft6,
//     title: 'NO. 2198',
//   },
// ];

function NFT({ src, title }: { src: string; title: string }) {
  return (
    <Box sx={{ display: 'inline-block' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Image src={src} alt={title} />
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

function Examples() {
  return (
    <Box display="flex" flexDirection="column">
      <Box
        sx={{
          mb: 11,
          '> div:not(:last-child)': {
            mr: '68px',
          },
        }}
      >
        <NFT src={nft1} title="NO. 4123" />
        <NFT src={nft2} title="NO. 1010" />
        <NFT src={nft3} title="NO. 298" />
      </Box>
      <Box
        sx={{
          '> div:not(:last-child)': {
            mr: '68px',
          },
        }}
      >
        <NFT src={nft4} title="NO. 1212" />
        <NFT src={nft5} title="NO. 1010" />
        <NFT src={nft6} title="NO. 2198" />
      </Box>
    </Box>
  );
}

export default Examples;
