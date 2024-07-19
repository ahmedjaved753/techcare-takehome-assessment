import React, { createContext, useState, useContext, ReactNode } from "react";

type SelectedIndexContextType = {
  selectedIndex: number;
  updateSelectedIndex: (index: number) => void;
};

const SELECTED_INDEX = 3;

const DEFAULT_CONTEXT_VALUE = {
  selectedIndex: -1,
  updateSelectedIndex: () => {},
};

const SelectedIndexContext = createContext<SelectedIndexContextType>(
  DEFAULT_CONTEXT_VALUE
);

export const useSelectedIndex = () => useContext(SelectedIndexContext);

type SelectedIndexProviderProps = {
  children: ReactNode;
};

export const SelectedIndexProvider: React.FC<SelectedIndexProviderProps> = ({
  children,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(SELECTED_INDEX);

  const updateSelectedIndex = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <SelectedIndexContext.Provider
      value={{ selectedIndex, updateSelectedIndex }}
    >
      {children}
    </SelectedIndexContext.Provider>
  );
};
