import React from 'react';
import './styles.css'

const FooterComponent = () => {
    return (
            <div className="container mt-5 text-center">
                <p className="fz-40">MOTORTALE</p>
                <h3>Contacto</h3>
                <h3><b>11 3369 3982</b></h3>
                <div className="mt-5 mb-4">
                    <button type="button" className="btn btn-primary fz-30 pl-5 pr-5">www.motortale.com</button>
                </div>
                <div>
                    <div className="mt-3 mb-4">
                        <a href="motortale.com" className="">Terminos y condiciones</a>
                    </div>
                </div>
                <div className="row footer">
                    <div className="col-md-6 text-left">
                        <div>© Motortale</div>
                        <div>Developed by MOTORTALE Team</div>
                    </div>
                    <div className="col-md-6 fz-40 text-right">
                        <a href="#" className="fa fa-envelope"></a>
                        <a href="#" className="fa fa-facebook ml-4"></a>
                        <a href="#" className="fa fa-instagram ml-4"></a>
                    </div>
                </div>
                
                <div className="text-center">
                    Copyright © 2020 by <a href="motortale.com">motortale.com</a>
                </div>
            </div>
    )
}

export default FooterComponent;