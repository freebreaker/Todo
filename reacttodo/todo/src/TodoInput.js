import React,{Component} from 'react';

class TodoInput extends React.Component{
    render(){
        return <input type='text'  defalutValue={this.props.content} onKeyPress={this.submit}/>
}

    submit(e){
      if (e.key === 'Enter') {
        console.log('用户按回车了');
      }
    }
}
export default TodoInput
