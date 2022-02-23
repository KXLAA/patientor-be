import { NewPatient } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing ");
  }
  return name;
};

const parseString = (str: unknown): string => {
  if (!str || !isString(str)) {
    throw new Error(`Incorrect or missing ${str}`);
  }
  return str;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

const toNewPatient = (object: unknown): NewPatient => {
  const addedPatient: NewPatient = {};
  return newPatient;
};

export default toNewPatient;
