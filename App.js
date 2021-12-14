import React, { useEffect, useState } from 'react';
import { COLOR } from 'global/styles';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { StatusBar, LogBox } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HomeNavigation, InformationNavigation } from 'navigations/AppNavigation';
import Splash from 'components/splash/Splash';
import { fetchGame } from 'store/action/game';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';
import { fontConfig } from './src/global/config';

LogBox.ignoreLogs(['Reanimated 2', 'Constants']);

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    text: 'black',
    primary: COLOR.primary,
    background: COLOR.background,
  },
};

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: COLOR.primary,
    background: COLOR.dark,
  },
};

const App = () => {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);
  const { birthday, darkMode } = useSelector(state => state.game);

  useEffect(() => {
    Promise.all([dispatch(fetchGame())])
      .then(() => {
        setIsReady(true);
      })
      .catch(() => {
        dispatch(cleanGame());
      });
  }, []);

  if (!isReady) {
    return <Splash />;
  }

  return (
    <PaperProvider theme={darkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
      <NavigationContainer theme={darkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
        <StatusBar backgroundColor={COLOR.dark} />
        {birthday ? <HomeNavigation /> : <InformationNavigation />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
