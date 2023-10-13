import { useState } from "react"
import Header from "./Components/Header"
import IconNuevoGastos from "./img/nuevo-gasto.svg"
import Modal from "./Components/Modal"
import { generarId } from "./Helpers"
import ListadoGastos from "./Components/ListadoGastos"

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [IsvaluePresupuesto, setIsvaluePresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  const HandleModal = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 100)
  }
//function to save the bills
  const guardarGastos = (gasto) => {
    gasto.id = generarId();
    gasto.fecha = new Date().toLocaleDateString();
    setGastos([...gastos, gasto])
    console.log(gasto)
//Close the modal when saving the bills
    setAnimarModal(false)
    setModal(false)
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
                />}
    </div>
  )
}

export default App
