import React from 'react'


class BasicInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div className="App">
            {this.props.data.map((person) => {
              return(
                <div>
                  <p>{person.name}</p>
                  <p>{person.number}</p>
                  <p>{person.dob}</p>
                </div>
              )
            })}
            </div>
        )
    }
}

export default BasicInfo