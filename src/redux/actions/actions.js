import axios from 'axios';
import {  OBTAIN_ALL_PAY_TYPES, CHANGE_PAY_TYPE } from '../types/addDonationTypes';


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

export const changePayType = (value) => (dispatch) =>{
    dispatch({
        type: CHANGE_PAY_TYPE, 
        value
    })
    
}