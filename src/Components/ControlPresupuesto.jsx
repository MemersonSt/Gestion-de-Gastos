import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, setPresupuesto, gastos, setGastos, setIsvaluePresupuesto}) =>{
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
        const nuevoPorcentaje = (((presupuesto - disponible) / presupuesto) * 100).toFixed(2)

        setTotalGastado(totalGastado)
        setDisponible(disponible)
            setTimeout(() => {
                setPorcentaje(nuevoPorcentaje)
            }, 200)
        
    } , [gastos, presupuesto])

    const handleReset = () => {
        const confirmar = window.confirm("¿Estas seguro de resetear la app?")
        if(confirmar){
            setPresupuesto(0)
            setGastos([])
            setIsvaluePresupuesto(false)
            return
        } 
    }

    return(
        <div className="contenedor contenedor-presupuesto sombra dos-columnas">
            <div>
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: porcentaje < 100 ? '#FF0000' : '#3B8F6', 
                        trailColor: "#F5F5F5",
                        textColor: porcentaje > 100 ? '#FF0000' : '#3B8F6'
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>
            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    type="button"
                    onClick={handleReset}
                >
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p
                    className={disponible < 0 ? "negativo" : ''}
                >
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