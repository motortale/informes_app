import { vehiculoConstants } from '../_constants';

//Reducers son encargados de actualizar el estate
export function mmva(state = {}, action) {
  switch (action.type) {
    case vehiculoConstants.GETMMVABYDOMINIO_REQUEST:
      return {
        loading: true
      };
    case vehiculoConstants.GETMMVABYDOMINIO_SUCCESS:
      return {
        payload: action.mmva
      };
    case vehiculoConstants.GETMMVABYDOMINIO_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }

}