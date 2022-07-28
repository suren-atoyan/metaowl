import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

function About() {
  return (
    <Box sx={{ width: '92%', maxWidth: '650px', mt: 4, overflow: 'auto', maxHeight: 400 }}>
      <Typography color="#eeeae7" sx={{ fontFamily: "'Nunito', sans-serif;", fontWeight: 500 }}>
        This is the metaowl collection - charismatic birds from metaverse! 10.000 wingless birds
        fight with their look in opensea. What does the expression on their faces mean? They are
        owls with a strict look, they are everywhere, their value is their look, which should have
        reminded Joconde, but as you can see we fucked it up.
      </Typography>
    </Box>
  );
}

export default About;
