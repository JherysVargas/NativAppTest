import React, {createContext, useReducer} from 'react';
import {ReportContextProps} from '../../../data/types/report_state_context';
import {initialStateReport} from './initial_state';
import {reportReducer} from './reducer';

export const ReportContext =
  createContext<ReportContextProps>(initialStateReport);

const ReportProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [state, dispatch] = useReducer(reportReducer, initialStateReport);

  return (
    <ReportContext.Provider value={{...state, dispatch}}>
      {children}
    </ReportContext.Provider>
  );
};

export default ReportProvider;
