import React from "react";
import logo from "../images/site-logo.png";

const LoadingScreen = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        flexDirection: "column",
      }}
    >
      <img src={logo} alt="Site Logo" />
      <div className="loading d-flex ">
        <h3>Loading...</h3>
        <div className="spinner-grow text-info mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
