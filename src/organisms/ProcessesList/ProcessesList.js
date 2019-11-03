import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Process from "molecules/Process";

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: 160,
    width:'70%'
  }
}));

export function ProcessesList() {
  const classes = useStyles();

  const [processes, setProcesses] = React.useState([]);

  React.useEffect(() => {
    setProcesses([
      { id: 1, number: 3, subject: "teste", description: "rodiuhfds" }
    ]);
  }, []);

  return (
    <div className={classes.container}>
      {processes.map(processIt => (
        <Process process={processIt} />
      ))}
    </div>
  );
}

export default React.memo(ProcessesList);
