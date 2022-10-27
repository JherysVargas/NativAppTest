import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useCreateReport} from '../controller';

const Input = () => {
  const [description, setDescription] = useState('');

  const {onChangeDescription} = useCreateReport();

  const changeText = async (text: string) => {
    setDescription(text);
    onChangeDescription(text);
  };

  return (
    <View style={styles.containerInput}>
      <TextInput
        onChangeText={changeText}
        value={description}
        placeholder="Descripción"
        placeholderTextColor={'grey'}
        multiline
        numberOfLines={4}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    marginTop: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 20,
    borderColor: '#cdcdcd',
    backgroundColor: '#fbfbfb',
  },
  input: {
    height: 100,
    fontSize: 16,
  },
});

export default Input;
