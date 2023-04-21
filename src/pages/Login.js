import { LoginForm } from "components/LoginForm/LoginForm";
import Grid from '@mui/material/Paper';
import Image from '../images/main.jpg';
import { Container } from "@mui/material";


const Login = () => {
    return <Grid component="main" sx={{ backgroundImage: `url(${Image})`, backgroundSize: "cover", backgroundPosition: 'center', height: '100vh', opacity: "0.92"}}>
            <Container sx={{pt:"70px"}}>
                <LoginForm />
            </Container>
        </Grid>
        
}

export default Login;