import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Spinner from '../src/components/Spinner';
import Fatal from '../src/components/Fatal';
import Ok from '../src/components/Ok';


import TelegramIcon from '@material-ui/icons/Telegram';
import { 
  Grid, TextField, Button, Container, CssBaseline
}from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import {  
  changeName, changeLastname, changeAge, changeGender, 
  changeDni, changeAmount, changePayType, obtainPayTypes,
  addDonation, reloadFrom
} from './redux/actions/actions';

const genders = [
  {value :"F", label: "FEMENINO"},
  {value: "I", label: "INDEFINIDO"},
  {value: "M", label: "MASCULINO"}
];

const App = () => {

  const { 
    amount, name, lastname, age, 
    gender, dni, payTypes, payType,
    idCampaign, idEmployee, response,
    loading, error
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(
    ()=> {
      dispatch(
        obtainPayTypes()    
      );
  },[dispatch]);

  const onNameChange = (e) => {
    dispatch(changeName(e.target.value));
  }
  
  const onLastnameChange = (e) => {
    dispatch(changeLastname(e.target.value));
  }

  const onAgeChange = (e) => {
    dispatch(changeAge(e.target.value));
  }

  const onGenderChange = (e) => {
    dispatch(changeGender(e.target.value));
  }

  const onDniChange = (e) => {
    dispatch(changeDni(e.target.value));
  }

  const onAmountChange = (e) => {
    dispatch(changeAmount(e.target.value));
  }

  const onPayTypeChange = (e) => {
    dispatch(changePayType(e.target.value));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let request = {
      "age": age,
      "amount": amount,
      "dni": dni,
      "gender": gender,
      "idCampaign": idCampaign,
      "idEmployee": idEmployee,
      "lastName": lastname,
      "name": name,
      "payType": payType
    }
    dispatch(addDonation(request));
  }

  const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      },
    },
  })(TextField);

  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  const putResult = () => {
    if (error) {
      return <Fatal message= { error }/>;
    }
    if(response.status === 200){
      return <Ok />
    }
  }

  /* const disabledButton = () => {
    if(!amount || !name || !lastname || !age || !dni ){
      return true;
    }
    return false;
  } */

  const putContent = () => {
    if (loading) {
      return <Spinner/>; 
    }
    
    return <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <form className={classes.form} noValidate onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ValidationTextField 
            variant="outlined"
            required
            fullWidth
            label="Nombre del donante"
            type="text"
            name="name"
            size="small"
            onChange= {onNameChange}
            value= {name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ValidationTextField 
            variant="outlined"
            required
            fullWidth
            label="Apellido del donante"
            type="text"
            name="lastname"
            size="small"
            onChange= {onLastnameChange}
            value= {lastname}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <ValidationTextField 
            variant="outlined"
            required
            fullWidth
            label="Edad"
            type="number"
            name="age"
            size="small"
            onChange= {onAgeChange}
            value= {age}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ValidationTextField 
            variant= "outlined" 
            required
            fullWidth
            label="D.N.I"
            type="number"
            name="dni"
            size="small"
            onChange= {onDniChange}
            value= {dni}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            variant="outlined"
            id="outlined-select-currency-native"
            fullWidth
            select
            label="Genero"
            size="small"
            value={gender}
            onChange={onGenderChange}
            SelectProps={{
              native: true,
            }}
          >
            {genders.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ValidationTextField 
            variant="outlined"
            required
            fullWidth
            label="Monto de donacion"
            type="number"
            name="amount"
            size="small"
            onChange= {onAmountChange}
            value= {amount}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            id="outlined-select-currency-native"
            select
            label="Tipo de pago"
            size="small"
            value={payType}
            onChange={onPayTypeChange}
            SelectProps={{
              native: true,
            }}
          >
            {payTypes.map(option => (
              <option key={option.id} value={option.id}>
                {option.description}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button 
            className={ classes.submit}
            disabled={true}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<TelegramIcon/>}
          >
          Enviar
          </Button>
        </Grid>       
      </Grid>
    </form>
    </div>
    <div>{putResult()}</div>
  </Container>; 
  } 
  return (
    <div>{putContent()}</div>
  );
}

export default App;