import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import { Tooltip } from "@mui/material";

export default function NewTodo(props) {
  const [description, setDescription] = useState("");

  const validate = () => {
    if (description !== "") {
      props.addItem(description);
      setDescription("");
    }
  };

  const cancel = () => {
    setDescription("");
  };

  return (
    <Stack direction="row" spacing={2} sx={{ my: 2 }}>
      <TextField
        variant="standard"
        label="New todo"
        color="primary"
        fullWidth
        multiline
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <ButtonGroup>
        <Tooltip title="Save">
          <IconButton aria-label="save" color="primary" onClick={validate}>
            <SaveIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Cancel">
          <IconButton aria-label="cancel" color="error" onClick={cancel}>
            <CancelIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </Stack>
  );
}
