import React, { Component } from 'react';
import FirebaseService from '../../../services/FirebaseService';

import { routes } from "../../../utils/RouterUtil";
import { withRouter } from "react-router-dom";

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Add extends Component {

  state = {
    id: null,
    assunto: '',
    descricao: '',
    novoInteressado: '',
    interessados: []
  }

  componentDidMount() {

    const { id } = this.props.match.params;

    console.log('id', id);

    this.setState({ id });

    FirebaseService.getUniqueDataBy('processos', id, (data) => 

      this.setState({...data}, () => {
        console.log(this.state)
      })

    );
    
  }

  componentWillUnmount() {
    this.firebaseMount = undefined;
  }

  submit = (event) => {
    event.preventDefault();

    const { assunto } = this.state;
    const { descricao } = this.state;
    const { interessados } = this.state;

    /**
     * Editar
     */
    if (this.state.id) {

      FirebaseService.updateData(this.state.id, 'processos', {
        assunto,
        descricao,
        interessados
      })
      
    /**
     * Adicionar
     */
    } else {

      this.firebaseMount = FirebaseService.pushData('processos', {
        assunto,
        descricao,
        interessados
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
  
  interessadosList = () => {

    const interessados = this.state.interessados;

    if (interessados.length) {

      const interessadosList = [];
      
      interessados.map((item, index) => {
        return(
          interessadosList.push(
            <li key={index}>{item}</li>
          )
        )
      })
      
      return interessadosList;
    }
  }

  adicionarInteressado = () => {
    console.log('adicionarInteressado');

    console.log(this.state.novoInteressado);

    const novoInteressadoDigitado = this.state.novoInteressado;

    const { interessados } = this.state;

    interessados.push(novoInteressadoDigitado);

    this.setState(interessados);

    // Limpa Novo Interessado
    this.setState({
      novoInteressado: ''
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
                name="assunto" 
                value={this.state.assunto}
                onChange={(event) => this.handleChange(event)} 
              />
            </Form.Group>

            <label>Interessados</label>
            {this.interessadosList()}
            
            <Form.Group>
              <Form.Label>Novo Interessado</Form.Label>
              <Row>
                <Col xs={12} sm={6}>
                  <Form.Control 
                    type="text" 
                    name="novoInteressado" 
                    value={this.state.novoInteressado}
                    onChange={(event) => this.handleChange(event)} 
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <Button variant="default" onClick={() => this.adicionarInteressado()}>Adicionar</Button>
                </Col>
              </Row>
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control 
                type="text" 
                name="descricao" 
                value={this.state.descricao}
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