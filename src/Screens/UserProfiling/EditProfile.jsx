import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";
import img from "../../data/avatar3.png";
import { BiEdit } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const EditProfile = () => {
  const navigate = useNavigate();
  const { data } = useContext(UserContext);
  console.log("DATA", data);
  const { loggedIn } = useContext(UserContext);
  const [disable, setDisable] = useState(true);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newContact, setNewContact] = useState("");
  const [newCNIC, setNewCNIC] = useState("");
  const [newPic, setNewPic] = useState(null);

  return (
    <div className="mt-9">
      <div className="dark:text-gray-400 text-orange-600 p-8 flex">
        <h1 className="text-3xl font-bold text-orange-600 my-auto ml-3">
          Edit Profile
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
            <div className="flex flex-col mb-4 mt-4">
              <img src={img} className="h-28 w-28 rounded-full mb-2" />
              <div className="mb-5">
                <label
                  className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                  htmlFor="dosage"
                >
                  New Profile Picture
                </label>
                <div>
                  <input
                    className="border py-1 px-2 text-grey-800 text-sm"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    name="pic"
                    id="pic"
                    multiple
                    onChange={(e) => {
                      setNewPic(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex mb-2 items-center">
                <label
                  className="mr-3 font-semibold text-md text-gray-500"
                  htmlFor="dosage"
                >
                  New Email
                </label>
                <input
                  className="border py-1 px-3 text-md text-grey-500"
                  type="text"
                  placeholder={data.email}
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                  }}
                />
              </div>
              <div className="flex mb-2 items-center">
                <label
                  className="mr-3 font-semibold text-md text-gray-500"
                  htmlFor="dosage"
                >
                  New Name
                </label>
                <input
                  className="border py-1 px-3 text-md text-grey-500"
                  type="text"
                  placeholder={data.name}
                  onChange={(e) => {
                    setNewName(e.target.value);
                  }}
                />
              </div>
              <div className="flex mb-2 items-center">
                <label
                  className="mr-3 font-semibold text-md text-gray-500"
                  htmlFor="dosage"
                >
                  New Contact
                </label>
                <input
                  className="border py-1 px-3 text-md text-grey-500"
                  type="text"
                  placeholder={data.contact}
                  onChange={(e) => {
                    setNewContact(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                className="px-4 py-2 bg-[#ea580c] text-white font-bold text-lg"
                onClick={() => {
                  navigate("/userDashboard");
                }}
              >
                Update
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
