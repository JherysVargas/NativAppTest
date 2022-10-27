import {useNavigation} from '@react-navigation/native';
import {useRef, useContext} from 'react';
import {Alert} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import {KEY_REPORT_STORAGE} from '../../../../core/constant';
import {ReportContext} from '../../../../core/context/report';
import {
  SET_DATA_NEW_REPORT,
  SET_LIST_REPORTS,
} from '../../../../core/context/report/actions';
import {useLocalStorage} from '../../../../core/hooks/useLocalStorage';

export const useCreateReport = () => {
  const cameraRef = useRef<Camera>(null);
  const navigation = useNavigation();
  const {setDataStorage} = useLocalStorage();

  const {dispatch, newReport, listReport} = useContext(ReportContext);

  const getPermissionCamera = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();

    if (cameraPermission !== 'authorized') {
      await Camera.requestCameraPermission();
    }
  };

  const onChangeDescription = (text: string) => {
    dispatch!({
      type: SET_DATA_NEW_REPORT,
      payload: {...newReport, description: text},
    });
  };

  const saveCapturePhoto = async (path: string) => {
    dispatch!({
      type: SET_DATA_NEW_REPORT,
      payload: {...newReport, image: path},
    });
  };

  const saveReport = async () => {
    if (!newReport.description && !newReport.image) {
      _alertError('Error', 'Debes completar todos los datos');
      return;
    }

    const newList = [...listReport, newReport];

    await setDataStorage(KEY_REPORT_STORAGE, newList);

    dispatch!({
      type: SET_LIST_REPORTS,
      payload: newList,
    });

    navigation.goBack();
  };

  const _alertError = (title: string, message: string) =>
    Alert.alert(title, message, [{text: 'Aceptar'}]);

  return {
    newReport,
    cameraRef,
    saveReport,
    saveCapturePhoto,
    getPermissionCamera,
    onChangeDescription,
  };
};
