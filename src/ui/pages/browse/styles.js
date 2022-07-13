import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

module.exports = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    width: vw,
    backgroundColor: '#f0c4bc',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    marginBottom: 0.01 * vw,
  },

  headerTitle: {
    fontSize: 0.05 * vw,
    fontWeight: '700',
    paddingVertical: 0.03 * vw,
    color: 'white'
  },

  titleText: {
    fontSize: 0.15 * vw,
  },

  productListContainer: {
    paddingHorizontal: 0.05 * vw,
    paddingVertical: 0.05 * vw,
  },

  marginBottom: {
    height: 0.18 * vw,
  },

  seperateLine: {
    width: '100%',
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 0.05 * vw,
  }

});