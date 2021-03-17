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
