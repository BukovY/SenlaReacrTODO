import React, { Component } from 'react';
import Item from "./Item";
const Items = ({ todoToRender, importantHandler, deleteHandler, handlerStatus}) => {

    let todo = todoToRender.map(el => <Item key={el.index} el={el} importantHandler={importantHandler} deleteHandler={deleteHandler} handlerStatus={handlerStatus}/>)
    return (<div>
        {todo}
    </div>)
};

export default Items;