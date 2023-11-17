import { useContext } from "react";
import { SearchContext } from "../context";

/**
 * Hook para usar el contexto para las busquedas de la aplicación..
 * 
 * @returns Contexto para las busquedas de la aplicación.
 */
export const useSearchContext = () => {
    return useContext(SearchContext);
};