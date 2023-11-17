import { useCart } from "../../../lib";
import styles from "./cart.item.module.css";

// En la descripción del ejercicio especifica que ningun componente debe tener props,
// pero para atomizar y renderizar de manera dinamica, es necesario tener props.

export const CartItem = ({ product }) => {
    // Desestructuramos las funcionalidades del hook del carrito de productos.
    const { handleEdit, handleDelete } = useCart();

    // Desestructuramos las caracteristicas del producto.
    const { id, name, price } = product;

    return (
        <li>
            {name} - $ {price}{" "}
            <button onClick={() => handleDelete(id)}>
                Eliminar
            </button>
            <form onSubmit={(e) => handleEdit(e, id)}>
                <input className={styles.edit} id="quantity" type="number" />
                <button>
                    Editar
                </button>
            </form>
        </li>
    );
};