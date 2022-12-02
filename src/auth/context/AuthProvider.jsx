import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

// initialState ya no es necesario porque la función init ya establece el estado inicial tomando del localStorage

// const initialState = {
//   logged: false,
// }

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = '') => {

    const user = {
      id: 'ABC',
      name: name,
    }

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type:types.logout,
    };
    dispatch(action);
  }

  //al usar un provider, en el value va lo que quiero exponer
  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
