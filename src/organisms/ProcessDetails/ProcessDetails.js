import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import ProcessItem from 'molecules/ProcessItem';
import Interesteds from 'molecules/Interesteds';
import DrawerHeader from 'molecules/DrawerHeader';
import { processService } from 'services';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 800,
    overflowX: 'hidden'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  removeButton: {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
  },
  margin: {
    marginLeft: 10,
  },
}));

export function ProcessDetails({
  processDetails,
  updateProcesses,
  handleCloseDetails,
  handleEditProcess,
}) {
  const classes = useStyles();

  const handleDeleteProcess = React.useCallback(async () => {
    await processService.deleteProcess(processDetails.id);
    updateProcesses();
    handleCloseDetails();
  }, [updateProcesses, processDetails, handleCloseDetails]);

  return (
    <div className={classes.root}>
      <DrawerHeader
        title="Detalhes do processo"
        handleClose={handleCloseDetails}
      />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ProcessItem title="Processo" subtitle={processDetails.numero} />
        </Grid>
        <Grid item xs={6}>
          <ProcessItem title="Data" subtitle={processDetails.entrada} />
        </Grid>
        <Grid item xs={12}>
          <ProcessItem title="Assunto" subtitle={processDetails.assunto} />
        </Grid>
        <Grid item xs={12}>
          <ProcessItem
            title="Interessados"
            subtitle={<Interesteds interesteds={processDetails.interessados} />}
          />
        </Grid>
        <Grid item xs={12}>
          <ProcessItem title="Descrição" subtitle={processDetails.descricao} />
        </Grid>
        <Grid item xs={12} className={classes.removeButton}>
          <Button
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={handleEditProcess}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.margin}
            onClick={handleDeleteProcess}
          >
            Remover
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default React.memo(ProcessDetails);
