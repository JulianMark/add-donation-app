import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';

import './App.css';

import TelegramIcon from '@material-ui/icons/Telegram';
import { TextField, Button}from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { obtainPayTypes, changePayType } from './redux/actions/actions';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const App = () => {

  const { amount, dni, payTypes,payType } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(
    ()=> {
      dispatch(
        obtainPayTypes()    
      );
  },[dispatch]);

  const onAmountChange = (e) => {
    //TODO
  }

  const onDniChange = (e) => {
    //TODO
  }

  const onPayTypeChange = (e) => {
    dispatch(changePayType(e.target.value));
  }

  const onSubmit = (e) => {
    //TODO
  }

  const classes = useStyles();

  return (
    <div className="App">
      <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
        <div>
            <TextField 
                label="Monto de donacion"
                type="number"
                variant="outlined"
                name="amount"
                onChange= {onAmountChange}
                value= {amount}
            />
        </div>
        <div>
            <TextField
            label="dni del donante"
            type="number"
            variant= "outlined" 
            name="dni"
            onChange= {onDniChange}
            value= {dni}
            />
        </div>
        <div>
          <TextField
              id="outlined-select-currency-native"
              select
              label="Tipo de pago"
              value={payType}
              onChange={onPayTypeChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {payTypes.map(option => (
                <option key={option.id} value={option.id}>
                  {option.description}
                </option>
              ))}
            </TextField>
        <div>
            <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<TelegramIcon/>}
            >
            Enviar
            </Button>
        </div>       
      </div>
    </form>
          
    </div>
  );
}

export default App;