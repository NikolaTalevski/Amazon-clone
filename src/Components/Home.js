import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="main">
      <Header />
      <div className="home">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - for PC, Mac, PS4, PS5, Switch - 3.5mm Audio Jack - White"
          price={39.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71MGiPTwXAL._AC_UY218_.jpg"
        />
        <Product
          id="12321341"
          title="Stone by Mercer Project HEKONDA Modern Stoneware 16-Piece Dinnerware Set, Plate and Bowl Set, Dish Set for 4, Black"
          price={119.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61bgLbH4gwL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="CyberPowerPC Gamer Xtreme VR Gaming PC, Intel Core i9-13900KF 3.0GHz, GeForce RTX 4070 12GB, 16GB DDR5, 1TB NVMe SSD, Wi-Fi Ready & Windows 11 Home (GXiVR8080A36)"
          price={1899.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71K4CkU04bL._AC_UY218_.jpg"
        />
        <Product
          id="12321341"
          title='SAMSUNG 14" Galaxy Book3 Pro Business Laptop Computer/Windows 11 PRO / 16GB / 1TB, 13th Gen Intel® Core™ i7 processor, Intel® Evo™ platform, Lightweight, 2023 Model, NP944XFG-KC1US, Graphite'
          price={1040.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61NJFoSS0rL._AC_UY218_.jpg"
        />
        <Product
          id="12321341"
          title="Polo Ralph Lauren mens Masters Crt"
          price={138.52}
          rating={3}
          image="https://m.media-amazon.com/images/I/61BkXjJzNuL._AC_SX575_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="Nike Club Fleece Men's 1/4-Zip Top Shirt"
          price={59.35}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ok16l7cQL._AC_SX569_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="SAMSUNG Galaxy Tab A9+ Tablet 11” 128GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset, Multi Window Display, Slim, Light, Durable Design, US Version, 2024, Graphite"
          price={219.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61d46oYQgdL._AC_SX466_.jpg"
        />
        <Product
          id="12321341"
          title='Cevaton Portable Monitor, 14” FHD 1080P IPS Laptop Screen Extender Fit for 13-17" Laptop, Build-in Stand, Plug and Play Laptop Monitor Extender Compatible with Mac, Wins, Dex, Chrome'
          price={299.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71Z0zR4k0QL._AC_SX679_.jpg"
        />
        <Product
          id="12321341"
          title="Britax One4Life Convertible Car Seat, 10 Years of Use from 5 to 120 Pounds, Converts from Rear-Facing Infant Car Seat to Forward-Facing Booster Seat, Machine-Washable Fabric, Eclipse Black"
          price={279.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/71hdQIl3iDL._SX466_.jpg"
        />
        <Product
          id="12321341"
          title="SAMSUNG Galaxy Z Fold5 AI Phone, 512GB Unlocked Android Smartphone, Big 7.6” Screen for Streaming, Gaming, Dual App View, One-Hand Control, Hands-Free Use, US Version, 2023, Icy Blue"
          price={1919.99}
          rating={2}
          image="https://m.media-amazon.com/images/I/61LyIe34PVL._AC_SX679_.jpg"
        />
        <Product
          id="12321341"
          title="Eureka WhirlWind Bagless Canister 2.5L Vacuum Cleaner, Lightweight Vac for Carpets and Hard Floors, NEN110A, Blue"
          price={69.43}
          rating={5}
          image="https://m.media-amazon.com/images/I/715ADKhy8+L._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="Etekcity Smart Scale for Body Weight FSA HSA Store Eligible, Bathroom Digital Weighing Scale with BMI, Body Fat, Muscle Mass, Accurate Bluetooth Home User Health Equipment Sync Apps"
          price={19.99}
          rating={1}
          image="https://m.media-amazon.com/images/I/91w5FDNyXNL._AC_SX679_.jpg"
        />
        <Product
          id="12321341"
          title="TAGRY Bluetooth Headphones True Wireless Earbuds 60H Playback LED Power Display Earphones with Wireless Charging Case IPX5 Waterproof in-Ear Earbuds with Mic for TV Smart Phone Laptop Computer Sports"
          price={49.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SX466_.jpg"
        />
        <Product
          id="12321341"
          title="Shark AI Ultra Voice Control Robot Vacuum with Matrix Clean Navigation, Home Mapping, 60-Day Capacity, Self-Empty Base for Homes with Pets, Carpet & Hard Floors (Silver/Black)"
          price={599.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/61yQ2hur-PL._AC_SX679_.jpg"
        />
        <Product
          id="12321341"
          title="Garmin epix Pro (Gen 2) Sapphire Edition, 51mm, High Performance Smartwatch, Advanced Training Technology, Built-in Flashlight, Black"
          price={899.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71RRI0WgfKL._AC_SX466_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
