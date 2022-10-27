/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Image,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {PhotoFile} from 'react-native-vision-camera';
import {useCreateReport} from '../controller';
import CameraComponet from './camera';

const emptyImage = (uri: ImageSourcePropType) => (
  <View style={[styles.containerImage, styles.containerImageEmpty]}>
    <Image source={uri} style={styles.emptyImage} />
  </View>
);

const renderImage = (uri: ImageSourcePropType) => (
  <View style={styles.containerImage}>
    <Image source={uri} style={styles.image} />
  </View>
);

const CapturePhoto = () => {
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const {cameraRef, getPermissionCamera, saveCapturePhoto} = useCreateReport();

  useEffect(() => {
    getPermissionCamera();
  }, []);

  const onCapturePhoto = async () => {
    const {path}: PhotoFile = await cameraRef.current!.takePhoto({
      flash: 'on',
    });

    setImage(`file://${path}`);
    saveCapturePhoto(`file://${path}`);
    setShowModal(false);
  };

  const uri = useMemo(
    () =>
      !image ? require('../../../../../../assets/camera.png') : {uri: image},
    [image],
  );

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => setShowModal(true)}>
      {image ? renderImage(uri) : emptyImage(uri)}
      <Text style={styles.text}>{image ? 'Cambiar foto' : 'Tomar foto'}</Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <CameraComponet
          onClose={() => setShowModal(false)}
          cameraRef={cameraRef}
          onCapturePhoto={onCapturePhoto}
        />
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    overflow: 'hidden',
  },
  containerImageEmpty: {
    padding: 20,
  },
  emptyImage: {
    height: 70,
    width: 70,
  },
  image: {
    height: 120,
    width: 120,
  },
  text: {
    color: '#25a8ff',
    fontSize: 16,
    marginTop: 20,
  },
});

export default CapturePhoto;
