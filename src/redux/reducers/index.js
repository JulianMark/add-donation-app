import { CAMBIAR_NOMBRE } from "../actions/types";

const initialState = {
    nombre: null,
    apellido: null,
    users: [],
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case CAMBIAR_NOMBRE:
            return { ...state, nombre: action.nuevoNombre }
        case 'CAMBIAR_APELLIDO':
            return { ...state, apellido: action.nuevoApellido }
        case 'CARGAR_USUARIOS':
            return { ...state, users: action.payload }
        default:
            return initialState;
    }
};

export default rootReducer;