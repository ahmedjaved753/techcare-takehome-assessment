import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUserDetails } from "../api/api";
import { UserDetails } from "../api/api";

type UserDataContextType = {
  data: UserDetails[] | null;
  loading: boolean;
  error: Error | null;
};

type UserDataProviderProps = {
  children: React.ReactNode;
};

const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined
);

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
};

export const UserDataProvider: React.FC<UserDataProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<UserDetails[] | null>(null);
  const [error, setLocalError] = useState<Error | null>(null);
  const [loading, setLocalLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLocalLoading(true);
        const fetchedData = await fetchUserDetails();
        setData(fetchedData);
      } catch (err) {
        const error = err as Error;
        setLocalError(error);
      } finally {
        setLocalLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <UserDataContext.Provider value={{ data, loading: loading, error }}>
      {children}
    </UserDataContext.Provider>
  );
};
