import React from 'react';
import AddNewButton from '../containers/AddNewButton.jsx';
import { Provider } from 'react-redux';
import store from '../Store.jsx';

export class PanelHeading extends React.Component {

  render() {
    return (
      <header>
        <nav className='row'>
          <div className='col-md-12 page-header'>
            <h1>Sticky Notes Board</h1>
          </div>
        </nav>
        <div className='row'>
          <div className='col-md-6'>
            <Provider store={ store }>
              <AddNewButton />
            </Provider>
          </div>
        </div>
    </header>
    );
  }
}
