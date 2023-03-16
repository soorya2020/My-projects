import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cardSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice,
        
    }
})

export default store