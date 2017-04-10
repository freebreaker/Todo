import React,{Component} from 'react';

class TodoInput extends React.Component{
    render(){
        return <input type='text'  defalutValue={this.props.content}/>
    }
}

export default TodoInput
