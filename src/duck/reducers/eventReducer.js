import uuidv5 from 'uuid';
import types from '../types/eventTypes';

const INITIAL_STATE = {
    eventsList: [
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
        {
          id: 4,
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
          id: 5,
          imgUrl: 'https://images.pexels.com/photos/1736222/pexels-photo-1736222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Mirosław Bałka',
          description: 'xyz',
          place: 'MOCAK',
          city: 'Kraków',
          street: 'ul. Lipowa 4',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'sztuka',
        }
    ],
    openDialog: false
}

const eventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.RESET_EVENTS: {
        return {
          ...state, eventsList: []
        }
      }

      case types.ADD_EVENT: {
        return {
          ...state, 
          eventsList: [...state.eventsList, action.payload],
          openDialog: false
        }
      }

      case types.CLOSE_DIALOG: {
        return {
          ...state, 
          openDialog: false
        }
      }

      case types.OPEN_DIALOG: {
        return {
          ...state, 
          openDialog: true
        }
      }
      
      default: return state;
    }
}

export default eventsReducer;