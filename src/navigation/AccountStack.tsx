import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/account/AccountScreen';
import ChangeNameScreen from '../screens/account/ChangeNameScreen';
import colors from '../styles/colors';
import {
  ACCOUNT_STACK_CHANGE_NAME_SCREEN,
  ACCOUNT_STACK_NAME,
} from '../constants/screens';

const Stack = createStackNavigator();

const AccountStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.fontLight,
        headerStyle: { backgroundColor: colors.bgDark },
        cardStyle: {
          backgroundColor: colors.bgLight,
        },
      }}
    >
      <Stack.Screen
        name={ACCOUNT_STACK_NAME}
        component={AccountScreen}
        options={{ title: 'Account', headerShown: false }}
      />
      <Stack.Screen
        name={ACCOUNT_STACK_CHANGE_NAME_SCREEN}
        component={ChangeNameScreen}
        options={{ title: 'Change Name' }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
