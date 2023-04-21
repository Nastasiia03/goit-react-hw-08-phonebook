import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";
import { fetchContacts } from "redux/operations";
import Grid from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import Image from '../images/main.jpg';
import { Box } from '@mui/material';


const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
  

    useEffect(() => {
        dispatch(fetchContacts())
        
    }, [dispatch])

    return <Grid component="main" sx={{ backgroundImage: `url(${Image})`, backgroundSize: "cover", backgroundPosition: 'center', height: '100vh', opacity: "0.92" }}>
        <Container maxWidth="lg" sx={{pt:"60px", display: "flex", gap: "250px", alignItems: "flex-start"}}>
        {isLoading && !error && <b>Request in progress...</b>}
            {!isLoading && <><Box sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: "10px",
                pl: "40px"
            }}><Typography component="h1" variant="h4" color="white" mb="20px">My contacts</Typography><Filter /><ContactList /></Box><ContactForm /></>}
            </Container>
    </Grid>
};

export default Contacts;