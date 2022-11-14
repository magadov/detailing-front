import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { deleteService } from "../../redux/features/services.reducer";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const classes = {
  addBut: {
    backgroundColor: "orange",
    color: "white",
    marginRight: 5,
  },
};
const ModalServiceDelete = ({ id }) => {
  const deleting = useSelector((state) => state.carsReducer.deleting);

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const handleClickDelete = (id) => {
    dispatch(deleteService(id))
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        disabled={deleting}
        style={{ background: "orange", fontSize: 8 }}
        onClick={handleClickOpen}
      >
        удалить
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Вы действительно хотите удалить услугу?"}</DialogTitle>
        <DialogActions style={{ color: "white" }}>
          <LoadingButton
            variant="contained"
            loading={deleting}
            style={{ backgroundColor: "orange" }}
            onClick={() => {
              handleClickDelete(id);
            }}
          >
            ДА
          </LoadingButton>
          <Button style={classes.addBut} onClick={handleClose}>
            НЕТ
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default ModalServiceDelete;
