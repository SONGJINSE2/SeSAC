import React, { Children } from "react";
import PropTypes from "prop-types";

const Test3 = ({ food,children }) =>{
    return (
        <div>
            음식이름 : <span>{food}</span> <br />
            설명 : {children}
        </div>
        );

};

Test3.defaultProps = {
    name : '라면'
};

Test3.propTypes = {
    name : PropTypes.string
};
export default Test3;