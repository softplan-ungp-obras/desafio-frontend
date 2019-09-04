import React, { Component } from 'react';
import FirebaseService from '../../../services/FirebaseService';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default class Add extends Component {

  componentDidMount() {
  }

  submit = (event) => {
    event.preventDefault();
    
    console.log('go');
    
    console.log(this.state);

    const {subject} = this.state;
    const {description} = this.state;

    const id = FirebaseService.pushData('processos', {
      subject,
      description
    });

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
          <Form onSubmit={(e) => this.submit(e)}>
            <Form.Group>
              <Form.Label>Assunto</Form.Label>
              <Form.Control type="text" name="subject" onChange={(event) => this.handleChange(event)} />
            </Form.Group>

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

            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control type="text" name="description" onChange={(event) => this.handleChange(event)} />
            </Form.Group>

            <Button variant="primary" type="submit">Salvar</Button>
          </Form>
        </Container>

      </main>
    )
  }
}