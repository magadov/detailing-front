import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {Box, TextField} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Admission = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addButton = {
        backgroundColor: "orange",
        fontSize: 12,
        marginLeft: 100,
        color: "white",
        height: 57
    };
    // const inputFormMain = {
    //     width: 600,
    //     margin: "auto",
    //     padding: "40px 0 0 20px",
    //     display: "flex",
    //     justifyContent: "space-between"
    // }
    const nameInput = {
        width: 300,
        margin: "0 20 20 0"
    }

    return (
        <div >
            <Button style={addButton} variant="contained" onClick={handleClickOpen} >
                + добавить материал
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"

            >
                <DialogTitle>{"Добавление материала"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <TextField
                            id="outlined-basic"
                            label="Наименование"
                            variant="outlined"
                            style={nameInput}
                            // onChange={(event) => setSearch(event.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Цена"
                            variant="outlined"
                            // style={priceInput}
                            // onChange={(event) => setSearch(event.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Цена"
                            variant="outlined"
                            // onChange={(event) => setSearch(event.target.value)}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Admission;