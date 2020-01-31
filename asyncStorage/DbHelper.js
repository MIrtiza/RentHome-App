import {AsyncStorage} from 'react-native';

export const SaveItem = async (key, value) => {
  try {
      await AsyncStorage.setItem(key, value);
      console.log('saved')
  } catch(e) {
      console.log(e)
  }
};

export const ReadItem = async key => {
  try {
    var result = await AsyncStorage.getItem(key);
    return result;
  } catch (e) {
    return e;
  }
};

export function MultiRead(key, onResponse, onFailure) {
  try {
    AsyncStorage.multiGet(key).then(values => {
      let responseMap = new Map();
      values.map((result, i, data) => {
        let key = data[i][0];
        let value = data[i][1];
        responseMap.set(key, value);
      });
      onResponse(responseMap);
    });
  } catch (error) {
    onFailure(error);
  }
}

export async function DeleteItem(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
}
