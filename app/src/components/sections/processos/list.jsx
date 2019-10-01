import React, { Component } from 'react';

import FirebaseService from '../../../services/FirebaseService';

import { Link } from "react-router-dom";
import { routes } from "../../../utils/RouterUtil";

import WhileTyping from '../../ux/WhileTyping';

import { Container, Row, Col, Button } from 'react-bootstrap';

export default class List extends Component {

  state = {
    data: [],
    results: []
  };

  componentDidMount() {
    this.getProcessos();
  }

  componentWillUnmount() {
    this.getProcessosListen();
  }

  getProcessos = () => {
    this.getProcessosListen = FirebaseService.getProcessos().onSnapshot((result) => {

      let data = [];
      let item;
      
      result.forEach(function (doc) {

        item = doc.data();
        item.key = doc.id;
        delete item.terms;
        data.push(item);

      });

      this.setState({ data: data });

    });
  }

  remove = (id) => {
    FirebaseService.deleteProcesso(id);
  };

  items = (data) => {

    const items = [];

    data.map((item, index) => {
      return (
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

  /**
   * WhileTyping Component: Buscar após soltar tecla...
   */
  filterData = (name, value) => {

    FirebaseService.searchProcessos(value).then((result) => {
      
      let data = [];
      let item;
      
      result.forEach(function (doc) {

        item = doc.data();
        item.key = doc.id;
        delete item.terms;
        data.push(item);

      });

      this.setState({ results: data });
      
    });
  }

  render() {

    const whileTyping = {
      motivo: {
        name: 'motivo',
        className: 'form-control input-sm',
        type: 'text',
        autoComplete: 'off',
        maxLength: 50,
        placeholder: 'Pesquise por uma informação do processo'
      }
    }

    return (
      <main>
        <Container>
          <Link to={routes.add.path}>{routes.add.name}</Link>
          <hr />

          <WhileTyping formControl={whileTyping.motivo} callback={this.filterData} />

          <hr />

          <h3>List</h3>

          {this.state.results.length ? this.items(this.state.results) : this.items(this.state.data)}
        </Container>
      </main>
    )
  }
}