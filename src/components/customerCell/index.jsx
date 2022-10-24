import { Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import IconButton from "../iconButton";

const CustomerCell = ({ value: initial, update, selected, withSelected }) => {
  const [value, setValue] = useState(initial);
  const [isEdit, setIsEdit] = useState(false);

  function cancel() {
    setIsEdit(false);
    setValue(initial);
  }

  function save() {
    setIsEdit(false);
    update(value);
  }

  function view() {
    selected();
  }

  return (
    <Stack spacing={1} flexDirection="row" alignItems="center">
      {(isEdit && (
        <>
          <TextField
            label="Name"
            style={{ width: "150px" }}
            id="outlined-size-small"
            size="small"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />

          <IconButton color="success" icon="save" onClick={save} />
          <IconButton color="error" icon="x" onClick={cancel} />
        </>
      )) || (
        <>
          <Typography
            variant="button"
            fontWeight="regular"
            color="text"
            sx={{
              display: "inline-block",
              width: "max-content",
            }}
          >
            {value}
          </Typography>

          <IconButton color="info" icon="edit" onClick={() => setIsEdit(true)} />
          {withSelected && <IconButton color="info" icon="eye" onClick={view} />}
        </>
      )}
    </Stack>
  );
};

export default CustomerCell;
