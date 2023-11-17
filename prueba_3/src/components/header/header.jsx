import { Cart } from "../";

/**
 * Componente de la cabecera de la página.
 * 
 * @returns Cabecera de la página.
 */
export const Header = () => {
    return (
        <header>
            <h1> Mi Tienda </h1>
            <Cart />
        </header>
    )
};