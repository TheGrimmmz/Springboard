import React, {useState} from "react"

function NewTodoForm({createTodo}){
    const [task, settask] = useState('');

    function handleChange(e){
        settask(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        createTodo(task);
        settask('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task</label>
                <input name="task" type="text" onChange={handleChange} value={task}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewTodoForm;
