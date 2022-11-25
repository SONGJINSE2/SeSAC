import React from "react";

const Sample = () => {
  const fashion = ["청바지", "패딩", "반팔", "운동화"];
  const fashionList = fashion.map((fashion) => <li>{fashion}</li>);

  return <ul>{fashionList}</ul>;
};

export default Sample;
