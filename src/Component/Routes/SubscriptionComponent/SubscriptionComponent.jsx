import React, { Component } from 'react'

export class SubscriptionComponent extends Component {
    constructor(){
        super()

        this.state={
            myGreetings:'Welcome to this page'
            ,buttonName:'Subscribe'
        }

        
    }
    classClickHandler=()=>{
        this.setState({
            myGreetings:'Thanks for Subscribe this Channel'
            ,buttonName:'Unsubscribe'
        })
        
    }
  render() {
    return (
        <React.Fragment>
        <h1>{this.state.myGreetings}</h1>
      <button onClick={this.classClickHandler}>{this.state.buttonName}</button>
      </React.Fragment>
    )
  }
}

export default SubscriptionComponent