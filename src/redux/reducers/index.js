import { CHANGE_AMOUNT, OBTAIN_ALL_PAY_TYPES, CHANGE_PAY_TYPE } from '../types/addDonationTypes';

const initialState = {
    nombre: 'hello',
    apellido: null,
    users: [],
    payTypes: [],
    payType: 1,
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CARGAR_USUARIOS':return { ...state, users: action.payload }
        case CHANGE_AMOUNT: return {...state, amount:action.value};
        case OBTAIN_ALL_PAY_TYPES: return {...state, payTypes:action.payload};
        case CHANGE_PAY_TYPE: return {...state, payType:action.value};
        default: return initialState;
    }
};

export default rootReducer;