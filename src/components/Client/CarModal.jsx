import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {  TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addClient } from "../../redux/features/clients.reducer";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CarModal = () => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [vin, setVin] = useState("");


  const dispatch = useDispatch();

  const classes = {
    addButton: {
      backgroundColor: "orange",
      fontSize: 12,
      marginLeft: 100,
      color: "white",
      height: 57,
    },
    addBut: {
      backgroundColor: "orange",
      fontSize: 12,
      margin: "auto",
      color: "white",
      height: 50,
    },
    nameInput: {
      width: 300,
      margin: "0 20 20 0",
    },
    inputDiv: {
      textAlign: "center",
    },
    inputPosition: {
      margin: "15px",
    },
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeVin = (e) => {
    setVin(e.target.value);
  };

  const handleAddClient = () => {
    dispatch(addClient({firstName, lastName, phone, vin}));
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={classes.addButton}
        variant="contained"
        onClick={handleClickOpen}
      >
        + добавить клиента
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Добавление клиента"}</DialogTitle>
        <DialogContent style={classes.inputDiv}>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              id="outlined-basic"
              label="Фамилия"
              variant="outlined"
              style={classes.inputPosition}
              value={firstName}
              onChange={handleChangeFirstName}
            />
            <TextField
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              value={lastName}
              style={classes.inputPosition}
              onChange={handleChangeLastName}
            />
            <TextField
              id="outlined-basic"
              label="Телефон"
              variant="outlined"
              value={phone}
              style={classes.inputPosition}
              onChange={handleChangePhone}
            />
            <TextField
              id="outlined-basic"
              label="VIN"
              variant="outlined"
              value={vin}
              style={classes.inputPosition}
              onChange={handleChangeVin}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  style={classes.addBut} variant="contained" onClick={handleAddClient}>
            + добавить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CarModal;
