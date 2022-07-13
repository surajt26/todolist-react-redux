const initialState = {
    // todolist to render item list
    todolist: ['Dates 1 lb', 'Coconuts 1', 'Bananas 6', 'Apples 1 lb'],
    // updateItem for selected item
    updateItem: {
        updateText: "",
        updateId: null
    }
}

const todolistReducer = (state = initialState, action) => {

    switch (action.type) {

        // Add item for todolist
        case 'addItem': return {
            todolist: [
                action.payload,
                ...state.todolist
            ],
            updateItem: { ...state.updateItem }
        }

        // Remove all item for todolist
        case 'removeAllItem': return {
            todolist: [],
            updateItem: { ...state.updateItem }
        }

        // Select item for updateItem
        case 'selectItem': return {
            todolist: [...state.todolist],
            updateItem: {
                updateText: action.payload.updateText,
                updateId: action.payload.updateId
            }
        }

        // Remove Item for todolist
        case 'removeItem': {
            state.todolist.splice(action.payload, 1);
            return {
                todolist: [...state.todolist],
                updateItem: { ...state.updateItem }
            }
        }

        // Update item for todolist and updateItem
        case 'updateItem': {
            state.todolist.splice(action.payload.updateId, 1, action.payload.updateText);
            return {
                todolist: [...state.todolist],
                updateItem: {
                    updateText: "",
                    updateId: null
                }
            }
        }

        // Cancel update for updateItem
        case 'cancelUpdate': return {
            todolist: [...state.todolist],
            updateItem: {
                updateText: "",
                updateId: null
            }
        }

        default: return state;
    }
}

export default todolistReducer;