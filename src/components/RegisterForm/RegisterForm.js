import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    };
    
    const theme = createTheme();

   return (<ThemeProvider theme={theme}>
      <Container component="div" maxWidth="xs">
        
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
            <PersonAddAlt1Icon sx={{ fontSize: 27 }}/>
          </Avatar>
          <Typography component="h1" variant="h5" color="white" mb="25px">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <InputBase
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  placeholder="Name"
                 autoFocus
                 variant="outlined"
             sx={{ border: "1px solid #a7a0a0", borderRadius: "6px", width: "350px", height: "45px", padding: theme.spacing(2), mb: "20px", color: "white"}}
                />
                <InputBase
                  required
                  fullWidth
                  id="email"
                  placeholder="Email Address"
                  name="email"
                 autoComplete="email"
                 variant="outlined"
             sx={{ border: "1px solid #a7a0a0", borderRadius: "6px", width: "350px", height: "45px", padding: theme.spacing(2), mb: "20px", color: "white"}}
                />
                <InputBase
                  required
                  fullWidth
                  name="password"
                  placeholder="Password"
                  type="password"
                  id="password"
                 autoComplete="new-password"
                 variant="outlined"
             sx={{ border: "1px solid #a7a0a0", borderRadius: "6px", width: "350px", height: "45px", padding: theme.spacing(2), mb: "20px", color: "white"}}
                />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 4, bgcolor: "#151b1e" }}
              
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/goit-react-hw-08-phonebook/login" variant="body2" sx={{textDecoration: "none", color: "#a7a0a0", fontSize: "13px"}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}