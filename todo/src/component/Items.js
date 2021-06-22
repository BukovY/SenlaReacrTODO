
const Items = ({ todoToRender, importantHandler, deleteHandler, handlerStatus}) => {

    let todo = todoToRender.map(el =>
        <div key={el.index} onClick={(ev) => handlerStatus(el.index, ev.target)}>
            <p>{el.content}</p>
        <button onClick={() => importantHandler(el.index)}>{el.isImportant && 'NOT IMPORTANT'}{!el.isImportant && 'MARK IMPORTANT'}</button>
        <button onClick={() => deleteHandler(el.index)}>Delete</button>
    </div>)
    return (<div>
        {todo}
    </div>)
};

export default Items;