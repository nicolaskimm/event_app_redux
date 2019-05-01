import uuidv5 from 'uuid';
import types from '../types/carouselTypes';

const INITIAL_STATE = {
    promotedEventsList: [
        {
          id: uuidv5(),
          imgUrl: 'https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Nick Cave',
          description: 'xyz',
          place: 'Torwar',
          city: 'Warszawa',
          street: 'ul. Łazienkowska 6a',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'muzyka',
        },
        {
          id: 2,
          imgUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Red Hot Chilli Peppers',
          description: 'xyz',
          place: 'Klub Harenda',
          city: 'Warszawa',
          street: 'ul. Krakowskie Przedmieście 4',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'muzyka',
        },
        {
          id: 3,
          imgUrl: 'https://images.pexels.com/photos/1736222/pexels-photo-1736222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Mirosław Bałka',
          description: 'xyz',
          place: 'MOCAK',
          city: 'Kraków',
          street: 'ul. Lipowa 4',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'sztuka',
        },
    ],
    currentImageIndex: 1,
}

const carouselReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.PREVIOUS_SLIDE: {
            return {
                ...state, currentImageIndex: action.index
            }
        }
        
        default: return state;
    }
}

export default carouselReducer;