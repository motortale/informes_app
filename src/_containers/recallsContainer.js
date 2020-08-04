import React, {Component} from 'react';
import config from 'config';
import { authHeader } from '../_helpers';
import { connect } from 'react-redux';

class RecallsContainer extends Component {

    render() {
        return (
            <div className="text-center">
                    {
                        !this.props.payload || !this.props.payload.length ? <p contenteditable="true">No hay recalls</p> :
                        
                            this.props.payload.map((item, i) =>
                                <p key={i} contenteditable="true">
                                    Motivo: {item.motivo.toString()} - Solución: {item.solucion.toString()}
                                </p>
                            
                        ) 
                    }
            </div>
        );
    }
}

RecallsContainer.propTypes = {

};

function mapStateToProps(state) {
    const { recalls } = state;
    const { payload } = recalls
    return {
        payload
    };
}

export default connect(mapStateToProps, null)(RecallsContainer);
