import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

module.exports = StyleSheet.create({

  navBtn: {
    paddingTop: 22,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
  },

  navBtnLabel: {
    fontSize: 10,
    ƒtextAlign: 'center',
    fontWeight: '700',
  }

});