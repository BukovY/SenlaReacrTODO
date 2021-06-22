import React from 'react';

const AddTask = ({ newTask, taskHandler, addTask}) => {
    return (
        <div className="addpost">
            <p>New Task</p>
            <textarea placeholder='Введите задачу' value={newTask} onChange={(event) => taskHandler(event.target.value)}/>
            <button className="add" onClick={() => addTask()} disabled={!newTask}>ADD</button>
        </div>
    );
};

export default AddTask;