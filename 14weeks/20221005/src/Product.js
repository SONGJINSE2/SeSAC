import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

function Product(){
    const { id } = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    
    // const id2 = useParams().id; 새로운 변수에 넘어온 파라미터값을 받고싶으면 이런방법으로 사용한다.
    // navigate는 함수로서 사용할 수 있다.

    return (
        <div>
            <h1>{id}번 Product</h1>
            
            <ul>
                <li>hash : {location.hash}</li>
                <li>pathname : {location.pathname}</li>
                <li>search : {location.search}</li>
                <li>state : {location.state}</li>
                <li>key : {location.key}</li>
            </ul>

            <ul>
                <li>keyWords : {searchParams} </li>
                <li>keyWord : {searchParams.get("search")}</li>   
            </ul>

            <ul>
                <li><button onClick={()=>navigate(-2)}>Go 2 pages back</button></li>
                <li><button onClick={()=>navigate(-1)}>Go back</button></li>
                <li><button onClick={()=>navigate(1)}>Go forward</button></li>
                <li><button onClick={()=>navigate(2)}>Go 2 pages forward</button></li>
                <li><button onClick={()=>navigate('/')}>Go Root</button></li>
                <li><button onClick={()=>navigate('/', {state: 'a'})}>Go Root2</button></li>
            </ul>
        </div>
    )
}

export default Product;

//searchParams