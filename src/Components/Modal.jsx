import { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, 
                 animarModal, 
                 setAnimarModal, 
                 guardarGastos }) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(nombre.trim() === '' || cantidad <= 0 || categoria.trim() === ''){
            return
        }
        
        const gasto = {
            nombre,
            cantidad,
            categoria
        }

        guardarGastos(gasto)
    }

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 200)
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CerrarBtn} 
                    alt="Cerrar" 
                    onClick={ocultarModal}
                />
            </div>
            <form 
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
                onSubmit={handleSubmit}
            >
                <legend>Agregar Gastos</legend>
                <div className='campo'>
                    <label htmlFor="Nombre">Nombre del Gastos</label>
                    <input 
                        id='Name'
                        type="text" 
                        placeholder='Ej. Transporte'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="Cantidad">Cantidad del Gastos</label>
                    <input 
                        id='Amount'
                        type="Number" 
                        placeholder='Ej. 300'
                        value={cantidad}
                        onChange={(e) => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categoria" id="category" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="Alimentacion">Alimentacion</option>
                        <option value="Gasto">Transporte</option>
                        <option value="Hogar">Hogar</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Salud">Salud</option>
                        <option value="Gasto">Ropa</option>
                    </select>
                </div>
                <input type="submit" value="Añadir Gastos"/>
            </form>
        </div>
    )
}

export default Modal