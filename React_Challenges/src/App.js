import React from 'react'
import './App.css';
import BasicInfo from './BasicInfo'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      person:[
          {
            name: "Marvin",
            number: 7043524579,
            dob: "01/30/2001"
          },
          {
            name: "Lucy",
            number: 7040592390,
            dob: "05/01/2001"
          },
          {
            name: "Jose",
            number: 8012394598,
            dob: "01/01/1969"
          }
      ]
    }
  }
  render(){
    let people = this.state.person;
    return(
      <BasicInfo data={people}/>
    )
  }
}

export default App;
