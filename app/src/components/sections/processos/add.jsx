import React, { Component } from 'react';
import FirebaseService from '../../../services/FirebaseService';

import { routes } from "../../../utils/RouterUtil";
import { withRouter } from "react-router-dom";

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Add extends Component {

  state = {
    id: null,
    subject: '',
    description: ''
  }

  componentDidMount() {

    const { id } = this.props.match.params;

    console.log('id', id);

    this.setState({ id });

    FirebaseService.getUniqueDataBy('processos', id, (data) => 

      this.setState({...data}, () => {
        console.log(this.state)
      }
      
    )
    );
    
  }

  componentWillUnmount() {
    this.firebaseMount = undefined;
  }

  submit = (event) => {
    event.preventDefault();

    const { subject } = this.state;
    const { description } = this.state;

    /**
     * Editar
     */
    if (this.state.id) {

      FirebaseService.updateData(this.state.id, 'processos', {
        subject,
        description
      })
      
    /**
     * Adicionar
     */
    } else {

      this.firebaseMount = FirebaseService.pushData('processos', {
        subject,
        description
      });

    }

    this.props.history.push(routes.home.path);

  };

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <main>

        <Container>

          <h3>{this.state.id ? `Editar` : `Adicionar`}</h3>

          <Form onSubmit={(e) => this.submit(e)}>
            <Form.Group>
              <Form.Label>Assunto</Form.Label>
              <Form.Control 
                type="text" 
                name="subject" 
                value={this.state.subject}
                onChange={(event) => this.handleChange(event)} 
              />
            </Form.Group>

            {/*
            <Form.Group>
              <Form.Label>Interessados</Form.Label>
              <Row>
                <Col xs={12} sm={6}>
                  <Form.Control type="text" name="subject" onChange={(event) => this.handleChange(event)} />
                </Col>
                <Col xs={12} sm={6}>
                  <Button variant="default">Adicionar</Button>
                </Col>
              </Row>
            </Form.Group>
            */}

            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control 
                type="text" 
                name="description" 
                value={this.state.description}
                onChange={(event) => this.handleChange(event)} 
              />
            </Form.Group>

            <Button variant="primary" type="submit">Salvar</Button>
          </Form>
        </Container>

      </main>
    )
  }
}

export default withRouter(Add);