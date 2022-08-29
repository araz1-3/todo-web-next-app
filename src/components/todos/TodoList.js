import React from "react";
import Link from "next/link";
import Button from '@mui/material/Button';
import { CheckIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import DeleteAlert from "./DeleteAlert";

const TodoList = ({ data, onComplete , onDelete,open , setOpen, handleClickOpen}) => {

  if (!data.length) {
    return (
      <h3 className="font-bold text-gray-600">todos has NOT been added yet!</h3>
    );
  }

  return (
    <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
      {data.map((todo) => {
        return (
          <React.Fragment key={todo._id}>
          <div
            className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl"
          >
            <Link href={`todos/${todo._id}`}>
              <a>
                <span className={`${todo.isCompleted ? "line-through" : ""}`}>
                  {todo.title}
                </span>
              </a>
            </Link>
            <div className="flex gap-x-3 items-center">
            <button onClick={()=>onComplete(todo._id)}>
                    {
                      todo.isCompleted ? (
                        <CheckIcon className="w-6 h-6 stroke-green-400"/>
                      ):(
                        <span className='w-5 h-5 block border-2 border-gray-500 rounded-full'></span>
                      )}
                    
                  </button>
              <Button onClick={handleClickOpen}>
                <TrashIcon className="w-6 h-6 stroke-red-400" />
              </Button>
              <Link href={`/todos/edit/${todo._id}`}>
                <a className="block">
                  <PencilAltIcon className="w-6 h-6 stroke-blue-400" />
                </a>
              </Link>
            </div>
          </div>
            <DeleteAlert open={open} onDelete={onDelete} todoId={todo._id} setOpen={setOpen}/>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TodoList;
