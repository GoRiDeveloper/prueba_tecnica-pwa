import { CartItem } from "./cart_item";
import { useAppSelector, useCart, getCartState } from "../../lib";
import styles from "./cart.module.css";

/**
 * Componente del carrito de productos.
 * 
 * @returns Carrito de productos.
 */
export const Cart = () => {
  // Estado del carrito de productos.
  const cart = useAppSelector(getCartState);

  // Desestructuramos las funcionalidades del hook del carrito de productos.
  const { totalProducts } = useCart();

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
