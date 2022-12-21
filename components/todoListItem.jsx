import { Checkbox, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";

export default function TodoListItem(props) {
  // console.log(props.id, "TodoListItem");
  return (
    <Stack direction="row" spacing={2} sx={{ my: 2 }}>
      <TextField
        variant="standard"
        label="todo"
        color="primary"
        fullWidth
        value={props.description}
        onChange={props.handleChange}
      />
      <TextField value={props.completed} />
      <TextField value={props.id} />
      <ButtonGroup>
        <IconButton
          value={props.id}
          onClick={(e) => {
            console.log(e.currentTarget);
            props.toggleComplete(e.currentTarget.value);
          }}
        >
          {props.completed ? (
            <RemoveDoneIcon value={props.id} color="primary" />
          ) : (
            <TaskAltIcon value={props.id} color="primary" />
          )}
        </IconButton>
        <IconButton aria-label="delete" color="error">
          <DeleteIcon />
        </IconButton>
      </ButtonGroup>
    </Stack>
  );
}
