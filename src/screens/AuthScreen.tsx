import React, { useState } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import RegisterForm from '../components/auth/RegisterForm';
import LoginForm from '../components/auth/LoginForm';
import { layoutStyles } from '../styles';
import logo from '../../assets/logo.png';

const AuthScreen: React.FC = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const toggleForm = () => setShowLogin((prevState) => !prevState);

  return (
    <View style={layoutStyles.container}>
      <Image style={styles.logo} source={logo} />
      <KeyboardAvoidingView>
        {showLogin ? (
          <LoginForm toggleForm={toggleForm} />
        ) : (
          <RegisterForm toggleForm={toggleForm} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
