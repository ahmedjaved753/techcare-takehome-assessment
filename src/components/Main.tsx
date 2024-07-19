import ChartGridCards from "./ChartGridCards";
import { useSelectedIndex } from "../context/SelectedIndexContext";
import { useUserData } from "../context/UserDataContext";
import LineChart from "./LineChart";
import Table from "./Table";
import { jessicaTaylor } from "../data";

function Main() {
  const { selectedIndex } = useSelectedIndex();
  const { loading, error, data } = useUserData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id="rounded-md" className="main_div bg-transparent space-y-[1.5rem]">
      <div className="chartContainer rounded-[0.5rem] bg-custom-white w-full p-4">
        <h1 className="font-semibold text-2xl">Diagnostic History</h1>
        {/* <div className={`${styles.chartgrid} mt-5`}> */}
        <div className={`grid grid-cols-3 gap-6 mt-5`}>
          {/* <div className={styles.gridchild}> */}
          <div className={"rounded-[0.6rem] col-span-3 row-span-2"}>
            <LineChart details={data && data[selectedIndex]} />
          </div>
          {jessicaTaylor.map((item, index: number) => (
            <ChartGridCards
              key={index}
              index={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
              status={item.statuses}
              arrowIcon={item.arrow}
            />
          ))}
        </div>
      </div>
      <div>
        <Table details={(data && data[selectedIndex]) || null} />
      </div>
    </div>
  );
}

export default Main;
