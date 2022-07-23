import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

function About() {
  return (
    <Box sx={{ flex: 1 }}>
      <Box>
        <Typography variant="h1" sx={{ fontFamily: 'impact' }} color="#2b2b2b">
          {'to the alleyto the'.toUpperCase()}
        </Typography>
        <Typography variant="h1" sx={{ fontFamily: 'impact' }} color="#eeeae7">
          {'to the alleyto the'.toUpperCase()}
        </Typography>
      </Box>
      <Box sx={{ width: '92%', mt: 4, overflow: 'auto', maxHeight: 200 }}>
        <Typography color="#eeeae7" sx={{ fontFamily: 'Arial Rounded MT Bold' }}>
          A small species that sprouts from the dirt in the garden. While they&apos;re earnestly
          driven by the desire to help their Azuki friends, some BEANZ simply can&apos;t resist the
          allure of the allA small species that sprouts from the dirt in the garden. While
          they&apos;re earnestly driven by the desire to help their Azuki friends, some BEANZ simply
          can&apos;t resist the allure of the alley...A small species that sprouts from the dirt in
          the garden. While they&apos;re earnestly driven by the desire to help their Azuki friends,
          some BEANZ simply can&apos;t resist the allure of the alley…ey...
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
