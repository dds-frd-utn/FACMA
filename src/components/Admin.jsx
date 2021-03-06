import React from 'react'
import { Link} from 'react-router-dom'


const Admin = () => {
    return (
        <div className="text-center mt-5">
            <h1 className="my-5">Zona de administracion</h1>
            <Link className="btn btn-secondary fw-bold col-12" to='/listadoAlumnos'>Ver listado de estudiantes</Link>
            <Link className="btn btn-secondary fw-bold col-12 mt-2" to='/listadoProfesores'>Ver listado de profesores</Link>
            <Link className="btn btn-secondary fw-bold col-12 mt-2" to='/listadoCursos'>ABM cursos</Link>      
        </div>
    )
}

export default Admin
