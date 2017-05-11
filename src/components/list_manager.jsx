import React from 'react';
import List from './list';

export default class ListManager extends React.Component{
  constructor() {
    super();
    this.state = {value: '', items: []};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var currentList = this.state.items;
    currentList.push(this.state.value);
    this.setState({value: '', items: currentList});

  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <List list={this.state.items}/>
        <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Submit this new thing" />
        </form>
      </div>
    );
  }
}
