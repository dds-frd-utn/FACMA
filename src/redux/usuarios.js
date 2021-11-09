import { auth, firebase, db, storage } from '../firebase'

// data inicial
const dataInicial = {
    loading: false,
    activo: false
}

// types
const LOADING = 'LOADING'
const USUARIO_ERROR = 'USUARIO_ERROR'
const USUARIO_EXITO = 'USUARIO_EXITO'
const CERRAR_SESION = 'CERRAR_SESION'

// reducer
export default function usuarioReducer(state = dataInicial, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case USUARIO_ERROR:
            return { ...dataInicial }
        case CERRAR_SESION:
            return { ...dataInicial }
        case USUARIO_EXITO:
            return { ...state, loading: false, user: action.payload, activo: true }
        default:
            return { ...state }
    }
}

// actions
export const ingresoUsuarioAction = () => async (dispatch, getState) => {

    dispatch({
        type: LOADING
    })

    try {
        const provider = new firebase.auth.GoogleAuthProvider()
        const res = await auth.signInWithPopup(provider)

        const usuario = {
            uid: res.user.uid,
            email: res.user.email,
            displayName: res.user.displayName,
            photoURL: res.user.photoURL,
            formaPago: ''
        }

        const usuarioDB = await db.collection('usuarios').doc(usuario.email).get()

        if (usuarioDB.exists) {
            dispatch({
                type: USUARIO_EXITO,
                payload: usuarioDB.data()
            })
            localStorage.setItem('usuario', JSON.stringify(usuarioDB.data()))
        } else {
            await db.collection('usuarios').doc(usuario.email).set(usuario)
            dispatch({
                type: USUARIO_EXITO,
                payload: usuario
            })
            localStorage.setItem('usuario', JSON.stringify(usuario))
        }
    } catch (e) {
        console.log(e)
        dispatch({
            type: USUARIO_ERROR
        })
    }
}

export const loginUserAction = (email,pass) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        const res = await auth.signInWithEmailAndPassword(email, pass);

        const usuario = {
            uid: res.user.uid,
            email: res.user.email,
            displayName: '',
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/facma-cd9f2.appspot.com/o/1467646262_522853_1467646344_noticia_normal.jpg?alt=media&token=d0ec6fed-a39d-463d-8cba-35b6a711dc27',
            formaPago: ''
        }

        const usuarioDB = await db.collection('usuarios').doc(usuario.email).get()

        if (usuarioDB.exists) {
            dispatch({
                type: USUARIO_EXITO,
                payload: usuarioDB.data()
            })
            localStorage.setItem('usuario', JSON.stringify(usuarioDB.data()))
        } else {
            await db.collection('usuarios').doc(usuario.email).set(usuario)
            dispatch({
                type: USUARIO_EXITO,
                payload: usuario
            })
            localStorage.setItem('usuario', JSON.stringify(usuario))
        }
    } catch (e) {
        console.log(e)
        dispatch({
            type: USUARIO_ERROR
        })
    }
}

export const leerUsuarioActivoAction = () => (dispatch) => {
    if (localStorage.getItem('usuario')) {
        dispatch({
            type: USUARIO_EXITO,
            payload: JSON.parse(localStorage.getItem('usuario'))
        })
    }
}

export const cerrarSesionAction = () => (dispatch) => {
    auth.signOut();
    localStorage.removeItem('usuario')
    dispatch({
        type: CERRAR_SESION
    })
}

export const actualizarUsuarioAction = (nombreActualizado) => async (dispatch, getState) => {
    dispatch({
        type: LOADING
    })

    const { user } = getState().usuario

    try {
        await db.collection('usuarios').doc(user.email).update({
            displayName: nombreActualizado
        })

        const usuario = {
            ...user,
            displayName: nombreActualizado
        }

        dispatch({
            type: USUARIO_EXITO,
            payload: usuario
        })

        localStorage.setItem('usuario', JSON.stringify(usuario))

    } catch (e) {
        console.log(e)
    }
}

export const editarFotoAction = (imagenEditada) => async (dispatch, getState) => {
    dispatch({
        type: LOADING
    })
    const { user } = getState().usuario

    try {
        const imagenRef = await storage.ref().child(user.email).child('foto perfil')
        await imagenRef.put(imagenEditada)
        const imagenURL = await imagenRef.getDownloadURL()

        await db.collection('usuarios').doc(user.email).update({
            photoURL: imagenURL
        })

        const usuario = {
            ...user,
            photoURL: imagenURL
        }

        dispatch({
            type: USUARIO_EXITO,
            payload: usuario
        })

        localStorage.setItem('usuario', JSON.stringify(usuario))

    } catch (e) {
        console.log(e)
    }
}

export const editarFormaPagoAction = (formaPagoNew) => async (dispatch, getState) => {
    dispatch({
        type: LOADING
    })
    const { user } = getState().usuario

    try {
        await db.collection('usuarios').doc(user.email).update({
            formaPago: formaPagoNew
        })

        const usuario = {
            ...user,
            formaPago: formaPagoNew
        }

        dispatch({
            type: USUARIO_EXITO,
            payload: usuario
        })

        localStorage.setItem('usuario', JSON.stringify(usuario))

    } catch (e) {
        console.log(e)
    }
}

export const inscribirseAction = (cursoNew) => async (dispatch, getState) => {
    dispatch({
        type: LOADING
    })
    const { user } = getState().usuario

    try {
        console.log(user.cursos)
        await db.collection('usuarios').doc(user.email).update({
            cursos: cursoNew
        })

        const usuario = {
            ...user,
            cursos: cursoNew
        }

        dispatch({
            type: USUARIO_EXITO,
            payload: usuario
        })

        localStorage.setItem('usuario', JSON.stringify(usuario))

    } catch (e) {
        console.log(e)
    }
}