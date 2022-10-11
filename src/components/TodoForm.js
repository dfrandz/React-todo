import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {

    //les states
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect( () =>{
        inputRef.current.focus();
    })

    function handleChange(event){
        setInput(event.target.value);
    }

    //les fonctions
    function handleSubmit(e){
        e.preventDefault();
        // console.log('handleSubmit');
        props.onSubmit({
          id: Math.floor(Math.random() * 1000),
          todoName: input,
        });
    }

    //retour principal
  return (
    <form className="todo-form container" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update une tâche"
            value={input}
            name="todoName"
            className="todo-input"
            onChange={(event) => handleChange(event)}
            ref={inputRef}
          />
          <button className="todo-button">Update une tâche</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Ajoutez une tâche"
            value={input}
            name="todoName"
            className="todo-input"
            onChange={(event) => handleChange(event)}
            ref={inputRef}
          />
          <button className="todo-button">Ajoutez une tâche</button>
        </>
      )}
    </form>
  );
}

export default TodoForm
