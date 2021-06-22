import { Component } from 'react';

const Item = ({ el, importantHandler, deleteHandler, handlerStatus}) => {

    let important = 'important'
    if(!el.isImportant){
        important = ''
    }
    return (
        <div className={important} key={el.index} onClick={(ev) => handlerStatus(el.index, ev.target)} >
            <p>{el.content}</p>
            <button onClick={() => importantHandler(el.index)}>{el.isImportant && 'NOT IMPORTANT'}{!el.isImportant && 'MARK IMPORTANT'}</button>
            <button onClick={() => deleteHandler(el.index)}>Delete</button>
        </div>
    )
};

export default Item;