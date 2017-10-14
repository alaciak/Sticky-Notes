import React from 'react';
import { addNote } from '../actions/notesBoardActions';
import { connect } from 'react-redux';

export class AddNewButton extends React.Component {

  handleOnClickAdd = event => {
    event.preventDefault();
    this.props.addNote(this.props.notesList.length);
  }

  render() {
    return (
      <div className='row'>
        <button type='button' className='btn btn-primary btn-add' onClick={ this.handleOnClickAdd }>Add Note</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notesList: state.notesBoardReducer.notesList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (index) => {
      dispatch(addNote(index));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewButton);
