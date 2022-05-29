import React, { useEffect, useState } from "react";
import Resturant from "./Resturant";
import styles from "./Restaurent.module.css";
const Main = () => {
  const [gotData, setData] = useState([]);
  const [sorting, setSorting] = useState(0);
  const [type, setType] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(`http://localhost:8080/datas`);
        let data = await res.json();
        setData(data);
      } catch (er) {
        console.log(er);
      }
    };
    getData();
  }, []);
  const handleChange = (e) => {
    let sorteddata = e.target.value;
    console.log(sorteddata);
    setSorting(sorteddata);
  };
  const handleCash = (e) => {
    let resType = e.target.name;
    console.log(resType);
    setSorting(0);
    setType(resType);
  };
  const handlePrice = (e) => {
    let price = e.target.value;
    console.log(price);
    setSorting(0);
    setType("");
    setSortPrice(price);
  };
  return (
    <>
      <div className={styles.navbar}>
        <div>
          <h1>Hunger Tree</h1>
        </div>
        <div>
          <h4>Sort By Ratings:</h4>
          <select onChange={handleChange}>
            <option value="0">Filter By Ratings</option>
            <option value="1">Above 1 star</option>
            <option value="2">Above 2 star</option>
            <option value="3">Above 3 star</option>
            <option value="4">Above 4 star</option>
          </select>
        </div>

        <div>
          <h4>Restaurant Type</h4>
          <button name="cash" onClick={handleCash}>
            Cash only
          </button>
          <button name="card" onClick={handleCash}>
            Card Only
          </button>
          <button name="upi" onClick={handleCash}>
            UPI Only
          </button>
        </div>

        <div>
          <h4>Sort By</h4>
          <select onChange={handlePrice}>
            <option value="">Sort Here</option>
            <option value="h2l">High to Low</option>
            <option value="l2h">Low To High</option>
          </select>
        </div>
      </div>

      <div style={{ padding: "2%" }} className={styles.maincont}>
        {sorting
          ? gotData
              .filter((el) => el.rating > sorting)
              .sort((a, b) => a.rating - b.rating)
              .map((item) => (
                <Resturant
                  key={item.id}
                  imgurl={item.imgurl}
                  restname={item.restname}
                  desc={item.desc}
                  cost={item.cost}
                  dis={item.dis}
                  time={item.time}
                  paymnt={item.paymnt}
                  rating={item.rating}
                  vote={item.vote}
                  review={item.review}
                />
              ))
          : type
          ? gotData
              .filter((el) => el.payment_methods[type] === true)
              .map((item) => (
                <Resturant
                  key={item.id}
                  imgurl={item.imgurl}
                  restname={item.restname}
                  desc={item.desc}
                  cost={item.cost}
                  dis={item.dis}
                  time={item.time}
                  paymnt={item.paymnt}
                  rating={item.rating}
                  vote={item.vote}
                  review={item.review}
                />
              ))
          : sortPrice === "h2l"
          ? gotData
              .sort((a, b) => b.cost - a.cost)
              .map((item) => (
                <Resturant
                  key={item.id}
                  imgurl={item.imgurl}
                  restname={item.restname}
                  desc={item.desc}
                  cost={item.cost}
                  dis={item.dis}
                  time={item.time}
                  paymnt={item.paymnt}
                  rating={item.rating}
                  vote={item.vote}
                  review={item.review}
                />
              ))
          : sortPrice === "l2h"
          ? gotData
              .sort((a, b) => a.cost - b.cost)
              .map((item) => (
                <Resturant
                  key={item.id}
                  imgurl={item.imgurl}
                  restname={item.restname}
                  desc={item.desc}
                  cost={item.cost}
                  dis={item.dis}
                  time={item.time}
                  paymnt={item.paymnt}
                  rating={item.rating}
                  vote={item.vote}
                  review={item.review}
                />
              ))
          : gotData.map((item) => (
              <Resturant
                key={item.id}
                imgurl={item.imgurl}
                restname={item.restname}
                desc={item.desc}
                cost={item.cost}
                dis={item.dis}
                time={item.time}
                paymnt={item.paymnt}
                rating={item.rating}
                vote={item.vote}
                review={item.review}
              />
            ))}
      </div>
    </>
  );
};
export default Main;
