import React from "react";
import { UseAppContext } from "../../context/AppContext";
import { FoodGenre } from "../../reducer/AppReducer";

var bevimg = require("../../assets/bevrages.jpg");
var cofimg = require("../../assets/coffe.jpg");
var flatbreadimg = require("../../assets/flatbreads.jpg");
var largePlateimg = require("../../assets/large plates.jpg");
var saladimg = require("../../assets/salads.jpg");
var smallplateimg = require("../../assets/small-plates.jpg");
var soupimg = require("../../assets/soups.jpg");

const MenuImage = () => {
  const appStateValue = UseAppContext();

  const imgToRender = () => {
    switch (appStateValue.foodGenre) {
      case FoodGenre.Beverages: {
        return bevimg;
      }
      case FoodGenre.Tea_Coffe: {
        return cofimg;
      }
      case FoodGenre.Bohemians_Greek_Flatbreads: {
        return flatbreadimg;
      }
      case FoodGenre.Large_Plates: {
        return largePlateimg;
      }
      case FoodGenre.Salads: {
        return saladimg;
      }
      case FoodGenre.Small_Plates: {
        return smallplateimg;
      }
      case FoodGenre.Soups: {
        return soupimg;
      }

      default:
        return FoodGenre.Soups;
    }
  };

  return (
    <div>
      <img
        style={{
          height: "300px",
          width: "300px",
          borderRadius: "50%",
          boxShadow: "2px 2px 20px 2px white",
          border: "2px solid black",
        }}
        src={imgToRender()}
        alt="none"
      ></img>
    </div>
  );
};

export default MenuImage;
