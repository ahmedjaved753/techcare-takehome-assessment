import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import ArrowUp from "../assets/svgs/ArrowUp.svg";
import ArrowDown from "../assets/svgs/ArrowDown.svg";
import { UserDetails } from "../api/api";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const PINK_BORDER_COLOR = "#e66fd2";
const PINK_BACKGROUND_COLOR = "rgba(255, 99, 132, 0.2)";
const PURPLE_BORDER_COLOR = "#8c6fe6";
const PURPLE_BACKGROUND_COLOR = "rgba(54, 162, 235, 0.2)";

type LineChartProps = {
  details: UserDetails | null;
};

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      top: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
      ticks: {
        callback: function (value) {
          const allowedTicks = [60, 80, 100, 120, 140, 160, 180];
          return allowedTicks.includes(value as number) ? value : "";
        },
        stepSize: 20,
      },
      min: 60,
      max: 180,
    },
  },
};

const LineChart: React.FC<LineChartProps> = ({ details }) => {
  const chartData = useMemo(() => {
    if (details?.diagnosis_history && details.diagnosis_history.length > 0) {
      const lastSixMonthsData = details.diagnosis_history.slice(0, 6).reverse();
      const labels = lastSixMonthsData.map(
        (item) => `${item.month.slice(0, 3)}, ${item.year}`
      );

      const diastolicData = lastSixMonthsData.map(
        (item) => item.blood_pressure.diastolic?.value || 0
      );
      const systolicData = lastSixMonthsData.map(
        (item) => item.blood_pressure.systolic?.value || 0
      );

      return {
        labels,
        datasets: [
          {
            data: diastolicData,
            borderColor: PINK_BORDER_COLOR,
            backgroundColor: PINK_BACKGROUND_COLOR,
            fill: true,
            tension: 0.4,
          },
          {
            data: systolicData,
            borderColor: PURPLE_BORDER_COLOR,
            backgroundColor: PURPLE_BACKGROUND_COLOR,
            fill: true,
            tension: 0.5,
          },
        ],
      };
    }
    return { labels: [], datasets: [] };
  }, [details]);

  const { diagnosis_history: diagnosisHistory } = details || {};

  const currentSystolic = diagnosisHistory?.[0]?.blood_pressure.systolic;
  const currentDiastolic = diagnosisHistory?.[0]?.blood_pressure.diastolic;

  return (
    <div className="bg-custom-lightGray rounded-[1rem] p-3 flex gap-5">
      <section className="w-[450px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-left font-semibold">Blood Pressure</h1>
          <select className="border-0 outline-none rounded p-1 bg-transparent">
            <option>Last 6 months</option>
          </select>
        </div>
        <Line data={chartData} options={options} />
      </section>

      <section className="bg-transparent pt-2">
        <div className="flex gap-2 items-center">
          <div className="w-2.5 h-2.5 bg-custom-pink rounded-full"></div>
          <p className="font-semibold text-sm">Systolic</p>
        </div>
        <h1 className="mt-1 font-semibold text-lg">{currentSystolic?.value}</h1>

        <div className="flex items-center gap-1 mt-3">
          <img
            src={
              currentSystolic &&
              currentSystolic.levels !== "Higher than Average"
                ? ArrowDown
                : ArrowUp
            }
            alt="arrow"
          />
          <p className="text-xs">{currentSystolic?.levels}</p>
        </div>

        <div className="my-5 border-b-[1px] border-gray-300"></div>

        <div className="flex gap-2 items-center">
          <div className="w-2.5 h-2.5 bg-custom-purple rounded-full"></div>
          <p className="font-semibold text-sm">Diastolic</p>
        </div>
        <h1 className="mt-1 font-semibold text-lg">
          {currentDiastolic?.value}
        </h1>

        <div className="flex items-center gap-1 mt-3">
          <img
            src={
              currentDiastolic &&
              currentDiastolic.levels === "Lower than Average"
                ? ArrowDown
                : ArrowUp
            }
            alt="arrow"
          />
          <p className="text-xs">{currentDiastolic?.levels}</p>
        </div>
      </section>
    </div>
  );
};

export default LineChart;
