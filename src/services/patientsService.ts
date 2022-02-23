import patientsData from "../../data/patients";
import { Patient } from "../types";

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

export default {
  getPatients,
};
