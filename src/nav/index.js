import { Dimensions, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../ui/pages/login';
import Browse from '../ui/pages/browse';
import Detail from '../ui/pages/detail';
import Cart from '../ui/pages/cart';

const Navigation = () => {

  const vw = Dimensions.get('window').width;
  const styles = require('./styles.js');

  const Stack = createNativeStackNavigator();

  const LoginStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    );
  };

  const BrowseStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Browse"
          component={Browse}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    );
  };

  const CartStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    );
  };

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="login"
        screenOptions={{
          tabBarActiveTintColor: '#ff0000',
          headerShown: false,
          tabBarStyle: { height: 0.2 * vw },
        }}>
        <Tab.Screen
          name="login"
          component={LoginStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <View>
                <Text style={{ ...styles.navBtn, color: focused ? "#333" : "#999" }}>
                  L
                </Text>
                <Text style={{ ...styles.navBtnLabel, color: focused ? "#333" : "#999" }}>
                  Login
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="browse"
          component={BrowseStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <View>
                <Text style={{ ...styles.navBtn, color: focused ? "#333" : "#999" }}>
                  B
                </Text>
                <Text style={{ ...styles.navBtnLabel, color: focused ? "#333" : "#999" }}>
                  Browse
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="shopping cart"
          component={CartStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <View>
                <Text style={{ ...styles.navBtn, color: focused ? "#333" : "#999" }}>
                  C
                </Text>
                <Text style={{ ...styles.navBtnLabel, color: focused ? "#333" : "#999" }}>
                  Cart
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <TabNavigator />
  );
}

export default Navigation;