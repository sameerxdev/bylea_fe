import React, { useContext, useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { LiaAdSolid } from "react-icons/lia";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { doctorsData, doctorsGrid } from "../data/DoctorsData";
// import { Header } from "../components";
import { UserContext } from "../../contexts/UserProvider";
import axios from "axios";
// import { backendUrl } from "../constants/urls";
const MyAds = () => {
  const { data, myProd, setMyProd } = useContext(UserContext);
  // const [doctorsData, setDoctorsData] = useState([]);
  const navigate = useNavigate();

  // if (data.adminName == "Administration") {
  //   setLoggedIn(true);
  // }

  // const getDoctorsData = async () => {
  //   const res = await axios.post(`${backendUrl}doctors/search/docType/doctor`);
  //   setDoctorsData(res.data);
  // };

  // useEffect(() => {
  //   // getDoctorsData();
  // }, []);

  const prodData = [
    {
      adId: 11012,
      name: "Honda Cd-70",
      color: "red",
      year: "2012",
      price: 90000,
      condition: 9,
    },
    {
      adId: 11013,
      name: "Honda CG-125",
      color: "black",
      year: "2010",
      price: 120000,
      condition: 8,
    },
  ];

  const viewDetails = (item) => {
    setMyProd({
      prodName: item.name,
      // docApt: item.PendingAppointments,
      // docTime: item.Timings,
      prodModel: item.year,
      prodId: item.adId,
      prodPrice: item.price,
      prodCondition: item.condition,
      prodPic: item.pic,
      prodColor: item.color
    });
    console.log(myProd.prodCondition)
    navigate("/myads/details");
  };

  return (
    <div className="mt-9">
      <div className="dark:text-gray-400 text-orange-600 p-8 flex">
        <LiaAdSolid size={50} />
        <h1 className="text-3xl font-bold text-orange-600 my-auto ml-3">
          My Ads
        </h1>
      </div>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        {/* <Header category="Users" title="Doctors" /> */}
        <div className="flex justify-end">
          <NavLink to="./postAd">
            <button className="p-2 bg-orange-600 rounded-lg text-white mb-3 flex justify-between items-center font-semibold">
              <BsPlusLg className="mr-2" size={24} />
              New Ad
            </button>
          </NavLink>
        </div>

        <div className="">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="py-3 pl-2">
                <div className="relative max-w-xs">
                  <label htmlFor="hs-table-search" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    name="hs-table-search"
                    id="hs-table-search"
                    className="block w-full p-3 pl-10 border-1 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Search..."
                  />
                  <div className=" dark:text-white absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <AiOutlineSearch />
                  </div>
                </div>
              </div>

              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-x border rounded-lg max-h-screen">
                  <table className="min-w-full divide-y divide-gray-200 table-auto overflow-scroll w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                        >
                          Ad ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          Title
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          Year
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          Condition
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    {/* <tbody className="divide-y divide-gray-200  overflow-y overflow-scroll">
                    {doctorsData.map((item) => (
                      <tr className="hover:bg-gray-200">
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                          {item.Record.cnic}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap place-content-center">
                          <div className="image flex gap-4">
                            <img
                              className="rounded-full w-10 h-10"
                              src={`data:image/jpeg;base64,${item.Record.profile}`}
                              alt="doctor"
                            />
                            <div className="place-content-start">
                              <p>{item.Record.name}</p>
                              <p>{item.Record.contact}</p>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                          {item.Record.timeStart} - {item.Record.timeEnd}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          {Math.floor(20 * Math.random())}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          {item.Record.speciality}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-center">
                          <button
                            className="rounded-lg bg-gray-400 hover:bg-gray-500 text-white font-semibold p-2"
                            onClick={() => {
                              handleDoctorDetails(item);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody> */}

                    <tbody className="divide-y divide-gray-200  overflow-y overflow-scroll">
                      {prodData.map((item) => (
                      <tr className="hover:bg-gray-200">
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                          {item.adId}
                        </td>
                        <td className="mx-auto text-sm text-gray-800 whitespace-nowrap place-content-center">
                          <div className="image flex gap-4">
                            <img
                              className="rounded-full w-10 h-10"
                              src={require("../../data/fm1.png")}
                              alt="doctor"
                            />
                            <div className="">
                              <p>{item.name}</p>
                              <p>{item.color}</p>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                          {item.year}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          {item.condition}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          {item.price}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-center">
                          <button
                            className="rounded-lg bg-gray-400 hover:bg-gray-500 text-white font-semibold p-2"
                            onClick={() => viewDetails(item)}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAds;
