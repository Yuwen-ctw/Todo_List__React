import axios from 'axios';

const authURL = 'https://todo-list.alphacamp.io/api/auth';

export const login = async ({ username, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/login`, {
      username,
      password,
    });
    const { authToken } = data;
    if (authToken) {
      return { ...data, success: true };
    }
    return data;
  } catch (error) {
    console.log(error);
    console.error('[Login Failed]', error);
  }
};

export const signup = async ({ username, password, email }) => {
  try {
    const { data } = await axios.post(`${authURL}/register`, {
      username,
      password,
      email,
    });
    const { authToken } = data;
    if (authToken) {
      return { ...data, success: true };
    }
    return data;
  } catch (error) {
    console.log(error);
    console.error('[Signup Failed]', error);
  }
};

export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(`${authURL}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error(error);
  }
};
