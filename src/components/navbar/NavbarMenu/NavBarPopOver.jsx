import React, { useEffect } from "react";
import { FoodGenre, switchFGTrigger } from "../../../reducer/AppReducer";
import "./style.css";
import { UseAppContext, UseAppDispatch } from "../../../context/AppContext";
const navPopBG = require("../../../assets/resto-pics/4.jpg");

const NavBarPopOver = ({ setOpen }) => {
  const dispatch = UseAppDispatch();
  const appStateValue = UseAppContext();
  useEffect(() => {
    console.log(appStateValue, "inside navbar");
  }, [appStateValue]);

  return (
    <div
      className="nav-popover-container"
      style={{
        backgroundImage: `url(${navPopBG})`,
      }}
    >
      <div className="left-navbar-menu">
        <div className="left-navbar-menu-title">
          <div className="left-navbar-menu-title-name">
            <span>Menu</span>
          </div>
        </div>
        <div className="left-navbar-menu-content">
          <div
            className="single-meu-item"
            onClick={() => {
              switchFGTrigger(dispatch, FoodGenre.Soups);
              setOpen(false);
            }}
          >
            Soups
          </div>
          <div
            className="single-meu-item"
            onClick={() => {
              switchFGTrigger(dispatch, FoodGenre.Salads);
              setOpen(false);
            }}
          >
            Salads
          </div>
          <div
            className="single-meu-item"
            onClick={() => {
              switchFGTrigger(dispatch, FoodGenre.Small_Plates);
              setOpen(false);
            }}
          >
            Small_Plates
          </div>
          <div
            className="single-meu-item"
            onClick={() => {
              switchFGTrigger(dispatch, FoodGenre.Large_Plates);
              setOpen(false);
            }}
          >
            Large_Plates
          </div>
          <div
            className="single-meu-item"
            onClick={() => {
              switchFGTrigger(dispatch, FoodGenre.Bohemians_Greek_Flatbreads);
              setOpen(false);
            }}
          >
            Bohemians_Greek_Flatbreads
          </div>
          <div
            className="single-meu-item"
            onClick={() => {
              switchFGTrigger(dispatch, FoodGenre.Tea_Coffe);
              setOpen(false);
            }}
          >
            Tea_Coffe
          </div>
          <div
            className="single-meu-item"
            onClick={() => {
              switchFGTrigger(dispatch, FoodGenre.Beverages);
              setOpen(false);
            }}
          >
            Beverages
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarPopOver;
