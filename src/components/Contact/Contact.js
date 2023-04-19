import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import { Button } from "./Contact.styled";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from '@mui/material/Modal';
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { createPortal } from "react-dom";
import { UpdateContactForm } from "components/ContactModal/ModalForm";


export const Contact = ({name, number, id, onClose}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleDelete = () => dispatch(deleteContact(id));

    const closeModal = () => setOpen(false);
    const modalRoot = document.querySelector("#modal-root");

    const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
  
    return (
        <>
            <p>&#9742; {name} {number}</p> 
            <Button type="button" onClick={() => setOpen(true)}>Update</Button>
            <Button type="button" onClick={handleDelete}>Delete</Button>
            
            
            {open && createPortal(
              <Modal open={open}
                onClose={closeModal}>
               <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please, update your contact here:
          </Typography>
            <UpdateContactForm 
                            id={id}
                            name={name}
                            number={number}
                            onClose={onClose} />      
        </Box>
        </Modal>,
        modalRoot
    )}
            </>
)
}

Contact.propTypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired, 
        id: PropTypes.string.isRequired,
   
}