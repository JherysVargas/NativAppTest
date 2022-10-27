import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useCreateReport} from '../controller';

const ButtonComponent = () => {
  const {saveReport} = useCreateReport();

  return (
    <Pressable style={styles.container} onPress={saveReport}>
      <Text style={styles.text}>Guardar</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25a8ff',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ButtonComponent;
