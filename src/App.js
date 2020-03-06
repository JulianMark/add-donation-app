import React, { useEffect } from 'react';
import './App.css';
import { cambiarNombre, cambiarApellido, traerDatos2 } from './redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import Usuarios from './redux/Usuarios';


function App() {

  const { nombre, apellido } = useSelector((state) => state);
  const dispatch = useDispatch();

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
      
    </div>
  );
}

export default App;