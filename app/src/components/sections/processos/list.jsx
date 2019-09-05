import React, { Component } from 'react';
import FirebaseService from '../../../services/FirebaseService';

export default class List extends Component {

  state = {
    data: []
  };

  componentDidMount() {
    FirebaseService.getDataList('processos', (dataReceived) => this.setState({data: dataReceived}))
  }

  remove = (id) => {
    FirebaseService.remove(id, 'processos');
  };
  
  look = () => {
    console.log(this.state.data);
  }

  items = (data) => {

    const items = [];

    data.map((item, index) => {
      return(
        items.push(
          <div key={index}>
            <label>{item.subject}</label>
            <p>{item.description}</p>
            <b onClick={() => this.remove(item.key)}>Remove {item.key}</b>
            <hr />
          </div>
        )
      )
    });

    return items;
  }

  render() {
    return (
      <main onClick={() => this.look()}>
        <h3>List</h3>

        {this.items(this.state.data)}
      </main>
    )
  }
}