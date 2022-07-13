import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { getProductResource } from "../../../resource/GetProductResource";
import ProductBox from '../../components/productBox'; 

const Detail = ({ route }) => {

  const styles = require('./styles.js');
  const params = route.params;

  return (

    <View style={[styles.container]}>
      <SafeAreaView>

        <View style={[styles.header]}>
          <Text style={[styles.headerTitle]}>詳情</Text>
        </View>

        <ScrollView style={[styles.productBoxContainer]}>
          <Image
            source={{
              uri: params.data.image_url,
            }}
            style={[styles.productImage]}
          />
          <View style={[styles.productDetailContainer]}>
            <Text style={[styles.productBoxTitle]}>{params.data.product_name}</Text>
            <Text style={[styles.productBoxPrice]}>價錢: ${params.data.price}</Text>
            <Text style={[styles.productBoxPrice]}>貨存: {params.data.hasStock ? "有貨" : "沒有貨"}</Text>
            <TouchableOpacity style={[styles.checkoutButton]}>
              <Text style={[styles.checkoutButtonText]}>立即購買</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </SafeAreaView>
    </View>

  );
}

export default Detail;