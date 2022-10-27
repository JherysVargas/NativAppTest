import React, {memo} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {IReport} from '../../../../../data/interfaces/report_interface';

type Props = {
  item: IReport;
};

const ItemReport = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.text}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 6,
    overflow: 'hidden',
    marginRight: 16,
  },
  text: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
});

export default memo(ItemReport);
