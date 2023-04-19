import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { selectVisibleContacts } from "redux/selectors";


export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);
    
    

    return (
        <ul>
            {visibleContacts.map(({id, name, number}) => (<li key={id}><Contact name={name} number={number} id={id} /></li>))}
      </ul>
  )  
}


