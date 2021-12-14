import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
   justifyContent: 'space-evenly',
  },
  infoWrapper: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  bigText: {
    fontSize: 18,
    marginTop: 8,
    color: COLOR.accent,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    borderRadius: 8,
    marginVertical: 8,
    width: '50%',
  },
  buttonWrapper: {
    alignItems: 'center',
  },
  submit: {
    borderRadius: 8,
    width: '50%',
  }
});
