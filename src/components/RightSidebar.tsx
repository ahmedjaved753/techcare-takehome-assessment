import React from "react";
import { useUserData } from "../context/UserDataContext";
import { useSelectedIndex } from "../context/SelectedIndexContext";
import DisplayDetails from "./DisplayDetails";
import LabResults from "./LabResults";

const RightSidebar: React.FC = () => {
  const { data, loading, error } = useUserData();
  const { selectedIndex } = useSelectedIndex();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const details = data[selectedIndex];

  return (
    <div id="rounded-md" className="bg-custom-lightGray space-y-[1.5rem]">
      <DisplayDetails details={details} />
      <LabResults details={details} />
    </div>
  );
};

export default RightSidebar;
