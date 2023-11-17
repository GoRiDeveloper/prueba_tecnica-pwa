import { CartItem } from "./cart_item";
import { useAppSelector, getCartState } from "../../lib";
import styles from "./cart.module.css";

/**
 * Componente del carrito de productos.
 * 
 * @returns Carrito de productos.
 */
export const Cart = () => {
  // Desestructuramos los estados de la aplicación.
  const cart = useAppSelector(getCartState);

  /**
   * Cantidad de productos totales.
   */
  const totalProducts = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className={styles.cart}>
      <h2> Carrito de Compras </h2>
      <h2> Productos: {totalProducts} </h2>

      <ul>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
