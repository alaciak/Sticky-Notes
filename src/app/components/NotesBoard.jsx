import React from 'react';
import Note from './Note.jsx';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../Store.jsx';

class NotesBoard extends React.Component {

  render() {
    if(this.props.notesList.length === 0) {
      return null;
    }
    else {
      const noteList = this.props.notesList.map((el, index) => {
        return (
            <Provider store={ store } key={ index }>
              <Note noteId={ el.id }/>
            </Provider>
        );
      });
      return (
        <div className='row'> { noteList }</div>
        )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    notesList: state.notesBoardReducer.notesList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
  };

export default connect(mapStateToProps, mapDispatchToProps)(NotesBoard);
