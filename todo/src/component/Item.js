import { Component } from 'react';
import deleteIcon from '../img/Delete.png'
import star from '../img/Star.png'
import starLine from '../img/StarLine.png'

const Item = ({ el, importantHandler, deleteHandler, handlerStatus}) => {

    let important = 'important'
    let importantButton = 'important'
    if(!el.isImportant){
        important = ''
        importantButton += ' active'
    } else {
        importantButton += ' noactive'
    }
    important += ' task'

    let starRender = star
    let textDone = ''
    if(el.status == 'done'){
        starRender = starLine
        textDone = 'done'
    }


    return (
        <div className={important} key={el.index} onClick={(ev) => handlerStatus(el.index, ev.target)} >
            <div className="taskcontent">
                <img src={starRender}/>

                <p className={textDone}>{el.content}</p>
            </div>

            <div className="driveblock">
            <button className={importantButton} onClick={() => importantHandler(el.index)}>{el.isImportant && 'NOT IMPORTANT'}{!el.isImportant && 'MARK IMPORTANT'}</button>
            <button id="delete"  onClick={() => deleteHandler(el.index)}><img  src={deleteIcon}/></button>
            </div>
        </div>
    )
};

export default Item;