import React from "react";

type ReusableProfileProps = {
  image: string;
  icon: string;
  displayName: string;
  age_height: string;
  isSelected: boolean;
};

const ReusableProfile: React.FC<ReusableProfileProps> = ({
  image,
  icon,
  displayName,
  age_height,
  isSelected,
}) => {
  return (
    <div
      className={`pl-4 pr-2 flex py-3 items-center w-full justify-between cursor-pointer hover:bg-custom-paleAqua ${
        isSelected ? "bg-custom-paleAqua" : ""
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <img
          src={image}
          alt="profile image"
          className="w-[40px] h-[40px] rounded-full object-cover object-center"
        />
        <div className="text-sm flex flex-col">
          <span className="font-semibold">{displayName}</span>
          <span className="designation text-slate-400">{age_height}</span>
        </div>
      </div>
      <img src={icon} alt="vertical icon" className="cursor-pointer" />
    </div>
  );
};

export default ReusableProfile;
