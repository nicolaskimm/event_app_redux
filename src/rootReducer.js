import { combineReducers } from 'redux';
import eventsReducer from './duck/reducers/eventReducer';
import carouselReducer from './duck/reducers/carouselReducer';


const rootReducer = combineReducers({
    events: eventsReducer,
    promotedEvents: carouselReducer,
})

export default rootReducer;