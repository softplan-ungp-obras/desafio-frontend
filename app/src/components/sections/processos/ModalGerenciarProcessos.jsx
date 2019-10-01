import React, { useState } from 'react';

import FirebaseService from '../../../services/FirebaseService';

import { Container, Button, Paper, Card, CardContent, Grid, Input, TextField } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';

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

/**
 * Utils
 */
const stringToLowerCase = (string) => {
  return string.toLowerCase();
}

const replaceWhiteSpaces = (string) => {
  return string.trim().replace(/^\s+|\s+$/g, ',');
}

const breakWordsIntoArray = (string) => {
  return string.split(/[ ,]+/);
}

const arrayOfTerms = (string) => {
  let stringLowerCase = stringToLowerCase(string);
  let cleanString = replaceWhiteSpaces(stringLowerCase);
  let arrayOfTerms = breakWordsIntoArray(cleanString);
  return arrayOfTerms;
}

/**
 * Component
 */
export default function ModalGerenciarProcessos(props) {
  
  // State
  const [open, setOpen] = useState(false);
  
  const [form, setValues] = useState({
    assunto: '',
    novoInteressado: '',
    interessados: [],
    descricao: '',
    terms: []
  });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const getDataFromId = () => {

    if (props.id) {

      FirebaseService.getProcesso(props.id).then((result) => {

        let data = result.data();

        setValues({
          ...form,
          assunto: data.assunto,
          interessados: data.interessados,
          descricao: data.descricao
        });
      })
      
    }
  }

  const salvarDados = () => {

    /**
     * Array of Terms (to search)
     */
    let terms = [...new Set([
      ...arrayOfTerms(form.assunto),
      ...arrayOfTerms(form.descricao),
      ...arrayOfTerms(form.interessados.toString())
    ])];
    
    form.terms = terms;
    
    /**
     * Editar
     */
    if (props.id) {

      FirebaseService.editProcesso(props.id, form).then(() => {
        cleanForm();
        handleClose();
      })

    /**
     * Adicionar
     */
    } else {

      FirebaseService.addProcesso(form).then(() => {
        cleanForm();
        handleClose();
      })
    }
  }

  const cleanForm = () => {
    setValues({
      ...form,
      assunto: '',
      novoInteressado: '',
      interessados: [],
      descricao: ''
    });
  }

  const adicionarInteressado = () => {
    // Apaga o novo interessado do campo temporário, e o adiciona na lista de interessados
    if (form && form.novoInteressado && form.novoInteressado.length) {
      setValues({
        ...form,
        novoInteressado: '',
        interessados: [...form.interessados, form.novoInteressado]
      });
    }
  }

  const removerInteressado = (indexValue) => {
    setValues({
      ...form,
      interessados: form.interessados.filter(index => index !== form.interessados[indexValue])
    });
  }

  const InteressadosList = () => {

    if (form && form.interessados.length) {

      const interessadosList = [];

      form.interessados.map((item, index) => {
        return (
          interessadosList.push(
            <List key={index}>
              <ListItem button>
                <ListItemText primary={item} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => removerInteressado(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          )
        )
      })

      return interessadosList;
    }
  }

  /**
   * Events
   */
  const handleClickOpen = () => {
    setOpen(true);
    getDataFromId();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
        variant="contained" 
        color="default" 
        size="small"
        onClick={handleClickOpen} 
      >
        {props.id ? `Editar` : `Novo`}
      </Button>

      <Dialog maxWidth="sm" fullWidth={true} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.id ? `Editar` : `Adicionar`}
        </DialogTitle>

        <DialogContent dividers>

          <form noValidate autoComplete="off">

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Assunto"
                  name="assunto"
                  value={form.assunto}
                  onChange={updateField}
                  margin="normal"
                  fullWidth={true}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>

              {form && form.interessados.length ?
              <Grid item xs={12}>
                <Typography variant="h6">Interessados</Typography>
                <InteressadosList />
              </Grid>
              : ''}

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Novo Interessado"
                  name="novoInteressado"
                  value={form.novoInteressado}
                  onChange={updateField}
                  margin="normal"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Button 
                  color="primary" 
                  variant="contained" 
                  size="small"
                  onClick={adicionarInteressado}
                >
                  Adicionar
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Descrição"
                  name="descricao"
                  value={form.descricao}
                  onChange={updateField}
                  margin="normal"
                  fullWidth={true}
                  multiline={true}
                />
              </Grid>
            </Grid>
            
          </form>

        </DialogContent>

        <DialogActions>
          <Button 
            color="primary"
            variant="contained"
            onClick={salvarDados}
          >
            Salvar
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );

}