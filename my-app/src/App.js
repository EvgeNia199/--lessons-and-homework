
// import logo from './logo.svg'ж
// import Hello from './Components/Hello';
// import HelloClass from './Components/HelloClass';



import { Component, Fragment } from 'react';
import './App.css';
// import Water from './Components/Water';
import UserCard from './Components/UserCard';
// import HelloClass from './Components/HelloClass'
import PhoneCard from './Components/PhoneCard';
import Countar from './Components/Сounter';


// import Greeting from './Components/Greeting';

// function App(){
//     return(
//         <Greeting userName={'Vasya'} userSurname={'Ivanov'}/>
//     );
// }

// const user = {
//     name: 'Jon',
//     surname: 'Fox',
//     age: 20
// }

// function App(){
//     return(
//         <Greeting userName={user.name} userSurname={'Ivanov'}/>
//     );
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// function App(){
//     return(
//         <p>Hello React</p>
//     );
// }

// function App(){
//     return(
//       <p>Hello React!!!</p>
//     );
//   }  
//   // тоже самое
//   // class App extends Component{
//     render(){
//       return(
//         <p>Hello React!!!</p>
//       )
//     }
//   // }

// function App(){
//   return(
//     <>
//     <Hello name={'Vasya'}/>
//     <HelloClass/>
//     <HelloClass name={"Vasya"} surname={"Ivanov"} />
//     </>
//   )
// }

//2

// const user = {
//   userName: 'Tom',
//   userSurname: 'Fox',
//   email: 'tom@gmail.com'
// };

// export default class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       userName: 'unknown',
//       userSurname: 'unknown'
//     };
//   }
//   loadUser = () => {
//     this.setState({
//       userName: user.userName,
//       userSurname: user.userSurname
//     });
//   }
//   render(){
//     const {userName, userSurname} = this.state;
//     return(
//       <>
//         <button onClick={this.loadUser}>load</button>
//         <HelloClass name={userName} surname={userSurname} />
//       </>
//     )
//   }
// }


// Классовый компонент Вода, у него состояние жидкости : (лед, пар, вода).
//  Из главного компонента App передавать температуру и от этого будет 
// менятся состоение компонента Вода

 // {/* /* ссылка на класс, обьект, отображает что в render */ */}

//  const currentUser1 = {
//   fullName: 'John Fox',
//   email: 'john@mail.com',
//   tel: '+5-123-12345-34',
//   imgSrc: 'https://img.freepik.com/premium-vector/man-developer-reports-about-new-startup-project_82574-8385.jpg?w=740'
// }
// const currentUser2 = {
//   fullName: 'Tom Tom',
//   email: 'john@mail.com',
//   tel: '+5-123-12345-34',
//   imgSrc: 'https://img.freepik.com/premium-vector/man-developer-reports-about-new-startup-project_82574-8385.jpg?w=740'
// }
// const currentUser3 = {
//   fullName: 'Ann Smith',
//   email: 'john@mail.com',
//   tel: '+5-123-12345-34',
//   imgSrc: 'https://img.freepik.com/premium-vector/man-developer-reports-about-new-startup-project_82574-8385.jpg?w=740'
// }


// export default class App extends Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <>
//         <UserCard user={currentUser1} />
//         <UserCard user={currentUser2} />
//         <UserCard user={currentUser3} />
//       </>
//     )
//   }
// }


// export default class App extends Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <>
//         <HelloClass name={"Vasya"} surname={"Ivanov"} isHelloMode={true} />
//         <HelloClass name={"Tom"} surname={"Fox"} isHelloMode={false} />
//       </>
//     )
//   }
// }

const test = {
  phoneCard: '../UserCard/lift.png',
  contantFirst: 'Create an account',
  contantSecond: 'Create/login to an existing account to get started',
  contantThird: 'An account is created with your emai and a desired password'
}


export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <>
        {/* <PhoneCard contant={test0}/> */}
        <Countar/>
       
      </>
    )
  }
}
// export default App;