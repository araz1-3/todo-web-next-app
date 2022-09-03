import {useState} from "react";
import Layout from "@/containers/Layout";
import dbConnect from "@/server/utils/dbconnect";
import Todo from "@/server/models/todo";
import AddNewTodo from "@/components/todos/AddNewTodo";
import TodoList from "@/components/todos/TodoList";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession  } from "next-auth/react"


export default function Home({ todos }) {
  const [data, setData] = useState(todos);
  const [open, setOpen] = useState(false);
  const {data:session , status} = useSession()
  console.log({session , status})

  const handleClickOpen = () => {
    setOpen(true);
  };

  console.log(data)

  const addTodo =(e,formData,setFormData)=>{
    e.preventDefault();
    if(!formData.title || !formData.description){
       return toast.error('All inputs are required', {
          position: "top-right",
          theme: "colored"
          });
    }
    axios.post('/api/todos/', {formData})
    .then(({data})=>{
      console.log(data)
      setData(data.todos)
      toast.success('New Todo added', {
        position: "top-right",
        theme: "colored"
        });
      setFormData({title:'',description:''})
    })
    .catch(err => console.log(err))
  }

  const completeHandler =(id)=>{
    axios.put(`/api/todos/complete/${id}`)
    .then(({data})=>{
      console.log(data)
      setData(data.todos)
    })
    .catch(err => console.log(err))
  }
  const deleteHandler =(id)=>{
    axios.delete(`/api/todos/${id}`)
    .then(({data})=>{
      console.log(data)
      setData(data.todos)
      toast.success('todo deleted successfully', {
        position: "top-right",
        theme: "colored"
        });
      setOpen(false)
    })
    .catch(err => console.log(err))
  }

  return (
    <Layout>
      <div className="container dark:bg-slate-900 p-2 xl:max-w-screen-xl mx-auto">
        <section className="flex flex-col md:flex-row items-start gap-x-8 gap-y-8 md:justify-center">
          <AddNewTodo onAdd={addTodo}/>
          <TodoList data={data} open={open} handleClickOpen={handleClickOpen} setOpen={setOpen} onDelete={deleteHandler} onComplete={completeHandler} />
        </section>
        <ToastContainer />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context){
  dbConnect();
  const todos = await Todo.find({})

  return {
      props:{
          todos:JSON.parse(JSON.stringify(todos))
      }
  }
} 
