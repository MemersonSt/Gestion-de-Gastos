import { useEffect, useState } from "react"

const ControlPresupuesto = ({presupuesto, gastos}) =>{
    const [totalGastado, setTotalGastado] = useState(0)
    const [disponible, setDisponible] = useState(0)

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString("es-US", {
            style: "currency",
            currency: "USD"
        })
    }

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
        const disponible = presupuesto - totalGastado
        setTotalGastado(totalGastado)
        setDisponible(disponible)
    } , [gastos, presupuesto])

    return(
        <div className="contenedor contenedor-presupuesto sombra dos-columnas">
            <div>
                <p>Rueda de presupuesto</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span>{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastados: </span>{formatearCantidad(totalGastado)}
                </p>

            </div>
        </div>
    )
}

export default ControlPresupuesto;