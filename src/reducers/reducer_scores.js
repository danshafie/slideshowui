import { GET_SCORES } from '../actions/types';
const INITIAL_STATE = { all: [], game: null };

export default function(state = INITIAL_STATE, action) {
  console.log('state: ', state);
  console.log('action: ', action);
  switch(action.type) {
    case GET_SCORES:
      return {...state, all: action.payload.data.data.games.game}
  }
  return state;
}
