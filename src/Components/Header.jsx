import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const header = ({presupuesto, setPresupuesto, IsvaluePresupuesto, setIsvaluePresupuesto, gastos, setGastos}) => {
    return (
        <div>
            <header>
                <h1>Planificador de Gastos</h1>
                {IsvaluePresupuesto ? (
                    <ControlPresupuesto
                        gastos={gastos}
                        setGastos={setGastos}
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsvaluePresupuesto={setIsvaluePresupuesto}
                    />
                ):(
                    <NuevoPresupuesto 
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsvaluePresupuesto={setIsvaluePresupuesto}
                    />
                )}
            </header>
        </div>
    );
}

export default header;