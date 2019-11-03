import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  container: {
    margin: 20
  }
});

export function ProcessItem({ title, subtitle }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography component="h5" variant="h5">
        {title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {subtitle}
      </Typography>
    </div>
  );
}

export default React.memo(ProcessItem);
