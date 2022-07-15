
import { Component, Fragment } from 'react';
import './App.css';
import UserCard from './Components/UserCard';
import PhoneCard from './Components/PhoneCard';
import Countar from './Components/Сounter';


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