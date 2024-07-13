import React from "react";
import "./App.css";
import gsap from "gsap";

function App() {
  const handleClick = () => {
    const message = document.getElementById("message");
    gsap.to(message, {
      duration: 1,
      opacity: 1,
      rotateY: 0,
      ease: "back.out(1.7)",
    });

    const balloons = document.querySelectorAll(".balloon");
    balloons.forEach((balloon, index) => {
      gsap.to(balloon, {
        duration: 5,
        y: -window.innerHeight,
        delay: index * 0.2,
        repeat: -1,
        repeatDelay: 1,
        ease: "power1.inOut",
      });
    });

    const image = document.getElementById("image");
    gsap.to(image, {
      duration: 1,
      opacity: 1,
      scale: 1.2,
      rotation: 360,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div className="App">
      <div className="container">
        <button id="wishButton" className="button" onClick={handleClick}>
          Click Me
        </button>
        <div id="message" className="message">
          All the best for your first day at the job! Take care of yourself and
          don't worry about anything, it will be fine.
        </div>
        <div
          className="balloon"
          id="balloon1"
          style={{ left: "20%", backgroundColor: "#FF6F61" }}
        ></div>
        <div
          className="balloon"
          id="balloon2"
          style={{ left: "40%", backgroundColor: "#6B5B95" }}
        ></div>
        <div
          className="balloon"
          id="balloon3"
          style={{ left: "60%", backgroundColor: "#88B04B" }}
        ></div>
        <div
          className="balloon"
          id="balloon4"
          style={{ left: "80%", backgroundColor: "#F7CAC9" }}
        ></div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-a0bda.appspot.com/o/all%20the%20best.jpg?alt=media&token=bc14197e-fef5-4384-9f7f-68eec26142e3"
          className="image"
          id="image"
          alt="Best Wishes"
        />
      </div>
    </div>
  );
}

export default App;
