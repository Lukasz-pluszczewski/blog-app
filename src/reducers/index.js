import { combineReducers } from 'services/reduxBreeze';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  router: routerReducer,
  form: formReducer,
});

export default rootReducer;
