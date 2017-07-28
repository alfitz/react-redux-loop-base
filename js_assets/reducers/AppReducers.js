import { combineReducers } from 'redux';

function placeholder(
  state = "nothing"
) {
  return state;
}

const rootReducer = combineReducers({
  placeholder,
});

export default rootReducer;