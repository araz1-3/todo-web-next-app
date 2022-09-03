import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const AddNewTodo = ({ onAdd }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Button
        className="w-full py-2 px-5 animate-bounce hover:bg-blue-700 text-white bg-blue-600 rounded-lg transition-all duration-300 ease-in-out"
        variant="outlined"
        onClick={handleClickOpen}
        type="submit"
      >
        Add New todo?
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <form
            className="w-full max-w-md bg-white p-2 md:p-4 rounded-xl"
            onSubmit={(e) => onAdd(e, formData, setFormData)}
          >
            <div className="mb-4">
              <label className="text-gray-600 mb-1 block" htmlFor="todo-title">
                Title
              </label>
              <TextField
                name="title"
                placeholder="todo title ..."
                id="todo-title"
                type="text"
                value={formData.title}
                onChange={changeHandler}
                fullWidth
                variant="standard"
                autoFocus
              />
            </div>

            <div className="mb-8">
              <label
                className="text-gray-600 mb-1 block"
                htmlFor="todo-description"
              >
                Description
              </label>
              <TextField
              sx={{width:"100%"}}
                name="description"
                placeholder="todo description ..."
                id="todo-description"
                value={formData.description}
                onChange={changeHandler}
                multiline
                minRows={1}
                fullWidth
                variant="standard"
              />
            </div>
            <DialogActions>
              <Button type="button" variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" type="submit">
                Add New todo
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewTodo;
