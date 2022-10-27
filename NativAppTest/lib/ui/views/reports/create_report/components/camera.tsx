import {ActivityIndicator, Pressable, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const size: number = 70;

type Props = {
  cameraRef: React.RefObject<Camera>;
  onClose?: null | (() => void) | undefined;
  onCapturePhoto?: null | (() => void) | undefined;
};

const CameraComponet = ({cameraRef, onClose, onCapturePhoto}: Props) => {
  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }
  return (
    <>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <Pressable style={styles.buttonCancel} onPress={onClose}>
        <Text style={styles.textCancel}>X</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onCapturePhoto} />
    </>
  );
};

const styles = StyleSheet.create({
  buttonCancel: {
    marginTop: 15,
    marginLeft: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  textCancel: {
    color: 'white',
    fontSize: 26,
    fontWeight: '400',
  },
  button: {
    width: size,
    height: size,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 50,
    borderRadius: size / 2,
    borderColor: 'white',
    borderWidth: 6,
  },
});

export default CameraComponet;
