import { API_URL } from '../utils/secret-constants';

export async function registerApi(formData: any) {
  let res;

  try {
    const url = `${API_URL}/auth/local/register`;
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    res = result;
  } catch (error) {
    console.log(error);
    res = null;
  }

  return res;
}

export async function loginApi(formData: any) {
  let res;
  try {
    const url = `${API_URL}/auth/local`;
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    res = result;
  } catch (error) {
    console.log(error);
    res = null;
  }

  return res;
}

export async function getMeApi(token: string) {
  let res;

  try {
    const url = `${API_URL}/users/me`;
    const params = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, params);
    res = await response.json();
  } catch (error) {
    console.log(error);
    res = null;
  }
  return res;
}
