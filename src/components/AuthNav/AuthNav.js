import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box sx = {{ display: 'flex', gap: "10px" }}>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <Typography variant="h6" component="div" sx={{ color: "white" }}>
        Sign up |</Typography>
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <Typography variant="h6" component="div" sx={{ color: "white" }}>
        Sign in</Typography>
      </Link>
    </Box>
  );
};