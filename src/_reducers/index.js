import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { eventos } from './eventos.reducer';
import { alert } from './alert.reducer';
import { recalls } from './recalls.reducer';
import { mmva } from './mmva.reducer';
import { procon } from './procon.reducer';

const rootReducer = combineReducers({
  authentication,
  eventos,
  alert,
  recalls,
  mmva,
  procon
});

export default rootReducer;