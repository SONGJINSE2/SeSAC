import React, { useState } from "react";

function UseStateMap() {
    const [names, setNames] = useState([]);
    
    const [inputUser, setInputUser] = useState('');
    const [nextId, setNextId] = useState(1);
    const [inputTitle, setInputTitle] = useState('');

    const onChange1 = (e) => setInputUser(e.target.value);
    const onChange2 = (e) => setInputTitle(e.target.value);
    
    
    const onClick = () => {
        const nextUser = names.concat({
            id: nextId,
            user: inputUser,
            title: inputTitle,
        })
        setNextId(nextId + 1);
        setNames(nextUser);
        setInputUser('');
        setInputTitle('');
    }

    const nameList1 = names.map(name1 =>
        <tr key={name1.id}>
            <td >{name1.id}</td>
            <td >{name1.user}</td>
            <td >{name1.title}</td>
        </tr>
    );

    return (

        <div>
            <div className="first_box"> 
                작성자 : <input class="input1" type="text" value={inputUser} onChange={onChange1} ></input>
                제목 : <input class="input1" type="text" value={inputTitle} onChange={onChange2}></input>
                <button onClick={onClick}>작성</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {nameList1}
                </tbody>

            </table>
        </div>

    );

}


export default UseStateMap;