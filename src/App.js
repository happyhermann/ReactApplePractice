// eslint-disable 

 import './App.css';
import React, { useReducer, useState } from 'react';

function App() {

  let post = '양주 맛집';
  // 자료 잠깐 저장할 땐 변수가 아니라 state 써도 된다.
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', 'JS독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
 
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0); 
  
  let [입력값, 입력값변경] = useState('');



  // 0이면 0번째 제목, 1이면 1번째 제목, 이름은 상관없음
// 현재 UI 상태를 state에 저장 (모달창 글 제목 뜨게 하기, 상태는 3가지)

  // state 변경용 함수, 이거써야 html 재랜더링이 제대로 일어남 
  // state 변경하는 법 : state변경함수 (새로운state)
  

  // map() 사용법 : 쉽게 반복문 갖다 쓸 수 있음
  // [1, 2, 3, 4].map(function(a) {
  //   return '7761'
    
// 1. array 자료 갯수만큼 함수안의 코드 실행해줌
// 2. 함수의 파라미터는 array안에 있던 자료임
// 3. return에 뭐 적으면 array로 담아줌
 
  
  

  // state 만드는 
  // 1. import {useState}
  // 2. useState (보관할 자료)
  // 3. let[작명, 작명]
  // a는 변수와 같음
  // b는 state 변경을 도와주는 함수

// (참고) Destructuring 문법
// let num = [1, 2];
// let a = num[0]; = 1
// let c = num[1]; = 2
//위에 것을 더 쉽게 짜는 방법
//let [a, c] = [1, 2];
// 변수를 깔맞춤 해주는 것 array 자료를 빼주는 문법

