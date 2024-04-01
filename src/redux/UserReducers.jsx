import React from 'react'
import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    name: "",
    lastname: "",
    email: "",
    password:"",
    number: "",
}

const UserSlice = createSlice({
    name: "users", 
    initialState,
    reducers: {
        
    }
})

export default UserSlice