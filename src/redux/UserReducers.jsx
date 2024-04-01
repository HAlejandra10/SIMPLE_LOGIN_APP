import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    name: "",
    lastname: "",
    email: "",
    password:"",
    number: "",
}

const userSlice = createSlice({
    name: "users", 
    initialState,
    reducers: {

    }
})

export default userSlice