import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

function Product(){
    const { name } = useParams();
    // { name: ~~~ }
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const result = () => {
        return searchParams.get("name") != null && (<h1>실제 이름은 {searchParams.get("name")}</h1>)
    }

    // function result(){
    //     return searchParams.get("name") != null && (<h1>실제 이름은 {searchParams.get("name")}</h1>)
    // } 
    // 함수선언문

    // let sss = function (){

    // }
    // 함수표현식

    // const id2 = useParams().id; 새로운 변수에 넘어온 파라미터값을 받고싶으면 이런방법으로 사용한다.
    // navigate는 함수로서 사용할 수 있다.


    return (
        <div>
            <h1>학생의 이름은 {name} 입니다.</h1>
            {result()}
            <button onClick={()=>navigate(-1)}>이전페이지로</button>
        </div>
    )
}

export default Product;
// { searchParams.get("name") != null && (<h1>실제 이름은 {searchParams.get("name")}</h1>)}
