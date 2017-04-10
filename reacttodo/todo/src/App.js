import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './TodoInput.js';
import TodoItem from './TodoItem.js'

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
  constructor(props){
    super(props)
    this.state={
      newTodo:'test',
      todoList:[
        {id:1,title:'第一个待办'},
        {id:2, title:'第二个待办'}
      ]
    }
  }

  render(){
    let todos=this.state.todoList.map((item,index)=>{
      return (<li>
               <TodoItem todo={item}/>
            </li>)
    })


    return (
      <div className='App'>
        <h1>我的todo</h1>
          <div className="inputWarpper">
            <TodoInput content={this.state.newTodo}/>
          </div>

        <ol>
          {todos}
        </ol>
      </div>  
    )
  }


}

export default App;
