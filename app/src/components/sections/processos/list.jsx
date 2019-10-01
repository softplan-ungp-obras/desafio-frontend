import React, { Component } from 'react';

import FirebaseService from '../../../services/FirebaseService';

import { Link } from "react-router-dom";
import { routes } from "../../../utils/RouterUtil";

// UI/UX
import WhileTyping from '../../ux/WhileTyping';
import InputSearch from '../../ui/InputSearch';

import { Container, Button, Paper, Card, CardContent, Grid, Input } from '@material-ui/core';
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

  remove = (id) => {
    FirebaseService.deleteProcesso(id);
  };

  items = (data) => {

    const items = [];

    data.map((item, index) => {
      return (
        items.push(
          <div className="list-item" key={index}>

            <Card raised={true}>
              <CardContent>

                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Typography component="label">Número</Typography>
                    <Typography component="p">{item.key}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography component="label">Assunto</Typography>
                    <Typography component="p">{item.assunto}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography component="label">Interessado</Typography>
                    <Typography component="p">{item.interessados && item.interessados[0] ? item.interessados[0] : ''}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography component="label">Descrição</Typography>
                    <Typography component="p">{item.descricao}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="contained" color="primary" onClick={() => this.remove(item.key)}>Remover</Button>

                    <Link to={routes.edit.pathWithouParam + item.key}>
                      <Button color="primary">Editar</Button>
                    </Link>
                  </Grid>
                </Grid>

              </CardContent>
            </Card>

            {/*
            <div className="">
              <label>{item.assunto}</label>
              <p>{item.descricao}</p>

              <Button variant="contained" color="primary" onClick={() => this.remove(item.key)}>Remove</Button>
              
              <Link to={routes.edit.pathWithouParam + item.key}>
                <Button variant="primary">Editar</Button>
              </Link>

            </div>
            */}

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
        <Container maxWidth="md">


          <Grid container spacing={3}>
            <Grid item xs={3}>
              Busca de Processos
            </Grid>

            <Grid item xs={3}>
              <WhileTyping formControl={whileTyping.motivo} callback={this.filterData} />
            </Grid>
            
            <Grid item xs={3}>

              {/*<CustomizedDialogs />*/}

              <Link to={routes.add.path}><Button variant="contained" color="primary">Novo</Button></Link>

            </Grid>
          </Grid>

          {this.state.results.length ? this.items(this.state.results) : this.items(this.state.data)}
        </Container>
        
        
      </main>
    )
  }
}

/**
 * Modal
 */

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const CustomizedDialogs = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Novo
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}