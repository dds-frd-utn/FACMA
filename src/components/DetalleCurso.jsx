import React from 'react'
import { useParams } from 'react-router';
import {db} from '../firebase'



const DetalleCurso = () => {

    const { cursoName } = useParams();
    const [imagenCurso, setimagenCurso] = React.useState('');
    const [valorCurso, setvalorCurso] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');


    const cursosRef = db.collection("cursos");

    const query = cursosRef.where("nombre", "==", cursoName)

    query.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                setimagenCurso(doc.data().imagen)
                setvalorCurso(doc.data().valor)
                setDescripcion(doc.data().descripcion)
            });
        })
        .catch((e) => {
            console.log(e);
        });

    return (
        <div>
            <h3 className="text-center">{cursoName}</h3>
            <div className="col-sm text-center mt-5">
                <img className="img-curso" src={imagenCurso} alt="imagen curso" />
                <div>
                    <p className="mt-5">{descripcion}</p>
                    <p className="precio-curso fw-bold">${valorCurso} - Precio contado</p>
                    <p className="precio-curso fw-bold">6 cuotas de ${Math.round(valorCurso/6*1.10)} </p>
                    <p className="precio-curso fw-bold">12 cuotas de ${Math.round(valorCurso/12*1.25)} </p>
                    <button className="btn btn-danger">Inscribirse</button>
                </div>
            </div>
        </div>
    )
}

export default DetalleCurso
