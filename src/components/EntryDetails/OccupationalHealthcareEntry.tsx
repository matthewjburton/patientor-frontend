import { OccupationalHealthcareEntry as OccupationalHealthcareEntryType } from '../../types';
import WorkIcon from '@mui/icons-material/Work';

interface OccupationalHealthcareEntryProps {
  entry: OccupationalHealthcareEntryType;
}
const OccupationalHealthcareEntry = ({
  entry,
}: OccupationalHealthcareEntryProps) => {
  return (
    <div>
      <div>
        {entry.date} <WorkIcon /> {entry.employerName}
      </div>
      <div>
        <em>{entry.description}</em>
      </div>
      <div>
        Sick leave
        <div>{entry.sickLeave?.startDate}</div>
        <div>{entry.sickLeave?.endDate}</div>
      </div>
      <div>diagnose by {entry.specialist}</div>
    </div>
  );
};

export default OccupationalHealthcareEntry;
