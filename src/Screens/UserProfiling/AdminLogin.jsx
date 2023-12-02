import React, { useContext, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { UserContext } from "../../contexts/UserProvider";
import { RiMotorbikeFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { setLoggedIn, setData } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  setLoggedIn(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    setData({
      name: "admin",
      email: "faiq@mail.com",
      cnic: "123123123",
      contact: "213213123",
      role: "user",
    });
    console.log("loggin in admin");
    setLoggedIn(true);
    navigate("/userdashboard");
  };

  return (
    <div className="h-screen grid grid-cols-3">
      <div className="hidden md:block col-span-2 p-7 text-4xl font-extrabold tracking-tight dark:text-white text-slate-900">
        <div className="items-center gap-3 ml-3 mt-4 flex">
          <RiMotorbikeFill className="text-5xl text-orange-600" />
          <span>BYKLEA</span>
        </div>

        <div className="flex items-end self-end space-y-7">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="flex justify-center">
              <img
                className="w-2/3 h-2/3"
                src={require("../../data/fm1.png")}
                alt="slide 1"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img
                className="w-2/3 h-2/3"
                src={require("../../data/fm2.png")}
                alt="slide 2"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img
                className="w-2/3 h-2/3"
                src={require("../../data/fm3.png")}
                alt="slide 3"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img
                className="w-2/3 h-2/3"
                src={require("../../data/fm4.png")}
                alt="slide 4"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="col-span-3 bg-slate-200 md:col-span-1 md:bg-orange-600 place-content-center flex">
        <div className="bg-white m-auto rounded-xl w-2/3 p-8">
          <h1 className="text-center text-2xl font-bold tracking-tight text-gray-900 mt-7">
            Sign In to Your Admin Account
          </h1>

          <form className="mt-2 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Admin Username
                </label>
                <input
                  id="email-address"
                  name="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <div>
              {error && <div className="p-4 font-bold">{error}</div>}
              <button
                // type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={(e) => loginHandler(e)}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                Admin Sign In
              </button>
            </div>

            <hr></hr>
            <div className="flex items-center justify-center">
              <div className="text-sm">
                <NavLink to="/login">
                  <span className="font-bold text-orange-500 hover:text-orange-400">
                    User Sign In
                  </span>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
