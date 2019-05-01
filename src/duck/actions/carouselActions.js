import types from '../types/carouselTypes';

const previousSlide = (index, length) => ({
    type: types.PREVIOUS_SLIDE,
    index: index !== 0 ? index - 1 : length + 1
})

export default {
    previousSlide
}