import React,  { useState } from 'react';

function App(){
    const [list, setList] = useState([ 'test', 'testing', 'apple', 'sessac', 'animal']);
    
    function filterCheck(){
        let lists = [ 'test', 'testing', 'apple', 'sessac', 'animal'];
        let newLists = [ ...lists, 'dog'];

        let newList = [];
        for ( let i = 0; i < lists.length; i++ ) {
            if ( lists[i].length > 4 ) newList.push(lists[i]);
        }
        newList = lists.filter((value) => {
            return value.length > 4;
        })

    }

    function addElement(){
        console.log( [...list, 's'])
        setList([...list, 's']);
        
        let newList = [];
    for ( let i = 0; i < list.length; i++ ) {
      console.log( i );
      console.log( list[i] );
      newList.push( i + list[i] );
     }
     newList = list.map((value, i) => {
      console.log( i );
      console.log( value );
      return value + "S";
     })
     console.log( newList );
    }

    return (
        <div>
            <ul>
                {list.map((name,i)=>{
                    return <li key={name}>{name}</li>
                })}
            </ul>
            <ul>
                {list.filter((name)=>{
                    return name.includes("a");
                })}
            </ul>
            <button onClick={addElement}>추가</button>
        </div>
    );
}

export default App;