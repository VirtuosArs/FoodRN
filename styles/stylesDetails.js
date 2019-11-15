import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  navBar: {
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    resizeMode: 'contain',
    width: null,
    height: 200,
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
    // borderColor: 'red',
    // borderWidth: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
})