import { Formik } from 'formik';
import { Button} from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/operations';
import { ErrorMessage, Field, FormField, Form } from 'components/ContactForm/ContactForm.styled';
import { validateName } from 'formValidation/formValidation';
import { validateNumber } from 'formValidation/formValidation';
import PropTypes from "prop-types";

export const UpdateContactForm = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    if (
      name.trim().toLowerCase() === values.name.trim().toLowerCase() &&
      number === values.number
    ) {
     alert('Please make changes to this contact');
      return;
    }
    dispatch(updateContact({ id, values }))
  };


  return (
    <Formik initialValues={{ name: name, number: number }} onSubmit={handleSubmit} enableReinitialize={true}>
          {({ errors, touched }) => {
          return (
            <Form>
              <FormField>
                Name
                <Field id="name" name="name" type="text" validate={validateName} />
                {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </FormField>
              <FormField>
                Number
                <Field id="number" name="number" type="tel" validate={validateNumber} />
                {errors.number && touched.number && <ErrorMessage>{errors.number}</ErrorMessage>}
              </FormField>

              <Button type="submit" variant="contained"
              sx={{ mt: 2,  bgcolor: "#151b1e", fontSize: "12px" }}>Update contact</Button>
              
            </Form>
          );
        }}
    </Formik>
    
  );
};


UpdateContactForm.propTypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired, 
        id: PropTypes.string.isRequired,
   
}
