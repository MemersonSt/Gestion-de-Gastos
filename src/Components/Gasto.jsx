import iconsAhorro from '../img/icono_ahorro.svg'
import iconsCasa from '../img/icono_casa.svg'
import iconsComida from '../img/icono_comida.svg'
import iconsSalud from '../img/icono_salud.svg'
import iconsGasto from '../img/icono_gastos.svg'

const diccionarioIconos = {
    Ahorro: iconsAhorro,
    Hogar: iconsCasa,
    Alimentacion: iconsComida,
    Salud: iconsSalud,
    Gasto: iconsGasto
    
}

const Gasto = ({gasto}) => {
  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
            <img 
                src={diccionarioIconos[gasto.categoria]} 
                alt="Icono gasto" 
            />
            <div className="descripcion-gasto">
                <p className="categoria">{gasto.categoria}</p>
                <p className="nombre-gasto">{gasto.nombre}</p>
                <p className="fecha-gasto">Agregado el: <span>{gasto.fecha}</span></p>
            </div>
        </div>
        <p className="cantidad-gasto">${gasto.cantidad}</p>
    </div>
  )
}

export default Gasto