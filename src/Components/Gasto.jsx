import {LeadingActions, 
        SwipeableList, 
        SwipeableListItem, 
        SwipeAction, 
        TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
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

const Gasto = ({gasto, setEditarGasto, deleteGasto}) => {
  const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={() => setEditarGasto(gasto)}>
            Editar
        </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
        <SwipeAction 
            onClick={() => deleteGasto(gasto.id)}
            destructive={true}
        >
            Eliminar
        </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
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
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto