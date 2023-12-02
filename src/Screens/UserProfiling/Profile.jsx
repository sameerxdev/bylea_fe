import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";
import img from "../../data/avatar3.png";
import { BiEdit } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { data } = useContext(UserContext);
  console.log("DATA", data);
  const { loggedIn } = useContext(UserContext);
  const [disable, setDisable] = useState(true);

  return (
    <div className="mt-9">
      <div className="dark:text-gray-400 text-orange-600 p-8 flex">
        <h1 className="text-3xl font-bold text-orange-600 my-auto ml-3">
          Profile Details
        </h1>
      </div>
      <div className="w-3/4 bg-white-200 rounded-lg shadow-2xl p-8 m-4 mx-auto my-auto bg-white">
        <div className="flex place-content-end">
          <BiEdit size={30} onClick={() => navigate("/profile/edit")} />
        </div>

        <form className="place-content-center">
          <fieldset className="mt-4 border-1 border-black rounded-md p-4 text-lg text-gray-900 mx-auto my-auto">
            <legend className="font-bold">Details</legend>
            <div className="flex font-semibold justify-end w-full">
              <label className="mr-2">Date: </label>
              <input
                type="text"
                value={Date().toString().substring(4, 16)}
                disabled
              />
            </div>
            <div className="mt-3">
              <div className="flex flex-col mb-4 justify-center items-center">
                <img src={img} className="h-28 w-28 rounded-full mb-5" />
                <div className="flex mb-4 justify-center">
                  <label
                    className="mb-2 mt-2 mr-4 font-bold text-lg text-gray-900"
                    htmlFor="cnic"
                  >
                    Name
                  </label>
                  <input
                    className="border rounded-sm py-2 px-3 text-grey-800 font-normal"
                    type="text"
                    name="disease"
                    placeholder="Cd-70..."
                    value={data.name}
                    disabled={disable}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 mb-4">
                <div>
                  <label
                    className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                    htmlFor="dosage"
                  >
                    Email
                  </label>
                  <div>
                    <input
                      className="border py-2 px-3 text-grey-800 w-3/4"
                      type="text"
                      placeholder="Product Name"
                      required
                      disabled={disable}
                      value={data.email}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                    htmlFor=""
                  >
                    Role
                  </label>
                  <div>
                    <input
                      className="border py-2 px-3 text-grey-800 w-3/4"
                      type="text"
                      placeholder="Year"
                      required
                      value={data.role}
                      disabled={disable}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 mb-4">
                <div>
                  <label
                    className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                    htmlFor="dosage"
                  >
                    CNIC
                  </label>
                  <div>
                    <input
                      className="border py-2 px-3 text-grey-800 w-3/4"
                      type="text"
                      placeholder="Color"
                      required
                      value={data.cnic}
                      disabled={disable}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                    htmlFor=""
                  >
                    Phone
                  </label>
                  <div>
                    <input
                      className="border py-2 px-3 text-grey-800 w-3/4"
                      type="number"
                      min={0}
                      max={10}
                      placeholder=""
                      required
                      value={data.contact}
                      disabled={disable}
                    />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Profile;
