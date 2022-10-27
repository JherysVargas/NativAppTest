import {IReport} from '../interfaces/report_interface';

export type ReportContextProps = {
  newReport: IReport;
  listReport: IReport[];
  dispatch?: React.Dispatch<any>;
};
