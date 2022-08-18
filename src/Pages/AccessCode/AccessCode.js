import React, { useContext } from 'react'
import { LoginContext } from '../../App';
import { AccessCodeForm } from './AccessCodeForm';
import { Navigate } from 'react-router-dom';


export const AccessCode = () => {

    const loginContext = useContext(LoginContext);

    return (
        <>
            {loginContext.login === "true" ? <Navigate to='/gameselect' /> : <AccessCodeForm />}
        </>
    )
}
