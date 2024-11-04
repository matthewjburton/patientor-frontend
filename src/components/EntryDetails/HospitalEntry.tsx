import { HospitalEntry as HospitalEntryType } from '../../types';

interface HospitalEntryProps {
  entry: HospitalEntryType;
}
const HospitalEntry = ({ entry }: HospitalEntryProps) => {
  return (
    <div>
      <div>{entry.date}</div>
      <div>
        <em>{entry.description}</em>
      </div>
      <div>
        Discharge
        <div>{entry.discharge.date}</div>
        <div>{entry.discharge.criteria}</div>
      </div>
      <div>diagnose by {entry.specialist}</div>
    </div>
  );
};

export default HospitalEntry;
