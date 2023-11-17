import { useAppDispatch } from "./";
import { addProductToCart, deleteProductToCart, editQuantity, emptyCart } from "../../lib";

/**
 * Hook de las funcionalidades de la store de la aplicación.
 * 
 * @returns Funcionalidades de la store.
 */
export const useCartActions = () => {
    /**
     * Despachador de las funcionalidades de los estados globales de la aplicación.
     */
    const dispatch = useAppDispatch();

    /**
     * Función para eliminar un producto
     */
    const deleteProduct = (id) => {
        dispatch(deleteProductToCart(id));
    };

    /**
     * Función para editar la cantidad de productos añadidos en el carrito.
     */
    const editProductCart = (productData) => {
        dispatch(editQuantity(productData));
    };

    /**
     * Función para añadir un producto al carrito.
     */
    const addProdToCart = (product) => {
        dispatch(addProductToCart(product));
    };

    /**
     * Función para vaciar el carrito de productos.
     */
    const emptyCartAction = () => dispatch(emptyCart);

    return {
        deleteProduct,
        editProductCart,
        addProdToCart,
        emptyCartAction
    };
};