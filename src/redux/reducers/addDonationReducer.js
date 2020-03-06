import { CHANGE_AMOUNT, OBTAIN_ALL_PAY_TYPES, CHANGE_PAY_TYPE } from '../types/addDonationTypes';

const INITIAL_STATE = {
    amount: '',
    payType: '',
    idEmployee: 1,
    idCampaign: 2,
    dni: '',
    name: '',
    lastName: '',
    age: '',
    gender: '',
    result: '',
    payTypes: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_AMOUNT: return {...state, amount:action.value};
        case OBTAIN_ALL_PAY_TYPES: return {...state, payTypes:action.payload};
        case CHANGE_PAY_TYPE: return {...state, payType:action.value};
        default: return state;
    }
}

