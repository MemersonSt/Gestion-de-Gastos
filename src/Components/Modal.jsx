import { useEffect, useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, 
                 animarModal, 
                 setAnimarModal, 
                 guardarGastos,
                 editarGasto,
                 setEditarGasto }) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if(Object.keys(editarGasto).length > 0){
            setNombre(editarGasto.nombre)
            setCantidad(editarGasto.cantidad)
            setCategoria(editarGasto.categoria)
            setId(editarGasto.id)
            setFecha(editarGasto.fecha)
        }
    }, [editarGasto])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(nombre.trim() === '' || cantidad <= 0 || categoria.trim() === ''){
            return
        }
        
        const gasto = {
            nombre,
            cantidad,
            categoria,
            id,
            fecha
        }

        guardarGastos(gasto)
    }

    const ocultarModal = () => {
        setAnimarModal(false)
        setEditarGasto({})
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
                <legend>{editarGasto.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
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
                <input 
                    type="submit" 
                    value={editarGasto.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}
                />
            </form>
        </div>
    )
}

export default Modal