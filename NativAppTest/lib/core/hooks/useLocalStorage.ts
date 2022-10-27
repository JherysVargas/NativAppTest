import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'react-native-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
});

export const useLocalStorage = () => {
  const setDataStorage = async (key: string, data: any): Promise<void> => {
    await storage.save({
      key,
      data,
    });
  };

  const getDataStorage = async (key: string): Promise<any> => {
    return storage
      .load({key})
      .then(value => value)
      .catch(() => null);
  };

  return {
    setDataStorage,
    getDataStorage,
  };
};
