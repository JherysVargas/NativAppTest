import React from 'react';
import ReportProvider from './lib/core/context/report';
import Router from './lib/core/routes';

const App = () => {
  return (
    <ReportProvider>
      <Router />
    </ReportProvider>
  );
};

export default App;
