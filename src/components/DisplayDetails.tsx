import taylorImage from "../assets/png/taylor2.png";
import calenderIcon from "../assets/svgs/calender.svg";
import genderIcon from "../assets/svgs/gender.svg";
import phoneIcon from "../assets/svgs/phone.svg";
import insuranceIcon from "../assets/svgs/insurance.svg";
import { UserDetails } from "../api/api";
import formatDate from "../utils/formatDate";
import { useMemo } from "react";

type DisplayDetailsProps = {
  details: UserDetails | null;
};

const DisplayDetails: React.FC<DisplayDetailsProps> = ({ details }) => {
  const sectionData = useMemo(
    () => [
      {
        icon: calenderIcon,
        label: "Date of Birth",
        value: details ? formatDate(details.date_of_birth) : "",
      },
      {
        icon: genderIcon,
        label: "Gender",
        value: details ? details.gender : "",
      },
      {
        icon: phoneIcon,
        label: "Contact Info.",
        value: details ? details.phone_number : "",
      },
      {
        icon: phoneIcon,
        label: "Emergency Contacts",
        value: details ? details.emergency_contact : "",
      },
      {
        icon: insuranceIcon,
        label: "Insurance Provider",
        value: details ? details.insurance_type : "",
      },
    ],
    [details]
  );

  return (
    <div className="w-[90%] bg-custom-white p-4 rounded-[0.5rem]">
      <img
        src={details ? details.profile_picture : taylorImage}
        alt="profile picture"
        className="w-[180px] h-[180px] object-cover object-center rounded-full m-auto mb-3"
      />
      <h1 className="font-semibold text-2xl pl-4 my-2 text-center">
        {details ? details.name : "Loading..."}
      </h1>
      <section className="space-y-5">
        {sectionData.map((section, index) => (
          <div className="flex items-center gap-5" key={index}>
            <div className="bg-custom-lightGray w-[50px] h-[50px] grid place-content-center rounded-full">
              <img src={section.icon} alt={section.label} />
            </div>
            <div>
              <span className="text-sm">{section.label}</span>
              <p className="text-sm font-semibold">{section.value}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="w-full grid place-content-center">
        <button className="mt-5 text-center mx-auto bg-custom-aqua text-black text-xs font-semibold py-3 px-10 rounded-3xl">
          Show All Information
        </button>
      </div>
    </div>
  );
};

export default DisplayDetails;
