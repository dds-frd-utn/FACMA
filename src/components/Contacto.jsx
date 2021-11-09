import React from 'react'
import { Link } from 'react-router-dom';


const Contacto = () => {
    return (
        <div>
            <h1 className="text-center">Formulario de contacto</h1>
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombres:</label>
                            <input type="text" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Apellido:</label>
                            <input type="text" className="form-control" required />
                        </div>
                        <h4>Asunto:</h4>
                        <select name="asunto" className="form-select">
                            <option value="0" selected disabled>--Seleccione el motivo de contacto--</option>
                            <option value="Contado">Atención al cliente</option>
                            <option value="6cuotas">Tengo un problema al inscribirme a un curso</option>
                            <option value="12cuotas">No puedo conectarme a las clases en vivo</option>
                            <option value="12cuotas">Problemas con el medio de pago</option>
                            <option value="12cuotas">Otro</option>
                        </select>
                        <textarea placeholder="Escriba el motivo de su consulta" className="form-control my-3" rows="10"></textarea>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                            <Link className="btn btn-danger" to="/">Cancelar</Link>          
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacto
