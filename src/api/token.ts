import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN } from '../constants/storage';

export async function setTokenApi(token: any) {
  let res;

  try {
    await AsyncStorage.setItem(TOKEN, token);
    res = true;
  } catch (error) {
    res = null;
  }

  return res;
}

export async function getTokenApi() {
  let res;

  try {
    res = await AsyncStorage.getItem(TOKEN);
  } catch (error) {
    res = null;
  }

  return res;
}

export async function removeToken() {
  try {
    await AsyncStorage.removeItem(TOKEN);
  } catch (error) {}
}
