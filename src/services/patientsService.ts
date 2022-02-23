/* eslint-disable @typescript-eslint/no-unsafe-call */
import patientsData from "../../data/patients";
import { Patient, NewPatient } from "../types";
import { v4 as uuidv4 } from "uuid";

const getPatients = (): Pick<
  Patient,
  "id" | "name" | "dateOfBirth" | "gender" | "occupation"
>[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatient): Patient => {
  const newPatient = {
    id: uuidv4() as string,
    ...entry,
  };
  patientsData.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  addPatient,
};
