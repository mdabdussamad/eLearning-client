"use client";
import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar"
import AdminProtected from "../hooks/adminProtected";
import DashboardHero from "../components/Admin/DashboardHero"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
     <AdminProtected>
     <Heading
        title="eLearning - Admin"
        description="eLearning is a platform for student to learn and get help from teachers"
        keywords="Programing, MERN, Redux, Machine Learning"
      />
      <div className="flex h-[200vh">
        <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
        </div>
      </div>
      <div className="w-[85%]">
        <DashboardHero />
      </div>
     </AdminProtected>
    </div>
  );
};

export default page;
