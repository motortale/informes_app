import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sad from "./../../images/sad-icon.svg"
import happy from "./../../images/happy-icon.svg"


const ProConComponent = ( { procon } ) => {

    const con = procon.filter(x => x.tipo === "con")
    const pro = procon.filter(x => x.tipo === "pro")
    return (
        <div>
            <div class="col-md-12 text-center mt-5">
                <img src={sad} alt="" />
                <h3 class="mt-3 mb-4">Problemas Frecuentes</h3>
                {
                    con.length ? con.map((item, i) => 
                        <p contenteditable="true" key={i}>{item.descripcion}</p>
                    ) : <p contenteditable="true">No posee problemas frecuentes</p>
                }
            </div>
            <div class="col-md-12 text-center mt-5">
                <img src={happy} alt="" />
                <h3 class="mt-3 mb-4">Pros</h3>
                {
                    pro.length ? pro.map((item, i) => 
                        <p contenteditable="true" key={i}>{item.descripcion}</p>
                    ) : 
                    <p contenteditable="true">No posee pros</p>
                }
            </div>
        </div>
    )
}

export default ProConComponent;