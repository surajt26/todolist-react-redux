import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Import some action method from 'todolistAction'
import { selectItem, removeItem } from '../action/todolistAction';
// Import some icons from 'Material-UI' website
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = () => {

    // Being get todolist state from centralize state
    const myState = useSelector((state) => state.todolistReducer.todolist);

    // Dispatch method from 'react-redux'
    const dispatch = useDispatch();

    // Item select action handle
    const selectHandle = (item, itemId) => {
        //selectItem action
        dispatch(selectItem(item, itemId));
        // Remove class to update-row
        document.getElementById('update-row').classList.remove('d-none');
    }

    return (<>
        <div className='row mb-2'>
            <div
                className="col-12  overflow-auto"
                style={{ height: '300px' }}
            >
                {/* Unordered-list */}
                <ul className='list-group list-group-flush'>
                    {
                        // render all item list
                        myState.map((item, itemId) =>
                            <li
                                key={itemId}
                                className='list-group-item'
                            >
                                {/* item */}
                                {item}
                                {/* removeItem action */}
                                <span
                                    onClick={() => dispatch(removeItem(itemId))}
                                    className='change-delete-icon float-right'
                                >
                                    {/* Icons for delete item */}
                                    <span className='delete-outline-icon'>
                                        <DeleteOutlineIcon />
                                    </span>
                                    <span className='delete-icon'>
                                        <DeleteIcon />
                                    </span>
                                </span>
                                {/* selectHandle method */}
                                <span
                                    onClick={() => selectHandle(item, itemId)}
                                    className='change-edit-icon float-right mr-2'
                                >
                                    {/* Icons for edit item */}
                                    <span className='edit-outlined-icon'>
                                        <EditOutlinedIcon />
                                    </span>
                                    <span className='edit-icon'>
                                        <EditIcon />
                                    </span>
                                </span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </>)
}

export default memo(ItemList)