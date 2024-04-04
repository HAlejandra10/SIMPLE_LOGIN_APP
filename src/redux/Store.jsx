// import React from 'react'
import  userReducer  from './UserReducers'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        users: userReducer
    }
})

export default store