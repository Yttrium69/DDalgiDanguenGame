import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './App.css';
import TodaysPlan from './03/TodaysPlan';
import BooleanComponent from './03/BooleanComponent';
import StateExample from './03/StateExample';
import Counter from './counter/Counter';
// import "styles.css";

// function Header(prop){
//   return(<h1><a href="http://localhost:3000/">{prop.title}</a></h1>);
// }

// function ConsoleBar(prop){
//   let consoleArr=[];
//   for(let i=0; i<prop.fruitArr.length;i++){
//     let tempLine=prop.fruitArr[i];
//     consoleArr.push(<li key={tempLine.id}>
//       <a onClick={function(event){
//         event.preventDefault();
//         prop.onChangeMode(tempLine.name);
//       }}
//       href={"/"+tempLine.id}>{tempLine.name}</a></li>);
      
//   }

//   return(<ol>
//     {consoleArr}
//   </ol>)
// }

// function ButtonBar(prop){
//   let nameArr=[
//     {id: 1, name:"딸기"},
//     {id: 2, name:"당근"},
//     {id: 3, name:"수박"},
//     {id: 4, name:"참외"},
//     {id: 5, name:"메론"},
//   ];

//   let ButtonArr=[];


//   // for(let i=0;i<5;i++){
//   //   let tempLine=nameArr[i];
//   //   ButtonArr.push(
//   //     <input type='button'
//   //     onClick={function(){prop.onChangeMode(prop.target.name);}}
//   //     >{tempLine.name}</input>
//   //   );}


//   return(
//     <ul>
//       <li><button name="딸기"
//     onClick={
//       function(event){
//         event.preventDefault();
//         prop.onChangeMode(this.name);
//       }}
//     >딸기</button></li>
//     <li><button name="당근"
//     onClick={
//       function(event){
//         event.preventDefault();
//         prop.onChangeMode(this.name);
//       }}
//     >당근</button></li>
//     <li><button name="수박"
//     onClick={
//       function(event){
//         event.preventDefault();
//         prop.onChangeMode(this.name);
//       }}
//     >수박</button></li>
//     <li><button name="참외"
//     onClick={
//       function(event){
//         event.preventDefault();
//         prop.onChangeMode(this.name);
//       }}
//     >참외</button></li>
//     <li><button name="메론"
//     onClick={
//       function(event){
//         event.preventDefault();
//         prop.onChangeMode(this.name);
//       }}
//     >메론</button></li>
//     </ul>
      
//   )
// }


// function addFruit(prop){
//   prop.fruitArr.push(<li name={prop.name}>{prop.name}</li>);
// }

// function App() {

//   let fruitArr=[
//     // {id: 1, name:"딸기"},
//     // {id: 2, name:"당근"},
//     // {id: 3, name:"수박"},
//     // {id: 4, name:"참외"},
//     // {id: 5, name: "메론"}
//   ]
//   const[name, setName]=useState("null");
//   if(name){fruitArr.push(<li name={name}>{name}</li>);}

//   let textBoard=null;

//   const [mode, setMode]=useState("Home");
  
//   if(mode=='Home'){
//   }
//   else {
//     textBoard=<article>
//       <h1>{mode+" 냠냠"}</h1>
//       <p>아삭아삭 너무 맛있어</p>
//     </article>
//   }




//   return (
//     <div className="App">
//       <Header title="딸기당근수박참외 메론게임"></Header>
//       <ButtonBar fruitArr={fruitArr}
//       onChangeMode={function(name){
//         setName(name);
//       }}
//       ></ButtonBar>
//       <ConsoleBar fruitArr={fruitArr} onChangeMode={
//         function(name){
//             setMode(name);
//         }
//       }></ConsoleBar>
//       {textBoard}
//     </div>
//   );
// }

// export default App;


function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;
