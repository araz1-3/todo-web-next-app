import dbConnect from "@/server/utils/dbconnect";
import Todo from "@/server/models/todo";
dbConnect();

export default async function handler(req, res) {
  const { method, query } = req;
  if (method === "DELETE") {
    console.log(query);
    await Todo.findByIdAndDelete(query.todoId);
    const todos = await Todo.find({});
    return res.status(200).json({ message: "todo deleted successfuly", todos });
  } else if (method === "GET") {
    const todo = await getOneTodo(query)
    return res.status(200).json({ message: "todo loaded", todo });
  } else if (method === "PUT") {
    const { body } = req;
    const todo = await Todo.findById(query.todoId);
    console.log(body);
    todo.title = body.todo.title;
    todo.description = body.todo.description;
    todo.isCompleted = body.todo.isCompleted;
    await todo.save();
    const todos = await Todo.find({});
    return res.status(200).json({ message: "todo edited", todos });
  }
}


export async function getOneTodo(query){
  const todo = await Todo.findById(query.todoId)
  return todo
}