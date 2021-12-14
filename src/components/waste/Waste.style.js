import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 12,
  },
  card: {
    height: 150,
    borderWidth: 1,
    borderColor: COLOR.accent,
    alignContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 20,
    flexDirection: 'column',
  },
  item: {
    fontSize: 28,
    fontFamily: 'digit',
    textAlign: 'center',
  }
})