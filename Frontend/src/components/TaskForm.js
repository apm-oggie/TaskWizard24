import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return alert('Title is required');
        
        await axios.post('http://localhost:5000/api/tasks', { title, description, status });
        fetchTasks();
        setTitle('');
        setDescription('');
        setStatus('To Do');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description" />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
