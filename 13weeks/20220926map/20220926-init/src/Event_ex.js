// 컴포넌트 응용 실습 1,2

import React , { useState } from 'react';

    const Sample = () => {
        const[names, setNames] = useState([
            { id: '1', text: '코디', email: 'codi@gamil.com'},
            { id: '2', text: '윤소희', email: 'yoonsohee@gmail.com'},
        ]);

        const [inputText, setInputText] = useState( '' );
        const [nextId, setNextId] = useState(5);
        const [inputEmail, setEmail] = useState( '' );

        const onChange1 = (e) => setInputText(e.target.value);
        const onChange2 = (e) => setEmail(e.target.value);
        const onClick = () => {
            const nextNames = names.concat({
                id: nextId,
                text: inputText,
                email: inputEmail,
            });
            setNextId(nextId + 1);
            setNames(nextNames);
            setInputText( '' );
            setEmail( '' ); 
        }

        const eventKeyPress = (e) =>{
            if( e.key === "Enter"){
                onClick();
            }
        }

        const namesList = names.map(name => <h3 key={name.id}>{name.text}:{name.email}</h3>);

    return(
        <div>
            <input type="text" value={inputText} onChange={onChange1} placeholder="이름"></input>
            <input type="text" value={inputEmail} onChange={onChange2} onKeyPress={eventKeyPress} placeholder="이메일"></input>
            <button onClick={onClick}>등록</button>
        
            <ul>
                {namesList}
            </ul>
        </div>
        );
    }

export default Sample;