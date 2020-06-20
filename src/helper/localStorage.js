import AsyncStorage from '@react-native-community/async-storage';

const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

const getData = async (key) => {
  let response = null;

  try {
    response = await AsyncStorage.getItem(key);
    response = response !== null ? response : null;
  } catch (error) {
    console.log(error);
  }
  return response;
};

export default {
  setData,
  getData,
};
