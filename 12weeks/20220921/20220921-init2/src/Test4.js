import React, { Children } from "react";
import PropTypes from "prop-types";
import img from "./img/today.png";

const Test4 = ({ food,children }) =>{
    return (
        <div className="main1">
            <div className="main2">
                <div className="title">이번주 베스트 셀러</div>
                <img src={img}></img>
                <div className="title1">나의 하루는 4시 40분에 시작된다
                    <div className="title2">저자 : 김유진<br/>
                        판매가 : 13,500원<br/>
                        구분: 자기계발서
                    </div>
                </div>
                
            </div>
        </div>
        );

};


export default Test4;