// 새로운 문법 배웠으면 언제 쓸지도 생각해봐야함
// 왜 state 써야함?
// 변수는 html에 자동으로 반영 안됨 
// state는 갑자기 변경되면 자동으로 html이 자동 재렌더링 됨
//  언제써야함?
//변경시 자동으로 Html에 반영되기 만들고 싶으면 state 쓰셈

  return (
    <div className="App">
          <div className="black-nav">
            <h4>React blog</h4>
          </div>
          {/* <div className="list">
            <h4 onClick={() => {
              if (setModal(false)) {
                setModal(true)
              }

              // 2번째 방법
              // {setModal(!modal)}
              // 느낌표 우측 자료를 반대로 바꿔줌 
              // !true 출력하면 false
              // !false 출력하면 true
            }}>{글제목[0]} <span style={{cursor : "pointer"}} onClick={ () => { 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
            {/* onClick={} 안엔 함수이름을 넣어야함*/}

            {/* state 변경하는 법 (등호로 변경 금지)
             */}
            {/* <p>2월 17일 발행</p>a
          </div>
          <div className="list">
            <h4>{글제목[1]}</h4>
            <p>2월 17일 발행</p>
          </div> <div className="list">
            <h4>{글제목[2]}</h4>
            <p>2월 17일 발행</p>
          </div> */}

 

          {
            modal == true ? <Modal title={title} 타이틀변경={setTitle} 글제목={글제목} 글제목변경={글제목변경} color="skyblue" /> : null

          }


          {/* 중괄호안에서는 for문을 쓸 수 없기에 map()으로
          같은 html , ㅠ     ㄹㅇㄴㅇㅁㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ반복 생성해야함 */}
         
         {
           글제목.map(function(a, i) {
             //map앞에는 실제 블로그 글갯수만큼 생성하기위해 스테이트를 그대로 갖다씀
              return (
                <div className="list" key={i}>
                  <h4 id="1" onClick={() => { 
                    setModal(true); setTitle(i)}}>{글제목[i]}                     
                    <span style={{marginRight:"15px"}}
                     onClick={(e) => {
                       e.stopPropagation();
                      let copy = [...따봉];
                      copy[i] = copy[i] + 1;
                      따봉변경(copy)
    
                    }}>👍  {따봉[i]}
                    </span>
                    <button onClick={(e)=> {
                      e.stopPropagation()
                      let copy = [...글제목];
                      copy.splice(i, 1);
                      글제목변경(copy)
                   
                    }}>삭제</button>
                    

                     {/* 상위html로 퍼지는 이벤트버블링을 막고싶으면 
                    e.stopPropagation() 쓰기 */}
                  </h4>
               
                  <p>2월 17일 발행</p>
                </div>
              )
           })
          //  리액트는 array안에 html 담아놔도 잘 보여줌
         }
   
 
          {/* <input>에 뭔가 입력시 코드실행하고 싶으면 
         onChange / onInput + 이벤트핸들러 매우 많음 */}
 
        {/* <input onChange={(e)=> {console.log(e.target.value)}}></input> */}

         {/* <input>에 입력한 값 가져오는 법
          e.target.value : 인풋에 입력한 값 
         */}
       
         <input placeholder="글 입력" style={{padding:"7px", marginRight:"8px"}} onChange={(e) => { 
           입력값변경(e.target.value) 
           console.log(입력값)
        }} />
          <button onClick={()=> {
            let copy = [...글제목];
            copy.unshift(입력값);
             // array나 오브젝트 수정할땐 카피부터 하는게 좋음 
            글제목변경(copy)

          }}>글발행</button>
    
         {/* <input>에 입력한 값 저장하려면 
         
        (정보) state변경함수는 늦게처리됨 
         */}





          
          {/* HTML의 특징은 더럽다, 그럴 땐 컴포넌트를 쓰는 것이 좋음
              캠포넌트 만드는 법 
              1.function 만들기 
              2.return()안에 html 담기
              3.<함수명></함수명> 쓰기
          */}

          {/* 컴포넌트 만들면 좋은 점 
          
            1. 반복되는 html 축약할 때 
            2. 큰 페이지들 
            3. 자주 변경되는 것들 

          */}

          {/* 컴포넌트의 단점 
          state 가져다쓸 때 문제생김 
          A 함수에 있던 변수는 B함수에서 맘대로 가져다 쓸 수 없음
          
          그러므로 너무 더러운 것들만 컴포넌트로 만들기 */}

          {/* 대문자로 시작하면 컴포넌트라고 생각하면 됨, App도 컴포넌트임 */}
 
{/*           
          <button onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자코트 추천"
            
            글제목변경(copy);
          }}>글제목 변경</button>
          <button onClick={() => {
            let copy = [...글제목];
            copy.sort();
            글제목변경(copy)
          }}>가나다순정렬</button>
   */}

    </div> 




          
   );
}
 
 

 
 
function Modal(props) {
  
  return (
   <>  
    <div className="modal" style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
     
    </div>
   </> 
  //  의미없는 <div> 대신 <></> 사용 가능
  )
}


// 동적인 UI 만드는 Step

// 1. html / css로 미리 디자인완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성
 
 

 


export default App;



// 꼭 외워야하는 것 4가지 

// 1. state 만드는 법
// 2. props 전송하는 법
// 3. 컴포넌트 만드는 법
// 4. UI 만드는 step




//예전 리액트 문법 

// class Profile extends React.Component {
//   constructor() {
//     super();
//     this.state = {name : 'Kim', age: 30}
//     // state는 constructor 안에 작성
//     // constructor : class 변수/초기값 저장할 때 씀
//   }

//   changeName() {
//     this.setState( {name:'Park'})
//   }

//   render() {
//     return (
//       <div>
//         <h3>프로필입니다</h3>
//         <p>저는 {this.state.name}입니다</p>
//         <button onClick={this.changeName.bind(this)}>버튼</button>
//       </div>
//     )
//   }
// }

  // class : 변수/ 함수 보관 덩어리
  //extends : 오른쪽에 있는 놈의 성질을 물려받겠습니다
