import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import { productionIDs, testIDs } from 'global/config';

export const getFromStorage = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result != null ? JSON.parse(result) : {};
  } catch (err) {
    throw err;
  }
};

export const setToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw err;
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    throw err;
  }
};

export const getDiff = (date, mode) => {
  return dayjs().diff(date, mode);
};

export const getBirthdayData = date => {
  date = dayjs(date);
  return {
    years: getDiff(date, 'year'),
    month: getDiff(date, 'month'),
    week: getDiff(date, 'week'),
    day: getDiff(date, 'day'),
    hour: getDiff(date, 'hour'),
    minute: getDiff(date, 'minute'),
    seconds: getDiff(date, 'second'),
  };
};

// export const getadUnitID = key => {
//   return Constants.isDevice && !__DEV__ ? productionIDs[key] : testIDs[key];
// };

// export const showFullScreenAds = async (personalizedAds = false) => {
//   await AdMobInterstitial.setAdUnitID(getadUnitID('fullScreen'));
//   await AdMobInterstitial.requestAdAsync({
//     servePersonalizedAds: personalizedAds,
//   });
//   await AdMobInterstitial.showAdAsync();
// };


