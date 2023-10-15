import { useState, useEffect } from "react"
import Header from "./Components/Header"
import IconNuevoGastos from "./img/nuevo-gasto.svg"
import Modal from "./Components/Modal"
import { generarId } from "./Helpers"
import ListadoGastos from "./Components/ListadoGastos"

function App() {
  const [presupuesto, setPresupuesto] = useState(0)//State to save the budget
  const [IsvaluePresupuesto, setIsvaluePresupuesto] = useState(false)//State to validate the budget
  const [modal, setModal] = useState(false)//State to open the modal
  const [animarModal, setAnimarModal] = useState(false)//State to animate the modal
  const [gastos, setGastos] = useState([])//State to save the bills
  const [editarGasto, setEditarGasto] = useState({})//State to edit the bills

  useEffect(() => {
    if(Object.keys(editarGasto).length > 0) {
      console.log("Si contiene algo")
      setModal(true)
      setTimeout(() => {
      setAnimarModal(true)
    }, 100)
    }
  }, [editarGasto])

  const HandleModal = () => {
    setModal(true)
    setEditarGasto({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 100)
  }
//function to save the bills
  const guardarGastos = (gasto) => {
    if(gasto.id){
      //Update the bill
      const gastoActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastoActualizado)
      setEditarGasto({})
    } else{
      //Add the new bill
      gasto.id = generarId();
      gasto.fecha = new Date().toLocaleDateString();
      setGastos([...gastos, gasto])
      console.log(gasto)
    }
//Close the modal when saving the bills
    setAnimarModal(false)
    setModal(false)
  }

//Function to delete the bills
  const deleteGasto = (id) => {
    const gastoEliminado = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastoEliminado)
  }

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        IsvaluePresupuesto={IsvaluePresupuesto}
        setIsvaluePresupuesto={setIsvaluePresupuesto}
      />

      {IsvaluePresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setEditarGasto={setEditarGasto}
              deleteGasto={deleteGasto}
            />
          </main>
          <div className="nuevo-gasto">
            <img 
              src={IconNuevoGastos} 
              alt="Icon" 
              onClick={HandleModal}
            />
          </div>
        </>
      )}
      {modal && <Modal 
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGastos={guardarGastos}
                    editarGasto={editarGasto}
                    setEditarGasto={setEditarGasto}
                />}
    </div>
  )
}

export default App
