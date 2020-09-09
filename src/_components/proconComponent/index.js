import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sad from "./../../images/sad-icon.svg"
import happy from "./../../images/happy-icon.svg"


const ProConComponent = ( { procon } ) => {

    const con = procon.filter(x => x.tipo === "con")
    const pro = procon.filter(x => x.tipo === "pro")
    return (
        <div className="row">
            <div className="col-md-12 text-center mt-5">
                <img src={sad} alt="" />
                <h3 className="mt-3 mb-4">Problemas Frecuentes</h3>
                {
                    con.length ? con.map((item, i) => 
                        <p contentEditable="true" key={i} suppressContentEditableWarning={true}>{item.descripcion}</p>
                    ) : <p contentEditable="true" suppressContentEditableWarning={true}>No se reportan problemas frecuentes</p>
                }
            </div>
            <div className="col-md-12 text-center mt-5">
                <img src={happy} alt="" />
                <h3 className="mt-3 mb-4">Pros</h3>
                {
                    pro.length ? pro.map((item, i) => 
                        <p contentEditable="true" key={i} suppressContentEditableWarning={true}>{item.descripcion}</p>
                    ) : 
                    <p contentEditable="true" suppressContentEditableWarning={true}>No se reportan pros en este vehiculo</p>
                }
            </div>
        </div>
    )
}

export default ProConComponent;