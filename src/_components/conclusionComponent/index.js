import React from 'react';
import './styles.css'
import conclusionicon from "./../../images/conclusion-icon.svg"
import gearhalf from "./../../images/gear-half-icon.svg"
import PropTypes from 'prop-types';

const ConclusionComponent = ( {oraciones} ) => {
    return (
        <div className="bggray pt-4">
            <div className="container main-card p-5 ">
                <img src={conclusionicon} alt="" />
                <h3 className="mt-4">Conclusión</h3>
                
                { oraciones.map( (x, i) => <p key={i}>{x}</p> )}
                
            </div>

            <div className="text-center pt-6"> 
                <img src={gearhalf} alt="gear" />
            </div>
        </div>
    )
}

ConclusionComponent.propTypes = {
    oraciones: PropTypes.array.isRequired,
};

export default ConclusionComponent;