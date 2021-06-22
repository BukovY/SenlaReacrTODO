import React from 'react';

const AddTask = ({ newTask, taskHandler, addTask}) => {
    return (
        <div>
            <textarea placeholder='Введите задачу' value={newTask} onChange={(event) => taskHandler(event.target.value)}/>
            <button id='done' onClick={() => addTask()}>Done</button>
        </div>
    );
};

export default AddTask;