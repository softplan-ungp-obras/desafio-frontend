import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import SearchField from "atoms/SearchField";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
    height: 56,
    width: 150
  },
  container: {
    display: "flex",
    padding: 30
  },
  title: {
    width: 100,
    margin: theme.spacing(1),
  }
}));

export function Header({ handleSearch }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Busca de processos
      </Typography>
      <SearchField handleSearch={handleSearch} />
      <Button size="medium" variant="outlined" className={classes.button}>
        NOVO
      </Button>
    </div>
  );
}

export default React.memo(Header);
