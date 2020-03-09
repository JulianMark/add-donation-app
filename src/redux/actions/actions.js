import axios from 'axios';
import {  
        CHANGE_NAME,
        CHANGE_LASTNAME,
        CHANGE_AGE,
        CHANGE_GENDER,
        CHANGE_DNI, 
        CHANGE_AMOUNT, 
        CHANGE_PAY_TYPE, 
        OBTAIN_ALL_PAY_TYPES,
        ADD_DONATION,
        LOADING,
        ERROR,
        RELOAD,
        } from '../types/addDonationTypes';

export const changeName = (value) =>{
    return {
        type: CHANGE_NAME, 
        payload: value
    };  
}

export const changeLastname = (value) =>{
    return {
        type: CHANGE_LASTNAME, 
        payload: value
    };  
}

export const changeAge = (value) =>{
    return {
        type: CHANGE_AGE, 
        payload: value
    };  
}

export const changeGender = (value) =>{
    return {
        type: CHANGE_GENDER, 
        payload: value
    };  
}

export const changeDni = (value) =>{
    return {
        type: CHANGE_DNI, 
        payload: value
    };  
}

export const changeAmount = (value) =>{
    return {
        type: CHANGE_AMOUNT, 
        payload: value
    };  
}

export const changePayType = (value) =>{
    return {
        type: CHANGE_PAY_TYPE, 
        payload: value
    };  
}

export const reloadFrom = () =>{
    return {
        type: RELOAD,
    }
}

export const obtainPayTypes = () => async (dispatch) => {
    try{
        const response = await axios.get('http://localhost:9093/donations/paymentTypes');
        dispatch({
            type: OBTAIN_ALL_PAY_TYPES,
            payload: response.data.payTypesList
        }) 
    } catch (e) {
        dispatch({
            type:OBTAIN_ALL_PAY_TYPES,
            payload:[]
        })
    }
}

export const addDonation = (request) => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try{
        const response = await axios.post('http://localhost:9093/employee/donation/add',request);
        dispatch({
            type: ADD_DONATION,
            payload:response
        }) 
        dispatch({
            type: RELOAD
        })
        //asdasdasjkldh
    } catch (e) {
        dispatch({
            type:ERROR,
            payload:'Error al enviar donación'
        })
    }
}