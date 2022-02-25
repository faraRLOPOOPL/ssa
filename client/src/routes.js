import React from 'react'
import { Routes , Route, Navigate} from 'react-router-dom'
import { MainPage } from './pages/MainPage'


export const useRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
    )
}