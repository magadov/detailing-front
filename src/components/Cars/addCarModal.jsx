import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCars } from "../../redux/features/cars.reducer";
import TableCell from "@mui/material/TableCell";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

const AddCarModal = ({ clientId }) => {
  const adding = useSelector((state) => state.carsReducer.adding);

  const [open, setOpen] = useState(false);
  const [vin, setVin] = useState("");

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeVin = (e) => {
    setVin(e.target.value);
  };

  const handleAddCar = () => {
    dispatch(addCars(vin, clientId));
    setOpen(false);
  };

  return (
    <>
      <TableCell align="right">
        <Button
          variant="contained"
          color="primary"
          style={{ background: "orange", fontSize: 8 }}
          onClick={handleClickOpen}
        >
          добавить машину
        </Button>
      </TableCell>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Добавление машины"}</DialogTitle>
        <DialogContent style={classes.inputDiv}>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              id="outlined-basic"
              label="VIN"
              variant="outlined"
              style={classes.inputPosition}
              onChange={handleChangeVin}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={adding}
            style={classes.addBut}
            variant="contained"
            onClick={handleAddCar}
          >
            + добавить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddCarModal;
