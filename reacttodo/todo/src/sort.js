import React from 'react';
import { sortable } from 'react-sortable';



class ListItem extends React.Component{
  render() {
    return (
      <div {...this.props} className="list-item">{this.props.children}</div>
    )
  }
}

var SortableListItem = sortable(ListItem);
class SortableList extends React.Component{

  getInitialState() {
    return {
      draggingIndex: null,
      data: this.props.data
    };
  }

  updateState(obj) {
    this.setState(obj);
  }

  render() {
    var childProps = { className: 'myClass1' };
    var listItems = this.state.items.map(function(item, i) {
      return (
        <SortableListItem
          key={i}
          updateState={this.updateState}
          draggingIndex={this.state.draggingIndex}
          sortId={i}
          outline="list"
          childProps={childProps}
          >{item}</SortableListItem>
      );
    }, this);

    return (
          <div className="list">{listItems}</div>
    )
  }
};

export default SortableList