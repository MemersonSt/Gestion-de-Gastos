import Gasto from "./Gasto"

const ListadoGastos = ({gastos, setEditarGasto, deleteGasto}) => {
  return (
    <div className="contenedor listado-gastos">
        <h2>{gastos.length ? "Gastos" : "Aun no hay gastos registrado"}</h2>
        {gastos.map(gasto => (
          <Gasto
            key={gasto.id}//Se le agrega un key para que react sepa que elemento se esta modificando
            gasto={gasto}//the object "gasto" is passed as a prop
            setEditarGasto={setEditarGasto}
            deleteGasto={deleteGasto}
          />
        ))}
    </div>
  )
}

export default ListadoGastos