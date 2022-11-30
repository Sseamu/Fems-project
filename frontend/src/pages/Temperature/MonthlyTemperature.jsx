import React from "react";
import { LineChart, TempGrid } from "../../components";
import DashHeader from "../../components/common/DashHeader";
const MonthlyTemperature = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <DashHeader category="온도" title="월별 온도현황" />
      <div className="w-full dark:bg-secondary-dark-bg">
        <LineChart />
        <TempGrid />
      </div>
    </div>
  );
};

export default MonthlyTemperature;