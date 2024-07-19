import React, { ReactNode } from "react";
import { SelectedIndexProvider } from "../SelectedIndexContext";
import { UserDataProvider } from "../UserDataContext";

type ProvidersProps = {
  children: ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <SelectedIndexProvider>
      <UserDataProvider>{children}</UserDataProvider>
    </SelectedIndexProvider>
  );
};

export default Providers;
