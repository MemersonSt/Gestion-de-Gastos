import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const header = ({presupuesto, setPresupuesto, IsvaluePresupuesto, setIsvaluePresupuesto, gastos}) => {
    return (
        <div>
            <header>
                <h1>Planificador de Gastos</h1>
                {IsvaluePresupuesto ? (
                    <ControlPresupuesto
                        gastos={gastos}
                        presupuesto={presupuesto}
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