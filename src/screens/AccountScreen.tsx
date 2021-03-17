import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AccountScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
