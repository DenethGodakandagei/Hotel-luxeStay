import React from "react";
import Popup from "reactjs-popup";
import logo from "../Data/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Room2 from "../Data/Rooms/Room-2.png";


export const RoomReview2 = () => {
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
                      src={Room2}
                      alt="/"
                    />
                  </div>
                  <div className="p-3 m-3">
                    <h5 class=" text-2xl font-bold leading-none  justify-center my-3 ">
                      Family Room
                    </h5>
                    <span class="  leading-none  text-orange-400">
                    Create lasting memories with comfortable accommodations
                    perfect for the whole family.
                    </span>
                    <ul className="list-disc p-5">
                      <li className="p-3">
                      Perfect for creating lasting memories with your loved ones, our spacious Family Rooms provide ample space and comfort for the entire family.
                      </li >
                      <li className="p-3">
                      Featuring multiple beds or interconnected rooms, these accommodations offer both privacy and togetherness.
                      </li>
                      <li className="p-3">
                      Enjoy the convenience of amenities such as a TV with a variety of channels, a mini-fridge, and complimentary Wi-Fi. 
                      </li>
                      <li className="p-3">
                      The tastefully decorated rooms provide a warm and inviting ambiance, ensuring a delightful stay for families of all sizes.
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
