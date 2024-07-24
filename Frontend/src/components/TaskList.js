import React from 'react';
import axios from 'axios';

const TaskList = ({ tasks, fetchTasks }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        fetchTasks();
    };

    const handleStatusChange = async (id, status) => {
        await axios.put(`http://localhost:5000/api/tasks/${id}`, { status });
        fetchTasks();
    };

    return (
        <ul>
            {tasks.map(task => (
                <li key={task._id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <select value={task.status} onChange={(e) => handleStatusChange(task._id, e.target.value)}>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                    <button onClick={() => handleDelete(task._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
