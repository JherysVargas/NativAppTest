import {ReportContextProps} from '../../../data/types/report_state_context';
import {SET_DATA_NEW_REPORT, SET_LIST_REPORTS} from './actions';

export const reportReducer = (state: ReportContextProps, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case SET_LIST_REPORTS:
      return {
        ...state,
        listReport: payload,
      };
    case SET_DATA_NEW_REPORT:
      return {
        ...state,
        newReport: payload,
      };
    default:
      return state;
  }
};
