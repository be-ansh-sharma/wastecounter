import { setToStorage } from 'global/helpers/utils';
import {
  FETCH_GAME,
  SET_BIRTHDAY,
  SET_DARKMODE,
  UPDATE_ADS_PERSONALIZATIONS,
  SET_REWARD_TIME,
} from 'store/action/game';
const initialState = {
  darkMode: true,
  birthday: null,
  personalizedAds: true,
  adsRewardTime: null,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME:
      state = {
        ...state,
        ...action.game,
      };
      break;
    case SET_BIRTHDAY:
      state = {
        ...state,
        birthday: action.date,
      };
      break;
    case SET_DARKMODE:
      state = {
        ...state,
        darkMode: action.darkMode,
      };
      break;
    case UPDATE_ADS_PERSONALIZATIONS:
      state = {
        ...state,
        personalizedAds: action.personalizedAds,
      };
      break;
    case SET_REWARD_TIME:
      state = {
        ...state,
        adsRewardTime: action.time,
      };
      break;
    default:
      return state;
  }

  setToStorage('@game', state);
  return state;
};

export default game;
