import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex"
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
}));

export function Process() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div>
            <Typography component="h5" variant="h5">
              Número
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          </div>
          <div>
            <Typography component="h5" variant="h5">
              Assunto
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          </div>
          <div>
            <Typography component="h5" variant="h5">
              Interessado
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          </div>
          <div>
            <Typography component="h5" variant="h5">
              Descrição
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default React.memo(Process);
