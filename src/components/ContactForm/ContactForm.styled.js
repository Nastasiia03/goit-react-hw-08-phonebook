import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField} from 'formik';

export const Form = styled(FormikForm)`
width: 350px;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
border: 1px solid #2a2a2a;
gap: 20px;
margin-bottom: 10px;
background-color: #37474f; 
border-radius: 10px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #a7a0a0;
  font-size: 15px;
`;

export const Field = styled(FormikField)`
width: 300px;
height: 30px;
border: "1px solid #a7a0a0";
border-radius: 6px;
background-color: transparent;
color: white;
padding: 5px;
`

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;