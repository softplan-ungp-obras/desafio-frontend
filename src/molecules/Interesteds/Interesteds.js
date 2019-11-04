import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    maxHeight: 200,
    overflowY: "auto"
  }
}));

export function Interesteds({ interesteds }) {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      {interesteds.length ? (
        interesteds.map(interested => (
          <ListItem key={interested} button>
            <ListItemText primary={interested} />
          </ListItem>
        ))
      ) : (
        <Typography variant="subtitle1" gutterBottom>
          Não há interessados
        </Typography>
      )}
    </List>
  );
}

export default React.memo(Interesteds);
