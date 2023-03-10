import React from "react";
import "./mostOrder.scss";
import foodOne from "../../Assets/Images/Img/food-one.png";
import foodTwo from "../../Assets/Images/Img/food-two.png";
import foodthree from "../../Assets/Images/Img/food-three.png";

export const MostOrder = () => {
  let todayFoodArray = [
    {
      foodName: "Spicy seasoned seafood noodles",
      foodOrder: "200 dishes ordered",
      image: foodOne,
    },
    {
      foodName: "Salted pasta with mushroom sauce",
      foodOrder: "120 dishes ordered",
      image: foodTwo,
    },
    {
      foodName: "Beef dumpling in hot and sour soup",
      foodOrder: "80 dishes ordered",
      image: foodthree,
    },
  ];

  return (
    <>
      <div className="most-order-box">
        <div className="most-top-box">
          <div className="d-flex justify-content-between most-text-box">
            <h3 className="most-title">Most Ordered</h3>
            <select className="most-cards__select">
              <option value="dine">Today</option>
            </select>
          </div>

          {todayFoodArray.length != 0 ? (
            <ul className="d-flex flex-column gap-3 pt-3 p-0">
              {todayFoodArray.map((item) => {
                return (
                  <li className="d-flex align-items-center gap-2">
                    <img
                      src={item.image}
                      width="61"
                      height="55"
                      alt={item.foodName}
                    />
                    <div>
                      <p className="most-food-name">{item.foodName} </p>
                      <p className="most-food-order">{item.foodOrder}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <h2>Today fodd have not</h2>
          )}

          <button className="most-btn-all">View All</button>
        </div>

        <div className="most-top-box">
          <div className="d-flex justify-content-between most-text-box">
            <h3 className="most-title">Most Type of Order</h3>
            <select className="most-cards__select">
              <option value="dine">Today</option>
            </select>
          </div>

          <div className="d-flex pt-4 align-items-center gap-2">
            <svg
              width="188"
              height="188"
              viewBox="0 0 188 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle
                opacity="0.1"
                cx="94"
                cy="94"
                r="88"
                fill="#1F1D2B"
                stroke="white"
                stroke-width="11.4783"
              />
              <circle
                opacity="0.05"
                cx="94.0003"
                cy="94.0003"
                r="76.5217"
                fill="#1F1D2B"
                stroke="white"
                stroke-width="11.4783"
              />
              <circle
                opacity="0.1"
                cx="93.9995"
                cy="93.9998"
                r="65.0435"
                fill="#1F1D2B"
                stroke="white"
                stroke-width="11.4783"
              />
              <circle
                opacity="0.05"
                cx="93.9998"
                cy="94"
                r="53.5652"
                fill="#1F1D2B"
                stroke="white"
                stroke-width="11.4783"
              />
              <path
                d="M6 94C6 142.601 45.3989 182 94 182C142.601 182 182 142.601 182 94C182 45.3989 142.601 6 94 6"
                stroke="#65B0F6"
                stroke-width="11.4783"
                stroke-linecap="round"
              />
              <path
                d="M94 170.522C136.262 170.522 170.522 136.262 170.522 94.0003C170.522 51.7385 136.262 17.4785 94 17.4785"
                stroke="#FFB572"
                stroke-width="11.4783"
                stroke-linecap="round"
              />
              <path
                d="M94.439 28.4045C105.781 28.4045 116.927 31.3705 126.769 37.0082C136.611 42.6459 144.807 50.7593 150.545 60.5432C156.283 70.3271 159.363 81.4414 159.479 92.7832C159.595 104.125 156.743 115.3 151.206 125.199C145.669 135.098 137.64 143.377 127.916 149.215C118.191 155.053 107.109 158.246 95.7686 158.478C84.4286 158.71 73.2251 155.972 63.2698 150.537C53.3146 145.102 44.9538 137.157 39.017 127.493"
                stroke="#FF7CA3"
                stroke-width="11.4783"
                stroke-linecap="round"
              />
            </svg>

                <ul className="d-flex flex-column gap-2 m-0">
                    <li className="order-graph__item">
                        <p className="order-graph-title">Dine In</p>
                        <p className="order-graph-cust">200 customers</p>
                    </li>
                    <li className="order-graph__item">
                        <p className="order-graph-title">To Go</p>
                        <p className="order-graph-cust">122 customers</p>
                    </li>
                    <li className="order-graph__item">
                        <p className="order-graph-title">Delivery</p>
                        <p className="order-graph-cust">264 customers</p>
                    </li>
                </ul>
          </div>
        </div>
      </div>
    </>
  );
};
