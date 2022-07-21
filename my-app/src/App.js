


import { Component, Fragment } from 'react';
import './App.css';
import TimerInc from './Components/TimerInc';


const testUser = {
  id: 1,
  name: 'John',
  surname: 'Smith'
};
export default class App extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <>

        <TimerInc stopValue={15}/>
        
     </> 
    )
  }
}



// export default App;