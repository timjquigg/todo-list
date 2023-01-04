import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import InputAdornment from "@mui/material/InputAdornment";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { Tooltip } from "@mui/material";

export default function TodoListItem(props) {
  // console.log(props, "TodoListItem");

  const [description, setDescription] = useState(props.description);
  const [isSelected, setIsSelected] = useState(false);

  const handleChange = (value) => {
    setDescription(value);
  };

  const validate = (e) => {
    setIsSelected(false);
    if (description !== "") {
      props.saveItem(props.id, description);
      return;
    }
    setDescription(props.description);
  };

  const cancel = (e) => {
    const currentTarget = e.currentTarget;
    const nextElementSibling =
      currentTarget.nextElementSibling.nextElementSibling;
    requestAnimationFrame(() => {
      // Check if the new focused element is a child of the original container
      if (!nextElementSibling2.contains(document.activeElement)) {
        // Do blur logic here!
        console.log("hello");
        setDescription(props.description);
        setIsSelected(false);
      }
    });
  };

  const iconAdornment = isSelected
    ? {
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip title="Save">
              <IconButton
                aria-label="save"
                color="primary"
                onClick={(e) => validate(e)}
              >
                <SaveIcon />
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }
    : {};

  return (
    <Stack direction="row" spacing={2} sx={{ my: 2 }}>
      <TextField
        variant="standard"
        label="todo"
        color="primary"
        fullWidth
        multiline
        value={description}
        onChange={(e) => handleChange(e.target.value)}
        InputProps={iconAdornment}
        onFocus={() => setIsSelected(true)}
        onBlur={(e) => cancel(e)}
      />
      <ButtonGroup>
        <Tooltip title={props.completed ? "Un-complete" : "Complete"}>
          <IconButton
            value={props.id}
            onClick={(e) => {
              props.toggleComplete(e.currentTarget.value);
            }}
          >
            {props.completed ? (
              <RemoveDoneIcon value={props.id} color="primary" />
            ) : (
              <TaskAltIcon value={props.id} color="primary" />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            aria-label="delete"
            color="error"
            value={props.id}
            onClick={(e) => {
              props.deleteItem(e.currentTarget.value);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </Stack>
  );
}
