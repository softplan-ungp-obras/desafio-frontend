import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  title: {
    padding: theme.spacing(2)
  },
  drawerHeader: {
    display: "flex"
  },
  closeButton: {
    position: "absolute",
    right: "1rem",
    top: ".2rem"
  }
}));

export function DrawerHeader({ title, handleClose }) {
  const classes = useStyles();
  return (
    <div className={classes.drawerHeader}>
      <Typography variant="h5" gutterBottom className={classes.title}>
        {title}
      </Typography>
      <IconButton
        onClick={handleClose}
        aria-label="delete"
        className={classes.closeButton}
      >
        <Close fontSize="large" />
      </IconButton>
    </div>
  );
}

export default React.memo(DrawerHeader);
