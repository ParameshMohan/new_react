import React, { useState, useEffect, useLocalStorage } from 'react'
// import { useLocalStorage } from './useLocalStorage';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {
    Row,
    FormText,
} from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap'

import AppBar from './appBar';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            // width: '25ch',
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
          },
          title: {
            flexGrow: 1
          }
    },
}));


// const useStyles1 = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1
//     },
//     menuButton: {
//       marginRight: theme.spacing(2)
//     },
//     title: {
//       flexGrow: 1
//     }
//   }));
const LoginPage = (props) => {
    const history = useHistory();
    const [status, setStatus] = useState(true)
    const classes = useStyles();
    // const classes1 = useStyles1();
    const [formFields, setFormFields] = useState({
        username: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({
        username: '',
        password: ''
    });


    const [validations, setValidations] = useState({
        username: Yup.string().required("Please enter the username"),
        password: Yup.string().required("Please enter the password")
    });
    const isFormValid = async () => {
        let temp = { ...formErrors };
        let valid = true;
        for (let name of Object.keys(validations)) {
            try {
                let result = await validations[name].validate(formFields[name]);
                if (result === formFields[name]) {
                    temp[name] = '';
                }
            } catch (err) {
                temp[name] = err.message;
                valid = false;
            }
        }
        setFormErrors(temp);
        return valid;
    };

    const submitForm = () => {
        isFormValid()
            .then((valid) => {
                if (valid) {
                    history.push("/home")
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };



    const OnChangeHandler = (name, value) => {

        let temp = { ...formFields };
        temp[name] = value;
        setFormFields(temp);

    };


    return (
        
            <div className={classes.root}>
                {/* <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar> */}
<AppBar />

                <div className="pos-center">
                    <Row>
                        <h1 className="pos-center"> Login </h1>
                    </Row>
                    <Row>
                        <form className={classes.root} autoComplete="off" >
                            <Colxx xxs="12" sm="4" md="4" className="mb-1-display">
                                <TextField id="standard-basic" label="Username" onChange={(event) => {
                                    OnChangeHandler('username', event.target.value);
                                }} />
                                <FormText className="color-red">
                                    {formErrors['username']}
                                </FormText>
                            </Colxx>


                            <Colxx xxs="12" sm="4" md="4" className="mb-1-display">
                                <TextField id="standard-basic" label="Password" onChange={(event) => {
                                    OnChangeHandler('password', event.target.value);
                                }} />
                                <FormText className="color-red">
                                    {formErrors['password']}
                                </FormText>
                            </Colxx>



                        </form>
                        <Row>
                            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">

                                <Link><p onClick={submitForm} className='p-t-l-r'> SUBMIT</p></Link>
                                <Link><p onClick={props.toggle} className='p-t-l-r'> REGISTER</p></Link>

                            </ButtonGroup>

                        </Row>
                    </Row>

                </div>
            </div>



        
    )
}

export default LoginPage;