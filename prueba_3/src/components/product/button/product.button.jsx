import { useCart } from "../../../lib";

// En la descripción del ejercicio especifica que ningun componente debe tener props,
// pero para atomizar y renderizar de manera dinamica, es necesario tener props.

/**
 * Componente del botón para añadir al carrito.
 * 
 * @returns Botón para añadir al carrito.
 */
export const ProductButton = ({ product }) => {
    // Desestructuramos las funcionalidades del hook del carrito de productos.
    const { handleAddProduct } = useCart();

    return (
        <button onClick={() => handleAddProduct(product)}>
            Agregar al carrito
        </button>
    );
};