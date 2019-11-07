import React from "react";

import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  },
  textField: {
    width: 500
  }
}));

export function SearchField({ handleSearch }) {
  const classes = useStyles();

  const [value, setValue] = React.useState("");

  const onSearch = React.useCallback(() => handleSearch(value), [
    handleSearch,
    value
  ]);

  const onChangeValue = React.useCallback(e => setValue(e.target.value), []);

  return (
    <FormControl
      className={clsx(classes.margin, classes.textField)}
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment">
        Pesquise por uma informação do processo
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment"
        type="text"
        value={value}
        onChange={onChangeValue}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={onSearch}>
              <Search />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={310}
      />
    </FormControl>
  );
}

export default React.memo(SearchField);
