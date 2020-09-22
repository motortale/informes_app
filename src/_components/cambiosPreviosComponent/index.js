import React from 'react';
import './styles.css'
import reload from "./../../images/reload-icon.svg"
import SemaforoComponent from './../../_components/semaforoComponent'
import PropTypes from 'prop-types';

const CambiosPreviosComponent = ( { headertext, eventos } ) => {
    return (
            <div className="container mt-5 mb-5">
                <div className="card">
                    <div className="mt-card">
                        <img src={reload} alt="" />
                        <h2 className="mt-3 mb-4 fs35">Cambios previos</h2>
                        <SemaforoComponent headertext={headertext} eventos={eventos}/>
                    </div>
                </div>
            </div>
    )
}

CambiosPreviosComponent.propTypes = {
    headertext: PropTypes.string.isRequired,
    eventos: PropTypes.arrayOf(PropTypes.shape({
        descripcion: PropTypes.string,
        evento:  PropTypes.string,
        eventoDescripcion:  PropTypes.string,
        eventoGrupo:  PropTypes.string,
        fechaReporte:  PropTypes.string,
        fechaSuceso:  PropTypes.string,
        gravedad:  PropTypes.number,
        gravedadInforme:  PropTypes.number,
        id_Evento:  PropTypes.number,
        id_EventoGrupo:  PropTypes.number
    }))
};

export default CambiosPreviosComponent;