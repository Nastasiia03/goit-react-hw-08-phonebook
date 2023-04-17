import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Image from '../images/main.jpg';

 
 
 const Home = () => {
    return <Paper sx={{ backgroundImage: `url(${Image})`, width: 1500, height: 1200 }}>
        <Typography color="white" component="h1">Welcome!</Typography>
    </Paper>
}

export default Home;