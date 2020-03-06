import axios from 'axios';
import { CAMBIAR_NOMBRE } from './types';

export const cambiarNombre = (nuevoNombre) => {
    return {
        type: CAMBIAR_NOMBRE,
        nuevoNombre
    }
}

export const cambiarApellido = (nuevoApellido) => {
    return {
        type: 'CAMBIAR_APELLIDO',
        nuevoApellido
    }
}

export const cargarUsuarios = () => async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return dispatch({
        type: 'CARGAR_USUARIOS',
        payload: response.data
    })
}