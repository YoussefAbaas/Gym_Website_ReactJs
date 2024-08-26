import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className="stroke-text">Ready to start</span>
        <span>Your Journey</span>
        <span className="stroke-text">Now withus</span>
      </div>
      <div className="plan-cards">
        {plansData.map((p, i) => (
          <div key={i} className="plan">
            {p.icon}
            <span>{p.name}</span>
            <span>$ {p.price}</span>
            <div className="features">
              {p.features.map((f, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{f}</span>
                </div>
              ))}
            </div>
            <span>See more benefits -></span>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
