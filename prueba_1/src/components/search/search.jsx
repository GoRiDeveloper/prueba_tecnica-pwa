import { useSearchContext } from "../../hooks";

/**
 * Componente del input de busqueda de la aplicación.
 */
export const Search = () => {
    // Obtenemos las funcionalidades del contexto de busqueda.
    const { handleSearch } = useSearchContext();

    /**
     * Función para manejar las busquedas realizadas en la aplicación.
     */
    const handleSubmit = (e) => {
        // Prevenimos la acción por defecto del evento submit del formulario.
        e.preventDefault();

        /**
         * Valor del input con id "search".
         */
        const value = e.target.search.value.trim();

        // Si el valor del input esta vacío, devolvemos una alerta de advertencia.
        if (!value) return alert("El buscador no puede estar vacío.");
        
        // Enviamos el valor al manejador de busquedas.
        handleSearch(value.toLowerCase());

        // Limpiamos el formulario, una vez realizada la busqueda.
        e.target.reset();
    };

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input id="search" className="search__input" type="text" />
            <button className="search__submit"> Buscar </button>
        </form>
    );
};