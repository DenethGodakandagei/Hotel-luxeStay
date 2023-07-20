import React from "react";
import Room1 from "../pages/Data/Rooms/Room-1.png";
import Room2 from "../pages/Data/Rooms/Room-2.png";
import Room3 from "../pages/Data/Rooms/Room-3.png";
import Room4 from "../pages/Data/Rooms/Room-4.png";
import { RoomReview } from "./RoomsReview/RoomReview";
import { RoomReview2 } from "./RoomsReview/RoomReview2";
import { RoomReview3 } from "./RoomsReview/RoomReview3";
import { RoomReview4 } from "./RoomsReview/RoomReview4";
const Rooms = () => {
  return (
    <div>
      <div class="flex  w-screen min-h-screen" id="room">
        <div class="container ml-auto mr-auto  ">
          <div class="w-full pl-5 lg:pl-2 mb-4 mt-4 flex flex-wrap   justify-center">
            <h1 class="text-3xl lg:text-4xl text-orange-400 font-extrabold text-center p-6">
              Rooms
            </h1>
          </div>
          <div className="flex flex-wrap   justify-center">
          <div class="card bg-white border border-wight-200 rounded-lg shadow bg-white rounded-lg  transform hover:translate-y-2 hover:shadow-xl transition duration-300 m-5 reveal border-gray-300">
              <img class="rounded-t-lg" src={Room1} alt="" />
            <div class="">
              <h5 class=" text-2xl font-bold leading-none">Luxury Room</h5>
              <p class="  leading-none text-gray-400 ">
                Immerse yourself in opulence with our elegantly designed and
                lavishly appointed Luxury Rooms.
              </p>
             <div class="p-2 ">
                <div class="text-lg  font-light">$109 / night</div>
              </div>
              <RoomReview />
            </div>
          </div>
          <div class="card bg-white border border-wight-200 rounded-lg shadow bg-white rounded-lg  transform hover:translate-y-2 hover:shadow-xl transition duration-300 m-5 reveal border-gray-300">
              <img class="rounded-t-lg" src={Room2} alt="" />
            <div class="p-5">
              <h5 class=" text-2xl font-bold leading-none">Family Room</h5>
              <p class=" leading-none  text-gray-400 ">
              Create lasting memories with comfortable accommodations
                    perfect for the whole family.
              </p>
             <div class="p-2">
                <div class="text-lg  font-light">$69 / night</div>
              </div>
              <RoomReview2 />
            </div>
          </div>
          <div class="card bg-white border border-wight-200 rounded-lg shadow bg-white rounded-lg  transform hover:translate-y-2 hover:shadow-xl transition duration-300 m-5 reveal border-gray-300">
              <img class="rounded-t-lg" src={Room3} alt="" />
            <div class="p-5">
              <h5 class=" text-2xl font-bold leading-none">Couple Room</h5>
              <p class="  leading-none  text-gray-400 ">
              Ignite romance in our intimate and enchanting Couple Rooms,
                    designed for the perfect romantic getaway.
              </p>
             <div class="p-2 ">
                <div class="text-lg  font-light">$89 / night</div>
              </div>
              <RoomReview3 />
            </div>
          </div>
          <div class="card bg-white border border-wight-200 rounded-lg shadow bg-white rounded-lg  transform hover:translate-y-2 hover:shadow-xl transition duration-300 m-5 reveal border-gray-300">
              <img class="rounded-t-lg" src={Room4} alt="" />
            <div class="p-5">
              <h5 class=" text-2xl font-bold leading-none">Double Room</h5>
              <p className=" text-gray-400 ">
              Enjoy affordable comfort in our cozy Double Rooms, offering
                    a tranquil ambiance for a restful stay.
              </p>
             <div class="p-2">
                <div class="text-lg  font-light">$79 / night</div>
              </div>
              <RoomReview4 />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
