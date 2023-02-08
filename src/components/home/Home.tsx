import React, { useState } from "react";
import { UseAppContext, UseAppDispatch } from "../../context/AppContext";
import {
  FoodGenre,
  switchFGTrigger,
  switchUserTrigger,
} from "../../reducer/AppReducer";
import "./style.css";
import MenuImage from "./MenuImage";
import FoodItem from "./FoodItem/FoodItem";
import data from "../../data/MainData.json";
import { FoodProps } from "../../models/foodItems";
import Navbar from "../navbar/Navbar";
const homebg = require("../../assets/resto-pics/3.jpg");

const Home = () => {
  const appStateValue = UseAppContext();
  const dispatch = UseAppDispatch();
  const SelectMenuItem = appStateValue.foodGenre;

  const thread1Length = Math.floor(data[SelectMenuItem].length / 2);
  const thread1 = data[SelectMenuItem].slice(0, thread1Length);
  const thread2 = data[SelectMenuItem].slice(
    thread1Length,
    data[SelectMenuItem].length
  );

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${homebg})`,
      }}
    >
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="home-inner-container">
        <div className="food-list-container">
          {data[SelectMenuItem].map((singlefooditem: FoodProps) => {
            return (
              <>
                <FoodItem
                  singlefooditem={singlefooditem}
                  key={singlefooditem.id}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

//
