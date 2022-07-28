import Typography from '@mui/material/Typography';
import { Box, SxProps } from '@mui/system';

const title = "the bird's name could also be Joconde".toUpperCase();

function Title({ sx = {}, isMobile }: { sx?: SxProps; isMobile?: boolean }) {
  return (
    <Box sx={sx}>
      <Typography
        sx={{
          fontSize: isMobile ? '10vw' : '3vw',
          fontFamily: "'Anton', sans-serif;",
          fontWeight: 700,
          textAlign: isMobile ? 'center' : 'inherit',
        }}
        color="#2b2b2b"
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: isMobile ? '10vw' : '3vw',
          fontFamily: "'Anton', sans-serif;",
          fontWeight: 700,
          textAlign: isMobile ? 'center' : 'inherit',
        }}
        color="#eeeae7"
      >
        {title}
      </Typography>
    </Box>
  );
}

export default Title;
