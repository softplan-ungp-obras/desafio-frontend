import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

import ProcessItem from "molecules/ProcessItem";

const useStyles = makeStyles({
  card: {
    display: "flex",
    margin: 10
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    display: "flex"
  },
  cover: {
    width: 151
  }
});

export function Process({ processObj, handleSelectProcess }) {
  const classes = useStyles();

  const onSelectProcess = React.useCallback(() => {
    handleSelectProcess(processObj);
  }, [handleSelectProcess, processObj]);

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onSelectProcess}>
        <CardMedia
          className={classes.cover}
          image="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg"
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <ProcessItem subtitle={processObj.numero} title="Número" />
            <ProcessItem subtitle={processObj.assunto} title="Assunto" />
            <ProcessItem
              subtitle={
                processObj.interessados && processObj.interessados.length > 0
                  ? processObj.interessados[0]
                  : ""
              }
              title="Interessado"
            />
            <ProcessItem subtitle={processObj.descricao} title="Descrição" />
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default React.memo(Process);
