import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Process from "molecules/Process";
import processService from "services/process";

const useStyles = makeStyles({
  container: {
    marginLeft: 155,
    width: "80%"
  }
});

export function ProcessesList() {
  const classes = useStyles();

  const [processes, setProcesses] = React.useState([]);

  const getProcesses = React.useCallback(async () => {
    const response = await processService.getProcesses();
    setProcesses(response.data);
  }, []);

  React.useEffect(() => {
    getProcesses();
  }, [getProcesses]);

  return (
    <div className={classes.container}>
      {processes.map(processObj => (
        <Process key={processObj.id} processObj={processObj} />
      ))}
    </div>
  );
}

export default React.memo(ProcessesList);
