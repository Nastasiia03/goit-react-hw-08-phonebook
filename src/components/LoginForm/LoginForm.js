import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockPerson from '@mui/icons-material/LockPerson';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export const LoginForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    };

    
    
   return <Container component="div" maxWidth="xs">
       <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
           alignItems: 'center',
           bgcolor: '#37474f',
           borderRadius: "10px",
           padding: "23px",
    }}
  >
    <Avatar sx={{ m: 1, width: 47, height: 47 }}>
      <LockPerson sx={{ fontSize: 27 }}/>
    </Avatar>
    <Typography component="h1" variant="h5" color="white" mb="25px">
      Sign in
    </Typography>
    <Box component="form" onSubmit={handleSubmit} noValidate >
      <InputBase
        required
        fullWidth
        id="email"
        placeholder="Email Address"
        name="email"
        autoComplete="email"
             autoFocus
             variant="outlined"
             sx={{ border: "1px solid #a7a0a0", borderRadius: "6px", width: "350px", height: "45px", padding: "20px", mb: "20px", color: "white"}}
             
      />
      <InputBase
        
        required
        fullWidth
        name="password"
        placeholder="Password"
        type="password"
        id="password"
             autoComplete="current-password"
             sx={{ border: "1px solid #a7a0a0", borderRadius: "6px", width: "350px", height: "45px", padding: "20px", mb: "15px", color: "white"}}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="default" />}
             label="Remember me"
             sx={{color: "#a7a0a0", borderColor: "white"}}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 4, bgcolor: "#151b1e" }}
      >
        Sign In
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="/goit-react-hw-08-phonebook/register" variant="body2" sx={{textDecoration: "none", color: "#a7a0a0", fontSize: "13px"}}>
            {"Don't have an account? Sign up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  </Box>
</Container>}