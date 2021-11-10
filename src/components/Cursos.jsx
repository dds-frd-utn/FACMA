import React from 'react'
import { Link } from 'react-router-dom';
import {firebase} from '../firebase'

const Cursos = () => {

    const [cursos, setCursos] = React.useState([]);

    React.useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const db = firebase.firestore()
                const data = await db.collection('cursos').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setCursos(arrayData);
            } catch (e) {
                console.log(e);
            }
        }

        obtenerDatos();
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-md-4 mt-5">
                    <h1>Unite a nuestra gran comunidad de aprendizaje</h1>
                    <p>Clases online en vivo dictadas por expertos de la industria, enfoque 100% práctico, mentorías personalizadas y acceso a una comunidad de +15.000 estudiantes.</p>
                </div>
                <div className="col-md-8 text-center">
                    <img className="img-fluid" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png" alt="" />
                </div>
            </div>
            <hr/>
            <h3 className="text-center m-5">Testimonios</h3>
            <div className="row">
                <div className="col text-center">
                    <p>Empresa con una de las más innovadoras en educacion</p>
                    <img src="https://res.cloudinary.com/hdsqazxtw/image/upload/v1605986211/infobae_n3nhi9.svg" alt="" />
                </div>
                <div className="col text-center">
                    <p>Es la empresa que está revolucionando la educación online</p>
                    <img src="https://res.cloudinary.com/hdsqazxtw/image/upload/v1605986211/clarin_ezqu23.svg" alt="" />
                </div>
                <div className="col text-center">
                    <p>Educación online: la primera escuela 100% digital</p>
                    <img src="https://res.cloudinary.com/hdsqazxtw/image/upload/v1605986211/la_nacion_huw3bd.svg" alt="" />
                </div>
                <div className="col text-center">
                    <p>Es una de las promesas del 2021</p>
                    <img src="https://res.cloudinary.com/hdsqazxtw/image/upload/v1605986211/forbes_hwdiy1.svg" alt="" />
                </div>
            </div>
            <hr/>
            <div className="row mt-5">
                <div className="col-md 6 container">
                    <h1 className="text-center">Listado de cursos</h1>
                    <div className="row cursos">
                        {
                            cursos.map(curso => (
                                <div key={curso.nombre} className="col-sm text-center mt-5">
                                    <img className="img-curso" src={curso.imagen} alt="imagen curso" />
                                    <div>
                                        <p className="fw-bold">{curso.nombre}</p>
                                        <p className="precio-curso">${curso.valor}</p>
                                    </div>
                                    <Link className="btn btn-primary" to={"/detalle/" + curso.nombre}>Ver curso</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cursos
