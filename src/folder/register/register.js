import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import * as Yup from 'yup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {
    Row,
    Card,
    CardTitle,
    CardBody,
    Nav,
    NavItem,
    TabContent,
    TabPane,
    CardHeader,
    Collapse,
    Input,
    FormText,
    FormGroup,
    // Button,
    // ButtonGroup
} from 'reactstrap';
import { Colxx, Separator } from '../../components/common/CustomBootstrap'
import AppBar from '../loginFolder/appBar';

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

const Register = (props) => {
    const classes = useStyles();
    const history = useHistory();
    console.log("props", props)

    const [formFields, setFormFields] = useState({
        firstname: '',
        lastname: ''
    });
    const [formErrors, setFormErrors] = useState({
        firstname: '',
        lastname: ''
    });
    const [validations, setValidations] = useState({
        firstname: Yup.string().required("Please enter the first name"),
        lastname: Yup.string().required("Please enter the last name")
    });

    const OnChangeHandler = (name, value) => {

        let temp = { ...formFields };
        temp[name] = value;
        setFormFields(temp);

    };
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
                    console.log("successfully submitted for register")
                    history.push("/home")
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        
<div className={classes.root}>
<AppBar />
            <div className="pos-center">
                <Row>
                    <h1 className="pos-center">Register</h1>
                </Row>
                <Row>
                    <form className={classes.root} autoComplete="off">
                        <Colxx xxs="12" sm="4" md="4" className="mb-1-display">
                            <TextField id="standard-basic" label="First Name" onChange={(event) => {
                                OnChangeHandler('firstname', event.target.value);
                            }} />
                            <FormText className="color-red">
                                {formErrors['firstname']}
                            </FormText>
                        </Colxx>


                        <Colxx xxs="12" sm="4" md="4" className="mb-1-display">
                            <TextField id="standard-basic" label="Last Name" onChange={(event) => {
                                OnChangeHandler('lastname', event.target.value);
                            }} />
                            <FormText className="color-red">
                                {formErrors['lastname']}
                            </FormText>
                        </Colxx>


                        {/* <Button onClick={submitForm}> Submit</Button> */}
                    </form>
                    <Row>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                            {/* <Button onClick={submitForm}> Submit</Button> */}
                            <Link><p onClick={submitForm} className='p-t-l-r'> SUBMIT</p></Link>
                            <Link><p onClick={props.toggle} className='p-t-l-r'> LOGIN</p></Link>
                            {/* <Button onClick={props.toggle}>Login</Button> */}
                        </ButtonGroup>

                    </Row>
                </Row>


            </div>
            </div>
    )

}
export default Register;