import React from 'react'

const Store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default Store