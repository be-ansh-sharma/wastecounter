import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import { Pressable } from 'react-native';
import { setDarkMode } from 'store/action/game';
import { useDispatch, useSelector } from 'react-redux';

const DarkMode = () => {
  const darkRef = useRef();
  const darkMode = useSelector(state => state.game.darkMode);
  const dispatch = useDispatch();

  const animationHandler = () => {
    if (darkMode) {
      darkRef.current.play(240, 0);
    } else {
      darkRef.current.play(0, 240);
    }
  };

  const darkModeHandler = () => {
    dispatch(setDarkMode(!darkMode));
  };

  return (
    <Pressable onPress={animationHandler} style={{ width: 60}}>
      <LottieView
        ref={darkRef}
        loop={false}
        speed={5}
        onAnimationFinish={darkModeHandler}
        source={require('assets/animations/dark.json')}
        progress={darkMode ? 1 : 0}
      />
    </Pressable>
  );
};

export default DarkMode;
