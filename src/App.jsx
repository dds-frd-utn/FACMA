import React from 'react'
import Cursos from './components/Cursos';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login';
import Navbar from './components/Navbar';
import { auth } from './firebase';
import Perfil from './components/Perfil';
import DetalleCurso from './components/DetalleCurso';
import Footer from './components/Footer';
import ListadoEstudiantes from './components/ListadoEstudiantes';
import Admin from './components/Admin';
import ListadoProfesores from './components/ListadoProfesores';
import ListadoCursos from './components/ListadoCursos';
import Reset from './components/Reset';
import TerminosyCond from './components/TerminosyCond';
import Contacto from './components/Contacto';
import TrabajaNosotros from './components/TrabajaNosotros';
import SobreNosotros from './components/SobreNosotros';
import Faqs from './components/Faqs';
import Calendario from './components/Calendario';
import Video from './components/Video';

function App() {

const [firebaseUser, setFirebaseUser] = React.useState(false)

React.useEffect(() => {
  const fetchUser = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  }
  fetchUser()
}, [])

const RutaPrivada = ({component, path,...rest}) =>{
  if(localStorage.getItem('usuario')){
    const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
    if(usuarioStorage.uid === firebaseUser.uid){
      return <Route component={component} path={path} {...rest} />
    }else{
      return <Redirect to="/login" {...rest}/>
    }
  }else{
    return <Redirect to="/login" {...rest}/>
  }
}

  return firebaseUser !== false ? (
    <Router>
      <Navbar />
      <div className="mt-3 px-5">
        <Switch>

          <RutaPrivada component={Cursos} path="/" exact />
          <RutaPrivada component={Admin} path="/admin"/>
          <RutaPrivada component={ListadoEstudiantes} path="/listadoAlumnos"/>
          <RutaPrivada component={TerminosyCond} path="/terminosycond"/>
          <RutaPrivada component={Contacto} path="/contacto"/> 
          <RutaPrivada component={Calendario} path="/calendario"/> 
          <RutaPrivada component={Video} path="/video"/> 
          <RutaPrivada component={SobreNosotros} path="/sobre-nosotros"/>
          <RutaPrivada component={Faqs} path="/preguntas-frecuentes"/>
          <RutaPrivada component={TrabajaNosotros} path="/trabaja-con-nosotros"/>
          <RutaPrivada component={Reset} path="/reset"/>
          <RutaPrivada component={ListadoCursos} path="/listadoCursos" exact />
          <RutaPrivada component={ListadoProfesores} path="/listadoProfesores" exact />
          <RutaPrivada component={Perfil} path="/perfil" exact />
          <RutaPrivada component={DetalleCurso} path="/detalle/:cursoName" exact />
          <Route component={Login} path="/login" exact />
        </Switch>
      </div>
      <Footer/>

    </Router>
  ) : (<div>Cargando..</div>)
}

export default App;
