import { vehiculoConstants } from '../_constants';

//Reducers son encargados de actualizar el estate
export function recalls(state = {}, action) {
  switch (action.type) {
    case vehiculoConstants.GETRECALLSBYDOMINIO_REQUEST:
      return {
        loading: true
      };
    case vehiculoConstants.GETRECALLSBYDOMINIO_SUCCESS:
      return {
        payload: action.recalls
      };
    case vehiculoConstants.GETRECALLSBYDOMINIO_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }

}