import React, { Fragment } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';
import {
  ACCOUNT_STACK_CHANGE_NAME_SCREEN,
  FAVORITES_STACK_NAME,
} from '../../constants/screens';
import useAuth from '../../hooks/useAuth';

const Menu: React.FC = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const logoutHandler = () => {
    Alert.alert(
      'Logout',
      'Are you sure?',
      [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          onPress: () => logout(),
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  return (
    <Fragment>
      <List.Section>
        <List.Subheader>My Profile</List.Subheader>
        <List.Item
          title='Change name'
          description='Change your name'
          left={(props) => <List.Icon {...props} icon='face' />}
          onPress={() => navigation.navigate(ACCOUNT_STACK_CHANGE_NAME_SCREEN)}
        />
        <List.Item
          title='Change email'
          description='Change your email'
          left={(props) => <List.Icon {...props} icon='at' />}
          onPress={() => {}}
        />
        <List.Item
          title='Change username'
          description='Change your username'
          left={(props) => <List.Icon {...props} icon='sim' />}
          onPress={() => {}}
        />
        <List.Item
          title='Change password'
          description='Change your password'
          left={(props) => <List.Icon {...props} icon='key' />}
          onPress={() => {}}
        />
        <List.Item
          title='My addresses'
          description='Admin your addressess'
          left={(props) => <List.Icon {...props} icon='map' />}
          onPress={() => {}}
        />
      </List.Section>
      <List.Section>
        <List.Subheader>App</List.Subheader>
        <List.Item
          title='Orders'
          description='Orders list'
          left={(props) => <List.Icon {...props} icon='clipboard-list' />}
          onPress={() => {}}
        />
        <List.Item
          title='Whishlist'
          description='Products you whish'
          left={(props) => <List.Icon {...props} icon='heart' />}
          onPress={() => {
            navigation.navigate(FAVORITES_STACK_NAME);
          }}
        />
        <List.Item
          title='Logout'
          description='Close your session'
          left={(props) => <List.Icon {...props} icon='logout' />}
          onPress={logoutHandler}
        />
      </List.Section>
    </Fragment>
  );
};

export default Menu;
