import React from "react";
import css from'./Menu.css'

export const Menu = () => {
  return (
    <div>
      <div className="listdata">
        <div>
          <h2>Mobile Opearting System</h2>
          <div>
            <p>Andriod </p> 
            <p>Black Berry</p>
            <p>Iphone</p>
            <p>Windows Phone</p>
          </div>
          <h2>Mobile Manufacters </h2>
          <ul >
            <li>Samsung</li>
            <li>Samsung</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li>Apple</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
