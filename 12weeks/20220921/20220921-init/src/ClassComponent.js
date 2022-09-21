import React from "react";
import PropTypes from "prop-types";

const ClassComponent = ({ name, children }) =>{
    
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다. <br />
            children 값은 {children}입니다.
        </div>
        );

};



ClassComponent.defaultProps = {
    name : '기본이름'
};

ClassComponent.propTypes = {
    name : PropTypes.string
};


export default ClassComponent;
