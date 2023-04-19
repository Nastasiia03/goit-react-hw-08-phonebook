import Grid from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import Image from '../images/main.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';



 const theme = createTheme();
 
 const Home = () => {
     return <ThemeProvider theme={theme}>
         <Grid component="main" sx={{ backgroundImage: `url(${Image})`, backgroundSize: "cover", backgroundPosition: 'center', height: '100vh' }} >
             <Container maxWidth="lg" sx={{pt:"70px"}} >
             <Typography color="white" component="h1" fontSize="70px" fontWeight="600" sx={{textShadow: 4}}>Welcome to the Phone Book!</Typography>
                 <Typography component="p" color="white" fontSize="25px">Your one-stop online telephone directory service</Typography>
                 </Container>
         </Grid>
         </ThemeProvider>
}

export default Home;