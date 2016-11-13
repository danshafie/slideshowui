import { combineReducers } from 'redux';
import scoresReducer from './reducer_scores';

const rootReducer = combineReducers({
  scores: scoresReducer
});

export default rootReducer;
