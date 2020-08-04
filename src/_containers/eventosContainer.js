import React, {Component} from 'react';
import config from 'config';
import { authHeader } from '../_helpers';
import { connect } from 'react-redux';

class EventosContainer extends Component {

    render() {
        return (
            <div className="text-center">
                    {
                        !this.props.payload || !this.props.payload.length ? <p contenteditable="true">No hay eventos</p> :
                        
                            this.props.payload.map((item, i) =>
                                <p key={i} contenteditable="true">
                                    Evento: {item.evento.toString()}. Descripción: {item.descripcion.toString()}
                                </p>
                        )
                    }
            </div>
        );
    }
}

EventosContainer.propTypes = {

};

function mapStateToProps(state) {
    const { eventos } = state;
    const { payload } = eventos
    return {
        payload
    };
}

export default connect(mapStateToProps, null)(EventosContainer);
