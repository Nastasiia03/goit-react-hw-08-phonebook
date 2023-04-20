import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Navigation = () => {
  return <Box sx={{display: 'flex', gap: "10px", mr: "720px"}}>
    <Link to="/" style={{ textDecoration: "none" }}><Typography variant="h6" component="div" sx={{ color: "white" }}>Home</Typography></Link>
  <Link to="/contacts" style={{ textDecoration: "none" }}><Typography variant="h6" component="div" sx={{ color: "white" }}>Contacts</Typography></Link>
    </Box>
}