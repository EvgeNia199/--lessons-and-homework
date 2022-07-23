


import { Component, Fragment } from 'react';
import './App.css';

import TimerInc from './Components/TimerInc';



export default class App extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <>

        <TimerInc stopValue={10}/>
        
     </> 
    )
  }
}



// export default App;