import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';

import { firebaseAuthServiceSignInWithEmailAndPassword, firebaseAuthServiceSignOut } from "../../../service/AuthService";

const Login = () => {

  const vw = Dimensions.get('window').width;
  const styles = require('./styles.js');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const handleSubmit = () => {
    firebaseAuthServiceSignInWithEmailAndPassword(email, password, setLoginStatus, setUserInfo, setEmail, setPassword);
  }

  const logout = () => {
    firebaseAuthServiceSignOut(setLoginStatus, setUserInfo);
  }

  return (

    <View style={[styles.container]}>
      <SafeAreaView>

        <View style={[styles.header]}>
          <Text style={[styles.headerTitle]}>{!loginStatus ? "登入" : "登出"}</Text>
        </View>

        {!loginStatus ?

          <View style={[styles.productBoxContainer]}>
            <TextInput
              autoCapitalize='none'
              style={[styles.loginInput]}
              onChangeText={(val) => { setEmail(val) }}
              value={email}
              placeholder="電郵"
              keyboardType="email"
            />
            <TextInput
              style={[styles.loginInput]}
              onChangeText={(val) => { setPassword(val) }}
              value={password}
              placeholder="密碼"
              keyboardType="password"
              secureTextEntry={true}
            />
            <TouchableOpacity
              onPress={() => {
                handleSubmit();
              }}
              style={[styles.checkoutButton]}
            >
              <Text style={[styles.checkoutButtonText]}>登入</Text>
            </TouchableOpacity>
          </View>

          :

          <View style={[styles.productBoxContainer]}>
            <Text style={[styles.title]}>登入電郵</Text>
            <Text style={[styles.email]}>{userInfo && userInfo.email}</Text>
            <TouchableOpacity
              onPress={() => {
                logout();
              }}
              style={[styles.checkoutButton]}
            >
              <Text style={[styles.checkoutButtonText]}>登出</Text>
            </TouchableOpacity>
          </View>
        }

      </SafeAreaView>
    </View>

  );
}

export default Login;
