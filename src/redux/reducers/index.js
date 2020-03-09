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

const initialState = {
    idEmployee: 1,
    idCampaign: 2,
    name: '',
    lastname: '',
    age: '',
    gender: 'F',
    dni: '',
    amount: '',
    payType: 1,
    payTypes: [{
        "id": 1,
        "description": "description"
      }],
    response: '',
    loading: false,
    error:'',
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_NAME: return {...state, name:action.payload};
        case CHANGE_LASTNAME: return {...state, lastname:action.payload};
        case CHANGE_AGE: return {...state, age:action.payload};
        case CHANGE_GENDER: return {...state, gender:action.payload};
        case CHANGE_DNI: return {...state, dni:action.payload};
        case CHANGE_AMOUNT: return {...state, amount:action.payload};
        case CHANGE_PAY_TYPE: return {...state, payType:action.payload};
        case OBTAIN_ALL_PAY_TYPES: return {...state, payTypes:action.payload};
        case ADD_DONATION: return {...state, response:action.payload, loading:false, error:''};
        case LOADING: return {...state, loading: true, error:''};
        case ERROR: return {...state, error: action.payload, loading:false}
        case RELOAD: return initialState;
        default: return initialState;
    }
};

export default rootReducer;