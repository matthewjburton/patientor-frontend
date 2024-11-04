import { Box, Typography } from '@mui/material';
import { /*Diagnosis,*/ Patient } from '../../types';
import { useEffect, useState } from 'react';
import patientService from '../../services/patients';
//import diagnosesService from '../../services/diagnoses';
import EntryDetails from '../EntryDetails';

interface Props {
  id?: string;
}

const PatientInformation = ({ id }: Props) => {
  const [patient, setPatient] = useState<Patient | undefined>();
  //const [diagnoses, setDiagnoses] = useState<Diagnosis[] | undefined>();

  useEffect(() => {
    const fetchPatient = async () => {
      if (id) {
        const patient = await patientService.getId(id);
        setPatient(patient);
      }
    };
    /*const fetchDiagnoses = async () => {
      const diagnoses = await diagnosesService.getAll();
      setDiagnoses(diagnoses);
    };*/
    void fetchPatient();
    //void fetchDiagnoses();
  }, []);

  if (!patient) {
    return (
      <Typography align="center" variant="h6">
        Patient not found
      </Typography>
    );
  }

  return (
    <Box>
      <h1>{patient.name}</h1>
      <div>gender: {patient.gender}</div>
      <div>ssn: {patient.ssn}</div>
      <div>occupation: {patient.occupation}</div>

      <h3>entries</h3>
      {patient.entries.map((entry) => (
        <div key={entry.description}>
          <EntryDetails entry={entry} />
          {/*<div>
            {entry.date} <em>{entry.description}</em>
          </div>
          <ul>
            {entry.diagnosisCodes.map((code) => (
              <li key={code}>
                {code}{' '}
                {diagnoses?.find((diagnosis) => diagnosis.code === code)?.name}
              </li>
            ))}
          </ul>*/}
        </div>
      ))}
    </Box>
  );
};

export default PatientInformation;
