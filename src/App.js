import React from 'react';
import { Provider, connect } from 'react-redux';
import { Link, BrowserRouter as Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import EventsList from './components/EventsList/EventsList';
import About from './components/About/About';
import './components/Navigation/styles/Navigation.css';
import ClickedEvent from './components/ClickedEvent/ClickedEvent';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const App = ({ store, clickedEvent }) => (
  <Provider store={store}>
    <Switch>
      <div style={styles}>
        <nav className='navigation'>
          <ul className='navigation_list'>
            <li className='navigation_link'>
                <Link className='singlelink' to='/'>Home</Link>
            </li>
            <li className='navigation_link'>
                <Link className='singlelink' to='/about'>about</Link>
            </li>
            <li className='navigation_link'>
                <Link className='singlelink' to='/test'>Test</Link>
            </li>
            <li className='navigation_link'>
                <Link className='singlelink' to='/Wydarzenia'>Events</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={MainPage} />
        <Route path="/wydarzenia" component={EventsList} />
        <Route path="/about" component={About} />
        <Route path={`/events/${clickedEvent}`} component={ClickedEvent} />
      </div>
    </Switch>
  </Provider>
)

const mapStateToProps = state => ({
  clickedEvent: state.events.clickedEvent
})

export default connect(mapStateToProps, null)(App);