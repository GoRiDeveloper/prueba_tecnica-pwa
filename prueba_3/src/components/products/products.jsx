import { Product } from "../";
import productsData from "../../products.json";
import styles from "../../App.module.css";

export const Products = () => {
    return (
        <div className={styles.productList}>
            {productsData.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
};