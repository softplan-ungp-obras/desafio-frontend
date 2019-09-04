import React, { Component } from 'react';
import FirebaseService from '../../../services/FirebaseService';

import { Container, Form, Button } from 'react-bootstrap';

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
            <Form.Group controlId="myForm.subject">
              <Form.Label>Assunto</Form.Label>
              <Form.Control type="text" name="subject" onChange={(event) => this.handleChange(event)} />
            </Form.Group>

            <Form.Group controlId="myForm.description">
              <Form.Label>Descrição</Form.Label>
              <Form.Control type="text" name="description" onChange={(event) => this.handleChange(event)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Form>
        </Container>

      </main>
    )
  }
}