import types from '../types/eventTypes';

const reset  = () => ({
    type: types.RESET_EVENTS
})

const add = (event) => ({
    type: types.ADD_EVENT,
    payload: event
})

export default {
    reset,
    add
}