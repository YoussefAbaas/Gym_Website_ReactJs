import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wgu3ask", "template_k2j1vd6", formRef.current, {
        publicKey: "pRKhiQYAjcASIT8Ui",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span> Level Up</span>
        </div>
        <div>
          <span className="stroke-text">Your body</span>
          <span> With us</span>
        </div>
      </div>
      <div className="right-j">
        <form
          onSubmit={sendEmail}
          ref={formRef}
          action=""
          className="email-container"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
