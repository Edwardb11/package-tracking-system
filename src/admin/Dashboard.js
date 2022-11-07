import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BarChart from "../dashboard/BarCharts";
import PieCharts from "../dashboard/PieChart";

import WelcomeBanner from "../dashboard/WelcomeBanner";

const Dashboard = () => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <NavBar />
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Welcome banner */}
          <WelcomeBanner />
          {/* Cards */}
          <div className=" grid grid-cols-12 gap-6">
            <BarChart />
            <PieCharts />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
