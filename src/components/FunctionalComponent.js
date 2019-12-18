import React from "react";

const FunctionalComponent = () => {
  console.log(this);
  const handleClickArrow = () => {
    console.log(this);
  };

  const handleClick = function() {
    console.log(this);
  };
  return (
    <div>
      <div onClick={handleClickArrow}>Arrow func</div>
      <div onClick={handleClick}>Regular func</div>
    </div>
  );
};

export default FunctionalComponent;
