import React, { useState, useMemo, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import jwtDecode from 'jwt-decode';
import AppNavigation from './src/navigation/AppNavigation';
import AuthScreen from './src/screens/AuthScreen';
import AuthContext, { AuthState } from './src/context/AuthContext';
import { getTokenApi, removeToken, setTokenApi } from './src/api/token';
import { User } from './src/common/models/user';

export default function App() {
  const [auth, setAuth] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const token = await getTokenApi();
      if (token) {
        setAuth({
          token,
          idUser: jwtDecode<{ id: string }>(token).id,
        });
      } else {
        setAuth(null);
      }
    })();
  }, []);

  const login = (user: any) => {
    setTokenApi(user.jwt);
    setAuth({
      token: user.jwt,
      idUser: user.user._id,
    });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
    }
  };

  const authData = useMemo<AuthState>(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );

  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>{auth ? <AppNavigation /> : <AuthScreen />}</PaperProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
