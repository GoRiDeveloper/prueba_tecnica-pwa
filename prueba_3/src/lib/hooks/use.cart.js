import { getCartState, useCartActions, useAppSelector } from "../";

/**
 * Hook de las funcionalidades para manipular el carrito de productos.
 * 
 * @returns Funcionalidades para manipular el carrito de productos.
 */
export const useCart = () => {
    // Estado del carrito de productos.
    const cart = useAppSelector(getCartState);

    // Desestructuramos las funcionalidades del carrito de la aplicación.
    const { addProdToCart, deleteProduct, editProductCart } = useCartActions();

    /**
     * Cantidad de productos totales.
     */
    const totalProducts = cart.reduce((total, product) => total + product.quantity, 0);

    /**
     * Función para añadir producto al carrito.
     */
    const handleAddProduct = (product) => addProdToCart(product);

    /**
     * Función para editar la cantidad del producto en el carrito.
     * 
     * @param e Evento del elemento.
     */
    const handleEdit = (e, id) => {
        // Prevenimos el evento por defecto.
        e.preventDefault();

        /**
         * Valor del input con el id "quantity".
         */
        const value = parseInt(e.target.quantity.value.trim());

        // Validación para valores nulos o negativos.
        if (value < 0)
            return alert("El valor no puede ser negativo.");

        /**
         * Información del producto con la cantidad modificada.
         */
        const productData = {
            id,
            quantity: value
        };

        if (value === 0)
            // Función para eliminar el producto del carrito.
            deleteProduct(id);
        else
            // Funcion para editar la cantidad del producto en el carrito.
            editProductCart(productData);

        // Reseteo del input.
        e.target.reset();
    }

    /**
     * Función para eliminar el producto del carrito.
     * 
     * @param id Id del producto a eliminar.
     */
    const handleDelete = (id) => {
        deleteProduct(id)
    };

    return {
        totalProducts,
        handleAddProduct,
        handleEdit,
        handleDelete
    };
};