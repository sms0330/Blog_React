/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '부산 돼지 국밥']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [작성날짜, 작성날짜변경] = useState({ day0: "2월 17일 발행",
        day1: "2월 18일 발행",
        day2: "2월 19일 발행"
      });
  let posts = '강남 고기 맛집';
  function 제목바꾸기(){
    const newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>제목 바꾸기 버튼</button>
     
      {
        글제목.map(function(글, i){
          return (
            <div className="list">
              <h3 onClick={ ()=>{ 누른제목변경(i) }} > { 글 } <span onClick={ ()=>{ 따봉변경(따봉++)} }> 👍 </span> { 따봉 } </h3>
                <p> { 작성날짜[`day${i}`] } </p>
                <hr/>
            </div>
          )
        })
      }

      <button onClick={ ()=>{ modal변경(!modal)} }>새글</button>
      {
        modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null

      }
     
      
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
    <h2>제목 : { props.글제목[props.누른제목] }</h2> 
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;