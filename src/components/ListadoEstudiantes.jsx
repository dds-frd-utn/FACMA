import React from 'react'
import {firebase} from '../firebase'

const ListadoEstudiantes = () => {
    const [usuarios, setUsuarios] = React.useState([]);

    React.useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const db = firebase.firestore()
                const data = await db.collection('usuarios').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setUsuarios(arrayData);
            } catch (e) {
                console.log(e);
            }
        }

        obtenerDatos();
    }, [])

    return (
        <div>
            <h2 className="text-center mb-5">Listado de estudiantes</h2>
            <div className="row lista-usuarios text-center table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Forma de pago</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    {
                        usuarios.map(usuario => (
                            <tbody key={usuario.displayName}>
                                <tr className="align-middle">
                                    <td><img className="img-perfil rounded-circle" src={usuario.photoURL} alt="imagen alumno" /></td>
                                    <td>{usuario.displayName}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.formaPago}</td>
                                    <td>
                                        <svg className="icon-action" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                        <p></p>
                                        <svg className="icon-action" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                        <p></p>
                                        <svg className="icon-action" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg></td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>

            </div>
        </div>
    )
}

export default ListadoEstudiantes
