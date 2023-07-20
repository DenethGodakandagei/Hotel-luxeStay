import React from "react";
import Popup from "reactjs-popup";
import logo from "../Data/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Room4 from "../Data/Rooms/Room-4.png";

export const RoomReview4 = () => {
  const notify = () => toast.success('Booked Your Room', {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  return (
    <div>
      <Popup
        trigger={
          <button className="border border-solid border-orange-400 p-1 m-1 bg-orange-400 text-white">
            VIEW DETAILS
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal overlay">
            <div className="m-[30px] sm:m-10px">
            <header>
                <div className="flex justify-between">
                  <div className="flex">
                  <img src={logo} style={{ width: "70px" }} />
                  <span className="mt-6 text-orange-400">LuxeStay</span>
                  </div>
                  <div className="flex justify-between">
                    <button
                      className="bg-red-600 hover:bg-red-500 text-white font-bold  rounded focus:outline-none focus:shadow-outline w-[18x] h-[18px] mt-5"
                      onClick={() => close()}
                    >
                      <svg
                        class="h-5 w-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <hr />
              </header>
              <div className="container mx-auto">
                <div class="popup   flex justify-center grid lg:grid-cols-2 gap-6">
                  <div className="max-w-[500px] p-1 m-2 flex justify-center">
                    <img
                      class="object-cover w-full rounded m-5  "
                      src={Room4}
                      alt="/"
                    />
                  </div>
                  <div className="p-1">
                    <h5 class=" text-2xl font-bold leading-none  justify-center my-3 ">
                      Double Room
                    </h5>
                    <span class="  leading-none  text-orange-400">
                    Our Double Rooms are perfect for guests seeking comfortable yet affordable accommodations.
                    </span>
                    <ul className="list-disc p-5 text-justify ">
                      <li className="p-1 sm:p-3">
                      Offering a cozy and inviting space, these rooms feature twin beds or a spacious double bed, guaranteeing a restful night's sleep.
                      </li >
                      <li className="p-1 sm:p-3">
                      Take advantage of the amenities available, including a TV, a work desk, and complimentary Wi-Fi. 
                      </li>
                      <li className="p-1 sm:p-3">
                      The thoughtfully designed interiors provide a tranquil ambiance, allowing guests to relax and unwind after a long day of exploring.
                      </li>
                     
                    </ul>
                    <span> Pleace Call for Reservation : 077 000 9990</span>
                    <div>
                      <h1
                        onClick={notify}
                        class="cursor-pointer text-2xl font-light text-center m-4 bg-orange-500  text-white w-35 rounded flex justify-center items-center hover:bg-orange-600 "
                      >
                        Book Now
                      </h1>
                      <ToastContainer
                       position="top-center"
                       autoClose={1500}
                       hideProgressBar={false}
                       newestOnTop={false}
                       closeOnClick
                       rtl={false}
                       pauseOnFocusLoss
                       draggable
                       pauseOnHover
                       theme="light"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};
