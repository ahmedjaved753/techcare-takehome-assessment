import Main from "../components/Main";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Header from "../components/Header";
import styles from "../assets/styles/dashboard-grid.module.css";

function Dashboard() {
  return (
    <div className="w-full h-[100%] overflow-hidden bg-custom-lightGray p-[1.5rem]">
      <Header />
      <div className={`${styles.dashboard_grid} w-full mt-[1.5rem]`}>
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  );
}

export default Dashboard;
