import { createContext, useMemo, useState, useCallback } from "react";

import { combinationFilteredVehicles } from "../utils";
import info from "../carts.json";

/**
 * Referencia de la creación del contexto de busqueda.
 */
export const SearchContext = createContext();

/**
 * Proveedor del contexto de busqueda de la aplicación.
 * 
 * @param0 Propiedades del componente de contexto de busqueda de la aplicación.
 * 
 * @returns Proveedor del contexto de busqueda de la aplicación.
 */
export const SearchContextProvider = ({ children }) => {

    // Estado para la guardar la información de los items del JSON.
    const [data] = useState(() => info.data.getCarInsurance.items ?? null);
    // Estado para guardar los vehículos encontrados.
    const [foundVehicles, setFoundVehicles] = useState([]);

    /**
     * Manejador de las busquedas de la aplicación.
     */
    const handleSearch = useCallback(
        (value) => {
            // Vaciamos el arreglo de los vehiculos encontrados, si no esta vacio.
            if (foundVehicles.length > 0) {
                setFoundVehicles([]);
            };

            /**
             * Vehículos filtrados.
             */
            const leakedVehicles = combinationFilteredVehicles(data, value);

            // Cambiamos el estado de los vehículos encontrados.
            setFoundVehicles(leakedVehicles);
        },
        []
    );

    /**
     * Memorización de los valores del contexto de busqueda.
     */
    const value = useMemo(() => ({
        data,
        foundVehicles,
        handleSearch
    }), [data, foundVehicles, handleSearch]);

    return (
        <SearchContext.Provider value={value}>
            { children }
        </SearchContext.Provider>
    );  
};