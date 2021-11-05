import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <footer className="page-footer font-small blue pt-4">

                <div className="container-fluid text-center text-md-left">

                    <div className="row">

                        <div className="col-md-6 mt-md-0 mt-3">

                            <h5 className="text-uppercase text-muted fw-bold">Suscribite a nuestro Newsletter</h5>
                            <input type="mail" />
                            <button className="btn btn-secondary fw-bold">Suscribirse</button>

                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3" />

                        <div className="col-md-6 mb-md-0 mb-3">

                            <h5 className="text-uppercase text-muted fw-bold">Nosotros</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-light text-decoration-none">Empresa</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-light text-decoration-none">Trabaja con nosotros</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-light text-decoration-none">Terminos de uso</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-light text-decoration-none">Contáctanos</a>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
                <div className="footer-copyright text-center py-3 text-light">© 2021 Facma SRL - Todos los derechos reservados
                </div>

            </footer>
        </div>
    )
}

export default Footer
