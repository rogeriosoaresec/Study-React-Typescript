import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './styles.css';

interface ItemTodoStructure {
    Description:string
    DataCreation:string
}

export function ItemTodo({ Description, DataCreation }:ItemTodoStructure) {
    return (
        <div className="itemTodo">
            <div className='itemCol1'>
                <input type="checkbox" name='itemstatus' />
            </div>

            <div className='itemCol2'>
                <strong>{ Description }</strong>
                <span>{ DataCreation }</span>
            </div>

            <div className='itemCol3'>
                <FontAwesomeIcon className='edititem' icon={ faPenToSquare} />
            </div>
        </div>
    )
}