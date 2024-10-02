import { useGetOrdersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import { styles } from "@/app/styles/style";
import React, { useEffect } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Label,
  YAxis,
  LabelList,
  AreaChart,
  Tooltip,
  Area,
  LineChart,
  CartesianGrid,
  Legend,
} from "recharts";
import Loader from "../../Loader/Loader";

type Props = {
  isDashboard?: boolean;
};

// Static data....
const analyticsData = [
  {
    name: "Page A",
    count: 4000,
  },
  {
    name: "Page B",
    count: 3000,
  },
  {
    name: "Page C",
    count: 5000,
  },
  {
    name: "Page D",
    count: 1000,
  },
  {
    name: "Page E",
    count: 4000,
  },
  {
    name: "Page F",
    count: 800,
  },
  {
    name: "Page G",
    count: 200,
  },
];

export default function OrdersAnalytics({ isDashboard }: Props) {
  const { data, isLoading } = useGetOrdersAnalyticsQuery({}); 

  const analyticsData: any = [];

  data &&
  data.orders.last12Months.forEach((item: any) => {
      analyticsData.push({ name: item.month, count: item.count });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={isDashboard ? "h-[30vh]" : "h-screen"}>
          <div
            className={isDashboard ? "mt-[0px] pl-[40px] mb-2" : "mt-[50px]"}
          >
            <h1
              className={`${styles.title} ${
                isDashboard && "!text-[20px]"
              } px-5 !text-start`}
            >
              Orders Analytics
            </h1>
            {!isDashboard && (
                <p className={`${styles.label} px-5`}>
                Last 12 monts analytics data{" "}
              </p>
            )}            
          </div>

          <div 
          className={`$w-full ${
          !isDashboard ? "h-[90%]" : "h-full"
          } flex !items-center justify-center`}
          >
            <ResponsiveContainer 
            width={isDashboard ? "100%" : "90%"} 
            height={isDashboard ? "100%" : "50%"}
            >
              <LineChart 
              width={150} 
              height={300} 
              data={analyticsData}
              margin={{
                top:5,
                right:30,
                left:20,
                bottom:5,
              }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />                
                <YAxis />                              
                <Tooltip />
                {!isDashboard && <Legend/>}                
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
}
