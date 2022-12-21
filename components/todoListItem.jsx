import Stack from "@mui/material/Stack";
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
      <ButtonGroup>
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
      </ButtonGroup>
    </Stack>
  );
}
