import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return <Box sx = {{ display: 'flex', gap: "10px", alignItems: "center" }}>
   <Typography variant="h6" component="div" sx={{ color: "white" }}>Welcome, {user.name}</Typography>
        <Button type="button" onClick={() => dispatch(logOut())}><LogoutIcon sx={{color: "white"}} /></Button>
</Box>
}