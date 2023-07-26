import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';




import './Calculator.scss';

const Calculator: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleSnackbarClose = (event: React.SyntheticEvent<any, Event> | Event, reason: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const myArr = { name: 'happy', clothes: { top: 'one', trousers: 'two', socks: 'three' } };

    const arrClone = structuredClone(myArr);

    // console.log(myArr.at(-1));
    console.log('bruh', arrClone);


    return (
        <div>
            <Alert severity="error">This is an error alert — check it out!</Alert>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">This is a success alert — check it out!</Alert>

            <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Box sx={{ width: '100%' }}>
                    <Alert onClose={handleClose} severity="success">
                        This is a success message!
                    </Alert>
                </Box>
            </Snackbar>
            <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information message!</Alert>
            <Alert severity="success">This is a success message!</Alert>
        </div>
    );
};

export default Calculator;
