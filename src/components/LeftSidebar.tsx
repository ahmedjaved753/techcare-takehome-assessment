import React from "react";
import { useUserData } from "../context/UserDataContext";
import { useSelectedIndex } from "../context/SelectedIndexContext";
import search_icon from "../assets/svgs/search.svg";
import ReusableProfile from "./ReusableProfile";
import horizontal_menu from "../assets/svgs/horizontal_menu.svg";
import styles from "../assets/styles/scrollbar.module.css";

const LeftSidebar: React.FC = () => {
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

  return (
    <div id="rounded-md" className="bg-custom-white py-4 pr-2">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl pl-4">Patients</h1>
        <img src={search_icon} alt="search icon" className="pr-2" />
      </div>
      <section className={`${styles.cards} mt-5 max-h-[750px] space-y-2`}>
        {data.map((item, index) => (
          <ReusableProfile
            key={index}
            image={item.profile_picture}
            displayName={item.name}
            age_height={`${item.gender}, ${item.age}`}
            isSelected={index === selectedIndex}
            icon={horizontal_menu}
          />
        ))}
      </section>
    </div>
  );
};

export default LeftSidebar;
