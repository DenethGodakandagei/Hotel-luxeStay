import React from "react";
import Popup from "reactjs-popup";
import logo from "../Data/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Room3 from "../Data/Rooms/Room-3.png";


export const RoomReview3 = () => {
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
            <div className="popupContent">
              <header>
                <div className="flex justify-end">
                  <img src={logo} style={{ width: "70px" }} />
                  <span className="mt-6 text-orange-400">LuxeStay</span>
                  <div className="flex justify-end">
                    <button
                      className="m-3 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => close()}
                    >
                      <svg
                        class="h-4 w-4  "
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
                  <div className="max-w-lg ">
                    <img
                      class="object-cover w-full rounded m-5  "
                      src={Room3}
                      alt="/"
                    />
                  </div>
                  <div className="p-3 m-3">
                    <h5 class=" text-2xl font-bold leading-none  justify-center my-3 ">
                      Cuple Room
                    </h5>
                    <span class="  leading-none  text-orange-400">
                    Ignite romance in our intimate and enchanting Couple Rooms,
                    designed for the perfect romantic getaway.
                    </span>
                    <ul className="list-disc p-5">
                      <li className="p-3">
                      For couples seeking a romantic retreat, our Couple Rooms provide the ideal setting for a memorable getaway.
                      </li >
                      <li className="p-3">
                      Designed with intimacy in mind, these cozy and intimate rooms exude a romantic atmosphere. 
                      </li>
                      <li className="p-3">
                      Unwind in a comfortable queen-sized bed, snuggled up in premium linens.
                      </li>
                      <li className="p-3">
                      Relish in the delightful amenities, including a private balcony or terrace with breathtaking views, a cozy seating area, and a romantic en-suite bathroom with a luxurious bathtub or a soothing rain shower. 
                      </li>
                      <li className="p-3">
                      Ignite the spark of romance and create cherished moments in our enchanting Couple Rooms.
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