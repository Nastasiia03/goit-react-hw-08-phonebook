import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";
import { createPortal } from "react-dom";
import { UpdateContactForm } from "components/ContactModal/UpdateContactForm";
import {Fab, ListItemIcon, ListItemText, ListItemSecondaryAction, Typography} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const Contact = ({name, number, id}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleDelete = () => dispatch(deleteContact(id));

    const modalRoot = document.querySelector("#modal-root");

    return (
      <>
        <ListItemIcon><LocalPhoneIcon /></ListItemIcon>
        <ListItemText
        primary={
          <Typography
            type="body2"
            style={{
              color: "#000000bf",
              fontWeight: '600',
            }}
          >
            {name}
          </Typography>
        }
        secondary={
          <Typography
            type="body2"
            style={{
              color: "#000000bf",
            }}
          >
            {number}
          </Typography>
        }
      />
            <ListItemSecondaryAction
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          mr: "10px",
        }}
      >
        <Fab
          aria-label="edit contact"
          onClick={() => setOpen(true)}
          edge="end"
          sx={{
            bgcolor: "#b3b3b3",
            mb: { xs: '5px', md: '0' },
            mr: { md: '10px' },
            width: "40px",
            height: "35px",
          }}
        >
          <EditIcon />
        </Fab>
        <Fab
          aria-label="delete contact"
          onClick={handleDelete}
          edge="end"
          sx={{
            bgcolor: "#b3b3b3",
            width: "40px",
            height: "35px",
          }}
        >
          <DeleteForeverIcon />
        </Fab>
      </ListItemSecondaryAction>

        {/* Modal window */}
            {open && createPortal(
              <Modal open={open}
                onClose={() => setOpen(false)}>
                <Box sx={{position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: '#687074',
                  borderRadius: "10px",
                  boxShadow: 24,
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color="#e5e1e1" mb="25px">
            Please, update your contact here:
          </Typography>
            <UpdateContactForm 
                            id={id}
                            name={name}
                            number={number}
                             />      
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