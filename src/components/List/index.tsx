import React from "react";
import { isTemplateExpression } from "typescript";
import style from  './List.module.scss';
import Item from './item';

function List() {
    const tasks = [{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'JavaScript',
        time: '01:30:00'
    }, {
        task: 'TypeScript',
        time: '03:30:00'
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2>Studies of Day</h2>
            <ul>
                {tasks.map((item, index) => (
                   <Item 
                        key={index}
                        {...item}
                   />
                ))}
            </ul>
        </aside>
    )
}

export default List;