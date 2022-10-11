import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoList() {
    const [todos, setTodos]= useState([]);

    function addTodos(todo) {
        if (!todo.todoName || /^\s*$/.test(todo.todoName)) {
          return;
        }
        const newTodo = [todo, ...todos]
        setTodos(newTodo)
        // console.log(todo,...todos);
        // console.log("onSubmit");
        // element ajouté
        toast.success(todo.todoName+` a été ajouté avec success`);
    }

    function updateTodo(id, newValue){
        if (!newValue.todoName || /^\s*$/.test(newValue.todoName)) {
          return;
        }
        setTodos(prev => prev.map(item => item.id ===id ? newValue : item))
        //element update
        toast.success(newValue.todoName + " est mis à jour");
    }

    function removeTodo(id){
        const removeArray = [...todos].filter((todo) => todo.id !== id);
        setTodos(removeArray);

        //élément supprimé
        const removeArra = [...todos].filter((todo) => todo.id === id);
        toast.error(removeArra[0].todoName+" a été supprimé");
    }

    function completeTodo(id){
        let updateTodos = todos.map( todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
                if(todo.isComplete){
                    toast.success(todo.todoName+" est accomplie");
                }else{
                    toast.success(todo.todoName+" est relancée");
                }      
            }
            return todo;
        });
        setTodos(updateTodos);    
    }


  return (
    <div className="todo-form">
      <h1 className="container">Planning de travail</h1>
      {/* ajout des tâches */}
      <TodoForm onSubmit={addTodos} />


      {/* list des taches */}
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <ToastContainer />
    </div>
  );
}

export default TodoList
