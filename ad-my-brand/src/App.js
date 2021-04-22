import React, { Component } from 'react'
import './App.css'
class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        items: ['Milk','Coffee','Oranges','Bread'],
        items1:['Chocolatecake','juice','popcorn','chips','Cold Coffee','Nachos','Coke','Nuggets',],
        itemscopy:['Milk','Coffee','Oranges','Bread']
    }
  }
  
  additem = () =>{
    var num = Math.floor(Math.random() * (4-0) +0);
    var value = this.state.items1[num];
    this.setState({items:this.state.items.concat(value)});
    this.setState({itemscopy:this.state.items})
  };

  search = (event) =>{
    var value = event.target.value.toLowerCase();
    if(value==''){
    
    this.setState({items:this.state.itemscopy})
    }
    else{
      this.setState({items:this.state.items.filter(thing => thing.toLowerCase().includes(value))})
    }
  };

  render() {
    return (
    <div className="App">
      <span className="header">ItemList</span><br/><br/>
      <div className="itemslist">
        <div className="divbox">
          <input type="text" placeholder="Enter the item to be searched" onChange={e => {this.search(e)}} className="inputfield"/>
          <span onClick={this.additem} title="click to add item" className="plus">&#43;</span><br/><br/><br/>
        </div>
        {
          this.state.items.map(item =>( 
          <div className="list">
          <h3>{item}</h3><hr/>
          </div>
          ))
        }
      </div>
    </div>
    )
  }
}

export default App
