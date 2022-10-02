import React, { Children } from "react";
import PropTypes from "prop-types";
import img from "./img/today.png";

const Test4 = ({ title, author, price, type }) => {
  return (
    <div className="main1">
      <div className="main2">
        <div className="title">이번주 베스트 셀러</div>
        <img src={img}></img>
        <div className="title1">
          {title}
          <div className="title2">
            저자 : {author}
            <br />
            판매가 : {price}
            <br />
            구분: {type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test4;
