import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { User } from '../../common/models/user';

interface UserInfoProps {
  user: User;
}
const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome,</Text>
      <Text style={styles.titleName}>
        {user.name && user.lastname
          ? `${user.name} ${user.lastname}`
          : user.email}
      </Text>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  titleName: {},
});
