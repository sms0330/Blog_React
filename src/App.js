/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { unstable_batchedUpdates } from 'react-dom';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '부산 돼지 국밥']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [상세내용, 상세내용변경] = useState(['남자 코트 추천 대박이다', '강남 우동 맛집 대박이다', '부산 돼지 국밥 대박이다']);
  let [누른내용, 누른내용변경] = useState(0);
  let [입력값2, 입력값2변경] = useState('');
  let [작성날짜, 작성날짜변경] = useState(['8/13/2021, 11:13:42 PM', '8/14/2021, 11:13:42 PM', '8/15/2021, 11:13:42 PM'])
  let [누른날짜, 누른날짜변경] = useState(0);
  let currentDate = new Date().toLocaleString();


  function 제목바꾸기(){
    const newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }

  function 각각따봉(e) {
    let newArray = [...따봉];
    newArray[e.currentTarget.parentNode.parentNode.getAttribute('id')]++;
    따봉변경 ( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>제목 바꾸기 버튼</button>
     
      {
        글제목.map(function(글제목, i){
          return (
            <div className="list" key={i} id={i}>
              <h3 onClick={ ()=>{ 누른제목변경(i); 누른내용변경(i); 누른날짜변경(i) }} > { 글제목 }
                <span onClick={ 각각따봉 }> 👍 </span> { 따봉[i] } 
              </h3>
                {/* <p> { 상세내용[i] } </p> */}
                <p> { 작성날짜[i] } </p>
                <hr/>
            </div>
          )
        })
      }


      <div className="publish">
        <label htmlFor="title">글제목</label><br/>
          <input className="title" onChange={ (e)=>{ 입력값변경(e.target.value) } } /><br/>
        <label htmlFor="body">상세내용</label><br/>
          <textarea className="body" onChange={ (e)=>{ 입력값2변경(e.target.value) } } />
        <button onClick={ ()=>{ 글제목변경([입력값, ...글제목]); 상세내용변경([입력값2, ...상세내용]); 작성날짜변경([currentDate,...작성날짜]); 따봉변경([0, ...따봉]) } }>저장</button>
      </div>

      <button onClick={ ()=>{ modal변경(!modal)} }>글보기</button>
      {
        modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} 상세내용={상세내용} 누른내용={누른내용} 작성날짜={작성날짜} 누른날짜={누른날짜} /> : null

      }
     
      
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
    <h2>제목 : { props.글제목[props.누른제목] }</h2> 
    <p>상세내용 : { props.상세내용[props.누른내용] }</p>
    <small>날짜 : { props.작성날짜[props.누른날짜] }</small>
  </div>
  )
}

export default App;