import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { getProductResource } from "../../../resource/GetProductResource";
import ProductBox from '../../components/productBox';

const Browse = () => {

  const [productListData, setProductListData] = useState();

  useEffect(() => {
    getProductResource(setProductListData);
  }, [])

  const vw = Dimensions.get('window').width;
  const styles = require('./styles.js');

  return (

    <View style={[styles.container]}>
      <SafeAreaView>

        <View style={[styles.header]}>
          <Text style={[styles.headerTitle]}>商品</Text>
        </View>

        <ScrollView
          style={[styles.productListContainer]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {productListData && productListData.map((data, i) => (
            <View key={i}>
              <ProductBox data={data} />
              <View style={[styles.seperateLine]} />
            </View>
          ))}
          <View style={[styles.marginBottom]}></View>
        </ScrollView>

      </SafeAreaView>
    </View>

  );
}

export default Browse;