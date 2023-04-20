import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { selectVisibleContacts } from "redux/selectors";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';



export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);
    
    

    return <List sx={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "10px"}}>
        {visibleContacts.map(({ id = 0, name = "", number = "" }) => <ListItem key={id} component="div" disableGutters alignItems="center" sx={{backgroundColor: "#808b91", borderRadius: '6px',
                  boxShadow: 6, p: '10px'}}>
            <Contact name={name} number={number} id={id} /></ListItem>)}</List>
               
        
    };