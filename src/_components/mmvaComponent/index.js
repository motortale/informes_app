import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import qr from "./../../images/qr.png"
import caricon from "./../../images/car-icon.svg"
import gearhalf from "./../../images/gear-half-icon.svg"
import moment from 'moment'


const MmvaComponent = ({mmva: {dominio, marca, tipoVehiculo, modelo, version, ano, photoName}}) => {
    return (
        <div className="mt-5 pb-0 bggrey pt-5">
                <div className="container mt-2 main-card">
                    <div className="row pt-4">
                        <div className="col-md-12 text-right fz-30">
                            <svg className="bi bi-question-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-4 text-center fz-25">
                            <p contentEditable="true" suppressContentEditableWarning={true}>{ moment().format('L') }</p>
                            <p contentEditable="true" suppressContentEditableWarning={true}>#2043</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="domain">{dominio}</div>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={qr} alt="imagen_qr" className="w100"/>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-12 text-center">
                            <img src={caricon} alt="icon" />
                            <h3 className="title mt-2">Datos básicos</h3>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-6 text-center">
                            <img src={`https://vehiculosfotos.s3.amazonaws.com/${photoName}`} alt="" className="w90p"/>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="dato-basico">
                                <p className="label">Marca</p>
                                <p className="option" contentEditable="true" suppressContentEditableWarning={true}>{marca}</p>
                            </div>
                            <div className="dato-basico">
                                <p className="label">Modelo</p>
                                <p className="option" contentEditable="true" suppressContentEditableWarning={true}>{modelo} {version}</p>
                            </div>
                            <div className="dato-basico">
                                <p className="label">Año</p>
                                <p className="option" contentEditable="true" suppressContentEditableWarning={true}>{ano}</p>
                            </div>
                            <div className="dato-basico">
                                <p className="label">Registrado en</p>
                                <p className="option" contentEditable="true" suppressContentEditableWarning={true}>Adrogue N°5 (01264)</p>
                            </div>
                            <div className="dato-basico">
                                <p className="label">Patente bimestral</p>
                                <p className="option" contentEditable="true" suppressContentEditableWarning={true}>$ 2.533,60</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-6"> 
                    <img src={gearhalf} alt="gear" />
                </div>
            </div>
    )
}

MmvaComponent.propTypes = {
    mvva: PropTypes.shape({
        dominio: PropTypes.string.isRequired,
        marca: PropTypes.string.isRequired,
        tipoVehiculo: PropTypes.string.isRequired,
        modelo: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired,
        ano: PropTypes.string.isRequired,
        photoName: PropTypes.string.isRequired
    })
};

export default MmvaComponent;