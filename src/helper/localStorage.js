import AsyncStorage from '@react-native-community/async-storage';

export const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (key) => {
  let response = null;

  try {
    response = await AsyncStorage.getItem(key);
    response = response !== null ? response : null;
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const removeData = async (key) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
