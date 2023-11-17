import { createSlice } from "@reduxjs/toolkit";

/**
 * Estado inicial de la store de productos.
 */
const initialState = [];

/**
 * Slice para configurar el estado de productos de la aplicación.
 */
export const cartSlice = createSlice({
    // Nombre del estado global.
    name: "cart",
    // Estado inicial del estado global.
    initialState,
    // Funcionalidades del estado global.
    reducers: {
        /**
         * Función para añadir un producto al carrito.
         * 
         * @param state Estado global del carrito.
         * @param action Acción a realizar en el estado del carrito.
         * 
         * @returns Carrito con los productos agregados.
         */
        addProductToCart: (state, action) => {
            /**
             * ID del producto a añadir.
             */
            const productId = action.payload.id;
            /**
             * Verificamos si ya existe el producto en el carrito.
             */
            const productExists = state.find(product => product.id === productId);

            if (productExists) {
                productExists.quantity++
            } else {
                state.push({ ...action.payload, quantity: 1 });
            };
        },
        /**
         * Función para eliminar un producto al carrito.
         * 
         * @param state Estado global del carrito.
         * @param action Acción a realizar en el estado del carrito.
         * 
         * @returns Carrito con los productos eliminados.
         */
        deleteProductToCart: (state, action) => 
            state.filter(product => product.id !== action.payload),
        /**
         * Función para editar la cantidad de productos en el carrito.
         * 
         * @param state Estado global del carrito.
         * @param action Acción a realizar en el estado del carrito.
         * 
         * @returns Carrito con los productos del carrito.
         */
        editQuantity: (state, action) => {
            /**
             * ID del producto a añadir.
             */
            const productId = action.payload.id;
            /**
             * Verificamos si ya existe el producto en el carrito.
             */
            const productExists = state.find(product => product.id === productId)
            // Editamos la cantidad del producto.
            productExists.quantity = action.payload.quantity
        },
        /**
         * Función para vaciar el carrito.
         * 
         * @param state Estado global del carrito.
         * @param action Acción a realizar en el estado del carrito.
         * 
         * @returns Carrito vacío.
         */
        emptyCart: (state, action) => initialState
    }
});

// Acciones para manipular el estado del carrito.
export const { addProductToCart, deleteProductToCart, editQuantity, emptyCart } = cartSlice.actions;

// Estado global del carrito.
export const getCartState = (store) => store.cart;

// Devolver el reducer del slice.
export default cartSlice.reducer;