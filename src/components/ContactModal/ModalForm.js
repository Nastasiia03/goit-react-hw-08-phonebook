import { useFormik } from 'formik';

import {
  Grid,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  FilledInput,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/operations';
import { Person, PhoneIphone } from '@mui/icons-material';

export const UpdateContactForm = ({ onClose, id, name, number }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, resetForm) => {
    if (
      name.trim().toLowerCase() === values.name.trim().toLowerCase() &&
      number === values.number
    ) {
     alert('Please make changes to the contact');
      return;
    }
    dispatch(updateContact({ id, values }))
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name,
      number,
    },
    onSubmit: handleSubmit,
  });

  return (
      <form onSubmit={formik.handleSubmit}>
          <Grid item xs={12}>
            <FormControl variant="filled" fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <FilledInput
                endAdornment={
                  <InputAdornment position="end">
                    <Person />
                  </InputAdornment>
                }
                fullWidth
                autoFocus
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                type="name"
                label="Name"
            error={formik.touched.name && Boolean(formik.errors.name)}
            sx={{color: "#e5e1e1", width: "320px"}}
              />
              <FormHelperText error={true}>
                {formik.touched.name && formik.errors.name}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <FormControl variant="filled" fullWidth>
              <InputLabel htmlFor="number">Number</InputLabel>
              <FilledInput
                endAdornment={
                  <InputAdornment position="end">
                    <PhoneIphone />
                  </InputAdornment>
                }
                fullWidth
                id="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                type="text"
                label="Number"
            error={formik.touched.number && Boolean(formik.errors.number)}
            sx={{color: "#e5e1e1", width: "320px", fontSize: "16px"}}
              />
              <FormHelperText error={true}>
                {formik.touched.number && formik.errors.number}
              </FormHelperText>
            </FormControl>
          </Grid>
        

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, bgcolor: "#151b1e", fontSize: "12px" }}
        >
          Update contact
        </Button>
      </form>
    
  );
};



