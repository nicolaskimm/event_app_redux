import eventsReducer from './reducers/eventReducer';
export { default as eventsActions } from './actions/eventActions';

import carouselReducer from './reducers/carouselReducer';
export { default as carouselActions } from './actions/carouselActions';

export default {
    eventsReducer,
    carouselReducer
}