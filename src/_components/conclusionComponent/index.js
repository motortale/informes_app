import React from 'react';
import './styles.css'
import conclusionicon from "./../../images/conclusion-icon.svg"
import PropTypes from 'prop-types';

const ConclusionComponent = ( {oraciones} ) => {
    return (
        <div className="bggraygradient pt-4 pb-4">
            <div className="container main-card p-5 ">
                <img src={conclusionicon} alt="" />
                <h3 className="mt-4 mb-5 fs35"><b>Conclusión</b></h3>
                
                { oraciones.map( (x, i) => <p contentEditable="true" suppressContentEditableWarning={true} key={i}>{x}</p> )}
                
            </div>
        </div>
    )
}

ConclusionComponent.propTypes = {
    oraciones: PropTypes.array.isRequired,
};

export default ConclusionComponent;