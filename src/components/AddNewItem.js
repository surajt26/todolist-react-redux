import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
// Import some actions method from 'todolistAction'
import { addItem, removeAllItem } from '../action/todolistAction';

//Style for text input, add button, remove all button
const boxShadow = {
    boxShadow: 'none',
    WebkitBoxShadow: 'none'
};
//Style for update button, cancel button
const btnWidth = { width: '100%' };

const AddNewItem = () => {

    // useState for store new item
    const [item, setItem] = useState('');

    // Dispatch method from 'react-redux'
    const dispatch = useDispatch();

    // Add new item action handle
    const handleForm = (e) => {
        // Stop default event behaviour
        e.preventDefault();
        // Trim all white space from both side
        const trimUpdateText = item.trim();
        if (trimUpdateText !== '') {
            // Add item action
            dispatch(addItem(trimUpdateText));
            setItem('');
        }
    }

    // Remove all list action handle
    const removeAllHandle = (e) => {
        // Stop default event behaviour
        e.preventDefault();
        // Remove all item action
        dispatch(removeAllItem());
    }

    return (<>
        <div className="row">
            <div className="col-12">
                {/* Form start */}
                <form
                    className='form-group my-auto'
                    onSubmit={handleForm}
                >
                    <div className='row mb-3'>
                        <div className='col-12'>
                            {/* Input to take new item */}
                            <input
                                className='form-control text-center border'
                                style={boxShadow}
                                type="text"
                                value={item} onChange={(e) => setItem(e.target.value)}
                                maxLength='16'
                                placeholder='Write Here !!'
                                required
                            />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className="col-5 col-sm-4 p-0 mr-2">
                            {/* Add new item action button */}
                            <input
                                className='btn btn-light border addBtn'
                                style={{ ...boxShadow, ...btnWidth }}
                                type="submit"
                                value="Add Item"
                            />
                        </div>
                        <div className='col-5 col-sm-4 p-0'>
                            {/* Remove all list action button */}
                            <button
                                className='btn btn-light border removeAllBtn'
                                style={{ ...boxShadow, ...btnWidth }}
                                onClick={removeAllHandle}
                            >Remove All</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {/* Horizontal line */}
        <hr className='mb-2' />
    </>)
}

export default memo(AddNewItem);