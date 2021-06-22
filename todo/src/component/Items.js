
const Items = ({ todoToRender, importantToggle}) => {

    console.log(todoToRender)
    let todo = todoToRender.map(el => <div><p>{el.content}</p>
        <button onClick={() => importantToggle(el.index)}>{el.isImportant && 'NOT IMPORTANT'}{!el.isImportant && 'MARK IMPORTANT'}</button>
    </div>)
    return (<div>
        {todo}
    </div>)
};

export default Items;