import { StoreProvider } from "./store.provider";

/**
 * Componente de los proveedores de la aplicación.
 * 
 * @param param0 Propiedades del componente proveedor.
 * 
 * @returns Proveedores de la aplicación.
 */
export const Providers = ({ children }) => {
    return (
        <StoreProvider>
            { children }
        </StoreProvider>
    );
};