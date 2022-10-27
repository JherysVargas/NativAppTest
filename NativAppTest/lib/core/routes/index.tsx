import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import ListReports from '../../ui/views/reports/list_reports';
import CreateReport from '../../ui/views/reports/create_report';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListReports">
        <Stack.Screen
          name="ListReports"
          component={ListReports}
          options={{title: 'Reportes'}}
        />
        <Stack.Screen
          name="CreateReport"
          component={CreateReport}
          options={{title: 'Crear reporte'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
