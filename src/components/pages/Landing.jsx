import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  //******states & variables
  const navigate = useNavigate();

  //******functions
  const handleButton = () => {
    navigate("/home");
  };

  return (
    <div>
      <button onClick={handleButton}>lets see vendors</button>
    </div>
  );
};

export default Landing;
