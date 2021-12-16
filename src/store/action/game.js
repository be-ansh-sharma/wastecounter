import { getFromStorage } from 'global/helpers/utils';

export const FETCH_GAME = 'FETCH_GAME';
export const SET_BIRTHDAY = 'SET_BIRTHDAY';
export const SET_DARKMODE = 'SET_DARKMODE';
export const UPDATE_ADS_PERSONALIZATIONS = 'UPDATE_ADS_PERSONALIZATIONS';
export const SET_REWARD_TIME = 'SET_REWARD_TIME';

export const fetchGame = () => {
  return async dispatch => {
    try {
      const game = await getFromStorage('@game');
      dispatch({
        type: FETCH_GAME,
        game,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setBirthday = date => {
  return {
    type: SET_BIRTHDAY,
    date,
  };
};

export const setDarkMode = mode => {
  return {
    type: SET_DARKMODE,
    darkMode: mode,
  };
};

export const updatePersonlization = personalizedAds => {
  return {
    type: UPDATE_ADS_PERSONALIZATIONS,
    personalizedAds,
  };
};

export const setRewardTime = time => {
  return {
    type: SET_REWARD_TIME,
    time,
  };
};
