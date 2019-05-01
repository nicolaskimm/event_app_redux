import { combineReducers } from 'redux';
import eventsReducer from './duck/reducers/eventReducer';
import { reducer as formReducer } from 'redux-form';
import carouselReducer from './duck/reducers/carouselReducer';


const rootReducer = combineReducers({
    events: eventsReducer,
    promotedEvents: carouselReducer,
    form: formReducer
})

export default rootReducer;