import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';


export const Bar = () => {
    const { isLoggedIn } = useAuth();


  return (
    <AppBar position="static" sx={{backgroundColor: "#263238"}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <ImportContactsIcon sx={{ display: { xs: 'none', md: 'flex' },  width: "40px", height: "30px", mr: "15px"}} />
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
      </Container>
    </AppBar>
    
  );
};