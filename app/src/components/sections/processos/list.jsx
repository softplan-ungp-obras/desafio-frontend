import React, { Component } from 'react';

import FirebaseService from '../../../services/FirebaseService';

import ModalGerenciarProcessos from './ModalGerenciarProcessos';

// UI/UX
import styled from 'styled-components';

import AppBar from '../../ui/AppBar';

import { Container, Button, Card, CardContent, CardActions, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


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

  deleteProcesso = (id) => {
    FirebaseService.deleteProcesso(id);
  };

  listProcessos = (data) => {

    const items = [];

    data.map((item, index) => {
      return (
        items.push(
          <div className="list-item" key={index}>

            <Card className="card-processo">
              <CardContent>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography component="h6">Número</Typography>
                    <Typography noWrap component="p">{item.key}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography component="label">Assunto</Typography>
                    <Typography noWrap component="p">{item.assunto}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography component="label">Interessado</Typography>
                    <Typography noWrap component="p">{item.interessados && item.interessados[0] ? item.interessados[0] : ''}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography component="label">Descrição</Typography>
                    <Typography noWrap component="p">{item.descricao}</Typography>
                  </Grid>
                </Grid>

              </CardContent>

              <CardActions disableSpacing className="card-processo-actions">
                <ModalGerenciarProcessos id={item.key} /> 
                <Button color="secondary" variant="contained" size="small" onClick={() => this.deleteProcesso(item.key)}>Remover</Button>
              </CardActions>

            </Card>
          </div>
        )
      )
    });

    return items;
  }

  /**
   * WhileTyping Component: Buscar após soltar tecla...
   */
  filterData = (name, value) => {

    console.log('filterData');

    if (value.length > 1) {
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
    } else {
      this.setState({ results: [] });
    }
  }

  render() {

    return (
      <Style>
        <main className="component-main">

          <AppBar callback={this.filterData} />

          <Container maxWidth="md" className="component-list">
            {this.state.results.length ? this.listProcessos(this.state.results) : this.listProcessos(this.state.data)}
          </Container>
        </main>
      </Style>
    )
  }
}

/**
 * Style
 */
const Style = styled.div`
  .component-main {    
    background-color: #fbfbfb;

    .component-list {
      margin-top: 80px;
    }

    .card-processo {
      margin-bottom: 20px;

      .card-processo-actions {
        button {
          margin-right: 10px;
        }
      }
    }
  }
`