const Tabs = ({ typeHandler, type}) => {
    return (
        <nav>
            <button className={type == 'all' ? 'active' : ''} onClick={() => typeHandler('all')}>All</button>
            <button className={type == 'active' ? 'active' : ''} onClick={() => typeHandler('active')}>Active</button>
            <button className={type == 'done' ? 'active' : ''} onClick={() => typeHandler('done')}>Done</button>
        </nav>
    );
};

export default Tabs;