import axios from 'axios';
import { CAMBIAR_NOMBRE } from './types';
import {  OBTAIN_ALL_PAY_TYPES, CHANGE_PAY_TYPE } from '../types/addDonationTypes';

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

export const obtainPayTypes = () => async (dispatch) => {
    try{
        //const response = await axios.get('http://localhost:9093/donations/paymentTypes');
        dispatch({
            type: OBTAIN_ALL_PAY_TYPES,
            payload: [{id:1,description:'DEBITO'},{id:2,description:'CREDITO'}]//response.data.payTypesList
        }) 
    } catch (e) {
        dispatch({
            type:OBTAIN_ALL_PAY_TYPES,
            payload:[]
        })
    }
}

export const changePayType = (value) => {
    return {
        type: CHANGE_PAY_TYPE, 
        value
    }
}