// @ts-ignore
import logo_svg from "../assets/svgs/TestLogo.svg";
import Navbar from "./Navbar";
// @ts-ignore
import Profile from "./Profile";

const Header = () => {
  return (
    <header className="header_div w-full bg-custom-white py-2 px-8 rounded-[2rem] flex items-center justify-between">
      <div className="logo_container w-[200px]">
        <img
          src={logo_svg}
          alt="Take Care Logo"
          className="w-full cursor-pointer"
        />
      </div>
      <Navbar />
      <Profile />
    </header>
  );
};

export default Header;
