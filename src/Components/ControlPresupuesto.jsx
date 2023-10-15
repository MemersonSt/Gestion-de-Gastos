import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, gastos}) =>{
    const [totalGastado, setTotalGastado] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString("es-US", {
            style: "currency",
            currency: "USD"
        })
    }

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
        const disponible = presupuesto - totalGastado
        const porcentaje = (totalGastado / presupuesto) * 100
        setPorcentaje(porcentaje)
        setTotalGastado(totalGastado)
        setDisponible(disponible)
    } , [gastos, presupuesto])

    return(
        <div className="contenedor contenedor-presupuesto sombra dos-columnas">
            <div>
                <CircularProgressbar 
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                    styles={buildStyles({
                        pathColor: "#3B8F6",
                        trailColor: "#F5F5F5",
                        textColor: "#3B8F6"
                    })}
                />
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