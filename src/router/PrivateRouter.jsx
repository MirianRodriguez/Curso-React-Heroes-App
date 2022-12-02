import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext'

//este es un higger order component
//verifica en el contexto si el usuario está logueado, si lo hace devuelve los hijos (los componentes que envuelve)
//si no, manda al login
export const PrivateRouter = ({children}) => {

    const {logged} = useContext(AuthContext);

    const {pathname, search} = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

  return (logged)
    ? children
    : <Navigate to = '/login'/>
}
