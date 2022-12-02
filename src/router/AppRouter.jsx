import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'

import {  } from '../heroes/pages/MarvelPage'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'


export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path='login' element={
              <PublicRouter>
                <LoginPage/>
              </PublicRouter>
            }/>

            {/* cualquier ruta que no sea login */}
            <Route path='/*' element={
              <PrivateRouter>
                <HeroesRoutes/>
              </PrivateRouter>
            }/>

            
            {/* <Route path='login' element={<LoginPage/>}/> */}
            {/* <Route path='/*' element={<HeroesRoutes/>}/> */}
        </Routes>
    </>
  )
}
