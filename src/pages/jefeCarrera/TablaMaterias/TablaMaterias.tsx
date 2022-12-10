import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Form from "../../../views/form/Form";
import "./tablaMaterias.css";

function TablaMaterias() {
    const [newMateria, setNewMateria] = useState(false)

    return (
        <div className="tabla-view">
                                <Form state={newMateria} props={['Nombre', 'Inicio', 'Fin', 'Horario', 'Dueño', 'Carrera', 'Docente']}/>
            <div className="materias-buttons">
                <div className="views">
                    <button><Link to={'calendario'}>Calendario</Link></button>
                    <button><Link to={''}>Tabla</Link></button>
                    <button onClick={() => setNewMateria(!newMateria)}>Crear Materia</button>
                </div>
                {/* <div className="search-bar">
                    <form className="search-form">
                        <label htmlFor="search"></label>
                        <input
                            type="text"
                            id="search"
                            placeholder="&#xF002; Search"
                            style={{
                                fontFamily: "Arial, FontAwesome",
                            }}
                        />
                    </form>
                </div> */}
            </div>
            <Outlet />
        </div>
    );
}

export default TablaMaterias;
