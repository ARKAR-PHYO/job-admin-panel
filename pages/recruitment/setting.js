import MainLayout from "../../components/layouts/layout";
import withAuth from "../../components/layouts/withAuth";
import { useEffect, useState } from "react";
import apiCall from "../../services/api-call";
import CategoriesSetting from "../../components/recruitment/categories-setting";

// const categories = [
//   { value: "Sales & Customer Services", created_at: "September 21, 2021" },
//   { value: "Admin & HR", created_at: "September 21, 2021" },
//   { value: "Finance", created_at: "September 21, 2021" },
//   { value: "Business Development", created_at: "September 21, 2021" },
//   { value: "IT & Engineering", created_at: "September 21, 2021" },
//   { value: "Media & PR", created_at: "September 21, 2021" },
//   { value: "Driver", created_at: "September 21, 2021" },
//   { value: "Healthcare", created_at: "September 21, 2021" },
// ];

const RecruitSetting = (props) => {

  return (
    <MainLayout>
      <div className="px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium tracking-wide">
              Recruitment Setting
            </h1>
            <p className="text-gray-400 ">User: UserName</p>
          </div>
        </div>

        <div className=" mt-9">
          <CategoriesSetting /> 
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(RecruitSetting);
