import React, { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { UserContext } from "../contexts/UserProvider";
import img from "../data/avatar3.png";

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const { setData, data } = useContext(UserContext);
  const navigate = useNavigate();
  if (!data) {
    navigate("/");
  }

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 z-20">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          // src={`data:image/jpeg;base64,${data.adminPic}`}
          src={img}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-md dark:text-gray-200">
            Name: {data.name}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Email: {data.email}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Phone: {data.contact}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            CNIC: {data.cnic}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <NavLink to={item.link}>
            <div
              key={index}
              className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className=" text-xl rounded-lg p-3 hover:bg-light-gray"
              >
                {item.icon}
              </button>

              <div>
                <p className="font-semibold dark:text-gray-200 ">
                  {item.title}
                </p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {" "}
                  {item.desc}{" "}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <NavLink to="/login">
        <div className="mt-5" onClick={() => setData(null)}>
          <Button
            color="white"
            bgColor={currentColor}
            text="Logout"
            borderRadius="10px"
            width="full"
          />
        </div>
      </NavLink>
    </div>
  );
};

export default UserProfile;
