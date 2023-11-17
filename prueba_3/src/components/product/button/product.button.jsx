import { useCartActions } from "../../../lib";

// En la descripción del ejercicio especifica que ningun componente debe tener props,
// pero para atomizar y renderizar de manera dinamica, es necesario tener props.

/**
 * Componente del botón para añadir al carrito.
 * 
 * @returns Botón para añadir al carrito.
 */
export const ProductButton = ({ product }) => {
    // Desestructuramos las funcionalidades del carrito de la aplicación.
    const { addProdToCart } = useCartActions();

    /**
     * Función para añadir producto al carrito.
     */
    const handleAddProduct = () => addProdToCart(product);

    return (
        <button onClick={handleAddProduct}>
            Agregar al carrito
        </button>
    );
};