import axios from 'axios';
import { GET_SCORES } from './types';

const url = 'http://gdx.mlb.com/components/game/mlb/year_2016/month_05/day_20/master_scoreboard.json';

export function getScores() {
  let request = axios.get(`${url}`);
  console.log('request: ', request);

  return {
    type: GET_SCORES,
    payload: request
  }

}
