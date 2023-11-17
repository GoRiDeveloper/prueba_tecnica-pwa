import { useSearchContext } from "../../hooks";
import { VehicleDetails } from "./";

/**
 * Componente de detalles de la busqueda.
 */
export const Details = () => {
    // Obtenemos las funcionalidades del contexto de busqueda.
    const { foundVehicles } = useSearchContext();

    return (
        <>
            <h2 className="details"> Detalles de los vehículos. </h2>
            {foundVehicles.map((vehicle, i) => (
                <VehicleDetails key={`vehicle.llave_axa${i * Math.random()}`} vehicle={vehicle} />
            ))}
            {foundVehicles.length < 1 && (
                <h3 className="details__notFound"> No hay vehículos disponibles. </h3>
            )}
        </>
    );
};