// Add item to todolist
export const addItem = (text) => {
    return {
        type: 'addItem',
        payload: text
    }
}

// Remove all item to todolist
export const removeAllItem = () => {
    return {
        type: 'removeAllItem'
    }
}


// Select item to updateItem
export const selectItem = (cv, id) => {
    return {
        type: 'selectItem',
        payload: {
            updateText: cv,
            updateId: id
        }
    }
}

// Remove item to todolist
export const removeItem = (id) => {
    return {
        type: 'removeItem',
        payload: id
    }
}

// Update item to updateItem
export const updateItem = (updateText, updateId) => {
    return {
        type: 'updateItem',
        payload: {
            updateText: updateText,
            updateId: updateId
        }
    }
}

// Cancel update to updateItem
export const cancelUpdate = () => {
    return {
        type: 'cancelUpdate'
    }
}