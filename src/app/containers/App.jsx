import React from 'react';
import NotesBoard from './NotesBoard.jsx';
import { PanelHeading } from '../components/PanelHeading.jsx';
import { Provider } from 'react-redux';
import store from '../Store.jsx';


export class App extends React.Component {

  render() {

    return (
      <div className='container'>
        <PanelHeading />
        <Provider store={ store }>
          <NotesBoard />
        </Provider>
      </div>
    );
  }
}
