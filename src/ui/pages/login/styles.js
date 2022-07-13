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
  },
  productImage: {
    width: 0.9 * vw,
    height: 0.9 * vw,
    borderRadius: 0.02 * vw,
    marginLeft: 0.05 * vw,
    marginTop: 0.05 * vw,
    marginBottom: 0.03 * vw,
  },

  productBoxContainer: {
    marginBottom: 0.05 * vw,
    minHeight: vh - 0.4 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  productBoxContainerInner: {
    flexDirection: 'row'
  },

  productBoxTitle: {
    fontSize: 0.06 * vw,
    fontWeight: '700',
    marginBottom: 0.02 * vw,
  },

  productBoxPrice: {
    fontSize: 0.04 * vw,
    marginBottom: 0.005 * vw,
  },

  productDetailContainer: {
    paddingTop: 0.02 * vw,
    width: 0.9 * vw,
    marginLeft: 0.05 * vw,
  },

  checkoutButton: {
    width: 0.8 * vw,
    padding: 0.04 * vw,
    backgroundColor: '#f0c4bc',
    marginTop: 0.04 * vw,
    borderRadius: 0.02 * vw,
  },

  checkoutButtonText: {
    fontSize: 0.04 * vw,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },

  loginInput: {
    borderWidth: 1,
    width: 0.8 * vw,
    padding: 0.04 * vw,
    borderColor: "#999",
    fontSize: 0.04 * vw,
    borderRadius: 0.02 * vw,
    marginTop: 0.02 * vw
  },

  title: {
    fontSize: 0.05 * vw,
    fontWeight: '700',
    marginBottom: 0.02 * vw,
  },

  email: {
    fontSize: 0.04 * vw,
    marginBottom: 0.02 * vw,
  }

});