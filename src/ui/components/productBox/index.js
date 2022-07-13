import { Dimensions, Text, View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const ProductBox = ({ data }) => {

  const styles = require('./styles.js');
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', {
          data: data,
        });
      }}
      style={[styles.productBoxContainer]}
    >
      <View style={[styles.productBoxContainerInner]}>
        <Image
          source={{
            uri: data.image_url,
          }}
          style={[styles.productImage]}
        />
        <View style={[styles.productDetailContainer]}>
          <Text style={[styles.productBoxTitle]}>{data.product_name}</Text>
          <Text style={[styles.productBoxPrice]}>價錢: ${data.price}</Text>
          <Text style={[styles.productBoxPrice]}>貨存: {data.hasStock ? "有貨" : "沒有貨"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ProductBox;