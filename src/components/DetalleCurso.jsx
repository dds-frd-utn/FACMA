import React from 'react'
import { useParams } from 'react-router';
import { db } from '../firebase'
import { useDispatch } from 'react-redux'
import { inscribirseAction } from '../redux/usuarios'

const DetalleCurso = () => {

    const dispatch = useDispatch()

    const { cursoName } = useParams();
    const [imagenCurso, setimagenCurso] = React.useState('');
    const [valorCurso, setvalorCurso] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');
    const [profesor, setProfesor] = React.useState('');
    const [curso, setCurso] = React.useState('');
    const [inscripto, setInscripto] = React.useState(false);
    const [fav, setFav] = React.useState(false);


    const cursosRef = db.collection("cursos");

    const query = cursosRef.where("nombre", "==", cursoName)

    const inscribir = (curso) => {
        dispatch(inscribirseAction(curso));
        setInscripto(true);
    }

    query.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setCurso(doc.data())
                setimagenCurso(doc.data().imagen)
                setvalorCurso(doc.data().valor)
                setDescripcion(doc.data().descripcion)
                setProfesor(doc.data().profesor)
            });
        })
        .catch((e) => {
            console.log(e);
        });

    return (
        <div className="row">
            <div className="col">
                <div className="col-sm text-center mt-5">
                    <img className="img-curso" src={imagenCurso} alt="imagen curso" />
                    <p className="mt-5">{descripcion}</p>
                    <p className="mt-5 fw-bold">Profesor a cargo: <span className="fw-normal">{profesor}</span></p>
                </div>
            </div>
            <div className="curso-inscribir col text-center mt-5">
                <h1 className="mb-5">Inscribite en nuestro curso de {cursoName}</h1>
                <p><svg xmlns="http://www.w3.org/2000/svg" className="text-primary bi bi-check" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>Corrección de proyectos prácticos</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" className="text-primary bi bi-check" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>Tutor personalizado</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" className="text-primary bi bi-check" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>Clases online en vivo con expertos</p>
                <select name="Forma-pago" className="form-select">
                    <option value="0" selected disabled>--Seleccione una forma de pago--</option>
                    <option value="Contado">Contado - ${valorCurso}</option>
                    <option value="6cuotas">6 cuotas de ${Math.round(valorCurso / 6 * 1.10)}</option>
                    <option value="12cuotas">12 cuotas de ${Math.round(valorCurso / 12 * 1.25)}</option>
                </select>
                <p></p>
                <button className="btn btn-danger" onClick={() => inscribir(curso)}>Inscribirse</button>
                <p></p>

                <button className="btn btn btn-outline-danger" onClick={() => setFav(true)}>♥ Añadir a favoritos</button>
                {inscripto ?
                    (<div class="alert alert-success mt-3" role="alert">
                        Felicidades, te has inscripto al curso de {cursoName}
                    </div>)

                    :
                    (<p></p>)
                }
                {fav ?
                    (<div class="alert alert-danger mt-3" role="alert">
                        Añadido a Favoritos!
                    </div>)

                    :
                    (<p></p>)
                }
            </div>


        </div>
    )
}

export default DetalleCurso
