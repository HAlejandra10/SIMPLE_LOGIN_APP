import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    name: "",
    lastname: "",
    email: "",
    password:"",
    number: "",
}

export const userSlice = createSlice({
    name: "users", 
    initialState,
    reducers: {
        addUser: (state,action) =>{
            const{name, lastname, email, password, number} = action.payload;
            state.name = name;
            state.lastname = lastname;
            state.email = email;
            state.password = password;
            state.number = number;
        },
        updateUser: (state, action) => {
            state.name = action.payload;
            state.lastname =  action.payload;
            state.email =  action.payload;
            state.password =  action.payload;
            state.number =  action.payload;
        },
    }
})

export const {addUser, updateUser} = userSlice.actions
export default userSlice.reducer