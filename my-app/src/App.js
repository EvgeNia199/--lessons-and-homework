
import { Component, Fragment } from 'react';

import ManagedContest from './Components/ManagedContest';
import RandomUser from './Components/RandomUser';
import RangeParent from './Components/sandbox/RangeParent';
import Slider from './Components/Slider';
import { images } from './Components/Slider/SliderData';


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


// const test = {
//   phoneCard: '../UserCard/lift.png',
//   contantFirst: 'Create an account',
//   contantSecond: 'Create/login to an existing account to get started',
//   contantThird: 'An account is created with your emai and a desired password'
// // }
// export default class App extends Component {
//   constructor(props) {
//     super(props);  
//     this.state = {
//        name: 'Tom',
//        surname: 'Fox',
//        age: 20,
//        isSelected: false,
//     };
//   }
//   selectHandler = () => {
//     const {isSelected} = this.state;
//     this.setState({isSelected: !isSelected});
//   }
//   render() {
//     const {name, surname, age, isSelected} 
//     = this.state;
//     return(
//       <User 
//         name={name}
//         surname={surname}
//         age={age}
//         isSelected={isSelected}
//         selectHandler = {this.selectHandler}
//       />
//     );    
// }
// }

// export default class App extends Component {
//   constructor(props) {
//     super(props);  
//     this.state = {
//        x: 0,
//     }
//     console.log('constructor' , this.state.x);
//   }
//   componentDidMount(){
//     console.log('method componentDidMount', this.state.x)
//   }
//   componentDidUpdate(prevProps, prevState){
//     console.log('method componentDidUpdate', this.state.x)
//   }
//   componentWillUnmount(){
//     console.log('method componentWillUnmount', this.state.x);
//   }
//   inc = () => {
//     this.setState({x : this.state.x + 1});
//     console.log('inc function', this.state.x)
//   }
//   render() {
//     console.log('render',this.state.x);
//     return (
//       <div>
//         <h1>State X = {this.state.x}</h1>
//         <button onClick={this.inc}>+</button>
//       </div>
//     )
//   }
// }

// export default class App extends Component {
//   constructor(props) {
//     super(props);  
//     this.state = {
//        x: 0,
//     }
//     console.group('Parent constructor');
//     console.log('state=',this.state.x);
//     console.groupEnd();
//   }
//   componentDidMount(){
//     console.group('Parent componentDidMount');
//     console.log('state=',this.state.x);
//     console.groupEnd();
//   }
//   componentDidUpdate(prevProps, prevState){
//     console.group('Parent  componentDidUpdate');
//     console.log('state=',this.state.x);
//     console.groupEnd();
//   }
//   componentWillUnmount(){
//     console.log('method componentWillUnmount', this.state.x);
//   }
//   inc = () => {
//     this.setState({x : this.state.x + 1});
//     console.group('Parent INC function');
//     console.log('state=',this.state.x);
//     console.groupEnd();
//   }
//   render() {
//     console.group('Parent  render');
//     console.log('state=',this.state.x);
//     console.groupEnd();
//     return (
//       <div>
//         <h1>State X = {this.state.x}</h1>
//         <button onClick={this.inc}>+</button>
//         <DisplayValue x={this.state.x} />
//       </div>
//     )
//   }
// }
// const testUser = {
//   id: 1,
//   name: 'John',
//   surname: 'Smith'
// };
export default class App extends Component{
  constructor(props){
    super(props);
    // this.state = {
    //   currentUser: {
    //     name: 'Tom',
    //     email: 'tom@com',
    //     imgSrc: '#'
    //   }
    // }
  }
  render(){
    return(
      <>
       {/* <HelloClass name={"Vasya"} surname={"Ivanov"} isHelloMode={true} />
         <HelloClass name={"Tom"} surname={"Fox"} isHelloMode={false} /> */}
        {/* <PhoneCard contant={test0}/>      
         {/* <CounterSecond  step={10}/>
        <CounterSecond  step={5}/>     
        {/* <Card user={this.state.currentUser}/>
        {/* <Clock step={10}/> */}
        {/* <Card user = {testUser} /> */}
        {/* <TimerInc stopValue={10}/> */}
        {/* <CounterFun step={5}/>                                                                                   */}
        {/* <UserCard user={currentUser1} />
        <UserCard user={currentUser2} />
        <UserCard user={currentUser3} /> */}     
        {/* <ManagedContest/> */}   
        {/* <Slider/> */}
        <RandomUser/>

       
         {/* <RangeParent/> */}

     </> 
    )
  }
}



// export default App;