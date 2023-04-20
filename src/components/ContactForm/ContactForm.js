import { Formik } from 'formik';
import { ErrorMessage, Field, Form, FormField } from './ContactForm.styled';
import { useDispatch, useSelector } from "react-redux";
import { addContact} from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

function validateName(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)) {
     error = 'Invalid name';
   }
   return error;
 }
 
 function validateNumber(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(value)) {
     error = 'Invalid number';
   }
   return error;
 }
     
export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

    
    return (
    <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={(values, actions) => {
          const sameName = contacts.find(contact => contact.name.toLowerCase().includes(values.name.toLowerCase()));
          if (sameName) {
            alert(`${values.name} is already in contacts`)
          } else {
            dispatch(addContact(values));
          };
          
          actions.resetForm();
         
            }}>
    {({ errors, touched }) => {
          return (
            <Form>
              <Typography component="h1" variant="h5" color="#e5e1e1" >Contact form</Typography>
              <FormField>
                Name
                <Field name="name" type="text" validate={validateName} />
                {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              </FormField>
              <FormField>
                Number
                <Field name="number" type="tel" validate={validateNumber} />
                {errors.number && touched.number && <ErrorMessage>{errors.number}</ErrorMessage>}
              </FormField>

              <Button type="submit" variant="contained"
              sx={{ mt: 2,  bgcolor: "#151b1e", fontSize: "12px" }}>Add contact</Button>
              
            </Form>
          );
        }}
    </Formik>
  )
}

