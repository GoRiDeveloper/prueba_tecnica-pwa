import { configureStore } from "@reduxjs/toolkit";

import { cart } from "./slice";

/**
 * Configuración de la store de la aplicación.
 */
export const makeStore = configureStore({
    reducer: {
        cart
    }
});