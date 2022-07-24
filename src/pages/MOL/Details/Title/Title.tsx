import Typography from '@mui/material/Typography';
import { Box, SxProps } from '@mui/system';

function Title({ sx = {}, isMobile }: { sx?: SxProps; isMobile?: boolean }) {
  return (
    <Box sx={sx}>
      <Typography
        sx={{ fontSize: isMobile ? '12vw' : '5vw', fontFamily: 'impact' }}
        color="#2b2b2b"
      >
        {'to the alleyto the'.toUpperCase()}
      </Typography>
      <Typography
        sx={{ fontSize: isMobile ? '12vw' : '5vw', fontFamily: 'impact' }}
        color="#eeeae7"
      >
        {'to the alleyto the'.toUpperCase()}
      </Typography>
    </Box>
  );
}

export default Title;
