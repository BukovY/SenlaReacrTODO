import React from 'react';
/*
// передаем праницу которую сделать активной и максимальное количество страниц, пр  этом максимальное количество страниц 15, для отображения максимум 5
function renderPanginationHTML(num, maxPage, div) {
    let forRender = []
    num = Number(num)
    if (num == 1) {
        forRender = {
            buttonName: [1, 'next', 'end'],
            buttonValue: [1, 2, maxPage],
            classCss: ['panginationActive', 'panginationDef', 'panginationDef']
        }

    } else if (num == 2) {
        forRender = {
            buttonName: ['prev', 2, 'next', 'end'],
            buttonValue: [1, 2, 3, maxPage],
            classCss: ['panginationDef', 'panginationActive', 'panginationDef', 'panginationDef']
        }

    } else if (num > 2 && num < maxPage - 1) {
        forRender = {
            buttonName: ['first', 'prev', num, 'next', 'end'],
            buttonValue: [1, num - 1, num, num + 1, maxPage],
            classCss: ['panginationDef', 'panginationDef', 'panginationActive', 'panginationDef', 'panginationDef']
        }


    } else if (num == maxPage - 1) {
        forRender = {
            buttonName: ['first', 'prev', num, 'end'],
            buttonValue: [1, num - 1, num, maxPage],
            classCss: ['panginationDef', 'panginationDef', 'panginationActive', 'panginationDef']
        }

    } else if (num == maxPage) {
        forRender = {
            buttonName: ['first', 'prev', num],
            buttonValue: [1, maxPage - 1, maxPage],
            classCss: ['panginationDef', 'panginationDef', 'panginationActive']
        }
    }
    let render = '';
    for (let i = 0; i < forRender.buttonName.length; i++) {
        render += renderPanginationItem(forRender.buttonName[i], forRender.buttonValue[i], forRender.classCss[i])
    }

    document.getElementById(div).innerHTML = render;

    document.getElementById(state.divRender.panginationDiv).addEventListener('click', function(ev) {
        // получили индекс
        let target = ev.target;
        if (target.tagName === 'BUTTON') {
            state.selectPage = target.getAttribute('page')
            renderPanginationHTML(state.selectPage, state.maxPage, state.divRender.panginationDiv)
        }
        inicialize(state);
    }, false);
}
// передаем номер пангинации и что написать на кнопке и аргумент класс дизайна
function renderPanginationItem(name, value, classCss) {
    return `<button class="${classCss}" id="pangination" page="${value}">${name}</button>`
}
 */
const Pangination = ({selectPage, changePanginationPage, maxPanginationPage}) => {
    return (
        <div className='main'>
            <p>Pangination</p>
        </div>
    );
};

export default Pangination;