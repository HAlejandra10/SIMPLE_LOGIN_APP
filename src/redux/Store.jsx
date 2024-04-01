import React from 'react'

const Store = configureStore({
    reducer: {
        userx: userReducer
    }
})

export default Store