import React from 'react'
import { Link } from 'react-router-dom';


const TrabajaNosotros = () => {
    return (
        <div>
            <h1 className="text-center my-5">Envianos tu CV</h1>
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombres:</label>
                            <input type="text" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Apellido:</label>
                            <input type="text" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Edad:</label>
                            <input type="number" class="form-control" required />
                        </div>

                        <label className="form-label">Dejanos un mensaje:</label>
                        <textarea placeholder="Describa sus experiencias y conocimientos" className="form-control" rows="10" required></textarea>
                        <div class="my-3">
                            <label for="formFile" class="form-label">Adjunta tu CV:</label>
                            <input class="form-control" type="file" id="formFile"/>
                        </div>
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

export default TrabajaNosotros
