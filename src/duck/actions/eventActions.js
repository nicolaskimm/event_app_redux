import types from '../types/eventTypes';

const reset  = () => ({
    type: types.RESET_EVENTS
})

const add = (event) => ({
    type: types.ADD_EVENT,
    payload: event
})

const openDialog = () => ({
    type: types.OPEN_DIALOG,
})

const closeDialog = () => ({
    type: types.CLOSE_DIALOG,
})

const openSingleEvent = (id) => ({
    type: types.OPEN_SINGLE_EVENT,
    payload: id
})

export default {
    reset,
    add,
    openDialog,
    closeDialog,
    openSingleEvent
}