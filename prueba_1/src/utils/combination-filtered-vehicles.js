/**
 * Función donde se filtran los vehículos por el valor de busqueda.
 * 
 * @param data Arreglo de los vehículos.
 * @param value Valor de busqueda.
 *  
 * @returns Vehículos filtrados por el parametro de busqueda.
 */
export const combinationFilteredVehicles = (data, value) => {
    /**
     * Vehículos filtrados.
     */
    const filteredData = data.filter(vehicle => {
        /**
         * Vehículos filtrados por marca.
         */
        const brandMatch = vehicle.marca.toLowerCase().includes(value);

        /**
         * Vehículos filtrados por descripción.
         */
        const descMatch = vehicle.descripcion_corta.toLowerCase().includes(value);

        /**
         * Vehículos filtrados por modelo.
         */
        const modelMatch = vehicle.modelo.toLowerCase().includes(value);

        return brandMatch || descMatch || modelMatch;
    });

    return filteredData;
};