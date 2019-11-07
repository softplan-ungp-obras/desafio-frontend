import React from "react";
import { navigate } from "@reach/router";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import SearchField from "atoms/SearchField";
import Title from "atoms/Title";

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    marginTop: "20rem"
  },
  subtitle: {
    marginTop: "3rem"
  }
});

export function Home() {
  const classes = useStyles();

  const handleSearch = React.useCallback(value => {
    navigate(`/processes/${value}`);
  }, []);

  return (
    <div>
      <Container maxWidth="sm" className={classes.container}>
        <Title text="Busca de processos" />
        <SearchField handleSearch={handleSearch} />
        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.subtitle}
        >
          Você pode criar um novo processo <Link href="/processes/new">clicando aqui</Link>
        </Typography>
      </Container>
    </div>
  );
}

export default React.memo(Home);
