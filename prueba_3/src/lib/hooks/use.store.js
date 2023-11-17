import { useDispatch, useSelector } from "react-redux";

/**
 * Hook para devolver los estados de la aplicación.
 */
export const useAppSelector = useSelector;

/**
 * Hook para despachar las acciones de estados globales de la aplicación.
 */
export const useAppDispatch = useDispatch;