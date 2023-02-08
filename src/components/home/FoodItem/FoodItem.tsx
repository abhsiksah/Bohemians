import { FoodProps } from "../../../models/foodItems";
import "./style.css";
const exampleImage = require("../../../assets/resto-pics/10.jpg");

type FoodItemProps = {
  singlefooditem: FoodProps;
};

const FoodItem = ({ singlefooditem }: FoodItemProps) => {
  return (
    <div className="food-item-container">
      <div className="top-food-item">
        <div className="about-fi">
          <div className="name-fi">{singlefooditem.name}</div>
          <div className="descp-fi">{singlefooditem.Desp}</div>
        </div>
        <div className="fi-image-container">
          <img src={exampleImage} alt="x" className="fi-image" />
        </div>
      </div>
      <div className="bot-food-item">
        {singlefooditem.price_Veg && (
          <div className="veg-fi">
            <span>Veg</span>
            <span>{singlefooditem.price_Veg}</span>
          </div>
        )}

        {singlefooditem.price_Chicken && (
          <div className="chicken-fi">
            <span>Chicken</span>
            <span>{singlefooditem.price_Chicken}</span>
          </div>
        )}

        {singlefooditem.price_SeaFood && (
          <div className="seafood-fi">
            <span> Seafood</span>
            <span>{singlefooditem.price_SeaFood}</span>
          </div>
        )}

        {singlefooditem.price_Lamb && (
          <div className="lamb-fi">
            <span>Lamb</span>
            <span>{singlefooditem.price_Lamb}</span>
          </div>
        )}
      </div>
      {singlefooditem.price && (
        <div className="bot-food-item">
          <div className="only-price">
            <span>Price</span>
            <span>{singlefooditem.price}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodItem;
