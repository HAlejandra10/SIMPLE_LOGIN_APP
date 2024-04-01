// import React from 'react'
import  userReducer  from './UserReducers'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        userx: userReducer
    }
})

export default store