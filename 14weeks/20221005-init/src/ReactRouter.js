import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Sesac from './Sesac';


const ReactRouter = () =>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/student/:name" element={<Sesac />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;