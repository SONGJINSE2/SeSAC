//규리선생님 강의 (함수형 event)

function Event(){
    function clickEvent(e){
        console.log(e);
    }

    function aClick(e){
        e.preventDefault(); // 윈도우의 기본동작을 막고 내가 하고싶은 기능만 사용하는 기능
        console.log("aClick");
        console.log( e );
    }
    return (
        <div>
            <a href="#" onClick={aClick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    )
}

export default Event;