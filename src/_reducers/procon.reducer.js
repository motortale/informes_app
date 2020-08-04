import { vehiculoConstants } from '../_constants';

//Reducers son encargados de actualizar el estate
export function procon(state = {}, action) {
  switch (action.type) {
    case vehiculoConstants.GETPROCONBYDOMINIO_REQUEST:
      return {
        loading: true
      };
    case vehiculoConstants.GETPROCONBYDOMINIO_SUCCESS:
      return {
        payload: action.procon
      };
    case vehiculoConstants.GETPROCONYDOMINIO_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }

}