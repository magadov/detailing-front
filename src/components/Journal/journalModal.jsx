import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, FormControl, TextField } from "@mui/material";
import css from "./journal.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addService } from "../../redux/features/services.reducer";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [car, setCar] = useState(null);
  const [client, setClient] = useState(null);

  const dispatch = useDispatch();
  const cars = useSelector((state) => state.carsReducer.cars.cars);
  const adding = useSelector((state) => state.servicesReducer.adding);
  const clients = useSelector((state) => state.clientsReducer.clients);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeCost = (e) => {
    setCost(e.target.value);
  };
  const handleChangeClient = (e) => {
    setClient(e.target.value);
  };
  const handleChangeCar = (e) => {
    setCar(e.target.value);
  };
  const handleAddService = () => {
    dispatch(addService(name, cost, car, client));
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addButton = {
    backgroundColor: "orange",
    height: 57,
    marginLeft: 100,
    fontSize: 12,
  };
  const servInput = { width: 400, marginRight: 20 };
  const addBtn = { backgroundColor: "orange", color: "white" };

  return (
    <div>
      <Button style={addButton} variant="contained" onClick={handleClickOpen}>
        + добавить услугу
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Добавление услуги"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className={css.inpStyle}>
              <TextField
                style={servInput}
                onChange={handleChangeName}
                id="outlined-basic"
                label="Название услуги"
                variant="outlined"
              />
              <TextField
                onChange={handleChangeCost}
                id="outlined-basic"
                label="Цена..."
                variant="outlined"
              />
            </div>
            <Box className={css.servSelect}>
              <FormControl sx={{ width: 270 }}>
                <TextField
                  id="outlined"
                  select
                  label="Машина"
                  onChange={handleChangeCar}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="" selected disabled hidden></option>
                  {cars?.map((car) => (
                    <option key={car._id} value={car._id}>
                      {car.vinData.model}
                    </option>
                  ))}
                </TextField>
              </FormControl>
              <FormControl sx={{ width: 270 }}>
                <TextField
                  id="outlined-select"
                  select
                  label="Клиент"
                  onChange={handleChangeClient}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="" selected disabled hidden></option>
                  {clients.map((client) => (
                    <option key={client._id} value={client._id}>
                      {client.firstName} {client.lastName}
                    </option>
                  ))}
                </TextField>
              </FormControl>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled={adding} style={addBtn} onClick={handleAddService}>
            Добавить
          </Button>
          <Button style={addBtn} onClick={handleClose}>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
