import { StyleSheet, ViewBase } from 'react-native';
import { Dimensions } from 'react-native';
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

module.exports = StyleSheet.create({

  productImage: {
    width: 0.35 * vw,
    height: 0.35 * vw,
    borderRadius: 0.02 * vw,
    marginRight: 0.05 * vw,
  },

  productBoxContainer: {
    marginBottom: 0.05 * vw,
  },

  productBoxContainerInner: {
    flexDirection: 'row'
  },

  productBoxTitle: {
    fontSize: 0.045 * vw,
    fontWeight: '700',
    marginBottom: 0.01 * vw,
  },

  productBoxPrice: {
    fontSize: 0.04 * vw,
    marginBottom: 0.005 * vw,
  },

  productDetailContainer: {
    paddingTop: 0.02 * vw,
    width: 0.5 * vw,
  }

});