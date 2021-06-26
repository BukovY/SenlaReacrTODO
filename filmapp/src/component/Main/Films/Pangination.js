import React from 'react';
const Pangination = ({selectPage, changePanginationPage, maxPanginationPage}) => {
    let panginationItems = [];

    if (selectPage == 1) {
        panginationItems = [[1,1],['next',2],['end',maxPanginationPage]]
    } else if (selectPage == 2) {
        panginationItems = [['prev',1],[2,2],['next',3],['end',maxPanginationPage]]
    } else if (selectPage > 2 && selectPage < maxPanginationPage - 1) {
        panginationItems = [['first',1],['prev',selectPage - 1],[selectPage,selectPage],['next',selectPage + 1],['end',maxPanginationPage]]
    } else if (selectPage == maxPanginationPage - 1) {
        panginationItems = [['first',1],['prev',selectPage - 1],[selectPage,selectPage],['end',maxPanginationPage]]
    } else if (selectPage == maxPanginationPage) {
        panginationItems = [['first',1],['prev',maxPanginationPage - 1],[selectPage,maxPanginationPage]]
    }

    return (
        <div className='main'>
            {panginationItems.map(el => <button key={el[1]} className={el[1] == selectPage ? 'panginationActive' : 'panginationDef'} onClick={() => changePanginationPage(el[1])}>{el[0]}</button>)}
        </div>
    );
};

export default Pangination;