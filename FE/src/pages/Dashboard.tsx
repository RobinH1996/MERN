import React, { useState, useEffect } from "react";
import UserInfo from "../components/UserInfo";
import Logo from "../assets/Logo.svg";
import { callApi, SetLoadingStatus } from "../utils/helper";

export default function Dashboard() {
  const [allUsersData, set_allUsersData] = useState<any>([]);

  const getAllUsersData = async () => {
    SetLoadingStatus(true);
    const { res, error }: any = await callApi(
      "GET",
      "/auth/getAllUsersData",
      null,
      false,
      true
    );
    if (res) {
      console.log(res, "$$$$$$$$$$$$$$$$$$$");
      set_allUsersData(res);
    }
    SetLoadingStatus(false);
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  const dateFormat = (timestamp: string, type: string = "date") => {
    const date = new Date(timestamp);

    // Format the date and time as you like
    const options: Intl.DateTimeFormatOptions = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    const optionsOther: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const formattedDateOther = date.toLocaleDateString(undefined, optionsOther);
    const formattedDateTime = date.toLocaleString(undefined, options);
    const formattedDate = String(formattedDateTime).slice(0, 8);
    const formattedTime = String(formattedDateTime).slice(10, 15);
    if (type === "other") return formattedDateOther;
    if (type === "date") return formattedDate;
    else return formattedTime;
  };

  return (
    <div className="bg-white h-screen">
      <div className="h-[60px] w-screen flex items-center shadow-custom">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img src={Logo} alt="Logo" />
            <p className="text-2xl text-blackColour font-semibold">Dashboard</p>
          </div>
          <UserInfo />
        </div>
      </div>
      <div className="container mt-5">
        <p className="text-2xl font-medium text-center text-blackColour">
          This is Users Data
        </p>
        <div className="sm:block hidden shadow-custom mt-3">
          <table className="min-w-full divide-y divide-gray-200 border-b">
            <thead>
              <tr>
                <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-grey-400 ">
                  <div className="flex items-center gap-x-3 w-fit relative group">
                    <button className="flex items-center gap-x-2">
                      <span>First Name</span>
                    </button>
                  </div>
                </th>
                <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-grey-400 ">
                  <div className="flex items-center gap-x-3 w-fit relative group">
                    <button className="flex items-center gap-x-2">
                      <span>Last Name</span>
                    </button>
                  </div>
                </th>
                <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-grey-400 ">
                  <div className="flex items-center gap-x-3 w-fit relative group">
                    <button className="flex items-center gap-x-2">
                      <span>Email</span>
                    </button>
                  </div>
                </th>
                <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-grey-400 ">
                  <div className="flex items-center gap-x-3 w-fit relative group">
                    <button className="flex items-center gap-x-2">
                      <span>Joined Date</span>
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allUsersData?.map((item: any, index: number) => (
                <tr key={index} className="hover:bg-gray-100 cursor-pointer">
                  <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {item?.firstName}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {item?.lastName}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {item?.email}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {dateFormat(item?.createdAt, "other")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sm:hidden mt-3 flex flex-col gap-1">
          {allUsersData?.map((item: any, index: number) => (
            <div className="flex flex-col shadow-custom px-3 xs:text-lg text-sm font-normal text-blackColour">
              <div className="flex items-end w-full p-2">
                <div className="w-1/3 text-left font-medium">First Name :</div>
                <div className="w-2/3 text-right">{item?.firstName}</div>
              </div>
              <div className="flex items-end w-full p-2">
                <div className="w-1/3 text-left font-medium">Last Name :</div>
                <div className="w-2/3 text-right">{item?.lastName}</div>
              </div>
              <div className="flex items-end w-full p-2">
                <div className="w-1/3 text-left font-medium">Email :</div>
                <div className="w-2/3 text-right">{item?.email}</div>
              </div>
              <div className="flex items-end w-full p-2">
                <div className="w-1/3 text-left font-medium">Joined Date :</div>
                <div className="w-2/3 text-right">
                  {dateFormat(item?.createdAt, "other")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
