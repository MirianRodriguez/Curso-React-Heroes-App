import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'

import {  } from '../heroes/pages/MarvelPage'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={<LoginPage/>}/>
            {/* cualquier ruta que no sea login */}
            <Route path='/*' element={<HeroesRoutes/>}/>
        </Routes>
    </>
  )
}
