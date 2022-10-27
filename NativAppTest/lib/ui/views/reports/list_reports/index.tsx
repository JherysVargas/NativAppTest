/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {useListReport} from './controller';
import {ReportContext} from '../../../../core/context/report';
import ItemReport from './components/item_report';
import ButtonAdd from './components/button_add';

const ListReports = () => {
  const {getReports} = useListReport();
  const {listReport} = useContext(ReportContext);

  useEffect(() => {
    getReports();
  }, []);

  return (
    <>
      <FlatList
        data={listReport}
        renderItem={({item}) => <ItemReport item={item} />}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <ButtonAdd />
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  separator: {
    height: 15,
  },
});

export default ListReports;
