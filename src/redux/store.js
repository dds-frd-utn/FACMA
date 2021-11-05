import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
 
import usuarioReducer, {leerUsuarioActivoAction} from './usuarios'
 
const rootReducer = combineReducers({
    usuario: usuarioReducer
})
 
export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    leerUsuarioActivoAction()(store.dispatch)
    return store
}