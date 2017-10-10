import React from 'react';
import { removeNote } from '../actions/notesBoardActions';
import { updateNote } from '../actions/notesBoardActions';
import { connect } from 'react-redux';

export class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        id: this.props.noteId,
        text: '',
        background: this.props.note.background
      }
    }
  }

  componentDidMount() {
    this.setState({
      note: {
        ...this.state.note,
        text: this.props.note.text
      }
    });
  }

  handleOnClickRemove = event => {
    this.props.removeNote(this.props.noteId);
  }

  handleOnChangeText = event => {
    this.setState({
      note: {
        ...this.state.note,
        text: event.target.value
      }
    });
  }

  handleOnBlurUpdate = event => {
    this.props.updateNote(this.state.note);
  }

  render() {
    return (
      <div className='col-md-3 note_text'>
        <div className='note_text--textarea' style={{ backgroundColor: this.props.note.background }}>
          <textarea name='textarea' style={{ }} value={ this.state.note.text } onChange={ this.handleOnChangeText } onBlur={ this.handleOnBlurUpdate }></textarea>
          <span style={{ position: 'absolute' }} onClick={ this.handleOnClickRemove }>X</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeNote: (noteId) => {
      dispatch(removeNote(noteId));
    },
    updateNote: (note) => {
      dispatch(updateNote(note))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
