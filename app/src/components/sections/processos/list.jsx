import React, { Component } from 'react';
import FirebaseService from '../../../services/FirebaseService';

import {Link} from "react-router-dom";
import {routes} from "../../../utils/RouterUtil";

import { Container, Row, Col, Button } from 'react-bootstrap';

export default class List extends Component {

  state = {
    data: []
  };

  componentDidMount() {
    FirebaseService.getDataList('processos', (dataReceived) => this.setState({data: dataReceived}))
  }

  componentWillUnmount() {
    FirebaseService.disconnect('processos');
  }

  remove = (id) => {
    FirebaseService.remove(id, 'processos');
  };

  edit = (id) => {
    console.log(id);

    this.props.history.push(`${routes.edit.path}+7`); // routes.edit.path
  }

  items = (data) => {

    const items = [];

    data.map((item, index) => {
      return(
        items.push(
          <Row key={index}>
            <Col xs={12} sm={6}>
              <label>{item.assunto}</label>
              <p>{item.descricao}</p>
              <Button variant="danger" onClick={() => this.remove(item.key)}>Remove</Button>
              
              <Link to={routes.edit.pathWithouParam + item.key}>
                <Button variant="primary">Editar</Button>
              </Link>

            </Col>
          </Row>
        )
      )
    });

    return items;
  }

  render() {
    return (
      <main>
        <Container>
          <Link to={routes.add.path}>{routes.add.name}</Link>
          <hr />
          <h3>List</h3>
          {this.items(this.state.data)}
        </Container>
      </main>
    )
  }
}