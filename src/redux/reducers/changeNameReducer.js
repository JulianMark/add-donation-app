import { CAMBIAR_NOMBRE } from "../actions/types";
import { CHANGE_AMOUNT, OBTAIN_ALL_PAY_TYPES, CHANGE_PAY_TYPE } from '../types/addDonationTypes';

const initialState = {
    nombre: 'hello',
    apellido: null,
    users: [],
    payTypes: [],
    payType: '',
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case CAMBIAR_NOMBRE:
            return { ...state, nombre: action.nuevoNombre }
        case 'CAMBIAR_APELLIDO':
            return { ...state, apellido: action.nuevoApellido }
        case 'CARGAR_USUARIOS':
            return { ...state, users: action.payload }
        case CHANGE_AMOUNT: return {...state, amount:action.value};
        case OBTAIN_ALL_PAY_TYPES: return {...state, payTypes:action.payload};
        case CHANGE_PAY_TYPE: return {...state, payType:action.value};
        default:
            return initialState;
    }
};

export default rootReducer;