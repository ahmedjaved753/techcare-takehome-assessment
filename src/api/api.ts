import axios from "axios";

type BloodPressure = {
  systolic: {
    value: number;
    levels: string;
  };
  diastolic: {
    value: number;
    levels: string;
  };
};

type DiagnosisHistory = {
  month: string;
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: {
    value: number;
    levels: string;
  };
  respiratory_rate: {
    value: number;
    levels: string;
  };
  temperature: {
    value: number;
    levels: string;
  };
};

type DiagnosticList = {
  name: string;
  description: string;
  status: string;
};

export type UserDetails = {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: DiagnosticList[];
  lab_results: string[];
};
const username = import.meta.env.VITE_USERNAME as string;
const password = import.meta.env.VITE_PASSWORD as string;
const apiUrl = import.meta.env.VITE_BASE_URL as string;

const credentials = `${username}:${password}`;
const encodedCredentials = btoa(credentials);

export const fetchUserDetails = async (): Promise<UserDetails[]> => {
  try {
    const response = await axios.get<UserDetails[]>(`${apiUrl}`, {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
