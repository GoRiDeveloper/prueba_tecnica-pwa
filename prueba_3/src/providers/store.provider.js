import { Provider } from "react-redux";

import { makeStore } from "../lib";

/**
 * Componente del proveedor de la store de estados globales.
 * 
 * @param param0 Propiedades del componente proveedor.
 * 
 * @returns Proveedor de la store de estados globales.
 */
export const StoreProvider = ({ children }) => {
    return (
        <Provider store={makeStore}>
            { children }
        </Provider>
    );
};