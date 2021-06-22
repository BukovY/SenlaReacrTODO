const Tabs = ({ typeHandler}) => {
    return (
        <div>
            <button id='all' className='active' onClick={() => typeHandler('all')}>All</button>
            <button id='active' onClick={() => typeHandler('active')}>Active</button>
            <button id='done' onClick={() => typeHandler('done')}>Done</button>
        </div>
    );
};

export default Tabs;