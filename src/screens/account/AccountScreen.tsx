import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { User } from '../../common/models/user';
import Search from '../../components/search';
import StatusBar from '../../components/StatusBar';
import colors from '../../styles/colors';
import { getMeApi } from '../../api/user';
import useAuth from '../../hooks/useAuth';
import ScreenLoading from '../../components/ScreenLoading';
import UserInfo from '../../components/account/UserInfo';
import Menu from '../../components/account/Menu';

const AccountScreen: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const { auth } = useAuth();
  console.log(auth);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        if (auth) {
          const response = await getMeApi(auth.token);
          setUser(response);
        }
      })();
    }, [])
  );

  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle='light-content' />
      {!user ? (
        <ScreenLoading size='large' />
      ) : (
        <>
          <Search />
          <ScrollView>
            <UserInfo user={user} />
            <Menu />
          </ScrollView>
        </>
      )}
    </>
  );
};

export default AccountScreen;
