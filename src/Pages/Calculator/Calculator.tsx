import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import './Calculator.scss';

const Calculator = () => {


    return (
        <div>
            <Alert severity="error">This is an error alert — check it out!</Alert>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">This is a success alert — check it out!</Alert>

            <Button >
                Open success snackbar
            </Button>
            <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information message!</Alert>
            <Alert severity="success">This is a success message!</Alert>
        </div>
    );
};

export default Calculator;
