const Filtro = ({filtro, setFiltro}) => {


  return (
    <div className='filtros sombra contenedor'>
        <form action="">
            <div className="campo">
                <label htmlFor="">Filtrar Gastos</label>
                <select 
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                >
                        <option value="">-- Todas las secciones --</option>
                        <option value="Alimentacion">Alimentacion</option>
                        <option value="Gasto">Transporte</option>
                        <option value="Hogar">Hogar</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Salud">Salud</option>
                    </select>
            </div>
        </form>
    </div>
  )
}

export default Filtro