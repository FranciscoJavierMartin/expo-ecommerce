import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/CartScreen';
import colors from '../styles/colors';
import {
  ACCOUNT_STACK_NAME,
  CART_STACK_NAME,
  FAVORITES_STACK_NAME,
  HOME_STACK_NAME,
} from '../constants/screens';
import AccountStack from './AccountStack';

const Tab = createMaterialBottomTabNavigator();

const setIcon = (
  route: RouteProp<Record<string, object | undefined>, string>,
  routerStatus: {
    focused: boolean;
    color: string;
  }
) => {
  let iconName: string;

  switch (route.name) {
    case HOME_STACK_NAME:
      iconName = 'home';
      break;
    case FAVORITES_STACK_NAME:
      iconName = 'heart';
      break;
    case CART_STACK_NAME:
      iconName = 'shopping-cart';
      break;
    case ACCOUNT_STACK_NAME:
      iconName = 'user';
      break;
    default:
      iconName = '';
  }
  return <AwesomeIcon name={iconName} style={styles.icon} />;
};

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={styles.navigation}
        screenOptions={({ route }) => ({
          tabBarIcon: (routerStatus) => setIcon(route, routerStatus),
        })}
      >
        <Tab.Screen
          name={HOME_STACK_NAME}
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Tab.Screen
          name={FAVORITES_STACK_NAME}
          component={FavoritesScreen}
          options={{ title: 'Favorites' }}
        />
        <Tab.Screen
          name={CART_STACK_NAME}
          component={CartScreen}
          options={{ title: 'Cart' }}
        />
        <Tab.Screen
          name={ACCOUNT_STACK_NAME}
          component={AccountStack}
          options={{ title: 'My Account' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  navigation: {
    backgroundColor: colors.bgDark,
  },
  icon: {
    fontSize: 20,
    color: colors.fontLight,
  },
});
