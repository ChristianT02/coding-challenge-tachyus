import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormHelperText from "@mui/material/FormHelperText";

const InputButton = ({ source, initial, handleInput, label, nameFilter }) => {
  const [inputUser, setInputUser] = useState("");
  const [count, setCount] = useState(initial.length);

  const filterFunction = (inputUser) => {
    const dataC = source.filter((d) =>
      d[nameFilter].toLowerCase().startsWith(inputUser.toLowerCase())
    );

    setCount(dataC.length);

    if (dataC.length === 0) {
      handleInput(dataC);
    } else {
      const wellApisFromC = dataC.map((d) => d.wellAPI);
      const dataP = source.filter((d) => wellApisFromC.includes(d.wellAPI));
      handleInput(dataP);
    }
  };

  const handleClick = () => {
    filterFunction(inputUser, source);
  };

  const handleCleanFilter = () => {
    handleInput(initial);
    setInputUser("");
    setCount(initial.length);
  };

  return (
    <Box className="input-search">
      <FormControl error={count === 0}>
        <TextField
          label={label}
          style={{ width: "200px" }}
          id="outlined-size-small"
          aria-describedby="component-helper-text"
          size="small"
          value={inputUser}
          onChange={({ target }) => setInputUser(target.value)}
        />
        <FormHelperText id="component-helper-text">
          {count === 0
            ? "The wells name you entered doesn't have a successful match"
            : `Total Results ${count}`}
        </FormHelperText>
      </FormControl>

      <ButtonGroup aria-label="outlined primary button group" style={{ marginLeft: "20px" }}>
        <Button variant="contained" onClick={handleClick}>
          Click to filter
        </Button>
        <Button variant="contained" color="secondary" onClick={handleCleanFilter}>
          Clean filter
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default InputButton;
