import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    color: "#005b95",
  }
});

export function Title({ text }) {
  const classes = useStyles();

  return (
    <Typography variant="h5" gutterBottom className={classes.title}>
      {text}
    </Typography>
  );
}

export default React.memo(Title);
