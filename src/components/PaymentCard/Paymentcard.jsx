import React from "react";
import "./Paymentcard.css";

export const Paymentcard = (props) => {
  //   let bcolor = props.backgroundcolor;
  // console.log(props.Payments.date)
  // console.log(props.payments[0].date)

  return (
    <>
      {props.payments.map((e) =>   (
         
        <div className="box" style={{ background: e.backgroundcolor }}>
          <div className="date">
            <h3>{e.date}</h3>

            <img src={e.logo} alt="" />
          </div>

          <div className="but">
            <button>Case Study</button>
          </div>

          <div id="name">
            <h1>{e.heading}</h1>
          </div>

          <div className="ls">
            <h3>
              {e.subheading}-{e.devices}
            </h3>

            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      ))}
    </>
  );
};
