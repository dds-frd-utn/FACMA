import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cerrarSesionAction } from '../redux/usuarios'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router'


const Navbar = (props) => {
    const dispatch = useDispatch()

    const cerrarSesion = () => {
        dispatch(cerrarSesionAction())
        props.history.push('/login')
    }

    const activo = useSelector(store => store.usuario.activo)

    return (
        <div className="navbar navbar-dark bg-dark p-3 navbar-default navbar-fixed-top">
            <Link className="navbar-brand ml-5" to="/">Facma SRL</Link>
            <form className="form-inline my-2 my-lg-0 d-flex">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                <button className=" bi bi-searchbtn btn-outline-success my-2 my-sm-0" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></button>
            </form>
            <div className="d-flex">
                {
                    activo ? (
                        <>
                            <NavLink className="btn btn-dark mr-2" to="/" exact>Inicio</NavLink>
                            <NavLink className="btn btn-dark mr-2" to="/admin" exact>Admin</NavLink>
                            <NavLink className="btn btn-dark mr-2" to="/listadoAlumnos" exact>Listado de estudiantes</NavLink>
                            <NavLink className="btn btn-dark mr-2" to="/calendario" exact>Calendario estudiantil</NavLink>
                            <NavLink className="btn btn-dark mr-2" to="/perfil" exact>Perfil</NavLink>
                            <button className="btn btn-dark mr-2" onClick={() => cerrarSesion()}>Cerrar sesion</button>
                        </>
                    ) : (
                        <NavLink className="btn btn-dark mr-2" to="/login">Login</NavLink>
                    )
                }
            </div>
        </div>
    )
}

export default withRouter(Navbar)
