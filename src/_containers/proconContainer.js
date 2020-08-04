import React, {Component} from 'react';
import config from 'config';
import { authHeader } from '../_helpers';
import { connect } from 'react-redux';
import ProConComponent from './../_components/proconComponent'

class ProConContainer extends Component {

    render() {
        return (
            <div className="text-center">
                    {
                        !this.props.payload ? <p contenteditable="true">No hay ProCons</p> : <ProConComponent procon={this.props.payload} />
                    }
            </div>
        );
    }
}

ProConContainer.propTypes = {

};

function mapStateToProps(state) {
    const { procon } = state;
    const { payload } = procon
    return {
        payload
    };
}

export default connect(mapStateToProps, null)(ProConContainer);

