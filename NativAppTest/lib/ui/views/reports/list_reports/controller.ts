import {useContext} from 'react';
import {KEY_REPORT_STORAGE} from '../../../../core/constant';
import {ReportContext} from '../../../../core/context/report';
import {SET_LIST_REPORTS} from '../../../../core/context/report/actions';
import {useLocalStorage} from '../../../../core/hooks/useLocalStorage';

export const useListReport = () => {
  const {getDataStorage} = useLocalStorage();

  const {dispatch} = useContext(ReportContext);

  const getReports = async () => {
    const reports = await getDataStorage(KEY_REPORT_STORAGE);

    if (reports) {
      dispatch!({
        type: SET_LIST_REPORTS,
        payload: reports,
      });
    }
  };

  return {
    getReports,
  };
};
