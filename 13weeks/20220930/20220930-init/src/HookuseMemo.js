import { useState, useMemo, useEffect, useCallback } from 'react';

function getAverage(list){
    console.log( "getAverage");
    var sum = 0;
    if ( list.length == 0) return sum;
    for ( let i = 0; i < list.length; i++ ){
        sum = sum + list[i];
    }

    return sum / list.length;
}


const Memo = () =>{
    const [ list, setList ] = useState([]);
    const [ num, setNum ] = useState(0);

    const onChange = e =>{
        console.log( "onChange");
        setNum(e.target.value);
    }

    const onInsert = e =>{
        setList([...list, parseInt(num)]);
        console.log( list );
        setNum(0);
    }
    // const avg = getAverage(list);
    // const avg = useMemo(() => getAverage(list), [list]); 
    // rendering할때 두번째[]값이 바뀔때만 실행했으면 좋겠을 때
    const [ avg, setAvg ] = useState(0);
    useEffect(() => {
        setAvg(getAverage(list));
    }, [list]); // useMemo를 useState로 바꿔서 사용 할 수 있다.

    return (
        <div>
            <input value={num} onChange={onChange} />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v,i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                <b>평균값: {avg} </b>
            </div>
        </div>
    )
}

export default Memo;

// useMemo() : 연산을 최적화 시켜주는 Hook