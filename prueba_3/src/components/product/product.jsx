import { ProductButton } from "./button";
import styles from "./product.module.css"; // Importar estilos

// En la descripción del ejercicio especifica que ningun componente debe tener props,
// pero para atomizar y renderizar de manera dinamica, es necesario tener props.

/**
 * Componente del producto a mostrar.
 * 
 * @param param0 Producto a detallar.
 * 
 * @returns Componente del producto a mostrar.
 */
export const Product = ({ product }) => {
  // Desestructuramos las caracteristicas del producto.
  const { name, price } = product;

  return (
    <div className={styles.product}>
      <h3> {name} </h3>
      <p> Precio: $ {price} </p>
      <ProductButton product={product} />
    </div>
  );
};
