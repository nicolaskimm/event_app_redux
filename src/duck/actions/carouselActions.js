import types from '../types/carouselTypes';

const moveSlide = (index) => ({
    type: types.MOVE_SLIDE,
    index: index
})

export default {
    moveSlide
}