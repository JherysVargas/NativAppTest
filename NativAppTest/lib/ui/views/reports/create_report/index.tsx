import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ButtonComponent from './components/button';
import CapturePhoto from './components/capture_photo';
import Input from './components/input';

const CreateReport = () => {
  return (
    <ScrollView style={styles.container}>
      <CapturePhoto />
      <Input />
      <ButtonComponent />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});

export default CreateReport;
