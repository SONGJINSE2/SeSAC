import {Link, useLocation} from 'react-router-dom';
function Main(){
    const location = useLocation();
    return (
        <div>
            <Link to ="/">
                <h2>ReactRouter 실습</h2>
            </Link>
            <nav>
                <ul>
                    <li><Link to="/student/sesac">학생SeSAC</Link></li>
                    <li><Link to="/student/codingon">코딩온</Link></li>
                    <li><Link to="/student/new?name=sesac&key=id#codingon">searchParams</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Main;


// <li><Link to="/student/sesac">학생SeSAC</Link></li>
// <li><Link to="/student/codingon">코딩온</Link></li>
// <li><Link to="/student/new?name=sesac&key=id#codingon">searchParams</Link></li>

// 위의 코드에서 /student/sesac -> sesac을 :name이라는 변수 안에 집어넣어 <h1>학생의 이름은 {name} 입니다.</h1> name을 불러오는 형식이다.
// 마찬가지로 /student/codingon -> codingon을 :name이라는 변수 안에 집어넣어 <h1>학생의 이름은 {name} 입니다.</h1> name을 불러오는 형식이다.
// 그 아래의 /student/new?name=sesac&key=id#codingon"> 는 -> new가 뜨게 될 것이다.

// 아래는 Sesac.js 컴포넌트에서 가져온 즉시실행 함수다.
// { searchParams.get("name") != null && (<h1>실제 이름은 {searchParams.get("name")}</h1>)} 
// 'searchParams.get("name")이 null값이 아닐때 (<h1>실제 이름은 {searchParams.get("name")}</h1>) 를 실행하라' 는 뜻이다.
// /student/new?name=sesac&key=id#codingon">에서 searchParams.get("name"), 즉, ?(물음표)뒤에 생성된 쿼리에서 name=sesac 이라는 값이 있기 때문에
// null값이 아니게되고, null값이 아니기때문에 (<h1>실제 이름은 {searchParams.get("name")}</h1>)가 실행된다.