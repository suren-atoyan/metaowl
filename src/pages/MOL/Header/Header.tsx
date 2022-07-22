import { FC } from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton';

import logo from '@/assets/images/logo.svg';
import openseaIcon from '@/assets/images/opensea.svg';

const CustomIcon = styled('img')({});
// TODO: extract types & implement better typing
const IconButton: FC<IconButtonProps & { href?: string; target?: string }> = styled(MuiIconButton)({
  marginLeft: '32px',
  height: '30px !important',
  width: '30px',
});

function Header() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        p: 1.5,
      }}
    >
      <IconButton>
        <CustomIcon sx={{ width: 44, height: 44 }} src={logo} />
      </IconButton>
      <IconButton href="https://opensea.io/collection/meta-owl-1" target="_blink">
        <CustomIcon sx={{ width: 20, height: 20 }} src={openseaIcon} />
      </IconButton>
      <IconButton
        sx={{ height: 'fit-content', svg: { fill: 'black' } }}
        href="https://www.instagram.com/_metaowl/"
        target="_blink"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        sx={{ height: 'fit-content', svg: { fill: 'black' } }}
        href="https://t.me/+jklNeilsTh44ZTUy"
        target="_blink"
      >
        <TelegramIcon />
      </IconButton>
      <IconButton
        sx={{ height: 'fit-content', svg: { fill: 'black' } }}
        href="https://twitter.com/MetaOwl1"
        target="_blink"
      >
        <TwitterIcon />
      </IconButton>
    </Box>
  );
}

export default Header;
