import React, { Component } from 'react';
import FirebaseService from '../../../services/FirebaseService';

export default class List extends Component {

  state = {
    data: []
  };

  componentDidMount() {
    FirebaseService.getDataList('processos', (dataReceived) => this.setState({data: dataReceived}))
  }
  
  look = () => {
    console.log(this.state.data);
  }

  items = (data) => {

    const items = [];

    data.map((item, index) => {
      items.push(
        <div key={index}>
          <label>{item.subject}</label>
          <p>{item.description}</p>
        </div>
      )
    })

    return items;
  }

  render() {
    return (
      <main onClick={() => this.look()}>
        {this.items(this.state.data)}
      </main>
    )
  }
}