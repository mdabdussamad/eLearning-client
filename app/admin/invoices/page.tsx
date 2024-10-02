"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../utils/Heading";
import DashboardHeader from "../../components/Admin/DashboardHeader";
import AllInvoices from "@/app/components/Admin/Order/AllInvoices";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="eLearning - Admin"
        description="eLearning is a platform for student to learn and get help from teacher"
        keywords="Programming, MERN, Redux, Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
        </div>
        <div className="w-[85%]">
            <DashboardHeader />
            <AllInvoices />
        </div>
      </div>
    </div>
  );
};

export default page;
