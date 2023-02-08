import React, { useEffect, useState } from "react";
import Slider from "infinite-react-carousel";
import { message } from "antd";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { FallingEmojis } from "falling-emojis";
import { switchAppTrigger, switchUserTrigger } from "../../reducer/AppReducer";
import { UseAppContext } from "../../context/AppContext";
import Typical from "react-typical";
import { UseAppDispatch } from "../../context/AppContext";

import "./style.css";
var demo = require("../../assets/resto-pics/1.jpg");
var dem02 = require("../../assets/resto-pics/2.png");
var dem03 = require("../../assets/resto-pics/3.jpg");
var dem04 = require("../../assets/resto-pics/4.jpg");
var dem05 = require("../../assets/resto-pics/5.jpg");

const onFinish = (values) => {
  console.log("Success:", values);
};

const Greet = ({ setCheckAppSate }) => {
  const [isSubmit, setisSubmit] = useState(false);
  const [inputValue, setInputvalue] = useState("");
  const [inputMobValue, setInputMobvalue] = useState("");
  const [trueGreet, setTrueGreet] = useState("GoodEvening🌤️");
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = UseAppDispatch();
  const appStateValue = UseAppContext();

  useEffect(() => {
    console.log(appStateValue);
  }, [appStateValue]);
  const info = () => {
    messageApi.open({
      type: "warning",
      content: "Please let us know your name...🥲",
      className: "message-greet-alert",
      style: {
        marginTop: "10vh",
      },
    });
  };
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    className: "slide_box",
    dots: true,
    virtualList: true,
    duration: 20,
    arrows: false,
  };

  useEffect(() => {
    var currentdate = new Date();
    var datetime = currentdate.getHours();
    if (datetime < 12) {
      setTrueGreet("GoodMorning 🌞");
    } else if (datetime < 16) {
      setTrueGreet("GoodAfterNoon 😎");
    }
  }, []);

  useEffect(() => {
    switchUserTrigger(dispatch, {
      userId: Date.now(),
      userName: inputValue,
      mobNumber: inputMobValue,
    });
  }, [isSubmit]);

  return (
    <div className="greet-page-container">
      <Slider {...settings}>
        <div>
          <img src={demo} alt="none" className="slider-images" />
        </div>
        <div>
          <img src={dem02} alt="none" className="slider-images" />
        </div>
        <div>
          <img src={dem03} alt="none" className="slider-images" />
        </div>
        <div>
          <img src={dem04} alt="none" className="slider-images" />
        </div>
        <div>
          <img src={dem05} alt="none" className="slider-images" />
        </div>
      </Slider>

      {contextHolder}
      <div className="greet-page-inner-container">
        {isSubmit ? (
          <div className="greet-phase1">
            {isSubmit && <FallingEmojis emoji={"🍁"} />}

            <div className="greet-msg-container">
              <Typical
                steps={[`${trueGreet}`, 2000]}
                loop={Infinity}
                wrapper="p"
              />
              <Typical
                steps={[`${inputValue} 🖤`, 2000]}
                loop={Infinity}
                wrapper="span"
              />
            </div>
            <button
              className="greet-button1"
              onClick={() => {
                setCheckAppSate(true);
                setisSubmit(!isSubmit);
                setInputvalue("");
                setInputMobvalue("");
              }}
            >
              Proceed to Dine-in Menu
            </button>
          </div>
        ) : (
          <>
            {/* <div className="welcome-greet-title">Welcome</div> */}
            <div className="user-form-pre-greet">
              <div className="input-greet-outline">
                <UserOutlined className="user-icon-greet" />
                <input
                  placeholder="Please enter your first-name"
                  className="greet-input"
                  value={inputValue}
                  onChange={(e) => {
                    setInputvalue(e.currentTarget.value);
                  }}
                />
              </div>
              <div className="input-greet-outline">
                <PhoneOutlined className="user-icon-greet" />
                <input
                  placeholder="Please enter your mobile number"
                  className="greet-input"
                  value={inputMobValue}
                  onChange={(e) => {
                    setInputMobvalue(e.currentTarget.value);
                  }}
                />
              </div>

              <button
                className="greet-button2"
                onClick={() => {
                  if (inputValue === "") {
                    info();
                  } else {
                    setisSubmit(!isSubmit);
                  }
                }}
              >
                Proceed
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Greet;
