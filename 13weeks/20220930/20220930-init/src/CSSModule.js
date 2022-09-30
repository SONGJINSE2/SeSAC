import style from './CSSModule.module.css';

const CSSModule = () =>{
    return (
        <div className={`${style.box1} ${style.center}`}> 
            <h2>Css module</h2>
        </div>
    )
    // 위에서 box1과 center를 동시에 불러오려면 ``백틱을 사용해서 묶어서 표현한다.
    // classnames 라이브러리를 설치해서 불러올 수도 있다.
    // npm i classnames
    // import Names from 'classnames';
    // <div className = {Names(style.box1, style.center)} /> 
}

export default CSSModule;