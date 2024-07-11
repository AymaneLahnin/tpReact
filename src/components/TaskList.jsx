import React, { useState } from 'react';
import './TaskListStyle.css'; 

const TaskList = (props) => {
    // Use state with arrays
    const [tasks, setTasks] = useState([
        { id: 78, description: "task1", taskStatus: true },
        { id: 45, description: "task2", taskStatus: false },
        { id: 79, description: "task3", taskStatus: true }
    ]);

    // Conditional templates
    const [show, setShow] = useState(true);

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id));
        console.log(tasks.filter(task => task.id !== id));
    }

    return (
        <div className="taskList">
            <h1 className="header">TASKS {props.yohoho}</h1>
            <ul className="taskList">
                <button className="trigger" onClick={() => setShow(!show)}>toggle</button>
                {show && tasks.map((task) => (
                    <li key={task.id} className={`taskItem ${task.taskStatus ? 'done' : 'notYet'} anotherClass`}>
                        <span>{task.id} - {task.description}</span>
                        <button onClick={() => handleDelete(task.id)} className="deleteButton">
                            delete
                        </button>
                    </li>
                ))}
            </ul>
            </div>
    );
};

export default TaskList;
