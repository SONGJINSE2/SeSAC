import React from 'react';
import ClassComponent from './ClassComponent';
import ClassComponent2 from './ClassComponent2';
import ClassComponent3 from './ClassComponent3';


const App = () =>{
  return (
    <div>
      <ClassComponent name="React" >리액트</ClassComponent>
      <ClassComponent2 />
      <ClassComponent3 />
    </div>
  )
  
};
export default App;