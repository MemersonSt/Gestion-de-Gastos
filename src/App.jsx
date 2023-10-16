import { useState, useEffect } from "react"
import Header from "./Components/Header"
import IconNuevoGastos from "./img/nuevo-gasto.svg"
import Modal from "./Components/Modal"
import { generarId } from "./Helpers"
import ListadoGastos from "./Components/ListadoGastos"
import Filtro from "./Components/Filtro"

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )//State to save the budget in the local storage
  const [IsvaluePresupuesto, setIsvaluePresupuesto] = useState(false)//State to validate the budget
  const [modal, setModal] = useState(false)//State to open the modal
  const [animarModal, setAnimarModal] = useState(false)//State to animate the modal
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )//State to save the bills
  const [editarGasto, setEditarGasto] = useState({})//State to edit the bills
  const [filtro, setFiltro] = useState('')//State to filter the bills
  const [gastosFiltrados, setGastosFiltrados] = useState([])//State to save the filtered bills

  useEffect(() => {
    if(Object.keys(editarGasto).length > 0) {
      console.log("Si contiene algo")
      setModal(true)
      setTimeout(() => {
      setAnimarModal(true)
    }, 100)
    }
  }, [editarGasto])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  },[presupuesto])

  useState(() =>{
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
    if(presupuestoLS > 0){
      setIsvaluePresupuesto(true)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('gasto', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    if(filtro){
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)
  }
  }, [filtro, gastos])

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
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        IsvaluePresupuesto={IsvaluePresupuesto}
        setIsvaluePresupuesto={setIsvaluePresupuesto}
      />

      {IsvaluePresupuesto && (
        <>
          <main>
            <Filtro 
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setEditarGasto={setEditarGasto}
              deleteGasto={deleteGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
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
