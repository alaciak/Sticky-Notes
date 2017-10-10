import React from 'react';
import { addNote } from '../actions/notesBoardActions';
import { connect } from 'react-redux';

class AddNewButton extends React.Component {

  handleOnClickAdd = event => {
    event.preventDefault();
    this.props.addNote();
  }

  render() {
    return (
      <button type='button' className='btn btn-primary btn-add' onClick={ this.handleOnClickAdd } >Add Note</button>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => {
      dispatch(addNote(note));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewButton);
