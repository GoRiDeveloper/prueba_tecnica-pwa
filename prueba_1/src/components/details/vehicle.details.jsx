export const VehicleDetails = ({ vehicle }) => {
    return (
        <article className="vehicle">
            <h3 className="vehicle__title"> Vehículo </h3>
            
            <p className="vehicle__desc">{ vehicle.marca }</p>
            <p className="vehicle__desc">{ vehicle.modelo }</p>
            <p className="vehicle__desc">{ vehicle.descripcion_corta }</p>
        </article>
    );
};