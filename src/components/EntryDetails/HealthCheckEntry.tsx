import { HealthCheckEntry as HealthCheckEntryType } from '../../types';

interface HealthCheckEntryProps {
  entry: HealthCheckEntryType;
}
const HealthCheckEntry = ({ entry }: HealthCheckEntryProps) => {
  return (
    <div>
      <div>{entry.date}</div>
      <div>
        <em>{entry.description}</em>
      </div>
      <div>{entry.healthCheckRating}</div>
      <div>diagnose by {entry.specialist}</div>
    </div>
  );
};

export default HealthCheckEntry;
