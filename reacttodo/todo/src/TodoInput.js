import React,{Component} from 'react';

class TodoInput extends React.Component{
    render(){
        return <input type='text'  defalutValue={this.props.content} onKeyPress={this.submit.bind(this)}/>
}

    submit(e){
      if (e.key === 'Enter') {
        this.props.onSubmit.call()
      }
    }
}
export default TodoInput
