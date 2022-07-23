import Typography from '@mui/material/Typography';
import { Box, SxProps } from '@mui/system';

function Title({ sx = {}, isTablet }: { sx?: SxProps; isTablet?: boolean }) {
  return (
    <Box sx={sx}>
      <Typography variant={isTablet ? 'h2' : 'h1'} sx={{ fontFamily: 'impact' }} color="#2b2b2b">
        {'to the alleyto the'.toUpperCase()}
      </Typography>
      <Typography variant={isTablet ? 'h2' : 'h1'} sx={{ fontFamily: 'impact' }} color="#eeeae7">
        {'to the alleyto the'.toUpperCase()}
      </Typography>
    </Box>
  );
}

export default Title;
