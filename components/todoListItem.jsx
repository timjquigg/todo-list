import { Checkbox, Button, Stack } from "@mui/material";
// import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoListItem(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Checkbox />
      <p>{props.description}</p>

      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Stack>
  );
}
