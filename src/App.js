import React, { useEffect } from 'react';
import './App.css';
import { cambiarNombre, cambiarApellido, obtainPayTypes, changePayType } from './redux/actions/actions';
import { useSelector, useDispatch} from 'react-redux';
import Usuarios from './redux/Usuarios';
import { Grid, TextField, Typography }from '@material-ui/core';
import {useState} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
   overrides: {
     PrivateNotchedOutline: {
       legend: {
         width: '265px !important',
       }
     }
   },
 });

function App() {

  const { nombre, apellido, payTypes } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [payType, setPayType] = useState ('');
   useEffect(()=> {
    dispatch(
      obtainPayTypes()
    );
  },[dispatch]) 

  const onChangePayType = (e) => {
    setPayType(e.target.value);
  }
  const onChange = (event) => {
    dispatch(
      cambiarNombre(event.target.value)
    );
  }

  const onApellidoChange = (event) => {
    dispatch(cambiarApellido(event.target.value));
  }
  return (
    <div className="App">
      <input
        id="nombre"
        type="text"
        onChange={onChange}
      />
      <p>{nombre}</p>
      <input
        id="apellido"
        type="text"
        onChange={onApellidoChange}
      />
      <p>{apellido}</p>
      <ThemeProvider theme={theme} >
        <Grid>
            <TextField
                id="outlined-select-currency-native"
                select
                label="Tipo de pago"
                value={payType}
                onChange={onChangePayType}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {payTypes.map(option => (
                  <option key={option.id} value={option.description}>
                    {option.description}
                  </option>
                ))}
              </TextField>
              <Typography variant="subtitle2"></Typography>
         </Grid>
         <Grid>
                            <TextField
                              fullWidth
                              label="Como gostaria de ser chamad  o ou chamada?"
                              name="name"
                              value={"hello"}
                              variant="outlined"
                            />
                            <Typography variant="subtitle2">
                            </Typography>
  
      </Grid>
      </ThemeProvider>
      
    </div>
  );
}

export default App;