import React, { Component } from 'react'

export class DynamicRendering extends Component {
    state={name:"",age:"",address:"",State:"",district:"",pincode:""}
    handleDynamicRendering = (e) => {
        this.setState({...this.state,[e.target.name]:e.target.value})
    }
  render() {
    return (
      <div>
        <center>
         <form>
            <table>
                <tr>
                    <td><h4>Name:</h4> </td>
                    <td><input onChange={this.handleDynamicRendering} type='text' name='name'></input></td>
                    <td>{this.state.name}</td>
                </tr>
                <tr>
                    <td><h4>Age: </h4></td>
                    <td><input onChange={this.handleDynamicRendering} type='number' name='age'></input></td>
                    <td>{this.state.age}</td>
                </tr>
                <tr>
                    <td><h4>Address:</h4> </td>
                    <td><input onChange={this.handleDynamicRendering} name='address'></input></td>
                    <td>{this.state.address}</td>
                </tr>
                <tr>
                    <td><h4>State:</h4> </td>
                    <td><input onChange={this.handleDynamicRendering} name='State'></input></td>
                    <td>{this.state.State}</td>
                </tr>
                <tr>
                    <td><h4>District: </h4></td>
                    <td><input onChange={this.handleDynamicRendering} name='district'></input></td>
                    <td>{this.state.district}</td>
                </tr>
                <tr>
                    <td><h4>Pincode: </h4></td>
                    <td><input onChange={this.handleDynamicRendering} name='pincode' type='number'></input></td>
                    <td>{this.state.pincode}</td>
                </tr>
            </table>
        </form>
        
        </center>
      </div>
    )
  }
}

export default DynamicRendering