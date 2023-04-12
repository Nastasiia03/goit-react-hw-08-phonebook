import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";
import { fetchContacts } from "redux/operations";


export const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
  

    useEffect(() => {
        dispatch(fetchContacts())
        
    }, [dispatch])

    return <><h1>Phonebook</h1>
        <ContactForm  />
        {isLoading && !error && <b>Request in progress...</b>}
        {!isLoading && <><h2>Contacts</h2><Filter /><ContactList /></>}</>
}