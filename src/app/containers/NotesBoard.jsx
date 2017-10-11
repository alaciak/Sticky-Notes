import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note.jsx';
import { connect } from 'react-redux';
import { getNotes, moveNote } from '../actions/notesBoardActions';
import { Provider } from 'react-redux';
import store from '../Store.jsx';
import AlertContainer from 'react-alert';

const types = {
  note: 'note'
};

export class NotesBoard extends React.Component {
  alertOptions = {
    offset: 10,
    position: 'bottom left',
    theme: 'dark',
    transition: 'scale'
  };

  componentDidMount() {
    this.props.getNotes();
  }

  handleShowAlert = event => {
    this.msg.show('All Changes Saved', {
      time: 1000,
      type: 'success'
    });
  }

  render() {
    const { isOver, canDrop, connectDropTarget } = this.props;
    if(this.props.notesList.length === 0) {
      return null;
    } else if(this.props.loading) {
      return null;
    } else {
        const noteList = this.props.notesList.map((el, index) => {
          return (
              <Provider store={ store } key={ el.id }>
                <Note noteId={ el.id } note={ el } showAlert={ this.handleShowAlert} index={ index }/>
              </Provider>
          );
        });
        return (
          <div className='row'>
            { noteList }
            <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
          </div>
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
