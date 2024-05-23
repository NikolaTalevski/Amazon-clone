import React from "react";
import Header from "./Header";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="">
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/Deals/MemorialDay/LandingPage/Banner/Deals24_MemDaySale_LandingPageBanner_DT_1500x175_.png"
            alt=""
          />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Amazon Cart is empty</h2>
            </div>
          ) : (
            <div>
              <h2>Your Amazon Cart</h2>

              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
