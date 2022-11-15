import { useEffect, useState } from "react";
import { ItemTodo } from '../../componets/ItemTodo'
import './styles.css'

type ItemTodoStructure = {
    Id:number
    Description:string
    DataCreation:string
}
type UselessTip = {
    text:string
}

export function Todo() {

    const [todoDesc, setTodoDesc] = useState('');
    const [todoItems, setTodosItens] = useState<ItemTodoStructure[]>([]);
    const [idTask, setIdTask] = useState(-1);
    const [uselessTip, setUselessTip] = useState<UselessTip>();

    function handleAddTask() {
        let newTask:ItemTodoStructure = {
            Id: idTask,
            Description : todoDesc,
            DataCreation : new Date().toUTCString()
        }

        setTodosItens(prevState => [...prevState, newTask]);
    }

    useEffect(() => { 
        setIdTask(preState => preState + 1);
    }, [todoItems]);

    useEffect(() => {
        const urlapi = 'https://uselessfacts.jsph.pl/random.json?language=en';
        fetch(urlapi)
            .then(response => response.json())
            .then(function(data:UselessTip) {
                setUselessTip(data);
            });
    },[])

    return (
        <div className='container'>
            <h1>To-do list</h1>
            <em>{uselessTip?.text}</em>
            <input onChange={e => setTodoDesc(e.target.value) } type="text" name="todotext" id="todotext" placeholder='Todo text to add...' />
            <div>
                Task to add: <span style={{ fontStyle: 'italic' } }>{ todoDesc }</span>
            </div>
            <button onClick={handleAddTask}>Add to-do</button>
            
            <div className='todoList'>
                {
                    todoItems.map(item => <ItemTodo key={ item.Id } Description={ item.Description } DataCreation={ item.DataCreation } />)
                }
            </div>

        </div>
    )
}