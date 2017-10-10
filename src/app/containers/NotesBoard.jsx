import React from 'react';
import Note from './Note.jsx';
import { connect } from 'react-redux';
import { getNotes } from '../actions/notesBoardActions';
import { Provider } from 'react-redux';
import store from '../Store.jsx';

export class NotesBoard extends React.Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    if(this.props.notesList.length === 0) {
      return null;
    } else if(this.props.loading) {
      return null;
    } else {
        const noteList = this.props.notesList.map(el => {
          return (
              <Provider store={ store } key={ el.id }>
                <Note noteId={ el.id } note={ el }/>
              </Provider>
          );
        });
        return (
          <div className='row'> { noteList }</div>
          );
      }
    }
  }


const mapStateToProps = (state) => {
  return {
    notesList: state.notesBoardReducer.notesList,
    loading: state.notesBoardReducer.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNotes: () => {
      dispatch(getNotes())
    }
  }
  };

export default connect(mapStateToProps, mapDispatchToProps)(NotesBoard);
