import { useState } from "react";
import Menssage from "./Message";

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsvaluePresupuesto}) => {
    const [menssage, setMenssage] = useState("")

    const handlePresupuesto = (e) => {
        e.preventDefault()
        if(!presupuesto || presupuesto < 1) {
            setMenssage("No es un presupuesto válido")
            return;
        }
        setMenssage("")
        setIsvaluePresupuesto(true)
        
    }

  return (
    <div className="contenedor contenedor-presupuesto sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
            <label>Definir el Presupuesto</label>
            <input
                className="nuevo-presupuesto" 
                type="Number"
                placeholder="Añade tu presupuesto"
                value={presupuesto}
                onChange={e => setPresupuesto(Number(e.target.value))}
            />
        </div>
        <input type="submit" value="Añadir"/>
        {menssage && <Menssage type="error">{menssage}</Menssage>}
      </form>
    </div>
  );
}

export default NuevoPresupuesto;