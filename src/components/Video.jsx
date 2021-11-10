import React from 'react'
import { useSelector } from 'react-redux'

const Video = () => {

    const usuario = useSelector(store => store.usuario.user)

    return (
        <div class="embed-responsive embed-responsive-16by9">
            <h1 className="text-center my-5">Bienvenido al curso de {usuario.cursos.nombre}</h1>
            <iframe className="embed-responsive-item" width="1264" height="716" src="https://www.youtube.com/embed/vJTeIJx_Kn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Video
