import React, { useState } from "react";
import { isTemplateExpression } from "typescript";
import style from  './List.module.scss';
import Item from './item';

function List() {
    const [tasks, setTasks] = useState([{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'Typescript',
        time: '02:30:00'
    }, {
        task: 'Javascript',
        time: '01:00:00'
    }
    ])
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTasks([...tasks, { task: "Teste", time: "01:00:30"}])
            }}>Studies of Day</h2>
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