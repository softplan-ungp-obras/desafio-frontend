import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import Interesteds from 'molecules/Interesteds';
import DrawerHeader from 'molecules/DrawerHeader';

import processService from 'services/process';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  container: {
    width: 400,
    overflowX: 'hidden',
  },
  margin: {
    marginLeft: theme.spacing(1),
  },
  addButton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  saveButton: {
    marginLeft: theme.spacing(1),
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
  },
}));

export function ProcessForm({
  handleCloseNewProcess,
  updateProcesses,
  editingProcess,
}) {
  const classes = useStyles();

  const initialProcessState = { assunto: '', descricao: '' };

  const [processObj, setProcessObj] = React.useState(
    editingProcess ? editingProcess : initialProcessState
  );
  const [interesteds, setInteresteds] = React.useState(
    editingProcess ? editingProcess.interessados : []
  );
  const [interestedName, setInterestedName] = React.useState('');

  const onClose = React.useCallback(() => {
    setProcessObj(initialProcessState);
    handleCloseNewProcess();
  }, [handleCloseNewProcess, setProcessObj, initialProcessState]);

  const handleAddInterested = React.useCallback(() => {
    if (interestedName.trim('') === '') {
      return;
    }

    const newInteresteds = [...interesteds];

    newInteresteds.push(interestedName);

    setInteresteds(newInteresteds);
    setInterestedName('');
  }, [interestedName, interesteds]);

  const handleSaveProcess = React.useCallback(async () => {
    processObj.interessados = interesteds;
    await processService.saveProcess(processObj);
    setProcessObj(initialProcessState);
    updateProcesses();
    onClose();
  }, [processObj, interesteds, onClose, updateProcesses, initialProcessState]);

  return (
    <div className={classes.container}>
      <DrawerHeader title="Novo processo" handleClose={onClose} />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            className={classes.textField}
            value={processObj.assunto}
            onChange={e =>
              setProcessObj({ ...processObj, assunto: e.target.value })
            }
            label="Assunto"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.margin}>
            Interessados
          </Typography>
          <TextField
            id="outlined-basic"
            className={classes.textField}
            value={interestedName}
            onChange={e => setInterestedName(e.target.value)}
            label="Nome do interessado"
            margin="normal"
            labelwidth={310}
            variant="outlined"
          />
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            onClick={handleAddInterested}
            className={classes.addButton}
          >
            <AddIcon />
          </Fab>
        </Grid>
        <Grid item xs={12} className={classes.margin}>
          <Interesteds interesteds={interesteds} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Descrição"
            multiline
            value={processObj.descricao}
            onChange={e =>
              setProcessObj({ ...processObj, descricao: e.target.value })
            }
            className={classes.margin}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.saveButton}
            onClick={handleSaveProcess}
          >
            Salvar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default React.memo(ProcessForm);
