import { useCartActions } from "../../../lib";
import styles from "./cart.item.module.css";

// En la descripción del ejercicio especifica que ningun componente debe tener props,
// pero para atomizar y renderizar de manera dinamica, es necesario tener props.

export const CartItem = ({ product }) => {
    // Desestructuramos las funcionalidades del carrito de la aplicación.
    const { deleteProduct, editProductCart } = useCartActions();

    // Desestructuramos las caracteristicas del producto.
    const { id, name, price } = product;

    /**
     * Función para borrar del carrito el producto.
     */
    const handleDelete = () => deleteProduct(id);

    /**
     * Función para editar la cantidad del producto en el carrito.
     * 
     * @param e Evento del elemento.
     */
    const handleEdit = (e) => {
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

    return (
        <li>
            {name} - $ {price}{" "}
            <button onClick={handleDelete}>
                Eliminar
            </button>
            <form onSubmit={handleEdit}>
                <input className={styles.edit} id="quantity" type="number" />
                <button>
                    Editar
                </button>
            </form>
        </li>
    );
};