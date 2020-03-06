import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cargarUsuarios } from './actions/actions';

const Usuarios = () => {

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(cargarUsuarios());
        },
        [dispatch]
    )

    return (
        <>
            {JSON.stringify(users)}
        </>
    )
}

export default Usuarios;