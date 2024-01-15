import React, {useState} from "react"

function TodoListly(){

    const [tasks, setTasks] = useState(["Go to the gym", "Visit a friend", "Goo to the zoo"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function removeTask(index){
        const updatedTasks = tasks.filter((_, i ) => i !== index);
       setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return( <>
                <div className="to-do-list">
                    <h1>Todo List</h1>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Enter a task..."
                            value={newTask}
                            onChange={handleInputChange}
                        />
                        <button
                            className="add-button"
                            onClick={addTask}>
                            Add Task
                        </button>
                    </div>

                    <ol>
                        {tasks.map((task, index) => 
                            <li key={index}>
                                <span 
                                    className="text"
                                    >
                                        {task}
                                </span>

                                <button
                                    className="delete-btn"
                                    onClick={() => removeTask(index)}>
                                    Delete
                                </button>

                                <button
                                    className="move-btn"
                                    onClick={() => moveTaskUp(index)}>
                                    👆
                                </button>

                                <button
                                    className="move-btn"
                                    onClick={() => moveTaskDown(index)}>
                                    👇
                                </button>
                            </li>)}
                    </ol>
                </div>
            </>)
}

export default TodoListly