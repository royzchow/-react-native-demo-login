import { Dimensions, Text, View } from 'react-native';

const Cart = () => {

  const vw = Dimensions.get('window').width;
  const styles = require('./styles.js');

  return (

    <View style={[styles.container]}>
      <Text style={[styles.titleText]}>Cart</Text>
    </View>

  );
}

export default Cart;