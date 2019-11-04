import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Process from "organisms/Process";

const useStyles = makeStyles({
  container: {
    marginLeft: 155,
    width: "80%",
    maxHeight:700,
    overflowY: 'auto'
  }
});

export function ProcessesList({ handleSelectProcess, processes }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {processes.map(processObj => (
        <Process
          key={processObj.id}
          processObj={processObj}
          handleSelectProcess={handleSelectProcess}
        />
      ))}
    </div>
  );
}

export default React.memo(ProcessesList);
