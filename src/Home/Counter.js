import React, { Component } from 'react'
import Home from './Home'

export class HomeClass extends Component {
    state={count:0}
    addCount = () =>{
        this.setState({count:this.state.count+1})
    }
    subCount = () =>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
    }
  render() {
    return (
      <div>
        <button onClick={this.addCount}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.subCount}>-</button>
      </div>
    )
  }
}

export default HomeClass