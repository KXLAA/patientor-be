export type Gender = "male" | "female";

export type NewPatient = Omit<Patient, "id">;

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export interface Diagnoses {
  code: string;
  name: string;
  latin?: string;
}
