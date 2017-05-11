import React from 'react';
import ListItem from './list_item';

export default class List extends React.Component{
  render() {

    var newItems = this.props.list.map(function(item) {
        return <ListItem key={item} text={item} />
    });

    return (
      <ul>
        {newItems}
      </ul>
    );
  }
}
